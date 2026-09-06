# frontier-31a / Beta / batch-17 notes — The Exterior Derivative and Cartan Calculus

Run frontier-31a, batch 17, one differential-geometry A/B pair. Scaffold author: Beta. Date: 2026-09-05 (Australia/Sydney).

## Scope and control state

This batch owns only research/frontier-31a-batch-17.pages.json, research/frontier-31a-batch-17.coverage.json, and this notes file. I read AGENTS.md, CLAUDE.md, README.md, SCHEMA.md, the task and dispatch, the DG-12 design block at research/plan-differential-geometry-track.md:2964, the live plan-spec records, the three published prerequisite DG pages, and the source ranges below.

The live autopilot status reports the unrelated active run frontier-23 at Step 5. This dispatch is frontier-31a; workflow state was inspected but not changed.

## Design/spec comparison

The live spec controls the A page the-exterior-derivative-and-cartan-calculus at order 465, its companion the-exterior-derivative-and-cartan-calculus-examples at order 466, and the three required predecessor pages vector-fields-flows-and-lie-derivatives, distributions-integral-manifolds-and-the-frobenius-theorem, and tensor-fields-exterior-algebra-and-differential-forms.

The design calls this DG-12 and requires DG-9, DG-10, and DG-11, which resolve to the same three prerequisite A pages. It gives no competing numeric order. It does use the conflicting B slug exterior-calculus-computations-and-examples; the spec/task prescribe the-exterior-derivative-and-cartan-calculus-examples. I retained the spec slug and did not adjudicate the drift locally.

## Scaffold shape and decisions

- A page: 40 items (33 core results and seven false statements).
- B page: 12 items.
- The A page is below the 60-item ceiling, so no split is required.
- Every manifest item carries an explicit deps array. The B-page forward-reference targets are integration-of-forms-and-the-general-stokes-theorem and the-de-rham-complex-homotopy-and-mayer-vietoris; neither is a dependency.
- Existing prerequisite interfaces supply forms, pullback, interior product, local and time-dependent flows, Lie brackets, distributions, annihilator bundles, and local Frobenius first integrals. No item depends on an examples-page result.

## Conventions and proof route

1. Exterior derivative: construct d by the invariant vector-field formula, prove C-infinity multilinearity by the bracket-product cancellation, then obtain the coordinate formula, graded Leibniz rule, and d-squared-zero. Coordinate independence is proved, not assumed.
2. Lie derivative: use local-flow pullback for tensors, reconcile it with the existing inverse-time vector-field convention so that L_X Y=[X,Y], and prove Cartan's formula on functions and one-forms before extending it as an equality of degree-zero derivations.
3. Time dependence: the planned formula uses the two-time evolution Phi_(t,s) and includes dot-omega_t; neither may be omitted.
4. Pfaffian Frobenius: prove frame independence of the annihilator ideal, obtain coefficient forms eta^a_b in a local coframe, and state the differential-ideal/involutivity equivalence. The codimension-one form must be nowhere zero.
5. Scope: the angular-form global-potential proof waits for its unit-circle period on the integration/Stokes page; de Rham quotients and homotopy operators wait for DG-15; Maurer--Cartan waits for the Lie block. The design's choice is ZF because every construction here is local and finite.

## Fetch-verified source harvest

Each direct full-text URL was opened in the web PDF reader on 2026-09-05. Every source row has a fetch_verified receipt in the coverage file; the coverage contents enumerate each source heading/named result and its exact disposition.

| Source | URL | Exact read locator |
| --- | --- | --- |
| John M. Lee, Introduction to Smooth Manifolds, 2nd ed. | https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf | Contents pp. 14–15; Ch. 14, “Exterior Derivatives,” PDF pp. 380–390 / printed pp. 363–373, from Prop. 14.23 through Cor. 14.36; and Ch. 19, “Involutivity and Differential Forms,” PDF pp. 510–513 / printed pp. 493–496, from Lemma 19.5 through Prop. 19.11. |
| Will J. Merry, Differential Geometry | https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf | Contents p. 1; the exact passages in Lecture 22, PDF pp. 182–186 (Prop. 22.14 through Prop. 22.29), and all of Lecture 23, PDF pp. 187–192 (Thm. 23.1 through Thm. 23.13). |
| Nigel Hitchin, Differentiable Manifolds | https://people.maths.ox.ac.uk/~joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf | Contents p. 2; §§6.4–6.5, PDF pp. 42–48, including the vector-calculus examples, Thm. 6.2, Props. 6.3–6.5; and the §6.6 heading. |

