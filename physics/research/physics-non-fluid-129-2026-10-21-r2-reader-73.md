# Step 3a reader report — batch 73

Run: `physics-non-fluid-129-2026-10-21-r2`

Role: reader

## Scope and opened inventory

I opened both assigned pages and all five assigned items. The A and B pages are
frontmatter-only, so each page has no prose summary body.

Assigned pages:

- `qftx-photon-paraxial` (A, draft): `def-qftx-paraxial-cone`,
  `lem-qftx-paraxial-vortex-packet-existence`,
  `prop-qftx-paraxial-spin-error`, and
  `prop-qftx-spin-to-orbit-constraint`.
- `qftx-photon-paraxial-examples` (B, draft):
  `ex-qftx-vortex-paraxial-label`.

Items were read in supplier-before-consumer order. I opened the local direct
suppliers `def-qftx-photon-helicity-bundle`,
`prop-qftx-helicity-chern-obstruction`,
`thm-qftx-photon-rotations-helicity`,
`def-qftx-photon-projected-angular`, and
`prop-qftx-photon-fock-angular-lift`, together with their
relied-on statements and arguments. I also opened the mathematical suppliers
used in the assigned arguments: the Axiom of Choice and Countable Choice
definitions and implication theorem; the mass-shell measure isometry and
transverse-space definition; the sphere-moment and chart-measure lemmas; the
smooth-bump lemma; Fubini; the polar-coordinate theorem; the sine/cosine
identities and bounds; Stone's theorem; the metric compactness and continuity
results; and general Stokes. I read the published Euclidean inner-product
definition, whose defect is recorded below.

Page prerequisites were opened: `qftx-photon-angular-momentum`,
`qftx-photon-helicity`, `qft-mf01`,
`qft-mg01`,
`integration-of-forms-and-the-general-stokes-theorem`,
`countability-and-uncountability`, and
`trigonometric-and-oscillatory-examples-in-one-variable`.
Their page summaries and prerequisite relations were checked.

Source passages read for the paraxial and cone conventions:

- Bliokh et al., “Angular Momenta and Spin-Orbit Interaction of Nonparaxial
  Light in Free Space,” arXiv:1006.3876v3, §IV, Eq. (24) and Eqs. (25)–(26),
  PDF p. 4. Eq. (24) uses a fixed-polar-angle delta spectrum; the paragraph
  after Eq. (26) identifies the paraxial limit as `theta_0 -> 0`.
  <https://arxiv.org/pdf/1006.3876>
- Bekshaev, Soskin, and Vasnetsov, “Paraxial Light Beams with Angular
  Momentum,” §2, PDF p. 6: the diffraction-angle ratio `gamma << 1`
  is the small parameter of the paraxial approximation. Section 4.2, PDF
  pp. 26–27, describes an inhomogeneous half-wave plate and the `q=1`
  spin-to-orbital conversion while total angular momentum stays constant.
  <https://arxiv.org/pdf/0801.2309>
- Palmerduca and Qin, “Photon topology,” §III, Theorem 18 and Eqs. (59)–(63),
  PDF pp. 21–22, for the helicity-line Berry curvature and nonzero Chern
  numbers. <https://arxiv.org/pdf/2308.11147>
- Tong, *Quantum Field Theory*, §6.2.1, Eqs. (6.511)–(6.523), for transverse
  photon modes and polarization conventions.
  <https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html>

## Reader repairs

1. In `def-qftx-paraxial-cone`, I renamed the fixed-aperture
   object a **forward cone** and made the paraxial terminology refer to the
   small-angle family `theta_max downarrow 0`. The coefficient
   regularity clause now writes the scalar coefficient relative to the north
   gauge and specifies `b in C^infinity(V)` on an open
   `(r,n_z)` domain containing the axis values. Its proof
   verifies smoothness from the Cartesian polynomial factor. The change
   preserves the forward-cone class and the later finite-aperture estimates.
2. In `prop-qftx-spin-to-orbit-constraint`, I changed the
   phrase “paraxial vortex input” to the precise “north-gauge vortex input.”
   This aligns the statement with the forward-cone / small-angle distinction;
   no proof argument changed.
3. In `ex-qftx-vortex-paraxial-label`, I changed the title
   to “A finite-energy vortex packet and its cone-bounded labels.” The
   statement now defines the exact fixed-angle surface
   `C_theta0 = {k : theta(k)=theta0}` and fixed-radius shell
   `S_r0 = {k : |k|=r0}`; the proof names those same sets and
   specifies integer `m >= 2` in the countable annular union.
   This removes the ambiguity between a fixed-angle cone surface and a
   positive-measure solid angular cone.

I updated the batch-73 proof contracts for the changed derivations and
boundaries. The old hash-bound example template-review row was removed from
the current contract because it referred to the pre-repair carrier; its
historical source file was not changed. The cone's preserved boundary
worksheet is marked as historical pre-reader evidence. The three changed items
had no `verification.judge` record to remove.

Required checks after the final item edits:

- Reflow: all three changed item files reported `unchanged`.
- Precheck: all three changed items passed with zero failures.
- Proof layout, one batched command: 3 items, 13 steps, 0 defects.

## Uneditable finding

`def-euclidean-inner-product` is a published root-mathematics
dependency reached from assigned consumer `def-qftx-paraxial-cone`
through the photon transverse-space and measure-isometry suppliers. Its
Definition's first paragraph contains a malformed sentence beginning “This is
the same set that…”, which splices duplicate descriptions of `R^n`
and its metrics into an unparseable clause. The later displayed formula still
states the Euclidean dot product explicitly, so the relevant value is
recoverable; the published item nevertheless needs an editorial repair. It is
read-only for this assignment and is routed in the JSON findings file as a
nonfatal `ill-formed` published-dependency finding.

No defect was found in the current-run suppliers from batches 71 and 72 that
were needed for the assigned claims.

## Page verdicts

- `qftx-photon-paraxial`: **Accept after reader repair.** Its
  definitions and conditional conclusions are explicit after the small-angle
  and axis-regularity clarifications. No page-body summary is authored.
- `qftx-photon-paraxial-examples`: **Accept after reader
  repair.** The fixed-angle surface and radial shell are precisely named and
  the null-set deduction is justified. No page-body summary is authored.

## Diagram review and coverage

The only TikZ/TikZCD diagram in the inspected assigned/dependency material is
the commutative square in `thm-qftx-photon-rotations-helicity`.
Its vertical arrows are the weighted and Lebesgue rotation actions, and the
horizontal arrows are `W`; the square matches the proved
identity `W U_nu(R)=U_0(R) W`. The proof does not rely on the
diagram. The assigned pages and items contain no diagrams requiring repair.

There is no workflow blocker. I opened all assigned items and pages and the
direct suppliers needed to check their arguments. I did not independently
re-audit every transitive proof in the published mathematical library; the
exact relied-on supplier statements and source passages were checked, and the
ill-formed published dependency found in that closure is reported rather than
edited.
