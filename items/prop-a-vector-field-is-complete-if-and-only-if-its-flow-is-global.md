---
id: prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global
kind: proposition
title: "A vector field is complete if and only if its flow is global"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-complete-vector-field, thm-fundamental-theorem-on-flows]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://courses.maths.ox.ac.uk/pluginfile.php/31073/mod_resource/content/1/Manifold_notes.pdf"
---

## Statement

A smooth vector field $X$ on $M$ is complete if and only if its maximal flow
domain is all of $\mathbb R\times M$.

## Facts & Assumptions

**Given:** A smooth vector field $X$ with maximal flow $\Phi:\mathcal D\to M$.

[L1] The maximal flow domain is $$ \mathcal D=\{(t,p):t\in I_p\}, $$ where $I_p$ is the domain of the maximal integral curve through $p$ ([[thm-fundamental-theorem-on-flows]]).

[L2] A vector field is complete exactly when every maximal integral curve is defined on all of $\mathbb R$ ([[def-complete-vector-field]]).

## Proof

**Proof technique:** direct.

1.1 If $X$ is complete, then [L2] gives $I_p=\mathbb R$ for every $p$. By [L1], this means $\mathcal D=\mathbb R\times M$. [L1, L2, given]

1.2 Conversely, if $\mathcal D=\mathbb R\times M$, then [L1] gives $I_p=\mathbb R$ for every $p$. Therefore [L2] says that $X$ is complete. [L1, L2, given]

2.1 Hence $X$ is complete if and only if its maximal flow is global. [step 1.1, step 1.2] ∎
