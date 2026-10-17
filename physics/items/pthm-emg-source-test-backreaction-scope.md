---
id: pthm-emg-source-test-backreaction-scope
kind: physics-theorem
title: Exact source/test-field/backreaction consistency distinction
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 3
proof_strategy: direct
deps:
  - post-emg-background-maxwell-test
  - def-emg-matter-observables
  - lem-emg-source-and-test-scaling
  - lem-emg-lorentz-hodge-calculus
dependency_roles:
  post-emg-background-maxwell-test: physical-assumption
  def-emg-matter-observables: formulation-prerequisite
  lem-emg-source-and-test-scaling: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
physical_scope: "Fixed smooth vacuum metric with smooth source-free or sourced Maxwell data, including joint field/current scaling, the exact quadratic electromagnetic stress residual and its compact-chart component norm, charged-dust scaling, and finite Coulomb-annulus energy. This is test-field bookkeeping; it includes no source-matter stress in the residual, no nearby coupled family, singular point charge, or self-field."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Eric Poisson, Adam Pound and Ian Vega, The Motion of Point Particles in Curved Spacetime, author manuscript arXiv:1102.0529v3 (2011), complete 162-page review"
      url: https://arxiv.org/pdf/1102.0529v3
      locator: "§18.1, equations (18.3)–(18.10), PDF pp. 96–98, sets out the coupled point-charge source and the formal self-field difficulty; no point-source limit is inferred here."
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), complete 238-page notes"
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: "§§4.3–4.5, PDF pp. 120–125, treats the Maxwell stress tensor and its observer energy in the source's Gaussian conventions; local SI stress and residual identities are those of the exact mathematical supplier."
    - title: "David Tong, General Relativity, complete author-hosted 290-page lecture notes (2019)"
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: "§§4.5.2–4.5.4, PDF pp. 190–194, treats Maxwell and matter stress tensors in curved spacetime. Its conventions are contextual; the quadratic scaling and compact-region residual are proved by the exact mathematical supplier."
    - title: "Reinhard Meinel and Moritz Hütten, On the black hole limit of electrically counterpoised dust configurations, arXiv:1105.3807v3 (2011), complete 8-page article"
      url: https://arxiv.org/pdf/1105.3807
      locator: "§2, equations (1)–(7), PDF pp. 2–3, gives one exact smooth charged-dust Einstein–Maxwell branch with a specially fixed charge-to-mass ratio; that restriction is not generalized here."
verification:
  precheck: pass
---

## Statement

Use the smooth oriented, time-oriented Lorentzian four-manifold, Levi–Civita connection $\nabla$, and length-coordinate SI conventions of [[def-emg-matter-observables]] and the separately prescribed Maxwell test model of [[post-emg-background-maxwell-test]]. Here $U$ is open, $g$ is the fixed metric, a field strength $F$ is a smooth real two-form, and a prescribed current $j$ is a smooth real vector field. The formal stress tensor and constants are

$$T_{\mathrm{EM}}^{ab}(g,F)=\frac1{\mu_0}\left(F^{ac}F^b{}_c-\frac14g^{ab}F_{cd}F^{cd}\right),\qquad T^{\mathrm{EM}}_{ab}=g_{ac}g_{bd}T_{\mathrm{EM}}^{cd},\qquad \kappa=\frac{8\pi G_N}{c^4}>0.$$

The adopted Maxwell alternatives are $dF=0$, $d(\star_gF)=0$ when source-free, or $dF=0$, $\nabla_aF^{ab}=-\mu_0j^b$ for a separately prescribed current. Let $g$ satisfy $G_{ab}(g)+\Lambda g_{ab}=0$ on $U$, where $\Lambda$ is constant. Define the electromagnetic stress residual relative to this unchanged vacuum metric, with no matter stress included, by

$$\mathscr R_{ab}(g,F;\Lambda):=G_{ab}(g)+\Lambda g_{ab}-\kappa T^{\mathrm{EM}}_{ab}(g,F).$$

First let $F_0$ be a smooth source-free Maxwell two-form on $U$. For real dimensionless $\delta$, $F_\delta:=\delta F_0$ remains source-free and

$$\mathscr R_{ab}(g,F_\delta;\Lambda)=-\kappa\delta^2T^{\mathrm{EM}}_{ab}(g,F_0).$$

The same conclusion holds for an actual smooth sourced Maxwell pair: let $F_0$ be a smooth real two-form and $j_0$ a smooth real vector field on $U$ satisfying $dF_0=0$ and $\nabla_a(F_0)^{ab}=-\mu_0j_0^b$. With $F_\delta:=\delta F_0$ and $j_\delta:=\delta j_0$, the pair still satisfies the same sourced Maxwell equations, and

$$\mathscr R_{ab}(g,F_\delta;\Lambda)=-\kappa\delta^2T^{\mathrm{EM}}_{ab}(g,F_0).$$