Lee is the eligible primary textbook and has a harvestable contents section. Merry and Hitchin are independent complete lecture-note treatments. Source-result rows in the coverage file carry the precise item-level source disposition.

## Current item ledger

Each row was added to the manifest in dependency order. It records the exact proposed claim, dependencies, proof route, and source-support tag. Canonical scope marks a designed calculation or misconception with its concrete disposition in the coverage harvest.

### A — the-exterior-derivative-and-cartan-calculus

| Item | Proposed claim | Dependencies | Proposed proof strategy | Source support |
| --- | --- | --- | --- | --- |
| def-graded-derivation-of-the-algebra-of-differential-forms | A graded derivation of the algebra of differential forms | def-smooth-differential-k-form, prop-differential-forms-form-a-graded-commutative-algebra | Define the degree convention and its Koszul-sign Leibniz rule on the established graded form algebra. | design route / prerequisite interface |
| def-exterior-derivative-by-the-invariant-vector-field-formula | The exterior derivative by the invariant vector-field formula | def-smooth-differential-k-form, def-lie-bracket-of-smooth-vector-fields | State the alternating Koszul formula locally for smooth vector fields, postponing tensoriality to the next lemma. | John M. Lee; Will J. Merry |
| lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear | The invariant exterior-derivative formula is $C^\infty$-multilinear | def-exterior-derivative-by-the-invariant-vector-field-formula, prop-leibniz-rules-for-the-lie-bracket-with-function-multiples, prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components | Replace one input by $fX$ and cancel each derivative-of-$f$ term against the Lie-bracket product rule; then use the local tensor criterion for smoothness. | design route / prerequisite interface |
| prop-the-exterior-derivative-is-local | The exterior derivative is local | def-exterior-derivative-by-the-invariant-vector-field-formula, lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear | Apply the invariant formula to vector fields restricted to a neighbourhood where the two forms agree. | design route / prerequisite interface |
| prop-exterior-derivative-of-a-function-is-its-differential | The exterior derivative of a function is its differential | def-exterior-derivative-by-the-invariant-vector-field-formula, def-global-differential-or-tangent-map | Specialize the invariant formula to degree zero and identify its value on every vector field with the established differential. | design route / prerequisite interface |
| thm-local-coordinate-formula-for-the-exterior-derivative | The local coordinate formula for the exterior derivative | prop-the-exterior-derivative-is-local, prop-local-coordinate-expression-for-a-differential-form, prop-coordinate-vector-fields-commute | Evaluate the tensorial invariant formula on commuting coordinate fields and obtain $d(\sum_I\omega_I dx^I)=\sum_I d\omega_I\wedge dx^I$. | John M. Lee |
| thm-the-exterior-derivative-is-a-graded-derivation | The exterior derivative is a graded derivation | thm-local-coordinate-formula-for-the-exterior-derivative, def-graded-derivation-of-the-algebra-of-differential-forms | Use the coordinate expression on wedge monomials, then invoke locality to pass from a chart to the manifold. | Will J. Merry; Nigel Hitchin |
| thm-the-exterior-derivative-squares-to-zero | The exterior derivative squares to zero | prop-the-exterior-derivative-is-local, thm-local-coordinate-formula-for-the-exterior-derivative | In coordinates pair symmetric second derivatives with antisymmetric wedges, and globalize the identity by locality. | design route / prerequisite interface |
| thm-existence-and-uniqueness-of-the-exterior-derivative | Existence and uniqueness of the exterior derivative | prop-exterior-derivative-of-a-function-is-its-differential, thm-the-exterior-derivative-is-a-graded-derivation, thm-the-exterior-derivative-squares-to-zero | Combine the preceding construction with the fact that a degree-one graded derivation is determined in a chart by functions and coordinate one-forms. | John M. Lee; John M. Lee; Will J. Merry; Nigel Hitchin |
| prop-the-exterior-derivative-commutes-with-restriction | The exterior derivative commutes with restriction | prop-the-exterior-derivative-is-local | Restate locality as equality between the derivative of a restriction and the restriction of the derivative. | design route / prerequisite interface |
| thm-the-exterior-derivative-commutes-with-pullback | The exterior derivative commutes with pullback | thm-local-coordinate-formula-for-the-exterior-derivative, def-pullback-of-a-differential-form, prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges | Prove the identity first for functions and coordinate generators, extend by the graded derivation rule, and use locality. | Will J. Merry; Nigel Hitchin |
| cor-pullback-carries-closed-forms-to-closed-forms-and-exact-forms-to-exact-forms | Pullback carries closed forms to closed forms and exact forms to exact forms | thm-the-exterior-derivative-squares-to-zero, thm-the-exterior-derivative-commutes-with-pullback | Apply pullback naturality to $d\omega=0$ and to $\omega=d\eta$; the terms closed and exact are used provisionally only. | Will J. Merry |
| prop-the-exterior-derivative-does-not-enlarge-support | The exterior derivative does not enlarge support | prop-the-exterior-derivative-is-local, def-smooth-section-local-section-and-support | Use locality on the open complement of the support, where the form is zero. | design route / prerequisite interface |
| def-lie-derivative-of-a-tensor-field | The Lie derivative of a tensor field | def-local-and-global-flow, def-pullback-of-a-covariant-tensor-field, def-smooth-tensor-field | Differentiate pullback along a local flow, using the local-diffeomorphism pullback convention for mixed tensors. | Will J. Merry |
| lem-the-flow-definition-of-tensor-lie-derivative-is-local-and-well-defined | The flow definition of tensor Lie derivative is local and well-defined | def-lie-derivative-of-a-tensor-field, thm-fundamental-theorem-on-flows | Use local uniqueness of integral curves to show two local flows agree near $(0,p)$, hence give the same derivative at zero. | Will J. Merry |
| prop-lie-derivative-agrees-with-x-on-functions-and-bracket-on-vector-fields | Tensor Lie derivative agrees with $X$ on functions and bracket on vector fields | def-lie-derivative-of-a-tensor-field, def-lie-derivative-of-a-function, thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket | Differentiate function pullback and compare the inverse-time pushforward convention with the established vector-field Lie derivative. | design route / prerequisite interface |
| thm-lie-derivative-is-a-derivation-of-the-tensor-algebra | The Lie derivative is a derivation of the tensor algebra | def-lie-derivative-of-a-tensor-field, prop-tensor-products-and-contractions-of-smooth-tensor-fields-are-smooth | Differentiate the naturality of tensor products and contractions under a local-flow pullback. | Will J. Merry |
| prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor | The coordinate formula for the Lie derivative of a covariant tensor | thm-lie-derivative-is-a-derivation-of-the-tensor-algebra, prop-lie-derivative-agrees-with-x-on-functions-and-bracket-on-vector-fields, prop-coordinate-vector-fields-commute | Evaluate the tensor-derivation identity on coordinate vector fields and use $\mathcal L_X\partial_i=[X,\partial_i]$. | design route / prerequisite interface |
| prop-coordinate-formula-for-the-lie-derivative-of-a-contravariant-tensor | The coordinate formula for the Lie derivative of a contravariant tensor | thm-lie-derivative-is-a-derivation-of-the-tensor-algebra, prop-lie-derivative-agrees-with-x-on-functions-and-bracket-on-vector-fields, prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components | Apply the tensor-derivation law to a coordinate tensor expansion and differentiate its vector-field factors. | design route / prerequisite interface |
| prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes | A tensor field is flow-invariant exactly when its Lie derivative vanishes | def-lie-derivative-of-a-tensor-field, lem-the-flow-definition-of-tensor-lie-derivative-is-local-and-well-defined | Differentiate the pullback curve for one direction and solve the resulting homogeneous derivative equation locally for the converse. | design route / prerequisite interface |
| def-lie-derivative-of-a-differential-form | The Lie derivative of a differential form | def-lie-derivative-of-a-tensor-field, def-smooth-differential-k-form | Specialize the tensor Lie derivative to alternating covariant tensors. | Nigel Hitchin |
| prop-lie-derivative-of-forms-is-a-degree-zero-graded-derivation | Lie derivative of forms is a degree-zero graded derivation | def-lie-derivative-of-a-differential-form, thm-lie-derivative-is-a-derivation-of-the-tensor-algebra, def-wedge-product-of-differential-forms | Restrict the tensor product rule to the wedge product of alternating tensors. | Will J. Merry |
| thm-cartans-magic-formula | Cartan's magic formula | prop-exterior-derivative-of-a-function-is-its-differential, thm-the-exterior-derivative-is-a-graded-derivation, def-lie-derivative-of-a-differential-form, prop-lie-derivative-of-forms-is-a-degree-zero-graded-derivation, prop-interior-product-on-forms-is-a-graded-antiderivation | Check $\mathcal L_X=d\iota_X+\iota_Xd$ on functions and one-forms, then extend because both sides are degree-zero derivations of the form algebra. | John M. Lee; Will J. Merry; Nigel Hitchin |
| cor-lie-derivative-commutes-with-the-exterior-derivative | Lie derivative commutes with the exterior derivative | thm-the-exterior-derivative-squares-to-zero, thm-cartans-magic-formula | Expand Cartan's formula on both composites and cancel using $d^2=0$. | Will J. Merry |
| prop-cartan-commutator-identities | Cartan commutator identities | thm-cartans-magic-formula, cor-lie-derivative-commutes-with-the-exterior-derivative, prop-interior-product-on-forms-is-a-graded-antiderivation, thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket | State the graded commutator once and compute it from Cartan's formula, $d^2=0$, and the interior-product antiderivation identities. | John M. Lee |
| prop-lie-derivatives-are-natural-for-related-vector-fields | Lie derivatives are natural for related vector fields | thm-the-exterior-derivative-commutes-with-pullback, def-lie-derivative-of-a-differential-form, prop-related-vector-fields-have-related-lie-brackets | Use the invariant form formula together with pullback naturality and the relation of Lie brackets for related fields. | design route / prerequisite interface |
| thm-differentiation-of-a-pulled-back-form-along-a-time-dependent-flow | Differentiation of a pulled-back form along a time-dependent flow | def-lie-derivative-of-a-differential-form, def-time-dependent-vector-field-and-evolution-operator, thm-time-dependent-vector-fields-have-local-smooth-evolution-operators, prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law | Differentiate the two-time evolution identity and separate variation of the form from infinitesimal pullback by $X_t$. | design route / prerequisite interface |
| cor-a-closed-form-is-flow-invariant-when-its-contraction-is-exactly-zero | A closed form is flow-invariant when its contraction is zero | thm-cartans-magic-formula, prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes | Cartan's formula vanishes term by term when $d\omega=0$ and $\iota_X\omega=0$, then use the flow-invariance criterion. | design route / prerequisite interface |
| def-differential-ideal-in-the-algebra-of-forms | A differential ideal in the algebra of forms | thm-the-exterior-derivative-is-a-graded-derivation | Define a graded wedge ideal stable under the now-established exterior derivative. | design route / prerequisite interface |
| lem-annihilator-ideal-of-a-distribution-is-frame-independent | The annihilator ideal of a distribution is frame-independent | def-differential-ideal-in-the-algebra-of-forms, def-annihilator-bundle-of-a-distribution, prop-double-annihilator-recovers-a-finite-rank-distribution | Complete each local annihilator frame to a coframe and show both sets generate precisely the forms vanishing on the distribution. | John M. Lee |
| thm-pfaffian-frobenius-criterion | The Pfaffian Frobenius criterion | def-differential-ideal-in-the-algebra-of-forms, lem-annihilator-ideal-of-a-distribution-is-frame-independent, def-involutive-distribution, prop-involutivity-can-be-checked-on-a-local-frame | Evaluate $d\theta^a$ on tangent fields for necessity, use a local coframe to obtain wedge coefficients for sufficiency, and identify the frame-independent differential ideal. | John M. Lee; John M. Lee; John M. Lee |
| cor-codimension-one-frobenius-criterion | The codimension-one Frobenius criterion | thm-pfaffian-frobenius-criterion | In a local coframe beginning with $\alpha$, identify $d\alpha\in(\alpha)$ with $\alpha\wedge d\alpha=0$. | design route / prerequisite interface |
| prop-closed-constant-rank-one-forms-define-integrable-hyperplane-fields | Closed constant-rank one-forms define integrable hyperplane fields | cor-codimension-one-frobenius-criterion, def-integrable-distribution | A nowhere-zero closed one-form satisfies the codimension-one wedge criterion, yielding integrability of its kernel. | design route / prerequisite interface |
| fs-the-exterior-derivative-is-c-infinity-linear | The exterior derivative is $C^\infty$-linear | thm-the-exterior-derivative-is-a-graded-derivation | Refute the claim with $d(f\omega)=df\wedge\omega+f\,d\omega$ and a nonconstant function. | canonical scope |
| fs-the-lie-derivative-is-c-infinity-linear-in-the-vector-field | The Lie derivative is $C^\infty$-linear in its vector-field argument | thm-cartans-magic-formula | Use $\mathcal L_{fX}\omega=f\mathcal L_X\omega+df\wedge\iota_X\omega$ and choose a nonzero correction term. | Merry, Remark 22.23 |
| fs-the-exterior-derivative-depends-on-a-riemannian-metric | The exterior derivative depends on a Riemannian metric | def-exterior-derivative-by-the-invariant-vector-field-formula | Point to the invariant construction, which uses only smooth functions, vector fields, brackets, and forms. | canonical scope |
| fs-every-closed-differential-form-is-globally-exact | Every closed differential form is globally exact | thm-the-exterior-derivative-squares-to-zero | Use the angular one-form on the punctured plane as a direct counterexample; defer its period proof to the integration page. | canonical scope |
| fs-lie-derivative-and-interior-product-commute-for-all-vector-fields | Lie derivative and interior product commute for all vector fields | prop-cartan-commutator-identities | Refute it by $[\mathcal L_X,\iota_Y]=\iota_{[X,Y]}$ for a noncommuting pair. | Will J. Merry; canonical scope |
| fs-alpha-wedge-d-alpha-vanishes-for-every-one-form | $\alpha\wedge d\alpha$ vanishes for every one-form | cor-codimension-one-frobenius-criterion | Use the standard contact form $dz-x\,dy$ on three-space to calculate a nonzero obstruction. | canonical scope |
| fs-pullback-of-a-compactly-supported-form-is-always-compactly-supported | Pullback of a compactly supported form is always compactly supported | def-pullback-of-a-differential-form, def-smooth-section-local-section-and-support | Use a constant nonproper map into the support of a compactly supported form to produce noncompact pullback support. | canonical scope |

