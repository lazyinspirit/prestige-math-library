---
id: thm-plane-curve-arithmetic-genus
kind: theorem
title: "Arithmetic genus of a plane curve"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-projective-cohomology-finite-dimensional-field
  - def-axiom-of-choice
  - def-arithmetic-genus-proper-curve
  - def-coherent-module-scheme
  - def-euler-characteristic-coherent-sheaf
  - lem-closed-immersion-proper
  - lem-projective-hypersurface-cohomology-sequence
  - lem-proper-stable-composition
  - thm-cohomology-projective-space-twisting-sheaves
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-long-exact-sequence-sheaf-cohomology
  - thm-projective-space-proper-over-base
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
verification:
  audited: 2026-10-02
---

## Statement

Assume the Axiom of Choice for the hypersurface and cohomology-finiteness
routes below ([[def-axiom-of-choice]]); AC supplies Dependent Choice where
required by the proper cohomology route
([[thm-choice-implies-dependent-implies-countable-choice]]).
Let $k$ be a field, let $d\ge1$, and let $F\in k[T_0,T_1,T_2]$ be homogeneous
of degree $d$, with $i:X=V_+(F)\hookrightarrow\mathbb P^2_k$ the closed
subscheme cut out by $F$. Assume that $X$ is integral and its underlying
topological space has dimension one. No geometric-integrality or smoothness
hypothesis is imposed. Then
$H^0(X,\mathcal O_X)=k$ and the arithmetic genus of $X$ is
$$p_a(X)=1-\chi(\mathcal O_X)=\frac{(d-1)(d-2)}{2},$$
realized by an isomorphism
$H^1(X,\mathcal O_X)\cong k[T_0,T_1,T_2]_{d-3}$ with the degree-$(d-3)$ graded
piece of the polynomial ring, read as the zero space when $d\le2$.

## Facts & Assumptions
**Given:** The Axiom of Choice, a field $k$, an integer $d\ge1$, a nonzero homogeneous form $F$ of degree $d$, and the closed subscheme $i:X=V_+(F)\hookrightarrow\mathbb P^2_k$, with $X$ integral and its underlying topological space of dimension one.

[F1] For $n=2$, homogeneity of $F$ of degree $d>0$ gives a short exact sequence $0\to\mathcal O_{\mathbb P^2}(-d)\xrightarrow{\cdot F}\mathcal O_{\mathbb P^2}\to i_*\mathcal O_X\to0$ and hence a long exact sequence whose connecting maps give $H^q(X,\mathcal O_X)=0$ for every $q\ge1$ with $q\ne1$, an isomorphism $H^1(X,\mathcal O_X)\cong H^2(\mathbb P^2,\mathcal O(-d))$ (since $n=2\ge2$), which over the field $k$ is free of dimension $\binom{d-1}{2}$, and a degree-zero sequence $0\to H^0(\mathbb P^2,\mathcal O(-d))\to k\to H^0(X,\mathcal O_X)\to H^1(\mathbb P^2,\mathcal O(-d))\to0$. ([[lem-projective-hypersurface-cohomology-sequence]])

[F2] Under Choice, on $\mathbb P^2_A$ one has $H^q(\mathbb P^2_A,\mathcal O(m))=0$ unless $q=0$ or $q=2$; $H^0(\mathbb P^2_A,\mathcal O(m))$ is the degree-$m$ part of $A[T_0,T_1,T_2]$, which vanishes for $m<0$; and $H^2(\mathbb P^2_A,\mathcal O(m))$ is free on the Laurent monomials $T_0^{e_0}T_1^{e_1}T_2^{e_2}$ with $e_0,e_1,e_2<0$ and $e_0+e_1+e_2=m$, nonzero precisely when $m\le-3$ and $A\ne0$; in particular $H^1(\mathbb P^2_k,\mathcal O(-d))=0$, $H^2(\mathbb P^2_k,\mathcal O)=0$ and $H^0(\mathbb P^2_k,\mathcal O(-d))=0$. ([[thm-cohomology-projective-space-twisting-sheaves]])

[F3] A short exact sequence of abelian sheaves on a space $X$ induces a natural long exact sequence in sheaf cohomology, in which the connecting maps are the boundary maps; exactness holds at every term. ([[thm-long-exact-sequence-sheaf-cohomology]])

[F4] Under the Axiom of Choice, for any integral proper finite-type $k$-scheme whose underlying Noetherian topological space has dimension one, the arithmetic genus is $p_a(X)=1-\chi(\mathcal O_X)=h^1(X,\mathcal O_X)-h^0(X,\mathcal O_X)+1$. The Euler characteristic is defined for coherent sheaves on schemes proper over $k$; proper cohomology finiteness makes its terms finite-dimensional with only finitely many nonzero terms. AC supplies Dependent Choice where this cohomology-finiteness route requires it. ([[def-arithmetic-genus-proper-curve]], [[def-euler-characteristic-coherent-sheaf]], [[cor-projective-cohomology-finite-dimensional-field]], [[def-coherent-module-scheme]], [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]])

