# frontier-11 batch 4 — Beta scaffold notes

Beta: `Beta-frontier-11-4`  
Run: `frontier-11`  
Scope: orders 84/85 and 178.1/178.2 only

## Outcome and proposed summaries

### `the-determinant-of-a-linear-operator`

The determinant of an endomorphism is first defined from a representing matrix, then characterised without a basis: on a positive-dimensional space it is the unique scalar by which the operator scales every alternating top-degree form. Coordinate transport and the published rigidity of alternating multilinear matrix functions prove that characterisation without exterior algebra. Basis independence and multiplicativity follow from it, while the zero-dimensional convention is handled separately.

Returning to matrices over a commutative ring, the page develops minors, cofactors, Laplace expansion, the adjugate identity, the unit criterion for invertibility, and Cramer's rule without dividing by a non-unit. A rank-one update formula proves that the adjugate is equivariant under similarity, so the adjugate of an operator is well defined and satisfies its expected two-sided identity.

Planned size: 20 A items and 8 B items. No split is proposed: the A page remains well below the owner-directed 60-item hard threshold.

### `the-integral-logarithm-and-its-characterisations`

Beginning only with `L(x)=\int_1^x dt/t`, the first fundamental theorem gives `L'=1/x`. Monotonicity, the product law, reciprocal and power laws, two-sided unboundedness, and the intermediate value theorem then make `L` a bijection from the positive reals to the reals, without using the exponential function in any of these proofs.

Its inverse `E` satisfies the addition law, `E'=E`, and `E(0)=1`. One invocation of exponential IVP uniqueness identifies `E` with the published exponential and hence `L` with the published logarithm. Continuous and differentiable functional-equation characterisations, local Mercator continuation, the Landau limit, and inverse-exponential and integral definitions are then assembled into one non-circular equivalence theorem.

Planned size: 19 A items and 5 B items. No split is proposed for the same reason.

The summaries above are each exactly two paragraphs and under 150 words. B pages intentionally have no body summary.

## Canonical-coverage harvest

The machine-readable harvest is `research/frontier-11-batch-4.coverage.json`. Its gate result after the step-3 fixes is:

```text
coverage-checklist: 2 page(s), 75 harvested result(s), 0 error(s), 0 warning(s)
```

Disposition yield: 40 `included`, 18 `inline`, 7 `already-published`, 1 `deferred`, and 9 `out-of-scope`. The included/inline yield is source-anchored; it was not padded to a target count.

Disposition notes most likely to be checked:

- Alpha D-1 was accepted: Axler 9.40 is now `included` at `thm-operator-determinant-scales-every-alternating-top-form`, and 9.41 is corrected to that same characterisation rather than the matrix-based definition. Only top-degree alternating forms are transported through coordinates; no exterior-power object or lower-degree theory is introduced.
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

## Step-3 finding disposition

- **D-1 / dispatch D1–D2:** added `lem-alternating-top-forms-are-determined-by-one-ordered-basis` and `thm-operator-determinant-scales-every-alternating-top-form`. The first transports an alternating top form to a column-multilinear matrix function and invokes `lem-rigidity-of-alternating-multilinear-matrix-functions`; the second computes the pullback on a basis and uses the coordinate determinant form for uniqueness. The existing basis-independence and multiplicativity items now depend on this basis-free characterisation. Axler 9.40 and 9.41 were retagged accordingly.
- **D-2:** added the false nonzero-determinant invertibility criterion. It uses the preceding doubling-over-`Z` example and the A-page unit criterion, and also records the zero-ring failure of the opposite implication from the library's explicit ring convention. The specifically requested `cex-the-determinant-is-not-additive` would duplicate the already-published `items/fs-determinant-is-additive-on-matrices.md`, whose Statement is exactly `det(A+B)=det(A)+det(B)` is false and whose refutation already uses `A=B=I_2`. Because the base contract forbids minting a second id for an existing statement, the second new B item is instead `ex-columnwise-additivity-versus-whole-matrix-nonadditivity`: it checks valid selected-column additivity and contrasts it with that published whole-matrix counterexample.
- **R-D:** harvested Ambrus Pál, *Notes for Commutative Algebra M5P55*, §7 in full. Its own range runs from Lemma 7.1 through Theorem 7.7 and explicitly develops determinant, minors, both Laplace expansions, wrong-cofactor sums, and the adjoint identity over a commutative ring. Alpha's suggested Keith Conrad note was also opened: §5 proves `AC=CA=det(A)I` for the cofactor matrix `C` and the unit criterion, but it does not contain the claimed product-reversal identity `adj(AB)=adj(B)adj(A)`. That particular description of Conrad was mistaken; Pál supplies the exact ring-level Cramer range requested here.
- **D6 and D7:** retained exactly as approved. Cofactor/Laplace/adjugate/Cramer machinery remains local because order 82 lacks it, and similarity-equivariance still follows by the rank-one route. No field of fractions is proposed or cited.
- **§8 and D8:** no logarithm page item or dependency changed. The integral-first chain, the single citation of `thm-exponential-ivp-uniqueness`, the functional-equation characterisation, the equivalence theorem and roadmap remain intact. Coverage now explicitly accounts for the local Mercator continuation lemma and its global-domain counterexample. The A-page substitution `thm-log-one-plus-x-power-series` remains in place instead of a B-page dependency.

## Source ledger, ranges, conventions, and licensing