### B — the-exterior-derivative-and-cartan-calculus-examples

| Item | Proposed claim | Dependencies | Proposed proof strategy | Source support |
| --- | --- | --- | --- | --- |
| ex-exterior-derivatives-of-coordinate-one-forms | Exterior derivatives of coordinate one-forms | thm-local-coordinate-formula-for-the-exterior-derivative | Apply the coordinate formula to $dx^i=d(x^i)$ and use $d^2=0$. | canonical scope |
| ex-the-euclidean-area-form-is-closed | The Euclidean area form is closed | thm-local-coordinate-formula-for-the-exterior-derivative | Compute $d(dx\wedge dy)$ from the coordinate formula. | canonical scope |
| ex-the-angular-one-form-on-the-punctured-plane-is-closed | The angular one-form on the punctured plane is closed | thm-local-coordinate-formula-for-the-exterior-derivative | Differentiate the explicit rational-coordinate angular form and cancel its two-form coefficient. | canonical scope |
| ex-the-angular-one-form-has-no-global-potential | The angular one-form has no global potential | ex-the-angular-one-form-on-the-punctured-plane-is-closed | Record local angle primitives; defer the nonexistence proof to its nonzero unit-circle period on the later integration page. | design route / prerequisite interface |
| ex-curl-and-divergence-encoded-by-the-exterior-derivative | Curl and divergence encoded by the exterior derivative | thm-local-coordinate-formula-for-the-exterior-derivative | Compute $d$ on Euclidean one- and two-form coordinate expressions without a metric-free vector-field identification. | canonical scope |
| ex-lie-derivative-of-the-euclidean-metric-under-dilations | Lie derivative of the Euclidean metric under dilations | prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor, def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian | Insert the radial dilation field in the covariant-tensor coordinate formula for the Euclidean metric. | canonical scope |
| ex-lie-derivative-of-an-area-form-and-planar-divergence | Lie derivative of an area form and planar divergence | thm-cartans-magic-formula, thm-local-coordinate-formula-for-the-exterior-derivative | Use Cartan's formula on $dx\wedge dy$ and identify the remaining coefficient with coordinate divergence. | canonical scope |
| ex-cartans-formula-for-a-coordinate-vector-field | Cartan's formula for a coordinate vector field | thm-cartans-magic-formula | Evaluate both terms in Cartan's formula on a coordinate expression for a differential form. | canonical scope |
| ex-a-contact-form-on-three-space | A contact form on three-space | cor-codimension-one-frobenius-criterion | For $\alpha=dz-x\,dy$, calculate $\alpha\wedge d\alpha\ne0$ and invoke the codimension-one obstruction. | canonical scope |
| ex-an-integrable-pfaffian-equation-with-a-local-first-integral | An integrable Pfaffian equation with a local first integral | thm-pfaffian-frobenius-criterion, cor-frobenius-local-first-integrals | Exhibit a nowhere-zero defining form satisfying the Pfaffian criterion and write a local first integral for its kernel. | canonical scope |
| cex-a-nonproper-pullback-destroys-compact-support | A nonproper pullback destroys compact support | def-pullback-of-a-differential-form, def-smooth-section-local-section-and-support | Pull a compactly supported form back by a constant map whose image lies in its nonzero region, so the pullback has noncompact support. | canonical scope |
| ex-time-dependent-pullback-differentiation-for-a-translation | Time-dependent pullback differentiation for a translation | thm-differentiation-of-a-pulled-back-form-along-a-time-dependent-flow | Write the two-time translation evolution and verify $\dot\omega_t+\mathcal L_{X_t}\omega_t$ term by term. | canonical scope |

