---
id: thm-fd-convex-scalar-riemann
kind: theorem
title: Strictly convex scalar Riemann construction
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
deps:
  - prop-fd-entropy-jump
  - def-fd-lax-pattern
  - def-fd-conservation-system
  - thm-fd-rankine-hugoniot
  - def-fd-piecewise-traces
  - cor-mean-value-theorem
  - thm-ftc-second-part
  - thm-chain-rule-for-total-derivatives
  - def-countable-choice
dependency_roles:
  prop-fd-entropy-jump: mathematical-premise
  def-fd-lax-pattern: mathematical-premise
  def-fd-conservation-system: mathematical-premise
  thm-fd-rankine-hugoniot: mathematical-premise
  def-fd-piecewise-traces: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Constantine M. Dafermos, Hyperbolic Conservation Laws in Continuum Physics, 2nd ed., Chapters IV §§4.3–4.5 and Chapter VIII §8.3"
      url: "https://yulia-petrova.github.io/teaching/shocks/Dafermos.pdf"
    - title: "Lawrence C. Evans, Entropy and Partial Differential Equations, Chapter V §§2–3"
      url: "https://math.berkeley.edu/~evans/entropy.and.PDE.pdf"
    - title: "Piotr Gwiazda, Martin Michálek, and Agnieszka Świerczewska-Gwiazda, A Note on Weak Solutions of Conservation Laws and Energy/Entropy Conservation, §1"
      url: "https://arxiv.org/pdf/1706.10154"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$).

Let $F\in C^2(\mathbb R;\mathbb R)$. Let $a,b\in\mathbb R$. If $a\ne b$, assume $F''(z)>0$ for every $z$ in the closed interval with endpoints $a,b$. Set $u_0(x)=a$ for $x<0$ and $u_0(x)=b$ for $x>0$; its value at $x=0$ is arbitrary. For $t>0$ define the following profile:

- If $a=b$, let $u(t,x)=a$.
- If $a>b$, let $s=(F(a)-F(b))/(a-b)$ and let $u(t,x)=a$ for $x<st$ and $u(t,x)=b$ for $x>st$; its value on $x=st$ is arbitrary.
- If $a<b$, let $u(t,x)=a$ for $x/t\leq F'(a)$, let $u(t,x)=(F'|_{[a,b]})^{-1}(x/t)$ for $F'(a)<x/t<F'(b)$, and let $u(t,x)=b$ for $x/t\geq F'(b)$.

For every $T>0$ and every real test $\varphi\in C_c^\infty([0,T)\times\mathbb R)$, the initial-value weak identity
$$\int_0^T\!\!\int_{\mathbb R}\left(u\varphi_t+F(u)\varphi_x\right)\,dx\,dt+\int_{\mathbb R}u_0(x)\varphi(0,x)\,dx=0$$
holds. For every convex $\eta\in C^2(\mathbb R)$ and $q\in C^1(\mathbb R)$ with $q'=\eta'F'$, and for every $k\in\mathbb R$ with $\eta_k(z)=|z-k|$ and $q_k(z)=\operatorname{sgn}(z-k)(F(z)-F(k))$, the initial entropy inequality
$$\int_0^T\!\!\int_{\mathbb R}\left(\eta(u)\varphi_t+q(u)\varphi_x\right)\,dx\,dt+\int_{\mathbb R}\eta(u_0(x))\varphi(0,x)\,dx\geq0$$
holds for each nonnegative test $\varphi\in C_c^\infty([0,T)\times\mathbb R)$. In the rarefaction case $a<b$, both inequalities are equalities. In the shock case $a>b$, the speed satisfies $F'(b)<s<F'(a)$, so the shock has the scalar Lax pattern.

Here $C_c^\infty([0,T)\times\mathbb R)$ means restrictions of smooth functions defined on a neighborhood of $[0,T)\times\mathbb R$ with compact support there; the test may be nonzero at $t=0$. The sign function is $1$ on positive numbers, $0$ at zero, and $-1$ on negative numbers. The statement concerns these exact Riemann profiles and makes no general existence or uniqueness claim.

## Statement references

[[def-fd-conservation-system|initial-value weak and entropy formulations]]

[[def-fd-lax-pattern|scalar Lax shock convention]]

[[def-countable-choice|Axiom of Countable Choice]]

## Facts & Assumptions

**Given:** Countable Choice, the flux $F$, states $a,b$, initial data $u_0$, and the profiles in the Statement.

[F1] [[def-fd-conservation-system]] gives the weak identity with a possibly nonzero initial test trace and defines the entropy inequality by the nonnegative-test integral with the same initial trace.

