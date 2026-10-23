---
id: prop-fd-viscous-entropy-passage
kind: proposition
title: Entropy inequality under an assumed viscous limit
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-fd-conservation-system
  - thm-chain-rule-for-total-derivatives
  - thm-ftc-second-part
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
dependency_roles:
  def-fd-conservation-system: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Constantine M. Dafermos, Hyperbolic Conservation Laws in Continuum Physics, 2nd ed., Chapter IV §4.6"
      url: "https://yulia-petrova.github.io/teaching/shocks/Dafermos.pdf"
    - title: "Lawrence C. Evans, Entropy and Partial Differential Equations, Chapter V §2"
      url: "https://math.berkeley.edu/~evans/entropy.and.PDE.pdf"
verification:
  precheck: pending
---

## Statement

Let $T>0$, let $\Omega\subseteq\mathbb R^d$ be open, let $F\in C^2(\mathbb R;\mathbb R^d)$, and let $\eta\in C^2(\mathbb R)$ be convex. Let $q\in C^1(\mathbb R;\mathbb R^d)$ satisfy $q_j'(z)=\eta'(z)F_j'(z)$ for every $z\in\mathbb R$ and $1\leq j\leq d$. For each $\epsilon>0$, let $u^\epsilon:[0,T]\times\Omega\to\mathbb R$, with initial trace $u_0^\epsilon:=u^\epsilon(0,\cdot)$, and let $u:(0,T)\times\Omega\to\mathbb R$ and $u_0:\Omega\to\mathbb R$. Suppose $u^\epsilon$, $\partial_tu^\epsilon$, all first spatial derivatives, and all second spatial derivatives are continuous on $[0,T]\times K$ for every compact $K\subseteq\Omega$. Suppose $u^\epsilon$ solves
$$\partial_tu^\epsilon+\sum_{j=1}^d\partial_{x_j}F_j(u^\epsilon)=\epsilon\Delta u^\epsilon\quad\text{on }(0,T)\times\Omega,$$
Suppose $|u^\epsilon|,|u|\leq M$ almost everywhere for one finite $M$, $u^\epsilon\to u$ as $\epsilon\downarrow0$ strongly in $L^1_{\mathrm{loc}}((0,T)\times\Omega)$, and $u_0^\epsilon\to u_0$ as $\epsilon\downarrow0$ strongly in $L^1_{\mathrm{loc}}(\Omega)$. Here $f_\epsilon\to f$ strongly in $L^1_{\mathrm{loc}}(X)$ means $\int_K|f_\epsilon-f|\,d\lambda\to0$ for every compact $K\subseteq X$, with Lebesgue measure $\lambda$ on $X$. Then, for every nonnegative real test $\psi\in C_c^\infty([0,T)\times\Omega)$,
$$\int_0^T\!\!\int_\Omega\left(\eta(u)\partial_t\psi+\sum_{j=1}^dq_j(u)\partial_{x_j}\psi\right)\,dx\,dt+\int_\Omega\eta(u_0(x))\psi(0,x)\,dx\geq0.$$
This is a conditional passage for any family satisfying the stated smoothness, bound, and convergence assumptions; it asserts neither existence nor compactness of such a family.

## Statement references

[[def-fd-conservation-system|entropy-pair and initial-value weak formulations]]

## Facts & Assumptions

**Given:** the flux, entropy pair, smooth approximate solutions, uniform bound, strong local convergence, and compatible initial traces in the Statement.

[F1] [[def-fd-conservation-system]] defines $q_j'=\eta'F_j'$ and the initial entropy inequality by its nonnegative-test integral, including the initial trace term.

[F2] [[thm-chain-rule-for-total-derivatives]] gives the classical chain rule for compositions of differentiable Euclidean maps.

[F3] [[thm-ftc-second-part]] gives $\int_c^dG'=G(d)-G(c)$ when $G$ is differentiable on a closed interval and its derivative is integrable.

[F4] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] permits iterated integration of the compactly supported integrands over time and spatial coordinates.

