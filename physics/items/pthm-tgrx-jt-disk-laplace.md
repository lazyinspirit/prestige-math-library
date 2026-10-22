---
id: pthm-tgrx-jt-disk-laplace
kind: physics-theorem
title: Exact disk-model Laplace integral and heat capacity
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 1
proof_strategy: direct
deps:
  - post-tgrx-jt-disk-spectral-model
  - thm-gaussian-integral
  - thm-differentiation-under-dominated-improper-multiple-integrals
  - thm-substitution-for-improper-integrals
dependency_roles:
  post-tgrx-jt-disk-spectral-model: physical-assumption
  thm-gaussian-integral: mathematical-premise
  thm-differentiation-under-dominated-improper-multiple-integrals: mathematical-premise
  thm-substitution-for-improper-integrals: mathematical-premise
justified_by: []
aliases: []
forward_refs: []
physical_scope: >
  A conditional exact calculation for the adopted continuous genus-zero JT disk
  density, at fixed $C$ and $S_0$ in $c=\hbar=k_B=1$ units. It does not assert a
  discrete microscopic spectrum, a higher-topology result, a nonperturbative
  completion, or empirical validity.
empirical_premises: []
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Phil Saad, Stephen H. Shenker, and Douglas Stanford, JT gravity as a
        matrix integral, §§3.3.5 and 3.5
      url: https://arxiv.org/html/1903.11115
      locator: SSS HTML §3.3.5, equation (125), gives the disk Schwarzian factor;
        §3.5, equations (143)–(144), give its Laplace-density relation and
        genus-zero density, not equation (145), which gives y(z). Set gamma=C
        and restore the separate exp(S_0) disk topological factor. The
        corresponding retrieved PDF equations are (122), printed p.30/PDF p.31,
        and (140)–(141), printed p.33/PDF p.34; topological weighting is
        equation (63), printed p.18/PDF p.19. The proof below evaluates the
        adopted Laplace integral locally.
    - title: "Thomas G. Mertens and Gustavo J. Turiaci, Solvable models of quantum
        black holes: a review on Jackiw–Teitelboim gravity, §3.1"
      url: https://arxiv.org/html/2210.10846
      locator: Full-text review; equations (3.7) and (3.10) state the disk partition
        function and its continuous density in the same $C,S_0$ convention.
    - title: Gábor Sárosi, AdS2 holography and the SYK model, lecture notes, §3.3.1
      url: https://arxiv.org/html/1711.08482
      locator: Full lecture notes; equations (54)–(55) give the Schwarzian disk
        thermal factor and thermodynamic relation. The local proof does not
        import their path-integral evaluation.
---

## Statement

Let $C>0$ and $\beta>0$ have units of seconds, let $S_0\in\mathbb R$ be dimensionless, and use $c=\hbar=k_B=1$ units as in the adopted JT disk spectral model. Then $E>0$ has units $\mathrm{s^{-1}}$ and the density $\rho_0(E)$ from that model has units seconds. Define the disk partition function as the Laplace integral

$$Z_0(\beta):=\int_0^\infty \rho_0(E)e^{-\beta E}\,dE.$$

When $Z_0(\beta)$ is finite and positive, define the normalized canonical energy distribution by $dP_\beta(E):=Z_0(\beta)^{-1}\rho_0(E)e^{-\beta E}\,dE$ and its mean energy by $\bar E(\beta):=\int_0^\infty E\,dP_\beta(E)$. Put $T:=1/\beta$ and, at fixed $C,S_0$, write $C_V/k_B:=d\bar E/dT$ for the dimensionless canonical heat-capacity coefficient in these units. Then the integral is finite and

$$Z_0(\beta)=e^{S_0}\frac{C\sqrt{2C}}{2\sqrt{\pi}\,\beta^{3/2}}\exp\!\left(\frac{2\pi^2C}{\beta}\right),\qquad \bar E(\beta)=\frac{3}{2\beta}+\frac{2\pi^2C}{\beta^2},\qquad \frac{C_V}{k_B}=\frac32+\frac{4\pi^2C}{\beta}>0.$$

