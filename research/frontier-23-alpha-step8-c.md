# Frontier-23 group c — Step-8 adjudication

## Outcome

Adjudicated all 77 routed rejection rows for batches 6 and 7: 22
`confirmed_fatal`, 54 `confirmed_nonfatal`, and 1 `false_positive`. Every row
was appended to `research/frontier-23-judge-adjudications.jsonl` with its exact
`(id, model, context_sha256)` tuple and pre-edit guard hash. Context values below
are 12-character display prefixes; the append-only ledger carries each complete
hash.

The 22 confirmed-fatal items were repaired narrowly and are the complete group-c
rejudge target set. No confirmed-nonfatal or false-positive item was edited.
Twenty-two matching rows were appended through `tools/defect-ledger.mjs`, which
also refreshed the generated ledger view. There were no incoming alerts,
outgoing cross-group findings, or published-item repairs.

## Confirmed fatal

| item | context | rejection tested | repair |
|---|---|---|---|
| `cex-product-of-complete-measures-need-not-be-complete` | `93bf5599b34b` | The vertical null line was falsely identified as a subset of the constant-zero graph. | Used the null horizontal graph and the coordinate-swap diffeomorphism; corrected the section to the horizontal section `E_0`; restored countable-choice scope. Defect `frontier-23-S8-c-001`. |
| `cor-graph-of-a-measurable-function-is-lebesgue-null` | `8c57fc548b04` | The singleton-null citation requires countable choice, which the corollary omitted. | Added the exact choice hypothesis to the statement, Given block, dependency list, and cited fact. Defect `frontier-23-S8-c-002`. |
| `def-completed-product-measure` | `6ac3305d416b` | The definite completed-measure construction omitted the choice hypothesis of its completion theorem. | Put the definition under countable choice and declared the dependency. Defect `frontier-23-S8-c-003`. |
| `def-poincare-metric-and-distance-on-the-disc` | `9bbd45fe3149` | The path integrand was falsely called continuous for every piecewise-C1 curve. | Replaced that claim by the compact-image denominator bound and piecewise-continuity argument. Defect `frontier-23-S8-c-004`. |
| `def-polar-surface-measure-on-the-unit-sphere` | `c212224e2299` | The title called the newly defined set function a Borel measure before that was proved. | Narrowed the title to the polar surface set function. Defect `frontier-23-S8-c-005`. |
| `def-product-sigma-algebra-and-finite-product-sigma-algebras` | `f415ccb6423e` | The finite recursion omitted the empty family. | Defined the empty underlying product and its two-element sigma-algebra before the nonempty recursion. Defect `frontier-23-S8-c-006`. |
| `def-weierstrass-products-canonical-products-and-genus` | `66b103a030da` | A least finite genus need not exist for every discrete zero sequence. | Added finite and empty product conventions and assigned genus `+infinity` when no fixed genus converges. Defect `frontier-23-S8-c-007`. |
| `fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra` | `7d6e934c512b` | The refutation computed `E^0=N` instead of `E_0=N`. | Corrected the section and restored the completion theorem's choice scope. Defect `frontier-23-S8-c-008`. |
| `lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets` | `1b5af6a9c496` | The Borel-plus-null decomposition was used without its choice hypothesis. | Added countable choice to the statement, facts, Given block, and dependencies. Defect `frontier-23-S8-c-009`. |
| `lem-finite-rectangle-unions-form-a-generating-algebra` | `32ae212e3f70` | The asserted complement atoms union to the whole product, not to the rectangle union. | Replaced the false disjointification with products of the coordinate Boolean atom partitions. Defect `frontier-23-S8-c-010`. |
| `rem-caratheodory-also-constructs-the-product-measure` | `a9814f717bad` | It omitted countable choice and attributed uniqueness to cited theorems that do not state it. | Restored choice scope, stated the premeasure step, and separated later product-measure uniqueness from the Caratheodory claims. Defect `frontier-23-S8-c-011`. |
| `rem-complex-infinite-product-dictionary` | `1c05a0c60d80` | It applied a published real-sequence product definition to complex factors. | Defined the complex tail-product convention explicitly while retaining the published real definition for absolute convergence. Defect `frontier-23-S8-c-012`. |
| `rem-polar-coordinates-recover-the-published-ball-volume-and-gaussian-formulas` | `44e947efe57b` | It described a cited polar Gaussian proof as an independent Gamma-route proof. | Identified the cited lemma as the earlier two-dimensional polar instance and restored choice scope. Defect `frontier-23-S8-c-013`. |
| `thm-branch-discrepancies-for-logarithm-and-complex-powers` | `9207ded34af9` | The title called `exp(2 pi i alpha k)` a root of unity for arbitrary complex `alpha`. | Replaced “roots of unity” by “exponential factors” in the title. Defect `frontier-23-S8-c-014`. |
| `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions` | `d20047e1befc` | The proof used the completion decomposition without countable choice. | Added the exact choice hypothesis throughout the contract and facts. Defect `frontier-23-S8-c-015`. |
| `thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures` | `2bb9570ffa5f` | Its completion identification omitted the cited completion theorem's choice hypothesis. | Added countable choice to the statement, Given block, facts, and dependencies. Defect `frontier-23-S8-c-016`. |
| `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces` | `51537a5dcf3d` | Section integrals can be undefined on exceptional parameters even for a product-L1 function. | Defined the section-integral functions to be zero on those exceptional null sets before asserting integrability and equality. Defect `frontier-23-S8-c-017`. |
| `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets` | `8f428e86a5f7` | Box measure and Lebesgue sigma-finiteness were cited without their choice hypothesis. | Restored countable-choice scope in the theorem contract and facts. Defect `frontier-23-S8-c-018`. |
| `thm-polar-coordinates-formula-for-lebesgue-measure` | `99c9cbe4e9dc` | The proof formed `r^(n-1)dr x sigma` while the cited definition had not proved `sigma` was a measure. | Proved Borel countable additivity and finiteness first, then formed the product measure and continued the uniqueness argument; restored choice scope. Defect `frontier-23-S8-c-019`. |
| `thm-tonelli-and-fubini-for-completed-product-measures` | `14489cc1eba2` | Its representative theorem requires countable choice. | Added that hypothesis to the statement, Given block, fact, and dependencies. Defect `frontier-23-S8-c-020`. |
| `thm-weierstrass-factorization-for-entire-functions` | `138f38dbcc5e` | The statement and proof covered only infinitely many nonzero zeros. | Added finite and empty zero cases using finite `E_0` products and the empty product `1`. Defect `frontier-23-S8-c-021`. |
| `thm-zero-exponent-is-bounded-by-entire-order` | `53f1318f3231` | The zero exponent was undefined for finitely many nonzero zeros. | Added the finite-multiset exponent-zero convention and split off the immediate finite reciprocal-sum case. Defect `frontier-23-S8-c-022`. |

