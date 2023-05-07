import { fetchLastWeekTransactions } from '@/redux/slices/crypto/lastWeekTransactions';
import { TAppDispatch, TRootState } from '@/redux/store/store';
import { ICrypto_weekTransactions } from '@/types/crypto.types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';


const LastWeekTrasactions = () => {
  
  const CustomLabel = ({ x, y, width, value }: { x: any, y: any, width: any, value: any }) => (
    <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{value}</text>
  );

  const dispatch = useDispatch<TAppDispatch>()
  const { data } = useSelector<TRootState>(state => state.lastWeekTrasactions) as ICrypto_weekTransactions


  useEffect(() => {
    dispatch(fetchLastWeekTransactions())
  }, [])


  return (
    <ResponsiveContainer width="99%" height="100%">
      <BarChart
        width={10}
        height={300}
        data={data || []}
        cx={0}
        cy={0}
        innerRadius={20}
        outerRadius={50}

        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis tickMargin={10} axisLine={false} tick={false} />
        <YAxis tickMargin={45} tickFormatter={(value) => new Intl.NumberFormat('fa-IR').format(value)} axisLine={false} />
        <CartesianGrid strokeDasharray="3 3" vertical={false} />

        {/* <Bar dataKey="1" radius={5} fill="#8884d8" label={<CustomLabel x value width y/>} /> */}
        <Bar dataKey="1" radius={5} fill="#388AEA" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default LastWeekTrasactions;