## Known limits and authoring obligations

- lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear must display the signs in the fX_i cancellation; it cannot merely invoke tensoriality.
- thm-the-exterior-derivative-commutes-with-pullback must establish naturality rather than infer it from coordinates without transition control.
- thm-cartans-magic-formula must establish the degree-zero derivation extension after checking functions and one-forms.
- thm-differentiation-of-a-pulled-back-form-along-a-time-dependent-flow must use Phi_(t,s) and retain dot-omega_t.
- ex-the-angular-one-form-has-no-global-potential has only a deliberate forward reference for its period proof; the source and destination are in the coverage file.
- The compact-support counterexample must use a nonproper map and distinguish support inclusion from a universal compactness claim.

## Validation checkpoint

- `node tools/coverage-checklist.mjs --require-destination research/frontier-31a-batch-17.coverage.json` — **pass:** 1 page, 80 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-31a-batch-17.coverage.json` — **pass:** 3/3 sources have a full-text `web-open` receipt.
- `node tools/manifest-deps.mjs research/frontier-31a-batch-17.pages.json` — **pass:** 52 items, 0 normalizations, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/frontier-31a-batch-17.pages.json` — **pass:** 52 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — **pass:** `OK`; the standing repository-wide redundant-prerequisite advisories remain outside this batch. The unspliced plan intentionally still has empty DG-12 item lists, so this gate checks global plan order rather than these manifest rows.

