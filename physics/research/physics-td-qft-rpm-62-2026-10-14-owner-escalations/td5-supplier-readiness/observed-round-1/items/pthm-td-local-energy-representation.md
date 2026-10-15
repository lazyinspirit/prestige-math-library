---
id: pthm-td-local-energy-representation
kind: physics-theorem
title: Local energy representation and thermodynamic conjugates
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Local single-phase, positive-temperature charts of the adopted macroscopic entropy representation; no global inverse or statement at a phase boundary is asserted.
deps:
  - def-td-equilibrium-state-domain
  - def-td-si-quantities
  - def-td-galilean-rest-frame
  - post-td-concave-fundamental-entropy
  - def-td-temperature-pressure-chemical-potential
  - thm-chain-rule-for-total-derivatives
  - thm-tdmath-local-implicit-rank
dependency_roles:
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-td-galilean-rest-frame: formulation-prerequisite
  post-td-concave-fundamental-entropy: physical-assumption
  def-td-temperature-pressure-chemical-potential: formulation-prerequisite
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-tdmath-local-implicit-rank: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §§1.2.4 and 1.4
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Konstantin K. Likharev, Essential Graduate Physics, SM Statistical Mechanics, §§1.2–1.5
      url: https://essentialgraduatephysics.org/Files/SM%20merged.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapter 2, §§2.9–2.10
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf
---

## Statement

Let $c$ be a material constitution, let $r$ be its finite number of named species, and let $(U_0,V_0,n_{0,1},\ldots,n_{0,r})$ lie in a specified open single-phase physical-coordinate chart $\Omega\subseteq D_c$, where $U$ is in joules, $V>0$ is in cubic metres, and each $n_j>0$ is in moles ([[def-td-equilibrium-state-domain]], [[def-td-si-quantities]]). Assume the adopted entropy $S_c:\Omega\to\mathbb R$ is $C^2$ and $S_{c,U}(U_0,V_0,n_0)>0$ as in [[post-td-concave-fundamental-entropy]]. Then there are open neighborhoods of $(S_c(U_0,V_0,n_0),V_0,n_0)$ and $(U_0,V_0,n_0)$ on which the equation

$$S_c(U,V,n)=s$$

has a unique solution $U=\mathcal U_c(s,V,n)$ of class $C^2$. On this local chart,

$$\mathcal U_{c,s}=T_c,\qquad \mathcal U_{c,V}=-p_c,\qquad \mathcal U_{c,n_j}=\mu_{c,j},$$

with the intensive functions defined by [[def-td-temperature-pressure-chemical-potential]]. This is a local representation only: it asserts neither global injectivity or domain coverage nor differentiability at a nonsmooth phase boundary.

## Facts & Assumptions

**Given:** A fixed constitution $c$, an open physical-coordinate neighborhood $\Omega\subseteq D_c$, a point $(U_0,V_0,n_0)\in\Omega$ with $V_0>0$ and positive mole amounts, and the adopted $C^2$ entropy with $S_{c,U}(U_0,V_0,n_0)>0$. Use the stated SI units and the center-of-mass rest-frame energy convention.

[A1] [[post-td-concave-fundamental-entropy]]: On each designated open single-phase chart, the entropy representative is $C^2$ and its finite partial derivative $S_{c,U}$ at fixed $V,n$ is strictly positive. This is an adopted physical premise, not a proved physical law.

[F1] [[def-td-equilibrium-state-domain]] and [[def-td-galilean-rest-frame]]: A state has coordinates $(U,V,n_1,\ldots,n_r)$; $U$ is the internal energy evaluated in the center-of-mass rest frame. The definition does not assert that every ambient coordinate tuple is physically realizable.

[F2] [[def-td-temperature-pressure-chemical-potential]]: $T_c=1/S_{c,U}$, $p_c=T_cS_{c,V}$, and $\mu_{c,j}=-T_cS_{c,n_j}$, with the other physical coordinates held fixed in each partial derivative.

[L1] [[thm-tdmath-local-implicit-rank]] (planned item on batch 4; carrier not present at inspection): the scalar-coordinate case of its planned local-rank theorem is the following conditional interface from M3 in the thermodynamics mathematical-prerequisite dossier. If $f(u,y)$ is $C^2$ on an open subset of $\mathbb R\times\mathbb R^m$ and $f_u(u_0,y_0)>0$, then near $(f(u_0,y_0),y_0)$ there is a unique $C^2$ function $g(s,y)$ with $f(g(s,y),y)=s$, $g_s=1/f_u$, and $g_y=-f_y/f_u$. This is a planned mathematical result; its dossier argument is complete research reasoning, not a production carrier, proof audit, or acceptance receipt.

## Proof

1.1 Put $y=(V,n_1,\ldots,n_r)$ and $f(U,y)=S_c(U,V,n)$. The state-domain and smooth-chart assumptions in [F1] and [A1] give an open neighborhood on which $f$ is $C^2$, and [A1] gives $f_U(U_0,y_0)>0$. Thus the hypotheses of the planned scalar local-inversion interface [L1] hold at $(U_0,y_0)$. Conditional on that supplier, it provides the unique local $C^2$ inverse $U=\mathcal U_c(s,y)$. No monotonicity outside this neighborhood or global image coverage has been assumed. [given, A1, F1, L1]

1.2 Differentiate $S_c(\mathcal U_c(s,V,n),V,n)=s$ in $s$, in $V$ at fixed $s,n$, and in $n_j$ at fixed $s,V,n_{k\ne j}$. The chain rule [[thm-chain-rule-for-total-derivatives]] gives respectively $S_{c,U}\mathcal U_{c,s}=1$, $S_{c,U}\mathcal U_{c,V}+S_{c,V}=0$, and $S_{c,U}\mathcal U_{c,n_j}+S_{c,n_j}=0$. Division is valid because $S_{c,U}>0$. Using [F2], these equations give $\mathcal U_{c,s}=1/S_{c,U}=T_c$, $\mathcal U_{c,V}=-S_{c,V}/S_{c,U}=-p_c$, and $\mathcal U_{c,n_j}=-S_{c,n_j}/S_{c,U}=\mu_{c,j}$. [given, A1, F2, L1, step 1.1] ∎

## Remarks

The batch-4 carrier [[thm-tdmath-local-implicit-rank]] is absent at this authoring inspection. The argument above states exactly the planned scalar inverse interface it needs and remains conditional on the actual carrier matching that interface.
