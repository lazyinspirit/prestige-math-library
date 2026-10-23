---
id: cex-fd-expansion-shock
kind: counterexample
title: Expansion shock fails entropy selection
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 6
deps:
  - thm-fd-convex-scalar-riemann
  - prop-fd-entropy-jump
  - thm-fd-rankine-hugoniot
  - def-fd-conservation-system
  - def-countable-choice
dependency_roles:
  thm-fd-convex-scalar-riemann: mathematical-premise
  prop-fd-entropy-jump: mathematical-premise
  thm-fd-rankine-hugoniot: mathematical-premise
  def-fd-conservation-system: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Constantine M. Dafermos, Hyperbolic Conservation Laws in Continuum Physics, 2nd ed., Chapter IV §§4.4–4.5"
      url: "https://yulia-petrova.github.io/teaching/shocks/Dafermos.pdf"
    - title: "Lawrence C. Evans, Entropy and Partial Differential Equations, Chapter V §§2–3"
      url: "https://math.berkeley.edu/~evans/entropy.and.PDE.pdf"
verification:
  precheck: pending
---

## Statement refuted

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$). The assertion that every weak jump satisfying Rankine–Hugoniot is entropy-admissible is false. For $T>0$, let $a<b$, $F(z)=z^2/2$, $s=(a+b)/2$, and set $u(t,x)=a$ for $x<st$ and $u(t,x)=b$ for $x>st$ on $(0,T)\times\mathbb R$, with arbitrary value on the shock line. Give it Riemann initial data $u_0(x)=a$ for $x<0$ and $u_0(x)=b$ for $x>0$, with arbitrary value at zero. This expansion shock is a weak solution but violates the entropy inequality for the convex entropy $\eta(z)=z^2/2$ and compatible entropy flux $q(z)=z^3/3$. The strictly convex scalar Riemann theorem supplies an entropy-admissible centered fan for the same flux and initial data; no general uniqueness conclusion is asserted.

## Statement references

[[thm-fd-rankine-hugoniot|vector Rankine–Hugoniot condition]]

[[prop-fd-entropy-jump|entropy jump residual]]

[[thm-fd-convex-scalar-riemann|strictly convex scalar Riemann construction]]

[[def-countable-choice|Axiom of Countable Choice]]

## Facts & Assumptions

**Given:** Countable Choice; the Burgers flux, the states $a<b$, the expansion-shock profile, and its initial data in the Statement.

[F1] [[thm-fd-rankine-hugoniot]]: on a piecewise $C^1$ scalar profile satisfying the classical equation on each side, the distributional residual is $[F]-s[u]$ on the interface, and it vanishes exactly under Rankine–Hugoniot.

[F2] [[prop-fd-entropy-jump]]: for a compatible convex $C^2$ entropy pair, the residual coefficient is $[q]-s[\eta]$, and the entropy inequality holds exactly when this coefficient is nonpositive at every interface point.

[F3] [[thm-fd-convex-scalar-riemann]]: if $F''>0$ between increasing initial states, its centered rarefaction profile satisfies the initial weak identity and every stated compatible convex entropy inequality.

[F4] [[def-fd-conservation-system]]: the initial weak identity is the test integral with the initial datum term for smooth tests compactly supported up to $t=0$; entropy admissibility is the nonpositive distributional residual, equivalently a nonnegative-test weak integral inequality with the initial entropy term.

[F5] [[def-countable-choice]]: Countable Choice is the explicit hypothesis for [F1]–[F3].

[A1] $a<b$.

## Proof

1.1 The two constant states solve the equation on their open sides. Their jump speed satisfies $s(b-a)=F(b)-F(a)$, so [F1] under [F5] makes the interior distributional residual zero. For a test $\varphi\in C_c^\infty([0,T)\times\mathbb R)$ in the class fixed by [F4], choose smooth temporal cutoffs $\chi_\delta$ that vanish on $[0,\delta]$, equal $1$ on $[2\delta,T)$, satisfy $\chi_\delta'\geq0$, and have $\int_0^T\chi_\delta'=1$. Apply the interior distributional identity to $\chi_\delta\varphi$. The term with $\chi_\delta'$ tends to $\int u_0(x)\varphi(0,x)\,dx$: on the compact spatial support, $u(t,\cdot)$ differs from $u_0$ only between $0$ and $st$, so $\|u(t,\cdot)-u_0\|_{L^1}\leq |a-b||s|t$, while $\varphi(t,\cdot)\to\varphi(0,\cdot)$ uniformly. The omitted integrals over $0<t<2\delta$ tend to zero because $u,F(u)$ and the test derivatives are bounded on that compact set. The limit is the initial weak identity. [given, F1, F4, F5, A1, algebra]

1.2 For $\eta(z)=z^2/2$ and $q(z)=z^3/3$, compatibility holds because $q'(z)=z^2=\eta'(z)F'(z)$, and $\eta$ is convex. The jump residual is
$$[q]-s[\eta]=\frac{b^3-a^3}{3}-\frac{a+b}{2}\frac{b^2-a^2}{2}=\frac{(b-a)^3}{12}>0.$$
By [F2] and [F4], a positive residual violates the entropy inequality. Thus this weak expansion shock is not entropy-admissible. [given, F2, F4, F5, A1, algebra]

2.1 Since $F''=1>0$ on $[a,b]$, [F3] under [F5] gives the centered rarefaction profile as an entropy-admissible solution for the same initial data. It differs from the step profile on a set of positive spatial measure for every $t>0$ because the fan interval has width $t(b-a)>0$. [given, F3, F5, A1, algebra] ∎
