---
id: thm-nrqm-controlled-dynamics-liouville-turning-point-transformation
aliases: [nrqm-controlled-dynamics-liouville-turning-point-transformation]
kind: theorem
domain: mathematics
title: "Liouville turning-point transformation"
status: published
origin: pipeline
dependency_level: 0
deps: [def-derivative, def-continuity-real, thm-chain-rule, thm-heine-borel-rn, thm-extreme-value-metric, thm-dominated-convergence, thm-continuous-implies-integrable, thm-ftc-first-part, thm-newton-leibniz-with-interior-derivative]
dependency_roles:
  def-derivative: mathematical-premise
  def-continuity-real: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "F. W. J. Olver, Asymptotics and Special Functions (1974), Chapter 11 (Liouville transformation and turning-point theory) — classical monograph treatment consulted through the DLMF survey of Airy-type asymptotics"
      url: "https://dlmf.nist.gov/9.7"
    - title: "NIST Digital Library of Mathematical Functions, Sections 9.2 and 9.7 (Airy's differential equation and Airy-type connection formulas)"
      url: "https://dlmf.nist.gov/9.2"
---

## Statement

Let $J=[-x_-,x_+]$ with $x_-,x_+>0$, and let $q\in C^5(J;\mathbb R)$ have a single simple zero at $0$:
$q(0)=0$, $q'(0)>0$, $q(x)$ has the sign of $x$, and $q\ne0$ on
$[-x_-,0)\cup(0,x_+]$. Let $h>0$ and define
$$\zeta(x):=\operatorname{sign}(x)\Bigl[\frac32\Bigl|\int_0^x\sqrt{|q(s)|}\,ds\Bigr|\Bigr]^{2/3}.$$
Then:

(a) $\zeta\in C^4$, $\zeta(\zeta')^2=q$, $\zeta'>0$ with
$\min\zeta'>0$. Define $a(x):=(\zeta'(x))^{-1/2}$; then $a>0$ is $C^3$;

(b) For each $u\in C^2(J;\mathbb C)$ solving $u''(x)=q(x)u(x)/h^2$ on $J$, define $w:\zeta(J)\to\mathbb C$ by
$$w(y):=\frac{u(\zeta^{-1}(y))}{a(\zeta^{-1}(y))};$$
this is well-defined by (a), and $u(x)=a(x)w(\zeta(x))$. The function $w$ is $C^2$ and satisfies $w''(\zeta)=\bigl[\zeta/h^2+R(\zeta)\bigr]w(\zeta)$ with
$$R(\zeta(x))=-\frac{a''(x)}{a(x)\,(\zeta'(x))^2},$$
where $a''$ denotes the second derivative with respect to $x$; the formula defines a continuous bounded real function on $\zeta([-x_-,x_+])$ through the invertible map $x\mapsto\zeta(x)$;

(c) the constants implicit in (a)–(b) depend only on $q$ and the interval.

## Facts & Assumptions

**Given:** the interval $J$, the function $q$ with a single simple zero at $0$, $h>0$, and the transformation data $\zeta,a$ defined in the Statement.

[F1] Define $b(0):=q'(0)$ and $b(x):=q(x)/x$ for $x\ne0$. Then $b(x)=\int_0^1q'(tx)\,dt$ and, for $0\le k\le4$, $b^{(k)}(x)=\int_0^1t^kq^{(k+1)}(tx)\,dt$; for $k<4$ the difference quotients are dominated by $t^{k+1}\sup_J|q^{(k+2)}|$, so dominated convergence gives each derivative formula and its continuity, hence $b\in C^4(J)$. The sign assumptions give $b>0$ on $J$, hence $g:=\sqrt b\in C^4(J)$. With $G(x):=\int_0^1t^{1/2}g(tx)\,dt$, dominated convergence applied successively to the difference quotients, bounded by $t^{k+3/2}\sup_J|g^{(k+1)}|$ for $k<4$, gives the continuous derivatives $G^{(k)}(x)=\int_0^1t^{k+1/2}g^{(k)}(tx)\,dt$ and $G\in C^4(J)$. Since $G>0$, substitution $s=xt$ yields $\zeta(x)=x[(3/2)G(x)]^{2/3}\in C^4(J)$ and $\zeta'(0)=b(0)^{1/3}>0$ ([[thm-dominated-convergence]], [[def-derivative]], [[thm-chain-rule]], [[def-continuity-real]]).

[F2] The identity $\zeta(\zeta')^2=q$ follows without losing the sign: for $x\ne0$, differentiate $|\zeta(x)|^{3/2}=\frac32|\int_0^x\sqrt{|q(s)|}ds|$. The signs of $\zeta$ and of this signed integral both equal $\operatorname{sign}x$, so $|\zeta|^{1/2}\zeta'=\sqrt{|q|}$. Thus $\zeta'>0$ off zero, $|\zeta|(\zeta')^2=|q|$, and multiplication by $\operatorname{sign}x$ gives the required signed identity. At zero it follows by continuity, and [F1] gives $\zeta'(0)>0$. The interval $J$ is compact by Heine–Borel, and the continuous positive function $\zeta'$ attains a positive minimum there by the extreme-value theorem ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]], [[def-derivative]]).

