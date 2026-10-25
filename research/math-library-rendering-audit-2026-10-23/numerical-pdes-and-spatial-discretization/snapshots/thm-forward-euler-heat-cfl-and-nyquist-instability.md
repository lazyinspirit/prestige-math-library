---
id: thm-forward-euler-heat-cfl-and-nyquist-instability
kind: theorem
title: Forward Euler heat CFL stability and sharp Nyquist instability
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-parabolic-theta-finite-difference-scheme
  - lem-periodic-heat-difference-amplification-symbol
justified_by: []
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Endre Süli, B6.1 Numerical Solution of Partial Differential Equations: A brief introduction to the theory of finite difference approximation of PDEs"
      url: "https://people.maths.ox.ac.uk/suli/nspdes.pdf"
      locator: "§5.2.1 and §5.6.1, PDF pp. 60–61 and 70–71: the one-dimensional and multidimensional Fourier stability conditions."
    - title: "Benjamin Seibold, MIT 18.336, Lecture 14: Von Neumann Stability Analysis (Spring 2009)"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/c7c12accea163007923288875bb42604_MIT18_336S09_lec14.pdf"
      locator: "Complete PDF pp. 1–3: forward-Euler heat amplification factor, worst frequency, and d=2 CFL condition."
    - title: "Martin Krosche, Hermann G. Matthies, and Oliver Kayser-Herold, Lecture Notes: Introduction to PDEs and Numerical Methods, Technical University Braunschweig, Revision 1.1 (2008), hosted by University of Jyväskylä"
      url: "https://users.jyu.fi/~rainom/pde/material/pde1en.pdf"
      locator: "Chapter 1 §§1.4.4–1.4.6, PDF pp. 21–29: θ time discretization, finite-grid matrix form, von Neumann stability, highest resolvable frequency, and separate stability/positivity conditions. The Fourier section assumes an infinite grid; no boundary claim is imported."
---

## Statement

On a finite periodic rectangular $d$-grid with $\kappa_j>0$, let $S=\sum_{j=1}^d\kappa_j/h_j^2$. The forward-Euler heat update is nonexpansive in the periodic weighted grid L2 norm whenever $\Delta tS\le1/2$. If every $N_j$ is even, the condition is sharp for that grid family: when $\Delta tS>1/2$, the joint Nyquist Fourier mode has amplification below $-1$ and grows in norm under iteration. At equality its amplification is $-1$, so its magnitude is preserved.

## Facts & Assumptions

**Given:** A finite periodic rectangular $d$-grid with spacings $h_j$, diffusivities $\kappa_j>0$, time step $\Delta t>0$, and the forward-Euler update from [[def-parabolic-theta-finite-difference-scheme]].

[F1] [[lem-periodic-heat-difference-amplification-symbol]]: every periodic Fourier mode has $\lambda_\ell=4\sum_j\kappa_jh_j^{-2}\sin^2(\pi\ell_j/N_j)$ and forward-Euler multiplier $g_0(\ell)=1-\Delta t\lambda_\ell$; the modes form a basis.

## Proof

1.1 Since $0\le\sin^2(\pi\ell_j/N_j)\le1$, [F1] gives $0\le\lambda_\ell\le4S$ for every mode. If $\Delta tS\le1/2$, then $0\le\Delta t\lambda_\ell\le2$, so $|g_0(\ell)|=|1-\Delta t\lambda_\ell|\le1$. [F1, given, algebra]

2.1 The Fourier modes in [F1] are an orthogonal basis. Each mode is multiplied by a scalar of magnitude at most one in step 1.1; summing the squared modal coefficients therefore shows that one update is nonexpansive in the weighted grid $L^2$ norm, and every finite power remains nonexpansive. [F1, step 1.1, algebra]

3.1 If every $N_j$ is even, choose $\ell_j=N_j/2$ for every coordinate. Then each sine square in [F1] equals one, so $\lambda_\ell=4S$ and $g_0(\ell)=1-4\Delta tS$. It equals $-1$ at $\Delta tS=1/2$ and is strictly less than $-1$ when $\Delta tS>1/2$. Repeated updates multiply this mode by $g_0(\ell)^n$, whose magnitude grows geometrically in the latter case. [F1, given, algebra] ∎

## Remarks

This Fourier result is for periodic grids. No finite-Dirichlet stability conclusion is inferred from it; the Dirichlet boundary rows are handled by the separate discrete maximum-principle and energy arguments. No choice axiom is used.