[F5] The morphism $\mathbb P^2_k\to\operatorname{Spec}k$ is proper; every closed immersion is proper; and a composite of proper morphisms is proper, so a closed subscheme of $\mathbb P^2_k$ is proper over $k$. ([[thm-projective-space-proper-over-base]], [[lem-closed-immersion-proper]], [[lem-proper-stable-composition]])

## Proof

**Proof technique:** direct; compute the long exact sequence of the structure sequence of the hypersurface and read off the two cohomology groups.

1.1 Properness. The closed immersion $i$ exhibits $X$ as a closed subscheme of $\mathbb P^2_k$ [F1]; since $\mathbb P^2_k\to\operatorname{Spec}k$ is proper and $i$ is proper, the composite $X\to\mathbb P^2_k\to\operatorname{Spec}k$ is proper [F5]. Thus $X$ is proper and of finite type over $k$, hence Noetherian; together with the given integrality and dimension-one hypothesis, the generalized arithmetic-genus and Euler-characteristic definitions of [F4] apply. No geometric-integrality or smoothness conclusion is needed. [F4, F5, given]

1.2 Dimension count. By [F1] the $k$-vector space $H^1(X,\mathcal O_X)$ is isomorphic to $H^2(\mathbb P^2_k,\mathcal O(-d))$, which by [F2] is free on the triples $(e_0,e_1,e_2)$ of negative integers with $e_0+e_1+e_2=-d$; writing $a_i=-e_i\ge1$ identifies these with the triples of positive integers summing to $d$, of which there are $\binom{d-1}{2}=\frac{(d-1)(d-2)}{2}$, the same count as in [F1] and equal to $0$ when $d\le2$. [F1, F2]

1.3 Degree zero. In the degree-zero sequence of [F1] one has $H^0(\mathbb P^2_k,\mathcal O(-d))=0$ because $d>0$, and $H^1(\mathbb P^2_k,\mathcal O(-d))=0$ since $H^1$ of every twist on $\mathbb P^2$ vanishes [F2]; hence $k\to H^0(X,\mathcal O_X)$ is an isomorphism and $H^0(X,\mathcal O_X)=k$. [F1, F2, F3]

1.4 Higher vanishing. By [F1] every $H^q(X,\mathcal O_X)$ with $q\ge1$ and $q\ne1$ vanishes, in particular $H^2(X,\mathcal O_X)=0$, and there are no terms above degree two on $\mathbb P^2$; so the Euler characteristic of [F4] is the alternating sum of $h^0$, $h^1$ and $h^2=0$, a finite sum. [F1, F4]

2.1 Degree one. Combining the isomorphism $H^1(X,\mathcal O_X)\cong H^2(\mathbb P^2_k,\mathcal O(-d))$ of [F1] with the dimension count of step 1.2 gives $\dim_kH^1(X,\mathcal O_X)=\frac{(d-1)(d-2)}{2}$. [F1, step 1.2]

2.2 The isomorphism with the polynomial piece. The bijection of step 1.2 between negative triples and monomials $T_0^{-e_0-1}T_1^{-e_1-1}T_2^{-e_2-1}$ of degree $-e_0-e_1-e_2-3=d-3$ turns the free basis of $H^2(\mathbb P^2_k,\mathcal O(-d))$ into a $k$-basis of $k[T_0,T_1,T_2]_{d-3}$, transported to $H^1(X,\mathcal O_X)$ by the isomorphism of [F1]; the two descriptions have the same finite dimension $\frac{(d-1)(d-2)}{2}$ and both are zero for $d\le2$, and no choice of basis is used beyond the canonical monomial labelling. [F1, F2, step 1.2]

3.1 Euler characteristic and genus. Using $h^0=1$ from step 1.3, $h^1=\frac{(d-1)(d-2)}{2}$ from step 2.1 and $h^2=0$ from step 1.4, the alternating sum of [F4] is $\chi(\mathcal O_X)=1-\frac{(d-1)(d-2)}{2}$, so $p_a(X)=1-\chi(\mathcal O_X)=\frac{(d-1)(d-2)}{2}$. [F4, step 1.3, step 2.1, step 1.4]

4.1 Conclusion. For the integral one-dimensional closed subscheme $X=V_+(F)$ cut out by a homogeneous form of degree $d\ge1$, one has $H^0(X,\mathcal O_X)=k$ by step 1.3, $H^1(X,\mathcal O_X)\cong k[T_0,T_1,T_2]_{d-3}$ and $\dim_kH^1(X,\mathcal O_X)=\frac{(d-1)(d-2)}{2}$ by step 2.2, and therefore $p_a(X)=1-\chi(\mathcal O_X)=\frac{(d-1)(d-2)}{2}$ by step 3.1. The case $d=1$ gives a line with $p_a=0$, the case $d=2$ gives a conic with $p_a=0$, and the first singular-by-genus case is $d=3$; the computation covers all of them uniformly. ∎
