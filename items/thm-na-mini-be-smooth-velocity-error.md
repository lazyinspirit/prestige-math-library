---
id: thm-na-mini-be-smooth-velocity-error
kind: theorem
title: "Smooth-branch velocity error for backward Euler MINI"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 10
deps:
  [
    def-na-mini-navier-stokes-backward-euler-scheme,
    def-na-evolutionary-incompressible-ns-weak-solution,
    def-na-evolutionary-skew-convective-form,
    def-na-mini-element-p1-bubble-p1-spaces,
    thm-na-mini-be-step-existence-energy,
    thm-na-mini-solenoidal-stokes-projection-error,
    thm-na-mixed-galerkin-quasioptimality,
    lem-na-evolutionary-skew-convective-form-bound,
    lem-na-scott-zhang-boundary-preserving-p1-interpolant,
    thm-na-discrete-helmholtz-projection-and-pressure-schur,
    def-na-discrete-weak-and-exact-divergence-free-spaces,
    def-na-stokes-zero-mean-pressure-and-velocity-spaces,
    lem-na-homogeneous-dirichlet-korn-identity,
    thm-poincare-inequality-for-w-one-p-zero,
    thm-holder-inequality-for-integrals,
    thm-young-inequality-real-exponents,
    def-countable-choice
  ]
