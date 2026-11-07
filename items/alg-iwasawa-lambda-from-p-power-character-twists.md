---
id: alg-iwasawa-lambda-from-p-power-character-twists
kind: algorithm
title: 'Compute a Dirichlet-character $\lambda$-invariant by p-power twists'
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - alg-exact-prime-valuation-in-number-field-by-ideal-membership
  - def-generalized-bernoulli-number
  - def-iwasawa-mu-lambda-invariants-of-power-series
  - def-iwasawa-power-series-attached-to-dirichlet-character
  - lem-p-adic-power-series-cyclotomic-twist-valuation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "H. Knospe, Special Values of p-adic L-functions and Iwasawa λ-invariants of Dirichlet characters"
      url: "https://link.springer.com/content/pdf/10.1007/s40993-026-00762-x.pdf"
      locator: "Theorem 5.2(i), printed pp. 10–11"
    - title: "J. Rodrigues Jacinto and C. Williams, An Introduction to p-adic L-functions"
      url: "https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf"
      locator: "Theorem 5.20, printed pp. 147–148"
    - title: "H. Knospe, Special values of p-adic L-functions and Iwasawa lambda-invariants of Dirichlet characters, arXiv:2401.06100v3"
      url: "https://arxiv.org/pdf/2401.06100"
      locator: "Theorem 5.2(i), arXiv v3, printed pp. 11–12"
verification: {}
---

## Algorithm

Input an odd prime $p$, a nontrivial even primitive first-kind character $\chi=\theta\omega^i$ with $\theta$ of conductor prime to $p$, its Iwasawa power series $F_\chi(T)\in\mathcal O_\chi\llbracket T\rrbracket$, a finite $\mu=0$ certificate consisting of an exact coefficient of $F_\chi$ that is a unit, a fixed embedding of all character and root-of-unity values into $\overline{\mathbb Q}_p$, and exact number-field arithmetic. Let $e_\chi=v_\pi(p)$ for a uniformizer $\pi$ of $\mathcal O_\chi$. Choose
$$k=\begin{cases}i,&1\le i\le p-2,\\p-1,&i=0.\end{cases}$$
For $n=1,2,\ldots$, choose a compatible primitive $p^n$th root $\zeta_{p^n}$ and the order-$p^n$ character $\psi_n$ of $1+p\mathbb Z_p$ with $\psi_n(1+p)=\zeta_{p^n}^{-1}$. Compute the exact generalized Bernoulli number $B_{k,\theta\psi_n}$. If it is zero, continue to $n+1$. Otherwise let $E_n=\mathbb Q(\operatorname{im}\theta,\zeta_{p^n})$, let $P_n$ be the prime above $p$ selected by the fixed embedding, and compute
$$v_p(B_{k,\theta\psi_n})=\frac{v_{P_n}((B_{k,\theta\psi_n}))}{e(P_n/p)}$$
using exact prime-ideal valuation by ideal membership. If this value is less than $1/e_\chi$, return
$$\lambda_p(\chi)=(p-1)p^{n-1}v_p(B_{k,\theta\psi_n});$$
otherwise continue. The $\mu=0$ certificate is an explicit finite input; the algorithm does not derive it from Ferrero–Washington.

## Algorithm references

[H. Knospe, *Special Values of p-adic L-functions and Iwasawa λ-invariants of Dirichlet characters*, Theorem 5.2(i), printed pp. 10–11](https://link.springer.com/content/pdf/10.1007/s40993-026-00762-x.pdf)

[J. Rodrigues Jacinto and C. Williams, *An Introduction to p-adic L-functions*, Theorem 5.20, pp. 147–148](https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf)

## Facts & Assumptions

**Given:** The finite character data, exact coefficient certificate, number-field representations, chosen $p$-adic embedding, and arithmetic procedures in the Algorithm.

[F1] $B_{k,\chi}$ is a finite weighted sum of Bernoulli-polynomial values in the character field. [[def-generalized-bernoulli-number]]

[F2] The power series $F_\chi$ is the Mellin power series for the Dirichlet p-adic $L$-function. [[def-iwasawa-power-series-attached-to-dirichlet-character]]

[F3] Exact prime-ideal valuations of nonzero algebraic numbers are computed by bounded ideal-power membership. [[alg-exact-prime-valuation-in-number-field-by-ideal-membership]]

[F4] The cyclotomic twist valuation has the strict threshold $v_p(F_\chi(\alpha_{n,k}))<1/e_\chi$ exactly when $\lambda/e_n<1/e_\chi$, and then its value is $\lambda/e_n$. [[lem-p-adic-power-series-cyclotomic-twist-valuation]]

## Verification

**Given:** The data and certificate in the Algorithm.

1.1 The generalized Bernoulli sum [F1] uses finitely many residue classes, and the exact algebraic arithmetic computes it. For a nonzero value, [F3] supplies the numerator valuation and the ramification index, so the normalized p-adic valuation is an exact rational number. A zero value is recognized exactly and causes a finite continuation to the next index. [F1, F3, given, algebra]

2.1 The loop has a well-defined test at every index. The output expression is exact rational arithmetic, and the supplied unit coefficient certifies $\mu(F_\chi)=0$ without requiring a theorem proving universal $\mu$-vanishing. Termination and the equality of the returned integer with $\lambda_p(\chi)$ are the separate theorem below. [F2, F4, given, algebra] ∎
