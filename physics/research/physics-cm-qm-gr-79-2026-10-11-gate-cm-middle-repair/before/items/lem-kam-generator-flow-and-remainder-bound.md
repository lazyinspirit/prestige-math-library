---
id: lem-kam-generator-flow-and-remainder-bound
kind: lemma
title: "One KAM step: the affine generator, its canonical time-one flow, and the quadratic remainder bound"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 6
deps: [def-holomorphic-kam-domain-and-diophantine-labels, lem-cauchy-fourier-and-lattice-shell-bounds, lem-truncated-homological-equation-with-conservative-loss, lem-kam-affine-taylor-fourier-truncation, def-cm-local-flow-of-an-autonomous-system, thm-cm-smooth-dependence-and-the-variational-equation, lem-cm-continuous-dependence-on-initial-data, def-variational-equation-along-an-ode-solution, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, def-cm-phase-domain-and-standard-symplectic-two-form, thm-hamiltonian-flows-preserve-the-symplectic-form, def-complex-differentiability-holomorphic-and-entire, rem-complex-euclidean-space-dictionary, thm-gronwall-integral-inequality, def-operator-norm, def-metric-ball, def-interval, thm-chain-rule-for-total-derivatives]
dependency_roles:
  def-holomorphic-kam-domain-and-diophantine-labels: mathematical-premise
  lem-cauchy-fourier-and-lattice-shell-bounds: mathematical-premise
  lem-truncated-homological-equation-with-conservative-loss: mathematical-premise
  lem-kam-affine-taylor-fourier-truncation: mathematical-premise
  def-cm-local-flow-of-an-autonomous-system: mathematical-premise
  thm-cm-smooth-dependence-and-the-variational-equation: mathematical-premise
  lem-cm-continuous-dependence-on-initial-data: mathematical-premise
  def-variational-equation-along-an-ode-solution: mathematical-premise
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  thm-hamiltonian-flows-preserve-the-symplectic-form: mathematical-premise
  def-complex-differentiability-holomorphic-and-entire: mathematical-premise
  rem-complex-euclidean-space-dictionary: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  def-operator-norm: mathematical-premise
  def-metric-ball: mathematical-premise
  def-interval: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jürgen Pöschel, A Lecture on the Classical KAM Theorem, arXiv:0908.2234, §3-§4 (the generator $F$ with $\\{F,N\\}+\\hat R=R$, the estimates $r^{-1}|F_\\vartheta|+\\sigma^{-1}|F_I|\\le C\\varepsilon/(\\alpha r\\sigma^{\\mu})$, the time-one flow of $X_F$ and the transformed perturbation $\\varepsilon_+\\le C[\\varepsilon/(\\alpha r\\sigma^{\\mu})+\\eta^2+K^ne^{-K\\sigma}]\\varepsilon$), PDF pp. 14-22."
      url: "https://arxiv.org/pdf/0908.2234"
    - title: "Rafael de la Llave, A Tutorial on KAM Theory (AMS Proc. Sympos. Pure Math. 69, revised version), §3.6 (construction of the correcting canonical transformation, linear in the actions) and §6.1-§6.2 (the quadratic remainder of the Newton step), printed pp. 49-58 and 92-106."
      url: "https://www.johndcook.com/KAM.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, $\tau>n-1$, $\alpha>0$, let $\Omega\subseteq\mathbb R^n$ carry its
$(\alpha,\tau)$-label set $\Omega_{\alpha,\tau}$
([[def-holomorphic-kam-domain-and-diophantine-labels]]), and put

$$\mu:=\tau+3n+2 .$$

Let $0<r\le1$, $s>0$, $h>0$, $K\ge0$, $0<\sigma\le\min(1,s/8)$,
$0<\eta\le1/8$, and suppose
$$h\le\frac{\alpha}{2K^{\tau+1}},\qquad K\sigma\ge1,\qquad \eta\le\sigma .$$
Let $P$ be holomorphic on $D_{r,s,h}(\Omega_{\alpha,\tau})$ with
$|P|_{r,s,h}\le\varepsilon$, put
$$E:=\frac{\varepsilon}{\alpha r\sigma^{\mu}},$$
and suppose $E\le c$, where $c=c(n,\tau)\in(0,1]$ is a constant small enough that
the finite estimates of the proof below hold; every constant $C$ below may depend
on $n,\tau$ but not on $\varepsilon$, $r$, $\sigma$, $h$, $K$, $\eta$ or $\nu$.
Define $Q$ and $R=T_KQ$ as in
[[lem-kam-affine-taylor-fourier-truncation]], let

