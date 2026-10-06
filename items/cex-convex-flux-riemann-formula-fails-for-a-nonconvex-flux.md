---
id: cex-convex-flux-riemann-formula-fails-for-a-nonconvex-flux
kind: counterexample
title: The convex-flux Riemann formula fails for a nonconvex flux
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
justified_by: []
aliases: []
proof_strategy: direct
deps: [thm-riemann-solver-for-strictly-convex-scalar-flux, lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality, thm-rankine-hugoniot-jump-condition, def-self-similar-riemann-problem, def-kruzhkov-entropy-solution, def-distributional-weak-solution-of-a-scalar-conservation-law, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-ftc-second-part, thm-chain-rule, def-countable-choice, cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions]
sources:
  references:
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§6.3 and Example 6.7, pp. 55–58"
    - title: "Alberto Bressan, “Hyperbolic Conservation Laws: An Illustrated Tutorial,” 2009, complete lecture notes"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§3.1, pp. 21–24"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) for the analytic prerequisites used below.

Let $f(u)=u^3$ and take the Riemann data $u_L=1$ for $x<0$, $u_R=-1$ for
$x>0$. The single jump
$$u(t,x)=\begin{cases}1,&x<t,\\[2pt]-1,&x>t\end{cases}$$
has Rankine--Hugoniot speed $s=1$ and is a distributional weak solution with
these data: integration by parts on the two sides leaves only the interface
coefficient $s[u]-[f]=1(-2)-(-2)=0$. Its strong local $L^1$ trace is the
stated datum because the discrepancy is supported on $0<x<t$ and has amplitude
$2$. It is not a Kruzhkov entropy solution. For $k=-\tfrac12$, the Kruzhkov
pair has $\eta_k(1)=\tfrac32$, $\eta_k(-1)=\tfrac12$, $q_k(1)=\tfrac98$, and
$q_k(-1)=\tfrac78$, hence
$$[q_k]-s[\eta_k]=-\tfrac14-(-1)=\tfrac34>0,$$
violating the required nonpositive entropy production. Equivalently, the chord
from $(-1,-1)$ to $(1,1)$ is $z\mapsto z$, while $z^3-z>0$ on $(-1,0)$ and
$z^3-z<0$ on $(0,1)$, so the graph fails the required one-sided condition in
[[lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality]]. The
strictly convex Riemann solver theorem does not apply: $f''(u)=6u$ changes sign
and $f'$ is not monotone on $[-1,1]$. Thus its formula does not extend to this
nonconvex flux; the concave-hull construction gives the corresponding
composite entropy wave
([[def-self-similar-riemann-problem]],
[[def-kruzhkov-entropy-solution]]).

## Facts & Assumptions

**Given:** Countable Choice, the flux $f(u)=u^3$, the states $u_L=1>u_R=-1$, the Riemann datum $u_0(x)=1$ for $x<0$, $u_0(x)=-1$ for $x>0$, the single-jump profile $u$ above, and a test function $\varphi\in C_c^\infty(\Pi_T)$.

[F1] For any constant-state jump $A\to B$ across $x=st$, write $u=A+(B-A)\mathbf1_{x>st}$. Fubini and one-dimensional FTC, as in [F3], give $\partial_t\mathbf1_{x>st}=-s\delta_{x=st}$ and $\partial_x\mathbf1_{x>st}=\delta_{x=st}$, where $\delta_{x=st}$ pairs with $\varphi$ as $\int\varphi(t,st)dt$. Thus the weak residual is $([f]-s[u])\delta_{x=st}$. Its vanishing is the Rankine--Hugoniot relation ([[thm-rankine-hugoniot-jump-condition]], [[def-distributional-weak-solution-of-a-scalar-conservation-law]]). The same computation applies to smooth regions separated by rays, with the regionwise classical residual and the trace-jump terms added.

[F2] Entropy production at a jump: the distribution $\partial_t\eta(u)+\partial_xq(u)$ is the measure $\bigl([q]-s[\eta]\bigr)\delta_\Gamma$ with $\delta_\Gamma=\delta_{x=st}$ as defined in [F1], and the entropy inequality holds at the jump if and only if $[q]-s[\eta]\le0$; for the Kruzhkov pairs $\eta_k(s)=|s-k|$, $q_k(s)=\operatorname{sgn}(s-k)(f(s)-f(k))$ this condition is necessary for $u$ to be a Kruzhkov entropy solution ([[lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality]], [[def-kruzhkov-entropy-solution]]).

[F3] Elementwise calculus: Fubini's theorem and the fundamental theorem of calculus evaluate the one-sided integrals and the moving-endpoint terms in the interface computation, and the chain rule computes the derivative of the cubed flux ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-ftc-second-part]], [[thm-chain-rule]]).

[F4] Bounded Kruzhkov entropy solutions with identical initial data are unique ([[cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions]]).


## Proof

**Proof technique:** direct.

1.1 **Speed, weak solvability and the initial trace.** With $u_L=1$, $u_R=-1$, $f(u)=u^3$: $[u]=u_R-u_L=-2$ and $[f]=f(u_R)-f(u_L)=-1-1=-2$, so the Rankine--Hugoniot speed is $s=[f]/[u]=1$. By [F1] the weak residual of the jump profile is $([f]-s[u])\delta_{x=st}$, which vanishes because $s[u]=1\cdot(-2)=-2=[f]$; hence $u$ is a distributional weak solution. For $t>0$ the set where $u(t,x)\ne u_0(x)$ is contained in the interval $(0,t)$ (the region swept by the moving discontinuity compared with the initial step at $0$), of length $t$ and amplitude at most $2$, so $\int_K|u(t,x)-u_0(x)|\,dx\le2t\to0$ for every compact $K$: the strong local $L^1$ trace is $u_0$. [F1, F3]