For a compact set $K$ in a fixed smooth coordinate chart contained in $U$ and a smooth covariant two-tensor $S$, define $\|S\|_{\infty,K}:=\max_{0\le a,b\le3}\sup_{p\in K}|S_{ab}(p)|$ when $K\ne\varnothing$, and set $\|S\|_{\infty,\varnothing}:=0$. In either Maxwell case,

$$\|\mathscr R(g,F_\delta;\Lambda)\|_{\infty,K}=\kappa\delta^2\|T^{\mathrm{EM}}(g,F_0)\|_{\infty,K}.$$

If $\delta\ne0$ and $F_0$ is nonzero at a point, its observer energy is positive there, so this electromagnetic/vacuum-background residual is nonzero. In the sourced case this does not test a full Einstein–Maxwell–matter equation, because no source-matter stress is included in $\mathscr R$. The residual is a consistency calculation, not an estimate of distance to a different metric solution.

Separately, on an open region where smooth charged-dust quantities have $\rho>0$, $T_m^{ab}=\rho U^aU^b$, $j^a=\sigma U^a$, and the formal matter-exchange equation holds, replacing $(\rho,\sigma)$ by $(\eta\rho,\eta\sigma)$ for $\eta>0$ scales matter stress and current linearly, leaves $\sigma/\rho$ unchanged, and preserves the dust force equation when the prescribed $F,U$ are held fixed. Maxwell's sourced equation must still match the scaled current. If instead both $F$ and $j$ are scaled by $\eta$, the sourced Maxwell system is linear but electromagnetic stress scales as $\eta^2$ while dust stress scales as $\eta$; these degree differences provide no general coupled-solution family.

Finally, for a fixed $Q\ne0$ and $\ell>0$, prescribe only on the finite Minkowski annulus $\mathcal A_\ell=\{\mathbf x:\ell<|\mathbf x|<2\ell\}$ the radial electric field $\mathbf E=Q(4\pi\varepsilon_0r^2)^{-1}\mathbf e_r$, $\mathbf B=0$. Its field energy on that annulus is $Q^2/(16\pi\varepsilon_0\ell)$ and diverges as $\ell\downarrow0$. This calculation defines no field or source at the origin and supplies no point-charge construction or regularization theorem.

## Facts & Assumptions

**Given:** The smooth fixed-background physical interpretation of [[post-emg-background-maxwell-test]], the formal SI tensor definitions of [[def-emg-matter-observables]], a fixed vacuum metric and smooth source-free two-form for the source-free clause, a smooth sourced pair $(F_0,j_0)$ for the sourced clause, a positive-density dust region for the dust-scaling clause, and the stated finite-annulus profile for the final clause.

[F1] [[post-emg-background-maxwell-test]]: the metric and Maxwell data may be prescribed independently; the source-free equations are $dF=0$, $d(\star_gF)=0$, while the sourced equations are $dF=0$, $\nabla_aF^{ab}=-\mu_0j^b$ for a separately prescribed current. No Einstein equation for the unchanged background or probe/source backreaction is part of this test-model postulate.

[F2] [[lem-emg-source-and-test-scaling]]: its separate positive-density charged-dust/current scaling clause and prescribed finite Coulomb-annulus energy clause have their displayed hypotheses. These are the clauses used below. Its first source-free clause assumes $dF_0=0$ and $\nabla_a(F_0)^{ab}=0$; that clause is not applied to the model's differential-form assumptions here. Instead, both Maxwell scaling/residual branches and the pointwise nonzero-energy obstruction are proved directly below. None is a nearby-solution estimate.

[F3] [[def-emg-matter-observables]]: $T_{\mathrm{EM}}^{ab}=\mu_0^{-1}(F^{ac}F^b{}_c-\tfrac14g^{ab}F_{cd}F^{cd})$, $T^{\mathrm{EM}}_{ab}=g_{ac}g_{bd}T_{\mathrm{EM}}^{cd}$, $\varepsilon_0=(\mu_0c^2)^{-1}$, $\kappa=8\pi G_N/c^4>0$, charged dust has $T_m^{ab}=\rho U^aU^b$ and $j^a=\sigma U^a$, and observer energy is $T_{ab}n^an^b$ for each future unit observer $n$.

[F4] [[lem-emg-lorentz-hodge-calculus]], Statement: for the given fixed oriented Lorentzian geometry, $({\star_gF})_{ab}=\tfrac12(\mathrm{vol}_g)_{abcd}F^{cd}$, and exterior differentiation has its alternating coordinate derivative formula. Consequently metric raising and this Hodge formula are real-linear in $F$ when $g$ is fixed, and $d$ commutes with multiplication by a constant real scalar. Neither formula assumes a Maxwell equation or a current.

