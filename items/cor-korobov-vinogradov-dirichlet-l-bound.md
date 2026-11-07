---
id: cor-korobov-vinogradov-dirichlet-l-bound
kind: corollary
title: "Korobov–Vinogradov bound for nonprincipal Dirichlet L-functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - thm-korobov-vinogradov-hurwitz-zeta-estimate
  - def-dirichlet-character-modulo-q
  - def-dirichlet-l-function
  - thm-dirichlet-character-orthogonality
  - thm-identity-theorem-holomorphic-functions
  - def-complex-exponential
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - lem-hurwitz-zeta-summation-formula
  - def-hurwitz-zeta-function
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory III, Chapter 24, Corollary 24.16"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "Printed pp. 67–68, character decomposition and bound (24.17)."
---

## Statement

There is an absolute constant $C>0$ such that if $\chi$ is a nonprincipal Dirichlet character modulo $q\ge2$, $s=\sigma+it$ with $\sigma\ge1/2$, $\tau=|t|+4$, and $\Theta=\max(0,1-\sigma)$, then
$$|L(s,\chi)|\ll \frac{q^\Theta-1}{\Theta}+q^{1-\sigma}(\log\tau)^{2/3}\tau^{C\Theta^{3/2}},$$
where the first quotient is interpreted as $\log q$ when $\Theta=0$.

## Statement references

[Montgomery–Vaughan, Corollary 24.16 and proof](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** A nonprincipal character $\chi$ modulo $q\ge2$ and $s=\sigma+it$ with $\sigma\ge1/2$.

[F1] $L(s,\chi)=\sum_{n\ge1}\chi(n)n^{-s}$ for $\operatorname{Re}s>1$, and $\chi$ is periodic modulo $q$ ([[def-dirichlet-l-function]], [[def-dirichlet-character-modulo-q]]).

[F2] The sum of a nonprincipal character over a complete residue system is zero ([[thm-dirichlet-character-orthogonality]]).

[F3] The Hurwitz series has its continuation and Euler summation formula on $\operatorname{Re}s>0$ ([[def-hurwitz-zeta-function]], [[lem-hurwitz-zeta-summation-formula]]); its pole-subtracted remainder has the Korobov–Vinogradov bound ([[thm-korobov-vinogradov-hurwitz-zeta-estimate]]).

[F4] For $x>0$, $x^{-s}=\exp(-s\log x)$, $\log(x/y)=\log x-\log y$, and $|\exp(u+iv)|=e^u$ ([[def-complex-exponential]], [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F5] Two holomorphic functions on a connected domain that agree on a nonempty open subset agree everywhere ([[thm-identity-theorem-holomorphic-functions]]).

## Proof

**Proof technique:** split the Dirichlet series into residue classes and cancel the Hurwitz poles.

1.1 For $\operatorname{Re}s>1$, grouping terms $n\equiv a\pmod q$ in [F1] gives $$L(s,\chi)=q^{-s}\sum_{a=1}^{q}\chi(a)\zeta(s,a/q).$$ Write each Hurwitz term as $1/(s-1)+(a/q)^{-s}+E_a(s)$, with $E_a$ bounded by [F3]. The pole cancels because $\sum_a\chi(a)=0$ by [F2], and $q^{-s}(a/q)^{-s}=a^{-s}$ by [F4]. Both sides continue holomorphically after cancellation to $\sigma>0$, so the identity holds there by [F5]. [given, F1, F2, F3, F4, F5, algebra]

2.1 The first remaining sum is bounded by $\sum_{a=1}^qa^{-\sigma}$. If $\Theta=1-\sigma>0$, integral comparison gives $$\sum_{a=1}^qa^{-\sigma}\le1+\int_1^q u^{-\sigma}\,du\ll\frac{q^\Theta-1}{\Theta};$$ if $\Theta=0$, the harmonic bound gives $O(\log q)$. The Hurwitz errors contribute at most $$q^{-\sigma}\sum_{a=1}^q|\chi(a)|\,|E_{a/q}(s)|\ll q^{1-\sigma}(\log\tau)^{2/3}\tau^{C\Theta^{3/2}},$$ since $|\chi(a)|\le1$. Combining these estimates proves the claim. [step 1.1, F2, F3, F4, algebra] ∎

