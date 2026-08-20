# Frontier 16, batch 1 — Beta-1 scaffold notes

## Continuity checkpoint

- Current substage: Step 2 proof-contract construction after source harvest, item decomposition, id reuse, and the first dependency pass.
- Owned artifact paths: `research/frontier-16-batch-1.pages.json`, `research/frontier-16-batch-1.notes.md`, `research/frontier-16-batch-1.proof-contracts.json`, and the separately required gated harvest `research/frontier-16-batch-1.coverage.json`.
- Completed checks: `CLAUDE.md`, `SCHEMA.md`, `README.md`, the house exemplar, the latest completed batch-1 artifacts, `QUALITY-CONTROLS.md`, both design sections, the plan-spec entries, all declared prerequisite page files, every candidate published dependency's actual Definition/Statement/Example and provenance, the id collision search, both richness passes, and web reading of the five coverage sources. The manifest parses as 16/10 items for the inverse-function pair and 29/13 for the convex/semicontinuity pair; `content-policy --manifest-only` reports 68 scoped ids with 0 errors and 0 warnings; `coverage-checklist --require-destination` reports 2 pages, 85 harvested headings, 0 errors and 1 low-yield advisory.
- Open mathematical constraints: encode exact same-batch clauses and published citation substrings in every proof-bearing contract; keep the proper-local-diffeomorphism result below the order-293 covering-space dependency boundary; verify every boundary worksheet and the semicontinuity epigraph reverse direction; finish the source/provenance and design-amendment ledgers.
- Mechanical blocker: `source-fetch-check --stamp` was run and every URL failed with sandbox DNS error `EAI_AGAIN`. The sources were opened through the web-research channel, but no `fetch_verified` field will be fabricated. Exact retry command: `node tools/source-fetch-check.mjs --coverage research/frontier-16-batch-1.coverage.json --stamp`.
- Exact next action: write the version-1 proof-contract file from the finalized manifest, then run its structural audit plus coverage, content-policy, prose, collision, and whitespace checks.

The action in that checkpoint is complete. The proof-contract artifact now has 59 scoped proof-bearing ids and 59 contracts, with an exact input map and all eight boundary dispositions for each.

## Scope, plan order, and artifact boundary

This batch owns `the-inverse-function-theorem-completed` at order 288.00001 with its companion at 288.00002, and `convex-and-semicontinuous-functions-on-rn` at order 288.00005 with its companion at 288.00006. The A pages have 16 and 29 items. Neither approaches the current 60-item split ceiling, so no split is proposed.

The four batch artifacts are `research/frontier-16-batch-1.pages.json`, `research/frontier-16-batch-1.coverage.json`, `research/frontier-16-batch-1.proof-contracts.json`, and this notes file. The coverage file is separately required by `QUALITY-CONTROLS.md` and the dispatch's canonical-harvest gate even though the dispatch's three-file write list accidentally omitted it. This is the same resolved prompt defect recorded by the most recently completed batch-1 run.

### Design/spec drift held for the engine

Target design: `research/plan-realanalysis-completion-track.md`, RC-1.

Exact design text:

```text
`requires`: `inverse-and-implicit-function-theorems`, `the-topology-of-euclidean-space`, `mixed-partials-taylor-and-extrema`.
```

Exact plan-spec and tracked batch-skeleton value:

```json
"requires": [
  "inverse-and-implicit-function-theorems",
  "the-topology-of-euclidean-space"
]
```

I did not choose between them. The spec is retained in the manifest exactly as dispatched. `mixed-partials-taylor-and-extrema` is already a prerequisite of `inverse-and-implicit-function-theorems`, so the mathematical closure remains earlier and available, but the direct-edge drift is left for the stage-1 `drift` unit. RC-3's design prerequisites agree exactly with the spec.

`SCHEMA.md` §6 still says a 100-item scaffold review ceiling, whereas current `CLAUDE.md`, the dispatch, and the design's own §8 say 60. This batch stays below both values and makes no normative-doc edit.

## Applyable amendments to `plan-realanalysis-completion-track.md`

### Amendment RC1-1 — make the $C^k$ machinery explicit

Recommendation: approve. The design requests higher regularity but names no vector-valued $C^k$ definition, closure theorem, or matrix-inversion regularity lemma. Without them the Step-5 proof would hide the entire bootstrap.

Target section: `#### RC-1 The Inverse Function Theorem Completed — level 20`.

Exact old text:

```text
**DEFS.** $C^k$ diffeomorphism; the regular locus $\{a : Df(a) \text{ invertible}\}$; proper map; the Jacobian sign and local orientation behaviour.
```

Exact new text:

```text
**DEFS.** Componentwise $C^k$ maps between Euclidean open sets and $C^k$ diffeomorphisms; the regular locus $\{a:Df(a)\text{ is invertible}\}$; proper maps between Euclidean open sets; and local orientation according to the sign of the Jacobian determinant. The higher-regularity proof is decomposed through closure of $C^k$ maps under algebra and composition and through $C^k$ regularity of matrix inversion on the nonzero-determinant locus.
```

If declined, `thm-higher-regularity-of-local-inverses` and the parametrized $C^k$ implicit theorem would rest on two unstated closure properties.

### Amendment RC1-2 — distinguish published $C^1$ results from the completion

Recommendation: approve. The published inverse theorem already contains the local-inverse derivative formula, and the published implicit theorem already treats an arbitrary first coordinate block as parameters and includes its derivative formula. Re-minting either would violate immutable-id reuse discipline.

Target section: the first four sentences of `**THMS.**` in RC-1.

Exact old text:

```text
**THMS.** The regular locus is open. The derivative of a local inverse is $(Df(a))^{-1}$ at $f(a)$, so a local inverse of a $C^k$ map is $C^k$ (bootstrapping $k$ from $1$). A $C^1$ map with everywhere-invertible derivative is an open map. An injective $C^1$ map with everywhere-invertible derivative on an open set is a $C^1$ diffeomorphism onto its image. The implicit function theorem with parameters, with its derivative formula.
```

Exact new text:

```text
**THMS.** The regular locus is open. The published inverse theorem already gives $D(f^{-1})(f(a))=Df(a)^{-1}$ and a $C^1$ local inverse; this pair proves that a local inverse of a $C^k$ map is $C^k$ by an explicit bootstrap. A $C^1$ map with everywhere-invertible derivative is open, an injective such map is a $C^1$ diffeomorphism onto its open image, and the $C^k$ form has a $C^k$ inverse. The published implicit theorem already permits a parameter block; this pair supplies the $C^k$ parametrized form and keeps its combined-block derivative formula.
```

If declined, the design would direct Step 5 to duplicate two published Statements rather than complete them.

### Amendment RC1-3 — narrow the proper-map result at the covering-space order boundary

Recommendation: approve. The general covering-space definition and the one-sheet theorem sit on `covering-spaces-and-lifting` at order 293, later than this page. They cannot be load-bearing at order 288.00001. Lee's proper-local-diffeomorphism proof can nevertheless be reproduced directly through its finite-sheet conclusion without citing that later definition.

Exact old text:

```text
A $C^1$ map that is proper and has everywhere-invertible derivative on a connected codomain is a covering, hence a diffeomorphism when the codomain is simply connected (stated with the topology this library has, or narrowed if the covering-space citation is judged too far).
```

Exact new text:

```text
A proper $C^1$ map between same-dimensional Euclidean open sets, with nonempty source, connected target, and everywhere-invertible derivative, is surjective and has finite diffeomorphic sheets over a neighbourhood of every target point; consequently all fibres have one constant finite cardinality. The proof states the sheet property directly. Identification with a covering map and the simply-connected one-sheet corollary are orientation-only material assigned to `covering-spaces-and-lifting`, not proof inputs here.
```

If declined, the page either makes a forbidden load-bearing forward citation or silently rebuilds path and homotopy lifting.

### Amendment RC1-4 — do not re-mint the Jacobian-conjecture remark

Recommendation: approve.

Exact old B-page tail:

```text
`rem-the-jacobian-conjecture` as a recorded open problem.
```

Exact new B-page tail:

```text
The immutable published `rem-jacobian-conjecture` is not re-minted or re-homed. A reader-facing mention, if wanted, is an ordinary link from a Remark of a new item and not a batch item.
```

The exact id and semantic searches found `items/rem-jacobian-conjecture.md`; declining this amendment creates an id collision.

