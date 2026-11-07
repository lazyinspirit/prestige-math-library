---
id: lem-weierstrass-division-for-p-adic-power-series
kind: lemma
title: Weierstrass division for p-adic power series
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
- def-local-field-valuation-ring-uniformizer-and-residue-field
- def-p-adic-integers-as-compatible-residue-classes
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. Sharifi, Iwasawa Theory lecture notes
    url: https://www.math.ucla.edu/~sharifi/iwasawa.pdf
    locator: Proposition 2.2.1 and proof, printed pp. 43–45
verification: {}
---

## Statement

Let $\mathcal O$ be the valuation ring of a finite extension of $\mathbb Q_p$, with uniformizer $\pi$ and finite residue field. Let $F=\sum_{j\ge0}a_jT^j\in\mathcal O\llbracket T\rrbracket$ have a least index $d$ with $a_d\in\mathcal O^\times$ and $a_j\in\pi\mathcal O$ for $j<d$. For every $G\in\mathcal O\llbracket T\rrbracket$ there are unique $Q\in\mathcal O\llbracket T\rrbracket$ and $R\in\mathcal O[T]$ with $\deg R<d$ such that $G=QF+R$.

## Statement references

[J. Sharifi, *Iwasawa Theory*, Proposition 2.2.1 and proof, §2.2, pp. 43–45](https://www.math.ucla.edu/~sharifi/iwasawa.pdf)

## Facts & Assumptions

**Given:** The valuation ring $\mathcal O$, series $F,G$ and the hypotheses in the Statement.

[F1] $\mathcal O$ is complete for the valuation topology and has a uniformizer $\pi$. [[def-local-field-valuation-ring-uniformizer-and-residue-field]]

## Proof

1.1 Write $F=AT^d+B$, where $A$ has unit constant coefficient and $B\in\pi\mathcal O[T]$ has degree below $d$. The inverse of $A$ is defined recursively coefficient by coefficient, so lies in $\mathcal O\llbracket T\rrbracket$. Start with $H_0=G$. Given $H_n$, split it uniquely as $H_n=C_nT^d+D_n$ with $\deg D_n<d$, and put $V_n=A^{-1}C_n$. Then $H_n-V_nF-D_n=-V_nB\in\pi\mathcal O\llbracket T\rrbracket$; define $H_{n+1}$ by dividing this residual by $\pi$. These are deterministic coefficient operations. [F1, given, construct, algebra]

2.1 Set $Q=\sum_{n\ge0}\pi^nV_n$ and $R=\sum_{n\ge0}\pi^nD_n$. Since all coefficients of $V_n,D_n$ are integral, the tails lie uniformly in $\pi^N\mathcal O\llbracket T\rrbracket$; completeness [F1] gives the limits. The remainders have only the finitely many degrees below $d$, so $R$ is a polynomial of degree below $d$. After $N$ terms the residual is $\pi^NH_N$, which tends uniformly to zero, proving $G=QF+R$. If $d=0$, every $D_n$ is zero and the degree-below-zero remainder is the zero polynomial; the same construction is simply division by the unit $F$. [F1, step 1.1, algebra]

3.1 For uniqueness, subtract two solutions to obtain $QF+R=0$. Modulo $\pi$ this reads $\bar Q\bar A T^d+\bar R=0$. The first term has no coefficient of degree below $d$, so $\bar R=0$; the residue power-series ring is a domain and $\bar A$ is a unit, so $\bar Q=0$. Divide by $\pi$ and repeat. Every coefficient of $Q,R$ lies in all $\pi^n\mathcal O$, hence is zero by separation. This proves uniqueness, including $d=0$, over every finite-extension coefficient DVR, with no assumption of absolute ramification index one. [F1, step 1.1, step 2.1, algebra] ∎
