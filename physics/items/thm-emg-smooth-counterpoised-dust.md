---
id: thm-emg-smooth-counterpoised-dust
kind: theorem
title: "Exact smooth superharmonic counterpoised dust family"
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
proof_strategy: direct
deps:
  - def-emg-conformastatic-chart-data
  - lem-emg-conformastatic-chart-is-lorentzian
  - lem-emg-conformastatic-curvature
  - def-emg-matter-formal-systems
  - def-emg-explicit-power-regimes
  - def-countable-choice
  - thm-emg-charged-dust-projection
  - thm-emg-selected-matter-energy-conditions
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - thm-algebra-of-derivatives
  - thm-local-coordinate-formula-for-the-exterior-derivative
  - thm-the-exterior-derivative-squares-to-zero
dependency_roles:
  def-emg-conformastatic-chart-data: mathematical-premise
  lem-emg-conformastatic-chart-is-lorentzian: mathematical-premise
  lem-emg-conformastatic-curvature: mathematical-premise
  def-emg-matter-formal-systems: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-emg-charged-dust-projection: mathematical-premise
  thm-emg-selected-matter-energy-conditions: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-local-coordinate-formula-for-the-exterior-derivative: mathematical-premise
  thm-the-exterior-derivative-squares-to-zero: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3, equations (3.65)–(3.67), (3.90), (3.92), (3.95)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Independent coordinate curvature convention and contractions; all conformastatic Maxwell, dust, and Einstein components are checked locally."
    - title: "David Tong, General Relativity, full author-hosted lecture notes, Michaelmas 2019, §§3.2.2 and 3.4.1"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Independent coordinate curvature and Einstein-tensor conventions; the coupled matter calculation is local."
    - title: "Reinhard Meinel and Moritz Hütten, On the black hole limit of electrically counterpoised dust configurations, arXiv:1105.3807v3 (2011), §2, equations (1)–(7), PDF pp. 2–3"
      url: "https://arxiv.org/pdf/1105.3807"
      locator: "The selected conformastatic charged-dust ansatz and formal field equations; the source's c=G=1 Gaussian units and sign conventions are not imported."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Assume $\mathrm{AC}_\omega$ as in [[def-countable-choice]], as required by the currently inspected general geometric convention in [[def-emg-matter-formal-systems]]. Let $D\subseteq\mathbb R^3$ be open and let $H\in C^\infty(D,(0,\infty))$ satisfy $\Delta H\le0$. Use $\mathcal M=\mathbb R\times D$, its coordinate orientation, and the time orientation for which $n:=H\partial_0$ is future, all as fixed in [[def-emg-conformastatic-chart-data]] and verified in [[lem-emg-conformastatic-chart-is-lorentzian]]. Use the metric $g_H$ and coordinates $x^0=ct,x^i$ of [[def-emg-conformastatic-chart-data]]. Fix formal constants $c,\mu_0,G_N>0$, put $\epsilon_0=(\mu_0c^2)^{-1}$, $\kappa=8\pi G_N/c^4$, and define the positive charge-to-mass parameter $Q_s:=\sqrt{4\pi\epsilon_0G_N}$ using the positive root of [[def-emg-explicit-power-regimes]]. For a sign $s\in\{-1,+1\}$ set
$$A:=s\frac{c}{Q_s}H^{-1}dx^0,\qquad F:=dA,\qquad U:=cH\partial_0,\qquad \rho:=-\frac{c^2\Delta H}{4\pi G_NH^3},\qquad \sigma:=sQ_s\rho,\qquad j:=\sigma U,\qquad T_m^{ab}:=\rho U^aU^b.$$
Let $a^b:=U^a\nabla_aU^b$ be the covariant four-acceleration of the timelike field $U$. Then $U=cn$ is future timelike with $g_H(U,U)=-c^2$, all displayed fields are smooth, and $\rho\ge0$. On $\{\rho>0\}$ the charge-to-mass ratio is $\sigma/\rho=sQ_s$; no ratio is defined by division at $\rho=0$. The tuple satisfies the formal sourced Maxwell equations $dF=0$, $\nabla_aF^{ab}=-\mu_0j^b$, the dust matter exchange equation $\nabla_aT_m^{ab}=F^b{}_cj^c$, and the formal Einstein equation with $\Lambda=0$,
$$G_{ab}=\kappa\bigl(T_{m,ab}+T^{\mathrm{EM}}_{ab}\bigr),$$
where $T^{\mathrm{EM}}$ is exactly the tensor of [[def-emg-matter-formal-systems]]. Its total stress satisfies WEC, NEC, SEC, and DEC. The coordinate four-acceleration of the static dust field is $a^0=0$, $a^i=-c^2H_i/H^3$, and its Lorentz force per unit mass balances it wherever $\rho>0$; the undivided exchange identity also holds where $\rho=0$.

