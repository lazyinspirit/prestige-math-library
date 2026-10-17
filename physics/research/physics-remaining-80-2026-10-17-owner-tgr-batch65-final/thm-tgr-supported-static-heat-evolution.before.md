---
id: thm-tgr-supported-static-heat-evolution
kind: theorem
title: Constructed supported static heat evolution
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - lem-tgr-killing-thermal-normalization
  - lem-tgr-eckart-entropy-specialization
  - def-tgr-local-fluid-state
  - def-gr-smooth-lorentzian-objects
  - def-gr-killing-field
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-tgr-stationary-thermal-carriers
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-calligraphic-l-p-on-a-measure-space
  - def-l-p-space-as-a-quotient-by-null-functions
  - thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space
  - thm-holder-inequality-for-integrals
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-heat-cauchy-solution-for-bounded-continuous-data
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - def-heat-kernel
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-countable-choice
dependency_roles:
  lem-tgr-killing-thermal-normalization: mathematical-premise
  lem-tgr-eckart-entropy-specialization: mathematical-premise
  def-tgr-local-fluid-state: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-killing-field: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-tgr-stationary-thermal-carriers: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  def-calligraphic-l-p-on-a-measure-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space: mathematical-premise
  thm-holder-inequality-for-integrals: mathematical-premise
  thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  thm-heat-cauchy-solution-for-bounded-continuous-data: mathematical-premise
  lem-heat-kernel-normalisation-scaling-and-derivatives: mathematical-premise
  def-heat-kernel: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1, full lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "Full 37-page PDF; §§4.3 and 5.2–5.4, PDF pp. 16–20: local thermodynamic variables and covariant stress-energy projections."
    - title: "Paul Romatschke, Relativistic Viscous Fluid Dynamics and Non-Equilibrium Entropy, arXiv:0906.4787v2, full article"
      url: "https://arxiv.org/pdf/0906.4787"
      locator: "Full 25-page PDF; §§3–4.1, PDF pp. 7–13: dissipative stress and entropy-current treatment, with conformal/zero-charge limitations stated."
    - title: "John K. Hunter, Notes on Partial Differential Equations, revised 18 June 2014, UC Davis full lecture notes"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Full 242-page PDF; §5.1.2, Theorem 5.5, printed pp. 130–131, for Gaussian convolution smoothing and the positive-time heat equation. The locally proved reflected-boundary and initial-data conclusions use the exact heat suppliers listed here."
---

## Statement

Let $\Omega=\prod_{i=1}^3(0,L_i)$ with $L_i>0$, and let $U\subset\mathbb R^3$ be an open neighborhood of $\overline\Omega$. Let $N\in C^\infty(U,(0,\infty))$ satisfy $0<N_{\min}\le N(x)\le N_{\max}<\infty$ on $\overline\Omega$. On $M=\mathbb R_{x^0}\times U$, use $x^0=ct_K$ with $c>0$ in $\mathrm{m\,s^{-1}}$, give $M$ the time orientation $\xi=\partial_{x^0}$, and use the metric
$$
g=-N(x)^2(dx^0)^2+\sum_{i=1}^3(dx^i)^2,
$$
where $x^i$ are measured in metres, $t_K$ in seconds, and $N$ is dimensionless. By [[def-gr-killing-field]], a Killing field is one satisfying $\mathcal L_\xi g=0$, where $\mathcal L_\xi g=\frac d{dt}|_{t=0}\Phi_t^*g$ for the local flow $\Phi_t$ of $\xi$. Thus $\xi$ is a future timelike Killing field, $N=\sqrt{-g(\xi,\xi)}$, and $u=N^{-1}\xi$ is the smooth future unit timelike observer congruence of [[def-tgr-local-fluid-state]]; here this congruence means the unit timelike vector field, not a coordinate chart. Write $\nabla_x$, $\operatorname{div}_x$, $\nu$, and $dx$ for the Euclidean spatial gradient, divergence, outward unit normal, and three-dimensional Lebesgue volume on the box, and set $|\Omega|:=\int_\Omega1\,dx=L_1L_2L_3$. For scalar fields on $\Omega$, $L^2(\Omega)$ and its norm use this measure.

