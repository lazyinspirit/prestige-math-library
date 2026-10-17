# Step 3a reader report — batch 18

Run: `physics-remaining-80-2026-10-17`  
Role: reader  
Scope: batch `18` only

## Opened inventory

Assigned pages:

- `emg-mp01` — Smooth matter quantities, current and observer observables.
- `emg-mp01-examples` — assigned examples companion.

Assigned items:

- `def-emg-matter-observables`
- `post-emg-transported-charged-dust`
- `post-emg-charged-fluid-balance`
- `pthm-emg-dust-mass-force-reduction`
- `pthm-emg-fluid-work-heating`
- `pthm-emg-matter-symmetry-charges`
- `pthm-emg-matter-energy-conditions`
- `ex-emg-ml-b03`

Page context opened for the assigned page requirements and model context:

- `emg-g04`, `emg-mm01`, `emg-g01`, and `emg-mg04`.

Additional downstream consumer checked for the dust-postulate interface:

- `pthm-emg-counterpoised-smooth-sphere` (current-run batch `20`, page `emg-mp02`).

Item suppliers opened to check the assigned definitions, hypotheses, formulas,
proofs, and physical scope:

- Definitions and conventions: `def-emg-geometry-units`,
  `def-emg-matter-formal-systems`, `def-emg-lorentzian-forms`,
  `lem-emg-observer-field-decomposition`, `lem-emg-lorentz-hodge-calculus`,
  `def-emg-pointwise-energy-conditions`, `def-gr-smooth-lorentzian-objects`,
  `lem-gr-observer-projection-decomposition`,
  `def-gr-timelike-worldline-and-proper-time`,
  `def-emg-c2-curve-covariant-acceleration`,
  `lem-emg-c2-curve-covariant-acceleration-well-defined`,
  `def-covariant-derivative-along-a-curve`,
  `def-product-connection-on-tensor-and-hom-bundles`,
  `def-lie-derivative-of-a-tensor-field`,
  `prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor`,
  `def-rpm-charge-spin-model`, and `def-countable-choice`.
- Physical assumptions and flat-convention context:
  `post-emg-einstein-maxwell-equations`, `post-emg-covariant-maxwell`,
  `post-em-minkowski-physical-model`, `post-em-vacuum-maxwell`,
  `post-sr-inertial-covariance`, and `post-rpm-external-charge-action`.
- Mathematical and physical results used by assigned proofs:
  `thm-emg-charged-dust-projection`,
  `thm-emg-charged-fluid-projections`,
  `thm-emg-selected-matter-energy-conditions`,
  `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`,
  `thm-real-power-continuity-and-derivatives`,
  `thm-ck-euclidean-maps-closed-under-algebra-and-composition`,
  `thm-emg-charged-symmetry-current`,
  `lem-emg-maxwell-stress-divergence`,
  `thm-gr-density-divergence-and-finite-chain-flux`,
  `thm-gr-killing-and-on-shell-matter-identities`,
  `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`,
  `pthm-em-tensor-maxwell-equivalence`,
  `pthm-rpm-external-charge-action-equivalence`, and
  `lem-rpm-curved-charge-action-variation`.

I also read the current batch pages manifest, batch notes, and proof-contract
bundle as navigation and evidence. Their prior decisions were not treated as
verdicts.

## Review, edits, and evidence

### Dust balance equivalence

In `pthm-emg-dust-mass-force-reduction`, the original proof step 1.1 used
`thm-emg-charged-dust-projection` as if its formal statement supplied both
directions of the stress-exchange equivalence. That supplier's Statement first
assumes the exchange equation, so its stated hypotheses supply the
exchange-to-continuity/force direction only. I repaired the assigned theorem's
Facts and proof: step 1.1 now uses that stated implication in the forward
direction and proves the reverse locally by expanding
`∇ₐ(ρUᵃUᵇ) = Uᵇ∇ₐ(ρUᵃ) + ρUᵃ∇ₐUᵇ` and substituting continuity and the force
equation. Its exact claim remains on `ρ > 0`; the ratio argument still uses the
stated continuity hypothesis and does not extend to `ρ = 0`.

