# Step 3a reader report — batch 51

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `51`

## Opened inventory

Assigned pages:

- `nrqmx-finite-open-dynamics` — `library/non-relativistic-quantum-mechanics/nrqmx-finite-open-dynamics.md` (A page).
- `nrqmx-finite-open-dynamics-examples` — `library/non-relativistic-quantum-mechanics/nrqmx-finite-open-dynamics-examples.md` (B page).

Assigned items, read in dependency order:

- `def-nrqmx-finite-channel-families`
- `lem-nrqmx-continuous-simplex-integrals`
- `def-nrqmx-finite-jump-trajectories`
- `post-nrqmx-finite-open-model`
- `pthm-nrqmx-finite-reduction-channel`
- `pthm-nrqmx-amplitude-damping-model`
- `pthm-nrqmx-jump-unravelling-finite`
- `ex-nrqmx-finite-environment-recurrence`
- `ex-nrqmx-amplitude-damping-jump-law`

Direct mathematical suppliers opened for the assigned items:

- `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `cor-finite-dimensional-normed-spaces-are-banach`
- `def-complex-exponential`, `def-darboux-integral`, `def-operator-norm`, `def-oriented-integral`, `def-qc-partial-trace`, `def-qsm-dt-channel-definition`, `def-qsm-dt-gksl-definition`
- `lem-derivative-of-a-power`, `lem-exponential-series-of-a-bounded-operator`, `lem-qsm-dt-finite-matrix-trace-ideal`, `lem-qsm-matrix-state-calculus`
- `thm-complex-exponential-addition-and-real-extension`, `thm-continuous-implies-integrable`, `thm-darboux-equals-riemann`, `thm-exponential-limits-and-range`, `thm-heine-borel-rn`, `thm-heine-cantor-metric`, `thm-linearity-of-the-integral`, `thm-monotonicity-of-the-integral`, `thm-newton-leibniz-with-interior-derivative`, `thm-qc-partial-trace-characterization-and-basis-independence`, `thm-qsm-dt-choi-kraus`, `thm-qsm-dt-gksl-sufficient`, `thm-sine-and-cosine-parametrize-the-unit-circle`, `thm-substitution`

Assigned page prerequisites opened:

- `nrqmx-measurement-compatibility` — `library/non-relativistic-quantum-mechanics-mathematics/nrqmx-measurement-compatibility.md`
- `qsm-dt-channels` — `library/quantum-statistical-mechanics/qsm-dt-channels.md`
- `qm-composites-entanglement-and-reduced-states` — `library/non-relativistic-quantum-mechanics-mathematics/qm-composites-entanglement-and-reduced-states.md`

Additional cited target opened to resolve a published dependency's prose: `fs-nonnegative-integrable-with-zero-integral-vanishes` and its cited continuous-case theorem `thm-nonnegative-continuous-with-zero-integral-vanishes`. I also inspected `post-nrqmx-finite-mode-light-matter-model` in batch 57 solely to check its use of the shared finite open-system postulate; this was not a review of batch 57.

## Repairs made

1. In `items/pthm-nrqmx-finite-reduction-channel.md`, Verification 1.1 now keeps the model's fixed system basis and changes only the environment basis. The cited partial-trace theorem grants basis independence for the environment factor, so the former wording's broader system-and-environment basis change was not justified by that supplier.

2. In the same item's Verification 1.2, the two-qubit matrix exponential is now defined by its matrix power series. The proof derives its spectral-block form from the projections of `Z ⊗ Z`, shows entrywise convergence using the scalar complex exponential supplier, and verifies unitarity from the phase moduli. This replaces the unsupported appeal to real-valued functional calculus for a complex-valued exponential.

3. In `items/ex-nrqmx-finite-environment-recurrence.md`, Fact F1 now identifies the exact two-qubit construction supplied by the repaired theorem proof. Verification 1.1 uses that exact construction and the matrix-state-calculus supplier only for its actual Hermitian spectral content; it no longer says the latter defines the complex-valued matrix exponential.

4. Updated the batch 51 proof-contract entries for both changed items: step claims and inputs, citation-use mappings, and the exact supplier excerpt/use for the matrix exponential construction. Neither item had a `verification.judge` record, so there was no stale judge record to remove.

The only assigned TikZ diagram is in `post-nrqmx-finite-open-model.md`. Its arrows follow the stated preparation, joint unitary, partial trace, and reduced output. No additional diagram is needed for the reviewed arguments; their proofs do not rely on the diagram.

## Validation after the final edits

- `reflow.mts` on both changed items: unchanged.
- `precheck.mts` on `pthm-nrqmx-finite-reduction-channel`: pass, 0 failing.
- `precheck.mts` on `ex-nrqmx-finite-environment-recurrence`: pass, 0 failing.
- One batched `proof-layout.mjs` run on both changed items: 2 items, 8 steps, 0 defects.

## Unedited findings

- `post-nrqmx-finite-open-model`, `## Postulate`, paragraph beginning “A time-homogeneous finite GKSL model…”: the optional assignment uses `T_t = e^{t\mathcal L}` without defining the operator exponential or identifying an exact earlier item that defines it. Its direct dependency `def-qsm-dt-gksl-definition` defines the generator and a continuous-time propagator notion, but not the operator exponential. A mathematical reader needs the finite-dimensional power-series definition and its convergence, or an exact exponential supplier with the required hypotheses. I left this public Postulate formulation for owner disposition because closing it changes the postulate/manifest interface. The assigned GKSL theorem consumers have their own operator-exponential suppliers; the inspected batch 57 consumer refers to a separately selected GKSL model but does not use this `T_t` notation.

