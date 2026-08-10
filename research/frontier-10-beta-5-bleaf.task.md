# frontier-10, batch 5 — B-leaf dependency repair

Step 4 spliced your scaffold into `plan-spec.json`, and with every item list now
present `validate-plan.mjs` sees the whole graph for the first time. It raises
**`b-leaf`** on edges of yours.

## The rule

**B/examples pages are LEAVES.** Nothing may depend on an item that lives only on
a B page — except an earlier item on that *same* B page. Your edges reach into
*published* examples pages, which is the forbidden case. `depcheck` enforces this
on authored content too, so it would have blocked you at step 5 regardless.

## Your edges

- `ex-riemann-integrable-function-with-a-nonintegrable-section` -> `cex-dirichlet-is-not-riemann-integrable`
- `cex-one-existing-iterated-integral-does-not-give-riemann-integrability` -> `cex-dirichlet-is-not-riemann-integrable`
- `ex-riemann-integrable-function-with-dense-nonintegrable-sections` -> `ex-thomae-is-riemann-integrable-with-integral-zero`

**Also two genuinely missing `requires`**, unrelated to the above:
`fubini-and-change-of-variables-examples` depends on `the-exponential-function`
and `sine-cosine-and-the-definition-of-pi` without declaring either. Add both.

## How to fix each one

Pick per edge, in this order of preference:

1. **Cite the underlying result instead.** A published example is a witness for a
   theorem or definition that lives on the corresponding A page. Cite that. E.g.
   an example exhibiting a group's symmetries is not the licence — the definition
   or classification on the A page is.
2. **Restate what you need as your own item.** If you need the specific object,
   construct it yourself on your page. It is a witness, not a theorem, so
   rebuilding it is cheap and it becomes yours to cite.
3. **Drop the dependency** if the citing item does not actually rest on it.

Do **not** ask for the published example to be re-homed. That is a reading-order
change on published content, owner-only, and none of these warrants it.

## Scope

Only your own four `research/frontier-10-batch-5.*` artifacts. Any item you add
needs a real harvest row and source in `coverage.json`.

## Gates

```
node tools/validate-plan.mjs research/plan-spec.json --rehomed research/frontier-10-rehomed.json
node tools/coverage-checklist.mjs research/frontier-10-batch-5.coverage.json
node tools/content-policy.mjs research/frontier-10-batch-5.pages.json --manifest-only --rehomed research/frontier-10-rehomed.json
```

`validate-plan` will still report `b-leaf` for the *other* batches until they are
repaired too — check that none of the remaining ones name **your** page. Ignore
`redundant-prereq`; those are warnings.

**Do not run `tools/gates.mjs`** — it fails `EPERM` in this sandbox.

## Report

Per edge: which of the three routes you took and why.
