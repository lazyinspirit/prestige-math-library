---
id: lem-center-frontier-selection-and-cancellation-search-has-a-finite-rank
kind: lemma
title: "The center-frontier selection and cancellation search has finite rank"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-one-quadrant-homoclinic-disk-has-one-more-interior-center-than-saddle, lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary, lem-manifold-bump-for-a-compact-set-inside-an-open-set, cor-mean-value-theorem, lem-c2-inverses-and-scalar-return-roots, def-countable-choice-principle-for-foliation-pair, lem-nested-pinched-center-frontier-has-a-strict-inner-disk-search, lem-saddle-polycycle-rounding-preserves-the-inward-transverse-family, lem-characteristic-period-annulus-has-an-orbit-or-polycycle-frontier, lem-null-simple-center-frontier-supplies-the-exact-cancellation-scalar, lem-first-saddle-lobe-admits-a-collar-fixed-center-saddle-cancellation, lem-first-essential-loop-of-a-transverse-family-is-a-vanishing-cycle, lem-characteristic-disk-center-saddle-index-count, lem-characteristic-disk-singular-images-can-be-separated-into-distinct-leaves-rel-collar]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 13
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mark Brittenham, Foliations and the Topology of 3-manifolds, class 11"
      url: "https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lecs_11_to_20.pdf"
      locator: "Class 11, PDF pp. 1-3, finite selection and cancellation search; complete local construction in the strategy"
    - title: "S. P. Novikov, The Topology of Foliations (complete English translation)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a76, printed pp. 16-19; \u00a77, Lemmas 7.1-7.4, printed pp. 20-24"
---

## Statement

Assume AC_ω and the exact maximal-center-frontier contract. On a separated generic characteristic disk with transverse boundary or regular essential leafwise boundary, finite inner-source-disk search either finds a C² vanishing-cycle trace or selects a null simple one-center/one-saddle frontier whose exact collar-fixed cancellation reduces the full-disk saddle count by one. Iteration terminates in a vanishing cycle; its rank is (total saddles, interior saddles of the current invariant search disk).

## Facts & Assumptions

**Given:** A separated generic characteristic disk with transverse boundary or regular essential leafwise boundary, satisfying the exact maximal-center-frontier contract.

[F1] [[lem-characteristic-period-annulus-has-an-orbit-or-polycycle-frontier]] supplies the frontier and transverse trace of a maximal center annulus. [[lem-characteristic-disk-center-saddle-index-count]] gives the full-disk count $c-s=1$, while [[lem-one-quadrant-homoclinic-disk-has-one-more-interior-center-than-saddle]] gives the strict-interior count for a one-quadrant homoclinic disk. [[lem-characteristic-disk-singular-images-can-be-separated-into-distinct-leaves-rel-collar]] re-separates the finite singular images relative to a collar with zero-free closure. [[lem-saddle-polycycle-rounding-preserves-the-inward-transverse-family]] supplies the prescribed adjacent-annulus polycycle rounding.

[F2] The in-pair item [[lem-nested-pinched-center-frontier-has-a-strict-inner-disk-search]] supplies the strict inner-disk search: a nested two-loop frontier has a one-quadrant inner disk $K$ containing a center, searching from a center of $K$ stays inside $K$, and any further nested pair has a saddle strictly inside $K$ with inner disk excluding it; the in-pair item [[lem-first-saddle-lobe-admits-a-collar-fixed-center-saddle-cancellation]] supplies the collar-fixed cancellation removing exactly one center and one saddle, and the in-pair item [[lem-first-essential-loop-of-a-transverse-family-is-a-vanishing-cycle]] produces a vanishing cycle from a first essential loop of a transverse family.

[F3] The in-pair item [[lem-null-simple-center-frontier-supplies-the-exact-cancellation-scalar]] supplies, for a null simple one-center one-saddle frontier, the first integral and Euclidean-gradient hypotheses of the conditional cancellation carrier; the outer collar is fixed by that construction.

[F4] Generic position gives finitely many nondegenerate critical points of local $C^2$ transverse functions ([[lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary]]). Smooth cutoffs exist by [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]], the segment mean-value estimate by [[cor-mean-value-theorem]] gives their Taylor error bounds, and [[lem-c2-inverses-and-scalar-return-roots]] gives $C^2$ regular level arcs. The standing choice hypothesis is [[def-countable-choice-principle-for-foliation-pair]]. Here the **exact maximal-center-frontier contract** means the complete frontier and $C^2$ period-trace alternatives of [F1], the one-quadrant count and strict inner descent of [F2], and, at a selected null simple lobe, the fixed cap, full-neighbourhood first integral, gradient branches and exact exterior collar of [F3], together with the embedded piecewise-$C^2$ source circuit required by the cancellation carrier. The regularity bridge below supplies that last requirement after an arbitrarily small interior modification; it is not a consequence of genericity alone.

