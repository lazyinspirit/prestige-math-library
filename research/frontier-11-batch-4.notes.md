# frontier-11 batch 4 — Beta scaffold notes

Beta: `Beta-frontier-11-4`  
Run: `frontier-11`  
Scope: orders 84/85 and 178.1/178.2 only

## Outcome and proposed summaries

### `the-determinant-of-a-linear-operator`

The determinant of an endomorphism is the determinant of any representing matrix. A change-of-basis conjugation proves that this scalar is independent of the ordered basis, after which matrix multiplicativity and row-operation rules pass cleanly to operators. The zero-dimensional convention is stated separately rather than hidden in positive-size matrix notation.

Returning to matrices over a commutative ring, the page develops minors, cofactors, Laplace expansion, the adjugate identity, the unit criterion for invertibility, and Cramer's rule without dividing by a non-unit. A rank-one update formula proves that the adjugate is equivariant under similarity, so the adjugate of an operator is well defined and satisfies its expected two-sided identity.

Planned size: 18 A items and 6 B items. No split is proposed: the page is below both the owner-directed 60-item split threshold in the dispatch and the current 100-item review ceiling in `briefs/beta-scaffold.md`.

### `the-integral-logarithm-and-its-characterisations`

Beginning only with `L(x)=\int_1^x dt/t`, the first fundamental theorem gives `L'=1/x`. Monotonicity, the product law, reciprocal and power laws, two-sided unboundedness, and the intermediate value theorem then make `L` a bijection from the positive reals to the reals, without using the exponential function in any of these proofs.

Its inverse `E` satisfies the addition law, `E'=E`, and `E(0)=1`. One invocation of exponential IVP uniqueness identifies `E` with the published exponential and hence `L` with the published logarithm. Continuous and differentiable functional-equation characterisations, local Mercator continuation, the Landau limit, and inverse-exponential and integral definitions are then assembled into one non-circular equivalence theorem.

Planned size: 19 A items and 5 B items. No split is proposed for the same reason.

The summaries above are each exactly two paragraphs and under 150 words. B pages intentionally have no body summary.

## Canonical-coverage harvest

The machine-readable harvest is `research/frontier-11-batch-4.coverage.json`. Its gate result at scaffold time was:

```text
coverage-checklist: 2 page(s), 62 harvested result(s), 0 error(s), 0 warning(s)
```

Disposition yield: 30 `included`, 16 `inline`, 7 `already-published`, 1 `deferred`, and 8 `out-of-scope`. The included/inline yield is source-anchored; it was not padded to a target count.

Declines most likely to be challenged:

- Axler 9.40 is out of scope because it starts the general alternating-multilinear-form and exterior-power route. This page builds the requested basis-free operator determinant by conjugation and builds the operator adjugate via a rank-one determinant identity; a general exterior-algebra development is not among this pair's declared topics.
- Axler 9.51 is deferred specifically to `eigenvalues-eigenvectors-and-the-characteristic-polynomial`, whose characteristic-polynomial criterion this page unblocks. Pulling it backward would duplicate that page's defining theorem.
- OpenStax Examples/Checkpoints 6.35–6.37 are declined individually because they are routine chain-rule, substitution, and logarithm-law drills. They do not add a definition, characterisation, boundary case, or counterexample to this pair; the B page instead tests basis independence, ring-versus-field hypotheses, regularity, and the locality of the Mercator series.
- Ricardo's history section is out of scope because it contains historical context rather than a mathematical result. Its logical cycle of implications is fully harvested.

## Findings and applyable recommendations

### 1. Approve local cofactor and adjugate machinery at order 84

The dispatch says `determinants-of-matrices-over-a-commutative-ring` already owns “expansion and the adjugate”. The published disk page and every item on it were inspected. It owns the Leibniz determinant, alternation, multiplicativity, elementary-row effects, triangular determinants, and similarity invariance, but it contains no minor, cofactor, Laplace-expansion, adjugate, adjugate identity, or Cramer's-rule item.

Recommendation: approve the scaffold as written, which builds those missing results before using them. If declined, the requested operator adjugate and exact commutative-ring version of Cramer's rule would have nonexistent dependencies. No published file was edited.

### 2. Approve the rank-one route to operator-adjugate well-definedness

An initial proof plan tried to deduce similarity equivariance from `adj(AB)=adj(B)adj(A)` for singular factors through a rational-function field. There is no published fraction-field construction at this point in the reading order. The final scaffold instead proves the rank-one update identity from column multilinearity, compares `det(P^{-1}AP+uv^T)` in two ways, and identifies matrix entries using standard coordinate columns.

