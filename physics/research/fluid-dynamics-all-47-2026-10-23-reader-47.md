# Step 3a reader report — batch 47

Run: fluid-dynamics-all-47-2026-10-23  
Role: reader  
Scope: batch 47 only

## Verdict

I reviewed both assigned pages, all three assigned items, the direct prerequisite statements needed for their claims, and the cited fluid-mechanics source sections. The capillary-gravity model and dispersion relation are internally consistent after repairing the assigned statements below. One malformed frame definition remains in an in-run supplier outside batch 47 and is recorded in the findings JSON.

No reported experiment or empirical dataset is part of this batch. The postulate is an adopted model, and the dispersion result is conditional on that model; neither is presented as empirical proof.

## Opened inventory

### Assigned pages

- library/fluid-dynamics/fd-pbl01.md — A page, draft, compact-v1, empty body; lists post-fd-capillary-linear-free-surface and pthm-fd-capillary-wave-model-prediction.
- library/fluid-dynamics/fd-pbl01-examples.md — B page, draft, compact-v1, empty body; lists ex-fd-capillary-restoring-sign under examples.

### Assigned items

- items/post-fd-capillary-linear-free-surface.md
- items/pthm-fd-capillary-wave-model-prediction.md
- items/ex-fd-capillary-restoring-sign.md

### Prerequisite page and item context

I opened the required page context library/fluid-dynamics-mathematics/fd-bl01.md, library/fluid-dynamics/fd-f02.md, and the pinned published mathematics page library/real-analysis/sine-cosine-and-the-definition-of-pi.md.

I opened the direct physical/formulation suppliers items/def-fd-quantity-and-frame-conventions.md, items/def-fd-wall-defect-capillary-models.md, and items/post-fd-boundary-data.md. The first is the remaining out-of-scope finding described below. The second explicitly defines the fixed-depth capillary-gravity equations used here; the third defines impermeability and the distinction from no-slip.

The published mathematical supplier statements/definitions opened were:

- Complex numbers and exponential: def-complex-numbers-and-arithmetic, thm-complex-numbers-form-a-field, def-complex-exponential, thm-complex-exponential-is-entire-with-derivative-itself, thm-complex-exponential-addition-and-real-extension, and cor-complex-exponential-cartesian-form-modulus-and-eulers-identity.
- Trigonometric and hyperbolic definitions/results: def-pi-via-first-positive-cosine-zero, thm-eulers-formula, thm-sine-cosine-zero-sets-and-fundamental-period, def-hyperbolic-functions, and thm-hyperbolic-identities-and-derivatives.
- Differentiation and uniqueness tools: thm-chain-rule, thm-algebra-of-derivatives, thm-chain-rule-for-complex-derivatives, thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann, cor-mean-value-theorem, cor-zero-derivative-implies-constant, and thm-derivative-of-exponential.
- Real completeness and integration: thm-reals-cauchy-complete, thm-of-square-roots, thm-newton-leibniz-with-interior-derivative, and thm-differentiation-under-the-integral-sign-on-a-compact-rectangle.

These mathematical suppliers are published imported items. Their stated hypotheses and conclusions support the exponential mode identities, real and complex chain-rule steps, hyperbolic signs, ODE uniqueness argument, positive square root, and the postulate’s regularity notes.

## Independent review and repairs

### post-fd-capillary-linear-free-surface

The adopted equations, pressure-jump sign, curvature convention, fixed-bed impermeability, periodic cell, and formal first-order scope agree with the cited sources. The optional scaled graph is explicitly separated from the unrestricted formal coefficient; no nonlinear existence or approximation accuracy is claimed.

I repaired two definition details in the Postulate statement:

- The Euclidean affine space E is now specified by its oriented Euclidean translation space and absence of a distinguished origin. An inertial chart is an event-coordinate map with time-indexed spatial isometries translated at constant velocity. This makes the Galilean transformation’s time dependence well-typed.
- The primitive gas pressure p_a is explicitly stated to be measured in pascals.

The postulate remains an adopted physical formulation with no fabricated proof or empirical validation claim.

### pthm-fd-capillary-wave-model-prediction

The original statement did not give the hypotheses that its proof and positivity conclusion used: it omitted the depth, horizontal torus, positive density/gravity/surface-tension parameters, field domains and regularity, and units. It also left endpoint continuity of the vertical profile F implicit, although step 4.1 uses F(-h), F(0), and endpoint derivatives.