justified_by: []
aliases: []
forward_refs: [ cex-na-graded-mini-mass-initialization-pressure-rate ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapters 49–54 (complete course
        notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: "Chapter 53, Stokes projection; Chapter 54, MINI stability and
        approximation"
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element
        Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2; Chapter 8, MINI error estimates"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Assume the MINI mesh and time-partition hypotheses of [[def-na-mini-navier-stokes-backward-euler-scheme]]. Suppose $(u,p)$ is a strong solution of the no-slip Navier–Stokes equations with forcing $f\in L^2(0,T;L^2(D)^d)$ and $u\in W^{1,\infty}(0,T;H^2(D)^d\cap V_\sigma)$ and $p\in W^{1,\infty}(0,T;H^1(D)\cap L^2_0(D))$. Set
$$M:=1+\|u\|_{W^{1,\infty}H^2}+\|p\|_{W^{1,\infty}H^1},\quad M_u:=\|u\|_{L^\infty V},$$
$$M_\infty:=\bigl(\|u_0\|_2^2+C_P(D)^2\nu^{-1}\|f\|_{L^2L^2}^2\bigr)^{1/2},\quad M_E:=\nu^{-1/2}\|u_0\|_2+C_P(D)\nu^{-1}\|f\|_{L^2L^2},$$
and $\Lambda:=1+C_D\nu^{-3}M_u^4$, where $C_D$ depends only on the domain, dimension and the trilinear-form constant. For sufficiently fine time partitions satisfying $\tau_{\max}\Lambda\le\tfrac12$, initialize by $u_h^0=P_{Z_h}u_0$ and choose any backward Euler MINI solution. Then
$$\max_{0\le n\le N}\|u(t_n)-u_h^n\|_2+\nu^{1/2}\left(\sum_{n=1}^N\tau_n\|u(t_n)-u_h^n\|_V^2\right)^{1/2}\le C_*\bigl(hM+\tau_{\max}M^2\bigr),$$
where one may take
$$C_*:=C_{D,\mathrm{shape}}(1+\nu)^2(1+\nu^{-4})(1+T)^2(1+M_\infty+M_E+M)^4\exp(2T\Lambda).$$
Here $f$ is the forcing of the strong solution and $C_{D,\mathrm{shape}}$ is independent of $h$, all time steps, and $\nu$. The polynomial factor displays the positive and inverse viscosity powers produced by Young's inequalities and static Stokes projection. The explicit factor $\nu^{-3}$ in $\Lambda$ and exponential dependence on $T\Lambda$ are retained; no Reynolds-uniform estimate is asserted. The separate instantaneous pressure assertion is addressed in Remarks.

## Facts & Assumptions

**Given:** Countable Choice, a bounded connected Lipschitz polyhedral domain, a shape-regular MINI mesh family, a partition of $[0,T]$, viscosity $\nu>0$, and the strong solution and initialization in the Statement.

[F1] The exact solution satisfies the time-integrated mixed weak equation; for tests $z_h\in Z_h$ its pressure contribution is $b(z_h,\bar p_n)$. ([[def-na-mini-navier-stokes-backward-euler-scheme]], [[def-na-evolutionary-incompressible-ns-weak-solution]])

[F2] The linear solenoidal energy projection $S_h$ satisfies $\|u-S_hu\|_V\le C_0(1+\nu^{-1})h(\|u\|_{H^2}+\|p\|_{H^1})$ and the same estimate applies to $(u_t,p_t)$. ([[thm-na-mini-solenoidal-stokes-projection-error]])

[F3] Mean-adjusted face-average interpolation maps $H^1(D)$ to $Q_h$ with $\|p-r_h\|_2\le Ch\|p\|_{H^1}$. ([[lem-na-scott-zhang-boundary-preserving-p1-interpolant]], [[def-na-mini-element-p1-bubble-p1-spaces]])

[F4] The skew form is trilinear and continuous, obeys $|c(a;b,w)|\le C_D\|a\|_2^{1/2}\|a\|_V^{1/2}\|b\|_V\|w\|_V$, and $c(a;w,w)=0$. ([[lem-na-evolutionary-skew-convective-form-bound]], [[def-na-evolutionary-skew-convective-form]])

[F5] The discrete solution obeys $\max_n\|u_h^n\|_2\le M_\infty$ and $\sum_n\tau_n\|u_h^n\|_V^2\le M_E^2$. ([[thm-na-mini-be-step-existence-energy]])

[F6] The L2 projector $P_{Z_h}$ onto the weak MINI kernel defined in [[def-na-discrete-weak-and-exact-divergence-free-spaces]] exists and is a best approximation in $L^2$. ([[thm-na-discrete-helmholtz-projection-and-pressure-schur]])

[F7] On the Stokes velocity space $V=H^1_0(D)^d$, Poincare, Korn, Holder and Young give $\|z\|_2\le C_P\|z\|_V$ and $a_\nu(z,z)\ge\nu\|z\|_V^2$. ([[def-na-stokes-zero-mean-pressure-and-velocity-spaces]], [[thm-poincare-inequality-for-w-one-p-zero]], [[lem-na-homogeneous-dirichlet-korn-identity]], [[thm-holder-inequality-for-integrals]], [[thm-young-inequality-real-exponents]])

[A1] Countable Choice is assumed through the finite-dimensional projection and scheme-existence inputs. ([[def-countable-choice]], [[thm-na-mini-solenoidal-stokes-projection-error]], [[thm-na-mini-be-step-existence-energy]])

[F8] The static mixed projection contributes at most $1+\nu^{-1}$, pressure and trilinear Young estimates contribute inverse powers no worse than $\nu^{-3}$, and the viscous consistency term contributes one factor $\nu$ before it is balanced by coercivity. Thus all residual constants are bounded by $C_{D,\mathrm{shape}}(1+\nu+\nu^{-3})$; all such constants depend otherwise only on the domain, mesh-shape bound and dimension. ([[thm-na-mixed-galerkin-quasioptimality]], [[thm-na-mini-solenoidal-stokes-projection-error]], [[thm-young-inequality-real-exponents]])

## Proof

1.1 Let $S_h$ be the projection of [F2] and set $\eta(t)=u(t)-S_hu(t)$ and $M_\nu=(1+\nu^{-1})M$. Linearity and time independence of $S_h$ give $\eta_t=u_t-S_hu_t$. Applying [F2] to $(u(t),p(t))$ and $(u_t(t),p_t(t))$ yields $\|\eta\|_{L^\infty V}+\|\eta_t\|_{L^\infty V}+\|\eta\|_{L^\infty L^2}\le C hM_\nu,$ where the last term follows from Poincare [F7]. Define $\theta^n=S_hu(t_n)-u_h^n\in Z_h$. Since $P_{Z_h}$ is a best $L^2$ approximation and $S_hu_0\in Z_h$, [F2], [F6] and Poincare give $\|\theta^0\|_2\le2\|u_0-S_hu_0\|_2\le ChM_\nu$. [A1, F2, F6, F7, given]

2.1 Write $u_n=u(t_n)$ and $\bar u_n=\tau_n^{-1}\int_{t_{n-1}}^{t_n}u(t)\,dt$, with analogous notation $\bar p_n$ and $\bar c_n=\tau_n^{-1}\int c(u(t);u(t),\cdot)\,dt$. Average the exact equation in time and subtract the discrete equation. For every $z_h\in Z_h$ this gives $\left(\frac{\theta^n-\theta^{n-1}}{\tau_n},z_h\right)+a_\nu(\theta^n,z_h)= -\left(\frac{\eta(t_n)-\eta(t_{n-1})}{\tau_n},z_h\right)-a_\nu(\eta(t_n)+\bar u_n-u_n,z_h)-b(z_h,\bar p_n)+c(u_h^n;u_h^n,z_h)-\bar c_n(z_h).$ The identity uses $a_\nu(S_hu_n-u_n,z_h)=0$ from the defining projection; all forcing averages cancel exactly. [F1, F2, step 1.1, algebra]

3.1 Test step 2.1 with $z_h=\theta^n$ and multiply by $\tau_n$. For the pressure choose the mean-adjusted interpolant $r_h(t)$ from [F3] and set $\bar r_h^n=\tau_n^{-1}\int_{t_{n-1}}^{t_n}r_h(t)\,dt\in Q_h$; then $b(\theta^n,\bar r_h^n)=0$. Linearity and the triangle inequality for the Bochner average give $\|\bar p_n-\bar r_h^n\|_2\le ChM$, and $|\operatorname{div}\theta^n|\le\sqrt d\|\theta^n\|_V$, so $|b(\theta^n,\bar p_n)|\le C_D hM\|\theta^n\|_V$. Also $\|\bar u_n-u_n\|_V\le\tau_n M$. The time derivative estimate [F2] gives $\|\eta(t_n)-\eta(t_{n-1})\|_2\le C\tau_n hM_\nu$. Cauchy–Schwarz and Young, with viscous fractions $\nu\tau_n/16$ for each of the viscous and pressure terms, yield $$| (\eta(t_n)-\eta(t_{n-1}),\theta^n)|+\tau_n|a_\nu(\eta(t_n)+\bar u_n-u_n,\theta^n)|+\tau_n|b(\theta^n,\bar p_n-\bar r_h^n)|\le\tfrac{\tau_n}{8}\|\theta^n\|_2^2+\tfrac{\nu\tau_n}{8}\|\theta^n\|_V^2+C_{D,\nu}\tau_n(h^2M_\nu^2+\tau_n^2M^2).$$ Here $C_{D,\nu}$ is bounded by $C_{D,\mathrm{shape}}(1+\nu+\nu^{-1})$ for these linear residuals. [F2, F3, F7, step 2.1]

3.2 The identity $c(u_h^n;u_h^n,\theta^n)-c(u_n;u_n,\theta^n)=-c(u_h^n;\eta(t_n),\theta^n)-c(\eta(t_n);u_n,\theta^n)-c(\theta^n;u_n,\theta^n)$ follows by bilinearity in the first two slots and skew cancellation $c(u_h^n;\theta^n,\theta^n)=0$ from [F4]. Apply [F4], Poincare and Young after multiplication by $\tau_n$. Each of these three terms is bounded by $\nu\tau_n\|\theta^n\|_V^2/64$ plus respectively $$C_{D,\nu}\tau_n M_\infty\|u_h^n\|_Vh^2M_\nu^2,\qquad C_{D,\nu}\tau_n\|u_n\|_V^2h^2M_\nu^2,\qquad C_D\nu^{-3}\tau_nM_u^4\|\theta^n\|_2^2.$$ For the time-averaging remainder, [F4] and $\|u(t)-u_n\|_V\le\tau_nM$ give $\tau_n|c(u_n;u_n,\theta^n)-\bar c_n(\theta^n)|\le C_D\tau_n^2M^2\|\theta^n\|_V\le\nu\tau_n\|\theta^n\|_V^2/64+C_{D,\nu}\tau_n^3M^4$. [F4, F5, F7, step 1.1, step 2.1]

4.1 The Hilbert identity $2(x-y,x)=\|x\|^2-\|y\|^2+\|x-y\|^2$ applied to the time term in step 2.1 converts the tested equation to an energy recurrence. The viscous Young fractions in steps 3.1–3.2 sum to $3/16$ of $\nu\tau_n\|\theta^n\|_V^2$ before doubling, so at least $5/8$ remains and in particular the displayed half remains. Doubling also changes the time residual in step 3.1 into a coefficient at most $\tau_n/4$ of $E_n$; the convection coefficient is at most $C_D\nu^{-3}\tau_nM_u^4$. Thus, enlarging $C_D$ if necessary, $$E_n-E_{n-1}+\frac{\nu}{2}\tau_n\|\theta^n\|_V^2\le\tau_n\Lambda E_n+C_{D,\nu}\tau_n\{h^2M_\nu^2(1+M_\infty\|u_h^n\|_V+M_u^2)+\tau_n^2M^4\},\qquad E_n:=\|\theta^n\|_2^2,$$ with $\Lambda=1+C_D\nu^{-3}M_u^4$. The residual coefficient satisfies $C_{D,\nu}\le C_{D,\mathrm{shape}}(1+\nu+\nu^{-3})$ by [F8]. [F4, F5, F8, step 2.1, step 3.1, step 3.2, algebra]

5.1 Since $\tau_n\Lambda\le1/2$, rearrange step 4.1 and use $(1-x)^{-1}\le e^{2x}$ for $0\le x\le1/2$. Iterating gives $$\max_n E_n\le e^{2T\Lambda}\left(E_0+C_{D,\nu}\sum_n\tau_n\{h^2M_\nu^2(1+M_\infty\|u_h^n\|_V+M_u^2)+\tau_n^2M^4\}\right).$$ By Cauchy–Schwarz and [F5], $\sum_n\tau_n\|u_h^n\|_V\le\sqrt T M_E$ and $\sum_n\tau_n^3\le T\tau_{\max}^2$. Summing step 4.1 and dropping the nonnegative final $E_N$ also gives $$\frac{\nu}{2}\sum_n\tau_n\|\theta^n\|_V^2\le E_0+T\Lambda\max_nE_n+C_{D,\nu}\sum_n\tau_n\{h^2M_\nu^2(1+M_\infty\|u_h^n\|_V+M_u^2)+\tau_n^2M^4\}.$$ Since $M_u\le M$, these bounds and $E_0\le Ch^2M_\nu^2$ imply $\max_n\|\theta^n\|_2+\nu^{1/2}(\sum_n\tau_n\|\theta^n\|_V^2)^{1/2}\le C_{D,\mathrm{shape}}(1+\nu)^2(1+\nu^{-4})(1+T)^2(1+M_\infty+M_E+M)^4e^{2T\Lambda}(hM+\tau_{\max}M^2)$. Here $(1+\nu)^2(1+\nu^{-4})$ dominates $1+\nu^{-1}$ from $M_\nu$ and the residual inverse powers through $\nu^{-3}$ from [F8]; the extra $\sqrt{\Lambda}$ in the energy norm combines with those factors to give no power worse than $\nu^{-4}$. [F5, F7, F8, step 1.1, step 4.1, algebra]

6.1 Finally $u_n-u_h^n=\eta(t_n)+\theta^n$. The projection estimate [F2] bounds $\max_n\|\eta(t_n)\|_2$ by $ChM_\nu$ and $\sum_n\tau_n\|\eta(t_n)\|_V^2$ by $CT h^2M_\nu^2$. Combine with step 5.1; the explicit viscosity factor in $C_*$ absorbs $M_\nu/M=1+\nu^{-1}$. This proves the velocity estimate. Its $\nu$ dependence is explicit and contains an exponential in $\nu^{-3}M_u^4T$; it makes no Reynolds-uniform claim. [F2, step 5.1, algebra] ∎

## Remarks

The positive velocity estimate above retains the original mesh, data, mass initialization, arbitrary-step and any-root scope. The originally paired unrestricted instantaneous $L^{4/3}_tL^2_x$ pressure-error rate is false: the contextual [[cex-na-graded-mini-mass-initialization-pressure-rate]] constructs an exact-scope graded-mesh counterexample with smooth data and genuine backward Euler roots. That counterexample is not a logical premise of the velocity proof. Pressure-primitive estimates remain compatible with it.
