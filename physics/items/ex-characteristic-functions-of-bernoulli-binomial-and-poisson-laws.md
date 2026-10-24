---
id: "ex-characteristic-functions-of-bernoulli-binomial-and-poisson-laws"
kind: "example"
title: "Characteristic functions of bernoulli binomial and poisson laws"
deps: ["def-characteristic-function-of-a-real-random-variable", "lem-characteristic-functions-under-affine-maps-and-independent-sums", "thm-complex-exponential-addition-and-real-extension", "lem-complex-exponential-series-converges-everywhere", "lem-binomial-theorem-over-complex-numbers", "thm-linearity-of-the-lebesgue-integral-on-l-one", "thm-nonnegative-weighted-sums-of-measures", "prop-dirac-measure-is-a-probability-measure", "thm-dominated-convergence"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Norris, Probability and Measure"
      url: https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

For $0\le p\le1$, $n\in\mathbb N$ and $\lambda\ge0$, the laws with masses
$$\operatorname{Bern}(p)=(1-p)\delta_0+p\delta_1,\quad \operatorname{Bin}(n,p)\{k\}=\binom nk p^k(1-p)^{n-k}\ (0\le k\le n),\quad \operatorname{Pois}(\lambda)\{k\}=e^{-\lambda}\frac{\lambda^k}{k!}\ (k\ge0)$$
have characteristic functions $1-p+pe^{it}$, $(1-p+pe^{it})^n$, and $\exp(\lambda(e^{it}-1))$, respectively. Zeroth powers, including $0^0$ in these finite combinatorial formulas, mean the empty product one. For a finite mixture $\rho=\sum_{j=1}^r a_j\mu_j$ with $a_j\ge0$ and $\sum_j a_j=1$, one also has $\varphi_\rho=\sum_j a_j\varphi_{\mu_j}$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the example.

[F1] The transform integrates exp(itx), which has modulus one. [[def-characteristic-function-of-a-real-random-variable]].

[F2] Independent sums have product characteristic functions. [[lem-characteristic-functions-under-affine-maps-and-independent-sums]].

[F3] Complex exponential addition includes its real extension. [[thm-complex-exponential-addition-and-real-extension]].

[F4] The defining exponential series converges absolutely at every complex argument. [[lem-complex-exponential-series-converges-everywhere]].

[F5] The finite binomial expansion holds over complex scalars. [[lem-binomial-theorem-over-complex-numbers]].

[F6] Integration commutes with finite complex linear combinations. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F7] Nonnegative countable weighted sums of measures are measures. [[thm-nonnegative-weighted-sums-of-measures]].

[F8] Each real point supplies a Dirac probability. [[prop-dirac-measure-is-a-probability-measure]].

[F9] Bounded pointwise approximation can pass through a finite-measure integral. [[thm-dominated-convergence]].

## Verification

**Proof technique:** direct.

1.1 All displayed masses are nonnegative. The Bernoulli masses sum to one. The binomial sum is $(p+1-p)^n=1$, including $n=0$, when there is exactly one term of value one. The Poisson sum is $e^{-\lambda}\sum_{k\ge0}\lambda^k/k!=e^{-\lambda}e^\lambda=1$. Weighted Dirac sums therefore define Borel probabilities on $\mathbb R$. For any such countably supported law with masses $b_k$ at distinct integers, $f_N(x)=\sum_{k=0}^Ne^{itk}1_{\{k\}}(x)$ tends to $e^{itx}$ almost everywhere for that law and satisfies $|f_N|\le1$. Its integral is the finite sum of values times singleton masses. DCT yields $\varphi(t)=\sum_{k\ge0}b_ke^{itk}$, with absolute sum $\sum b_k=1$. Finite supports are the same calculation with zero masses afterwards. [F1, F3, F4, F5, F7, F8, F9]

2.1 Substitute the Bernoulli masses to get $(1-p)+pe^{it}$. For the binomial law the finite sum is $\sum_{k=0}^n\binom nk(pe^{it})^k(1-p)^{n-k}=(1-p+pe^{it})^n$. This is also the product supplied for any already-given family of $n$ independent Bernoulli variables; no existence of an infinite family is needed. For Poisson, absolute convergence allows recognition of the defining series: $e^{-\lambda}\sum_{k\ge0}(\lambda e^{it})^k/k!=e^{-\lambda}\exp(\lambda e^{it})=\exp(\lambda(e^{it}-1))$. At $p=0$ the first two laws are $\delta_0$; at $p=1$ they are $\delta_1$ and $\delta_n$; $n=0$ and $\lambda=0$ give $\delta_0$. The stated formulas give precisely their constant-point transforms, and all values at $t=0$ equal one. [step 1.1, F2, F3, F4, F5]

3.1 For the finite mixture, the weighted-sum theorem gives a measure of total mass $\sum_j a_j=1$. For a simple complex function $s=\sum_{\ell=1}^q c_\ell1_{E_\ell}$ on a disjoint measurable partition, the integral definition and finite sums give $\int s\,d\rho=\sum_j a_j\int s\,d\mu_j$. Approximate $e^{itx}$ by rounding its real and imaginary parts down to multiples of $2^{-N}$; each approximation is Borel, simple, uniformly bounded by three and converges pointwise. DCT for $\rho$ and for each of the finitely many $\mu_j$ passes the simple identity to the limit, giving the mixture formula. Zero weights contribute zero, a one-component mixture returns that component, and no empty mixture has weights summing to one. No AC is used in these explicit sums and approximations. [F1, F6, F7, F9] ∎
