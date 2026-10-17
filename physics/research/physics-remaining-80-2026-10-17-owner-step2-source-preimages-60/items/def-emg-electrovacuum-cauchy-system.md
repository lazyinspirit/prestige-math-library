---
id: def-emg-electrovacuum-cauchy-system
kind: definition
title: Electrovacuum tensor Cauchy system
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: [def-emg-lorentzian-forms, lem-emg-lorentz-hodge-calculus, lem-emg-observer-field-decomposition, def-gr-spacelike-initial-data-and-constraints, def-gr-spacelike-hypersurfaces-and-cauchy-sets]
dependency_roles:
  def-emg-lorentzian-forms: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  lem-emg-observer-field-decomposition: mathematical-premise
  def-gr-spacelike-initial-data-and-constraints: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity, Cambridge lecture notes, October 12 2022 revision, sections 6.2-6.4 and 10.4"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "Section 6.2, equation (6.8), gives the covariant Maxwell equations in the (-+++) convention; section 6.3, equations (6.27)-(6.28), gives the Maxwell stress tensor and states its conservation as an exercise; section 6.4, equation (6.32), gives the Einstein equation; section 10.4, equations (10.24)-(10.26), gives the normal constraints. The notes use Gaussian normalization and c=1 in places; this definition instead records the SI normalization below."
    - title: "M. Alcubierre, J. C. Degollado and M. Salgado, The Einstein-Maxwell system in 3+1 form and initial data for multiple charged black holes, arXiv:0907.1151v2"
      url: "https://arxiv.org/pdf/0907.1151"
      locator: "Sections II.2-II.4, equations (70)-(89), state the electromagnetic stress tensor, its observer decomposition, the Einstein-Maxwell constraints, and the role of potential gauge. The paper uses Gaussian units and does not prove a coupled local existence theorem."
verification:
  precheck: pending
---

## Definition

Let $(M,g,N,o)$ be a smooth, Hausdorff, second-countable, oriented and time-oriented four-manifold with smooth Lorentz metric of signature $(-,+,+,+)$, as in [[def-emg-lorentzian-forms]]. Use its metric-selected connection and curvature convention. Fix $c>0$, $G_N>0$, $\mu_0>0$, and $\Lambda\in\mathbb R$, and put

$$\kappa:=\frac{8\pi G_N}{c^4}>0.$$

These are parameters of the mathematical system. For the SI interpretation, $c$ has units $\mathrm{m\,s^{-1}}$, $G_N$ has units $\mathrm{m^3\,kg^{-1}\,s^{-2}}$, $\mu_0$ has units $\mathrm{N\,A^{-2}}$, $\kappa$ has units $\mathrm{s^2\,kg^{-1}\,m^{-1}}$, and $\Lambda$ has units $\mathrm{m^{-2}}$. In a length-coordinate chart $x^0=ct$, metric components are dimensionless and curvature components have units $\mathrm{m^{-2}}$.

For a smooth real two-form $F\in\Omega^2(M)$, define

$$Q_{ab}(g,F):=F_{ac}F_b{}^c-\frac14 g_{ab}F_{cd}F^{cd},\qquad T^{\rm EM}_{ab}:=\mu_0^{-1}Q_{ab}(g,F).$$

Indices are raised with $g^{-1}$; $\star_g$ is the Lorentzian Hodge star of [[lem-emg-lorentz-hodge-calculus]]. The electromagnetic stress tensor $T^{\rm EM}$ is a symmetric covariant two-tensor; in an orthonormal frame its components have energy-density units $\mathrm{J\,m^{-3}}$. If $n$ is a future unit normal and $(\mathfrak e_1,\mathfrak e_2,\mathfrak e_3)$ is a positively oriented orthonormal spatial triad, define $e_i:=F(\mathfrak e_i,n)$ and $b_i:=\tfrac12\epsilon_i{}^{jk}F(\mathfrak e_j,\mathfrak e_k)$. By [[lem-emg-observer-field-decomposition]], these are $E_i/c$ and $B_i$ in the SI observer convention; both have units tesla.

For sign clarity only, a sourced extension would write $\nabla_aF^{ab}=-\mu_0J^b$ for a smooth current vector $J$; the source-free system below is the case $J=0$.

The **source-free electrovacuum tensor Cauchy system** on an open set $U\subseteq M$ is the system for a smooth Lorentz metric $g$ and smooth real two-form $F$ on $U$ given by

$$G_{ab}[g]+\Lambda g_{ab}=\kappa T^{\rm EM}_{ab}[g,F],\qquad dF=0,\qquad d(\star_gF)=0.$$

Here $G_{ab}=\operatorname{Ric}_{ab}-\tfrac12 Sg_{ab}$ is the Einstein tensor. A **spacelike initial hypersurface** is a smooth spacelike embedded three-manifold $i:\Sigma\hookrightarrow U$ with induced Riemannian metric $h=i^*g$, future unit normal $n$, and second fundamental form $K(X,Y)=g(\nabla_Xn,Y)=\tfrac12(\mathcal L_nh)(X,Y)$, using the convention of [[def-gr-spacelike-initial-data-and-constraints]]. It is a **Cauchy hypersurface in $U$** exactly when every inextendible causal curve $\gamma:I\to U$ meets it at exactly one parameter value, that is, $\gamma^{-1}[i(\Sigma)]$ has exactly one element, using the causal-curve convention of [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]. The local initial-data constructions require a spacelike initial hypersurface; they do not assume this global intersection property. The initial data are the induced $(h,K,e,b)$, where $e,b$ are the spatial fields just defined. No global electromagnetic potential is part of this definition.

In the SI convention the electromagnetic two-form has orthonormal-frame components in tesla, $T^{\rm EM}_{ab}$ has units $\mathrm{J\,m^{-3}}$, and every term of the Einstein equation has units $\mathrm{m^{-2}}$. The equations define a mathematical model; they do not assert that the model describes nature or that arbitrary Cauchy data have a development.
