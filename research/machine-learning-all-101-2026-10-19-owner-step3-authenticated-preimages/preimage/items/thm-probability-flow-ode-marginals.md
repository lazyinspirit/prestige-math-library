---
id: thm-probability-flow-ode-marginals
kind: theorem
title: Probability-flow ODE has the same one-time marginals
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: score-sdes-and-reverse-time-generation
dependency_level: 1
deps:
  - def-marginal-score-function
  - def-law-or-distribution-of-a-random-element
  - thm-dynkin-pi-lambda
  - thm-monotone-convergence-for-the-integral
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Yang Song et al., Score-Based Generative Modeling through Stochastic Differential Equations, Section 4.3 and Appendix D.1"
      url: "https://arxiv.org/pdf/2011.13456"
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations, Section 5.2, Theorem 5.4 and proof"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
    - title: "Maxim Raginsky, Stochastic Differential Equations: A Systems-Theoretic Approach, Section 2.3"
      url: "https://maxim.ece.illinois.edu/teaching/spring23/SDE_book.pdf"
---

## Statement

Let $d\ge1$, $T>0$, and let $P_t$ be Borel probability laws on $\mathbb R^d$ for $0\le t\le T$. Suppose each $P_t$ has a positive finite Lebesgue density $p_t$ with $\int_{\mathbb R^d}p_t(x)\,dx=1$. Let $b_t(x)\in\mathbb R^d$ and $\sigma_t(x)\in\mathbb R^{d\times m}$, where $m\ge1$, and put $a_t(x)=\sigma_t(x)\sigma_t(x)^{\mathsf T}$. Assume $a_t$ is symmetric, all displayed derivatives exist continuously, and time derivatives at the endpoints are one-sided. Suppose $p_t$ satisfies the forward Fokker–Planck equation

$$\partial_t p_t=-\sum_i\partial_i(b_{t,i}p_t)+\frac12\sum_{i,j}\partial_i\partial_j(a_{t,ij}p_t).$$

Define $s_t(x)=\nabla_x\log p_t(x)$ and $(\nabla\!\cdot a_t)_i(x)=\sum_j\partial_j a_{t,ij}(x)$, and set $v_t(x)=b_t(x)-\tfrac12(\nabla\!\cdot a_t)(x)-\tfrac12a_t(x)s_t(x)$. Assume $v$ has a global $C^1$ flow of diffeomorphisms $\Phi_{t,s}:\mathbb R^d\to\mathbb R^d$ for $0\le s,t\le T$, with $\Phi_{s,s}$ the identity, $\Phi_{t,r}\circ\Phi_{r,s}=\Phi_{t,s}$, $\partial_t\Phi_{t,s}(x)=v_t(\Phi_{t,s}(x))$, and $\partial_s\Phi_{t,s}(x)=-D_x\Phi_{t,s}(x)v_s(x)$, where $D_x$ denotes the Jacobian matrix in the state variable. For $Z_0$ with law $P_0$, let $Z_t=\Phi_{t,0}(Z_0)$. Then $Z_t$ has law $P_t$ for every $t\in[0,T]$. Thus the deterministic probability-flow ordinary differential equation (ODE) has the same one-time marginals as the probability-law solution of the displayed forward equation; no equality of path laws is asserted.

Write $C_c^1(\mathbb R^d)$ for continuously differentiable real-valued functions with compact support. Here a time-dependent family of probability laws $\mu_t$ weakly solves $\partial_t\mu_t+\nabla\!\cdot(v_t\mu_t)=0$ if, for every continuously differentiable $\varphi(t,x)$ with a common compact spatial support,

$$\int\varphi(t,x)\,\mu_t(dx)-\int\varphi(0,x)\,\mu_0(dx)=\int_0^t\int(\partial_r\varphi(r,x)+v_r(x)\cdot\nabla_x\varphi(r,x))\,\mu_r(dx)\,dr.$$

## Statement references

