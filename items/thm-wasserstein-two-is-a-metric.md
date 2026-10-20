---
id: "thm-wasserstein-two-is-a-metric"
kind: theorem
title: "The quadratic Wasserstein distance is a metric"
status: draft
dependency_level: 2
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: ["def-wasserstein-two-space-and-couplings", "lem-wasserstein-gluing", "prop-existence-and-lower-semicontinuity-of-optimal-couplings", "thm-minkowski-integral-inequality", "def-axiom-of-choice", "thm-choice-implies-dependent-implies-countable-choice", "def-borel-probability-law-on-a-polish-space", "def-measure", "thm-change-of-variables-for-expectation"]
justified_by: []
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
proof_strategy: direct
axiom_use: "AC is used by the optimal-coupling and gluing suppliers; this theorem adds no choice principle beyond those supplied arguments."
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Filippo Santambrogio, Optimal Transport for Applied Mathematicians, Chapter 5, §§5.1–5.3"
      url: "https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf"
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport, Appendix A.1, PDF pp. 12–13"
      url: "https://arxiv.org/pdf/1805.09545"
---
## Statement

Assume the Axiom of Choice. For every integer $d\ge1$, the function $W_2$ defined on $\mathcal P_2(\mathbb R^d)$ is a metric: for all $\mu,\nu,\lambda\in\mathcal P_2(\mathbb R^d)$ it is finite and nonnegative, $W_2(\mu,\nu)=0$ exactly when $\mu=\nu$, $W_2(\mu,\nu)=W_2(\nu,\mu)$, and $W_2(\mu,\lambda)\le W_2(\mu,\nu)+W_2(\nu,\lambda)$.

## Statement references

[[def-wasserstein-two-space-and-couplings]]

[[lem-wasserstein-gluing]]

[[prop-existence-and-lower-semicontinuity-of-optimal-couplings]]

[[thm-minkowski-integral-inequality]]

[[thm-change-of-variables-for-expectation]]

[[def-axiom-of-choice]]

[[thm-choice-implies-dependent-implies-countable-choice]]

[Santambrogio, *Optimal Transport for Applied Mathematicians*, Chapter 5](https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf)

[Chizat and Bach, Appendix A.1](https://arxiv.org/pdf/1805.09545)

## Facts & Assumptions

**Given:** AC and $\mu,\nu,\lambda\in\mathcal P_2(\mathbb R^d)$.

[F1] The quadratic coupling infimum is finite and attained by a coupling. [[def-wasserstein-two-space-and-couplings]] [[prop-existence-and-lower-semicontinuity-of-optimal-couplings]]

[F2] Given couplings of $\mu$ with $\nu$ and $\nu$ with $\lambda$, under AC there is a joint law of $(X,Y,Z)$ with those two pair marginals. [[lem-wasserstein-gluing]] [[def-axiom-of-choice]]

[F3] The scalar $L^2$ Minkowski inequality holds, including finite sums; applied to the nonnegative functions $|x-y|$ and $|y-z|$, it combines with the pointwise Euclidean triangle inequality. [[thm-minkowski-integral-inequality]]

[F4] If $P$ is a Borel probability law on a Polish space and $F$ is Borel into a Polish space, define $F_\#P(B)=P(F^{-1}(B))$; preimages make this a Borel probability law, coordinate marginals compose with coordinate maps, and $\int h\,d(F_\#P)=\int h(F)\,dP$ for nonnegative Borel h by change of variables for expectation. [[def-borel-probability-law-on-a-polish-space]] [[def-measure]] [[thm-change-of-variables-for-expectation]]

## Proof
1.1 The product coupling has finite cost by [F1], so $W_2$ is finite and nonnegative. The diagonal map $\Delta(x)=(x,x)$ is Borel, and its pushforward $\Delta_\#\mu$ is a Borel probability by [F4]. Its two coordinate marginals are $(\operatorname{pr}_i\circ\Delta)_\#\mu=\mu$, and its cost is $\int|\Delta(x)_1-\Delta(x)_2|^2d\mu(x)=0$ by [F4], hence $W_2(\mu,\mu)=0$. The coordinate swap $S(x,y)=(y,x)$ is Borel; for every coupling $\pi$ of $\mu,\nu$, [F4] shows $S_\#\pi$ is a probability with first marginal $\nu$ and second marginal $\mu$, while its cost is $\int|S(x,y)_1-S(x,y)_2|^2d\pi=\int|x-y|^2d\pi$ by [F4]. Since $S$ is its own inverse, this correspondence is onto and preserves costs, proving equality of the two infima. [given, F1, F4]

2.1 If $W_2(\mu,\nu)=0$, choose an optimal coupling $\pi$ using [F1]. Its integral of $|x-y|^2$ is zero. For each positive integer $k$, the set $\{|x-y|\ge1/k\}$ has $\pi$-measure zero, since its contribution to the integral is at least $k^{-2}$ times its measure. Their union is the complement of the diagonal, so $\pi$ is concentrated on the diagonal. For every Borel set $A$, both coordinate indicators agree $\pi$-almost everywhere, giving $\mu(A)=\pi(A\times\mathbb R^d)=\pi(\mathbb R^d\times A)=\nu(A)$. Conversely, if $\mu=\nu$, step 1.1 gives distance zero. [given, F1, step 1.1]

3.1 Choose optimal couplings $\pi_{12}$ of $(\mu,\nu)$ and $\pi_{23}$ of $(\nu,\lambda)$ using [F1]. Glue them by [F2] to obtain a Borel probability $\gamma$ on $\mathbb R^{3d}$. The Borel projection $Q(x,y,z)=(x,z)$ has pushforward $Q_\#\gamma$ a Borel probability by [F4]; its coordinate marginals are $\mu$ and $\lambda$, so it is a coupling. By [F4] its cost is $\int|u-v|^2d(Q_\#\gamma)(u,v)=\int|x-z|^2d\gamma(x,y,z)$. Pointwise, $|x-z|\le|x-y|+|y-z|$; applying [F3] on $(\mathbb R^{3d},\gamma)$ gives $W_2(\mu,\lambda)\le\left(\int|x-z|^2d\gamma\right)^{1/2}\le W_2(\mu,\nu)+W_2(\nu,\lambda).$ This proves the triangle inequality and all metric axioms. [given, F1, F2, F3, F4, step 1.1, step 2.1] ∎
