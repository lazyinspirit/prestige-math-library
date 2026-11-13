---
id: prop-geodesic-additivity-artin-tits-normalisers
kind: proposition
title: Geodesics are exactly length-additive wall words
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-chamber-paths-artin-tits-normalisers
  - def-geodesic-path-artin-tits-normalisers
  - def-simple-wall-crossing-artin-tits-normalisers
  - prop-adjacent-wall-formula-artin-tits-normalisers
  - lem-wall-length-halfspace-artin-tits-normalisers
  - lem-translate-path-artin-tits-normalisers
  - prop-gallery-separation-interface-artin-tits-prerequisites
  - def-relative-cone-artin-tits-normalisers
  - prop-relative-stratification-artin-tits-normalisers
  - prop-relative-local-finiteness-artin-tits-normalisers
dependency_roles:
  def-coxeter-data-artin-tits-normalisers: mathematical-premise
  def-chamber-paths-artin-tits-normalisers: mathematical-premise
  def-geodesic-path-artin-tits-normalisers: mathematical-premise
  def-simple-wall-crossing-artin-tits-normalisers: mathematical-premise
  prop-adjacent-wall-formula-artin-tits-normalisers: mathematical-premise
  lem-wall-length-halfspace-artin-tits-normalisers: mathematical-premise
  lem-translate-path-artin-tits-normalisers: mathematical-premise
  prop-gallery-separation-interface-artin-tits-prerequisites: mathematical-premise
  def-relative-cone-artin-tits-normalisers: mathematical-premise
  prop-relative-stratification-artin-tits-normalisers: mathematical-premise
  prop-relative-local-finiteness-artin-tits-normalisers: mathematical-premise
formulation_deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-chamber-paths-artin-tits-normalisers
  - def-geodesic-path-artin-tits-normalisers
  - def-simple-wall-crossing-artin-tits-normalisers
  - def-relative-cone-artin-tits-normalisers
argument_deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-chamber-paths-artin-tits-normalisers
  - def-geodesic-path-artin-tits-normalisers
  - def-simple-wall-crossing-artin-tits-normalisers
  - prop-adjacent-wall-formula-artin-tits-normalisers
  - lem-wall-length-halfspace-artin-tits-normalisers
  - lem-translate-path-artin-tits-normalisers
  - prop-gallery-separation-interface-artin-tits-prerequisites
  - def-relative-cone-artin-tits-normalisers
  - prop-relative-stratification-artin-tits-normalisers
  - prop-relative-local-finiteness-artin-tits-normalisers
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF pp. 13–14, Proposition 3.29
      statement: A relative chamber path is geodesic if and only if the length of its
        wall word element is the sum of the lengths of its simple wall-crossing
        elements.
      hypotheses: The finite-rank Coxeter-system and relative chamber arrangement
        conventions of the article; the path has consecutively adjacent
        chambers.
      reading_limits: The frozen extracted article text at Proposition 3.29 and its
        proof was read, and frozen PDF pages 13–14 were visually inspected in
        this repair. The citation attributes the claim and is not used as a
        proof premise.
dependency_level: 18
---

## Statement

Let $(W,S)$ be a finite-rank Coxeter system with vertex set $\Gamma_0$, and fix $J\subseteq\Gamma_0$. In its relative chamber arrangement, let $p=((x_1,I_1),\ldots,(x_m,I_m))$ be a nonempty chamber path. For each consecutive pair let $a_i$ be its crossing index and $v_{a_i,I_i}\in W$ its simple wall-crossing element. Put $v_p=v_{a_1,I_1}\cdots v_{a_{m-1},I_{m-1}}$, with the empty product equal to the identity. Write $\ell(w)$ for the least length of a word in the simple generators representing $w$.

The path $p$ is geodesic, meaning that its number of crossings is minimal among paths with the same endpoints, if and only if $\ell(v_p)=\sum_{i=1}^{m-1}\ell(v_{a_i,I_i})$. The empty sum is zero.

## Statement references

[[def-relative-cone-artin-tits-normalisers]]

[[def-coxeter-data-artin-tits-normalisers]]

[[def-chamber-paths-artin-tits-normalisers]]

[[def-geodesic-path-artin-tits-normalisers]]

[[def-simple-wall-crossing-artin-tits-normalisers]]

## Facts & Assumptions


