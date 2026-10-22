# Step 3a reader report — batch 71

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader (`reader-71`)  
Scope: A page `qftx-photon-helicity` and B page `qftx-photon-helicity-examples`.

## Inventory opened

Assigned pages:

- `library/quantum-field-theory-mathematics/qftx-photon-helicity.md` (A page)
- `library/quantum-field-theory-mathematics/qftx-photon-helicity-examples.md` (B page)

Assigned items, read supplier-before-consumer:

1. `items/lem-qftx-photon-invariant-measure-isometry.md`
2. `items/def-qftx-photon-helicity-bundle.md`
3. `items/thm-qftx-photon-rotations-helicity.md`
4. `items/prop-qftx-helicity-chern-obstruction.md`
5. `items/cex-qftx-fixed-polarization-tensor-factor.md`

The relevant proof-contract entries, `research/physics-non-fluid-129-2026-10-21-r2-batch-71.pages.json`, `research/physics-non-fluid-129-2026-10-21-r2-batch-71.cross-batch-dependencies.json` (empty array), and the batch author notes were opened as navigation and evidence, not verdicts. The cross-batch file has no declared edge.

Direct mathematical suppliers opened for the assigned arguments:

- Definitions: `def-countable-choice`, `def-choice-function`, `def-axiom-of-choice`, `def-euclidean-inner-product`, `def-qft-fock-and-test-spaces`, and `def-qft-photon-transverse-space`.
- Results: `cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn`, `lem-em-sphere-zonal-moments`, `lem-euclidean-chart-measure-agrees-with-polar-surface-measure`, `lem-smooth-bump-between-concentric-euclidean-balls`, `thm-polar-coordinates-formula-for-lebesgue-measure`, `thm-choice-implies-dependent-implies-countable-choice`, `thm-stone-one-parameter-unitary-groups`, `thm-heine-borel-rn`, `thm-heine-cantor-metric`, `thm-extreme-value-metric`, `thm-general-stokes-theorem`, `thm-lebesgue-measure-is-a-complete-measure`, `thm-borel-sets-are-lebesgue-measurable`, `thm-lebesgue-measure-of-a-box-of-every-kind`, and `prop-measure-monotonicity`.
- Page prerequisites opened: `qft-mg01`, `qft-mf01`, and `integration-of-forms-and-the-general-stokes-theorem`.

Source passages checked:

