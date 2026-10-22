---
id: def-qsmx-local-conditional-expectation
kind: definition
title: Normalized-trace expectation onto a finite spin region
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
deps:
  - def-qsm-local-spin-algebras
  - def-qsm-quasilocal-spin-algebra
dependency_roles:
  def-qsm-local-spin-algebras: mathematical-premise
  def-qsm-quasilocal-spin-algebra: mathematical-premise
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "S. Bachmann, S. Michalakis, B. Nachtergaele, and R. Sims, Automorphic Equivalence within Gapped Phases of Quantum Lattice Systems, §4.3"
      url: "https://arxiv.org/pdf/1102.0842"
---

## Definition

Let $X,Y\subset\mathbb Z^d$ be finite regions and $A\in\mathcal A_Y$. Embed $A$ in $\mathcal A_{X\cup Y}$, use the canonical site-order permutation to group factors in $X\cap Y$ and $Y\setminus X$, and apply the normalized trace on the omitted factors:

$$E_X(A):=\bigl(\operatorname{id}_{\mathcal A_{X\cap Y}}\otimes \tau_{Y\setminus X}\bigr)(A)\otimes I_{X\setminus Y}\in\mathcal A_X,\qquad \tau_D:=q^{-|D|}\operatorname{Tr}_D.$$

The empty tensor factor has normalized trace $1$. Since $\tau_D(I_D)=1$, adding an identity factor does not change the result, so this formula consistently defines $E_X$ on the directed union $\mathcal A_{\mathrm{loc}}$. This definition alone asserts no norm extension to its completion.

## Statement references

[[def-qsm-local-spin-algebras]]

[[def-qsm-quasilocal-spin-algebra]]

