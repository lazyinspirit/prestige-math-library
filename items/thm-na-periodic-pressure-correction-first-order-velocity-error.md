---
id: thm-na-periodic-pressure-correction-first-order-velocity-error
kind: theorem
title: "First-order velocity accuracy for smooth periodic Stokes data"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-na-periodic-staggered-grid-stokes-operators
  - alg-na-periodic-incremental-pressure-correction
  - thm-na-periodic-pressure-correction-solves-well-defined
  - thm-na-periodic-discrete-helmholtz-projection
  - lem-na-periodic-grid-pressure-laplacian-zero-mode-and-poincare
  - lem-na-periodic-staggered-grid-smooth-sampling-consistency
  - thm-cauchy-schwarz-in-an-inner-product-space
  - cor-vector-valued-ftc-and-lipschitz-bound
  - thm-norm-inequality-for-the-vector-valued-integral
proof_strategy: direct
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. L. Guermond, P. Minev, and J. Shen, An overview of projection methods
        for incompressible flows"
      url: "https://people.tamu.edu/~guermond/PUBLICATIONS/guermond_minev_shen_CMAME_\
        2006.pdf"
      locator: "§3.2 and Remark 3.2, printed pp. 6013–6014: smooth-data velocity
        accuracy and the splitting-order caveat; the periodic staggered-grid
        estimate is proved locally here."
    - title: "NPTEL, Lecture 5.4: Methods based on Coupling of Pressure and Velocity"
      url: "https://archive.nptel.ac.in/content/storage2/courses/112106061/Module_5/L\
        ecture_5.4.pdf"
      locator: "PDF pp. 5–10 (slides 5–10), equations (5.4.4)–(5.4.10): fractional-step projection, staggered cell/face placement, and centred differences; local estimates are proved here."
verification:
  precheck: pass
---

## Statement

Let $d\ge1$, $\nu>0$, $T>0$, $N\ge2$, $h=1/N$, and
$k=T/M$ for an integer $M\ge1$. Suppose smooth periodic fields $u,p,f$ on
$[0,T]\times\mathbb T^d$ satisfy
$$ u_t-\nu\Delta u+\nabla p=f,\qquad \nabla\cdot u=0, \qquad \int_{\mathbb T^d}p(t,x)\,dx=0, \qquad \int_{\mathbb T^d}f_i(t,x)\,dx=0 $$
for every $i,t$. Assume the time derivatives of $u$ through order two,
the spatial derivatives of $u$ through order four, of $p$ through order
three, and of $f$ through order two are continuous and bounded. Sample $u$ at
the staggered faces and $p,f$ at their corresponding grid locations; subtract
the discrete mean from each sampled pressure and force component. Start the
backward-Euler incremental pressure-correction algorithm with
$$
u_h^0=P_hR_hu(0),\qquad p_h^0=R_hp(0)-h^d\sum_{j\in J_N}(R_hp(0))_j.
$$
Then its velocity satisfies
$$ \max_{0\le n\le M}\|u_h^n-R_hu(t_n)\|_{M_h} \le C_T(h^2+k),\qquad t_n=nk, $$
where $C_T$ is independent of $h,k$ and depends only on $d,T,\nu$ and the
displayed smoothness bounds. The estimate is for velocity; no pressure-error
rate is asserted.

## Facts & Assumptions

**Given:** The smooth periodic Stokes solution and compatibility conditions above; the backward-Euler scheme with discrete mean-zero force and pressure; the staggered-grid mass inner products.

[F1] The discrete gradient/divergence are negative adjoints, $P_h$ is the mass-orthogonal projector onto $\ker D_h$, and the backward-Euler correction is $u_h^{n+1}=P_h\widetilde u_h^{n+1}$ ([[thm-na-periodic-discrete-helmholtz-projection]]).

[F2] The predictor matrix $I+k\nu A_h$ is invertible, and the pressure increment solve is unique on mean-zero arrays ([[thm-na-periodic-pressure-correction-solves-well-defined]]).

[F3] For sampled smooth fields, the discrete divergence, vector Laplacian, and pressure gradient have uniform $O(h^2)$ mass-norm consistency, and zero-integral smooth data have $O(h^2)$ discrete mean ([[lem-na-periodic-staggered-grid-smooth-sampling-consistency]]).

[F4] The pressure Poincare estimate is $\|q\|_{Q_h}\le\sqrt d\|G_hq\|_{M_h}$ for mean-zero $q$ ([[lem-na-periodic-grid-pressure-laplacian-zero-mode-and-poincare]]).

[F5] $|\langle x,y\rangle|\le\|x\|\|y\|$ in the real mass inner products ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F6] The finite differences are the centred periodic operators and the mass inner products are the $h^d$ weighted sums ([[def-na-periodic-staggered-grid-stokes-operators]]).

[F7] For a differentiable finite-dimensional vector curve with integrable derivative, the integral of the derivative is its endpoint difference, and a bounded derivative gives a Lipschitz bound ([[cor-vector-valued-ftc-and-lipschitz-bound]]).

[F8] The Euclidean norm of a vector integral is at most the integral of its Euclidean norm ([[thm-norm-inequality-for-the-vector-valued-integral]]).

## Proof