[A1] The vacuum metric, each Maxwell solution, the dust data, and the annulus profile are independent assumptions of their respective clauses. In the sourced-pair clause the current is prescribed, and its matter stress is not part of the stated electromagnetic residual. No source is extended to the origin and no coupled family is assumed to exist.

## Proof

1.1 Since $\delta$ is a constant real scalar, the component Hodge formula in [F4] with the fixed inverse metric gives $\star_gF_\delta=\delta\star_gF_0$, and the coordinate exterior derivative formula gives $dF_\delta=\delta dF_0=0$ and $d(\star_gF_\delta)=\delta d(\star_gF_0)=0$. Thus $F_\delta$ satisfies exactly the source-free differential-form equations in [F1], without inferring or assuming a sourced divergence equation. Every term in [F3]'s electromagnetic stress is quadratic in $F$ and index raising/lowering is linear for fixed $g$, so $T^{\mathrm{EM}}(g,F_\delta)=\delta^2T^{\mathrm{EM}}(g,F_0)$. Substituting the vacuum equation $G(g)+\Lambda g=0$ gives $\mathscr R(g,F_\delta;\Lambda)=-\kappa\delta^2T^{\mathrm{EM}}(g,F_0)$. Since $\kappa\delta^2\ge0$, componentwise absolute-value homogeneity gives the asserted fixed-chart norm identity, with both norms zero for empty $K$. This includes $\delta=0$ and negative $\delta$ and uses no form/divergence equivalence. [given, F1, F3, F4, A1, algebra]

1.2 By the real-linearity of $d$ and $\nabla$ and the prescribed sourced equation in [F1], $dF_\delta=\delta dF_0=0$ and $\nabla_a(F_\delta)^{ab}=\delta\nabla_a(F_0)^{ab}=-\mu_0\delta j_0^b=-\mu_0j_\delta^b$. Every term of the tensor in [F3] is quadratic in $F$, so $T^{\mathrm{EM}}(g,F_\delta)=\delta^2T^{\mathrm{EM}}(g,F_0)$. Using $G(g)+\Lambda g=0$ in the definition of $\mathscr R$ gives the stated identity; componentwise homogeneity of the maximum norm gives the compact-chart norm identity, including the empty-set convention. This residual includes no source-matter stress. [F1, F3, F4, A1, algebra]

1.3 On $\rho>0$, $(\eta\sigma)/(\eta\rho)=\sigma/\rho$. The exact force-equation and sourced-Maxwell qualifications, linear dust/current scaling, and mismatch between the $\eta$ and $\eta^2$ stress scalings are the corresponding clauses proved in [F2] for the matter forms defined in [F3]. Thus these rescalings alone do not establish a coupled solution family. [F2, F3, A1, algebra]

2.1 At a point where $F_0\ne0$, take any future unit observer $n$ and a positively oriented orthonormal rest frame. In this frame write $(F_0)_{0i}=-E_i/c$ and $(F_0)_{ij}=\epsilon_{ijk}B_k$. Raising indices with $\operatorname{diag}(-1,1,1,1)$ gives $(F_0)_{ab}(F_0)^{ab}=2(|B|^2-|E|^2/c^2)$; substitution in the stress formula [F3] then gives $T^{\mathrm{EM}}_{ab}(g,F_0)n^an^b=(|E|^2/c^2+|B|^2)/(2\mu_0)$. The six components determine $F_0$, so $E,B$ cannot both vanish, and the energy is strictly positive because $\mu_0,c>0$. This pointwise algebra uses no Maxwell equation and therefore applies in both the source-free and sourced branches. For $\delta\ne0$, the residual in step 1.1 or 1.2 is nonzero because $\kappa\delta^2>0$ and this observer contraction of $T^{\mathrm{EM}}(g,F_0)$ is nonzero. In the source-free case this excludes the unchanged-metric vacuum Einstein–Maxwell solution; in the sourced case it excludes only vanishing of the defined residual without matter stress, and says nothing about other metrics or source matter. [F3, step 1.1, step 1.2, algebra]

3.1 On $\mathcal A_\ell$, the SI field-energy density is $\varepsilon_0|\mathbf E|^2/2=Q^2/(32\pi^2\varepsilon_0r^4)$ by [F3]. Polar coordinates on this finite annulus give $\mathcal E_\ell=4\pi\int_\ell^{2\ell}(Q^2/(32\pi^2\varepsilon_0r^4))r^2\,dr=(Q^2/(8\pi\varepsilon_0))\int_\ell^{2\ell}r^{-2}\,dr=Q^2/(16\pi\varepsilon_0\ell)$, using the annulus calculation supplied by [F2]. This diverges at fixed nonzero $Q$ as $\ell\downarrow0$, while every field evaluation remains on $r>\ell>0$; no field, source, or point limit at $r=0$ is asserted. [F2, F3, A1, algebra] ∎
