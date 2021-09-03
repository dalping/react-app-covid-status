import React from 'react'
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Contents() {

    const [confirmedData, setConfirmedData] = useState({});
    const [quarantinedData,setQuarantinedData] = useState({});
    const [comparedData,setComparedData] = useState({});

    useEffect(()=>{

        const fetchEvent = async() =>{
            const res = await axios.get("https://api.covid19api.com/total/dayone/country/kr");
            makeData(res.data)
        }

        const makeData = (items) => { //데이터 가공
            let arr = items.reduce((acc, cur) => {
                const currentDate = new Date(cur.Date);
                const year = currentDate.getFullYear();
                const month = currentDate.getMonth();
                const date = currentDate.getDate();
                const confirmed = cur.Confirmed;
                const active = cur.Active;
                const death = cur.Deaths;
                const recovered = cur.Recovered;

                const findItem = acc.find( a => a.year === year && a.month === month);

                if(!findItem){ //연이나 달이 바뀜
                    acc.push({year,month,date,confirmed,active,death,recovered});
                }

                if(findItem && findItem.date < date){ //현재 데이터가 전보다 최신인가?
                    findItem.active = active;
                    findItem.death = death;
                    findItem.date = date;
                    findItem.year = year;
                    findItem.month = month;
                    findItem.recovered = recovered;
                    findItem.confirmed = confirmed;
                }
                return acc;
            },[])

            //2021년 데이터만 가져오기
            arr = arr.filter(a => (a.year === 2021));
            const labels = arr.map(a=>`${a.month+1}월`)

            setConfirmedData({
                labels : labels,
                datasets : [
                    {
                    label : "국내 누적 확진자",
                    backgroundColor: "salmon",
                    fill : true,
                    data: arr.map(a=>(a.confirmed))
                    },
                ]
            });
        

        setQuarantinedData({
                labels : labels,
                datasets : [
                    {
                    label : "월별 격리자 현황",
                    borderColor : "green",
                    fill : false,
                    data: arr.map(a=>(a.active))
                    },
                ]
            });

        const last = arr[arr.length - 1]
        setComparedData({
            labels : ["확진자","격리해제","사망"],
            datasets : [
                {
                label : "누적 확진, 해제, 사망 비율",
                backgroundColor:["#ff3d67","#059bff","ffc233"],
                bordergroundColor:["#ff3d67","#059bff","ffc233"],
                fill : false,
                data: [last.confirmed, last.recovered, last.death]
                },
            ]
        });

        }
        fetchEvent();
    },[])

    return (
        <section>
            <h2>2021 국내 코로나 현황</h2>
            <div className="contents">
                    <div>
                        <Bar data={confirmedData} options={
                            {title : {display:true, text:"누적 확진자 추이", fontSize:16}},
                            {legend : {display:true, position:"bottom"}}
                        }></Bar>
                    </div>
                    <div>
                        <Line data={quarantinedData} options={
                            {title : {display:true, text:"월별 격리자 현황", fontSize:16}},
                            {legend : {display:true, position:"bottom"}}
                        }></Line>
                    </div>
                    <div>
                        <Doughnut data={comparedData} options={
                            {title : {display:true, text:`누적 확진, 해제, 사망 (${new Date().getMonth() + 1}월)`, fontSize:16}},
                            {legend : {display:true, position:"bottom"}}
                        }></Doughnut>
                    </div>
            </div>
        </section>
    )
}

export default Contents