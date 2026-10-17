---
id: thm-emg-weak-slow-test-lorentz-limit
kind: theorem
title: Controlled weak/slow charged test trajectory comparison
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
proof_strategy: direct
deps:
  - def-emg-matter-formal-systems
  - lem-rpm-external-charge-local-ivp
  - thm-picard-lindelof-local-existence-and-uniqueness
  - def-gr-timelike-worldline-and-proper-time
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - thm-algebra-of-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-ftc-first-part
  - thm-derivative-of-exponential
  - cor-mean-value-theorem
  - lem-of-abs-value
  - def-interval
dependency_roles:
  def-emg-matter-formal-systems: mathematical-premise
  lem-rpm-external-charge-local-ivp: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  lem-of-abs-value: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H. S. Reall, General Relativity, Cambridge Part III lecture notes, 12 October 2022 revision, §6.2"
      url: https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf
      locator: "Equations (6.9)–(6.10), PDF p. 63, give the curved-background Lorentz-force equation, and equations (6.12)–(6.14), PDF pp. 63–64, derive null geodesic rays for geometric optics. Reall uses Gaussian units; the theorem states its SI component convention locally and proves its weak/slow estimate independently."
    - title: "Eric Poisson, Adam Pound and Ian Vega, The Motion of Point Particles in Curved Spacetime, author manuscript arXiv:1102.0529v3 (2011), §18.1"
      url: https://arxiv.org/pdf/1102.0529v3
      locator: "Equations (18.3)–(18.10), printed pp. 96–97 (PDF pp. 96–98), state the proper-time particle action, the covariant Lorentz equation and the curved potential equation. The authors warn that the equation is only formal for a point charge's own singular field; this theorem uses only the separately prescribed smooth external-field ODE."
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), §1.4.1, equation (1.103), PDF p. 35 (printed p. 28), and §4.1, equations (4.8)–(4.21), PDF pp. 112–114"
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: "The special-relativistic Lorentz force and the weak/static/slow geodesic limit. Its Gaussian units and conventions are not substituted for the local SI derivation."
verification:
  precheck: pass
---

## Statement

Use the mathematical Lorentzian and SI conventions of [[def-emg-matter-formal-systems]]. Fix a length scale $L>0$, a speed $c>0$, a charge parameter $q\in\mathbb R$ with units $\mathrm C$, and a mass parameter $m>0$ with units $\mathrm{kg}$; set $\alpha:=q/m\ne0$, with units $\mathrm{C\,kg^{-1}}$. Choose $0<\epsilon\le\epsilon_*\le1$. Let $\Omega\subseteq\mathbb R^3$ be open and let $\mathcal K\Subset\Omega$ be a compact convex set. Use the Cartesian coordinate domain $\mathbb R_{x^0}\times L\Omega$ with standard orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, and use $x^0=ct$, $x^i=LX^i$ with dimensionless $X\in\Omega$. Assume a smooth stationary (independent of $x^0$) Lorentzian metric $g^{(\epsilon)}$ of signature $(-,+,+,+)$ on an open neighborhood of $\mathbb R_{x^0}\times L\mathcal K$ in this domain, with $\partial_0$ chosen future timelike and $t$ increasing along the considered curves, whose components have the form

$$ g_{00}^{(\epsilon)}(X)=-(1+2\epsilon\phi(X))+r_{00}^{(\epsilon)}(X),\qquad g_{ij}^{(\epsilon)}(X)=(1-2\epsilon\phi(X))\delta_{ij}+r_{ij}^{(\epsilon)}(X),\qquad g_{0i}^{(\epsilon)}(X)=r_{0i}^{(\epsilon)}(X). $$

Here $\phi$ is dimensionless and smooth. A spatial multi-index is $\beta=(\beta_1,\beta_2,\beta_3)\in\mathbb N_0^3$, with $|\beta|=\beta_1+\beta_2+\beta_3$ and $\partial_X^\beta:=\partial_{X^1}^{\beta_1}\partial_{X^2}^{\beta_2}\partial_{X^3}^{\beta_3}$. For each such $\beta$ with $|\beta|\le2$, assume the uniform bounds

