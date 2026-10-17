---
id: ex-emgmath-ml-b08
kind: example
title: Constant magnetic slow-orbit error
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
proof_strategy: direct
deps:
  - thm-emg-weak-slow-test-lorentz-limit
  - lem-emg-source-and-test-scaling
  - def-emg-matter-formal-systems
  - lem-emg-lorentz-hodge-calculus
  - thm-sine-and-cosine-addition-formulas
  - thm-sine-and-cosine-derivatives
  - cor-trigonometric-parity-and-pythagorean-identity
  - cor-mean-value-theorem
  - thm-of-square-roots
  - lem-of-inverse-positive
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-ftc-second-part
  - thm-linearity-of-the-integral
  - thm-monotonicity-of-the-integral
  - thm-continuous-implies-integrable
dependency_roles:
  thm-emg-weak-slow-test-lorentz-limit: mathematical-premise
  lem-emg-source-and-test-scaling: mathematical-premise
  def-emg-matter-formal-systems: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-of-square-roots: mathematical-premise
  lem-of-inverse-positive: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H. S. Reall, General Relativity, Cambridge Part III lecture notes, 12 October 2022 revision, §6.2, equations (6.9)–(6.10)"
      url: https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf
      locator: "Curved-background Lorentz equation and its flat-space special case; the constant-field orbit and its finite-time comparison are computed directly here."
    - title: "Eric Poisson, Adam Pound and Ian Vega, The Motion of Point Particles in Curved Spacetime, author manuscript arXiv:1102.0529v3 (2011), §18.1, equations (18.3)–(18.10)"
      url: https://arxiv.org/pdf/1102.0529v3
      locator: "Covariant point-charge Lorentz equation in a prescribed background and the warning that the particle's own singular field makes the unregularized self-field equation only formal; this example uses no self-field."
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), §1.4.1, equation (1.103), PDF p. 35 (printed p. 28)"
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: "Special-relativistic Lorentz-force form and its slow-speed interpretation. Carroll's Gaussian normalization is not imported."
verification:
  precheck: pass
---

## Example

Let $M=\mathbb R^4$ with global length coordinates $(x^0,x^1,x^2,z)$, $x^0=ct$, Minkowski metric $\eta=\operatorname{diag}(-1,1,1,1)$, orientation $dx^0\wedge dx^1\wedge dx^2\wedge dz$, and future direction $\partial_0$. Use the SI convention of [[def-emg-matter-formal-systems]]. Write $\mathbf e_z:=(0,0,1)$ and use the Euclidean product $\mathbf u\cdot\mathbf v:=\sum_{j=1}^3u_jv_j$, norm $|\mathbf u|_2:=\sqrt{\mathbf u\cdot\mathbf u}$, and orthogonality convention $\mathbf u\perp\mathbf v$ iff $\mathbf u\cdot\mathbf v=0$. Let $\Omega=\mathbb R^3$ and $I=\mathbb R$, and write $\mathbf x=(x^1,x^2,z)$. Let $q\in\mathbb R$ be a charge parameter with units $\mathrm C$ and $m>0$ a mass parameter with units $\mathrm{kg}$; set $\alpha:=q/m\ne0$, with units $\mathrm{C\,kg^{-1}}$. Let dimensionless $b_0\in\mathbb R\setminus\{0\}$ and length $L>0$. For dimensionless $0<\epsilon\le1$, define smooth fields $\mathbf E,\mathbf B:\Omega\times I\to\mathbb R^3$ by

$$ \mathbf E(\mathbf x,t)=0,\qquad \alpha\mathbf B(\mathbf x,t)=\frac{\sqrt\epsilon\,c}{L}b_0\mathbf e_z,\qquad 0<\epsilon\le1. $$

Here $[\mathbf E]=\mathrm{V\,m^{-1}}$ and $[\mathbf B]=\mathrm T$; the corresponding smooth two-form on $\mathbb R^4$ is specified by $F_{0i}=-E_i/c$ and $F_{ij}=\epsilon_{ijk}B_k$.

Choose a dimensionless initial velocity $\mathbf W_0\perp\mathbf e_z$ with $\epsilon|\mathbf W_0|_2^2\le\tfrac12$, and put $\mathbf w_0=\sqrt\epsilon\,c\mathbf W_0$. Let the exact relativistic trajectory and the weak/slow comparison trajectory have the same initial position and velocity at $S=0$. On every finite interval $0\le S\le S_*$, where $S=\sqrt\epsilon\,ct/L$ and both trajectories are followed, their dimensionless velocities and positions satisfy

