---
id: thm-blowup-universal-property
kind: theorem
title: "Universal property of the blowup"
status: published
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
      locator: "Lemma 31.33.5 (tag 0806), universal property, and Lemma 31.33.6 (tag 0BFL), chart membership"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "19.3 the blowup as Proj of the Rees algebra and its universal property, pp. 383-387"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-2.md"
      - "research/frontier-38-owner-30-alpha-batch-2-5a.md"
      - "research/frontier-38-owner-30-step5-hash-2-post-5a.json"
    content_sha256: "1008332242266e3501930c4e1b681ec0e81b59d781d0b5b9827b6ae3f8d8f6c2"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

Assume the Axiom of Choice. Let $\mathcal I$ be a quasi-coherent ideal sheaf of finite type on $X$ with zero scheme $Z$, and let $\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$ be the blowup. For every $X$-scheme $f\colon Y\to X$ such that the inverse image $f^{-1}(Z)$ is an effective Cartier divisor on $Y$, there is a unique $X$-morphism $Y\to\operatorname{Bl}_{\mathcal I}X$. Equivalently, $\operatorname{Bl}_{\mathcal I}X$ is the final object of the category of $X$-schemes in which the inverse image of $Z$ is an effective Cartier divisor.

## Facts & Assumptions

**Given:** The Axiom of Choice, a quasi-coherent ideal sheaf $\mathcal I$ of finite type on $X$ with zero scheme $Z$, the blowup $\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$, and an $X$-scheme $f\colon Y\to X$ such that $f^{-1}(Z)$ is an effective Cartier divisor on $Y$.

[A1] **Choice.** The Axiom of Choice is assumed, as in the statement; the cited suppliers used below are stated under it.

[F1] [[lem-affine-blowup-chart-universal-property]]: Let $\varphi\colon A\to B$ be a ring map, $I\subseteq A$ an ideal and $a\in I$, and suppose the image $b=\varphi(a)$ is a nonzerodivisor in $B$ with $IB=bB$. Then there is a unique $A$-algebra homomorphism $A[I/a]\to B$ sending $x/a^n$ to the unique $y\in B$ with $x=b^ny$; equivalently, $\operatorname{Spec}B\to\operatorname{Spec}A[I/a]$ is the unique $A$-morphism into the chart along which the image of $a$ generates $I\mathcal O_{\operatorname{Spec}B}$.

[F2] [[thm-affine-blowup-standard-charts]]: If $I=(f_0,\dots,f_r)\subseteq A$ and $B_i=A[I/f_i]$, the standard opens $U_i=\operatorname{Spec}B_i$ cover $\operatorname{Bl}_I\operatorname{Spec}A$, with transition maps sending $u_{ij}=(f_jt)/(f_it)$ to $u_{ji}^{-1}=f_j/f_i$ on the overlaps.

[F3] [[def-blowup-scheme-along-ideal]]: $\operatorname{Bl}_{\mathcal I}X=\operatorname{Proj}_X\mathcal R(\mathcal I)$ with structural morphism $\pi$, and the blowup is local on the base: over an affine open $\operatorname{Spec}A$ with $\mathcal I=(f_0,\dots,f_r)$ it is covered by the charts $\operatorname{Spec}A[I/f_i]$.

[F4] [[def-scheme-theoretic-inverse-image-subscheme]]: For $f\colon Y\to X$ and the closed subscheme $Z=V(\mathcal I)$, the scheme-theoretic inverse image is $Y\times_XZ$, and the inverse-image ideal is $\operatorname{Im}(f^*\mathcal I\to\mathcal O_Y)$.

[F5] [[def-effective-cartier-divisor]]: A Cartier divisor is effective when it has a local-equation representation by regular sections $f_i\in\mathcal O_X(U_i)$; the local principal ideals $f_i\mathcal O_{U_i}$ glue to an ideal sheaf, and a unit equation represents the empty divisor.

[F6] [[lem-morphism-schemes-local-on-source-target]]: Compatible morphisms on an open cover glue uniquely, and two morphisms out of $Y$ are equal if their restrictions to an open cover are equal.

[F7] [[lem-affine-blowup-algebra-properties]]: The chart algebra $A[I/a]$ is the degree-zero part of the localization of $R(I)$ at $a$, with $I A[I/a]=aA[I/a]$, and $a$ a nonzerodivisor; for $I=(a_0,\dots,a_r)$, $a=a_0$, the chart receives a surjection $A[x_1,\dots,x_r]/(ax_i-a_i)\to A[I/a]$.

[F8] [[thm-pullback-center-ideal-invertible]]: The inverse-image center ideal on the blowup is invertible and locally generated by a nonzerodivisor; its zero scheme is an effective Cartier divisor.

## Proof

1.1 Work over an affine $U=\operatorname{Spec}A$ with $I=(f_0,\ldots,f_r)$. Cover its inverse image in $Y$ by affines $V=\operatorname{Spec}B$ on which $IB=\beta B$ with $\beta$ a nonzerodivisor. Write $b_i=\varphi(f_i)=u_i\beta$. A relation $\beta=\sum c_i b_i$ and cancellation of $\beta$ show $1=\sum c_i u_i$, so the $D(u_i)$ cover $V$. On each $D(u_i)$, $b_i$ is a nonzerodivisor generating the inverse-image ideal, and the affine chart property gives a map to chart $i$, sending $f_l/f_i$ to $u_l/u_i$. [F1, F3, F4, F5]

2.1 We first prove uniqueness for any two lifts on such a $V$. At a point $y\in D(u_i)$, any lift $h$ has image in some chart $j$; shrink around $y$ so it lands in that chart. There the pulled-back ideal is generated by $b_j$, since $IA[I/f_j]=f_jA[I/f_j]$. Since $b_i$ also generates $IB$ near $y$, write $b_i=v b_j$ and $b_j=w b_i$. Cancellation of the regular element $b_i$ gives $vw=1$. Thus the pullback of the ratio $f_i/f_j$ is a unit. A local ring map then puts $h(y)$ in the ratio open of chart $j$, which is its intersection with chart $i$. This holds at every $y\in D(u_i)$, so $h|_{D(u_i)}$ factors through chart $i$. The unique chart map of [F1] therefore determines any lift. Equality on this open cover proves local uniqueness. [F1, F2, F6, F7, step 1.1]

3.1 The maps constructed in step 1.1 agree on intersections by this local uniqueness, after refining intersections by affines on which the pulled-back ideal has a regular generator. The same argument compares constructions from different base affines and different local equations. They consequently glue to an $X$-morphism $Y\to\operatorname{Bl}_{\mathcal I}X$. Any two global lifts coincide on these local covers by step 2.1, hence coincide globally. [F6, step 1.1, step 2.1]

4.1 The blowup itself belongs to the specified category: its inverse image of $Z$ is effective Cartier by [F8]. Every object has exactly one morphism to it by step 3.1. This is precisely finality in that category. [F8, step 3.1] ∎
