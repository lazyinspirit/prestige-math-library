---
id: def-emg-fx-stationary-axisymmetric-setup
kind: definition
title: "Stationary-axisymmetric geometry and circularity domain"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - def-emg-lorentzian-forms
  - def-gr-killing-field
  - def-emg-causal-solution-and-horizon-vocabulary
  - def-emg-local-potentials-and-circle-data
  - def-c-r-and-smooth-maps-between-smooth-manifolds
  - def-lie-derivative-of-a-tensor-field
  - def-directional-and-partial-derivatives
dependency_roles:
  def-emg-lorentzian-forms: mathematical-premise
  def-gr-killing-field: mathematical-premise
  def-emg-causal-solution-and-horizon-vocabulary: mathematical-premise
  def-emg-local-potentials-and-circle-data: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-lie-derivative-of-a-tensor-field: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
reference: research/plan-einstein-maxwell-models-frontier-expansion-track.md#reduced-stationary-uniqueness-and-explicit-research-boundaries
sources:
  references:
    - title: "P. T. Chruściel, J. Lopes Costa and M. Heusler, Stationary Black Holes: Uniqueness and Beyond, Living Reviews in Relativity 15 (2012), article 7, arXiv:1205.6112v1"
      url: https://arxiv.org/pdf/1205.6112
      locator: "Sections 2.1–2.3, PDF pp. 4–6; §3.2.1, PDF pp. 12–13; §6.1, pp. 30–31; and §8.1, pp. 41–42: Killing fields, stationary and axial symmetry, symmetry inheritance and orthogonal integrability. The local definition here makes only the displayed geometric assumptions."
    - title: "Pawel O. Mazur, Black Hole Uniqueness Theorems, arXiv:hep-th/0101012v1 (2000; based on the 1986 GR11 plenary lecture)"
      url: https://arxiv.org/pdf/hep-th/0101012
      locator: "Section II, PDF pp. 2–3: the distinct causal signatures produced by stationary and axial reductions and the loss of target positivity across an ergoregion."
provenance:
  statement: ai-altered
  proof: not-applicable
---

## Definition

Let $(M,g,N,o)$ be a smooth, Hausdorff, second-countable, boundaryless, oriented and time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$, with smooth future timelike time-orientation field $N$, and let $U\subseteq M$ be a nonempty connected open set. A **stationary field on $U$** is a specified smooth Killing field $k$ that is timelike on a specified nonempty open subset of $U$; no normalization or global timelikeness is inferred.

Here $U(1)=\{z\in\mathbb C:|z|=1\}$ with complex multiplication and the smooth circle-group structure fixed in [[def-emg-local-potentials-and-circle-data]]. An **axial $U(1)$ action on $U$** is a specified smooth map $\rho:U(1)\times U\to U$ satisfying $\rho(1,p)=p$ and $\rho(z_1z_2,p)=\rho(z_1,\rho(z_2,p))$, with $\rho(z,\cdot)^*g=g$ for every $z$; effective means that only $z=1$ acts identically on all of $U$. Its generator is the smooth vector field $m$ defined by $m_p=\frac{d}{d\theta}|_{\theta=0}\rho(e^{i\theta},p)$; the parameter has period $2\pi$. Its **axis** is the fixed-point set $\mathcal A:=\{p\in U:\rho(z,p)=p\text{ for every }z\in U(1)\}$. For this page, an **axisymmetric region** is a region supplied with such an effective action and satisfying $g(m,m)>0$ on $U\setminus\mathcal A$. A stationary field and axial generator **commute** when their Lie bracket vanishes; in coordinates this means $\sum_a(k^a\partial_a m^b-m^a\partial_a k^b)=0$ for every component $b$.

Define

$$U_*:=\{p\in U\setminus\mathcal A:k_p,m_p\text{ are linearly independent and }g_p|_{\operatorname{span}\{k_p,m_p\}}\text{ is nondegenerate}\}.$$

Because $M$ is Hausdorff, each fixed set $\{p:\rho(z,p)=p\}$ is closed in $U$: it is the preimage of the closed diagonal in $U\times U$ under $p\mapsto(\rho(z,p),p)$. Their intersection $\mathcal A$ is closed, so $U\setminus\mathcal A$ is open. In a chart, linear independence is witnessed by a nonzero $2\times2$ minor of the $4\times2$ coordinate matrix with columns $k$ and $m$, and nondegeneracy is $\det G\ne0$ for the continuous Gram matrix $G_{ij}:=g(K_i,K_j)$, where $K_1:=k$ and $K_2:=m$. These are open conditions, so $U_*$ is open. On $U_*$ the matrix $G$ is invertible. Its inverse entries are smooth by the cofactor-over-determinant formula. The smooth map

$$\Pi_p(v):=\sum_{i,j=1}^2K_i(p)(G(p)^{-1})_{ij}g_p(K_j(p),v)$$

is a projection onto $\operatorname{span}\{k,m\}$, since it fixes each $K_i$ and $v-\Pi_p(v)$ is orthogonal to both generators. Therefore

$$\mathcal D_p:=\ker\Pi_p=\{v\in T_pM:g_p(v,k_p)=g_p(v,m_p)=0\}$$

is a smooth rank-two distribution on $U_*$: the projection has rank two in each tangent space, and its kernel has dimension $4-2=2$. The kernel varies smoothly because, locally, a nonzero two-by-two minor lets one solve its two linear equations smoothly for two components in terms of the other two.

An **immersed surface through $p$** here means the image of a smooth immersion $\sigma:S\to U_*$ from a two-dimensional smooth manifold $S$, with $p\in\sigma(S)$; immersion means that $d\sigma_q:T_qS\to T_{\sigma(q)}U_*$ is injective for every $q\in S$. Its tangent plane at $\sigma(q)$ is $d\sigma_q(T_qS)$. **Circularity on $U_*$** means that through every point of $U_*$ there is such a local immersed surface with $d\sigma_q(T_qS)=\mathcal D_{\sigma(q)}$ at every point of its domain.

These are supplied geometric data and definitions. They assert no existence of a second Killing field, no symmetry inheritance from matter equations, no integrability of $\mathcal D$, no global smooth quotient or orbit-space boundary structure, and no Einstein–Maxwell solution. Any use of the causal or horizon terms follows [[def-emg-causal-solution-and-horizon-vocabulary]]. A future spacetime theorem must state any extra asymptotic, horizon, axis-regularity, analyticity, connectedness and nondegeneracy hypotheses it uses.

## Definition references

[[def-emg-lorentzian-forms]]

[[def-gr-killing-field]]

[[def-emg-causal-solution-and-horizon-vocabulary]]

[[def-emg-local-potentials-and-circle-data]]

[[def-c-r-and-smooth-maps-between-smooth-manifolds]]

[[def-lie-derivative-of-a-tensor-field]]

[[def-directional-and-partial-derivatives]]
