---
id: pthm-em-rl-lc-dynamics
kind: physics-theorem
title: "Restricted RL decay and LC oscillation under the adopted circuit model"
domain: physics
status: published
origin: session
dependency_level: 21
proof_strategy: direct
deps:
  - post-em-circuit-approximation
  - pthm-em-inductor-energy
  - pthm-em-capacitance-energy
  - def-em-si-conventions
  - def-interval
  - def-first-order-ode-initial-value-problem-and-solution
  - thm-first-order-linear-ode-integrating-factor
  - thm-algebra-of-continuous-functions
  - thm-algebra-of-derivatives
  - def-complex-exponential
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann
  - thm-algebra-of-complex-derivatives
  - thm-chain-rule-for-complex-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-eulers-formula
  - thm-complex-trigonometric-hyperbolic-dictionary
  - cor-zero-derivative-implies-constant
  - def-countable-choice
  - def-axiom-of-choice
dependency_roles:
  post-em-circuit-approximation: physical-assumption
  pthm-em-inductor-energy: physical-result
  pthm-em-capacitance-energy: physical-result
  def-em-si-conventions: formulation-prerequisite
  def-interval: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  thm-first-order-linear-ode-integrating-factor: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann: mathematical-premise
  thm-algebra-of-complex-derivatives: mathematical-premise
  thm-chain-rule-for-complex-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-eulers-formula: mathematical-premise
  thm-complex-trigonometric-hyperbolic-dictionary: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Richard Fitzpatrick, Classical Electromagnetism: An intermediate level course (University of Texas at Austin; complete course book, 364 pp.)"
      url: http://www.physics.ntua.gr/ph03/doc/Fitzpatrick.R.@.Classical.Electromagnetism.pdf
      locator: '§7.5-7.6 printed pp. 225-234 (the RL rise $V=L\,\mathrm dI/\mathrm dt+RI$, the LCR circuit equation $V=IR+L\,\mathrm dI/\mathrm dt+\int I\,\mathrm dt/C$ with the ideal inductor and capacitor relations and resonance at $\omega=1/\sqrt{LC}$); read in the fetched complete 364-page course book.'
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: '§7.2.3 printed pp. 310-317 (the battery-plus-RL circuit solution $I(t)=\frac{\mathcal E_0}{R}+k\mathrm e^{-Rt/L}$ with time constant $\tau=L/R$); read in the stamped 596-page scan.'
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (Lent Term 2015, 236 pp.)"
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: '§4.1.3 printed pp. 74-77 (the resistance relation $\mathcal E=IR$ as an additional material input, and the sliding-bar example solved with Ohm''s law); read in the retained complete text of the 236-page printing.'
physical_scope: 'Conditional scalar RL/LC dynamics of the adopted lumped model, with arbitrary positive model parameters, endpoint intervals and explicit singleton candidate jets retained. Algebraic bookkeeping is choice-free; the optional identification with a specified geometric capacitor $C=C_{11}$ carries full AC and the bounded smooth conductor hypotheses of its supplier, and the frozen magnetic realization separately carries the compact-profile and $\mathrm{AC}_\omega$ premises of the linkage theorem. Neither frozen realization is a time-dependent full Maxwell solution; no radiation or distributed effect is included.'
---

## Statement

Assume the lumped circuit model and its units as in [[post-em-circuit-approximation]] and [[def-em-si-conventions]]. Let $J\subseteq\mathbb R$ be an interval ([[def-interval]]) and let $t_0\in J$. For a nondegenerate $J$, derivatives are domain-relative, with one-sided values at included endpoints, in the sense of [[def-first-order-ode-initial-value-problem-and-solution]]; the functions constructed below also admit the stated $C^k$ open-neighbourhood extensions. If $J=\{t_0\}$, the formulas specify the initial values and the jets of the explicitly constructed extensions below, rather than an intrinsic derivative of a singleton restriction. The RL solution, the LC candidate and the bookkeeping-energy algebra use no choice principle. Only the optional geometric capacitor identification in (b) assumes full Axiom of Choice ([[def-axiom-of-choice]]) and its $\mathrm{AC}_\omega$ consequence ([[def-countable-choice]]), exactly as [[pthm-em-capacitance-energy]] requires. The inductive energy is that of [[pthm-em-inductor-energy]].