1.1 Let $R_hu(t)$ denote the face samples and $R_hp(t),R_hf(t)$ the cell and face samples, respectively. For a face array $z$, write $\bar z_i$ for the discrete mean of component $i$ repeated on every $i$-face. The input force is $f_h(t)=R_hf(t)-\bar{R_hf(t)}$, so [F3] gives $\|f_h(t)-R_hf(t)\|_{M_h}\le C h^2$. Define the sampling residual $$ r_h(t)=R_hu_t(t)+\nu A_hR_hu(t)+G_hR_hp(t)-R_hf(t). $$ The continuous Stokes equation and [F3] imply $\|r_h(t)\|_{M_h}\le C h^2$, uniformly in $t$. [given, F3, F6]

2.1 Define $v_h(t)=P_hR_hu(t)$ and let $L_h=-\Delta_h$ on mean-zero cell arrays. All coordinate shifts commute, so $A_hG_h=G_hL_h$ and $D_hA_h=L_hD_h$. Since $L_h=-\Delta_h$, it commutes with $\Delta_h^{-1}$ on $Q_h$. Substitution in $P_h=I-G_h\Delta_h^{-1}D_h$ gives $P_hA_h=A_hP_h$. Also $P_hG_hq=0$ for every mean-zero $q$, because $G_hq$ is orthogonal to $\ker D_h$ by the adjoint relation in [F1]. Applying $P_h$ to the residual equation in step 1.1 therefore yields $$ v_h'(t)+\nu A_hv_h(t)=P_hf_h(t)+\rho_h(t), $$ where $\rho_h=P_hr_h+P_h(R_hf-f_h)$. By [F1], $\|P_h\|\le1$, and hence $\|\rho_h(t)\|_{M_h}\le C h^2$. [F1, F2, F3, F6, step 1.1, algebra]

3.1 Applying $P_h$ to the predictor equation and using $P_hA_h=A_hP_h$ and $P_hG_hp_h^n=0$ shows that the actual corrected velocity is exactly the backward-Euler step on $Z_h=\ker D_h$: $$ (I+k\nu A_h)u_h^{n+1}=u_h^n+kP_hf_h(t_{n+1}). $$ The projected reference $v_h$ obeys the differential equation in step 2.1. [F1, F2, step 2.1, algebra]

4.1 Put $e_h^n=u_h^n-v_h(t_n)$. Integrating $v_h'$ over $[t_n,t_{n+1}]$ and using the equation in step 2.1 gives $$ (I+k\nu A_h)v_h(t_{n+1}) =v_h(t_n)+kP_hf_h(t_{n+1})+k\rho_h(t_{n+1})+\tau_h^{n+1}, $$ where $\tau_h^{n+1}=v_h(t_{n+1})-v_h(t_n)-kv_h'(t_{n+1})$. By [F7], $$\tau_h^{n+1}=\int_{t_n}^{t_{n+1}}\bigl(v_h'(s)-v_h'(t_{n+1})\bigr)\,ds.$$ The bounded-derivative clause of [F7] gives $\|v_h'(s)-v_h'(t_{n+1})\|_{M_h}\le (t_{n+1}-s)\sup_t\|v_h''(t)\|_{M_h}$ after the isometric identification $v\mapsto h^{d/2}v$ with Euclidean coordinates. Applying [F8] yields $$\|\tau_h^{n+1}\|_{M_h}\le\int_{t_n}^{t_{n+1}}(t_{n+1}-s)\sup_t\|v_h''(t)\|_{M_h}\,ds=\frac{k^2}{2}\sup_t\|v_h''(t)\|_{M_h}\le Ck^2,$$ because $P_h$ is a contraction and $h^dN^d=1$ bounds the weighted sample norm by the continuous supremum norm up to the fixed component factor. [F1, F2, F7, F8, step 2.1, step 3.1, algebra]

5.1 For any face vector $z$, periodic summation by parts gives $(A_hz,z)_{M_h}\ge0$. Hence $$ \|(I+k\nu A_h)z\|_{M_h}^2 =\|z\|_{M_h}^2+2k\nu(A_hz,z)_{M_h}+k^2\nu^2\|A_hz\|_{M_h}^2 \ge\|z\|_{M_h}^2. $$ Thus $(I+k\nu A_h)^{-1}$ is a contraction. Subtracting the equations in steps 3.1–4.1 and applying this contraction gives $$ \|e_h^{n+1}\|_{M_h} \le\|e_h^n\|_{M_h}+Ckh^2+Ck^2. $$ Since $e_h^0=0$ and $M=T/k$, summing yields $\max_n\|e_h^n\|_{M_h}\le C_T(h^2+k)$. [F1, F2, step 3.1, step 4.1, algebra]

6.1 Finally, $u_h^n-R_hu(t_n)=e_h^n+(P_hR_hu(t_n)-R_hu(t_n))$. The second term equals $-G_h\phi$ with $\phi=\Delta_h^{-1}D_hR_hu(t_n)$. By [F4] and [F5], $$ \|G_h\phi\|_{M_h}^2 =-(\phi,\Delta_h\phi)_{Q_h} =-(\phi,D_hR_hu)_{Q_h} \le\sqrt d\|G_h\phi\|_{M_h}\|D_hR_hu\|_{Q_h}. $$ If $G_h\phi=0$ the bound is immediate; otherwise divide by its norm. Since $\nabla\cdot u=0$, [F3] gives $\|D_hR_hu\|_{Q_h}\le Ch^2$, so the projection-sampling discrepancy is $O(h^2)$. Combining this with step 5.1 proves the stated estimate. [F1, F3, F4, F5, step 5.1, algebra] ∎
