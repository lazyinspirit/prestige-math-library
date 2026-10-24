---
id: ex-ip-sparse-detection-lambda-zero-boundary
kind: example
title: The lambda-zero sparse detection boundary
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-minimax-detection-risk-and-separation
  - thm-factorization-of-expectations-for-independent-variables
  - lem-finite-measure-uniqueness-on-a-pi-system
  - def-ip-isonormal-white-noise-experiment
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
    - title: Yuri I. Ingster, Theofanis Sapatinas and Irina A. Suslina, Minimax signal
        detection in ill-posed inverse problems, §4.7, Theorem 4.7, PDF pp.
        18–19
      url: https://arxiv.org/pdf/1001.1853
    - title: Evarist Giné and Richard Nickl, Mathematical Foundations of
        Infinite-Dimensional Statistical Models, §6.2.3, PDF pp. 506–508
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Example

Take $q=1$, $\alpha=\beta=1$, $a_j=j$, and $\sigma_j=j$ in the Gaussian sequence detection experiment. Then the sparse boundary parameter is $\lambda=0$, the source-normalized constant is $\Lambda=1$, and a minimax separation rate has order
$$r_\varepsilon^*\asymp\varepsilon^{1/2}(\log\varepsilon^{-1})^{1/4}\qquad(\varepsilon\downarrow0).$$

## Example references