$$ |\partial_X^\beta r_{00}^{(\epsilon)}|+ \max_{i,j}|\partial_X^\beta r_{ij}^{(\epsilon)}| \le C_g\epsilon^2,\qquad \max_i|\partial_X^\beta r_{0i}^{(\epsilon)}|\le C_g\epsilon^{3/2} $$

on $\mathcal K$, with a fixed finite nonnegative $C_g$. Let $\mathbf e,\mathbf b:\Omega\to\mathbb R^3$ be smooth dimensionless fields whose values and first derivatives are bounded on $\mathcal K$. Since $\mathcal K$ is compact, the fixed smooth function $\phi$ and its derivatives used below are also bounded there. Prescribe a smooth stationary (independent of $x^0$) real two-form $F^{(\epsilon)}$ by its Cartesian components

$$ F_{0i}^{(\epsilon)}=-E_i^{(\epsilon)}/c,\qquad F_{ij}^{(\epsilon)}=\epsilon_{ijk}B_k^{(\epsilon)},\qquad \alpha\mathbf E^{(\epsilon)}(X)=\frac{\epsilon c^2}{L}\mathbf e(X),\qquad \alpha\mathbf B^{(\epsilon)}(X)=\frac{\sqrt\epsilon\,c}{L}\mathbf b(X). $$

No Maxwell or Einstein equation for this prescribed background field or metric is assumed. Define the dimensionless potential $\phi$ comparison system on $S\in[0,S_*]$ by

$$ \frac{d\mathbf X_N}{dS}=\mathbf W_N,\qquad \frac{d\mathbf W_N}{dS}=-\nabla_X\phi(\mathbf X_N)+\mathbf e(\mathbf X_N)+\mathbf W_N\times\mathbf b(\mathbf X_N), $$

where $(\mathbf u\times\mathbf v)_i:=\sum_{j,k}\epsilon_{ijk}u_jv_k$. Let $f(\mathbf X,\mathbf W)$ denote the six-component right-hand side of this system. Assume that on a compact convex state set $\mathcal Q\subseteq\mathcal K\times\mathbb R^3$, containing both trajectories, its derivative satisfies $\|Df\|_{1\to1}\le L_f$ for a finite nonnegative $L_f$. Here $\|(\mathbf X,\mathbf W)\|_1$ is the sum of the absolute values of its six real components, and $\|Df\|_{1\to1}$ is the operator norm induced by this $\ell^1$ norm.

For each $\epsilon$, let $z_\epsilon$ be a $C^2$ future timelike curve, parameterized by proper time $\tau$ as in [[def-gr-timelike-worldline-and-proper-time]], that solves the prescribed external Lorentz equation

$$ \nabla_U U=\alpha F^{(\epsilon)\sharp}(U),\qquad g^{(\epsilon)}(U,U)=-c^2,\qquad U=\frac{dz_\epsilon}{d\tau}. $$

Write its coordinate velocity as $\mathbf w=d\mathbf x/dt$ and assume $|\mathbf w|\le C_v\sqrt\epsilon\,c$ on $[0,S_*]$ for a fixed finite $C_v$. Suppose the relativistic scaled trajectory $(\mathbf X_\epsilon,\mathbf W_\epsilon)$ and the comparison trajectory $(\mathbf X_N,\mathbf W_N)$ exist throughout $[0,S_*]$, remain in $\mathcal Q$, and have the same initial data, where

$$ \mathbf X:=\mathbf x/L,\qquad \mathbf W:=\mathbf w/(\sqrt\epsilon\,c),\qquad S:=\sqrt\epsilon\,ct/L. $$

Then, after choosing $\epsilon_*>0$ sufficiently small in terms of the stated uniform constants, the exact relativistic trajectory satisfies

$$ \frac{d\mathbf X_\epsilon}{dS}=\mathbf W_\epsilon,\qquad \frac{d\mathbf W_\epsilon}{dS} =-\nabla_X\phi(\mathbf X_\epsilon)+\mathbf e(\mathbf X_\epsilon) +\mathbf W_\epsilon\times\mathbf b(\mathbf X_\epsilon)+\mathbf r_\epsilon(S), \qquad \|\mathbf r_\epsilon(S)\|_1\le C_r\epsilon, $$

where $C_r$ depends only on the displayed uniform bounds and the fixed coefficient bounds on $\mathcal K$, and is independent of $\epsilon$. Consequently,

