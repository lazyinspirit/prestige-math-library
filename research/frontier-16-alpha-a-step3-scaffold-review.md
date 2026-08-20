# Frontier 16 — Alpha-a Step-3 scaffold review

Group `a` covers batches 1 and 6. The assignment keeps the local-to-global map thread together: Euclidean local diffeomorphisms and convex separation in batch 1, and local homeomorphisms, lifting, and covering classification in batch 6. I read only these batches, their task files, design sections, manifests, notes, coverage ledgers, proof-contract worksheets, published dependencies, and stated source ranges.

## Verdicts

| A page | verdict | controlling findings |
|---|---|---|
| `the-inverse-function-theorem-completed` | sufficient | B1-3 through B1-6 repaired directly |
| `convex-and-semicontinuous-functions-on-rn` | **insufficient** | B1-1, B1-2 |
| `the-seifert-van-kampen-theorem` | sufficient | B6-2 through B6-4 repaired directly |
| `classification-of-covering-spaces` | sufficient | B6-1 through B6-4 repaired directly |

## Severity and disposition

| finding | pair | severity | disposition |
|---|---|---|---|
| B1-1 | convex and semicontinuous functions | blocking | open; add the named intermediate lemma |
| B1-2 | convex and semicontinuous functions | blocking | open; add the named source result and repair its harvest row |
| B1-3 | inverse function theorem | high | repaired in coverage ledger |
| B1-4 | convex and semicontinuous functions | high | repaired in strategy and already-correct contract route |
| B1-5 | convex and semicontinuous functions | high | repaired in manifest and contract |
| B1-6 | convex and semicontinuous functions | high | repaired in manifest and contract |
| B6-1 | covering classification | critical | repaired in manifest and contract |
| B6-2 | covering classification | high | repaired in batch manifest and `plan-spec.json` |
| B6-3 | Seifert–van Kampen | high | repaired in manifest and contract |
| B6-4 | both topology pairs | high | repaired in manifest and contracts |

## Batch 1

### `the-inverse-function-theorem-completed`

The standard development is present. The A page separates componentwise $C^k$ closure, matrix-inversion regularity, higher regularity of local inverses, openness of the regular locus, open-map and injective-global inverse consequences, a parametrised $C^k$ implicit theorem, proper finite-sheet structure, Jacobian-sign constancy, and zero-derivative constancy. This is an honest completion of the already-published $C^1$ inverse and implicit theorems rather than a duplicate proof under new ids. The proper-map result is correctly narrowed below the covering-space order boundary: it proves finite diffeomorphic sheets directly and makes the later covering terminology orientation-only.

The B page is real rather than token: it carries explicit coordinate maps, a block implicit system, the cube-map inverse failure, the disconnected zero-derivative witness, and the full implication-direction ledger promised by RC-1. The A page has 16 items, below the 60-item split ceiling.

The Lebl, Toronto, and Lee treatments are independent and include full textbook or course-note backing. Their mathematical dispositions are sound after B1-3. Lebl's regular-curve and local-straightening exercises properly go to `constant-rank-submersions-and-regular-level-sets`; the additional coordinate-system examples in Toronto are genuine duplicates of the retained polar and published complex-squaring material, not missing prerequisites. The direct design prerequisite `mixed-partials-taylor-and-extrema` is already in the transitive closure through `inverse-and-implicit-function-theorems`; the prior drift review correctly recorded no drift.

**Verdict: sufficient after direct repair.**

#### B1-3 — the source harvest stopped early and under-enumerated Toronto

Lebl §8.5 contains Exercise 8.5.11, the local straightening of noncritical plane level sets, after the ten exercises the ledger claimed were the full section. Toronto §3.3 also has two named visual examples, an `Important Coordinate Systems` heading with polar, spherical, and cylindrical subsections, a normalized local-solvability theorem in the inverse proof, and a named block-determinant claim. I added explicit dispositions for all of them and extended the Lebl locator to Exercise 8.5.11. The missing straightening result is deferred to the constant-rank page, where it belongs.

### `convex-and-semicontinuous-functions-on-rn`

