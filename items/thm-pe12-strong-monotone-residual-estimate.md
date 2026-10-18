---
id: thm-pe12-strong-monotone-residual-estimate
kind: theorem
title: Quantitative residual error under strong monotonicity
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  [
    def-pe12-gelfand-triple,
    def-pe12-monotone-diffusion-flux,
    lem-pe12-evolution-energy-chain-rule,
    thm-holder-inequality-for-integrals,
    def-axiom-of-choice,
    thm-young-inequality-real-exponents
  ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Tomáš Roubíček, Nonlinear Partial Differential Equations with
        Applications, 2nd ed., Birkhäuser, 2005
      url: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MC/MCde/Roubicek%20T.%20Nonlinear%20partial%20differential%20equations%20with%20applications%20%282ed.%2C%202005%29%28ISBN%209783034805124%29%28O%29%28457s%29_MCde_.pdf
      locator: §7.2, evolution-space energy chain rule and monotone uniqueness
        framework.
    - title: Marvin Fritz, Monotone Operators in Nonlinear PDEs, JKU lecture notes, WS
        2023/2024
      url: https://numa.jku.at/media/filer_public/ff/80/ff80a871-94c4-4785-8314-028a46d185ed/lecturenotes.pdf
      locator: §9, energy testing of monotone evolution equations.
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume the Axiom of Choice.

Let $(V,H,J)$ be the evolution triple of
[[def-pe12-gelfand-triple]], $1<p<\infty$, and assume
$A:V\to V^*$ is strongly monotone with constant $\mu>0$ and exponent $p$:
$$\langle A(x)-A(y),x-y\rangle\ge\mu\|x-y\|_V^p \qquad(x,y\in V).$$
Suppose $u,v\in L^p(0,T;V)$ have derivatives in
$L^{p'}(0,T;V^*)$ and residual difference
$R=(u'+A(u))-(v'+A(v))\in L^{p'}(0,T;V^*)$. Then for every $t\in[0,T]$,
$$\|u(t)-v(t)\|_H^2+ \mu\int_0^t\|u-v\|_V^p \le\|u(0)-v(0)\|_H^2+ 2C_{\mu,p}\|R\|_{L^{p'}(0,t;V^*)}^{p'},$$
where both functions use their continuous $H$ representatives and
$C_{\mu,p}=\frac1{p'}(2/(\mu p))^{1/(p-1)}$. In particular, equal initial data
and zero residual imply $u=v$.

## Facts & Assumptions

**Given:** The Axiom of Choice, the evolution triple, $1<p<\infty$, strong monotonicity with
constant $\mu$, two functions in the stated evolution space, and their
residual difference $R$.

[F1] Functions in $L^p(V)$ with derivative in $L^{p'}(V^*)$ have continuous $H$ representatives and satisfy the
integrated Hilbert norm chain rule
([[lem-pe12-evolution-energy-chain-rule]]).

[F2] Hölder's inequality applies to the dual pairing of $L^{p'}(V^*)$ and
$L^p(V)$ ([[thm-holder-inequality-for-integrals]]).

[F3] For conjugate exponents $p,p'>1$, Young's inequality is $ab\le a^p/p+b^{p'}/p'$ for $a,b\ge0$ ([[thm-young-inequality-real-exponents]]).

[A1] Strong monotonicity with exponent $p$ and constant $\mu$ is the
additional hypothesis of this theorem; it is not part of ordinary
monotonicity in [[def-pe12-monotone-diffusion-flux]].

[A2] The Axiom of Choice licenses the energy chain rule through its
absolutely continuous representative prerequisite
([[def-axiom-of-choice]]).

## Proof
1.1 Set $e=u-v$. Subtracting the residual definitions gives $e'+A(u)-A(v)=R$ in $L^{p'}(0,T;V^*)$. By [F1], testing this identity against $e\in L^p(0,T;V)$ is integrable by [F2], and for every $t$, $$\frac12\|e(t)\|_H^2-\frac12\|e(0)\|_H^2 +\int_0^t\langle A(u)-A(v),e\rangle =\int_0^t\langle R,e\rangle.$$ [A1, A2, F1, F2, given, algebra]

2.1 Strong monotonicity bounds the left integral below by $\mu\int_0^t\|e\|_V^p$. Young's inequality [F3], applied to $(\mu p/2)^{1/p}a$ and $(\mu p/2)^{-1/p}b$, gives the scaled form $$ab\le\frac\mu2a^p+ \frac1{p'}\left(\frac2{\mu p}\right)^{1/(p-1)}b^{p'}$$ gives $|\langle R,e\rangle|\le\frac\mu2\|e\|_V^p+ C_{\mu,p}\|R\|_{V^*}^{p'}$. Integrating and absorbing the first term yields $$\frac12\|e(t)\|_H^2+\frac\mu2\int_0^t\|e\|_V^p \le\frac12\|e(0)\|_H^2+ C_{\mu,p}\|R\|_{L^{p'}(0,t;V^*)}^{p'}.$$ Multiplying by two proves the estimate. If $e(0)=0$ and $R=0$, the nonnegative left side vanishes for every $t$, hence $e(t)=0$ in $H$ and $e=0$ in $L^p(V)$. [A1, A2, F1, F2, F3, step 1.1, given, algebra] ∎
