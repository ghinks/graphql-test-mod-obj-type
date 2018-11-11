# test code to demonstrate issue associated with error message

## description

If you create an npm module and export a graphql object type as defined in the
graphql-js module. You will get the following message if the module itself has
graphql as a depenedency.

```
Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.
```

It was found that creating a module without the graphql dependency would
not throw this issue.

