---
id: thm-blowup-universal-property
kind: theorem
title: "Universal property of the blowup"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-blowup-scheme-along-ideal
  - def-exceptional-divisor-blowup
  - thm-pullback-center-ideal-invertible
  - thm-affine-blowup-standard-charts
  - lem-affine-blowup-chart-universal-property
  - lem-affine-blowup-algebra-properties
  - lem-blowup-local-on-base-scheme
  - def-scheme-theoretic-inverse-image-subscheme
  - def-effective-cartier-divisor
  - lem-morphism-schemes-local-on-source-target
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Lemma 31.33.2 (tag 0805, universal property of the blowup) and its proof"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "19.3 the blowup as Proj of the Rees algebra and its universal property, pp. 383-387"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $\mathcal I$ be a quasi-coherent ideal sheaf of finite type on $X$ with zero scheme $Z$, and let $\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$ be the blowup. For every $X$-scheme $f\colon Y\to X$ such that the inverse image $f^{-1}(Z)$ is an effective Cartier divisor on $Y$, there is a unique $X$-morphism $Y\to\operatorname{Bl}_{\mathcal I}X$. Equivalently, $\operatorname{Bl}_{\mathcal I}X$ is the final object of the category of $X$-schemes in which the inverse image of $Z$ is an effective Cartier divisor.

## Facts & Assumptions

**Given:** The Axiom of Choice, a quasi-coherent ideal sheaf $\mathcal I$ of finite type on $X$ with zero scheme $Z$, the blowup $\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$, and an $X$-scheme $f\colon Y\to X$ such that $f^{-1}(Z)$ is an effective Cartier divisor on $Y$.

[A1] **Choice.** The Axiom of Choice is assumed, as in the statement; the cited suppliers used below are stated under it.

[F1] [[lem-affine-blowup-chart-universal-property]]: Let $\varphi\colon A\to B$ be a ring map, $I\subseteq A$ an ideal and $a\in I$, and suppose the image $b=\varphi(a)$ is a nonzerodivisor in $B$ with $IB=bB$. Then there is a unique $A$-algebra homomorphism $A[I/a]\to B$ sending $x/a^n$ to the unique $y\in B$ with $x=b^ny$; equivalently, $\operatorname{Spec}B\to\operatorname{Spec}A[I/a]$ is the unique $A$-morphism into the chart along which the image of $a$ generates $I\mathcal O_{\operatorname{Spec}B}$.

[F2] [[thm-affine-blowup-standard-charts]]: If $I=(f_0,\dots,f_r)\subseteq A$ and $B_i=A[I/f_i]$, the standard opens $U_i=\operatorname{Spec}B_i$ cover $\operatorname{Bl}_I\operatorname{Spec}A$, with transition maps sending $u_{ij}=(f_jt)/(f_it)$ to $u_{ji}^{-1}=f_i/f_j$ on the overlaps.

[F3] [[def-blowup-scheme-along-ideal]]: $\operatorname{Bl}_{\mathcal I}X=\operatorname{Proj}_X\mathcal R(\mathcal I)$ with structural morphism $\pi$, and the blowup is local on the base: over an affine open $\operatorname{Spec}A$ with $\mathcal I=(f_0,\dots,f_r)$ it is covered by the charts $\operatorname{Spec}A[I/f_i]$.

[F4] [[def-scheme-theoretic-inverse-image-subscheme]]: For $f\colon Y\to X$ and the closed subscheme $Z=V(\mathcal I)$, the scheme-theoretic inverse image is $Y\times_XZ$, and the inverse-image ideal is $\operatorname{Im}(f^*\mathcal I\to\mathcal O_Y)$.

[F5] [[def-effective-cartier-divisor]]: A Cartier divisor is effective when it has a local-equation representation by regular sections $f_i\in\mathcal O_X(U_i)$; the local principal ideals $f_i\mathcal O_{U_i}$ glue to an ideal sheaf, and a unit equation represents the empty divisor.

[F6] [[lem-morphism-schemes-local-on-source-target]]: Compatible morphisms on an open cover glue uniquely, and two morphisms out of $Y$ are equal if their restrictions to an open cover are equal.

