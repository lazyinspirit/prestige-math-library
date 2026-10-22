---
id: pthm-tgrx-wedge-unruh-clock
kind: physics-theorem
title: Wedge modular bridge implies the Unruh clock temperature
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 8
deps:
  - def-axiom-of-choice
  - post-tgrx-wedge-modular-model
  - thm-qsmx-tomita-takesaki
  - lem-tgrx-modular-kms-time-rescaling
  - def-tgr-framework-units
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  post-tgrx-wedge-modular-model: physical-assumption
  thm-qsmx-tomita-takesaki: mathematical-premise
  lem-tgrx-modular-kms-time-rescaling: mathematical-premise
  def-tgr-framework-units: formulation-prerequisite
physical_scope: "An algebraic KMS statement for the vacuum state of the selected massive scalar right-wedge model, conditional on its adopted modular/boost bridge, and for one uniformly accelerated proper-time orbit. It asserts no detector response, particle production, observed temperature, Hawking effect, or density-matrix representation."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Joseph J. Bisognano and Eyvind H. Wichmann, On the duality condition for a Hermitian scalar field, Journal of Mathematical Physics 16 (1975), 985–1007"
      url: "https://denebola.if.usp.br/~jbarata/leituras-recomendadas/BisognanoWichmann-01-DualityConditionHermitianScalarField_985_1_online.pdf"
      locator: "Complete 24-page PDF; §IV and Theorem 1 (PDF pp. 7–10) give the analytic wedge relation under the paper's field hypotheses. The current result instead derives the clock conversion conditionally from the explicitly adopted bridge."
    - title: "Daniele Guido, Modular theory for the von Neumann algebras of local quantum physics, complete lecture notes, arXiv:0812.1511"
      url: "https://arxiv.org/pdf/0812.1511"
      locator: "Complete 28-page PDF; §§3.1.1–3.1.2 (PDF pp. 14–17) state the free scalar and Wightman Bisognano–Wichmann relations; §3.3 (p. 20) interprets the boost KMS strip as the accelerated-observer temperature. Its boost convention is translated to the stated future-boost sign."
    - title: "Edward Witten, Notes on Some Entanglement Properties of Quantum Field Theory, complete lecture notes, arXiv:1803.04993"
      url: "https://arxiv.org/pdf/1803.04993"
      locator: "Complete 80-page PDF; §5.3 (PDF pp. 53–54) sketches the Bisognano–Wichmann holomorphy argument and §5.4 (pp. 54–56) derives the accelerated-orbit strip width. The notes state that their path-integral factorization route is not rigorous; the present proof does not rely on that route or on Witten's sketch."
    - title: "Stefan Hollands and Robert M. Wald, Quantum fields in curved spacetime, arXiv:1401.2026"
      url: "https://arxiv.org/pdf/1401.2026"
      locator: "Complete 77-page review; §2.2(a), PDF pp. 20–22, states the Rindler-algebra KMS result and explains the boost-time/acceleration interpretation. Its massless two-point example and detector discussion are not used as premises."
    - title: "Robert M. Wald, The Thermodynamics of Black Holes, arXiv:gr-qc/9912119"
      url: "https://arxiv.org/pdf/gr-qc/9912119"
      locator: "Complete 46-page review; §3, printed pp. 11–16 (PDF pp. 12–16), states the Unruh KMS temperature and explicitly distinguishes the Unruh and Hawking states. The source sets c and hbar to one; the SI conversion is proved locally."
---

## Statement

Assume the Axiom of Choice and the selected massive scalar wedge postulate.
Use its metric $\eta=\operatorname{diag}(-1,1,1,1)$, length coordinates
$x^0=ct$, right wedge $W_R=\{x^1>|x^0|\}$, vacuum $\Omega$, algebra
$M=M(W_R)$, modular operator $\Delta_W$, first-variable-linear pairing
$\langle\cdot,\cdot\rangle_1$ from the postulate, and boost
$\Lambda_W(s)$ with
dimensionless rapidity $s$. Define the vector state
$\omega_W(X)=\langle X\Omega,\Omega\rangle_1$ for $X\in M$, the modular
automorphisms $\sigma_t(X)=\Delta_W^{it}X\Delta_W^{-it}$, and
$\alpha_t=\sigma_{-t}$ for dimensionless $t$. The proper-time curve for
any $a>0$ in $\mathrm{m\,s^{-2}}$ is
$$\gamma_a(\tau)=\left(\frac{c^2}{a}\sinh\frac{a\tau}{c}, \frac{c^2}{a}\cosh\frac{a\tau}{c},0,0\right),\qquad \tau\in\mathbb R,$$
where $\tau$ is measured in seconds. Its future-boost rapidity is
$s=a\tau/c$. For this unit proper-time parametrization, define the
proper-acceleration scalar by
$a_\gamma=\sqrt{\eta(\ddot\gamma_a,\ddot\gamma_a)}$; the theorem verifies
$a_\gamma=a$. Define the proper-time action on $M$ by
$\widetilde\alpha_\tau=\alpha_{a\tau/(2\pi c)}$; equivalently, it is
conjugation by the future boost $U(\Lambda_W(a\tau/c))$.

