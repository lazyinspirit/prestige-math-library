---
id: thm-parabolic-theta-scheme-local-truncation-error
kind: theorem
title: Local truncation residual for the θ heat scheme
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-parabolic-theta-finite-difference-scheme
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
      locator: "§5.1.1 and §5.6, PDF pp. 57–58 and 72–74: the endpoint-weighted θ residual, Taylor consistency orders, and complete interior error identity."
    - title: "Benjamin Seibold, MIT 18.336, Lecture 14: Von Neumann Stability Analysis (Spring 2009)"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/c7c12accea163007923288875bb42604_MIT18_336S09_lec14.pdf"
      locator: "Complete PDF pp. 1–3: heat equation model and its finite-difference equation; the local Taylor residual is proved here."
    - title: "Martin Krosche, Hermann G. Matthies, and Oliver Kayser-Herold, Lecture Notes: Introduction to PDEs and Numerical Methods, Technical University Braunschweig, Revision 1.1 (2008), hosted by University of Jyväskylä"
      url: "https://users.jyu.fi/~rainom/pde/material/pde1en.pdf"
      locator: "Chapter 1 §§1.4.4–1.4.6, PDF pp. 21–29: θ time discretization, finite-grid matrix form, von Neumann stability, highest resolvable frequency, and separate stability/positivity conditions. The Fourier section assumes an infinite grid; no boundary claim is imported."
---

## Statement

Let $\Omega=(0,L_x)\times(0,L_y)$, $T>0$, $N_x,N_y\ge2$, $M\ge1$, $h_x=L_x/N_x$, $h_y=L_y/N_y$, and $\Delta t=T/M$. Let $\kappa_x,\kappa_y>0$, $\theta\in[0,1]$, and suppose $u$ satisfies
$$
u_t-\kappa_xu_{xx}-\kappa_yu_{yy}=f$$
on $\overline\Omega\times[0,T]$, with exact sampled initial and Dirichlet rows in the scheme of [[def-parabolic-theta-finite-difference-scheme]]. Assume $u_{tt},u_{ttt},u_{xxxx},u_{yyyy}$ are continuous on the closed cylinder, and write $M_{tt},M_{ttt},M_{x4},M_{y4}$ for their respective sup norms there. If $r^n$ is the exact grid sample at time $t_n$, the complete interior residual is bounded at every time step by
$$
\|\tau^n\|_\infty\le \Delta t M_{tt}+\frac{\kappa_xh_x^2M_{x4}+\kappa_yh_y^2M_{y4}}{12}\quad(\theta\ne\tfrac12),
$$
and
$$
\|\tau^n\|_\infty\le\frac{(\Delta t)^2M_{ttt}}{12}+\frac{\kappa_xh_x^2M_{x4}+\kappa_yh_y^2M_{y4}}{12}\quad(\theta=\tfrac12),
$$
where $\tau^n$ is defined by substituting the exact samples and the exact boundary rows into the fully discrete equation, including its interior rows adjacent to the boundary.

## Facts & Assumptions

**Given:** The rectangular domain and finite mesh above; $\kappa_x,\kappa_y>0$; $\theta\in[0,1]$; an exact solution with the stated continuous derivatives satisfying $u_t-\kappa_xu_{xx}-\kappa_yu_{yy}=f$; and exact initial and boundary samples.

[F1] [[def-parabolic-theta-finite-difference-scheme]] defines the centered heat stencil, the endpoint-weighted source $(1-\theta)f^n+\theta f^{n+1}$, and boundary contributions from both endpoint rows.

## Proof

1.1 At each interior node set $r^n_{ij}=u(x_i,y_j,t_n)$ and define $\tau^n=(r^{n+1}-r^n)/\Delta t+A_h^{B_\theta}((1-\theta)r^n+\theta r^{n+1})-((1-\theta)f^n+\theta f^{n+1})$, where $B_\theta=(1-\theta)B^n+\theta B^{n+1}$ and $A_h^{B_\theta}$ applies the centered stencil using that exact boundary row. Applying the PDE at $t_n$ and $t_{n+1}$ rewrites this as the weighted average of the two spatial stencil defects plus $(r^{n+1}-r^n)/\Delta t-((1-\theta)u_t^n+\theta u_t^{n+1})$. [F1, given, algebra]

2.1 For a one-variable $C^4$ function $v$, Taylor expansion at an interior node gives $(v(x+h)-2v(x)+v(x-h))/h^2-v''(x)=h^2(v^{(4)}(\xi_+)+v^{(4)}(\xi_-))/24$ for some $\xi_+\in(x,x+h)$ and $\xi_-\in(x-h,x)$. Thus the absolute error is at most $h^2\|v^{(4)}\|_\infty/12$. The stencil uses the exact boundary samples at the first and last interior rows, so the same Taylor estimate applies there. Applying it in $x$ and $y$ bounds each spatial defect in step 1.1 by $(\kappa_xh_x^2M_{x4}+\kappa_yh_y^2M_{y4})/12$. [F1, given, step 1.1, algebra]

2.2 Put $g(t)=u_t(x_i,y_j,t)$. The quotient $(u(t_{n+1})-u(t_n))/\Delta t$ is the average of $g$ on the time interval. For $\theta\ne1/2$, both this average and $(1-\theta)g(t_n)+\theta g(t_{n+1})$ lie between the minimum and maximum of $g$ on that interval; their difference is therefore at most its oscillation, which is at most $\Delta t M_{tt}$. For $\theta=1/2$, let $L$ be the linear interpolant of $g$ at the two endpoints. The interpolation remainder satisfies $|g(t)-L(t)|\le M_{ttt}(t-t_n)(t_{n+1}-t)/2$. Integrating and dividing by $\Delta t$ gives $|(\Delta t)^{-1}\int_{t_n}^{t_{n+1}}g-(g(t_n)+g(t_{n+1}))/2|\le (\Delta t)^2M_{ttt}/12$. These are the required bounds for the temporal term in step 1.1. [given, step 1.1, algebra]

3.1 Combining the two spatial bounds from step 2.1 with the temporal bound from step 2.2 in the residual identity of step 1.1 gives the two asserted estimates at every interior node. Taking the maximum over nodes and time steps proves the stated complete-residual bounds. [step 1.1, step 2.1, step 2.2, algebra] ∎

## Remarks

The derivatives are assumed up to the closed space-time boundary, so the proof includes boundary-adjacent interior rows. Exact boundary samples are essential; no result for a lower-order or different boundary closure is asserted. No choice axiom is used.
