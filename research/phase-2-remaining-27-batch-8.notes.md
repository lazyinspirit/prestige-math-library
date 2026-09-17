# Phase 2 remaining 27 — Batch 8 scaffold notes

## Scope and controlling design

Owned output is limited to the two assigned Probability A/B pairs. The A pages contain 19 and 21 items; each B companion contains the prescribed eight examples/counterexamples and requires only its A page.

For `the-ito-integral-with-respect-to-brownian-motion`, PT-21 in `research/plan-probability-track.md` controls. Its exact 19/8 inventory, predictable-product-space convention, L2 construction, localization route and warnings are preserved.

For `itos-formula-and-brownian-martingales`, PT-22 in the Probability plan controls mathematically. The cited Fourier and PDE locations are reconciliation/seam notes: each removes a stale published consumer edge to the PT-22 B page and assigns zero new item dependencies. They are not competing page designs. The current `research/plan-spec.json` agrees exactly with the binding Probability amendment for both A-page `requires` arrays and with the B-only-companion rule.

The binding owner direction changes how the terse/stale design points are realized:

- `thm-density-of-elementary-predictable-processes-in-predictable-l2` uses a genuine indicator lambda-system containing the predictable generating pi-system: complements and countable disjoint unions are closed in product L2, and Dynkin pi-lambda finishes the set step before simple approximation.
- `cor-deterministic-ito-integrals-are-gaussian` invokes the earlier Gaussian-parameter weak-limit result, so the L2/probability limit of normal step integrals is identified rather than merely asserted to remain normal.
- `thm-ito-formula-one-dimensional` and its multidimensional successor first prove the C3 case by deterministic-partition Taylor expansion after localization, with `cor-multivariable-taylor-formula-with-peano-remainder` declared directly as the exact third-order supplier. They then cut off and mollify on compact cylinders to pass f, its time derivative, and its first two space derivatives uniformly to the binding C1,2 statement via dominated convergence and Ito isometry/maximal control.
- `thm-brownian-filtration-martingale-representation` first proves fixed-horizon L2 terminal surjectivity by a closed-range argument. Complex characteristic exponentials are derived componentwise from Ito formula, cylinder Fourier uniqueness is extended by a pi-lambda argument and completion, L1 Doob controls terminal truncation, and compatible L2 localizations are patched predictably in the unchanged usual Brownian filtration.
- `def-brownian-generator` is only the Itô differential operator `Lf=(1/2)Delta f` on `C^2`; it expressly makes no claim that all `C^2` functions lie in a `C_0` semigroup-generator domain. No semigroup-domain/core claim is used.
- The designed “preview” example `ex-integral-of-brownian-motion-against-itself-preview` does not point forward to PT-22. Its proof is closed locally from left-dyadic sums and Batch 7 uniform dyadic quadratic variation. This resolves the conflict between the old preview wording and the binding prohibition on forward proof dependencies.

Two necessary local lemmas were inserted at their first consumers. `lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t` gives a direct partition-Taylor proof for an arbitrary continuous local martingale with `[M]_t=t`; this prevents the invalid use of the Brownian-driven Itô formula in Lévy characterization and does not introduce general local-martingale integration. Immediately before martingale representation, `lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two` proves the needed result by a minimizing sequence from Riesz-Fischer completeness, the L2 parallelogram law and the L2 quotient norm. The latter avoids adding the undeclared page prerequisite `hilbert-space-geometry-and-riesz-representation`.

## Source and proof audit

Two author-hosted treatments were read for each A page, with their distinct proof roles recorded honestly:

- Aad van der Vaart, *Stochastic Integration and Differential Equations*, Sections 5.1, 5.3–5.9 and 6.1–6.2. The full 188-page PDF was downloaded and extracted with `mutool`; the density, isometric extension, continuity, localization/stopping, covariation/Itô formula, Lévy characterization and every stage of Theorem 6.6 were inspected.
- Gregory Lawler, *Stochastic Calculus: An Introduction with Applications*, Sections 2.8, 3.2–3.7 and 5.7. The full 260-page PDF was downloaded and inspected for the elementary isometry, maximal convergence, stopping, quadratic variation and Itô examples. Section 5.7 corroborates the representation statement but explicitly omits its continuous Brownian proof and proves a random-walk analogue; van der Vaart Theorem 6.6 is the complete representation proof source.

`source-fetch-check --stamp` verified all four page-source records as readable full text. The coverage ledger gives 50 explicit source-result dispositions. Results on general semimartingales, jumps, BDG, SDE existence, Girsanov and Feynman–Kac are marked out of scope with specific reasons; no source was dropped and no retry escalation was needed.

