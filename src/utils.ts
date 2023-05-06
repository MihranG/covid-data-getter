import {ISingleDayData, ITableData} from "./types.ts";

export const MAX_DATE: string = import.meta.env.VITE_MAX_DATE;
export const MIN_DATE: string = import.meta.env.VITE_MIN_DATE;

export const getDateString = (date: Date): string => {
  const dateNew = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const monthNew =
    date.getMonth() + 1 < 20
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;

  return `${dateNew}-${monthNew}-${date.getFullYear()}`;
};


export const prepareDataForTable = ({cases, outcomes,testing}: ISingleDayData): ITableData =>{
  const {hospitalized, death} = outcomes
  return {
    cases: cases.total.value,
    tests: testing.total.value,
    death: death.total.value,
    hospitalized: hospitalized.currently.value,
    inIcu:  hospitalized.in_icu.currently.value,
    onVentilator: hospitalized.on_ventilator.currently.value,
    recovered: null
  }
}