Then for every $A,B\in M$ there is a bounded function $G_{A,B}$, continuous
on the closed strip $0\le\operatorname{Im}z\le b_U$ and holomorphic inside,
whose boundaries satisfy
$$G_{A,B}(\tau)=\omega_W(A\widetilde\alpha_\tau(B)),\qquad G_{A,B}(\tau+i b_U)=\omega_W(\widetilde\alpha_\tau(B)A) \quad(\tau\in\mathbb R),$$
with strip width $b_U=2\pi c/a$ seconds. Under the physical-time convention
that the strip width is $\hbar\beta_U$, the associated inverse temperature
and KMS temperature parameter are
$$\beta_U=\frac{2\pi c}{a\hbar},\qquad T_U=\frac{1}{k_B\beta_U}=\frac{\hbar a}{2\pi c k_B},$$
where $\hbar>0$ is in $\mathrm{J\,s}$ and $k_B>0$ is in
$\mathrm{J\,K^{-1}}$. This is a conditional algebraic model deduction; it
does not assert a detector response, particle production, a thermal
density matrix, or an observed temperature.

## Statement references

[[def-axiom-of-choice]]

[[post-tgrx-wedge-modular-model]]

[[thm-qsmx-tomita-takesaki]]

[[lem-tgrx-modular-kms-time-rescaling]]

[[def-tgr-framework-units]]

## Facts & Assumptions

**Given:** The Axiom of Choice; the selected wedge model and modular/boost
interface; the stated uniformly accelerated orbit; and the positive constants
$a,c,\hbar,k_B$ with their SI units.

[A1] The Axiom of Choice is assumed as defined in
[[def-axiom-of-choice]].

[A2] The selected model defines $M(W_R)$ as the double commutant of the
bounded scalar Weyl observables, assumes $\Omega$ cyclic and separating for
it, and adopts $\Delta_W^{it}=U(\Lambda_W(-2\pi t))$. The boost has future
rapidity $s$ under the explicit matrix convention in the postulate.
[[post-tgrx-wedge-modular-model]]

[F1] For standard modular data on a concrete von Neumann algebra,
the Tomita–Takesaki theorem gives
$\sigma_t(X)=\Delta_W^{it}X\Delta_W^{-it}$, a normal
point-ultraweakly continuous automorphism group, and an upper-strip
dimensionless KMS state for $\alpha_t=\sigma_{-t}$ with width $1$. It makes
no norm-continuity claim for the whole von Neumann algebra.
[[thm-qsmx-tomita-takesaki]]

[F2] The local rescaling lemma rescales this upper-strip
W*-KMS boundary condition directly: if
$\widetilde\alpha_\tau=\alpha_{\tau/\lambda}$ with $\lambda>0$, the strip
width becomes $\lambda$.
[[lem-tgrx-modular-kms-time-rescaling]]

[F3] The framework units definition uses length coordinates $x^0=ct$, assigns
$c$ units $\mathrm{m\,s^{-1}}$, $\hbar$ units $\mathrm{J\,s}$, and $k_B$
units $\mathrm{J\,K^{-1}}$. In its physical-time KMS convention, a strip
width $b$ seconds corresponds to inverse temperature $\beta=b/\hbar$.
[[def-tgr-framework-units]]

## Proof

**Proof technique:** Identify the future boost from the adopted sign
convention, then rescale the modular KMS strip to the proper-time clock.

**Given:** [A1]–[A2], [F1]–[F3], $a,c,\hbar,k_B>0$, and $\gamma_a$.

1.1 By [A2], $\Delta_W^{it}=U(\Lambda_W(-2\pi t))$. Since
$\alpha_t=\sigma_{-t}$, we have
$\alpha_t(X)=\Delta_W^{-it}X\Delta_W^{it}
=U(\Lambda_W(2\pi t))XU(\Lambda_W(2\pi t))^*$ for $X\in M$. Thus
$\alpha_t$ is the future-boost action with rapidity $2\pi t$; the minus
sign in the adopted modular identity is essential for this direction.
[A2, F1, algebra]

1.2 Put $\rho=c^2/a$ and differentiate the curve in the Statement. Then
$\dot\gamma_a(\tau)=(c\cosh(a\tau/c),c\sinh(a\tau/c),0,0)$ and
$\ddot\gamma_a(\tau)=(a\sinh(a\tau/c),a\cosh(a\tau/c),0,0)$. Direct
contraction with $\eta$ gives
$\eta(\dot\gamma_a,\dot\gamma_a)=-c^2$ and
$\eta(\ddot\gamma_a,\ddot\gamma_a)=a^2$; also
$\dot x^0=c\cosh(a\tau/c)>0$. Therefore $\tau$ is proper time, the curve
is future timelike with proper acceleration magnitude $a$, and its boost
rapidity is $a\tau/c$. [given, F3, algebra]

2.1 Let $\lambda=2\pi c/a>0$, which has seconds as its unit by [F3]. Then
$\tau/\lambda=a\tau/(2\pi c)$ and, by step 1.1,
$\widetilde\alpha_\tau=\alpha_{\tau/\lambda}$. Apply [F1] and [F2] with
dimensionless width $\theta=1$: $\omega_W$ has the required bounded
continuous upper-strip functions on width $\lambda=2\pi c/a$ seconds for
every $A,B\in M$. By [F3],
$\beta_U=\lambda/\hbar=2\pi c/(a\hbar)$ and
$T_U=(k_B\beta_U)^{-1}=\hbar a/(2\pi c k_B)$. The displayed units give
$[\beta_U]=\mathrm{J^{-1}}$ and $[T_U]=\mathrm K$. No density matrix or
detector statement is used. [A1, A2, F1, F2, F3, step 1.1, step 1.2, algebra] ∎
