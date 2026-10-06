---
id: ex-nonconvex-riemann-data-can-require-a-composite-rarefaction-shock-wave
kind: example
title: Nonconvex Riemann data can require a composite shock--rarefaction wave
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: direct
deps: [cex-convex-flux-riemann-formula-fails-for-a-nonconvex-flux, lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality, thm-rankine-hugoniot-jump-condition, def-piecewise-smooth-shock-and-one-sided-traces, def-kruzhkov-entropy-solution, cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions, def-self-similar-riemann-problem, thm-euclidean-inverse-function-theorem, thm-chain-rule, def-distributional-weak-solution-of-a-scalar-conservation-law, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-ftc-second-part, def-countable-choice]
sources:
  references:
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§6.3, Example 6.7, pp. 55–57"
    - title: "Alberto Bressan, “Hyperbolic Conservation Laws: An Illustrated Tutorial,” 2009, complete lecture notes"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§3.1, pp. 21–26"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) for the analytic prerequisites used below.

Let $f(u)=u^3$ and take the Riemann data $u_L=1$ for $x<0$, $u_R=-1$ for
$x>0$ as in
[[cex-convex-flux-riemann-formula-fails-for-a-nonconvex-flux]]. The entropy
profile is
$$u(t,x)=\begin{cases}1,&x<\tfrac34t,\\[3pt]-\sqrt{\dfrac{x}{3t}},&\tfrac34t<x<3t,\\[3pt]-1,&x\ge3t.\end{cases}$$
It consists of an admissible shock $1\to-\tfrac12$ at speed $3/4$ and a centred
rarefaction on the strictly concave flux interval $[-1,-\tfrac12]$, followed by
the constant state $-1$. The shock chord residual factors as
$$f(z)-f(1)-\tfrac34(z-1)=(z-1)(z+\tfrac12)^2\le0\quad(-\tfrac12\le z\le1),$$
so the general entropy chord criterion gives admissibility. On the concave
interval, $f'(u)=3u^2$ is strictly decreasing and its inverse is
$\psi(\xi)=-\sqrt{\xi/3}$ for $3/4\le\xi\le3$; hence the fan solves the equation
pointwise and all entropy productions vanish there. The traces match
continuously at $x=3t$, and the initial trace is the stated Riemann datum. The
concave-hull prescription consists of the cubic arc on $[-1,-\tfrac12]$
followed by the chord from $(-\tfrac12,-\tfrac18)$ to $(1,1)$
([[lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality]],
[[def-kruzhkov-entropy-solution]]).

## Facts & Assumptions

**Given:** Countable Choice, the flux $f(u)=u^3$, the Riemann data $u_L=1>u_R=-1$, the composite profile $u$ of the statement, and a test function $\varphi\in C_c^\infty(\Pi_T)$.

[F1] Interface computation and shock data: a piecewise $C^1$ profile with a single jump at a ray $x=st$ has weak residual equal to the interface integral of $[f]-s[u]$; the Rankine--Hugoniot condition makes it vanish, and the chord criterion $F(z)(u^+-u^-)\ge0$ (with $F(z)=f(z)-f(u^-)-s(z-u^-)$ between the states) is equivalent to the entropy inequalities at the jump ([[thm-rankine-hugoniot-jump-condition]], [[lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality]], [[def-piecewise-smooth-shock-and-one-sided-traces]], [[def-distributional-weak-solution-of-a-scalar-conservation-law]]).

[F2] The strictly concave branch and its inverse: on $[-1,-\tfrac12]$ the derivative $f'(u)=3u^2$ is strictly decreasing from $3$ to $\tfrac34$, so it is invertible there, with inverse $\psi(\xi)=-\sqrt{\xi/3}$ on $[\tfrac34,3]$; $\psi$ is $C^1$ on the open interval and continuous on the closed one, and the chain rule applies on each smooth piece ([[thm-euclidean-inverse-function-theorem]], [[thm-chain-rule]]).

