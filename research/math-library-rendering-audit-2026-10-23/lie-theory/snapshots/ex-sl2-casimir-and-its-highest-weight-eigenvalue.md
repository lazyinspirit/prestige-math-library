---
id: ex-sl2-casimir-and-its-highest-weight-eigenvalue
kind: example
title: "$\\mathfrak{sl}_2$ Casimir and highest-weight eigenvalue"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: []
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    - title: "Alexander Kleshchev, Lectures on Infinite Dimensional Lie Algebras"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf"
pipeline_run: null
---

## Example

For the Killing form on $\mathfrak{sl}_2$, the quadratic Casimir element is

$$C=\frac18 h^2+\frac14(ef+fe).$$

On a highest-weight module with highest vector $v_\lambda$ satisfying $hv_\lambda=\lambda v_\lambda$, it acts by

$$Cv_\lambda=\frac{\lambda(\lambda+2)}8 v_\lambda.$$

## Facts & Assumptions

**Given:** The standard basis $e=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, $f=\begin{pmatrix}0&0\\1&0\end{pmatrix}$, $h=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$ of $\mathfrak{sl}_2$.

## Verification

**Proof technique:** direct.

1.1 The Killing form values are $B(h,h)=8$ and $B(e,f)=B(f,e)=4$, so the dual basis is $h/8,f/4,e/4$. Substituting into the definition of the Casimir gives $C=\frac18 h^2+\frac14 ef+\frac14 fe$. [given, algebra]

2.1 Since $ev_\lambda=0$ and $[e,f]=h$, one has $fev_\lambda=0$ and $efv_\lambda=(fe+h)v_\lambda=\lambda v_\lambda$. The formula in step 1.1 therefore gives $Cv_\lambda=(\lambda^2/8+\lambda/4)v_\lambda=\lambda(\lambda+2)v_\lambda/8$. [step 1.1, given, algebra] ∎
