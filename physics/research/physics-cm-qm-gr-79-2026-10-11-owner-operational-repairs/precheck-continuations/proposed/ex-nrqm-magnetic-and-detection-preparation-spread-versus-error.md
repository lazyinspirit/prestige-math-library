---
id: ex-nrqm-magnetic-and-detection-preparation-spread-versus-error
aliases: [nrqm-magnetic-and-detection-example-preparation-spread-versus-error]
kind: example
domain: mathematics
title: "Gaussian preparation spread and an independent additive reading error"
status: draft
origin: pipeline
dependency_level: 4
deps: [thm-nrqm-magnetic-and-detection-maximal-domain-position-and-momentum-uncertainty, thm-nrqm-magnetic-and-detection-covariance-refined-uncertainty, def-nrqm-magnetic-and-detection-position-and-momentum-operators, lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint, thm-gaussian-integral, thm-exponential-beats-every-polynomial, thm-differentiation-under-the-integral-sign, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, thm-algebra-of-derivatives, thm-derivative-of-exponential, def-complex-exponential, thm-dominated-convergence, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-nrqm-magnetic-and-detection-maximal-domain-position-and-momentum-uncertainty: mathematical-premise
  thm-nrqm-magnetic-and-detection-covariance-refined-uncertainty: mathematical-premise
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint: mathematical-premise
  thm-gaussian-integral: mathematical-premise
  thm-exponential-beats-every-polynomial: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 2.4 pp. 28-32 (Gaussian wavepackets, their widths and the uncertainty product)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 5 'Uncertainty Principle and Compatible Observables', pp. 1-8 (spread of a Gaussian preparation and saturation of the bound)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/005979fa741c3ea2e0430456b70caf93_MIT8_05F13_Chap_05.pdf"
---

## Example

Assume the Axiom of Choice and the Axiom of Countable Choice
([[def-axiom-of-choice]], [[def-countable-choice]]). Fix $\hbar>0$, let
$Q,P$ be the position and momentum operators on $L^2(\mathbb R;\mathbb C)$
([[def-nrqm-magnetic-and-detection-position-and-momentum-operators]],
[[lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint]]), and for
$\sigma>0$ put
$$\psi_\sigma(x):=(2\pi\sigma^2)^{-1/4}e^{-x^2/(4\sigma^2)},\qquad \rho_\sigma(x):=|\psi_\sigma(x)|^2=(2\pi\sigma^2)^{-1/2}e^{-x^2/(2\sigma^2)} .$$
For $\mu\in\mathbb R$ and $\tau>0$, call
$g_{\mu,\tau}(x):=(2\pi\tau^2)^{-1/2}e^{-(x-\mu)^2/(2\tau^2)}$
a Gaussian density; thus $\rho_\sigma=g_{0,\sigma}$.
Then:

(a) $\|\psi_\sigma\|=1$, and with $a:=\int_{\mathbb R}x\rho_\sigma(x)dx$ and
$b:=\langle P\psi_\sigma,\psi_\sigma\rangle$ one has $a=b=0$,
$$\Delta Q=\sigma,\qquad \Delta P=\frac{\hbar}{2\sigma},\qquad \Delta Q\,\Delta P=\frac\hbar2,$$
so the Gaussian preparation saturates the bound of
[[thm-nrqm-magnetic-and-detection-maximal-domain-position-and-momentum-uncertainty]];

(b) for every nonnegative measurable density $\rho$ on $\mathbb R$ with
$\int\rho=1$ and $\int x^2\rho(x)dx<\infty$, and every $e>0$, the
**stipulated mixture density** $\rho_e(x):=\frac12\rho(x+e)+\frac12\rho(x-e)$ is again a
normalized density with
$$m(\rho_e)=m(\rho),\qquad V(\rho_e)=V(\rho)+e^2,$$
where $m(\rho):=\int x\rho$, $V(\rho):=\int(x-m(\rho))^2\rho$;

(c) in particular $V(\rho_\sigma)=\sigma^2$, so
$V((\rho_\sigma)_e)=\sigma^2+e^2$: in this model the variance does not
determine $\sigma$ when $e$ is unknown, although it implies
$\sigma<\sqrt{V((\rho_\sigma)_e)}$. The mixture is Gaussian only when $e=0$.

The example is a computation with specified densities; the "reading error"
is a stipulated mathematical model and reports no measurement.

## Verification

**Given:** $\hbar>0$, $\sigma>0$, the Gaussian $\psi_\sigma$ and density $\rho_\sigma$, and the additive-error law $\rho_e$.

**Proof technique:** direct Gaussian integration, a parameter derivative for the second moment, and translation invariance of the Lebesgue integral.

[F1] $\int_{\mathbb R}e^{-t^2}dt=\sqrt\pi$ ([[thm-gaussian-integral]]); by the substitution $t=x\sqrt{a/2}$ with $dx=\sqrt{2/a}\,dt$,
$F(a):=\int_{\mathbb R}e^{-ax^2/2}dx=\sqrt{2\pi/a}$ for every $a>0$ ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]). On a compact parameter interval with lower endpoint $a_0>0$, the integrand and its first two $a$-derivatives are dominated respectively by $e^{-a_0x^2/2}$, $\frac12x^2e^{-a_0x^2/2}$, and $\frac14x^4e^{-a_0x^2/2}$; these are integrable because the Gaussian is integrable and, for the polynomial factors at infinity, $x^4e^{-a_0x^2/2}\le C|x|^{-6}$ for some $C$ by [[thm-exponential-beats-every-polynomial]]. Differentiation under the integral sign therefore gives
$F'(a)=-\frac12\int x^2e^{-ax^2/2}dx$ and $F''(a)=\frac14\int x^4e^{-ax^2/2}dx$ ([[thm-differentiation-under-the-integral-sign]]). Differentiating the closed form for $F$ yields
$\int x^2e^{-ax^2/2}dx=\sqrt{2\pi}\,a^{-3/2}$ and $\int x^4e^{-ax^2/2}dx=3\sqrt{2\pi}\,a^{-5/2}$.

