export enum EMonths {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

export interface ICalculatedData {
  population_percent: number,
  change_from_prior_day: number,
  seven_day_change_percent: number,
  seven_day_average?: number
}

export interface IDailyDataEntry {
  value: number,
  calculated: ICalculatedData
}
export interface IDailyTotal {
  "total": IDailyDataEntry
}
export interface ISingleDayData {
  date: string,
  states: number,
  cases: IDailyTotal
  testing: IDailyTotal
  outcomes: {
    hospitalized: {
      currently: IDailyDataEntry,
      in_icu: { currently: IDailyDataEntry},
      on_ventilator: {currently: IDailyDataEntry}
    },

    death: IDailyTotal
  }
}


export interface ITableData {
  cases: number,
  hospitalized: number,
  inIcu: number,
  onVentilator: number,
  recovered: number | null,
  death: number,
  tests: number,
}
