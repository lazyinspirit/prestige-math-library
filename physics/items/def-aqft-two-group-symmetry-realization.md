---
id: def-aqft-two-group-symmetry-realization
kind: definition
title: Finite 2-group symmetry realization and background coupling
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - def-aqft-p-form-global-symmetry
  - def-aqft-topological-defect
  - def-aqft-two-group-background
  - thm-aqft-two-group-background-consistency
  - def-aqft-finite-background-two-groupoid
  - thm-aqft-finite-background-two-groupoid-coherence
dependency_roles:
  def-aqft-p-form-global-symmetry: formulation-prerequisite
  def-aqft-topological-defect: formulation-prerequisite
  def-aqft-two-group-background: formulation-prerequisite
  thm-aqft-two-group-background-consistency: formulation-prerequisite
  def-aqft-finite-background-two-groupoid: formulation-prerequisite
  thm-aqft-finite-background-two-groupoid-coherence: formulation-prerequisite
proof_strategy: definition
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: Finite-regulator Euclidean models on closed oriented triangulated d-manifolds with finite discrete 2-group backgrounds. This is a model-data interface; it asserts no QFT realization, anomaly absence, continuum limit, or empirical result.
sources:
  references:
    - title: "Francesco Benini, Clay Córdova, and Po-Shen Hsin, On 2-Group Global Symmetries and Their Anomalies"
      url: https://arxiv.org/pdf/1803.09336
      locator: "§2.3, printed pp. 18–20 / PDF pp. 19–21, equations (2.14)–(2.23); §§1.2–1.3 on backgrounds and the Postnikov/anomaly distinction"
    - title: "Sakura Schäfer-Nameki, ICTP Lectures on (Non-)Invertible Generalized Symmetries"
      url: https://arxiv.org/pdf/2305.18296v2
      locator: "§2.5, printed pp. 23–25, and §2.8.1, printed pp. 28–32"
---

## Definition

Fix an integer $d\geq2$, a closed compact oriented smooth $d$-manifold $M$, and a finite ordered triangulation $K$ of $M$, meaning a finite vertex-ordered simplicial complex whose geometric realization is $M$. The model fixes an orientation and any additional spin or related lifting data required by its fields; these choices are its tangential structure. A **selected finite-regulator Euclidean model** on $K$ specifies its exact symmetry groups, field representations, finite field-value sets $X_\sigma$ for cells $\sigma\in K$, constraints, and configuration spaces $\Phi_x\subseteq\prod_{\sigma\in K}X_\sigma$ for each background $x$. It also specifies a dimensionless Euclidean action $S_x:\Phi_x\to\mathbb R$, finite measure weights $\mu_x:\Phi_x\to\mathbb C$, and a unital algebra $\mathcal O_x$ of model-defined observables, represented as functions on $\Phi_x$. An observable is **local** when its function depends only on field variables on a specified subcomplex of $K$; a line observable has support on a one-dimensional subcomplex. Write $W_x(\phi):=\mu_x(\phi)e^{-S_x(\phi)}$. For local insertion functions $o_{j,x}:\Phi_x\to\mathbb C$, define the unnormalized correlator by $C_x(O_1,\ldots,O_n):=\sum_{\phi\in\Phi_x}W_x(\phi)\prod_{j=1}^n o_{j,x}(\phi)$; the empty tuple has value $Z_x=C_x()$. Use natural units $c=\hbar=1$; cochain labels, action phases, and the partition weight are dimensionless. The model separately assigns dimensions to any continuous field quantities or observables it includes. No continuum limit or Lorentzian continuation is part of this definition.

Let $G$ be the selected finite discrete internal $0$-form symmetry group. Its action on the model's local field and observable data is specified by group homomorphisms into the corresponding automorphism groups. Let $A$ be the selected finite discrete abelian $1$-form symmetry group, written additively, with the exact support, charge, and background conventions of the selected p-form symmetry model. Choosing a finite Abelian $A$ is part of this 2-group model's input; no claim is made that every p-form symmetry group is Abelian without further hypotheses. The group is effective in the selected model: elements inducing identical actions in every admitted correlator, observable, and background are identified. Each generator $U_a(\Sigma)$ is a defect insertion with support $j(\Sigma)$, where $\Sigma$ is a smooth manifold without boundary and $j:\Sigma\hookrightarrow M$ is a smooth embedding with closed codimension-two image represented by a subcomplex of $K$; the insertion includes the model-specified local field or operator data and any required orientation, coorientation, framing, or junction data on that image. It is topological when the model's correlators are invariant under permitted isotopies of that support avoiding other insertions; an allowed isotopy is a piecewise-smooth family of such embeddings in $M$ with disjoint supports and transported defect data. The generators fuse by $U_aU_{a'}=U_{a+a'}$. A genuine line observable is a line-supported insertion defined without an attached surface or other defect. For a nonzero genuine line observable $O_\gamma$ whose one-dimensional span is preserved by every $U_a$, its scalar $A$-action is a character $\chi_\gamma\in\widehat A:=\operatorname{Hom}(A,U(1))$; sweeping $U_a(\Sigma)$ once across that line in the chosen positive orientation multiplies the correlator by $\chi_\gamma(a)$. Other line observables need not carry a scalar character. The selected $0$-form symmetry acts on these defect labels through a specified left action $\rho:G\to\operatorname{Aut}(A)$.

Choose a normalized inhomogeneous $3$-cocycle $\beta:G^3\to A$ for this left action; normalized means it vanishes if any argument is the identity, and the cocycle equation is

$$
\rho_g\beta(h,k,l)-\beta(gh,k,l)+\beta(g,hk,l)-\beta(g,h,kl)+\beta(g,h,k)=0.
$$

For a normalized $2$-cochain $c:G^2\to A$, set

$$
(\delta_\rho c)(g,h,k):=\rho_g c(h,k)-c(gh,k)+c(g,hk)-c(g,h).
$$

Two normalized $3$-cocycles represent the same Postnikov class when their difference is $\delta_\rho c$ for such a normalized $c$; $[\beta]$ denotes this equivalence class. The skeletal associator convention is directed from $(gh)k$ to $g(hk)$. A discrete background is nondynamical model data and is not summed over. It is an object $x=(a,B)$ of the finite background gauge $2$-groupoid on $K$: $a_{ij}\in G$ is a flat edge cochain, $a_{ij}a_{jk}=a_{ik}$ on every ordered triangle; $B_{ijk}\in A$ is a face cochain at its first vertex; and on every ordered tetrahedron

$$
(\delta_a B)_{ijkl}:=\rho_{a_{ij}}B_{jkl}-B_{ikl}+B_{ijl}-B_{ijk}=\beta(a_{ij},a_{jk},a_{kl})=(a^*\beta)_{ijkl}.
$$

Thus the two background fields are constrained and are not independent. A $1$-gauge arrow is given by vertex labels $g_i\in G$ and edge labels $\lambda_{ij}\in A$, with

$$
a'_{ij}=g_i a_{ij}g_j^{-1},\qquad \zeta^g_{ijk}=-\beta(g_i,a_{ij},a_{jk})+\beta(a'_{ij},g_j,a_{jk})-\beta(a'_{ij},a'_{jk},g_k),
$$

