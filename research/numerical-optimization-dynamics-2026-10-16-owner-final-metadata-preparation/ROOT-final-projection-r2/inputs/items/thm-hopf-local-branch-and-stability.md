---
id: thm-hopf-local-branch-and-stability
kind: theorem
title: A simple nondegenerate Hopf point creates a local periodic branch
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-hopf-normal-form-data
  - lem-local-center-manifold-for-a-simple-hopf-point
  - lem-hopf-smooth-eigenpair-branch
  - lem-hopf-first-lyapunov-coefficient-from-multilinear-data
  - lem-characteristic-roots-stay-in-separated-neighborhoods
  - def-local-periodic-orbit-poincare-and-floquet-data
  - thm-poincare-map-stability-implies-orbital-stability
  - lem-c1-euclidean-maximal-flow-with-c2-upgrade
  - thm-parametrized-implicit-function-theorem-with-higher-regularity
  - thm-intermediate-value
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Yuri A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Springer
      url: https://wwwf.imperial.ac.uk/~dturaev/kuznetsov.pdf
      locator: Chapter 3, §§3.4–3.5, printed pp. 86–101; Chapter 5, §5.2, printed pp. 157–159
    - title: J. E. Marsden and M. McCracken, The Hopf Bifurcation and Its Applications, Springer-Verlag, 1976
      url: https://authors.library.caltech.edu/records/satwa-8xa89/files/Hopf.pdf
      locator: Sections 2, 3B–3C, printed pp. 27–49 and 91–104
    - title: Yuri A. Kuznetsov, Andronov-Hopf Bifurcation, Scholarpedia 1(10):1858 (2006)
      url: http://www.scholarpedia.org/article/Andronov-Hopf
      locator: Multidimensional statement and stability orientation; not a proof supplier
verification:
  precheck: pass
---

## Statement

Let $f(x,\lambda)$ be a real $C^5$ vector field near an equilibrium $(x_0,0)$ in $\mathbb R^d\times\mathbb R$. Put $A_0=D_xf(x_0,0)$. Assume:

- $A_0$ has a simple pair $\pm i\omega_0$, $\omega_0>0$;
- every other eigenvalue $\nu_j$ of $A_0$ has $\operatorname{Re}\nu_j\ne0$;
- by the parameterized implicit-function theorem, $\xi(\lambda)$ is the unique local equilibrium branch through $x_0$ and $A_\lambda:=D_xf(\xi(\lambda),\lambda)$ is a $C^4$ matrix path; for its $C^4$ simple critical eigenvalue branch $\zeta(\lambda)=\beta(\lambda)+i\omega(\lambda)$, $\beta(0)=0$ and $\beta'(0)\ne0$;
- the first Lyapunov coefficient $\ell_1$ in [[def-hopf-normal-form-data]] is nonzero.

There is a local branch of nonconstant periodic orbits, unique up to phase on a fixed local [[def-local-periodic-orbit-poincare-and-floquet-data|Poincare section]]. Writing $r>0$ for amplitude in the normal-form center coordinate and $\beta$ for the real part of the critical eigenvalue, its period and parameter satisfy

$$r^2=-\frac{\beta}{\omega_0\ell_1}+O(|\beta|^{3/2}),\qquad T=\frac{2\pi}{\omega_0}+O(|\beta|).$$

Thus the branch exists precisely on the side $\beta\ell_1<0$; there are no sufficiently small nonconstant periodic orbits on the opposite side. Its phase Floquet multiplier is $1$, its radial multiplier is

$$\mu_{\mathrm{rad}}=1-\frac{4\pi}{\omega_0}\beta+O(|\beta|^{3/2}),$$

and the other Floquet multipliers converge, with algebraic multiplicity, to $e^{2\pi\nu_j/\omega_0}$. If any $\operatorname{Re}\nu_j>0$, the periodic orbit is unstable. If all $\operatorname{Re}\nu_j<0$, the orbit is orbitally asymptotically stable for $\beta>0$ and unstable for $\beta<0$. These are local conclusions only; no global branch completeness or global dynamics is asserted.

## Facts & Assumptions

**Given:** $f$, $(x_0,0)$, $A_0$, $\omega_0$, the critical eigenvalue branch, $\beta'(0)$, and $\ell_1$ as in the Statement.

