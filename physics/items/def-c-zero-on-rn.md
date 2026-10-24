---
id: def-c-zero-on-rn
kind: definition
title: "The space $C_0(\\mathbb{R}^n)$ of continuous functions vanishing at infinity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-vector-valued-functions-limits-and-continuity, def-metric-compactness]
landmark: false
verification:
  audited: 2026-09-01
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed."
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---
## Definition

Let $C_0(\mathbb{R}^n)$ be the space of continuous functions
$f : \mathbb{R}^n \to \mathbb{R}$ such that for every $\varepsilon > 0$ there is
a compact set $K \subseteq \mathbb{R}^n$ with

$$ |f(x)| < \varepsilon \qquad(x \notin K). $$

Equivalently, every $\varepsilon$-tail of $f$ is eventually small outside a
large Euclidean ball; this is the correct $L^\infty$-closure target of
$C_c(\mathbb{R}^n)$.