[A1] Each $u^\epsilon$ is a classical solution on $(0,T)\times\Omega$, with the stated continuous initial trace.

[A2] The uniform range bound and both stated strong $L^1_{\mathrm{loc}}$ convergences hold.

## Proof

1.1 By [F2], the chain rule and compatibility give, pointwise for each $\epsilon>0$,
$$\partial_t\eta(u^\epsilon)+\sum_j\partial_{x_j}q_j(u^\epsilon)=\epsilon\eta'(u^\epsilon)\Delta u^\epsilon.$$
Applying the chain rule twice in each spatial coordinate and the product rule yields $\eta'(u^\epsilon)\Delta u^\epsilon=\Delta\eta(u^\epsilon)-\eta''(u^\epsilon)|\nabla u^\epsilon|^2$. Since $\eta''\geq0$, the entropy residual is at most $\epsilon\Delta\eta(u^\epsilon)$. [given, F1, F2, A1, algebra]

2.1 Multiply by $\psi\geq0$ and integrate. By [F4], the integrals can be taken iteratively in time and each spatial coordinate. Applying [F3] to the smooth compactly supported products gives integration by parts twice in each spatial coordinate and once in time, with $\psi$ vanishing near $T$, and yields
$$\int_0^T\!\!\int_\Omega\left(\eta(u^\epsilon)\psi_t+\sum_jq_j(u^\epsilon)\psi_{x_j}\right)\,dx\,dt+\int_\Omega\eta(u_0^\epsilon)\psi(0,x)\,dx\geq-\epsilon\int_0^T\!\!\int_\Omega\eta(u^\epsilon)\Delta\psi\,dx\,dt.$$
These integrations by parts are the one-dimensional FTC applied to the smooth compactly supported products in each coordinate and in time; no spatial boundary term remains. [given, F3, F4, A1, step 1.1]

3.1 Continuity of $u^\epsilon$ up to $t=0$ and its almost-everywhere bound on $(0,T)\times\Omega$ imply $|u_0^\epsilon|\leq M$ on $\Omega$: a value larger than $M$ at any $x_0\in\Omega$ would, by continuity, give a relative open neighborhood in $(0,T)\times\Omega$ of positive measure where $|u^\epsilon|>M$. For every compact $K\subseteq\Omega$, this bound and the strong initial convergence give $0\leq\int_K(|u_0|-M)_+\,dx\leq\int_K|u_0-u_0^\epsilon|\,dx\to0$, so $(|u_0|-M)_+=0$ almost everywhere on each such $K$. The countable compact exhaustion $K_N=\{x\in\Omega:|x|\leq N,\ \operatorname{dist}(x,\mathbb R^d\setminus\Omega)\geq1/N\}$ (taking the distance to the empty set to be $+\infty$) covers $\Omega$, hence $|u_0|\leq M$ almost everywhere on $\Omega$. The functions $\eta$ and $q_j$ are Lipschitz and bounded on $[-M,M]$. Thus [A2] implies local $L^1$ convergence of $\eta(u^\epsilon)$ and $q_j(u^\epsilon)$ to $\eta(u)$ and $q_j(u)$, and of $\eta(u_0^\epsilon)$ to $\eta(u_0)$. For a test supported up to $t=0$, the same convergence holds on its entire support: first restrict to $t\ge\delta>0$ and apply interior $L^1_{\mathrm{loc}}$ convergence, then bound the omitted strip $0<t<\delta$ by its measure times the uniform bounds of the compositions on $[-M,M]$, and let $\delta\downarrow0$. These uniform range bounds also give local integrability of every state, flux and entropy composition up to the initial boundary as required by [F1]. Moreover, the absolute value of the right-hand side in step 2.1 is at most $\epsilon\sup_{[-M,M]}|\eta|\int|\Delta\psi|$, which tends to zero. Passing to the limit yields the stated entropy inequality. [given, F1, A2, step 2.1, algebra] ∎
