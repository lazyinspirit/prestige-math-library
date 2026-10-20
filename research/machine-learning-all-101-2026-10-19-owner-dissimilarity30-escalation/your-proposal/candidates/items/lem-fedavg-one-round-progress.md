---
id: lem-fedavg-one-round-progress
kind: lemma
title: One-round progress of strongly convex FedAvg
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-bounded-client-gradient-dissimilarity
  - lem-standard-client-dissimilarity-implies-gap-form
  - alg-fedavg
  - def-federated-objective-and-client-sampling
  - lem-uniform-client-sampling-moments
  - lem-relaxed-euclidean-squared-norm
  - lem-perturbed-strong-convexity
  - lem-smooth-convex-gradient-difference
  - lem-finite-sum-gradient-is-average
  - def-euclidean-inner-product
  - def-axiom-of-choice
  - def-filtration-and-filtered-probability-space
  - def-conditional-expectation-as-an-ae-class
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-taking-out-what-is-known
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - lem-finite-martingale-difference-sum-variance
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD, Appendix D.3, Lemma 7"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
proof_strategy: direct
---

## Statement

Let $N,d,K\ge1$ be positive integers and $1\le S\le N$. Let
$f_i:\mathbb R^d\to\mathbb R$ be differentiable, $\mu$-strongly convex
and $\beta$-smooth, with $0<\mu\le\beta$, and put
$f=N^{-1}\sum_{i=1}^Nf_i$. Suppose $f$ attains its minimum at $x^\star$ with
value $f^\star$. At a round-start server point $x$, run the uniform-client
analysis mode of FedAvg with $S$ clients sampled uniformly without
replacement, $K$ local steps, local step $\eta_l>0$, and global scale
$\eta_g\ge\sqrt S$. The client sample is independent of the fresh local-oracle
randomness. Assume conditionally unbiased local stochastic gradients with
within-client conditional variance at most $\sigma^2$. Suppose
$B\ge1$, $G\ge0$, and
$$ \frac1N\sum_i\|\nabla f_i(z)\|_2^2 \le G^2+2\beta B^2(f(z)-f^\star) \quad(z\in\mathbb R^d). $$
Alternatively, assume the standard $(G,B)$-bounded gradient-dissimilarity condition
$$ \frac1N\sum_i\|\nabla f_i(z)\|_2^2\le G^2+B^2\|\nabla f(z)\|_2^2 \quad(z\in\mathbb R^d). $$
Either assumption gives all the conclusions below with the same $G,B$ and
stepsize restrictions.
Let $\widetilde\eta=K\eta_l\eta_g$. For each client $i$, define a hypothetical
local path $y_{i,0}=x,y_{i,1},\ldots,y_{i,K}$ by the same local update rule
with fresh oracle draws independent of the client sample. For selected clients
this path is the actual local execution; for unselected clients it is a
counterfactual copy used only in the expectation below. Independence among
different clients' oracle draws is not required. Define
$$ E=\frac1{KN}\sum_{i=1}^N\sum_{k=1}^K \mathbb E\|y_{i,k-1}-x\|_2^2. $$
If $0<\widetilde\eta\le[32(B^2+1)\beta]^{-1}$, then the next server iterate
$x^+$ satisfies
$$ \begin{aligned} \mathbb E\|x^+-x^\star\|_2^2 &\le(1-\mu\widetilde\eta/2)\|x-x^\star\|_2^2 -\widetilde\eta(f(x)-f^\star) +\frac{5\widetilde\eta^2\sigma^2}{KS} +8\left(1-\frac SN\right)\frac{\widetilde\eta^2G^2}{S} +3\beta\widetilde\eta E. \end{aligned} $$
Expectation is conditional on the round-start history and averages the client
sample and local stochastic-gradient draws.

## Statement references

[[def-bounded-client-gradient-dissimilarity]]

[[lem-standard-client-dissimilarity-implies-gap-form]]

