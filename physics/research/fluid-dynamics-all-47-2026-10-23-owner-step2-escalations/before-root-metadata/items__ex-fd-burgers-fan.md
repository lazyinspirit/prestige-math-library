---
id: ex-fd-burgers-fan
kind: example
title: Burgers centered rarefaction and trace
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

Assume the Axiom of Countable Choice. Let $T>0$, let $a,b\in\mathbb R$ with $a<b$, and set $F(z)=z^2/2$. For $t>0$ define
$$u(t,x)=\begin{cases}a,&x\leq at,\\ x/t,&at<x<bt,\\ b,&x\geq bt.\end{cases}$$
Let $u_0(x)=a$ for $x<0$ and $u_0(x)=b$ for $x>0$, with any value at $x=0$. Then $u$ is continuous for $t>0$, satisfies the initial-value weak identity for $u_t+\partial_xF(u)=0$, and satisfies with equality the initial entropy identity for every convex $\eta\in C^2(\mathbb R)$ with compatible flux $q'=\eta'F'$ and every Kružkov pair $\eta_k(z)=|z-k|$, $q_k(z)=\operatorname{sgn}(z-k)(F(z)-F(k))$, where $\operatorname{sgn}(0)=0$. For every compact interval $K\subset\mathbb R$ and $t>0$,
$$\int_K|u(t,x)-u_0(x)|\,dx\leq(b-a)(|a|+|b|)t,$$
so $u(t,\cdot)\to u_0$ strongly in $L^1_{\mathrm{loc}}(\mathbb R)$ as $t\downarrow0$.

## Example references

[[thm-fd-convex-scalar-riemann|strictly convex scalar Riemann construction]]

[[thm-cm-burgers-riemann-shock-and-rarefaction|published Burgers shock and rarefaction theorem]]

[[def-fd-conservation-system|initial weak and entropy formulations]]

[[def-countable-choice|Axiom of Countable Choice]]

## Facts & Assumptions

**Given:** Countable Choice; the states $a<b$; the Burgers flux, fan, initial data, and entropy pairs in the Example.

[F1] [[thm-fd-convex-scalar-riemann]]: for $F\in C^2(\mathbb R)$ with $F''>0$ on $[a,b]$, the inverse-characteristic fan in the Statement satisfies the initial-value weak identity, compatible convex entropy inequalities, and Kružkov inequalities.

[F2] [[thm-cm-burgers-riemann-shock-and-rarefaction]]: assuming Countable Choice, the Burgers fan is a weak solution and satisfies every declared convex $C^1$ and Kružkov entropy inequality, with equality.

[F3] [[def-countable-choice]]: Countable Choice is the choice assumption used by the imported Lebesgue weak formulation.

[F4] [[def-fd-conservation-system]]: for smooth tests compactly supported in $[0,T)\times\mathbb R$, the scalar initial weak identity is $\int_0^T\!\int_{\mathbb R}(u\varphi_t+F(u)\varphi_x)\,dx\,dt+\int_{\mathbb R}u_0\varphi(0,x)\,dx=0$; the entropy inequality replaces $(u,F,u_0)$ by $(\eta,q,\eta(u_0))$, requires a nonnegative test, and requires the whole integral to be nonnegative.

[A1] $a<b$.

## Proof

1.1 The Burgers flux satisfies $F'(z)=z$ and $F''(z)=1>0$ on $[a,b]$. Thus [F1] applies, and its inverse profile is $u=x/t$ for $at<x<bt$, with the two constant branches displayed in the Example. It gives the weak and entropy identities with the specified initial trace in the formulation of [F4]; [F2] independently confirms the same Lebesgue formulation under [F3]. [given, F1, F2, F3, F4, A1]

2.1 In the fan, $u_t=-x/t^2$ and $u_x=1/t$, so $u_t+u u_x=0$; the constant branches solve the equation, and the traces match at $x=at$ and $x=bt$. The fan values stay in $[a,b]$. The profile and initial step agree outside $[\min(0,at),\max(0,bt)]$, whose length is at most $t(|a|+|b|)$, and their values differ by at most $b-a$. This proves the stated local $L^1$ estimate, including when both characteristic speeds have the same sign. [given, F1, A1, algebra] ∎