- `thm-monotonicity-of-the-integral`, Statement, paragraph beginning “Equality in claim 1 does not force $f$ to vanish”: the sentence says a zero-integral nonnegative integrable function “may be positive at infinitely many points; that is FALSE,” leaving it unclear whether “FALSE” negates that true assertion or introduces the following false universal claim. The cited `fs-nonnegative-integrable-with-zero-integral-vanishes` explicitly constructs Thomae's function, which is nonnegative, has integral zero, and is positive at every rational point. A published-item prose repair is needed to say unambiguously that the universal claim of identically vanishing is false. This published dependency is uneditable here; the assigned consumer whose direct dependency closure reaches it is `lem-nrqmx-continuous-simplex-integrals`.

## Page verdicts and blocker

- `nrqmx-finite-open-dynamics` (A): page inventory and prerequisite-page mapping agree with the assigned manifest; its frontmatter-only body matches the run's compact statement-first layout. The page has the unedited postulate issue above, so the page's content review is held on that item disposition.
- `nrqmx-finite-open-dynamics-examples` (B): item inventory and companion relationship agree with the assigned manifest; the frontmatter-only body matches the compact layout. The repaired recurrence example proof now uses the supplied exponential construction. No B-page prose was edited.

No validator blocker remains for the two repaired proof items. Owner disposition is needed for the unedited postulate definition gap and the published dependency prose ambiguity. I did not edit a manifest, another batch, a published item, or source papers.

## Source locators checked

- Watrous, *The Theory of Quantum Information*, Chapter 2, §2.1.3, printed pp. 67–69, partial trace; §2.2.2, Theorem 2.22, printed pp. 82–84, finite Choi/Kraus/Stinespring characterizations: [author-hosted Chapter 2 PDF](https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf).
- Lin and Wiebe, *Quantum Algorithms for Scientific Computation*, Chapter 21, §21.1, equations (21.1)–(21.5) and Theorem 21.2, printed pp. 307–311: [author-hosted lecture notes](https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf).
- Rivas, Huelga, and Plenio, *Quantum Non-Markovianity: Characterization, Quantification and Detection*, §3.2, Definition 3.2 and equation (29), printed pp. 10–11: [arXiv PDF](https://arxiv.org/pdf/1405.0303).

I checked the cited locators relevant to finite partial trace, Kraus form, the finite GKSL generator/channel result, and CP-divisibility. I did not audit unrelated members of the prerequisite pages or treat author coverage notes as proof acceptance; no empirical observation is in this batch.
