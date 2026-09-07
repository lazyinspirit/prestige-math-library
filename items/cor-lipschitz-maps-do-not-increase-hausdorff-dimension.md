---
id: "cor-lipschitz-maps-do-not-increase-hausdorff-dimension"
kind: "corollary"
title: "Lipschitz monotonicity and bi-Lipschitz invariance of dimension"
deps: ["thm-hausdorff-measure-under-lipschitz-maps", "thm-hausdorff-dimension-critical-exponent"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Fremlin 264G,Yj(i),Yk; Falconer Lemma 1.8
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement

Assume the Axiom of Countable Choice. A Lipschitz map $f:D\subseteq X\to Y$ satisfies $\dim_H f(A)\le\dim_H A$ for every $A\subseteq D$. If $f$ is a bijection from $D$ onto $f(D)$ and there exist $0<a\le b<\infty$ with

$$a\,d_X(x,y)\le d_Y(f(x),f(y))\le b\,d_X(x,y)\quad(x,y\in D),$$

then $\dim_H f(A)=\dim_H A$ (bi-Lipschitz invariance).

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Under the standing Countable Choice hypothesis, positive Lipschitz constants transfer each zero Hausdorff measure to zero; a zero-Lipschitz image is empty or a singleton. [[thm-hausdorff-measure-under-lipschitz-maps]]

[F2] Every exponent strictly above finite dimension has zero Hausdorff measure. [[thm-hausdorff-dimension-critical-exponent]]

## Proof

1.1 For a positive Lipschitz constant and finite $d=\dim_H A$, every $t>d$ has $\mathcal H^t(f(A))=0$, so $\dim_H f(A)\le d$. For $d=\infty$ the inequality is automatic. A constant map has empty or singleton image, with dimension zero from its singleton covers, so its case also holds. [F1, F2]

2.1 The two-sided bounds make $f$ Lipschitz with constant $b$ and its inverse on $f(D)$ Lipschitz with constant $1/a$. Apply the first step in both directions. Empty sets and the value zero are allowed throughout. [step 1.1, given] ∎
