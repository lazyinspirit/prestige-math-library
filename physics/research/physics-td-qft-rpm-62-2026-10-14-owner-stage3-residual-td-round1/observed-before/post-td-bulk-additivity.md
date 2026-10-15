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
dependency_level: 3
---

## Postulate

Let $A$ and $B$ be two named subsystems with disjoint physical regions as in [[def-td-system-and-permitted-exchanges]], combined as a compound system $A\sqcup B$ inside a declared outer boundary. Fix their material constitutions $c_A,c_B$, each with a finite ordered list of distinct species labels as in [[def-td-equilibrium-state-domain]]. Fix an ordering $(\sigma_1,\ldots,\sigma_r)$ of the labels occurring in either list, each occurring once, and use this as the species list of the compound constitution $c_{A\sqcup B}$. For $s\in\{A,B,A\sqcup B\}$, write $D_s:=D_{c_s}$ and use $U_s,V_s$ for its dimensioned coordinate maps. For every $1\le j\le r$, define the aligned amount map $a_{s,j}:D_s\to[0,\infty)\,\mathrm{mol}$ by $a_{s,j}(x):=n_{c_s,k}(x)$ if $\sigma_j$ is the $k$-th species in $c_s$'s list, and $a_{s,j}(x):=0\,\mathrm{mol}$ if it is absent. Distinctness makes $k$ unique. The absent-species value is a bookkeeping map on the existing $D_s$; it does not insert a zero coordinate into that constitution's positive-mole chart or assert a boundary-state extension.

The model's admitted separated pairs form a specified subset $\mathcal C_{AB}\subseteq D_A\times D_B$ using [[def-subset-and-proper-subset]] and [[def-cartesian-product]]. Adopt a composition function $\kappa_{AB}:\mathcal C_{AB}\to D_{A\sqcup B}$ ([[def-function-space]]) such that, for every $(x_A,x_B)\in\mathcal C_{AB}$ and every $1\le j\le r$, its output satisfies
$$U_{A\sqcup B}(\kappa_{AB}(x_A,x_B))=U_A(x_A)+U_B(x_B),\qquad V_{A\sqcup B}(\kappa_{AB}(x_A,x_B))=V_A(x_A)+V_B(x_B),\qquad a_{A\sqcup B,j}(\kappa_{AB}(x_A,x_B))=a_{A,j}(x_A)+a_{B,j}(x_B).$$
All quantities have the SI units of [[def-td-si-quantities]]. Each union species is present in at least one constituent with positive amount, so the summed amount is positive and agrees with the compound's $j$-th coordinate. The existence of an output in the declared $D_{A\sqcup B}$ is part of the adopted model, not a consequence of positivity.

Here “extensive coordinates” means precisely the named coordinates declared additive by this postulate. This is an idealized composition rule: cross-interface and long-range interaction energy is omitted from $U_{A\sqcup B}$, rather than asserted to vanish in nature. The postulate does not assert that every pair of subsystem states is physically admissible.

The framework's bulk family is a tagged family of material types. For each dimensionless scale $\lambda>0$ the model may designate a tag $c^{(\lambda)}$ with the same ordered species list and SI coordinate conventions as $c$, and a subset $B_{c,\lambda}\subseteq D_c$ of states admitting a scaled copy, with inclusion as in [[def-subset-and-proper-subset]]. For $x=(\hat U,\hat V,\hat n_1,\ldots,\hat n_r)\in B_{c,\lambda}$, the scaling map is the function $\delta_\lambda:B_{c,\lambda}\to D_{c^{(\lambda)}}$ ([[def-function-space]]) given by $\delta_\lambda(x)=(\lambda\hat U,\lambda\hat V,\lambda\hat n_1,\ldots,\lambda\hat n_r)$. The tag matters: $c^{(\lambda)}$ is not silently identified with $c$. This postulate specifies the coordinate scaling model and energy additivity only; it does not postulate entropy additivity or exact scaling for every finite physical body.

This is an adopted physical composition rule, not a deduction from SI units or from the mathematics of Cartesian products.
