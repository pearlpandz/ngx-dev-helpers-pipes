## Sort Array Pipe

This Pipe will help you to sort your ***array/array of objects***, 

```typescript
export class AppComponent {
  buckets = [
      {
      id: 4,
      name: 'test 4',
      group: 'bucket group 4'
    },
    {
      id: 2,
      name: 'test 2',
      group: 'bucket group 2'
    },
    {
      id: 1,
      name: 'test 1',
      group: 'bucket group 1'
    },    
    {
      id: 3,
      name: 'test 3',
      group: 'bucket group 3'
    }    
  ]
}
```

In **app.component.ts** we have *bucket* array variable, If that array need to sort by bucket names,

##### Example 1
``` html
<!-- Sort Array of Object by field 'name' -->
<h1>{{buckets | sortBy: 'name'}} </h1>
```
```typescript
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
    }    
]
```

##### Example 2

``` html
<!-- Sort Array -->
<h2>{{ [7,1,2,3,4] | sortBy  }}</h2> 
```

``` typescript
[1,2,3,4,7]
```

