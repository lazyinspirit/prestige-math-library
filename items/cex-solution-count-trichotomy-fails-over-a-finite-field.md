---
id: cex-solution-count-trichotomy-fails-over-a-finite-field
kind: counterexample
title: 'Over $\mathbb F_2$, the equation $x+y=0$ has exactly two solutions, so the infinite-field hypothesis is necessary'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [cor-solution-count-trichotomy-over-an-infinite-field, def-matrix-equation-augmented-matrix-and-linear-system, thm-z-mod-p-is-a-field, def-integers-modulo-n, def-addition-and-multiplication-modulo-n]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Hefferon, Linear Algebra, 4th ed., Ch. One, §III.2"
      url: "https://jheffero.w3.uvm.edu/linearalgebra/book.pdf"
pipeline_run: null
---

## Statement refuted

The false extension is: over every field, a finite linear system has no solution, one solution, or infinitely many solutions. Over $\mathbb F_2$, the equation $x+y=0$ has exactly two solutions.

## Facts & Assumptions

**Given:** The equation $x+y=0$ with $x,y\in\mathbb F_2=\mathbb Z/2$.

[L1] The solution-count trichotomy assumes that the scalar field is infinite ([[cor-solution-count-trichotomy-over-an-infinite-field]]).

[L2] A matrix equation records the same row equation as its linear system ([[def-matrix-equation-augmented-matrix-and-linear-system]]).

[L3] $\mathbb Z/2$ is a field ([[thm-z-mod-p-is-a-field]]).

[L4] $\mathbb Z/2$ consists of the congruence classes $0$ and $1$ ([[def-integers-modulo-n]]).

[L5] Addition in $\mathbb Z/2$ is addition modulo $2$ ([[def-addition-and-multiplication-modulo-n]]).

## Counterexample

**Proof technique:** direct.

1.1 Exhausting $\mathbb F_2^2$, the sums are $0+0=0$, $0+1=1$, $1+0=1$, and $1+1=0$; hence precisely $(0,0)$ and $(1,1)$ solve the equation. [L2, L3, L4, L5, algebra]

2.1 The solution set therefore has exactly two elements, so it is neither a singleton nor infinite. This refutes the extension and shows why [L1] requires an infinite field. [step 1.1, L1] ∎
