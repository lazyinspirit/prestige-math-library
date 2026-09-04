---
id: def-tseitin-extension-variable
kind: definition
title: "Tseitin extension variables for subformulas"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-boolean-formula-cnf-and-sat]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

Given a Boolean formula $\varphi$, a **Tseitin extension variable** for a
subformula $\theta$ of $\varphi$ is a fresh variable $y_\theta$ intended to
represent the truth value of $\theta$. The Tseitin translation adds a local
constraint for every subformula. For an atomic variable or constant it forces
$y_\theta\leftrightarrow\theta$ directly; for a composite subformula it forces
$y_\theta$ to equal the result of applying the outer connective to the
extension variables of the immediate subformulas. It then requires the root
variable $y_\varphi$ to be true.

## Remarks

- The new variables name intermediate subformulas instead of expanding them
  repeatedly.

- This keeps the transformed formula linear in the size of the original parse
  tree.
