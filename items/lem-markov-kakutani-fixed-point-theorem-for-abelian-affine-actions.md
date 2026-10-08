---
id: lem-markov-kakutani-fixed-point-theorem-for-abelian-affine-actions
kind: lemma
title: The Markov-Kakutani fixed point theorem for abelian affine actions
status: draft
origin: pipeline
dependency_level: 0
deps:
  - def-axiom-of-choice
  - thm-hahn-banach-dominated-extension
  - def-hahn-banach-extension-principle-relative
  - def-group
  - def-topological-group
  - def-continuous-map-top
  - def-vector-space
  - def-topological-vector-space-for-local-convexity
  - def-locally-convex-topological-vector-space
  - def-hausdorff-space
  - def-subspace-topology-top
  - def-compact-space
  - thm-compact-iff-fip
  - thm-compactness-under-continuous-maps
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - thm-locally-convex-continuous-dual-separates-points
  - def-finite-sum
  - lem-finite-sum-laws
  - def-natural-numbers
  - thm-recursion
  - thm-induction-principle
  - lem-of-naturals-positive
  - lem-of-inverse-positive
  - cor-archimedean-reciprocal
proof_strategy: direct
axiom_use: >-
  Full AC is used only through the Zorn-based real Hahn-Banach dominated
  extension theorem to supply the HB hypothesis for the final continuous-dual
  separation of x_0 and gx_0. The averages, finite-intersection argument, and
  estimates use no choice.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G, Theorem G.2.1 and complete proof (printed pp. 450–451); the source states locally convex, while this item spells out Hausdorffness because the library defines it separately and the proof uses continuous-dual separation"
---

## Statement

Assume the Axiom of Choice. Let $G$ be an abelian topological group, and let
$X$ be a nonempty compact convex subset of a Hausdorff locally convex real or
complex topological vector space $V$. Suppose $G$ acts continuously on $X$;
write $gx$ for the action, with $e x=x$ and $(gh)x=g(hx)$. Each action map is
affine in the finite-combination sense: for $x_0,\dots,x_n\in X$ and real
$t_i\ge0$ with $\sum_{i=0}^n t_i=1$,
$$g\left(\sum_{i=0}^n t_i x_i\right)=\sum_{i=0}^n t_i(gx_i).$$
Then there exists $x_0\in X$ with $gx_0=x_0$ for every $g\in G$.

## Facts & Assumptions

**Given:** The Axiom of Choice, an abelian topological group $G$, a Hausdorff locally convex topological vector space $V$, a nonempty compact convex subset $X\subseteq V$, and the continuous affine action in the Statement.

[A1] Under the Axiom of Choice, the real dominated-extension theorem proves the relative Hahn-Banach principle HB ([[def-axiom-of-choice]], [[thm-hahn-banach-dominated-extension]], [[def-hahn-banach-extension-principle-relative]]).

[F1] Addition and scalar multiplication in $V$ are continuous; convexity is defined by finite convex combinations ([[def-topological-vector-space-for-local-convexity]], [[def-locally-convex-topological-vector-space]]).

[F2] A continuous image of a compact space is compact; $X$ is Hausdorff as a subspace of the Hausdorff space $V$, so a compact subset of $X$ is closed in $X$; and a family of closed subsets of compact $X$ with the finite-intersection property has nonempty intersection ([[thm-compactness-under-continuous-maps]], [[def-subspace-topology-top]], [[def-hausdorff-space]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[thm-compact-iff-fip]]).

[F3] In a Hausdorff locally convex space, HB implies that the continuous dual separates distinct points by the real part of a functional ([[thm-locally-convex-continuous-dual-separates-points]]).

[F4] A continuous real-valued function on a nonempty compact space is bounded and attains its extrema ([[thm-compactness-under-continuous-maps]]).

