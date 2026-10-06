---
id: ex-hamilton-jacobi-primitive-of-a-burgers-solution
kind: example
title: The Hamilton--Jacobi primitive of a Burgers solution
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: direct
deps: [ex-burgers-rarefaction-riemann-solution, def-kruzhkov-entropy-solution, def-viscosity-subsolution-and-supersolution, thm-fermat-for-euclidean-local-extrema, thm-hamilton-jacobi-conservation-law-correspondence-in-one-dimension, def-countable-choice]
sources:
  references:
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§6.1, (6.4), pp. 50–52 (Burgers rarefaction); its primitive and viscosity verification are computed locally"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) for the analytic prerequisites used below.

Let $f(u)=\tfrac12u^2$ and let $u$ be the Burgers rarefaction with Riemann data
$u_0=\mathbf 1_{(0,\infty)}$
([[ex-burgers-rarefaction-riemann-solution]]): $u(t,x)=0$ for $x\le0$,
$u(t,x)=x/t$ for $0<x<t$, and $u(t,x)=1$ for $x\ge t$. Its normalized
primitive is
$$U(t,x)=\int_{-\infty}^xu(t,y)\,dy=\begin{cases}0,&x\le0,\\[2pt] x^2/(2t),&0<x<t,\\[2pt]x-t/2,&x\ge t.\end{cases}$$
For every $t>0$, $U$ is $C^1$ across both rays $x=0$ and $x=t$, satisfies
$U_t+\tfrac12(U_x)^2=0$ pointwise, and has $U_x=u$. It is Lipschitz on
$[0,\infty)\times\mathbb R$, but $u_0\notin L^1(\mathbb R)$ and
$U_0(x)=x_+$ is unbounded, so this is not an instance of the
bounded-primitive correspondence theorem
([[def-kruzhkov-entropy-solution]],
[[def-viscosity-subsolution-and-supersolution]]).

## Facts & Assumptions

**Given:** Countable Choice, the flux $f(u)=\tfrac12u^2$, the rarefaction profile $u$ above, and the function $U$ defined piecewise in the statement.

[F1] The Burgers rarefaction is the entropy solution of the Riemann problem with datum $\mathbf 1_{(0,\infty)}$: weak conservation law, all Kruzhkov entropy inequalities, and the strong local $L^1$ trace ([[ex-burgers-rarefaction-riemann-solution]], [[def-kruzhkov-entropy-solution]]).

[F2] Viscosity solutions: at a local maximum of $U-\phi$, the subsolution test requires $\phi_t+\tfrac12(\phi_x)^2\le0$; at a local minimum of $U-\phi$, the supersolution test requires $\phi_t+\tfrac12(\phi_x)^2\ge0$ ([[def-viscosity-subsolution-and-supersolution]]). Since $U$ is $C^1$ at every positive-time point, Fermat's theorem gives $D\phi=DU$ at either type of contact ([[thm-fermat-for-euclidean-local-extrema]]).

[F3] The Hamilton--Jacobi correspondence theorem applies to (i) bounded Lipschitz initial primitives or (ii) compactly supported $L^1\cap L^\infty$ initial derivatives. Here $U_0(x)=x_+$ is unbounded and $u_0=\mathbf1_{(0,\infty)}\notin L^1$, so this example falls outside both data classes ([[thm-hamilton-jacobi-conservation-law-correspondence-in-one-dimension]]).

## Proof

**Proof technique:** direct.

1.1 **The integral formula.** For $x\le0$ the integrand vanishes on $(-\infty,x]$, so $U(t,x)=0$. For $0<x<t$, $U(t,x)=\int_0^x(y/t)\,dy=x^2/(2t)$; the fan contributes $\int_0^t(y/t)dy=t/2$, so for $x\ge t$, $U(t,x)=t/2+\int_t^x1\,dy=t/2+x-t=x-t/2$, which is the displayed formula. [F1, given]


2.1 **Derivatives and $C^1$ matching.** On $x<0$, $U_t=U_x=0$; on $0<x<t$, $U_t=-x^2/(2t^2)$ and $U_x=x/t$; on $x>t$, $U_t=-1/2$ and $U_x=1$. At $x=0$: the values tend to $0$ from both sides, $U_x\to0$ from below and $x/t\to0$ from above, and $U_t\to0$ from below and $-x^2/(2t^2)\to0$ from above, so all three quantities match. At $x=t$: the values are $t^2/(2t)=t/2$ from the middle and $t-t/2=t/2$ from the right; the slopes are $t/t=1$ from the middle and $1$ from the right; the time derivatives are $-t^2/(2t^2)=-1/2$ from the middle and $-1/2$ from the right, so again all three match. Hence $U\in C^1((0,\infty)\times\mathbb R)$ and $U_x=u$ everywhere. [given, step 1.1]


3.1 **The equation holds pointwise.** Using the derivatives of step 2.1: on $x<0$, $U_t+\tfrac12(U_x)^2=0$; on $0<x<t$, $-\tfrac{x^2}{2t^2}+\tfrac12\tfrac{x^2}{t^2}=0$; on $x>t$, $-\tfrac12+\tfrac12\cdot1=0$. Since $U$ is $C^1$ across the rays by step 2.1, the equation holds at every point of $(0,\infty)\times\mathbb R$, including the rays. [given, step 2.1]


4.1 **Viscosity and Lipschitz properties.** At any $C^1$ test contact point of $U$ with a test function $\phi$, Fermat's theorem gives $D\phi=DU$ there by [F2]; since $U$ satisfies the equation pointwise with $DU=(\phi_t,\phi_x)$ at that point, both the subsolution and supersolution inequalities hold there with equality. Hence $U$ is both a viscosity subsolution and supersolution, i.e. a viscosity solution (a fact not needed for the correspondence but following from the $C^1$ regularity). Moreover $|U_x|\le1$ and $|U_t|\le1/2$ on the positive-time strip: $|U_x|=|u|\le1$, and $|U_t|=x^2/(2t^2)<1/2$ on the fan and $|U_t|\le1/2$ on the outer branches is bounded. The gradient norm is at most $\sqrt{5/4}<2$ on each smooth region. The restrictions to the rays $x=0$, $x=t$, and the initial line $t=0$ are also $2$-Lipschitz. Any segment in the convex half-plane $[0,\infty)\times\mathbb R$ splits into finitely many pieces lying in these regions or on a boundary ray; integrating the derivative bound on each piece and using the continuous matching gives a global Lipschitz bound. Finally, [F3] shows that $u_0=\mathbf 1_{(0,\infty)}\notin L^1$ and its primitive $x_+$ is unbounded, so neither data class in the correspondence theorem applies. [F1, F2, F3, step 2.1, step 3.1] ∎