The forced direct-transport check and `url-sweep --recover --fail-on-dead` were also run. Both local Node/curl workers returned `EAI_AGAIN`/“Could not resolve host” for every independent host, and the sweep’s archive lookup returned no snapshot. This is a sandbox DNS failure, not evidence that a source URL failed: each same direct URL opened as its complete PDF in the independent web reader during this dispatch and carries a re-read `web-open` receipt at `2026-09-05T08:20:57Z`. Because the source text remains available at the recorded URL, replacing it with a different text or discarding the verified harvest would violate URL discipline. The temporary liveness receipt is `/tmp/frontier-31a-batch-17.url-liveness.json`.

Repair note: Lee’s Proposition 14.30 is now correctly recorded as an inline moving-coframe support result for the invariant-​$d$ construction, not as a Cartan-commutator claim. Merry’s entire named-result sequence from Definitions 22.16–22.17 through Proposition 22.29 is now disposed in source order; Remark 22.23 has its actual carrier, `fs-the-lie-derivative-is-c-infinity-linear-in-the-vector-field`, with the Cartan-formula refutation route. The next action is Step 5 authoring from this dependency-closed scaffold; no plan structure, workflow state, published page, or item was edited here.

## Step-3 fix pass

I read `research/frontier-31a-alpha-f-step3-scaffold-review.md` for the assigned
group and batch. Its batch-17 verdict is `sufficient` and it states that there are
no missing-result rows or remaining group-f scaffold blockers. Thus there is no
unstated review correction to apply or push back on. I also re-opened the three
recorded direct PDFs: Lee, Chs. 14 and 19; Merry, Lectures 22--23; and Hitchin,
§§6.4--6.6. Their live URLs, source-owned headings, exact PDF-page locators, and
the three full-text `web-open` receipts remain recorded in the coverage harvest.

