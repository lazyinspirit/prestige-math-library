# Step 2: native batch-group assignment

Step 2 runs a bounded deterministic tool. This reference brief is not loaded by
the stage; no model job or general author/reviewer brief is dispatched.

```sh
node tools/alpha-groups.mjs --run <run> --generate
node tools/alpha-groups.mjs --run <run>
```

The tool reads only current manifest batch IDs and category metadata. It writes
`research/<run>-alpha-groups.json`, an array of `{label, covers, rationale}`.
Each existing batch occurs exactly once, with at most three batches per group
and the group cap derived from native batch capacity (currently 80 for 80 batches).
This is assignment inventory, not concurrent workers; global concurrency stays unchanged.
Labels are lowercase alphabetic identifiers: `a` through `z`, then `aa`, etc.

Categories that fit in one group stay together. Larger categories split into
stable chunks; remaining singleton batches fill available group space in stable
category/batch order. Conflicting category or capacity metadata fails explicitly.
An existing assignment that passes structural validation is preserved byte for
byte on rerun. The tool neither changes batches nor reads item loads, dependency
edges, sources or item bodies. It does not optimize partitions or review content.
The native assignment gate validates the result; the engine owns transitions.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
