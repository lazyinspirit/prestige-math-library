---
id: thm-fv-and-periodic-diffusion-flow-preserves-rectangles-and-mass
kind: theorem
title: Finite-volume and periodic diffusion preserve intervals and weighted mass
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
aliases: []
deps:
  - def-fv-tpfa-no-flux-diffusion-specialization
  - def-periodic-reaction-diffusion-grid
  - def-stoichiometric-mass-invariant
  - lem-xd-finite-matrix-exponential-series
  - cor-exponential-reciprocal-and-positivity
  - thm-picard-lindelof-local-existence-and-uniqueness
justified_by: []
proof_strategy: direct
axiom_base: No choice axiom is used; the proof is finite-dimensional matrix algebra and the exponential power series.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: R. Eymard, T. Gallouët, and R. Herbin, Finite Volume Methods, updated author text, 2019
      url: https://raphaeleh.github.io/PUBLI/bookevol.pdf
      locator: "Chapter 9 §§9.2–9.3, PDF pp. 38–47: positive TPFA transmissibilities, conservative cell balances, and the diffusion energy form."
    - title: Willem Hundsdorfer, Numerical Solution of Advection-Diffusion-Reaction Equations, lecture notes for Ph.D. course, 1996
      url: https://ir.cwi.nl/pub/4797/4797D.pdf
      locator: "§4, printed pp. 26–29: positivity of finite spatial diffusion discretizations; this item proves the mass-weighted interval result for the stated matrices."
verification:
  precheck: pass
---

## Statement

Consider either the no-flux TPFA cell system of [[def-fv-tpfa-no-flux-diffusion-specialization]] or the periodic grid system of [[def-periodic-reaction-diffusion-grid]]. Write its finite index set as $I$, its positive diagonal mass matrix as $M=\operatorname{diag}(m_i)$, and its stiffness matrix as $L$. In both cases $L=L^{\mathsf T}$, $L\mathbf1=0$, and $L_{ij}=-c_{ij}$ for $i\ne j$, where $c_{ij}=c_{ji}\ge0$. For each species $r$, let $d_r\ge0$ and solve $M u_r'+d_rLu_r=0$. Assume $a_r\le b_r$ for every species. If initially $u_{i,r}\in[a_r,b_r]$ for all $i,r$, then the solution exists for all $t\ge0$ and remains in those intervals. More precisely, each species evolution matrix has nonnegative entries and row sums one, so it is a contraction in the maximum norm. The flow also preserves each weighted species sum $\sum_i m_i u_{i,r}$ and therefore every finite linear combination of species sums, including $\mathcal M_{c,h}$ of [[def-stoichiometric-mass-invariant]].

## Facts & Assumptions

**Given:** Either stated finite diffusion discretization, a finite index set $I$, positive masses, symmetric stiffness with nonpositive off-diagonal entries and zero row sums, species diffusivities $d_r\ge0$, and initial component values in the stated intervals.

[F1] [[def-fv-tpfa-no-flux-diffusion-specialization]]: its mass matrix has entries $m_K=|K|>0$; its stiffness has symmetric off-diagonal entries $-c_{KL}\le0$ and zero row sums.

[F2] [[def-periodic-reaction-diffusion-grid]]: its mass matrix is $m_h I$ and its stiffness $m_hA_h^{\rm per}$ is symmetric, has nonpositive off-diagonal entries, and annihilates constants.

[F3] [[lem-xd-finite-matrix-exponential-series]]: for a finite matrix $A$, $e^{tA}$ is defined by a convergent power series, is differentiable with derivative $Ae^{tA}$, and exponentials of commuting matrices multiply to the exponential of their sum.

[F4] [[cor-exponential-reciprocal-and-positivity]]: $e^x>0$ for every real $x$.

[F5] [[def-stoichiometric-mass-invariant]]: $\mathcal M_{c,h}(U)=\sum_i m_i c^TU_i$.

[F6] [[thm-picard-lindelof-local-existence-and-uniqueness]]: a locally Lipschitz finite-dimensional vector field has a unique local solution through each initial state.

## Proof

1.1 Fix a species $r$ and put $A_r=-d_rM^{-1}L$. If $d_r=0$, the solution is constant. If $d_r>0$, then $(A_r)_{ij}=d_rc_{ij}/m_i\ge0$ for $i\ne j$, every row sums to zero, and $(A_r)_{ii}=-d_r\sum_{j\ne i}c_{ij}/m_i$. Choose $\alpha>0$ at least as large as every exit rate $d_r\sum_{j\ne i}c_{ij}/m_i$, and set $P=I+A_r/\alpha$. Then $P$ is entrywise nonnegative with row sums one. Matrix multiplication shows inductively that every $P^k$ has these same properties. [F1, F2, given, choose, construct, induction]

1.2 Symmetry of $L$ and $L\mathbf1=0$ give $\mathbf1^{\mathsf T}L=0$. Hence $\mathbf1^{\mathsf T}MA_r=-d_r\mathbf1^{\mathsf T}L=0$, and multiplication by every power of $A_r$ gives $\mathbf1^{\mathsf T}MA_r^k=0$ for $k\ge1$. The exponential series therefore yields $\mathbf1^{\mathsf T}Me^{tA_r}=\mathbf1^{\mathsf T}M$, so the weighted sum of species $r$ is conserved. [F1, F2, F3, algebra]

2.1 If $d_r=0$, $e^{tA_r}=I$ has nonnegative entries and row sums one. Otherwise use the $\alpha$ and $P$ of step 1.1. Since $A_r=\alpha(P-I)$, [F3] gives $e^{tA_r}=e^{\alpha tP}e^{-\alpha tI}$. The power series shows $e^{-\alpha tI}=e^{-\alpha t}I$, whose scalar coefficient is positive by [F4]. Every term in the series for $e^{\alpha tP}$ is entrywise nonnegative by step 1.1. Thus $e^{tA_r}$ is entrywise nonnegative. Since $A_r\mathbf1=0$, its power series also gives $e^{tA_r}\mathbf1=\mathbf1$. By [F3], this exponential has derivative $A_re^{tA_r}$ and initial value $I$, so it solves the finite ODE; [F6] gives uniqueness. [F3, F4, F6, step 1.1, algebra]

3.1 The initial inequalities are $u_r(0)-a_r\mathbf1\ge0$ and $b_r\mathbf1-u_r(0)\ge0$. Applying the nonnegative matrix $e^{tA_r}$ and using $e^{tA_r}\mathbf1=\mathbf1$ from step 2.1 proves $a_r\mathbf1\le e^{tA_r}u_r(0)\le b_r\mathbf1$. The explicit exponential is defined for every finite $t\ge0$; step 1.2 preserves its weighted sum. Taking the finite linear combination in [F5] proves the stated mass assertion. [F3, F5, step 2.1, step 1.2, algebra] ∎
