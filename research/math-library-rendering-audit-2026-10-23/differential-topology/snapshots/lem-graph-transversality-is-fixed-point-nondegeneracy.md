---
id: lem-graph-transversality-is-fixed-point-nondegeneracy
kind: lemma
title: "Graph-diagonal transversality is exactly fixed-point nondegeneracy"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-nondegenerate-fixed-point, lem-fixed-points-are-graph-diagonal-intersections, prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold, prop-the-diagonal-is-an-embedded-submanifold, def-transverse-embedded-submanifolds, thm-canonical-tangent-and-cotangent-splittings-for-products, def-differential-of-a-smooth-map, def-linear-isomorphism-and-invertible-linear-map, def-the-diagonal-of-a-space, thm-chain-rule-for-differentials-of-smooth-maps, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, thm-rank-nullity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete 236-page PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §4, printed pp. 120-121 (graph(df_x) meets the diagonal only at 0 iff df_x has no nonzero fixed vector)"
    - title: "Eleny Ionel, notes by Andrew Lin, Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: "https://web.stanford.edu/~lindrew/math215B.pdf"
      locator: "Lecture 17, printed p. 54 (x is nondegenerate iff the graph is transverse to the diagonal at x)"
dependency_level: 1
---

## Statement

Let $M$ be a smooth $n$-manifold, $f:M\to M$ smooth, $\Gamma_f$ its graph and
$\Delta_M$ the diagonal
([[prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold]],
[[prop-the-diagonal-is-an-embedded-submanifold]]), and let
$\gamma_f(x)=(x,f(x))$. For a fixed point $x$ the following are equivalent:

(i) $\Gamma_f$ and $\Delta_M$ are transverse at $\gamma_f(x)$
([[def-transverse-embedded-submanifolds]]), i.e.
$T_{\gamma_f(x)}\Gamma_f+T_{\gamma_f(x)}\Delta_M=T_{\gamma_f(x)}(M\times M)$ in
the canonical splitting $T_{(x,x)}(M\times M)\cong T_xM\oplus T_xM$ of
[[thm-canonical-tangent-and-cotangent-splittings-for-products]];

(ii) $I-Df_x$ is invertible
([[def-linear-isomorphism-and-invertible-linear-map]]);

(iii) $x$ is a nondegenerate fixed point ([[def-nondegenerate-fixed-point]]).

For $x\notin\operatorname{Fix}(f)$ one has
$\gamma_f(x)\notin\Delta_M$ and transversality at $\gamma_f(x)$ holds
automatically. Consequently the graph map $\gamma_f$ is transverse to
$\Delta_M$ if and only if every fixed point of $f$ is nondegenerate.

## Facts & Assumptions

**Given:** A smooth $n$-manifold $M$, a smooth map $f:M\to M$, a point
$x\in M$, the graph $\Gamma_f$, the diagonal $\Delta_M$ and the graph map
$\gamma_f=\langle\mathrm{id}_M,f\rangle$.

[F1] $\Gamma_f$ and $\Delta_M$ are embedded submanifolds of $M\times M$ of
dimension $n$; the first projection restricts to a smooth bijection with smooth
inverse $\gamma_f$ on $\Gamma_f$, and likewise the diagonal map
$\delta_M=\langle\mathrm{id}_M,\mathrm{id}_M\rangle$ is a smooth bijection onto
$\Delta_M$ with smooth inverse the first projection
([[prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold]],
[[prop-the-diagonal-is-an-embedded-submanifold]],
[[def-the-diagonal-of-a-space]]).

[L1] The map $\gamma_f$ is smooth with components $\pi_0\circ\gamma_f=\mathrm{id}_M$,
$\pi_1\circ\gamma_f=f$, and the canonical splitting identifies
$T_{(x,x)}(M\times M)$ with $T_xM\oplus T_xM$ through the differentials of the
two projections; the chain rule computes differentials of composites
([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]],
[[thm-canonical-tangent-and-cotangent-splittings-for-products]],
[[thm-chain-rule-for-differentials-of-smooth-maps]],
[[def-differential-of-a-smooth-map]]).

[L2] $S\pitchfork T$ at $p$ means $T_pS+T_pT=T_pM$
([[def-transverse-embedded-submanifolds]]).

[L3] An endomorphism of a finite-dimensional space is surjective if and only if
it is injective, by [[thm-rank-nullity]]; and $I-Df_x$ is invertible exactly when
it is bijective, by [[def-linear-isomorphism-and-invertible-linear-map]].

## Proof

1.1 Tangents of graph and diagonal. Since the first projection restricts to a diffeomorphism $\Gamma_f\to M$ with inverse $\gamma_f$ by [F1], its differential identifies $T_{\gamma_f(x)}\Gamma_f$ with the image of $d(\gamma_f)_x$; by [L1] and the chain rule, the components of $d(\gamma_f)_x(v)$ are $d\pi_0(d\gamma_x(v))=d(\mathrm{id}_M)_x(v)=v$ and $d\pi_1(d\gamma_x(v))=d f_x(v)=Df_xv$, so $T_{\gamma_f(x)}\Gamma_f=\{(v,Df_xv):v\in T_xM\}$. The same computation for $\delta_M$ gives $T_{(x,x)}\Delta_M=\{(v,v):v\in T_xM\}$. [given, F1, L1]

2.1 The sum of the two tangent spaces. Writing vectors of the splitting as pairs, a pair $(a,b)$ lies in $T_{\gamma_f(x)}\Gamma_f+T_{(x,x)}\Delta_M$ exactly when there are $u,v\in T_xM$ with $(a,b)=(v,Df_xv)+(u,u)=(u+v,u+Df_xv)$, i.e. exactly when $b-a=(Df_x-I)v$ is in the image of $Df_x-I$. Hence the sum is all of $T_xM\oplus T_xM$ if and only if $Df_x-I$ is surjective; as an endomorphism of the finite-dimensional space $T_xM$ this holds if and only if $Df_x-I$ is invertible by [L3], and $Df_x-I$ is invertible if and only if $I-Df_x$ is. [step 1.1, L2, L3]

3.1 Conclusion. For a fixed point $x$, clause (i) holds if and only if the sum of step 2.1 is the whole tangent space, i.e. if and only if $I-Df_x$ is invertible, which is clause (ii), and this is the definition of nondegeneracy, clause (iii). If $x\notin\operatorname{Fix}(f)$, then $\gamma_f(x)=(x,f(x))\notin\Delta_M$ because $f(x)\neq x$, so there is no point of $\Gamma_f\cap\Delta_M$ over $x$ and the transversality condition at $\gamma_f(x)$ is vacuous; the equivalence for the graph map therefore reduces to the fixed points, giving the stated global criterion. No orientation of $M$, no metric and no choice principle is used. [step 2.1, given] ∎
