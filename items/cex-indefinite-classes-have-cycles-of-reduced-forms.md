---
id: cex-indefinite-classes-have-cycles-of-reduced-forms
kind: counterexample
title: "An indefinite proper-equivalence class can contain a cycle of reduced forms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-unique-reduced-positive-definite-binary-quadratic-form, def-discriminant-of-binary-quadratic-form]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Granville, Binary Quadratic Forms, Section 4.6"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
pipeline_run: null
---

## Statement refuted

The uniqueness theorem for reduced positive-definite forms does not extend to
positive discriminant. Under Granville's positive-discriminant convention, both

$$f=(-6,6,1)\qquad\text{and}\qquad g=(1,6,-6)$$

are reduced forms of discriminant $60$, and they are properly equivalent.

## Facts & Assumptions

**Given:** The forms $f=(-6,6,1)$ and $g=(1,6,-6)$.

[L1] Positive-definite proper-equivalence classes contain exactly one reduced form ([[thm-unique-reduced-positive-definite-binary-quadratic-form]]).

[F1] The discriminant of $(a,b,c)$ is $b^2-4ac$ ([[def-discriminant-of-binary-quadratic-form]]).

## Counterexample

**Proof technique:** direct.

1.1 Both forms have discriminant $60$, since $6^2-4(-6)(1)=60$ and $6^2-4(1)(-6)=60$. [F1, given, algebra]

1.2 The matrix $M=\begin{pmatrix}-8&7\\ -7&6\end{pmatrix}$ has determinant $1$, and direct substitution gives $f\mid M=g$. Thus $f$ and $g$ are properly equivalent. [given, algebra]

2.1 Under Granville's positive-discriminant convention, a form of discriminant $d>0$ is reduced when $0<\sqrt d-b<2|a|<\sqrt d+b$. Since $7<\sqrt{60}<8$, one has $0<\sqrt{60}-6<2$ and $13<\sqrt{60}+6<14$. Hence $0<\sqrt{60}-6<12<\sqrt{60}+6$ for $f$ and $0<\sqrt{60}-6<2<\sqrt{60}+6$ for $g$, so both are reduced in that convention. [step 1.1, algebra]

3.1 The two reduced forms $f$ and $g$ are distinct, yet step 1.2 puts them in one proper-equivalence class. So the uniqueness statement [L1], which is true for positive-definite forms, does not extend to positive discriminant. [L1, step 2.1, step 1.2] ∎