| Finding id | Disposition | Evidence | Changed scaffold record |
| --- | --- | --- | --- |
| `f/17/verdict` | retained: sufficient; no manifest claim added, removed, or renumbered | The review identifies the invariant-$d$, Cartan, two-time pullback, and Pfaffian-Frobenius routes as complete over the three declared predecessor pages. The current manifest has 40 A items and 12 B items, all with explicit `deps`; `manifest-deps` reports 52 items and 0 errors. | none (notes-only disposition) |
| `019ce671c5886c2851d88af72495e563059f46dd7c3c74a6b90d5377cbfafef4` — Merry Cor. 23.5 | retained deferred | The source harvest locates the induced pullback on de Rham cohomology after the deliberately limited closed/exact introduction. Its destination `the-de-rham-complex-homotopy-and-mayer-vietoris` is a later A page at order 471. | none; `coverage.json` retains its deferred row and destination |
| `257be735aac23d46b158fe4b5f3e7637433b53d6982fc9675e16f381e979230d` — Merry Lem. 23.3 | retained deferred | Zeroth de Rham cohomology forms a quotient not used by this scaffold; the same later DG-15 destination is valid. | none; `coverage.json` retains its deferred row and destination |
| `62601a2592aca7af4c23670b4f348c8f0c25106fe4303fff511021fc906067b8` — angular-form global-potential obstruction | retained deferred | The B example carries only the local-primitives calculation. The nonzero unit-circle period belongs to `integration-of-forms-and-the-general-stokes-theorem`, a later A page at order 469; it is not a dependency. | none; `coverage.json` retains its deferred canonical row and destination |
| `92bc5d192383a24c718698ae7773f855fd14a9c1151651691a2895e7ce5376fd` — Lee, “The Frobenius Theorem” | retained deferred/already supplied by predecessor | The selected DG-12 result is the differential-form criterion; the local/global integral-manifold theorem is already provided by declared prerequisite `distributions-integral-manifolds-and-the-frobenius-theorem`. | none; `coverage.json` retains the predecessor destination |
| `957ca5d07a7e4a5fd9a5a6c62f5178734995c66b6605f1d176144e56b03fcd47` — Hitchin §6.6 | retained deferred | The immediately following source section begins de Rham cohomology and homotopy material, which is intentionally reserved for the later DG-15 page. | none; `coverage.json` retains its deferred row and destination |

