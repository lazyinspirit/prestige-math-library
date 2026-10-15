---
id: thm-lan-implies-total-variation-bvm
kind: theorem
title: Compact-uniform LAN and rate contraction imply a total-variation BvM limit
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - def-multivariate-normal-law
  - def-op-and-little-op-stochastic-bounds
  - def-total-variation-distance-for-probability-laws
  - thm-nondegenerate-multivariate-normal-law-has-density
justified_by: []
proof_strategy: direct
axiom_use: "AC is used for the library's multivariate-normal law and Gaussian density. The supplied jointly measurable likelihood-density family is part of the hypotheses, so no new choice of density versions is made in the proof."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "B. J. K. Kleijn and A. W. van der Vaart, The Bernstein-Von-Mises theorem under misspecification, Theorem 2.1 and proof"
      url: "https://pure.uva.nl/ws/files/1850322/114737_376240.pdf"
    - title: "A. W. van der Vaart, Asymptotic Statistics, Chapter 10, §10.2, Theorem 10.1 and proof"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/asymp/bayes.pdf"
---

## Statement

Assume AC. For each $n$, let $X^{(n)}$ have law $P_{0,n}$ on a measurable
space, and let $\Theta\subset\mathbb R^d$ be open, $d\ge1$. Suppose a
supplied sigma-finite measure $\mu_n$ dominates $P_{0,n}$ and the model laws
$P_{n,\theta}$, and suppose jointly measurable finite-valued densities
$p_{0,n}$ and $p_{n,\theta}$ are supplied. Fix an interior point
$\theta^*\in\Theta$ with $p_{n,\theta^*}(X^{(n)})>0$
$P_{0,n}$-almost surely. Let the prior be a proper Lebesgue density $\pi$
continuous and strictly positive on a neighbourhood of $\theta^*$, and assume
the displayed likelihood integral is finite and positive almost surely so it
defines the posterior
$$\Pi_n(A\mid X^{(n)})=\frac{\int_Ap_{n,\theta}(X^{(n)})\pi(\theta)\,d\theta}{\int_\Theta p_{n,\theta}(X^{(n)})\pi(\theta)\,d\theta}.$$
For $\delta_n>0$ with $\delta_n\to0$, write
$$\ell_n(\theta)=\log\frac{p_{n,\theta}(X^{(n)})}{p_{n,\theta^*}(X^{(n)})}.$$
Assume $V$ is a fixed symmetric positive-definite $d\times d$ matrix,
$\Delta_n=O_{P_{0,n}}(1)$, and for every compact $K\subset\mathbb R^d$,
$$\sup_{h\in K}\left|\ell_n(\theta^*+\delta_nh)-h^T\Delta_n+\tfrac12h^TVh\right|=o_{P_{0,n}}(1).$$
Also assume that for every deterministic sequence $M_n\to\infty$,
$$\Pi_n\!\left(\|\theta-\theta^*\|_2>\delta_nM_n\mid X^{(n)}\right)=o_{P_{0,n}}(1).$$
Then the posterior law of $H_n=\delta_n^{-1}(\theta-\theta^*)$ satisfies
$$\left\|\Pi_n(H_n\in\cdot\mid X^{(n)})-N_d(V^{-1}\Delta_n,V^{-1})\right\|_{\rm TV}=o_{P_{0,n}}(1),$$
where $\|P-Q\|_{\rm TV}=\sup_A|P(A)-Q(A)|$ over measurable sets. The
LAN condition concerns likelihood-density ratios on the $P_{0,n}$-full set
where the denominator is positive; it does not assert a Radon–Nikodym
derivative for the entire local model law.

## Facts & Assumptions

**Given:** AC; the finite-dimensional dominated density model, supplied jointly measurable density versions, interior point, proper prior and posterior, compact-uniform LAN expansion, and every-diverging-radius posterior contraction stated above.

[F1] [[def-dominated-statistical-experiment]]: A model is dominated by a supplied sigma-finite positive measure $\mu$ when every model law is absolutely continuous with respect to $\mu$.

[F2] [[def-likelihood-density]]: A supplied density representative $p_\theta$ defines the pointwise likelihood $L_x(\theta)=p_\theta(x)$; here the jointly measurable representatives are explicit input.

[F3] [[def-total-variation-distance-for-probability-laws]]: For probabilities $P,Q$ on one measurable space, $\|P-Q\|_{\rm TV}=\sup_A|P(A)-Q(A)|$.

[F4] [[def-multivariate-normal-law]]: Under AC, $N_d(m,\Sigma)$ exists for every finite $d$ and symmetric positive-semidefinite covariance $\Sigma$.