I removed the related sentence in `post-emg-transported-charged-dust` that
attributed the full stress-exchange equivalence to that supplier. The postulate
continues to adopt the same mass, force, and charge-current equations. Its
charge-current/transport statement remains supported under continuity. I
checked the same-batch consumers `pthm-emg-dust-mass-force-reduction` and
`pthm-emg-matter-symmetry-charges`: the former now proves the equivalence at
its full stated hypotheses, and the latter uses that identity. I also checked
the batch-20 consumer `pthm-emg-counterpoised-smooth-sphere`; its A1 uses the
adopted dust equations and charge-transport equivalence, which remain in the
postulate, and its proof derives the transport statement for its specified
fields. It does not use the removed stress-exchange sentence, so no outside
repair is required.

I updated the batch-18 proof contract's exact postulate quotation and the
derivation and `iff-reverse` evidence for `pthm-emg-dust-mass-force-reduction`.
The item had no stale `verification.judge` record.

### Source-locator corrections

The inspected Carroll PDF places the dust and perfect-fluid formulas at Ch. 1,
equations (1.104)–(1.110), and the electromagnetic tensor at Ch. 1, equation
(1.111). Ch. 4, equations (4.69)–(4.72), discuss the general Hilbert
stress-energy definition and the weak energy condition; they do not give the
electromagnetic tensor formula. Ch. 5, equation (5.38), gives on-shell
stress-energy conservation, followed by the Killing and geodesic identities in
(5.39)–(5.43). I corrected the affected Carroll locators in:

- `def-emg-matter-observables`
- `post-emg-transported-charged-dust`
- `post-emg-charged-fluid-balance`
- `pthm-emg-dust-mass-force-reduction`
- `pthm-emg-fluid-work-heating`
- `post-emg-einstein-maxwell-equations`
- `pthm-emg-matter-symmetry-charges`
- `pthm-emg-matter-energy-conditions`
- `ex-emg-ml-b03`

The source review used Carroll's arXiv PDF at
<https://arxiv.org/pdf/gr-qc/9712019v1>, Tong's GR notes at
<https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf>, Tong's EM
notes at <https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf>,
Meinel–Hütten at <https://arxiv.org/pdf/1105.3807>, and the BIPM SI brochure at
<https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf>. These support
the contextual formulae and unit-status statements; the local SI signs,
normalizations, and deductions are stated or proved in the items. The BIPM
brochure confirms that `c` and `e` are defining constants and that `μ₀` must be
determined experimentally under the revised SI. The Meinel–Hütten paper's
special static ECD branch and Gaussian units were not generalized.

No experiment or measured numerical input is used by the assigned claims.
Their physical deductions remain conditional on the adopted model; no
statistical inference or claim of empirical validation is made.

## Page verdicts

- `emg-mp01` — **Pass after the recorded repairs.** Its summary accurately
  describes the smooth SI definitions, the two selected matter branches, the
  conditional local balance results, the finite-domain Killing flux, and the
  pointwise energy conditions. The definitions specify the local Lorentzian
  fields, observers, curve domain and proper-time parameter, regularity,
  tensor/current types, conventions, and units. The postulates are explicit
  assumptions and exclude global evolution and empirical claims.
- `emg-mp01-examples` — **Pass after the locator repair.** Both pointwise field
  configurations and stress calculations check out. The null-flux example
  concerns the stress current at an observer event and does not claim an
  experiment or an Einstein solution on an unchanged Minkowski metric.

No confirmed defect remains unedited in the assigned scope. No blocker remains.

## Validation

After the edits, scoped `reflow.mts` reported all nine changed item files
unchanged, and `precheck.mts` passed all applicable changed items (the definition
had no numbered proof steps). The final proof-layout command checked all nine
changed item paths: **9 items, 12 steps, 0 defects**. The updated batch proof
contract JSON parsed successfully. One initial validation call used a mistyped
nonexistent path; the correct assigned path was then reflowed and prechecked
successfully.

## Coverage note and limitation

I checked the exact supplier statements and the arguments directly used by the
assigned items. I did not independently re-audit every transitive foundational
prerequisite behind the upstream mathematical suppliers, nor inspect every
source listed by those suppliers (including Reall's cited notes). No unresolved
claim in the assigned pages depends on that unreviewed context beyond the
explicitly stated conditional supplier interfaces.
