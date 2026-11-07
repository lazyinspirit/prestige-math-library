---
id: def-kleinbock-growth-class
kind: definition
title: "Continued-fraction growth class for multiplicative approximation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-convergents-of-regular-continued-fraction
sources:
  references:
    - title: "Chow–Technau 2024"
      url: "https://arxiv.org/pdf/2307.14871v1"
      locator: "Theorem 1.5 and complete proof route in §§1–4"
    - title: "Queffélec–Ramaré 2003"
      url: "https://ramare-olivier.github.io/Maths/kaufmanbis.pdf"
      locator: "Theorem 1.4 and Fourier-decaying measure construction"
---

## Definition

Let $\alpha\in\mathbb R\setminus\mathbb Q$ have regular continued-fraction convergents $p_j/q_j$ with positive denominators. Define
$$K:=\left\{\alpha:\sup_{j\ge1}\frac{\log q_j}{j}<\infty\right\}.$$

## Definition references

[Chow–Technau 2024](https://arxiv.org/pdf/2307.14871v1) — Theorem 1.5 and complete proof route in §§1–4.

[Queffélec–Ramaré 2003](https://ramare-olivier.github.io/Maths/kaufmanbis.pdf) — Theorem 1.4 and Fourier-decaying measure construction.


## Facts & Assumptions

**Given:** Regular continued-fraction convergents $p_j/q_j$.

[F1] The convergents are defined by the regular continued fraction of an irrational real number; their denominators satisfy the standard recurrence. [[def-convergents-of-regular-continued-fraction]]
