---
id: ex-reducing-a-large-binary-quadratic-form
kind: example
title: "Reducing $(458,214,25)$ to $(1,0,1)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-binary-quadratic-form-substitution-is-a-right-action, thm-reduction-of-positive-definite-binary-quadratic-forms, def-reduced-positive-definite-binary-quadratic-form]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, Examples 9.2.5 and 9.3.3"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
pipeline_run: null
---

## Example

The positive-definite form $(458,214,25)$ reduces to $(1,0,1)$ through the
explicit swap-and-shear moves

$$ (458,214,25)\to(25,-214,458)\to(25,-14,2)\to(2,14,25)\to(2,2,1)\to(1,-2,2)\to(1,0,1). $$

Equivalently,

$$ (458,214,25)\mid\begin{pmatrix}3&4\\ -13&-17\end{pmatrix}=(1,0,1). $$

## Facts & Assumptions

**Given:** The integral form $f=(458,214,25)$.

[L1] Integral substitution defines a right action of $\mathrm{SL}_2(\mathbb Z)$ on integral binary quadratic forms ([[lem-binary-quadratic-form-substitution-is-a-right-action]]).

[L2] Every positive-definite integral binary quadratic form is properly equivalent to a reduced form ([[thm-reduction-of-positive-definite-binary-quadratic-forms]]).

[L3] A positive-definite form is reduced when $|b|\le a\le c$ and the boundary sign condition holds ([[def-reduced-positive-definite-binary-quadratic-form]]).

## Verification

**Proof technique:** direct.

1.1 Let $S=\begin{pmatrix}0&-1\\ 1&0\end{pmatrix}$ and $T_k=\begin{pmatrix}1&k\\ 0&1\end{pmatrix}$. Direct substitution gives $f\mid S=(25,-214,458)$, $(f\mid S)\mid T_4=(25,-14,2)$, $((f\mid S)\mid T_4)\mid S=(2,14,25)$, then after $T_{-3}$ one gets $(2,2,1)$, after another $S$ one gets $(1,-2,2)$, and after $T_1$ one gets $(1,0,1)$. [L1, given, algebra]

2.1 The final form $(1,0,1)$ is reduced because $|0|\le1\le1$ and the boundary sign condition is automatic. [L3, step 1.1, algebra]

2.2 By repeated use of the right-action law [L1], the composite matrix is $ST_4ST_{-3}ST_1=\begin{pmatrix}3&4\\ -13&-17\end{pmatrix}$, which has determinant $1$, so the single displayed substitution is exactly the product of the six moves in step 1.1. [L1, step 1.1, algebra]

3.1 Thus the explicit reduction algorithm indeed carries $(458,214,25)$ to the reduced form $(1,0,1)$. [L2, step 2.1, step 2.2] ∎
