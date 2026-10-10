# Reader 17 — batch 17

Run: `physics-em-sr-40-2026-10-08`. Independent Step 5a review; all content remains draft. No acceptance, judgment, audit or publication stamp was added.

## Assigned inventory and conclusions

Both assigned pages were opened in full:

- `library/classical-electromagnetism-mathematics/em-wave-equation-prerequisites.md` (A).
- `library/classical-electromagnetism-mathematics/em-wave-equation-prerequisites-examples.md` (B).

All assigned items were opened in full and checked, including statements/example text, facts, each numbered argument and titles:

1. `items/lem-em-spherical-mean-family-smoothness.md`: sphere integration of a smooth real function on R3 × J, with signed radius and Countable Choice; the seven-step proof establishes all word derivatives and their joint continuity locally on compact boxes.
2. `items/thm-em-wave-cauchy-kirchhoff.md`: smooth whole-space data and an extension-sense smooth source, W = c^-2 partial_t^2 − Delta; the eleven-step final proof establishes the representation, data, C2 uniqueness, closed-cone dependence and compact-support bound. No decay or finite-energy hypothesis was added.
3. `items/ex-em-wave-equation-prerequisites-source-and-support-boundaries.md`: the four-step verification checks the constant-source polynomial, unit-ball support propagation including its boundary, and linear velocity data with divergent energy, including initial energy.

The completed supplier checks below were used to recheck the corresponding consuming arguments. The mathematical classification and purely mathematical prerequisite roles are appropriate throughout; no experiment or physical assertion is made.

| Page | Reader verdict |
|---|---|
| `em-wave-equation-prerequisites` | Sound after the notation and proof repairs below. Its unchanged summary correctly describes the whole-space result and stated assumptions. |
| `em-wave-equation-prerequisites-examples` | Sound after repairing the example's support citation and integration prerequisites. B-page prose was read and left unchanged; its summaries are accurate. |

## Opened prerequisite inventory

The following directly used supplier carriers were opened. “Full” means the complete supplied file was read; “interface” means the relevant Definition or Statement section was read, rather than a recursive audit of that supplier's proof closure.

- `items/cor-energy-uniqueness-for-the-wave-cauchy-problem.md` — interface.
- `items/cor-mean-value-theorem.md` — interface.
- `items/def-ck-and-multi-index-notation-in-several-variables.md` — interface.
- `items/def-ck-euclidean-maps-and-diffeomorphisms.md` — interface.
- `items/def-countable-choice.md` — interface.
- `items/def-euclidean-inner-product.md` — interface.
- `items/def-forward-and-backward-wave-cones-domain-of-dependence-and-influence.md` — interface.
- `items/def-jacobian-matrix-and-gradient.md` — interface.
- `items/def-laplacian-of-a-c2-function.md` — interface.
- `items/def-surface-integral-on-a-compact-c-one-hypersurface.md` — full.
- `items/def-wave-energy-and-energy-flux.md` — interface.
- `items/def-wave-equation-cauchy-data-and-wave-speed.md` — interface.
- `items/lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals.md` — full.
- `items/lem-derivative-of-an-integral-with-moving-endpoints.md` — full.
- `items/lem-em-parameter-integrals.md` — full.
- `items/lem-em-spherical-mean-wave-identity.md` — full.
- `items/lem-euclidean-chart-measure-agrees-with-polar-surface-measure.md` — full.
- `items/lem-first-moment-of-the-unit-sphere-vanishes.md` — full.
- `items/prop-order-and-scalar-rules-for-the-nonnegative-integral.md` — interface.
- `items/thm-algebra-of-derivatives.md` — interface.
- `items/thm-cauchy-schwarz-and-the-euclidean-norm.md` — interface.
- `items/thm-chain-rule-for-total-derivatives.md` — interface.
- `items/thm-ck-euclidean-maps-closed-under-algebra-and-composition.md` — interface.
- `items/thm-clairaut-schwarz-mixed-partials.md` — interface.
- `items/thm-continuous-on-a-rectangle-is-riemann-integrable.md` — interface.
- `items/thm-continuous-partial-derivatives-imply-total-differentiability.md` — interface.
- `items/thm-domain-of-dependence-and-local-uniqueness.md` — full.
- `items/thm-extreme-value-metric.md` — interface.
- `items/thm-heine-borel-rn.md` — interface.
- `items/thm-heine-cantor-metric.md` — interface.
- `items/thm-integral-triangle-inequality.md` — interface.
- `items/thm-lebesgue-measure-of-a-box-of-every-kind.md` — interface.
- `items/thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets.md` — full.
- `items/thm-linearity-of-the-lebesgue-integral-on-l-one.md` — interface.
- `items/thm-newton-leibniz-with-interior-derivative.md` — interface.
- `items/thm-tonelli-theorem-for-sigma-finite-product-spaces.md` — interface.
- `items/thm-total-derivative-computes-directional-and-partial-derivatives.md` — interface.
- `items/thm-wave-duhamel-principle.md` — full.

