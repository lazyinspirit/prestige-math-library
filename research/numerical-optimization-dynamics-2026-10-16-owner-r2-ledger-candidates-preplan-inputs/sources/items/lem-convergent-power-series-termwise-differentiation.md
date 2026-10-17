---
id: lem-convergent-power-series-termwise-differentiation
kind: lemma
title: Convergent power series differentiate term by term inside their radius
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; the tail cutoff is the least index satisfying the displayed convergence bounds.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Tobias Holck Colding, MIT 18.100B Real Analysis, Lecture 22: Differentiating and Integrating Power Series"
      url: https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec22.pdf
---

## Statement

Let $r_0>0$ and let $(a_n)_{n\ge0}$ be real coefficients such that for every $0<R<r_0$ both $\sum_{n\ge0}|a_n|R^n$ and $\sum_{n\ge1}n|a_n|R^{n-1}$ converge. Then $F(x)=\sum_{n\ge0}a_nx^n$ is differentiable for $|x|<r_0$, with
$$F'(x)=\sum_{n\ge1}na_nx^{n-1}.$$

## Facts & Assumptions

**Given:** The two absolute-convergence assumptions in the Statement.

## Proof

1.1 Fix $c$ with $|c|<r_0$ and choose $R$ with $|c|<R<r_0$. For $0<|h|<R-|c|$ and each $n\ge1$,
$$\frac{(c+h)^n-c^n}{h}=\sum_{j=0}^{n-1}(c+h)^{n-1-j}c^j,$$
so every term has modulus at most $R^{n-1}$ and the quotient has modulus at most $nR^{n-1}$. Therefore the tail after degree $N$ of the difference-quotient series is bounded uniformly in such $h$ by $\sum_{n>N}n|a_n|R^{n-1}$. The tail of the proposed derivative series at $c$ has the same bound. [given, algebra]

1.2 Given $\varepsilon>0$, choose $N$ so both tail bounds in step 1.1 are below $\varepsilon/3$. The finite polynomial $\sum_{n=0}^N a_nx^n$ has derivative $\sum_{n=1}^Nna_nc^{n-1}$ at $c$, so choose $h$ small enough that its difference quotient differs from this derivative by less than $\varepsilon/3$. The full difference quotient and full derivative series then differ by less than $\varepsilon$ by the two tails and this finite-polynomial bound. This proves differentiability and the displayed derivative formula. [given, step 1.1, algebra] ∎