[F2] [[thm-fd-rankine-hugoniot]] gives the distributional interface residual $[F]-s[u]$ for a piecewise $C^1$ scalar profile and states that it vanishes exactly when the Rankine–Hugoniot equality holds.

[F3] [[prop-fd-entropy-jump]] gives the entropy residual $[q]-s[\eta]$ at a piecewise smooth interface and its sign criterion.

[F4] [[def-fd-lax-pattern]] defines the scalar Lax pattern by $F'(u_R)<s<F'(u_L)$.

[F5] [[cor-mean-value-theorem]] states that if a real function is continuous on $[c,d]$ and differentiable on $(c,d)$, then some $\xi\in(c,d)$ satisfies $f(d)-f(c)=f'(\xi)(d-c)$.

[F6] [[thm-ftc-second-part]] states that if $G$ is differentiable on $[c,d]$ and $G'$ is integrable there, then $\int_c^dG'=G(d)-G(c)$.

[F7] [[thm-chain-rule-for-total-derivatives]] states the total derivative chain rule for differentiable Euclidean maps.

[F8] [[def-countable-choice]]: the Axiom of Countable Choice is assumed for the distributional jump suppliers.

[A1] When $a\ne b$, $F''>0$ on the closed interval with endpoints $a,b$.

[A2] The initial data are constant with values $a$ and $b$ on the two sides of $x=0$.

[A3] The Axiom of Countable Choice is assumed.

## Proof

1.1 If $a=b$, the profile and initial data are constant. For every compactly supported test, integration of $\varphi_t$ over $[0,T)$ gives $-\varphi(0,x)$ and integration of $\varphi_x$ over $\mathbb R$ gives zero. The weak identity follows; the same calculation with the constants $\eta(a)$ and $q(a)$ gives equality in every entropy identity. [given, F1, A2, algebra]

1.2 Suppose $a>b$. Apply [F5] to $F$ on $[b,a]$ to obtain $s=F'(\xi)$ for some $\xi\in(b,a)$. Apply [F5] to $F'$ on any subinterval of $[b,a]$; since its derivative $F''$ is positive, $F'$ is strictly increasing there. Hence $F'(b)<s<F'(a)$, which is the scalar Lax pattern in [F4]. [given, F4, F5, A1, algebra]

1.3 Suppose $a<b$. Applying [F5] to $F'$ on any subinterval of $[a,b]$ shows it is strictly increasing, so it has an inverse $g$ on $[F'(a),F'(b)]$. This inverse is continuous: for each interior $z$, strict inequalities $F'(z-\delta)<F'(z)<F'(z+\delta)$ trap $g(y)$ near $z$ whenever $y$ is sufficiently near $F'(z)$, and the endpoint argument is one-sided. For $y=F'(z)$, the difference quotient $(g(y+h)-z)/h$ equals $(x-z)/(F'(x)-F'(z))$ with $x=g(y+h)$; as $h\to0$, continuity gives $x\to z$, and differentiability of $F'$ gives limit $1/F''(z)$. Thus $g'(y)=1/F''(g(y))$ on the interior. Applying [F7] to $u(t,x)=g(x/t)$ gives $u_t=-x/(t^2F''(u))$ and $u_x=1/(tF''(u))$, whence $u_t+F'(u)u_x=0$. The constant branches solve the equation too, and the profile is continuous at both fan edges. [given, F5, F7, A1, construct, algebra]

2.1 The shock is constant on each open side, so the classical equation holds there. Its traces are $u_L=a$ and $u_R=b$, and the Rankine–Hugoniot coefficient is $[F]-s[u]=F(b)-F(a)-s(b-a)=0$. By [F2] under [F8], the distributional equation holds on $(0,T)\times\mathbb R$. [given, A2, F2, F8, step 1.2, algebra]

2.2 The traces at each fan edge agree, so both the state and flux jumps vanish there. By [F2], the distributional conservation residual is zero; hence the weak equation holds on $(0,T)\times\mathbb R$. [given, F2, step 1.3]

3.1 On any compact spatial set, $u(t,\cdot)$ differs from $u_0$ only between $0$ and $st$, an interval of length $|s|t$, and $|u-u_0|\leq|a-b|$. Hence $\|u(t,\cdot)-u_0\|_{L^1(K)}\leq |a-b||s|t$. For an arbitrary initial-boundary test $\varphi$, take smooth cutoffs $\chi_\epsilon$ that vanish on $[0,\epsilon]$, equal $1$ for $t\geq2\epsilon$, and have $\chi_\epsilon'\geq0$ with integral $1$. Apply the interior weak identity from step 2.1 to $\chi_\epsilon\varphi$. The term $\int u\chi_\epsilon'\varphi$ tends to $\int u_0\varphi(0,\cdot)$ by the displayed local $L^1$ estimate and uniform continuity of $\varphi$; the terms over $0<t<2\epsilon$ tend to zero because $u,F(u)$ and the test derivatives are bounded on the compact support. Taking the limit gives the initial weak identity. [given, F1, step 2.1, A1, algebra]