### Amendment RC3-1 — extend semicontinuity to Euclidean subsets and record agreement

Recommendation: approve. `def-semicontinuity`, `thm-semicontinuity-level-set-characterisation`, and `thm-semicontinuous-evt` quantify only over subsets of $\mathbb R$. They cannot be cited as though their domain were $\mathbb R^n$.

Target section: RC-3 `**DEFS.**`.

Exact old text:

```text
**DEFS.** Convex function on a convex subset of $\mathbb{R}^n$; strictly convex; epigraph; lower and upper semicontinuity; the subdifferential $\partial f(a)$; supporting hyperplane.
```

Exact new text:

```text
**DEFS.** Convex and strictly convex real-valued functions on convex subsets of $\mathbb R^n$; epigraph and hypograph; supporting and separating hyperplanes; subgradients and the subdifferential $\partial f(a)$; and lower and upper semicontinuity on arbitrary Euclidean subsets. A dedicated proposition proves that the Euclidean semicontinuity definition agrees with `def-semicontinuity` when $n=1$.
```

If declined, the page ships the level-7 silent-special-case-redefinition defect.

### Amendment RC3-2 — expose the separation and local-Lipschitz proof backbones

Recommendation: approve. The source harvest carries the general separating and supporting hyperplane theorems, and subgradient existence cannot honestly cite either without building its finite-dimensional proof route.

Target section: RC-3 `**THMS.**`.

Exact old text:

```text
**THMS.** A convex function on an open convex set is continuous, and locally Lipschitz. Convexity is equivalent to convexity of the epigraph. A convex function has a supporting hyperplane at every interior point, so $\partial f(a)$ is nonempty there. For $C^1$ maps, convexity is equivalent to the gradient inequality; for $C^2$ maps, to positive semidefiniteness of the Hessian. Jensen's inequality in $\mathbb{R}^n$. A lower semicontinuous function on a compact set attains its infimum. Semicontinuity is equivalent to closedness of the epigraph / openness of strict sublevel sets.
```

Exact new text:

```text
**THMS.** Convexity is equivalent to convexity of the epigraph; finite Jensen, convexity of sublevels, and the basic algebra, affine-precomposition, and finite-maximum rules follow. A vertex bound on an interior cube yields local Lipschitz continuity and hence continuity on open convex domains. Metric projection onto a nonempty closed convex set is unique and satisfies its variational inequality; this gives strict point--set separation, supporting hyperplanes at boundary points, and the general separating-hyperplane theorem. Applying support to a local epigraph makes $\partial f(a)$ nonempty at every interior point. Differentiable convexity is equivalent to the gradient inequality, and the differentiable subdifferential is the gradient singleton; zero subgradient characterizes global minima. For $C^2$ functions, convexity is equivalent to a positive-semidefinite Hessian, while positive definiteness implies strict convexity. Euclidean semicontinuity is characterized by strict open and weak closed level sets and by closed epigraphs or hypographs, and the appropriate extremum is attained on every nonempty compact Euclidean set.
```

If declined, the scaffold would cite a separation theorem the library has not established and would compress two long proofs into opaque monoliths.

### Amendment RC3-3 — correct the Hessian implication ledger

Recommendation: approve. The proposed witness and proposed false claim point in opposite directions.

Exact old ledger row:

```text
- `fs-a-positive-semidefinite-hessian-gives-strict-convexity` — FALSE; $x^4$ has a vanishing second derivative at a strict minimum, and its several-variable analogue.
```

Exact new rows:

```text
- `fs-a-positive-semidefinite-hessian-gives-strict-convexity` — FALSE; $f(x,y)=x^2$ has Hessian $\operatorname{diag}(2,0)$ and is constant on every vertical line.
- `fs-strict-convexity-gives-a-positive-definite-hessian` — FALSE; $f(x)=\sum_{j<n}x_j^4$ is strictly convex for $n\ge1$ and has the zero Hessian at the origin.
```

If declined, the named false statement would be paired with a construction that does not refute it.

### Amendment RC3-4 — fix the two indicator conventions and the boundary-subgradient purpose

Recommendation: approve.

Exact old B-page excerpt:

```text
$x \mapsto -\sqrt{1-\lVert x\rVert^2}$; a lower semicontinuous function with no maximum; the indicator of an open set as lower semicontinuous and of a closed set as upper semicontinuous; a convex nondifferentiable function with a multi-point subdifferential.
```

Exact new text:

```text
$x\mapsto-\sqrt{1-\lVert x\rVert_2^2}$ on the closed unit ball, whose subdifferential is empty at every sphere point; a lower semicontinuous function on $[0,1]$ with no maximum; the characteristic function $1_E$, lower semicontinuous for open $E$ and upper semicontinuous for closed $E$; and the Euclidean norm, whose subdifferential at zero is the closed unit ball. Do not call $1_E$ the convex-analysis indicator, which usually means the extended-real function $0$ on $E$ and $+\infty$ off $E$ and has the opposite closed-set convention.
```

If declined, the B page leaves a real convention collision and does not say what the square-root example proves.

## Web research ledger and source conventions

### Inverse-function pair

1. Jiří Lebl, *Basic Analysis II*, §8.5: https://www.jirka.org/ra/realanal2.pdf
   - Read the full section, all named results, the two untagged observations, and Exercises 8.5.1–8.5.10.
   - Supports the published inverse/implicit theorem comparison, the open-map corollary, $(x,y)\mapsto(x,xy)$, polar coordinates, the cube-map and non-$C^1$ failures, the two-equation implicit system, and Remark 8.5.8 on higher regularity.
   - Convention: Lebl's $C^k$ definition in §8.6 is scalar-valued; this scaffold defines a Euclidean map componentwise before using it for diffeomorphisms.
2. University of Toronto MAT237, §3.3: https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter3/S3.3.html
   - Read from “Transformations” through “Implicit Function Theorem as a corollary,” excluding its problem set.
   - Independently supports the transformation/diffeomorphism convention, the inverse derivative, polar coordinates, and the block reduction from inverse to implicit functions.
3. John M. Lee, *Introduction to Smooth Manifolds*, Proposition 2.19: https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf
   - Read the proposition and proof on printed pp. 48–49.
   - Supports the proper-local-diffeomorphism finite-sheet construction. Lee names the conclusion a smooth covering; the scaffold states the finite-sheet property directly because the library's covering definition is not load-bearing at this order and works at $C^1$ Euclidean regularity rather than the smooth-manifold level.
4. Santiago Cañez, Northwestern Math 320-2 notes: https://sites.math.northwestern.edu/~scanez/courses/320/notes/lecture-notes-320-2.pdf
   - Supplemental exact source for the disconnected zero-derivative witness on two open intervals.

### Convex/semicontinuity pair

1. Stephen Boyd and Lieven Vandenberghe, *Convex Optimization*: https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf
   - Read §2.5; §§3.1.1–3.1.4 and 3.1.6–3.1.8; §§3.2.1–3.2.3.
   - Supports separation and support, the Euclidean convex-function definition, first- and second-order criteria, sublevels, epigraphs, Jensen, nonnegative sums, affine precomposition, and pointwise maxima.
   - Convention disagreement: the book normally extends a convex function by $+\infty$ outside its effective domain. This pair uses an explicit convex domain and finite real values only.
2. Dimitri P. Bertsekas, MIT 6.253 complete lecture notes: https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf
   - Read Lectures 2–7 and 12 by the source's own topic headings.
   - Independently supports epigraphs and closed convex functions, differentiable criteria, continuity on relative interiors, optimal-solution existence, hyperplane separation, nonvertical epigraph support, subgradients, and the zero-subgradient optimality condition.
   - Convention disagreement: the notes formulate several results for proper extended-real functions and relative interiors. The scaffold uses ordinary interiors of explicit finite-valued Euclidean domains and flags boundary failure separately.
3. CUHK ENGG 5501 convex-analysis notes: https://www.se.cuhk.edu.hk/~manchoso/2425/engg5501/2-cvxanal.pdf
   - Supplemental exact source for $-\sqrt{1-\|x\|_2^2}$ having empty subdifferential on the unit sphere and for the Euclidean-norm subdifferential.
4. Drusvyatskiy, *Convex Analysis and Nonsmooth Optimization*: https://sites.math.washington.edu/~ddrusv/crs/Math_516_2020/curr_notes.pdf
   - Supplemental check for existence of subgradients on the relative interior, the zero-subgradient minimum criterion, and failure at boundary points.