[F1] [[thm-parametrized-implicit-function-theorem-with-higher-regularity]]: since $D_xf(x_0,0)=A_0$ is invertible, the equilibrium equation has a unique local $C^5$ branch $x=\xi(\lambda)$; applying the same theorem with $k=4$ to the $C^4$ critical eigenvalue path gives its local parameter inverse.

[F2] [[lem-hopf-smooth-eigenpair-branch]]: the simple critical eigenvalue and normalized left and right eigenvectors have the regularity of the matrix path; here the path is $C^4$ because $f$ is $C^5$, with $\zeta(\lambda)=\beta(\lambda)+i\omega(\lambda)$ and $\beta'(0)=\operatorname{Re}(p^*A'(0)q)$.

[F3] [[lem-local-center-manifold-for-a-simple-hopf-point]]: after adjoining $\dot\lambda=0$, there is a $C^5$ invariant center graph with the stated invariance equation, and every sufficiently small periodic orbit in the neighborhood lies on it.

[F4] [[lem-hopf-first-lyapunov-coefficient-from-multilinear-data]]: on that graph, a near-identity coordinate change with at least $C^2$ parameter dependence gives
$$\dot z=(\beta+i\omega(\beta))z+\frac12G_{21}z|z|^2+R,\quad \operatorname{Re}(G_{21}/2)=\omega_0\ell_1,\quad R=O(|z|^4+|\beta||z|^3),\quad D_zR=O(|z|^3+|\beta||z|^2).$$

[F5] [[lem-characteristic-roots-stay-in-separated-neighborhoods]]: under a small matrix perturbation, characteristic roots remain in the same separated neighborhoods with the same algebraic multiplicities.