$$\widehat R:=[R]$$

be the angular mean (affine in $I$), and let $F$ be the unique zero-mean
holomorphic solution on $D_{r,s-2\sigma,h}(\Omega_{\alpha,\tau})$ of

$$\nu\cdot\partial_\vartheta F=R-\widehat R$$

given by [[lem-truncated-homological-equation-with-conservative-loss]]. Write
$N(I,\vartheta,\nu):=\nu\cdot I$ and $X_F=(-F_\vartheta,F_I)$ for the Hamiltonian
field of $F$ with respect to $\omega=\sum_id\vartheta_i\wedge dI_i$
([[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]]), and put
$W:=\operatorname{diag}(r^{-1}I_n,\sigma^{-1}I_n)$ on $\mathbb C^n\times\mathbb C^n$.
Then:

1. **The generator.** $F$ is holomorphic on $D_{r,s-2\sigma,h}(\Omega_{\alpha,\tau})$,
   affine in $I$, and $F_I=\partial_IF$ does not depend on $I$; moreover
$$r^{-1}|F_\vartheta|_{r/2,s-5\sigma,h}+\sigma^{-1}|F_I|_{r/2,s-4\sigma,h}\le C E ,$$
   and the exact identity $\{F,N\}+\widehat R=R$ holds on that domain, where
   $\{F,N\}=\nu\cdot\partial_\vartheta F$.
2. **The flow.** For every $\nu\in O_h(\Omega_{\alpha,\tau})$ the autonomous
   system $z'=X_F(z,\nu)$ has a local flow
   ([[def-cm-local-flow-of-an-autonomous-system]]) whose time-one map $\Phi_\nu$
   is defined on all of $B_{r/2}\times S_{s-8\sigma}$; the maps $\Phi_\nu$ assemble
   into a single holomorphic map
$$\Phi:D_{r/2,s-8\sigma,h}(\Omega_{\alpha,\tau})\longrightarrow D_{3r/4,s-7\sigma,h}(\Omega_{\alpha,\tau}),\qquad \Phi(I,\vartheta,\nu)=\Phi_\nu(I,\vartheta),$$
   which is affine in $I$ and has $\vartheta$-component independent of $I$;
   moreover $\Phi(I,\vartheta+2\pi k,\nu)=\Phi(I,\vartheta,\nu)+(0,2\pi k)$ for
   every $k\in\mathbb Z^n$ and every point of
   $D_{r/2,s-8\sigma,h}(\Omega_{\alpha,\tau})$; on real points $\Phi$ preserves
   $\omega$ wherever it is defined. Its weighted
   distance from the identity and its weighted derivative satisfy
$$|W(\Phi-\mathrm{id})|_{r/2,s-8\sigma,h}\le CE,\qquad \bigl|W(D\Phi-\mathrm{id})W^{-1}\bigr|_{r/2,s-8\sigma,h}\le CE,$$
   and, on the smaller parameter neighbourhood with margin $h/2$,
$$h\,\bigl|W(\partial_{\nu_j}\Phi)\bigr|_{r/2,s-8\sigma,h/2}\le CE \qquad(j=1,\dots,n).$$
3. **The transformed perturbation.** With $\chi_t:=(1-t)\widehat R+tR$ and
   $\Phi_t$ the flow of $X_F$ at time $t$, the exact identity
$$(N+P)\circ\Phi=N+\widehat R+P_+,\qquad P_+:=(P-R)\circ\Phi+\int_0^1\{\chi_t,F\}\circ\Phi_t\,dt +\int_0^1\{P-R,F\}\circ\Phi_t\,dt$$
   holds on $D_{r/2,s-8\sigma,h}(\Omega_{\alpha,\tau})$, and
