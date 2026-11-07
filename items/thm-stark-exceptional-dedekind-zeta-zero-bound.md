---
id: thm-stark-exceptional-dedekind-zeta-zero-bound
kind: theorem
title: Stark's effective lower bound for an exceptional Dedekind zeta zero
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 22
proof_strategy: direct
axiom_use: The original AC, CC and DC scope is retained through the proved real-zero descent.
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- lem-three-case-dedekind-zero-gap-up-to-absolute-constant
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
sources:
  references:
  - title: H. M. Stark, Some Effective Cases of the Brauer–Siegel Theorem
    url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0023/PPN356556735_0023.pdf
    locator: Lemmas 8 and 10 and Theorem 1′, printed pp. 145–148, and Section 5 Lemma 13, printed pp. 151–152. The source gives 4 for normal fields, 16 for normal towers, 8(m−1) under Artin holomorphy, and 4m! in general.
  - title: A. R. Weiss, The least prime ideal
    url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf
    locator: Section 1 Theorem 1.7, printed pp. 59–60; its three-case gap is stated with an implicit absolute constant, not coefficient one.
---

## Statement

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. Let $E\ne\mathbb Q$ be a number field of degree $m$ and absolute discriminant $D_E>1$. If $\zeta_E(s)$ has a real zero $\beta\in(0,1)$, define $\nu(E)$ by taking the first applicable case in the following list: $\nu(E)=1$ if $E$ lies in a tower $\mathbb Q=E_0\subset E_1\subset\cdots\subset E_r=E$ with each $E_j/E_{j-1}$ normal; $\nu(E)=m$ if every Artin $L$-function of $E/\mathbb Q$ is entire; and $\nu(E)=m!$ without either additional hypothesis. Define $\mu(E)$ by taking the first applicable case: $\mu(E)=4$ if $E/\mathbb Q$ is normal; $\mu(E)=16$ if $E$ is in a tower of normal extensions as above; $\mu(E)=8(m-1)$ if every Artin $L$-function of $E/\mathbb Q$ is entire; and $\mu(E)=4m!$ otherwise. There is an effectively computable absolute constant $c_8>0$ such that
$$\beta<\max\left\{1-\frac{1}{\mu(E)\log D_E},\;1-\frac{1}{c_8D_E^{1/m}}\right\}.$$

## Statement references

[[lem-three-case-dedekind-zero-gap-up-to-absolute-constant]]

## Facts & Assumptions

**Given:** The original field, real zero and choice hypotheses in the corrected Statement.

[F1] The locally proved three-case real-zero descent gives $1-\beta>\min\{(\mu_0\log D_E)^{-1},c_QD_E^{-1/m}\}$, where $c_Q>0$ is absolute and effective and $\mu_0$ takes the same normal, tower and factorial cases as $\mu(E)$, but uses the $8(m-1)$ branch already when every Artin L-function of the Galois closure is holomorphic at this particular $\beta$. [[lem-three-case-dedekind-zero-gap-up-to-absolute-constant]]

[A1] The proved real-zero descent uses the original AC, CC and DC assumptions. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

**Given:** The field, real zero and hypotheses in the Statement.

1.1 If $E/\mathbb Q$ is normal or lies in a normal tower, the first-applicable source coefficient in [F1] agrees with $\mu(E)$. If neither holds and every Artin L-function is entire, it is holomorphic at $\beta$, so again $\mu_0=\mu(E)$. In the remaining case [F1] may use the smaller holomorphy-at-$\beta$ coefficient $8(m-1)$ instead of $4m!$; for every $m\ge2$, $8(m-1)\le4m!$, so still $\mu_0\le\mu(E)$. Thus $\mu_0\le\mu(E)$ in every case. [F1, given, algebra]

2.1 Consequently [F1] gives $$1-\beta>\min\left\{\frac1{\mu(E)\log D_E},c_QD_E^{-1/m}\right\}.$$ Set $c_8=c_Q^{-1}$, which is absolute and effectively computable. Rearranging yields the asserted strict maximum inequality. The previously recorded original $\nu(E)$ is retained, and the exact source constants are displayed separately in $\mu(E)$. [A1, F1, step 1.1, algebra] ∎

## Source notes

Stark p.148 gives coefficients $4$ for normal fields, $16$ for normal towers and $4m!$ in general; Stark p.152 gives $8(m-1)$ under Artin holomorphy. Weiss p.60 gives the three-case consequence with an implicit absolute constant. The prior public formula used coefficient one in the logarithmic branch; neither cited source states that sharper literal coefficient. The present correction preserves every original field, zero, degree, discriminant, choice and Artin hypothesis and replaces only that unsupported coefficient by the explicit source-backed threshold. No claim is made that the prior stronger inequality is false.
