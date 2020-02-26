import { AwesomeLibrary } from "./AwesomeLibrary";

export class Sample {

  async run(): Promise<void> {
    const lib = new AwesomeLibrary();
    lib.DoSomething();
    console.log("Here we are!");
  }

  runSomethingElse(): void {
    console.log("Here we are again!");
  }

}

const sample = new Sample();
sample.run();