- Eric Palmerduca and Hong Qin, [*Photon topology*](https://arxiv.org/pdf/2308.11147), §III, Theorem 18 and Eqs. (59)–(63), PDF pp. 21–22. The source uses $\omega_\pm=\langle e_\pm,de_\pm\rangle$, $\Omega_\pm=\pm i\,dA$, and $C_1(\gamma_\pm|_{S^2})=\mp2$, matching the item’s explicit convention and signs.
- David Tong, [*Quantum Field Theory*, Chapter 6](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html), §6.2.1, Eqs. (6.511)–(6.514). These give the Coulomb-gauge transverse constraint and momentum-dependent polarization vectors; the surrounding text concerns a real continuous polarization basis.
- Konstantin Y. Bliokh et al., [*Angular Momenta and Spin-Orbit Interaction of Nonparaxial Light in Free Space*](https://arxiv.org/pdf/1006.3876), §I, Eq. (1), and §II, transversality discussion and Eqs. (2)–(9). The source states $\hbar=c=1$; its canonical orbital and spin terms do not separately preserve the transverse subspace, while the total action does. The local operator formulas restore $\hbar$ and prove the stated domain claims.

Current in-run consumers checked for the precise sphere and rotation interfaces clarified below: `ex-qftx-nonparaxial-spin-projection`, `lem-qftx-measurable-helicity-scalarization`, `def-qftx-photon-projected-angular`, `lem-qftx-photon-rotation-test-core`, `prop-qftx-photon-fock-angular-lift`, `thm-qftx-photon-projected-commutators`, `def-qftx-paraxial-cone`, `prop-qftx-paraxial-spin-error`, `lem-qftx-paraxial-vortex-packet-existence`, `prop-qftx-spin-to-orbit-constraint`, `ex-qftx-vortex-paraxial-label`, and `post-qftx-ideal-wavepacket-counting`. They use $S^2$ as the unit sphere and the same helicity and rotation conventions; the added definitions do not change those claims. The assigned theorem, proposition, and counterexample consumers were also checked directly.

## Repairs and evidence

- **`lem-qftx-photon-invariant-measure-isometry` — citation locator.** The original Palmerduca–Qin locator described the exact $d^3\mathbf k/(2|\mathbf k|)$ measure as source-supported. In the opened *Photon topology* PDF, Eq. (14), PDF p. 7, has the field-expansion factor $1/\sqrt{2|\mathbf k|}$; the Hilbert-space discussion at Eq. (173), PDF p. 47, and Eq. (185), PDF p. 51, uses $d^3\mathbf k/|\mathbf k|$. I corrected the locator to distinguish that source convention from the item’s explicit factor $1/2$. The local multiplier $Wf=f/\sqrt{2|\mathbf k|}$, its norm identity, null-set equivalence on annuli, and surjectivity are proved in the item itself. The associated proof-contract risk note now records this distinction.

- **`def-qftx-photon-helicity-bundle` — explicit domain and smooth structure.** I defined $S^2=\{\mathbf n\in\mathbb R^3:|\mathbf n|=1\}$, its subspace topology, and the six graph charts over the open unit disk. This supplies the base-space structure for the smooth projectors, local helicity sections, and Borel section consumers. The chart definitions preserve all previously used unit-vector and rotation conventions. The proof-contract given record and risk note were updated.

- **`thm-qftx-photon-rotations-helicity` — well-defined rotation action and complete Stone-generator argument.** Step 1.1 now handles $L^2$ equivalence classes explicitly: a rotation carries every exceptional null set to a null set under the invariant measure, so composition is well-defined and transversality holds almost everywhere. The statement specifies $\hbar\in\mathbb R_{>0}$, the unit axis by $\mathbf a\in\mathbb R^3$ with $|\mathbf a|=1$, the componentwise gradient, and the matrix exponential by its Frobenius-norm power series; it distinguishes that matrix exponential from the operator exponential supplied by Borel functional calculus. The proof now establishes the axis subgroup in $SO(3)$ before invoking Stone’s theorem. It proves derivative convergence on an annulus: Heine–Cantor gives uniform continuity of the $t$-derivative, and the scalar mean-value step is derived locally from the extreme-value theorem already in the dependencies. Finite annular measure gives $L^2$ convergence; closedness of the transverse Hilbert subspace keeps the derivative in that space. Stone’s theorem then identifies the self-adjoint generator on $\mathcal D$. The existing consumer claims remain valid. The proof contract was updated to steps 1.4, 3.1, 4.1, 5.1, and 6.1.

- **`prop-qftx-helicity-chern-obstruction` — sphere hypotheses and pole gauges.** The statement now defines the unit sphere charts, subspace topology, and outward orientation. Step 1.2 gives explicit Cartesian north and south gauges for $\sigma=+1$, then obtains both $\sigma=-1$ gauges by conjugation, proving smoothness at both poles and the degree-$2\sigma$ transition. The proposition now depends directly on `thm-heine-borel-rn`; its facts and proof use this result to establish compact support of the global form before applying the general Stokes theorem. The Chern signs remain $\frac1{2\pi}\int F_\sigma=2\sigma$ and $c_1=-2\sigma$ under the stated convention. The proof contract now records the new supplier and corrected gauge/Stokes argument.

No stale `verification.judge` record existed on any edited item. None was added. The B-page counterexample needed no repair: its test vector at $\mathbf k=\kappa e_1$, positive-measure $L^2$ witness, and restricted conclusion about the fixed polarization pair are sound. The square diagram in the rotation theorem has $W$ on both horizontal arrows and the weighted/Lebesgue rotation actions on the vertical arrows; it represents $WU_\nu(R)=U_0(R)W$, proved by substitution independently of the diagram. No additional diagram is needed.

## Validation

For the four edited items, scoped reflow returned `unchanged` and precheck passed for each. The required single proof-layout run reported: `4 items, 24 steps, 0 defects`.

## Page verdicts

- **`qftx-photon-helicity` (A): pass.** The frontmatter-only page has the assigned items and declared prerequisites; no page-prose defect was present. The item repairs above are recorded in their files and contracts.
- **`qftx-photon-helicity-examples` (B): pass.** The frontmatter-only companion places the assigned counterexample correctly and requires the A page. Its item proof and scope need no repair.

## Unresolved evidence and scope limits

The batch manifest is a frozen authoring snapshot and does not list the newly required published dependency `thm-heine-borel-rn` added to `prop-qftx-helicity-chern-obstruction`. I did not edit the manifest under the item/page-only repair scope. The dependency is published mathematics, so the in-run level remains 2 and the empty cross-batch file remains correct; the owner should reconcile the manifest if a later exact dependency comparison requires it.

The separate `research/physics-non-fluid-129-2026-10-21-r2-batch-71.coverage.json`, lines 47–50, makes an unqualified claim that the Palmerduca–Qin paper uses $d^3\mathbf k/(2|\mathbf k|)$. The passages I inspected state a Hilbert-space volume form $d^3\mathbf k/|\mathbf k|$ at Eq. (185), while Eq. (14) shows a field-expansion factor $1/\sqrt{2|\mathbf k|}$. The coverage record should distinguish those statements and explain the normalization inference, if intended. I corrected the assigned item’s locator but did not edit this research evidence file because it is outside the assigned item/A-page write scope. The owner should reconcile that coverage row before relying on its source claim.

I reviewed all assigned items, their direct suppliers used in the arguments, the three required page prerequisites, and the listed current-run consumers affected by the clarified sphere/rotation interfaces. I did not independently audit the full transitive mathematical supplier closure or reread entire papers beyond the cited passages; the opened source limits are stated above. No uneditable defect remains in an assigned item or page. The only outstanding work is owner-side reconciliation of the two evidence records named here.
