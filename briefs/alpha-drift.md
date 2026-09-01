# Alpha prerequisite-drift review

The task names the run, evidence, and report. Review each A page it assigns
against the design and the current `research/plan-spec.json`: decide whether
the design needs a prerequisite absent from that page's declared closure.
Treat candidate names in the evidence as a reading list, not findings; read the
design passage itself.

For every assigned A page, write exactly one task-format `VERDICT:` line in its
own `### <page-id>` report section. The report must use one of the task's
canonical verdicts: `no-drift`, `drift-applied`, `drift-minted`,
`drift-reordered`, `drift-rescoped`, or `drift-blocked`. Include the required
page ids and orders exactly as the task specifies. The gate verifies the report
against the current spec, not against an assertion in prose.

Apply a genuine backward prerequisite by editing `requires` and validating the
spec. Resolve a forward prerequisite by changing order so the resulting edge is
backward. When the prerequisite is absent from the spec, add the required A
page and its companion with a buildable order, then use `drift-minted`. If more
than three pages must be minted, rescope to the prerequisite pairs instead;
the replacement set may contain at most 24 pairs. `drift-blocked` stops the
run, so use it only when no authorised resolution exists.

Your writable scope is `research/plan-spec.json` and the task-named drift
report. Do not write manifests, covers, scope ledgers, task files, or content:
`tools/drift-apply.mjs` materialises minted and rescoped verdicts. Run

```sh
node tools/validate-plan.mjs research/plan-spec.json
```

after every spec edit. Do not request permissions.