## Confirmed nonfatal

Each row below is a real local citation, derivation, labelling, or boundary-case
gap that a competent reader can close immediately without changing the claim,
definition, witness, or content contract. Per the fatal-only protocol, every row
closed with no content, contract, impact, or verification change.

| item | context | rejection tested |
|---|---|---|
| `cex-completed-product-sections-need-not-be-pointwise-measurable` | `e85867d44da3` | The cited counterexample does not itself state completed-product membership. |
| `cex-complex-conjugation-preserves-unoriented-angles-but-is-not-conformal` | `e99736ee879f` | The proof checks only one pair of tangent directions rather than the general angle-magnitude calculation. |
| `cex-conditional-linear-sum-does-not-force-product-convergence` | `89524bbf3dc0` | The required p-series convergence and divergence facts are uncited. |
| `cex-fubini-fails-without-l-one-integrability` | `190faefdd4b0` | The evaluation `arctan(1)=pi/4` is not stated in the cited fact. |
| `cex-tonelli-fails-without-sigma-finiteness-on-the-diagonal` | `497791bf8669` | Diagonal measurability and nonsigma-finiteness of uncountable counting measure are omitted. |
| `cor-c-one-change-of-variables-for-l-one-functions` | `0c739620a6a5` | The real/imaginary positive-part decomposition and its integrability are not cited. |
| `cor-jensen-zero-counting-bound` | `f603c9203227` | The proof omits the radial-limit treatment when the boundary circle contains zeros. |
| `cor-logarithmic-derivative-of-a-normally-convergent-product` | `73f1b7b5748e` | Its fact drops the source theorem's no-identically-zero-factor hypothesis. |
| `cor-meromorphic-functions-on-the-plane-are-entire-quotients` | `cc629270ddae` | The proof does not split off finite and empty pole sets. |
| `def-complex-power-from-holomorphic-logarithm-branch` | `996ac6d113f2` | Agreement with the published pointwise principal power is not directly cited. |
| `def-conformal-equivalence-and-automorphism-group` | `accbed25b8ad` | Holomorphic closure under composition is used but not cited. |
| `def-unit-disc-upper-half-plane-and-blaschke-factor` | `414c2b089175` | Holomorphy of the quotient defining the Blaschke factor is asserted without the closure fact. |
| `ex-canonical-product-for-zeros-at-the-squares` | `d455d6eb3def` | Convergence of the reciprocal-square series is uncited. |
| `ex-cavalieri-computes-the-area-of-the-unit-disc` | `185760792813` | The proof switches from product measure to Euclidean planar measure without citing their Borel agreement. |
| `ex-disc-automorphism-swapping-two-points` | `f373bab27f26` | Closure of disc automorphisms under composition is not cited. |
| `ex-jensen-formula-for-a-polynomial` | `074d3cefd0f9` | The Jensen fact omits its zero-free boundary condition. |
| `ex-one-dimensional-gaussian-integral-from-tonelli-and-polar-coordinates` | `bac3a7dcc4ae` | The Tonelli fact is phrased without its measurability and sigma-finiteness hypotheses. |
| `ex-product-of-one-plus-z-over-two-to-n-is-entire-and-zero-free` | `1444e116c430` | Its normal-product fact drops a hypothesis that the displayed factors nevertheless satisfy. |
| `ex-region-under-x-squared-has-measure-one-third` | `ab0b1ae2b9c6` | The concrete measure space and measurability hypotheses are left implicit. |
| `ex-sine-product-recovers-the-basel-sum` | `ec99da50a997` | Reciprocal-square convergence is uncited in the uniform estimate. |
| `ex-sine-sends-a-half-strip-to-the-upper-half-plane` | `b5e737665ccb` | The boundary-surjectivity check omits the two corner values. |
| `ex-strip-to-disc-biholomorphism-by-exponential-and-cayley` | `1e62403a7910` | The Cayley map is mislabeled a half-plane automorphism after the item directly proves it is a half-plane-to-disc biholomorphism. |
| `ex-zeta-two-from-tonelli-and-the-geometric-series` | `d0e5abcada0d` | The exchange of the series with the double integral lacks Tonelli or monotone convergence. |
| `fs-entire-order-equals-canonical-genus` | `96ce7f1696d2` | The cited factorization had not supplied the empty-product case; that dependency is now a rejudge target. |
| `fs-every-zero-sequence-admits-a-genus-zero-canonical-product` | `38dd64fab567` | Identification of the displayed product as canonical genus zero is not directly cited. |
| `fs-weierstrass-factorization-is-unique` | `3450c4814b89` | The cited factorization had not supplied the trivial empty product; that dependency is now a rejudge target. |
| `lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands` | `a853f2ce6fc3` | The cited Jordan-measure result does not explicitly state equality of the Riemann and Lebesgue integrals. |
| `lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets` | `6a6f32d24f73` | Step 2.1 types `K_j` where the already-defined cubes are `Q_j`. |
| `lem-unit-disc-estimate-for-weierstrass-elementary-factors` | `ed33df8c289d` | The derivative display needs the `p=0` empty-sum case stated separately. |
| `prop-sigma-finite-section-measure-functions-are-measurable` | `a35889cd9090` | The monotone-class argument leaves finite disjoint unions implicit. |
| `rem-finite-product-measures-are-the-base-case-for-countable-product-constructions` | `335c7bf1a7ea` | Associativity of finite product measures is asserted without proof or citation. |
| `thm-absolute-convergence-criterion-for-complex-infinite-products` | `2e34bc64dd1d` | The positive lower-tail product used in step 3.1 is not stated by its cited fact. |
| `thm-branch-power-agrees-with-integer-powers` | `d6d2f9f4611a` | The induction conclusion is used for negative integers before being explicitly discharged. |
| `thm-canonical-product-convergence-from-exponent-sum` | `bac75d167d34` | The proof cites a bound with constant `1` although its stated fact carries constant `e`; either bound still gives convergence. |
| `thm-conformal-equivalence-is-an-equivalence-relation` | `7978ac37f025` | Cross-domain composition is not stated by the self-automorphism fact. |
| `thm-disc-automorphisms-are-rotated-blaschke-factors` | `3c6a0e141d79` | The converse leaves the elementary rotation-automorphism check implicit. |
| `thm-hadamard-factorization-for-finite-order-entire-functions` | `c9b8e75358e6` | The small-factor reciprocal estimate uses a false intermediate inequality in the `p=0` case; the standard bound follows with a sigma-dependent constant. |
| `thm-iterated-section-measures-agree-on-product-measurable-sets` | `6cfb888bfb90` | The monotone-class proof writes only increasing-limit closure, leaving decreasing closure implicit. |
| `thm-joukowski-biholomorphism-outside-unit-disc` | `b85f55c4edcc` | The inverse computation uses `H(J(z))` before explicitly showing `J(z)` lies in its domain. |
| `thm-layer-cake-formula-for-l-p-powers` | `9ace85873ef6` | For `0<p<1`, the endpoint must be handled as an improper integral rather than by the stated closed-interval FTC. |
| `thm-poincare-distance-formula-and-disc-automorphism-invariance` | `a2605f2ed6f2` | The lower-bound argument needs an almost-everywhere or total-variation treatment when the curve crosses zero. |
| `thm-principal-exponential-biholomorphism-from-principal-strip` | `b0cc57664258` | The cited theorem's fact omits the inverse identification proved in that cited item. |
| `thm-principal-logarithm-biholomorphism-to-the-principal-strip` | `25cf0cb1d715` | The range of the principal argument is attributed to the holomorphy corollary rather than the separately cited dictionary. |
| `thm-region-under-a-nonnegative-measurable-function-has-product-measure-equal-to-its-integral` | `73a25c7f4717` | Product measurability of the coordinate pullbacks is left implicit. |
| `thm-schwarz-pick-lemma-on-the-unit-disc` | `8c334e59d949` | Holomorphic closure under composition is not cited in step 1.1. |
| `thm-sector-power-map-is-biholomorphic-on-narrow-sectors` | `1a9cd1d6890f` | The ordinary nth-power computation needs the exponential addition law. |
| `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique` | `943d1345cc1a` | One countable-additivity paragraph mixes one-based and zero-based sequence indices. |
| `thm-sine-biholomorphism-from-upper-half-strip` | `2e0faf3fbdd9` | The modulus and real-part control of the exponential image are not cited. |
| `thm-sine-has-its-weierstrass-product` | `497507c728b0` | Simplicity of the sine zero at zero is not stated by the cited zero-set theorem. |
| `thm-slit-plane-root-branch-biholomorphism-to-a-sector` | `5bca1951890a` | Holomorphy of exponential composition is not cited. |
| `thm-the-sphere-the-plane-and-the-disc-are-pairwise-nonbiholomorphic` | `981c6407e58e` | Compactness and noncompactness of the three domains are used without cited facts. |
| `thm-tonelli-theorem-for-sigma-finite-product-spaces` | `ff0122ddc2c3` | Measurability of pointwise limits of the simple-section integrals is left implicit. |
| `thm-upper-half-plane-automorphisms-are-real-mobius-maps` | `3ef1df4206da` | The affine normalizing map's half-plane preservation and inverse are not written out. |
| `thm-weierstrass-product-theorem-on-the-complex-plane` | `5d73d7c6b491` | Its normal-product fact drops the no-identically-zero-factor hypothesis, although the constructed elementary factors satisfy it. |

