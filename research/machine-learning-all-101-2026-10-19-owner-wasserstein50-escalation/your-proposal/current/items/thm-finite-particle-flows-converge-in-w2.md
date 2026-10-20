---
id: thm-finite-particle-flows-converge-in-w2
kind: theorem
title: Finite-particle flows converge to the measure-valued flow in W2
status: draft
dependency_level: 12
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-feature-measure-energy, thm-global-wasserstein-flow-existence-uniqueness-and-stability, thm-localized-wasserstein-flow, def-wasserstein-two-space-and-couplings, thm-wasserstein-two-is-a-metric, prop-existence-and-lower-semicontinuity-of-optimal-couplings, def-axiom-of-choice, def-localized-hilbert-lift, lem-feature-flow-escape-bound, lem-characteristics-unique-and-stable, lem-label-l2-space-is-separable-hilbert]
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the measure-valued and localized flows and supplies optimal W2 couplings; the atomic lift itself uses only a finite sum."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Luigi Ambrosio, Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
---
## Statement

Assume AC and the full feature-measure energy hypotheses. Let $\mu_0\in\mathcal P_2(\Omega)$ be concentrated on a common $Q_{r_0}$, and let $\mu_{m,0}=m^{-1}\sum_{i=1}^m\delta_{x_i^{(m)}(0)}$ be empirical laws with every particle in $Q_{r_0}$ and $W_2(\mu_{m,0},\mu_0)\to0$. Define $F_m(x_1,\ldots,x_m)=F(m^{-1}\sum_i\delta_{x_i})$. Here $\partial F_m(x)$ is the Euclidean Fréchet subdifferential: $p\in\partial F_m(x)$ when $F_m(y)\ge F_m(x)+p\cdot(y-x)+o(\|y-x\|)$ as $y\to x$ in $\Omega^m$, with the remainder divided by $\|y-x\|$ tending to zero. A classical particle subgradient flow is a locally absolutely continuous vector $x^{(m)}(t)\in\Omega^m$ satisfying $\dot x^{(m)}(t)\in-m\partial F_m(x^{(m)}(t))$ almost everywhere, under the inner product $m^{-1}\sum_i x_i\cdot y_i$. Let $x_i^{(m)}(t)$ be such flows and put $\mu_{m,t}=m^{-1}\sum_i\delta_{x_i^{(m)}(t)}$. If $\mu_t$ is the unique global measure-valued flow from $\mu_0$, then for every $T<\infty$ there is a finite constant $K_T$ independent of $m$ such that
$$\sup_{0\le t\le T}W_2(\mu_{m,t},\mu_t)\le e^{K_TT}W_2(\mu_{m,0},\mu_0)\longrightarrow0.$$
This is a deterministic continuity estimate in the initial W2 error; it asserts no statistical rate for random initial particles and no conclusion for stochastic gradient descent.

## Statement references

[[def-feature-measure-energy]]

[[thm-global-wasserstein-flow-existence-uniqueness-and-stability]]

[[thm-localized-wasserstein-flow]]

[[def-wasserstein-two-space-and-couplings]]

