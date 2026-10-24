---
id: def-it-classical-quantum-state-and-holevo-information
kind: definition
title: Finite classical-quantum states and Holevo information
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-it-von-neumann-entropy, def-it-finite-quantum-information-measures, lem-it-finite-cq-block-sum-is-a-state, lem-it-partial-traces-of-a-state-are-states, def-qc-density-operator, def-qc-register-and-computational-basis, def-qc-tensor-register-and-permutation, def-qc-first-factor-partial-trace]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §5.3.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, §11.1"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Definition

Let $X$ be a finite nonempty classical label set, represented by a register $H_X$ with computational orthonormal basis $(\xi_x)_{x\in X}$ ([[def-qc-register-and-computational-basis]]). For each $x$, write $\Pi_xz:=\langle z,\xi_x\rangle\xi_x$, the rank-one orthogonal projection using the root linear-first convention, as in [[lem-it-finite-cq-block-sum-is-a-state]]. Let $H_B$ be a nonzero finite-dimensional complex inner-product space. A finite **classical-quantum state** is

$$\rho_{XB}:=\sum_{x\in X}p_x\Pi_x\otimes\rho_x,$$

where $p_x\ge0$, $\sum_xp_x=1$, and each $\rho_x$ is a density operator on $H_B$. It is a density operator by [[lem-it-finite-cq-block-sum-is-a-state]]. Its quantum marginal is $\bar\rho_B:=\sum_xp_x\rho_x=\operatorname{Tr}_X\rho_{XB}$ by the first-factor partial-trace formula in [[def-qc-first-factor-partial-trace]], and it is a density operator by [[lem-it-partial-traces-of-a-state-are-states]]. The **Holevo information** of this ensemble is

$$\chi(\{p_x,\rho_x\}_{x\in X}):=S(\bar\rho_B)-\sum_{x:p_x>0}p_xS(\rho_x),$$

where zero-probability branches contribute nothing. This is measured in nats under [[def-it-von-neumann-entropy]].