[Song et al., Section 4.3 and Appendix D.1, equations (35)–(38)](https://arxiv.org/pdf/2011.13456)

[Särkkä and Solin, Section 5.2, Theorem 5.4 and proof](https://users.aalto.fi/~asolin/sde-book/sde-book.pdf)

[Raginsky, Section 2.3](https://maxim.ece.illinois.edu/teaching/spring23/SDE_book.pdf)

## Facts & Assumptions

**Given:** The positive density family, Fokker–Planck equation, coefficient regularity, global flow, and initial law in the Statement.

[A1] All derivatives in the Statement exist continuously, and the flow is global, jointly $C^1$, and consists of diffeomorphisms satisfying both displayed flow derivative identities.

[F1] The marginal score is $s_t(x)=\nabla_x\log p_t(x)$ at every point where $p_t$ is positive, finite, and spatially differentiable. [[def-marginal-score-function]]

[F2] If $0\le f_1\le f_2\le\cdots$ are measurable and $f_n\uparrow f$, then $\int f_n\,d\mu\uparrow\int f\,d\mu$. [[thm-monotone-convergence-for-the-integral]]

[F3] A class containing a $\pi$-system that generates the Borel $\sigma$-algebra and is a $\lambda$-system contains that $\sigma$-algebra. [[thm-dynkin-pi-lambda]]

[F4] The law of a random element is its probability pushforward; equality of laws means equality on every Borel set. [[def-law-or-distribution-of-a-random-element]]

## Proof

**Given:** The hypotheses and notation in the Statement.

1.1 For symmetric $a_t$, the product rule gives $\sum_{i,j}\partial_i\partial_j(a_{t,ij}p_t)=\nabla\!\cdot((\nabla\!\cdot a_t)p_t+a_t\nabla p_t)$, since $\sum_j\partial_j(a_{t,ij}p_t)=(\nabla\!\cdot a_t)_ip_t+\sum_j a_{t,ij}\partial_jp_t$. By [F1], $\nabla p_t=p_ts_t$. Substitution into the Fokker–Planck equation therefore yields $\partial_t p_t+\nabla\!\cdot(v_tp_t)=0$. For a time-dependent test $\varphi$ with common compact spatial support, differentiate $\int\varphi(t,x)p_t(x)dx$, substitute this equation, and integrate by parts; this gives exactly the weak continuity identity stated above. [A1, F1, given, algebra]

1.2 For $Z_t=\Phi_{t,0}(Z_0)$ and any continuously differentiable time-dependent test $\varphi$ with common compact spatial support, the pathwise chain rule gives $\frac{d}{dt}\varphi(t,Z_t)=\partial_t\varphi(t,Z_t)+\nabla_x\varphi(t,Z_t)\cdot v_t(Z_t)$. The derivative is bounded on the compact support by continuity of $v$ and $\varphi$, so it is integrable; taking expectations and integrating in time proves that $Q_t:=\operatorname{Law}(Z_t)$ satisfies the same weak continuity equation and has $Q_0=P_0$. [A1, F4, given]

2.1 Fix $t\in[0,T]$ and $\psi\in C_c^1(\mathbb R^d)$, and set $\varphi(r,x)=\psi(\Phi_{t,r}(x))$ for $0\le r\le t$. The flow identities in [A1] imply $\partial_r\varphi+v_r\cdot\nabla_x\varphi=0$; the support stays compact because it is the image of $\operatorname{supp}\psi$ under the continuous maps $\Phi_{r,t}$ on the compact interval $[0,t]$. Applying the weak equation from steps 1.1 and 1.2 gives $\int\psi\,dP_t=\int\psi(\Phi_{t,0}(x))\,P_0(dx)=\int\psi\,dQ_t$. Thus $P_t$ and $Q_t$ agree on every $C_c^1$ test. [A1, F4, given, step 1.1, step 1.2]

3.1 For a bounded rational open box $R=\prod_{i=1}^d(a_i,b_i)$, let $h(z)$ be $0$ for $z\le0$, $3z^2-2z^3$ for $0<z<1$, and $1$ for $z\ge1$. Its derivative is $6z(1-z)\ge0$ on $(0,1)$ and is $0$ at the joins, so $h$ is nondecreasing and $C^1$. Set $\theta_n(u)=h(nu)$ and $g_n(x)=\prod_i\theta_n(x_i-a_i)\theta_n(b_i-x_i)$. Then $g_n\in C_c^1$, $0\le g_n\le1$, and $g_n\uparrow\mathbf1_R$ pointwise. Step 2.1 and [F2] give $P_t(R)=Q_t(R)$. Bounded rational open boxes, together with $\varnothing$ and $\mathbb R^d$, form a $\pi$-system. They generate the Borel sets because every point of an open set lies in a bounded rational open box contained in that set. The class $\mathcal D=\{A\text{ Borel}:P_t(A)=Q_t(A)\}$ contains $\mathbb R^d$, is closed under complements by equality of the total masses, and is closed under disjoint countable unions by countable additivity; hence it is a $\lambda$-system. By [F3], [F4], and the definition of law, $P_t=Q_t$ on all Borel sets, proving equality of the one-time marginals. [F2, F3, F4, step 2.1, algebra] ∎
