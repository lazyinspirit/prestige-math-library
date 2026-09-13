---
id: thm-quotient-manifold-by-a-closed-lie-subgroup
kind: theorem
title: Quotient manifold by a closed Lie subgroup
status: published
origin: pipeline
pipeline_run: phase-2-next-21
landmark: true
deps: [def-countable-choice, thm-cartans-closed-subgroup-theorem, thm-smooth-inverse-function-theorem-on-manifolds, lem-finite-dimensional-subspace-admits-a-linear-projection-without-choice, def-quotient-topology, thm-quotient-universal-property, lem-open-or-closed-surjection-is-quotient, thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero, thm-constant-rank-theorem-for-manifolds]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Homogeneous Space Construction Theorem 21.17 and complete proof, printed pages 551–552
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Theorem 4.1 and quotient-chart construction, printed page 28
verification:
  audited: 2026-09-14
  precheck: pass
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. If $H$ is a closed subgroup of a
finite-dimensional real Lie group $G$, then the left-coset space $G/H$, with
its quotient topology, has a unique smooth manifold structure for which

$$q:G\longrightarrow G/H,\qquad q(g)=gH,$$

is a surjective submersion and the left $G$-action is smooth. Moreover,
$\dim(G/H)=\dim G-\dim H$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a finite-dimensional real Lie group $G$, and
a closed subgroup $H\le G$.

[A1] Under countable choice, $H$ has its unique embedded Lie-subgroup
structure. [[def-countable-choice]], [[thm-cartans-closed-subgroup-theorem]].

[F1] A finite-dimensional subspace admits a linear projection, without any
additional choice. [[lem-finite-dimensional-subspace-admits-a-linear-projection-without-choice]].

[F2] A smooth map with invertible differential is a local diffeomorphism.
[[thm-smooth-inverse-function-theorem-on-manifolds]].

[F3] The exponential map is smooth and has identity differential at zero.
[[thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero]].

[F4] Quotient topology, open quotient maps, and factorization through a
quotient are available. [[def-quotient-topology]],
[[lem-open-or-closed-surjection-is-quotient]],
[[thm-quotient-universal-property]].

[F5] A smooth submersion has local projection form and therefore admits a
smooth local section near each point in its image; a surjective submersion
therefore has such a section near every target point.
[[thm-constant-rank-theorem-for-manifolds]].

## Proof

**Proof technique:** local complements and translated quotient charts.

1.1 By [A1], put $\mathfrak g=T_eG$ and $\mathfrak h=T_eH$. By [F1], choose a linear projection of $\mathfrak g$ onto $\mathfrak h$ and put $\mathfrak m$ equal to its kernel, so $\mathfrak g=\mathfrak m\oplus\mathfrak h$. [A1, F1]

1.2 Give $G/H$ the quotient topology. The map $q$ is open, since $q^{-1}(q(O))=OH=\bigcup_{h\in H}Oh$ for every open $O\subseteq G$. It is Hausdorff: the orbit relation $R=\{(g_1,g_2):g_1^{-1}g_2\in H\}$ is closed, and for two inequivalent points choose a product neighborhood $O_1\times O_2$ disjoint from $R$; the open sets $q(O_1)$ and $q(O_2)$ are then disjoint. Images of a countable basis of $G$ form a countable basis of $G/H$. [given, F4, algebra]

2.1 Define $\Psi:\mathfrak m\times H\to G$ by $\Psi(X,h)=\exp(X)h$. By [F3], its differential at $(0,e)$ is $(X,Y)\mapsto X+Y$, an isomorphism by step 1.1. By [F2], after restricting to neighborhoods $W\subseteq\mathfrak m$ and $V\subseteq H$, $\Psi$ is a diffeomorphism $W\times V\to U$, where $U$ is an identity neighborhood. [F2, F3, step 1.1]

3.1 Shrink $W$ and $U$ so that if $X,Y\in W$ and $\exp(X)^{-1}\exp(Y)\in H$, then this element lies in $V$. This is possible by continuity at $(0,0)$. Uniqueness in the product chart then gives $X=Y$. Hence $S=\exp(W)$ meets each left coset represented in $U$ exactly once. Also $q(U)=q(S)$, because $\Psi(X,h)H=\exp(X)H$. [step 2.1, algebra]

4.1 The bijection $q|_S:S\to q(U)$ from step 3.1 is a homeomorphism. Indeed, $q|_S$ is continuous. If $A=\exp(B)\subseteq S$ is open, with $B\subseteq W$ open, then $\Psi(B\times V)$ is open in $G$ and has quotient image exactly $q(A)$; openness of $q$ from step 1.2 makes $q(A)$ open. Thus $X\mapsto\exp(X)H$ is a chart from $W$ onto $q(U)$. In this chart and the product chart of step 2.1, $q$ is $(X,h)\mapsto X$. [step 1.2, step 2.1, step 3.1]

5.1 Translate this chart: for $g\in G$, use $gS$ over $q(gU)$. Fix a coset in $q(gU)\cap q(g'U)$, represented in the first chart by $z=g\exp(X_0)$. Since its coset is also represented in $g'U$, there is $h_0\in H$ with $zh_0\in g'U$. The set $g'U$ is open, so for $X$ in a neighbourhood of $X_0$ inside the first chart, $g\exp(X)h_0\in g'U$. Apply the inverse of the translated product diffeomorphism $g'\Psi:W\times V\to g'U$ to this smooth representative and take its $\mathfrak m$-component. Right multiplication by the fixed $h_0$ does not change the coset, so this component is exactly the second-chart coordinate of $q(g\exp X)$. It is smooth near $X_0$; reversing the roles of $g,g'$ proves the reverse transition smooth. These charts therefore form a smooth atlas. By step 4.1, $q$ is locally a projection and hence a surjective submersion of rank $\dim\mathfrak m$. Thus $\dim(G/H)=\dim\mathfrak m=\dim G-\dim H$. [step 2.1, step 4.1, construct, algebra]

6.1 The action map $a:G\times G/H\to G/H$ is smooth. Near any $(g_0,x_0)$, choose a local smooth section $s$ of $q$ around $x_0$ from step 5.1. There $a(g,x)=q(gs(x))$, a composite of smooth maps. This expression is independent of the lift because $q(gsh)=q(gs)$. [step 5.1, algebra]

7.1 Suppose another smooth structure with the same quotient topology makes $q$ a surjective submersion. By [F5], that submersion and the constructed one have smooth local sections. On a neighborhood carrying a section $s$ of the constructed quotient, the identity from the constructed quotient to the other one is $q_{\rm other}\circ s$; using a section $s'$ of the other quotient gives $q_{\rm constructed}\circ s'$ in the reverse direction. Hence the identity is a diffeomorphism, proving uniqueness. If $H=G$ the quotient is a point; if $H=\{e\}$ the construction recovers $G$. Disconnected and zero-dimensional groups are included. Countable choice is used through [A1] and [F3]. The finite-dimensional projection, inverse-function, quotient-topology, and constant-rank arguments add no choice. [A1, F3, F5, step 5.1] ∎
