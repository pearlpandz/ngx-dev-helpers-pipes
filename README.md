# Angular Pipes (ng-pipes)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-red.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## 1. Array to String Transform Pipe

This Pipe will help you to transfor your ***array/array of objects*** to string, 

```typescript
export class AppComponent {
  buckets = [
    {
      id: 1,
      name: 'test 1',
      group: 'bucket group 1'
    },
    {
      id: 2,
      name: 'test 2',
      group: 'bucket group 2'
    },
    {
      id: 3,
      name: 'test 3',
      group: 'bucket group 3'
    },
    {
      id: 4,
      name: 'test 4',
      group: 'bucket group 4'
    },
  ]
}
```

In **app.component.ts** we have *bucket* array variable, If that array need to transform as string like bucket names => test 1, test 2, test 3


``` html
<!-- Array of Object to String -->
<h1>{{buckets | NgArray2String: 'name'}} </h1>


<!-- Array to String -->
<h2>{{ [1,2,3,4] | NgArray2String  }}</h2> 

```


## Instruction for Contribution 🤝
- Fork this Repository using the button at the top
- Clone your forked repository to your pc ( git clone ```'git@github.com:pearlpandz/ng-pipes.git'```)
- Create a new branch for your modifications (ie. `git branch NEW_BRANCH` and check it out `git checkout NEW_BRANCH` and `git checkout -b NEW BRANCH`)
- Run ```npm``` from inside the cloned project and run ```npm start``` after the previous command execution.
- Add the issues/new pipes info to the https://github.com/pearlpandz/ng-pipes/issues
- Add your files (`git add -A`), commit (`git commit -m "added myself"`) and push (`git push origin dev`)
- Create a pull request to the `dev` branch
- Star this repository


## Contributors 👨‍💻👩‍💻

Thanks for contributing to make this open source

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://dribbble.com/pearlpandz"><img src="https://avatars2.githubusercontent.com/u/12746886?v=4" width="100px;" alt=""/><br /><sub><b>Muthupandi V</b></sub></a><br /><a href="https://github.com/pearlpandz" title="Initiator & Developer">👨‍💻</a></td>
  </tr>
</table>