1.2 **Failure of the Kruzhkov inequality at $k=-\tfrac12$.** For $k=-\tfrac12$, $\eta_k(1)=|1+\tfrac12|=\tfrac32$, $\eta_k(-1)=|-1+\tfrac12|=\tfrac12$, $\eta_k(1)-\eta_k(-1)=1$; and $q_k(s)=\operatorname{sgn}(s+\tfrac12)(s^3+\tfrac18)$ gives $q_k(1)=1\cdot\tfrac98=\tfrac98$, $q_k(-1)=(-1)\cdot(-\tfrac78)=\tfrac78$, so $[q_k]=q_k(-1)-q_k(1)=-\tfrac14$ and $[\eta_k]=\eta_k(-1)-\eta_k(1)=-1$. By [F2] the entropy production measure is $\bigl([q_k]-s[\eta_k]\bigr)\delta_\Gamma=\bigl(-\tfrac14+1\bigr)\delta_\Gamma=\tfrac34\,\delta_\Gamma>0$; testing against a nonnegative test function concentrated near the interface produces a strictly positive entropy production, so the Kruzhkov entropy inequality fails and $u$ is not a Kruzhkov entropy solution. [F2]


1.3 **The composite weak solution.** Put $c=3/4$ and define $v(t,x)=1$ for $x<ct$, $v(t,x)=-\sqrt{x/(3t)}$ for $ct<x<3t$, and $v(t,x)=-1$ for $x\ge3t$. At the shock the traces are $1$ and $-1/2$, with $[v]=-3/2$ and $[f]=-9/8=c[v]$. On the fan, $\psi(\xi)=-\sqrt{\xi/3}$ satisfies $f\prime(\psi(\xi))=\xi$, so $v_t+f\prime(v)v_x=t^{-1}\psi\prime(\xi)(-\xi+f\prime(\psi(\xi)))=0$. At $x=3t$ the traces match. Regionwise integration using [F1, F3] therefore gives zero weak residual. The discrepancy with the initial datum is confined to $(0,3t)$ and has amplitude at most $2$, so its local $L^1$ norm is at most $6t$; this supplies the strong trace and the Cauchy boundary term. [F1, F3]


2.1 **Chord condition and nonconvexity.** With $u^-=1$, $u^+= -1$ and $s=1$, the chord residual is $F(z)=f(z)-f(1)-s(z-1)=z^3-1-(z-1)=z^3-z$, and the criterion of [[lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality]] requires $F(z)(u^+-u^-)\ge0$, that is, $F(z)\le0$ on $[-1,1]$. But $F(z)=z(z-1)(z+1)>0$ for $z\in(-1,0)$, so the chord condition fails, independently confirming the entropy failure of step 1.2. Moreover $f''(u)=6u$ changes sign on $[-1,1]$, so $f'$ is not increasing and the hypotheses of the strictly convex Riemann solver [[thm-riemann-solver-for-strictly-convex-scalar-flux]] are not satisfied. [F3, step 1.2]



2.2 **Entropy admissibility of the composite.** At its descending shock the chord residual is $z^3-1-c(z-1)=(z-1)(z+1/2)^2\le0$ for $-1/2\le z\le1$. Thus the chord criterion of [F2] gives $[q]-c[\eta]\le0$ for every convex $C^2$ pair. On the smooth fan the entropy residual is $\eta\prime(v)(v_t+f\prime(v)v_x)=0$, and it vanishes on both constant regions; matching traces at $x=3t$ give no interface measure. Hence every smooth convex entropy inequality holds. For each $k$, take $\eta_\delta(z)=\sqrt{(z-k)^2+\delta^2}-\delta$ and $q_\delta(z)=\int_k^z\eta_\delta\prime(r)f\prime(r)dr$. On the bounded range, $\eta_\delta\to|z-k|$ uniformly. The fluxes converge uniformly to $\operatorname{sgn}(z-k)(f(z)-f(k))$: outside an arbitrarily small interval about $k$, the derivatives converge uniformly to the sign, and inside it the integral error is bounded by twice its length times a bound for $|f\prime|$. Passing against compact tests gives every Kruzhkov inequality. With step 1.3 and [F4], $v$ is the unique entropy solution. [F2, F3, F4, step 1.3]

3.1 **The concave hull and conclusion.** On $[-1,-1/2]$ the hull follows $z^3$; on $[-1/2,1]$ it is $\ell(z)=1+c(z-1)$. The residual in step 2.2 shows $\ell\ge z^3$ on the latter interval. The arc is concave, and its derivative decreases to $3/4$ at $-1/2$, matching the slope of $\ell$, so the joined function is a concave majorant. Any concave majorant lies above the cubic on the arc and above the line joining the values at $-1/2$ and $1$ on the chord interval; it therefore lies above this function. This proves it is the least concave majorant. Its arc and chord yield exactly the fan and shock verified in steps 1.3--2.2. The single shock of step 1.1 is weak but non-entropic, whereas this composite is entropic, proving the claimed failure of the convex-flux formula and its replacement here. [step 1.1, step 1.2, step 1.3, step 2.2] ∎
