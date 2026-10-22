# Reader report — batch 45

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `45`

## Opened inventory

### Assigned pages

- `library/non-relativistic-quantum-mechanics-mathematics/nrqmx-scattering-interfaces.md`
- `library/non-relativistic-quantum-mechanics-mathematics/nrqmx-scattering-interfaces-examples.md`

The first page lists six A items and requires `nrqmx-form-spectral-methods`,
`qm-math-controlled-dynamics`, `unbounded-self-adjoint-operators-and-stones-theorem`,
and `improper-and-parameter-dependent-multiple-integrals`. The examples page
lists two B items and requires the A page. Both assigned pages have empty bodies,
as required for this run's frontmatter-only page layout.

### Assigned items, read in supplier-before-consumer order

1. `def-nrqmx-scattering-channel-data`
2. `def-nrqmx-resonance-matrix-element-poles`
3. `lem-nrqmx-gaussian-resolvent-continuation`
4. `thm-nrqmx-short-range-scattering-completeness`
5. `thm-nrqmx-finite-channel-wigner-smith`
6. `thm-nrqmx-rank-one-resonance-continuation`
7. `cex-nrqmx-cook-not-completeness`
8. `ex-nrqmx-single-phase-time-delay`

### Immediate page prerequisites opened

- `nrqmx-form-spectral-methods` (draft); its current `thm-nrqmx-rank-one-resolvent` supplier is batch 44 and was opened with its complete proof.
- `qm-math-controlled-dynamics` (published).
- `unbounded-self-adjoint-operators-and-stones-theorem` (published).
- `improper-and-parameter-dependent-multiple-integrals` (published).

### Direct item-dependency interfaces opened

All 34 unique targets declared by batch 45 items were inspected at the current
Definition or Statement interface. The assigned-batch targets are the channel
definition, resonance-pole definition, Gaussian continuation lemma, and
finite-channel Wigner–Smith theorem. The other targets are:

- `def-axiom-of-choice`, `def-countable-choice`, `def-bounded-linear-operator`,
  `def-symmetric-self-adjoint-and-essentially-self-adjoint`,
  `def-complex-differentiability-holomorphic-and-entire`,
  `def-resolvent-and-spectrum-of-a-closed-unbounded-operator`,
  `def-projection-valued-measure`, `def-unbounded-integral-against-a-pvm`,
  `def-borel-sigma-algebra`, and
  `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`;
- `lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group`,
  `thm-canonical-spectral-type-decomposition`,
  `thm-self-adjoint-resolvent-estimate`, `thm-dominated-convergence`,
  `thm-gaussian-integral`, `thm-identity-theorem-holomorphic-functions`,
  `thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators`,
  `thm-polar-coordinates-formula-for-lebesgue-measure`,
  `thm-tonelli-theorem-for-sigma-finite-product-spaces`,
  `thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness`,
  `thm-nrqm-controlled-dynamics-stationary-dynamical-sector-identification`,
  `thm-spectral-theorem-for-unbounded-self-adjoint-operators`,
  `cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure`,
  `thm-completion-measurable-functions-have-base-measurable-representatives`,
  `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-rationals-countable`,
  `lem-q-and-irrationals-dense-r`,
  `thm-l-p-of-a-sigma-finite-countably-generated-measure-space-is-separable`,
  and `thm-unbounded-borel-functional-calculus`;
- the current-run, out-of-batch `thm-nrqmx-rank-one-resolvent` from batch 44.

The two direct scattering suppliers were checked against the exact compact-support
and Fourier/resolvent conventions used by the assigned short-range theorem. The
rank-one supplier's hypotheses and formula match the conditional interface in
`thm-nrqmx-rank-one-resonance-continuation`. No recursively complete re-audit of
all transitive published mathematical suppliers is claimed.

## Review and repairs

### `def-nrqmx-scattering-channel-data`

