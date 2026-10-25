---
id: lem-missing-at-random-integrable-factorization
kind: lemma
title: "Conditional-independence factorization for integrable outcomes"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-conditional-expectation-as-an-ae-class
  - def-conditional-expectation-given-a-sigma-algebra
  - def-conditional-independence-given-a-sigma-algebra
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-probability-measure
  - def-random-element-and-real-random-variable
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-monotone-convergence-for-the-integral
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Sinho Chewi, Probability Notes for David Aldous, Lecture 9"
      url: "https://www.stat.berkeley.edu/~aldous/205B/chewi_notes.pdf"
      locator: "§9.2, Definition 9.1, PDF pp. 35–36, bounded-function definition of conditional independence."
---

## Statement

Assume AC. Let $(\Omega,\mathcal F,P)$ be a probability space, let $\mathcal G\subseteq\mathcal F$ be a sub-sigma-algebra, let $R$ be a random variable taking values in $\{0,1\}$, and let $Y$ be a real integrable random variable. If $R$ and $Y$ are conditionally independent given $\mathcal G$, then for every Borel function $\varphi:\mathbb R\to\mathbb R$ such that $\varphi(Y)$ is integrable,
$$E[R\varphi(Y)\mid\mathcal G]=E[R\mid\mathcal G]E[\varphi(Y)\mid\mathcal G]\quad\text{almost surely}.$$

## Facts & Assumptions

**Given:** AC, the probability space and sub-sigma-algebra above, $R\in\{0,1\}$, $Y\in L^1(P)$, $R\perp\!\!\!\perp Y\mid\mathcal G$, and a Borel $\varphi$ with $Z=\varphi(Y)\in L^1(P)$.

[F1] Conditional independence means the conditional product identity for every pair of bounded measurable real functions. ([[def-conditional-independence-given-a-sigma-algebra]])

[F2] A conditional-expectation version is measurable, integrable, and satisfies the defining event-integral identity. ([[def-conditional-expectation-given-a-sigma-algebra]])

[F3] Under AC, conditional expectation is linear and order-preserving, and $E|E[U\mid\mathcal G]|\le E|U|$ for every real $U\in L^1(P)$. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F4] Increasing sequences of nonnegative measurable functions pass to the limit under the integral. ([[thm-monotone-convergence-for-the-integral]])

[F5] For a real measurable $Z$, integrability means $E|Z|<\infty$. ([[def-integrable-real-and-complex-functions-and-their-integrals]])

[F6] The expectation of an integrable real random variable is its Lebesgue integral. ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]])

[A1] AC is assumed to define conditional independence and guarantee existence of the conditional-expectation classes used here. ([[def-axiom-of-choice]], [[def-conditional-independence-given-a-sigma-algebra]], [[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

## Proof

1.1 For $m\ge1$, put $Z_m=\max(-m,\min(Z,m))$. The functions $z\mapsto\max(-m,\min(\varphi(z),m))$ and $r\mapsto r$ are bounded and measurable, so [F1] gives $E[RZ_m\mid\mathcal G]=E[R\mid\mathcal G]E[Z_m\mid\mathcal G]$, with the conditional-expectation versions interpreted by [F2]. [given, A1, F1, F2]

2.1 The truncations satisfy $Z_m\to Z$ in $L^1$: $|Z-Z_m|\le |Z|\mathbf1_{\{|Z|>m\}}$, and [F4] applied to $|Z|\mathbf1_{\{|Z|\le m\}}\uparrow|Z|$ makes the tail integrals tend to zero, using integrability [F5] and expectation as integral [F6]. By [F3], conditional expectation is an $L^1$ contraction; since $0\le E[R\mid\mathcal G]\le1$, both sides of the identity in step 1.1 converge in $L^1$ to the corresponding sides for $Z$. Uniqueness of the $L^1$ limit proves the claimed equality. [given, F3, F4, F5, F6, step 1.1] ∎

## Source notes

The cited notes define conditional independence only for bounded measurable test functions. The truncation argument above supplies the integrable extension used in this item.
