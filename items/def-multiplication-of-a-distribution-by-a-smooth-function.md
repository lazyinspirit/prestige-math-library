---
id: "def-multiplication-of-a-distribution-by-a-smooth-function"
kind: "definition"
title: "Multiplication of a distribution by a smooth function"
deps: ["def-distribution", "thm-test-function-operations-are-continuous"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: "draft"
origin: "pipeline"
---

## Definition

For $u\in\mathcal D'(\Omega)$ and a fixed smooth complex function $a\in C^\infty(\Omega)$ define
$$\langle a u,\varphi\rangle=\langle u,a\varphi\rangle\qquad(\varphi\in\mathcal D(\Omega)).$$
Multiplication of tests by $a$ preserves compact support and is continuous and linear by [[thm-test-function-operations-are-continuous]]. Composing it with the continuous linear functional of [[def-distribution]] shows $au\in\mathcal D'(\Omega)$. There is no conjugation of $a$ in this bilinear convention.

The formulas give $1u=u$, $0u=0$, $a0=0$ and $a(bu)=(ab)u$ by evaluation on every test; addition is distributive in either variable for the same reason. On the empty domain the construction gives the zero distribution. It requires no choice axiom. This operation is defined for a smooth multiplier; it does not define a product of two arbitrary distributions.