For $t_K>0$ use the open domain $O=(0,\infty)\times\Omega$. Spatial vectors such as $q$ are extended to spacetime with zero $x^0$ component.

Fix constants $C_V,n_0,A_0,T_{\rm ref}>0$, a reference entropy $\sigma_{\rm ref}\in\mathbb R$, and a reference energy $e_0\in\mathbb R$. Their units are $C_V$ in $\mathrm{J\,m^{-3}K^{-1}}$, $n_0$ in $\mathrm{marker\,m^{-3}}$, $A_0$ in $\mathrm{W\,m^{-1}K^{-1}}$, $T_{\rm ref}$ in kelvins, $\sigma_{\rm ref}$ in $\mathrm{J\,K^{-1}marker^{-1}}$, and $e_0$ in $\mathrm{J\,marker^{-1}}$. Define the derived per-marker heat capacity $c_v=C_V/n_0$, with units $\mathrm{J\,K^{-1}marker^{-1}}$, and the local mathematical material state function on $X=(0,\infty)\times\mathbb R$ by
$$
e(v,\sigma_p)=c_vT_{\rm ref}\exp\!\left(\frac{\sigma_p-\sigma_{\rm ref}}{c_v}\right)+e_0,
$$
independent of $v$. For a positive proper temperature $T$, set $\sigma_p=\sigma_{\rm ref}+c_v\log(T/T_{\rm ref})$ and $v=1/n_0$. The state definitions of [[def-tgr-local-fluid-state]] give $n=n_0$, $p=0$, $\epsilon=C_VT+n_0e_0$, and $s=n_0\sigma_{\rm ref}+C_V\log(T/T_{\rm ref})$.

Let $\vartheta_0\in C^2(\overline\Omega)$ satisfy $0<m_0\le\vartheta_0\le M_0$ and admit a $C^2$ extension $\widetilde\vartheta_0:\mathbb R^3\to\mathbb R$ with the same bounds, period $2L_i$ in coordinate $x^i$, and evenness under $x^i\mapsto-x^i$ for each $i$. These conditions make the extension even about every face $x^i=0,L_i$. Set $T_0=\vartheta_0/N$. Define the physical heat flux, conductivity, static heat balance, and insulated-face condition by
$$
q=-\kappa_{\rm th}(\nabla_xT+T\nabla_x\log N),\qquad \kappa_{\rm th}=A_0/N,\qquad NC_V\partial_{t_K}T+\operatorname{div}_x(N^2q)=0,\qquad N^2q\cdot\nu=0\ \text{on each face},
$$
where $q$ has units $\mathrm{W\,m^{-2}}$, $\kappa_{\rm th}$ has units $\mathrm{W\,m^{-1}K^{-1}}$, and $\nu$ is the outward Euclidean unit normal to a face. In the entropy identity use zero particle diffusion and zero shear and bulk viscosity, $V=0$ and $\eta=\zeta_{\rm b}=0$, so $\Pi=0$ and $\pi^{ab}=0$. The thermal diffusivity $A_0/C_V$ has units $\mathrm{m^2\,s^{-1}}$. There is a unique solution $T\in C([0,\infty)\times\overline\Omega)\cap C^{2,1}((0,\infty)\times\overline\Omega)$, where $C^{2,1}$ means two continuous spatial derivatives and one continuous time derivative up to the box faces, satisfying the heat balance, the face condition, and the initial condition $T(0,x)=T_0(x)=\vartheta_0(x)/N(x)$. It is given by
$$\vartheta(t_K,x):=N(x)T(t_K,x)=\int_{\mathbb R^3}\Gamma\!\left(x-y,\frac{A_0}{C_V}t_K\right)\widetilde\vartheta_0(y)\,dy\quad(t_K>0),\qquad \vartheta(0,x)=\vartheta_0(x),\qquad \Gamma(z,t)=(4\pi t)^{-3/2}e^{-|z|^2/(4t)},\quad z\in\mathbb R^3,\ t>0.$$
Thus $T=\vartheta/N$. It satisfies $C_V\partial_{t_K}\vartheta=A_0\Delta_x\vartheta$, $\partial_\nu\vartheta=0$ on each face, and $m_0\le\vartheta\le M_0$.

