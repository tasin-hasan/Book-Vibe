"use client";
import { BookContext } from "@/context/BookContext";
import { IBookType } from "@/types/books.type";
import React, { useContext } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  BarShapeProps,
  LabelList,
  Label,
  LabelProps,
  Tooltip,
} from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "black",
];

// #region Sample data

// #endregion
const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[index % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke={color}
      fill={color}
      style={{
        transition: "stroke-width 0.3s ease-out",
      }}
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length];
  return <Label {...props} fill={fill} />;
};

const PagesRead = () => {
  const { readBooks } = useContext(BookContext);

  const data = readBooks.map((book: IBookType, index: number) => {
    return {
      name: book.bookName,
      uv: book.totalPages,
      pv: index + 1,
      amt: index + 1,
    };
  });

  return (
    <div className="max-w-7xl mx-auto flex items-center justify-center min-h-screen px-4">
      {readBooks.length > 0 ? (
        <BarChart
          width={700}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 10,
            bottom: 60,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <XAxis dataKey="name" angle={-25} textAnchor="end" interval={0} />
          <YAxis />
          <Bar dataKey="uv" shape={TriangleBar}>
            <LabelList content={CustomColorLabel} position="top" />
          </Bar>
        </BarChart>
      ) : (
        <p className="text-center text-2xl bg-amber-100 p-6 rounded-xl font-bold">
          No Read Books Found
        </p>
      )}
    </div>
  );
};

export default PagesRead;