$$ \sup_{0\le S\le S_*}\left(\|\mathbf X_\epsilon(S)-\mathbf X_N(S)\|_1+ \|\mathbf W_\epsilon(S)-\mathbf W_N(S)\|_1\right) \le C_r\epsilon S_*e^{L_fS_*}. $$

The estimate is conditional on existence and common compact containment through the specified finite scaled interval. It does not construct such a long-time family, solve Maxwell's equations for the prescribed fields, or produce a coupled Einstein–Maxwell family. In particular the $\sqrt\epsilon$ magnetic scaling can fail a coupled Einstein stress hierarchy unless additional matter scales are supplied.

## Facts & Assumptions

**Given:** The smooth Lorentzian SI conventions, the metric and field bounds in the Statement, $\alpha\ne0$, $0<\epsilon\le\epsilon_*$, a proper-time Lorentz-force curve and a comparison curve that both exist on $[0,S_*]$, common compact convex containment, matched initial data, and the finite derivative bound $L_f$.

[F1] [[def-emg-matter-formal-systems]] fixes signature $(-,+,+,+)$, the Levi–Civita connection convention, length coordinates $x^0=ct$, and the SI component rule $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$.

[F2] [[lem-rpm-external-charge-local-ivp]] states that for a smooth time-oriented Lorentzian four-manifold and a prescribed $C^1$ two-form $F$, the equation $\nabla_UU=(q/m)F^\sharp(U)$ with future timelike proper-time initial data has a unique local $C^2$ solution; it asserts no global existence.

[F3] [[thm-picard-lindelof-local-existence-and-uniqueness]] gives a unique local solution for a continuous state-vector field locally Lipschitz in its state variable. It supplies only local existence; existence of the comparison curve through $S_*$ is an explicit hypothesis here.

[F4] [[def-gr-timelike-worldline-and-proper-time]] defines a $C^2$ future timelike curve on an interval and its proper-time four-velocity with $g(U,U)=-c^2$.

[F5] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] gives the component formula for the Levi–Civita connection and its metric compatibility. [[thm-algebra-of-derivatives]] and [[thm-chain-rule-for-total-derivatives]] supply the coordinate product and chain rules used in the Christoffel expansion.

[F6] [[thm-ftc-first-part]] and [[thm-derivative-of-exponential]] justify the scalar integral differentiation and exponential comparison in the finite-time estimate. [[cor-mean-value-theorem]] turns a nonpositive derivative into monotonicity on the interval.

[F7] [[lem-of-abs-value]] gives $-|x|\le x\le|x|$ and $|x|\ge0$. Adding these bounds for $x$ and $y$ gives $-(|x|+|y|)\le x+y\le|x|+|y|$, hence $|x+y|\le|x|+|y|$ by the definition of absolute value. Finite iteration gives the triangle inequality used in the componentwise $\ell^1$ error norm.

[A1] The metric expansion, prescribed $E/B$ scaling, speed bound, state-set derivative bound, and existence/containment hypotheses in the Statement are assumptions. They do not follow from a physical Einstein–Maxwell equation in this theorem.

## Proof


1.1 The external ODE supplier [F2] applies at each fixed $\epsilon$ because $g^{(\epsilon)}$ is smooth Lorentzian and $F^{(\epsilon)}$ is a prescribed smooth two-form; it gives local uniqueness from future timelike proper-time data. The comparison vector field is smooth on an open set, so its derivative is bounded on a sufficiently small closed coordinate box about each initial state; the one-variable mean-value theorem [F6] along segments makes it locally Lipschitz, and [F3] gives local existence and uniqueness. The existence and common containment through $S_*$ are retained as [A1], rather than inferred from either local theorem. [given, F2, F3, F6, A1, algebra]

