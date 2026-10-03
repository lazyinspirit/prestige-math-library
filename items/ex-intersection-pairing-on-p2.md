---
id: ex-intersection-pairing-on-p2
kind: example
title: "The intersection pairing on the projective plane"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - cor-degree-additive-proper-curve
  - cor-twist-exact-sequence-effective-divisor
  - def-axiom-of-choice
  - def-degree-invertible-sheaf-proper-dimension-one
  - def-divisor-intersection-number-on-smooth-projective-surface
  - def-effective-cartier-divisor
  - def-euler-characteristic-coherent-sheaf
  - def-integral-scheme
  - def-invertible-sheaf-of-cartier-divisor
  - def-relative-projective-space-standard-charts
  - def-section-zero-scheme-invertible-sheaf
  - def-twisting-sheaf-proj
  - lem-closed-immersion-projection-formula-invertible
  - lem-euler-characteristic-additive-short-exact
  - lem-global-section-effective-divisor
  - lem-invertible-sheaf-dual-tensor-inverse
  - thm-cohomology-projective-space-twisting-sheaves
  - thm-localisation-and-polynomial-extension-of-regular-rings
  - thm-affine-domain-dimension-transcendence-degree
  - thm-euler-characteristic-degree-shift-curve
  - thm-intersection-with-curve-as-degree-of-restriction
  - thm-projective-space-as-proj
  - thm-surface-intersection-product-bilinear-and-symmetric
  - thm-twisting-sheaf-invertible-standard-graded
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Varieties, Section 33.45 (Numerical intersections)"
      url: "https://stacks.math.columbia.edu/tag/0BEL"
---

## Example

Assume the Axiom of Choice, inherited through the Euler-characteristic and
cohomology suppliers ([[def-axiom-of-choice]]). Let $k$ be a field and let
$X=\mathbb P^2_k$ with its twisting sheaves $\mathcal O(d)$
([[def-twisting-sheaf-proj]], [[thm-twisting-sheaf-invertible-standard-graded]]).
Then
$$\mathcal O(d)\cdot\mathcal O(e)=de\qquad\text{for all }d,e\in\mathbb Z.$$
Consequently the class $l:=\mathcal O(1)$ of a line satisfies $l\cdot l=1$,
and for nonzero homogeneous forms $f,g$ of degrees $d,e\ge1$ with zero
schemes $C=Z(f)$, $D=Z(g)$ and $\mathcal O(C)\cong\mathcal O(d)$,
$\mathcal O(D)\cong\mathcal O(e)$ (effective Cartier divisors) one has
$C\cdot D=de$; in particular a line has $l\cdot l=1$, a smooth conic $C$ has
$C\cdot C=4$, and a line and a smooth conic meet with
$l\cdot C=2=\deg_l(\mathcal O(2)|_l)$. All values lie in $\mathbb Z$ and
agree with the restriction-degree theorem
[[thm-intersection-with-curve-as-degree-of-restriction]].

## Facts & Assumptions

**Given:** a field $k$, the projective plane $X=\mathbb P^2_k$ with twisting sheaves $\mathcal O(d)$, a line $l$, and nonzero homogeneous forms $f,g$ of degrees $d,e\ge1$ with zero schemes $C=Z(f)$, $D=Z(g)$.

[F1] $\mathbb P^2_k$ is an integral regular projective surface over $k$ of pure dimension two: its affine charts are spectra of polynomial domains in two variables over $k$, whose local rings are regular and whose dimension is two ([[thm-localisation-and-polynomial-extension-of-regular-rings]], [[thm-affine-domain-dimension-transcendence-degree]]), and the irreducible charts form a pairwise intersecting open cover ([[def-relative-projective-space-standard-charts]], [[thm-projective-space-as-proj]], [[def-integral-scheme]], [[def-divisor-intersection-number-on-smooth-projective-surface]]). Its twisting sheaves are invertible and satisfy $\mathcal O(m)\otimes\mathcal O(n)\cong\mathcal O(m+n)$ and $\mathcal O(-d)\cong\mathcal O(d)^{\vee}$ ([[thm-twisting-sheaf-invertible-standard-graded]], [[lem-invertible-sheaf-dual-tensor-inverse]]).