## False positive

| item | context | rejection tested | disposition |
|---|---|---|---|
| `ex-principal-square-root-breaks-multiplicativity-at-minus-one` | `5dd5b46d4912` | The objection treated the value at `-1` as the holomorphic branch power, which is undefined on the cut. | `false_positive`: the item explicitly invokes the pointwise principal-logarithm convention from its dictionary dependency, where `Log(-1)=i pi` is defined and kept distinct from the holomorphic slit-plane branch. No edit. |

## Rejudge targets

The complete group-c rejudge target set is the 22 confirmed-fatal items in the
first table. No page, reading order, impact record, judge verdict, judge stamp,
published item, cross-group artifact, or nonfatal item was changed.

## Checks

- Exact evidence join: 77 group-c rejections, 77 unique exact adjudications,
  with 22 confirmed fatal, 54 confirmed nonfatal, and 1 false positive.
- Edit discipline: exactly the 22 confirmed-fatal group-c items differ from
  their pre-edit guard hashes; zero nonfatal or false-positive group-c items do.
- Focused precheck: 14 proof-bearing repaired items checked, 0 failing.
- Focused render check: all 22 repaired items pass frontmatter, math-delimiter,
  wikilink, multiline-display, and KaTeX validation.
- Dependency check: exited successfully with 238 standing corpus warnings and
  no errors.