[F5] [[thm-nondegenerate-multivariate-normal-law-has-density]]: For $\Sigma\succ0$, $N_d(m,\Sigma)$ has the Lebesgue density proportional to $\exp[-(x-m)^T\Sigma^{-1}(x-m)/2]$ with normalizing constant $(2\pi)^{-d/2}\det(\Sigma)^{-1/2}$.

[F6] [[def-op-and-little-op-stochastic-bounds]]: $Y_n=O_P(1)$ means its finite-dimensional norm is bounded in probability.

[A1] [[def-axiom-of-choice]]: AC is assumed for the Gaussian-law construction in [F4] and the Gaussian-density supplier [F5]; no other choice step is used.

## Proof

**Given:** The hypotheses and notation of the Statement.

1.1 Let $Q_n$ be the posterior law of $H_n$. The contraction premise implies that $(Q_n)$ is tight in probability: for every $\eta,\varepsilon>0$ there is a finite $R$ such that $\limsup_nP_{0,n}\{Q_n(\|h\|_2>R)>\eta\}<\varepsilon$. Otherwise there would be $\eta,\varepsilon>0$ and increasing radii $R_k\to\infty$ with indices $n_k$ for which $P_{0,n_k}\{Q_{n_k}(\|h\|_2>R_k)>\eta\}>\varepsilon$. Define $M_n=R_k$ for $n_k\le n<n_{k+1}$, with any positive initial values. Then $M_n\to\infty$ and the assumed contraction fails along $n_k$, a contradiction. [F6, given, choose]

1.2 The supplied common-dominator density setup [F1, F2] makes the posterior likelihood ratio well-defined on the stated $P_{0,n}$-full set. Fix $R>0$ and put $K_R=\{h:\|h\|_2\le R\}$. Since $\theta^*$ is interior and $\delta_n\to0$, $\theta^*+\delta_nK_R\subset\Theta$ for all sufficiently large $n$. Relative to Lebesgue measure on $K_R$, the unnormalized posterior density for $H_n$ is proportional to $q_n(h)=\exp(\ell_n(\theta^*+\delta_nh))\pi(\theta^*+\delta_nh)$; the Jacobian $\delta_n^d$ cancels on conditioning on $K_R$. Set $g_n(h)=\exp(h^T\Delta_n-\tfrac12h^TVh)$. By compact-uniform LAN and continuity of $\pi$ at $\theta^*$, $q_n(h)/g_n(h)=\pi(\theta^*)(1+o_{P_{0,n}}(1))$ uniformly on $K_R$. Completing the square gives $g_n$ proportional to the density in [F5] with mean $V^{-1}\Delta_n$ and covariance $V^{-1}$. If $w_n=q_n/g_n$ and $\bar w_n=\int_{K_R}w_n\,dG_n^{K_R}$, where $G_n^{K_R}$ is the Gaussian law conditioned on $K_R$, the two conditional densities have ratio $w_n/\bar w_n$. Uniform convergence $w_n/\pi(\theta^*)\to1$ implies $\bar w_n/\pi(\theta^*)\to1$, so $\sup_{K_R}|w_n/\bar w_n-1|=o_{P_{0,n}}(1)$ and their total-variation distance tends to zero. [A1, F1, F2, F5, given, algebra]

1.3 By [F6] and the assumed $\Delta_n=O_{P_{0,n}}(1)$, the Gaussian means $V^{-1}\Delta_n$ are bounded in probability. For any fixed bound on the mean, its Gaussian probability outside $K_R$ is at most the centered $N_d(0,V^{-1})$ probability outside a ball whose radius tends to infinity with $R$. That centered probability tends to zero because the decreasing complements of the balls have empty intersection and the law is a probability. Thus the Gaussian tails are tight in probability as $R\to\infty$. [A1, F4, F5, F6, given, algebra]

2.1 For any two probability measures $P,Q$ and measurable $K$, their restrictions conditioned on $K$ satisfy $\|P-Q\|_{\rm TV}\le \|P(\cdot\mid K)-Q(\cdot\mid K)\|_{\rm TV}+2P(K^c)+2Q(K^c)$ whenever both conditioning probabilities are positive. Indeed, for any event $A$, split it into $A\cap K$ and $A\cap K^c$, compare the two conditional masses on $K$, and use $|P(K)-Q(K)|\le P(K^c)+Q(K^c)$. Choose $R$ so the posterior tail from step 1.1 and Gaussian tail from step 1.3 are arbitrarily small in probability; the conditional distance tends to zero for this fixed $R$ by step 1.2. Letting the tail tolerance decrease to zero proves the asserted full total-variation convergence under [F3]. [F3, step 1.1, step 1.2, step 1.3, choose, algebra] ∎
