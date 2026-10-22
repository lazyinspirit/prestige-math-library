# Step 3a reader report — batch 127

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Batch: `127`

## Scope and opened inventory

Read the batch-127 manifest, both assigned page carriers, all five assigned item carriers, and the suppliers needed to check the claims. The assigned pages are:

- `tgrx-topological-entropy-models` (A), with items `def-tgrx-finite-fusion-count-model`, `prop-tgrx-fusion-count-entropy`, `def-tgrx-tl-boundary-representation`, and `prop-tgrx-tl-projector-entropy`.
- `tgrx-topological-entropy-models-examples` (B), with item `ex-tgrx-count-is-not-area-law`.

The A page declares these prerequisite pages, all opened: `tgrx-finite-code-holography`, `temperley-lieb-diagram-algebra-and-catalan-basis`, `temperley-lieb-jones-wenzl-traces-and-quotients`, `temperley-lieb-root-of-unity-and-modular-representation-theory`, `matrices-and-the-matrix-of-a-linear-map`, `the-logarithm-and-general-powers`, `temperley-lieb-semisimplicity-and-generic-structure`, and `linear-maps-rank-nullity-and-quotient-spaces`. The B page's prerequisites, the A page and `the-logarithm-and-general-powers`, were also opened.

Claim-bearing item suppliers inspected include `def-inner-product-space`, `def-tgrx-sector-code`, `prop-tgrx-code-area-entropy`, `prop-tgrx-finite-modular-balance`, `lem-qsm-matrix-state-calculus`, `def-trace-of-an-endomorphism`, `thm-natural-logarithm-laws`, `def-temperley-lieb-generator-presentation`, `def-temperley-lieb-diagram-category`, `thm-temperley-lieb-diagram-category-laws`, `thm-temperley-lieb-presentation-isomorphism`, `thm-temperley-lieb-diagram-generators-span`, `lem-temperley-lieb-generators-satisfy-local-relations`, `def-temperley-lieb-quantum-integers-and-quantum-characteristic`, `def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators`, `lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness`, `def-temperley-lieb-closure-trace-and-partial-trace`, `lem-temperley-lieb-closure-trace-component-identities`, and `def-kernel-and-image-of-a-linear-map`.

I also read `research/physics-non-fluid-129-2026-10-21-r2-batch-127.notes.md` and the assigned proof-contract carrier as evidence, not verdicts. The notes describe the finite fusion model as depending on `def-tgrx-sector-code` at level 2; the current manifest and item instead agree on `def-inner-product-space` and level 0. The contract still contains a stale supplier excerpt for that older dependency (see uneditable findings below).

## Review and repairs

### `def-tgrx-finite-fusion-count-model`

The finite matrix model is explicit: transition multiplicity is `N_ab` for `b → a`, matrix action and powers are defined, and the normalized identity is assigned only for positive return count. Its coordinate inner product is verified against the linear-first convention of `def-inner-product-space`. No fusion-category or physical realization is inferred. The current item/manifest dependency is `def-inner-product-space`; the separate contract mismatch is recorded below.

### `prop-tgrx-fusion-count-entropy`

The path-count orientation agrees with `v_n=N^n e_0`; the penultimate-label count is exactly the `(a,0)` entry of `N N^n`. For the displayed matrix, `N^2=N+I`, giving the stated return-count recurrence. When `D_n>0`, `I/D_n` has trace one and uniform positive spectrum, so the entropy is `log D_n`; the proof uses the local natural-log convention and the zero-count case is excluded. The directed graph has edges `0→1`, `1→0`, and `1→1`, each of multiplicity one, matching the matrix. No item repair was needed.

### `def-tgrx-tl-boundary-representation`

The complex-algebra presentation, diagram convention, unit-denominator range, tower maps, and representation data are stated explicitly. Nonzero real quantum integers are units in `C`; the definition correctly does not require `[n+1]_δ≠0`. The `p_3` box diagram depicts three ordered through-strands and is expressly not used as a proof. No item repair was needed.

### `prop-tgrx-tl-projector-entropy`

