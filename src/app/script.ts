export class Script {
  scripttext: string | undefined;
  constructor() {
    this.scripttext = "Vengo de un archivo Typescript";
  }

  printtext(): string | undefined {
    return this.scripttext;
  }
}