The characteristic-function convention is fixed explicitly: $1_E$ is lower semicontinuous for open $E$ and upper semicontinuous for closed $E$. This is not the extended-real convex indicator. Lower semicontinuity uses open strict superlevels, closed weak sublevels, and a closed epigraph; upper semicontinuity uses the dual sublevel, superlevel, and hypograph conditions. These conventions agree with the published real-line definition.

All five coverage URLs were opened through web research and their mathematical bodies were read. The mandatory local full-body stamp command was also run, but sandbox DNS returned `EAI_AGAIN` for every URL. No fetch stamp was invented; exact retry and blocker status are recorded in the checkpoint and final checks.

## Canonical coverage yield

The coverage artifact records 85 source or canonical headings. For `the-inverse-function-theorem-completed`, the dispositions are 14 included, 4 inline, 10 already-published, 3 deferred, and 5 out-of-scope. For `convex-and-semicontinuous-functions-on-rn`, they are 30 included, 7 inline, and 12 out-of-scope.

The IFT low-yield warning is caused by harvesting every exercise in Lebl §8.5 while correctly reusing ten immutable published results and sending two regular-level-set exercises to `constant-rank-submersions-and-regular-level-sets`. It is not a thin scaffold. No important result was declined merely for a missing definition or lemma. The broad convex-analysis declines are relative-interior algebra, recession theory, Fenchel conjugacy, sensitivity analysis, and full subdifferential calculus; each is a separate optimization or extended-real subject rather than missing machinery for this pair.

## Published dependencies opened and dependency closure

The final manifest has 86 distinct external dependency ids. Every actual file was opened from `items/`; every one has `status: published`; 24 have `provenance.statement: literature-derived` and 62 have `provenance.statement: ai-altered`. None is `ai-generated` and none is legacy-unclassified. Every external item is homed on an actual published page whose plan order is strictly below 288.00001; the few foundation ids absent from the plan's item arrays were verified against the real page files (`construction-of-the-natural-numbers`, `foundations-of-the-real-numbers`, and `sequences-and-limits`) rather than treated as homeless.

The exact on-disk Definition, Statement, or Example was read for every external target. The most load-bearing source-checked targets are:

- `thm-euclidean-inverse-function-theorem`, `thm-euclidean-implicit-function-theorem`, `lem-newton-contraction-near-an-invertible-derivative`, and `def-c-one-map-and-local-inverse`: exact dimensions, openness, derivative invertibility, inverse derivative, and block-variable clauses were checked against Lebl and the Toronto notes.
- `cor-inverse-matrix-by-adjugate`, `def-matrix-minors-cofactors-and-adjugate`, `cor-determinant-is-a-polynomial-in-the-matrix-entries`, `thm-invertible-matrices-correspond-to-linear-isomorphisms`, and `cor-invertible-matrix-has-unit-determinant`: exact nonzero/unit and size hypotheses were opened before using matrix inversion or Jacobian sign.
- `thm-compactness-under-continuous-maps` was deliberately replaced by the metric-native `thm-continuous-image-of-a-compact-space-is-compact`; `lem-closed-subset-of-a-compact-space-is-compact`, `lem-compactness-is-intrinsic`, `thm-compact-subset-is-closed-and-bounded`, and `cor-euclidean-closed-balls-and-spheres-are-compact` close the proper-map proof without equivocating between topological and metric compactness.
- `thm-open-connected-subsets-of-rn-are-polygonally-connected`, `def-polygonal-path-and-polygonal-connectedness`, `thm-chain-rule-for-total-derivatives`, and `cor-zero-derivative-implies-constant`: the open, connected, finite-segment, componentwise, and endpoint clauses were checked for the constancy theorem.
- `def-convex-subset-of-euclidean-space`, `thm-supporting-lines-for-convex-functions`, `cor-second-derivative-characterises-convexity`, `def-definite-and-indefinite-hessian-quadratic-forms`, and `cor-hessian-is-symmetric`: the domain, line-restriction, iff, and semidefinite conventions were checked against Boyd and MIT.
- `thm-heine-borel-rn`, `thm-extreme-value-metric`, `cor-bolzano-weierstrass-in-rn`, `thm-metric-sequential-closure`, and `thm-compact-iff-finite-intersection-property`: the nonempty, bounded, closure, sequence, and choice-cost clauses were opened for projection, support, and semicontinuous extrema.
- `def-semicontinuity`, `lem-real-and-metric-notions-agree`, and `cex-upper-semicontinuous-need-not-attain-its-infimum`: their domain is exactly a subset of the real line. They are used only for the one-dimensional agreement proposition and the explicitly negated companion construction, never as if they already covered $\mathbb R^n$.

Routine algebraic and topological targets were established-from-knowledge after exact on-disk inspection: finite sums and maxima; Euclidean norm/inner-product identities; the subspace and product topology dictionaries; induction and Archimedean forms; the definitions of compactness, connectedness, infimum, proper intervals, injections and equinumerosity; and the algebra and chain rules. Their exact claims are standard and no convention doubt remained.

The direct citation audit in the proof contracts records 40 quotes to published source items; all 40 are exact normalized substrings of the cited Definition, Statement, Example, or Counterexample. The remaining 58 citations target earlier same-batch items and are bound to the authoring clauses listed below. No published dependency was found to contain an unambiguous load-bearing falsehood, so no Step-5 published-dependency repair is proposed.

Every load-bearing dependency is earlier on the same page, on the earlier A page when used by its companion, or published on a strictly earlier actual page. There is no dependency on another frontier-16 batch, no `proved_here: false` item, and no external fallback. The only later item mentioned at all is the orientation-only covering-map definition described under forward references; it is not in `deps`, Facts, Statement, or Proof.

## Planned component provenance and Step-5 source rationale

No planned Statement or construction is `ai-generated`. Accordingly no `generation` block and no generated-Statement counterexample-search obligation applies. Several proofs are `ai-generated`; this does not alter the source-backed statement provenance. All source names below refer to the exact URLs in the web ledger above, and those are the URLs Step 5 must place in `sources.references`.

### Inverse-function A page

| Item | Statement | Proof | Source/edit rationale |
|---|---|---|---|
| `def-ck-euclidean-maps-and-diffeomorphisms` | ai-altered | not-applicable | Lebl §8.6 and the Toronto transformation convention, adapted componentwise and joined to the published local-diffeomorphism definition; cite Lebl and Toronto. |
| `thm-ck-euclidean-maps-closed-under-algebra-and-composition` | ai-altered | ai-generated | Standard $C^k$ closure used in the cited higher-regularity remark, reformulated for the library's word-derivative convention; cite Lebl. |
| `lem-matrix-inversion-preserves-ck-regularity` | ai-altered | ai-generated | Standard smoothness of inversion, specialized to fixed real matrix size and proved from the published adjugate formula; cite Lebl for the bootstrap context and Lee for smooth local inverses. |
| `thm-higher-regularity-of-local-inverses` | literature-derived | ai-altered | Lebl Remark 8.5.8 explicitly states the higher-derivative conclusion; the proof is the local componentwise bootstrap through the two preceding items; cite Lebl. |
| `def-regular-locus-of-a-c-one-map` | literature-derived | not-applicable | Standard inverse-function terminology attached to the exact published derivative/invertibility convention; cite Lebl and Toronto. |
| `thm-regular-locus-is-open` | literature-derived | ai-altered | Standard stability of invertibility, extracted from the local Newton estimate already used in Lebl's proof; cite Lebl. |
| `cor-c-one-local-diffeomorphisms-are-open-maps` | literature-derived | ai-altered | Lebl Corollary 8.5.2; the proof is recast pointwise in phase form; cite Lebl. |
| `thm-injective-regular-c-one-map-is-a-diffeomorphism-onto-its-image` | literature-derived | ai-altered | Standard global gluing of local inverses, present in the Toronto transformation discussion; cite Toronto and Lebl. |
| `cor-injective-regular-ck-map-is-a-ck-diffeomorphism-onto-its-image` | ai-altered | ai-generated | Source-backed $C^k$ local regularity combined with the preceding global $C^1$ result; cite Lebl and Toronto. |
| `thm-parametrized-implicit-function-theorem-with-higher-regularity` | literature-derived | ai-altered | Lebl Theorem 8.5.6 and Remark 8.5.8, with the ordinary variables and parameters combined into the first block; cite Lebl and Toronto. |
| `def-proper-map-between-euclidean-open-sets` | literature-derived | not-applicable | Lee's compact-preimage convention, narrowed to Euclidean open sets and metric compactness; cite Lee. |
| `thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets` | literature-derived | ai-altered | Lee Proposition 2.19, restated at $C^1$ Euclidean level without using the later covering-map name; cite Lee. |
| `cor-proper-local-diffeomorphisms-have-constant-finite-fibres` | literature-derived | ai-altered | Immediate finite-sheet consequence in Lee's proof; the connectedness globalization is supplied locally; cite Lee. |
| `def-local-orientation-of-a-regular-c-one-map` | literature-derived | not-applicable | Standard Jacobian-sign convention, consistent with Lebl's Jacobian notation and the published change-of-variables definition; cite Lebl. |
| `thm-jacobian-sign-is-constant-on-a-connected-regular-domain` | literature-derived | ai-altered | Standard connected-image consequence of a continuous nonzero determinant; cite Lebl for the determinant/regularity setting. |
| `thm-zero-derivative-on-connected-open-euclidean-set-iff-constant` | literature-derived | ai-altered | Toronto's zero-gradient result plus the published polygonal-connectivity theorem; Northwestern supplies the sharp disconnected failure; cite Toronto and Northwestern. |

