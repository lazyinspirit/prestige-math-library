# Batch 4 authoring notes — Polynomial interpolation and remainder

## Scope, control, and conflict resolution

This batch owns the A/B pair `polynomial-interpolation-and-remainder` and its companion. The controlling design route named by the owner direction is `research/plan-numerical-linear-track.md` NA-10 together with the accepted `linear-audit.md` NA-10 contract. The retained scope is distinct-node cardinal and barycentric interpolation, uniqueness, the pointwise Lagrange remainder, a finite checked-arithmetic evaluator with explicit statuses, and the three assigned examples. The local higher-order Rolle result is **not** duplicated: the accepted audit says to use the published `lem-higher-order-rolle` under its stated ordered-zero and regularity hypotheses, and its complete supplier body was inspected.

There is a plan-text conflict to preserve. `plan-numerical-analysis-track.md` NA-10 and the copied NA-10 description in `plan-spec.json` say to add a local higher-order Rolle intermediate, whereas the repaired linear-track NA-10 audit says to use the actual published lemma and not reauthor it. The owner direction names the linear plan and its incorporated audit as the controlling design and says accepted plans/audits supersede earlier copied inventory prose. I followed that repaired interface. The older copy also mentions the mean-value corollary as a requirement; no authored proof step consumes it. The declared page `requires` entries are placement context, not automatic logical premises. The trigonometric-identities page contributes no premise to this pair.

The current linear plan also forbids reintroducing spline methods. No natural-cubic or quasi-interpolation method is included. The existing NA-11 draft `ex-equispaced-runge-function-interpolation-diverges` states a fixed-function divergence example in a different assigned pair; this batch neither edits nor depends on that carrier. The present equispaced result is the separately proved basis-amplification lower bound for data that vary with degree.

## Inventory, dependencies, and levels

The manifest inventory was fixed before writing carriers and then expanded as proof review exposed four missing local interfaces: the formal coefficient-list bridge, the finite-product nonvanishing lemma needed to define the barycentric weights, the finite-product quotient identity used pointwise to justify the scalar-times-monic-factor representation, and finite double-sum interchange used to construct the interpolant coefficient vector. In-run `deps` determine the labels below; published prerequisites and `justified_by` status discharge do not raise a level. A batch-4-only `dependencyLevels` calculation on the final manifest returns 17 items, no errors, maximum level 6. The run-wide CLI currently reports errors in other assigned batches with empty inventories and mismatched item level labels; those carriers are outside this pair and were left untouched. Run-level dependency input is `ca41fcdd6d4a40fbd61e4921a8bfdd410bd704a05c937a5f709843ed28d2e97d`; this batch is level 0 with no prerequisite batches.

| Item | Direct in-run supplier(s) | Level |
|---|---|---:|
| `lem-finite-product-of-nonzero-reals-is-nonzero` | none | 0 |
| `lem-finite-coefficient-vector-has-polynomial-representative` | none | 0 |
| `lem-finite-double-sum-interchange` | none | 0 |
| `lem-polynomial-highest-derivative` | none | 0 |
| `lem-product-of-linear-factors-is-monic-polynomial` | none | 0 |
| `def-cardinal-polynomial-interpolation` | finite-product nonvanishing lemma | 1 |
| `lem-finite-product-of-quotients` | finite-product nonvanishing lemma | 1 |
| `lem-cardinal-basis-degree-and-values` | definition; coefficient-vector, linear-factor, finite-product nonvanishing, finite-product quotient, and double-sum lemmas | 2 |
| `prop-equispaced-interpolation-basis-growth` | definition | 2 |
| `thm-cardinal-polynomial-interpolant-exists-uniquely` | cardinal-basis lemma; coefficient-vector lemma; definition | 3 |
| `thm-barycentric-interpolation-identities` | uniqueness theorem; cardinal-basis lemma; definition | 4 |
| `thm-lagrange-interpolation-remainder` | uniqueness theorem; cardinal-basis lemma; definition | 4 |
| `alg-finite-barycentric-interpolation-evaluator` | barycentric identity; definition | 5 |
| `prop-finite-barycentric-interpolation-evaluator-returns-status` | evaluator | 6 |
| `ex-equispaced-cardinal-basis-growth` | growth proposition; definition | 3 |
| `ex-quadratic-interpolation-at-three-nodes` | uniqueness theorem; definition | 4 |
| `ex-cubic-interpolation-pointwise-remainder` | remainder theorem; uniqueness theorem; definition | 5 |

The coefficient-vector lemma addresses a formal-object issue in `def-real-polynomial-degree-leading-coefficient-and-monic`: zero padding is an evaluation-vector convention, not equality of formal polynomial lists. The finite-product-of-linear-factors lemma proves the monic degree statement by coefficient recursion. The finite-product nonvanishing lemma makes each reciprocal weight and the off-node node-product division well defined. A separate induction proves the finite quotient identity for real evaluation values; the cardinal-basis proof applies it pointwise to identify each cardinal function with a scalar multiple of its monic numerator. The finite double-sum lemma proves the reindexing needed to collect coefficients of the finite linear combination $I_n y$. The cardinal-basis lemma then establishes polynomial membership, degree bounds, node values, and off-node nonvanishing before the uniqueness and remainder theorems use them. These are local, choice-free finite arguments; no axiom of choice is used.

