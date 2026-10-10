# Reader 39 — batch 39

Run: `physics-em-sr-40-2026-10-08`. Role: independent Step 5a reader.

## Scope and current state

Opened both assigned pages and all seven assigned items. The substantive review
covers the smooth bounded-region field functional, compact gauge changes,
fixed-endpoint timelike particle variations, and both worked examples. The
postulate is reviewed as an adoption, not as a deductive or empirical result.
No experiment or measured numerical premise is used by these items.

## Repairs

- `def-em-field-action-definition`, Definition (a): corrected the assertion that
  the physical and mathematical first variations are identical. Their ratio is
  exactly `c^-1`; their stationarity predicates coincide. Evidence: the displayed
  identity `S=c^-1 S_math`, the polynomial coefficients in Definition (b), and
  `lem-em-compact-field-variation` (a). No formula or variation class changed.
  The other six assigned items were inspected for this normalization; each
  already uses the correct factor or refers to the correct particle functional.
- Same definition, Tong locator and Source notes: the electric/magnetic
  expansion is on printed p. 125, not p. 124. Binney §3.2 pp. 26-27 uses finite
  time and a boundary at spatial infinity; the bounded open region here is a
  local specialization, supplied by the mathematical lemma. Both Tong
  (5.42)-(5.43) and Binney (3.13) already include the factor `c^-1`; it is not
  exclusively local normalization bookkeeping. These are citation/prose repairs.

- `ex-em-stationary-not-minimum`, Verification 4.1 and 5.1: replaced the
  falsely named compact open box `(-1/2,1/2)^4` by the closed compact box
  `K_*=[-1/2,1/2]^4`, contained in `U`. Added exact dependency/F22
  `thm-heine-borel-rn`. The same supports and the same functional are retained.
  Verification 6.1 now states the upper bound
  `(C_E-C_3)/N-C_B N <= |C_E-C_3|-C_B N`, which proves the displayed
  negative-infinity limit rather than merely choosing one negative direction.
  The support mistakes were false intermediate descriptions; the limit omission
  was immediately closable from the computed formula. No witness was withdrawn.
- Same example, Tong locator and Source notes: corrected the expansion's
  printed page from 124 to 125 using the retrieved source's folio.
- `ex-em-compact-variation-example`, Proof 2.2: the half-open-in-description box
  `[-1/4,1/4] x (-1,1)^3` is not compact. The proof now bounds the support by
  `supp(rho) x supp(psi)`, a compact subset of `U`, citing the closed/bounded
  characterization in new F18 and dependency `thm-heine-borel-rn`.
- Same example, Example (b): the inverse component dictionary is clause (a) of
  `def-em-electromagnetic-tensor`; corrected the former clause-(b) locator.
- Same example, Proof 2.1 and 3.1: explicitly declared the Riemann/Lebesgue
  comparison dependency and F17, and applied it before the Riemann FTC and
  integration-by-parts formulas evaluate the Lebesgue slices. Its exact
  hypothesis is bounded Borel Riemann-integrable data on a nondegenerate closed
  box under Countable Choice. The smooth zero-extended slices satisfy it.
  Restored the integration-by-parts F12 tag in 3.1. No action, source, sign,
  regularity class, or physical scope changed.
- `research/physics-em-sr-40-2026-10-08-batch-39.proof-contracts.json`: updated
  changed derivations and boundaries, added F17/F18/F22 citations, and refreshed
  four stale source excerpts (localization, particle lemma, worldline definition).
  Updated all normalization excerpts affected by the definition repair. Corrected
  stale Maxwell boundary step locators: the equivalence is in 3.1-4.1, whereas
  2.2 is the homogeneous identity. Corrected the definition contract's false
  claim that both functionals vanish at zero fields: the particle kinetic term
  remains even with zero external potential. These contract repairs make the
  evidence agree with the current items; they do not certify the items.

All three changed items are in-flight drafts in the assigned batch. None had a
`verification.judge` entry to remove. No published/imported item, other batch,
B-page prose, or plan was edited. The run manifests name exactly the other six
assigned items as direct consumers of `def-em-field-action-definition`; all six
were checked against its corrected normalization. No outside direct consumer
was found in the current-run manifests. No object, formula, admissible class,
postulate formulation, or empirical qualification was changed.

## Opened inventory and review evidence

Assigned pages, both opened in full:

- `library/classical-electromagnetism/em-action-and-variational-formulation.md`
- `library/classical-electromagnetism/em-action-and-variational-formulation-examples.md`

