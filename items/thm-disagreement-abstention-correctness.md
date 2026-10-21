---
id: thm-disagreement-abstention-correctness
kind: theorem
title: "Unanimous version-space prediction and disagreement abstention"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - alg-finite-pool-version-space-query
  - def-pool-based-realizable-active-learning
  - thm-active-version-space-invariant-and-query-bound
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Steve Hanneke, Theory of Active Learning, version 1.1, §§2.1–2.2 and §5.1"
      url: "https://web.ics.purdue.edu/~hanneke/docs/active-survey/active-survey.pdf"
    - title: "Daniel Joseph Hsu, Algorithms for Active Learning, Chapter 2 §§2.1–2.2.2"
      url: "https://www.cs.columbia.edu/~djhsu/papers/dissertation.pdf"
---

## Statement

Fix a finite pool-based realizable active-learning instance, run the ascending-scan procedure for any finite number of steps, and let $V$ be the resulting current version space. Let $X\sim D_X$ be a fresh feature independent of the query history. Define the selective prediction rule $g_V(x)$ to be the common label $c\in\{0,1\}$ when every $h\in V$ has $h(x)=c$, and to be the abstention symbol $\bot$ otherwise. Then $\operatorname{DIS}(V)$ is measurable,
$$D_X(\{x:g_V(x)=\bot\})=D_X(\operatorname{DIS}(V)),$$
and
$$D_X(\{x:g_V(x)\in\{0,1\},\ g_V(x)\ne h^*(x)\})=0.$$
These probabilities are for a fixed query history; the formula gives the abstention probability but no automatic upper bound on it from $|V|$.

## Statement references

[[def-pool-based-realizable-active-learning]]: defines $D_X$, finite measurable classifiers, and $\operatorname{DIS}(V)$.

[[alg-finite-pool-version-space-query]]: defines the current version space after each finite pool scan step.

[[thm-active-version-space-invariant-and-query-bound]]: proves that every such current version space contains $h^*$.

[Steve Hanneke, *Theory of Active Learning*, version 1.1, §§2.1–2.2 and §5.1](https://web.ics.purdue.edu/~hanneke/docs/active-survey/active-survey.pdf)

[Daniel Joseph Hsu, *Algorithms for Active Learning*, Chapter 2 §§2.1–2.2.2](https://www.cs.columbia.edu/~djhsu/papers/dissertation.pdf)

## Facts & Assumptions

**Given:** A current version space $V$ from the stated finite-pool procedure and a fresh feature $X\sim D_X$ independent of the fixed query history.

[F1] [[def-pool-based-realizable-active-learning]]: $\mathcal H$ is finite, its binary classifiers are measurable, and $\operatorname{DIS}(V)$ consists of points where two members of $V$ give different labels.

[F2] [[alg-finite-pool-version-space-query]]: the query history yields a current version space by finite filtering of $\mathcal H$ using observed oracle labels.

[F3] [[thm-active-version-space-invariant-and-query-bound]]: under the pointwise exact-oracle assumption, every current version space contains $h^*$.

[A1] The fresh feature is sampled independently of the fixed query history from the probability measure $D_X$.

[A2] No choice axiom is assumed; only a finite union over pairs in $V$ is used.

## Proof

1.1 For each pair $h,g\in V$, the disagreement set $\{x:h(x)\ne g(x)\}$ is the union of $h^{-1}(\{0\})\cap g^{-1}(\{1\})$ and $h^{-1}(\{1\})\cap g^{-1}(\{0\})$. These sets are measurable because $h$ and $g$ are measurable. Since $V$ is finite by [F1] and [F2], $\operatorname{DIS}(V)$ is a finite union of measurable sets and is measurable; this finite union uses no choice axiom by [A2]. [F1, F2, A2, given, construct]

2.1 By the definition of $g_V$, $g_V(x)=\bot$ exactly when the members of $V$ do not all agree at $x$, which is exactly when $x\in\operatorname{DIS}(V)$. Thus the two events in the first equality are identical, and their $D_X$ probabilities agree for the fresh feature in [A1]. [A1, F1, step 1.1, algebra]

3.1 If $g_V(x)\in\{0,1\}$, all classifiers in $V$ give that common label at $x$. By [F3], $h^*\in V$, so the common label equals $h^*(x)$. Therefore the wrong-prediction event is empty and has probability zero under $D_X$. [F3, given, algebra] ∎