- Defect-ledger validation: 330 frontier-23 rows checked, 0 errors.
- Step-8 guard: 9,274 baseline items; 75 whole-run changes, all 75 licensed by
  exact confirmed-fatal adjudications or terminal resolutions.
- Step-8 scope check: 4 groups, 504 items partitioned, 0 open rejections routed,
  and 0 cross-group alerts dispositioned.

## Blockers

None within group c.

## Preflight documentary synchronization — round 1

The authoritative repair envelope contained no `live_tuples`, so this pass made
no mathematical item edit and appended no adjudication, defect-ledger, alert, or
published-repair row. The documentary refresh is tied to the already licensed
group-c Step-8 repairs `frontier-23-S8-c-001` through
`frontier-23-S8-c-022`.

Regenerated citations and derivations from current item text for these 23
batch-owned entries:

- Batch 6: `lem-finite-rectangle-unions-form-a-generating-algebra`,
  `thm-sections-of-product-measurable-sets-are-measurable`,
  `thm-tonelli-and-fubini-for-completed-product-measures`,
  `fs-completed-product-sections-are-measurable-for-every-parameter`,
  `thm-polar-coordinates-formula-for-lebesgue-measure`,
  `cex-product-of-complete-measures-need-not-be-complete`,
  `cex-completed-product-sections-need-not-be-pointwise-measurable`,
  `cor-graph-of-a-measurable-function-is-lebesgue-null`,
  `fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra`,
  `lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets`,
  `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`,
  `thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures`,
  `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, and
  `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets`.
- Batch 7: `thm-poincare-distance-formula-and-disc-automorphism-invariance`,
  `thm-absolute-convergence-criterion-for-complex-infinite-products`,
  `thm-canonical-product-convergence-from-exponent-sum`,
  `thm-weierstrass-product-theorem-on-the-complex-plane`,
  `thm-weierstrass-factorization-for-entire-functions`,
  `thm-zero-exponent-is-bounded-by-entire-order`,
  `thm-hadamard-factorization-for-finite-order-entire-functions`,
  `fs-weierstrass-factorization-is-unique`, and
  `fs-entire-order-equals-canonical-genus`.

Added or refreshed complete Alpha `risk_review` records for 11 affected
high/critical items: `cex-product-of-complete-measures-need-not-be-complete`,
`cor-graph-of-a-measurable-function-is-lebesgue-null`,
`fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra`,
`lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets`,
`thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`,
`thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
`thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets`,
`thm-polar-coordinates-formula-for-lebesgue-measure`,
`thm-tonelli-and-fubini-for-completed-product-measures`,
`thm-weierstrass-factorization-for-entire-functions`, and
`thm-zero-exponent-is-bounded-by-entire-order`.

Changed files in this preflight pass:

- `research/frontier-23-batch-6.proof-contracts.json`
- `research/frontier-23-batch-7.proof-contracts.json`
- `research/frontier-23-alpha-step8-c.md`

Targeted checks:

- Strict proof contract: batch 6 passed 38/38 with zero errors and warnings;
  batch 7 passed 49/49 with zero errors and warnings.
- Citation fidelity: 236 citations over 87 authored items, with no missing
  quote and no widening candidate.
- Reviewed risk reports: batch 6 routed 38/38 and batch 7 routed 49/49, both
  with zero errors.
- Step-8 guard: 75/75 current whole-run item changes remain licensed by exact
  confirmed-fatal adjudications or terminal resolutions.
- Step-8 scope check: 504 items partitioned, zero open rejections routed, and
  zero cross-group alerts dispositioned.
- Both edited batch contract files parse as JSON.

No group-c blocker remains. This dispatch deliberately did not rewrite the
level-wide merged proof-contract artifact; the engine owns the mechanical merge
and full-battery rerun from all groups' batch sources.
