---
id: lem-gr-fx-schwarzschild-gaussian-beam-concentration
kind: lemma
title: Exact Schwarzschild waves concentrated in a photon-sphere annulus
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
physical_scope: "Exact real test-scalar waves on the fixed Schwarzschild exterior, concentrated in the entire specified radial annulus for any prescribed finite time; no gravitational perturbation or coupled-matter assertion."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - def-countable-choice
  - def-gr-schwarzschild-exterior-model
  - def-gr-fx-scalar-wave-stress
  - def-gr-fx-nondegenerate-local-energy-estimate
  - lem-smooth-bump-between-concentric-euclidean-balls
dependency_roles:
  def-countable-choice: mathematical-premise
  def-gr-schwarzschild-exterior-model: mathematical-premise
  def-gr-fx-scalar-wave-stress: mathematical-premise
  def-gr-fx-nondegenerate-local-energy-estimate: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
sources:
  references:
    - title: "Jan Sbierski, Characterisation of the Energy of Gaussian Beams on Lorentzian Manifolds with Applications to Black Hole Spacetimes, arXiv:1311.2477, Theorem 2.1 and Sections 2.1-2.2, 2.4, 3.1.1, PDF pp. 9-18, 22-25"
      url: "https://arxiv.org/pdf/1311.2477"
    - title: "J. Marzuola, J. Metcalfe, D. Tataru and M. Tohaneanu, Strichartz Estimates on Schwarzschild Black Hole Backgrounds, arXiv:0802.3942, Section 1, PDF pp. 1-3: exterior metric and normalized tortoise coordinate"
      url: "https://arxiv.org/pdf/0802.3942"
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$. Fix the Schwarzschild exterior datum with $s>0$, the stationary field $T=\partial_0$, and $0<\delta<s/2$. Let $K_\delta=\{|r-3s/2|\le\delta\}$ include the whole sphere factor, and use the stationary total and annular energies $E_T$ and $E_{T,\delta}$ defined for the real scalar test tensor. For every $H>0$ and every $0<\epsilon<1$, there is a real $\psi\in C^\infty(\mathbb R\times(s,\infty)\times S^2)$ solving $\Box_g\psi=0$, with compact smooth Cauchy data at $x^0=0$, such that

$$E_T[\psi](0)=1,\qquad E_{T,\delta}[\psi](x^0)\ge1-\epsilon\quad\text{for every }0\le x^0\le H.$$

The same solution works on the entire prescribed interval. Its stationary energy is finite and equal to one on every static slice. The frequency may depend on $H,\epsilon,s,\delta$; no infinite-time concentration, horizon extension, or concentration in a smaller angular neighborhood is asserted.

## Statement references

[[def-gr-schwarzschild-exterior-model]]

[[def-gr-fx-scalar-wave-stress]]

[[def-gr-fx-nondegenerate-local-energy-estimate]]

## Facts & Assumptions

**Given:** The exact fixed Schwarzschild exterior, parameters, real scalar stress, annulus and energies in the Statement.

[A1] Countable Choice is retained through the smooth Schwarzschild and tangent-bundle conventions; no Dependent Choice or additional global geometric assumption is used. [[def-countable-choice]]

[F1] The exterior metric is $g=-f\,dt^2+f^{-1}\,dr^2+r^2\gamma_{S^2}$, $f=1-s/r>0$, on $\mathbb R\times(s,\infty)\times S^2$, with future field $T=\partial_0$. Throughout this proof, $t:=x^0$ is a local alias for the length coordinate, not the physical-time coordinate $x^0/c$ denoted by $t$ in clause (d) of the supplier. Thus $T=\partial_t$ in this local notation; no assumption $c=1$ is made. [[def-gr-schwarzschild-exterior-model]]

[F2] The real scalar tensor is $Q_{ab}=\partial_a\psi\partial_b\psi-\tfrac12g_{ab}g^{cd}\partial_c\psi\partial_d\psi$ and the equation is $\Box_g\psi=0$. [[def-gr-fx-scalar-wave-stress]]

