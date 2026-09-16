---
id: fs-centerless-implies-semisimple
kind: false-statement
title: Centerless implies semisimple
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-simple-semisimple-and-reductive-lie-algebras]
landmark: false
proof_strategy: counterexample
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, §§3–4"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "§3 solvability and §4 semisimplicity, printed pp. 30–45"
---

## Statement refuted

A centerless finite-dimensional Lie algebra is semisimple.

## Facts & Assumptions

**Given:** A characteristic-zero field and the displayed affine algebra.

[L1] Semisimplicity means vanishing solvable radical ([[def-simple-semisimple-and-reductive-lie-algebras]]).

## Counterexample

**Proof technique:** the two-dimensional affine algebra.

1.1 Over any field, let $\mathfrak a$ have basis $x,y$ and bracket $[x,y]=y$. For $z=ax+by$, the equations $[z,x]=-by=0$ and $[z,y]=ay=0$ give $a=b=0$. Thus $Z(\mathfrak a)=0$. [given, algebra]

2.1 Its derived algebra is $k y$ and the next derived algebra is zero, so $\mathfrak a$ is nonzero and solvable. Therefore its radical is all of $\mathfrak a$, not zero, and it is not semisimple by [L1]. This explicit witness has dimension two and refutes the implication even in characteristic zero. [L1, step 1.1, algebra] ∎