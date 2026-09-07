---
id: "def-standard-and-costandard-objects-in-category-o"
kind: "definition"
title: "Standard and costandard objects"
deps: ["prop-restricted-duality-is-an-exact-involution-on-category-o", "def-verma-module"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lecture 8 §3 Definition 3.12, p.5"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
status: published
origin: "pipeline"
---

## Definition

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$.

For $\lambda\in\mathfrak h^*$, the **standard** and **costandard** objects are

$$\Delta(\lambda)=M(\lambda),\qquad\nabla(\lambda)=D(M(\lambda)).$$

The Verma module is defined in [[def-verma-module]], and [[prop-restricted-duality-is-an-exact-involution-on-category-o]] supplies the duality on $\mathcal O$. These symbols name the two objects; no projectivity or highest-weight-category axiom is part of this definition.
