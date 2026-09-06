# frontier-32 · Alpha group `a` · Step 3 recheck

Rechecked the current manifests, coverage ledgers, Step-3 fix-pass notes, the
controlling TC-18/TC-26/TC-29/TC-30/TC-37 plan sections, and
`research/plan-spec.json` for batches 1, 2, and 19.  The dispositions below
are based on the current bytes, not on the earlier review alone.

## Dispositions

1. **Batch 1 — circuit source route and uniformity placement: closed.**
   `prop-nc-one-is-contained-in-l-and-l-in-nc-two` retains the one-path
   recomputation route for $\mathrm{NC}^1\subseteq\mathrm L$ and
   configuration-reachability squaring for $\mathrm L\subseteq\mathrm{NC}^2$.
   Its support is the current Arora--Barak Exercise 9 and Exercise 11 coverage
   rows; no Katz row asserts either containment.  The logspace-uniformity
   dependency is now on `def-ac-zero-nc-one-and-nc`, where that convention is
   stated, and is absent from the unrelated formula/branching-program
   definition.

2. **Batch 1 — undecidable P/poly witness, advice equivalence, and
   Karp--Lipton repair: closed.**  The current manifest uses the binary
   length language induced by an undecidable tally language, explicitly places
   machine unrolling before the advice equivalence, and has the Karp--Lipton
   item and example verify a returned SAT assignment locally after
   self-reduction.  No route claims a deterministic global check of a candidate
   SAT circuit.

3. **Batch 1 — MajoritySAT and PP-complement repair: closed.**
   `cor-majority-sat-is-pp-complete` preserves the normalized $2^p$-path
   count, the parsimonious formula on $q\ge p$ variables, and the selector
   branch with $2^q-2^{p-1}$ satisfying assignments.  Its threshold is
   therefore strict-majority exactly when $a>2^{p-1}$.  The complement item
   uses the GapP witness $1-g$, including $g=0$.

4. **Batch 1 — low-yield and declined-source pushback: stands.**  The present
   19/49 Fortnow advisory is the only coverage warning.  Its 35 current
   declined rows are non-load-bearing for the two assigned pairs and remain
   recorded as `stands`; none creates a missing premise or a required scope
   change.

5. **Batch 2 — sequential repetition: closed.**
   `lem-sequential-repetition-amplifies-error` distinguishes independent
   honest-prover trials from an adaptive prover.  Its current strategy uses
   the per-history soundness bound and an exponential-moment argument rather
   than asserting independence of cheating-prover outcomes.

6. **Batch 2 — prefix complexity and symmetry: closed.**  The current route
   defines relative $K_M$ before fixing $K$, makes the acceptable-numbering
   dependency explicit for prefix invariance, and keeps the symmetry statement
   as the stated plain-complexity formula with logarithmic slack.  Kraft and
   prefix-invariance dependencies are present before the later uses.

7. **Batch 2 — BinChamp normality source: closed.**  Shen §39 is retained
   only as strong-law context.  The coverage ledger maps the computable binary
   Champernowne normality claim to the exact BinChamp source section, and the
   false-statement route uses the computable prefix cylinder of measure
   $2^{-n}$ to show non-Martin-Löf-randomness.

8. **Batch 2 — deferred and out-of-scope pushback: stands.**  The seven
   deferred rows still point to the existing polynomial-hierarchy,
   arithmetization/sum-check, or IP-equals-PSPACE destinations; the five
   out-of-scope rows are not premises of the scoped IP/public-coin route.  No
   declared item relies on the omitted reverse inclusion, sum-check, or
   round-complexity material.

9. **Batch 19 — no remediation finding: stands.**  The oracle/degrees pair
   still has the finite-query, degree, jump, and truth-table routes in backward
   dependency order.  Patey's current coverage supplies the truth-table and
   computable-domination equivalence, while the six declined extensions (use
   calculus, finite variation, completeness classification, and priority
   material) are non-load-bearing.

## Current closure

- Batch 1 — `boolean-circuits-and-nonuniform-complexity`: **sufficient**.
- Batch 1 — `counting-complexity-and-sharpp`: **sufficient**.
- Batch 2 — `interactive-proof-systems-and-public-coins`: **sufficient**.
- Batch 2 — `kolmogorov-complexity-and-algorithmic-randomness`: **sufficient**.
- Batch 19 — `oracle-computability-the-jump-and-turing-degrees`: **sufficient**.

## Checks run on current bytes

- `scope-decisions refresh --run frontier-32 --group a` and `check`: 53
  current declines, 0 pending, 0 errors.
- `manifest-deps`: 109 items, 0 normalizations, 0 errors.
- `coverage-checklist --require-destination`: 234 harvested results, 0
  errors, and only the reviewed Batch-1 low-yield advisory.
- `content-policy --manifest-only`: 109 scoped items, 0 errors, 0 warnings.
- `source-fetch-check`: 12/12 source records fetch-verified.
- `manifest-integrity --run frontier-32`: all 46 owed pages present, no scope
  drift.
- `validate-plan research/plan-spec.json`: acyclic and consistent, with no
  item-level cycles, forward-reference violations, B-page dependencies, or
  unresolved IDs among populated plan pages.  Its repository-wide redundant
  prerequisite notices are unrelated.

The existing `research/frontier-32-alpha-a-step3-verdicts.json` was read after
these checks and already records exactly the five current sufficient A-page
verdicts above; no verdict row is missing or requires a change.
