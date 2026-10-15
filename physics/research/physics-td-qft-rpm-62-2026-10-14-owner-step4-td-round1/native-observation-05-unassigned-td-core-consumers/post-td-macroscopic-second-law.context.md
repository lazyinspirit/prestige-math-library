---
id: post-td-macroscopic-second-law
kind: postulate
title: Macroscopic second law for isolated compounds
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Endpoint entropy changes for admitted macroscopic processes of an isolated compound, including its named auxiliaries; no pointwise entropy function is assigned to nonequilibrium intermediate configurations.
deps: [post-td-concave-fundamental-entropy, def-td-system-and-permitted-exchanges, def-td-process-and-protocol, def-td-reversible-process, def-td-isolated-compound-feasible-set, def-finite-sum]
dependency_roles:
  post-td-concave-fundamental-entropy: formulation-prerequisite
  def-td-system-and-permitted-exchanges: formulation-prerequisite
  def-td-process-and-protocol: formulation-prerequisite
  def-td-reversible-process: formulation-prerequisite
  def-td-isolated-compound-feasible-set: formulation-prerequisite
  def-finite-sum: formulation-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: David Tong, Statistical Physics, Chapter 4 of the complete author-hosted lecture notes, §4.3
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§2.5–2.6
      url: https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§II.F and IV.A
      url: https://arxiv.org/pdf/cond-mat/9708200v2
dependency_level: 6
---

## Postulate

For every admitted closed process record $P\in\mathcal P_{\mathrm{cl}}(s)$ of an isolated compound, assume its declared outer boundary is isolated throughout, its material constitution is fixed, its center-of-mass kinetic and separately tracked external-field potential energies have zero endpoint change, and both endpoint preparations are equilibrium macrostates. Include every named auxiliary and work device in the compound. Fix the finite constituent split $s_1,\ldots,s_m$ used for the endpoint bookkeeping, with $m\in\mathbb N$, $m\ge1$, and constitutions $c_1,\ldots,c_m$. Every additional named auxiliary or work device has an endpoint set $Y_j$, energy map, and adopted entropy map $S_j^{\mathrm{aux}}$ as in [[def-td-isolated-compound-feasible-set]]. Every constituent whose entropy can change must occur either in the thermodynamic split or through one of these explicit auxiliary maps. Every auxiliary is retained in the complete endpoint tuples and energy constraints. An explicitly entropy-neutral device may be assigned $S_j^{\mathrm{aux}}=0$; more generally an auxiliary with declared zero endpoint entropy change cancels in the displayed inequality, while its variable state and energy remain in $\mathcal F$. Its endpoint product is

$$\mathcal D_{\mathrm{all}}:=(D_{c_1}\times\cdots\times D_{c_m})\times Y_1\times\cdots\times Y_k,\qquad \mathcal F\subseteq\mathcal D_{\mathrm{all}},$$

where $\mathcal F$ is the model-declared feasible endpoint set for the fixed totals, retained barriers, and permitted exchanges, as in [[def-td-isolated-compound-feasible-set]]. The process model supplies an endpoint association on the two formal endpoint labels $-$ and $+$:

$$\rho_P:\{-,+\}\longrightarrow\mathcal F,\qquad \rho_P(-)=\mathbf x_P^-=(x_{1,P}^-,\ldots,x_{m,P}^-,y_{1,P}^-,\ldots,y_{k,P}^-),\qquad \rho_P(+)=\mathbf x_P^+=(x_{1,P}^+,\ldots,x_{m,P}^+,y_{1,P}^+,\ldots,y_{k,P}^+),$$

where $\mathbf x_P^-$ and $\mathbf x_P^+$ are respectively the declared constituent-state tuples including all auxiliary endpoint states and representing the aggregate equilibrium endpoints $x_P^-$ and $x_P^+$ of $P$. Both tuples must belong to the same $\mathcal F$. Restrict to endpoint splits admitted by [[post-td-concave-fundamental-entropy]] as a collection of independent separated macroscopic systems, so that its additive entropy rule applies to the macroscopic split; additionally adopt additivity of the explicitly modeled auxiliary entropy contributions for the complete compound. For $k=0$ this is the original thermodynamic-only split. On this admitted $\mathcal F$, define

$$S_{\mathrm{tot}}(\mathbf x):=\sum_{i=1}^{m}S_{c_i}(x_i)+\sum_{j=1}^{k}S_j^{\mathrm{aux}}(y_j)\qquad\left(\mathbf x=(x_1,\ldots,x_m,y_1,\ldots,y_k)\in\mathcal F\right).$$

This uses the finite-sum convention of [[def-finite-sum]].

The adopted macroscopic second law is

$$S_{\mathrm{tot}}(\rho_P(+))-S_{\mathrm{tot}}(\rho_P(-))\ge0.$$

The process record and the zero-change conditions are those of [[def-td-process-and-protocol]]. The process may pass through nonequilibrium configurations; this postulate compares endpoint entropies only and assigns no entropy function to those intermediate configurations.

For an admitted reversible operation in the sense of [[def-td-reversible-process]], adopt $S_{\mathrm{tot}}(\rho_P(+))-S_{\mathrm{tot}}(\rho_P(-))=0$. An admitted irreversible adiabatic operation may have a strictly positive entropy increase, but strict increase is not required for every irreversible operation. The postulate does not state monotonicity for an open compound, an externally driven process, a subsystem that exchanges energy with an omitted environment, or every microscopic trajectory.