Most of the standard finite-dimensional development is unusually strong: epigraphs and finite Jensen; basic operations; local boundedness, local Lipschitz continuity, and continuity; projection and variational inequality; point–set, supporting, and two-set separation; subgradients and differentiable criteria; Hessian criteria; local/global minimisers; and the level-set, epigraph, hypograph, and compact-extremum characterisations of semicontinuity. The B page has 13 substantive examples, counterexamples, and false statements, including both directions of the Hessian/strict-convexity non-equivalence and the correct characteristic-function convention. The A page has 29 items, so no split is indicated.

The broad declines to extended-real conjugacy, recession theory, sensitivity, and full subdifferential calculus are real subject boundaries rather than missing local machinery. Two omissions inside the selected elementary range are not.

**Verdict: insufficient.** B1-1 and B1-2 are exact closure requirements.

#### B1-1 — the supporting-hyperplane route assumes its key closure fact

`thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set` says to replace $C$ by its closure and then choose exterior points converging to the given boundary point. For an arbitrary set this is invalid: a boundary point of $C$ can be interior to $\overline C$. Convexity repairs the move, but no planned item states or proves that repair. Add, before the support theorem, the finite-dimensional lemma that a nonempty convex set and its closure have the same ordinary interior and boundary. Bertsekas, MIT 6.253 Lecture 4 (`Relative interior and closure`) carries the stronger relative-interior statement from which this follows. The support theorem must depend on the new lemma and use it before selecting exterior points.

Source: https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf

#### B1-2 — Boyd §3.2.3 is harvested as included but only its finite half is scaffolded

Boyd–Vandenberghe §3.2.3 is headed “Pointwise maximum and supremum.” `prop-basic-operations-preserving-convexity` proves only nonnegative finite combinations, affine precomposition, and a nonempty finite maximum. Add the source-backed proposition that a pointwise supremum of a nonempty family of convex functions is convex on the convex set where the supremum is finite (or state the equivalent effective-domain form if the author elects to introduce extended values). Update the coverage row so “supremum” is not credited to a finite-maximum statement. The integral/expectation extension of Jensen in §3.1.8 and the infinite-sum/integral extension in §3.2.1 also need explicit `out-of-scope` dispositions if the pair remains finite and pre-measure-theoretic.

Source: https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf

#### B1-4 — the reverse epigraph route used points that need not converge

The manifest proposed graph points $(x_j,f(x_j))$ after failure of lower semicontinuity. Their second coordinates need not converge. I replaced them by the horizontal epigraph points $(x_j,f(x)-\varepsilon)$, which converge to the point $(x,f(x)-\varepsilon)$ outside the epigraph. The proof-contract worksheet already carried this correct construction.

#### B1-5 — positive semidefiniteness was cited for strict convexity

The squared-norm example said the semidefinite Hessian criterion gave strict convexity. It gives only convexity. I added `cor-positive-definite-hessian-implies-strict-convexity` to the dependency list and proof contract and separated the two uses.

#### B1-6 — the boundary square-root counterexample asserted convexity without its route

The square-root boundary example uses convexity load-bearingly but listed no theorem that establishes it. I added the Euclidean norm theorem and made a boundary-valid route explicit: lift $x$ to $(x,\sqrt{1-\|x\|_2^2})$ on the upper unit hemisphere and apply the triangle inequality to a convex combination. Its last coordinate lies below the hemisphere height over the combined first coordinate; negating gives the desired convexity inequality directly on the closed ball.

## Batch 6

### `the-seifert-van-kampen-theorem`

The standard development is present and honestly decomposed. Loop generation is separated from the homotopy-grid and factorisation-invariance work, so the higher-sphere calculation does not wait on the injectivity half of van Kampen. The main theorem uses the arbitrary-homomorphism group pushout, not the library's monomorphism-only amalgamation notation. The page then gives the simply-connected-overlap and one-simply-connected-member consequences, an explicit finite-wedge neighbourhood lemma, free fundamental groups of finite circle wedges, the product theorem, and the torus computation. The B page includes the promised change-of-basepoint witness, punctured-plane and punctured-sphere calculations, nonabelianness, and the disconnected-overlap failure. With 15 A items and 5 B items, no split is needed.