(a) [RL circuit] Let $L>0$ and $R\ge0$ be constants and let $V:J\to\mathbb R$ be continuous. Then the initial value problem
$$L\dot I(t)+R\,I(t)=V(t),\qquad I(t_0)=I_0\in\mathbb R,$$
has exactly one $C^1$ solution on every nondegenerate $J$, namely
$$I(t)=\exp\!\Bigl(-\frac{R(t-t_0)}{L}\Bigr)\Bigl[I_0+\frac1L\int_{t_0}^{t}\exp\!\Bigl(\frac{R(s-t_0)}{L}\Bigr)V(s)\,ds\Bigr],$$
and along it the inductive bookkeeping energy satisfies the power identity
$$\frac{\mathrm d}{\mathrm dt}\Bigl(\frac12LI(t)^2\Bigr)=L\dot I(t)I(t)=V(t)I(t)-R\,I(t)^2 ,$$
i.e. the terminal power splits into the rate of change of the inductive energy and the Ohmic term $RI^2$. (For $R=0$ the same formula reduces to $I=I_0+L^{-1}\int_{t_0}^tV$.) For $J=\{t_0\}$ its unique restriction is $I(t_0)=I_0$; the canonical extension obtained using the constant source $V(t_0)$ has jet $\dot I(t_0)=(V(t_0)-RI_0)/L$ and satisfies the same power algebra. No uniqueness of arbitrary extension germs is asserted.

(b) [LC oscillation] Let $L>0$, $C>0$ and set $\Omega:=(LC)^{-1/2}>0$, $z_0:=Q_0-\mathrm i\,I_0/\Omega$, $w(t):=z_0\exp(\mathrm i\Omega(t-t_0))$ with the complex exponential of [[def-complex-exponential]], and $Q(t):=\operatorname{Re}w(t)$. Then $Q$ is of class $C^2$ on $J$, $Q(t_0)=Q_0$, $Q'(t_0)=I_0$, and
$$L\,Q''(t)+\frac{Q(t)}{C}=0\qquad\text{on }J ;$$
equivalently, with the real trigonometric functions of [[thm-eulers-formula]],
$$Q(t)=Q_0\cos\bigl(\Omega(t-t_0)\bigr)+\frac{I_0}{\Omega}\sin\bigl(\Omega(t-t_0)\bigr).$$
Moreover the total bookkeeping energy
$$E(t):=\frac12L\,Q'(t)^2+\frac{Q(t)^2}{2C}$$
satisfies $E'(t)=Q'(t)\bigl(LQ''(t)+Q(t)/C\bigr)=0$ on $J$, hence $E$ is constant with value $\frac12LI_0^2+\frac{Q_0^2}{2C}$: the two terms are the adopted capacitive and inductive bookkeeping energies, the latter as in [[pthm-em-inductor-energy]](a), so in the lossless loop their sum is conserved. For the additional geometric identification, explicitly choose the fixed compact separated conductor arrangement of [[pthm-em-capacitance-energy]] with bounded smooth ambient domain, connected vacuum, grounded outer boundary, zero volume source and its unit-Dirichlet solutions; drive only conductor 1 and ground the others, set the circuit parameter $C$ equal to that arrangement's $C_{11}>0$, and at each time set $V_1=Q/C_{11}$. Under full AC that supplier gives the frozen electrostatic field energy $Q^2/(2C_{11})$. An arbitrary declared $C>0$ is model data and is not automatically the capacitance of a particular arrangement. Any magnetic field-energy identification likewise requires the extra smooth-profile linkage realization of [[pthm-em-inductor-energy]](b), under its $\mathrm{AC}_\omega$ hypothesis. Neither frozen realization is an asserted time-dependent full Maxwell solution. At a singleton time the entire LC candidate supplies the jets $\dot Q=I_0$, $\ddot Q=-Q_0/(LC)$ and the same constant energy.

(c) [Scope] both statements are consequences of the expressly adopted circuit reduction, with the sign conventions and relations of [[post-em-circuit-approximation]]; they assert no general network completeness, no derivation from the full time-dependent Maxwell system, no radiation or distributed-element effect and no empirical claim.

## Facts & Assumptions

**Given:** Assume the lumped circuit data of [[post-em-circuit-approximation]] and the units of [[def-em-si-conventions]], an interval $J$ with $t_0\in J$, constants $L>0$, $R\ge0$ in (a) and $C>0$ in (b), a continuous source $V:J\to\mathbb R$, and the initial data $I_0,Q_0\in\mathbb R$. For clause (b)'s geometric identification assume full $\mathrm{AC}$ with its $\mathrm{AC}_\omega$ consequence.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]]).

[A2] Countable Choice, written $\mathrm{AC}_\omega$, states that every sequence of nonempty sets has a choice function. ([[def-countable-choice]]).

