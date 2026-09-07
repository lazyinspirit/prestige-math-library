---
id: "cor-euclidean-hausdorff-dimension"
kind: "corollary"
title: "Euclidean space and positive-volume sets have their Euclidean dimension"
deps: ["thm-hausdorff-n-measure-is-proportional-to-lebesgue-measure", "thm-hausdorff-dimension-is-countably-stable", "thm-hausdorff-dimension-critical-exponent"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Bishop–Peres §1.2 p.7 after Lemma 1.2.8; Falconer §1.2 p.8
      url: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement

Assume the Axiom of Countable Choice. For each integer $n\ge1$, $\dim_H\mathbb R^n=n$ and every subset of $\mathbb R^n$ has dimension at most $n$. Every $A\subseteq\mathbb R^n$ with $\lambda_n^*(A)>0$ has dimension $n$.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Under the standing Countable Choice hypothesis, $\mathcal H^n(A)=c_n\lambda_n^*(A)$ for all subsets, with $0<c_n<\infty$. [[thm-hausdorff-n-measure-is-proportional-to-lebesgue-measure]]

[F2] Under the standing Countable Choice hypothesis, dimension is monotone and countably stable. [[thm-hausdorff-dimension-is-countably-stable]]

[F3] Finite positive measure at exponent $n$ gives dimension $n$; positive measure at $n$ rules out dimension below $n$. [[thm-hausdorff-dimension-critical-exponent]]

## Proof

1.1 Every nondegenerate bounded cube has finite positive Lebesgue volume, hence finite positive $\mathcal H^n$ and dimension $n$. Countably many such cubes cover $\mathbb R^n$, so its dimension is $n$ by countable stability. [F1, F2, F3]

2.1 Monotonicity bounds every subset above by $n$, including the empty set. If its Lebesgue outer measure is positive, its $\mathcal H^n$ is positive, possibly infinite, and the critical-exponent theorem bounds its dimension below by $n$. Thus equality holds. The statements include $n=1$. [F1, F2, F3, step 1.1] ∎