[F3] On a static slice $n=f^{-1/2}T$ and $E_T=\int Q(n,T)\,d\mu_\Sigma$; $E_{T,\delta}$ is the same integral over $|r-3s/2|\le\delta$ and all $\omega\in S^2$. [[def-gr-fx-nondegenerate-local-energy-estimate]]

[F4] Smooth cutoffs equal to one on an inner interval and zero outside a larger interval are obtained by translating and rescaling smooth Euclidean bumps. [[lem-smooth-bump-between-concentric-euclidean-balls]]

## Proof

1.1 Coordinates and angular functions. Put $r_0=3s/2$ and define $log y:=\int_1^y d\rho/\rho$ for $y>0$; its difference quotient gives $(\log y)'=1/y$. On each dyadic interval $[2^j,2^{j+1}]$ and $[2^{-j-1},2^{-j}]$, the integral of $1/\rho$ is at least $1/2$, so $\log y\to+\infty$ as $y\to\infty$ and $\log y\to-\infty$ as $y\downarrow0$. Define the length offset $C_*:=r_0+s\log(r_0/s-1)$ and set $x(r)=r+s\log(r/s-1)-C_*$, so $x(r_0)=0$. Then $x'(r)=1+s/(r-s)=1/f(r)>0$ and the endpoint limits are $-\infty,+\infty$, so $x:(s,\infty)\to\mathbb R$ is bijective. Its inverse $r(x)$ is continuous by strict monotonicity; taking difference quotients in $x(r(x+h))-x(r(x))=h$ gives $r_x=1/x'(r)=f(r)$. Thus $r$ is $C^1$, and the identity $r_x=f(r)$ inductively makes $r$ $C^k$ for every $k$, since $f$ is smooth. In polar coordinates for the unit round sphere define $\Delta_{S^2}v:=(\sin\vartheta)^{-1}\partial_\vartheta(\sin\vartheta\,\partial_\vartheta v)+(\sin\vartheta)^{-2}\partial_\varphi^2v$ and $|\nabla_{S^2}v|^2:=|\partial_\vartheta v|^2+(\sin\vartheta)^{-2}|\partial_\varphi v|^2$; these are the scalar Laplace--Beltrami operator and the squared metric norm of the gradient for $d\Omega=\sin\vartheta\,d\vartheta\,d\varphi$. For an integer $l\ge1$ set $I_n:=\int_0^\pi\sin^n\vartheta\,d\vartheta$, $c_l:=(2\pi I_{2l+1})^{-1/2}>0$, and $Y_l:=c_l(\omega_1+i\omega_2)^l$. The polynomial expression makes $Y_l$ smooth at both poles; in polar coordinates $Y_l=c_l\sin^l\vartheta\,e^{il\varphi}$. Direct differentiation gives $\Delta_{S^2}Y_l=-l(l+1)Y_l$. Integration in $\varphi$ gives $\int_{S^2}|Y_l|^2d\Omega=1$, $\int_{S^2}Y_l^2d\Omega=0$, and $\int_{S^2}\nabla_{S^2}Y_l\cdot\nabla_{S^2}Y_l\,d\Omega=0$, the latter two because their integrands have the factor $e^{2il\varphi}$. Also $|\nabla_{S^2}Y_l|^2=c_l^2l^2\sin^{2l-2}\vartheta(1+\cos^2\vartheta)$. Integration by parts gives $(2l+1)I_{2l+1}=2lI_{2l-1}$, and hence $\int_{S^2}|\nabla_{S^2}Y_l|^2d\Omega=2\pi c_l^2l^2(2I_{2l-1}-I_{2l+1})=l(l+1)$. [given, A1, F1, construct, algebra]

