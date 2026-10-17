# Step 3a Reader Report — Batch 25

Run: `physics-remaining-80-2026-10-17`  
Role: reader  
Batch: `25`

## Opened inventory

Assigned pages reviewed:

- `emg-s02` (`library/einstein-maxwell-models/emg-s02.md`)
- `emg-s02-examples` (`library/einstein-maxwell-models/emg-s02-examples.md`)

Required page prerequisites reviewed:

- `emg-ms03` (`library/einstein-maxwell-models-mathematics/emg-ms03.md`)
- `emg-s01` (`library/einstein-maxwell-models/emg-s01.md`)

All eight assigned items were read in supplier order:

1. `pthm-emg-xs-geometric-to-si-model`
2. `pthm-emg-xs-mp-model`
3. `pthm-emg-xs-br-model`
4. `pthm-emg-xs-null-wave-model`
5. `pthm-emg-xs-mp-extremal`
6. `pthm-emg-xs-br-limit`
7. `texp-emg-xs-null-curvature`
8. `texp-emg-xs-two-center-model`

The 18 unique direct item suppliers were opened and their relevant definitions,
statements, or proofs checked: `def-countable-choice`,
`def-emg-geometry-units`, `def-emg-xs-br-products`,
`def-emg-xs-geometric-electrovac`, `def-emg-xs-harmonic-mp`,
`def-emg-xs-null-wave`, `def-emg-xs-rn-data`,
`def-emg-xs-si-parameters`, `lem-emg-maxwell-current-forms`,
`post-emg-einstein-maxwell-equations`, `prop-emg-xs-mp-extremal-rn`,
`prop-emg-xs-mp-multicenter`, `prop-emg-xs-null-invariants`,
`pthm-emg-xs-rn-model`, `thm-emg-xs-br-verification`,
`thm-emg-xs-mp-verification`, `thm-emg-xs-null-wave-verification`, and
`thm-emg-xs-rn-near-horizon`.

Additional specialized supplier context checked for the assigned proof chains:
`thm-emg-xs-rn-verification`, `lem-emg-maxwell-observer-stress`,
`lem-emg-xs-rn-tensor-identities`, `def-emg-conformastatic-chart-data`,
`lem-emg-conformastatic-chart-is-lorentzian`,
`lem-emg-conformastatic-curvature`, `def-emg-lorentzian-forms`,
`lem-emg-lorentz-hodge-calculus`,
`def-gr-metric-volume-form-and-current-flux`,
`thm-gr-density-divergence-and-finite-chain-flux`,
`thm-gr-local-lorentz-tetrad-existence`,
`thm-gr-point-normal-and-exponential-coordinate-charts`,
`thm-gr-local-geodesics-and-exponential-map`,
`thm-gr-nondegenerate-levi-civita-and-tensor-derivative`,
`def-gr-curvature-tensor-and-derived-tensors`,
`thm-gr-curvature-tensoriality-and-coordinate-formula`,
`thm-gr-curvature-algebraic-symmetries`, and
`post-em-minkowski-physical-model`. Published mathematical suppliers were
checked at the exact statements and conventions used; current draft local
suppliers were checked at their current proofs and hypotheses. Draft status was
not treated as independent proof approval.

The assigned batch notes, proof contracts, cross-batch edge file, and source
reading record were also read as evidence, not as verdicts. I read the complete
three-page Nutku paper and inspected excerpts around the relevant Tong and
Carroll sections. I did not independently reread the complete Tong or Carroll
lecture-note PDFs; their cited conventions are not used to close a local proof
gap.

## Mathematical review and edits

The physical results consistently state deductions conditional on the adopted
zero-cosmological-constant, source-free Einstein–Maxwell model. They do not
present model assumptions as empirical findings. The reviewed calculations
include the geometric-to-SI tensor normalization and trace argument, the finite
harmonic-center fluxes and SI conversion, the single-center coordinate map, the
local RN scaling limit, and the null-wave curvature contractions. The physical
results retain their stated open-domain and excluded-center limits. I found no
unproved step in the assigned proofs that changes these conclusions.

Three assigned items were repaired:

- `pthm-emg-xs-mp-model`: the statement now defines each sphere
  $S_A(r)$ and its closed ball, states the outward orientation, and defines the
  outer sphere and orientation. This makes the flux domains explicit. The
  proof step and its contract derivation now identify the regular-sphere
  condition against `prop-emg-xs-mp-multicenter`.
- `texp-emg-xs-two-center-model`: the separation $d$ is stated to be measured
  in metres. The local and outer spheres and their orientations are defined in
  the statement; the first proof step and contract derivation were updated to
  use these definitions.
- `texp-emg-xs-null-curvature`: the title now limits its invariant claim to the
  four scalar contractions actually displayed in the statement.

No `verification.judge` record was present on the edited items. Reflow reported
all three items unchanged. Precheck passed for all three. The final proof-layout
command checked 3 items and 11 steps with 0 defects. The edited proof-contract
JSON parsed successfully.

The change to the multicenter model statement was checked against its assigned
consumers: `pthm-emg-xs-mp-extremal` uses the single-center coordinate
correspondence, `texp-emg-xs-two-center-model` uses the finite-center fluxes,
and the B-page diagram matches its stated local and outer radii. The two-center
item's added units and explicit sphere notation do not change its physical
claim.

## Uneditable finding

The B-page Scope paragraph says the example's “listed quadratic scalar
contractions vanish.” The linked item lists $F_{ab}F^{ab}$,
$S=g^{ab}\operatorname{Ric}_{ab}$,
$\operatorname{Ric}_{ab}\operatorname{Ric}^{ab}$, and
$R_{abcd}R^{abcd}$. The scalar curvature $S$ is a linear trace, not a
quadratic contraction. The B-page prose is outside this reader's edit scope;
the exact finding is in the findings artifact.

## Page verdicts and blocker

- `emg-s02`: the summary and limits match the assigned conditional proofs and
  supplier statements. **Pass.**
- `emg-s02-examples`: the examples and diagram are consistent with the assigned
  constructions; the Scope sentence above has a nonfatal mathematical
  description error. **Pass with that page-prose correction outstanding.**

No unresolved proof gap or blocker affects the assigned item arguments. The
B-page wording correction remains for its owner because B-page prose is not
editable in this assignment.

## Coverage limit

This review checked the direct prerequisite interfaces and the specialized
supplier arguments needed for the assigned calculations. It did not audit the
entire transitive foundational mathematics closure or independently verify all
source locators in the two long lecture-note PDFs. No claim of such full-closure
or full-source coverage is made.
