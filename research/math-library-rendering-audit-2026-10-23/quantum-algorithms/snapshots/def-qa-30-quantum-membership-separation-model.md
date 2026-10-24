---
id: def-qa-30-quantum-membership-separation-model
kind: definition
title: "Quantum convex membership and weak-separation model"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qa-30-classical-optimizer-interface
  - def-qc-coherent-function-oracle
  - def-qc-inverse-unitary-access
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "https://arxiv.org/pdf/1809.00643v4"
      url: "https://arxiv.org/pdf/1809.00643"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Definition

Let $B(x,t)=\{z\in\mathbb R^n:\|z-x\|_2\le t\}$ and let $B(K,t)=\bigcup_{x\in K}B(x,t)$ for $t\ge0$; $B(K,-t)$ denotes the inward erosion consisting of points whose radius-$t$ ball is contained in $K$. A convex body is a closed convex set with nonempty interior. Assume rationally encoded $0<r\le R$ and $B(0,r)\subseteq K\subseteq B(0,R)$. The deterministic weak-membership oracle $\mathrm{MEM}_{\varepsilon,0}(K)$ is queried at a finite-precision point $y$ and must correctly assert either $y\in B(K,\varepsilon)$ or $y\notin B(K,-\varepsilon)$. In the overlap it may return either valid assertion. The coherent interface is a supplied reversible Boolean unitary with a fixed deterministic completion on every encoded input, together with its inverse and any controlled forms used.

A weak separation oracle $\mathrm{SEP}_{\eta,\rho}(K)$, queried at $y$, with probability at least $1-\rho$, either asserts $y\in B(K,\eta)$ or asserts $y\notin B(K,-\eta)$ and returns a unit vector $g$ satisfying $\langle g,z\rangle\le\langle g,y\rangle+\eta$ for every $z\in B(K,-\eta)$. The membership-to-separation algorithm is promised only on the query domain in its theorem; no unique answer is required in the boundary bands. A finite unit-normal encoding may be a nonzero rational vector v with the normalization g=v/||v|| interpreted exactly; rational bisection supplies an upper norm bound N between ||v|| and2||v|| when a classical reduction requires rational halfspaces. Radius, point, unit-normal and offset encodings and all query/inverse/gate/bit costs are part of the contract.

This specifies oracle behavior; a membership-to-separation theorem and any separation-to-optimization composition are separate claims with their own hypotheses.