2.1 Exact scalar reduction. In $(t,x,\omega)$ the metric is $f(-dt^2+dx^2)+r^2\gamma_{S^2}$. In a polar sphere chart its inverse components are $(-f^{-1},f^{-1},r^{-2},(r^2\sin^2\vartheta)^{-1})$ and $\sqrt{|\det g|}=fr^2\sin\vartheta$. The Christoffel symbols of this metric-selected connection are $\Gamma^c{}_{ab}=\frac12g^{cd}(\partial_a g_{bd}+\partial_b g_{ad}-\partial_dg_{ab})$; for a scalar $u$, $\nabla_a\nabla_bu=\partial_a\partial_bu-\Gamma^c{}_{ab}\partial_cu$; substituting the diagonal metric into the Christoffel formula gives $g^{ab}\Gamma^x{}_{ab}=-2/r$, $g^{ab}\Gamma^\vartheta{}_{ab}=-\cot\vartheta/r^2$, and zero for the other two traced components. Consequently $\Box_gu=-f^{-1}u_{tt}+f^{-1}u_{xx}+2r^{-1}u_x+r^{-2}(u_{\vartheta\vartheta}+\cot\vartheta\,u_\vartheta+\sin^{-2}\vartheta\,u_{\varphi\varphi})=f^{-1}(-u_{tt}+r^{-2}\partial_x(r^2u_x))+r^{-2}\Delta_{S^2}u$. Substituting $u=q(t,x)Y_l(\omega)/r(x)$ and $r_x=f$ yields $\Box_g u=\frac{Y_l}{fr}(-q_{tt}+q_{xx}-W_lq)$, where $W_l=f(l(l+1)/r^2+s/r^3)\ge0$ and $f_x=fs/r^2$. For each fixed $l$, $W_l$ and every $x$ derivative are bounded on $\mathbb R$: $\partial_x=f\partial_r$, the rational functions extend smoothly to $r=s$, and their derivatives decay at infinity. No uniform-in-$l$ bound is needed for existence. [F1, F2, step 1.1, algebra]

3.1 Positive energy and real fields. For a compactly supported complex $q$ define $e_l[q]=\tfrac12\int_{\mathbb R}(|q_t|^2+|q_x|^2+W_l|q|^2)\,dx$. Use the sum of the real and imaginary scalar energies for a complex field. From [F2]--[F3], its energy density in $x,\omega$ is $\tfrac12(r^2|u_t|^2+r^2|u_x|^2+f|\nabla_{S^2}u|^2)$. For $qY_l/r$, integration over $S^2$ gives $\tfrac12(|q_t|^2+|q_x-bq|^2+fl(l+1)|q|^2/r^2)$, $b=f/r$. The identity $b'+b^2=fs/r^3$ and integration of $-b\partial_x|q|^2$, with zero endpoint terms, prove that its total energy equals $e_l[q]$. The zero bilinear angular integrals in step 1.1 give exactly $E_T[\operatorname{Re}(qY_l/r)]=e_l[q]/2$. The original local energy density is nonnegative on every radial subset. The factor $1/2$ for real fields also holds before the radial integration by parts, so no false boundary-term identity on a finite annulus is being used. [F1, F2, F3, step 1.1, step 2.1, algebra]

3.2 Global smooth radial Cauchy construction. For arbitrary compact smooth data $p,v$, solve the integral equation $q=q_0+\mathcal Kq$, where $q_0=(p(x+t)+p(x-t))/2+\tfrac12\int_{x-t}^{x+t}v(y)\,dy$ and $\mathcal Kq=-\tfrac12\int_0^t\int_{x-(t-a)}^{x+(t-a)}W_l(y)q(a,y)\,dy\,da$. On a slab of width $d$ its operator norm on bounded continuous functions is at most $\|W_l\|_\infty d^2/2$. Choose this below one. Picard iteration from $q_0$ then has geometrically summable successive sup-norm differences, so converges uniformly to the unique bounded continuous solution. Each iterate vanishes outside the unit-speed cone of the initial compact support. Spatial difference quotients of the integral equation inductively give continuous derivatives of every order: the highest differentiated unknown is acted on by the same $\mathcal K$, while all lower terms involve already known derivatives and bounded derivatives of $W_l$. Uniform convergence of these difference quotients follows from that same geometric estimate; the fundamental theorem of calculus identifies their limits as the derivatives. Differentiating the integral equation in time gives the initial velocity, $q_{tt}=q_{xx}-W_lq$, and all higher time derivatives. Thus the solution is jointly smooth. The fixed slab width depends on $l$ but not on the data size, so restart at successive endpoints and use uniqueness on overlaps to obtain a solution for every real time. Time reversal treats negative times. The iterates and their restarted solutions retain the compact unit-speed support cone. This is an actual Cauchy construction; global hyperbolicity or an unproved scalar-wave existence theorem has not been invoked. [step 2.1, construct, algebra]

