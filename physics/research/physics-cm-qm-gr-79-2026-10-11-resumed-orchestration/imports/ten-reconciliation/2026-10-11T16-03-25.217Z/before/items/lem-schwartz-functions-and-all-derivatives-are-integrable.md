---
id: lem-schwartz-functions-and-all-derivatives-are-integrable
kind: lemma
title: Schwartz derivatives are integrable
deps: ["def-schwartz-space-and-its-seminorms", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets", "def-countable-choice"]
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Semyon Dyatlov, MIT 18.155 (2022)
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: Equation (11.7), p.120; Teschl Problem 14.1
---

## Statement

Assume countable choice. If $f\in\mathcal S(\mathbb R^n)$, then $x^\alpha\partial^\beta f\in L^p$ for every $1\le p\le\infty$ and every $\alpha,\beta$. Its norm is bounded by a finite sum of Schwartz seminorms.

## Facts & Assumptions

**Given:** The seminorms in [[def-schwartz-space-and-its-seminorms]] and countable choice ([[def-countable-choice]]).

[F1] Tonelli applies to nonnegative product-measurable functions on sigma-finite spaces ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F2] Under countable choice, $\lambda_m\times\lambda_k$ agrees with $\lambda_{m+k}$ on Borel subsets of $\mathbb R^{m+k}$ for positive integers $m,k$ ([[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]).

## Proof

**Proof technique:** direct.

1.1 Put $W(x)=\prod_{j<n}(1+x_j^2)$ and $A=\sum_{\epsilon\in\{0,1\}^n}p_{\alpha+2\epsilon,\beta}(f)$. Expanding the product and taking absolute values gives $W(x)|x^\alpha\partial^\beta f(x)|\le A$. Also $|x^\alpha\partial^\beta f(x)|\le B:=p_{\alpha\beta}(f)\le A$. Each factor $(1+t^2)^{-1}$ has integral at most $6$: its integral on $[-1,1]$ is at most $2$, while on $2^k\le|t|<2^{k+1}$ it contributes at most $2\cdot2^k2^{-2k}$; the sum for $k\ge0$ is $4$. All functions are continuous and hence Borel measurable. For $n=1$ this proves $\int W^{-1}\le6$. For $n>1$, [F2] identifies integration of this Borel function against $\lambda_n$ with integration against $\lambda_{n-1}\times\lambda_1$; induction on $n$ and [F1] therefore give $\int W^{-1}\le6^n$. [given, F1, F2, algebra]

2.1 For $g=x^\alpha\partial^\beta f$, step 1.1 gives $\|g\|_1\le6^nA$ and $\|g\|_\infty\le B$. If $1<p<\infty$, integrating $|g|^p\le B^{p-1}|g|$ gives $\|g\|_p\le B^{1-1/p}(6^nA)^{1/p}\le6^nA$. When $B=0$, $g=0$ and this conclusion holds directly. This treats both endpoint spaces and every intermediate exponent. [step 1.1, algebra] ∎
