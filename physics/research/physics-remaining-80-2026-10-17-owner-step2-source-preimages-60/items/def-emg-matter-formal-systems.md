---
id: def-emg-matter-formal-systems
kind: definition
title: Smooth formal matter, EM tensors and observer quantities
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - def-gr-smooth-lorentzian-objects
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-countable-choice
  - def-emg-lorentzian-forms
  - lem-emg-observer-field-decomposition
  - def-gr-curvature-tensor-and-derived-tensors
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-countable-choice: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
  lem-emg-observer-field-decomposition: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), §1.4.1, equations (1.104)–(1.110), PDF pp. 34–36 (printed pp. 28–30)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Dust and perfect-fluid stress tensors in a rest frame and their covariant forms; Carroll uses c=1 and the formal tensor conventions here are stated independently."
    - title: "David Tong, General Relativity, full author-hosted lecture notes, 2019, §§4.5.2–4.5.4, equations (4.49), (4.52)–(4.53), PDF pp. 190–194 (printed pp. 183–187)"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Hilbert and Maxwell stress tensors, the Maxwell rest-frame energy density, and the perfect-fluid tensor; Tong uses c=1, with no source proof substituted for the local mathematical arguments."
    - title: "Reinhard Meinel and Moritz Hütten, On the black hole limit of electrically counterpoised dust configurations, arXiv:1105.3807v3 (2011), §2, equations (1)–(7), PDF pp. 2–3"
      url: "https://arxiv.org/pdf/1105.3807"
      locator: "The ECD metric, matter and electromagnetic stress tensors, sourced Maxwell and Einstein equations, current J^i=σu^i, and σ=ερ; the paper uses c=G=1 and Gaussian electromagnetic units, which are not imported."
verification:
  precheck: pending
---

## Definition

Let $(M,g,N,o)$ be a smooth, Hausdorff, second-countable, boundaryless oriented and time-oriented Lorentzian four-manifold with signature $(-,+,+,+)$. Here $N$ is the supplied smooth timelike field selecting the future cone, and $o$ is an independent orientation. Let $\nabla$ be the unique torsion-free, $g$-compatible connection of [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]. Use the curvature sign and contractions of [[def-gr-curvature-tensor-and-derived-tensors]]; in particular $G_{ab}=\operatorname{Ric}_{ab}-\tfrac12 Sg_{ab}$. The geometric and observer conventions are those of [[def-gr-smooth-lorentzian-objects]] and [[def-emg-lorentzian-forms]]. The tangent-bundle smooth structure inherits only the Axiom of Countable Choice $\mathrm{AC}_\omega$ from [[def-countable-choice]].

Fix formal parameters $c>0$, $\mu_0>0$, $G_N>0$ and $\Lambda\in\mathbb R$, with $\varepsilon_0=(\mu_0c^2)^{-1}$ and $\kappa=8\pi G_N/c^4$. In length coordinates $x^0=ct$, all four coordinates have units metres and $g_{ab}$ is dimensionless. These are mathematical parameters with the displayed SI bookkeeping; they assert no measured value, exactness of $\mu_0$, or physical law.

A field strength $F$ is a real $C^2$ antisymmetric covariant two-tensor field. Its metric-raised components are $F^{ab}=g^{ac}g^{bd}F_{cd}$. For a future unit observer $n$ ($g(n,n)=-1$), the rest space is $n^\perp$ and the projection is $h_n(v)=v+g(n,v)n$. The observer electric and magnetic covectors are $E_{n,a}=cF_{ab}n^b$ and $B_{n,a}=-({\star_gF})_{ab}n^b$, with the oriented Lorentzian Hodge convention of [[lem-emg-observer-field-decomposition]]. They annihilate $n$ and use the positive metric induced on the rest covector space. In a positively oriented orthonormal tetrad with time vector $n$, $F_{0i}=-E_i/c$ and $F_{ij}=\epsilon_{ijk}B_k$.

For such an $F$, define

$$T_{\mathrm{EM}}^{ab}:=\frac1{\mu_0}\left(F^{ac}F^b{}_c-\frac14g^{ab}F_{cd}F^{cd}\right),\qquad T^{\mathrm{EM}}_{ab}:=g_{ac}g_{bd}T_{\mathrm{EM}}^{cd}.$$

