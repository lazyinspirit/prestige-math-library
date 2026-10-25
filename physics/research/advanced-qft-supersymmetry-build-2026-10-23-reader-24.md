# Step 3a reader report — batch 24

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: reader  
Scope: batch `24`

## Opened inventory

Assigned pages:

- `library/advanced-qft-and-supersymmetry/aqft-eft-foundations.md`
- `library/advanced-qft-and-supersymmetry/aqft-eft-foundations-examples.md`

Assigned items, reviewed in dependency order:

1. `def-aqft-model-and-scale-data`
2. `def-aqft-wilsonian-action`
3. `def-aqft-derivative-expansion-and-truncation`
4. `prop-aqft-finite-gaussian-shell-composition`
5. `texp-aqft-finite-heavy-scalar-matching`
6. `ex-aqft-gaussian-shell-matching`

Mathematical and framework suppliers opened to check the claims included
`def-countable-choice`, `def-axiom-of-choice`,
`lem-ac-supplies-sequential-choices-for-probability-constructions`,
`def-multivariate-normal-law`, `def-qft-framework-units`,
`def-qftx-nonabelian-gauge-data`,
`def-qftx-finite-gaussian-shell-transform`,
`prop-qftx-finite-gaussian-shell-semigroup`,
`lem-characteristic-function-of-a-multivariate-normal-law`,
`thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`,
`thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
`thm-tonelli-theorem-for-sigma-finite-product-spaces`,
`lem-qftx-finite-heavy-gaussian-square`,
`thm-nondegenerate-multivariate-normal-law-has-density`,
`thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`,
`def-measure-preserving-transformation-and-system`,
`thm-integrals-are-invariant-under-measure-preserving-maps`,
`def-qftx-heavy-gaussian-data`,
`thm-qftx-positive-unbounded-spectral-calculus`,
`thm-pvm-integral-is-a-star-homomorphism`,
`lem-unbounded-adjoint-is-well-defined-and-closed`, and
`thm-qftx-heavy-derivative-bound`. `research/math-imports.json` was consulted
for the mathematical import boundary.

For possible same-owner interface impact, I also opened the direct current-run
consumers `def-aqft-operator-basis-physical-data` (batch 25),
`def-aqft-threshold-matching-map` (batch 26), and
`def-aqft-exact-background-rg-flow` (batch 43). The current manifest
`deps`/`justified_by` graph contains 31 items in the transitive consumer
closure of `def-aqft-model-and-scale-data`; this count does not include
nonlogical references or alias-resolved uses. I did not inspect all of those
transitive carriers, so I did not change that shared Definition or the
Wilsonian-action Definition.

## Repairs and evidence

- In [the derivative-expansion definition](../items/def-aqft-derivative-expansion-and-truncation.md), I defined the graph distance as the shortest-path length with value `+∞` for disconnected vertices, specified standard coordinate entries and integer range bounds, and made the induction step handle both finite and infinite distances. Concatenating two finite paths proves the needed triangle inequality. The affected batch-24 contract now quotes the current Definition and Step 1.1, and records the extended-distance boundary.
- In [the finite heavy-scalar theorem](../items/texp-aqft-finite-heavy-scalar-matching.md), I removed the vague “definitions below” reference and made the Euclidean norm, complexification, Hermitian pairing, spectral projection, and projected Gaussian law explicit in the uninterrupted Statement. I also identified `I` and stated that `K` is positive definite, and changed the ambiguous “both finite Gaussian integrals” wording to the exact claim that `Z_H(J)` is finite and positive. The proof already verifies the complexified positivity, Gaussian source shift, and bounds from the opened suppliers. The worked-example contract now quotes the current Statement.
- Neither edited item had a `verification.judge` record to remove. No pages or diagrams required repair.

Required item checks passed:

- `reflow.mts` on both changed items: unchanged output, exit 0.
- `precheck.mts` on both changed items: pass, zero failures.
- One batched `proof-layout.mjs` run on both changed items: 2 items, 5 steps, 0 defects.

## Defects not edited

- `def-aqft-model-and-scale-data`, `Definition`, first paragraph: the graph is not required to be connected, but `d_Γ` is only named as graph distance. The statement does not define distances between disconnected vertices, while the finite-range condition later compares them with `1`. Define extended shortest-path distance or restrict the graph to be connected.
- `def-aqft-model-and-scale-data`, `Definition`, positive Gaussian submodel paragraph: the operator norm and orthogonal spectral projection are used without declaring the Euclidean structure or complexification, and the Definition does not state how the spectral-measure construction from its QFT-unit supplier applies to the real matrix `A`; `J(ℓ)` is not specified as a map with domain and regularity. Define those objects before consumers rely on them. Separately, the optional “Gaussian” submodel does not specify that `ν_H` is the centered Gaussian probability with covariance `K⁻¹`.
- `def-aqft-wilsonian-action`, `Definition`, integral paragraph: the exponent `e^{-S_UV}` requires a dimensionless action, but the carrier does not state that `S_UV` is normalized as the physical action divided by `ℏ`.
- `def-aqft-wilsonian-action`, `Definition`, final paragraph: the one-particle-irreducible effective action is named as a Legendre transform without specifying its source/field spaces, pairing, sign convention, or conditions under which the transform is defined. Supply a precise convention or remove this aside.
- Published `def-qft-framework-units`, `Definition` section: wikilinks to the SR, EM, Hilbert-space, spectral-calculus, and test-function suppliers occur inside the complete Definition, and there is no immediately following `Definition references` section. The exact assigned consumer reaching it is `def-aqft-model-and-scale-data`.
- Published `thm-pvm-integral-is-a-star-homomorphism`, `Statement`, opening paragraph: the definition of `Φ_E` contains a wikilink to `thm-bounded-borel-pvm-integral`; the Statement has no immediately following `Statement references` section. The exact assigned consumer whose dependency closure reaches it is `texp-aqft-finite-heavy-scalar-matching`.
- Published `def-measure-preserving-transformation-and-system`, `Definition`, final sentence: wikilinks to `def-measure-space` and `def-measurable-function-between-measurable-spaces` interrupt the Definition; there is no immediately following `Definition references` section. The exact assigned consumer whose dependency closure reaches it is `texp-aqft-finite-heavy-scalar-matching`.

While checking the direct outside-batch consumer context, I also observed that
`def-aqft-exact-background-rg-flow` (batch 43) describes a general split
`L_{μ_j}=L_{μ_{j+1}}\sqcup H_j` and says those data are precisely supplied by
the finite model-data Definition, which instead fixes retained and integrated
coordinates as copies of the same `R^X`. That downstream carrier was not edited
or routed: it is not an upstream supplier of an assigned item, and no guarded
downstream handoff was provided.

## Page verdicts

- `aqft-eft-foundations`: pass for its page carrier and inventory. Its YAML is
  frontmatter-only with `page_layout: compact-v1`; its five listed items match
  the batch-24 manifest. The remaining item findings above are not page-body
  defects. Its required `qftx-nonabelian-yang-mills-model` page currently has a
  draft frontmatter carrier with four item IDs; the older batch-24 notes call
  that page empty, so those notes were not treated as a current verdict. I did
  not adjudicate the contents or readiness of that other batch's items.
- `aqft-eft-foundations-examples`: pass for its page carrier and inventory. Its
  YAML is frontmatter-only with `page_layout: compact-v1`; its single example
  matches the batch-24 manifest.

## Blocker and coverage limit

The batch-24 page carriers are structurally complete, but the five in-flight
definition findings and three published dependency-format findings remain open.
Repairing the model-data Definition would require the same reviewer to complete
the remaining transitive consumer checks and coordinate any outside-batch
consumer or contract maintenance. This reader did not complete that manifest
deps/justified_by review and therefore made no edit to the model-data or
Wilsonian-action Definitions. The batch-43 downstream concern is recorded above for owner
disposition; the Step 3 downstream handoff guard does not allow it to be
relabeled as an upstream in-run dependency finding without owner authorization.