For this solution set $Q^0=0$, $Q^i=q^i/c$, $J=n_0u$, and
$$
\mathsf T^{ab}=\epsilon u^au^b+u^aQ^b+Q^au^b,\qquad f^b:=\nabla_a\mathsf T^{ab}.
$$
Here $Q=q/c$ has units $\mathrm{Pa}$, $\mathsf T$ has units $\mathrm{Pa}$, and $f$ has units $\mathrm{N\,m^{-3}}$. Then $\nabla_aJ^a=0$ and $u_bf^b=0$: $f$ is an explicitly defined external support that supplies no local power. The entropy current $S^a=su^a+Q^a/T$ has units $\mathrm{J\,K^{-1}m^{-3}}$ and total entropy $\mathcal S(t_K)=\int_\Omega s(t_K,x)\,dx$ in $\mathrm{J\,K^{-1}}$, with
$$
\frac{d\mathcal S}{dt_K}=A_0\int_\Omega\frac{|\nabla_x\vartheta|^2}{\vartheta^2}\,dx\ge0.
$$
The lapse-weighted energy $\mathcal E_K(t_K)=\int_\Omega N\epsilon\,dx$ is constant in $\mathrm{J}$. If $\overline\vartheta=|\Omega|^{-1}\int_\Omega\vartheta_0\,dx$ and $C_\Omega=\frac32(\max_iL_i)^2$, then
$$
\left\|\vartheta(t_K,\cdot)-\overline\vartheta\right\|_{L^2(\Omega)}\le \exp\!\left(-\frac{A_0t_K}{C_VC_\Omega}\right)\left\|\vartheta_0-\overline\vartheta\right\|_{L^2(\Omega)}.
$$
Thus $T$ converges in $L^2(\Omega)$ to $T_{\rm eq}=\overline\vartheta/N$. Since $N T_{\rm eq}=\overline\vartheta>0$, the inverse-temperature vector $\beta=u/(k_BT_{\rm eq})$, for $k_B>0$ in $\mathrm{J\,K^{-1}}$, is Killing by [[lem-tgr-killing-thermal-normalization]]. This is a mathematical solution of the specified fixed-background, supported first-order heat model; it asserts no Einstein equation, general dissipative-fluid initial-value theorem, or finite propagation speed.

## Facts & Assumptions
**Given:** $L_i,C_V,n_0,A_0,T_{\rm ref},N_{\min}>0$, the smooth static metric and lapse above, the stated material function, and the positive even-reflected periodic initial profile. The only choice principle used is Countable Choice.

[A1] The heat Cauchy theorem requires Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]); the geometric suppliers also carry exactly this strength. No full Axiom of Choice is invoked.

[A2] The initial profile has a positive $C^2$ even-reflected periodic extension with fixed bounds $m_0,M_0$ as in the Statement. This is the compatibility assumption that supplies zero normal derivative on all six faces.

[F1] [[def-tgr-local-fluid-state]]: for a smooth state map, $n=v^{-1}$, $s=n\sigma_p$, $\epsilon=ne$, $T=e_{\sigma_p}$, and $p=-e_v$; the convention is $x^0=ct$ and physical heat flux is $q=cQ$.