This is a conditional mathematical solution family for the stated formal equations. It makes no claim of physical realization, equilibrium stability, or coupled-field existence for arbitrary initial data.

## Facts & Assumptions

**Given:** The open set $D$, smooth positive $H$ with $\Delta H\le0$, constants $c,\mu_0,G_N>0$, sign $s\in\{-1,+1\}$, and the coordinate data of the Statement.

[F1] [[def-emg-matter-formal-systems]] defines the pointwise formal sourced Maxwell equations $dF=0$, $\nabla_aF^{ab}=-\mu_0j^b$, the matter-exchange equation $\nabla_aT_m^{ab}=F^b{}_cj^c$, and the formal Einstein equation $G_{ab}+\Lambda g_{ab}=\kappa(T_{m,ab}+T^{\mathrm{EM}}_{ab})$. It also defines a local potential by $dA=F$. This current draft definition is used only at these exact equation interfaces.

[F2] [[def-emg-explicit-power-regimes]] defines the unique positive square root and rational powers for positive real bases. Here $Q_s$ is the unique positive root of $4\pi\epsilon_0G_N$, and negative integer powers of $H$ mean reciprocals.

[F3] [[thm-emg-charged-dust-projection]] defines $a^b:=U^a\nabla_aU^b$; on a region where $\rho>0$, the dust exchange equation is equivalent to continuity $\nabla_a(\rho U^a)=0$ and force balance $\rho a^b=\sigma F^b{}_cU^c$. Its statement makes no division-based conclusion at $\rho=0$. This is the current draft theorem and is used only on its stated positive-density domain.

[F4] [[thm-emg-selected-matter-energy-conditions]]: the Maxwell tensor and a charged-dust tensor with $\rho\ge0$ satisfy WEC, NEC, SEC, and DEC, and their sum retains each condition. This is the current draft theorem; no general matter positivity is assumed.

[F5] [[def-emg-conformastatic-chart-data]] defines $\mathcal M$, $g_H$, $H_i$, $q$, and $\Delta H$, with coordinate orientation and time orientation selected by $n=H\partial_0$.

[F6] [[lem-emg-conformastatic-chart-is-lorentzian]] gives the inverse metric, nondegeneracy, the future unit vector $n=H\partial_0$, the orthonormal spatial frame $e_i=H^{-1}\partial_i$, and their orientation.

[F7] [[lem-emg-conformastatic-curvature]] gives the coordinate connection and the arbitrary-positive-$H$ Ricci, scalar, and Einstein table in the curvature convention stated there.

[F8] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]: for a smooth nondegenerate metric, there is a unique torsion-free metric-compatible connection with the Christoffel formula in the statement; its induced tensor derivative has the displayed component rule, including $\nabla_cF^{ab}=\partial_cF^{ab}+\Gamma^a{}_{dc}F^{db}+\Gamma^b{}_{dc}F^{ad}$.

[F9] [[thm-algebra-of-derivatives]]: differentiable real functions obey the product rule, so differentiating $H\cdot H^{-1}=1$ gives the reciprocal derivative used below.

[F10] [[thm-local-coordinate-formula-for-the-exterior-derivative]]: for a coordinate one-form $A=A_a\,dx^a$, $(dA)_{ab}=\partial_aA_b-\partial_bA_a$.

[F11] [[thm-the-exterior-derivative-squares-to-zero]]: for every smooth differential form $A$, $d(dA)=0$.

[F12] [[def-emg-matter-formal-systems]] defines $T_{\mathrm{EM}}^{ab}=\mu_0^{-1}(F^{ac}F^b{}_c-\tfrac14g^{ab}F_{cd}F^{cd})$ and in a positively oriented orthonormal tetrad uses $F_{0i}=-E_i/c$.

