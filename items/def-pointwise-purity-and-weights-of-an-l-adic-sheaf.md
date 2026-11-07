---
id: def-pointwise-purity-and-weights-of-an-l-adic-sheaf
kind: definition
title: "Pointwise purity and weights of an l-adic sheaf"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-constructible-l-adic-sheaf-on-a-scheme
  - def-frobenius-trace-on-a-constructible-stalk
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Pierre Deligne, La conjecture de Weil: II"
      url: https://www.numdam.org/item/PMIHES_1980__52__137_0.pdf
      locator: §1.2, definitions of pointwise purity and mixed weights
    - title: "Kiran S. Kedlaya, Weil Cohomology in Practice"
      url: https://kskedlaya.org/weil-cohom/chapter-16.html
      locator: §§16.1.8–16.1.14, weight convention and Deligne's curve theorem
verification:
  precheck: pending
---

## Definition

Fix a prime power $q$, a prime $\ell$ not dividing $q$, and an embedding $\iota:\overline{\mathbb Q}_\ell\hookrightarrow\mathbb C$. Let $X$ be a finite-type scheme over $\mathbb F_q$ and let $\mathcal F$ be a constructible $\overline{\mathbb Q}_\ell$-sheaf on $X$. If $x$ is a closed point of degree $d$ and $\alpha$ is an eigenvalue of geometric Frobenius on the geometric stalk $\mathcal F_{\bar x}$, then $\alpha$ has weight $w\in\mathbb R$ under $\iota$ when $|\iota(\alpha)|=q^{dw/2}$. The sheaf is **pointwise pure of weight $w$** if every such eigenvalue has weight $w$, and it is **pointwise mixed of weights at most $w$** if every such eigenvalue satisfies $|\iota(\alpha)|\le q^{dw/2}$. A sheaf is **$\iota$-mixed of weights at most $w$** if it admits a finite filtration by constructible subsheaves whose nonzero successive quotients are pointwise $\iota$-pure of fixed real weights at most $w$. This finite-filtration notion is distinct from the weaker displayed closed-stalk bound, which will also be called **pointwise eigenvalue-bounded of weights at most $w$**. The geometric Frobenius convention is inverse arithmetic Frobenius.

## Definition references

[[def-constructible-l-adic-sheaf-on-a-scheme]]

[[def-frobenius-trace-on-a-constructible-stalk]]

[Deligne, *La conjecture de Weil: II*, §1.2](https://www.numdam.org/item/PMIHES_1980__52__137_0.pdf)

[Kedlaya, *Weil Cohomology in Practice*, §16.1](https://kskedlaya.org/weil-cohom/chapter-16.html)


## Terminology and source-interface warning

The displayed phrase "pointwise mixed of weights at most $w$" currently records only a closed-stalk eigenvalue bound. In Deligne, Weil II Definitions1.2.2 and1.2.6, an $\iota$-mixed sheaf instead has a finite filtration with pointwise $\iota$-pure successive quotients; the quotient weights are the pointwise weights. A finite filtration of this kind with every quotient weight at most $w$ implies the displayed bound, because a stalk matrix in a basis adapted to the filtration is block triangular. The reverse implication is not supplied here. The generic weight theorem uses genuine mixedness as required by the approved design. Its broader native assertion with only the weaker closed-stalk upper-bound hypothesis remains an explicitly held obligation: no equivalence or extension to that class is asserted. This warning does not replace the missing established proof by an open-problem label.
