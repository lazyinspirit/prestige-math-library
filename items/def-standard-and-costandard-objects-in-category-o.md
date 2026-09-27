---
id: "def-standard-and-costandard-objects-in-category-o"
kind: "definition"
title: "Standard and costandard objects"
deps: ["def-axiom-of-choice", "def-restricted-dual-of-a-weight-module", "prop-restricted-duality-is-an-exact-involution-on-category-o", "def-verma-module"]
sources:
  references:
    - title: "Lecture 8 §3 Definition 3.12, p.5"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
status: published
origin: "pipeline"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-06-receipts.jsonl (def-standard-and-costandard-objects-in-category-o). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Definition

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$.

For $\lambda\in\mathfrak h^*$, define the **standard** and **costandard** weight modules by

$$\Delta(\lambda)=M(\lambda),\qquad\nabla(\lambda)=D(M(\lambda)).$$

The Verma module is defined in [[def-verma-module]], and its restricted dual is defined in [[def-restricted-dual-of-a-weight-module]]. Under the Axiom of Choice ([[def-axiom-of-choice]]), [[prop-restricted-duality-is-an-exact-involution-on-category-o]] places $\nabla(\lambda)$ in $\mathcal O$, so both displayed modules are objects of that category. These symbols impose no projectivity or highest-weight-category axiom.