| tag | source and exact range read | supports | licence/access note |
|---|---|---|---|
| AXL | Sheldon Axler, *Linear Algebra Done Right*, 4e, [official PDF](https://linear.axler.net/LADR4e.pdf), §9C book pp. 354–359, results 9.40–9.53 | operator determinant, basis independence, multiplicativity, invertibility | Author-posted complete text; CC BY-NC 4.0 notice in the book. |
| ILA | Margalit–Rabinoff, *Interactive Linear Algebra*, [PDF](https://textbooks.math.gatech.edu/ila/ila.pdf), §4.2.1 pp. 207–212 and §4.2.2 pp. 218–222 | minors, cofactors, Laplace expansion, adjugate identity, inverse formula, field Cramer | Open textbook; GFDL notice in the text. |
| VRB | Robert Vrabel, [“Generalization of the Matrix Determinant Lemma and its application to the controllability of single input control systems”](https://arxiv.org/abs/1608.03207), §2 Lemma 1 and Proof Step 1 | rank-one determinant update, including singular matrices | Open author preprint; cite the formula and supply the independent commutative-ring multilinearity proof. |
| PAL | Ambrus Pál, [*Notes for Commutative Algebra M5P55*](https://www.ma.imperial.ac.uk/~apal4/commalgnotes.pdf), §7 “Cramer's rule for commutative rings”, PDF pp. 9–10, Lemma 7.1 through Theorem 7.7 inclusive | determinant and minors over a commutative ring, row and column Laplace expansion, wrong-cofactor sums, and the adjoint identity | Official Imperial College lecture notes; exact two-page section harvested in full. |
| OS | OpenStax, *Calculus Volume 1*, [§6.7](https://openstax.org/books/calculus-volume-1/pages/6-7-integrals-exponential-functions-and-logarithms), from the natural logarithm as an integral through Theorem 6.19 | integral definition, derivative, laws, inverse exponential, `e` | CC BY 4.0. |
| RIC | Henry Ricardo, [“The Equivalence of Definitions of the Natural Logarithm Function”](https://www.researchgate.net/publication/359264337_The_Equivalence_of_Definitions_of_the_Natural_Logarithm_Function), *College Mathematics Journal* 53(3), pp. 190–196, complete article | equivalence architecture and normalised continuous functional equation | Read-access copy; use as a reference, not as text to reproduce. |
| LEE | David Lee, [*Logarithms*](https://math.hawaii.edu/~lee/calculus/Logarithm.pdf), §4 pp. 6–7 | differentiable-at-one functional-equation characterisation | University lecture notes; use as a cited reference, not copied prose. |

Convention decisions:

- Axler defines the operator determinant through the induced action on alternating top forms. The revised scaffold imports the honest top-degree characterisation without exterior algebra: coordinate transport proves the one-basis rigidity lemma, then the matrix-defined determinant is shown to be the unique scaling scalar. The matrix definition remains first, and basis independence becomes a consequence rather than a conjugation computation.
- ILA works over fields and uses one-based indices. The scaffold states minors and cofactors for `n>=1` over a commutative ring and authors with the library's zero-based indices. A `1 x 1` cofactor uses the determinant `1` of the empty `0 x 0` minor; the published determinant definition itself begins at positive size, so this convention must be explicit locally.
- The operator determinant admits the zero-dimensional convention `det(T)=1`; the ring-level minor, cofactor, adjugate, and Cramer statements remain positive-sized.
- Over a commutative ring, “nonzero determinant” is not the invertibility hypothesis. The exact criterion is that the determinant is a unit. Cramer's unconditional conclusion is `det(A)x_j=det(A_j(b))`; division and uniqueness require a unit. Over a field, unit is equivalent to nonzero.
- The coordinate endomorphism `T_A:R^n->R^n` is intentionally narrower than a general free-module endomorphism. It is enough to state and test the requested integer example without forward-citing `free-modules-and-exact-sequences`.
- OpenStax proves the product law by substitution. The planned proof instead fixes `y` and differentiates `x |-> L(xy)-L(x)`, exactly as the owner requires. No proof before the single IVP bridge cites `exp` or `log`.
- Ricardo normalises the functional equation by `f(e)=1`. The scaffold also separates the unnormalised family `f=c log`, including `c=0`, and gives differentiability at `1` with `f'(1)=1` as an alternative sufficient regularity/normalisation package.
- The Mercator series is treated as local data on `|u|<1`, with the endpoint value at `u=1` supplied by the published theorem. Global continuation uses the product law; the bare series is not presented as a definition on all positive reals.
- No canonical embedding is written as applied to a natural number. Authoring must continue to write `n`, `0`, and similar scalars directly and must never apply that embedding to a numeral or natural-number expression.

## Proof decomposition and corollary passes

For the determinant pair, the operator side now begins with a coordinate-transport lemma for alternating top-degree forms and the basis-free scaling characterisation; basis independence and multiplicativity are separate consequences. The matrix-to-operator development is further decomposed into the minor/cofactor definition, Laplace expansion, adjugate identity, unit criterion, inverse formula, rank-one update lemma, similarity-equivariance theorem, operator-adjugate definition, and operator identity. Cramer's rule is separated into the exact ring theorem and its field corollary. The B page now tests both the unit-versus-nonzero boundary and the failure of whole-matrix additivity. Useful corollaries include operator computation by row reduction, the unit criterion, the inverse formula, field Cramer, the operator invertibility criterion, and the determinant homomorphism on `GL(V)`.

For the logarithm pair, the integral-first chain is decomposed at derivative/normalisation, strict increase, product law, powers, unboundedness, bijection, inverse definition, inverse addition law, inverse differentiation, the single IVP bridge, and inversion back to `log`. Functional-equation uniqueness is split into continuous and differentiable-at-one theorems; Mercator continuation is isolated before the final equivalence theorem. Useful corollaries added are reciprocal/integer-power laws, the inverse addition law, identification with published `log`, the unit-area characterisation of `e`, and the complete unnormalised family.

Both the decomposition pass and the corollary pass were performed for both pairs. No page exceeds either applicable review threshold, and no result was pruned to reduce size.

## Component-provenance plan and rationales

Values below are the Step-5 frontmatter obligations. `not-applicable` is used only for definitions and the roadmap remark. No A-page statement is `ai-generated`, so every load-bearing statement is literature-derived or a source-backed adaptation. Generated B constructions have no consumers.

### Determinant A page

| id | statement | proof | rationale |
|---|---|---|---|
| `lem-alternating-top-forms-are-determined-by-one-ordered-basis` | ai-altered | ai-altered | Coordinate-transport form of the published matrix rigidity theorem, supplying the top-degree bridge identified by AXL 9.40–9.41 without exterior powers. |
| `def-determinant-of-a-linear-operator` | literature-derived | not-applicable | AXL 9.41, recast through the published coordinate matrix; zero-dimensional convention added. |
| `thm-operator-determinant-scales-every-alternating-top-form` | ai-altered | ai-altered | AXL 9.40–9.41, reconciled with the page's prior matrix definition through the source-backed coordinate rigidity lemma. |
| `thm-operator-determinant-is-basis-independent` | literature-derived | ai-altered | AXL 9.52–9.53, now deduced from the basis-free uniqueness of the top-form scaling scalar. |
| `thm-operator-determinant-is-multiplicative` | literature-derived | ai-altered | AXL 9.49, deduced by composing the two top-form scaling identities and invoking uniqueness. |
| `cor-operator-determinant-by-row-reduction` | literature-derived | ai-altered | Standard determinant computation from ILA and the published row-operation laws. |
| `def-matrix-minors-cofactors-and-adjugate` | ai-altered | not-applicable | ILA §4.2.1–4.2.2 and PAL Definition 7.3, converted to zero-based indices. |
| `thm-laplace-cofactor-expansion` | ai-altered | ai-altered | ILA's field presentation and PAL Theorems 7.4–7.5, proved from the published Leibniz determinant over a commutative ring. |
| `thm-adjugate-identity-over-a-commutative-ring` | ai-altered | ai-altered | ILA §4.2.2 and PAL Theorems 7.6–7.7; both products and the singular case are proved without field division. |
| `cor-square-matrix-invertible-iff-determinant-is-a-unit` | ai-altered | ai-altered | The ILA field criterion is strengthened to the standard commutative-ring unit form, combining the published forward implication with the adjugate identity. |
| `cor-inverse-matrix-by-adjugate` | ai-altered | ai-altered | ILA inverse formula, materially restated with unit rather than nonzero determinant. |
| `lem-determinant-rank-one-update-over-a-commutative-ring` | ai-altered | ai-altered | VRB Lemma 1 at rank one gives the singular-matrix formula over real matrices; the statement and proof are widened to commutative rings using ILA cofactors and published column multilinearity. |
| `thm-adjugate-is-equivariant-under-similarity` | ai-altered | ai-altered | Standard covariance of the classical adjugate, derived from the source-backed rank-one identity and published similarity invariance so singular matrices and arbitrary commutative rings are covered. |
| `def-coordinate-endomorphism-over-a-commutative-ring` | ai-altered | not-applicable | Narrow coordinate-space definition assembled from published ring matrices; source-backed matrix notions, not a generated theorem. |
| `thm-cramers-rule-over-a-commutative-ring` | ai-altered | ai-altered | PAL §7 supplies the commutative-ring setting and adjoint identity; the scaffold states the exact division-free system identity before the unit case. |
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
| `ex-doubling-integers-has-nonunit-determinant` | ai-altered | ai-generated | Owner-specified integer example, phrased through the source-backed coordinate endomorphism and checked directly; it is a leaf with no consumer. |
| `fs-a-square-matrix-over-a-commutative-ring-is-invertible-iff-its-determinant-is-nonzero` | ai-altered | ai-altered | Standard ring-versus-field trap, refuted by an inline determinant computation for $[2]$ and corrected by the sourced unit criterion; the zero-ring convention checks the other implication without a B-page dependency. |
| `ex-four-by-four-determinant-by-cofactors-and-row-reduction` | ai-generated | ai-generated | Independently checkable sparse-matrix comparison; no consumer. |
| `ex-three-by-three-inverse-by-adjugate` | ai-generated | ai-generated | Independently checkable cofactor and inverse computation harvested from ILA's example heading; no consumer. |
| `ex-cramers-rule-two-by-two-system` | ai-generated | ai-generated | Independently checkable system; no consumer. |
| `ex-columnwise-additivity-versus-whole-matrix-nonadditivity` | ai-generated | ai-generated | Checkable pair-local comparison of valid selected-column additivity with a directly recomputed whole-matrix witness; no consumer and no B-page dependency. |

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

Generated-statement truth-risk obligations: for each generated B example, Step 5 must carry out the displayed arithmetic or inequality before prose is written. None may be cited by another item. The generated projection, basis-change, sparse determinant, three-by-three adjugate inverse, Cramer, columnwise-versus-whole-matrix comparison, logarithmic-family, Mercator-divergence, and integral-bound claims all have explicit checks in the proof-contract file. There is no generated Statement or Construction in the load-bearing A-page graph.

## Published dependency closure and confidence routes

Every id below was opened from `items/<id>.md`, confirmed `status: published`, and its actual Definition, Statement, or Example read. No listed dependency is `legacy-unclassified`, and none has `provenance.statement: ai-generated`.

Routes mean:

- `component-lit`: the exact disk clause has literature-derived statement provenance and was checked against its stated domain and conventions.
- `component-adapted/source`: the disk clause is AI-altered but was checked against its own cited source or one of AXL/ILA/VRB/OS/RIC/LEE.
- `component-adapted/knowledge`: the disk clause is AI-altered and its exact elementary content and conventions were independently confirmed from mathematical knowledge.

### Linear-algebra and algebra dependencies opened

| route | published ids |
|---|---|
| component-lit | `def-coordinate-column-and-matrix-of-a-linear-map`, `def-determinant-of-a-square-matrix`, `def-dimension`, `def-invertible-matrix-and-similarity-over-a-commutative-ring`, `def-linear-isomorphism-and-invertible-linear-map`, `def-matrices-over-a-commutative-ring`, `def-ring`, `def-ring-matrix-product-identity-and-transpose`, `lem-field-is-a-commutative-ring`, `lem-inverse-unique`, `lem-rigidity-of-alternating-multilinear-matrix-functions`, `lem-ring-units-form-a-group`, `thm-determinant-multiplicative`, `thm-determinant-of-a-triangular-matrix`, `thm-determinant-of-transpose`, `thm-determinant-under-elementary-row-operations`, `thm-gaussian-elimination-produces-row-echelon-form`, `thm-int-comm-ring`, `thm-invertible-matrices-correspond-to-linear-isomorphisms`, `thm-invertible-matrix-theorem`, `thm-leibniz-determinant-is-alternating-multilinear-and-normalized`, `thm-matrix-of-a-composite-is-the-product`, `thm-rat-field`, `thm-reals-field`, `thm-ring-matrix-arithmetic-laws`, `thm-similarity-is-an-equivalence-relation-and-models-basis-change`, `thm-two-sided-change-of-basis-formula` |
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
- Define an alternating top-degree form locally as an alternating `n`-linear map `V^n -> F`; do not introduce exterior powers. Prove the one-basis coordinate formula from `lem-rigidity-of-alternating-multilinear-matrix-functions`, then use the normalized coordinate determinant form for uniqueness rather than dividing by the value of an arbitrary form.
- In the rank-one lemma, expand over subsets of selected rank-one columns and explicitly kill every term with at least two selected columns. In similarity equivariance, choose standard coordinate columns after the scalar identity to justify equality entry by entry over an arbitrary commutative ring.
- In Cramer's rule, prove the unconditional cross-multiplied identity before the unit case and never cancel a merely nonzero determinant over a ring.
- In the continuous functional-equation theorem, use `g(t)=f(E(t))`, prove additivity, invoke continuity regularity, and use `E(1)=e` only after the bridge. In the differentiable-at-one theorem, derive `f(1)=0` and rescale the difference quotient in `f(x+h)-f(x)=f(1+h/x)-f(1)` to get `f'(x)=1/x`; do not assume differentiability at `x` in order to invoke the chain rule.
- For the Hamel counterexample, state the dependence on choice and explain why a non-scalar coefficient map exists; continuity would contradict the published Cauchy-regularity theorem.

No blocker remains. The fraction-field detour was removed rather than recorded as an authoring assumption. Nothing requested was omitted because of a missing local lemma.

## New-id collision and validation record

All proposed ids, including `lem-alternating-top-forms-are-determined-by-one-ordered-basis`, `thm-operator-determinant-scales-every-alternating-top-form`, `fs-a-square-matrix-over-a-commutative-ring-is-invertible-iff-its-determinant-is-nonzero`, and `ex-columnwise-additivity-versus-whole-matrix-nonadditivity`, were searched with `rg` against `items/`, `research/plan-spec.json`, and the other existing `research/*.pages.json` manifests before this note was finalised; no collision was found outside this batch. The exact nonadditivity fact already exists under the published id `fs-determinant-is-additive-on-matrices`; the new companion example adds a distinct side-by-side columnwise computation and directly recomputes the whole-matrix witness, avoiding both a duplicate statement and a forbidden B-page dependency. The final report must distinguish the gates actually rerun after all four artifacts are on disk from this interim record.

## Continuity checkpoint, Step 5 authoring

- Current substage: all governing instructions, the four batch artifacts, the prescribed planning sections, Alpha's review and recheck, the exemplar, and every intended published dependency have been read from disk. No assigned item or page file has yet been created.
- Writable batch record paths: `research/frontier-11-batch-4.pages.json`, `research/frontier-11-batch-4.notes.md`, `research/frontier-11-batch-4.proof-contracts.json`, and `research/frontier-11-batch-4.coverage.json`. Assigned output paths are the four page files and their item files named by the batch manifest.
- Gate state: Step 5 precheck and plan validation have not yet been run because authoring is not complete. The unrelated untracked dispatch prompt files are preserved.
- Open constraints: retain the settled scaffold; author 52 items as `draft`/`session`; keep B-page items as non-load-bearing leaves; state every cited fact faithfully; keep pre-bridge integral-logarithm proofs free of `exp` and `log`; use only the IVP uniqueness theorem for the bridge; include all zero-dimensional, zero-ring, endpoint, exponent, and iff directions; avoid applied canonical-embedding notation; use `justified_by` where the arbitrary-basis operator determinant definition needs later basis-independence.
- Exact next action: create the determinant A and B pages and their 28 item files, then create the logarithm A and B pages and their 24 item files; reconcile proof contracts to the final numbered steps; run precheck on every assigned item and `validate-plan.mjs` on `research/plan-spec.json`; update this note with every dependency change, departure, provenance result, gate result, and blocker.

## Step 5 authoring report

This section supersedes the preceding continuity checkpoint. The batch now has all four page files and all 52 item files: 20 determinant A items, 8 determinant B items, 19 integral-logarithm A items, and 5 integral-logarithm B items. Of these, 45 are proof-bearing and 7 are definitions or a remark. Every item is `status: draft` and `origin: session`; every proof-bearing item records `verification.precheck: pass`, while the seven non-proof items record `verification.precheck: n/a`. Neither audit nor judge stamps were added.

### Departures from the settled scaffold

No id, page order, page prerequisite, mathematical claim, or coverage obligation was dropped, narrowed, or renamed. The following local changes were needed to make the authored facts and proofs honest:

- The two B-page titles were synchronized to the exact titles in `research/plan-spec.json`: "The Determinant of an Operator: Examples and Counterexamples" and "The Integral Logarithm and the Equivalence of Its Characterisations: Examples and Counterexamples". The earlier batch-manifest titles were stale variants.
- `def-matrix-minors-cofactors-and-adjugate` adds `def-integer-power`, because its cofactor sign explicitly uses $(-1)^{i+j}$.
- `def-adjugate-of-a-linear-operator` adds `thm-matrix-representation-is-a-vector-space-isomorphism`, because transporting the matrix adjugate back to an operator uses the surjectivity and uniqueness of the matrix representation map.
- `thm-integral-logarithm-product-law` and `thm-integral-exponential-solves-the-normalised-ivp` add `cor-differentiable-implies-continuous`; each proof explicitly needs continuity supplied by differentiability.
- `cor-e-is-the-unique-unit-hyperbolic-area` adds `def-integral-exponential`, because the proof uses the defining inverse identity $L(E(y))=y$.
- `thm-logarithm-differentiable-functional-equation-characterisation` adds `thm-integral-logarithm-product-law`, which supplies the converse product law for the independently constructed $L$.
- `cor-continuous-logarithmic-functions-form-a-one-parameter-family` adds `thm-natural-logarithm-laws`, which supplies both continuity and the product law for the converse family $c\log x$.
- `lem-log-series-extends-by-the-product-law` adds `thm-induction-principle` for its explicit continuation induction.
- `cex-discontinuous-logarithmic-functional-equation` adds `def-natural-logarithm`, because its construction composes the additive Hamel-basis map with the published inverse of the exponential.
- `ex-unit-hyperbolic-area-brackets-e` adds `cor-integral-logarithm-is-strictly-increasing`, which converts the proved integral bounds into bounds on the unique point $e$.
- The false statement about nonzero determinant no longer depends on `ex-doubling-integers-has-nonunit-determinant`. It now adds `def-determinant-of-a-square-matrix` and computes $\det([2])=2$ inline. This is the one intentional strategy change: the dispatch's B-page leaf rule forbids any item from depending on an examples-page item.
- In `cor-operator-determinant-by-row-reduction`, recorded row scalings are stated to have nonzero factors, which is the exact hypothesis needed to reverse an elementary scaling step over a field. In `cor-integral-logarithm-reciprocals-and-integer-powers`, $L(1)=0$ is derived from the product law before it is used, rather than treated as implicit.

The arbitrary-basis operator determinant definition records `justified_by: [thm-operator-determinant-is-basis-independent]`, and the $0\times0$ determinant used for $1\times1$ cofactors is declared as a local convention. These implement the scaffold's promised well-definedness and boundary passes rather than changing its scope. No published dependency or published page was edited.

### Published dependency record

The two tables under "Published dependency closure and confidence routes" are the complete published dependency-reading record used before prose authoring. During the final direct-premise pass, `thm-matrix-representation-is-a-vector-space-isomorphism` was additionally opened, its `status: published` and literature-derived Statement were confirmed, and its exact matrix-representation isomorphism was used in the operator-adjugate definition. Every other added direct premise already appears in those tables. The related B-page items named there were read only for coverage comparison and are not dependencies.

### Provenance result

The item-by-item labels and rationales are recorded in the four provenance tables above. The final component totals are:

| statement / proof | items |
|---|---:|
| `literature-derived` / `ai-altered` | 19 |
| `literature-derived` / `not-applicable` | 3 |
| `ai-altered` / `ai-altered` | 16 |
| `ai-altered` / `ai-generated` | 2 |
| `ai-altered` / `not-applicable` | 4 |
| `ai-generated` / `ai-generated` | 8 |

All generated statements are checkable B-page examples and remain leaves. No generated Statement or Construction is load-bearing.

### Final verification

- `node tools/tsx-run.mjs tools/precheck.mts <all 52 assigned item files>`: pass; 45 checked, 0 failing. The remaining 7 are correctly `n/a`.
- `node tools/validate-plan.mjs research/plan-spec.json`: pass; declared order is acyclic and consistent, with no item-level cycles, forward references, B-page dependencies, or unresolved ids among pages with item lists.
- `node tools/proof-contract.mjs research/frontier-11-batch-4.proof-contracts.json --strict`: pass; 0 errors, 0 warnings, 45/45 items checked.
- `node tools/content-policy.mjs research/frontier-11-batch-4.pages.json`: pass; 52 scoped items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/frontier-11-batch-4.coverage.json`: pass; 2 pages, 75 harvested results, 0 errors, 0 warnings.
- `node tools/finite-smoke.mjs research/frontier-11-batch-4.proof-contracts.json`: pass; 0 errors. No finite-smoke checks were required.
- `node tools/risk-report.mjs research/frontier-11-batch-4.proof-contracts.json`: pass; 0 errors, all 45 proof-bearing items routed.
- Whole-repository `fwdcheck`, `extcheck`, `prosecheck`, `citecheck`, and `depsource` pass. Scoped inspection of `depcheck` and `rendercheck` reports no batch-4 error.
- A manifest-to-disk audit confirms 52/52 item files, 4/4 page files, exact page item ordering, exact authored dependency lists, two sub-150-word nonempty paragraphs on each A page, no body on either B page, no applied canonical-embedding notation, no audit/judge stamps, and no dependency on a B-page item.
- The proofs preceding `thm-integral-exponential-agrees-with-exponential` contain no use of `exp` or `log`. The bridge item cites `thm-exponential-ivp-uniqueness` exactly once.

There is no scoped blocker. I could not make the two whole-repository checks green without editing other batches: `depcheck` currently fails only on the four intentionally unaudited published complex rewrites owned by batch 1, and `rendercheck` currently finds five multiline displays in other batches. Those failures do not name a batch-4 item. I did not run `tools/gates.mjs`, as the dispatch explicitly forbids it.

## Step 6 artifact reconciliation after reader 3

Reader 3 repaired 15 assigned item files. The repaired item text was left
unchanged. I synchronized the proof contracts for the following entries:

- lem-alternating-top-forms-are-determined-by-one-ordered-basis,
  thm-integral-logarithm-derivative-and-normalisation,
  cor-integral-logarithm-is-strictly-increasing,
  thm-integral-logarithm-is-a-bijection,
  thm-logarithm-differentiable-functional-equation-characterisation, and
  cex-mercator-series-does-not-define-logarithm-globally: replaced the six
  irrelevant evidence excerpts identified by the reader with the exact
  load-bearing source clauses.
- thm-operator-determinant-is-basis-independent,
  thm-operator-determinant-is-multiplicative,
  cor-operator-determinant-by-row-reduction,
  thm-adjugate-identity-over-a-commutative-ring,
  lem-determinant-rank-one-update-over-a-commutative-ring,
  thm-adjugate-is-equivariant-under-similarity,
  thm-cramers-rule-over-a-commutative-ring,
  thm-operator-invertible-iff-determinant-nonzero,
  thm-operator-adjugate-identity,
  ex-determinant-in-two-ordered-bases, and
  ex-four-by-four-determinant-by-cofactors-and-row-reduction: synchronized
  new fact labels and sources, repaired step text, step numbering, uses, and
  input maps.
- thm-logarithm-continuous-functional-equation-characterisation,
  cor-continuous-logarithmic-functions-form-a-one-parameter-family, and
  ex-logarithmic-functions-without-normalisation: synchronized the repaired
  derivation of \(\log(e)=1\), the explicit \(b\ne1\) argument, and their new
  fact uses and sources.

The batch manifest now records all eight dependency-list additions named by
the reader and the repaired doubling-example title. No item was added,
removed, or retargeted, so no coverage row required retagging; the coverage
checker still passes with 75 harvested results and no diagnostics.

One reader-introduced artifact blocker remains under the no-item-edit boundary.
thm-operator-determinant-is-multiplicative declares [L2] (basis
independence), but no numbered proof step cites [L2]. The contract truthfully
records that source with an empty uses list; strict mode rejects empty uses.
Removing the unused fact from the item would resolve the sole diagnostic, but
this dispatch expressly forbids editing items/. No reader repair appears
mathematically wrong, and no reader repair was undone.

Verification after reconciliation:

- content-policy.mjs on the batch manifest: 52 items, 0 errors, 0 warnings.
- coverage-checklist.mjs: 2 pages, 75 harvested results, 0 errors, 0 warnings.
- proof-contract.mjs --strict: 45/45 items checked; the single error is the
  unused [L2] fact described above.

### Step 6 targeted strict follow-up

This follow-up supersedes the blocker paragraph immediately above. Disk showed
that `thm-operator-determinant-is-multiplicative` still declared `[L2]` but no
numbered step cited it. The targeted dispatch required retaining that fact, so
I attached `[L2]` to step 2.1 as the basis-independence licence for the
positive-dimensional operator determinants and recorded `2.1` in the
contract's `uses` and derivation inputs. No Statement or proof claim changed.
The source contract remains narrowed to positive dimension, and step 1.1 still
handles dimension zero solely through `[F1]` and the operator-determinant
definition.

No coverage row was retagged: no item was added, removed, or retargeted.
`proof-contract.mjs --strict` now passes with 0 errors and 0 warnings for all
45 proof-bearing items; `coverage-checklist.mjs` still passes for 2 pages and
75 harvested results; the scoped precheck passes for the citation-only item
edit. No reader repair appears wrong, and no blocker remains.

## Step 6 contract-fidelity reconciliation — artifact-only (2026-08-12)

Beta-frontier-11-4 re-read all 45 current item Statements, Facts blocks, and numbered proofs against their contract rows. Item text remained frozen. Only `research/frontier-11-batch-4.proof-contracts.json` was changed in the reconciliation; this section is the required append-only report.

The diff contains 63 citation-quote rows and 155 boundary rows. There are no derivation or input-map changes. Defect codes:

- **QF** — forward-truncated quote: the original stopped before the supporting clause.
- **QB** — backward-truncated quote: the original began after a needed definition or hypothesis.
- **QI** — internal-fragment quote: the original excerpt omitted surrounding text needed to support the fact.
- **QS** — semantically incomplete or misdirected quote: the old exact substring did not assert the recorded fact; it was replaced by exact source text that does.
- **BE** — generic, invented, or wrong-step boundary evidence replaced by retrospective evidence naming the step or steps that actually do the work.
- **BA** — an applicable boundary was incorrectly `not_applicable`; it is now `checked` with an actual step anchor.
- **BN** — an inapplicable boundary was incorrectly `checked`; it is now honestly `not_applicable`.
- **BR** — a `not_applicable` status was retained but its vague or false reason was replaced with the true one.
- **IF** — a genuine equivalence had `iff` rows incorrectly marked `not_applicable`; both directions are now tied to the step proving them.

### Changed-row ledger

- `lem-alternating-top-forms-are-determined-by-one-ordered-basis`
  - boundaries: `one`, `nonempty-choice` (BE)
- `thm-operator-determinant-scales-every-alternating-top-form`
  - citations: `L1 <- lem-alternating-top-forms-are-determined-by-one-ordered-basis` (QF), `F1 <- def-determinant-of-a-linear-operator` (QF)
  - boundaries: `one`, `nonempty-choice` (BE)
- `thm-operator-determinant-is-basis-independent`
  - boundaries: `empty` (BE)
  - boundaries: `zero`, `one` (BA)
  - boundaries: `nonempty-choice` (BN)
- `thm-operator-determinant-is-multiplicative`
  - citations: `L2 <- thm-operator-determinant-is-basis-independent` (QF)
  - boundaries: `empty`, `one`, `nonempty-choice` (BE)
  - boundaries: `zero` (BA)
- `cor-operator-determinant-by-row-reduction`
  - citations: `L1 <- thm-operator-determinant-is-basis-independent` (QF)
  - boundaries: `nonempty-choice` (BE)
  - boundaries: `zero`, `one`, `degenerate` (BA)
- `thm-laplace-cofactor-expansion`
  - boundaries: `zero`, `one`, `degenerate` (BE)
  - boundaries: `empty` (BA)
  - boundaries: `nonempty-choice` (BN)
- `thm-adjugate-identity-over-a-commutative-ring`
  - citations: `L1 <- thm-laplace-cofactor-expansion` (QF)
  - boundaries: `one` (BE)
  - boundaries: `zero`, `degenerate` (BA)
- `cor-square-matrix-invertible-iff-determinant-is-a-unit`
  - citations: `F1 <- def-invertible-matrix-and-similarity-over-a-commutative-ring` (QS)
  - boundaries: `one`, `iff-forward`, `iff-reverse` (BE)
  - boundaries: `zero`, `degenerate`, `nonempty-choice` (BA)
- `cor-inverse-matrix-by-adjugate`
  - boundaries: `one` (BE)
  - boundaries: `zero`, `nonempty-choice` (BA)
  - boundaries: `degenerate` (BR)
- `lem-determinant-rank-one-update-over-a-commutative-ring`
  - boundaries: `empty`, `one` (BE)
  - boundaries: `zero`, `degenerate` (BA)
- `thm-adjugate-is-equivariant-under-similarity`
  - citations: `F1 <- def-invertible-matrix-and-similarity-over-a-commutative-ring` (QS)
  - boundaries: `one`, `nonempty-choice` (BE)
  - boundaries: `zero`, `degenerate` (BA)
- `thm-cramers-rule-over-a-commutative-ring`
  - citations: `L2 <- thm-laplace-cofactor-expansion` (QF), `L3 <- cor-inverse-matrix-by-adjugate` (QF)
  - boundaries: `one`, `nonempty-choice` (BE)
  - boundaries: `zero`, `degenerate` (BA)
- `cor-cramers-rule-over-a-field`
  - citations: `L1 <- thm-cramers-rule-over-a-commutative-ring` (QF)
  - boundaries: `one`, `degenerate`, `nonempty-choice`, `iff-forward`, `iff-reverse` (BE)
  - boundaries: `zero` (BA)
- `thm-operator-invertible-iff-determinant-nonzero`
  - citations: `L1 <- thm-invertible-matrices-correspond-to-linear-isomorphisms` (QF), `L3 <- thm-operator-determinant-is-basis-independent` (QF)
  - boundaries: `empty`, `nonempty-choice`, `iff-forward`, `iff-reverse` (BE)
  - boundaries: `zero`, `one`, `degenerate` (BA)
- `cor-operator-determinant-on-the-general-linear-group`
  - citations: `F1 <- def-linear-isomorphism-and-invertible-linear-map` (QB), `L3 <- lem-ring-units-form-a-group` (QF)
  - boundaries: `nonempty-choice` (BE)
  - boundaries: `empty`, `zero`, `one` (BA)
- `thm-operator-adjugate-identity`
  - citations: `F1 <- def-adjugate-of-a-linear-operator` (QF), `L2 <- thm-matrix-of-a-composite-is-the-product` (QF), `L3 <- thm-operator-determinant-is-basis-independent` (QI)
  - boundaries: `zero`, `one`, `degenerate`, `nonempty-choice` (BA)
- `ex-singular-projection-has-zero-determinant`
  - citations: `F2 <- def-determinant-of-a-linear-operator` (QB)
  - boundaries: `zero`, `degenerate` (BE)
- `ex-determinant-in-two-ordered-bases`
  - citations: `L1 <- thm-two-sided-change-of-basis-formula` (QF)
- `ex-doubling-integers-has-nonunit-determinant`
  - citations: `F1 <- lem-units-of-z` (QF), `L3 <- cor-inverse-matrix-by-adjugate` (QF)
  - boundaries: `empty`, `one`, `degenerate` (BE)
  - boundaries: `nonempty-choice` (BN)
- `fs-a-square-matrix-over-a-commutative-ring-is-invertible-iff-its-determinant-is-nonzero`
  - citations: `F2 <- lem-units-of-z` (QF)
  - boundaries: `zero`, `one`, `degenerate`, `iff-forward`, `iff-reverse` (BE)
- `ex-four-by-four-determinant-by-cofactors-and-row-reduction`
  - citations: `L1 <- thm-laplace-cofactor-expansion` (QF)
  - boundaries: `zero` (BA)
  - boundaries: `nonempty-choice` (BN)
- `ex-three-by-three-inverse-by-adjugate`
  - citations: `F2 <- def-matrix-minors-cofactors-and-adjugate` (QF), `L2 <- cor-inverse-matrix-by-adjugate` (QF)
  - boundaries: `zero` (BA)
- `ex-cramers-rule-two-by-two-system`
  - citations: `L1 <- cor-cramers-rule-over-a-field` (QF)
  - boundaries: `zero`, `degenerate` (BA)
- `ex-columnwise-additivity-versus-whole-matrix-nonadditivity`
  - boundaries: `zero`, `degenerate` (BA)
- `thm-integral-logarithm-derivative-and-normalisation`
  - citations: `F1 <- def-integral-logarithm` (QF), `L1 <- thm-ftc-first-part` (QF)
  - boundaries: `zero`, `one`, `endpoints`, `nonempty-choice` (BE)
- `cor-integral-logarithm-is-strictly-increasing`
  - citations: `L1 <- thm-integral-logarithm-derivative-and-normalisation` (QF), `L3 <- cor-mean-value-theorem` (QF)
  - boundaries: `endpoints` (BE)
  - boundaries: `nonempty-choice` (BA)
- `thm-integral-logarithm-product-law`
  - citations: `L1 <- thm-integral-logarithm-derivative-and-normalisation` (QF), `L2 <- thm-chain-rule` (QF), `L3 <- cor-zero-derivative-implies-constant` (QF)
  - boundaries: `zero`, `one` (BE)
  - boundaries: `endpoints` (BN)
- `cor-integral-logarithm-reciprocals-and-integer-powers`
  - citations: `L1 <- thm-integral-logarithm-product-law` (QF), `F1 <- def-integer-power` (QS)
  - boundaries: `zero`, `one` (BE)
  - boundaries: `endpoints` (BN)
- `thm-integral-logarithm-is-unbounded`
  - citations: `L1 <- cor-integral-logarithm-reciprocals-and-integer-powers` (QF)
  - boundaries: `one`, `nonempty-choice` (BE)
  - boundaries: `zero` (BA)
- `thm-integral-logarithm-is-a-bijection`
  - citations: `L2 <- thm-integral-logarithm-is-unbounded` (QF)
  - boundaries: `endpoints`, `nonempty-choice` (BE)
  - boundaries: `zero` (BA)
- `cor-integral-exponential-addition-law`
  - citations: `F1 <- def-integral-exponential` (QI), `L1 <- thm-integral-logarithm-product-law` (QF)
  - boundaries: `zero` (BA)
- `thm-integral-exponential-solves-the-normalised-ivp`
  - citations: `F1 <- def-integral-exponential` (QI), `L1 <- thm-integral-logarithm-derivative-and-normalisation` (QF), `L2 <- thm-derivative-of-an-inverse` (QF)
  - boundaries: `zero`, `one`, `endpoints` (BE)
  - boundaries: `degenerate` (BA)
- `thm-integral-exponential-agrees-with-exponential`
  - citations: `L1 <- thm-integral-exponential-solves-the-normalised-ivp` (QF)
  - boundaries: `zero`, `nonempty-choice` (BE)
  - boundaries: `one` (BA)
- `cor-integral-logarithm-agrees-with-natural-logarithm`
  - citations: `F1 <- def-integral-exponential` (QS), `L1 <- thm-integral-exponential-agrees-with-exponential` (QF)
  - boundaries: `nonempty-choice` (BE)
  - boundaries: `endpoints` (BN)
- `cor-e-is-the-unique-unit-hyperbolic-area`
  - citations: `F2 <- def-integral-exponential` (QB)
  - boundaries: `one`, `endpoints`, `nonempty-choice` (BE)
- `thm-logarithm-continuous-functional-equation-characterisation`
  - citations: `L1 <- cor-integral-exponential-addition-law` (QF), `L2 <- thm-integral-exponential-solves-the-normalised-ivp` (QF), `L4 <- thm-cauchy-functional-equation-regularity` (QF)
  - boundaries: `one`, `nonempty-choice` (BE)
  - boundaries: `degenerate` (BA)
  - boundaries: `endpoints` (BN)
- `thm-logarithm-differentiable-functional-equation-characterisation`
  - citations: `F1 <- def-derivative` (QS), `L1 <- thm-integral-logarithm-derivative-and-normalisation` (QB), `L2 <- thm-integral-logarithm-product-law` (QF)
  - boundaries: `one`, `endpoints`, `nonempty-choice` (BE)
  - boundaries: `zero` (BA)
- `cor-continuous-logarithmic-functions-form-a-one-parameter-family`
  - citations: `F1 <- def-integral-exponential` (QI), `F1 <- cor-integral-exponential-addition-law` (QF), `L1 <- thm-integral-exponential-solves-the-normalised-ivp` (QF), `L3 <- thm-cauchy-functional-equation-regularity` (QI)
  - boundaries: `zero`, `one`, `degenerate`, `nonempty-choice` (BE)
  - boundaries: `endpoints` (BN)
- `lem-log-series-extends-by-the-product-law`
  - citations: `F1 <- def-integer-power` (QF)
  - boundaries: `zero`, `one`, `endpoints`, `nonempty-choice` (BE)
- `thm-logarithm-definition-equivalence`
  - citations: `L5 <- thm-logarithm-continuous-functional-equation-characterisation` (QF)
  - boundaries: `endpoints`, `nonempty-choice` (BE)
  - boundaries: `one` (BA)
  - boundaries: `iff-forward`, `iff-reverse` (IF)
- `ex-log-two-from-four-characterisations`
  - boundaries: `one`, `nonempty-choice` (BE)
  - boundaries: `endpoints` (BA)
- `ex-logarithmic-functions-without-normalisation`
  - citations: `L1 <- cor-continuous-logarithmic-functions-form-a-one-parameter-family` (QF)
  - boundaries: `zero`, `degenerate` (BE)
  - boundaries: `one` (BA)
- `cex-discontinuous-logarithmic-functional-equation`
  - citations: `L2 <- thm-cauchy-functional-equation-regularity` (QI)
  - boundaries: `zero`, `degenerate`, `nonempty-choice` (BE)
  - boundaries: `one` (BA)
  - boundaries: `endpoints` (BN)
- `cex-mercator-series-does-not-define-logarithm-globally`
  - citations: `L2 <- lem-nth-term-test` (QF)
  - boundaries: `one`, `endpoints`, `nonempty-choice` (BE)
  - boundaries: `degenerate` (BA)
- `ex-unit-hyperbolic-area-brackets-e`
  - citations: `L1 <- cor-e-is-the-unique-unit-hyperbolic-area` (QF), `L2 <- thm-integral-logarithm-product-law` (QF)
  - boundaries: `one`, `endpoints` (BA)

### Changed rows whose final status is `not_applicable`

- `thm-operator-determinant-is-basis-independent` / `nonempty-choice`: The positive-dimensional clause takes the two ordered bases as given; no witness or nonempty selection is made in the proof.
- `thm-laplace-cofactor-expansion` / `nonempty-choice`: The indices i and j are given, and step 1.2 groups each permutation by its uniquely determined column; no witness is selected.
- `cor-inverse-matrix-by-adjugate` / `degenerate`: The unit-determinant hypothesis excludes the noninvertible regime; the zero ring is still covered because 0 = 1 is a unit there.
- `ex-doubling-integers-has-nonunit-determinant` / `nonempty-choice`: All objects are explicitly given, and step 2.2 exhibits the rational inverse directly; no witness is chosen from a nonempty set.
- `ex-four-by-four-determinant-by-cofactors-and-row-reduction` / `nonempty-choice`: The matrix and both calculation routes are fixed explicitly; no existence or witness choice occurs.
- `thm-integral-logarithm-product-law` / `endpoints`: The proof works on the open interval (0,infinity); 0 is excluded by the positive-domain hypothesis and no closed or convergence endpoint is used.
- `cor-integral-logarithm-reciprocals-and-integer-powers` / `endpoints`: The domain is the open positive half-line and the integer exponent has no interval or convergence endpoint; negative exponents are treated in step 4.1.
- `cor-integral-logarithm-agrees-with-natural-logarithm` / `endpoints`: Both inverse functions have the open domain (0,infinity); 0 is excluded and the proof uses no closed interval or convergence endpoint.
- `thm-logarithm-continuous-functional-equation-characterisation` / `endpoints`: The functional equation is on the open positive half-line; 0 is excluded and no closed interval or convergence endpoint occurs.
- `cor-continuous-logarithmic-functions-form-a-one-parameter-family` / `endpoints`: The domain is the open positive half-line and the scalar parameter c ranges over all reals; no interval or convergence endpoint occurs.
- `cex-discontinuous-logarithmic-functional-equation` / `endpoints`: The construction transports along the bijection exp from R onto the open interval (0,infinity); 0 is excluded and no endpoint limit is used.

The `BN` rows above were changed from `checked`; the single `BR` row remained `not_applicable` but needed its true reason recorded. No other changed row finishes as `not_applicable`.

### Input map, findings, blockers, and verification

Every derivation step named by the 45 input maps exists in the current item text, every declared fact input is used, and every numbered proof step is covered once. The reconciliation required no derivation/input-map edit.

No contract row required an item edit. There is therefore no new mathematical finding for Alpha from this batch. There is no blocker. No file under `items/` was touched.

Final gate: `node tools/proof-contract.mjs research/frontier-11-batch-4.proof-contracts.json --strict` reports `proof-contract: 0 error(s), 0 warning(s), 45/45 item(s) checked`.
