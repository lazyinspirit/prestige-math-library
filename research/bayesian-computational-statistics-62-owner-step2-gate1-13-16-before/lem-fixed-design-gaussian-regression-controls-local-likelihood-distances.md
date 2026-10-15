---
id: lem-fixed-design-gaussian-regression-controls-local-likelihood-distances
kind: lemma
title: "Empirical mean and scale distance control Gaussian-regression likelihoods"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-standard-normal-and-normal-laws
  - def-kullback-leibler-divergence
  - def-axiom-of-choice
  - def-natural-logarithm
  - def-moments-variance-and-covariance
  - thm-chain-rule
  - thm-logarithm-derivative-and-integral
  - cor-taylor-remainder-bound
  - lem-gaussian-even-moment-bound-for-brownian-increments
proof_strategy: direct
axiom_use: "AC is used by the normal-law and directional KL suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. W. van der Vaart and J. H. van Zanten, Rates of contraction of posterior distributions based on Gaussian process priors, §3.3, Theorem 3.3"
      url: "https://arxiv.org/pdf/0806.3024"
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Convergence rates of posterior distributions for noniid observations, §3, Theorem 4 and Lemma 2"
      url: "https://arxiv.org/pdf/0708.0491"
---

## Statement

Let $0<a<b<\infty$, let $\sigma_0,\sigma\in[a,b]$, and fix design points $x_1,\ldots,x_n$. Under the true independent laws $Y_i\sim N(w_0(x_i),\sigma_0^2)$, the model has independent laws $Y_i\sim N(w(x_i),\sigma^2)$. Write $\delta_i=w(x_i)-w_0(x_i)$ and $\|\delta\|_n^2=n^{-1}\sum_i\delta_i^2$. There is a finite constant $C_{a,b}$, depending only on $a,b$, such that whenever $\max_i|\delta_i|\le1$ and $|\sigma-\sigma_0|\le1$,
$$\frac1n\sum_{i=1}^n\mathrm{KL}(P_{i0}\Vert P_i)\le C_{a,b}(\|\delta\|_n^2+|\sigma-\sigma_0|^2),$$
$$\frac1n\sum_{i=1}^n E_{i0}\!\left[\left(\log\frac{p_i(Y_i)}{p_{i0}(Y_i)}\right)^2\right]\le C_{a,b}(\|\delta\|_n^2+|\sigma-\sigma_0|^2).$$

## Facts & Assumptions

**Given:** The independent fixed-design normal model with true and candidate scales in $[a,b]$, $a>0$, and the displayed local bounds on mean and scale differences.

[A1] Assume AC for [[def-kullback-leibler-divergence]] and the imported normal laws.

[F1] [[def-standard-normal-and-normal-laws]]: a $N(m,\sigma^2)$ variable with $\sigma>0$ has the translated and scaled standard-normal law.

[F2] [[lem-gaussian-even-moment-bound-for-brownian-increments]]: a centered $N(0,\sigma_0^2)$ variable has second and fourth moments $\sigma_0^2$ and $3\sigma_0^4$; symmetry makes its third moment zero.

[F3] [[cor-taylor-remainder-bound]]: a uniform bound on the second derivative bounds the first-order Taylor remainder by a constant times the squared increment.

## Proof




1.1 Put $e_i=Y_i-w_0(x_i)$ and $\delta_i=w(x_i)-w_0(x_i)$. Direct substitution of the normal densities from [F1] gives $\log\frac{p_i(Y_i)}{p_{i0}(Y_i)}=\log\frac{\sigma_0}{\sigma}-\frac{(e_i-\delta_i)^2}{2\sigma^2}+\frac{e_i^2}{2\sigma_0^2}.$ Taking its negative expectation and using [F2] yields $K_i:=\mathrm{KL}(P_{i0}\Vert P_i)=\log\frac{\sigma}{\sigma_0}+\frac{\sigma_0^2+\delta_i^2}{2\sigma^2}-\frac12.$ [F1, F2, given, algebra]

2.1 Let $s=\sigma-\sigma_0$ and $g(\sigma)=\log(\sigma/\sigma_0)+\sigma_0^2/(2\sigma^2)-1/2$. Then $g(\sigma_0)=g'(\sigma_0)=0$. Its second derivative is bounded uniformly when $\sigma,\sigma_0\in[a,b]$, so [F3] gives $|g(\sigma)|\le C_{a,b}s^2$. Explicitly, $g'(\sigma)=1/\sigma-\sigma_0^2/\sigma^3$ vanishes at $\sigma_0$, and $|g''(\sigma)|=|-1/\sigma^2+3\sigma_0^2/\sigma^4|\le a^{-2}+3b^2a^{-4}$. Also $\delta_i^2/(2\sigma^2)\le\delta_i^2/(2a^2)$. The formula in step 1.1 therefore gives $|K_i|\le C_{a,b}(\delta_i^2+s^2)$ and, in particular, the first claimed upper bound after averaging. [A1, F3, step 1.1, given, algebra]

3.1 The log ratio in step 1.1 equals $m_i+B_i e_i+A(e_i^2-\sigma_0^2)$, where $A=1/(2\sigma_0^2)-1/(2\sigma^2)$, $B_i=\delta_i/\sigma^2$, and $m_i=-K_i$. On $[a,b]$, $|A|\le C_{a,b}|s|$ and $|B_i|\le a^{-2}|\delta_i|$. By [F2], $E e_i^2=\sigma_0^2$, $E(e_i^2-\sigma_0^2)^2=2\sigma_0^4$, and $E[e_i(e_i^2-\sigma_0^2)]=0$. Therefore the second moment is $K_i^2+B_i^2\sigma_0^2+2A^2\sigma_0^4$. Step 2.1 gives $K_i^2\le C_{a,b}(\delta_i^2+s^2)^2$, which is at most a constant times $\delta_i^2+s^2$ under the local bounds. Averaging proves the log-square inequality. [F2, step 1.1, step 2.1, given, algebra] ∎

## Source notes

The 2008 source states the fixed-covariate model but leaves its contraction proof as a sketch. The complete local KL and log-square calculations above make the scale, direction, empirical norm and moment bounds explicit; the independent-observation source is read as separate context, not substituted for the proof.