[F1] The adopted lumped model carries the Faraday branch relation $V=L\dot I$ for an inductive branch, the capacitive branch relation $V=C^{-1}Q$ (in the scalar case $V=Q/C$), the resistive branch relation $V=RI$ as the circuit form of the Ohmic branch of the material model, and Kirchhoff's loop voltage balance around each independent loop; the matrices and terminal data are declared model data, not derived from the vacuum Maxwell equations. ([[post-em-circuit-approximation]]).

[F2] A subset of $\mathbb R$ is an interval when it has one of the nine order-convex forms of the definition; in particular intervals are order-convex, nondegenerate intervals have at least two elements, and a nondegenerate interval contains the two-point set $\{u,v\}$ for suitable $u<v$. ([[def-interval]]).

[F3] Let $I\subseteq\mathbb R$ be order-convex with at least two elements, let $x_0\in I$ and let $p,q:I\to\mathbb R$ be continuous. The initial value problem $y'+py=q$, $y(x_0)=y_0$, has exactly one solution on $I$, namely $y(x)=\exp(-P(x))\left(y_0+\int_{x_0}^x\exp(P(t))q(t)\,dt\right)$ with $P(x)=\int_{x_0}^xp(t)\,dt$. ([[thm-first-order-linear-ode-integrating-factor]]).

[F4] A solution of the first-order system $x'=F(t,x(t))$ with $x(t_0)=x_0$ on an interval $I$ is a function $x:I\to\mathbb R^n$ with $t_0\in I$, differentiable on $I$ in the domain-relative sense, endpoints of $I$ using one-sided, domain-relative derivatives, and satisfying the equation and initial condition. ([[def-first-order-ode-initial-value-problem-and-solution]]).

[F5] If $f,g$ are differentiable at a point of their common domain and $\alpha\in\mathbb R$, then $f+g$, $\alpha f$ and $fg$ are differentiable there with the sum, scalar and product rules; in particular $\frac{\mathrm d}{\mathrm dt}\frac12Lf(t)^2=Lf(t)f'(t)$. ([[thm-algebra-of-derivatives]]).

[F6] Sums, scalar multiples, products, absolute values and (where defined) quotients of continuous functions are continuous, and every constant function and the identity are continuous. ([[thm-algebra-of-continuous-functions]]).

[F7] The complex exponential is $\exp z=\sum_{n\ge0}z^n/n!$, convergent for every $z\in\mathbb C$. ([[def-complex-exponential]]).

[F8] The complex exponential is entire and $\exp'(z)=\exp z$ for every $z\in\mathbb C$. ([[thm-complex-exponential-is-entire-with-derivative-itself]]).

[F9] For $U\subseteq\mathbb C$ open and $f:U\to\mathbb C$, the following are equivalent: $f$ is complex differentiable at $a$; under $\mathbb C\cong\mathbb R^2$ the map $f$ is real totally differentiable at $a$ and $Df(a)$ is multiplication by a complex number; and the Cauchy--Riemann equations hold at $a$ with real total differentiability. When these hold, $f'(a)=\partial_zf(a)$. ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

[F10] Complex derivatives obey the sum, scalar, product and quotient rules, the derivative of a constant is $0$, and the derivative of the identity is $1$. ([[thm-algebra-of-complex-derivatives]]).

[F11] If $f$ is complex differentiable at $a$ and $g$ at $f(a)$, then $g\circ f$ is complex differentiable at $a$ with $(g\circ f)'(a)=g'(f(a))f'(a)$. ([[thm-chain-rule-for-complex-derivatives]]).

[F12] If $f$ is totally differentiable at $a$ and $g$ at $f(a)$, then $g\circ f$ is totally differentiable at $a$ with $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$. ([[thm-chain-rule-for-total-derivatives]]).

[F13] For every real $\theta$, $\exp(\mathrm i\theta)=\cos\theta+\mathrm i\sin\theta$ with the real cosine and sine. ([[thm-eulers-formula]]).

[F14] The complex trigonometric functions restrict to their real power-series counterparts on the real axis. ([[thm-complex-trigonometric-hyperbolic-dictionary]]).

[F15] If $I\subseteq\mathbb R$ is order-convex, $f:I\to\mathbb R$ is continuous on $I$ and differentiable at every interior point of $I$ with $f'(x)=0$ there, then $f$ is constant on $I$. ([[cor-zero-derivative-implies-constant]]).

