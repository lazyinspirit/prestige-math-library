---
id: thm-vinogradov-mean-value-is-solution-count
kind: theorem
title: "The Mean Value Counts Solutions of the Vinogradov System"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-exponential-character-e
  - def-vinogradov-mean-value-Jsk
  - lem-continuous-torus-orthogonality-for-integer-frequencies
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - lem-complex-conjugation-and-modulus-laws
  - thm-multidimensional-integral-properties
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean Bourgain, Ciprian Demeter, and Larry Guth, Proof of the main conjecture in Vinogradov’s mean value theorem for degrees higher than three"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf"
      locator: "§1, p. 633: expansion of the 2s-th moment and orthogonality identity"
    - title: "N. Assing, The Circle Method and Waring’s Problem (2022 lecture notes)"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§8.2, printed p. 77: interpretation of the mean value as the solution count"
---

## Statement

For positive integers $s,k$ and real $X\ge1$, put $e(t)=\exp(2\pi i t)$ and
$$J_{s,k}(X):=\int_{[0,1]^k}\left|\sum_{\substack{n\in\mathbb Z\\1\le n\le X}}e\!\left(\sum_{j=1}^k\alpha_jn^j\right)\right|^{2s}\,d\alpha.$$
Then
$$J_{s,k}(X)=\#\left\{(x_1,\ldots,x_s,y_1,\ldots,y_s)\in\mathbb Z^{2s}:1\le x_i,y_i\le X,\ \sum_{i=1}^s x_i^j=\sum_{i=1}^s y_i^j\text{ for every }1\le j\le k\right\}.$$

## Statement references

[Bourgain–Demeter–Guth, §1](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)

[Assing, §8.2](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

## Facts & Assumptions

**Given:** Positive integers $s,k$ and a real $X\ge1$.

[F1] $J_{s,k}(X)=\int_{[0,1]^k}|f_{k,X}(\alpha)|^{2s}\,d\alpha$, where $f_{k,X}(\alpha)=\sum_{1\le n\le X}e(\sum_{j=1}^k\alpha_jn^j)$ ([[def-vinogradov-mean-value-Jsk]]).

[F2] For an integer vector $m\in\mathbb Z^k$, $\int_{[0,1]^k}e(\sum_jm_j\alpha_j)\,d\alpha$ is $1$ when all $m_j=0$ and $0$ otherwise ([[lem-continuous-torus-orthogonality-for-integer-frequencies]]).

[F3] The exponential character satisfies $e(0)=1$ and $e(u+v)=e(u)e(v)$ ([[def-exponential-character-e]], [[thm-complex-exponential-addition-and-real-extension]]), and $|e(u)|=1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F4] For a complex number of modulus $1$, its conjugate is its multiplicative inverse ([[lem-complex-conjugation-and-modulus-laws]]).

[F5] The multiple Riemann integral on the cube is linear ([[thm-multidimensional-integral-properties]]).

## Proof

1.1 Put $S(\alpha)=f_{k,X}(\alpha)$. By [F3], [F4], and finite distributivity, $|S(\alpha)|^{2s}=\sum_{x_1,\ldots,x_s,y_1,\ldots,y_s\in\mathcal N_X}e\!\left(\sum_{j=1}^k\alpha_j\left(\sum_{i=1}^sx_i^j-\sum_{i=1}^sy_i^j\right)\right)$, where $\mathcal N_X=\{n\in\mathbb Z:1\le n\le X\}$. [given, F1, F3, F4, construct, algebra]

2.1 Integrating the finite sum term by term using [F5], each tuple contributes $1$ exactly when every power-sum difference is zero, and contributes $0$ otherwise by [F2]. The resulting number of contributing tuples is precisely the displayed cardinality. [step 1.1, F2, F5] ∎