## Published prerequisites inspected

The actual full supplier statements and proofs were inspected before readiness assessment. The core interpolation interfaces are `def-real-polynomial-degree-leading-coefficient-and-monic`, `thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots`, `lem-higher-order-rolle`, and its `thm-rolle` and differentiability/continuity prerequisites. For derivative and smoothness claims the inspected suppliers include `def-higher-derivatives-and-smoothness`, `lem-derivative-of-a-power`, `thm-algebra-of-derivatives`, and `thm-algebra-of-continuous-functions`. The finite quotient and double-sum helpers use the full field, inverse-uniqueness, induction, recursion, and finite-sum-law statements. The equispaced estimate uses the complete statements/proofs for `def-binomial-coefficient`, `def-factorial-and-falling-factorial`, `thm-binomial-closed-formula`, `lem-binomial-coefficients-symmetric-and-unimodal`, `thm-binomial-theorem-over-a-commutative-ring`, `lem-nat-finite-sum-laws-and-the-canonical-embedding`, `lem-finite-sum-laws`, and `lem-power-laws`, with the actual real-field and ordered-field interfaces. The evaluator uses the exact domain and exclusions in `def-standard-relative-floating-point-model-and-unit-roundoff`. The B-page comparison uses the published closed-interval Weierstrass corollary only for polynomial density, not interpolation convergence.

## Source reading and disposition

The two active full-text treatments are independent and both were read in full: Mark Embree, *Lecture Notes on Numerical Analysis*, the complete 236-page Virginia Tech PDF; and Jean-Paul Berrut and Lloyd N. Trefethen, “Barycentric Lagrange Interpolation,” the complete 17-page author-hosted PDF. Exact locators and per-result included/out-of-scope dispositions are in the batch coverage file.

Embree Lecture 1, printed p. 14 (PDF pp. 13–14), treats the Lagrange basis and uniqueness; Lecture 3, Theorem 1.3 and its full proof, printed pp. 16–18 (PDF pp. 15–18), gives the classical pointwise error route; its printed pp. 21–23 Runge example is a distinct fixed-function phenomenon. Berrut–Trefethen §§2–4 (pp. 502–505) derives the barycentric identities and weights, §5 (p. 505) describes equispaced conditioning, and §7 (pp. 508–509) discusses node evaluation and floating-point stability caveats. Neither source is represented as supplying the new formal coefficient-list, finite-product nonvanishing, finite-product quotient, or finite double-sum proofs, the exact binomial lower bound, or a forward-error guarantee.

`source-fetch-check --stamp` fetched and stamped both complete PDFs on 2026-10-15 UTC: Embree, 5,167,332 bytes, SHA-256 prefix `aa3f7d4c26cea22f`, 236 pages; Berrut–Trefethen, 504,683 bytes, SHA-256 prefix `974274c78d914553`, 17 pages. Both have one successful full-text recovery record and no documented drops.

The design-suggested ATAP `first6.pdf` URL returned HTTP 404 in prior direct-shell retrieval; prior source scouting also reported a 404 for a Duke `Lec4-Interpolation.pdf` candidate. Those are historical design-source candidates, not active harvested sources. I used the two complete, fetched alternatives above and proved the assigned claims locally. Their historical failure and alternative disposition are recorded in the coverage `resolution_note`; no active source was dropped and no mathematical coverage was waived.

## Checks and readiness

All 14 A items and 3 B examples have declared placement; the two authored pages match the manifest pair and stay below the 100-item cap. Final scoped checks on the current carrier bytes returned:

- `precheck`: 15 proof-bearing items checked, 0 failures.
- `proof-contract --strict`: 17/17 items, 104 exact citations, 56 step derivations, 0 errors and 0 warnings.
- batch-scoped proof-contract coverage: 15/15 proof-bearing items covered. The run-wide coverage command stops at another pair's empty inventory (`direct-transcription-and-numerical-ode-optimal-control`); no other pair was edited.
- `proof-layout`: 17 items, 56 steps, 0 defects.
- `rendercheck`: 19 item/page files, 0 errors and 0 warnings.
- `content-policy`: 17 scoped items, 0 errors and 0 warnings.
- manifest/page/item inventories and direct `deps` match exactly.
- focused `depcheck`: 17 items and both pages checked; 292 dependency-closure item checks and 83 prerequisite-page-cycle checks, 0 errors and 0 warnings.
- scoped dependency levels: 17 items, 0 errors, maximum level 6.
- `source-fetch-check`: both full-text sources fetch-verified and resolved, 0 documented drops.

The final autopilot status is `running` at `1-scaffold` with 25/106 pairs covered, no in-flight work, and the owner repair/recertification blocker still active. It still lists dispatch 4 among incomplete scaffold assignments, but dispatch 4 is no longer in the “artifact missing” list; the batch-4 manifest is present at the task-specified path. Engine state and the stage blocker were left to the owner.

All 17 batch items now have current Step-1 `ready` records with examined dependency IDs and item-specific evidence; none is owner-owned. These are authoring status only and do not constitute independent approval.
