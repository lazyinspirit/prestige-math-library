---
id: thm-p-adic-weierstrass-preparation-for-iwasawa-power-series
kind: theorem
title: P-adic Weierstrass preparation and distinguished degree
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
- def-iwasawa-mu-lambda-invariants-of-power-series
- def-local-field-valuation-ring-uniformizer-and-residue-field
- lem-weierstrass-division-for-p-adic-power-series
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. Sharifi, Iwasawa Theory lecture notes
    url: https://www.math.ucla.edu/~sharifi/iwasawa.pdf
    locator: Theorem 2.2.3 and proof, printed pp. 44–45
verification: {}
---

## Statement

Let $\mathcal O$ be the valuation ring of a finite extension of $\mathbb Q_p$, with uniformizer $\pi$ and finite residue field. For every nonzero $F\in\mathcal O\llbracket T\rrbracket$ there are a unique integer $\mu\ge0$, a unique monic polynomial $P(T)$ of degree $\lambda\ge0$ whose coefficients below degree $\lambda$ lie in $\pi\mathcal O$, and a unit $U(T)\in\mathcal O\llbracket T\rrbracket^\times$ such that $F=\pi^\mu UP$. The integers are $\mu=\mu(F)$ and $\lambda=\lambda(F)$.

## Statement references

[J. Sharifi, *Iwasawa Theory*, Theorem 2.2.3 and proof, §2.2, pp. 44–45](https://www.math.ucla.edu/~sharifi/iwasawa.pdf)

## Facts & Assumptions

**Given:** A nonzero $F\in\mathcal O\llbracket T\rrbracket$.

[F1] The $\mu$ and $\lambda$ invariants are the minimum coefficient valuation and the first nonzero coefficient degree after normalization. [[def-iwasawa-mu-lambda-invariants-of-power-series]]

[F2] Weierstrass division gives a unique quotient and polynomial remainder below the first unit coefficient degree. [[lem-weierstrass-division-for-p-adic-power-series]]

[F3] The coefficient ring is complete and has a uniformizer. [[def-local-field-valuation-ring-uniformizer-and-residue-field]]

## Proof

1.1 Divide $F$ by $\pi^{\mu(F)}$ and call the result $F_0$. By [F1], its reduction modulo $\pi$ has first nonzero term of degree $d=\lambda(F)$, so write $F_0=AT^d+B$, where $A$ is a unit series and $B\in\pi\mathcal O[T]$ has degree below $d$.[F1, F3, given, algebra]

2.1 Apply [F2] to divide $T^d=QF_0+R$, $\deg R<d$. Modulo $\pi$, $F_0\equiv\bar A T^d$, so $R\equiv0$ and $Q\equiv\bar A^{-1}$; hence $Q$ is a unit. Thus $P=T^d-R$ is monic with lower coefficients divisible by $\pi$ and $F_0=Q^{-1}P$, proving existence.[F2, step 1.1, algebra]

3.1 If $F_0=U P=V P'$ are two such factorizations, both distinguished polynomials have degree $d$ by [F1]. Divide $P$ by $P'$ using [F2]. The expression $P=(V/U)P'$ has zero remainder; but also $P=1\cdot P'+(P-P')$, with $\deg(P-P')<d$ because both polynomials are monic of degree $d$. Uniqueness of division forces the two remainders $0$ and $P-P'$ to coincide and the quotients $V/U$ and $1$ to coincide; hence $P=P'$ and $U=V$. Multiplying back by the uniquely determined $\pi^{\mu(F)}$ proves the assertion.[F1, F2, step 2.1, algebra] ∎
