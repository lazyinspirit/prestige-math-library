---
id: lem-bernoulli-coordinate-posterior-odds-bound
kind: lemma
title: Posterior-odds concentration in the Bernoulli model
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: adversarial-robustness-and-robust-risk
dependency_level: 1
deps:
  - def-binary-feature-bernoulli-model
  - lem-finite-independent-sign-sum-tail
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - thm-finite-union-bound
justified_by: []
axiom_use: "Choice-free: the prior, observations, coordinate posterior, finite sign sums, and union bound are all finite."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Ludwig Schmidt, Shibani Santurkar, Dimitris Tsipras, Kunal Talwar, and Aleksander Madry, Adversarially Robust Generalization Requires More Data, arXiv:1804.11285v2, Appendix B.2, Lemma 29 and proof of Theorem 31, PDF pp. 33–38"
      url: "https://arxiv.org/pdf/1804.11285v2"
---

## Statement

Let $d\ge1$ be an integer, $0<\tau\le1/4$, and let $n\ge0$ be an integer with $n\le\tau^{-2}$. Draw $\Theta$ uniformly from $\{-1,+1\}^d$ and, conditionally on $\Theta$, draw $n$ independent observations $S=((X_i,Y_i))_{i=1}^n$ from the binary-feature Bernoulli model with parameters $\Theta,\tau$. For each coordinate $j$, define the posterior log odds $L_j(S):=\log\bigl(\mathbb P(\Theta_j=+1\mid S)/\mathbb P(\Theta_j=-1\mid S)\bigr)$; these probabilities are positive for every sample because $\tau<1/2$. Then for every $j$ and every sample $S$,
$$L_j(S)=\log\!\left(\frac{1+2\tau}{1-2\tau}\right)\sum_{i=1}^nY_iX_{ij}.$$Moreover, the coordinates of $\Theta$ are conditionally independent given $S$. For every $0<\delta<1$, with probability at least $1-\delta$ over the joint prior-sample experiment,$$\max_{1\le j\le d}|L_j(S)|\le15\tau\sqrt{2n\log\!\left(\frac{2d}{\delta}\right)}.$$

## Statement references

[Schmidt et al., Appendix B.2, Lemma 29 and proof of Theorem 31, PDF pp. 33–38](https://arxiv.org/pdf/1804.11285v2).

## Facts & Assumptions

**Given:** The hypotheses in the Statement.

[F1] Under fixed $\Theta=\theta$, the signs $Y_iX_{ij}\theta_j$ are independent over $i$ and each equals $+1$ with probability $1/2+\tau$ and $-1$ with probability $1/2-\tau$. [[def-binary-feature-bernoulli-model]].

[F2] The natural logarithm converts finite products to sums and satisfies $\log b-\log a=\int_a^b dx/x$ for $0<a\le b$. [[thm-natural-logarithm-laws]], [[thm-logarithm-derivative-and-integral]].

[F3] For independent sign variables and coefficients $c_i$, the centered sum has tails $\mathbb P(|\sum_i c_i(\xi_i-\mathbb E\xi_i)|\ge t)\le2e^{-t^2/(2\sum_i c_i^2)}$. [[lem-finite-independent-sign-sum-tail]].

[F4] A union of finitely many events has probability at most the sum of their probabilities. [[thm-finite-union-bound]].

## Proof

1.1 Fix a sample $S=((x_i,y_i))_{i=1}^n$. The prior mass of each $\theta$ is $2^{-d}$, and the likelihood factors over coordinates because the model's conditional coordinate probabilities do. Write $L_j(t)=\prod_i[(1/2+\tau)\mathbf1_{\{y_ix_{ij}=t\}}+(1/2-\tau)\mathbf1_{\{y_ix_{ij}=-t\}}]$ for $t\in\{-1,+1\}$. The posterior mass at $\theta$ is proportional to $\prod_jL_j(\theta_j)$, and its normalizing sum is $\prod_j(L_j(+1)+L_j(-1))$; hence it factors as a product of coordinate posterior masses, proving conditional independence. The $j$th marginal odds are $L_j(+1)/L_j(-1)=((1/2+\tau)/(1/2-\tau))^{\sum_i y_ix_{ij}}$. Bayes' finite formula and [F2] give the displayed log identity. Positivity of both coordinate probabilities makes each posterior denominator nonzero. [given, F1, F2, algebra]

1.2 Put $a_\tau=\log((1+2\tau)/(1-2\tau))$. With $x=2\tau\le1/2$, [F2] gives $a_\tau=2\int_0^x(1-u^2)^{-1}\,du$. For $0\le u\le1/2$, $(1-u^2)^{-1}=1+u^2/(1-u^2)\le1+4u^2/3$, so $a_\tau\le2x+8x^3/9=4\tau+64\tau^3/9\le40\tau/9<5\tau$. [F2, algebra]

1.3 Assume $n>0$, fix $\theta$ and $j$, and put $\xi_i=\theta_jY_iX_{ij}$. By [F1], these are independent signs with mean $2\tau$. Let $t=\sqrt{2n\log(2d/\delta)}$. [F3] with all coefficients equal to one gives conditional failure probability at most $2e^{-t^2/(2n)}=\delta/d$ for $|\sum_i(\xi_i-2\tau)|>t$. Since $|\sum_iY_iX_{ij}|=|\sum_i\xi_i|$, this proves $\mathbb P(|\sum_iY_iX_{ij}|>2\tau n+t\mid\Theta=\theta)\le\delta/d$. By [F4] and averaging over the finite prior, with probability at least $1-\delta$ every coordinate obeys $|\sum_iY_iX_{ij}|\le2\tau n+t$. [given, F1, F3, F4]

2.1 Since $n\le\tau^{-2}$, $\tau n\le\sqrt n$. Also $2d/\delta\ge2$ and $\log2=\int_1^2 dx/x>1/2$, so $t\ge\sqrt n$. On the event from step 1.3, step 1.1 and step 1.2 now yield $|L_j(S)|\le5\tau(2\tau n+t)\le15\tau t$ for every $j$, which is the asserted bound. If $n=0$, the posterior equals the uniform prior, so every $L_j=0$ and the claimed bound holds with equality. [step 1.1, step 1.2, step 1.3, F2, algebra] ∎

## References

[[def-binary-feature-bernoulli-model]]: conditional sign probabilities and coordinate independence.

[[lem-finite-independent-sign-sum-tail]]: the local, choice-free concentration estimate replacing the source's Hoeffding citation.