### Inverse-function companion

| Item | Construction/statement | Verification/proof | Source/edit rationale |
|---|---|---|---|
| `ex-polar-coordinates-as-a-local-diffeomorphism` | literature-derived | ai-altered | Lebl Exercise 8.5.8 and the Toronto polar-coordinate section; local orientation and the principal-strip inverse are checked explicitly; cite both. |
| `ex-x-xy-is-a-diffeomorphism-off-the-axis` | literature-derived | ai-altered | Lebl Example 8.5.3 with the off-axis restriction and explicit inverse made precise; cite Lebl. |
| `ex-two-equation-implicit-system` | literature-derived | ai-altered | Exact system from Lebl Example 8.5.7; block matrix and solution derivative are recomputed; cite Lebl. |
| `cex-a-c-one-bijection-of-the-line-that-is-not-a-diffeomorphism` | literature-derived | ai-altered | Lebl Exercise 8.5.4; inverse failure at zero is proved by the chain rule and difference quotient; cite Lebl. |
| `cex-zero-derivative-on-a-disconnected-open-set-without-constancy` | literature-derived | ai-altered | Exact two-interval construction from Northwestern Math 320-2; cite Northwestern. |
| `fs-invertible-derivative-at-a-point-gives-a-local-inverse` | literature-derived | ai-altered | The exact false implication and source-backed published witness come from Lebl Exercise 8.5.7; cite Lebl. |
| `fs-invertible-derivative-everywhere-gives-a-global-inverse` | literature-derived | ai-altered | Lebl Example 8.5.4 and the immutable published complex-squaring witness; cite Lebl. |
| `fs-a-c-one-bijection-has-a-c-one-inverse` | literature-derived | ai-altered | Lebl's cube-map discussion and Exercise 8.5.4; cite Lebl. |
| `fs-zero-derivative-on-an-open-set-forces-constancy` | literature-derived | ai-altered | Northwestern states the disconnected counterexample and connected correction explicitly; cite Northwestern. |
| `fs-an-open-c-one-map-has-invertible-derivative` | literature-derived | ai-altered | Lebl notes that $x^3$ is open although its derivative vanishes at zero; cite Lebl. |

### Convex/semicontinuity A page

| Item | Statement | Proof | Source/edit rationale |
|---|---|---|---|
| `def-convex-and-strictly-convex-functions-on-euclidean-sets` | literature-derived | not-applicable | Boyd §3.1.1 and MIT Lecture 2, phrased on an explicit convex domain; cite Boyd and MIT. |
| `def-epigraph-and-hypograph` | literature-derived | not-applicable | Boyd §3.1.7 and MIT Lecture 2; cite both. |
| `thm-convex-function-iff-convex-epigraph` | literature-derived | ai-altered | Boyd §3.1.7; direct two-way proof adapted to empty domains; cite Boyd. |
| `thm-finite-jensen-inequality-in-euclidean-space` | literature-derived | ai-altered | Boyd §3.1.8; induction follows the published one-variable route but preserves vector combinations and zero weights; cite Boyd. |
| `prop-convex-functions-have-convex-sublevel-sets` | literature-derived | ai-altered | Boyd §3.1.6; cite Boyd. |
| `prop-basic-operations-preserving-convexity` | literature-derived | ai-altered | Boyd §§3.2.1–3.2.3; cite Boyd. |
| `lem-convex-function-bound-on-an-interior-cube` | ai-altered | ai-altered | Isolates the vertex-bound and reflection subclaims in MIT Lecture 4's continuity proof; cite MIT. |
| `thm-convex-functions-on-open-convex-sets-are-locally-lipschitz` | literature-derived | ai-altered | MIT Lecture 4 and Boyd §3.1; local ray/secant proof is fully supplied; cite both. |
| `cor-convex-functions-on-open-convex-sets-are-continuous` | literature-derived | ai-altered | Boyd §3.1 and MIT Lecture 4; cite both. |
| `def-supporting-hyperplane-to-a-convex-set` | literature-derived | not-applicable | Boyd §2.5 and MIT Lecture 6; includes strict point--set separation convention; cite both. |
| `thm-nearest-point-in-a-nonempty-closed-convex-set` | literature-derived | ai-altered | Standard finite-dimensional projection theorem underlying Boyd's separation proof; cite Boyd §2.5 and MIT Lecture 6. |
| `lem-projection-onto-a-closed-convex-set-has-the-variational-inequality` | literature-derived | ai-altered | Standard projection characterization used in both separation treatments; cite Boyd and MIT. |
| `thm-strict-separation-of-a-point-from-a-closed-convex-set` | literature-derived | ai-altered | Point--closed-set form of Boyd §2.5.1; cite Boyd. |
| `thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set` | literature-derived | ai-altered | Boyd §2.5.2 and MIT Lecture 7; the limit-normal proof includes empty-interior sets; cite both. |
| `thm-separating-hyperplane-theorem-for-disjoint-convex-sets` | literature-derived | ai-altered | Boyd §2.5.1 and MIT Lecture 7; proof uses the convex difference set and the two preceding separation forms; cite both. |
| `def-subgradient-and-subdifferential` | literature-derived | not-applicable | MIT Lecture 12, Boyd first-order condition, and Drusvyatskiy §3.5; cite MIT and Drusvyatskiy. |
| `thm-convex-functions-have-subgradients-at-interior-points` | literature-derived | ai-altered | MIT Lectures 7/12 and Drusvyatskiy Theorem 3.36; local epigraph proof supplies the finite-dimensional details; cite MIT and Drusvyatskiy. |
| `thm-differentiable-convex-functions-and-gradient-inequality` | literature-derived | ai-altered | Boyd §3.1.3 and MIT Lecture 3; cite both. |
| `cor-subdifferential-of-a-differentiable-convex-function-is-the-gradient` | literature-derived | ai-altered | MIT Lecture 12 and Drusvyatskiy; cite both. |
| `cor-subgradient-zero-characterises-global-minima` | literature-derived | ai-altered | MIT Lecture 12 and Drusvyatskiy Corollary 3.35; cite both. |
| `thm-hessian-characterises-convexity` | literature-derived | ai-altered | Boyd §3.1.4; line restrictions connect it to the published one-variable criterion; cite Boyd. |
| `cor-positive-definite-hessian-implies-strict-convexity` | literature-derived | ai-altered | Boyd §3.1.4; strict line-restriction proof supplied; cite Boyd. |
| `cor-local-minima-of-convex-functions-on-rn-are-global` | literature-derived | ai-altered | MIT Lecture 5 and Boyd §3.1; cite both. |
| `cor-strictly-convex-functions-on-rn-have-at-most-one-minimizer` | literature-derived | ai-altered | Boyd §3.1; cite Boyd. |
| `def-semicontinuity-on-euclidean-subsets` | ai-altered | not-applicable | Standard metric epsilon--delta definition, adapted from the published real-line definition and checked against MIT's closed-function convention; cite MIT and the same references as `def-semicontinuity`. |
| `prop-semicontinuity-agrees-on-the-real-line` | ai-altered | ai-generated | New dictionary statement forced by the two domain conventions; proof is the exact equality of one-dimensional balls and real neighbourhoods; cite the published definition and MIT. |
| `thm-euclidean-semicontinuity-level-set-characterisations` | literature-derived | ai-altered | MIT Lectures 2/4 and the real-line published theorem; cite MIT. |
| `thm-euclidean-semicontinuity-epigraph-characterisations` | literature-derived | ai-altered | MIT closed-function treatment and Boyd's epigraph convention; cite MIT and Boyd. |
| `thm-euclidean-semicontinuous-extreme-value-theorem` | literature-derived | ai-altered | MIT Lectures 5/6; choice-free finite-intersection proof supplied; cite MIT. |

