---
id: thm-x-adic-completeness-and-polynomial-density
kind: theorem
title: "$R\\llbracket x\\rrbracket$ is complete in the $x$-adic topology and $R[x]$ is dense by truncation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-formal-order-and-x-adic-topology, prop-coefficient-extraction-linearity-and-extensionality, thm-formal-power-series-ring-and-polynomial-embedding]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Benjamin Sambale, An Invitation to Formal Power Series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
pipeline_run: null
---

## Statement

Every $x$-adically Cauchy sequence in $R\llbracket x\rrbracket$ has a unique $x$-adic limit. For every $f\in R\llbracket x\rrbracket$, its truncations

$$f_{<N}:=\sum_{n<N}[x^n]f\,x^n\in R[x]$$

converge $x$-adically to $f$. Thus $R\llbracket x\rrbracket$ is $x$-adically complete and the embedded polynomial ring is dense, including when $R$ is the zero ring.

## Facts & Assumptions

**Given:** The $x$-adic Cauchy and convergence definitions in [[def-formal-order-and-x-adic-topology]], coefficient extensionality in [[prop-coefficient-extraction-linearity-and-extensionality]], and the polynomial embedding of [[thm-formal-power-series-ring-and-polynomial-embedding]].

## Proof

**Proof technique:** stabilize coefficients.

1.1 Let $(f_j)$ be Cauchy. For each $n$, use the Cauchy condition with $N=n+1$: the coefficient $[x^n]f_j$ is eventually constant. Define $[x^n]f$ to be that eventual value. Given $N$, choose a common Cauchy index for the first $N$ coefficients; then $f_j\equiv f\pmod{x^N}$ thereafter, so $f_j\to f$. [given]

1.2 The truncation $f_{<N}$ is finitely supported, hence belongs to the embedded $R[x]$, and it agrees with $f$ in every degree below $N$. Therefore $f_{<N}\to f$; this includes a constant or zero series and remains true in the zero ring. [given]

2.1 If both $f$ and $g$ are limits, then for each $N$ their first $N$ coefficients agree with the same sufficiently late $f_j$. Thus every coefficient of $f$ and $g$ agrees, so $f=g$ by extensionality. [step 1.1, given]

3.1 Existence and uniqueness are steps 1.1 and 2.1, and density is step 1.2. [step 1.1, step 2.1, step 1.2] ∎