At `## Definition`, line 44, the assertion that completeness makes
`S=Omega_+^* Omega_-` unitary did not explicitly retain the isometry hypotheses
stated immediately before it. For the allowed general bounded identification
map `J`, completeness is defined only by the range condition and does not imply
isometry. For example, with `H=H_0=M_x` on `L^2((0,1))` and `J=2I`, both limits
are `2I` and have range the whole absolutely continuous subspace, but are not
isometries and their composite is `4I`, not unitary. Yafaev's *Lectures on
Scattering Theory*, PDF p. 3, Definitions 1.1 and 1.3, also distinguishes
ordinary isometric wave operators from bounded-`J` modified wave operators,
whose isometricity can be lost. I changed the sentence to state explicitly that
both limits must exist, be isometries on the free absolutely continuous
subspace, and be complete onto the interacting absolutely continuous
subspace.

At the same Definition, the terms “channel threshold” and “on-shell” were used
without definitions. The data already specifies a fixed integer `r` and a
matrix field `S:I -> U(r)`; I removed those terms and stated that the field is
separate input, not asserted to arise from the abstract wave operators.

At `## Channel diagram`, line 64, the prose described the right arrow as
restricted to the interacting absolutely continuous subspace, while the
displayed middle object is the full space `H`. The diagram's objects and
composition are mathematically sound when the right arrow is the full adjoint
`Omega_+^*: H -> H_ac(H_0)`; the codomain restriction follows from
`Omega_+=Omega_+ P_ac(H_0)`. I corrected the caption to give that map and its
domain/codomain precisely. The diagram itself needs no change.

### Consumer review for the definition edit

The only current consumers found in `items/` or `library/` are the three
assigned items below; each was checked against the old and repaired wording:

- `cex-nrqmx-cook-not-completeness` uses only the exact range definition of
  completeness; its witness and proof are unchanged.
- `thm-nrqmx-finite-channel-wigner-smith` uses the separately supplied fixed-r
  matrix-field convention; removing undefined threshold language does not
  change its hypotheses or proof.
- `thm-nrqmx-short-range-scattering-completeness` obtains isometry and
  completeness from its exact compact-support supplier before asserting
  unitarity; the interface clarification does not change its proof.

I updated the channel definition's affected boundary contract entries and
regenerated the three consumer citation/derivation contract entries from their
current item text. The definition item had no `verification.judge` record to
remove. No consumer source edit was needed.

### Other assigned items

- `def-nrqmx-resonance-matrix-element-poles` specifies the Hilbert-space
  resolvent convention, test space, continuation domain, and finite-order
  matrix-element pole. No defect found.
- `lem-nrqmx-gaussian-resolvent-continuation` normalizes the Gaussian, uses the
  stated `(H_0-zI)^{-1}` convention, matches the positive square-root branch,
  and proves the continuation by explicit difference quotients and the
  identity theorem. No defect found.
- `thm-nrqmx-short-range-scattering-completeness` matches its compact-support
  supplier's operator/domain hypotheses and its stationary supplier's positive
  energy, Fourier, and resolvent conventions. The source-backed statement is
  conditional and makes no threshold or Coulomb claim. No defect found.
- `thm-nrqmx-finite-channel-wigner-smith` proves Hermiticity, the determinant
  derivative identity, and covariance under energy-independent unitary basis
  changes; its units and non-operational-interpretation caveat are correct.
  No defect found.
- `thm-nrqmx-rank-one-resonance-continuation` uses the current rank-one
  supplier under its exact hypotheses, proves the pole order and simple-zero
  residue, and distinguishes continuation poles from nonreal eigenvalues.
  The Gaussian specialization has the stated absolute-continuity and
  noncancellation conditions. No defect found.
- `cex-nrqmx-cook-not-completeness` constructs a separable pair of purely
  absolutely-continuous multiplication operators; the two limits equal the
  proper isometric inclusion, while the interacting absolutely continuous
  subspace is the full direct sum. This is a valid counterexample to the
  refuted universal statement. No defect found.
- `ex-nrqmx-single-phase-time-delay` correctly computes
  `Q=2*hbar*delta'`, carries the energy/time units, and disclaims an operational
  arrival-time interpretation. No defect found.

