---
id: def-qc-denominator-exponent
kind: definition
title: Smallest square root of two denominator exponent
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - def-qc-dyadic-cyclotomic-ring
  - lem-qc-dyadic-coefficient-encoding
  - lem-qc-denominator-exponent-well-defined
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Kliuchnikov, Maslov, and Mosca, Practical approximation of single-qubit unitaries by single-qubit quantum circuits"
      url: https://arxiv.org/pdf/1206.5236
dependency_level: 3
---

## Definition

For nonzero $z\in D$, define
$\operatorname{sde}(z)=\min\{k\in\mathbb Z:(\sqrt2)^kz\in O\}$; exponents may
be negative. Set $\operatorname{sde}(0)=-\infty$. For a matrix $U$, the
denominator statistic used in the synthesis statements below is
$\operatorname{sde}(|U_{00}|^2)$, the exponent of the squared modulus of its
upper-left entry. The base regime in this convention is exponent at most $3$.

## Remarks

The set whose minimum is taken is nonempty and bounded below for each nonzero
$z$ by [[lem-qc-denominator-exponent-well-defined]]. This is the square-root
of-two convention of Kliuchnikov–Maslov–Mosca, not an exponent of $2$.
