---
id: thm-forward-euler-global-error-on-controlled-sph-tube
kind: theorem
title: "Forward Euler has first-order global error and preserves a margin tube for the regularized SPH ODE"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [def-regularized-conservative-sph-system, lem-regularized-sph-vector-field-lipschitz-on-positive-density-tube, thm-regularized-sph-local-wellposedness, lem-exponential-dominates-one-plus-x, thm-exponential-addition-formula, prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation, thm-cauchy-schwarz-and-the-euclidean-norm, thm-norm-inequality-for-the-vector-valued-integral]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: "No choice principle is used."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Volker Springel, Smoothed Particle Hydrodynamics in Astrophysics, Annual Review of Astronomy and Astrophysics 48 (2010), author full text"
      url: "https://arxiv.org/html/1109.2219"
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Numerical Methods for Partial Differential Equations, Lecture 25: Particle Methods (Spring 2009)"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/ff7d4237c8f958e646cca0702e4dd17b_MIT18_336S09_lec25.pdf"
---

## Statement

Use the state norm ||z||#=max_i{|q_i|,|v_i|,|e_i|} on the finite-dimensional state space, and dist#(z,Kᶜ)=inf_{y∉K}||z−y||#. Let T>0 and let z(t), 0≤t≤T, be the unique solution from [[thm-regularized-sph-local-wellposedness]]. Let K⊂U be a nonempty compact convex set, with dist#(z(t),Kᶜ)≥δ>0 for every t. Assume B,L≥0, ||F(w)||#≤B for every w∈K, and Lip#(F|K)≤L. For an integer n≥1 set h=T/n, Z₀=z(0), and Z_{k+1}=Z_k+hF(Z_k). Put E_h=(Bh/2)(exp(LT)−1), which is zero when L=0. If E_h<δ, then every Euler state Z_k lies in K and

$$\max_{0\le k\le n}\|Z_k-z(kh)\|_\#\le E_h.$$

The tube margin and exact-path hypothesis are explicit. This result makes no energy- or momentum-conservation claim for the Euler time discretization.

## Facts & Assumptions

**Given:** The regularized SPH vector field F, an exact solution on [0,T] with the stated margin in K, finite B,L, a positive step h=T/n, and exact initial data.

[F1] [[thm-regularized-sph-local-wellposedness]]: F has a unique local solution on the positive-density open state domain.

[F2] [[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]: a C¹ solution of ż=F(z) satisfies z(t+s)=z(t)+∫₀ˢF(z(t+r))dr.

[F3] [[lem-regularized-sph-vector-field-lipschitz-on-positive-density-tube]]: F is L-Lipschitz on K and has the stated bound B when assumed in the Given clause.

[F4] [[lem-exponential-dominates-one-plus-x]]: 1+x≤exp(x) for every real x.

[F5] [[thm-exponential-addition-formula]]: exp(x+y)=exp(x)exp(y).

[F6] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: each Euclidean position/velocity block norm satisfies the triangle and homogeneity axioms; the real internal-energy blocks have the same properties, and taking a finite maximum preserves them. Thus ||·||# is a norm.

[F7] [[thm-norm-inequality-for-the-vector-valued-integral]]: applying the integral norm inequality to each Euclidean state block, then taking the finite maximum, gives ||∫g||#≤∫||g||# on a time interval.

## Proof

1.1 The local defect from an exact start is z(t+h)−z(t)−hF(z(t))=∫₀ʰ(F(z(t+s))−F(z(t)))ds by [F2]. Since z(t)∈K and ||F(w)||#≤B for every w∈K, ||ż(t)||#≤B; applying [F7] to the Volterra formula gives ||z(t+s)−z(t)||#≤Bs. Then [F3] bounds the defect integrand by LBs. A second application of [F7] and integration of LBs give the local defect norm bound LBh²/2. [F2, F3, F7, given, algebra]

2.1 Suppose Z_k∈K. By convexity of K the segment from Z_k to z(kh) lies in K, so [F3] gives ||Z_k+hF(Z_k)−(z(kh)+hF(z(kh)))||#≤(1+hL)||Z_k−z(kh)||#. The triangle and homogeneity properties in [F6], together with the defect from step 1.1, yield e_{k+1}≤(1+hL)e_k+LBh²/2, where e_k=||Z_k−z(kh)||#. [F1, F3, F6, step 1.1, algebra]

3.1 Starting with e₀=0 and iterating step 2.1 gives e_k≤(Bh/2)((1+hL)^k−1) when L>0, by the finite geometric-sum identity; when L=0 the defect is zero and e_k=0. Since 1+hL≤exp(hL) by [F4] and exp(khL)=exp(Lkh) by repeated [F5], e_k≤E_h for k≤n. [F4, F5, step 2.1, algebra]

4.1 Initially Z₀=z(0)∈K. If Z₀,…,Z_k∈K, steps 2.1–3.1 give e_{k+1}≤E_h<δ. The exact state z((k+1)h) is at distance at least δ from Kᶜ, so Z_{k+1}∈K. Induction proves all Euler states remain in K and the bound holds for every k. [given, step 2.1, step 3.1, induction] ∎
