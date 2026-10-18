# Proposed supplier: lem-bem-far-panel-quadrature-residual

Research proposal only. Kind lemma; proposed batch-57 A-page home. This is a direct proof of a deliberately elementary positive rule; high-order smooth-panel Gauss estimates are unnecessary for the approved P0 assembly scope.

## Statement and proof

Let T,S be disjoint nondegenerate compact triangles and supply `0<d≤dist(T,S)`. Partition each into finitely many subtriangles, maximum diameters h_T,h_S, with positive weights equal to subtriangle areas and nodes their centroids. Let `(x_i,w_i)` and `(y_j,v_j)` be these rules. Define

`B_TS=Σ_iΣ_j w_i v_j/(4π|x_i−y_j|)`.

Then

`|A_TS−B_TS| ≤ ε_quad = |T||S|(h_T+h_S)/(4πd²)`.

Indeed `|∇_x(1/(4π|x−y|))|=|∇_y(1/(4π|x−y|))|=1/(4π|x−y|²)≤1/(4πd²)`. Join each point of a target/source subtriangle to its centroid while holding the other variable fixed; all intermediate points remain in T/S by convexity and retain distance at least d. The fundamental theorem along each segment gives the pointwise difference bounded by `(h_T+h_S)/(4πd²)`. Integrate over all subtriangle products; their areas sum to `|T||S|`. This proves the bound without a point-source approximation hypothesis, cluster expansion, or transformed-integrand smoothness assumption.

Repeated midpoint subdivision halves each maximum diameter; for every positive absolute tolerance the bound eventually meets it. A strict positive certified d is obtainable by finite convex minimization of the squared distance on T×S (active-face enumeration as in near-proof). For exact algebraic geometry all tests/enclosures terminate. For general real geometry require a supplied certified separation bound and certified positive quadrature data. Subtriangle areas and centroid evaluations are outward-enclosed; charge the resulting finite-sum interval radius `ε_eval` separately. Refine arithmetic precision until it meets its prescribed positive budget. If the requested geometry or arithmetic certificate is missing, report `uncertified`.

## Literal FMM interface and normalization

If source nodes lie in B(c,a), target nodes in B(d_c,b), and `R=|d_c−c|>a+b`, feed the actual batch-19 evaluator source charges

`q_j=v_j/(4π)`.

Its unnormalized kernel is `Σq_j/|x−y_j|`, whereas the physical BEM kernel is `1/(4π|x−y|)`. Therefore `Q=Σ|q_j|=|S|/(4π)` and `W_T=Σw_i=|T|`. The complete entry bound is

`ε_TS=ε_quad+ε_eval+W_T [Q/(R−b)] [(a/(R−b))^(p+1)/(1−a/(R−b))]+ε_FMM-arith`.

The last term is required only for a floating-point implementation of the finite evaluator, and is the outward arithmetic enclosure radius of that finite formula; the current batch-19 theorem is an exact-arithmetic truncation theorem. Supplying no arithmetic enclosure permits an exact-arithmetic certificate only. The charge normalization must be stated explicitly in the assembly Definition; it is not legitimate to take q_j=v_j and omit a factor 1/(4π) elsewhere.

For fixed strict cluster separation, the geometric ratio is <1, so increasing p eventually meets every positive truncation budget. The geometry/positive rule and quadrature residual are independent of p. Where whole-panel balls do not satisfy the cluster hypothesis, use the smooth near fallback from near-proof (or subdivide into certified separated cluster subpairs and sum their exact identities). Do not silently apply the cluster tail to arbitrary disjoint panels.

Only the actual single-cluster arithmetic count may be summed over these calls. No multilevel, tree, O(N), or frequency-dependent claim follows.

## Proposed dependencies

`def-bem-surface-mesh-and-piecewise-constant-density-space`, `def-bem-newtonian-kernel-in-three-dimensions` and the existing finite-dimensional fundamental-theorem/calculus suppliers after canonical ID inspection. For the cluster-combination paragraph additionally use `alg-three-dimensional-laplace-cluster-expansion` and `thm-three-dimensional-laplace-expansion-error-and-work`. The quadrature residual itself has no dependency on those cluster items.