Additional prerequisite context opened:

- `items/thm-finite-propagation-speed-for-the-wave-equation.md` — full proof, supporting local uniqueness through the forced-cone energy argument.
- `items/lem-energy-identity-on-a-truncated-wave-cone.md` — full proof; checked the cap signs, lateral graph factor and nonnegative flux square used by finite propagation.
- `items/cor-primitives-of-a-continuous-function.md` — full statement and proof, to identify precisely the one-variable integration convention used by the moving-endpoint supplier.
- `items/thm-continuity-under-the-integral-sign.md` — Statement; its one-real-parameter scope was checked before replacing its use as a joint-continuity justification.
- `items/cor-energy-uniqueness-for-the-wave-cauchy-problem.md` — complete Statement and initial hypothesis context; the subsequent proof was not needed for the example's comparison of hypothesis classes.

Governance and evidence opened: `../CLAUDE.md`, local `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, `briefs/reader.md`; batch 17's page manifest, cross-batch dependency rows and proof contracts; `research/math-imports.json` source-root and relevant pinned-import rows; applicable scope and wave clauses of the run's owner-authoring direction. Other-framework owner clauses were not part of this mathematical review. Historical scaffold decisions and “verified” ledger labels were not treated as proof acceptance.

## Repairs and exact evidence

All three assigned item carriers and their entries in `research/physics-em-sr-40-2026-10-08-batch-17.proof-contracts.json` were changed. No page prose, manifest, plan, imported supplier or another batch's carrier was edited.

| Subject and location | Confirmed defect and repair | Evidence closing it |
|---|---|---|
| Smoothness lemma, Statement and Proof 1.2 | The unqualified gradient of h on a four-coordinate domain was dotted with a vector in R3. Defined the spatial gradient at fixed time and used `nabla_x h` throughout. | `def-jacobian-matrix-and-gradient`, Definition, fixes gradient dimension; the composed derivative is Dh(y,v)(n,0), exactly the sum of its three spatial partials times n's coordinates. |
| Smoothness lemma, Facts F1 and Proof 3.1 | The induction used addition of a coordinate multi-index to a derivative word without defining that operation. Defined word derivatives and coordinate append; used append for the induction and one-letter words for the first derivatives. | `def-ck-and-multi-index-notation-in-several-variables`, Definition, distinguishes canonical multi-index order from all derivative words. Appending j means applying partial_j to the previous word derivative. No mixed-partial commutation is assumed here. |
| Cauchy theorem, Proof 2.1 | “The same identities” for the derivative block incorrectly suggested it retained H's zero initial value and velocity phi. Replaced this with its homogeneous equation and correct initial value phi, initial velocity zero. | Differentiate the established smooth homogeneous equation and commute partial_t with Delta using F2; K(0)=H_t(0)=phi and K_t(0)=H_tt(0)=c² Delta H(0)=0. |
| Cauchy theorem, original Proof 2.2, now 3.1 | The telescoping source computation invoked a rectangular moving-endpoint rule on a composed integrand whose source argument need not remain in its time domain on that rectangle; it also hid the integral-evaluation prerequisites. Replaced it with the shorter launched-block computation and an explicit open rectangle. | At fixed source time v, H_g solves the homogeneous equation and has H_g(0;v)=0 and partial_sigma H_g(0;v)=g(.,v). The signed-radius family defines F(tau,r)=H_g(tau-r;t0+r) on R × (J_g−t0). Choose a positive local tau interval with its closed integration ranges inside J_g−t0; two applications of `lem-derivative-of-an-integral-with-moving-endpoints` then give the source as the second endpoint term. `lem-em-parameter-integrals` handles the two spatial derivatives. |
| Cauchy theorem, Facts F6 | The moving-endpoint supplier's primitive proof uses finite Riemann integration, while other steps use Lebesgue integration. Added the explicit continuous-integrand comparison prerequisites. | `thm-continuous-on-a-rectangle-is-riemann-integrable` and `lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals`, Statements, apply on each nondegenerate compact interval under the already adopted Countable Choice. |
| Cauchy theorem, original Proof 2.3, now 2.2, and Facts F7 | A theorem about continuity in one real parameter was cited as establishing joint continuity in four parameters. Replaced it with uniform continuity on a compact parameter × integration product and the explicit supremum bound for the integral difference. | `thm-heine-cantor-metric`, compact-box facts F8, integral linearity, triangle inequality, monotonicity and measure([0,1])=1. The bound tends to zero as the entire parameter vector tends to its base point. |
| Cauchy theorem, original Proof 4.1, now 5.1 | Made the necessary jet matching in the C2 gluing argument explicit. | The value/spatial jet is supplied by a, the time derivative by b, the mixed jet by spatial derivatives of b, and the second time derivative by the PDE and continuity at t0. The proof still applies local uniqueness below T and takes a limit to T; it assumes no PDE for an arbitrary comparison extension past T. |
| Cauchy theorem, original Proof 4.2, now 5.2 | The proof applied the positive-height local uniqueness theorem also at t*=t0. Added the separate zero-height case from the attained data. | `thm-domain-of-dependence-and-local-uniqueness`, Statement, requires strictly positive vertex time; at zero height the base is the singleton {x*} and both values equal their equal displacement data there. |
| Example, Facts F1 | The restatement of clause (d) confined only K_h to the radius-rho ball, yet asserted the support bound for arbitrary compact displacement/velocity supports. Restored containment of the entire union K_a ∪ K_b ∪ K_h. | The supplier theorem's exact Statement (d). Without the restored condition, nonzero initial displacement outside the radius-rho ball contradicts the restated conclusion already at t=t0. |
| Example, Facts F9/F10 and Verification 2.2 | The exact energy box integral silently equated a Riemann integral with a Lebesgue integral and used Tonelli's product measure as Euclidean Lebesgue measure. Added both bridges and the sigma-finiteness justification. | The continuous-rectangle/Riemann–Lebesgue suppliers above and `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets`, used twice in positive dimensions. Continuous polynomial integrands meet the Borel, bounded and nonnegative conditions; finite-measure intervals exhaust R. The unchanged exact box result is (4/3)R⁵ + 4c²(t−t0)²R³. |
| Example, Verification 3.1 | Removed the unsupported adjective “sharp”: the example proves a support upper bound, not attainment of the extremal propagation radius for every allowed h0. | Verification 2.1 proves the asserted vanishing bound, including the threshold, and no optimality witness was supplied or needed. |

Updated proof-contract derivations to the actual complete final paragraphs and their tags; added exact supplier quotes and uses for the new integration prerequisites; corrected the smoothness contract's zero-radius/choice locators; refreshed endpoint boundaries. The canonical precheck repair reordered/renumbered theorem phases, and its references and contract locators were updated together. A focused check confirms every contract derivation equals its current numbered paragraph and all citation-use locators resolve. None of the three original carriers contained a `verification.judge` record, and none was introduced.

The spatial-gradient convention was checked in its assigned direct theorem consumer; the theorem's unchanged mathematical interface was checked in the assigned example. These edits preserve all three statements' substantive conclusions and the page summaries.

## External source check and limitations

Read the relevant complete argument sections of the [course-hosted Ivrii PDF](https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf): §9.1.2, printed pp. 282–284, (9.1.8)–(9.1.12); §9.1.3, printed pp. 284–285, (9.1.14) and Remark 9.1.3; §9.2.3, printed pp. 290–292, Theorems 9.2.2–9.2.3 and their argument. This supports the signed-time formula, source representation, sphere convention and cone uniqueness; the local proof supplies the precise smoothness and endpoint hypotheses. The retrieved cover says 2026 and its preface describes a 7 June 2021 snapshot: the course URL is not evidence that today's bytes are a 2018 edition.

The archived Teschl URL was attempted but inaccessible through the web tool. No reading of that archived manuscript, of an entire textbook, or of every transitive imported proof is claimed. The review relies on the listed exact local supplier interfaces/full arguments and the Ivrii sections actually retrieved. This source-access limitation leaves no mathematical blocker for these locally proved claims.

## Validation and handoff

- Reflow was run on each changed item; each reported unchanged layout.
- Final precheck passed for each of the three changed items. The theorem's initial “repair” result was adopted, then precheck rerun successfully; it was not recorded as a pass before adoption.
- `node tools/physics-support/rendercheck.mjs` on the three items and both assigned pages passed: five files, real KaTeX parsing and renderer YAML parsing, no errors.
- Final batched `node tools/physics-support/proof-layout.mjs items/lem-em-spherical-mean-family-smoothness.md items/thm-em-wave-cauchy-kirchhoff.md items/ex-em-wave-equation-prerequisites-source-and-support-boundaries.md` passed: three items, 22 steps, zero defects.
- Focused contract/carrier comparison passed for 7, 11 and 4 derivation rows respectively.

No confirmed or suspected uneditable defect remains from this review. No withdrawal is proposed. The findings JSON therefore has an empty findings array. The next action is independent Step 5b review of the repaired carriers and contracts; local format/render checks do not constitute mathematical acceptance.
