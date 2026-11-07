---
id: lem-p-adic-power-series-cyclotomic-twist-valuation
kind: lemma
title: Valuation of a power series at a cyclotomic twist
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
- cor-total-ramification-in-a-prime-power-cyclotomic-field
- def-iwasawa-mu-lambda-invariants-of-power-series
- thm-p-adic-weierstrass-preparation-for-iwasawa-power-series
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: H. Knospe, Special Values of p-adic L-functions and Iwasawa λ-invariants
      of Dirichlet characters
    url: https://link.springer.com/content/pdf/10.1007/s40993-026-00762-x.pdf
    locator: Proposition 5.1 and Theorem 5.2(i), printed pp. 10–11
  - title: J. Sharifi, Iwasawa Theory
    url: https://www.math.ucla.edu/~sharifi/iwasawa.pdf
    locator: Theorem 2.2.3, printed pp. 44–45
  - title: H. Knospe, Special values of p-adic L-functions and Iwasawa lambda-invariants
      of Dirichlet characters, arXiv:2401.06100v3
    url: https://arxiv.org/pdf/2401.06100
    locator: Proposition 5.1 and Theorem 5.2(i), arXiv v3, printed pp. 10–12
verification: {}
---

## Statement

Let $p$ be odd, let $\mathcal O$ be the valuation ring of a finite extension of $\mathbb Q_p$ with normalized valuation $v_p(p)=1$, ramification index $e=v_\pi(p)$, and uniformizer $\pi$. Let $F(T)\in\mathcal O\llbracket T\rrbracket$ be nonzero with $\mu(F)=0$ and $\lambda(F)=\lambda$. For an integer $k$ and $n\ge1$, put
$$e_n=(p-1)p^{n-1},\qquad \alpha_{n,k}=\zeta_{p^n}(1+p)^{1-k}-1,$$
where $\zeta_{p^n}$ is primitive. If $\lambda/e_n<1/e$, then
$$v_p(F(\alpha_{n,k}))=\frac{\lambda}{e_n}.$$
If $\lambda/e_n\ge1/e$, then $v_p(F(\alpha_{n,k}))\ge1/e$. Thus the strict test $v_p(F(\alpha_{n,k}))<1/e$ holds exactly when $\lambda/e_n<1/e$. At equality the value may be larger than the threshold.

## Statement references

[H. Knospe, *Special Values of p-adic L-functions and Iwasawa λ-invariants of Dirichlet characters*, Proposition 5.1 and Theorem 5.2(i), printed pp. 10–11](https://link.springer.com/content/pdf/10.1007/s40993-026-00762-x.pdf)

[J. Sharifi, *Iwasawa Theory*, Theorem 2.2.3, pp. 44–45](https://www.math.ucla.edu/~sharifi/iwasawa.pdf)

## Facts & Assumptions

**Given:** $p,\mathcal O,F,k,n$ as in the Statement.

[F1] The $\mu$ and $\lambda$ invariants are the minimum coefficient valuation and the first nonzero degree after normalization. [[def-iwasawa-mu-lambda-invariants-of-power-series]]

[F2] Weierstrass preparation writes $F=\pi^{\mu(F)}UP$ with $U$ a unit and $P$ distinguished of degree $\lambda(F)$. [[thm-p-adic-weierstrass-preparation-for-iwasawa-power-series]]

[F3] In $\mathbb Q_p(\zeta_{p^n})$, $1-\zeta_{p^n}$ generates the unique prime above $p$ and has valuation $1/((p-1)p^{n-1})$. [[cor-total-ramification-in-a-prime-power-cyclotomic-field]]

## Proof

1.1 An algebraic integer has nonnegative $v_p$: if its absolute value exceeded $1$, its monic integral equation would have leading term strictly larger than every other term, a contradiction. Hence a global algebraic unit has valuation zero, by applying this also to its inverse. The principal-ideal identity in [F3] writes $p$ as $(1-\zeta_{p^n})^{e_n}$ times such a unit. It therefore gives the normalized valuation in any fixed $p$-adic embedding. Thus by [F3], $v_p(\zeta_{p^n}-1)=1/e_n$. Since $(1+p)^{1-k}\in1+p\mathbb Z_p$, the difference $(1+p)^{1-k}-1$ has valuation at least $1$. Therefore $\alpha_{n,k}=(\zeta_{p^n}-1)+\zeta_{p^n}\bigl((1+p)^{1-k}-1\bigr)$ has valuation $1/e_n$: the two terms have unequal valuations, with the first smaller because $p$ is odd and $1/e_n\le1/(p-1)<1$. All series evaluations below converge in the given complete valued algebraic extension containing the coefficient field and the chosen root, since $v_p(\alpha_{n,k})>0$ and their coefficients are integral. [F3, given, algebra]

2.1 Since $\mu(F)=0$, [F2] writes $F=UP$ with $U$ a unit and $P(T)=T^\lambda+\sum_{j<\lambda}a_jT^j$, $a_j\in\pi\mathcal O$. The leading term at $\alpha_{n,k}$ has valuation $\lambda/e_n$. Each lower term has valuation at least $1/e+j/e_n$. If $\lambda/e_n<1/e$, these are all strictly larger than the leading valuation, so the nonarchimedean triangle inequality gives $v_p(P(\alpha_{n,k}))=\lambda/e_n$. If $\lambda/e_n\ge1/e$, the leading term and every lower term have valuation at least $1/e$, so their sum has valuation at least $1/e$.[F1, F2, step 1.1, algebra]

3.1 The unit series $U$ has unit constant coefficient, and all its positive-degree terms at $\alpha_{n,k}$ have positive valuation, so $U(\alpha_{n,k})$ is a unit. Multiplication by it preserves the valuation in step 2.1 and yields the formula. If $\lambda=0$, then $P=1$ and the same conclusion is $v_p(F(\alpha_{n,k}))=0$.[F2, step 2.1, algebra] ∎