[Ingster, Sapatinas and Suslina, *Minimax signal detection in ill-posed inverse problems*, §4.7, Theorem 4.7(d), PDF pp. 18–19](https://arxiv.org/pdf/1001.1853)

[Giné and Nickl, *Mathematical Foundations of Infinite-Dimensional Statistical Models*, §6.2.3, Gaussian white-noise testing, PDF pp. 506–508](https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf)

## Facts & Assumptions

**Given:** Countable Choice ([[def-countable-choice]]), $q=1$, $\alpha=\beta=1$, $\varepsilon\downarrow0$, and the Gaussian sequence experiment over $\Theta_1(r)$.

[F1] [[def-ip-minimax-detection-risk-and-separation]]: $\eta\in\Theta_1(r)$ means $\sum_i i^2|\eta_i|\le1$ and $\sum_i i^2\eta_i^2\ge r^2$; the null coordinates are independent $N(0,\varepsilon^2)$.

[F2] [[thm-factorization-of-expectations-for-independent-variables]] and [[lem-finite-measure-uniqueness-on-a-pi-system]]: nonnegative functions of finitely many independent coordinates have factorized expectations; finite measures agreeing on the generating finite-coordinate rectangular cylinders and on total mass agree on the sequence sigma-algebra.

[F3] [[def-ip-isonormal-white-noise-experiment]]: $Y_i/\varepsilon$ is standard normal under the null, with density $\varphi(x)=(2\pi)^{-1/2}e^{-x^2/2}$. This given probability law already supplies $\int_{\mathbb R}\varphi(x)\,dx=1$.

[F4] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: under countable choice, completing the square and translating the given normalized density in [F3] gives $\mathbb E e^{tG}=e^{t^2/2}\int_{\mathbb R}\varphi(x-t)\,dx=e^{t^2/2}$ for every real $t$.

[F5] [[thm-chebyshev-markov-inequality-for-the-integral]]: Markov's inequality therefore gives $\mathbb P(|G|>t)\le2e^{-t^2/2}$ for $t>0$.

## Verification

1.1 Substitution gives $\lambda=(1+1)/2-1=0$ and $\Lambda=(2/(1+1))^{1/4}=1$. To prove the rate order, first let $r/r_\varepsilon^*\to0$, set $n=\lfloor1/(4r)\rfloor$, and for each $i\in\{n+1,\ldots,2n\}$ use the two alternatives with sole nonzero coordinate $\eta_i=\pm r/i$. Each lies in $\Theta_1(r)$ because $ri\le1$ and $i^2\eta_i^2=r^2$. Put $\mu_i=r/(\varepsilon i)$; then their standardized means satisfy $|\eta_i|/\varepsilon=\mu_i\le4r^2/\varepsilon$. If $s=r/r_\varepsilon^*\to0$, then $\max_i\mu_i^2\le16\varepsilon^{-2}r^4=16s^4\log(\varepsilon^{-1})=o(\log n)$, because $\log n\ge c\log(\varepsilon^{-1})$ for some $c>0$ when $r\le r_\varepsilon^*$ and $\varepsilon$ is small. For each location $i$, the shifted scalar density divided by the null density is $e^{\pm\mu_iG_i-\mu_i^2/2}$, where $G_i=Y_i/\varepsilon$ under the null; averaging the two signs gives $L_i=e^{-\mu_i^2/2}\cosh(\mu_iG_i)$. Completing the square using [F3] and [F4] gives $\mathbb E_0L_i=1$ and $\mathbb E_0L_i^2=\cosh(\mu_i^2)$. The measure $L_i\,dP_0$ is therefore a probability measure. Finite-coordinate factorization in [F2] identifies its value on every finite-coordinate rectangular cylinder with the sign-mixture sampling law at location $i$: only the $i$th scalar density changes and all other coordinates retain their null law. These cylinders generate the sequence sigma-algebra, so finite-measure uniqueness in [F2] identifies the two measures on all measurable events. For distinct locations, [F2] also gives $\mathbb E_0L_iL_j=1$. Thus the uniform mixture $L=n^{-1}\sum_iL_i$ satisfies $\mathbb E_0(L-1)^2=n^{-2}\sum_i(\cosh(\mu_i^2)-1)\le n^{-1}\exp(\max_i\mu_i^2)=n^{-1}\exp(o(\log n))\to0$. Since $\mathbb E_0(L-1)=0$, its positive and negative parts have equal integrals, so for every event $E$, $|P_\pi(E)-P_0(E)|\le\tfrac12\mathbb E_0|L-1|\le\tfrac12\sqrt{\mathbb E_0(L-1)^2}$. Approximation by averages of event indicators gives the same bound for randomized tests. Therefore the mixture total variation tends to zero, $\gamma_\varepsilon(\Theta_1(r))\to1$, and every level-$\alpha$ test has maximal type-II error at least $1-\alpha-o(1)$. The constant randomized test $\psi\equiv\alpha$ gives the matching upper bound $1-\alpha$. [F1, F2, F3, F4, given, construct, algebra]

2.1 First suppose $r/r_\varepsilon^*\to\infty$ and $r\to0$. Put $N=\lceil2/r\rceil$, $t_N=4\sqrt{\log N}$, and reject if $\max_{i\le N}|Y_i|/\varepsilon>t_N$. Under the null, [F5] and a union bound give type-I error at most $2N e^{-t_N^2/2}=2N^{-7}\to0$. For any alternative, $|\eta_i|\le i^{-2}$ follows from [F1], so the omitted weighted energy obeys $\sum_{i>N}i^2\eta_i^2\le N^{-2}\sum_{i>N}i^2|\eta_i|\le N^{-2}\le r^2/4$. Hence $\sum_{i\le N}i^2\eta_i^2\ge3r^2/4$. On the event that all $N$ null-noise coordinates satisfy $|\xi_i|\le t_N/2$, nonrejection would imply $|\eta_i|\le(3/2)\varepsilon t_N$ for every $i\le N$, and therefore $\sum_{i\le N}i^2\eta_i^2\le(3/2)\varepsilon t_N\sum_{i\le N}i^2|\eta_i|\le(3/2)\varepsilon t_N$. But $r/r_\varepsilon^*\to\infty$ makes $r^2/(\varepsilon\sqrt{\log N})\to\infty$, a contradiction for small $\varepsilon$. The probability that the stated noise event fails is at most $2N e^{-(t_N/2)^2/2}=2/N\to0$, so the maximal type-II error tends to zero. [F1, F3, F4, F5, step 1.1, algebra]

3.1 For an arbitrary positive radius sequence with $r_\varepsilon/r_\varepsilon^*\to\infty$, use the positive representative $r_\varepsilon^*=\varepsilon^{1/2}(\log\varepsilon^{-1})^{1/4}$ and put $\bar r_\varepsilon=\min\{r_\varepsilon,\sqrt{r_\varepsilon^*}\}$. Then $\bar r_\varepsilon\to0$, $\bar r_\varepsilon\le r_\varepsilon$, and $\bar r_\varepsilon/r_\varepsilon^*=\min\{r_\varepsilon/r_\varepsilon^*,1/\sqrt{r_\varepsilon^*}\}\to\infty$. Apply step 2.1 with $\bar r_\varepsilon$ in place of $r_\varepsilon$. Its cutoff $N=\lceil2/\bar r_\varepsilon\rceil$ now tends to infinity, so both its null-size bound $2N^{-7}$ and its noise-event bound $2/N$ vanish, and the energy-tail and signal-to-threshold estimates in that step apply at $\bar r_\varepsilon$. Since $\Theta_1(r_\varepsilon)\subseteq\Theta_1(\bar r_\varepsilon)$, the same test has unchanged null size and no larger maximal type-II error on the requested alternative. Its total error therefore tends to zero, and its null size is eventually below any fixed significance level, giving both consistency limits in [F1]. For an empty requested alternative both minimax risks are zero by that definition, with the never-reject test attaining zero total error. This covers the nonvanishing-radius case without using a bounded or nondiverging cutoff. [F1, step 2.1, given, construct, algebra]

4.1 The impossibility implication in step 1.1 and the all-positive-radius consistency implication in step 3.1 establish the separation-rate order $\varepsilon^{1/2}(\log\varepsilon^{-1})^{1/4}$. The parameter and constant were computed in step 1.1, proving the example. [step 1.1, step 2.1, step 3.1, algebra] ∎

