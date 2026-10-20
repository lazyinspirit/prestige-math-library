---
id: lem-independent-subgaussian-prefix-tail
kind: lemma
title: "Tail bounds for deterministic prefixes of independent sub-Gaussian rewards"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-centered-subgaussian-reward, def-independent-random-elements, thm-independent-random-elements-have-product-joint-law, def-expectation-of-a-nonnegative-or-integrable-random-variable, thm-tonelli-theorem-for-sigma-finite-product-spaces, prop-order-and-scalar-rules-for-the-nonnegative-integral, cor-markov-inequality-for-random-variables, thm-exponential-addition-formula, cor-exponential-reciprocal-and-positivity, thm-exponential-is-strictly-increasing]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§5.3, Theorem 5.3 and Corollary 5.5, PDF pp. 86–87 / printed pp. 77–78; the independent-sum step is Exercise 5.7."
    - title: "Sébastien Bubeck and Nicolò Cesa-Bianchi, Regret Analysis of Stochastic and Nonstochastic Multi-armed Bandit Problems"
      url: "https://arxiv.org/pdf/1204.5721"
      locator: "Chapter 2 §2.2, Equation (2.2) and the fixed-sample MGF tail derivation, PDF pp. 13–14 / printed pp. 10–11."
---

## Statement

Let $q\ge1$ be an integer. Let $Z_1,\ldots,Z_q$ be mutually independent integrable real random variables on a common probability space, with means $m_j=\mathbb E[Z_j]$, and suppose each is 1-sub-Gaussian, meaning that $\mathbb E[\exp(\lambda(Z_j-m_j))]\le\exp(\lambda^2/2)$ for every $\lambda\in\mathbb R$. Then for every $t\ge0$,
$$
\mathbb P\!\left(\sum_{j=1}^q(Z_j-m_j)\ge t\right)\le \exp\!\left(-\frac{t^2}{2q}\right),\qquad
\mathbb P\!\left(\sum_{j=1}^q(Z_j-m_j)\le -t\right)\le \exp\!\left(-\frac{t^2}{2q}\right).
$$

## Statement references

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*](https://tor-lattimore.com/downloads/book/book.pdf): §5.3, Theorem 5.3 and Corollary 5.5, PDF pp. 86–87 / printed pp. 77–78; the independent-sum step is Exercise 5.7.

[Sébastien Bubeck and Nicolò Cesa-Bianchi, *Regret Analysis of Stochastic and Nonstochastic Multi-armed Bandit Problems*](https://arxiv.org/pdf/1204.5721): Chapter 2 §2.2, Equation (2.2) and fixed-sample MGF tail derivation, PDF pp. 13–14 / printed pp. 10–11.

## Facts & Assumptions

**Given:** A finite family of mutually independent integrable real random variables $Z_1,\ldots,Z_q$, their means $m_j$, and the 1-sub-Gaussian MGF bounds in the statement.

[F1] For each $j$ and every real $\lambda$, $\mathbb E[\exp(\lambda(Z_j-m_j))]\le\exp(\lambda^2/2)$ ([[def-centered-subgaussian-reward]]).

[F2] Independence means the generated sigma-algebras are independent ([[def-independent-random-elements]]); therefore the joint law of the finite vector is the product of its marginal laws ([[thm-independent-random-elements-have-product-joint-law]]).

[F3] Tonelli permits iterated integration of nonnegative product-measurable functions over sigma-finite product spaces ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]); positive scalar factors may be taken outside nonnegative integrals ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F4] Expectation of a nonnegative random variable is its Lebesgue integral ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]]).

[F5] For a nonnegative random variable $W$ and $a>0$, $\mathbb P(W\ge a)\le\mathbb E[W]/a$ ([[cor-markov-inequality-for-random-variables]]).

[F6] The real exponential satisfies $\exp(x+y)=\exp(x)\exp(y)$ ([[thm-exponential-addition-formula]]), is positive ([[cor-exponential-reciprocal-and-positivity]]), and is strictly increasing ([[thm-exponential-is-strictly-increasing]]).

## Proof

1.1 Put $S=\sum_{j=1}^q(Z_j-m_j)$. For $q=1$ the desired MGF bound is [F1]. For $q\ge2$ and $\lambda\ge0$, the product-law identity in [F2] and the exponential addition formula in [F6] give $\mathbb E[e^{\lambda S}]=\int_{\mathbb R^q}\prod_{j=1}^q e^{\lambda(z_j-m_j)}\,d\!\left(\bigotimes_{j=1}^q\mathbb P_{Z_j}\right)(z_1,\ldots,z_q)$. The integrand is nonnegative and measurable by [F6]. Repeated application of Tonelli in [F3], grouping the first $q-1$ factors and the last factor, factors this integral into the product of the $q$ one-dimensional integrals. [F2, F3, F4, F6]

2.1 Each factor is at most $e^{\lambda^2/2}$ by [F1], so $\mathbb E[e^{\lambda S}]\le e^{q\lambda^2/2}$. The same argument with $-\lambda$ gives $\mathbb E[e^{-\lambda S}]\le e^{q\lambda^2/2}$. [step 1.1, F1, F6, algebra]

3.1 If $t>0$ and $\lambda>0$, strict increase and positivity of the exponential in [F6] identify $\{S\ge t\}=\{e^{\lambda S}\ge e^{\lambda t}\}$. Markov's inequality [F5] and step 2.1 yield $\mathbb P(S\ge t)\le e^{q\lambda^2/2-\lambda t}$. Choosing $\lambda=t/q$ gives $\mathbb P(S\ge t)\le e^{-t^2/(2q)}$. [given, step 2.1, F5, F6, choose, algebra]

4.1 Applying the same argument to $-S$ gives $\mathbb P(S\le-t)\le e^{-t^2/(2q)}$. At $t=0$ both asserted bounds reduce to the probability bound $1\le1$. [given, step 2.1, F5, F6, algebra] ∎