Recommendation: retain `lem-determinant-rank-one-update-over-a-commutative-ring` and `thm-adjugate-is-equivariant-under-similarity`. If declined, `def-adjugate-of-a-linear-operator` is not known to be independent of basis.

### 3. Keep the order-177 B example out of the dependency graph

RA-27b asks the new companion to relate `log 2` to `ex-alternating-harmonic-series-sums-to-log-two`, but that published id is itself on the B page `the-logarithm-and-general-powers-examples`. The B-page leaf rule forbids using it as a formal dependency. The planned example instead cites the A-page theorem `thm-log-one-plus-x-power-series` and proves the specialisation to `x=1` directly. The older example may be mentioned in reader-facing related prose without becoming a proof dependency.

Recommendation: approve this A-source substitution. If declined, the new B page would depend on another B page and violate the page contract.

No cross-batch dependency is proposed. In particular, nothing cites the in-flight order-239 FTC page; `thm-ftc-first-part` is the published dependency. No forward reference is retained.

## Source ledger, ranges, conventions, and licensing

| tag | source and exact range read | supports | licence/access note |
|---|---|---|---|
| AXL | Sheldon Axler, *Linear Algebra Done Right*, 4e, [official PDF](https://linear.axler.net/LADR4e.pdf), §9C book pp. 354–359, results 9.40–9.53 | operator determinant, basis independence, multiplicativity, invertibility | Author-posted complete text; CC BY-NC 4.0 notice in the book. |
| ILA | Margalit–Rabinoff, *Interactive Linear Algebra*, [PDF](https://textbooks.math.gatech.edu/ila/ila.pdf), §4.2.1 pp. 207–212 and §4.2.2 pp. 218–222 | minors, cofactors, Laplace expansion, adjugate identity, inverse formula, field Cramer | Open textbook; GFDL notice in the text. |
| VRB | Robert Vrabel, [“Generalization of the Matrix Determinant Lemma and its application to the controllability of single input control systems”](https://arxiv.org/abs/1608.03207), §2 Lemma 1 and Proof Step 1 | rank-one determinant update, including singular matrices | Open author preprint; cite the formula and supply the independent commutative-ring multilinearity proof. |
| OS | OpenStax, *Calculus Volume 1*, [§6.7](https://openstax.org/books/calculus-volume-1/pages/6-7-integrals-exponential-functions-and-logarithms), from the natural logarithm as an integral through Theorem 6.19 | integral definition, derivative, laws, inverse exponential, `e` | CC BY 4.0. |
| RIC | Henry Ricardo, [“The Equivalence of Definitions of the Natural Logarithm Function”](https://www.researchgate.net/publication/359264337_The_Equivalence_of_Definitions_of_the_Natural_Logarithm_Function), *College Mathematics Journal* 53(3), pp. 190–196, complete article | equivalence architecture and normalised continuous functional equation | Read-access copy; use as a reference, not as text to reproduce. |
| LEE | David Lee, [*Logarithms*](https://math.hawaii.edu/~lee/calculus/Logarithm.pdf), §4 pp. 6–7 | differentiable-at-one functional-equation characterisation | University lecture notes; use as a cited reference, not copied prose. |

Convention decisions:

- Axler defines the operator determinant through the induced action on alternating top forms. That route is deliberately not imported. This page uses a representing matrix and makes the conjugation proof a standalone theorem, as the dispatch requires.
- ILA works over fields and uses one-based indices. The scaffold states minors and cofactors for `n>=1` over a commutative ring and authors with the library's zero-based indices. A `1 x 1` cofactor uses the determinant `1` of the empty `0 x 0` minor; the published determinant definition itself begins at positive size, so this convention must be explicit locally.
- The operator determinant admits the zero-dimensional convention `det(T)=1`; the ring-level minor, cofactor, adjugate, and Cramer statements remain positive-sized.
- Over a commutative ring, “nonzero determinant” is not the invertibility hypothesis. The exact criterion is that the determinant is a unit. Cramer's unconditional conclusion is `det(A)x_j=det(A_j(b))`; division and uniqueness require a unit. Over a field, unit is equivalent to nonzero.
- The coordinate endomorphism `T_A:R^n->R^n` is intentionally narrower than a general free-module endomorphism. It is enough to state and test the requested integer example without forward-citing `free-modules-and-exact-sequences`.
- OpenStax proves the product law by substitution. The planned proof instead fixes `y` and differentiates `x |-> L(xy)-L(x)`, exactly as the owner requires. No proof before the single IVP bridge cites `exp` or `log`.
- Ricardo normalises the functional equation by `f(e)=1`. The scaffold also separates the unnormalised family `f=c log`, including `c=0`, and gives differentiability at `1` with `f'(1)=1` as an alternative sufficient regularity/normalisation package.
- The Mercator series is treated as local data on `|u|<1`, with the endpoint value at `u=1` supplied by the published theorem. Global continuation uses the product law; the bare series is not presented as a definition on all positive reals.
- No canonical embedding is written as applied to a natural number. Authoring must continue to write `n`, `0`, and similar scalars directly and must never apply that embedding to a numeral or natural-number expression.

## Proof decomposition and corollary passes

For the determinant pair, the long matrix-to-operator development is decomposed into the minor/cofactor definition, Laplace expansion, adjugate identity, unit criterion, inverse formula, rank-one update lemma, similarity-equivariance theorem, operator-adjugate definition, and operator identity. Cramer's rule is separated into the exact ring theorem and its field corollary. Basis independence is its own item rather than a sentence inside the definition. Useful corollaries added are operator computation by row reduction, the unit criterion, the inverse formula, field Cramer, the operator invertibility criterion, and the determinant homomorphism on `GL(V)`.

For the logarithm pair, the integral-first chain is decomposed at derivative/normalisation, strict increase, product law, powers, unboundedness, bijection, inverse definition, inverse addition law, inverse differentiation, the single IVP bridge, and inversion back to `log`. Functional-equation uniqueness is split into continuous and differentiable-at-one theorems; Mercator continuation is isolated before the final equivalence theorem. Useful corollaries added are reciprocal/integer-power laws, the inverse addition law, identification with published `log`, the unit-area characterisation of `e`, and the complete unnormalised family.

Both the decomposition pass and the corollary pass were performed for both pairs. No page exceeds either applicable review threshold, and no result was pruned to reduce size.

## Component-provenance plan and rationales

Values below are the Step-5 frontmatter obligations. `not-applicable` is used only for definitions and the roadmap remark. No A-page statement is `ai-generated`, so every load-bearing statement is literature-derived or a source-backed adaptation. Generated B constructions have no consumers.

### Determinant A page

| id | statement | proof | rationale |
|---|---|---|---|
| `def-determinant-of-a-linear-operator` | literature-derived | not-applicable | AXL 9.41, recast through the published coordinate matrix; zero-dimensional convention added. |
| `thm-operator-determinant-is-basis-independent` | literature-derived | ai-altered | AXL 9.52–9.53; required conjugation proof uses the exact published change-of-basis and similarity items. |
| `thm-operator-determinant-is-multiplicative` | literature-derived | ai-altered | AXL 9.49, transported through the published matrix-of-composite theorem. |
| `cor-operator-determinant-by-row-reduction` | literature-derived | ai-altered | Standard determinant computation from ILA and the published row-operation laws. |
| `def-matrix-minors-cofactors-and-adjugate` | ai-altered | not-applicable | ILA §4.2.1–4.2.2, materially widened from fields to commutative rings and converted to zero-based indices. |
| `thm-laplace-cofactor-expansion` | ai-altered | ai-altered | ILA cofactor-expansion theorem, materially widened to the published Leibniz determinant over a commutative ring. |
| `thm-adjugate-identity-over-a-commutative-ring` | ai-altered | ai-altered | ILA §4.2.2 remark, widened to arbitrary commutative rings; both products and the singular case are proved without field division. |
| `cor-square-matrix-invertible-iff-determinant-is-a-unit` | ai-altered | ai-altered | The ILA field criterion is strengthened to the standard commutative-ring unit form, combining the published forward implication with the adjugate identity. |
| `cor-inverse-matrix-by-adjugate` | ai-altered | ai-altered | ILA inverse formula, materially restated with unit rather than nonzero determinant. |
| `lem-determinant-rank-one-update-over-a-commutative-ring` | ai-altered | ai-altered | VRB Lemma 1 at rank one gives the singular-matrix formula over real matrices; the statement and proof are widened to commutative rings using ILA cofactors and published column multilinearity. |
| `thm-adjugate-is-equivariant-under-similarity` | ai-altered | ai-altered | Standard covariance of the classical adjugate, derived from the source-backed rank-one identity and published similarity invariance so singular matrices and arbitrary commutative rings are covered. |
| `def-coordinate-endomorphism-over-a-commutative-ring` | ai-altered | not-applicable | Narrow coordinate-space definition assembled from published ring matrices; source-backed matrix notions, not a generated theorem. |
| `thm-cramers-rule-over-a-commutative-ring` | ai-altered | ai-altered | ILA field theorem materially strengthened to its exact division-free ring statement; unit case follows from the sourced adjugate formula. |
| `cor-cramers-rule-over-a-field` | literature-derived | ai-altered | Direct specialisation of ILA Cramer using nonzero equals unit in a field. |
| `thm-operator-invertible-iff-determinant-nonzero` | literature-derived | ai-altered | AXL 9.50, reconciled with the published matrix/operator isomorphism theorem and the zero-dimensional case. |
| `cor-operator-determinant-on-the-general-linear-group` | literature-derived | ai-altered | Standard immediate consequence of AXL multiplicativity and invertibility. |
| `def-adjugate-of-a-linear-operator` | ai-altered | not-applicable | Source-backed classical adjugate transported only after the preceding similarity-equivariance theorem. |
| `thm-operator-adjugate-identity` | literature-derived | ai-altered | Matrix adjugate identity transported by the published matrix-of-composite theorem. |

### Determinant B page

| id | statement | proof | rationale |
|---|---|---|---|
| `ex-singular-projection-has-zero-determinant` | ai-generated | ai-generated | Checkable leaf example demanded by the dispatch; no item depends on it. |
| `ex-determinant-in-two-ordered-bases` | ai-generated | ai-generated | Checkable concrete basis-change witness demanded by the dispatch; no consumer. |
| `ex-doubling-integers-has-nonunit-determinant` | ai-altered | ai-generated | Owner-specified integer example, phrased through the source-backed coordinate endomorphism; no consumer. |
| `ex-four-by-four-determinant-by-cofactors-and-row-reduction` | ai-generated | ai-generated | Independently checkable sparse-matrix comparison; no consumer. |
| `ex-three-by-three-inverse-by-adjugate` | ai-generated | ai-generated | Independently checkable cofactor and inverse computation harvested from ILA's example heading; no consumer. |
| `ex-cramers-rule-two-by-two-system` | ai-generated | ai-generated | Independently checkable system; no consumer. |

### Integral logarithm A page

| id | statement | proof | rationale |
|---|---|---|---|
| `def-integral-logarithm` | literature-derived | not-applicable | OS Definition 6.24, renamed `L` to preserve the independent construction. |
| `thm-integral-logarithm-derivative-and-normalisation` | literature-derived | ai-altered | OS Theorem 6.15 plus oriented-integral endpoint; no exponential input. |
| `cor-integral-logarithm-is-strictly-increasing` | literature-derived | ai-altered | OS Theorem 6.16, proved with MVT in the published real-analysis conventions. |
| `thm-integral-logarithm-product-law` | literature-derived | ai-altered | OS Theorem 6.18 statement; owner-directed fixed-parameter derivative proof replaces substitution. |
| `cor-integral-logarithm-reciprocals-and-integer-powers` | literature-derived | ai-altered | Standard corollaries of OS 6.18, with zero and negative exponents made explicit. |
| `thm-integral-logarithm-is-unbounded` | ai-altered | ai-altered | Source-backed integral-logarithm construction with the two-sided power/Archimedean argument made into its own statement. |
| `thm-integral-logarithm-is-a-bijection` | literature-derived | ai-altered | OS inverse-function construction; surjectivity supplied explicitly by IVT and two-sided unboundedness. |
| `def-integral-exponential` | literature-derived | not-applicable | OS Definition 6.25 and RIC definition B-to-A architecture. |
| `cor-integral-exponential-addition-law` | literature-derived | ai-altered | OS Theorem 6.19, derived by injectivity of `L`. |
| `thm-integral-exponential-solves-the-normalised-ivp` | literature-derived | ai-altered | OS inverse derivative result, adapted to published inverse-function differentiation. |
| `thm-integral-exponential-agrees-with-exponential` | ai-altered | ai-altered | Owner-required single bridge using the exact published exponential IVP uniqueness theorem. |
| `cor-integral-logarithm-agrees-with-natural-logarithm` | ai-altered | ai-altered | Invert the preceding equality and the published definition of natural logarithm. |
| `cor-e-is-the-unique-unit-hyperbolic-area` | literature-derived | ai-altered | OS definition of `e`, reconciled with the already-published `e=exp(1)`. |
| `thm-logarithm-continuous-functional-equation-characterisation` | literature-derived | ai-altered | RIC definition D and implication cycle; regularity and normalisation stated explicitly. |
| `thm-logarithm-differentiable-functional-equation-characterisation` | ai-altered | ai-altered | LEE §4 assumes differentiability as a function; the scaffold strengthens this to differentiability only at `1` and supplies the rescaled difference-quotient proof. |
| `cor-continuous-logarithmic-functions-form-a-one-parameter-family` | literature-derived | ai-altered | RIC normalised theorem rescaled; the `c=0` case is separated to avoid division by zero. |
| `lem-log-series-extends-by-the-product-law` | ai-altered | ai-altered | RIC equivalence architecture and the published Mercator theorem are combined into a new explicit local-to-global continuation statement. |
| `thm-logarithm-definition-equivalence` | ai-altered | ai-altered | RIC's equivalence is materially expanded to include the already-published Mercator and Landau formulations. |
| `rem-logarithm-roadmap-and-circularity` | ai-altered | not-applicable | Logical dependency map based on RIC's implication cycle and the published exponential equivalence roadmap; no mathematical claim is left source-free. |

### Integral logarithm B page

| id | statement | proof | rationale |
|---|---|---|---|
| `ex-log-two-from-four-characterisations` | literature-derived | ai-altered | Each value is supplied by a published A-page theorem; the synthesis is adapted to the new equivalence theorem. |
| `ex-logarithmic-functions-without-normalisation` | ai-generated | ai-generated | Checkable leaf family illustrating necessity of normalisation; no consumer. |
| `cex-discontinuous-logarithmic-functional-equation` | literature-derived | ai-altered | Standard Hamel-basis counterexample using the published Hamel basis and Cauchy-regularity results; no consumer. |
| `cex-mercator-series-does-not-define-logarithm-globally` | ai-altered | ai-generated | Direct ratio/nth-term test applied to the sourced series; checkable leaf counterexample. |
| `ex-unit-hyperbolic-area-brackets-e` | ai-generated | ai-generated | Checkable integral-bound example with the sharper published bound cited, not reproved; no consumer. |

Generated-statement truth-risk obligations: for each generated B example, Step 5 must carry out the displayed arithmetic or inequality before prose is written. None may be cited by another item. The generated projection, basis-change, sparse determinant, three-by-three adjugate inverse, Cramer, logarithmic-family, Mercator-divergence, and integral-bound claims all have explicit checks in the proof-contract file. There is no generated Statement or Construction in the load-bearing A-page graph.

## Published dependency closure and confidence routes

Every id below was opened from `items/<id>.md`, confirmed `status: published`, and its actual Definition, Statement, or Example read. No listed dependency is `legacy-unclassified`, and none has `provenance.statement: ai-generated`.

Routes mean:

- `component-lit`: the exact disk clause has literature-derived statement provenance and was checked against its stated domain and conventions.
- `component-adapted/source`: the disk clause is AI-altered but was checked against its own cited source or one of AXL/ILA/VRB/OS/RIC/LEE.
- `component-adapted/knowledge`: the disk clause is AI-altered and its exact elementary content and conventions were independently confirmed from mathematical knowledge.

### Linear-algebra and algebra dependencies opened

| route | published ids |
|---|---|
| component-lit | `def-coordinate-column-and-matrix-of-a-linear-map`, `def-determinant-of-a-square-matrix`, `def-dimension`, `def-invertible-matrix-and-similarity-over-a-commutative-ring`, `def-linear-isomorphism-and-invertible-linear-map`, `def-matrices-over-a-commutative-ring`, `def-ring-matrix-product-identity-and-transpose`, `lem-field-is-a-commutative-ring`, `lem-inverse-unique`, `lem-ring-units-form-a-group`, `thm-determinant-multiplicative`, `thm-determinant-of-a-triangular-matrix`, `thm-determinant-of-transpose`, `thm-determinant-under-elementary-row-operations`, `thm-gaussian-elimination-produces-row-echelon-form`, `thm-int-comm-ring`, `thm-invertible-matrices-correspond-to-linear-isomorphisms`, `thm-invertible-matrix-theorem`, `thm-leibniz-determinant-is-alternating-multilinear-and-normalized`, `thm-matrix-of-a-composite-is-the-product`, `thm-rat-field`, `thm-reals-field`, `thm-ring-matrix-arithmetic-laws`, `thm-similarity-is-an-equivalence-relation-and-models-basis-change`, `thm-two-sided-change-of-basis-formula` |
| component-adapted/source | `cor-determinant-is-alternating-multilinear-in-the-rows`, `cor-determinant-is-invariant-under-similarity`, `cor-determinant-vanishes-with-a-zero-or-repeated-column`, `cor-invertible-matrix-has-unit-determinant` |
| component-adapted/knowledge | `lem-int-cancellation`, `lem-units-of-z` |

The required pages `determinants-of-matrices-over-a-commutative-ring` and `gaussian-elimination-and-row-reduction` were also opened as pages, and every published item on the determinant page was inventoried to resolve the dispatch/disk mismatch. The related B-page item `ex-two-by-two-determinant-formula` was opened for coverage classification but is not a dependency; the new examples expand the two-term Leibniz sum directly.

### Real-analysis and foundations dependencies opened

| route | published ids |
|---|---|
| component-lit | `def-axiom-of-choice`, `def-derivative`, `def-injection-surjection-bijection`, `def-integer-power`, `def-logarithm-to-a-base`, `def-natural-logarithm`, `def-oriented-integral`, `def-real-exponential-function-and-e`, `lem-hamel-basis-exists`, `lem-nth-term-test`, `thm-additivity-over-subintervals`, `thm-algebra-of-continuous-functions`, `thm-cauchy-functional-equation-regularity`, `thm-chain-rule`, `thm-composition-of-continuous-functions`, `thm-continuous-implies-integrable`, `thm-derivative-of-an-inverse`, `thm-exponential-addition-formula`, `thm-exponential-definition-equivalence`, `thm-exponential-is-strictly-increasing`, `thm-exponential-ivp-uniqueness`, `thm-ftc-first-part`, `thm-induction-principle`, `thm-intermediate-value`, `thm-landau-logarithm-limit`, `thm-log-one-plus-x-power-series`, `thm-logarithm-derivative-and-integral`, `thm-monotonicity-of-the-integral`, `thm-natural-logarithm-laws`, `thm-of-archimedean`, `thm-ratio-test` |
| component-adapted/source | `cor-exponential-is-a-bijection-onto-positive-reals`, `cor-mean-value-theorem`, `cor-two-less-than-e-less-than-three`, `cor-zero-derivative-implies-constant` |
| component-adapted/knowledge | `cor-differentiable-implies-continuous` |

The required page `the-logarithm-and-general-powers` was opened. The related B-page item `ex-alternating-harmonic-series-sums-to-log-two` was opened and its leaf status confirmed, but it is deliberately not a dependency. The similarly named topological-group theorem `thm-the-exponential-law` was opened during dependency archaeology, found to be the wrong result, and replaced everywhere by the actual published real-exponential law `thm-exponential-addition-formula`.

Every load-bearing dependency is internal to its pair or is published at a smaller order. The only IVP bridge is `thm-exponential-ivp-uniqueness`; there is no invented dependency on order 239 and no reliance on an AI-generated statement.

## Authoring obligations and blockers

- Before the IVP-identification theorem, proofs must use only `L`, its integral definition, real calculus, and order. No `exp`, `log`, or already-published logarithm law may enter those proofs.
- The identification item may cite `thm-exponential-ivp-uniqueness` once. Downstream items may then cite the proved identifications.
- In the rank-one lemma, expand over subsets of selected rank-one columns and explicitly kill every term with at least two selected columns. In similarity equivariance, choose standard coordinate columns after the scalar identity to justify equality entry by entry over an arbitrary commutative ring.
- In Cramer's rule, prove the unconditional cross-multiplied identity before the unit case and never cancel a merely nonzero determinant over a ring.
- In the continuous functional-equation theorem, use `g(t)=f(E(t))`, prove additivity, invoke continuity regularity, and use `E(1)=e` only after the bridge. In the differentiable-at-one theorem, derive `f(1)=0` and rescale the difference quotient in `f(x+h)-f(x)=f(1+h/x)-f(1)` to get `f'(x)=1/x`; do not assume differentiability at `x` in order to invoke the chain rule.
- For the Hamel counterexample, state the dependence on choice and explain why a non-scalar coefficient map exists; continuity would contradict the published Cauchy-regularity theorem.

No blocker remains. The fraction-field detour was removed rather than recorded as an authoring assumption. Nothing requested was omitted because of a missing local lemma.

## New-id collision and validation record

All proposed ids were searched with `rg` against `items/`, `research/plan-spec.json`, and the other existing `research/*.pages.json` manifests before this note was finalised; no collision was found outside this batch. The final report must distinguish the gates actually rerun after all four artifacts are on disk from this interim record.
