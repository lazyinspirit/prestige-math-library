# Step 3a reader report — batch 21

Run: physics-cm-qm-gr-79-2026-10-11

## Inventory reviewed

Pages opened:

- A: cm05-two-body-central-forces-and-gravitation — library/non-relativistic-classical-mechanics/cm05-two-body-central-forces-and-gravitation.md
- B: cm05-two-body-central-forces-and-gravitation-examples — library/non-relativistic-classical-mechanics/cm05-two-body-central-forces-and-gravitation-examples.md

All 15 assigned items were opened and reviewed: lem-cm05-radial-potential-gradient, pthm-cm05-relative-reduction, post-cm05-central-model, pthm-cm05-plane-area, pthm-cm05-effective-potential, pthm-cm05-circular-orbit, post-cm05-gravity, pthm-cm05-conic, pthm-cm05-kepler-period, rem-cm05-collision-scope, ex-cm05-gravitational-ellipse-and-period-check, ex-cm05-parabolic-and-hyperbolic-branch-check, ex-cm05-barycentric-orbits-check, ex-cm05-circular-orbit-frequency-check, and cex-cm05-external-force-breaks-relative-reduction.

Dependencies opened in supplier-before-consumer order included the Newtonian
spacetime/frame/worldline and force/interactions postulates; the configuration,
units, Newtonian-flow, centre-of-mass and momentum definitions; the momentum
balance and centre-of-mass splitting results; the radial-gradient and central
trajectory items; the vector-curve calculus and FTC suppliers; and the central
angular-momentum, polar-reduction, circular-orbit, oscillator, Kepler, ellipse,
period, measure-change and ODE-continuation suppliers used by the claims. Their
exact statements and relevant proof passages were checked where they carry an
inference. The complete transitive closure has 1,130 item nodes; I did not
re-audit every foundational item in that closure.

## Repairs and consumer review

In pthm-cm05-conic, I defined the focus-directrix locus and its eccentricity
classes before using those geometric terms. I stated the force-centre
directrix explicitly, proved that the polar formula places the relative
trajectory on that locus, defined the circular case and periapsis distance,
and clarified that the trajectory need not traverse an entire unbounded
conic. I replaced the ambiguous “open conic” wording with “unbounded conic.”
The A-page summary, pthm-cm05-kepler-period, the elliptic,
parabolic/hyperbolic and barycentric examples, and the collision-scope remark
were checked as consumers. The parabolic/hyperbolic example now states that
the conic loci are unbounded and avoids implying that its motion covers the
entire locus. The collision-scope remark now refers to unbounded conic
branches.

I updated the proof-contract derivations and endpoint boundary evidence for
pthm-cm05-conic, and the derivation and boundary evidence for
ex-cm05-parabolic-and-hyperbolic-branch-check. The edited items had no stale
verification.judge records. rem-cm05-collision-scope is a nonproof remark
with no derivation worksheet.

Validation after the final edits:

- Reflow: all three changed item paths reported unchanged.
- Precheck: pthm-cm05-conic and ex-cm05-parabolic-and-hyperbolic-branch-check
  passed; the nonproof remark was not counted.
- Proof layout: 3 changed items, 7 proof steps, 0 defects.

## Sources checked

- CODATA 2022, Section XIV and Table XXX (report pp. 44–46), and Table XXXII
  (p. 49), [arXiv:2409.03787](https://arxiv.org/pdf/2409.03787): the 16 measured
  input values for G, the 3.9 uncertainty-expansion factor, unchanged 2018
  and 2022 inputs, G = 6.67430(15) × 10^-11 m^3 kg^-1 s^-2, relative standard
  uncertainty 2.2 × 10^-5, and the exact SI value of c. These support the
  qualified aggregate premise in post-cm05-gravity; no measurement is added
  by this batch.
- Likharev, Essential Graduate Physics: Classical Mechanics, §3.4,
  Eqs. (3.30)–(3.48), [PDF](https://essentialgraduatephysics.org/Files/CM%20merged.pdf):
  the reduced-mass/centre-of-mass split, angular momentum and area rate, and
  effective radial energy and quadratures.
- Stewart, MIT 8.09, §4.5, Eqs. (4.148), (4.150), and (4.155)–(4.156),
  [PDF](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf):
  the reduced-mass Kepler equation, angular-momentum constant, polar orbit
  formula, and eccentricity-energy relation.

The cited Tong PDF URL was attempted but the browser returned an internal
retrieval error. I do not claim to have read that PDF; the checks above use the
opened Likharev, MIT and CODATA sources together with the local deductions.

## Defects not repaired

Both unresolved defects are in batch 5’s mathematical suppliers, outside this
reader assignment:

- thm-cm-kepler-binet-equation — Proof 4.1 (current item SHA-256
  dfc1f8ebf427a5e4ffdceb364d3ef73bec4b113c6224fbcdba82971fc2ec3fe2).
  From the cited polar-reduction equation and U(ρ) = -κ/ρ, the correct radial
  equation is μρ'' = -κ/ρ² + J²/(μρ³). Proof 4.1 writes the opposite signs,
  then uses that wrong equation to infer the correct Binet result. The
  displayed inference is not valid; the step must use the correct radial sign
  and redo the algebra.
- thm-cm-kepler-conic-and-eccentricity — Facts & Assumptions [L1] and Proof
  1.1–2.1 (current item SHA-256
  7f46a3e30511099f9a1740c96b16406143ccf7d5154ddab3b8a177a3c1197320).
  The item defines c = μκ/J², but [L1] says μκ/J² = c^-1, and Proof 1.1
  subtracts c^-1 from Binet’s equation. Proof 2.1 then identifies a term
  based on c^-1 with c(1 + e cos(φ - θ0)). These reciprocal-constant errors
  mean the claimed conic formula is not established by this proof.

The Binet item changed during this review. I rechecked its current Proof 4.1;
the sign error remains in the bytes whose current hash is recorded above.
The directly assigned consumer of both suppliers is pthm-cm05-conic; its
downstream period and numerical examples inherit the unproved Kepler
classification. The owner of batch 5 must repair or re-prove these suppliers
before those dependent claims can be cleared.

## Page verdicts

- cm05-two-body-central-forces-and-gravitation (A): hold. The local radial
  gradient, relative reduction, area law, effective-potential and circular
  orbit arguments checked; the conic and period chain remains blocked by the
  batch 5 supplier proofs above.
- cm05-two-body-central-forces-and-gravitation-examples (B): hold. Declared-data
  arithmetic and the external-force counterexample checked, but the elliptic,
  parabolic/hyperbolic and barycentric computations rely on the unresolved
  conic/period chain.

## Blocker and coverage limit

The batch 5 owner must close the two supplier proof defects. I made no edits
outside batch 21. All assigned pages and items and the direct, mathematically
material dependencies listed above were reviewed. The 1,130-node transitive
closure was not audited exhaustively at the level of every foundational proof.