### Convex/semicontinuity companion

| Item | Construction/statement | Verification/proof | Source/edit rationale |
|---|---|---|---|
| `ex-euclidean-norm-and-squared-norm-are-convex` | literature-derived | ai-altered | Boyd examples and MIT subgradient notes; cite Boyd and MIT. |
| `ex-finite-maximum-of-affine-functions-and-its-subdifferential` | literature-derived | ai-altered | Boyd §3.2.3 and MIT Lecture 12; active-slope exhaustion is proved via compactness and strict separation; cite both. |
| `cex-convex-function-on-closed-convex-set-discontinuous-at-the-boundary` | literature-derived | ai-altered | Classical boundary jump, supported by Boyd's relative-boundary warning and Fleming's printed example; cite Boyd. |
| `cex-convex-function-with-empty-subdifferential-at-a-boundary-point` | literature-derived | ai-altered | Exact CUHK example; cite CUHK. |
| `cex-lower-semicontinuous-compact-function-without-a-maximum` | ai-altered | ai-altered | Dual of the published source-backed upper-semicontinuous/no-minimum construction; cite MIT and the published source URL. |
| `ex-characteristic-functions-of-open-and-closed-sets-are-semicontinuous` | literature-derived | ai-altered | Standard level-set example already stated in the published real-line definition, extended to Euclidean subsets; cite MIT and the published definition's reference. |
| `cex-positive-semidefinite-hessian-without-strict-convexity` | literature-derived | ai-altered | Standard flat-direction quadratic from Boyd's Hessian criterion; cite Boyd. |
| `cex-strictly-convex-function-with-a-singular-hessian` | literature-derived | ai-altered | Standard fourth-power counterexample to the converse; cite Boyd. |
| `fs-a-convex-function-on-a-convex-set-is-continuous` | literature-derived | ai-altered | Boyd's boundary qualification plus the source-backed boundary jump; cite Boyd. |
| `fs-a-convex-function-is-differentiable` | literature-derived | ai-altered | Euclidean norm witness from Boyd/MIT; cite both. |
| `fs-semicontinuity-implies-continuity-on-a-compact-set` | literature-derived | ai-altered | Characteristic-function witness from the semicontinuity sources; cite MIT. |
| `fs-a-positive-semidefinite-hessian-gives-strict-convexity` | literature-derived | ai-altered | Flat-direction quadratic; cite Boyd. |
| `fs-strict-convexity-gives-a-positive-definite-hessian` | literature-derived | ai-altered | Sum-of-fourth-powers witness; cite Boyd. |

No AI-generated Statement or construction is a dependency target because none is planned at all. There is no external fallback, generated theorem, generated definition, generated false statement, or generated mathematical remark.

## Exact Step-5 clauses bound by same-batch citations

The following text must occur verbatim in the authored source section named by the proof contract. These are not suggested summaries: downstream contract quotes are hash-independent exact-substring obligations.

- `def-ck-euclidean-maps-and-diffeomorphisms`: `A map $f:U\to\mathbb R^q$ is of class $C^k$ when each component is of class $C^k$.`
- `thm-ck-euclidean-maps-closed-under-algebra-and-composition`: `Finite componentwise sums and products of $C^k$ Euclidean maps are $C^k$, and a composite of composable $C^k$ Euclidean maps is $C^k$.`
- `lem-matrix-inversion-preserves-ck-regularity`: `If the entries of $A:U\to M_n(\mathbb R)$ are $C^r$ and $\det A$ never vanishes, then the entries of $A^{-1}$ are $C^r$.`
- `thm-higher-regularity-of-local-inverses`: `If $f$ is $C^k$ for $k\ge1$, then every local inverse supplied by the inverse function theorem is $C^k$.`
- `cor-c-one-local-diffeomorphisms-are-open-maps`: `Let $f:U\to\mathbb R^n$ be $C^1$ and suppose $Df(x)$ is invertible for every $x\in U$. Then $f$ maps every open subset of $U$ to an open subset of $\mathbb R^n$.`
- `thm-injective-regular-c-one-map-is-a-diffeomorphism-onto-its-image`: `Then $f[U]$ is open and $f:U\to f[U]$ is a $C^1$ diffeomorphism.`
- `cor-injective-regular-ck-map-is-a-ck-diffeomorphism-onto-its-image`: `Then $f[U]$ is open and the corestriction $f:U\to f[U]$ is a $C^k$ diffeomorphism.`
- `thm-parametrized-implicit-function-theorem-with-higher-regularity`: `there are neighbourhoods and a unique $C^k$ map $\varphi$ solving $F(x,\varphi(x,\lambda),\lambda)=0$`
- `def-proper-map-between-euclidean-open-sets`: `A continuous map $f:U\to V$ is proper when $f^{-1}[K]$ is compact in $U$ for every compact subset $K$ of $V$.`
- `thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets`: `every $y\in V$ has an open neighbourhood whose preimage is a finite disjoint union of open sets, each carried $C^1$-diffeomorphically onto that neighbourhood by $f$.`
- `def-local-orientation-of-a-regular-c-one-map`: `A regular $C^1$ map is locally orientation-preserving where $\det Df>0$ and locally orientation-reversing where $\det Df<0$.`
- `thm-zero-derivative-on-connected-open-euclidean-set-iff-constant`: `If $U$ is nonempty, open, and connected, then $Df=0$ on $U$ if and only if $f$ is constant on $U$.`
- `cex-a-c-one-bijection-of-the-line-that-is-not-a-diffeomorphism`: `The map $x\mapsto x^3$ is a smooth bijection of $\mathbb R$, but its inverse is not differentiable at zero.`
- `cex-zero-derivative-on-a-disconnected-open-set-without-constancy`: `The total derivative of $f$ is zero at every point of $U$, but $f$ is not constant on $U$.`
- `def-convex-and-strictly-convex-functions-on-euclidean-sets`: `The function $f:C\to\mathbb R$ is convex when $f((1-t)x+ty)\le(1-t)f(x)+tf(y)$ for all $x,y\in C$ and $t\in[0,1]$.` and `It is strictly convex when the inequality is strict for distinct $x,y$ and $0<t<1$.`
- `def-epigraph-and-hypograph`: `The epigraph of $f:A\to\mathbb R$ is $\operatorname{epi}f=\{(x,s)\in A\times\mathbb R:f(x)\le s\}$.`
- `thm-convex-function-iff-convex-epigraph`: `The function $f:C\to\mathbb R$ is convex if and only if its epigraph is a convex subset of $\mathbb R^{n+1}$.`
- `thm-finite-jensen-inequality-in-euclidean-space`: `For a positive finite family of points in $C$ and nonnegative weights summing to one, $f$ of their weighted Euclidean sum is at most the weighted sum of their $f$-values.`
- `prop-basic-operations-preserving-convexity`: `The pointwise maximum of a nonempty finite family of convex functions on a common convex domain is convex.`
- `lem-convex-function-bound-on-an-interior-cube`: `Then $f$ is bounded above on the full cube and bounded above and below on the concentric half-sized cube.`
- `thm-convex-functions-on-open-convex-sets-are-locally-lipschitz`: `Then $f$ is locally Lipschitz on $U$`
- `cor-convex-functions-on-open-convex-sets-are-continuous`: `Every convex function $f:U\to\mathbb R$ on an open convex set is continuous on $U$.`
- `thm-nearest-point-in-a-nonempty-closed-convex-set`: `there is a unique $p\in C$ such that $\|x-p\|_2\le\|x-z\|_2$ for every $z\in C$.`
- `lem-projection-onto-a-closed-convex-set-has-the-variational-inequality`: `$$\langle x-p,z-p\rangle\le0\qquad(z\in C).$$`
- `thm-strict-separation-of-a-point-from-a-closed-convex-set`: `Then there are $a\ne0$ and $b\in\mathbb R$ such that $\langle a,z\rangle\le b<\langle a,x\rangle$ for every $z\in C$.`
- `thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set`: `Then there is a nonzero vector $u$ such that $\langle u,z-a\rangle\le0$ for every $z\in C$.`
- `def-subgradient-and-subdifferential`: `$v$ is a subgradient of $f$ at $a$ when $f(y)\ge f(a)+\langle v,y-a\rangle$ for every $y$ in the domain.`
- `thm-convex-functions-have-subgradients-at-interior-points`: `Then $\partial f(a)$ is nonempty for every $a\in\operatorname{int}C$.`
- `thm-differentiable-convex-functions-and-gradient-inequality`: `$$f(y)\ge f(x)+\langle\nabla f(x),y-x\rangle\qquad(x,y\in U).$$`
- `cor-subdifferential-of-a-differentiable-convex-function-is-the-gradient`: `Then $\partial f(a)=\{\nabla f(a)\}$.`
- `thm-hessian-characterises-convexity`: `A $C^2$ function on an open convex set is convex if and only if its Hessian is positive semidefinite at every point.`
- `def-semicontinuity-on-euclidean-subsets`: `$f$ is upper semicontinuous at $a$ when for every $\varepsilon>0$ there is $\delta>0$ such that $f(x)<f(a)+\varepsilon$ for every $x\in A\cap B_2(a,\delta)$`
- `thm-euclidean-semicontinuity-level-set-characterisations`: `Lower semicontinuity is equivalent to relative openness of every strict superlevel set and to relative closedness of every weak sublevel set.` and `Upper semicontinuity is equivalent to relative openness of every strict sublevel set`
- `thm-euclidean-semicontinuous-extreme-value-theorem`: `Every lower semicontinuous real-valued function on a nonempty compact Euclidean set is bounded below and attains a minimum`
- `ex-euclidean-norm-and-squared-norm-are-convex`: `The Euclidean norm is convex and its subdifferential at zero is the closed unit ball.`
- `cex-convex-function-on-closed-convex-set-discontinuous-at-the-boundary`: `The function is convex on $[0,1]$ but is not continuous at $0$.`
- `ex-characteristic-functions-of-open-and-closed-sets-are-semicontinuous`: `On $[0,1]$, the characteristic function of $\{0\}$ is upper semicontinuous but discontinuous at zero, and its negative is lower semicontinuous but discontinuous there.`
- `cex-positive-semidefinite-hessian-without-strict-convexity`: `The Hessian of $f(x,y)=x^2$ is positive semidefinite everywhere, but $f$ is not strictly convex.`
- `cex-strictly-convex-function-with-a-singular-hessian`: `The function $f(x)=\sum_{j<n}x_j^4$ is strictly convex, but its Hessian at the origin is the zero matrix.`

