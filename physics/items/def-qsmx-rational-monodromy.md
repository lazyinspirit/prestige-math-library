---
id: def-qsmx-rational-monodromy
kind: definition
title: Ordered auxiliary-space monodromy
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps: [def-hh-rational-spectral-r-matrix]
dependency_roles:
  def-hh-rational-spectral-r-matrix: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "L. D. Faddeev, How Algebraic Bethe Ansatz Works for Integrable Model"
      url: "https://arxiv.org/pdf/hep-th/9605187"
      locator: "Section 3, PDF pp. 7–9, equations (35)–(47): rational Lax operators, ordered monodromy and transfer trace."
    - title: "Classical and Quantum Integrable Systems, Lecture 14: The quantum inverse scattering method, and its classical limit"
      url: "https://vu-ff.github.io/integrability/en/lectures/14/"
      locator: "Sections 14.3–14.5, equations (14.2)–(14.9): Heisenberg Lax operator, monodromy and transfer matrix."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Fix an integer $N\ge3$. Let $V=\mathbb C^2$ with ordered basis
$e_\uparrow,e_\downarrow$, let $V_N=V^{\otimes N}$ in left-to-right site
order, and let $V_a=V$ be an auxiliary copy. For $u\in\mathbb C$, define
$R_{aj}(u)=uI_{aj}+iP_{aj}$ on $V_a\otimes V_N$, where $P_{aj}$ swaps the
auxiliary factor and site $j$. Define
$$T_a(u)=R_{aN}(u)\cdots R_{a1}(u),\qquad t(u)=\operatorname{tr}_a T_a(u),$$
where products mean composition with the rightmost factor acting first, and
$\operatorname{tr}_a$ is the ordinary finite-dimensional trace over $V_a$.
For distinct sites $j,k$, $P_{jk}$ swaps those two tensor factors. Define the
oriented cyclic shift by
$$U(v_1\otimes\cdots\otimes v_N)=v_N\otimes v_1\otimes\cdots\otimes v_{N-1}.$$
The spectral parameter $u$ is dimensionless. All operators in this definition
are finite-dimensional complex-linear endomorphisms.

## Definition references

[[def-hh-rational-spectral-r-matrix]]

[Faddeev, §3, equations (35)–(47)](https://arxiv.org/pdf/hep-th/9605187)

[Classical and Quantum Integrable Systems, Lecture 14, §§14.3–14.5](https://vu-ff.github.io/integrability/en/lectures/14/)
