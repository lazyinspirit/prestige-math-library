---
id: cor-symmetric-polynomial-values-on-roots-lie-in-the-base-field
kind: corollary
title: "A symmetric polynomial in the roots of a monic polynomial is a polynomial in its coefficients and lies in the base ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-fundamental-theorem-of-symmetric-polynomials, cor-vietas-formulas-for-a-split-monic-polynomial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Theorem 5.36 and Remark 5.37"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
    - title: "K. Conrad, Symmetric Polynomials, Sections 1-2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/symmfunction.pdf"
pipeline_run: null
---

## Statement

Let $f(t)=t^n+a_1t^{n-1}+\cdots+a_n\in R[t]$ be monic and split in a commutative $R$-algebra with roots $\alpha_1,\ldots,\alpha_n$. For every symmetric $P\in R[x_1,\ldots,x_n]$ there is a unique $Q\in R[T_1,\ldots,T_n]$ with

$$P=Q(e_1,\ldots,e_n)\quad\text{in }R[x_1,\ldots,x_n],$$

and for that $Q$,

$$P(\alpha_1,\ldots,\alpha_n)=Q(-a_1,a_2,\ldots,(-1)^na_n).$$

In particular this value lies in the image of $R$ and is independent of the ordering of the roots. The uniqueness asserted is uniqueness of the representing identity $P=Q(e_1,\ldots,e_n)$, not uniqueness of a $Q$ satisfying the displayed evaluated equality: when $n\ge1$ and $R$ is not the zero ring, $T_1+a_1$ is a nonzero polynomial vanishing at $(-a_1,a_2,\ldots,(-1)^na_n)$, so $Q+(T_1+a_1)$ has the same value there as $Q$.

## Facts & Assumptions

**Given:** A split monic polynomial $f$ and a symmetric polynomial $P$ as in the Statement.

[L1] Every symmetric polynomial has a unique expression $P=Q(e_1,\ldots,e_n)$ ([[thm-fundamental-theorem-of-symmetric-polynomials]]).

[L2] For the roots of a split monic polynomial, $e_k(\alpha_1,\ldots,\alpha_n)=(-1)^ka_k$ ([[cor-vietas-formulas-for-a-split-monic-polynomial]]).

## Proof

**Proof technique:** direct.

1.1 Use [L1] to write $P=Q(e_1,\ldots,e_n)$ for a unique $Q$. [given, L1]

2.1 Evaluate at the roots and apply [L2] in each coordinate to obtain $P(\alpha_1,\ldots,\alpha_n)=Q(-a_1,a_2,\ldots,(-1)^na_n)$. [step 1.1, L2, algebra]

3.1 The right side is computed from coefficients in $R$, and symmetry makes it unchanged when the roots are reordered. The asserted uniqueness is the uniqueness in [L1] of the $Q$ representing $P$ as an identity of polynomials, and it is not uniqueness of a $Q$ satisfying the evaluated equality alone: when $n\ge1$ and $1\ne0$ in $R$, the polynomial $T_1+a_1$ has $T_1$-coefficient $1$ and is therefore nonzero, while substituting the tuple $(-a_1,a_2,\ldots,(-1)^na_n)$ sends it to $-a_1+a_1=0$, so $Q$ and $Q+(T_1+a_1)$ take the same value there. [step 1.1, step 2.1, L1] ∎