[F2] [[lem-tgr-eckart-entropy-specialization]]: for a supplied smooth solution with zero particle diffusion, $q=cQ$, $\Pi=-\zeta_{\rm b}c\theta$, $\pi^{ab}=-2\eta c\sigma^{ab}$ and $u_bf^b=0$, the entropy divergence is the sum of the three nonnegative heat, shear, and bulk terms stated there. Its current local proof is conditional on the inspected batch-53/55 draft interfaces.

[F3] [[def-tgr-stationary-thermal-carriers]]: for a selected future timelike Killing field $\xi$, $N_\xi=\sqrt{-g(\xi,\xi)}$ and $u=\xi/N_\xi$; for $k_B>0$, $\beta=u/(k_BT)$.

[F4] [[lem-tgr-killing-thermal-normalization]]: on a connected open domain with those stationary fields, $\beta$ is Killing exactly when $N_\xi T$ is a positive constant. This current TGR-ET01 draft has a complete conditional local proof; its four missing planned page prerequisites keep its pair readiness escalated.

[F5] [[thm-heat-cauchy-solution-for-bounded-continuous-data]]: if $f:\mathbb R^3\to\mathbb R$ is bounded and uniformly continuous and $\mathrm{AC}_\omega$ holds, then $\Gamma_t*f$ is smooth for $t>0$, solves $\partial_tu=\Delta u$, remains bounded, and converges locally uniformly to $f$ as $t\downarrow0$.

[F6] [[def-heat-kernel]] and [[lem-heat-kernel-normalisation-scaling-and-derivatives]]: $\Gamma(z,t)=(4\pi t)^{-3/2}e^{-|z|^2/(4t)}$ is even, strictly positive, and has integral one for $t>0$.

[F7] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: a $C^1$ diffeomorphism changes a nonnegative Lebesgue integral by the absolute Jacobian; Countable Choice is its exact stated measure-theoretic assumption.

[F8] [[def-gr-smooth-lorentzian-objects]]: the metric has signature $(-,+,+,+)$ and a chosen time orientation.

[F9] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]: $\nabla$ is the unique torsion-free metric-compatible connection and in coordinates its Christoffel symbols are given by the metric derivative formula.

[F10] [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[def-calligraphic-l-p-on-a-measure-space]], [[def-l-p-space-as-a-quotient-by-null-functions]], and [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]: $dx$ is three-dimensional Lebesgue measure restricted to $\Omega$, and $\|w\|_{L^2(\Omega)}=(\int_\Omega |w|^2\,dx)^{1/2}$ is the norm of the almost-everywhere class of $w$.

[F11] [[thm-holder-inequality-for-integrals]] gives $|\int_E f\,dx_i|^2\le |E|\int_E|f|^2\,dx_i$ for measurable $f\in L^2(0,L_i)$ and measurable $E\subseteq(0,L_i)$, by its $p=q=2$ case applied to $f$ and $\mathbf1_E$. In particular it gives the squared interval-integral bound used below. [[thm-tonelli-and-fubini-for-completed-product-measures]] gives the iterated-integral identities on the finite rectangular products used below; the continuous integrands are measurable, and the box restriction of Lebesgue measure is finite.

[F12] [[def-gr-killing-field]]: $\xi$ is Killing exactly when $\mathcal L_\xi g=0$, with the Lie derivative defined by differentiating the pullback of $g$ along the local flow of $\xi$.

## Proof
1.1 Put $\alpha=A_0/C_V>0$. The extension $\widetilde\vartheta_0$ is bounded and uniformly continuous because it is continuous and periodic. Apply [F5] with time variable $\tau=\alpha t_K$ to define $\vartheta(t_K,x)=\int\Gamma(x-y,\alpha t_K)\widetilde\vartheta_0(y)\,dy$ for $t_K>0$ and $\vartheta(0,x)=\vartheta_0(x)$. The chain rule gives $\partial_{t_K}\vartheta=\alpha\Delta_x\vartheta$, and local uniform initial recovery on the compact set $\overline\Omega$ gives continuity to the stated initial trace. [A1, A2, F5, given, construct]