[F3] Change of variables in the differential equation: inserting $u(x)=a(x)w(\zeta(x))$ into $u''=qu/h^2$ and using $\zeta(\zeta')^2=q$ cancels the first-derivative term and leaves the stated equation with the displayed $R$ ([[thm-chain-rule]], algebra).

[F4] Continuous real functions on compact intervals are Riemann integrable ([[thm-continuous-implies-integrable]]). Their primitives have derivative equal to the integrand, including relative endpoint derivatives ([[thm-ftc-first-part]]), and for a $C^1$ real function $f$, $f(v)-f(u)=\int_u^v f'(s)ds$ ([[thm-newton-leibniz-with-interior-derivative]]). All continuous finite-interval integrals here can be computed by Riemann sums, with the same values as their Lebesgue integrals. Applied to $t\mapsto q(tx)$ on $[0,1]$, this gives $q(x)=x\int_0^1q'(tx)dt$; applied to $s\mapsto\sqrt{|q(s)|}$, it licenses the differentiation in [F2]. For the difference-quotient bounds in [F1], the same identity bounds each increment by the interval length times the stated supremum of its continuous derivative. No choice hypothesis is needed for these scalar identities.

## Proof

1.1 [Regularity of the transformation] [F1] gives $\zeta\in C^4$ and $\zeta'>0$ near $0$; on $[-x_-,0)\cup(0,x_+]$, $q$ is $C^5$ and nonzero, so $\zeta$ is $C^4$ there too, and the two descriptions glue with matching derivatives at $0$ because both are given by the integral formula. Hence $\zeta'\ge c>0$ on the interval and $a=(\zeta')^{-1/2}\in C^3$. [F1, F2, F4, algebra]

2.1 [The transformed equation] The bound $\zeta'\ge c>0$ and [F4] give $\zeta(v)-\zeta(u)\ge c(v-u)$ for $u<v$, so $\zeta$ is a continuous strictly increasing bijection onto its image with a continuous inverse. The inverse difference quotient gives $(\zeta^{-1})'(y)=1/\zeta'(\zeta^{-1}(y))$; differentiating this identity shows the inverse is $C^2$, with the corresponding one-sided endpoint derivatives. Thus $w=(u/a)\circ\zeta^{-1}$ is $C^2$. The product and chain rules give $u''=a''w+(2a'\zeta'+a\zeta'')w'+a(\zeta')^2w''$; differentiating $a=(\zeta')^{-1/2}$ gives $2a'\zeta'+a\zeta''=0$. Dividing by $a(\zeta')^2$ and using $q=\zeta(\zeta')^2$ proves [F3]. By [F3], $w$ solves $w''=[\zeta/h^2+R]w$ with $R(\zeta(x))=-a''(x)/[a(x)(\zeta'(x))^2]$. Since $a$ and $\zeta'$ are $C^3$ and bounded below on the compact interval, $R$ is continuous and bounded with a bound depending only on $q$ and the interval. [F2, F3, F4, step 1.1, algebra]

3.1 [Conclusion] Claims (a), (b), (c) are steps 1.1 and 2.1 and the dependence of all constants on $q$ and the interval. [step 1.1, step 2.1, algebra] ∎