The fragment clauses for the parametrized implicit theorem, local Lipschitz theorem, nearest-point theorem, and semicontinuity theorem must be embedded in complete grammatical Statements; they are not licences to publish fragments.

## Exact A-page summaries for Step 5

### `the-inverse-function-theorem-completed`

Multivariable total differentiation and the Euclidean inverse and implicit function theorems supply local $C^1$ inverses, implicit solution maps, and their derivative formulas. The Newton-contraction estimate makes invertibility of the derivative stable near a regular point. Euclidean compactness controls proper maps, while polygonal connectedness of connected open sets lets one-variable constancy propagate along finitely many line segments. Higher mixed-partial notation supplies the $C^k$ language used for regularity.

Componentwise $C^k$ closure and smooth matrix inversion first upgrade local inverses and parametrized implicit solutions. The regular locus is then open; regular maps are open, and injectivity turns their local inverses into a diffeomorphism onto the image. Proper regular maps have finite diffeomorphic sheets with constant fibre cardinality over a connected target. The Jacobian sign gives local orientation and is constant on a connected regular domain, while vanishing total derivative is equivalent to constancy on a connected open domain.

### `convex-and-semicontinuous-functions-on-rn`

One-variable convexity supplies the chord inequality, supporting-line intuition, Jensen's inequality, and the derivative criteria that line restrictions carry into Euclidean space. The topology of $\mathbb R^n$ supplies compactness, boundaries, product topology, and convergent subsequences. Gradients and Hessians from multivariable differentiation encode first- and second-order information on open convex domains.

Convex functions are defined on Euclidean convex sets and related to their epigraphs, sublevels, algebraic constructions, local Lipschitz continuity, and supporting hyperplanes. Metric projection yields separation and then subgradients, whose gradient and minimizer criteria connect nonsmooth and differentiable convexity; Hessians characterize convexity and give a sufficient condition for strictness. Euclidean semicontinuity is reconciled with the real-line convention, characterized by level sets and epigraphs or hypographs, and used to obtain the appropriate extremum on a nonempty compact set.

Both B pages must have no authored summary body.

## Per-pair proof decomposition, corollary pass, and size review

Both required passes were performed separately for both A/B pairs.

### Inverse-function pair

Long-proof decomposition:

- Higher inverse regularity is decomposed into `thm-ck-euclidean-maps-closed-under-algebra-and-composition`, `lem-matrix-inversion-preserves-ck-regularity`, and `thm-higher-regularity-of-local-inverses`.
- The global injective result is decomposed into openness, the $C^1$ diffeomorphism criterion, and the $C^k$ corollary.
- The parametrized implicit theorem reuses the published $C^1$ block theorem and the higher-local-inverse bootstrap instead of re-proving either.
- Proper global structure is decomposed into the proper-map definition, one theorem proving closedness, surjectivity, finite fibres, and common diffeomorphic sheets, and a focused fibre-cardinality corollary. The one-sheet simply-connected consequence is not smuggled across the order boundary.
- Orientation is decomposed into the local sign definition and the connected-domain sign theorem.
- Constancy is one focused iff theorem whose proof explicitly consumes polygonal connectedness and scalar zero-derivative constancy.

Useful corollaries added by the corollary pass:

- `cor-c-one-local-diffeomorphisms-are-open-maps`;
- `cor-injective-regular-ck-map-is-a-ck-diffeomorphism-onto-its-image`;
- `cor-proper-local-diffeomorphisms-have-constant-finite-fibres`.

The implication-direction pass adds the open-map converse failure, alongside the four false statements required by the design. The A page has 16 items, well below the split ceiling. No pruning or split is proposed.

### Convex/semicontinuity pair

Long-proof decomposition:

- Interior continuity is decomposed into the finite-vertex cube bound, local Lipschitz theorem, and continuity corollary.
- Separation is decomposed into nearest-point existence/uniqueness, the projection variational inequality, strict point--closed-set separation, boundary support, and general two-set separation.
- Subgradient existence is built only after that separation backbone, then followed by the gradient inequality, differentiable singleton, and zero-subgradient minimizer criterion.
- The Hessian development separates the convexity iff theorem from the positive-definite sufficient condition for strict convexity and from the two distinct converse failures.
- Semicontinuity is decomposed into the Euclidean definition, real-line agreement, level-set equivalences, epigraph/hypograph equivalences, and compact extreme-value theorem.

Useful corollaries added by the corollary pass:

- continuity on open convex sets;
- the gradient-singleton subdifferential;
- zero subgradient iff global minimum;
- positive-definite Hessian implies strict convexity;
- local minima are global on open convex domains;
- strictly convex functions have at most one global minimizer.

The harvested general separating-hyperplane theorem is retained rather than silently replaced by the narrower point--set form. The A page has 29 items, well below the split ceiling. No pruning or split is proposed.

## Per-page item list

### `the-inverse-function-theorem-completed` — 16 items

