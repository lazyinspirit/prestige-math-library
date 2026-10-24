---
id: lem-newton-identities-for-slice-roots
kind: lemma
title: "Finite Newton recurrences for the slice zeros"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-weierstrass-polynomial, lem-holomorphic-power-sums-of-slice-zeros]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Exercise 6.2.1"
      url: "https://jirilebl.github.io/scv/scv.pdf"
    - title: "Jaap Korevaar and Jan Wiegerinck, Several Complex Variables, Section 4.4"
      url: "https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/scvboek.pdf"
pipeline_run: frontier-22
---

## Statement

Let $\alpha_1,\dots,\alpha_d\in\mathbb C$, let
$p_n:=\alpha_1^n+\cdots+\alpha_d^n$, and let $e_n$ be the $n$th elementary
symmetric polynomial in the $\alpha_j$. Then, with $e_0:=1$,

$$n e_n=\sum_{j=1}^n (-1)^{j-1} e_{n-j}p_j\qquad(1\le n\le d).$$

Consequently each $e_n$ is a polynomial with rational coefficients in
$p_1,\dots,p_n$. In particular, whenever the $p_j$ vary holomorphically, so do
the $e_n$.

## Facts & Assumptions

**Given:** Complex numbers $\alpha_1,\dots,\alpha_d$ and the associated power sums $p_n$ and elementary symmetric functions $e_n$.

[L1] The power sums attached to slice zeros vary holomorphically with the parameter ([[lem-holomorphic-power-sums-of-slice-zeros]]).

[A1] Put $$Q(\zeta):=\prod_{j=1}^d(\zeta-\alpha_j) =\zeta^d+c_1\zeta^{d-1}+\cdots+c_d,$$ so $c_n=(-1)^n e_n$.

## Proof

**Proof technique:** direct.

1.1 By logarithmic differentiation of the polynomial in [A1], $$\frac{Q'(\zeta)}{Q(\zeta)}=\sum_{j=1}^d\frac{1}{\zeta-\alpha_j}.$$ Multiplying by $\zeta$ and expanding each summand for large $\zeta$ gives the formal Laurent identity $$\zeta\frac{Q'(\zeta)}{Q(\zeta)}= d+\sum_{n\ge1}p_n\zeta^{-n}.$$ [A1, algebra]

2.1 Multiplying the identity from step 1.1 by $Q(\zeta)=\sum_{n=0}^d c_n\zeta^{d-n}$ with $c_0=1$ and comparing the coefficient of $\zeta^{d-n}$ for $1\le n\le d$ yields $$n c_n+\sum_{j=1}^n c_{n-j}p_j=0.$$ Substituting $c_n=(-1)^n e_n$ gives $$n e_n=\sum_{j=1}^n (-1)^{j-1} e_{n-j}p_j.$$ Since $n\ne0$ in $\mathbb C$, this determines $e_n$ recursively as a polynomial in $p_1,\dots,p_n$. [step 1.1, A1, algebra]

3.1 The displayed recursion uses only addition, multiplication, and division by the nonzero scalar $n$. Therefore if the power sums $p_j$ vary holomorphically, then so do the $e_n$; the slice-zero case mentioned in [L1] is exactly such a holomorphic family. [step 2.1, L1, algebra] ∎
