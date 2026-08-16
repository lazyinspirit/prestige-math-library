---
id: prop-vector-annihilator-is-well-defined
kind: proposition
title: "The vector annihilator is the unique monic generator of $\\operatorname{Ann}_T(v)$ and divides the minimal polynomial"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cyclic-subspace-vector-and-vector-annihilator, thm-minimal-polynomial-is-well-defined-and-controls-annihilators, cor-polynomial-ring-over-a-field-is-a-pid]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "K. Hoffman and R. Kunze, Linear Algebra, 2nd ed., Section 7.1"
      url: "https://math.ucr.edu/~mpierce/teaching/linear-algebra/docs/Hoffman%2CKunze-LinearAlgebra.pdf"
pipeline_run: null
---

## Statement

For an endomorphism $T$ of a finite-dimensional vector space and $v\in V$, $\operatorname{Ann}_T(v)$ is a nonzero ideal of $F[x]$. It has a unique monic generator $m_{T,v}$, and
$$p(T)v=0\quad\Longleftrightarrow\quad m_{T,v}\mid p.$$
Moreover $m_{T,v}\mid\mu_T$. In particular $m_{T,0}=1$.

## Facts & Assumptions

**Given:** A finite-dimensional endomorphism $T$ and a vector $v$.

[L1] The annihilator ideal is $\operatorname{Ann}_T(v)=\{p:p(T)v=0\}$ ([[def-cyclic-subspace-vector-and-vector-annihilator]]).

[L2] The minimal polynomial satisfies $\mu_T(T)=0$ ([[thm-minimal-polynomial-is-well-defined-and-controls-annihilators]]).

[L3] Every ideal of $F[x]$ is principal ([[cor-polynomial-ring-over-a-field-is-a-pid]]).

## Proof

**Proof technique:** direct.

1.1 Linearity of polynomial evaluation shows that [L1] is closed under addition and under multiplication by arbitrary polynomials, so it is an ideal; it is nonzero because [L2] puts $\mu_T$ in it. [L1, L2, algebra]

2.1 By [L3] the ideal is $(a)$ for a nonzero polynomial $a$; scaling by the inverse of its leading coefficient gives a monic generator $m_{T,v}$, and two monic generators of one ideal are associates and hence equal. [step 1.1, L3, algebra]

3.1 Membership in $(m_{T,v})$ is exactly divisibility by $m_{T,v}$, proving the displayed equivalence. Since $\mu_T$ belongs to the ideal, $m_{T,v}\mid\mu_T$; if $v=0$, the ideal contains $1$ and its monic generator is $1$. [step 1.1, step 2.1, L1, L2] ∎