[F13] [[def-emg-matter-formal-systems]] defines charged dust by $T_m^{ab}=\rho U^aU^b$ and $j^a=\sigma U^a$, with $\rho,\sigma\in C^1$, $\rho\ge0$, and future-timelike $U$ satisfying $g(U,U)=-c^2$.

[A1] The adopted background includes only $\mathrm{AC}_\omega$ as stated in [[def-countable-choice]]. The explicit global coordinates on $\mathbb R\times D$ and every finite component calculation below use no stronger choice principle.

## Proof

1.1 Since $H$ is smooth and positive, its reciprocal is smooth by [[def-emg-conformastatic-chart-data]]; $\epsilon_0>0$ and $G_N>0$ make the positive root $Q_s$ well-defined by [F2]. The chart tensor is a smooth Lorentzian metric with the stated orientation by [F5] and [F6]. Thus $U=cn$ is future timelike, and the formulas define smooth $A,F,U,\rho,\sigma,j,T_m$; they have the charged-dust form [F13], and $\Delta H\le0$ gives $\rho\ge0$. [given, F2, F5, F6, F13, A1, algebra]

1.2 Write $f=H^{-1}$. Differentiating $Hf=1$ in each spatial coordinate and using [F9] gives $\partial_i f=-H_i/H^2$. The coordinate formula [F10] therefore gives the only nonzero covariant components $F_{i0}=-s(c/Q_s)H_i/H^2$ and $F_{0i}=s(c/Q_s)H_i/H^2$. Raising indices with [F6] gives $F^{i0}=s(c/Q_s)H_i/H^2$ and $F^{0i}=-F^{i0}$; all $F^{ij}$ vanish. Finally [F11] gives $dF=d(dA)=0$. [given, F1, F6, F9, F10, F11, algebra]

1.3 The connection used in the formal equations is the unique torsion-free metric-compatible connection by [F8]. The coefficients and compatibility of the local connection in [F7] were established in that item, so the two connections coincide; hence its component table may be used in the sourced equations below. [F7, F8]

2.1 By the tensor derivative formula [F8], $\nabla_aF^{ab}=\partial_aF^{ab}+\Gamma^a{}_{ac}F^{cb}+\Gamma^b{}_{ac}F^{ac}$, and the final term is zero because $\Gamma^b{}_{ac}$ is symmetric in $a,c$ while $F^{ac}$ is antisymmetric. From [F7], $\Gamma^a{}_{ai}=2H_i/H$ and $\Gamma^a{}_{a0}=0$. Hence $\nabla_aF^{a0}=\partial_i\left(s\frac c{Q_s}\frac{H_i}{H^2}\right)+\frac{2H_i}{H}s\frac c{Q_s}\frac{H_i}{H^2}=s\frac c{Q_s}\frac{\Delta H}{H^2}$, because the two terms proportional to $q/H^3$ cancel. [given, F7, F8, step 1.2, algebra]

2.2 The field $U=cH\partial_0$ has $g(U,U)=-c^2$ by [F13]. Its divergence is $\nabla_a(\rho U^a)=\partial_0(\rho cH)+\Gamma^a{}_{a0}\rho cH=0$, since all fields are static. Its acceleration is $a^i=(cH)^2\Gamma^i{}_{00}=-c^2H_i/H^3$ and $a^0=0$. Moreover $F^i{}_0=g^{ij}F_{j0}=-s(c/Q_s)H_i/H^4$, hence $\sigma F^i{}_cU^c=sQ_s\rho F^i{}_0cH=-\rho c^2H_i/H^3=\rho a^i$; the temporal components of both sides are zero. This undivided relation holds at every point, including $\rho=0$. [given, F6, F7, F8, F13, step 1.2, algebra]

