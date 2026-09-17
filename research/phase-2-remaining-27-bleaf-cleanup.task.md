# Gate cleanup — `validate-plan` b-leaf dependencies

Run `phase-2-remaining-27`, stage `4-splice`. `node tools/validate-plan.mjs
research/plan-spec.json` fails with **51 `[b-leaf]` errors**: an item depends on
a *published* item whose first home in the tool's library walk is an examples
(B) page, and B pages must be leaves (`tools/validate-plan.mjs`, the
`published` b-leaf block). Multi-homing does NOT help: `homePageOf` keeps the
first listing the walk meets, and for every A/B companion pair the
`…-examples.md` file sorts before the A file, so an item listed on both is
B-homed as far as this gate is concerned.

## The list

Regenerate it with:

```
node tools/validate-plan.mjs research/plan-spec.json 2>&1 | grep '\[b-leaf\]'
```

The consumer pages are: `real-forms-and-real-semisimple-lie-algebras-examples`
(28), `moment-maps-and-symplectic-reduction-examples` (8),
`generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence-examples`
(6), `root-systems-dynkin-diagrams-and-cartan-killing-classification` (3),
`real-forms-and-real-semisimple-lie-algebras` (3),
`moment-maps-and-symplectic-reduction` (2),
`highest-weight-theory-for-complex-semisimple-lie-algebras-examples` (1).

## What to do, per dependency

1. Read the consumer item and the step that uses the supplier.
2. Replace the dependency with an item that is homed **only on an A page**
   (a definition/lemma/theorem/proposition; check its listing in `library/**`
   and prefer one whose A page precedes the consumer's page). Update the
   frontmatter `deps` and every proof citation (Facts line and bracket tags)
   that names the old supplier.
3. If no A-homed item states the needed fact, **inline a short local derivation
   of it in the consumer's proof** (this is what the run did for the Euler-class
   counterexample) and drop the dep. Do not weaken the claim.
4. Do not depend on any item that is listed on an examples page — not even one
   that also has an A home.
5. Keep every touched manifest row in
   `research/phase-2-remaining-27-batch-<b>.pages.json` equal to the item's
   `deps`.

## Verify

- `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` for each edited item
  (adopt the canonical form if it reports REPAIR) and `node tools/rendercheck.mjs`.
- `node tools/splice-plan.mjs --run phase-2-remaining-27 --batch <b> --update`
  for the batches you touched, then
  `node tools/splice-plan.mjs --run phase-2-remaining-27 --all`, then
  `node tools/validate-plan.mjs research/plan-spec.json` — the `[b-leaf]` count
  must be zero (the tool's other classes are already clean).
- `node tools/depcheck.mjs` must stay `OK`.
- Leave decision records to the orchestrator; report every item touched.

## Rules

- Edit only the consumer items named by the 51 findings, their manifest rows,
  and (if you must add a local lemma) the consumer's own page inventory.
  Do not touch coverage, scope decisions, boundary contract rows, or other pages.
- Mathematical integrity: a replacement supplies exactly what the proof uses;
  an inlined derivation is complete; never delete a claim to make the gate pass.

Report to `research/phase-2-remaining-27-bleaf-cleanup-report.md`.
