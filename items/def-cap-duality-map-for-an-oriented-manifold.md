---
id: "def-cap-duality-map-for-an-oriented-manifold"
kind: "definition"
title: "The cap-duality map of an oriented manifold"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-compactly-supported-singular-cohomology-of-a-locally-compact-space","lem-compatible-local-orientation-classes-exist-over-compact-subsets","def-relative-cap-product","thm-cap-product-boundary-identity","def-fundamental-class-of-a-compact-oriented-manifold"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, construction preceding Theorem 3.35, p.245
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

Let $M$ be an $R$-oriented boundaryless $n$-manifold, with $R$ commutative and unital. For each compact $K\subset M$, the compatible class of [[lem-compatible-local-orientation-classes-exist-over-compact-subsets]] and the first specialization of [[def-relative-cap-product]] give
$$D_K:H^p(M,M\setminus K;R)\longrightarrow H_{n-p}(M;R),\qquad a\longmapsto a\cap[M]_K.$$
Cohomology is written first throughout. If $\varphi$ is a representative relative cocycle and $z_K$ a representative relative orientation cycle, this map is represented by the actual chain $\varphi\cap z_K$, evaluating on front faces and retaining back faces.

It is a cycle: $\partial z_K$ is a chain in $M\setminus K$, and $\varphi$ vanishes on every simplex there, so $\varphi\cap\partial z_K=0$. The identity of [[thm-cap-product-boundary-identity]] gives $\partial(\varphi\cap z_K)=(-1)^p(\varphi\cap\partial z_K-\delta\varphi\cap z_K)=0$. The relative-cap definition proves independence of both representatives, including changes of a relative cycle by a boundary plus a chain outside $K$, and changes of a relative cocycle by a relative coboundary. Thus $D_K$ is a well-defined $R$-linear map.

These maps are compatible with enlargement of support. If $K\subset L$, the cohomology transition regards the same $\varphi$ as a cocycle vanishing outside $L$. The compact orientation lemma says $[M]_L$ restricts to $[M]_K$, so representatives satisfy $z_L-z_K=\partial b+c$ with $c$ a chain outside $K$. Every front face of a simplex in $c$ is outside $K$, so $\varphi\cap c=0$. Since $\delta\varphi=0$, the cap boundary identity yields
$$\varphi\cap z_L-\varphi\cap z_K=(-1)^p\partial(\varphi\cap b).$$
The two chains have equal absolute homology classes. This calculation also verifies that the orientation convention is unchanged when the support grows.

Consequently the explicit colimit of [[def-compactly-supported-singular-cohomology-of-a-locally-compact-space]] defines the **cap-duality map**
$$D_M:H_c^p(M;R)\longrightarrow H_{n-p}(M;R),\qquad[(K,a)]\longmapsto D_K(a).$$
Indeed any equality of representatives is witnessed in a larger compact support, where the preceding compatibility identifies their images. Addition is computed after passing to a common support, so $D_M$ is $R$-linear. This constructs the map; its being an isomorphism is a separate theorem.

For compact $M$, taking terminal support $K=M$ gives the ordinary cap with the fundamental class of [[def-fundamental-class-of-a-compact-oriented-manifold]]. For $p>n$ the output chains are zero, and for $p<0$ the source is zero. When $p=n$, cap produces zero-chains with coefficients equal to the full-simplex evaluations. When $p=0$, it evaluates the front vertex and keeps the whole simplex, as in the cap definition. Empty supports, empty $M$ and the zero ring give zero maps. Degenerate simplices satisfy the same containment argument. All choices above involve finitely many representatives of given classes, and the resulting maps are independent of them; no AC is used.
