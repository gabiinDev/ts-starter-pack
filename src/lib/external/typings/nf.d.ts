interface Validation {

  init(): void;
  init(form: string) : void;
  reset(form: string): void;

  validate(): boolean;

  validate(formId: string, elementName: string): boolean;
  validate(formId: string): boolean;

  isValid(): boolean;
  isValid(form: string): boolean;

  showErrors(form: string, errors: any): void

  Field: FieldValidation;

  Form: any;
}

interface FieldValidation {
  validate(form: string, field: string): boolean;
  reset(form: string, field: string, resetValue?: any): void;
  validateDisabled(form: string, field: string): void;
  validateEnabled(form: string, field: string): void;
  addField(form: string, field: string, options?: any): Object
  removeField(form: string, field: string): Object
  isValid(form: string, field: string): boolean;
}

interface Upload {
  apply(context?: string): void;
  enable(): void;
  disable(): void;
  reset(element: any): void;
}

interface WaypointStatic {
  Sticky(object: any): void;
}

interface NatalStatic {
  Validation: Validation;
  Notification: any;
  BlockUI: any;
  Input: any;
  utils: utils;
  Numeral: Numeral;
  Upload: Upload;
  Autocomplete: ACInterface;
  Elements: Elements;
  Checks: Checks;
  TextEditor: TextEditor;
  Datepicker: DatePicker;
  Table: TableInterface;
  Menu: Menu;
  Slider: SliderInterface;
  UI: any;
  Chart: ChartInterface;
  //applyBindings: (controllerType: { new(any?) }, rootId?: string) => any;
}

interface ACInterface {
  Result: {
      TAGS: "tags",
      STANDARD: "standard"
  },
  Selection: {
      TAGS: "tags",
      STANDARD: "standard"
  },
  rest(config: Object): any,
  url(config: Object): any
}
interface UIInterface {
  Element: {
      block(elem: "string"): void,
      blockCustom(elem: "string", conf: "object"): void,
      unblock(elem: "string"): void
  },
  Page: {
      block(): void,
      blockCustom(conf: "object"): void,
      unblock(): void
  }
}
interface ChartInterface {
  Type: {
      LINE: "line",
      BAR: "bar",
      PIE: "pie",
      AREA: "area",
      COLUMN: "column",
      SCATTER: "scatter"
  }
}
declare enum NotificationType{
  INFO = "info",
  SUCCESS = "success",
  ERROR = "error",
  NOTICE = "notice"
}
interface NotificationInterface {
  Type: NotificationType,
  Positions: {
      TOP_LEFT: {},
      TOP_RIGHT: {},
      BOTTOM_LEFT: {},
      BOTTOM_RIGHT: {},
      BAR_TOP: {},
      BAR_BOTTOM: {}
  },
  show(conf: Object): any,
  removeAll(): any
}
interface SliderInterface {
  Block: {
      NONE: "none",
      Left: "left",
      right: "right"
  }
}
interface TableInterface {
  MultiSelect: MultiSelectInterface;
  Column: ColumnInterface;
  Mode: {
      FULL: "full",
      STANDARD: "standard",
      LIGHT: "light"
  },
  Select: {
      MULTI: "multi",
      SINGLE: "single",
      NONE: "none"
  }
}

interface DatePicker {
  enable(element: JQuery): void;
  disable(element: JQuery): void;
  setRange(selector: any, minDate: any, maxDate: any): any;
  update(element: any, value: any): any;
  disabledDates(receiveddate: string, array: string[]): any

}

interface ColumnInterface {
  hide(table: any, columnId: any): any;
  show(table: any, columnId: any): any;
}

interface MultiSelectInterface {
  selectNone(table: any): any;
  selectAll(table: any): any;
  selectByQuery(table: any, query: any): any
  count(table: any): any;
  getSelected(table: any): any;
}


interface Elements {
  enable(form: any): any;
  disable(form: any): any;
  readOnly(form: any): any;
}

interface utils {
  debounce(fn: any, delay: number): any;
}

interface Numeral {
  (num: number): NumeralInteface;
  language(lang: string, opt: any): any;
  language(lang: string): any;
  language(): any


}

interface TextEditor {
  enable(element: JQuery): any;
  disable(element: JQuery): any;
  init(element: any, displayOptions: any, value: any): any;
  Mode: {
      FULL: "full",
      BASIC: "basic",
      NONE: "none"
  }
}


interface Checks {
  checkAll(parent: string): any;
  uncheckAll(parent: string): any;
  disableAll(parent: string): any;
  enableAll(parent: string): any;
}

interface NumeralInteface {
  format(format: string): string;
  add(num: number): number;
  set(num: number): number;
  difference(num: number): number;
  language(lang: string, options: any): any;
}

interface Menu {
  getFavorites(selector: string): any;
  setFavorites(selector: string, favorites: any): any;
}

declare const NF: NatalStatic;
declare const numeral: Numeral;
declare const Waypoint: WaypointStatic;
declare const Vue: any;