[Karimireddy et al., SCAFFOLD, Appendix D.3, Lemma 7 and its proof](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

## Facts & Assumptions

**Given:** The local-client functions, round start, FedAvg updates and sampling law in the Statement.

[F1] [[alg-fedavg]]: in uniform-client analysis mode, $x^+=x-\widetilde\eta(KS)^{-1}\sum_{i\in\mathcal S,k}g_i(y_{i,k-1})$.

[F2] [[def-federated-objective-and-client-sampling]]: $f=N^{-1}\sum_if_i$ and $\mathcal S$ is a uniform size-$S$ subset.

[F3] [[lem-uniform-client-sampling-moments]]: for fixed client vectors, the sample mean has their population mean and its centered second moment is at most $2(1-S/N)S^{-1}$ times the population second moment.

[F4] [[lem-relaxed-euclidean-squared-norm]]: squared norms of a sum are bounded by the corresponding two-term relaxed-square inequality.

[F5] [[lem-perturbed-strong-convexity]]: for each $f_i$, its gradient at a local point paired with $x-x^\star$ is bounded below by the function gap, strong-convexity distance term, and local displacement term stated there.

[F6] [[lem-smooth-convex-gradient-difference]] and [[lem-finite-sum-gradient-is-average]]: at $x^\star$ the average gradient vanishes, and the population second moment of the centered client gradients is at most $2\beta(f(x)-f^\star)$.

[F7] [[def-euclidean-inner-product]]: inner products and squared norms obey the Euclidean expansion identities.

[F8] [[def-filtration-and-filtered-probability-space]], [[def-conditional-expectation-as-an-ae-class]], [[thm-basic-algebra-and-order-properties-of-conditional-expectation]], [[thm-taking-out-what-is-known]], [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], and [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: condition on round-start history, take out its measurable model, and average the integrable quantities using conditional linearity.

[F9] [[lem-finite-martingale-difference-sum-variance]]: a finite sum of conditionally centered local-gradient errors has second moment at most twice the sum of its conditional variance bounds.

[F10] [[lem-standard-client-dissimilarity-implies-gap-form]]: under the stated common smoothness and attained finite minimum, the standard condition implies the displayed gap form with unchanged $G,B$.

[A1] The conditional means, variance bounds, and fresh-draw assumptions in the Statement hold at every local query.

[A2] Assume the Axiom of Choice. It is used only to invoke the published conditional-expectation-as-an-a.e.-class interface in [F8].

## Proof

1.1 In the standard-condition branch, [F10] supplies the displayed gap-form assumption with unchanged $G,B$; in the original gap-form branch it is already assumed. Put $\Delta=x^+-x$. Conditional on the round-start history, unbiasedness [given] and uniform client sampling give $$ \mathbb E[\Delta\mid\mathcal F] =-\frac{\widetilde\eta}{KN}\sum_{i,k}\mathbb E[\nabla f_i(y_{i,k-1})\mid\mathcal F]. $$ Expand $\|x+\Delta-x^\star\|_2^2$ and use this conditional mean in its cross term. Apply [F5] at each local point $y_{i,k-1}$ with comparison points $x^\star$ and $x$. After averaging over $i,k$, this gives $$ \mathbb E\|x+\Delta-x^\star\|_2^2 \le\|x-x^\star\|_2^2-2\widetilde\eta(f(x)-f^\star) -\frac{\mu\widetilde\eta}{2}\|x-x^\star\|_2^2 +2\beta\widetilde\eta E+\mathbb E\|\Delta\|_2^2. $$ [F10, F1, F2, F5, F8, A1, A2, given, algebra]

1.2 Write $v_S=S^{-1}\sum_{i\in\mathcal S}\nabla f_i(x)$ and [given] $d_S=(KS)^{-1}\sum_{i\in\mathcal S,k} (\nabla f_i(y_{i,k-1})-\nabla f_i(x))$. Jensen and $\beta$-Lipschitzness give $\mathbb E\|d_S\|_2^2\le\beta^2E$. For the sampled mean at $x$, [F3] and the dissimilarity bound give $$ \mathbb E\left\|\frac1S\sum_{i\in\mathcal S}\nabla f_i(x)\right\|_2^2 \le2\beta(f(x)-f^\star) +2\left(1-\frac SN\right)\frac{G^2+2\beta B^2(f(x)-f^\star)}{S}. $$ Order the $KS$ local oracle draws chronologically and apply [F9] to their centered errors. After division by $KS$, their sum has second moment at most $2\sigma^2/(KS)$. Apply [F4] first to $v_S+d_S$, then to that sum plus the noise. The resulting second-moment bound is $$ \mathbb E\|\Delta\|_2^2 \le16\beta(B^2+1)\widetilde\eta^2(f(x)-f^\star) +4\beta^2\widetilde\eta^2E +8\left(1-\frac SN\right)\frac{\widetilde\eta^2G^2}{S} +\frac{4\widetilde\eta^2\sigma^2}{KS}. $$ [F1, F3, F4, F6, F7, F8, F9, A1, A2, given, algebra]

2.1 Substitute step 1.2 into step 1.1. Because $16\beta(B^2+1)\widetilde\eta\le1/2$, the combined objective-gap coefficient is at most $-3\widetilde\eta/2\le-\widetilde\eta$. Also $\beta\widetilde\eta\le1/64$, since $B\ge1$, so the local-drift coefficient satisfies $2\beta\widetilde\eta+4\beta^2\widetilde\eta^2\le3\beta\widetilde\eta$. Increase the noise coefficient from $4$ to $5$ and retain the sampling term. These substitutions give precisely the Statement without using any local-drift estimate. [F1, F2, step 1.1, step 1.2, given, algebra] ∎
