---
id: cor-quadratic-forms-diagonalize-in-characteristic-not-two
kind: corollary
title: 'Over a field of characteristic not $2$, every quadratic form has diagonal coordinates $q(x)=a_1x_1^2+\cdots+a_nx_n^2$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-polarization-bijection-in-characteristic-not-two, thm-symmetric-bilinear-forms-have-an-orthogonal-basis]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'K. Conrad, Bilinear Forms, §7'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/bilinearform.pdf'
pipeline_run: null
---

## Statement

Let $q$ be a quadratic form on an $n$-dimensional vector space over a field of characteristic not $2$. Some basis gives

$$q(x_1e_1+\cdots+x_ne_n)=a_1x_1^2+\cdots+a_nx_n^2$$

for scalars $a_1,\ldots,a_n$, which may include zeros.

## Facts & Assumptions

**Given:** The quadratic form $q$ in the stated characteristic.

[L1] Polarization gives a symmetric bilinear form $B_q=\tfrac12b_q$ satisfying $q(v)=B_q(v,v)$ ([[thm-polarization-bijection-in-characteristic-not-two]]).

[L2] Every finite-dimensional symmetric bilinear form in characteristic not $2$ has an orthogonal basis ([[thm-symmetric-bilinear-forms-have-an-orthogonal-basis]]).

## Proof

**Proof technique:** direct.

1.1 Form $B_q$ by [L1] and choose an orthogonal basis $(e_1,\ldots,e_n)$ by [L2]. Set $a_i=B_q(e_i,e_i)$. [L1, L2, choose]

2.1 For $v=\sum_i x_ie_i$, bilinearity and orthogonality give $q(v)=B_q(v,v)=\sum_i a_ix_i^2$; every cross term vanishes. [step 1.1, L1, algebra]

3.1 This is the required diagonal expression. Zero coefficients are allowed, so degenerate forms and the zero form are included; for $n=0$ the sum is empty. [step 2.1] ∎
