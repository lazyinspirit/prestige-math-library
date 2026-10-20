# Registered foreign reader observations

This opt-in adapter authenticates exact owner-registered foreign reader observations without inventing assigned-consumer reachability. Registry `research/RUN-step3-owner-foreign-reader-routes.json` uses policy `owner-step3-misattributed-foreign-reader-route-v1`. Unregistered cases retain ordinary validation.

Each route binds the original native finding/report/result/prompt, native snapshots, original observed source archive, actual repair input/output, actual root application, typed root full-proof/consumer review, and current consumer. Both original and current relations must be exactly one declared array-valued `deps` or `justified_by` relation, bound by `original_edge_kind` and `current_edge_kind` in the route and review. Scalar fields, ambiguous relations, undeclared edges and stale bytes fail closed. Historical observations remain distinct from repair inputs.

Origin refuter and Alpha independently adjudicate the original findings; registration grants neither source editing nor native mathematical acceptance. Home-batch coverage remains separately owed. Ordinary ledger/carrier stamps and closure evidence remain required.

Run the installation-ready regression suite from the repository root:

```sh
node --test tools/step3-owner-foreign-reader-routes.test.mjs
```

The suite uses self-contained synthetic run fixtures in temporary directories, including typed logical and justification relations, scalar-field regressions, and native CLI split/refuter propagation. It reads no actual run research artifacts and grants no actual-run coverage.