1.2 The local flow of $\xi=\partial_{x^0}$ is $\Phi_t(x^0,x^1,x^2,x^3)=(x^0+t,x^1,x^2,x^3)$. Since $g$ is independent of $x^0$, $\Phi_t^*g=g$, so [F12] gives $\mathcal L_\xi g=0$. The components give $g(\xi,\xi)=-N^2$, $u^0=N^{-1}$, $u^i=0$, $u_0=-N$, and $u_i=0$; hence $g(u,u)=-1$ and $g(u,\xi)=-N<0$, so $u$ is future directed. The Christoffel formula [F9] gives $\Gamma^0{}_{0i}=\Gamma^0{}_{i0}=\partial_iN/N$, $\Gamma^i{}_{00}=N\partial_iN$, and all other coefficients vanish. In particular $\Gamma^a{}_{a0}=0$ and $\Gamma^a{}_{ai}=\partial_i\log N$. Since $\partial_a u^a=0$, $u^i=0$, and $\Gamma^a{}_{a0}=0$, the coordinate formula $\nabla_a u^a=\partial_a u^a+\Gamma^a{}_{ac}u^c$ gives $\theta=0$. Directly, $\nabla_0u_i=\partial_iN$, $\nabla_i u_0=\nabla_0u_0=\nabla_i u_j=0$, and $\Delta_0{}^a=0$, $\Delta_i{}^a=\delta_i{}^a$; the projected spatial symmetric derivative vanishes and $\sigma_{ab}=0$. Also $a_i=u^0\nabla_0u_i=\partial_iN/N=\partial_i\log N$ and $a_0=0$. The chosen material state map is smooth because $T=\vartheta/N>0$ for $t_K>0$; differentiation of $e$ gives $T=e_{\sigma_p}=T_{\rm ref}e^{(\sigma_p-\sigma_{\rm ref})/c_v}$ and $p=-e_v=0$, whence $\epsilon=n_0e=C_VT+n_0e_0$ and $s=n_0\sigma_p=n_0\sigma_{\rm ref}+C_V\log(T/T_{\rm ref})$. Finally $J=n_0u$ has zero divergence, while $V=\Pi=\pi=0$ and $Q=q/c$ give precisely the stress in the Statement and the specialization of [F2]. [F1, F2, F3, F8, F9, F12, given, algebra]

2.1 Positivity and unit mass in [F6] give $m_0\le\vartheta\le M_0$. For a period translation $P_i(x)=x+2L_ie_i$, the substitution $y=P_i z$ in [F7] has absolute Jacobian $1$; periodicity of the datum and radiality of $\Gamma$ yield $\vartheta(P_ix,t_K)=\vartheta(x,t_K)$. For reflection $R_i(x)=(x_1,\ldots,-x_i,\ldots,x_3)$, the same change-of-variables formula and the evenness of the datum and kernel give $\vartheta(R_ix,t_K)=\vartheta(x,t_K)$. Periodicity plus reflection makes $\vartheta$ even about each plane $x_i=L_i$ as well as $x_i=0$. Smoothness for $t_K>0$ then forces the normal derivative to vanish on each face; $N^2q=-A_0\nabla_x(NT)=-A_0\nabla_x\vartheta$, so this is exactly the insulated condition. [step 1.1, A2, F5, F6, F7, algebra]

2.2 Let $\vartheta_1=NT_1$ and $\vartheta_2=NT_2$ be the redshifted temperatures of two solutions in the stated class with the same initial data, and put $w=\vartheta_1-\vartheta_2$. The transformed equation and face condition give $C_V\partial_{t_K}w=A_0\Delta_x w$ and $\partial_\nu w=0$. For $0<s<t_K$, differentiating the squared integral and integrating by parts on each coordinate interval gives $\frac{d}{dt_K}\|w\|_2^2=2\int_\Omega w\partial_{t_K}w\,dx=-2(A_0/C_V)\|\nabla_x w\|_2^2\le0$, since every boundary term contains $\partial_\nu w=0$. Thus $\|w(t_K)\|_2^2\le\|w(s)\|_2^2$; continuity on the compact initial cylinder and equal initial data make the latter tend to zero as $s\downarrow0$, proving uniqueness. [step 1.1, given, algebra]

