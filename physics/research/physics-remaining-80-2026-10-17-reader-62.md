# Step 3a reader report — batch 62

Run: `physics-remaining-80-2026-10-17`  
Role: independent reader  
Scope: `tgr-et01` and `tgr-et01-examples`

## Opened inventory

Opened both assigned pages:

- `library/thermodynamics-and-general-relativity-mathematics/tgr-et01.md`
- `library/thermodynamics-and-general-relativity-mathematics/tgr-et01-examples.md`

Opened all ten assigned item files. Review proceeded by dependency level:

- Level 0: `def-tgr-stationary-thermal-carriers`, `def-tgr-future-mass-shell-measure`, `lem-tgr-isometry-natural-tensor-invariance`, `lem-tgr-mass-shell-polynomial-rigidity`.
- Level 1: `lem-tgr-killing-thermal-normalization`, `lem-tgr-thermal-killing-kinematic-equivalence`, `lem-tgr-mass-shell-measure-tetrad-invariance`.
- Level 2: `thm-tgr-juttner-partition-and-moments`.
- Level 3: `thm-tgr-massive-juttner-stationarity`.
- Level 4: `ex-tgr-flrw-no-killing-equilibrium`.

The batch proof-contract index lists all ten item IDs; I checked the current item bodies, facts, proofs, statements, titles and dependency interfaces directly.

Opened the 40 distinct direct external item suppliers declared by the assigned items. Their current item files identify them as published. The reviewed supplier interfaces were:

- Geometry and causal structure: `def-gr-smooth-lorentzian-objects`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `def-gr-killing-field`, `thm-gr-killing-and-on-shell-matter-identities`, `def-countable-choice`, `thm-gr-local-lorentz-tetrad-existence`, `def-lorentz-form-and-inertia`, `def-causal-classification-of-lorentz-vectors`, `def-time-orientation-and-future-causal-sets`, `lem-lorentz-form-has-orthonormal-basis`, `lem-timelike-cone-has-two-convex-components`, `def-gr-local-frame-and-tetrad-fields`, `lem-gr-tetrad-change-of-basis-is-lorentz`, `lem-gr-future-causal-classification-by-a-timelike-field`, `thm-sylvesters-law-of-inertia`, and `thm-gram-schmidt-orthonormalisation`.
- Measure and integration: `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `thm-lebesgue-measure-is-a-complete-measure`, `def-measure`, `def-measure-space`, `def-borel-sigma-algebra`, `def-nonnegative-lebesgue-integral`, `def-integral-over-a-measurable-set`, `thm-continuous-preimages-of-borel-sets-are-borel`, `thm-borel-sets-are-lebesgue-measurable`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`, `thm-polar-coordinates-formula-for-lebesgue-measure`, `lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates`, `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, `thm-differentiation-under-the-integral-sign`, `thm-dominated-convergence`, and `def-probability-measure`.
- Calculus and curvature: `cor-mean-value-theorem`, `thm-flow-box-theorem`, `def-lie-derivative-of-a-tensor-field`, `def-gr-curvature-tensor-and-derived-tensors`, `thm-gr-curvature-tensoriality-and-coordinate-formula`, `def-hyperbolic-functions`, and `thm-hyperbolic-identities-and-derivatives`.

Opened the two existing published page prerequisites listed by `tgr-et01`: `library/general-relativity/gr-connections-and-free-fall.md` and `library/special-relativity/sr-observer-measurements.md`. Also opened `research/physics-remaining-80-2026-10-17-batch-62.cross-batch-dependencies.json`, the batch coverage record, and the batch notes as evidence, not as verdicts. The current plan records the other four required P pages with empty item lists; their expected page files are absent:

- `library/real-analysis/countability-and-uncountability.md`
- `library/measure-theory/product-measures-and-the-fubini-tonelli-theorems.md`
- `library/pde/euclidean-surface-measure-divergence-and-green-identities.md`
- `library/measure-theory/measures-and-their-basic-properties.md`

## Mathematics and source review

The carrier definitions specify the Lorentzian manifold, connection, selected smooth future timelike Killing field, temperature field, kinematic tensors, units and choice scope. The normalization and kinematic lemmas correctly derive the Killing/temperature conditions, including expansion and shear; the acceleration/temperature-gradient equation alone is not treated as sufficient.

The massive shell is parametrized by a future tetrad and receives the stated `d^3q/E` Borel measure. The tetrad-change Jacobian is derived as `E(q')/E(q)`, and the nonnegative Borel change-of-variables result applies to each shell Borel set. The massive/null polynomial-rigidity proof correctly separates angular and radial coefficients. The Jüttner theorem's hyperbolic substitutions, Bessel recurrences, parameter differentiation, probability normalization, current and stress moments, and divergence-theorem pressure calculation follow from the stated measure and integration suppliers. The stationarity theorem correctly differentiates the exponential along the geodesic spray, applies massive-shell rigidity pointwise, and handles future timelike, spacelike, past timelike, past null, future null and zero normalizer cases. No empirical conclusion is drawn.

I read the relevant text of Acuña-Cárdenas, Gabarrete and Sarbach, *An Introduction to the Relativistic Kinetic Theory on Curved Spacetimes*, [arXiv:2106.09235](https://arxiv.org/abs/2106.09235): §II.5, equations (75)–(76), for the `d^d p/E` mass-hyperboloid measure; §III.3, equations (110)–(119), for the exponential Jüttner ansatz and moments; §VI.2, equations (262)–(267), for the Killing inverse-temperature condition; and §VIII.4, equations (351)–(353), for the massive/massless FLRW distinction and conformal-Killing null case. These passages support the topic and scope; the local proofs supply the detailed calculations used here. I also read Santiago and Visser, *Tolman-like Temperature Gradients in Stationary Spacetimes*, [arXiv:1807.02915](https://arxiv.org/abs/1807.02915), §§III–IV, equations (15)–(21): for a selected timelike Killing flow, the acceleration is the gradient of the logarithm of its norm and the temperature varies inversely with that norm. The local proof supplies the connected-domain converse and full kinematic equivalence.

The FLRW curvature calculation and scalar-invariance obstruction in the example are correct for the stated metric and curvature convention. Its massive conclusion is limited by the cited stationarity theorem to the specified normalizable exponential ansatz. The null conformal branch is algebraically correct for the stated vector field and constant amplitude.

## Findings not editable in this reader role

1. `tgr-et01`, frontmatter `requires`: four declared P-page prerequisites have no current page files or page-level content to inspect. The current plan entries have `items: []`. The directly used published item suppliers support the conditional item proofs, but do not discharge these declared page dependencies.
2. `ex-tgr-flrw-no-killing-equilibrium`, Facts & Assumptions `[F5]` and Verification step `4.1`: `[F5]` states the Lie-derivative identity for an arbitrary vector field but cites `lem-tgr-isometry-natural-tensor-invariance`, whose Statement assumes a nowhere-zero Killing field. The field `K=(s/L_0)∂_s` used in step `4.1` is conformal Killing and is not Killing. The cited statement therefore does not establish the general identity used to compute `L_K g`; cite a general formula or derive it from the flow definition.
3. `ex-tgr-flrw-no-killing-equilibrium`, Statement `(c)`: “conformal Killing” is used before being defined. The cited `def-gr-killing-field` defines Killing fields (`L_X g=0`), not conformal Killing fields. State the conformal-Killing equation and the regularity of its conformal factor before using the term.
4. `ex-tgr-flrw-no-killing-equilibrium`, Statement `(c)` and Verification step `4.1`: “future null shell” / “null-shell Liouville equation” is used without a definition of the massless shell or its total domain. `def-tgr-future-mass-shell-measure` is only for `M_*>0`; the cited causal definitions classify pointwise future-null vectors but do not define the shell used here. Specify the nonzero future-null fiber set (and its union over `O`) before stating the transport claim.

## Edits, page verdicts and blocker

No item or page prose was edited. No item formatter or validation command was run because this read-only assignment made no content edits.

- `tgr-et01`: The nine mathematical item arguments reviewed here are conditionally supported by their current direct suppliers. The A page is not ready for an unqualified verdict because the four listed P-page prerequisites have no current carriers.
- `tgr-et01-examples`: The curvature obstruction, massive-ansatz consequence and null-shell calculation are mathematically consistent, subject to the citation and definition findings above. Its page readiness also depends on the unresolved A-page prerequisite closure.

Blocker: no page-level statement or proof can be inspected for the four absent required P pages, so the declared page prerequisite closure remains unresolved.

Coverage limitation: I inspected the exact interfaces of all 40 direct external item suppliers but did not re-audit the entire deeper mathematical dependency closure or reprove published suppliers. The four missing P-page contents remain unavailable for review.
