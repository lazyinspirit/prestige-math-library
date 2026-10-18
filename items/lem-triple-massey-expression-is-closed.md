---
id: lem-triple-massey-expression-is-closed
kind: lemma
title: "The triple Massey expression is a cocycle"
status: published
dependency_level: 2
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-differential-graded-algebra
  - def-triple-massey-data
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Bernhard Keller, Introduction to A-infinity algebras and modules, §3.3"
      url: "https://arxiv.org/pdf/math/9910179v2"
---

## Statement

For every triple Massey datum in
[[def-triple-massey-data]], the expression
$\omega=(-1)^{p+1}av+uc$ is closed. Thus it determines a class in
$H^{p+q+r-1}(A)$.

## Facts & Assumptions

**Given:** A cohomological differential graded algebra $A$ and homogeneous
closed $a,b,c$ of degrees $p,q,r$, with $du=ab$ and $dv=bc$.

[F1] [[def-triple-massey-data]]: the expression is
$\omega=(-1)^{p+1}av+uc$, with $|u|=p+q-1$ and $|v|=q+r-1$.

[F2] [[def-differential-graded-algebra]]: for homogeneous $x,y$,
$d(xy)=d(x)y+(-1)^{|x|}x d(y)$, and multiplication is associative.

## Proof

1.1 By [F2], closedness of $a,c$ and the defining equations in [F1], $d\omega=(-1)^{p+1}(-1)^p a\,dv+(du)c=-a(bc)+(ab)c.$ [given, F1, F2, algebra]

2.1 Associativity gives $a(bc)=(ab)c$, so the right side of step 1.1 is zero. Therefore $\omega$ is a cycle of degree $p+q+r-1$ and has a class in the displayed cohomology group. [F2, step 1.1] ∎