[F6] [[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]: a $C^1$ autonomous vector field has a jointly $C^1$ local flow, unique trajectories, and a continuous first state derivative satisfying its variational equation. For the $C^1$ nonautonomous radial equation on $r>0$, adjoining $\theta'=1$ and $\beta'=0$ gives the same joint $C^1$ dependence on radius and parameter; no fifth derivative of a flow is used.

[F7] [[def-local-periodic-orbit-poincare-and-floquet-data]]: the monodromy matrix gives the Floquet multipliers, and a local transverse section defines its return map.

[F8] [[thm-poincare-map-stability-implies-orbital-stability]]: a hyperbolic Poincare return map with all multipliers inside the unit circle gives an orbitally asymptotically stable periodic orbit; a multiplier outside gives orbital instability.

[F9] [[thm-intermediate-value]]: a continuous real function on a closed interval takes every value between its endpoint values.

## Proof

**Given:** The hypotheses and facts above.

1.1 Because $\pm i\omega_0$ and every other eigenvalue of $A_0$ are nonzero, $A_0$ is invertible. First set $y=x-x_0$ and $\widehat f(y,\lambda)=f(x_0+y,\lambda)$, so $\widehat f(0,0)=0$. The data in [[def-hopf-normal-form-data]] are those of this field: $A=A_0$, $B=D_x^2f(x_0,0)$, $C=D_x^3f(x_0,0)$, and $p,q$ are eigenvectors of this same $A_0$ with both declared normalizations. Apply [F1] to obtain the unique nearby equilibrium $\xi(\lambda)$ of the original field. In the parameter-dependent translated state $v=x-\xi(\lambda)$, the field is $f(v+\xi(\lambda),\lambda)$ and vanishes at $v=0$ for each fixed parameter; its critical spatial jets agree with the preceding data, since $\xi(0)=x_0$ and $\dot\lambda=0$. Apply [F2] to obtain $\zeta(\lambda)$ with $\beta'(0)\ne0$, and apply [F1] to $\operatorname{Re}\zeta(\lambda)-\widehat\beta=0$ in solved variable $\lambda$. This makes $\widehat\beta$ a valid local parameter, which we relabel $\beta$. [F1, F2, given, algebra]

1.2 By [F3], every sufficiently small periodic orbit is on the parameterized center graph. Restricting to a fixed parameter and using [F4], its reduced dynamics have $\dot r=r(\beta+\omega_0\ell_1r^2)+O(r^4+|\beta|r^3)$ and $\dot\theta=\omega_0+O(|\beta|+r^2)$, with the first-derivative bounds supplied by [F4]. In particular $\dot\theta>0$ after shrinking the neighborhood. [F3, F4, given, algebra]

2.1 Reparameterize by the strictly increasing angle from step 1.2 and write $dr/d\theta=\rho(r,\theta,\beta):=\dot r/\dot\theta$. The bounds in [F4] give uniformly in $\theta$ that $\rho=(r/\omega_0)(\beta+\omega_0\ell_1r^2)+O(\beta^2r+|\beta|r^3+r^4)$ and $\partial_r\rho=(\beta+3\omega_0\ell_1r^2)/\omega_0+O(\beta^2+|\beta|r^2+r^3)$. On $r>0$ the radial field is jointly $C^1$ in $(\theta,r,\beta)$ by the finite-regularity coordinate construction in [F4]. Applying [F6] to $(\theta,r,\beta)'=(1,\rho(\theta,r,\beta),0)$ gives the required common local solution and first variations, with finite composition over $[0,2\pi]$. For small $r_0>0$ and $|\beta|$, while $r\in[r_0/2,2r_0]$ the bound $|\rho/r|\le C(|\beta|+4r_0^2)$ makes the change in $\log r$ over $[0,2\pi]$ smaller than $\log2$. Thus no first exit from that interval occurs; compact continuation in [F6] supplies the full angular interval and positivity, and $\partial_\theta\log r=\rho/r=O(|\beta|+r^2)$; integrating over the bounded interval $[0,2\pi]$ gives $r(\theta;r_0)=r_0+O(|\beta|r_0+r_0^3)$. Substituting this bound into $P_\beta(r_0)-r_0=\int_0^{2\pi}\rho(r(\theta;r_0),\theta,\beta)\,d\theta$ gives $P_\beta(r_0)-r_0=\frac{2\pi}{\omega_0}r_0(\beta+\omega_0\ell_1r_0^2)+O(\beta^2r_0+|\beta|r_0^3+r_0^4)$. The variational derivative $Q=\partial r/\partial r_0$ solves $\partial_\theta Q=(\partial_r\rho)Q$, $Q(0)=1$, so $Q(2\pi)=\exp(\int_0^{2\pi}\partial_r\rho\,d\theta)$. The same bound on $r(\theta;r_0)$ in the derivative expansion yields $P_\beta'(r_0)=1+\frac{2\pi}{\omega_0}(\beta+3\omega_0\ell_1r_0^2)+O(\beta^2+|\beta|r_0^2+r_0^3)$. The factor $r_0$ is the persistent equilibrium. [step 1.2, F4, F6, algebra]

3.1 For $r>0$, divide step 2.1 by $(2\pi/\omega_0)r$ and call the result $H(r,\beta)$. Then $H(r,\beta)=\beta+\omega_0\ell_1r^2+O(\beta^2+|\beta|r^2+r^3)$. Differentiating this quotient using both expansions in step 2.1 gives $\partial_rH(r,\beta)=2\omega_0\ell_1r+O(\beta^2/r+|\beta|r+r^2)$. If $\beta\ell_1>0$, then $|\beta+\omega_0\ell_1r^2|=|\beta|+\omega_0|\ell_1|r^2$; the error is bounded by $C(\beta^2+|\beta|r^2+r^3)$, which is at most an arbitrarily small multiple of $|\beta|+r^2$ after shrinking $r,|\beta|$. Thus there is no positive root. If $\beta=0$, then $H(r,0)=\omega_0\ell_1r^2+O(r^3)$, whose leading term dominates for all sufficiently small $r>0$, so there is no nonconstant periodic orbit at the threshold either. If $\beta\ell_1<0$, choose $0<c_-<1/\sqrt{\omega_0|\ell_1|}<c_+$. At $r=c_-\sqrt{|\beta|}$ and $r=c_+\sqrt{|\beta|}$ the leading terms have opposite signs and the error is $O(|\beta|^{3/2})$, so [F9] gives a root between them. Every root lies between fixed such multiples of $\sqrt{|\beta|}$: below a sufficiently small multiple, $|\beta|$ dominates the error; above a sufficiently large multiple, $\omega_0|\ell_1|r^2$ dominates both $|\beta|$ and the error. On this annulus, $\beta^2/r+|\beta|r+r^2=o(r)$ uniformly as $\beta\to0$, so $\partial_rH$ has the sign of $\ell_1$ and the root is unique. Since this derivative is nonzero, [F1] with $k=1$ makes the radius a $C^1$ function of $\beta$ on the punctured existence side, using the joint $C^1$ return map from [F6]. [F1, F9, step 2.1, given, algebra]

4.1 Every sufficiently small periodic trajectory lies on the center graph by [F3], and [F4] gives $\dot\theta>0$, so it meets the ray $\theta=0$ and returns after some positive integer number of turns. Reparameterize the radial equation by $\theta$; $dr/d\theta=\dot r/\dot\theta$ is a $C^1$ scalar nonautonomous ODE on $r>0$, so two solutions cannot cross by uniqueness from the augmented $C^1$ flow [F6]. Therefore the one-turn radius map is strictly increasing. If a periodic trajectory met the section in a $k$-cycle with $P_\beta^k(r)=r$, strict increase forces $P_\beta(r)=r$; indeed $P_\beta(r)>r$ would imply $P_\beta^k(r)>r$, and $P_\beta(r)<r$ would imply $P_\beta^k(r)<r$. Thus the unique positive fixed point from step 3.1 describes the unique local periodic orbit up to phase, and none exists on the opposite side. [F3, F4, F6, step 3.1, given, algebra]

4.2 At the root, step 3.1 gives $r^2=-\beta/(\omega_0\ell_1)+O(|\beta|^{3/2})$. The angular speed in step 1.2 is $\omega_0+O(|\beta|+r^2)$, so the return period is $2\pi/\omega_0+O(|\beta|)$. Differentiating the return map at this fixed radius yields $P_\beta'(r)=1+\frac{2\pi}{\omega_0}(\beta+3\omega_0\ell_1r^2)+O(|\beta|^{3/2})=1-\frac{4\pi}{\omega_0}\beta+O(|\beta|^{3/2})$. Thus this nontrivial radial multiplier is inside the unit circle for $\beta>0$ and outside it for $\beta<0$, when $\beta$ is sufficiently small. [step 1.2, step 2.1, step 3.1, given, algebra]

5.1 The full monodromy matrix along the periodic orbit converges to $e^{(2\pi/\omega_0)A_0}$. Indeed its variational coefficient $D_xf(x(t),\lambda)$ converges uniformly to $A_0$; subtracting the two fundamental-matrix integral equations and iterating the resulting bound gives uniform convergence on the bounded period interval. The limiting matrix has the critical multiplier $1$ of algebraic multiplicity two, and all remaining multipliers $e^{2\pi\nu_j/\omega_0}$ have modulus different from one. By [F5], exactly two multipliers remain near $1$ and the others converge with multiplicity to the hyperbolic multipliers. One of the two is exactly $1$ because $\dot x_*(t)$ solves the variational equation and is periodic; the other is the radial multiplier of step 4.2. For a section $\Sigma$ transverse to $v=\dot x_*(0)$, differentiating $P(y)=\phi_{\tau(y)}(y)$ gives $DP=\pi M|_{T\Sigma}$, where $M$ is the monodromy matrix and $\pi$ is projection along $v$ onto $T\Sigma$. Thus $DP$ represents the induced map on the quotient by $\operatorname{span}\{v\}$, so its eigenvalues are exactly the non-phase Floquet multipliers. [F3, F5, F6, step 4.2, given, algebra]

6.1 On the branch $\beta\ne0$, step 4.2 makes the radial multiplier different from one, and the other multipliers are off the unit circle by step 5.1. The return-map derivative has exactly the non-phase multipliers: if $v=\dot x_*(0)$ and $\pi$ projects onto the section tangent along $v$, differentiating $P(y)=\phi_{\tau(y)}(y)$ gives $DP=\pi M|_{T\Sigma}$, which represents the map induced by $M$ on the quotient by $\operatorname{span}\{v\}$. Thus the return map is hyperbolic. If all $\operatorname{Re}\nu_j<0$ and $\beta>0$, every return multiplier is inside the unit circle, so [F8] gives orbital asymptotic stability. If $\beta<0$, the radial multiplier is outside; if any $\operatorname{Re}\nu_j>0$, a transverse multiplier is outside. In either case [F8] gives orbital instability. Steps 3.1–4.1 prove local existence, side, and uniqueness up to phase; the arguments use only the local center graph and return section, so assert no global completeness. [F7, F8, step 3.1, step 4.1, step 4.2, step 5.1, given] ∎

## Remarks

When $\beta$ increases through zero, $\ell_1<0$ gives the supercritical stable branch if the transverse spectrum is stable; $\ell_1>0$ gives the subcritical unstable branch. If the transverse spectrum contains an unstable eigenvalue, the branch exists with the same side but is unstable in the full system.
