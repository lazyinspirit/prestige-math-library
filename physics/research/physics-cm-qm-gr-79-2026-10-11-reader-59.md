# Step 3a reader report — batch 59

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Scope: batch `59` only

## Opened inventory

I opened the batch manifest, both assigned pages, all 18 assigned items, and the dependency statements needed for the claims reviewed below. Assigned items were read in dependency order.

Pages:

- A: `library/non-relativistic-quantum-mechanics/qm-controlled-approximations.md`
- B: `library/non-relativistic-quantum-mechanics/qm-controlled-approximations-examples.md`

Items on page A:

- `lem-nrqm-approximations-scaled-line-model-correspondence`
- `lem-nrqm-approximations-finite-rank-gapped-cluster-projection`
- `def-nrqm-approximations-framework-variational-trial-model`
- `def-nrqm-approximations-framework-perturbed-family-model`
- `def-nrqm-approximations-framework-wkb-regime-model`
- `post-nrqm-approximations-static-finite-level-dipole-coupling`
- `pthm-nrqm-approximations-variational-bounds-and-min-max`
- `pthm-nrqm-approximations-nondegenerate-perturbation-expansion`
- `pthm-nrqm-approximations-degenerate-first-order-splitting`
- `pthm-nrqm-approximations-wkb-allowed-region-error`
- `pthm-nrqm-approximations-turning-point-connection`
- `pthm-nrqm-approximations-barrier-transmission-asymptotics`
- `rem-nrqm-approximations-scope-and-empirical-status`

Items on page B:

- `ex-nrqm-approximations-two-level-finite-gap-correction`
- `ex-nrqm-approximations-stark-finite-level-shift`
- `ex-nrqm-approximations-zeeman-multiplet-splitting`
- `ex-nrqm-approximations-smooth-barrier-tunnelling-limits`
- `rem-nrqm-approximations-examples-scope-limits`

Dependency statements consulted for the repaired arguments and their consumers included the spectral theorem, the spectral form-domain lemma, the discrete/essential spectrum definition, the variational ground-gap estimate, and the min-max theorem; the WKB regime and scaled-line correspondence; the Liouville turning-point transformation; the Airy normalization and asymptotic-envelope results; the stable weighted Airy Volterra connection; the allowed-region WKB error theorem; and the barrier-flux/transmission result. I also checked the declared line-model and framework postulates and the Coulomb, angular-momentum, spin, and perturbation suppliers needed by the examples. This is a list of relevant supplier material, not an audit of the full transitive dependency graph.

## Repairs and evidence

### `pthm-nrqm-approximations-variational-bounds-and-min-max`

- In Facts & Assumptions F3, the old equality `D(|H'|^{1/2})=Q(H')` was asserted without a derivation. The cited ground-gap result is stated on `D(|H'|^{1/2})`, while this theorem applies it to the form domain. I added the comparison on the spectral support `[E0',∞)`: `|t| ≤ (t-c)+|c|` and `t-c ≤ |t|+|c|`, together with finiteness of the scalar spectral measure, gives equivalence of the two integrability conditions and hence the domain equality. This closes the supplier-domain step used by clause (b).
- Proof step 1.1 established only `q_H[u] ≥ E0`; it did not establish the accompanying equality between `E0` and the infimum of trial values. I added the reverse inequality: for any `η>0`, choose a spectral point below `E0+η/2`, then a bounded open interval around it below `E0+η`. Its spectral projection is nonzero, so a unit vector in its range is a form-domain trial vector with value at most `E0+η`.
- The former step 2.1 tried to identify `E1=E0` by splitting into spectral-bottom cases, including an unsupported assertion that an isolated spectral bottom has nonzero projection. It now uses the second min-max formula at `n=1`, whose only admissible subspace is `{0}`, and then the infimum proved in step 1.1. This does not assume that the bottom is attained.
- The proof contract derivations for steps 1.1 and 2.1 were updated.

### `pthm-nrqm-approximations-turning-point-connection`

- The previous derivative clause referred to the growing branch only as a “growing analogue”; it did not give the actual growing envelopes and derivative bounds. I stated both growing value and derivative envelopes, the transformed derivative error bounds, and the corresponding physical derivative error bounds. I defined the Liouville coordinate before use and made the Volterra control parameter and its `O(h)` bound explicit in the statement.
- The fixed-section slope expansions now state the decaying and growing forbidden and allowed formulas with absolute error bounds. The allowed-side errors remain absolute at sine and cosine zeros; no relative error there is claimed. Proof step 2.3 obtains transformed bounds by the chain rule and differentiates only the explicit leading amplitudes to derive slope formulas, with the amplitude-derivative terms bounded on sections away from the turn.
- The proof contract now records the exact growing-envelope definitions from Facts & Assumptions F3 of `thm-nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection`. The downstream barrier-transmission contract's F1 quote was replaced with the current turning-point Statement; the quote matches that Statement exactly. The proof was put in the checker’s canonical phase order (derivative step 2.3, scope step 3.1), including the final-step reference.

### `ex-nrqm-approximations-smooth-barrier-tunnelling-limits`

- Part (b) stated a limit as the width grows without explicitly holding the physical parameters fixed. I fixed `m, ℏ, E, U` with `U>E>0` and let only `a→∞` (equivalently `κa→∞`). Fact L3 and proof steps 1.2 and 2.1 now carry that fixed-parameter condition into the denominator limit and exponent comparison. The proof-contract derivations for those steps were updated.

No A-page or B-page prose was changed. None of the three edited items had a `verification.judge` record to remove.

## Source checks

- NIST DLMF §9.5 and §9.7 (notably §§9.7.5–10 and 9.7.15–16) were checked for Airy integral representations, phase-`π/4` asymptotics, and exponential/oscillatory asymptotic envelopes: [DLMF §9.5](https://dlmf.nist.gov/9.5), [DLMF §9.7](https://dlmf.nist.gov/9.7).
- The Stark two-state energy formula and dipole coupling were checked against MIT 8.05 Quantum Physics II, Chapter 7, §5, pp. 11–16: [lecture notes](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b27e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf).
- The finite-level dipole perturbation and degenerate-subspace diagonalization were checked against Binney & Skinner, *The Physics of Quantum Mechanics*, §§9.1.1–9.1.2; the magnetic coupling context was checked in §7.4.5: [text](https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf). Those sources support the named model calculations; no empirical observation or fitted parameter is asserted by these examples.

## Page verdicts and remaining defects

- A page `qm-controlled-approximations`: accurate after the repairs. Its summary correctly describes the declared variational model, perturbation results, WKB regime, turning-point connection, and smooth-barrier theorem.
- B page `qm-controlled-approximations-examples`: accurate. Its summaries correctly present conditional two-level, Stark, Zeeman, and tunnelling calculations and the distinct smooth and rectangular barrier limits.
- No confirmed defect remains that I could not edit. No proposed withdrawal or blocker was found.

## Validation and coverage limit

Reflow and precheck passed for all three edited items. The final batched proof-layout check reported `3 items, 15 steps, 0 defects`. The updated proof-contract JSON parses; the barrier consumer’s copied turning-point Statement is current. No generic test suite was run.

The assigned two pages and all 18 assigned items were reviewed, together with supplier statements needed for the claims. I did not audit every node in their full transitive dependency closures. No empirical record was claimed or reviewed in this batch.
