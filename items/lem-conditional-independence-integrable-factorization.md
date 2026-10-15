---
id: lem-conditional-independence-integrable-factorization
kind: lemma
title: "Integrable factorization under conditional independence"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-conditional-independence-given-a-sigma-algebra
  - def-conditional-expectation-as-an-ae-class
  - cor-conditional-lp-contraction
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
    - title: "David Aldous and Sinho Chewi, Probability Theory lecture notes, Lecture 9"
      url: "https://www.stat.berkeley.edu/~aldous/205B/chewi_notes.pdf"
---

## Statement

Assume the [[def-axiom-of-choice]] for the conditional-expectation classes. Let $U$ be a real integrable random variable, let $Z$ be a random element, and let $\mathcal G$ be a sub-sigma-algebra. If $U$ and $Z$ are conditionally independent given $\mathcal G$ in the bounded-function sense of [[def-conditional-independence-given-a-sigma-algebra]], then for every bounded measurable real function $h$ on the state space of $Z$,

$$E[U h(Z)\mid\mathcal G]=E[U\mid\mathcal G]E[h(Z)\mid\mathcal G]\quad\text{almost surely}.$$

## Facts & Assumptions

**Given:** The Axiom of Choice, $U\in L^1(P)$, a random element $Z$, a sub-sigma-algebra $\mathcal G$, and $U\perp\!\!\!\perp Z\mid\mathcal G$.

[A1] The Axiom of Choice is assumed for the conditional-expectation classes used in this lemma. [[def-axiom-of-choice]]

[F1] Conditional independence is the bounded-product conditional-expectation identity. [[def-conditional-independence-given-a-sigma-algebra]]

[F2] Conditional-expectation notation denotes the almost-sure class of versions, which exists under the stated Choice assumption. [[def-conditional-expectation-as-an-ae-class]]

[F3] Under Choice, conditional expectation contracts every $L^p$ norm for $1\le p\le\infty$, in particular $L^1$ and $L^\infty$. [[cor-conditional-lp-contraction]]

## Proof

1.1 For each integer $n\ge1$, let $T_n(u)=\max(-n,\min(u,n))$. The functions $T_n(U)$ and $h(Z)$ are bounded and measurable, so [F1] gives the identity $E[T_n(U)h(Z)\mid\mathcal G]=E[T_n(U)\mid\mathcal G]E[h(Z)\mid\mathcal G]$ of the classes in [F2]. [given, F1, F2, construct]

2.1 Since $U\in L^1$, $T_n(U)\to U$ in $L^1$; boundedness of $h$ gives $T_n(U)h(Z)\to Uh(Z)$ in $L^1$. By [F3], the conditional expectations on the left converge in $L^1$ to $E[Uh(Z)\mid\mathcal G]$, and $E[T_n(U)\mid\mathcal G]\to E[U\mid\mathcal G]$ in $L^1$. Also $|E[h(Z)\mid\mathcal G]|\le\|h\|_\infty$ almost surely by [F3], so multiplication by this factor preserves that $L^1$ convergence. Taking the $L^1$ limits in step 1.1 proves the stated identity of almost-sure classes. [A1, F2, F3, step 1.1, algebra] ∎