# Frontier 16 — Alpha-a Step-3 recheck

Group `a` covers batches 1 and 6. I re-read every Step-3 fix-pass disposition from the current batch manifests, coverage ledgers, proof contracts, notes, and the relevant `plan-spec.json` page entry. No Beta pushback was recorded.

- **B1-1 — confirmed.** `research/frontier-16-batch-1.pages.json` now places `lem-convex-set-and-closure-have-same-interior-and-boundary` immediately before the supporting-hyperplane theorem; that theorem depends on it and uses the boundary equality before choosing exterior points. The new lemma's contract records the affine-hull, relative-interior, full-dimensional, proper-affine-hull, and boundary-equality moves, and the Bertsekas Lecture 4 harvest row names it.
- **B1-2 — confirmed.** `prop-pointwise-supremum-preserves-convexity` follows the finite-operations proposition and proves convexity on the finite-valued domain for a nonempty family, using completeness only after exhibiting a common finite upper bound. Boyd §3.2.3 now points to it, while the integral/expectation Jensen extension and infinite-sum/integral preservation have separate result-specific `out-of-scope` rows.
- **B1-3 — confirmed.** The Lebl locator and harvest include Exercise 8.5.11 with its local-straightening result deferred to `constant-rank-submersions-and-regular-level-sets`; the Toronto harvest includes both visual examples, the coordinate-system heading and all three coordinate subsections, the normalized local-solvability theorem, and the block-determinant claim.
- **B1-4 — confirmed.** The epigraph reverse strategy and proof contract use the horizontal points $(x_j,f(x)-\varepsilon)$ converging to $(x,f(x)-\varepsilon)$ outside the epigraph; they do not rely on convergence of $(x_j,f(x_j))$.
- **B1-5 — confirmed.** `ex-euclidean-norm-and-squared-norm-are-convex` depends on `cor-positive-definite-hessian-implies-strict-convexity`, and its contract uses the semidefinite criterion for convexity and the positive-definite corollary for strict convexity.
- **B1-6 — confirmed.** `cex-convex-function-with-empty-subdifferential-at-a-boundary-point` depends on the Euclidean norm theorem and proves convexity on the closed ball by lifting to unit vectors on the upper hemisphere and applying the triangle inequality before the radial subgradient contradiction.
- **B6-1 — confirmed.** `lem-deck-transformations-correspond-to-normalizer-cosets` depends on `cor-based-connected-coverings-isomorphic-iff-equal-subgroups`; its strategy and contract require $H=g^{-1}Hg$ before constructing a deck transformation and do not use the weaker subgroup-inclusion morphism criterion in that route.
- **B6-2 — confirmed.** `classification-of-covering-spaces-examples` declares `the-seifert-van-kampen-theorem` in both `research/frontier-16-batch-6.pages.json` and `research/plan-spec.json`, licensing the companion's use of `cor-fundamental-group-of-two-circle-wedge`.
- **B6-3 — confirmed.** `lem-antipodal-sphere-cover` declares `def-simply-connected` and `thm-induced-fundamental-group-map-functoriality`; its strategy and contract use each stereographic homeomorphism and its inverse to transport path-connectedness and trivial fundamental group before applying the definition of simple connectedness.
- **B6-4 — confirmed.** The four direct inputs are present in their owning items and synchronized with their contracts: `def-wedge-of-pointed-spaces`, `def-path-connected`, `thm-int-comm-ring`, and `cor-real-line-is-universal-cover-of-circle`.

## Pair verdicts

- `the-inverse-function-theorem-completed` — **ready for splice**.
- `convex-and-semicontinuous-functions-on-rn` — **ready for splice**; both prior closure requirements are now satisfied.
- `the-seifert-van-kampen-theorem` — **ready for splice**.
- `classification-of-covering-spaces` — **ready for splice**.

No group-A Step-3 finding remains open.