[F16] For clause (b) of the Statement, the inductive bookkeeping energy and its smooth-profile realization are those of [[pthm-em-inductor-energy]]: the terminal energy $\int\langle V,I\rangle$ is the change of $\frac12LI^2$ for constant symmetric $L$, and for a smooth compact conserved-profile realization it is the change of the frozen field energy $\frac1{2\mu_0}\int|B|^2$. ([[pthm-em-inductor-energy]]).

[F17] The SI units are those of the framework: $V$ in volts, $I$ in amperes, $Q$ in coulombs, $t$ in seconds, $L$ in henries and $C$ in farads. ([[def-em-si-conventions]]).

[L1] The optional geometric identification clause uses [[pthm-em-capacitance-energy]]: for the fixed compact separated conductor arrangement with bounded smooth ambient domain of its clause (f), its clause (c) gives the field-energy identity $U(V)=\frac{\varepsilon_0}{2}\int_{\Omega_v}|\nabla\varphi^V|^2\,d\lambda_3=\frac12V^{\mathsf T}CV=\frac12\sum_jV_jQ_j(V)$, valid under full AC and its stated Dirichlet solvability hypotheses, and its clause (d) gives, with only conductor $1$ driven and the others grounded, $C_{11}>0$, $Q_1=C_{11}V_1$ and the frozen electrostatic field energy $U=\frac12C_{11}V_1^2=Q_1^2/(2C_{11})$. This consumer relies on exactly that clause with $C=C_{11}$ and no independent derivation of the electrostatic energy is substituted.



## Proof

**Proof technique:** direct.

1.1 (a) Assume first that $J$ has at least two elements. Put $p:=R/L$, a constant of class $C^1$, and $q:=V/L$, continuous on $J$ by [F6]; $J$ is order-convex with at least two elements by [F2]. With $P(x):=\int_{t_0}^x p=\frac RL(x-t_0)$ one has $\exp(-P(x))=\exp\left(-\frac{R(x-t_0)}{L}\right)$ and $\exp(P(s))=\exp\left(\frac{R(s-t_0)}{L}\right)$, so the unique solution supplied by [F3] is exactly the displayed $I$. The ODE gives $\dot I=(V-RI)/L$, continuous on $J$. At each included finite endpoint extend $I$ to the outer side by the affine function with that endpoint value and slope; its derivative matches the one-sided ODE value, giving a $C^1$ extension to an open interval containing $J$. Its derivative on $J$ is the domain-relative derivative of [F4] (one-sided at included endpoints), and the uniqueness is the uniqueness assertion of [F3], which is the uniqueness of the $C^1$ solution in the sense of [F4]. If $J=\{t_0\}$, the restriction of any solution is $I_0$ by [F4]; choosing the constant extension $V\equiv V(t_0)$ on an open interval and applying the already-proved nondegenerate case there produces a $C^1$ extension of the candidate whose jet at $t_0$ is obtained by substituting $t=t_0$ into the differential equation, $\dot I(t_0)=(V(t_0)-RI_0)/L$, and no other extension is distinguished. [F2, F3, F4, F6, algebra, cases]

1.2 (b) Define the entire function $G(z):=z_0\exp(\mathrm i\Omega(z-t_0))$ on $\mathbb C$. By [F10] and [F11], applied to the affine map $z\mapsto \mathrm i\Omega(z-t_0)$ (derivative $\mathrm i\Omega$) and to [F8], $G$ is complex differentiable with $G'(z)=\mathrm i\Omega\,G(z)$ for every $z$; differentiating once more gives $G''=(\mathrm i\Omega)^2G=-\Omega^2G$. The function $w$ of the Statement is the restriction of $G$ to the real interval $J$, so by [F9] and the real chain rule [F12] it is real differentiable with $w'(t)=\mathrm i\Omega\,w(t)$ and $w''(t)=-\Omega^2w(t)$ for every $t\in J$; taking real parts, $Q=\operatorname{Re}w$ is of class $C^2$ with $Q'(t)=\operatorname{Re}w'(t)$ and $Q''(t)=\operatorname{Re}w''(t)$, because the real part is real-linear. Hence $Q''=-\Omega^2Q$, which is $LQ''+Q/C=0$ since $\Omega^2=1/(LC)$ by definition. At $t_0$: $w(t_0)=z_0$ gives $Q(t_0)=\operatorname{Re}z_0=Q_0$, and $w'(t_0)=\mathrm i\Omega z_0=\mathrm i\Omega Q_0+I_0$ gives $Q'(t_0)=I_0$. Euler's formula [F13] expands $\exp(\mathrm i\Omega(t-t_0))=\cos\Omega(t-t_0)+\mathrm i\sin\Omega(t-t_0)$, and multiplying out $w=z_0\exp(\mathrm i\Omega(t-t_0))$ gives $\operatorname{Re}w=Q_0\cos\Omega(t-t_0)+(I_0/\Omega)\sin\Omega(t-t_0)$, with the real trigonometric functions of [F13] and the real restriction recorded in [F14]. For $J=\{t_0\}$ the same formulas are evaluated at $t_0$, the entire function supplying the jets $\dot Q(t_0)=I_0$ and $\ddot Q(t_0)=-\Omega^2Q_0=-Q_0/(LC)$ by the same computation, so the LC candidate needs no separate singleton convention. [F7, F8, F9, F10, F11, F12, F13, F14, algebra, cases]