4.1 Let $\eta\in C^2(\mathbb R)$ be convex with compatible flux $q$, and let $C(z)=F(b)+s(z-b)$ be the chord joining $(b,F(b))$ to $(a,F(a))$. For $b<z<a$, [F5] gives points $\xi_1\in(b,z)$ and $\xi_2\in(z,a)$ whose derivatives equal the secant slopes on $[b,z]$ and $[z,a]$. Applying [F5] to $F'$ between $\xi_1$ and $\xi_2$ shows $F'(\xi_1)<F'(\xi_2)$; rearranging the secant-slope inequality gives $F(z)<C(z)$. At the endpoints $F=C$. Convexity of $\eta$ gives $\eta''\geq0$, since its nonnegative symmetric second differences divided by $h^2$ converge to $\eta''$. The jump coefficient is
$$[q]-s[\eta]=-\int_b^a\eta'(z)(F'(z)-s)\,dz=\int_b^a\eta''(z)(F(z)-C(z))\,dz\leq0.$$
The integral identity follows by applying [F6] to the $C^1$ function $\eta'(F-C)$; its endpoint values are zero. By [F3] under [F8] the entropy residual is nonpositive. Apply the cutoff argument of step 3.1 to this interior entropy inequality. The entropy density is Lipschitz on $[b,a]$, so the local $L^1$ trace estimate in step 3.1 gives the initial entropy term; boundedness makes the omitted time strip vanish. [given, F3, F5, F6, F8, step 3.1, A1, algebra]

4.2 For $k\notin[b,a]$, $\eta_k$ is affine on the state interval and $[q_k]-s[\eta_k]=0$ by the Rankine–Hugoniot equality. For $b\leq k\leq a$, direct substitution gives $[q_k]-s[\eta_k]=2(F(k)-C(k))\leq0$, with equality at $k=b,a$. Apply [F3] and the cutoff argument of step 3.1 to the interior Kružkov inequality. Both $\eta_k$ and $q_k$ are Lipschitz on $[b,a]$, so the local trace and bounded-strip limits give the required initial term. [given, F3, step 2.1, step 3.1, A1, algebra]

4.3 Write $\alpha=F'(a)$ and $\beta=F'(b)$, so $\alpha<\beta$ by [A1]. The fan and the initial step can differ only on $[\min(0,\alpha t),\max(0,\beta t)]$, whose length is $t(\max(0,\beta)-\min(0,\alpha))\leq t(|\alpha|+|\beta|)$. On this interval both values lie in $[a,b]$, so $\|u(t,\cdot)-u_0\|_{L^1(K)}\leq(b-a)t(|\alpha|+|\beta|)$ for every compact $K$. Since $F$ is Lipschitz on $[a,b]$, its composition has the same local strong-trace property. Apply the same cutoff argument as in step 3.1 to the interior weak identity of step 2.2; the local $L^1$ bound makes the cutoff boundary term converge to the prescribed initial value, and boundedness makes the omitted time strip vanish. This proves the weak identity with the prescribed initial data. [given, F1, step 2.2, step 3.1, A1, algebra]

5.1 For each compatible convex $C^2$ pair, [F7] and $q'=\eta'F'$ give $\partial_t\eta(u)+\partial_xq(u)=\eta'(u)(u_t+F'(u)u_x)=0$ in the fan. Outside the fan both compositions are constant. Their traces agree at the edges, so [F3] gives zero interface residual. Apply the cutoff argument of step 4.3 to this interior identity; the Lipschitz continuity of $\eta$ and $q$ on $[a,b]$ gives the required initial entropy term. [given, F3, F7, step 1.3, step 4.3, A1, algebra]

6.1 Fix $k\in\mathbb R$. If $k\notin[a,b]$, $\eta_k$ is affine on the range of $u$ and the chain-rule computation of step 5.1 applies directly. If $k\in[a,b]$, split the fan at the ray $x=tF'(k)$; on both open pieces the Kružkov compositions are $C^1$ and [F7] gives zero classical entropy residual. At the new interface both $\eta_k(u)$ and $q_k(u)$ have equal traces because $u=k$ there and $q_k(k)=0$; the interface calculation from [F2] then gives zero singular residual. Apply the cutoff argument of step 4.3 to the resulting interior inequality; both compositions are Lipschitz on $[a,b]$, so the local trace estimate supplies the initial term. This proves every stated inequality, with equality for the fan. [given, F2, F7, step 1.3, step 4.3, step 5.1, A1, algebra] ∎
