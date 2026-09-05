---
id: lem-rho-shift-intertwines-the-dot-and-ordinary-weyl-actions
kind: lemma
title: "The rho-shift intertwines the dot and ordinary Weyl actions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-weyl-vector-rho-for-a-chosen-positive-system, def-root-reflections-and-the-weyl-group-action]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    - title: "Yiannis Sakellaridis, Verma Modules and the Category O"
      url: "https://web.archive.org/web/20230424132820if_/https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf"
pipeline_run: null
---

## Statement

Let $T$ be the translation operator on polynomial functions on $\mathfrak h^*$ defined by

$$
(Tf)(\lambda):=f(\lambda-\rho).
$$

Then $f$ is invariant under the dot action of $W$ if and only if $Tf$ is invariant under the ordinary action of $W$.

## Facts & Assumptions

**Given:** A Weyl-group element $w\in W$, the Weyl vector $\rho$, and the dot action $w\cdot\lambda:=w(\lambda+\rho)-\rho$.

[F1] The Weyl group acts linearly on $\mathfrak h^*$, and the dot action is defined by $w\cdot\lambda=w(\lambda+\rho)-\rho$ ([[def-root-reflections-and-the-weyl-group-action]], [[def-weyl-vector-rho-for-a-chosen-positive-system]]).

## Proof

**Proof technique:** direct.

1.1 If $f$ is dot-invariant, then for every $w\in W$ and $\lambda\in \mathfrak h^*$ one has $$ (Tf)(w\lambda)=f(w\lambda-\rho)=f\bigl(w\cdot(\lambda-\rho)\bigr)=f(\lambda-\rho)=(Tf)(\lambda), $$ because [F1] gives $$ w\cdot(\lambda-\rho)=w\bigl((\lambda-\rho)+\rho\bigr)-\rho=w\lambda-\rho. $$ [F1, given, algebra]

1.2 Conversely, if $Tf$ is ordinarily $W$-invariant, then for every $w\in W$ and $\lambda\in \mathfrak h^*$, [F1] gives $$ f(w\cdot\lambda)=f\bigl(w(\lambda+\rho)-\rho\bigr)=(Tf)(w(\lambda+\rho))=(Tf)(\lambda+\rho)=f(\lambda). $$ So $f$ is dot-invariant. [F1, given, algebra]

2.1 Thus translation by $\rho$ converts the dot action into the ordinary Weyl action and intertwines their invariant polynomials. [step 1.1, step 1.2] ∎