$$
B'_{ijk}=\rho_{g_i}B_{ijk}+\zeta^g_{ijk}+\rho_{a'_{ij}}\lambda_{jk}-\lambda_{ik}+\lambda_{ij}.
$$

A $2$-arrow between $1$-arrows with the same vertex labels $g$ and edge labels $\lambda,\lambda'$ is a vertex $A$-cochain $t$ satisfying $\lambda'-\lambda=\delta_{a'}t$, where $(\delta_{a'}t)_{ij}=\rho_{a'_{ij}}t_j-t_i$; vertical composition adds these cochains. For consecutive $1$-arrows $(g,\lambda)$ then $(h,\mu)$, their composite has vertex labels $hg$ and edge labels $\nu_{ij}=\rho_{h_i}\lambda_{ij}+\mu_{ij}+\tau_{ij}$, where $\tau_{ij}=\beta(h_i,g_i,a_{ij})-\beta(h_i,a'_{ij},g_j)+\beta(a''_{ij},h_j,g_j)$ and $a''_{ij}=h_i a'_{ij}h_j^{-1}$. Horizontal composition sends $2$-arrow cochains $t,s$ to $s+\rho_h t$. For three consecutive arrows with vertex labels $g,h,k$, the associator is the vertex cochain $\sigma_i=\beta(k_i,h_i,g_i)$; identity arrows have vertex labels $e$ and edge labels $0$, and unit constraints are identity $2$-arrows. The pentagon and triangle coherence equations are those of this finite background gauge $2$-groupoid.

A **finite 2-group background coupling** in the selected model assigns to each finite 2-group background its configuration space, local observable algebra, action, measure, and partition function $Z_x=C_x()$, and assigns to every $1$-gauge arrow $f:x\to y$ a specified bijection $T_f:\Phi_x\to\Phi_y$ and observable-algebra isomorphism $\alpha_f:\mathcal O_x\to\mathcal O_y$. Every $2$-arrow is assigned its specified intertwiner, and all assignments must obey the identity, composition, associator, and unit coherence laws of the background gauge $2$-groupoid. The action and measure are model inputs; the finite 2-group data alone do not choose them or determine their transformation phase.

A permitted background counterterm is a model-declared dimensionless functional $L_x\in\mathbb R/(2\pi\mathbb Z)$ that is a finite sum of functions, each depending only on cochain labels in one simplex or a specified finite cluster of simplices; it reweights the model by $e^{iL_x}$. If under a gauge arrow $f:x\to y$ all unnormalized correlators transform by a common phase $\chi_f(x)\in U(1)$, coherence requires $\chi_{\mathrm{id}_x}(x)=1$, $\chi_{g\circ f}(x)=\chi_g(y)\chi_f(x)$ for composable arrows, and equal phases for $2$-isomorphic arrows. The residual background anomaly is the class of these phases under $\chi_f(x)\mapsto e^{iL_y}\chi_f(x)e^{-iL_x}$ for the permitted counterterms. The anomaly is absent in the selected scheme exactly when an allowed counterterm makes every such phase $1$. The Postnikov class specifies the background constraint and gauge transformations; it is not itself the model's transformation phase or anomaly. It may enter an anomaly calculation for a specified action and measure.

## Definition references

[Benini, Córdova, and Hsin, §2.3 and §§1.2–1.3](https://arxiv.org/pdf/1803.09336)

[Schäfer-Nameki, §2.5 and §2.8.1](https://arxiv.org/pdf/2305.18296v2)

[[def-aqft-two-group-background]]

[[def-aqft-p-form-global-symmetry]]

[[def-aqft-topological-defect]]

[[thm-aqft-two-group-background-consistency]]

[[def-aqft-finite-background-two-groupoid]]

[[thm-aqft-finite-background-two-groupoid-coherence]]
