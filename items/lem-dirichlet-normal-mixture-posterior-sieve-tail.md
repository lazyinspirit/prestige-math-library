---
id: lem-dirichlet-normal-mixture-posterior-sieve-tail
kind: lemma
title: "The posterior excludes large scales and mixing mass far from compact data"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 8
deps:
  - lem-dirichlet-normal-mixture-density-well-defined
  - lem-iid-posterior-denominator-lower-bound-from-kl-mass
  - def-dirichlet-process
  - thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure
  - thm-dirichlet-process-posterior-update
  - thm-dirichlet-process-polya-urn-predictive-law
  - lem-normal-location-scale-density
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - cor-markov-inequality-for-random-variables
  - def-axiom-of-choice
  - def-kullback-leibler-divergence
  - thm-ftc-first-part
proof_strategy: direct
axiom_use: "Full AC is inherited from the DP construction, DP posterior update, and directional KL denominator interface."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Posterior convergence rates of Dirichlet mixtures at smooth densities, §8 Lemma 11"
      url: "https://arxiv.org/pdf/0708.1885"
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Fundamentals of Nonparametric Bayesian Inference, §6.3.1"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/bayesianstatistics"
---

## Statement

Assume AC. Let $p_0$ be supported on a compact interval $I=[L,U]$ with
$L<U$, let $F\sim DP(\alpha)$ for a finite nonzero base measure whose
density is bounded below by a positive constant on a neighborhood of $I$, and let $S\sim G$ be
independent with $\sigma=\sigma_nS$. Put $R=(U-L)/2$ and, for $d>0$,
$I_d=[L-d,U+d]$.
Observe IID data from $p_0$ under the location-mixture density
$p_{F,\sigma}$. Let $\epsilon_n,\delta_n>0$ with
$n\epsilon_n^2\to\infty$ and $n\delta_n^2\to\infty$. Suppose the local KL
and log-square prior-mass condition gives a denominator event
$$P_0^n\{D_n\ge e^{-C_0n\delta_n^2}\}\longrightarrow1,$$
where $D_n=\int\prod_i p_{F,\sigma}(X_i)/p_0(X_i)\,\Pi_n(dF,d\sigma)$.
Choose $s_n\to0$ and put $q_n=2\Phi(-R/s_n)$, where $\Phi$ is the
standard normal distribution function. If
$$nq_n-(C_0+2)n\delta_n^2\to\infty,\qquad n\epsilon_n^{-2}s_n^{-1}e^{-d^2/(2s_n^2)}\to0,$$
then the posterior complement of
$$\mathcal S_n:=\{(F,\sigma):\sigma\le s_n,\ F(I_d^c)\le\epsilon_n^2\}$$
converges to zero in $P_0^n$-probability.

## Facts & Assumptions

**Given:** Full AC; compactly supported truth; base density bounded below by a positive constant on a neighborhood of $I$; the DP normal-mixture model and independent scale prior; the denominator event; and the two displayed asymptotic conditions.

[A1] Full AC supplies the DP construction and the directional KL convention. [[def-axiom-of-choice]] [[thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure]] [[def-kullback-leibler-divergence]]

[F1] [[thm-dirichlet-process-posterior-update]]: conditionally on latent IID locations $\theta_{1:n}\mid F\sim F^{\otimes n}$, the posterior law of $F$ is $DP(\alpha+\sum_i\delta_{\theta_i})$.

[F2] [[thm-dirichlet-process-polya-urn-predictive-law]]: conditionally on all latent locations except $\theta_i$, the prior predictive law of $\theta_i$ is $(\alpha+\sum_{k\ne i}\delta_{\theta_k})/(\alpha(\mathbb R)+n-1)$, by exchangeability.

[F3] [[thm-dirichlet-process-posterior-update]] and [[thm-dirichlet-process-polya-urn-predictive-law]]: under the posterior $DP(\alpha+\sum_i\delta_{\theta_i})$, the next latent location has predictive probability $(\alpha(A)+\sum_i\mathbf1_A(\theta_i))/(\alpha(\mathbb R)+n)$; because its conditional law given $F$ is $F$, this is the posterior mean of $F(A)$.

[F4] [[lem-iid-posterior-denominator-lower-bound-from-kl-mass]]: the local KL/log-square prior-mass condition gives the displayed lower bound for $D_n$ with probability tending to one.

[F5] [[lem-normal-location-scale-density]]: the latent observation likelihood is $\phi_\sigma(x-\theta)=(\sigma\sqrt{2\pi})^{-1}e^{-(x-\theta)^2/(2\sigma^2)}$.

[F6] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative likelihood numerators may be integrated in either order.

[F7] [[cor-markov-inequality-for-random-variables]]: for a nonnegative random variable $Y$ and $a>0$, $P(Y\ge a)\le E[Y]/a$.

[F8] [[def-dirichlet-process]] and [[thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure]]: $DP(\alpha)$ is an evaluation-measurable random probability measure with the stated Dirichlet finite-partition laws.

