# frontier-22 · Alpha group `b` · Step 3 recheck

Group `b` owns batches `2` and `5` in
`research/frontier-22-alpha-groups.json`: CA-5
`associated-primes-and-primary-decomposition` and MT-10
`modes-of-convergence-egorov-and-lusin`.

I re-read the governing task files on Friday, August 28, 2026, then verified
the live bytes in:

- `research/frontier-22-alpha-b-step3-scaffold-review.md`
- `research/frontier-22-batch-2.notes.md` (`## Step-3 fix pass`)
- `research/frontier-22-batch-5.notes.md` (`## Step-3 fix pass`)
- `research/frontier-22-batch-2.pages.json`
- `research/frontier-22-batch-5.pages.json`
- `research/frontier-22-batch-2.coverage.json`
- `research/frontier-22-batch-5.coverage.json`
- `research/plan-spec.json`

Checks run on the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-22 --group b`
  - result: `scope-decisions: b: 9 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-22 --group b`
  - result: `scope-decisions: 9 current decline(s), 0 error(s)`

No newly pending scope row appeared after refresh, so no additional
scope-decision resolution was required.

## Batch 2 dispositions

### `Local repair` — sufficient

- Disposition: **closed**.
- Evidence: the live manifest no longer routes
  `thm-prime-filtration-of-a-finite-module` or
  `thm-lasker-noether-primary-decomposition` through the ideal-only
  `thm-noetherian-induction`. Their current `deps` instead use the published
  module route through
  `thm-finitely-generated-modules-over-noetherian-rings-are-noetherian` and
  `thm-equivalent-characterizations-of-noetherian-modules`.
- Evidence: `lem-irreducible-submodule-is-primary-noetherian` now depends on
  `lem-primary-submodule-zero-divisor-characterisation`, and
  `thm-second-uniqueness-theorem-primary-decomposition` now depends on
  `lem-associated-primes-from-a-minimal-primary-decomposition`, exactly as the
  scaffold review claimed.
- Plan/coverage check: the current plan entry still keeps
  `associated-primes-and-primary-decomposition` under
  `artinian-rings-and-length-examples`, and the batch-2 coverage still records
  the five reviewed non-included source rows as explicit scope denials rather
  than silent omissions.

### `ddccb25d99ee6fca029fa73997e345b21bcfeac6e77c4c6dbb53024ef1066bc8` — sufficient

- Disposition: **pushback stands**.
- Evidence: `research/frontier-22-batch-2.coverage.json` still records Milne
  `Proposition 19.4` as `out-of-scope`, and the current manifest still closes
  the localization/uniqueness route through
  `lem-localisation-of-a-primary-submodule` and
  `lem-contraction-recovers-primary-component-after-localising-away-from-radical`
  without needing the ideal-only transport proposition.

### `5953550dc3656169660d16df954f47d01d26fb38d5be061e6bff7545fabd4292` — sufficient

- Disposition: **pushback stands**.
- Evidence: batch-2 coverage still records Stacks `Section 10.64: Symbolic
  powers` as `out-of-scope`, and the current plan/manifest route still ends at
  the primary-decomposition core rather than branching into symbolic-power
  applications.

### `22002511592bac9073d37a209927c7be9c30a15888bc24edb7f21f7767d2d854` — sufficient

- Disposition: **pushback stands**.
- Evidence: batch-2 coverage still records Stacks `Definition 10.64.1` as
  `out-of-scope`, and no current manifest item introduces or consumes symbolic
  powers.

### `e9b11ea68d7c22b1ade2d8acb68927181766c7ada78d3c8e86800ffe760ecb90` — sufficient

- Disposition: **pushback stands**.
- Evidence: batch-2 coverage still records Stacks `Lemma 10.64.2` as
  `out-of-scope`, and no current CA-5 item depends on the symbolic-power
  application `Ass(R/\mathfrak p^{(n)}) = \{\mathfrak p\}`.

### `0c6b1bcf7a175549bbb743218e6d246f274521366678017df0cde7a8696e6e46` — sufficient

- Disposition: **pushback stands**.
- Evidence: batch-2 coverage still records Stacks `Lemma 10.64.3` as
  `out-of-scope`, and the immediate continuation in `research/plan-spec.json`
  still does not consume the flat-base-change theorem for symbolic powers.

## Batch 5 dispositions

### Step-3 fix pass — sufficient

- Disposition: **closed with no further fix owed**.
- Evidence: `research/frontier-22-batch-5.notes.md` reports no independent
  finding ids for batch `5`, and the live manifest still matches the current
  plan entry by requiring both
  `the-lebesgue-and-riemann-integrals-compared-examples` and
  `urysohn-lemma-and-tietze`.
- Evidence: batch-5 coverage still records the four reviewed non-included
  source rows explicitly:
  Folland Example (i) and Royden Problem 5 remain `out-of-scope`;
  Folland Exercise 40 and Royden Problem 4 remain `deferred` to
  `owner-decision`.
- Scope check: `research/frontier-22-alpha-b-scope-decisions.json` remains
  current after refresh, and all four MT-10 rows still check cleanly as
  resolved `stands`.

## Verdicts

- `associated-primes-and-primary-decomposition`: **sufficient**
- `modes-of-convergence-egorov-and-lusin`: **sufficient**

The current `research/frontier-22-alpha-b-step3-verdicts.json` already matches
these verified outcomes, so no verdict-byte change was required in this
recheck pass.
