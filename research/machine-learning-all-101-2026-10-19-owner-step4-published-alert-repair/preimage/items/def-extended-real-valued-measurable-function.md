---
id: def-extended-real-valued-measurable-function
kind: definition
title: "Extended-real-valued measurable functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-measure-space, def-borel-sigma-algebra, def-extended-reals]
verification:
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, ch. 6"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., §2.2"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Definition

Let $(X,\mathcal A,\mu)$ be a measure space ([[def-measure-space]]). Equip
$\overline{\mathbb R}$ ([[def-extended-reals]]) with its order topology and let
$\mathcal B(\overline{\mathbb R})$ be the corresponding Borel sigma-algebra
([[def-borel-sigma-algebra]]).

A function $f:X\to\overline{\mathbb R}$ is **measurable** when
$f^{-1}(B)\in\mathcal A$ for every $B\in\mathcal B(\overline{\mathbb R})$.

Equivalently, it is enough to require
$$\{x\in X:f(x)>a\}\in\mathcal A \qquad \text{for every } a\in\mathbb R,$$
because the rays $(a,+\infty]$ generate $\mathcal B(\overline{\mathbb R})$.