2.3 The nonzero stress components are $\mathsf T^{00}=\epsilon/N^2$, $\mathsf T^{0i}=\mathsf T^{i0}=q^i/(cN)$, and $\mathsf T^{ij}=0$. The determinant is $\det g=-N^2$, and [F9] with step 1.2 gives $\nabla_a\mathsf T^{a0}=N^{-1}\partial_{x^a}(N\mathsf T^{a0})+\Gamma^0{}_{ac}\mathsf T^{ac}$: the trace term uses $\Gamma^a{}_{ac}=\partial_c\log N$, and the only nonzero term in the last contraction is $2\Gamma^0{}_{0i}\mathsf T^{0i}$. Since $u_0=-N$, $u_i=0$, and $\partial_{x^0}=c^{-1}\partial_{t_K}$, $$u_bf^b=-N\nabla_a\mathsf T^{a0}=-\frac1{cN}\left(\partial_{t_K}\epsilon+N\operatorname{div}_xq+2q\cdot\nabla_xN\right).$$ Here $\epsilon=C_VT+n_0e_0$, so this expression vanishes exactly when $NC_V\partial_{t_K}T+\operatorname{div}_x(N^2q)=0$. The constructed $\vartheta$ satisfies this balance because $N^2q=-A_0\nabla_x\vartheta$ and $C_V\partial_{t_K}\vartheta=A_0\Delta_x\vartheta$. By the definition $f^b=\nabla_a\mathsf T^{ab}$ the stress balance holds, and the calculation proves $u_bf^b=0$. [step 1.2, step 1.1, F9, algebra]

3.1 For every compact time interval in $t_K>0$, the integrands and their time derivatives are continuous on its product with $\overline\Omega$; the fundamental theorem of calculus in time and [F11] therefore justify differentiating the finite-volume integral. The heat balance and boundary condition give $$\frac{d}{dt_K}\int_\Omega N\epsilon\,dx=\int_\Omega NC_V\partial_{t_K}T\,dx=-\int_\Omega\operatorname{div}_x(N^2q)\,dx=0.$$ The last equality follows by applying the one-dimensional fundamental theorem of calculus to each coordinate derivative and summing the six face fluxes, each zero by the insulated condition. Continuity at $t_K=0$ extends this constant value to the initial time, proving conservation of $\mathcal E_K$. [step 2.3, step 2.1, F11, algebra]

4.1 In [F2] set $\kappa=\kappa_{\rm th}=A_0/N$, $\eta=\zeta_{\rm b}=0$, $V=0$, and use $u_bf^b=0$ from step 2.3. Since $X_i=\partial_iT+T\partial_i\log N=N^{-1}\partial_i\vartheta$, the spatial metric is Euclidean and $T=\vartheta/N$, the identity in [F2] gives $\nabla_aS^a=\kappa_{\rm th}X^aX_a/(cT^2)=A_0|\nabla_x\vartheta|^2/(cN\vartheta^2)$. The coordinate divergence formula from [F9] is $\nabla_aS^a=N^{-1}\partial_{x^a}(NS^a)$; with $NS^0=s$ and $NS^i=Nq^i/(cT)$ it yields $$\partial_{t_K}s+\operatorname{div}_x(Nq/T)=cN\nabla_aS^a.$$ Differentiation under the finite-volume integral is justified as in step 3.1. Integrating, the boundary term vanishes because $Nq\cdot\nu/T=0$ follows from $N^2q\cdot\nu=0$ and $N,T>0$. Thus $\frac{d\mathcal S}{dt_K}=A_0\int_\Omega |\nabla_x\vartheta|^2/\vartheta^2\,dx\ge0$. [step 1.2, step 2.3, step 3.1, F2, F9, algebra]