[Chizat and Bach, Theorem 2.6 and Appendix B.3](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Giuseppe Savaré, Chapter 11](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** AC, $\mu_0$, the empirical initial laws, and their particle flows.

[F1] On an atomic probability label space with mass $1/m$ per label, the Hilbert inner product is $m^{-1}\sum_i x_i\cdot y_i$ and the lifted energy is exactly $F_m$. [[def-localized-hilbert-lift]] [[def-feature-measure-energy]] [[lem-label-l2-space-is-separable-hilbert]]

[F2] The localized flow equation on this atomic label space is the particle subgradient equation with the stated normalization. [[thm-localized-wasserstein-flow]]

[F3] W2-convergent initial laws in the common $Q_{r_0}$ have convergent initial energies: the bounded gradients make $\Phi,V$ Lipschitz on $Q_{r_0}$, coupling Cauchy–Schwarz gives convergence of their integrals, and continuity of $R$ gives convergence of $F$. Their initial energies are thus uniformly bounded, so the escape lemma supplies one cutoff radius for both flows on $[0,T]$. [[def-feature-measure-energy]] [[lem-feature-flow-escape-bound]]

[F4] Localized flows with the same model velocity satisfy the stability estimate $W_2(\mu_t,\nu_t)\le e^{K_Tt}W_2(\mu_0,\nu_0)$. [[lem-characteristics-unique-and-stable]]

[F5] AC supplies the flow and optimal coupling constructions. [[def-axiom-of-choice]] [[prop-existence-and-lower-semicontinuity-of-optimal-couplings]]

## Proof


**Given:** AC and the hypotheses in the Statement.

1.1 Put the finite labels on the probability space $\{1,\ldots,m\}$ with mass $1/m$. The finite label sigma-algebra is countably generated, so the generalized label lemma gives a separable Hilbert space. Then $K=L^2(\{1,\ldots,m\};\mathbb R^d)$ has inner product $m^{-1}\sum_i x_i\cdot y_i$, and its lifted energy is $F(m^{-1}\sum_i\delta_{x_i})=F_m$ by [F1]. A Euclidean subgradient $p$ represents the functional derivative in the weighted metric by $mp$, since $m^{-1}\sum_i(mp_i)\cdot h_i=\sum_i p_i\cdot h_i$. This gives the normalization of the two inclusions; step 2.1 proves their local subdifferential identification and the converse for every particle path. [F1, F2, construct]

2.1 Fix $m$, a finite interval $[0,T]$, and any classical particle path from the Statement. Its coordinate image is compact. Fix $q\in Q_1$ and first choose $r>1+\max_{i,t}|x_i^{(m)}(t)-q|$. The cutoff enlargement condition then puts the image in $Q_r^m$. Choose $R>r$; the same condition gives a relative $\Omega^m$-neighborhood of the image inside $Q_R^m$. Set $A_R=\sup_{Q_R}\|d\Phi\|$, $B_R=\operatorname{Lip}_{Q_R}(d\Phi)$, and choose the finite Lipschitz and norm bounds $L_R,N_R$ for $dR$ on the closed convex hull of $\Phi(Q_R)$. On the atomic label space write $G_R(X)=R(\int\Phi(X)d\sigma)$. Its gradient in the weighted Hilbert metric is $s\mapsto d\Phi_{X(s)}^*\nabla R(\int\Phi(X)d\sigma)$. Also $\|\int\Phi(X)d\sigma-\int\Phi(Y)d\sigma\|\le A_R\|X-Y\|_K$. Adding and subtracting $d\Phi_{X(s)}^*\nabla R(\int\Phi(Y)d\sigma)$ therefore gives the Lipschitz bound
$$\|\nabla G_R(X)-\nabla G_R(Y)\|_K\le (L_RA_R^2+N_RB_R)\|X-Y\|_K.$$
Writing $C_R=L_RA_R^2+N_RB_R$, the smooth term is therefore $(-C_R)$-semiconvex in the weighted Hilbert metric, while the averaged potential is $\lambda_V$-semiconvex there. Since $\|X-Y\|_K^2=m^{-1}\sum_i|x_i-y_i|^2$, the corresponding Euclidean product coefficient for $F_m$ is $(\lambda_V-C_R)/m$. Because $Q_R^m$ and $\Omega^m$ agree locally along the path, the local Fréchet subdifferential in the Statement is the supporting subdifferential on $Q_R^m$ with this coefficient. Under the weighted Hilbert norm, $p\in\partial F_m(x)$ corresponds exactly to $mp\in\partial_{\lambda_V-C_R}E_R(x)$.

2.2 On a bounded neighborhood of the compact path image, the smooth feature gradient is bounded, and the two supporting inequalities for $V$ together with its bounded supporting selections give a local Lipschitz bound for the potential. Hence $F_m$ is locally Lipschitz there, so $e(t)=F_m(x^{(m)}(t))$ is absolutely continuous. At almost every time when $e$ and $x^{(m)}$ are differentiable and the inclusion holds, apply the semiconvex supporting inequality at $x^{(m)}(t)$ to $x^{(m)}(t+h)$ for positive and negative $h$. Dividing by $h$ and letting $h\to0$ gives
$$e'(t)=\sum_i p_i(t)\cdot\dot x_i^{(m)}(t)=-m\sum_i|p_i(t)|^2=-\|\dot x^{(m)}(t)\|_K^2.$$
Since $F_m\ge0$, integration shows that the path has square-integrable derivative on $[0,T]$. Step 2.1 therefore identifies it as a solution of the localized Hilbert gradient-flow inclusion, and uniqueness of that flow identifies it with the atomic localized flow. The escape estimate [F3] consequently applies to every particle path in the Statement. [F1, F2, step 1.1]

3.1 By [F3], for each fixed $T$ the particle flows, now identified with localized flows, and the measure flow remain inside a common larger cutoff $Q_R$ and solve the same localized equation. Apply [F4] on that cutoff to get $W_2(\mu_{m,t},\mu_t)\le e^{K_Tt}W_2(\mu_{m,0},\mu_0)$ for $0\le t\le T$. Since $e^{K_Tt}\le e^{K_TT}$ when $K_T\ge0$ (replace it by $\max(K_T,0)$ otherwise), taking the supremum and using the assumed initial convergence proves the result. [F3, F4, F5, step 1.1, step 2.2] ∎
