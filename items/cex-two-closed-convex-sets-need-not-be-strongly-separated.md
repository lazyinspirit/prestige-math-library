---
id: cex-two-closed-convex-sets-need-not-be-strongly-separated
kind: counterexample
title: Two closed convex sets can have no strong separator
status: draft
origin: pipeline
deps: [def-weak-and-strict-separation, thm-derivative-of-exponential, cor-differentiable-implies-continuous, thm-exponential-two-point-convexity, thm-exponential-is-strictly-increasing]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis, Problem 5.2
      url: https://pdfcoffee.com/topics-in-real-and-functional-analysis-gerald-teschl-pdf-free.html
---

## Statement refuted

Two disjoint closed convex sets in a normed space always admit a strong
separator.

## Facts & Assumptions

**Given:** $A=\mathbb R\times\{0\}$ and $B=\{(s,t):t\ge e^{-s}\}$ in $\mathbb R^2$.

[F1] The exponential is continuous and convex ([[cor-differentiable-implies-continuous]], [[thm-exponential-two-point-convexity]]).

## Counterexample

**Proof technique:** direct.

1.1 $A$ is closed convex. By [F1], $B$ is the closed epigraph of a convex function, hence closed and convex; it is disjoint from $A$ because $e^{-s}>0$. [given, F1]

2.1 The points $(n,0)\in A$ and $(n,e^{-n})\in B$ have distance $e^{-n}\to0$. A strong gap $\beta-\alpha>0$ for $f$ would imply $\|a-b\|\ge(\beta-\alpha)/\|f\|$ for all $a\in A,b\in B$, impossible. [step 1.1, algebra] ∎
