---
id: ex-cyclotomic-different-preview
kind: example
title: "A cyclotomic different preview"
status: draft
origin: pipeline
deps: [thm-different-of-a-monogenic-number-field, def-cyclotomic-extension, prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Keith Conrad, The Different Ideal, Examples 4.5--4.6"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf"
---

## Example

For a prime $p$ and $K=\mathbb Q(\zeta_p)$, $\mathfrak D_K=(1-\zeta_p)^{p-2}$.

## Verification

**Given:** $\mathcal O_K=\mathbb Z[\zeta_p]$ and $\Phi_p(X)=1+\cdots+X^{p-1}$.

1.1 At $r=1$, [[prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate]] makes $\Phi_p$ irreducible over $\mathbb Q$. Since it is monic and vanishes at the primitive root $\zeta_p$, it is its minimal polynomial. The monogenic formula gives $\mathfrak D_K=(\Phi_p'(\zeta_p))$. [given, algebra]

2.1 For $p=2$ the claim is immediate.  For odd $p$, differentiating the factorisation of $\Phi_p$ into its roots gives $$\Phi_p'(\zeta_p)=\prod_{j=2}^{p-1}(\zeta_p-\zeta_p^j)=\zeta_p^{p-2}\prod_{k=1}^{p-2}(1-\zeta_p^k).$$ For $1\le k\le p-2$, the quotient $(1-\zeta_p^k)/(1-\zeta_p)=1+\zeta_p+\cdots+\zeta_p^{k-1}$ is a unit: if $k\ell\equiv1\pmod p$, the reverse quotient is likewise a cyclotomic integer.  Since $\zeta_p$ is also a unit, the displayed product generates the ideal $(1-\zeta_p)^{p-2}$. [step 1.1, algebra] ∎
