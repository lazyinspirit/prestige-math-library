---
id: lem-rabinowitsch-substitution-clears-denominators
kind: lemma
title: "Substituting y = 1/f and clearing denominators yields a power of f in I"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-multiplicative-subset-and-localisation, thm-localisation-equivalence-and-ring-laws, lem-rabinowitsch-unit-ideal-consequence]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Theorem 13.10"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $k$ be a field, let $m\ge 1$, let $I=(h_1,\ldots,h_m)\subseteq k[x_1,\ldots,x_n]$, and
let
$$ 1=\sum_{i=1}^m a_i(x,y)h_i(x)+b(x,y)(1-yf(x)) $$
be an identity in $k[x_1,\ldots,x_n,y]$. Then some power $f^N$ lies in $I$.

## Facts & Assumptions

**Given:** A field $k$, an integer $m\ge 1$, an ideal $I=(h_1,\ldots,h_m)$ in $R:=k[x_1,\ldots,x_n]$, a polynomial $f\in R$, and a unit-ideal identity for $I+(1-yf)$.

[L1] Localization at a multiplicative set adjoins inverses of its elements ([[def-multiplicative-subset-and-localisation]]).

[L2] Localization is a ring and supports substitution of equal fractions ([[thm-localisation-equivalence-and-ring-laws]]).

[L3] Under the Rabinowitsch hypothesis, the auxiliary ideal is the unit ideal ([[lem-rabinowitsch-unit-ideal-consequence]]).

## Proof

**Proof technique:** direct.

1.1 If $f=0$, then $f^1=0\in I$, so the conclusion is immediate. Hence we may assume $f\ne 0$. [given, algebra]

2.1 The hypothesis $m\ge 1$ excludes the empty generating-family case, so the finite maximum used below is defined. Let $S=\{1,f,f^2,\ldots\}\subseteq R$. By [L1] and [L2], in the localized ring $S^{-1}R$ the element $f/1$ is invertible with inverse $1/f$. [L1, L2, step 1.1, given, algebra]

3.1 Substitute $y=1/f$ into the displayed identity and view the coefficients in $S^{-1}R$. The term $1-yf$ becomes $0$, so we obtain $$ 1=\sum_{i=1}^m a_i(x,1/f)h_i(x) $$ in $S^{-1}R$. Each coefficient $a_i(x,1/f)$ is a fraction $r_i/f^{e_i}$. [L2, step 2.1, algebra]

4.1 Let $N=\max_i e_i$. Multiplying the equality of step 3.1 by $f^N$ in the localization gives $$ \frac{f^N-\sum_{i=1}^m r_i f^{N-e_i} h_i}{1}=0. $$ By the localization equality criterion, some power $f^M\in S$ annihilates the numerator in $R$. Since $R=k[x_1,\ldots,x_n]$ is an integral domain and step 1.1 gives $f\ne 0$, this forces $$ f^N=\sum_{i=1}^m r_i f^{N-e_i} h_i $$ already in $R$. The right-hand side lies in $I$, so $f^N\in I$. [L2, step 1.1, step 3.1, algebra]

5.1 Thus a power of $f$ belongs to $I$. The existence of the starting identity is exactly what [L3] supplies in the Nullstellensatz application. [L3, step 4.1] ∎