$$|P_+|_{r/2,s-8\sigma,h}\le C\bigl[E+\eta^2+\sigma^{-n}e^{-\sigma K/2}\bigr]\varepsilon .$$
4. **The frequency shift.** The vector
   $v(\nu):=\partial_I\widehat R(0,\nu)=([R_1],\dots,[R_n])(\nu)\in\mathbb C^n$,
   where $\widehat R(I,\nu)=[R_0](\nu)+\sum_j[R_j](\nu)I_j$, is holomorphic on
   $O_h(\Omega_{\alpha,\tau})$ and satisfies
$$|v|_{O_h(\Omega_{\alpha,\tau})}\le B:=CE,\qquad |Dv|_{O_{h/2}(\Omega_{\alpha,\tau})}\le \frac{2nB}{h} .$$

## Facts & Assumptions

**Given:** The dimension $n$, exponent $\tau>n-1$, constant $\alpha>0$, label set
$\Omega_{\alpha,\tau}$, the widths $r,s,h$, cutoff $K$, margins $\sigma,\eta$, the
perturbation $P$ with $|P|_{r,s,h}\le\varepsilon$, $E=\varepsilon/(\alpha r\sigma^\mu)$
and $E\le c$.

[F1] Definitions and notation: $D_{r,s,h}$, holomorphy, sup-norms, Fourier
coefficients, means, the cutoff, the label set and the Diophantine condition, the
standard two-form and Hamiltonian field $X_H=(H_I,-H_\vartheta)$, the Poisson
bracket $\{f,g\}=f_\vartheta\cdot g_I-f_I\cdot g_\vartheta$
([[def-holomorphic-kam-domain-and-diophantine-labels]],
[[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]],
[[def-cm-phase-domain-and-standard-symplectic-two-form]]).

[F2] The affine-splitting and truncation estimates of
[[lem-kam-affine-taylor-fourier-truncation]]: $|Q|_{r,s,h}\le(n+1)\varepsilon$,
$|P-Q|_{2\eta r,s,h}\le C\eta^2\varepsilon$,
$|R|_{r,s-2\sigma,h}\le C_n\sigma^{-n}\varepsilon$,
$\max_j|R_j|_{r,s-2\sigma,h}\le C_n\sigma^{-n}\varepsilon/r$,
$|\partial_{\vartheta_i}R|_{r,s-2\sigma,h}\le C_n\sigma^{-n-1}\varepsilon$ and
$|Q-R|_{r,s-2\sigma,h}\le C_n\sigma^{-n}e^{-\sigma K/2}\varepsilon$.

[F3] The homological equation of
[[lem-truncated-homological-equation-with-conservative-loss]] in the truncated
case, with data $v=R-\widehat R$ of norm at most $C_n\sigma^{-n}\varepsilon$ on
$D_{r,s-2\sigma,h}$ (its Fourier support lies in $|k|_1\le K$ and
$h\le\alpha/(2K^{\tau+1})$): it gives the unique zero-mean holomorphic solution
$F$ of $\nu\cdot\partial_\vartheta F=R-\widehat R$ and, for every applicable
margin $\delta$, the bounds
$$|F|\le\frac{C_{n,\tau}}{\alpha}\delta^{-(\tau+n)}\cdot C_n\sigma^{-n}\varepsilon,\qquad |\partial_{\vartheta_j}F|\le\frac{C_{n,\tau}}{\alpha}\delta^{-(\tau+n+1)}C_n\sigma^{-n}\varepsilon,\qquad |\partial_{I_j}F|\le\frac{C_{n,\tau}}{\alpha\,\delta}\delta^{-(\tau+n)}C_n\sigma^{-n}\varepsilon,$$
$$|\partial_{\vartheta_i}\partial_{\vartheta_j}F|\le\frac{C_{n,\tau}}{\alpha}\delta^{-(\tau+n+2)}C_n\sigma^{-n}\varepsilon,\qquad |\partial_{\vartheta_i}\partial_{I_j}F|\le\frac{C_{n,\tau}}{\alpha\,\delta}\delta^{-(\tau+n+1)}C_n\sigma^{-n}\varepsilon .$$