[F5] For a vector sequence, define its finite sums recursively by $S_0=v_0$ and $S_{k+1}=S_k+v_{k+1}$; vector-space axioms and induction give distributivity and reindexing of finite sums. Real finite sums obey additivity, scaling, and telescoping. The canonical natural $n+1$ is positive, its reciprocal is positive, and reciprocals decrease as positive denominators increase ([[def-vector-space]], [[thm-recursion]], [[thm-induction-principle]], [[def-finite-sum]], [[lem-finite-sum-laws]], [[def-natural-numbers]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[F6] For every real $\varepsilon>0$ there is a natural $n\ge1$ with $1/n<\varepsilon$ ([[cor-archimedean-reciprocal]]).

## Proof

**Proof technique:** direct.

1.1 For $g\in G$ and $n\in\mathbb N$, define $g^0x=x$, $g^{i+1}x=g(g^ix)$, and $A_n(g)x:=\frac1{n+1}\sum_{i=0}^n g^i x$, with vector-valued finite sums as in [F5]. Since $1/(n+1)>0$ and the sum of the $n+1$ equal coefficients is $(n+1)/(n+1)=1$, convexity makes $A_n(g)$ a self-map of $X$. The action iterates are continuous and affine by induction. For any finite convex combination $y=\sum_\ell t_\ell y_\ell$, their affine identities and finite sum distributivity give $A_n(g)y=\frac1{n+1}\sum_i\sum_\ell t_\ell g^i y_\ell =\sum_\ell t_\ell A_n(g)y_\ell$; hence $A_n(g)$ is affine. Continuity follows from the TVS addition and scalar-multiplication maps and the continuity of the action iterates. [F1, F5, given]

2.1 Let $\Gamma$ be the monoid of finite compositions of the maps $A_n(g)$, including the identity. For $g,h\in G$, affinity and the action law give $A_n(g)A_m(h)x=\frac1{(n+1)(m+1)}\sum_{i=0}^n\sum_{j=0}^m g^ih^jx$ and $A_m(h)A_n(g)x=\frac1{(n+1)(m+1)}\sum_{j=0}^m\sum_{i=0}^n h^jg^ix$. Because $G$ is abelian, $g^ih^j=h^jg^i$; associativity and commutativity of vector addition and scalar distributivity reorder the finite sums, so the two maps commute. Therefore $\Gamma$ is abelian, and every member is a continuous self-map of $X$. [F1, F5, step 1.1, given, algebra]

3.1 For every $\gamma\in\Gamma$, the image $\gamma(X)$ is nonempty and compact by [F2], hence closed in $X$ by [F2]. Given a nonempty finite list $\gamma_1,\dots,\gamma_k\in\Gamma$, their composition $\gamma:=\gamma_1\cdots\gamma_k$ lies in $\Gamma$; commutativity lets us write $\gamma=\gamma_i\circ\gamma_i'$ for each $i$ with $\gamma_i'$ the composition of the other factors, using the identity when $k=1$. Thus the nonempty set $\gamma(X)$ lies in every $\gamma_i(X)$. The empty finite intersection is $X\ne\varnothing$, so $\{\gamma(X):\gamma\in\Gamma\}$ has the finite intersection property, and compactness of $X$ gives $x_0\in\bigcap_{\gamma\in\Gamma}\gamma(X)$. [F2, step 2.1]

4.1 Fix $g\in G$ and suppose $v:=x_0-gx_0\ne0$. By [A1] and [F3], choose a continuous linear functional $\varphi\in V'$ whose real part $\psi:=\operatorname{Re}\varphi$ satisfies $\psi(v)\ne0$. The continuous real-valued function $\psi$ is bounded on compact $X$ by [F4]; fix $C\ge0$ with $|\psi(y)|\le C$ for every $y\in X$. [A1, F3, F4, step 3.1]

5.1 For every $n\in\mathbb N$, membership $x_0\in A_n(g)(X)$ gives some $x\in X$ with $x_0=A_n(g)x$. Affinity of the action and real-linearity of $\psi$ yield $\psi(v)=\bigl(\psi(x)-\psi(g^{n+1}x)\bigr)/(n+1)$ by telescoping, so $|\psi(v)|\le2C/(n+1)$. This bound is valid for every $n$; no sequence of preimages is chosen. If $C=0$, the bound gives $\psi(v)=0$ directly. If $C>0$, then for any $\varepsilon>0$, [F6] applied to $\varepsilon/(2C)>0$ gives $n\ge1$ with $1/n<\varepsilon/(2C)$. Since $n+1>n>0$, [F5] gives $1/(n+1)<1/n$, hence $|\psi(v)|\le2C/(n+1)<\varepsilon$. As this holds for every positive $\varepsilon$, $\psi(v)=0$, contradicting step 4.1. Therefore $gx_0=x_0$. Since $g$ was arbitrary, $x_0$ is fixed by all of $G$. [F5, F6, step 4.1, algebra] ∎
