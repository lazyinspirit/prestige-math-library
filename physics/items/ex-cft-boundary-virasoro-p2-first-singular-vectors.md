---
id: ex-cft-boundary-virasoro-p2-first-singular-vectors
kind: example
title: The first boundary Virasoro singular vectors at central charge minus two
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-virasoro-algebra
  - def-cft-virasoro-verma-module
  - lem-cft-virasoro-verma-pbw-basis
  - lem-cft-boundary-virasoro-verma-chain
dependency_roles:
  def-virasoro-algebra: mathematical-premise
  def-cft-virasoro-verma-module: mathematical-premise
  lem-cft-virasoro-verma-pbw-basis: mathematical-premise
  lem-cft-boundary-virasoro-verma-chain: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Antony Wassermann, Kac–Moody and Virasoro Algebras
      url: https://arxiv.org/pdf/1004.1287v2
      locator: Chapter IV §4, printed pp. 71–73, determinant and boundary singular-vector conventions
    - title: Wolfram Boenkost, Vertex–Operatoren, Darstellungen der Virasoro–Algebra und konforme Quantenfeldtheorie
      url: https://arxiv.org/pdf/hep-th/9412231v1
      locator: Chapter 2 §2.2.5, examples of boundary Verma submodules
---

## Example

At $p=2$ and $d=1$, the boundary Virasoro central charge is $c=-2$ and the
weights are $a_n=((4n+1)^2-1)/8$ and $b_n=((4n-1)^2-1)/8$. Their chain
begins $a_0=0<b_1=1<a_1=3<b_2=6<a_2=10$.

Let $v_0$ be the highest vector in $M(-2,0)$ and $v_1$ the highest vector
in $M(-2,1)$. Their first singular vectors are
$$s_1=L_{-1}v_0,\qquad s_2=(L_{-1}^2-2L_{-2})v_1.$$
The Verma map sending $v_1$ to $s_1$ sends $s_2$ to
$$s_3=(L_{-1}^3-2L_{-2}L_{-1})v_0,$$
a nonzero singular vector at global grade three. Thus the first embeddings are
$M(-2,3)\hookrightarrow M(-2,1)\hookrightarrow M(-2,0)$.

The resulting simple-module characters, through relative grade six, are
$$\operatorname{ch}L(-2,0)=1+q^2+q^3+2q^4+2q^5+4q^6+O(q^7),$$
$$\operatorname{ch}L(-2,1)=q\bigl(1+q+q^2+2q^3+3q^4+4q^5+6q^6+O(q^7)\bigr).$$
These finite coefficients illustrate the exact all-grade character formulas
$(1-q)/\prod_{m\ge1}(1-q^m)$ and
$(q-q^3)/\prod_{m\ge1}(1-q^m)$, respectively.

## Statement references

[[def-cft-virasoro-verma-module]]

[[lem-cft-virasoro-verma-pbw-basis]]

[[lem-cft-boundary-virasoro-verma-chain]]

## Facts & Assumptions

**Given:** The two algebraic Verma modules and the fixed values $p=2,d=1$.

In this verification, a singular vector means a nonzero $L_0$-eigenvector annihilated by every $L_m$ with $m>0$. Thus the calculations below establish both the eigenvector and positive-mode conditions; [F1] gives the highest-vector relations used.

[F1] [[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]] gives $[L_m,L_n]=(m-n)L_{m+n}+(m^3-m)\delta_{m+n,0}C/12$; [[def-cft-virasoro-verma-module]] fixes the induced module and highest-vector relations, with $C=-2$ in this example and $L_mv_h=0$ for $m>0$ and $L_0v_h=hv_h$.

[F2] [[lem-cft-virasoro-verma-pbw-basis]] gives linearly independent negative-mode PBW monomials and grade dimensions $P(N)$.

[F3] [[lem-cft-boundary-virasoro-verma-chain]] identifies each first embedded Verma as the maximal proper submodule and proves the exact simple-character formulas.

## Verification

1.1 Substitution into the boundary formulas gives $c=-2$ and $a_0=0,b_1=1,a_1=3,b_2=6,a_2=10$. From [F1],
$$L_1s_1=[L_1,L_{-1}]v_0=2L_0v_0=0,$$
and for $m\ge2$, $L_ms_1=(m+1)L_{m-1}v_0=0$. The vector is nonzero by [F2], so $s_1$ is singular. [F1, F2, algebra]

1.2 For a highest vector $v_h$, commutation gives
$$L_1L_{-1}^2v_h=(4h+2)L_{-1}v_h,\quad L_1L_{-2}v_h=3L_{-1}v_h,$$
$$L_2L_{-1}^2v_h=6hv_h,\quad L_2L_{-2}v_h=(4h+c/2)v_h.$$
At $h=1,c=-2$ the coefficient pairs are $(6,3)$ for each of $L_1,L_2$, so both modes annihilate $s_2$. For $m>2$, applying $L_m$ to a relative-grade-two vector lands below the Verma top and is zero. The distinct PBW terms make $s_2\ne0$, so it is singular. [F1, F2, algebra]

2.1 A singular vector at weight $h'$ defines a Verma homomorphism by sending the new highest vector to that vector. Under [F2], this map is right multiplication by its nonzero negative-mode polynomial. PBW filters $U(\mathfrak n_-)$ with associated graded the polynomial algebra on the negative modes, which has no zero divisors; hence right multiplication is injective. Applying this to $s_1$ and $s_2$ gives the stated embeddings, and the composite sends $v_2$ to $s_3$. The PBW coefficients $1,-2$ show $s_3\ne0$. The proved chain lemma [F3] supplies maximality and the exact simple characters. [F2, F3, step 1.1, step 1.2, algebra]

3.1 Directly verify the composite singular vector. Commutators give
$$L_1L_{-1}^3v_0=6L_{-1}^2v_0,\quad L_1L_{-2}L_{-1}v_0=3L_{-1}^2v_0,$$
$$L_2L_{-1}^3v_0=6L_{-1}v_0,\quad L_2L_{-2}L_{-1}v_0=3L_{-1}v_0.$$
Thus $L_1s_3=L_2s_3=0$. Also $L_3L_{-1}^3v_0=24L_0v_0=0$ and $L_3L_{-2}L_{-1}v_0=5L_1L_{-1}v_0=10L_0v_0=0$. For $m>3$, positive modes land below the top. Therefore $s_3$ is singular. [F1, F2, step 2.1, algebra]

4.1 For $M(-2,0)$, the character from [F3] is $(1-q)R(q)$; for $M(-2,1)$ it is $q(1-q^2)R(q)$, where $R(q)=\prod_{m\ge1}(1-q^m)^{-1}$. The coefficients of $R$ through degree six are the partition numbers $1,1,2,3,5,7,11$. Subtracting the shifted coefficients gives $1,0,1,1,2,2,4$ and, inside the factor $q$, $1,1,1,2,3,4,6$. These are the displayed expansions; the coefficient arithmetic is finite and exact. [F2, F3, algebra] ∎

