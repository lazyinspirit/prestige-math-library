---
id: cex-clifford-algebra-need-not-be-semisimple
kind: counterexample
title: A degenerate one-dimensional Clifford algebra need not be semisimple
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: clifford-universal-algebras-and-pbw-examples
dependency_level: 4
deps: [def-clifford-algebra-of-a-quadratic-space, def-left-right-and-two-sided-ideal, thm-clifford-pbw-basis-and-associated-graded]
justified_by: []
landmark: false
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement refuted

The left regular module of an algebra $A$ is $A$ with action by left multiplication. The false claim is: the left regular module of every finite-dimensional Clifford algebra over a field of characteristic not $2$ is a direct sum of simple left modules. Here “simple” means nonzero with no proper nonzero submodule; “semisimple” for a module means a direct sum of simple submodules.

## Facts & Assumptions

**Given:** A field $k$ of characteristic not $2$ and the one-dimensional zero quadratic space $V=ke$.

[F1] The Clifford algebra has basis $1,\bar e$ in dimension one ([[thm-clifford-pbw-basis-and-associated-graded]]).

[F2] The defining relation is $\bar e^{\,2}=Q(e)1$ ([[def-clifford-algebra-of-a-quadratic-space]]).

[F3] A left ideal is an additive subgroup stable under left multiplication by every algebra element ([[def-left-right-and-two-sided-ideal]]).

[A1] In this item, a simple left $A$-module is a nonzero module with no proper nonzero submodules, and semisimple means a direct sum of simple modules.

## Counterexample

**Proof technique:** direct.

1.1 Take $V=ke$ with $B(e,e)=Q(e)=0$ and put $\varepsilon=\bar e$. By [F1] and [F2], $A=\mathrm{Cl}(V,0)=k1\oplus k\varepsilon$, $\varepsilon^2=0$, and $\varepsilon\ne0$. For $a,b,c\in k$, $(a1+b\varepsilon)(c\varepsilon)=ac\varepsilon$, so [F3] shows $k\varepsilon$ is a nonzero proper left ideal and hence a submodule of the left regular module. Therefore that module is not simple. [given, F1, F2, F3, A1]

2.1 If the two-dimensional regular module were a direct sum of simple modules, the summands' positive $k$-dimensions would force either one two-dimensional simple summand or two one-dimensional simple summands. The first case is excluded by step 1.1. [step 1.1, A1, algebra]

3.1 On any one-dimensional left $A$-module, the action of $\varepsilon$ is multiplication by some $\lambda\in k$; $\varepsilon^2=0$ gives $\lambda^2=0$, hence $\lambda=0$ because $k$ is a field. Thus in the second case $\varepsilon$ acts as zero on the direct sum, while in the regular module $\varepsilon\cdot1=\varepsilon\ne0$. This contradiction proves the regular module is not semisimple. [step 1.1, step 2.1, A1, algebra] ∎
