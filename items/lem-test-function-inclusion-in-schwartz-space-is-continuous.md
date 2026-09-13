---
id: lem-test-function-inclusion-in-schwartz-space-is-continuous
kind: lemma
title: Test function inclusion in schwartz space is continuous
status: draft
origin: pipeline
deps: [lem-test-function-lf-topology-universal-property, def-schwartz-space-and-its-seminorms, def-schwartz-topology-and-convergence, lem-smooth-compactly-supported-functions-are-dense-in-schwartz-space]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
      url: "https://web.archive.org/web/20250519141924if_/https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "Remark 11.5 and Exercise 11.1, pp. 120, 135"
    - title: "Radu Gelca, Functional Analysis"
      url: "https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf"
      locator: "Theorem 8.4.1, p. 128"
proof_strategy: direct
---

## Statement

For $n\geq1$, the inclusion
$\iota:\mathcal D(\mathbb R^n)\hookrightarrow\mathcal S(\mathbb R^n)$ is
continuous and has dense image.  This holds in ZF.

## Facts & Assumptions

**Given:** The LF test space $\mathcal D(\mathbb R^n)$ and Schwartz space
$\mathcal S(\mathbb R^n)$.

[F1] A linear map from $\mathcal D$ is continuous exactly when every
restriction to $\mathcal D_K$ is continuous
([[lem-test-function-lf-topology-universal-property]]).

[F2] Schwartz space is defined by the seminorms $p_{\alpha\beta}$ and their
locally convex topology ([[def-schwartz-space-and-its-seminorms]],
[[def-schwartz-topology-and-convergence]]).

[F3] Smooth compactly supported cutoffs approximate every Schwartz function in
all Schwartz seminorms
([[lem-smooth-compactly-supported-functions-are-dense-in-schwartz-space]]).

## Proof

**Proof technique:** fixed-support estimates and cutoff density.

1.1 Fix compact $K\subseteq\mathbb R^n$ and $\varphi\in\mathcal D_K$.  Each Schwartz seminorm has the following fixed-support bound. [F2]

$$p_{\alpha\beta}(\varphi) \leq\left(\sup_{x\in K}|x^\alpha|\right) \sup_{x\in K}|\partial^\beta\varphi(x)|.$$

The multiplier on the right is finite, including the zero value when
$K=\varnothing$.  Hence every Schwartz seminorm pulls back continuously to
$\mathcal D_K$. [F2]

2.1 Step 1.1 makes every restricted inclusion $\mathcal D_K\to\mathcal S$ continuous.  The LF universal property therefore makes $\iota$ continuous on all of $\mathcal D$. [F1, step 1.1]

3.1 The approximants in [F3] lie in $\mathcal D$ and converge in the Schwartz topology to the prescribed Schwartz function.  Thus the image of $\iota$ is dense.  This density argument is separate from continuity, and neither uses a choice axiom. [F3] ∎
