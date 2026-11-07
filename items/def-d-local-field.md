---
id: def-d-local-field
kind: definition
title: "d-local field and its final residue field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-discrete-valuation
  - def-discrete-valuation-ring
  - def-valuation-on-a-field
  - def-valuation-ring
  - def-uniformising-parameter
  - def-finite-field-and-its-order
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Matthew Morrow, An Introduction to Higher Dimensional Local Fields and Adeles, §2.2, Definition 2.12 and Examples 2.14–2.15"
      url: "https://arxiv.org/pdf/1204.0586v2"
      locator: "§2, Definitions 2.1 and 2.12; Examples 2.5 and 2.14."
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, 2nd ed., Introduction to the Second Edition"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "Printed pp. vii–ix; scope distinction between one-dimensional finite-residue local fields and higher local fields."
verification:
  precheck: n/a
---

## Definition

For an integer $d\ge0$, a **$d$-local field datum** consists of fields
$K_0,K_1,\ldots,K_d$ such that $K_0$ is finite and, for each
$1\le i\le d$, the field $K_i$ is complete for a surjective discrete valuation
$v_i:K_i^\times\to\mathbb Z$ and an identification of its residue field
$\mathcal O_i/\mathfrak m_i$ with $K_{i-1}$ is specified, where
$\mathcal O_i=\{0\}\cup\{x:v_i(x)\ge0\}$ and
$\mathfrak m_i=\{0\}\cup\{x:v_i(x)>0\}$. Here completeness is with respect
to the valuation topology. The field $K_d$ with this specified chain is called
a **$d$-local field**; $K_i$ is its $i$th residue field and $K_0$ is its final
residue field. The valuation and residue identifications are part of the datum,
not canonical choices attached to the abstract field $K_d$. When $d=0$, this
means precisely that $K_0$ is finite. For $d=1$, this is the finite-residue
nonarchimedean local-field convention.

## Definition references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-discrete-valuation]]

[[def-discrete-valuation-ring]]

[[def-valuation-on-a-field]]

[[def-valuation-ring]]

[[def-uniformising-parameter]]

[[def-finite-field-and-its-order]]

[Matthew Morrow, *An Introduction to Higher Dimensional Local Fields and Adeles*, §2](https://arxiv.org/pdf/1204.0586v2)

[Fesenko–Vostokov, *Local Fields and Their Extensions*, 2nd ed., Introduction](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)