[F1] The relative space $E=\Theta_J$, cone $\mathrm{Cone}(J)$ and distinct relative hyperplanes $\mathcal H^J$ are specified by [[def-relative-cone-artin-tits-normalisers]]. The space $E$ is finite-dimensional by finite rank. The relative cone is convex by [[prop-relative-stratification-artin-tits-normalisers]], so its interior $T=\mathrm{Cone}(J)^\circ$ is open and convex in $E$: equal-radius balls about two interior points give equal-radius balls about their convex combinations. The arrangement is locally finite on $T$ by [[prop-relative-local-finiteness-artin-tits-normalisers]]; hyperplanes missing $T$ do not affect its chambers or crossings. Thus the gallery interface applies. A path crosses each distinct relative hyperplane at most once exactly when it is geodesic. Each adjacency crosses a unique relative hyperplane, and an adjacency changes the side of that hyperplane and no other. The side-change assertion is established in the gallery interface's adjacency argument, step 3.1. [[def-geodesic-path-artin-tits-normalisers]] [[prop-gallery-separation-interface-artin-tits-prerequisites]]

[F2] For a crossing from $(x,I)$ with index $a$, its target has first coordinate $xv_{a,I}$, and its relative supporting hyperplane is the trace of $H_{x\alpha_a}=\{f:f(x\alpha_a)=0\}$. The relevant crossing component is finite. The adjacent-wall formula supplies the common wall, and relative stratification identifies its supporting hyperplane. [[def-simple-wall-crossing-artin-tits-normalisers]] [[prop-adjacent-wall-formula-artin-tits-normalisers]] [[prop-relative-stratification-artin-tits-normalisers]]

[F3] For such a crossing, $\ell(xv_{a,I})=\ell(x)+\ell(v_{a,I})$ exactly when the base chamber $(e,J)$ and $(x,I)$ lie on the same side of its supporting hyperplane. [[lem-wall-length-halfspace-artin-tits-normalisers]]

[F4] Translation by the inverse of the first coordinate of a starting label $(z,L)$ bijects its relative arrangement with that for $L$, sends $(z,L)$ to $(e,L)$, preserves and reflects geodesicity, and preserves every crossing index and crossing element. [[lem-translate-path-artin-tits-normalisers]]

[F5] Word length is the minimum number of simple generators in a representing word; concatenating such words gives $\ell(uv)\leq\ell(u)+\ell(v)$ and $\ell(e)=0$. [[def-coxeter-data-artin-tits-normalisers]]

## Proof


**Given:** The finite-rank Coxeter system, relative arrangement and path in the Statement. A relative hyperplane separates two chambers when they lie in its opposite open half-spaces.

**Proof technique:** direct.

**Goal:** Prove the stated equivalence, including the one-chamber case.

1.1 First suppose $p$ starts at $(e,J)$. Write $v_i=v_{a_i,I_i}$ and $u_k=v_1\cdots v_k$ for $0\leq k\leq m-1$, with $u_0=e$. Repeatedly applying the target formula in [F2] gives $x_{k+1}=u_k$. Let $H_k$ be the relative hyperplane crossed at the $k$th adjacency. A prefix ending at $(x_k,I_k)$ is geodesic exactly when it has crossed no hyperplane twice. If that prefix is geodesic, it has crossed $H_k$ either zero or one time; by the side-change property in [F1], it has crossed it zero times exactly when its endpoint and the base chamber lie on the same side of $H_k$. Thus the prefix through the $k$th crossing is geodesic exactly when the preceding prefix is geodesic and the side condition in [F3] holds. [F1, F2, F3, given]

2.1 By induction on $k$, step 1.1 and [F3] show that the prefix through crossing $k$ is geodesic exactly when $\ell(u_i)=\ell(u_{i-1})+\ell(v_i)$ for every $1\leq i\leq k$. The initial one-chamber prefix is geodesic and has $u_0=e$. By [F5], every difference $\ell(u_{i-1})+\ell(v_i)-\ell(u_i)$ is nonnegative. Their sum is $\sum_{i=1}^k\ell(v_i)-\ell(u_k)$, since $\ell(u_0)=0$. Consequently all the individual equalities hold exactly when $\ell(u_k)=\sum_{i=1}^k\ell(v_i)$. This proves the claim for paths starting at the base chamber, including $k=0$. [F3, F5, step 1.1]

3.1 For a path starting at $(z,L)$, apply [F4]. The translated path starts at $(e,L)$, is geodesic exactly when $p$ is, and has the same ordered crossing elements. Its wall word and the sum of their lengths are therefore the same as those of $p$, including the empty-product case. Applying step 2.1 to the translated path proves the equivalence for $p$. [F4, step 2.1] ∎

## Source notes

The article reference attributes the proposition. The proof uses the declared local suppliers and does not use the proposition itself as a premise.
