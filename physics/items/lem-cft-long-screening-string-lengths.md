---
id: lem-cft-long-screening-string-lengths
kind: lemma
title: Exact lengths of boundary long-screening strings
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
    - title: Adamović and Milas, Logarithmic intertwining operators and W(2,2p−1)-algebras
      url: https://arxiv.org/pdf/math/0702081v2
      locator: Section 4, Lemmas 4.1–4.3; the proof below replaces the Dyson evaluation by an explicit finite sum of squares and treats both dual boundary families
---

## Statement

In the rank-one oscillator spaces fix integers $p\ge2$ and
$0\le i\le p-2$, and put $\beta=i/(2p)$ and
$\delta=(2p-2-i)/(2p)$. For every $n\ge0$,

$$Q^{2n}e^{(\beta-n)\alpha}\ne0,\qquad Q^{2n+1}e^{(\beta-n)\alpha}=0.$$

For every $n\ge1$,

$$Q^{2n-1}e^{(\delta-n)\alpha}\ne0,\qquad Q^{2n}e^{(\delta-n)\alpha}=0.$$

Every shorter nonnegative screening power in either displayed string is
nonzero.

## Statement references

[[def-cft-feigin-fuchs-oscillator-data]]

[Adamović–Milas, Section 4](https://arxiv.org/pdf/math/0702081v2)

## Facts & Assumptions

**Given:** The explicit polynomial coefficient maps $Q_t$ of the oscillator
definition, with $p,i,\beta,\delta$ as stated. Write
$d=p-1-i$, $\Delta_j(z)=\prod_{r<s}(z_r-z_s)$, and
$h(t)=pt^2-(p-1)t$.

[F1] [[def-cft-feigin-fuchs-oscillator-data]] defines the polynomial spaces,
the substitution/creation fields, their coefficient maps, and their degree
and weight operators.

[L1] For $j\ge1$, put $p_m(z)=\sum_{r=1}^jz_r^m$. A symmetric polynomial is a polynomial invariant under permutations of $z_1,\ldots,z_j$. For a partition $\lambda$ of $D$ with at most $j$ parts, its monomial orbit sum is the sum of the distinct monomials obtained by assigning the parts of $\lambda$ to distinct variables. These orbit sums span the homogeneous symmetric polynomials of degree $D$, since invariance makes coefficients constant on each permutation orbit.

## Proof

1.1 Commuting each annihilation substitution through the later creation
exponential contributes
$\exp(-2p\sum_{m\ge1}(z_s/z_r)^m/m)=(1-z_s/z_r)^{2p}$.
The subsequent charge shift contributes $z_r^{2p}$ for that pair.
Consequently repeated substitution in [F1] gives the exact finite-residue
identity
$$Q^je^{t\alpha}=\operatorname{Res}_{z_1}\cdots\operatorname{Res}_{z_j}\Delta_j(z)^{2p}\prod_rz_r^{2pt}\exp\left(\sum_{m\ge1}\frac{x_m}m\sum_rz_r^m\right)e^{(t+j)\alpha}.$$
Only the symmetric homogeneous degree
$D=j(-2pt-1)-pj(j-1)$ in the exponential can contribute. Its oscillator
coefficients span the symmetric polynomials of degree $D$ in the $j$
variables. Indeed, the coefficient of $\prod_m x_m^{q_m}$, where
$\sum_m mq_m=D$, is $\prod_m p_m(z)^{q_m}/(m^{q_m}q_m!)$. Products of
power sums span every orbit sum in [L1]: in
$p_{\lambda_1}\cdots p_{\lambda_\ell}$ the terms using $\ell$ distinct
variables give a positive integer multiple of the orbit sum for $\lambda$,
while every term with repeated variables has fewer than $\ell$ distinct
variables and is an orbit sum for a partition obtained by merging parts.
Induction on $\ell$ therefore solves for every orbit sum as a linear
combination of products of power sums. The degree-$D$ oscillator space is
finite-dimensional, so a linear functional on it can select any desired
symmetric polynomial from those coefficient functions. [given, F1, L1, algebra]

2.1 In the first family take $j=2n>0$, $t=\beta-n$; then $D=jd$.
Use the symmetric polynomial $(\prod_rz_r)^d$ in step 1.1. In the
second family take $j=2n-1$, $t=\delta-n$; then $D=j(i+1)$,
and use $(\prod_rz_r)^{i+1}$. Both resulting residues equal the
constant term of $\Delta_j(z)^{2p}\prod_rz_r^{-p(j-1)}$.
If $V(z)=\Delta_j(z)^p=\sum_\mu c_\mu z^\mu$, reciprocal
substitution gives
$$\Delta_j(z)^{2p}\prod_rz_r^{-p(j-1)}=(-1)^{pj(j-1)/2}V(z)V(z^{-1}).$$
The constant term is
$(-1)^{pj(j-1)/2}\sum_\mu c_\mu^2\ne0$, since $V$ is a nonzero
polynomial with real coefficients. This proves both asserted nonvanishing
claims, including $n=0$ in the first family because $Q^0$ is the identity.
[F1, step 1.1, algebra]

3.1 Give a homogeneous input polynomial oscillator degree $N$. In a term
of the creation exponential, choosing powers with total oscillator degree
$c$ adds total $z$-degree $c$; choosing substitution terms that lower
oscillator degree by $a$ adds total $z$-degree $-a$. The coefficient
selected by $Q_t=\operatorname{Res}_z\mathcal E_{1,t}(z)$ satisfies
$2pt+c-a=-1$, hence $a-c=2pt+1$ and the output degree is
$N-a+c=N-2pt-1$. Since $h(t+1)-h(t)=2pt+1$, $Q_t$ preserves the explicit
weight $N+h(t)$. Put
$a_n=((2pn+d)^2-(p-1)^2)/(4p)$ and
$b_n=((2pn-d)^2-(p-1)^2)/(4p)$.
The first family's initial weight is $a_n$; its charge after $2n+1$
steps would be $\beta+n+1$, whose minimum weight is $b_{n+1}$.
But $b_{n+1}-a_n=(i+1)(2n+1)>0$, so this output is zero.
The second family's weight is $b_n$; after $2n$ steps its charge
would be $\delta+n$, whose minimum weight is $a_n$, and
$a_n-b_n=2nd>0$. This output is also zero. If any earlier power
vanished, all its later composites would vanish, contradicting step 2.1.
This proves all claimed exact lengths. [F1, step 2.1, algebra] ∎
