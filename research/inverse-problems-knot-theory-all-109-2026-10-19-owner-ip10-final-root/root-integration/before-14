---
id: ex-ip-sparse-detection-lambda-zero-boundary
kind: example
title: The lambda-zero sparse detection boundary
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-ip-minimax-detection-risk-and-separation
  - lem-ip-gaussian-product-mixture-testing-bound
  - def-ip-isonormal-white-noise-experiment
  - lem-normal-density-has-total-mass-one
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-chebyshev-markov-inequality-for-the-integral
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Yuri I. Ingster, Theofanis Sapatinas and Irina A. Suslina, Minimax signal detection in ill-posed inverse problems, §4.7, Theorem 4.7, PDF pp. 18–19"
      url: https://arxiv.org/pdf/1001.1853
    - title: "Evarist Giné and Richard Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §6.2.3, PDF pp. 506–508"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Example

Take $q=1$, $\alpha=\beta=1$, $a_j=j$, and $\sigma_j=j$ in the Gaussian sequence detection experiment. Then the sparse boundary parameter is $\lambda=0$, the source-normalized constant is $\Lambda=1$, and a minimax separation rate has order
$$r_\varepsilon^*\asymp\varepsilon^{1/2}(\log\varepsilon^{-1})^{1/4}\qquad(\varepsilon\downarrow0).$$

## Example references

[Ingster, Sapatinas and Suslina, *Minimax signal detection in ill-posed inverse problems*, §4.7, Theorem 4.7(d), PDF pp. 18–19](https://arxiv.org/pdf/1001.1853)

[Giné and Nickl, *Mathematical Foundations of Infinite-Dimensional Statistical Models*, §6.2.3, Gaussian white-noise testing, PDF pp. 506–508](https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf)

## Facts & Assumptions

**Given:** $q=1$, $\alpha=\beta=1$, $\varepsilon\downarrow0$, and the Gaussian sequence experiment over $\Theta_1(r)$.

[F1] [[def-ip-minimax-detection-risk-and-separation]]: $\eta\in\Theta_1(r)$ means $\sum_i i^2|\eta_i|\le1$ and $\sum_i i^2\eta_i^2\ge r^2$; the null coordinates are independent $N(0,\varepsilon^2)$.

[F2] [[lem-ip-gaussian-product-mixture-testing-bound]]: for a fixed finite-support vector, its independent coordinate sign mixture has the stated product likelihood ratio, second-moment estimate, and minimax risk bounds.

[F3] [[def-ip-isonormal-white-noise-experiment]] and [[lem-normal-density-has-total-mass-one]]: $Y_i/\varepsilon$ is standard normal under the null, with density $\varphi(x)=(2\pi)^{-1/2}e^{-x^2/2}$.

[F4] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: completing the square gives $\mathbb E e^{tG}=e^{t^2/2}$.

[F5] [[thm-chebyshev-markov-inequality-for-the-integral]]: Markov's inequality therefore gives $\mathbb P(|G|>t)\le2e^{-t^2/2}$ for $t>0$.

## Verification

1.1 Substitution gives $\lambda=(1+1)/2-1=0$ and $\Lambda=(2/(1+1))^{1/4}=1$. To prove the rate order, first let $r/r_\varepsilon^*\to0$, set $n=\lfloor1/(4r)\rfloor$, and for each $i\in\{n+1,\ldots,2n\}$ use the two alternatives with sole nonzero coordinate $\eta_i=\pm r/i$. Each lies in $\Theta_1(r)$ because $ri\le1$ and $i^2\eta_i^2=r^2$. Put $\mu_i=r/(\varepsilon i)$; then their standardized means satisfy $|\eta_i|/\varepsilon=\mu_i\le4r^2/\varepsilon$. If $s=r/r_\varepsilon^*\to0$, then $\max_i\mu_i^2\le16\varepsilon^{-2}r^4=16s^4\log(\varepsilon^{-1})=o(\log n)$, because $\log n\ge c\log(\varepsilon^{-1})$ for some $c>0$ when $r\le r_\varepsilon^*$ and $\varepsilon$ is small. For each location $i$, its sign-averaged likelihood ratio is $L_i=e^{-\mu_i^2/2}\cosh(\mu_iG_i)$, where $G_i=Y_i/\varepsilon$ under the null. Completing the square gives $\mathbb E_0L_i=1$ and $\mathbb E_0L_i^2=\cosh(\mu_i^2)$; for distinct locations the likelihood ratios are independent. Thus the uniform mixture $L=n^{-1}\sum_iL_i$ satisfies $\mathbb E_0(L-1)^2=n^{-2}\sum_i(\cosh(\mu_i^2)-1)\le n^{-1}\exp(\max_i\mu_i^2)=n^{-1}\exp(o(\log n))\to0$. Since $\mathbb E_0(L-1)=0$, its positive and negative parts have equal integrals, so for every event $E$, $|P_\pi(E)-P_0(E)|\le\tfrac12\mathbb E_0|L-1|\le\tfrac12\sqrt{\mathbb E_0(L-1)^2}$. Approximation by averages of event indicators gives the same bound for randomized tests. Therefore the mixture total variation tends to zero, $\gamma_\varepsilon(\Theta_1(r))\to1$, and every level-$\alpha$ test has maximal type-II error at least $1-\alpha-o(1)$. The constant randomized test $\psi\equiv\alpha$ gives the matching upper bound $1-\alpha$. [F1, F2, given, construct, algebra]

2.1 Now let $r/r_\varepsilon^*\to\infty$, put $N=\lceil2/r\rceil$, $t_N=4\sqrt{\log N}$, and reject if $\max_{i\le N}|Y_i|/\varepsilon>t_N$. Under the null, [F4] and a union bound give type-I error at most $2N e^{-t_N^2/2}=2N^{-7}\to0$. For any alternative, $|\eta_i|\le i^{-2}$ follows from [F1], so the omitted weighted energy obeys $\sum_{i>N}i^2\eta_i^2\le N^{-2}\sum_{i>N}i^2|\eta_i|\le N^{-2}\le r^2/4$. Hence $\sum_{i\le N}i^2\eta_i^2\ge3r^2/4$. On the event that all $N$ null-noise coordinates satisfy $|\xi_i|\le t_N/2$, nonrejection would imply $|\eta_i|\le(3/2)\varepsilon t_N$ for every $i\le N$, and therefore $\sum_{i\le N}i^2\eta_i^2\le(3/2)\varepsilon t_N\sum_{i\le N}i^2|\eta_i|\le(3/2)\varepsilon t_N$. But $r/r_\varepsilon^*\to\infty$ makes $r^2/(\varepsilon\sqrt{\log N})\to\infty$, a contradiction for small $\varepsilon$. The probability that the stated noise event fails is at most $2N e^{-(t_N/2)^2/2}=2/N\to0$, so the maximal type-II error tends to zero. [F1, F3, F4, F5, step 1.1, algebra]

3.1 The two implications in steps 1.1 and 2.1 establish the separation-rate order $\varepsilon^{1/2}(\log\varepsilon^{-1})^{1/4}$. The parameter and constant were computed in step 1.1, proving the example. [step 1.1, step 2.1, algebra] ∎