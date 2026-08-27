---
id: cor-one-generalized-pell-solution-gives-infinitely-many
kind: corollary
title: "One generalized Pell solution generates infinitely many more"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-generalized-and-negative-pell-equations, def-fundamental-pell-solution, lem-pell-norm-multiplication]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Pell's Equation, II"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/pelleqn2.pdf"
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
pipeline_run: null
---

## Statement

If the generalized Pell equation
$$x^2-Dy^2=N,\qquad N\ne0,$$
has one integral solution, then it has infinitely many integral solutions.

## Facts & Assumptions

**Given:** A nonzero solution $\alpha=x+y\sqrt D$ of $N_D(\alpha)=N$ and the fundamental Pell solution $\varepsilon_D>1$.

[F1] The Pell norm is multiplicative
([[lem-pell-norm-multiplication]]).

[F2] The fundamental Pell solution satisfies $\varepsilon_D>1$
([[def-fundamental-pell-solution]]).

## Proof

**Proof technique:** direct.

1.1 For every integer $k$, multiplicativity [F1] gives $$N_D(\alpha\varepsilon_D^k)=N_D(\alpha)N_D(\varepsilon_D)^k=N,$$ so each $\alpha\varepsilon_D^k$ is again a solution of the same generalized Pell equation. [F1, given, algebra]

2.1 These solutions are all distinct: if $k<\ell$, then [F2] gives $$|\alpha\varepsilon_D^\ell|=|\alpha\varepsilon_D^k|\,\varepsilon_D^{\ell-k}>|\alpha\varepsilon_D^k|.$$ Hence the first real embeddings have distinct absolute values, so the elements themselves are distinct. Therefore one solution generates infinitely many others. [F2, step 1.1, algebra] ∎
