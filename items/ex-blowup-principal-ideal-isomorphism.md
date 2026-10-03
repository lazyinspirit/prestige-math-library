---
id: ex-blowup-principal-ideal-isomorphism
kind: example
title: "Blowing up a principal ideal of a nonzerodivisor does nothing"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - thm-blowup-effective-cartier-divisor-isomorphism
  - thm-affine-blowup-standard-charts
  - def-blowup-scheme-along-ideal
  - def-effective-cartier-divisor
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
      locator: "Lemma 31.33.7 (blowup in an effective Cartier divisor is the identity)"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "19.2.4 locally principal centers, p. 382"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Example

Let $A$ be a ring and let $f\in A$ be a nonzerodivisor. Then the blowup of
$\operatorname{Spec}A$ along the principal ideal $(f)$ is
$\operatorname{Spec}A$ itself: the ideal sheaf $\widetilde{(f)}$ is
invertible and defines an effective Cartier divisor, and the single standard
chart of the blowup has coordinate ring
$A[(f)/f]=\bigl(R((f))\bigr)_{(ft)}=A$. All charts agree, because a principal
ideal has a one-element generating family. Geometrically, blowing up an
effective Cartier divisor, for example a $k$-rational point of a regular
curve or a line in the plane, gives back the same scheme.

## Facts & Assumptions

**Given:** A ring $A$, a nonzerodivisor $f\in A$, the principal ideal
$I=(f)\subseteq A$, the closed subscheme $D=V(I)\subseteq\operatorname{Spec}A$,
and the blowup $\pi\colon\operatorname{Bl}_I\operatorname{Spec}A\to
\operatorname{Spec}A$ of [[def-blowup-scheme-along-ideal]].

[A1] **Choice.** The Axiom of Choice is inherited from the relative Proj
construction used to form the blowup; no further choice is used below.

[F1] [[def-effective-cartier-divisor]]: A Cartier divisor $D$ on a scheme $X$
is **effective** if it has a local-equation representation $(U_i,f_i)$ with $f_i\in\mathcal O_X(U_i)$ and with multiplication
by the germ $(f_i)_x$ injective on $\mathcal O_{X,x}$ for every $x\in U_i$;
the local principal ideal sheaves $f_i\mathcal O_{U_i}$ agree on overlaps and
define the ideal sheaf $\mathcal I_D$ of $D$. A unit equation gives the zero
Cartier divisor, the **empty effective divisor**, with ideal sheaf
$\mathcal O_X$ and empty vanishing subscheme.

[F2] [[def-blowup-scheme-along-ideal]]: Let $X$ be a scheme and let
$\mathcal I\subseteq\mathcal O_X$ be a quasi-coherent ideal sheaf of finite
type, with zero scheme
$Z=V(\mathcal I)$, the closed subscheme of $X$ cut out by $\mathcal I$. The
blowup of $X$ along $\mathcal I$ is the $X$-scheme
$\operatorname{Bl}_{\mathcal I}X:=\operatorname{Proj}_X\mathcal R(\mathcal I)$,
the relative Proj of the Rees algebra sheaf
$\mathcal R(\mathcal I)=\bigoplus_{n\ge0}\mathcal I^n$, equipped with its
structural morphism $\pi$ to $X$.

[F3] [[thm-blowup-effective-cartier-divisor-isomorphism]]: The blowup of a
scheme along an invertible ideal sheaf, equivalently along an effective
Cartier divisor, is the identity: its structural morphism is an isomorphism.

[F4] [[thm-affine-blowup-standard-charts]]: Let $A$ be a ring,
$I=(f_0,\dots,f_r)\subseteq A$, $S=R(I)=\bigoplus I^nt^n$ and
$B_i=A[I/f_i]=\bigl(S[(f_it)^{-1}]\bigr)_0$. The standard opens
$U_i=D_+(f_it)=\operatorname{Spec}B_i$ cover
$\operatorname{Bl}_I\operatorname{Spec}A$.

## Verification

1.1 In the notation of the given data, multiplication by $f$ defines an $A$-module map $A\to I$ that is surjective because $I=(f)$, and injective because $f$ is a nonzerodivisor; it is therefore an isomorphism, so $I$ is a free $A$-module of rank one and the ideal sheaf $\widetilde I$ is invertible. The same nonzerodivisor condition says that $f$, read as the global local equation of $D=V(I)$ on $\operatorname{Spec}A$, is a regular section, so $D$ is an effective Cartier divisor with ideal sheaf $\mathcal I_D=\widetilde I$. [F1, given]

2.1 By step 1.1 the ideal sheaf $\widetilde I$ is invertible, equivalently $D$ is an effective Cartier divisor with that ideal sheaf, so [F3] applies to the blowup of $\operatorname{Spec}A$ along $I$ and shows that $\pi\colon\operatorname{Bl}_I\operatorname{Spec}A\to\operatorname{Spec}A$ is an isomorphism. [F3, step 1.1]

3.1 Independently of step 2.1, compute the chart: since $I=(f)$, the Rees algebra is $R(I)=\bigoplus_{n\ge0}(f)^nt^n=A[ft]$, and the generating family $(f)$ has the single element $f$, so the standard chart $D_+(ft)$ of the blowup is $\operatorname{Spec}B_0$ with $B_0=A[I/f]=(A[ft][(ft)^{-1}])_0$. An element of $A[ft][(ft)^{-1}]=A[ft,(ft)^{-1}]$ is a finite sum $\sum_{k\in\mathbb Z}a_k(ft)^k$ with $a_k\in A$; it has degree zero exactly when $a_k=0$ for every $k\ne0$, so $B_0=A$ and $A[(f)/f]=A$. The chart $D_+(ft)$ covers the whole blowup, so there are no other charts to compare. [F2, F4]

4.1 Steps 2.1 and 3.1 agree: the blowup is $\operatorname{Spec}A$ with identity structural morphism, and its single affine blowup algebra is $A[(f)/f]=A$. The geometric instances named in the statement are covered by the same computation: the ideal of a $k$-rational point of a regular curve is generated at that point by a uniformizer, hence by a nonzerodivisor equation of an effective Cartier divisor, and the ideal of a line in the plane is generated by a linear form, again a nonzerodivisor; blowing up either changes nothing. [F1, step 2.1, step 3.1] ∎
