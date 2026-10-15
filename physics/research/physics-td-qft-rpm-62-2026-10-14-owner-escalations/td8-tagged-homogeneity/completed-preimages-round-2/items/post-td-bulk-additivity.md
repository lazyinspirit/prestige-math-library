---
id: post-td-bulk-additivity
kind: postulate
title: Additive separated systems and tagged bulk scaling
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Separated macroscopic subsystems in the declared bulk family when interface and long-range interaction energy are excluded; no claim is made for interacting, surface-dominated, or gravitational systems.
deps: [def-td-equilibrium-state-domain, def-td-system-and-permitted-exchanges, def-td-si-quantities, def-cartesian-product, def-function-space, def-subset-and-proper-subset]
dependency_roles:
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-system-and-permitted-exchanges: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-cartesian-product: mathematical-premise
  def-function-space: mathematical-premise
  def-subset-and-proper-subset: mathematical-premise
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §II.A
      url: https://arxiv.org/pdf/cond-mat/9708200v2
    - title: Ling, Moebs, and Sanny, University Physics Volume 2, §3.1 Thermodynamic Systems
      url: https://openstax.org/books/university-physics-volume-2/pages/3-1-thermodynamic-systems
---

## Postulate

Let $A$ and $B$ be two named subsystems with disjoint physical regions as in [[def-td-system-and-permitted-exchanges]], combined as a compound system $A\sqcup B$ inside a declared outer boundary. The model's admitted separated pairs form a specified subset $\mathcal C_{AB}\subseteq D_A\times D_B$ using [[def-subset-and-proper-subset]] and [[def-cartesian-product]]. For every pair $(x_A,x_B)\in\mathcal C_{AB}$, the composition map $\kappa_{AB}:\mathcal C_{AB}\to D_{A\sqcup B}$ is a function ([[def-function-space]]) adopted so the dimensioned coordinates of its output satisfy
$$U_{A\sqcup B}(\kappa_{AB}(x_A,x_B))=U_A(x_A)+U_B(x_B),\qquad V_{A\sqcup B}(\kappa_{AB}(x_A,x_B))=V_A(x_A)+V_B(x_B),\qquad n_{A\sqcup B,j}(\kappa_{AB}(x_A,x_B))=n_{A,j}(x_A)+n_{B,j}(x_B).$$
Here each coordinate function is the dimensioned map of [[def-td-equilibrium-state-domain]] for its material constitution, with SI units as in [[def-td-si-quantities]].

Here “extensive coordinates” means precisely the named coordinates declared additive by this postulate. Amount coordinates are aligned by species label; when a species is absent from one subsystem, its zero amount is in a separately declared composition boundary, not the positive-mole chart of [[def-td-equilibrium-state-domain]]. This is an idealized composition rule: cross-interface and long-range interaction energy is omitted from $U_{A\sqcup B}$, rather than asserted to vanish in nature. The postulate does not assert that every pair of subsystem states is physically admissible.

The framework's bulk family is a tagged family of material types. For each dimensionless scale $\lambda>0$ the model may designate a tag $c^{(\lambda)}$ and a subset $B_{c,\lambda}\subseteq D_c$ of states admitting a scaled copy, with inclusion as in [[def-subset-and-proper-subset]]. For $x=(\hat U,\hat V,\hat n_1,\ldots,\hat n_r)\in B_{c,\lambda}$, the scaling map is the function $\delta_\lambda:B_{c,\lambda}\to D_{c^{(\lambda)}}$ ([[def-function-space]]) given by $\delta_\lambda(x)=(\lambda\hat U,\lambda\hat V,\lambda\hat n_1,\ldots,\lambda\hat n_r)$. The tag matters: $c^{(\lambda)}$ is not silently identified with $c$. This postulate specifies the coordinate scaling model and energy additivity only; it does not postulate entropy additivity or exact scaling for every finite physical body.

This is an adopted physical composition rule, not a deduction from SI units or from the mathematics of Cartesian products.
