## Array to String Transform Pipe

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

##### Example 1

``` html
<!-- Array of Object to String -->
<p>{{buckets | toString: 'name'}} </p>

test 1, test 2, test 3, test 3
```


##### Example 2
``` html
<!-- Array to String -->
<h2>{{ [1,2,3,4] | toString  }}</h2> 

1,2,3,4
```