## Proof

**Proof technique:** direct.

1.1 Fix a smaller closed zero-free outer collar, so the separation supplier of [F1] applies with its required zero-free collar closure. Before searching, normalize each of the finitely many critical germs in disjoint interior balls. In a foliation box write the map as $(Y,u)$, let $w=x-p$, $H=D^2u(p)$ and $Q=u(p)+\tfrac12w^THw$. For $R=u-Q$, continuity of $D^2u$ and the segment integral estimate give $|R|\le\delta(\varepsilon)|w|^2$, $|DR|\le\delta(\varepsilon)|w|$ and $\|D^2R\|\le\delta(\varepsilon)$ on $|w|\le\varepsilon$, with $\delta(\varepsilon)\to0$. Choose a radial cutoff $\chi_\varepsilon$ equal to zero for $|w|\le\varepsilon/3$ and one for $|w|\ge2\varepsilon/3$, with $\|D^j\chi_\varepsilon\|\le C_j\varepsilon^{-j}$ for $j=1,2$. Replace $u$ by $Q+\chi_\varepsilon R$, retaining $Y$. The product rule gives $|D(\chi_\varepsilon R)|\le C\delta(\varepsilon)|w|$ and a $C^2$ change tending to zero. Since $|Hw|\ge a|w|$ for some $a>0$, choosing $C\delta<a/2$ excludes every new zero, also during the interpolation; the value and Hessian at $p$ are unchanged. Smallness keeps the image in its foliation box. Thus all singular images remain separated and the outer collar stays fixed. A linear change diagonalizes $H$; the saddle critical level now has straight rays near the saddle. Elsewhere regular level arcs are $C^2$ by [F4], so every finite simple homoclinic circuit is genuinely piecewise $C^2$ in the source coordinates. Start the frontier search on this modified disk. [F1, F4, given, construct, algebra]

2.1 The period-frontier interface [F1] yields the frontier of the maximal center annulus. Distinct singular ambient leaves prevent a connected characteristic frontier from containing different saddle vertices; a one-saddle graph has at most two homoclinic edges; the basin is an increasing union of its bounded periodic disks, hence a whole bounded complementary component of that graph; a side-by-side two-loop graph has separate bounded components, so one center basin has only one lobe as its frontier; and a nested pair has a one-quadrant inner bounded disk $K$ containing a center. Searching from a center in $K$ regardless of the two image lobe classes, its trajectories cannot cross the invariant boundary, any further nested pair has its saddle strictly inside $K$ with inner disk excluding that saddle and hence strictly fewer interior saddles, and a later frontier reaching $\partial K$ is that simple circuit. This is source topology and uses no inherited essential boundary class. [F1, F2, step 1.1]

3.1 For a selected maximal annulus, near-center loops are null in a plaque. If any regular loop is essential, the first-essential-parameter construction produces a vanishing cycle using the C² period trace. Otherwise all regular loops are null. An essential simple saddle endpoint produces a vanishing cycle by the same first-essential construction; a null simple endpoint supplies one fixed cap and the cancellation of [F3]; a null regular endpoint has trivial two-sided ambient holonomy, so a regular source neighbourhood has a closed-orbit band across the endpoint, contradicting maximality; an essential regular endpoint again gives the first-essential trace. An outer transverse boundary cannot be the limit of periodic circles in its regular transverse collar, a regular leafwise boundary is the prescribed essential endpoint, and an isolated outer center is impossible in a disk: a small punctured centre neighbourhood is foliated by circles, so joining this cap to the original centre cap with the intervening product annulus would exhibit a compact boundaryless two-dimensional submanifold of the interior of the connected source disk, which is locally open in that disk and hence, by compactness, closed, a contradiction. [F1, F3, step 1.1, step 2.1]

4.1 Define the rank as the pair $(S,s(K))$ with the lexicographic order, where $S$ is the total saddle count in the current full disk and $s(K)$ the number of interior saddles of the current invariant search disk. The inner-source-disk search of step 2.1 lowers $s(K)$ strictly; a null simple cancellation lowers $S$ exactly by one, leaves the original outer collar fixed and removes no other zero, after which the finitely many remaining singular images are re-separated relative to a smaller closed zero-free outer collar by [F1] and the quadratic normalization of step 1.1 is repeated before a new maximal-annulus search. Neither operation creates a zero; no old separatrix or basin is assumed to survive. At $S=0$ there is still a center by the index count $c-s=1$ of [F1], and the regular or boundary alternatives of step 3.1 yield an essential endpoint. Hence the full-disk theorem follows in finitely many cancellations, the iteration terminates in a vanishing cycle, and every regular annulus extension is absorbed into the one maximal family supplied by the frontier interface rather than an artificial new family. [F1, F2, F4, step 1.1, step 3.1] ∎