3.3 Explicit Gaussian envelope. Let $h=(l+1/2)^{-1}$, $V_0=f/r^2$, $V_1=fs/r^3-V_0/4$. Then $W_l=h^{-2}V_0+V_1$. At $x=0$ direct differentiation gives $V_0(0)=\Omega^2$, $V_0'(0)=0$, $V_0''(0)/2=-\Omega^4$, where $\Omega=2/(3\sqrt3s)>0$. Indeed $\partial_rV_0=(-2r+3s)/r^4$, and $\partial_r^2V_0(r_0)=-3s/r_0^5$, with $\partial_x=f\partial_r$. Put $z(t)=\cosh(\Omega t)+i\sinh(\Omega t)$, $b(t)=\Omega^2(\cosh(\Omega t)-i\sinh(\Omega t))/z(t)$, and $a(t,y)=z(t)^{-1/2}e^{-b(t)y^2/2}$, using the smooth square-root branch equal to one initially. Since $\operatorname{Re}z>0$, it never vanishes. Calculation gives $\operatorname{Re}b=\Omega^2/|z|^2>0$, $b'=-i(b^2+\Omega^4)/\Omega$, and $(z^{-1/2})'/z^{-1/2}=-ib/(2\Omega)$. Therefore $2i\Omega a_t=-a_{yy}-\Omega^4y^2a$. On every fixed $|t|\le H$, all derivatives of $a$ are polynomials in $y$ with bounded coefficients times a Gaussian having $\operatorname{Re}b\ge c_H>0$; all required weighted $L^2$ norms are bounded uniformly there. [given, step 2.1, construct, algebra]

4.1 Frequency-independent energy stability. The same integral construction with an added d'Alembert forcing term treats smooth forcing on finite slabs. For a smooth spatially compact solution of $q_{tt}-q_{xx}+W_lq=F$, direct differentiation and integration by parts give $e_l'[q]=\operatorname{Re}\int F\overline{q_t}\,dx$. For nonzero $A=\|F\|_2$ and $B=\|q_t\|_2$, integration of $(|F|/A-|q_t|/B)^2\ge0$ gives $\int|Fq_t|\le AB$; zero-norm cases give the same inequality immediately. Since $W_l\ge0$, this bounds the energy derivative in absolute value by $\sqrt{2e_l[q]}\,\|F\|_2$. Apply this first to $\sqrt{e_l+\eta}$, integrate and let $\eta\downarrow0$ to obtain $\sqrt{e_l[q](t)}\le\sqrt{e_l[q](0)}+2^{-1/2}\int_0^t\|F(a)\|_2\,da$. In particular the energy of a homogeneous wave from step 3.2 is conserved. Compact support on every finite slab justifies all integrations, even though the full spatial line is noncompact. [step 2.1, step 3.1, step 3.2, algebra]

4.2 Compact approximation and residual. Choose a real $\chi\in C_c^\infty(\mathbb R)$ from [F4], equal to one near $0$ and supported inside $\{|r(x)-r_0|<\delta\}$. Set $Q_h=h^{3/4}e^{-i\Omega t/h}\chi(x)a(t,x/\sqrt h)$. Its support and the support of each derivative lie in the exact annulus. In $R_h=(\partial_t^2-\partial_x^2+W_l)Q_h$, the $h^{-2}$ term cancels by $V_0(0)=\Omega^2$ and the $h^{-1}$ term cancels by the envelope equation in step 3.3. The remaining terms away from cutoff derivatives are $h^{3/4}e^{-i\Omega t/h}\chi$ times $a_{tt}+V_1a+h^{-2}(V_0(x)-\Omega^2+\Omega^4x^2)a$. Taylor's theorem on the fixed compact support gives $|V_0(x)-\Omega^2+\Omega^4x^2|\le C|x|^3$, with $C$ independent of $h$. With $dx=\sqrt h\,dy$, the amplitude prefactor changes an envelope $L^2$ norm by $h$. Thus the first two terms are $O_H(h)$ in $L^2_x$ and the cubic term is bounded by $Ch\,h^{-2}h^{3/2}\||y|^3a\|_2=O_H(\sqrt h)$. Cutoff commutators are $-2\chi'\partial_x$ of the uncut amplitude and $-\chi''$ times that amplitude. Their supports have $|x|\ge d_0>0$; Gaussian decay there makes their norms $O_{H,N}(h^N)$ for every $N$, despite any fixed derivative powers of $h^{-1}$. Consequently $\sup_{0\le t\le H}\|R_h(t)\|_2\le C_H\sqrt h$. [F4, step 1.1, step 3.3, construct, algebra]