1. `def-ck-euclidean-maps-and-diffeomorphisms` — definition — $C^k$ Euclidean maps and diffeomorphisms
2. `thm-ck-euclidean-maps-closed-under-algebra-and-composition` — theorem — $C^k$ Euclidean maps are closed under componentwise algebra and composition
3. `lem-matrix-inversion-preserves-ck-regularity` — lemma — Matrix inversion preserves $C^k$ regularity where the determinant is nonzero
4. `thm-higher-regularity-of-local-inverses` — theorem — A local inverse of a $C^k$ regular map is $C^k$
5. `def-regular-locus-of-a-c-one-map` — definition — The regular locus of a square-dimensional $C^1$ map
6. `thm-regular-locus-is-open` — theorem — The regular locus of a $C^1$ Euclidean map is open
7. `cor-c-one-local-diffeomorphisms-are-open-maps` — corollary — A $C^1$ map with everywhere-invertible derivative is open
8. `thm-injective-regular-c-one-map-is-a-diffeomorphism-onto-its-image` — theorem — An injective regular $C^1$ map is a diffeomorphism onto its image
9. `cor-injective-regular-ck-map-is-a-ck-diffeomorphism-onto-its-image` — corollary — An injective regular $C^k$ map is a $C^k$ diffeomorphism onto its image
10. `thm-parametrized-implicit-function-theorem-with-higher-regularity` — theorem — The parametrized implicit function theorem with $C^k$ regularity
11. `def-proper-map-between-euclidean-open-sets` — definition — Proper maps between Euclidean open sets
12. `thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets` — theorem — A proper Euclidean local diffeomorphism has finite diffeomorphic sheets over every target neighbourhood
13. `cor-proper-local-diffeomorphisms-have-constant-finite-fibres` — corollary — A proper Euclidean local diffeomorphism over a connected target has constant finite fibre cardinality
14. `def-local-orientation-of-a-regular-c-one-map` — definition — Local orientation of a regular $C^1$ Euclidean map
15. `thm-jacobian-sign-is-constant-on-a-connected-regular-domain` — theorem — The Jacobian sign of a regular $C^1$ map is constant on a connected domain
16. `thm-zero-derivative-on-connected-open-euclidean-set-iff-constant` — theorem — A differentiable map on a connected open Euclidean set has zero derivative exactly when it is constant

### `the-inverse-function-theorem-completed-examples` — 10 items

1. `ex-polar-coordinates-as-a-local-diffeomorphism` — example — Polar coordinates are a local diffeomorphism away from zero radius
2. `ex-x-xy-is-a-diffeomorphism-off-the-axis` — example — The map $(x,y)\mapsto(x,xy)$ is a diffeomorphism off the vertical axis
3. `ex-two-equation-implicit-system` — example — Two equations implicitly determine two variables near the origin
4. `cex-a-c-one-bijection-of-the-line-that-is-not-a-diffeomorphism` — counterexample — $x\mapsto x^3$ is a $C^1$ bijection whose inverse is not differentiable at zero
5. `cex-zero-derivative-on-a-disconnected-open-set-without-constancy` — counterexample — Zero derivative need not give constancy on a disconnected open set
6. `fs-invertible-derivative-at-a-point-gives-a-local-inverse` — false statement — FALSE: an invertible derivative at one point gives a local inverse
7. `fs-invertible-derivative-everywhere-gives-a-global-inverse` — false statement — FALSE: an everywhere-invertible derivative gives a global inverse
8. `fs-a-c-one-bijection-has-a-c-one-inverse` — false statement — FALSE: every $C^1$ bijection has a $C^1$ inverse
9. `fs-zero-derivative-on-an-open-set-forces-constancy` — false statement — FALSE: zero derivative on an open set forces constancy
10. `fs-an-open-c-one-map-has-invertible-derivative` — false statement — FALSE: every open $C^1$ map has invertible derivative

### `convex-and-semicontinuous-functions-on-rn` — 29 items

1. `def-convex-and-strictly-convex-functions-on-euclidean-sets` — definition — Convex and strictly convex functions on Euclidean convex sets
2. `def-epigraph-and-hypograph` — definition — The epigraph and hypograph of a real-valued function
3. `thm-convex-function-iff-convex-epigraph` — theorem — A function is convex exactly when its epigraph is convex
4. `thm-finite-jensen-inequality-in-euclidean-space` — theorem — Finite Jensen inequality for convex functions on $\mathbb R^n$
5. `prop-convex-functions-have-convex-sublevel-sets` — proposition — Every sublevel set of a convex function is convex
6. `prop-basic-operations-preserving-convexity` — proposition — Nonnegative combinations, affine precomposition, and finite pointwise maxima preserve convexity
7. `lem-convex-function-bound-on-an-interior-cube` — lemma — A convex function is bounded above and below on a smaller interior cube
8. `thm-convex-functions-on-open-convex-sets-are-locally-lipschitz` — theorem — A convex function on an open convex set is locally Lipschitz
9. `cor-convex-functions-on-open-convex-sets-are-continuous` — corollary — A convex function on an open convex set is continuous
10. `def-supporting-hyperplane-to-a-convex-set` — definition — Supporting and strictly separating hyperplanes in Euclidean space
11. `thm-nearest-point-in-a-nonempty-closed-convex-set` — theorem — Every point has a unique nearest point in a nonempty closed Euclidean convex set
12. `lem-projection-onto-a-closed-convex-set-has-the-variational-inequality` — lemma — Metric projection onto a closed convex set satisfies the variational inequality
13. `thm-strict-separation-of-a-point-from-a-closed-convex-set` — theorem — A point outside a nonempty closed convex set is strictly separated from it
14. `thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set` — theorem — Every boundary point of a nonempty Euclidean convex set has a supporting hyperplane
15. `thm-separating-hyperplane-theorem-for-disjoint-convex-sets` — theorem — Disjoint nonempty Euclidean convex sets have a separating hyperplane
16. `def-subgradient-and-subdifferential` — definition — Subgradients and the subdifferential of a convex function
17. `thm-convex-functions-have-subgradients-at-interior-points` — theorem — A convex function has a subgradient at every interior point of its domain
18. `thm-differentiable-convex-functions-and-gradient-inequality` — theorem — Differentiable convex functions are characterized by the gradient inequality
19. `cor-subdifferential-of-a-differentiable-convex-function-is-the-gradient` — corollary — The subdifferential of a differentiable convex function is its gradient singleton
20. `cor-subgradient-zero-characterises-global-minima` — corollary — Zero is a subgradient exactly at a global minimum
21. `thm-hessian-characterises-convexity` — theorem — A $C^2$ function is convex exactly when its Hessian is positive semidefinite
22. `cor-positive-definite-hessian-implies-strict-convexity` — corollary — An everywhere-positive-definite Hessian implies strict convexity
23. `cor-local-minima-of-convex-functions-on-rn-are-global` — corollary — Every local minimum of a convex function on an open Euclidean convex set is global
24. `cor-strictly-convex-functions-on-rn-have-at-most-one-minimizer` — corollary — A strictly convex function on a Euclidean convex set has at most one global minimizer
25. `def-semicontinuity-on-euclidean-subsets` — definition — Upper and lower semicontinuity on subsets of $\mathbb R^n$
26. `prop-semicontinuity-agrees-on-the-real-line` — proposition — Euclidean semicontinuity agrees with the published real-line definition
27. `thm-euclidean-semicontinuity-level-set-characterisations` — theorem — Semicontinuity on $\mathbb R^n$ is characterized by strict open level sets and weak closed level sets
28. `thm-euclidean-semicontinuity-epigraph-characterisations` — theorem — Lower semicontinuity is equivalent to a closed epigraph and upper semicontinuity to a closed hypograph
29. `thm-euclidean-semicontinuous-extreme-value-theorem` — theorem — Semicontinuous extreme value theorem on compact Euclidean sets

### `convex-and-semicontinuous-functions-on-rn-examples` — 13 items

1. `ex-euclidean-norm-and-squared-norm-are-convex` — example — The Euclidean norm and its square are convex, with a ball of subgradients at zero for the norm
2. `ex-finite-maximum-of-affine-functions-and-its-subdifferential` — example — A finite maximum of affine functions and its active subgradients
3. `cex-convex-function-on-closed-convex-set-discontinuous-at-the-boundary` — counterexample — A convex function on $[0,1]$ that is discontinuous at the boundary
4. `cex-convex-function-with-empty-subdifferential-at-a-boundary-point` — counterexample — $x\mapsto-\sqrt{1-\|x\|_2^2}$ has empty subdifferential on the unit-sphere boundary
5. `cex-lower-semicontinuous-compact-function-without-a-maximum` — counterexample — A lower semicontinuous function on $[0,1]$ with no maximum
6. `ex-characteristic-functions-of-open-and-closed-sets-are-semicontinuous` — example — Characteristic functions of open and closed sets are one-sided semicontinuous
7. `cex-positive-semidefinite-hessian-without-strict-convexity` — counterexample — A positive-semidefinite Hessian need not give strict convexity
8. `cex-strictly-convex-function-with-a-singular-hessian` — counterexample — A strictly convex function can have a singular Hessian
9. `fs-a-convex-function-on-a-convex-set-is-continuous` — false statement — FALSE: a convex function on a convex set is continuous
10. `fs-a-convex-function-is-differentiable` — false statement — FALSE: every convex function is differentiable
11. `fs-semicontinuity-implies-continuity-on-a-compact-set` — false statement — FALSE: semicontinuity implies continuity on a compact set
12. `fs-a-positive-semidefinite-hessian-gives-strict-convexity` — false statement — FALSE: a positive-semidefinite Hessian gives strict convexity
13. `fs-strict-convexity-gives-a-positive-definite-hessian` — false statement — FALSE: strict convexity gives a positive-definite Hessian