[F2] On $L^2(\mathbb R)$ one has $\|P\psi\|^2=\hbar^2\|D\psi\|^2$ for $\psi\in W^{1,2}$ and $\langle P\psi,\psi\rangle=-i\hbar\int\psi'\overline\psi$; $D\psi_\sigma(x)=-\frac{x}{2\sigma^2}\psi_\sigma(x)$ with the complex exponential and product rule ([[lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint]], [[def-complex-exponential]], [[thm-derivative-of-exponential]], [[thm-algebra-of-derivatives]]).

[F3] For an integrable density $\rho$, translation invariance gives $\int\rho(x\pm e)dx=\int\rho$ and $\int x\rho(x\pm e)dx=\int(y\mp e)\rho(y)dy$; here $x+e=y$ means $x=y-e$ ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

1.1 [Normalisation and moments of the Gaussian] Substituting $x=\sigma t$ in $\rho_\sigma$ gives $\int\rho_\sigma=(2\pi\sigma^2)^{-1/2}\sigma\int e^{-t^2/2}dt=1$ by [F1] with $a=1$. Hence $\|\psi_\sigma\|=1$. The mean $\int x\rho_\sigma(x)dx$ vanishes because the integrand is odd; the second moment is $\int x^2\rho_\sigma(x)dx=(2\pi\sigma^2)^{-1/2}\sigma^3\int t^2e^{-t^2/2}dt=(2\pi\sigma^2)^{-1/2}\sigma^3\sqrt{2\pi}=\sigma^2$ by [F1]. [given, F1, algebra]

1.2 [The additive-error law] Let $\rho$ be a density as in (b). By [F3], $\int\rho_e=\frac12\int\rho+\frac12\int\rho=1$, so $\rho_e$ is a probability density; likewise $m(\rho_e)=\frac12\int x\rho(x+e)dx+\frac12\int x\rho(x-e)dx=\frac12\int(y-e)\rho(y)dy+\frac12\int(y+e)\rho(y)dy=m(\rho)$, and the cross terms cancel: $V(\rho_e)=\frac12\int(y-e-m)^2\rho(y)dy+\frac12\int(y+e-m)^2\rho(y)dy=\int(y-m)^2\rho(y)dy+e^2=V(\rho)+e^2$. This is (b). [given, F3, algebra]

2.1 [Momentum moments] By [F2], $\int\psi_\sigma'\overline{\psi_\sigma}dx=-\frac1{2\sigma^2}\int x\rho_\sigma(x)dx=0$, so $b=\langle P\psi_\sigma,\psi_\sigma\rangle=0$; and $\|D\psi_\sigma\|^2=\frac1{4\sigma^4}\int x^2\rho_\sigma(x)dx=\frac1{4\sigma^2}$, so $\|P\psi_\sigma\|^2=\hbar^2/(4\sigma^2)$, i.e. $\Delta P=\hbar/(2\sigma)$ and $\Delta Q=\sigma$ by step 1.1. These are the maximal-domain quantities of [[thm-nrqm-magnetic-and-detection-maximal-domain-position-and-momentum-uncertainty]] and give $\Delta Q\Delta P=\hbar/2$: the equality case of [[thm-nrqm-magnetic-and-detection-covariance-refined-uncertainty]] clause (c), since $x_Q$ and $y_P$ are then linearly dependent (both proportional to $x\psi_\sigma(x)$). This is (a). [given, step 1.1, F2, algebra]

3.1 [Gaussian case] By step 1.1, $V(\rho_\sigma)=\sigma^2$, and step 1.2 gives $V((\rho_\sigma)_e)=\sigma^2+e^2$. The mixture is centered, and translation in each component gives its fourth central moment
$\int_{\mathbb R}x^4(\rho_\sigma)_e(x)dx=\frac12\int_{\mathbb R}(y-e)^4\rho_\sigma(y)dy+\frac12\int_{\mathbb R}(y+e)^4\rho_\sigma(y)dy=3\sigma^4+6\sigma^2e^2+e^4,$
using evenness, $\int y^2\rho_\sigma=\sigma^2$, and $\int y^4\rho_\sigma=3\sigma^4$ from [F1]. Any $g_{\mu,\tau}$ has mean $\mu$, variance $\tau^2$, and fourth central moment $3\tau^4$ by the same Gaussian moments and translation. Thus if $e>0$ and $(\rho_\sigma)_e$ were a Gaussian density, its mean and variance would force $\mu=0$ and $\tau^2=\sigma^2+e^2$, whose Gaussian fourth moment $3(\sigma^2+e^2)^2$ differs from the displayed mixture fourth moment by $2e^4>0$, a contradiction. At $e=0$ the mixture is $\rho_\sigma$. Hence the model variance does not determine $\sigma$ when $e$ is unknown, although it implies the stated upper bound; this proves (c). [given, F1, F3, step 1.1, step 1.2, algebra] ∎
