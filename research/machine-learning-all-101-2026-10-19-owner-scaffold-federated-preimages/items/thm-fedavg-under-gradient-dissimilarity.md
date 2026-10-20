---
id: thm-fedavg-under-gradient-dissimilarity
kind: theorem
title: Strongly convex FedAvg under bounded gradient dissimilarity
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-fedavg
  - def-federated-objective-and-client-sampling
  - lem-uniform-client-sampling-moments
  - lem-fedavg-one-round-progress
  - lem-fedavg-local-drift
  - lem-federated-recursion-averaging
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
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD, Theorem I (strongly convex branch), Appendix D.3, Lemmas 7–8"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
proof_strategy: direct
---

## Statement

Let $f_i:\mathbb R^d\to\mathbb R$ be differentiable, $\mu$-strongly convex
and $\beta$-smooth, with $0<\mu\le\beta$, and let
$f=N^{-1}\sum_{i=1}^Nf_i$ attain its minimum $f^\star=f(x^\star)$. Assume
fresh conditionally unbiased local stochastic gradients with within-client
conditional variance at most $\sigma^2$. For constants $B\ge1$ and $G\ge0$,
assume the convex-client gradient-dissimilarity bound
$$ \frac1N\sum_{i=1}^N\|\nabla f_i(x)\|_2^2 \le G^2+2\beta B^2(f(x)-f^\star) \quad(x\in\mathbb R^d). $$
Run the uniform-client analysis mode of FedAvg with $1\le S\le N$ clients
sampled uniformly without replacement per round and $K\ge1$ local steps.
Choose $\eta_g=\sqrt S$ and
$$ 0<\widetilde\eta=K\eta_l\eta_g \le\frac1{32(B^2+1)\beta}. $$
At round $r$, let $x_r$ be the server iterate and set
$$ \lambda=\frac{\mu\widetilde\eta}{2},\qquad W_R=\sum_{r=1}^R(1-\lambda)^{-r}. $$
Choose an independent index $J\in\{1,\ldots,R\}$ with probability
$\Pr(J=r)=(1-\lambda)^{-r}/W_R$ and return $\bar x_R=x_{J-1}$. Then
$$ \mathbb E[f(\bar x_R)-f^\star] \le\frac{3\|x_0-x^\star\|_2^2}{\widetilde\eta W_R} +3\widetilde\eta\left( \frac{11\sigma^2}{2KS}+8\left(1-\frac SN\right)\frac{G^2}{S} \right) +54\beta G^2\widetilde\eta^2. $$
In particular, for target $\epsilon>0$, a choice of $\widetilde\eta$ no
larger than $[32(B^2+1)\beta]^{-1}$ and
$$ R=O\!\left(\left[ \frac{(B^2+1)\beta}{\mu} +\frac{\sigma^2}{\mu KS\epsilon} +\frac{(1-S/N)G^2}{\mu S\epsilon} +\frac{\sqrt\beta G}{\mu\sqrt\epsilon} \right]\log\left(2+\frac{\mu\|x_0-x^\star\|_2^2}{\epsilon}\right)\right) $$
suffice to ensure $\mathbb E[f(\bar x_R)-f^\star]\le\epsilon$, with a
universal constant in the $O(\cdot)$ notation. This is an equal-client
strongly convex rate; it does not apply to the count-weighted deployment
objective without a separate weighted analysis.

## Statement references