[F3] Self-similar calculus and measure bookkeeping: for $u(t,x)=\psi(x/t)$ one has $u_t+f'(u)u_x=\tfrac1t\psi'(\xi)\bigl(f'(\psi(\xi))-\xi\bigr)$; iterated integrals are handled by Fubini and the fundamental theorem of calculus, and a profile that is continuous across a ray produces no interface term there ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-ftc-second-part]], [[def-self-similar-riemann-problem]]).

[F4] The earlier example of this pair shows that the single-jump profile with the same data is a weak solution violating the entropy condition, so the composite wave is not the only weak solution of these data ([[cex-convex-flux-riemann-formula-fails-for-a-nonconvex-flux]]); uniqueness in the entropy class is [[cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions]].

## Proof

**Proof technique:** direct.

1.1 **The shock is admissible with speed $3/4$.** For the descending jump $u^-=1\to u^+=-\tfrac12$, the chord slope is $s=\bigl(f(-\tfrac12)-f(1)\bigr)/(-\tfrac12-1)=\bigl(-\tfrac18-1\bigr)/\bigl(-\tfrac32\bigr)=\tfrac34$, so $s[u]=\tfrac34\cdot(-\tfrac32)=-\tfrac98$ equals $[f]=-\tfrac98$: Rankine--Hugoniot holds. The residual is $F(z)=z^3-1-\tfrac34(z-1)=(z-1)\bigl(z^2+z+\tfrac14\bigr)=(z-1)(z+\tfrac12)^2$, which is $\le0$ on $[-\tfrac12,1]$; since $u^+-u^-=-\tfrac32<0$, the product $F(z)(u^+-u^-)\ge0$ and the chord criterion of [F1] makes the shock entropy-admissible. [F1]


1.2 **The rarefaction branch solves the equation.** By [F2], $\psi(\xi)=-\sqrt{\xi/3}$ is the inverse of $f'$ on $[-1,-\tfrac12]$; on the fan $u(t,x)=\psi(x/t)$ with $\xi=x/t$, so [F3] gives $u_t+f'(u)u_x=\tfrac1t\psi'(\xi)\bigl(f'(\psi(\xi))-\xi\bigr)=\tfrac1t\psi'(\xi)(\xi-\xi)=0$ for $\tfrac34<\xi<3$. At the right edge $\xi=3$, $\psi(3)=-1$ matches the constant state $-1$; at the left edge $\xi=\tfrac34$, $\psi(\tfrac34)=-\tfrac12$ is the right state of the shock. [F2, F3]


2.1 **The profile is a weak solution.** Splitting the test integral into the constant left region, the fan, the constant right region, and the interfaces: the outer regions contribute only boundary terms; the interface at $x=\tfrac34t$ is handled by the Rankine--Hugoniot computation of step 1.1, so its coefficient $[f]-s[u]$ vanishes; and at $x=3t$ the traces of $u$ (hence of $f(u)$) match continuously, so by [F3] no interface term arises. Adding the pieces, the weak residual vanishes, so $u$ is a distributional weak solution; the discrepancy with the initial step datum is supported in $(0,3t)$ with amplitude at most $2$, so the strong local $L^1$ trace holds. [F1, F3, step 1.1, step 1.2]


3.1 **All entropy inequalities hold.** For a convex $C^2$ pair $(\eta,q)$ with $q'=\eta'f'$, the production is computed piecewise: it vanishes on the constant regions; on the fan it equals $\eta'(u)\bigl(u_t+f'(u)u_x\bigr)=0$ by step 1.2, with no interface term at $x=3t$ because the traces of $\eta(u),q(u)$ match there; and at the shock it is the measure with coefficient $[q]-s[\eta]$, which is $\le0$ by the chord condition of step 1.1. Hence the entropy production is a nonpositive measure supported on $x=\tfrac34t$ for every convex $C^2$ pair. The Kruzhkov pairs $\eta_k(s)=|s-k|$ are obtained by uniform approximation on the bounded range $[-1,1]$ by the smooth convex pairs $\eta^\delta(s)=\sqrt{(s-k)^2+\delta^2}-\delta\to|s-k|$ with fluxes $q^\delta(s)=\int_k^s(\eta^\delta)'(z)f'(z)\,dz\to\operatorname{sgn}(s-k)(f(s)-f(k))$, so all Kruzhkov inequalities hold and, with the weak equation and trace of step 2.1, $u$ is a Kruzhkov entropy solution. [F1, step 2.1]


4.1 **Uniqueness and the concave hull.** By [F4], uniqueness in the entropy class identifies the constructed profile as the entropy solution of these Riemann data, even though the single-jump weak solution of the same data exists and is non-entropic. The concave hull of $f$ on $[-1,1]$ follows the cubic arc on $[-1,-\tfrac12]$ (where $f''=6u<0$, so $f$ is concave) and then the chord of slope $\tfrac34$ from $(-\tfrac12,-\tfrac18)$ to $(1,1)$; the fan and shock of the profile are exactly the entropy waves corresponding to this arc and chord. [F4, step 1.1, step 3.1] ∎
