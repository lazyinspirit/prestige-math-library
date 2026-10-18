---
id: thm-supg-pspg-stokes-coercivity
kind: theorem
title: "P1 PSPG Stokes form is coercive in its stabilization norm"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-supg-pspg-grad-div-stokes-forms]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Felipe Galarce and Douglas R. Q. Pacheco, Fully consistent lowest-order finite element methods for generalised Stokes flows with variable viscosity, arXiv:2411.02100v1"
      url: "https://arxiv.org/pdf/2411.02100"
      locator: "§§3.1 and 4.1, PDF pp. 2–4: the standard PSPG residual, equal-order motivation, and a coercivity proof under explicit stabilization conditions."
    - title: "Volker John, Numerical Methods for Convection-Dominated Problems, lecture notes, Chapter 5"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUM_KONV_PROB_13_14/num_conv_dom.pdf"
      locator: "Theorem 5.22, Corollary 5.23, and Remark 5.25, printed pp. 57–59: stabilized norms, tau restrictions, and coefficient-dependent coercivity."
---

## Statement

Let $d\ge2$, let $\Omega\subset\mathbb R^d$ be a bounded connected polyhedral open set, and let a finite conforming nondegenerate simplicial mesh have connected cell adjacency. Let $V_h$ be continuous vector-valued P1 functions vanishing on the boundary, and let $Q_h$ be continuous scalar P1 functions with zero mean. Let $f\in L^2(\Omega;\mathbb R^d)$, $\nu>0$, $\tau_K>0$, and $\gamma\ge0$. For the stationary Stokes specialization of [[def-supg-pspg-grad-div-stokes-forms]], define
$$B_h((u_h,p_h),(v_h,q_h)):=\nu(\nabla u_h,\nabla v_h)_\Omega-(p_h,\nabla\cdot v_h)_\Omega+(q_h,\nabla\cdot u_h)_\Omega+\gamma(\nabla\cdot u_h,\nabla\cdot v_h)_\Omega+\sum_K\tau_K(\nabla q_h,-\nu\Delta_Ku_h+\nabla p_h)_K.$$
For the residual load, set $F_h(v_h,q_h):=(f,v_h)_\Omega+\sum_K\tau_K(\nabla q_h,f)_K$. Define
$$\|(v_h,q_h)\|_{h}^2:=\nu\|\nabla v_h\|_2^2+\gamma\|\nabla\cdot v_h\|_2^2+\sum_K\tau_K\|\nabla q_h\|_{0,K}^2.$$
Then this is a norm, $B_h(z_h,z_h)=\|z_h\|_h^2$, and the discrete problem $B_h(z_h,\cdot)=F_h(\cdot)$ has a unique solution satisfying $\|z_h\|_h\le\|F_h\|_{h,*}$, where $\|F_h\|_{h,*}:=\sup_{y_h\ne0}|F_h(y_h)|/\|y_h\|_h$. The estimate controls pressure in the mesh-dependent gradient stabilization norm; it does not assert a mesh-uniform $L^2$ pressure bound or convergence.

## Facts & Assumptions

**Given:** A connected domain and connected conforming cell adjacency, continuous equal-order P1 velocity and pressure spaces, zero velocity boundary values, mean-zero pressure, $\nu>0$, $\tau_K>0$, $\gamma\ge0$, and the Stokes residual form.

[F1] [[def-supg-pspg-grad-div-stokes-forms]]: PSPG adds the element momentum residual tested against $\nabla q_h$, while grad-div adds $\gamma(\nabla\cdot u_h,\nabla\cdot v_h)$; both are definitions and supply no stability claim by themselves.

[A1] On each cell, $u_h$ is affine, so $\Delta_Ku_h=0$. The cell mesh is connected, the pressure is continuous, and its mean is zero.

## Proof

1.1 Setting $(v_h,q_h)=(u_h,p_h)$ in the displayed form cancels the mixed terms $-(p_h,\nabla\cdot u_h)+(p_h,\nabla\cdot u_h)$. By [A1], the PSPG residual term becomes $\sum_K\tau_K\|\nabla p_h\|_{0,K}^2$. The remaining terms are exactly $\nu\|\nabla u_h\|_2^2+\gamma\|\nabla\cdot u_h\|_2^2$, so $B_h((u_h,p_h),(u_h,p_h))=\|(u_h,p_h)\|_h^2$. [F1, A1, given, algebra]

2.1 If this norm is zero, $\nabla u_h=0$ on each cell; continuity and zero boundary values force $u_h=0$. Also $\nabla p_h=0$ on each cell, so $p_h$ is constant on each cell. Continuity across shared facets and connected cell adjacency force one global constant; its zero mean forces $p_h=0$. Thus the norm vanishes only at zero. [A1, step 1.1, algebra]

3.1 If $z_h$ is in the kernel of the bilinear map, then step 1.1 gives $\|z_h\|_h^2=B_h(z_h,z_h)=0$, and step 2.1 forces $z_h=0$. Thus the linear map from $V_h\times Q_h$ to its dual is injective and, by equal finite dimensions, bijective; the discrete problem has a unique solution. Testing that solution equation with itself gives $\|z_h\|_h^2=F_h(z_h)\le\|F_h\|_{h,*}\|z_h\|_h$. If $z_h=0$ the estimate is immediate; otherwise division proves $\|z_h\|_h\le\|F_h\|_{h,*}$. [step 1.1, step 2.1, given, algebra] ∎