[F9] The integral function of a continuous integrand is differentiable with derivative equal to the integrand. [[thm-ftc-first-part]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 The latent representation is $\theta_i\mid F\stackrel{\mathrm{iid}}\sim F$ and $X_i\mid\theta_i,\sigma\sim N(\theta_i,\sigma^2)$ independently. Use the test $\varphi_n=\mathbf1\{\text{some }X_i\notin I\}$. Its type-I error is zero. Write $\Phi(t)=\int_{-\infty}^t\phi(z)\,dz$; [F9] gives $\Phi'(t)=\phi(t)$. The normal formula [F5] is even and satisfies $\phi'(t)=-t\phi(t)$, so it decreases on $[0,\infty)$. For fixed $\theta$ and $\sigma$, set $g(\theta)=P(\theta+\sigma Z\in I)=\Phi((U-\theta)/\sigma)-\Phi((L-\theta)/\sigma)$. Then $g'(\theta)=\sigma^{-1}\left[\phi((L-\theta)/\sigma)-\phi((U-\theta)/\sigma)\right]$. For $\theta\le(L+U)/2$, $|L-\theta|\le|U-\theta|$, so $g'(\theta)\ge0$; for $\theta\ge(L+U)/2$ the inequality reverses and $g'(\theta)\le0$. Thus $g$ is maximized at the midpoint, where the component leakage is $2\Phi(-R/\sigma)$. Every component with $\sigma>s_n$ therefore puts probability at least $q_n=2\Phi(-R/s_n)$ outside $I$, and $P_{F,\sigma}^n(\varphi_n=0)\le(1-q_n)^n\le e^{-nq_n}$. [A1, F5, F9, given, construct]

1.2 By [F8] the latent DP model is a measurable prior law. Introduce the latent locations $\theta_{1:n}$. Given these locations, $X_{1:n}$ and $\sigma$, the observation likelihood is independent of $F$, so [F1] gives the conditional law $DP(\alpha+\sum_i\delta_{\theta_i})$. Given this updated $F$, the next latent location has conditional law $F$; applying [F3] to that predictive draw gives $E[F(A)\mid\theta_{1:n},X_{1:n},\sigma]=\frac{\alpha(A)+\sum_i\mathbf1_A(\theta_i)}{\alpha(\mathbb R)+n}$ for every Borel set $A$. With $A=I_d^c$, conditional Markov inequality yields $\Pi_n(F(A)>\epsilon_n^2,\sigma\le s_n\mid X_{1:n})\le\frac{\alpha(A)+\sum_iP(\theta_i\in A,\sigma\le s_n\mid X_{1:n})}{\epsilon_n^2(\alpha(\mathbb R)+n)}.$ [F1, F3, F7, F8, given, algebra]

1.3 Fix an index $i$ and condition on $\theta_{-i},X_{1:n},\sigma$. The latent vector is exchangeable because its conditional law given $F$ is IID. Reordering $\theta_i$ last and applying [F2] shows its prior predictive law given $\theta_{-i}$ is $H_i=(\alpha+\sum_{k\ne i}\delta_{\theta_k})/(\alpha(\mathbb R)+n-1)$. Bayes' formula multiplies this measure by the likelihood $\phi_\sigma(X_i-t)$. Almost surely $X_i\in I$. On $A=I_d^c$, $|X_i-t|\ge d$, so the likelihood numerator is at most $C\sigma^{-1}e^{-d^2/(2\sigma^2)}$. For $\sigma\le s_n$, the denominator is at least the base-measure contribution $\frac{1}{\alpha(\mathbb R)+n-1}\int_{X_i-\sigma}^{X_i+\sigma}\phi_\sigma(X_i-t)\,\alpha(dt)\ge\frac{c}{\alpha(\mathbb R)+n-1},$ because the base density is bounded below near $I$ and $[X_i-\sigma,X_i+\sigma]$ lies there for all sufficiently large $n$. Consequently $P(\theta_i\in A\mid\theta_{-i},X_{1:n},\sigma)\le Cn\sigma^{-1}e^{-d^2/(2\sigma^2)}\le Cn s_n^{-1}e^{-d^2/(2s_n^2)},$ where $s^{-1}e^{-d^2/(2s^2)}$ is increasing on $0<s<d$. [A1, F2, F5, given, algebra]

2.1 Let $N_n^H$ be the likelihood-ratio numerator integrated over $\{\sigma>s_n\}$. By change of density and [F6], $E_0[(1-\varphi_n)N_n^H]\le e^{-nq_n}$. On the denominator event, [F7] therefore gives, for every $\zeta>0$, $P_0^n\{\Pi_n(\sigma>s_n\mid X_{1:n})>\zeta\}\le o(1)+\zeta^{-1}e^{(C_0+2)n\delta_n^2-nq_n}\longrightarrow0.$ [F4, F6, F7, step 1.1, algebra]

3.1 Substitute the step 1.3 bound into step 1.2 and use $\alpha(A)\le\alpha(\mathbb R)$. The resulting upper bound is $\frac{\alpha(\mathbb R)}{\epsilon_n^2(\alpha(\mathbb R)+n)}+Cn\epsilon_n^{-2}s_n^{-1}e^{-d^2/(2s_n^2)}+\Pi_n(\sigma>s_n\mid X_{1:n}),$ which tends to zero by $n\epsilon_n^2\to\infty$, the second premise, and step 2.1. Thus the posterior probability of $F(I_d^c)>\epsilon_n^2$ tends to zero. Combining with step 2.1 proves the sieve-complement claim. [F4, F7, step 2.1, step 1.2, step 1.3, given, algebra] ∎