1.2 Write the spatial metric block as $H=(g_{ij})$, the off-diagonal row as $b=(g_{0i})$, and $a=g_{00}$. The stated bounds give $H=dI+R$, where $d=1-2\epsilon\phi$ and $R=O(\epsilon^2)$, while $b=O(\epsilon^{3/2})$ and $a=-1-2\epsilon\phi+O(\epsilon^2)$ uniformly. For sufficiently small $\epsilon$, $d$ stays bounded away from zero. The determinant is polynomial in the entries, so $\det H=d^3+O(\epsilon^2)$ is bounded away from zero; its adjugate is bounded, hence $H^{-1}$ is bounded. The identity $H^{-1}-d^{-1}I=-d^{-1}H^{-1}R$ gives $H^{-1}=d^{-1}I+O(\epsilon^2)$, and, with $u:=2\epsilon\phi$, $(1-u)^{-1}=1+u+u^2/(1-u)$ gives $d^{-1}=1+2\epsilon\phi+O(\epsilon^2)$. Its Schur complement $s=a-bH^{-1}b^T=-1-2\epsilon\phi+O(\epsilon^2)$ is bounded away from zero. Direct multiplication verifies the block-inverse entries $g^{00}=s^{-1}$, $g^{0i}=-s^{-1}(bH^{-1})_i$, and $g^{ij}=(H^{-1})_{ij}+(H^{-1}b^T)_i s^{-1}(bH^{-1})_j$: multiplying these entries by the blocks $a,b,H$ gives the identity matrix, using $s=a-bH^{-1}b^T$. $ g^{00}=-1+2\epsilon\phi+O(\epsilon^2),\qquad g^{0i}=O(\epsilon^{3/2}),\qquad g^{ij}=(1+2\epsilon\phi)\delta_{ij}+O(\epsilon^2). $ All constants in these estimates depend only on the supplied bounds, not on $\epsilon$. [given, F1, algebra]

1.3 Put $K^\mu=dx^\mu/dt=(c,w^i)$ and $\lambda=d\tau/dt>0$. Proper time gives $\lambda^2=-g(K,K)/c^2=1+O(\epsilon)$, since $|w|/c=O(\sqrt\epsilon)$ and $g_{0i}=O(\epsilon^{3/2})$. Shrinking $\epsilon_*$ makes $1/2\le\lambda\le3/2$, and $(\lambda-1)=(\lambda^2-1)/(\lambda+1)$ gives $\lambda=1+O(\epsilon)$. The exact covariant equation with $U=K/\lambda$ yields $ \frac{dw^i}{dt} =-\Gamma^i{}_{\mu\nu}K^\mu K^\nu +\frac{w^i}{c}\Gamma^0{}_{\mu\nu}K^\mu K^\nu +\alpha\lambda\left(F^i{}_\nu K^\nu-\frac{w^i}{c}F^0{}_\nu K^\nu\right). $ Indeed, subtracting $w^i/c$ times the time component of the proper-time equation from its $i$th component cancels the derivative of $\lambda$; multiplying the result by $\lambda^2$ gives the display. [A1, F1, F4, F5, algebra]

2.1 In the Christoffel formula of [F5], time derivatives vanish by stationarity and each spatial derivative contributes $L^{-1}\partial_X$. Substitution of the metric and inverse estimates of step 1.2, together with the first-derivative remainder bounds, gives $ \Gamma^i{}_{00}=\frac{\epsilon}{L}\partial_{X^i}\phi+O(\epsilon^2/L),\quad \Gamma^i{}_{0j}=O(\epsilon^{3/2}/L),\quad \Gamma^i{}_{jk}=O(\epsilon/L), $ $ \Gamma^0{}_{00}=O(\epsilon^{5/2}/L),\quad \Gamma^0{}_{0j}=O(\epsilon/L),\quad \Gamma^0{}_{jk}=O(\epsilon^{3/2}/L). $ For example, $\Gamma^i{}_{00}=-\tfrac12g^{ij}\partial_jg_{00}$, so its leading term is $+\epsilon L^{-1}\partial_{X^i}\phi$; every other displayed order follows by multiplying the corresponding inverse-metric order by the first derivatives of $g_{00}$, $g_{0i}$ or $g_{ij}$. [F5, step 1.2, algebra]

