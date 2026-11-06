---
id: lem-cft-fock-oscillator-duality
kind: lemma
title: Reflected oscillator pairing and transpose of the long screening
status: published
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-cft-feigin-fuchs-oscillator-data
dependency_roles:
  def-cft-feigin-fuchs-oscillator-data: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Adamović and Milas, On the triplet vertex algebra W(p)
      url: https://arxiv.org/pdf/0707.1857v2
      locator: Section 1, oscillator and conformal-vector conventions; the explicit reflected pairing and coefficient transpose are reconstructed below
---

## Statement

For the rank-one oscillator data and $t\in\mathbb C$, put
$t^*=(p-1)/p-t$. There is a degreewise nondegenerate bilinear pairing
$\mathcal F_t\times\mathcal F_{t^*}\to\mathbb C$, defined for
finite monomials by

$$\left\langle\prod_mx_m^{r_m}e^{t\alpha},\prod_mx_m^{s_m}e^{t^*\alpha}\right\rangle=\mathbf1_{r=s}\prod_m(-2pm)^{r_m}r_m!.$$

For $N\ge0$, let $\mathcal F_t[N]$ denote the weighted-degree $N$
subspace, with $\deg x_m=m$, and write $\langle\cdot,\cdot\rangle_{t,N}$
for the restriction of this pairing to $\mathcal F_t[N]\times
\mathcal F_{t^*}[N]$. If a linear map $A:\mathcal F_t\to\mathcal F_s$
has a fixed degree shift $\delta$, meaning
$A(\mathcal F_t[N])\subseteq\mathcal F_s[N+\delta]$, its pairing adjoint
is the unique degreewise map whose components
$$A^*_N:\mathcal F_{s^*}[N+\delta]\longrightarrow\mathcal F_{t^*}[N]$$
satisfy
$$\langle Au,v\rangle_{s,N+\delta}=\langle u,A^*_Nv\rangle_{t,N}$$
for all $u\in\mathcal F_t[N]$ and $v\in\mathcal F_{s^*}[N+\delta]$.
Here $s^*=(p-1)/p-s$; the star is defined by this bilinear-pairing
identity, not by a Hermitian inner product; the term transpose below means
the same pairing adjoint. The modes $L_t(n)$ have
degree shift $-n$, so their adjoints have source and target
$\mathcal F_{t^*}[N-n]\to\mathcal F_{t^*}[N]$. For every integer $n$ they
satisfy
$L_t(n)^*=L_{t^*}(-n)$. If $2pt\in\mathbb Z$, the transpose of
$Q_t:\mathcal F_t\to\mathcal F_{t+1}$ has degree shift $2pt+1$;
the original map $Q_t$ has degree shift $-2pt-1$. Its transpose is
$Q_{(t+1)^*}:\mathcal F_{(t+1)^*}\to\mathcal F_{t^*}$.
Explicitly, for $u\in\mathcal F_t$ and
$v\in\mathcal F_{(t+1)^*}$,

$$\langle Q_tu,v\rangle=\langle u,Q_{(t+1)^*}v\rangle.$$

These statements are identities for the explicit oscillator operators;
they do not require a vertex-algebra invariant bilinear form.

## Statement references

[[def-cft-feigin-fuchs-oscillator-data]]

[Adamović–Milas, Section 1](https://arxiv.org/pdf/0707.1857v2)

## Facts & Assumptions

**Given:** The polynomial oscillator spaces, $L_t(n)$ and screening
coefficients $Q_t$ of the generic data, with complex $p\ne0$.
An operator transpose always uses the indicated reflected charge spaces.

[F1] [[def-cft-feigin-fuchs-oscillator-data]] defines every operator and
specifies its finite action on a polynomial.

## Proof

1.1 On each finite oscillator degree the monomial pairing is diagonal
with nonzero diagonal entries, so it is nondegenerate. Multiplication by
$x_m$ transposes to $-2pm\partial_{x_m}$: on monomials the only
nonzero comparison is between exponents $r_m+1$ and $r_m+1$, when
$(-2pm)^{r_m+1}(r_m+1)!=(-2pm)(r_m+1)(-2pm)^{r_m}r_m!$.
Differentiation gives the reverse identity. Hence
$\alpha_m^*=-\alpha_{-m}$ for $m\ne0$; the reflected charge gives
$\alpha_0^*=2(p-1)-\alpha_0$. Different oscillator degrees are
orthogonal, and $h(t)=pt^2-(p-1)t$ satisfies $h(t)=h(t^*)$.
[given, F1, algebra]

2.1 Transpose the normally ordered quadratic expression for $L_t(n)$.
For $n\ne0$, a term with two nonzero indices becomes the reversed product
of the modes with both indices negated. Their new indices sum to $-n\ne0$,
so their commutator is zero by [F1]; reordering them therefore gives exactly
the normally ordered quadratic term of index $-n$. The terms with one
zero index contribute the correction
$-(p-1)\alpha_{-n}/p$ from the reflection of $\alpha_0$.
The transposed improvement term contributes
$(p-1)(n+1)\alpha_{-n}/(2p)$; the sum of these two corrections
is $(p-1)(n-1)\alpha_{-n}/(2p)$, exactly the improvement term
of $L_{t^*}(-n)$. For $n=0$, the explicit diagonal form is
$L_t(0)=\sum_{m\ge1}m x_m\partial_{x_m}+h(t)$, which is its
own transpose into the reflected space by step 1.1. This proves the
claimed adjoint identity for every $n$. [F1, step 1.1, algebra]

3.1 Put $s=(t+1)^*=(p-1)/p-t-1$. In the explicit field
$\mathcal E_{1,t}(z)$, the creation exponential transposes to the
negative annihilation exponential and the annihilation exponential
transposes to the positive creation exponential, by step 1.1.
Transpose reverses their order. The resulting expression has precisely
the creation-then-annihilation order of
$\mathcal E_{1,s}(z^{-1})$. The charge-shift operators have scalar
coefficient one. Their zero-mode powers satisfy
$2pt=-2-2ps$. Therefore the matrix coefficient identity is
$$\langle\mathcal E_{1,t}(z)u,v\rangle=\langle u,z^{-2}\mathcal E_{1,s}(z^{-1})v\rangle.$$
Each matrix coefficient against fixed polynomials involves only finitely
many creation degrees, so transposition and coefficient extraction are
algebraic operations on a Laurent polynomial. The coefficient of $z^{-1}$
on the right is exactly the coefficient of the inverse variable to power
$-1$ in $\mathcal E_{1,s}$; taking that coefficient proves the
screening transpose identity. For a homogeneous input of oscillator degree $N$,
the residue condition in $\mathcal E_{1,t}$ is $2pt+c-a=-1$,
where creation adds degree $c$ and substitution removes degree $a$.
Thus $Q_t$ has shift $c-a=-2pt-1$. Its pairing adjoint reverses
that shift, taking degree $N-2pt-1$ to degree $N$, so its shift is
$2pt+1$. Since $s=-t-1/p$, the shift of $Q_s$ is
$-2ps-1=2pt+1$, as required. [F1, step 1.1, algebra] ∎