The main dependency chains checked in full were:

1. predictable rectangles -> elementary processes -> representation independence -> elementary isometry -> predictable-L2 density -> complete L2 extension -> a.e./approximation independence -> continuous martingale version;
2. energy localization -> compatible stopped integrals -> stopping identity -> arbitrary deterministic-partition quadratic variation;
3. Brownian Itô process -> covariation -> integration by parts -> one- and multidimensional Itô formulas -> Brownian martingales -> Lévy characterization;
4. closed terminal-integral range -> componentwise complex stochastic exponentials -> finite-dimensional Fourier uniqueness -> raw-cylinder pi-lambda and completion -> L2 representation -> L1-Doob truncation -> continuous local-martingale localization and predictable patching.

The quadratic-variation strategy does not misuse Batch 7's dyadic theorem as an arbitrary-partition theorem: it first proves the arbitrary deterministic-partition Brownian estimate from centered squared increments, discrete Doob and Brownian continuity, then treats elementary integrands, predictable-L2 approximation and localization. Product-measure a.e. equivalence, indistinguishability and endpoint conventions are explicit at their first consumers.

The drifted hitting-probability example obtains exit finiteness from the Batch 7 Brownian LIL (`B_t/t -> 0`) and, from the stopping-time definition, proves the closed-boundary stopping property directly through an explicit continuity-and-rational-times measurability formula for the drifted process; it neither imports the Brownian-specific closed-hit lemma nor applies the zero-drift exit-probability formula to drifted Brownian motion.

## Choice and published-defect ledger

Every non-ZF item now states full AC and directly declares both `def-axiom-of-choice` and the AC=>DC=>AC_omega implication bridge, so inherited conditional-expectation, L2-completeness, subsequence and localization costs are explicit. Exactly three items remain choice-free: `def-progressively-measurable-and-predictable-process`, `lem-adapted-continuous-processes-are-progressively-measurable`, and `def-quadratic-covariation-of-brownian-ito-processes`. No owned proof reaches `deferred-set-theory-beyond-choice`.

A published metadata defect remains outside this batch: `thm-bv-functions-are-differentiable-almost-everywhere` is published and its statement assumes Countable Choice, but its direct `deps` omit `def-countable-choice`. The exact repair is to add that dependency (and reconcile its page axiom metadata) in the canonical published-debt workflow. Batch 8 does not consume it: `cex-pathwise-riemann-stieltjes-integration-does-not-construct-the-brownian-ito-integral` uses the Batch 7 direct result `cor-brownian-paths-have-infinite-total-variation-on-every-interval`, whose proof deliberately bypasses the defective theorem. Thus this unrelated published debt does not block the new supplier.

No defective actual prerequisite or cross-batch mathematical blocker was found. The Batch 8 dependency input reviews 25 derived page/item edges, all `verified`; after refresh the unified frontier ledger reports no Batch 8 unreviewed edge or orphaned review.

## Verification

Owned batch:

- `manifest-deps`: 56 items, 0 normalized, 0 errors.
- Whole-manifest `manifest-deps` and `content-policy --manifest-only`: PASS at recertification, with 0 normalized dependencies, 0 errors and 0 warnings.
- `coverage-checklist --require-destination`: 2 pages, 50 harvested results, 0 errors, 0 warnings.
- `source-fetch-check`: 4/4 page-source entries fetch-verified and resolved.
- `url-sweep --recover --fail-on-dead`: 2/2 unique URLs live; 0 failed, archive-recoverable or suspect.
- `source-backing --require-verified`: 38 authored source-backed results, all backed.
- Readiness: 56/56 Batch 8 records are current `ready`; 0 Batch 8 open, stale, missing or escalated records.

Whole run at the final snapshot:

- `manifest-integrity --run phase-2-remaining-27`: all 54 owed pages present; no scope drift.
- `validate-plan research/plan-spec.json --repo . --max-items 60`: exit 0; no unresolved ID, item cycle, page cycle, forward dependency, intra-page order error or B-page dependency among 1,134 pages with item lists. The redundant-prerequisite warnings and 485 empty planned pages are existing run-level state.
- `splice-plan --run phase-2-remaining-27 --all --dry-run`: PASS; Batch 8 is four pages and 56 new items.
- `fwdcheck`: exit 0; every recorded forward reference is declared, strictly forward, closed and acyclic.
- `extcheck`: exit 0; final verdict OK. Its published recorded-not-proved warnings are not Batch 8 items.
- The live run's unrelated readiness totals remain mutable; Batch 8 contributes 56/56 hash-current ready records and none of its IDs appears in the remaining-work rows.

No published content, shared plan, autopilot engine state or verdict was edited.