$$ |\mathbf W(S)-\mathbf W_N(S)|_2 \le |b_0|\epsilon|\mathbf W_0|_2^3S,\qquad |\mathbf X(S)-\mathbf X_N(S)|_2 \le \frac12|b_0|\epsilon|\mathbf W_0|_2^3S^2. $$

Here $\mathbf X=\mathbf x/L$, $\mathbf W=\mathbf w/(\sqrt\epsilon c)$, a prime denotes $d/dS$, and the comparison equation is $\mathbf X_N'=\mathbf W_N$, $\mathbf W_N'=b_0\mathbf W_N\times\mathbf e_z$. For $\vartheta\in\mathbb R$, define $R_z(\vartheta):=\begin{pmatrix}\cos\vartheta&-\sin\vartheta&0\\\sin\vartheta&\cos\vartheta&0\\0&0&1\end{pmatrix}$. The uniform magnetic field is a prescribed test background: these orbit calculations do not assert an exact coupled Einstein–Maxwell solution on unchanged Minkowski space.

## Facts & Assumptions

**Given:** Minkowski geometry, the stated SI field convention, $\alpha\ne0$, $b_0\ne0$, $0<\epsilon\le1$, transverse initial velocity with $\epsilon|\mathbf W_0|_2^2\le\tfrac12$, and matched initial position and velocity.

[F1] [[def-emg-matter-formal-systems]] and [[thm-emg-weak-slow-test-lorentz-limit]] give the field convention, the exact prescribed-background Lorentz equation, and the scaled Newton comparison equation.

[F2] [[lem-emg-source-and-test-scaling]] shows that a nonzero Maxwell field with positive observer energy does not satisfy the vacuum Einstein equation on unchanged Minkowski space.

[F3] [[thm-sine-and-cosine-addition-formulas]], [[thm-sine-and-cosine-derivatives]] and [[cor-trigonometric-parity-and-pythagorean-identity]] give the rotation addition, derivative and orthogonality identities.

[F4] [[thm-of-square-roots]] and [[lem-of-inverse-positive]] give the unique positive square root and reciprocal used to define the Lorentz factor.

[F5] [[cor-mean-value-theorem]] and [F3] give $|\sin u|\le|u|$: for $u\ne0$, the mean value theorem between $0$ and $u$ gives $\sin u=u\cos\xi$, and $|\cos\xi|\le1$ follows from $\sin^2\xi+\cos^2\xi=1$.

[F6] [[thm-cauchy-schwarz-and-the-euclidean-norm]] gives the Euclidean norm triangle and Cauchy–Schwarz inequality. [[thm-ftc-second-part]], [[thm-linearity-of-the-integral]], [[thm-monotonicity-of-the-integral]] and [[thm-continuous-implies-integrable]] apply to the continuous trajectory components.

[F7] [[lem-emg-lorentz-hodge-calculus]] gives the oriented Lorentzian Hodge-star formula; for the positively oriented Minkowski coframe used here it gives $\star(dx^1\wedge dx^2)=dx^0\wedge dz$.

[A1] The field is the prescribed spatially uniform magnetic test field in the Example. No self-field, source construction, radiation reaction, or Einstein equation is imposed.

## Verification


1.1 In Minkowski coordinates $U=(\gamma c,\gamma\mathbf w)$, where $\gamma=(1-|\mathbf w|_2^2/c^2)^{-1/2}>0$. Since $U^0=dx^0/d\tau=c\,dt/d\tau=\gamma c$, we have $d/d\tau=\gamma\,d/dt$. With $\mathbf E=0$, the time component of $\nabla_UU=\alpha F^\sharp(U)$ gives $\gamma c\,d\gamma/dt=0$, hence $d\gamma/dt=0$. The spatial component gives $\gamma\,d(\gamma\mathbf w)/dt=\alpha\gamma\,\mathbf w\times\mathbf B$; canceling $\gamma>0$ and then using constancy of $\gamma$ yields $d\mathbf w/dt=(\alpha/\gamma)\mathbf w\times\mathbf B$. The dot product with $\mathbf w$ is zero, so $|\mathbf w|_2$ and $\gamma$ stay constant. Initially, $ \gamma=\gamma_0=(1-\epsilon|\mathbf W_0|_2^2)^{-1/2},\qquad \gamma_0^{-1}=\sqrt{1-\epsilon|\mathbf W_0|_2^2}. $ The radicand is at least $1/2$, so the positive root is defined. [given, A1, F1, F4, algebra]