## New-id and reuse report

The exact collision command was a fixed-string `rg` over `items/` and `research/plan-spec.json` for every final manifest id, followed by semantic searches for $C^k$ inverse regularity, regular loci, proper local diffeomorphisms, Jacobian sign, zero-derivative constancy, Euclidean convexity, epigraphs, separation, metric projection, subgradients, Hessian criteria, and Euclidean semicontinuity. All 68 final ids report `NEW`.

The semantic pass found three important reusable facts rather than new ids:

- `rem-jacobian-conjecture` already exists and is not included in this batch;
- `ex-unit-circle-implicit-function-theorem` already supplies Lebl Exercise 8.5.1;
- `cex-complex-squaring-is-not-globally-invertible` and `cex-invertible-derivative-without-c-one-local-inverse` already supply the two designed inverse-theorem failures.

It also found the published one-variable semicontinuity definition/theorems. Their domain restriction caused the new Euclidean definition plus agreement proposition; it did not license duplicate ids for the real-line statements.

## Forward references and cross-batch dependencies

One orientation-only forward reference is retained. At Step 5, `thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets` should carry

```yaml
forward_refs: [def-covering-map-and-evenly-covered-neighbourhoods,
               cor-connected-cover-of-a-simply-connected-space-is-trivial]
```

and mention them only in a Remark: the finite-sheet property proved locally is the property later named a covering, and the later one-sheet theorem supplies the simply-connected consequence. Neither id may occur in the Statement, Facts, proof, or `deps`. The target page is `covering-spaces-and-lifting` at order 293. This forward reference is unavoidable only if the design's orientation toward the global theorem is retained; the mathematical theorem scaffolded here does not depend on it.

There are no other forward references. The convex/semicontinuity pair has none.

This batch needs no item from another frontier-16 batch. The batch owning `constant-rank-submersions-and-regular-level-sets` may need `def-ck-euclidean-maps-and-diffeomorphisms`, `thm-higher-regularity-of-local-inverses`, `thm-parametrized-implicit-function-theorem-with-higher-regularity`, and `def-regular-locus-of-a-c-one-map`; its page-level `requires` already points to this IFT page. That batch should not duplicate these ids. The convex separation and subgradient backbone may support later optimization or probability work, but no present cross-batch edge is assumed.

## Findings for Step-3 Alpha

1. Approve Amendment RC3-3, separating the two Hessian converse failures. The design's $x^4$ construction does not refute its named positive-semidefinite-to-strict implication; declining publishes a false refutation.
2. Approve Amendment RC3-1, adding Euclidean semicontinuity and the one-dimensional agreement theorem. The published semicontinuity items quantify only over $A\subseteq\mathbb R$; declining creates an inaccurate dependency citation or a silent second notion.
3. Approve Amendment RC1-3, narrowing the proper-map theorem to the directly proved finite-sheet property. The covering definition and simply-connected one-sheet theorem are later in plan order; declining forces a load-bearing forward reference or a hidden rebuild of covering theory.
4. Approve Amendment RC1-4, removing `rem-jacobian-conjecture` from the batch item list. The id is immutable and already published; declining creates a direct collision.
5. Approve Amendment RC1-2, treating the inverse derivative and $C^1$ parameter-block implicit theorem as already published and building only their $C^k$ completion. Declining duplicates existing Statements.
6. Approve Amendment RC1-1, retaining the $C^k$ closure and matrix-inversion decomposition. Declining leaves the higher-regularity proof dependent on two unstated background theorems.
7. Approve Amendment RC3-2, retaining the projection/separation/support and cube/Lipschitz decompositions. Declining makes subgradient existence and interior continuity monolithic and removes the harvested general separating-hyperplane theorem.
8. Approve Amendment RC3-4, naming characteristic functions and the purpose of the square-root boundary example. Declining preserves a convention collision with the extended-real convex indicator and an unexplained construction.
9. Let the stage-1 drift unit adjudicate the RC-1 direct `mixed-partials-taylor-and-extrema` `requires` edge. The Beta recommendation is to make no independent spec change; declining that non-action risks two concurrent batches using different prerequisite lists.
10. Treat the `source-fetch-check` DNS failure as a mechanical blocker requiring an escalation-free engine retry. All five URLs were read through web research, but the required bytes/hash stamps are absent; declining the retry leaves the step-2 liveness gate red.

These are independent recommendations ordered by mathematical correctness, dependency legality, id immutability, proof closure, and then source-gate mechanics. No finding proposes an external fallback, published-item repair, or page split.

## Dependency-closure and confidence statement

Mathematical confidence is high. I checked the $C^k$ bootstrap base and induction step, adjugate regularity, the global inverse gluing, proper-map closedness and finite-sheet construction, Jacobian-sign connectedness, polygonal constancy, the local Lipschitz ray geometry, projection uniqueness and variational inequality, both separation branches, nonvertical epigraph support, both directions of the gradient and Hessian criteria, both Hessian converse witnesses, all four semicontinuity level-set directions, both epigraph/hypograph directions, and the compact finite-intersection proof including lower bounds and the reciprocal-Archimedean endpoint.

Every published dependency was opened from disk and every direct published contract quote was checked as an exact source substring. Every load-bearing dependency is internal to the pair or available in published content on an actual earlier page. There is no exception, cross-batch input, external fallback, or AI-generated dependency target.

What was not verified: `validate-plan` and `depsource` cannot authoritatively classify these new edges until Step 4 splices the manifests into `research/plan-spec.json`; the proof-contract strict gate cannot read numbered steps or same-batch quote text until Step 5 creates the items. The source-fetch stamp remains blocked by local DNS. No Step-6 independent reader, Alpha audit, Step-7 judge, publication, or status change has occurred.

## Final Step-2 checks

At the close of this scaffold pass:

- `coverage-checklist --require-destination` reports 2 pages, 85 harvested headings, 0 errors, and 1 low-yield advisory. The advisory is explained under “Canonical coverage yield.”
- `content-policy --manifest-only` reports 68 scoped items, 0 errors, and 0 warnings.
- The manifest parses as 16/10 items for the inverse-function pair and 29/13 for the convex/semicontinuity pair. Every internal dependency is earlier on the same page or on a smaller-order page in this batch.
- The actual library-page home audit resolves all 86 external dependency ids to published pages of smaller order. No dependency id is missing.
- The proof-contract artifact parses as 59 scoped proof-bearing items and 59 contracts. Every contract has citations, an exact numbered-step input map, all eight boundary dispositions, and a `finite_smoke` array. No registered finite-smoke model applies to these real-analysis claims.
- The citation overlay reports 50 exact quotes to published source sections and 58 same-batch quotes bound to Step-5 clauses, with 0 missing quotes and 0 undeclared citation sources.
- The exact fixed-string collision scan over `items/` and `research/plan-spec.json` reports all 68 final ids new. The semantic scan found and reused the published items recorded in the new-id report.
- `prosecheck --warnings` reports 0 errors and 13 count heuristics, all in this required audit report; it reports no positional contradiction. The A-page summary text itself contains no count, rank, survey, or reading-position claim.
- The notation scan finds no applied canonical embedding in any owned artifact.
- `git diff --check` reports no whitespace error.
- `source-fetch-check --stamp` was run twice. Both runs report 0/5 stamped and the same `EAI_AGAIN` DNS failure for every source. This gate did not pass, and the batch must not advance on a claim that it did.

No mathematical, dependency, id-collision, size, cross-batch, external-fallback, or published-falsehood blocker remains. The sole blocker is the source-fetch stamp, which requires the engine to retry the exact command in an environment with DNS access; no permission prompt or fabricated stamp is an acceptable substitute.