4.2 The same compact-time differentiation argument as in step 3.1 and the heat equation give $\frac{d}{dt_K}\int_\Omega\vartheta\,dx=(A_0/C_V)\int_\Omega\Delta\vartheta\,dx=0$. The last integral vanishes by the coordinate fundamental theorem of calculus on each pair of opposite faces, whose normal derivatives are zero. Continuity to the initial trace then shows that the mean of $\vartheta(t_K,\cdot)$ is the positive constant $\overline\vartheta$. [step 1.1, step 2.1, step 3.1, A2, F11, algebra]

5.1 Put $w=\vartheta-\overline\vartheta$, so $\int_\Omega w=0$. Expanding the square and using [F11] to integrate the continuous product over $\Omega\times\Omega$ gives $$\int_\Omega\int_\Omega(w(x)-w(y))^2\,dx\,dy=2|\Omega|\int_\Omega w^2\,dx-2\left(\int_\Omega w\,dx\right)^2=2|\Omega|\|w\|_2^2.$$ Define $b_1=w(x_1,x_2,x_3)-w(y_1,x_2,x_3)$, $b_2=w(y_1,x_2,x_3)-w(y_1,y_2,x_3)$, and $b_3=w(y_1,y_2,x_3)-w(y_1,y_2,y_3)$, so $w(x)-w(y)=b_1+b_2+b_3$. For each $i$, the fundamental theorem of calculus expresses $b_i$ as the integral of $\partial_iw$ over an interval of length at most $L_i$; [F11] therefore gives $|b_i|^2\le L_i\int_0^{L_i}|\partial_iw|^2\,dx_i$. Integrating this bound over $x,y$ gives $$\int_{\Omega\times\Omega}|b_i|^2\,dx\,dy\le |\Omega|L_i^2\int_\Omega|\partial_iw|^2\,dx,$$ because the two unused coordinates in direction $i$ contribute $L_i^2$, one unused coordinate in each other direction contributes $\prod_{j\ne i}L_j$, and the Cauchy–Schwarz factor contributes the remaining $L_i$. Since $(b_1+b_2+b_3)^2\le3\sum_i b_i^2$, division by $2|\Omega|$ yields $$\|w\|_2^2\le\frac32\sum_iL_i^2\|\partial_iw\|_2^2\le C_\Omega\|\nabla_xw\|_2^2,$$ where $C_\Omega=\frac32(\max_iL_i)^2$. For $t_K>0$, integration by parts and $\partial_\nu w=0$ give $$\frac12\frac{d}{dt_K}\|w\|_2^2=-\frac{A_0}{C_V}\|\nabla_xw\|_2^2\le-\frac{A_0}{C_VC_\Omega}\|w\|_2^2.$$ Multiplying by $\exp(2A_0t_K/(C_VC_\Omega))$ and differentiating proves the exponential estimate after taking square roots; continuity at $t_K=0$ supplies the initial norm. [step 1.1, step 2.1, step 4.2, A2, F10, F11, algebra]

6.1 Since $\overline\vartheta\ge m_0>0$, $T_{\rm eq}=\overline\vartheta/N$ is positive and smooth, and $\|T-T_{\rm eq}\|_2\le N_{\min}^{-1}\|\vartheta-\overline\vartheta\|_2$. On the connected open domain $(0,\infty)\times\Omega$, [F3] applies with the selected Killing field $\xi$ and lapse $N_\xi=N$: $N_\xi T_{\rm eq}=\overline\vartheta$ is constant, so $\beta=u/(k_BT_{\rm eq})$ is Killing. These are the claimed relaxation and equilibrium properties. [step 5.1, F3, F4, algebra] ∎
