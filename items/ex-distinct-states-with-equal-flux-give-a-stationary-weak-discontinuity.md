---
id: ex-distinct-states-with-equal-flux-give-a-stationary-weak-discontinuity
kind: example
title: Distinct states with equal flux give a stationary weak discontinuity
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
justified_by: []
aliases: []
proof_strategy: direct
deps: [thm-rankine-hugoniot-jump-condition, lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality, def-kruzhkov-entropy-solution, def-self-similar-riemann-problem]
sources:
  references:
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§5.1–5.2, pp. 31–40"
    - title: "Alberto Bressan, “Hyperbolic Conservation Laws: An Illustrated Tutorial,” 2009, complete lecture notes"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§2.3, pp. 16–19"
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

## Example

Let $f(u)=u^2$ and $u_L=1>u_R=-1$. Since $f(u_L)=f(u_R)=1$, the
Rankine--Hugoniot speed of the jump is
$s=\dfrac{f(u_R)-f(u_L)}{u_R-u_L}=0$: the function $u(t,x)=1$ for $x<0$ and
$u(t,x)=-1$ for $x>0$ is a stationary weak solution of $u_t+(u^2)_x=0$ with the
corresponding Riemann data. It is also entropic: the chord condition of
[[lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality]] with
$u^-=1>u^+=-1$ requires the graph of $f(u)=u^2$ on $[-1,1]$ to lie below the
chord through the endpoints, and that chord is the constant line $1$, with
$u^2\le1$ throughout. Thus $f(u_L)=f(u_R)$ yields a zero-speed admissible
shock; admissibility was a separate check and did not follow from the jump
condition ([[def-kruzhkov-entropy-solution]], [[def-self-similar-riemann-problem]]).

## Facts & Assumptions

**Given:** the flux $f(u)=u^2$, the states $u_L=1>u_R=-1$, the stationary profile $u(t,x)=1$ for $x<0$ and $u(t,x)=-1$ for $x>0$, the Riemann datum $u_0(x)=1$ for $x<0$, $u_0(x)=-1$ for $x>0$, and a test function $\varphi\in C_c^\infty(\Pi_T)$.

[F1] Rankine--Hugoniot and the entropy criterion at a single jump: for a jump with speed $s$ the condition is $s(u_R-u_L)=f(u_R)-f(u_L)$, and, with $F(z)=f(z)-f(u_L)-s(z-u_L)$, the jump satisfies the entropy inequality for all convex $C^2$ entropy pairs if and only if $F(z)(u_R-u_L)\ge0$ for all $z$ between $u_L$ and $u_R$ ([[thm-rankine-hugoniot-jump-condition]], [[lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality]]).

[F2] Kruzhkov entropy solutions: the pairs are $\eta_k(s)=|s-k|$, $q_k(s)=\operatorname{sgn}(s-k)\bigl(f(s)-f(k)\bigr)$, and the distributional inequalities must hold for every $k\in\mathbb R$; the initial trace is the strong local $L^1$ trace ([[def-kruzhkov-entropy-solution]]).

[F3] The square function $s\mapsto s^2$ is (strictly) convex on $\mathbb R$ (its Jensen gap is $\lambda(1-\lambda)(a-b)^2>0$ for $a\ne b$ and $0<\lambda<1$), hence $f$ is a strictly convex flux, and $z^2\le1$ for $z\in[-1,1]$ while the chord through $(\pm1,1)$ is the horizontal line at height $1$.

[F4] The Riemann problem prescribes constant states on the two half-lines and admits self-similar solutions; the profile above is stationary and depends only on $\operatorname{sgn}x$, hence has the form $U(x/t)$ with $U(\xi)=1$ for $\xi<0$, $U(\xi)=-1$ for $\xi>0$ ([[def-self-similar-riemann-problem]]).

## Proof

**Proof technique:** direct.

1.1 **The jump speed vanishes.** With $u_L=1$, $u_R=-1$, $f(u)=u^2$: $f(u_L)=f(u_R)=1$, so [F1] gives $s=\bigl(f(u_R)-f(u_L)\bigr)/(u_R-u_L)=0/(-2)=0$. [F1]


1.2 **The stationary jump is a weak solution with the stated datum.** Since $u(t,x)=\pm1$ takes only the values $\pm1$, one has $f(u(t,x))=u(t,x)^2=1$ almost everywhere, and $u$ is independent of $t$. Hence $\int_{\Pi_T}\bigl(u\varphi_t+f(u)\varphi_x\bigr)dx\,dt=\int_{\mathbb R}u(x)\bigl[\int_0^T\varphi_t(t,x)\,dt\bigr]dx+\int_0^T\bigl[\int_{\mathbb R}\varphi_x(t,x)\,dx\bigr]dt=0+0=0$ for every $\varphi\in C_c^\infty(\Pi_T)$, because the inner $t$-integral of $\varphi_t$ vanishes by compact support in time and the inner $x$-integral of $\varphi_x$ vanishes by compact support in space. Since $u(t,\cdot)=u_0(\cdot)$ identically, the strong local $L^1$ initial trace condition holds with vanishing error. Thus $u$ is a distributional weak solution with Riemann datum $u_0$, and by [F4] it is the stationary self-similar profile of that Riemann problem. [F2, F4]


2.1 **Chord check.** For the jump $u^-=u_L=1>u^+=u_R=-1$ with speed $s=0$, [F1] gives $F(z)=z^2-1-0\cdot(z-1)=z^2-1\le0$ for $z\in[-1,1]$ by [F3], while $u_R-u_L=-2<0$; hence $F(z)(u_R-u_L)\ge0$ for every $z$ between the states, and the chord condition holds. Equivalently, the chord through $(-1,1)$ and $(1,1)$ is the constant line $1$ and the parabola $z^2$ lies below it on $[-1,1]$. [F1, F3, step 1.1]


3.1 **The Kruzhkov inequalities.** For general $k\in\mathbb R$, both $\eta_k(u)$ and $q_k(u)$ are piecewise constant with a single jump at $x=0$, and $u$ does not depend on $t$, so $\partial_t\eta_k(u)=0$ and $\partial_xq_k(u)=\bigl(q_k(u_R)-q_k(u_L)\bigr)\delta_0$ in distributions. With $f(s)=s^2$ one computes $q_k(u_R)-q_k(u_L)=(1-k^2)\bigl[\operatorname{sgn}(-1-k)-\operatorname{sgn}(1-k)\bigr]=-(1-k^2)\bigl[\operatorname{sgn}(1+k)+\operatorname{sgn}(1-k)\bigr]\le0$, because $1-k^2\ge0$ exactly when $|k|\le1$, where $\operatorname{sgn}(1+k)+\operatorname{sgn}(1-k)\ge0$, and for $|k|>1$ the last bracket vanishes. Hence all Kruzhkov entropy inequalities hold with a nonpositive measure. [F2, step 2.1]


4.1 **Conclusion.** The jump has speed $0$ by step 1.1, the nonzero difference of states produces a genuine discontinuity, and the entropy inequalities hold for all Kruzhkov pairs by step 3.1 (with the smooth-pair check of step 2.1 as the geometric form of the same condition), so $u$ is a bounded Kruzhkov entropy solution whose flux values at the two states coincide. The equal flux values were responsible for the vanishing speed, while admissibility had to be verified separately through the chord condition. [step 1.1, step 1.2, step 2.1, step 3.1] ∎
