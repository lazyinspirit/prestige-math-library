---
id: lem-finite-prior-lan-bayes-envelope-convergence
kind: lemma
title: Finite-prior Bayes envelopes converge under pointwise LAN
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-lan-experiment
  - thm-vector-slutsky
  - thm-continuous-mapping-theorem
  - thm-mean-one-likelihood-ratio-limit-implies-contiguity
  - def-bayes-and-minimax-risk
  - def-measure-kernel-and-probability-kernel
  - def-total-variation-distance-for-probability-laws
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - lem-q-and-irrationals-dense-r
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - lem-normal-density-has-total-mass-one
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-linearity-of-the-lebesgue-integral-on-l-one
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "A. W. van der Vaart, Semiparametric Statistics, Theorem 4.14 and complete proof, pp. 46–48"
      url: https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf
    - title: "John Duchi, A few notes on contiguity, asymptotics, and local asymptotic normality, Theorem 3 and proof, pp. 17–18; local finite-prior proof supplied here"
      url: https://web.stanford.edu/class/stats300b/Notes/contiguity-and-asymptotics.pdf
---

## Statement

Assume AC. In a pointwise LAN experiment [[def-lan-experiment]] with $K\succ0$, fix $h_1,\ldots,h_s\in\mathbb R^d$ and weights $w_i>0$ summing to one. Let $g:\mathbb R^d\to[0,M]$ be Lipschitz. The Bayes values for estimating $h$ with loss $g(a-h)$ and this finite prior, allowing all measurable randomized rules, converge to the corresponding Bayes value in the Gaussian shift $Y\mid h\sim N_d(h,K^{-1})$. No likelihood-field uniformity or measurable-selection hypothesis is required.

## Facts & Assumptions

**Given:** AC, the pointwise LAN experiment, finite prior and bounded Lipschitz loss.

[F1] [[def-lan-experiment]] gives mean-one likelihood proxies $L_{n,h}$, pointwise total-variation approximation, and $\log L_{n,h}=h^T\Delta_n-h^TKh/2+o_P(1)$ with $\Delta_n\Rightarrow N_d(0,K)$. Its finite log expansion also gives $P_{n,0}(L_{n,h}=0)\to0$.

[F2] [[thm-vector-slutsky]] and [[thm-continuous-mapping-theorem]] give joint finite-dimensional convergence after adjoining finitely many remainders that tend to zero in probability.

[F3] [[thm-mean-one-likelihood-ratio-limit-implies-contiguity]] proves uniform integrability for nonnegative mean-one variables converging in law to a mean-one limit.

[F4] [[def-bayes-and-minimax-risk]] defines the Bayes risk of a rule
$\delta$ as $r_\pi(\delta)=\int R(h,\delta)\,\pi(dh)$, while
[[def-measure-kernel-and-probability-kernel]] describes randomized rules. In
this proof the **Bayes value** means the infimum of $r_\pi(\delta)$ over all
measurable randomized rules; the infimum is local notation and is not part of
the supplier's definition.

[F5] [[def-total-variation-distance-for-probability-laws]] and [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] imply $|E_Pf-E_Qf|\le M\|P-Q\|_{\rm TV}$ for $0\le f\le M$, by integrating the tail probabilities of $f$.

[F6] [[lem-q-and-irrationals-dense-r]] gives a countable dense rational grid in finite-dimensional Euclidean action space by taking finite products.

[F7] [[def-multivariate-normal-law]], [[def-standard-normal-and-normal-laws]], [[lem-normal-density-has-total-mass-one]], and [[thm-linear-change-of-variables-for-lebesgue-measure]]: For $Z\sim N_d(0,K)$ with $K\succ0$, its density is proportional to $\exp(-z^TK^{-1}z/2)$, and completing the square shows $E\exp(h^TZ-h^TKh/2)=1$.

[F8] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: Expectation commutes with the finite weighted sums defining $U_n$ and $U$.

[A1] [[def-axiom-of-choice]] is retained for the LAN and Gaussian suppliers.

## Proof

1.1 For $l\in[0,\infty)^s$, set $F(l)=\inf_a\sum_iw_i l_i g(a-h_i)$. For any $l,l'$, each action's objective changes by at most $M\sum_iw_i|l_i-l'_i|$; taking infima proves the same bound for $F$. Also $0\le F(l)\le M\sum_iw_i l_i$. For fixed $l$ the objective is continuous in $a$, so F6 makes its infimum equal to the infimum over a fixed enumeration $(q_j)$ of the rational grid. For $\epsilon>0$, choose the first $j$ whose objective is at most $F(l)+\epsilon$. This index is Borel: its defining set and the finitely many failures at smaller indices are Borel. Thus this is an explicit measurable $\epsilon$-optimal action function of $l$. [F4, F6, given, construct, algebra]

1.2 Under the base law, F1 and F2 imply $(L_{n,h_i})_{i=1}^s\Rightarrow(l_i(Z))_{i=1}^s$, where $Z\sim N_d(0,K)$ and $l_i(z)=\exp(h_i^Tz-h_i^TKh_i/2)$. The log expansions imply that zero likelihoods have vanishing probability, so exponentiating the finite vector is legitimate. By [F7], completing the square in the Gaussian density gives $E l_i(Z)=1$. Hence $U_n=\sum_iw_i L_{n,h_i}$ converges in law to $U=\sum_iw_i l_i(Z)$, and [F8] gives $E U_n=E U=1$. [F3] makes $(U_n)$ uniformly integrable. [F1, F2, F3, F7, F8, A1, given, construct]

2.1 For each cutoff $b$, $F\wedge b$ is bounded continuous, so its expectations converge by step 1.2. The error from this cutoff is bounded by $M E[U_n\mathbf1_{\{MU_n>b\}}]$, which vanishes uniformly as $b\to\infty$; the limit variable has the same integrable bound. Therefore $E F((L_{n,h_i})_i)\to E F((l_i(Z))_i)$. [F2, F3, step 1.1, step 1.2, algebra]

3.1 Under the proxy mixture, the predictive density is $U_n=\sum_iw_iL_{n,h_i}$ and, when $U_n>0$, the posterior weights are $w_iL_{n,h_i}/U_n$. Conditional on the data, every randomized action rule has posterior risk at least $F((L_{n,h_i})_i)/U_n$, because $F$ is the infimum over deterministic actions and randomization averages those action risks. The measurable selector from step 1.1 has posterior risk at most this envelope plus $\epsilon$. Multiplying by the predictive density and integrating shows that the proxy Bayes value differs from $E_{P_{n,0}}F((L_{n,h_i})_i)$ by at most $\epsilon$; the set $U_n=0$ has zero predictive probability. Letting $\epsilon\downarrow0$ identifies the proxy Bayes value with that expectation. The same argument with $l_i(Z)$ identifies the limiting envelope expectation as the finite-prior Gaussian Bayes value: tilting the base Gaussian by $l_i$ gives $Z\sim N_d(Kh_i,K)$, and $Y=K^{-1}Z$ has law $N_d(h_i,K^{-1})$. Finally [F5] bounds the actual/proxy risk difference uniformly over rules by $M\sum_iw_i\|P_{n,h_i}-L_{n,h_i}P_{n,0}\|_{\rm TV}\to0$. Infima preserve this bound, proving the assertion. [F1, F4, F5, step 1.1, step 2.1, algebra] ∎