5.1 Positive normalization. At $t=0$, the substitution $x=\sqrt h\,y$ and Gaussian tail bounds show $e_l[Q_h](0)\to C_0=\Omega^2\int|a(0,y)|^2\,dy=\Omega\sqrt\pi>0$. More explicitly, the time derivative's leading term $-i\Omega Q_h/h$ contributes $\Omega^2\int|a_0|^2$ to the unhalved energy integral; $h^{-2}V_0|Q_h|^2$ contributes the same limit. Their cross/time-envelope terms are $O(h)$, the radial derivative energy is $O(h)$, and the $V_1$ term is $O(h^2)$. The factor $1/2$ in $e_l$ therefore gives $C_0+O(h)$. In particular this energy has a positive lower bound for sufficiently large integers $l$. [step 3.1, step 3.3, step 4.2, algebra]

5.2 Exact correction. Use step 3.2 to solve the homogeneous radial equation with exactly the smooth compact initial data $Q_h(0),\partial_tQ_h(0)$, obtaining $q_h$ on all real times. Then $w_h=q_h-Q_h$ has zero initial data and forcing $-R_h$. Steps 4.1 and 4.2 give $\sup_{0\le t\le H}e_l[w_h](t)\le(H^2/2)\sup\|R_h(t)\|_2^2\le C_Hh$. Its compact support on finite slabs follows from the support of $q_h$ and $Q_h$. Define $U_h=\operatorname{Re}(q_hY_l/r)$. By steps 1.1--2.1 it is a real globally smooth exact scalar wave, including at the sphere poles, with compact smooth initial data. Its conserved stationary energy is exactly $e_l[Q_h](0)/2$ by steps 3.1 and 4.1. [step 1.1, step 2.1, step 3.1, step 3.2, step 4.1, step 4.2, algebra]

6.1 Concentration on every required slice. Normalize $\psi_h=U_h/\sqrt{e_l[Q_h](0)/2}$; its stationary energy is exactly one on every slice. Outside $K_\delta$, the approximate field $\operatorname{Re}(Q_hY_l/r)$ and all its derivatives vanish. There the exact field equals the correction $\operatorname{Re}(w_hY_l/r)$. The original positive density of step 3.1 and the global energy identity consequently give $E_{T,\mathrm{outside}\ K_\delta}[\psi_h](t)\le e_l[w_h](t)/e_l[Q_h](0)\le C'_Hh$. The boundary spheres have measure zero, so total energy one implies $E_{T,\delta}[\psi_h](t)\ge1-C'_Hh$ simultaneously for all $t\in[0,H]$. Choose one sufficiently large integer $l$ with $C'_H/(l+1/2)<\epsilon$. This proves the exact quantifiers and real-field assertion. The construction uses the full specified radial annulus and makes no assertion about a smaller angular neighborhood or a frequency uniform in $H$. [given, A1, F3, step 3.1, step 5.1, step 5.2, construct, algebra] ∎

## Remarks

The exact annular localization permits a separated high-angular-frequency Gaussian; no general Gaussian-beam theorem is taken as an external proof input. The local radial Cauchy construction above also avoids imposing extra global-hyperbolicity or Dependent-Choice hypotheses on the original Schwarzschild claim. This is a mathematical test-wave result on the fixed exterior and gives no coupled-matter, horizon-regularity or gravitational-stability theorem.
