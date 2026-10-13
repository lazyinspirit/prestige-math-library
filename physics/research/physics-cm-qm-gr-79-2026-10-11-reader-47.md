# Step 3a reader report — batch 47

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Batch: `47`

## Opened inventory

Assigned pages:

- `library/non-relativistic-quantum-mechanics/qm-autonomous-dynamics.md`
- `library/non-relativistic-quantum-mechanics/qm-autonomous-dynamics-examples.md`

Assigned items reviewed:

- `lem-nrqm-autonomous-dynamics-flow-calculus`
- `lem-nrqm-autonomous-dynamics-heisenberg-flow`
- `lem-nrqm-autonomous-dynamics-stationary-ray-characterization`
- `def-nrqm-autonomous-dynamics-framework-evolution`
- `pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow`
- `pthm-nrqm-autonomous-dynamics-heisenberg-picture`
- `pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation`
- `rem-nrqm-autonomous-dynamics-scope-and-empirical-status`
- `ex-nrqm-autonomous-dynamics-two-level-precession`
- `ex-nrqm-autonomous-dynamics-finite-stationary-superposition`
- `cex-nrqm-autonomous-dynamics-superposition-with-distinct-energies-is-not-stationary`
- `rem-nrqm-autonomous-dynamics-examples-scope-limits`

In-run dependency carriers opened for their exact formulations and uses:

- `def-nrqm-framework-quantities-and-units`
- `def-nrqm-observables-framework-observable-and-outcome-law`
- `def-nrqm-state-geometry-framework-state-space`
- `def-nrqm-state-geometry-pure-mixed-states-and-purity`
- `def-nrqm-state-geometry-state-vectors-and-rays`
- `post-nrqm-framework-state-and-composition`
- `post-nrqm-framework-observable-and-probability`
- `post-nrqm-framework-autonomous-dynamics`
- `lem-nrqm-composites-density-and-scalar-spectral-probability`
- `lem-nrqm-composites-nuclear-bounded-cyclicity`
- `lem-nrqm-composites-rank-one-operator-calculus`
- `lem-nrqm-state-geometry-ray-to-rank-one-projection`
- `thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws`

Relevant published mathematical suppliers opened for the claims used include the PVM and spectral-calculus definitions/results, the self-adjoint unitary-group and Stone results, the unbounded-PVM integral lemma, Hilbert adjoint and operator-norm results, trace-class definitions/ideal result, finite-dimensional closedness and closed-subspace completeness, the nonnegative-integral criterion, and the complex-exponential, trigonometric, finite Parseval, and finite-dimensional normal spectral results. The manifest, both page carriers, proof contracts, coverage record, cross-batch dependency record, and batch notes were consulted as navigation and evidence, not treated as mathematical verdicts. No separate rendered evidence bundle for batch 47 was present among the current run artifacts.

The Teschl PDF was checked directly for the two source-locator issues below. The batch 47 items themselves were not edited. The two source defects are in supplier items outside batch 47.

## Review and page verdicts

**`qm-autonomous-dynamics`:** No defect found in the page summary. It accurately distinguishes the adopted P1/P2/P4 vocabulary, the mathematical flow lemmas, conditional model deductions, and exclusions from empirical or apparatus claims. The exact operator domains, energy units, PVM outcome laws, and stationary-ray conditions are present in the items. The page's dependency closure contains the nonfatal citation issue in `thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws` recorded below.

**`qm-autonomous-dynamics-examples`:** No defect found in the page summary. The two-level calculations, finite-superposition return criterion, and the specific counterexample agree with their item computations. The page does not present a proposed or model-internal computation as an experiment and records no invented measurements. Its dependency closure contains both nonfatal citation issues recorded below.

The assigned proofs and computations are internally supported by their stated hypotheses and steps. The autonomous evolution is explicitly an adopted isolated-system model assumption; the theorems are conditional consequences, and the examples are exact model computations. The items do not claim empirical validation, detector behavior, or measurement data. The page and item scopes preserve those qualifications.

## Uneditable findings

1. **In-run supplier citation locator:** `thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws`, source reference 1 (`sources.references[0]`), identifies Teschl's first-edition *Mathematical Methods in Quantum Mechanics*, “Theorem 3.1–3.2, pp. 90–92 and Section 3.3, pp. 92–95” as covering spectral measures, invariant probabilities, and stationary states. Teschl's own contents place §3.1 at p. 87, §3.2 at p. 99, and §3.3 “Spectral types” at p. 104; pp. 92–95 are within §3.1. Teschl's conservation discussion is instead §5.1, equation (5.4), p. 124, and the cited Noether result is Theorem 8.1, p. 174. This is a citation-accuracy defect, not a gap in the supplier's local proof. The assigned direct consumers are `pthm-nrqm-autonomous-dynamics-heisenberg-picture`, `pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation`, and `ex-nrqm-autonomous-dynamics-finite-stationary-superposition`; the dependency closure also reaches the counterexample and both scope remarks. The source carrier was observed at raw SHA-256 `7ef6f42cb8e9aef34c683794547532c2446eb2bacb366a985d7cd2979299480e`.

2. **In-run supplier citation scope:** `lem-nrqm-composites-density-and-scalar-spectral-probability`, source reference 1 (`sources.references[0]`), attributes “trace class” coverage to Teschl's first-edition Chapters 2–3, pp. 55–100. Teschl's contents place “Hilbert–Schmidt and trace class operators” in §6.3, p. 139; the citation's stated range ends at p. 100. The supplier's local proof supplies the density-operator expansion, and its other listed source is Binney and Skinner §6.3, pp. 121–128, so this locator defect does not leave the assigned deduction without mathematical support. The assigned direct consumers are `def-nrqm-autonomous-dynamics-framework-evolution` and `pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow`; its closure reaches downstream items on both pages. The source carrier was observed at raw SHA-256 `f3c93e3f405a75fcc1fd3daeb070a7f30dfaa3e152e9efbccb4f004fe61bc29a`.

Both findings are nonfatal and outside this reader's edit scope. The relevant Teschl source is [the author-hosted first-edition PDF](https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf).

## Edits, checks, and blocker

- No assigned item or A-page prose was edited. No proof contract or judge record was changed.
- Reflow, precheck, and proof-layout were not run because there were no local edits.
- Blocker: none.

## Coverage note

All two assigned pages and all 12 assigned items were opened. The in-run suppliers named above and the published mathematical results material to the reviewed derivations were also opened. The carrier read order did not meet the required supplier-before-consumer sequence: I initially opened assigned items before opening some of their in-run suppliers, then read those suppliers and checked the deductions against them without rereading the assigned carriers. I did not re-audit unrelated transitive dependency chains or the other batches that own the two flagged suppliers. The hashes above bind the current supplier bytes observed during this review.