2.3 In the positively oriented orthonormal frame $n=H\partial_0$, $e_i=H^{-1}\partial_i$ from [F6], the electric components are $E_i=cF(e_i,n)=-s c^2H_i/(Q_sH^2)$ and the magnetic components vanish because $F_{ij}=0$. In that frame $F_{\hat0\hat i}=-E_i/c$, $F_{cd}F^{cd}=-2|E|^2/c^2$, $F^{\hat0 c}F^{\hat0}{}_c=|E|^2/c^2$, and $F^{\hat i c}F^{\hat j}{}_c=-E_iE_j/c^2$. Substitution into the stress-tensor formula [F12] yields $T_{\mathrm{EM}}^{\hat0\hat0}=\frac{\epsilon_0|E|^2}{2}=\frac{\epsilon_0c^4q}{2Q_s^2H^4}$, $T_{\mathrm{EM}}^{\hat0\hat i}=0$, and $T_{\mathrm{EM}}^{\hat i\hat j}=\frac{\epsilon_0c^4}{2Q_s^2H^4}(\delta_{ij}q-2H_iH_j)$. Using $\kappa=8\pi G_N/c^4$ and $Q_s^2=4\pi\epsilon_0G_N$ gives $\kappa T_{\mathrm{EM}}^{\hat0\hat0}=q/H^4$ and $\kappa T_{\mathrm{EM}}^{\hat i\hat j}=(\delta_{ij}q-2H_iH_j)/H^4$. [given, F2, F6, F12, step 1.2, algebra]

3.1 The right side of the time component of the sourced equation [F1] is $-\mu_0j^0=-\mu_0sQ_s\rho cH=s\mu_0Q_sc^3\Delta H/(4\pi G_NH^2)$ by the definitions in the Statement. The definitions give $Q_s^2=4\pi G_N/(\mu_0c^2)$ by [F2], so $\mu_0Q_sc^3/(4\pi G_N)=c/Q_s$; this agrees with step 2.1. For each spatial $i$, $F^{0i}$ is static, $F^{ji}=0$, $\Gamma^a{}_{a0}=0$, and the symmetric-connection contraction is zero, so $\nabla_aF^{ai}=0=-\mu_0j^i$. Thus all sourced Maxwell components hold. [given, F1, F2, F13, step 2.1, algebra]

3.2 On the open set $\{\rho>0\}$, step 2.2 verifies the two equivalent conditions in [F3], so the matter exchange equation [F1] follows there. At a point with $\rho=0$, the already verified divergence in step 2.2 makes $U^b\nabla_a(\rho U^a)=0$, while $\rho a^b=0$ and $\sigma F^b{}_cU^c=0$ because $\sigma=sQ_s\rho=0$ by [F13]. The product rule $\nabla_a(\rho U^aU^b)=U^b\nabla_a(\rho U^a)+\rho a^b$ therefore proves the exchange equation on the zero-density set too. [given, F1, F3, F8, F13, step 2.2, algebra]

3.3 In the same frame, $T_m^{\hat0\hat0}=\rho c^2$ and $T_m^{\hat0\hat i}=T_m^{\hat i\hat j}=0$ by [F13], so $\kappa T_m^{\hat0\hat0}=8\pi G_N\rho/c^2=-2\Delta H/H^3$ by the density in the Statement. Consequently the total components are $\kappa(T_m+T_{\mathrm{EM}})^{\hat0\hat0}=(q-2H\Delta H)/H^4$ and $\kappa(T_m+T_{\mathrm{EM}})^{\hat i\hat j}=(\delta_{ij}q-2H_iH_j)/H^4$, with zero mixed components. In an orthonormal frame these numerical values equal the corresponding covariant components (the two time-index signs cancel), and they are exactly $G(n,n)$, $G(e_i,e_j)$ and $G(n,e_i)$ from [F7]. Thus the formal Einstein equation [F1] holds componentwise. [given, F1, F7, F13, step 2.3, algebra]

4.1 Since $\rho\ge0$, [F4] applies to the Maxwell and dust tensors [F12, F13] separately and states that their sum satisfies WEC, NEC, SEC, and DEC. This is a conditional mathematical consequence of the formal model equations and the pointwise tensor definitions; it is not an empirical claim. [given, F4, F12, F13, step 1.1, step 3.3] ∎

## Remarks

The calculation checks every component of the formal Maxwell, dust-exchange, and $\Lambda=0$ Einstein equations. At $\Delta H=0$, $\rho=\sigma=0$ and the formulas reduce to the source-free Maxwell branch without division by the density. The result does not supply PDE existence, stability, or a physical postulate.