[F7] [[lem-affine-blowup-algebra-properties]]: The chart algebra $A[I/a]$ is the degree-zero part of the localization of $R(I)$ at $a$, with $I A[I/a]=aA[I/a]$, and $a$ a nonzerodivisor; for $I=(a_0,\dots,a_r)$, $a=a_0$, the chart receives a surjection $A[x_1,\dots,x_r]/(ax_i-a_i)\to A[I/a]$.

## Proof

1.1 Work locally. Cover $X$ by affine opens $U=\operatorname{Spec}A$ with $\mathcal I|_U=(f_0,\dots,f_r)$, and cover the part of $Y$ over $U$ by affine opens $V=\operatorname{Spec}B$ mapping to $U$; write $\varphi\colon A\to B$ for the map and $b_i=\varphi(f_i)$. By [F4] the inverse image of $Z$ meets $V$ in $V(IB)$, where $IB=(b_0,\dots,b_r)$ is the inverse-image ideal; by hypothesis this closed subscheme is an effective Cartier divisor, so by [F5] we may refine the cover and assume $IB=bB$ for some nonzerodivisor $b\in B$. Then $b_i=u_ib$ with $u_i\in B$, and $(u_0,\dots,u_r)=B$ because the $b_i$ generate $IB=bB$. [A1, F4, F5]

2.1 For each $i$, apply [F1] to the ring map $A\to B_{u_i}$ and the element $a=f_i$: the image of $f_i$ is $u_ib$, a nonzerodivisor in $B_{u_i}$ because $b$ is a nonzerodivisor and $u_i$ is a unit there, and $IB_{u_i}=bB_{u_i}=(u_ib)B_{u_i}$. Hence there is a unique $A$-algebra homomorphism $A[I/f_i]\to B_{u_i}$, i.e. a unique $U$-morphism $V_{u_i}\to\operatorname{Spec}A[I/f_i]$; by [F3] and [F2] the targets are exactly the standard charts of the blowup, so this gives an $X$-morphism $V_{u_i}\to\operatorname{Bl}_{\mathcal I}X$ over $U$. [F1, F2, F3, F7, step 1.1]

3.1 These local morphisms agree on the overlaps $V_{u_i}\cap V_{u_j}=V_{u_iu_j}$: both land in the ratio overlap of the two charts, whose identification is the transition map of [F2], and both send the common fraction $f_j/f_i$ to $b_j/b_i=u_j/u_i$, the same element of $B_{u_iu_j}$, so they define the same $U$-morphism into the glued blowup. By [F6] the compatible local morphisms glue uniquely to an $X$-morphism $g\colon Y\to\operatorname{Bl}_{\mathcal I}X$ with $\pi\circ g=f$. [F2, F6, step 2.1]

4.1 For uniqueness let $g,h\colon Y\to\operatorname{Bl}_{\mathcal I}X$ be $X$-morphisms. Fix a point of $Y$ and choose a neighbourhood $V=\operatorname{Spec}B$ as in step 1.1, so $IB=bB$ and the $u_i$ generate $B$; shrink further so that some $u_i$ is a unit on $V$. On $V$ the inverse-image ideal is generated by the image $u_ib$ of $f_i$, so by the characterizing property in [F1] both $g$ and $h$ factor through the chart $\operatorname{Spec}A[I/f_i]$, and the uniqueness clause of [F1] forces $g=h$ there; since $\{V_{u_i}\}$ is an open cover of $Y$, [F6] gives $g=h$ on $Y$. [F1, F6, step 3.1]

5.1 Therefore every $X$-scheme $f\colon Y\to X$ whose inverse image of $Z$ is an effective Cartier divisor admits exactly one $X$-morphism to $\operatorname{Bl}_{\mathcal I}X$, namely the glued morphism of step 3.1; the local construction is independent of the chosen affine covers and charts because it is characterized by the uniqueness just proved. Hence $\operatorname{Bl}_{\mathcal I}X$ is the final object of the category of $X$-schemes in which the inverse image of $Z$ is an effective Cartier divisor, and the blowup represents the functor of such $X$-schemes. [F2, step 4.1] ∎
