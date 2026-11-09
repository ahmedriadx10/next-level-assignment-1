function multiplyValue(value: number, multiplier = 2): number {
  return value * multiplier;
}

function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLocaleLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    if (value) {
      return "Active";
    }
    return "Inactive";
  }
}

function formatCoordinate(
  coordinateData: readonly [
    latitude: number,
    longitude: number,
    locationName: string,
  ],
): string {
  const [lattitude, longitude, locationName] = coordinateData;

  return `Location: ${locationName} (${lattitude},${longitude})`;
}



function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}



interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(
  coursesData: Course[],
  minStudents: number,
): Course[] {
  const filteredCourses = coursesData.filter(
    (x) => x.isPublished && x.students >= minStudents,
  );

  return filteredCourses;
}



function pluckValues<T, K extends keyof T>(objData: T[], objKey: K): T[K][] {
  const valueContainer = objData.map((obj) => obj[objKey]);

  return valueContainer;
}



class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}


async function validateAgeAsync(age: number):Promise<string> {
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  }

  return new Promise((resolve) => {
    setTimeout(() => resolve("Access Granted"), 1000);
  });
}
