---
id: alg-csm-frontier-swendsen-wang
kind: algorithm
title: Finite Potts Swendsen–Wang update
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-csm-frontier-finite-potts-fk
dependency_roles:
  def-csm-frontier-finite-potts-fk: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Geoffrey R. Grimmett, The Random-Cluster Model"
      url: https://arxiv.org/pdf/math/0205237
      locator: "§§2.2–2.3, printed pp. 6–9 (PDF pp. 5–8), and §8.3 (PDF pp. 38–39): finite Potts/FK coupling and the two-stage Swendsen–Wang update."
    - title: "Hugo Duminil-Copin, Geometric Representations of Lattice Spin Models, Cours Peccot lecture notes"
      url: https://www.ihes.fr/~duminil/publi/Courspeccot2.pdf
      locator: "Chapter 3, §§3.1–3.2, printed pp. 23–26: finite random-cluster weights and conditional cluster coloring."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Input a finite simple graph $G=(V,E)$, an integer $Q\geq2$, finite activities $v_e\geq0$ for $e\in E$, and a spin configuration $\sigma:V\to[Q]$, using the Potts and FK conventions of the finite Potts/FK weight definition. For each edge $e=\{u,v\}$, if $\sigma(u)\ne\sigma(v)$ set $e$ absent. If $\sigma(u)=\sigma(v)$, draw an independent uniform $U_e\in[0,1]$ and place $e$ in $A$ exactly when $U_e<v_e/(1+v_e)$. For each connected component of $(V,A)$, draw an independent uniform $U_C\in[0,1]$ and assign its vertices the common color $1+\lfloor Q U_C\rfloor$, with the value $Q$ used when $U_C=1$. Return the resulting spin configuration $\sigma'$. The finite graph has finitely many edges and components, so the procedure uses finitely many draws and operations. At $v_e=0$ the edge is never activated; finite $v_e$ ensures the activation probability is less than one.

## Definition references

[[def-csm-frontier-finite-potts-fk]]

## Remarks

The algorithm defines one full update of a finite-state chain. Its definition asserts neither rapid mixing nor any bound uniform in graph size, temperature, or critical parameters.
