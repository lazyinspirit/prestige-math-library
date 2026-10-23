---
id: ex-fd-burgers-shock
kind: example
title: Burgers shock entropy and Lax speeds
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 6
deps:
  - thm-fd-convex-scalar-riemann
  - thm-cm-burgers-riemann-shock-and-rarefaction
  - def-fd-conservation-system
  - def-countable-choice
dependency_roles:
  thm-fd-convex-scalar-riemann: mathematical-premise
  thm-cm-burgers-riemann-shock-and-rarefaction: mathematical-premise
  def-fd-conservation-system: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Constantine M. Dafermos, Hyperbolic Conservation Laws in Continuum Physics, 2nd ed., Chapter IV §§4.3–4.5"
      url: "https://yulia-petrova.github.io/teaching/shocks/Dafermos.pdf"
    - title: "Lawrence C. Evans, Entropy and Partial Differential Equations, Chapter V §§2–3"
      url: "https://math.berkeley.edu/~evans/entropy.and.PDE.pdf"
verification:
  precheck: pending
---

## Example

Assume the Axiom of Countable Choice. Let $T>0$, let $a,b\in\mathbb R$ with $a>b$, and set $F(z)=z^2/2$ and $s=(a+b)/2$. For $t>0$ define $u(t,x)=a$ for $x<st$ and $u(t,x)=b$ for $x>st$; assign any value at $x=st$. Let $u_0(x)=a$ for $x<0$ and $u_0(x)=b$ for $x>0$, with an arbitrary value at $x=0$. Then $u$ satisfies the initial-value weak identity for $u_t+\partial_xF(u)=0$. For every convex $\eta\in C^2(\mathbb R)$ and every $q\in C^1(\mathbb R)$ with $q'=\eta'F'$, it satisfies the initial-value entropy inequality with the convention that the distributional entropy residual is nonpositive. It also satisfies every Kružkov inequality for $\eta_k(z)=|z-k|$ and $q_k(z)=\operatorname{sgn}(z-k)(F(z)-F(k))$, where $\operatorname{sgn}(0)=0$. Its shock speed obeys $F'(b)<s<F'(a)$.

## Example references

[[thm-fd-convex-scalar-riemann|strictly convex scalar Riemann construction]]

[[thm-cm-burgers-riemann-shock-and-rarefaction|published Burgers shock and rarefaction theorem]]

[[def-fd-conservation-system|initial weak and entropy formulations]]

[[def-countable-choice|Axiom of Countable Choice]]

## Facts & Assumptions

**Given:** Countable Choice; the states $a>b$; the flux, profile, initial data, and entropy pairs in the Example.

[F1] [[thm-fd-convex-scalar-riemann]]: for a $C^2$ scalar flux with $F''>0$ between the two states, the stated shock profile is an initial-value weak solution, satisfies every compatible convex $C^2$ entropy inequality and every Kružkov inequality, and has the scalar Lax speed inequalities.

[F2] [[thm-cm-burgers-riemann-shock-and-rarefaction]]: assuming Countable Choice, for $F(z)=z^2/2$ and left state greater than right state, the same shock profile satisfies the Lebesgue weak formulation and all stated convex $C^1$ and Kružkov entropy inequalities.

[F3] [[def-countable-choice]]: Countable Choice is the choice assumption used by the imported Lebesgue weak formulation.

[F4] [[def-fd-conservation-system]]: for smooth tests compactly supported in $[0,T)\times\mathbb R$, the scalar initial weak identity is $\int_0^T\!\int_{\mathbb R}(u\varphi_t+F(u)\varphi_x)\,dx\,dt+\int_{\mathbb R}u_0\varphi(0,x)\,dx=0$; the entropy inequality replaces $(u,F,u_0)$ by $(\eta,q,\eta(u_0))$, requires a nonnegative test, and requires the whole integral to be nonnegative.

[A1] $a>b$.

## Proof

1.1 The Burgers flux is $C^2$ and $F''(z)=1>0$ on $[b,a]$. Therefore [F1] applies to these states and this profile, giving the initial weak identity, the compatible convex entropy inequalities, the Kružkov inequalities, and the scalar Lax pattern in the formulations fixed by [F4]. The imported formulation in [F2] has the same profile and explicitly assumes the Countable Choice recorded in [F3]. [given, F1, F2, F3, F4, A1]

2.1 Directly, $s=(a^2-b^2)/(2(a-b))=(a+b)/2$, while $F'(b)=b$ and $F'(a)=a$; hence $F'(b)<s<F'(a)$. For $b\leq k\leq a$, put $C(z)=F(b)+s(z-b)$, the chord of $F$ joining the endpoint fluxes. Then $F(k)-C(k)=\tfrac12(k-a)(k-b)$, so the Kružkov interface coefficient is $[q_k]-s[\eta_k]=2(F(k)-C(k))=(k-a)(k-b)\leq0$; for $k\notin[b,a]$, $\eta_k$ is affine on the state interval and $q_k$ is a constant-sign multiple of $F-F(k)$, so the coefficient is zero by the Rankine–Hugoniot equality. This agrees with the nonpositive residual convention. [given, F2, A1, step 1.1, algebra] ∎
