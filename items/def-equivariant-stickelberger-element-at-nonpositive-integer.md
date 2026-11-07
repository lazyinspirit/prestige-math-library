---
id: def-equivariant-stickelberger-element-at-nonpositive-integer
kind: definition
title: Equivariant Stickelberger Element at a Nonpositive Integer
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 22
deps:
  - thm-artin-l-series-meromorphic-continuation
  - def-finite-galois-extension-and-galois-group
  - def-group-ring
  - thm-group-ring-is-a-unital-algebra-with-basis-g
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Henri Johnston and Andreas Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: §2.2 and §12.2, printed pp. 6 and 35–36.
verification: {}
---

## Definition

Let $L/K$ be a finite Galois extension of number fields with group $G$, and let $S,T$ be finite disjoint sets of places of $K$, with $S$ containing every infinite and ramified place. For an irreducible complex representation $V_\chi$ with character $\chi$, let $L_S(s,\chi)$ be the meromorphic Artin $L$-function whose Euler factors are $\det(1-(Nv)^{-s}\operatorname{Frob}_v\mid V_\chi^{I_v})^{-1}$ for $v\notin S$, where $I_v$ is inertia, $\operatorname{Frob}_v$ is arithmetic Frobenius, and $Nv$ is the residue-field cardinality. Set $\delta_T(s,\chi)=\prod_{v\in T}\det(1-(Nv)^{1-s}\operatorname{Frob}_v^{-1}\mid V_\chi^{I_v})$. The equivariant modified value $\Theta_{S,T}(s)$ is the central complex-algebra element whose $\chi$-coordinate is $\delta_T(s,\chi)L_S(s,\check\chi)$, where $\check\chi$ is the contragredient character. For $r\le0$, call $\Theta_{S,T}(r)\in\zeta(\mathbb C[G])$ the equivariant Stickelberger element at $r$.

## Definition references

[Johnston and Nickel, §2.2 and §12.2](https://arxiv.org/pdf/2010.03186)

[[thm-group-ring-is-a-unital-algebra-with-basis-g]]

[[thm-artin-l-series-meromorphic-continuation]]