[Karimireddy et al., SCAFFOLD, Theorem I and Appendix D.3, Lemmas 7–8](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

## Facts & Assumptions
**Given:** The client objectives, stochastic-gradient process, FedAvg output and sampling law in the Statement.

[F1] [[lem-fedavg-one-round-progress]]: with $\widetilde\eta$ as above, one round gives distance contraction, a negative objective-gap term, sampling variance and client-drift error.

[F2] [[lem-fedavg-local-drift]]: the local-drift error is bounded by a fraction of the objective gap, a stochastic-gradient term and a cubic $G^2$ term.

[F3] [[lem-federated-recursion-averaging]]: the geometric weighted average of a strongly convex descent recursion bounds its expected objective gap.

[F4] [[def-federated-objective-and-client-sampling]] and [[alg-fedavg]]: the analyzed objective is $N^{-1}\sum_i f_i$, with each round sampling a uniform fixed-size client subset and averaging selected model differences.

[F5] [[lem-uniform-client-sampling-moments]]: fixed-size sampling is unbiased and its exact finite-population variance is at most twice the population second moment times $(1-S/N)/S$.

[F6] [[lem-smooth-convex-gradient-difference]] and [[lem-finite-sum-gradient-is-average]]: convex $\beta$-smooth clients satisfy the required gradient-second-moment estimate around a minimizer, and their average gradient is $\nabla f$.

[F7] [[def-euclidean-inner-product]]: squared distances expand by bilinearity.

[F8] [[def-filtration-and-filtered-probability-space]], [[def-conditional-expectation-as-an-ae-class]], [[thm-basic-algebra-and-order-properties-of-conditional-expectation]], [[thm-taking-out-what-is-known]], [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], and [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: roundwise conditional expectations are linear, obey the tower rule and preserve nonnegative integrable inequalities.

[A1] The conditional stochastic-gradient hypotheses and bounded gradient-dissimilarity assumption in the Statement hold at every round and query point.

[A2] Assume the Axiom of Choice. It is used only to invoke the published conditional-expectation-as-an-a.e.-class interface in [F8].

## Proof

1.1 Let $d_r=\mathbb E\|x_r-x^\star\|_2^2$ and [given]
$q_{r-1}=\mathbb E[f(x_{r-1})-f^\star]$. Apply [F1] and then [F2] with
$\eta_g=\sqrt S$. Their gap terms combine to $-\widetilde\eta q_{r-1}/3$.
The resulting recurrence is
$$ d_r\le(1-\lambda)d_{r-1}-\frac{\widetilde\eta}{3}q_{r-1} +b\widetilde\eta^2+c\widetilde\eta^3, \quad b=\frac{11\sigma^2}{2KS}+8\left(1-\frac SN\right)\frac{G^2}{S}, \quad c=18\beta G^2. $$
Indeed the stochastic terms are
$5\sigma^2/(KS)+\sigma^2/(2K\eta_g^2)=11\sigma^2/(2KS)$ because
$\eta_g^2=S$; the sampling term is the one in [F1], and the remaining drift term is
$18\beta G^2\widetilde\eta^3$. [F1, F2, F4, F5, F6, F7, F8, A1, A2, given, algebra]

1.2 Write $D=\|x_0-x^\star\|_2$. Since [given]
$a=1/3$, $\rho=\mu/2$, and weights
$w_r=(1-\lambda)^{-r}$. It yields
$$ \mathbb E[f(\bar x_R)-f^\star] \le\frac{3d_0}{\widetilde\eta W_R} +3b\widetilde\eta+3c\widetilde\eta^2, $$
which is the displayed bound after substituting $b,c$.
[step 1.1, F3, given, algebra]

2.1 Apply [F3] to the recurrence in step 1.1 with [given]
$W_R=((1-\lambda)^{-R}-1)/\lambda$, the first term in step 2.1 is at most
$\epsilon/3$ whenever
$$ R\ge\frac{2}{\mu\widetilde\eta} \log\left(1+\frac{9\mu D^2}{2\epsilon}\right). $$
This follows from $-\log(1-\lambda)\ge\lambda$. Choose $\widetilde\eta$
not exceeding the minimum of
$[32(B^2+1)\beta]^{-1}$,
$\epsilon/(9b)$ when $b>0$, and
$\sqrt{\epsilon/(162\beta G^2)}$ when $G>0$; omit a bound whose denominator
is zero. Then each of the last two terms in step 2.1 is at most $\epsilon/3$.
Taking the least integer $R$ satisfying the preceding display gives the
claimed communication-round bound: the reciprocal step is bounded by a
constant times
$(B^2+1)\beta+b/\epsilon+\sqrt{\beta}G/\sqrt\epsilon$, divided by $\mu$.
[step 2.1, given, algebra] ∎