[F4] Local flow theory of a $C^1$ autonomous field: the local flow exists and is
$C^1$ on its open domain, satisfies the composition law, and the time-one map on
a ball is controlled by the Picard-Lindelof/Gronwall estimates: if
$|X|\le M_0$ and $|DX|\le L_0$ on a ball of radius $R_0$ about a point and
$M_0< R_0$, $L_0<1$, then the time-one map is defined on the ball of radius
$R_0-M_0$, moves points by at most $M_0$, and its derivative satisfies
$|D\Phi_1-\mathrm{id}|\le e^{L_0}-1$ ([[def-cm-local-flow-of-an-autonomous-system]],
[[lem-cm-continuous-dependence-on-initial-data]],
[[thm-cm-smooth-dependence-and-the-variational-equation]],
[[def-variational-equation-along-an-ode-solution]], [[thm-gronwall-integral-inequality]],
[[def-operator-norm]], [[def-metric-ball]], [[def-interval]]).

[F5] Canonicity: the local flow of a Hamiltonian vector field $X_H$ preserves
the symplectic form, $\Phi^*\omega=\omega$ wherever defined
([[thm-hamiltonian-flows-preserve-the-symplectic-form]]).

[F6] Holomorphy: a continuous complex-valued function on an open subset of
$\mathbb C^m$ that is complex differentiable in each variable separately is
holomorphic; the Wirtinger derivative of a holomorphic function along a solution
of a holomorphic ODE satisfies the linearized (variational) equation, and a
solution of a linear homogeneous ODE with zero initial datum vanishes
([[def-complex-differentiability-holomorphic-and-entire]],
[[rem-complex-euclidean-space-dictionary]],
[[thm-cm-smooth-dependence-and-the-variational-equation]]).

[F7] Differentiation along a flow and the chain rule: if $\Phi_t$ is the local flow
of the $C^1$ field $X_F$ and $\varphi$ is $C^1$ on the domain, then
$\frac{d}{dt}(\varphi\circ\Phi_t)=D\varphi(\Phi_t)\cdot X_F(\Phi_t)
=\{\varphi,F\}\circ\Phi_t$, by the chain rule for total derivatives
([[thm-chain-rule-for-total-derivatives]]).

## Proof

**Proof technique:** direct; build the generator from the homological equation,
construct its flow first on the real points and then extend holomorphically, and
differentiate the identity $(N+P)\circ\Phi_t$ along that flow to obtain the new
perturbation.

1.1 *The generator.* By [F3] with the margin $\delta:=\sigma$ applied to the data $R-\widehat R$, whose norm on $D_{r,s-2\sigma,h}$ is at most $C_n\sigma^{-n}\varepsilon$, the unique zero-mean solution $F$ exists, is holomorphic on $D_{r,s-4\sigma,h}$, and satisfies $|F|\le\frac{C}{\alpha}\sigma^{-(\tau+2n)}\varepsilon,\quad |\partial_\vartheta F|\le\frac{C}{\alpha}\sigma^{-(\tau+2n+1)}\varepsilon,\quad |\partial_IF|\le\frac{C}{\alpha r}\sigma^{-(\tau+2n)}\varepsilon$ on $D_{r,s-4\sigma,h}$, $D_{r,s-5\sigma,h}$ and $D_{r/2,s-4\sigma,h}$ respectively, with a constant $C=C(n,\tau)$. Since $R$ is affine in $I$ with $\vartheta$-independent Fourier coefficients equation (see [F2]), its Fourier coefficients are affine in $I$; solving coefficientwise shows that $F$ is affine in $I$ and that $F_I$ does not depend on $I$. In terms of $E=\varepsilon/(\alpha r\sigma^{\mu})$ and $\mu=\tau+3n+2$, $r^{-1}|F_\vartheta|\le CE\sigma^{n+1},\qquad \sigma^{-1}|F_I|\le CE\sigma^{n+1},\qquad |\partial_{\vartheta_i}\partial_{\vartheta_j}F|\le CE\,r\sigma^{n},\qquad |\partial_{\vartheta_i}\partial_{I_j}F|\le CE\sigma^{n+1},$ so the two displayed weighted bounds, and in particular the bound of clauses 1, hold for any $E\le1$. The identity $\{F,N\}=\nu\cdot\partial_\vartheta F=R-\widehat R$ is the defining equation rewritten with [F1]. This proves clause 1. [F1, F2, F3, algebra]

