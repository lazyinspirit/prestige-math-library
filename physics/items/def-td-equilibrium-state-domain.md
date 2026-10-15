---
id: def-td-equilibrium-state-domain
kind: definition
title: Equilibrium state domains
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Equilibrium macrostates of nonrelativistic, macroscopic, simple-compressible systems represented by internal energy, volume, and named mole amounts, with admitted preparations recorded in a supplied center-of-mass rest chart; no stability or constitutive law follows from this definition.
deps: [def-td-si-quantities, def-td-system-and-permitted-exchanges, def-td-galilean-rest-frame, def-natural-numbers, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, def-convex-subset-of-euclidean-space, def-probability-measure, def-function, def-subset-and-proper-subset]
dependency_roles:
  def-td-si-quantities: formulation-prerequisite
  def-td-system-and-permitted-exchanges: formulation-prerequisite
  def-td-galilean-rest-frame: formulation-prerequisite
  def-natural-numbers: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  def-convex-subset-of-euclidean-space: mathematical-premise
  def-probability-measure: mathematical-premise
  def-function: mathematical-premise
  def-subset-and-proper-subset: mathematical-premise
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §II.A
      url: https://arxiv.org/pdf/cond-mat/9708200v2
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §III.A
      url: https://arxiv.org/pdf/cond-mat/9708200v2
    - title: Ling, Moebs, and Sanny, University Physics Volume 2, §3.1 Thermodynamic Systems
      url: https://openstax.org/books/university-physics-volume-2/pages/3-1-thermodynamic-systems
dependency_level: 2
---

## Definition

Fix a system $s$ as in [[def-td-system-and-permitted-exchanges]]. A material constitution $c$ specifies a finite ordered list of named species $(\sigma_1,\ldots,\sigma_r)$, with $r\in\mathbb N$ ([[def-natural-numbers]]) and $r\ge1$, and the model parameters that identify the material. An equilibrium-preparation label in the set $E_c$ selects a single macrostate that the model designates as an equilibrium state for constitution $c$. The equilibrium designation is primitive model input here; it is not a dynamical equilibration theorem or a global-stability claim. For each admitted preparation, its mechanical model supplies a positive total mass and a defined center-of-mass velocity as in [[def-td-galilean-rest-frame]], so the allowed boost can select a center-of-mass rest chart in which its internal energy is recorded. A preparation for which these mechanical data are unavailable lies outside this framework. A statistical preparation that instead supplies a normalized probability measure on a declared measurable space is as in [[def-probability-measure]] and belongs to a separate statistical branch; it is an element of $E_c$ only if that model also assigns it a single equilibrium macrostate.

Each $e\in E_c$ is assigned a unique coordinate tuple $(U,V,n_1,\ldots,n_r)$, where $U$ is the adopted internal-energy coordinate in joules as in [[def-td-galilean-rest-frame]], $V>0$ is volume in cubic metres, and each $n_j>0$ is an amount in moles; the SI unit assignments are those of [[def-td-si-quantities]]. These are real-valued mole amounts in the bulk continuous chart, not integer particle counts. Define the dimensionless numerical coordinates $\hat U=U/(1\,\mathrm J)$, $\hat V=V/(1\,\mathrm{m^3})$, and $\hat n_j=n_j/(1\,\mathrm{mol})$. The representation map $\pi_c:E_c\to\mathbb R^{r+2}$ is a function as in [[def-function]], sends $e$ to $(\hat U,\hat V,\hat n_1,\ldots,\hat n_r)$, and the equilibrium state domain is its image $D_c:=\pi_c(E_c)\subseteq\mathbb R^{r+2}$ using inclusion as in [[def-subset-and-proper-subset]]. For $x=(\hat U,\hat V,\hat n_1,\ldots,\hat n_r)\in D_c$, write $U_c(x):=\hat U\,\mathrm J$, $V_c(x):=\hat V\,\mathrm{m^3}$, and $n_{c,j}(x):=\hat n_j\,\mathrm{mol}$ for its dimensioned coordinates. Preparation labels with the same coordinate tuple represent the same thermodynamic state in this framework. Statistical preparations that specify a probability law belong to a separate branch and are not used in this state-domain definition.

For fixed $n=(n_1,\ldots,n_r)$ in a chart used by the model, write $\Gamma_{c,n}=\{(\hat U,\hat V):(\hat U,\hat V,\hat n)\in D_c\}\subseteq\mathbb R^2$, with inclusion notation as in [[def-subset-and-proper-subset]]. This designated slice is a specified nonempty open convex subset. With the dimensionless Euclidean norm $\|\cdot\|_2$ of [[def-euclidean-inner-product]] (a norm by [[thm-cauchy-schwarz-and-the-euclidean-norm]]), openness means that every $z\in\Gamma_{c,n}$ has some $\epsilon>0$ for which $\{w\in\mathbb R^2:\|w-z\|_2<\epsilon\}\subseteq\Gamma_{c,n}$. Convexity means that $(1-t)z_0+tz_1\in\Gamma_{c,n}$ whenever $z_0,z_1\in\Gamma_{c,n}$ and $t\in[0,1]$, as in [[def-convex-subset-of-euclidean-space]]. Both properties are assumptions about the particular slice, not conclusions about every $D_c$; no coordinate tuple is presumed physically realizable merely because it lies in an ambient Euclidean space. A zero amount for an absent species belongs only to a separately specified boundary domain and is not in this positive-mole chart.

In a simple-compressible chart, volume $V$ is the only mechanical coordinate in the equilibrium representation; composition changes, fields, polarization, surface terms, and other mechanical coordinates require a separately declared state domain and exchange rules. No pressure or reversible-work formula follows from this definition.
