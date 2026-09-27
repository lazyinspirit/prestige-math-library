---
id: cor-conditional-lp-contraction
kind: corollary
title: "Conditional lp contraction"
status: published
origin: pipeline
deps: [thm-conditional-jensen-inequality, lem-absolute-real-powers-are-convex, thm-basic-algebra-and-order-properties-of-conditional-expectation, def-l-p-space-as-a-quotient-by-null-functions, thm-finite-measure-l-r-includes-into-l-p-for-p-less-r, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC. For $1\le p\le\infty$, conditional expectation is a linear map from real $L^p(P)$ to real $L^p(P|_{\mathcal G})$ satisfying $\|E[X\mid\mathcal G]\|_p\le\|X\|_p$.

## Facts & Assumptions

**Given:** AC, $1\le p\le\infty$, real $X\in L^p(P)$, and a conditioning sub-sigma-algebra G.

[F1] On a finite measure space, higher Lp spaces and L-infinity embed in $L^1$. ([[thm-finite-measure-l-r-includes-into-l-p-for-p-less-r]])

[F2] $t\mapsto|t|^p$ is finite Borel convex for every finite $p\ge1$. ([[lem-absolute-real-powers-are-convex]])

[F3] Conditional Jensen applies when X and the finite convex function of X are integrable. ([[thm-conditional-jensen-inequality]])

[F4] Conditional expectation is linear, preserves expectation and order, and satisfies the modulus bound. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F5] Lp elements are almost-everywhere classes of measurable representatives. ([[def-l-p-space-as-a-quotient-by-null-functions]])

## Proof

**Proof technique:** direct.

1.1 For $p>1$, [F1] with $P(\Omega)=1$ makes $X$ integrable; for $p=1$ it is integrable by assumption. Put $U=E[X\mid\mathcal G]$. For finite $p$, [F2] supplies the convex Borel function and $E|X|^p<\infty$ supplies its integrability. Jensen yields $|U|^p\le E[|X|^p\mid\mathcal G]$. Taking expectations using [F4] gives $E|U|^p\le E|X|^p$ and hence the norm inequality by taking the increasing positive pth root. At $p=1$ this is also the modulus estimate of [F4]. [F1, F2, F3, F4]

2.1 If $p=\infty$, let $M=\|X\|_\infty$. The inequalities $|X|\le M+1/n$ for all positive integers hold outside a common null set; their limit gives $|X|\le M$ almost surely. Conditional order and constants imply $-M\le U\le M$ almost surely. Thus $\|U\|_\infty\le M$. Equality of input representatives preserves the conditional class, so the maps are well defined on [F5]; linearity is [F4]. [F1, F4, F5] ∎

## Source notes

Durrett Theorem 4.1.11 and proof, printed pp.211–212; van der Vaart Lemma 1.9(vii), printed p.4. The infinite endpoint uses the essential bound directly.