2.1 *Flow on real points.* Fix $\nu\in O_h$. Regarded as a real vector field on the open subset $D_{r,s-4\sigma,h}$ of $\mathbb C^{2n}\cong\mathbb R^{4n}$, the field $X_F$ is $C^1$ and, by step 1.1 and [F1], $|X_F|\le|F_\vartheta|+|F_I|\le 2CE\,\sigma^{n+1}\cdot(r+\sigma)\le 4CE\sigma,\qquad |DX_F|\le CE$ on $D_{r/2,s-4\sigma}$ (each entry of the Jacobian of $X_F=(-F_\vartheta,F_I)$ is one of the displayed second derivatives, up to constants). Choose $c$ small enough that $CE\le1/2$ and $4CE\sigma\le\sigma/2$; then [F4] with $M_0=4CE\sigma$, $L_0=CE$, $R_0=\sigma/2$ shows that for every point of $B_{r/2}\times S_{s-8\sigma}$ the time-one map exists and stays in $B_{3r/4}\times S_{s-7\sigma}$, moving the point by at most $4CE\sigma$ in the unweighted norm and having $|D\Phi_1-\mathrm{id}|\le2CE$; more precisely, the estimates of [F4] applied to the components $I$ and $\vartheta$ with the weighted norm $W$ give $|W(\Phi_1-\mathrm{id})|\le CE,\qquad |W(D\Phi_1-\mathrm{id})W^{-1}|\le CE,$ because $|F_\vartheta|\le CEr\cdot\sigma^{n+1}$ and $|F_I|\le CE\sigma\cdot\sigma^{n+1}$ control the two weighted components and the Jacobian entries are bounded by $CE$ (step 1.1). For the parameter derivative, differentiate the ODE $z'=X_F(z,\nu)$ with respect to $\nu_j$: the derivative $\partial_{\nu_j}\Phi_t$ satisfies the linearized equation with inhomogeneity $\partial_{\nu_j}X_F$ and zero initial datum, and $|\partial_{\nu_j}X_F|\le(2/h)|X_F|$ by [F2]'s Cauchy bound in $\nu$ with margin $h/2$; Gronwall ([F4]) gives $|\partial_{\nu_j}\Phi_1|\le2CE\sigma\cdot 2/h\cdot e^{CE}$, i.e. $|W(\partial_{\nu_j}\Phi_1)|\le CE/h$ after absorbing constants; equivalently $h|W\partial_{\nu_j}\Phi|\le CE$ on the smaller parameter domain $O_{h/2}$. This is clause 2's last estimate. [step 1.1, F1, F2, F4, algebra]

3.1 *Holomorphy and affine structure.* The flow constructed in step 2.1 is a $C^1$ map of the realification of $D_{r/2,s-8\sigma,h}$; it is the restriction of the unique local flow of the holomorphic field $X_F$. For each complex coordinate $z_k$ of $(I,\vartheta,\nu)$, the Wirtinger derivative $w:=\partial_{\bar z_k}\Phi_t$ is continuous, and differentiating the identity $\partial_t\Phi_t=X_F(\Phi_t,\nu)$ with respect to $\bar z_k$ gives $w'=DX_F(\Phi_t,\nu)w$ with $w(0)=\partial_{\bar z_k}\mathrm{id}=0$, because $X_F$ is holomorphic in its first argument and does not depend on $\bar z_k$ ([F6]). By uniqueness for the linear variational equation, $w\equiv0$; as this holds for every $k$ and $\Phi_t$ is continuous, $\Phi_t$ is holomorphic in $(I,\vartheta,\nu)$. The affine-in-$I$ structure and the $\vartheta$-independence of the $\vartheta$-component are inherited from the structure of $X_F$: the $\vartheta$-equation is $\vartheta'=F_I(\vartheta,\nu)$, independent of $I$, so its time-one map does not depend on $I$; the $I$-equation is $I'=-F_\vartheta(I,\vartheta,\nu)$, affine in $I$ with coefficients depending holomorphically on $(\vartheta,\nu)$, so the time-one map is affine in $I$. This proves clause 2 except for canonicity. [step 2.1, F2, F6, algebra]

