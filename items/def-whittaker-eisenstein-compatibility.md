---
id: def-whittaker-eisenstein-compatibility
kind: definition
title: "Whittaker–Eisenstein compatibility"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-categorical-local-langlands-framework
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Hansen and Lucas Mann, The Categorical Local Langlands Conjecture, Conjecture 1.6.2"
      url: "https://arxiv.org/pdf/2606.00983v2"
    - title: "David Hansen, Beijing Notes on the Categorical Local Langlands Conjecture, §1.4 and Conjecture 1.4.7"
      url: "https://arxiv.org/pdf/2310.04533"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice and the categorical local Langlands setup above.
For every standard Levi subgroup $M$ of a quasi-split group $G$ and every
standard parabolic subgroup $P\subseteq M$ with Levi subgroup $L$, the
**Whittaker–Eisenstein compatibility condition** $(\mathrm{Eis})$ is the
existence of a natural equivalence of functors
$$c_{\psi_M}\circ\operatorname{Eis}_{P}^{-!}\simeq\operatorname{Eis}_{P}^{\mathrm{spec,crs}}\circ c_{\psi_L}:D(\operatorname{Bun}_L)^\omega\longrightarrow\operatorname{QCoh}(\operatorname{Par}_M).$$
Here $\operatorname{Eis}_{P}^{-!}$ is the geometric Eisenstein functor on the
automorphic categories for the opposite-parabolic construction, while
$\operatorname{Eis}_{P}^{\mathrm{spec,crs}}$ is the naive push-pull functor on
quasi-coherent sheaves induced by
$\operatorname{Par}_L\leftarrow\operatorname{Par}_P\to\operatorname{Par}_M$.
The superscript $\omega$ denotes compact objects, and $\operatorname{Par}_P$
is the derived parameter stack for the parabolic subgroup.
The diagram defining the compatibility compares these two composites:

```tikzcd
D(\operatorname{Bun}_L)^\omega \arrow[r, "c_{\psi_L}"] \arrow[d, "\operatorname{Eis}_{P}^{-!}"']
& \operatorname{QCoh}(\operatorname{Par}_L) \arrow[d, "\operatorname{Eis}_{P}^{\mathrm{spec,crs}}"] \\
D(\operatorname{Bun}_M)^\omega \arrow[r, "c_{\psi_M}"']
& \operatorname{QCoh}(\operatorname{Par}_M)
```

The condition requires the square to commute up to the displayed natural
equivalence for every such pair $(M,P)$, including $M=G$. It is a conjectural
hypothesis in the Hansen–Mann theorem, not an established conclusion of that
theorem.

## Definition references

[[def-categorical-local-langlands-framework]]

[[def-axiom-of-choice]]

[David Hansen and Lucas Mann, *The Categorical Local Langlands Conjecture*, Conjecture 1.6.2](https://arxiv.org/pdf/2606.00983v2)

[David Hansen, *Beijing Notes on the Categorical Local Langlands Conjecture*, §1.4 and Conjecture 1.4.7](https://arxiv.org/pdf/2310.04533)
