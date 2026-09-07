---
id: "lem-finite-simplicial-approximation-for-homology-comparison"
kind: "lemma"
title: "Finite simplicial approximation for homology comparison"
deps: ["def-simplicial-map-and-its-geometric-realization", "lem-mesh-of-iterated-barycentric-subdivision-tends-to-zero", "thm-lebesgue-number-lemma"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hatcher, Algebraic Topology, §2C, Lemma 2C.2 and Theorem 2C.1, pp.177–179"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "§2C, Lemma 2C.2 and Theorem 2C.1, pp.177–179"
status: "draft"
origin: "pipeline"
proof_strategy: "Prove the open-star criterion, choose stars for vertices in L from Q and then extend their open preimages to a neighbourhood of L. Finiteness and a Lebesgue number make all sufficiently small stars subordinate, with these constrained choices at L. The straight-line homotopy stays in a common target simplex and in Q on L. This is the finite-pair specialization, not cellular approximation."
---

## Statement

For finite simplicial pairs $(K,L)$ and $(P,Q)$, every continuous map $f:(|K|,|L|)\to(|P|,|Q|)$ is homotopic through maps of pairs to a simplicial map $(\operatorname{sd}^r K,\operatorname{sd}^r L)\to(P,Q)$ for some $r\ge0$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] Let $(V,K)$ and $(W,L)$ be abstract simplicial complexes. A function $f:V \to W$ is a **simplicial map** if $f(\sigma):=\{f(v):v \in \sigma\}$ is a simplex of $L$ whenever $\sigma$ is a simplex of $K$. The **geometric realization** of $f$ is the map $|f|:|K| \to |L|$ defined by $$|f|(\alpha)(w):=\sum_{v \in f^{-1}(w)} \alpha(v).$$ Because $\alpha$ has finite support, the sum is finite. The support of $|f|(\alpha)$ is contained in $f(\operatorname{supp}(\alpha))$, so it is again a simplex of $L$. ([[def-simplicial-map-and-its-geometric-realization]])

[F2] For an affine $n$-simplex of finite diameter and $n>0$, every simplex in its $r$-fold barycentric subdivision has diameter at most $(n/(n+1))^r$ times the original diameter. Hence the mesh tends to zero. ([[lem-mesh-of-iterated-barycentric-subdivision-tends-to-zero]])

[F3] Let $(X,d)$ be a compact metric space (def-metric-compactness, def-metric-space) and let $\mathcal{U}$ be an open cover of $X$. Then there is a real $\delta > 0$, a **Lebesgue number** for $\mathcal{U}$, such that every nonempty $A \subseteq X$ with $\operatorname{diam}(A) < \delta$ (def-metric-bounded-diameter) satisfies $A \subseteq U$ for some $U \in \mathcal{U}$. Diameters of nonempty subsets of $X$ are defined because a compact space is bounded (thm-compact-subset-is-closed-and-bounded) and a subset of a bounded set is bounded. No choice principle is used. ([[thm-lebesgue-number-lemma]])

## Proof

1.1 Realize the finite complexes in their barycentric Euclidean spaces. The open star of a vertex $w$ consists of points whose $w$ coordinate is positive. If several open stars intersect, their vertices belong to the support simplex of any point in the intersection; hence they span a simplex. This is the star criterion for a vertex map to extend as in F1. [F1, given]

1.2 For every $a\in|L|$, some vertex $w$ of $Q$ has positive coordinate at $f(a)$. The open set $f^{-1}(\operatorname{st}_P w)$ therefore contains a metric ball $B(a,2\epsilon_a)$. Finitely many $B(a,\epsilon_a)$ cover the compact set $|L|$. Choose $\eta>0$ smaller than all their radii. Every set of diameter less than $\eta$ containing a vertex $v\in|L|$ lies in one of the corresponding $B(a,2\epsilon_a)$, since $v$ lies in its inner ball. Thus any sufficiently small closed star at a vertex of $L$ maps into the star of a vertex of $Q$. If $L$ is empty this constraint is absent. [given, choose]

2.1 The preimages of all vertex stars in $P$ cover the compact $|K|$. F3 gives a Lebesgue number $\lambda>0$. By F2 choose a common iterated subdivision whose simplex diameters are less than $\min(\eta,\lambda)/3$, omitting $\eta$ if $L$ is empty. A closed vertex star has diameter at most twice the mesh. At vertices of the subdivided $L$ make the constrained choice of the preceding step; elsewhere use $\lambda$. If $K$ is zero-dimensional the stars are singletons and no subdivision is needed; if $K$ is empty the assertion is vacuous. [F2, F3, step 1.2]

3.1 Call the chosen vertex map $g$. For a point $x$ in a source simplex with support vertices $v_j$, $f(x)$ belongs to every $\operatorname{st}_P g(v_j)$. The star criterion proves that these vertices lie in the support simplex of $f(x)$. Thus $g$ extends simplicially and $H(x,t)=(1-t)f(x)+tg(x)$ stays in that same target simplex. It is continuous in the ambient finite-dimensional vector space. If $x\in|L|$, its support simplex under $f$ lies in $Q$, and so does the whole segment. Its endpoints are $f$ and $g$, giving the required homotopy of pairs even if several chosen vertices coincide. [F1, step 1.1, step 2.1] ∎