All assigned item bodies, metadata, source notes, facts, and proof/verification
steps were opened. The supplier arguments were checked before validating the
consumer deductions (the definition was initially opened to navigate its
supplier interface).

| Assigned item ID | Independent result |
| --- | --- |
| `def-em-field-action-definition` | Sound after the normalization and source-description repairs. Smooth neighbourhood data on bounded `U` yield finite field integrals; the particle class and continuous positive radicand give finite Riemann integrals. |
| `post-em-stationary-action-model` | The two exact variation classes are adopted assumptions. No fictitious proof, minimality, existence, uniqueness, measurement, or coupled singular-field theory is claimed. |
| `pthm-em-action-maxwell-variation` | The mathematical first-variation polynomial scales by `c^-1`; the nonzero scalar transports both directions of stationarity. Mixed partials of the smooth potential establish the homogeneous identity. The component calculation supplies all four laboratory equations locally on `U`. |
| `pthm-em-action-gauge-source-compatibility` | The raised gauge gradient lowers to the exact covector derivative. The field term is unchanged; the source difference is the signed distributional derivative pairing. Smooth-source converse uses the continuous fundamental lemma. The distributional clause concerns a pairing only. |
| `pthm-em-particle-action-coupling` | The compact timelike and domain margins license each fixed-endpoint variation. The curve lemma's lowered equation, raising/lowering bijection, and prescribed-field force interface give the claimed equivalence and coordinate laws. No distributional field-sector choice assumption enters. |
| `ex-em-stationary-not-minimum` | Sound after repairs. The positive direction has nonzero spatial gradient; the scaled spatial bump gives the exact `C_E/N`, `C_B N+C_3/N` integrals and negative limit. Scaling two fixed directions preserves their separate signs and converges in the stated seminorm topologies. |
| `ex-em-compact-variation-example` | Sound after repairs. The constant potential has `F_01=-1`, `F^01=1`, `F^10=-1`. The compact slices have zero derivative integrals. The gauge cutoffs have derivatives of opposite signs on the actual source support, giving the exact signed products and the matching integration-by-parts formula. |

Additional suppliers opened in full (each path is `items/<ID>.md`):

- `def-em-lab-geometry`, `def-em-si-conventions`, `def-em-sources`,
  `def-em-electromagnetic-tensor`, `def-em-relativistic-worldlines-frames`.
- `lem-em-continuous-localization`, `lem-em-fundamental-variation-lemma`,
  `lem-em-compact-field-variation`, `lem-em-particle-curve-variation`.
- `pthm-em-charge-continuity`; `pthm-em-tensor-maxwell-equivalence` was opened
  across bounded chunks, including the sourced component steps 1.1-1.2,
  homogeneous and covariance calculations, and final equivalence. The force
  and power steps 1.1-1.2 of `pthm-em-relativistic-lorentz-force` were also
  opened in a focused search and checked against the tensor dictionary.
  These are prerequisite checks, not whole-library audits.

Additional supplier definitions/statements opened in bounded excerpts (not
claims of full proof audits):

- Geometry and force: `def-em-minkowski-affine-space`,
  `def-sr-affine-minkowski-model`, `def-inertial-frame-and-inertial-chart`,
  `def-sr-regular-causal-curve-and-worldline`, `def-sr-proper-time`,
  `lem-sr-proper-time-parametrization`, `def-sr-four-velocity-and-four-acceleration`,
  `thm-sr-proper-time-and-observer-decomposition`,
  `lem-em-antisymmetric-tensor-contraction`, `pthm-em-relativistic-lorentz-force`.
- Physical formulation: `def-em-fields`, `post-em-vacuum-maxwell`,
  `post-em-minkowski-physical-model`, `post-em-lorentz-coupling`,
  `post-sr-inertial-covariance`.
- Function and test spaces: `def-ck-euclidean-maps-and-diffeomorphisms`,
  `def-directional-and-partial-derivatives`,
  `def-test-function-space-d-of-an-open-set`,
  `def-fixed-support-test-function-frechet-space`, `def-test-function-topology`,
  `lem-test-function-cutoffs-and-euclidean-localization`, `def-countable-choice`.