2.1 (a) Along the solution of step 1.1 the function $t\mapsto\frac12LI(t)^2$ is differentiable at every interior point of $J$ (and one-sidedly at included endpoints) by [F5], with derivative $LI\dot I$; substituting the circuit equation $L\dot I=V-RI$ gives $LI\dot I=VI-RI^2$, which is the power identity. [F1, F5, step 1.1, algebra]

2.2 (b) Define $E(t):=\frac12LQ'(t)^2+\frac{Q(t)^2}{2C}$; by [F6] and step 1.2 the functions $Q$ and $Q'$ are continuous, so $E$ is continuous on $J$, and at every interior point of $J$ the product and scalar rules of [F5] give $E'=LQ'Q''+QQ'/C=Q'(LQ''+Q/C)=0$ by the equation of step 1.2. By [F15], $E$ is constant on $J$, and its value is $E(t_0)=\frac12LI_0^2+\frac{Q_0^2}{2C}$ by the initial values of step 1.2. The first summand is the inductive bookkeeping energy of [F16], and for the optional geometric identification of the Statement the second summand is the frozen electrostatic field energy supplied by the declared clause of [L1] under full AC and the stated conductor arrangement, with $C=C_{11}$ and $V_1=Q/C_{11}$; the magnetic realization of the inductive term is the separate smooth-profile clause of [F16], under its $\mathrm{AC}_\omega$ premise. For $J=\{t_0\}$ the constant-energy display is the value at $t_0$ supplied by step 1.2, so no derivative of a singleton restriction is used. [A1, A2, F16, L1, F5, F6, F15, step 1.2, algebra, cases]

3.1 The full choice hypothesis of the geometric identification is [A1], and the inductive realization of [F16] carries the $\mathrm{AC}_\omega$ of [A2]; full AC yields it, because for a sequence $(X_n)_{n\in\mathbb N}$ of nonempty sets the family $\{X_n:n\in\mathbb N\}$ of its values consists of nonempty sets, so [A1] provides a choice function $g$ on that family and $n\mapsto g(X_n)$ is a choice function for the sequence, as [A2] requires. Hence clause (b) is available under its stated hypotheses, and the RL and LC algebra of steps 1.1, 1.2, 2.1 and 2.2 is choice-free and uses neither [A1] nor [A2]. [A1, A2, F16, step 1.1, step 1.2, step 2.1, step 2.2, algebra]

4.1 Clauses (a)-(c) are established: step 1.1 and step 2.1 give the existence, uniqueness, formula and power identity of (a); step 1.2 and step 2.2 give the solution, initial values, cosine-sine form, energy identity and conservation of (b), with the geometric identification delegated to [L1]; step 3.1 accounts for the choice use. The units are [F17]; no general network completeness, no full time-dependent Maxwell solution, no radiation or distributed-element effect and no empirical claim is asserted, and both statements are consequences of the expressly adopted relations of [F1]. [F1, F17, step 1.1, step 1.2, step 2.1, step 2.2, step 3.1] ∎



## Source notes

Fitzpatrick §7.5-7.6, printed pp. 225-234, writes the RL equation and the LCR circuit equation with the ideal element relations; Griffiths §7.2.3, printed pp. 310-317, records the battery-plus-RL exponential approach with time constant $L/R$; Tong §4.1.3, printed pp. 74-77, presents resistance as an additional material input in the circuit treatment. The RL solution is proved from the published integrating-factor theorem; the lossless LC candidate is verified by explicit complex-exponential differentiation with the real cosine-sine form displayed through Euler's formula, rather than through a real-trigonometric derivative supplier outside this page's declared prerequisite closure; and the optional capacitive identification is referred to its own supplier with its exact conductor and Choice hypotheses recorded. No numerical value, measurement or error bound is asserted.