3.2 *Canonicity.* On real points, $F$ is real-valued and $X_F$ is the Hamiltonian vector field of the smooth function $F$ with respect to $\omega$ ([F1]); by [F5] its local flow satisfies $\Phi_t^*\omega=\omega$ wherever defined, in particular on the real points of $D_{r/2,s-8\sigma,h}$. This completes clause 2. [step 1.1, step 2.1, F1, F5]

3.3 *Transformed Hamiltonian: the exact identity.* Let $\Phi_t$ be the flow of $X_F$ and $H:=N+P$. For a $C^1$ function $\varphi$ one has $\frac{d}{dt}(\varphi\circ\Phi_t)=\{\varphi,F\}\circ\Phi_t$ by the chain rule and [F1]; hence $H\circ\Phi=H+\int_0^1\{N+P,F\}\circ\Phi_t\,dt .$ Write $H=N+\widehat R+(P-R)+(R-\widehat R)$ and use $R-\widehat R=\{F,N\}=-\{N,F\}$: $\{N+P,F\}=\{N,F\}+\{P-R,F\}+\{R,F\} =-\bigl(R-\widehat R\bigr)+\{P-R,F\}+\{R,F\}.$ Also, for $\chi_t=(1-t)\widehat R+tR$ one has $\frac{d}{dt}(\chi_t\circ\Phi_t)=(R-\widehat R)\circ\Phi_t+\{\chi_t,F\}\circ\Phi_t$, so $\int_0^1(R-\widehat R)\circ\Phi_t\,dt=R\circ\Phi-\widehat R$. Substituting, $H\circ\Phi=N+P-\bigl(R\circ\Phi-\widehat R\bigr) +\int_0^1\bigl(\{P-R,F\}+\{R,F\}\bigr)\circ\Phi_t\,dt =N+\widehat R+(P-R)\circ\Phi+\int_0^1\{\chi_t,F\}\circ\Phi_t\,dt +\int_0^1\{P-R,F\}\circ\Phi_t\,dt,$ which is the identity of clause 3. [step 1.1, step 2.1, F1, F7, algebra]

3.4 *$2\pi$-equivariance.* For $k\in\mathbb Z^n$ the translation $T_k(I,\vartheta):=(I,\vartheta+2\pi k)$ preserves $D_{r/2,s-8\sigma,h}(\Omega_{\alpha,\tau})$ because $2\pi k$ is real, and it leaves the field invariant: $F$ is given on $D_{r,s-2\sigma,h}(\Omega_{\alpha,\tau})$ by the absolutely convergent Fourier series $\sum_{k\ne0}v_k(I,\nu)(ik\cdot\nu)^{-1}e^{ik\cdot\vartheta}$ of [[lem-truncated-homological-equation-with-conservative-loss]] clause 1, whose differentiated series for $F_\vartheta$ and $F_I$ are the same series weighted by $ik$ and by $\partial_Iv_k$, so $F$, $F_\vartheta$ and $F_I$ are unchanged under $\vartheta\mapsto\vartheta+2\pi k$ and hence $X_F(T_kz,\nu)=X_F(z,\nu)$ for every $z$ in the domain; therefore $t\mapsto T_kz(t)$ solves $z'=X_F(z,\nu)$ whenever $t\mapsto z(t)$ does, and it has initial value $T_kz(0)$, so by the uniqueness of the maximal solution through a point recorded in [F4] it equals $t\mapsto\Phi(t,T_kz(0),\nu)$ wherever the latter is defined; at $t=1$ this gives the equivariance $\Phi(I,\vartheta+2\pi k,\nu)=\Phi(I,\vartheta,\nu)+(0,2\pi k)$ of clause 2. [step 2.1, F3, F4, algebra]