## Diagram review

The channel diagram in `def-nrqmx-scattering-channel-data` is the only
TikZ/TikZCD diagram in the assigned items. Its object labels, arrow directions,
and diagonal composite agree with the definition. The caption repair above
aligns the stated adjoint map with the displayed middle object. Proofs do not
rely on the diagram. No additional diagram is required by the other items.

## Source checks

Relevant primary-source passages were checked against the cited conventions and
claims:

- [Yafaev, *Lectures on Scattering Theory*](https://arxiv.org/pdf/math/0403213),
  PDF pp. 2–3, Definitions 1.1–1.3 (wave operators, completeness, and bounded
  `J` modification); pp. 10–11, equations (2.14)–(2.16) (scattering operator
  and stationary matrix).
- [Texier, *Wigner Time Delay and Related Concepts*](https://arxiv.org/pdf/1507.00075),
  PDF pp. 3–4, §§2.2.1 and 2.2.4, equations (11)–(12), (17), and (19)
  (Wigner–Smith convention, Hermiticity, and trace/determinant identity).
- [Haberzettl and Workman, *Time-Delay in a Multi-Channel Formalism*](https://arxiv.org/pdf/0708.3989),
  PDF pp. 2–3, equations (3)–(9) (multichannel convention and correction of
  the propagated Smith convention error).
- [Gadella and Pronko, *The Friedrichs Model and its Use in Resonance Phenomena*](https://arxiv.org/pdf/1106.5782),
  PDF pp. 2–5 and 10–11 (resolvent matrix elements, continuation, and poles
  from zeros of the reduced denominator).
- [Albeverio and Kurasov, *Singular Perturbations of Differential Operators*](https://api.pageplace.de/preview/DT0400.9781139382595_A23867432/preview-9781139382595_A23867432.pdf),
  printed pp. 9–10, Theorem 1.1.1 and proof (rank-one resolvent identity).
- [Taylor, *Introduction to Analysis in Several Variables*](https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf),
  §3.1, printed p. 105 (the two-dimensional Gaussian integral and the
  one-dimensional value `sqrt(pi)`).
- [Zwiebach, *Quantum Physics III*, Chapter 7: Scattering](https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/45dbd7038c3e969491eceeae86c44d42_MIT8_06S18ch7.pdf),
  §§7.1 and 7.3, printed pp. 134–149 (positive-energy finite-range setup,
  outgoing Green function, and integral scattering equation). Its Green
  function solves `Delta+k^2`; the assigned operator proof keeps the separate
  `(H-zI)^{-1}` convention from the mathematical supplier.

## Checks, page verdicts, and outstanding items

- Required reflow: `reflow.mts items/def-nrqmx-scattering-channel-data.md` —
  unchanged.
- Required precheck: `precheck.mts items/def-nrqmx-scattering-channel-data.md`
  — 0 failing.
- Required final proof-layout run: one changed item, 0 proof steps, 0 defects.
- `nrqmx-scattering-interfaces`: **pass**. Its six-item inventory and four
  immediate page prerequisites are coherent; the one definition repair is
  recorded above.
- `nrqmx-scattering-interfaces-examples`: **pass**. Its two example items and
  prerequisite A page agree with the manifest.
- Uneditable defects: none found.
- Blockers: none.

Coverage limitation: I reviewed all assigned items, both assigned pages, their
immediate page prerequisites, and every direct item-dependency interface used
by the assigned claims. I did not recursively re-audit every transitive proof
of published mathematical suppliers; those current supplied statements were
treated as logical inputs where appropriate.

The current edited item SHA-256 is
`6b041d8840b3be30686006e7aa732bf60f67b53bee3e41506114d8a8f3502da9`. The
immutable batch-45 pre-reader hash file records its prior `item_sha256` as
`455e40c1b69d039c09a4b519dfb8a7e4025da042fe48db018623bcfe265d3977`; this is
recorded as a baseline, not as an independently computed pre-edit observation
hash.
