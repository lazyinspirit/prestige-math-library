---
id: ex-linear-combinations-of-brownian-values-are-gaussian
kind: example
title: "Linear combinations of Brownian values are Gaussian"
status: published
origin: pipeline
deps: [def-gaussian-process, def-brownian-motion, def-multivariate-normal-law, lem-positive-semidefiniteness-of-the-brownian-covariance-kernel, thm-covariance-bilinearity-and-symmetry, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Nobuaki Yoshida, Probability Theory, Section 6.1"
      url: "https://www.math.nagoya-u.ac.jp/~noby/pdf/prob.pdf"
---

## Example

Assume the Axiom of Choice. Let $B$ be a standard Brownian motion. For every
finite list $t_1,\ldots,t_n\ge0$ and $a_1,\ldots,a_n\in\mathbb R$,

$$\sum_{j=1}^na_jB_{t_j}\sim N\!\left(0,\sum_{i,j=1}^na_ia_j\min(t_i,t_j)\right).$$

This includes repeated and zero times, zero coefficients, variance zero, and
the empty sum when $n=0$.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$, and finite time and coefficient lists as in the example.

[F1] Brownian motion is a centered Gaussian process with covariance kernel $K(s,t)=\min(s,t)$. [[def-brownian-motion]], [[def-gaussian-process]].

[F2] A finite evaluation vector of a Gaussian process has a possibly singular multivariate normal law, and every scalar projection of $N_n(m,\Sigma)$ has law $N(u\mathbin\cdot m,u^T\Sigma u)$; the parameters are its mean and variance. [[def-gaussian-process]], [[def-multivariate-normal-law]].

[F3] Covariance is bilinear on finite linear combinations. [[thm-covariance-bilinearity-and-symmetry]].

[F4] The minimum kernel is positive semidefinite for every finite, repeated, or zero time list, including the empty list. [[lem-positive-semidefiniteness-of-the-brownian-covariance-kernel]].

[F5] AC is inherited through the Gaussian and Brownian normal-law interfaces. [[def-axiom-of-choice]].

## Verification

**Proof technique:** direct.

1.1 First suppose $n\ge1$ and write $X=(B_{t_1},\ldots,B_{t_n})$ and $a=(a_1,\ldots,a_n)$. By [F1]--[F2], $X$ is multivariate normal with mean vector zero and covariance matrix $K_{ij}=\min(t_i,t_j)$, even if some coordinates repeat or are deterministic. Its projection $a\mathbin\cdot X$ therefore has law $$N\!\left(0,a^TKa\right)=N\!\left(0,\sum_{i,j=1}^na_ia_j\min(t_i,t_j)\right).$$ [F1, F2, algebra]

2.1 Independently, covariance bilinearity computes $$\operatorname{Var}\!\left(\sum_{j=1}^na_jB_{t_j}\right)=\sum_{i,j=1}^na_ia_j\operatorname{Cov}(B_{t_i},B_{t_j})=\sum_{i,j=1}^na_ia_j\min(t_i,t_j),$$ confirming that the second parameter in step 1.1 is the actual variance. It is nonnegative by [F4], including when cancellations make it zero; in that case [F2] interprets the law as the point mass $N(0,0)$. [step 1.1, F1, F2, F3, F4]

3.1 If $n=0$, the sum and the double sum are both empty and equal zero, so the random variable is the constant zero and has law $N(0,0)$ by [F2]. Zero coefficients, $t_j=0$, and repeated times require no deletion and are already covered by the possibly singular matrix in steps 1.1--2.1. AC is used only through [F1]--[F2]; the finite algebra and the positive-semidefinite calculation make no further choice. [step 1.1, step 2.1, F2, F4, F5] ∎

## Source notes

Yoshida, Lemma 6.1.3 and equation (6.5), printed pp. 174--175, identify Brownian finite collections as mean-zero Gaussian variables with covariance $\min(s,t)$ in dimension one. The displayed projection and singular-case calculation are supplied explicitly above.
