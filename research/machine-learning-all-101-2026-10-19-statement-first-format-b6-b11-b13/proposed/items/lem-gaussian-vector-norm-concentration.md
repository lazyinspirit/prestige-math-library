---
id: lem-gaussian-vector-norm-concentration
kind: lemma
title: Gaussian vector norm and maximum-coordinate tails
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: adversarial-robustness-and-robust-risk
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-independent-random-elements
  - thm-factorization-of-expectations-for-independent-variables
  - cor-markov-inequality-for-random-variables
  - thm-finite-union-bound
  - def-natural-logarithm
  - thm-logarithm-derivative-and-integral
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
justified_by: []
axiom_use: "AC is used only through the Gaussian-law construction and its independent standard-normal coordinates in def-multivariate-normal-law; the finite mgf, Chernoff, and union-bound arguments add no choice premise."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Ludwig Schmidt, Shibani Santurkar, Dimitris Tsipras, Kunal Talwar, and Aleksander Madry, Adversarially Robust Generalization Requires More Data, arXiv:1804.11285v2, Fact 12"
      url: "https://arxiv.org/pdf/1804.11285v2"
---

## Statement

Assume AC. Let $d\ge1$ be an integer, $\sigma>0$, and $G\sim N_d(0,\sigma^2I_d)$. For every $t\ge0$ and $s\ge0$,
$$\mathbb P(\|G\|_2\ge \sigma\sqrt d+t)\le \exp\!\left(-\frac{t^2}{2\sigma^2}\right),\qquad \mathbb P(\|G\|_\infty>s)\le 2d\exp\!\left(-\frac{s^2}{2\sigma^2}\right).$$
For every unit vector $u\in\mathbb R^d$ and $s\ge0$, each one-sided projection tail satisfies
$$\mathbb P(\langle u,G\rangle\ge s)\le \exp\!\left(-\frac{s^2}{2\sigma^2}\right),\qquad \mathbb P(\langle u,G\rangle\le-s)\le \exp\!\left(-\frac{s^2}{2\sigma^2}\right).$$
Consequently, for $d\ge2$,
$$\mathbb P\!\left(\|G\|_\infty\le 2\sigma\sqrt{2\log d}\right)\ge1-\frac1d.$$

## Statement references

[Schmidt et al., Appendix A.1, Fact 12, PDF p. 22](https://arxiv.org/pdf/1804.11285v2).

## Facts & Assumptions

**Given:** Assume AC. Let $d\ge1$ be finite, $\sigma>0$, and $G\sim N_d(0,\sigma^2I_d)$.

[A1] Assume the Axiom of Choice, stated as the existence of a choice function for every family of nonempty sets. It is used by the supplied finite-dimensional Gaussian construction. [[def-axiom-of-choice]].

[F1] Under AC, $G$ can be represented in law as $\sigma(Z_1,\ldots,Z_d)$ with independent standard normal coordinates, each having density $(2\pi)^{-1/2}e^{-x^2/2}$. [[def-multivariate-normal-law]], [[def-standard-normal-and-normal-laws]].

[F2] For nonnegative Borel functions of independent real random variables, the expectation of their finite product factors, including when an expectation is extended-valued. [[thm-factorization-of-expectations-for-independent-variables]].

[F3] For a nonnegative random variable $U$ and $a>0$, $\mathbb P(U\ge a)\le\mathbb E[U]/a$. [[cor-markov-inequality-for-random-variables]].

[F4] For $0<u<1$, $-\log(1-u)-u=\int_0^u v/(1-v)\,dv$. [[thm-logarithm-derivative-and-integral]].

[F5] The probability of a finite union of events is at most the sum of their probabilities. [[thm-finite-union-bound]].

## Proof

1.1 Put $Q=\sum_{j=1}^d Z_j^2$ for the independent standard normal coordinates in [F1]. For $0<\lambda<1/2$, integrating their scalar density and substituting $u=\sqrt{1-2\lambda}\,x$ gives $\mathbb E e^{\lambda Z_j^2}=(1-2\lambda)^{-1/2}$. By [F2] and the exponential addition formula, $\mathbb E e^{\lambda(Q-d)}=e^{-d\lambda}(1-2\lambda)^{-d/2}$. With $u=2\lambda$, [F4] gives $-\log(1-2\lambda)-2\lambda\le (2\lambda)^2/[2(1-2\lambda)]$, so $\log\mathbb E e^{\lambda(Q-d)}\le d\lambda^2/(1-2\lambda)$. [A1, F1, F2, F4, algebra]

1.2 For any unit vector $u$, [F1] gives $\langle u,G\rangle\sim N(0,\sigma^2)$. Completing the square in the scalar normal density gives $\mathbb E e^{v\langle u,G\rangle}=e^{v^2\sigma^2/2}$. Applying [F3] with $v=s/\sigma^2$ to the upper tail and with $v=-s/\sigma^2$ to the lower tail proves both one-sided projection bounds for $s>0$; for $s=0$ they hold because each right side is $1$. [A1, F1, F3, algebra]

2.1 For $r>0$, apply [F3] to $e^{\lambda(Q-d)}$ at threshold $e^{\lambda(2\sqrt{dr}+2r)}$. Choosing $\lambda=\sqrt r/(\sqrt d+2\sqrt r)$ gives $0<\lambda<1/2$ and, by step 1.1, the exponent $-\lambda(2\sqrt{dr}+2r)+d\lambda^2/(1-2\lambda)=-r$. Therefore $\mathbb P(Q\ge d+2\sqrt{dr}+2r)\le e^{-r}$. [step 1.1, F3, algebra]

3.1 For $t>0$, set $a=t/\sigma$ and $r=a^2/2$. The event $\|G\|_2\ge\sigma(\sqrt d+a)$ is $Q\ge d+2\sqrt d\,a+a^2$, and this threshold is at least $d+2\sqrt{dr}+2r=d+\sqrt{2d}\,a+a^2$. Step 2.1 bounds its probability by $e^{-a^2/2}$. When $t=0$, the claimed upper bound is $1$ and holds directly. [step 2.1, algebra]

4.1 Apply the two one-sided bounds in step 1.2 to each coordinate unit vector and combine them with [F5]. This gives $\mathbb P(\|G\|_\infty>s)\le2d e^{-s^2/(2\sigma^2)}$. For $d\ge2$, substitute $s=2\sigma\sqrt{2\log d}$; the failure probability is at most $2d e^{-4\log d}=2/d^3\le1/d$. [step 1.2, F5, algebra] ∎

## References

[[def-multivariate-normal-law]]: the Gaussian vector has an independent standard-normal coordinate construction under AC.

[[thm-factorization-of-expectations-for-independent-variables]]: factors the nonnegative coordinate mgfs.

[[cor-markov-inequality-for-random-variables]]: converts the mgf bounds to one-sided tails.

[[thm-finite-union-bound]]: combines coordinate tails.