[F2] Cohomology of twists: on $\mathbb P^2_k$ the cohomology of $\mathcal O(m)$ vanishes except in degrees $0$ and $2$, with $H^0\cong k[x_0,x_1,x_2]_m$ for $m\ge0$ (dimension $\binom{m+2}{2}$), $H^0=0$ for $m<0$, and $H^2$ described by the negative Laurent monomials, nonzero exactly for $m\le-3$ with dimension $\binom{-m-1}{2}$ ([[thm-cohomology-projective-space-twisting-sheaves]], [[def-relative-projective-space-standard-charts]]). Consequently the Euler characteristic of [[def-euler-characteristic-coherent-sheaf]] satisfies $$\chi(X,\mathcal O(m))=\binom{m+2}{2}=\frac{(m+2)(m+1)}{2}\qquad\text{for every }m\in\mathbb Z.$$

[F3] Regular sections and divisors: on the integral scheme $X$ a nonzero global section of an invertible sheaf is regular, so its zero scheme is an effective Cartier divisor $Z(s)$ with $\mathcal O_X(Z(s))\cong\mathcal L$ ([[lem-global-section-effective-divisor]], [[def-section-zero-scheme-invertible-sheaf]], [[def-effective-cartier-divisor]], [[def-invertible-sheaf-of-cartier-divisor]]). For the nonzero form $f$ of degree $d\ge1$ the section $f\in\Gamma(X,\mathcal O(d))$ is nonzero and its zero scheme is $C$; likewise for $g$.

[F4] The restriction-degree theorem ([[thm-intersection-with-curve-as-degree-of-restriction]]): for effective Cartier divisors $C,D$ on the surface $X$ one has $C\cdot D=\deg_C(\mathcal O(D)|_C)$, where $\deg_C$ is the Euler-characteristic degree of [[def-degree-invertible-sheaf-proper-dimension-one]]. For the line $l=Z(x_0)\subseteq X$, which by [F3] is an effective Cartier divisor with associated line bundle $\mathcal O_X(l)\cong\mathcal O(1)$, with closed immersion $j:l\hookrightarrow X$, twisting the exact sequence of [[cor-twist-exact-sequence-effective-divisor]] gives $0\to\mathcal O(m-1)\to\mathcal O(m)\to j_*(\mathcal O(m)|_l)\to0$ for every $m\in\mathbb Z$; additivity of $\chi$ on short exact sequences of coherent modules ([[lem-euler-characteristic-additive-short-exact]]) and the closed-immersion projection formula $\chi(X,j_*\mathcal F)=\chi(l,\mathcal F)$ for coherent $\mathcal F$ on $l$ ([[lem-closed-immersion-projection-formula-invertible]]) therefore give $\chi(l,\mathcal O(m)|_l)=\chi(X,\mathcal O(m))-\chi(X,\mathcal O(m-1))=m+1$ by [F2], in particular $\deg_l(\mathcal O(2)|_l)=3-1=2$.

[F5] The intersection product on the integral regular projective surface $X$ is the symmetric $\mathbb Z$-bilinear pairing of [[thm-surface-intersection-product-bilinear-and-symmetric]], defined by the alternating sum of [[def-divisor-intersection-number-on-smooth-projective-surface]].

[F6] The Axiom of Choice enters through the cohomology and Euler-characteristic suppliers of [F2] and the curve-degree supplier of [F4]; no selection is made below.

## Verification

**Given:** a field $k$, the plane $X=\mathbb P^2_k$, integers $d,e$, and nonzero forms $f,g$ of degrees $d,e\ge1$ with zero schemes $C,D$.