Hatcher and May are faithful, independent full-text treatments. The deferred graph, cell-attachment, knot-complement, surface-presentation, and shrinking-wedge results each name an actual different subject or owner placement; none is a missing lemma for this two-set theorem.

**Verdict: sufficient after direct repair.**

### `classification-of-covering-spaces`

The prerequisite `covering-spaces-and-lifting` already publishes the universal-cover construction, its well-definedness lemmas, lifting criterion, monodromy, deck transformations, and the universal deck-group theorem. Reusing those results is correct; rebuilding them here would be duplication, not depth. The new page develops local homeomorphisms and the compact finite-cover criterion, covering morphisms, subgroup quotients of the universal cover, based and unbased connected classification, basepoint conjugacy, regular covers, the normalizer quotient, and circle-cover consequences. Its three B items are substantial: divisibility controls maps, deck groups are computed including the universal case, and explicit index-three subgroups of $F(a,b)$ distinguish regular from nonregular covers.

The disconnected $G$-set/category equivalence is a genuine later category/groupoid interface, and the connected conjugacy classification is complete without it. Hatcher and May's stated ranges are fully dispositioned. With 16 A items and 3 B items, the B page is compact but real and no split is needed.

**Verdict: sufficient after direct repair.**

#### B6-1 — subgroup inclusion does not produce a deck transformation

The normalizer lemma used `prop-covering-morphism-subgroup-criterion` to call the resulting self-map a deck transformation. May Chapter 3 explicitly notes that a self-map of a covering need not be an isomorphism. Inclusion $H\subseteq g^{-1}Hg$ gives only a covering morphism; equality is needed for an automorphism. I changed the route and contract to use `cor-based-connected-coverings-isomorphic-iff-equal-subgroups`, obtaining a deck transformation exactly when $H=g^{-1}Hg$, equivalently $g\in N_G(H)$.

Source: https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf, Chapter 3 §7.

#### B6-2 — the classification companion omitted its van Kampen page prerequisite

`ex-regular-and-nonregular-three-sheeted-wedge-coverings` depends on `cor-fundamental-group-of-two-circle-wedge` from order 297, but the order-300 B page declared only its A companion. I added the legal backward `the-seifert-van-kampen-theorem` edge to both the batch manifest and `research/plan-spec.json`. `validate-plan.mjs` is clean after the re-pin.

#### B6-3 — stereographic homeomorphisms did not themselves license simple connectedness

The antipodal-cover lemma jumped from simple connectedness of convex $\mathbb R^n$ to simple connectedness of a homeomorphic pole complement. I added the simple-connectedness definition and induced fundamental-group functoriality, and made the inverse-homeomorphism transport explicit.

#### B6-4 — four direct Statement or route inputs were undeclared

I added `def-wedge-of-pointed-spaces` to the finite-wedge theorem, `def-path-connected` to the connected-classification theorem, `thm-int-comm-ring` to the circle-classification corollary, and `cor-real-line-is-universal-cover-of-circle` to the deck-group example. These inputs were already named by the proof-contract routes but absent from the owning items' dependency lists.

## Declines, provenance, and mechanical checks

Every published dependency of these batches was opened from disk. All are published and carry eligible `literature-derived` or `ai-altered` Statement provenance; none has an `ai-generated` Statement and none is legacy-unclassified. The only AI-generated planned Statements are two checkable topology examples, neither load-bearing. Every literature-derived or AI-altered planned item has a reader-visible source URL assigned in its batch notes.

All four pairs have at least two independent treatments and at least one textbook, monograph, or complete lecture-note set. Current full-text stamps cover 5/5 batch-1 sources and 4/4 batch-6 sources. `coverage-checklist.mjs` reports 169 harvested rows, no errors, and only the three low-yield warnings adjudicated above. `content-policy.mjs --manifest-only` reports 107 scoped items with no errors or warnings. `validate-plan.mjs research/plan-spec.json` passes after the backward B-page re-pin. The proof-contract checker is intentionally not a Step-3 gate: its only failures are that the planned item files do not yet exist.

No A page exceeds 60 items. No forward reference is load-bearing, no external fallback is proposed, no published dependency repair is needed, and no page split or owner reading-order decision is open.
