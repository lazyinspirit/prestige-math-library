---
dependency_level: 0
id: def-berkovich-projective-line-by-polynomial-seminorms
kind: definition
title: "The Berkovich projective line as two polynomial-seminorm discs"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-multiplicative-absolute-value-on-a-field
  - def-algebraically-closed-field
  - def-quotient-topology
justified_by:
  - lem-berkovich-projective-line-compactness-and-classical-density
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Robert Rumely and Matthew Baker, Analysis and dynamics on the Berkovich projective line, §1 and §2, closed-disc topological model"
      url: "https://arxiv.org/pdf/math/0407433v1"
verification: {}
---
## Definition

Let $L$ be a complete algebraically closed field with a nontrivial nonarchimedean absolute value. Its **closed Berkovich unit disc** $D_L$ is the set of maps $x:L[T]\to\mathbb R_{\ge0}$ such that $x(0)=0$, $x(c)=|c|$ for constants, $x(fg)=x(f)x(g)$, $x(f+g)\le\max(x(f),x(g))$, and $x(T)\le1$. Give it the topology of pointwise convergence on polynomials. For $x\in D_L$ with $x(T)=1$, multiplicativity uniquely extends $x$ to $L[T,T^{-1}]$ by $x(T^{-1})=1$; write $\iota(x)(f(T))=x(f(T^{-1}))$. The **Berkovich projective line** $\mathbb P^{1,\mathrm{an}}_L$ is the quotient of a disjoint union of two copies $D_T,D_U$ of $D_L$, identifying $x\in D_T$ with $\iota(x)\in D_U$ exactly on $x(T)=1$, and given the quotient topology. The classical points are polynomial evaluation seminorms: $a\in L$ with $|a|\le1$ lies in the $T$ chart, $|a|\ge1$ lies in the $U$ chart at $u=1/a$, and infinity is $u=0$. A finite point of modulus $1$ has the two identified representatives. This is a definition of the underlying topological space; no analytic structure sheaf, Laplacian, canonical measure or tree-metric property is included in it.

## Definition references

[[def-multiplicative-absolute-value-on-a-field]]

[[def-algebraically-closed-field]]

[[def-quotient-topology]]