2.1 Rescaling time and velocity in the exact equation gives $\mathbf W'=(b_0/\gamma_0)\mathbf W\times\mathbf e_z$. Differentiating the planar rotation matrix with [F3] verifies the solution $ \mathbf W(S)=R_z(-b_0S/\gamma_0)\mathbf W_0. $ The comparison equation in the Statement similarly has the solution $\mathbf W_N(S)=R_z(-b_0S)\mathbf W_0$, with $\mathbf X'=\mathbf W$ and $\mathbf X_N'=\mathbf W_N$. These rotations preserve speed, and $\epsilon|\mathbf W_0|_2^2\le1/2$ keeps the exact speed strictly below $c$. Integrate $\mathbf w(t)=\sqrt\epsilon c\,\mathbf W(S(t))$ to define $\mathbf x(t)$ and set $\tau=t/\gamma_0$. The resulting curve is timelike for every finite $t$. Substitution gives $\nabla_UU^0=0=\alpha F^0{}_{\nu}U^\nu$ and $\nabla_UU^i=\gamma_0^2\,dw^i/dt=\alpha\gamma_0(\mathbf w\times\mathbf B)^i=\alpha F^i{}_{\nu}U^\nu$, so it is an exact worldline. The matrix $R_z(\theta)$ is orthogonal on the $xy$-plane by $\sin^2\theta+\cos^2\theta=1$, and the addition formulas in [F3] give $R_z(\theta_1)R_z(\theta_2)=R_z(\theta_1+\theta_2)$. [F1, F3, step 1.1, algebra]

3.1 Put $\Delta\theta=b_0S(1-\gamma_0^{-1})$. Orthogonality and the rotation addition law reduce the velocity difference to $|R_z(\Delta\theta)\mathbf W_0-\mathbf W_0|_2$. Expanding its two planar components and cancelling the cross terms gives $ |R_z(\Delta\theta)\mathbf W_0-\mathbf W_0|_2^2 =2|\mathbf W_0|_2^2(1-\cos\Delta\theta) =4|\mathbf W_0|_2^2\sin^2(\Delta\theta/2). $ By [F5], its square root is at most $|\mathbf W_0|_2|\Delta\theta|$. Also $ 1-\gamma_0^{-1} =\frac{\epsilon|\mathbf W_0|_2^2}{1+\sqrt{1-\epsilon|\mathbf W_0|_2^2}} \le\epsilon|\mathbf W_0|_2^2. $ This proves the stated velocity bound. [F3, F4, F5, step 2.1, algebra]

4.1 At $S=0$, the matched initial positions give $|\mathbf X(0)-\mathbf X_N(0)|_2=0$, which is the claimed bound. Now let $S>0$. The position difference is the integral of $\mathbf W-\mathbf W_N$. For any continuous vector function $v$ on $[0,S]$, Cauchy–Schwarz gives $|u\cdot v(s)|\le|u|_2|v(s)|_2$; taking $u$ to be the unit vector in the direction of $\int_0^S v$ shows $|\int_0^S v(s)\,ds|_2\le\int_0^S|v(s)|_2\,ds$ (the zero-integral case is immediate). Thus the velocity bound from step 3.1 gives $|\mathbf X(S)-\mathbf X_N(S)|_2\le\int_0^S|b_0|\epsilon|\mathbf W_0|_2^3s\,ds$. Since $S>0$, the function $s\mapsto s$ is continuous and integrable on the nondegenerate interval $[0,S]$, and $s^2/2$ is a primitive; [F6] therefore gives $\int_0^S s\,ds=S^2/2$. This proves the claimed position bound. The estimates hold on every specified finite interval; no uniform-in-time bound is asserted. [F5, F6, step 3.1, algebra]

5.1 Put $B_z:=\sqrt\epsilon c b_0/(\alpha L)$. By the SI convention of [F1], the prescribed two-form is $F=B_z\,dx^1\wedge dx^2$; [F7] gives $\star F=B_z\,dx^0\wedge dz$. Both forms have constant coefficients in Minkowski coordinates, so $dF=0$, $\nabla_aF^{ab}=\partial_aF^{ab}=0$, and $d(\star F)=0$. Also $B_z\ne0$ because $b_0\ne0$ and $\alpha\ne0$. Thus the fixed Minkowski metric, $\Lambda=0$, and $F_0=F$ satisfy the source-free hypotheses of [F2]; taking $\delta=1$ there gives positive observer energy and a nonzero residual. Hence the prescribed orbit background is not a fully coupled flat Einstein–Maxwell solution with unchanged Minkowski metric. The example establishes only the conditional trajectory calculation and its finite-time comparison. [A1, F1, F2, F7, step 1.1, algebra] ∎
