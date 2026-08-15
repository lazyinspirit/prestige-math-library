---
id: rem-reciprocal-root-convention-for-recurrences
kind: remark
title: 'Reciprocal-root convention: $\chi(t)=\prod_i(t-\lambda_i)^{m_i}$ corresponds to $Q(x)=\prod_i(1-\lambda_i x)^{m_i}$'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-linear-recurrence-and-recurrence-characteristic-polynomial, def-rational-formal-power-series-and-reduced-denominator]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "B. E. Sagan, Combinatorics: The Art of Counting, Theorem 3.7.1"
      url: "https://users.math.msu.edu/users/bsagan/Books/Aoc/GSM210.pdf"
    - title: "M. Waldschmidt, Linear Recurrence Sequences VI, reciprocal characteristic polynomial"
      url: "https://webusers.imj-prg.fr/~michel.waldschmidt/articles/pdf/LinRecSeqVI.pdf"
pipeline_run: null
---

## Statement

The recurrence convention of [[def-linear-recurrence-and-recurrence-characteristic-polynomial]] pairs

$$\chi(t)=t^d+c_1t^{d-1}+\cdots+c_d$$

with $Q(x)=1+c_1x+\cdots+c_dx^d$. Therefore, in any field over which $\chi$ splits,

$$\chi(t)=\prod_i(t-\lambda_i)^{m_i}\quad\Longleftrightarrow\quad Q(x)=\prod_i(1-\lambda_i x)^{m_i}.$$

The roots of $Q$ are the reciprocals $\lambda_i^{-1}$, while the numbers appearing in recurrence closed forms are the characteristic roots $\lambda_i$. The nonzero trailing coefficient in the recurrence makes every $\lambda_i$ nonzero. This convention is algebraic and does not assert convergence of $P/Q$ at any value of $x$ ([[def-rational-formal-power-series-and-reduced-denominator]]).
