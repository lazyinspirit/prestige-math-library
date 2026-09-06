---
id: thm-separation-of-disjoint-convex-sets-one-open
kind: theorem
title: Separation of disjoint convex sets when one is open
status: published
origin: pipeline
deps: [thm-separation-of-an-open-convex-set-and-a-point, def-weak-and-strict-separation]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Theo Buehler and Dietmar Salamon, Functional Analysis, Theorem 2.41
      url: https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf
---

## Statement

If $U,V\subseteq X$ are nonempty disjoint convex sets and $U$ is open, then
there is a nonzero $f\in X^*$ such that

$$\operatorname{Re}f(u)<\operatorname{Re}f(v)\qquad(u\in U, v\in V).$$

## Facts & Assumptions

**Given:** Nonempty disjoint convex sets $U,V$, with $U$ open.

[F1] An exterior point and a nonempty open convex set admit a strict separating continuous functional ([[thm-separation-of-an-open-convex-set-and-a-point]]).

## Proof

**Proof technique:** direct.

1.1 The difference $D=U-V$ is open and convex, and $0\notin D$ because $U\cap V=\varnothing$. [given, algebra]

2.1 Apply [F1] to $D$ and $0$. It supplies nonzero $f\in X^*$ with $\operatorname{Re}f(d)<0$ for every $d\in D$. [step 1.1, F1]

3.1 For $u\in U$ and $v\in V$, $u-v\in D$, so $\operatorname{Re}f(u)-\operatorname{Re}f(v)<0$. This is the required strict separation. [step 2.1, algebra] ∎