For any symmetric covariant tensor $S_{ab}$ and unit observer $n$, its observer energy density is $S_{ab}n^an^b$. Its observer energy-current vector is $-S^a{}_bn^b$; the spatial energy flux measured by $n$ is the projection $h_n(-S^a{}_bn^b)$ into $n^\perp$. A nonzero causal vector is future-directed when it has negative inner product with $N$; future timelike means $g(v,v)<0$, and future null means the vector is nonzero and $g(v,v)=0$.

In four dimensions, define the **weak energy condition** (WEC) for $S$ by $S_{ab}v^av^b\ge0$ for every future timelike $v$; the **null energy condition** (NEC) by $S_{ab}\ell^a\ell^b\ge0$ for every nonzero future null $\ell$; and the **dominant energy condition** (DEC) by requiring $-S^a{}_bv^b$ to be future causal or zero for every future timelike $v$. Define the **strong energy condition** (SEC) by the WEC for $S_{ab}-\tfrac12(g^{cd}S_{cd})g_{ab}$. These are definitions of tensor inequalities only; no general matter positivity premise is included.

A matter tensor $T_m^{ab}$ is a $C^1$ symmetric contravariant two-tensor field; a current $j^a$ is a $C^1$ vector field. The **formal sourced Maxwell equations** are $dF=0$ and $\nabla_aF^{ab}=-\mu_0j^b$. The **matter exchange equation** is $\nabla_aT_m^{ab}=F^b{}_cj^c$. The **formal Einstein equation** is

$$G_{ab}+\Lambda g_{ab}=\kappa\bigl(T_{m,ab}+T^{\mathrm{EM}}_{ab}\bigr).$$

Here $T_{m,ab}$ is obtained by lowering both indices with $g$. Each displayed equation is a pointwise mathematical condition on the supplied fields with the regularities stated above. A formal Einstein–Maxwell–matter solution is a tuple satisfying whichever of these equations are explicitly assumed on the stated open domain; no existence or uniqueness of such a tuple is asserted.

Two matter forms used below are defined as follows. A **charged-dust form** has $T_m^{ab}=\rho U^aU^b$ and $j^a=\sigma U^a$, where $\rho,\sigma\in C^1$, $\rho\ge0$, and $U\in C^2$ is future timelike with $g(U,U)=-c^2$. On $\{\rho>0\}$ its charge-to-mass ratio is $\alpha=\sigma/\rho$; it is not defined by division on $\{\rho=0\}$. A **perfect-fluid form** has

$$T_m^{ab}=\frac{\epsilon+p}{c^2}U^aU^b+pg^{ab},$$

where $\epsilon,p\in C^1$ and $U$ has the same timelike normalization. No equation of state, conductivity law, entropy law, or matter evolution theorem is part of this definition. A current may additionally be written $j^a=\sigma U^a+q^a$ with $q^aU_a=0$; an Ohmic relation $q^a=\chi E_U^a$, $\chi\ge0$, is a separately imposed constitutive hypothesis, where $E_U^a=F^a{}_bU^b$.

On an open set $V$, a **local potential** for $F$ is a supplied smooth one-form $A$ with $dA=F$. Such a potential need not exist globally. A local gauge change is $A\mapsto A+d\lambda$ for a supplied smooth scalar $\lambda$; this leaves $F$ unchanged. No global bundle, potential, or point-source construction is asserted.

In the stated length-coordinate SI interpretation, $[F_{ab}]=\mathrm T$, $[A_a]=\mathrm{T\,m}$, $[j^a]=\mathrm{A\,m^{-2}}$, $[T_m]=[T_{\mathrm{EM}}]=\mathrm{J\,m^{-3}}$, $[\rho]=\mathrm{kg\,m^{-3}}$, $[\sigma]=\mathrm{C\,m^{-3}}$, $[\alpha]=\mathrm{C\,kg^{-1}}$, $[\epsilon]=[p]=\mathrm{J\,m^{-3}}$, and $[\chi]=\mathrm{S\,m^{-1}}$. The equalities $\varepsilon_0=(\mu_0c^2)^{-1}$ and $\kappa=8\pi G_N/c^4$ make the displayed tensor equations dimensionally consistent. No distributional product or stress tensor for a singular point source is defined.

## Remarks

- This is a definition of formal mathematical systems and observer contractions. It does not adopt Einstein, Maxwell, dust, or fluid equations as physical postulates and does not infer that the equations have a solution.
- The perfect-fluid inequalities below are not imposed by the definition; only the named energy-condition results establish the stated parameter ranges. In particular, there is no general matter positivity axiom.
- The Carroll and Tong sources use $c=1$; their tensor forms are cited only as comparisons. The present SI normalization and all later contractions are stated and checked locally.