The local induction proves self-adjointness from the real recursion coefficients and self-adjoint generator images. Idempotence comes from the Jones–Wenzl supplier; the range/kernel decomposition then gives the orthogonal projection, rank-normalized density matrix, and entropy `log r`. The ordinary Hilbert-space trace and unnormalized diagram closure trace remain distinct, with trace preservation stated only as a sufficient added condition. One nonfatal justification omission remains in the published projector lemma: its step 2.1 invokes horizontal reflection to obtain right annihilation without establishing the needed reflection invariance as an induction invariant. A direct one-line calculation from that step's absorption identity closes it; see the finding. The rest of the assigned proof is sound.

### `ex-tgrx-count-is-not-area-law`

The original statement assigned `a` to “each of the four labels,” although the displayed matrix has only two labels. Its title also claimed a result about a gravitational area coefficient, while the formal example assumes no geometry or gravity. I repaired both defects: the statement now simply chooses an independent positive scalar and sets `A_4=4a`, and the title says that the count leaves an entropy-to-scalar ratio undetermined. The calculations of `D_4=2` and the changed ratio remain unchanged. The item still expressly disclaims a geometrical area, physical entropy, or gravitational law.

The B item’s existing contract remains applicable: its cited recurrence, scalar assumption, calculations, and finite checks are unchanged. No `verification.judge` record was present to remove. Reflow reported the item unchanged; precheck passed (`1 checked, 0 failing`); final proof-layout reported `1 item, 3 steps, 0 defects`.

## Source and diagram checks

I checked the relevant argument in Joshua Chen, *The Temperley–Lieb Categories and Skein Modules*, §2.3, Theorem 2.3.2 and Proposition 2.3.6 (PDF pp. 19–23, [source](https://arxiv.org/pdf/1502.06845)). Chen's recursion and trace formulas are stated in the generic field setting; the local published lemma supplies a ring-level statement under unit-denominator hypotheses and proves that extension locally. I found no source-convention mismatch affecting the assigned result.

I also checked John Watrous, *The Theory of Quantum Information*, Definition 5.17 and equations (5.82)–(5.84), and Propositions 5.20–5.21 (PDF pp. 266–269, [source](https://jhwatrous.github.io/TQI.pdf)). Watrous uses base-2 logarithms; the assigned items explicitly use natural logarithms and nats and prove their needed identities locally. Harlow's Appendix A.7.2 ([source](https://arxiv.org/pdf/1607.03901)) gives finite-dimensional algebraic entropy conventions, not a geometric area conclusion. The Wald source in the example is listed for context only; it is not used as a premise. No empirical observation or physical conclusion is asserted by these mathematical items.

The assigned fusion graph and boundary-representation diagrams agree with their stated conventions. The cup/cap diagram in the diagram-algebra definition has the cap on the top pair, cup on the bottom pair, and remaining strand vertical. The recursive-projector supplier labels its picture a convention aid, not a displayed algebraic identity; the proof remains independent of it. No missing diagram is needed for the assigned exposition.

## Uneditable findings

1. `lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness`, proof step 2.1: right annihilation is inferred by horizontal reflection, but reflection invariance is not among the induction assertions established there. The gap is nonfatal because, with `bP_rb=([r+1]/[r])Q_rb`, `P_rQ_r=P_r`, and `c=[r]/[r+1]`, one can calculate `P_rbP_rb=P_r(bP_rb)=([r+1]/[r])P_rb`, hence `(P_r-cP_rbP_r)b=0`. This published item is outside the edit scope; assigned consumer `prop-tgrx-tl-projector-entropy` depends on it.

2. `def-tgrx-finite-fusion-count-model` proof contract: `supplier_excerpts[0]` in `research/physics-non-fluid-129-2026-10-21-r2-batch-127.proof-contracts.json` names `def-tgrx-sector-code` and says it supplies the density-matrix convention for the normalized scalar state. The current item's dependencies and definition instead use `def-inner-product-space`; the definition does not claim that the normalized scalar operator is a density matrix. This stale contract row is outside the authorized item/A-page prose write scope and is recorded as nonfatal.

## Page verdicts and blocker

- `tgrx-topological-entropy-models` (A): no page-summary defect. Its assigned finite-count claims are sound; the projector result retains the nonfatal published proof-step finding above, and the finite-model proof contract has the stale supplier row above.
- `tgrx-topological-entropy-models-examples` (B): no page-summary defect. Its assigned example item was repaired; no further page or item defect remains.

No blocker. This review covers the assigned items, page carriers, declared page prerequisites, and the exact supplier statements/proofs used in these claims. It is not a re-audit of every transitive proof in the mathematical library.
