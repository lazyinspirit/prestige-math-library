---
id: thm-kantorovich-rubinstein-duality-on-compact-metric-spaces-under-countable-choice
kind: theorem
title: "Kantorovich–Rubinstein duality on compact metric spaces under countable choice"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-countable-choice
  - lem-compact-metric-space-is-second-countable-under-countable-choice
  - thm-kantorovich-rubinstein-duality-on-compact-second-countable-metric-spaces
justified_by: []
axiom_use: "The Axiom of Countable Choice is used through the compact-metric second-countability lemma, which chooses a countable family of finite nets to obtain a countable dense set. No full Axiom of Choice or Dependent Choice is used."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Dmitriy Panchenko, Lecture Notes on Probability Theory, §4.4, Theorem 4.14 and proof, pp. 121–124"
      url: "https://drive.google.com/uc?export=download&id=0B6JeBUquZ5BwVlV1dEpsTHVVbTA&resourcekey=0-5xbvKhDXZjrYRLfqppsHuQ"
    - title: "Filippo Santambrogio, Introduction to Optimal Transport Theory, §§1.1–1.3, PDF pp. 1–7"
      url: "https://arxiv.org/pdf/1009.3856"
    - title: "Martin Arjovsky, Soumith Chintala and Léon Bottou, Wasserstein GAN, §§2–3, PDF pp. 3–6"
      url: "https://arxiv.org/pdf/1701.07875"
---

## Statement

Assume the Axiom of Countable Choice. Let $(X,d)$ be a nonempty compact metric space, let $\mu,\nu$ be countably additive Borel probability measures on $X$, and fix $x_0\in X$. Define $\Pi_X(\mu,\nu)$ to be the Borel probability measures $\gamma$ on the product-topology space $X\times X$ satisfying $\gamma(A\times X)=\mu(A)$ and $\gamma(X\times A)=\nu(A)$ for every Borel set $A\subseteq X$, and define $W_1^X(\mu,\nu)=\inf_{\gamma\in\Pi_X(\mu,\nu)}\int_{X\times X}d(x,y)\,d\gamma(x,y)$. Then $\Pi_X(\mu,\nu)$ is nonempty and
$$W_1^X(\mu,\nu)=\sup\left\{\int_X f\,d\mu-\int_X f\,d\nu:\ f:X\to\mathbb R,\ f(x_0)=0,\ |f(x)-f(y)|\le d(x,y)\text{ for all }x,y\in X\right\}.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the compact metric space and measures in the Statement.

[A1] The Axiom of Countable Choice selects a member from each set in a countable family of nonempty sets. [[def-countable-choice]]

[F1] Under the Axiom of Countable Choice, every compact metric space is second-countable. [[lem-compact-metric-space-is-second-countable-under-countable-choice]]

[F2] On a nonempty compact second-countable metric space, the Borel coupling set is nonempty and the 1-Wasserstein cost equals the supremum over basepoint-normalized 1-Lipschitz functions. [[thm-kantorovich-rubinstein-duality-on-compact-second-countable-metric-spaces]]

## Proof

**Proof technique:** direct.

1.1 By [A1] and [F1], the metric topology of $X$ has an at-most-countable basis, so the hypotheses of [F2] hold. The countable-choice use is exactly the one recorded in [F1]; no other selection is needed. [given, A1, F1, F2]

2.1 Apply [F2] to $X,\mu,\nu$ and the fixed point $x_0$. It gives $\Pi_X(\mu,\nu)\ne\varnothing$ and the displayed Kantorovich–Rubinstein equality. [step 1.1, F2] ∎