4.1 *The remainder bound.* On $D_{r/2,s-8\sigma,h}$, using [F2], step 2.1 and $E\le c\le1$: $|(P-R)\circ\Phi|\le|P-Q|+|Q-R|\le C\bigl[\eta^2+\sigma^{-n}e^{-\sigma K/2}\bigr]\varepsilon .$ For the quadratic terms, $\widehat R$ is affine in $I$ with $|\partial_I\widehat R|\le C\sigma^{-n}\varepsilon/r$ ([F2] and the Cauchy bound for the mean), $R$ has $|\partial_\vartheta R|\le C\sigma^{-n-1}\varepsilon$ and $|\partial_IR|\le C\sigma^{-n}\varepsilon/r$ ([F2]), and by step 1.1 $|F_\vartheta|\le CEr\sigma^{n+1}$, $|F_I|\le CE\sigma^{n+2}$; hence $|\{\widehat R,F\}|=|\partial_I\widehat R\cdot F_\vartheta| \le\frac{C\sigma^{-n}\varepsilon}{r}\cdot CEr\sigma^{n+1}\le C\varepsilon E,$ $|\{R,F\}|\le|R_\vartheta F_I|+|R_IF_\vartheta| \le C\sigma^{-n-1}\varepsilon\cdot CE\sigma^{n+2} +\frac{C\sigma^{-n}\varepsilon}{r}\cdot CEr\sigma^{n+1}\le C\varepsilon E .$ For the last term, $|(P-R)_\vartheta|\le C|P-R|/\sigma$ and $|(P-R)_I|\le C|P-R|/r$ by the Cauchy bounds of [[lem-cauchy-fourier-and-lattice-shell-bounds]] on the retained domain, so $|\{P-R,F\}|\le C|P-R|\Bigl(\frac{|F_I|}{\sigma}+\frac{|F_\vartheta|}{r}\Bigr) \le C\bigl[\eta^2+\sigma^{-n}e^{-\sigma K/2}\bigr]\varepsilon\cdot CE/\sigma \le C\bigl[\eta^2+\sigma^{-n}e^{-\sigma K/2}\bigr]\varepsilon,$ where the last inequality uses $\eta\le\sigma$ and $E\le1$: the first factor contributes $E\eta^2/\sigma\le E\eta\le\eta^2$ and the tail contributes $E\sigma^{-n}e^{-\sigma K/2}/\sigma\le\sigma^{-n}e^{-\sigma K/2}$. Combining the three displays with the integral over $t\in[0,1]$ gives $|P_+|\le C\bigl[E+\eta^2+\sigma^{-n}e^{-\sigma K/2}\bigr]\varepsilon ,$ which is clause 3. [step 2.1, step 3.3, F2, algebra]

5.1 *The frequency shift.* $\widehat R=[R]$ is the mean of the trigonometric polynomial $R$, hence of the form $\widehat R(I,\nu)=[R_0](\nu)+\sum_{j=1}^n[R_j](\nu)I_j$ with $[R_j]$ holomorphic on $O_h$; the estimate $|[R_j]|\le C_n\sigma^{-n}\varepsilon/r$ is [F2] together with the elementary bound $|[R_j]|\le\max|R_j|$. By the Cauchy bound for holomorphic functions of $\nu$ on the domain with margin $h/2$, each entry of $Dv$ is at most $(2/h)\max_j|[R_j]|\le2B/h$, so the row-sum operator bound gives $|Dv|\le2nB/h$ on $O_{h/2}$. This proves clause 4. [step 1.1, F2, F3, algebra] ∎

## Remarks

- **Where the smallness is used.** The step constant $c$ only has to dominate the
  finitely many constants produced by the Cauchy and flow estimates; no
  quantitative value of $c$ is asserted. All conclusions are uniform in
  $\nu\in O_h(\Omega_{\alpha,\tau})$.
- **Conservatism.** The flow is constructed by the standard Picard-Lindelof and
  Gronwall estimates first on real points, and holomorphy is obtained from the
  variational equation for the Wirtinger derivatives; no separate
  holomorphic-flow theorem is invoked.