I rewrote the statement to give the chart and space-time conventions, periods and periodic lifts, field domains, units, regularity, positive parameters, model equations, complex mode, and frequency hypotheses. F is now explicitly continuous on the closed interval, twice continuously differentiable inside, with both derivatives continuously extended to the endpoints.

The proof then follows under its stated assumptions. The exponential mode is periodic and has horizontal eigenvalue -k². The vertical ODE F''=k²F has the stated cosh/sinh solution: the integrating-factor argument and the mean value theorem establish uniqueness from endpoint data under the now explicit continuity. The bottom condition removes the sinh term. Substitution in the two surface equations gives the two scalar mode equations; eliminating the vertical amplitude yields the claimed dispersion relation. Conversely, for each real root, the displayed amplitude/profile construction satisfies the bulk, bottom, kinematic, and dynamic equations. The proof establishes only this conditional model prediction.

### ex-fd-capillary-restoring-sign

The original example named a “model angular frequency” without defining the corresponding mode and relied on parameter/unit context not fully restated in its formulation. I completed its statement with the positive parameter units, vertical convention, real field domains and regularity, equations, complex mode fields, and endpoint regularity of F. It now makes a direct sign claim for an explicitly defined nonzero mode.

Its verification correctly uses the theorem’s horizontal eigenvalue and dispersion result, then uses h,k,rho,g,gamma>0 and tanh(kh)>0 to obtain a positive squared frequency. No converse, measurement, or empirical claim is made.

### Proof contracts

I updated the postulate’s formulation evidence and synchronized the theorem-supplier excerpt and stale boundary excerpts in the assigned batch proof contract. No verification.judge record was present on any assigned item.

## Source review

- MIT OpenCourseWare 18.354, §23.1, printed pp. 104–105, equations (541a)–(548), (547a)–(547c), and (551): [lecture notes PDF](https://ocw.mit.edu/courses/18-354j-nonlinear-dynamics-ii-continuum-systems-spring-2015/6163837c5efa5d6ed969e535ec8f890c_MIT18_354JS15_lectureNotes.pdf). The source’s final relation (551) is deep-water; I used its linearized boundary equations and sign convention only for that scope.
- Howard Georgi, The Physics of Waves, §§11.5.1–11.5.2, printed pp. 285–291, especially equations (11.120) and (11.137)–(11.140): [MIT OpenCourseWare textbook PDF](https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/ef731c1b91d77a6db003f6c27e300d25_MIT8_03SCF16_Textbook.pdf). Equation (11.137) gives the finite-depth capillary-gravity factor.
- Richard Fitzpatrick, Fluid Mechanics, “Gravity Waves,” equations (11.1)–(11.21): [source section](https://farside.ph.utexas.edu/teaching/336L/Fluidhtml/node147.html). The fixed-bed condition, vertical ODE, and gravity-only finite-depth relation agree.
- Richard Fitzpatrick, Fluid Mechanics, “Surface Tension,” equations (11.116)–(11.121): [source section](https://farside.ph.utexas.edu/teaching/336L/Fluidhtml/node156.html). The pressure-jump convention and capillary-gravity formula agree after accounting for Fitzpatrick’s potential convention v=-∇φ versus this model’s u=∇φ.

No numerical observations or uncertainty estimates are applicable: these items assert a model and a conditional deduction, not an experiment.

## Diagram review

The Postulate’s TikZ vertical-section sketch was checked against the text. The fill is below the optional graph and above the fixed bed; z=0 is the flat reference level; the normal points from liquid toward gas; and gravity points downward. The schematic is illustrative only, and the proof does not rely on it. The theorem and example contain no diagrams requiring repair.

## Page verdicts

- fd-pbl01 — PASS. Draft A-page inventory and requirements are consistent with the assigned items; body is empty and compact-v1 is retained.
- fd-pbl01-examples — PASS. Draft B-page companion and example inventory are consistent; body is empty and compact-v1 is retained.

## Validation and blocker

- Reflow and precheck passed for all three changed items; each reflow reported unchanged formatting.
- The final proof-layout check covered all three changed items and reported 13 steps, 0 defects.
- One blocker remains outside this batch: items/def-fd-quantity-and-frame-conventions.md, batch 3, defines x:E→R³ but then gives x*=Qx+vt+a. The map has no time argument although the transformation does. I did not edit this supplier; it is recorded as an in-run dependency finding routed through the assigned Postulate.

Coverage limitation: the initial navigation opened the assigned drafts before all supplier context. I then opened the direct suppliers and reviewed the current repaired claims against them. I used the published imported mathematical statements as suppliers rather than reconstructing their full transitive proof closures, and I did not recompute the import-file hashes.