- Integration and calculus: `def-integral-over-a-measurable-set`,
  `def-integrable-real-and-complex-functions-and-their-integrals`,
  `lem-riemann-lebesgue-comparison-for-distribution-test-integrands`,
  `thm-newton-leibniz-with-interior-derivative`,
  `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
  `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-substitution`,
  `thm-integration-by-parts`, `thm-algebra-of-derivatives`, `thm-chain-rule`,
  `thm-clairaut-schwarz-mixed-partials`,
  `prop-order-and-scalar-rules-for-the-nonnegative-integral`,
  `cor-archimedean-reciprocal`, `thm-heine-borel-rn`, `thm-extreme-value-metric`,
  `thm-lebesgue-measure-of-a-box-of-every-kind`,
  `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`,
  `thm-continuous-implies-integrable`, `thm-ftc-second-part`,
  `thm-cauchy-schwarz-and-the-euclidean-norm`.
- Weak and distributional calculus: `def-weak-derivative-of-a-locally-integrable-function`,
  `lem-classical-derivatives-are-weak-derivatives`, `def-distribution`,
  `def-distributional-derivative`,
  `def-regular-distribution-from-a-locally-integrable-function`,
  `thm-locally-integrable-functions-embed-in-distributions`,
  `thm-distributional-differentiation-is-continuous-and-commutes`,
  `def-divergence-and-curl-of-a-c1-vector-field`.

Task records opened: the exact batch-39 page manifest, assigned proof contracts,
`briefs/reader.md`, both workspace instruction files, README, SCHEMA, WORKFLOW,
the complete physics content model, and the owner-direction excerpts relevant
to the action conventions. `research/math-imports.json` was inspected for its
import-record structure; the imported mathematical originals were not edited
or independently audited. No rendered batch evidence bundle was found in the
scoped filename search; canonical carriers and their exact supplier sections
were used instead.

## External source checks and limitations

The relevant action section was read in the retrieved author-hosted
[Tong chapter 5](https://davidtong.org/pdfs/teaching/electromagnetism/electro4.pdf),
§§5.5.1-5.5.3, printed pp. 118-126: fixed-endpoint variation, particle
coupling, the field action, boundary-term cancellation, and the compact gauge
source formula. Its opposite metric convention was checked against the local
dictionary. The local finite-region and regularity arguments remain the
authored mathematical deductions, rather than being presumed from the source.

The PDF of [Binney's Classical Fields](https://www-thphys.physics.ox.ac.uk/people/JamesBinney/classf.pdf)
was downloaded. Its text extraction was corrupt, so relevant pages were
rendered and read visually: printed pp. 23-27 and 30-31 (PDF pages 24-28 and
31-32), covering §§3.1-3.2 and 3.6. These substantiate the particle coupling,
boundary calculation, normalization and sourced/unsourced Maxwell action.

Landau-Lifshitz retrieval failed: the cited HTTP URL returned an internal
fetch error, and its HTTPS form reset the connection. Thus its p. 44 footnote
and §27 minimum-wording attribution were not independently reread in this
session. No new finding of citation inaccuracy is inferred from failed
retrieval. The action formulas have independently accessible support and
complete local computations. This remaining source-reading limitation is
explicitly carried into the JSON coverage note. BIPM's numerical/source claims
inside the SI supplier were not externally re-audited; the assigned deductions
use symbolic positive constants and no measured value or uncertainty estimate.

## Validation

All commands ran after the final item edits; no item edit followed proof layout.

- Reflow on `def-em-field-action-definition`: exit 0, unchanged.
- Reflow on each changed example: exit 0, reflowed.
- Precheck on the definition: exit 0, **0 checked**, since it is nonproof;
  this is not claimed as a proof check.
- Precheck on each changed example: exit 0, one checked and passing each.
- One batched `node tools/physics-support/proof-layout.mjs` command on the three
  changed paths: exit 0, **3 items, 15 steps, 0 defects**.
- Explicit rendercheck on all seven assigned items and both pages: exit 0,
  **9 files**, valid renderer YAML and KaTeX spans.
- Scoped contract comparison: **78 citation excerpts**, zero mismatches against
  current supplier carriers after whitespace normalization. Changed derivation
  claims still match their reflowed proof paragraphs. This mechanical agreement
  supplements the independent content review; it is not a soundness stamp.

## Page verdicts and handoff

- `em-action-and-variational-formulation`: **no remaining identified content
  defect** after the definition repair; the page correctly distinguishes
  adopted stationarity, conditional equivalences, prescribed sources/fields,
  and excluded singular or coupled dynamics. Source-reading limits above apply.
- `em-action-and-variational-formulation-examples`: **no remaining identified
  content defect** after the two item repairs. The B-page prose was read and
  left unchanged; it agrees with the repaired witnesses, signs and topology
  conclusion.

No confirmed or suspected uneditable defect remains identified, no withdrawal
is proposed, and no mathematical blocker was found in the reviewed claims.
The findings array is empty. The source retrieval limitation and the bounded
supplier-review scope are not represented as fabricated complete coverage.
No judgment, publication, or acceptance stamp has been supplied.
