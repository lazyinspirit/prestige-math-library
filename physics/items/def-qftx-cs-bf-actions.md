---
id: def-qftx-cs-bf-actions
kind: definition
title: "Chern–Simons and BF action data"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: "Pure mathematics; no physical premises or empirical claim."
dependency_level: 0
deps: []
justified_by: []
dependency_roles: {}
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Boris Khesin and Robert Wendt, The Geometry of Infinite-Dimensional Groups"
      url: "https://www.math.utoronto.ca/khesin/papers/Lecture_notes.pdf"
      locator: "§3.2, printed pp. 184–186: the topological Chern–Simons action, its boundary variation, and the induced presymplectic structure."
    - title: "Steven Carlip, Quantum Gravity in 2+1 Dimensions: The Case of a Closed Universe"
      url: "https://arxiv.org/pdf/gr-qc/0409039"
      locator: "§2.3, equations (2.3.1)–(2.3.14): first-order triad/spin-connection action and its Chern–Simons form."
    - title: "John C. Baez, An Introduction to Spin Foam Models of BF Theory and Quantum Gravity"
      url: "https://arxiv.org/pdf/gr-qc/9905087"
      locator: "§2, pp. 4–6: the invariant-pairing BF action and classical field conventions."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $M$ be a compact oriented smooth three-manifold, possibly with smooth boundary, and fix a trivialization of a principal $G$-bundle over $M$, where $G$ has finite-dimensional real Lie algebra $\mathfrak g$. Give $\mathfrak g$ its Lie bracket $[\ ,\ ]_{\mathfrak g}$ and a nondegenerate symmetric bilinear form $\langle\ ,\ \rangle_{\mathfrak g}$ satisfying $\langle[X,Y]_{\mathfrak g},Z\rangle_{\mathfrak g}=\langle X,[Y,Z]_{\mathfrak g}\rangle_{\mathfrak g}$. Write $\Omega^p(M;\mathfrak g)=\Gamma(M,\wedge^pT^*M\otimes\mathfrak g)$ for smooth $\mathfrak g$-valued $p$-forms. Extend the Lie bracket and pairing to homogeneous simple tensors by $[X\otimes\alpha,Y\otimes\beta]=[X,Y]_{\mathfrak g}\otimes(\alpha\wedge\beta)$ and $\langle X\otimes\alpha,Y\otimes\beta\rangle=\langle X,Y\rangle_{\mathfrak g}\,\alpha\wedge\beta$, then extend bilinearly.

A connection in the chosen trivialization is a form $A\in\Omega^1(M;\mathfrak g)$. Its curvature and covariant exterior derivative are $F_A=dA+\tfrac12[A,A]$ and $D_AX=dX+[A,X]$. Define the local Chern–Simons functional and the BF functional, for $B\in\Omega^1(M;\mathfrak g)$, by

$$\operatorname{CS}(A)=\int_M\left\langle A\wedge dA+\tfrac13A\wedge[A,A]\right\rangle,\qquad \operatorname{BF}(B,A)=\int_M\langle B\wedge F_A\rangle.$$

These are integrals of smooth top forms on a compact oriented manifold. The Chern–Simons formula is the local expression in the fixed trivialization; it does not define a globally gauge-invariant exponentiated action on arbitrary nontrivial bundles without additional characteristic-class and level data. No path-integral measure, quantization, or identification with a Reshetikhin–Turaev amplitude is part of this definition.