2.2 Raising the first index of $F$ with step 1.2 and using $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$ gives $ \alpha F^i{}_\nu K^\nu=\alpha(E+w\times B)^i+O(\epsilon^2c^2/L),\qquad \alpha F^0{}_\nu K^\nu=O(\epsilon^{3/2}c^2/L). $ For the first equality, the diagonal inverse-metric corrections are $O(\epsilon)$ times the leading electric and magnetic accelerations, each $O(\epsilon c^2/L)$; the off-diagonal term $g^{i0}$ is $O(\epsilon^{3/2})$ and multiplies $\alpha F_{0j}w^j=O(\epsilon^{3/2}c^2/L)$. In the second equality the leading time contraction is $\alpha E\cdot w/c=O(\epsilon^{3/2}c^2/L)$, and the inverse-metric off-diagonal terms are no larger. Thus $(w^i/c)\alpha F^0{}_\nu K^\nu=O(\epsilon^2c^2/L)$. Multiplication by $\lambda=1+O(\epsilon)$ preserves the leading force and changes it by at most $O(\epsilon^2c^2/L)$. [A1, F1, step 1.2, step 1.3, algebra]

3.1 With $K^i=O(\sqrt\epsilon\,c)$, the first three Christoffel orders in step 2.1 give $ -\Gamma^i{}_{\mu\nu}K^\mu K^\nu +\frac{w^i}{c}\Gamma^0{}_{\mu\nu}K^\mu K^\nu =-\frac{\epsilon c^2}{L}\partial_{X^i}\phi+O(\epsilon^2c^2/L). $ The leading term is $-\Gamma^i{}_{00}c^2$. The $\Gamma^i{}_{0j}$ and $\Gamma^i{}_{jk}$ terms are respectively $O(\epsilon^2c^2/L)$ and $O(\epsilon^2c^2/L)$; the displayed $\Gamma^0$ terms, after multiplication by $w^i/c$, are also at most $O(\epsilon^2c^2/L)$. Since $\Phi_\epsilon:=\epsilon c^2\phi$, the leading term is $-\nabla_x\Phi_\epsilon$. [A1, step 2.1, algebra]

4.1 Combining steps 1.3, 3.1, and 2.2 in the exact coordinate equation gives $ \frac{d\mathbf w}{dt}=-\nabla_x\Phi_\epsilon+ \alpha(\mathbf E+\mathbf w\times\mathbf B)+\mathbf R_\epsilon, \qquad \|\mathbf R_\epsilon\|_1\le C_r\epsilon^2c^2/L $ for a finite $C_r$ depending only on the stated uniform bounds. The definitions of $X,W,S$ give $dX/dS=W$ and $dW/dS=L(\epsilon c^2)^{-1}dw/dt$. Since $\nabla_x=L^{-1}\nabla_X$, $\alpha E=\epsilon c^2L^{-1}e$, $\alpha B=\sqrt\epsilon\,cL^{-1}b$, and $w=\sqrt\epsilon\,cW$, the equation becomes the claimed comparison system with residual $r_\epsilon$ bounded by $C_r\epsilon$. [A1, step 1.3, step 3.1, step 2.2, algebra]

5.1 Let $Z_\epsilon=(X_\epsilon,W_\epsilon)$, $Z_N=(X_N,W_N)$, and $D(S)=\|Z_\epsilon(S)-Z_N(S)\|_1$. Their integral equations, matched initial data, the residual bound from step 4.1, and the derivative bound for $f$ on the convex set $\mathcal Q$ give $ D(S)\le C_r\epsilon S+L_f\int_0^S D(s)\,ds \le C_r\epsilon S_*+L_f\int_0^S D(s)\,ds. $ The Lipschitz estimate follows by applying the chain rule to $u\mapsto f(Z_N+u(Z_\epsilon-Z_N))$ and integrating its derivative on $[0,1]$; the componentwise norm inequality follows from the scalar absolute-value triangle inequality [F7]. [A1, F6, F7, step 4.1, algebra]

6.1 Define $H(S)=C_r\epsilon S_*+L_f\int_0^S D(s)\,ds$. Then $D\le H$, $H(0)=C_r\epsilon S_*$ and $H'=L_fD\le L_fH$. By [F6], $(e^{-L_fS}H(S))'=e^{-L_fS}(H'-L_fH)\le0$; the mean value theorem in [F6] therefore makes this function nonincreasing. Hence $D(S)\le H(S)\le C_r\epsilon S_*e^{L_fS}$ for $0\le S\le S_*$, proving the stated uniform estimate. [F6, step 5.1, algebra] ∎