Required checks after this disposition: `coverage-checklist --require-destination`
passes with 1 page and 80 harvested results; `source-fetch-check` reports 3/3
full-text sources; the batch `content-policy --manifest-only` check reports 52
scoped items with 0 errors and 0 warnings, and the required whole-run command over
`research/frontier-31a-batch-*.pages.json` reports 906 scoped items with 0 errors
and 0 warnings; `validate-plan` reports `OK` (only the repository-wide
redundant-prerequisite advisories remain). No plan structure, workflow state,
published content, or non-batch artifact was changed.

## Step-5 authoring

- Authored all 52 manifest IDs: 40 A-page core/false-statement items and 12 B-page examples, plus the two draft pages under `library/differential-geometry/`. Every authored item and page is `status: draft`.
- Statements are marked literature-derived from the three recorded source treatments (Lee Chapters 14 and 19, Merry Lectures 22--23, and Hitchin §§6.4--6.5); locally written proof and verification rows are marked ai-altered. No statement is marked ai-generated, no generated statement is a dependency target, and no stale judge record was introduced.
- The invariant construction explicitly shows the $fX_i$ cancellation; Cartan's formula is checked on functions and one-forms before the degree-zero derivation extension; the time-dependent formula retains both $\Phi_{t,s}$ and $\dot\omega_t$; the Pfaffian criterion proves both directions using a local coframe; and the compact-support counterexample uses a constant nonproper map.
- No planned claim was narrowed or dropped. The angular-form period obstruction remains deliberately deferred as designed. The manifest names later *page* destinations, while SCHEMA forward_refs require a later planned *item* ID and neither destination currently supplies one; therefore the two records state that deferral in prose and do not create an invalid forward_refs field. This is recorded rather than fabricated as a forward edge.
- Checks run after authoring: explicit-path precheck 47/47 pass; `validate-plan.mjs research/plan-spec.json` OK (repository-wide redundant-prerequisite advisories only); `content-policy.mjs research/frontier-31a-batch-17.pages.json` 52 scoped items, 0 errors, 0 warnings; strict proof-contract 47/47, 0 errors, 0 warnings. Focused fwdcheck and rendercheck also pass. No remaining batch-local blocker.