1.1 The Euler characteristic of twists. By [F2] only the degrees $q=0$ and $q=2$ contribute to $\chi(X,\mathcal O(m))=\sum_q(-1)^q\dim_kH^q(X,\mathcal O(m))$; for $m\ge0$ one gets $\binom{m+2}{2}$, for $-2\le m\le -1$ all groups vanish and hence $\chi=0$, and for $m\le-3$ the term $(-1)^2\binom{-m-1}{2}$ equals $\binom{m+2}{2}$ by the identity $\binom{-m-1}{2}=\binom{m+2}{2}$ for those $m$. In all cases $\chi(X,\mathcal O(m))=\binom{m+2}{2}$. [F2]

1.2 Forms cut out effective divisors. The forms $f$ and $g$ are nonzero global sections of the invertible sheaves $\mathcal O(d)$ and $\mathcal O(e)$; since $X$ is integral, they are regular sections, so their zero schemes $C=Z(f)$ and $D=Z(g)$ are effective Cartier divisors with $\mathcal O(C)\cong\mathcal O(d)$ and $\mathcal O(D)\cong\mathcal O(e)$. [F1, F3]

2.1 The pairing of twists. By definition and [F1], $$\mathcal O(d)\cdot\mathcal O(e)=\chi(X,\mathcal O_X)-\chi(X,\mathcal O(-d))-\chi(X,\mathcal O(-e))+\chi(X,\mathcal O(-d-e)).$$ Substituting $\chi(X,\mathcal O(m))=\binom{m+2}{2}$ from step 1.1, this is $\frac{(2)(1)}{2}-\frac{(2-d)(1-d)}{2}-\frac{(2-e)(1-e)}{2}+\frac{(2-d-e)(1-d-e)}{2}$, and expanding, the numerator is $\bigl[2-(d^2-3d+2)\bigr]-\bigl[(e^2-3e+2)-((d+e)^2-3(d+e)+2)\bigr]=d(3-d)-d(3-d-2e)=2de$, so $\mathcal O(d)\cdot\mathcal O(e)=de$. In particular $l\cdot l=\mathcal O(1)\cdot\mathcal O(1)=1$. [F1, F5, step 1.1]

3.1 The divisor computation. By the definition of the pairing, $C\cdot D=\mathcal O(C)\cdot\mathcal O(D)$ for the effective Cartier divisors of step 1.2, and by [F1] the classes of $\mathcal O(C)$ and $\mathcal O(D)$ are those of $\mathcal O(d)$ and $\mathcal O(e)$; hence $C\cdot D=de$ by step 2.1. [F1, F5, step 1.2, step 2.1]

4.1 Specialisations and the independent cross-check. Taking $d=e=1$ and $f$ linear gives $l\cdot l=1$; taking $d=e=2$ and $g$ a nonzero quadratic form gives $C\cdot C=4$, in particular for a smooth conic. For the line $l=Z(x_0)$ and a conic $C=Z(g)$ of degree two, step 3.1 gives $l\cdot C=2$, and independently the restriction-degree theorem [F4] applied to the effective divisors $l$ and $C$ gives $l\cdot C=\deg_l(\mathcal O(2)|_l)=2$, since the twisting sequences of [F4] give $\chi(l,\mathcal O(2)|_l)=\chi(X,\mathcal O(2))-\chi(X,\mathcal O(1))=6-3=3$ and $\chi(l,\mathcal O_l)=\chi(X,\mathcal O)-\chi(X,\mathcal O(-1))=1-0=1$. Both computations agree, as asserted. [F4, step 2.1, step 3.1]

5.1 Conclusion and choice accounting. Steps 2.1 and 3.1 give $\mathcal O(d)\cdot\mathcal O(e)=de$ and $C\cdot D=de$, and step 4.1 records the line, conic and restriction-degree specialisations. The Axiom of Choice enters only through the cohomology and Euler-characteristic suppliers recorded in [F6]; the form $f$, the form $g$ and the line are given data, and steps 1.1–4.1 make no selection. [F6, step 2.1, step 3.1, step 4.1] ∎