These are deductions within the adopted continuous disk model, not claims about an individual microscopic spectrum or nature.

## Statement references

[[post-tgrx-jt-disk-spectral-model]]

[[thm-gaussian-integral]]

[[thm-differentiation-under-dominated-improper-multiple-integrals]]

[Phil Saad, Stephen H. Shenker, and Douglas Stanford, *JT gravity as a matrix integral*](https://arxiv.org/html/1903.11115)

[Thomas G. Mertens and Gustavo J. Turiaci, *Solvable models of quantum black holes: a review on Jackiw–Teitelboim gravity*](https://arxiv.org/html/2210.10846)

[Gábor Sárosi, *AdS2 holography and the SYK model*](https://arxiv.org/html/1711.08482)

## Facts & Assumptions

**Given:** $C>0$, $S_0\in\mathbb R$, $\beta>0$, the units in the Statement, and the definitions of $Z_0$, $P_\beta$, $\bar E$, and $C_V/k_B$ there.

[A1] [[post-tgrx-jt-disk-spectral-model]]: in these units, $\rho_0(E)=e^{S_0}C\sinh(2\pi\sqrt{2CE})/(2\pi^2)$ for $E>0$, as a continuous disk-level model density; no discrete Hamiltonian or completion is supplied.

[F1] [[thm-gaussian-integral]]: $\int_{-\infty}^{\infty}e^{-x^2}\,dx=\sqrt{\pi}$; its complete proof squares the integral, evaluates the plane Gaussian in polar coordinates, and selects the positive square root.

[F2] [[thm-differentiation-under-dominated-improper-multiple-integrals]]: for open $D\subseteq\mathbb R^n$ and open interval $I$, if $f$ and $\partial_t f$ are continuous, one slice is absolutely improperly integrable, and on every compact parameter interval $J\subset I$ the derivative is bounded by a nonnegative improperly integrable $g_J$, then every slice is absolutely improperly integrable and $\frac{d}{dt}\int_D f(x,t)\,dx=\int_D\partial_t f(x,t)\,dx$.

[F3] [[thm-substitution-for-improper-integrals]]: if $\phi:I\to J$ is a monotone differentiable surjection between intervals, its derivative is locally Riemann integrable, the proper change-of-variable hypotheses hold on compact truncations, and $f$ is locally Riemann integrable on $J$, then $\int_J f(x)\,dx$ and $\int_I f(\phi(t))|\phi'(t)|\,dt$ converge simultaneously and are equal when convergent.

## Proof

1.1 Fix $\beta>0$ and set $a:=2\pi\sqrt{2C}$. Completing the square gives $-\beta x^2+ax=-\beta(x-a/(2\beta))^2+a^2/(4\beta)$. The affine map $u=\sqrt\beta(x-a/(2\beta))$ is an increasing $C^1$ bijection $\mathbb R\to\mathbb R$; its proper change-of-variable hypotheses hold on every compact truncation. Thus [F3] and [F1] give $I(a):=\int_{-\infty}^{\infty}e^{-\beta x^2+ax}\,dx=e^{a^2/(4\beta)}\beta^{-1/2}\int_{-\infty}^{\infty}e^{-u^2}\,du=e^{a^2/(4\beta)}\sqrt{\pi/\beta}$. The same calculation gives $I(-a)=I(a)$. Since $e^{-\beta x^2}\cosh(ax)$ is even and $\cosh(ax)=(e^{ax}+e^{-ax})/2$, its full-line integral is $I(a)$ and $F(a):=\int_0^\infty e^{-\beta x^2}\cosh(ax)\,dx=I(a)/2=\frac{\sqrt\pi}{2\sqrt\beta}e^{a^2/(4\beta)}$. [given, F1, F3, algebra]

2.1 For each compact $J=[-A,A]\subset\mathbb R$, $f(x,t):=e^{-\beta x^2}\cosh(tx)$ and $\partial_t f=x e^{-\beta x^2}\sinh(tx)$ are continuous on $(0,\infty)\times\mathbb R$. The inequality $A x\le \beta x^2/2+A^2/(2\beta)$ bounds $|\partial_t f|$ on $J$ by $e^{A^2/(2\beta)}x e^{-\beta x^2/2}$, whose integral is $e^{A^2/(2\beta)}/\beta<\infty$; the base slice $f(x,0)=e^{-\beta x^2}$ is absolutely integrable by [F1] and [F3] with the increasing $C^1$ bijection $u=\sqrt\beta x:(0,\infty)\to(0,\infty)$, whose derivative is the positive constant $\sqrt\beta$. Thus [F2] applies and $F'(a)=\int_0^\infty x e^{-\beta x^2}\sinh(ax)\,dx$. Differentiating the closed form in step 1.1 yields $F'(a)=a\sqrt\pi\,e^{a^2/(4\beta)}/(4\beta^{3/2})$. [given, F1, F2, F3, step 1.1, algebra]

3.1 Let $h(E):=\rho_0(E)e^{-\beta E}$ and $\phi(x):=x^2$ on $(0,\infty)$. The map $\phi$ is an increasing $C^1$ bijection with $\phi'(x)=2x>0$; on each compact truncation its proper change-of-variable hypotheses hold, and $h$ is locally continuous. By [A1], the transformed integrand is $2x h(x^2)=e^{S_0}C\pi^{-2}x e^{-\beta x^2}\sinh(ax)$, whose improper integral is finite by step 2.1. Thus [F3] gives $Z_0(\beta)=\int_0^\infty h(E)\,dE=\int_0^\infty h(x^2)2x\,dx=e^{S_0}C\pi^{-2}F'(a)$, where $a=2\pi\sqrt{2C}$. Substitution of step 2.1 gives the stated formula for $Z_0$. It is finite and strictly positive because $C,\beta>0$ and the displayed factors are finite and positive. [given, A1, F3, step 2.1, algebra]

4.1 For $f(E,\beta):=\rho_0(E)e^{-\beta E}$ on $(0,\infty)\times(0,\infty)$, both $f$ and $\partial_\beta f=-E\rho_0(E)e^{-\beta E}$ are continuous. On a compact $J\subset(0,\infty)$ let $\beta_0:=\min J>0$. Since $\sinh(a\sqrt E)\le e^{a\sqrt E}/2$ and $a\sqrt E\le \beta_0 E/2+a^2/(2\beta_0)$, the derivative magnitude is bounded on $J$ by a constant times $E e^{-\beta_0 E/2}$, which has finite integral; the same estimate without the factor $E$ gives an integrable base slice. Apply [F2] on $(0,\infty)$ to differentiate $Z_0$: $Z_0'(\beta)=-\int_0^\infty E\rho_0(E)e^{-\beta E}\,dE$. Hence $\bar E=-\partial_\beta\log Z_0=3/(2\beta)+2\pi^2C/\beta^2$. [given, A1, F2, step 3.1, algebra]

5.1 At fixed $C,S_0$, $T=1/\beta$ gives $d\beta/dT=-\beta^2$, so $C_V/k_B=d\bar E/dT=-\beta^2\partial_\beta\bar E=3/2+4\pi^2C/\beta$. Since $C>0$ and $\beta>0$, this coefficient is strictly positive. [given, step 4.1, algebra] ∎

## Remarks

The proof uses the published Gaussian integral supplier, the improper-substitution theorem for the affine, rescaling, and square substitutions, and the dominated-differentiation theorem for both parameter-dependent improper integrals. The JT density itself remains the adopted premise [A1]. No path-integral or ensemble assumption is used in the calculation.
