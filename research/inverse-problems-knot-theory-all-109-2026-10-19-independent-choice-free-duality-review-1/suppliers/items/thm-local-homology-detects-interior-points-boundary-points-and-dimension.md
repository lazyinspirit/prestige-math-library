---
id: "thm-local-homology-detects-interior-points-boundary-points-and-dimension"
kind: "theorem"
title: "Local homology detects manifold dimension, interior, and boundary"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-topological-manifold-with-and-without-boundary","thm-excision-for-singular-homology","cor-homology-of-spheres","thm-long-exact-sequence-of-a-pair-in-singular-homology","cor-homotopic-maps-induce-the-same-map-on-singular-homology","prop-relative-homology-is-functorial-for-maps-of-pairs"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, §3.3, pp.230–231
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $M$ be an $n$-manifold with boundary and $x\in M$. For any commutative unital coefficient ring $R$,
$$H_k(M,M\setminus\{x\};R)\cong\begin{cases}R,&x\in\operatorname{int}M\text{ and }k=n,\\0,&\text{otherwise}.\end{cases}$$
The boundary subset is independent of charts, and a nonempty manifold's dimension is intrinsic. Homeomorphisms preserve boundary and, for nonempty manifolds, dimension. A manifold is boundaryless exactly when it is locally Euclidean of its specified dimension. Dimension is not intrinsic for the empty space, and the zero coefficient ring cannot detect boundary or dimension; use integral coefficients for these conclusions. No AC is assumed.

## Facts & Assumptions

[F1] [[def-topological-manifold-with-and-without-boundary]] supplies half-space charts, the existential boundary subset, and the zero-dimensional convention.

[F2] [[thm-excision-for-singular-homology]] permits removal of $Z$ when its closure lies in the interior of the subspace of the pair.

[F3] [[cor-homology-of-spheres]] computes reduced sphere homology, including $S^0$.

[F4] [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] supplies the pair sequence.

[F5] [[cor-homotopic-maps-induce-the-same-map-on-singular-homology]] identifies homology under explicit contractions and deformation retractions.

[F6] [[prop-relative-homology-is-functorial-for-maps-of-pairs]] sends homeomorphisms of pairs to isomorphisms.

## Proof

**Given:** $M,n,x,R$ as stated; homology groups in negative degrees are zero.

1.1 In any chart containing $x$, restrict to an open ball about its image if that image is above the hyperplane, or to the intersection of an open ball with the half-space if it is on the hyperplane. Translate the center to $0$ (only parallel to the hyperplane in the latter case). Write $U$ for the resulting neighborhood of $x$. Since $M$ is Hausdorff, $M\setminus\{x\}$ is open: separate each other point from $x$ by open sets and take their union. The closed set $Z=M\setminus U$ omits $x$, so $\overline Z=Z\subseteq\operatorname{int}(M\setminus\{x\})$. Thus [F2] and [F6] identify the local pair homology with that of $(B,B\setminus\{0\})$ or $(B_+,B_+\setminus\{0\})$, where the ball has radius $r>0$. [F1, F2, F6, given]

1.2 A point has exactly one singular generator in every degree. Its boundary is multiplication by $\sum_{i=0}^k(-1)^i$, namely identity for positive even $k$ and zero for odd $k$, with zero degree-zero boundary. Hence its homology is $R$ in degree zero and zero above. A nonempty contractible space has the same homology by [F5], with the degree-zero isomorphism induced by its map to a point. For a contractible $Y$ and nonempty $A\subseteq Y$, [F4] therefore identifies $H_k(Y,A;R)$ with $\widetilde H_{k-1}(A;R)$ for $k\ge1$ and gives $H_0(Y,A;R)=0$. At $k=1$ this is the kernel of the surjective augmentation $H_0(A;R)\to R$, and at higher degrees it follows from the two zero adjacent groups. Surjectivity uses any one point of the given nonempty $A$. [F4, F5, given]

2.1 At an interior chart point with $n\ge1$, $B$ contracts to $0$. For $\rho=r/2$, the homotopy $$h(y,t)=\left(1-t+\frac{t\rho}{\lVert y\rVert}\right)y$$ retracts $B\setminus\{0\}$ onto its radius-$\rho$ sphere: the norm is $(1-t)\lVert y\rVert+t\rho$, strictly between $0$ and $r$, and the sphere is fixed. Scaling identifies it with $S^{n-1}$. By [F3], [F5] and step 1.2, the pair group is $R$ exactly in degree $n$. This includes $n=1$, where the punctured interval has two components and the augmentation kernel is $\{(a,-a):a\in R\}$. When $n=0$, the chart pair is $(\{0\},\varnothing)$; its relative chain complex is the point complex calculated in step 1.2, giving the same conclusion. [F3, F5, step 1.1, step 1.2]

2.2 At a boundary chart point necessarily $n\ge1$. Choose $a=(0,\ldots,0,r/2)$. Both $B_+$ and $B_+\setminus\{0\}$ contract to $a$ by $(y,t)\mapsto(1-t)y+ta$. The ball and half-space are convex; for $t>0$ the last coordinate is positive, so the punctured homotopy never meets $0$, and at $t=0$ the input already avoids $0$. Their inclusion induces an isomorphism on $H_0$ and on every higher group, as seen by their maps to a point. The exact sequence [F4] gives zero relative groups in every degree. [F4, F5, step 1.1, step 1.2]

3.1 Now take $R=\mathbb Z$. The nonzero group in step 2.1 and the all-zero groups in step 2.2 are intrinsic to the pair $(M,M\setminus\{x\})$. Thus no point can be a boundary point in one chart and an interior point in another, even if different dimension labels are considered. This proves chart independence of [F1]'s boundary set and the formula in the statement. If a nonempty space has manifold dimension labels $n$ and $m$, some point is interior in an $n$-chart: every nonempty open subset of a positive-dimensional half-space meets its strict interior; for dimension zero every point is interior. The same point is interior for the other manifold structure by the zero/nonzero distinction. Its unique nonzero local degree is both $n$ and $m$, hence $n=m$. A homeomorphism identifies the local pairs by [F6], so preserves these data. [F1, F6, step 2.1, step 2.2]

4.1 If the boundary is empty, [F1]'s restriction to small balls gives Euclidean neighborhoods. Conversely, if $M$ is locally Euclidean of dimension $n$, the interior calculation of step 2.1 at every point gives a nonzero integral local group and precludes a boundary chart by step 2.2. This proves both directions of the stated equivalence. For empty $M$ the pointwise assertion and boundary equivalence are vacuous, but every dimension label is allowed. Zero coefficients make all local groups zero, without affecting the integral argument for intrinsic properties. The contractions explicitly include their endpoints, and the point calculation uses unnormalized chains; no omitted degenerate-generator convention or choice principle is involved. [F1, step 2.1, step 2.2, step 3.1] ∎
