---
id: ex-vector-measure-induced-by-an-l-one-function
kind: example
title: "Vector measure induced by an L-one function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-bochner-density-defines-an-absolutely-continuous-vector-measure, def-banach-valued-simple-function-and-integral, def-bochner-integrable-function, thm-bochner-integrability-criterion, thm-monotone-convergence-for-the-integral]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gilles Pisier, Martingales in Banach Spaces"
      url: "https://www.math.tamu.edu/~geoffrey.schiebinger/Pisier_Martingales.pdf"
      locator: "Chapter 2, Section 2.1, Remark and formulas (2.2)--(2.3), printed pp. 34--35"
pipeline_run: phase-2-next-18
---

## Example

Let $(S,\mathcal A,\mu)$ be a measure space, let $X$ be a real or complex
Banach space, and let $f:S\to X$ be Bochner integrable. Then

$$\nu_f(E)=\int_Ef\,d\mu\qquad(E\in\mathcal A)$$

is a norm-countably additive $X$-valued measure, satisfies $\nu_f\ll\mu$, and
has variation

$$|\nu_f|(E)=\int_E\lVert f\rVert\,d\mu.$$

In particular, if $f=\sum_{n\geq1}x_n\mathbf1_{A_n}$ for pairwise disjoint
measurable $A_n$ and
$\sum_n\mu(A_n)\lVert x_n\rVert<\infty$, then

$$\nu_f(E)=\sum_{n=1}^{\infty}\mu(E\cap A_n)x_n,\qquad |\nu_f|(E)=\sum_{n=1}^{\infty}\mu(E\cap A_n)\lVert x_n\rVert.$$

## Facts & Assumptions

[L1] A Bochner density induces an absolutely continuous vector measure whose variation has density equal to its pointwise norm ([[lem-bochner-density-defines-an-absolutely-continuous-vector-measure]]).

[L2] Finite Banach-valued simple integrals have their defining finite-sum formula; monotone convergence calculates scalar norm tails; and the Bochner criterion and definition identify the integral of an $L^1$-simple limit ([[def-banach-valued-simple-function-and-integral]], [[thm-monotone-convergence-for-the-integral]], [[thm-bochner-integrability-criterion]], [[def-bochner-integrable-function]]).

## Verification

**Proof technique:** direct.

**Given:** the measure space, Banach target, and Bochner density in the first claim, and the disjoint countably valued data in the special case.

1.1 Obtain the vector-measure conclusions. [given, L1]
Apply [L1] to $f$. It gives norm countable additivity of $E\mapsto\nu_f(E)$, absolute continuity with respect to $\mu$, and the equality $|\nu_f|(E)=\int_E\lVert f\rVert$ for every measurable $E$. This is an equality of finite positive measures, not merely an upper estimate on $\lVert\nu_f(E)\rVert$.

2.1 Calculate the countably valued special case. [given, L1, L2, step 1.1]
Put $s_N=\sum_{n\leq N}x_n\mathbf1_{A_n}$. These are integrable simple functions and converge pointwise to $f$. Pairwise disjointness and monotone convergence in [L2] give $\int\lVert f-s_N\rVert=\sum_{n>N}\mu(A_n)\lVert x_n\rVert\to0$, so [L2] makes $f$ Bochner integrable. Restricting the same approximation to $E$ and using the finite simple formula gives $\nu_f(E)=\sum_n\mu(E\cap A_n)x_n$. Also $\lVert f\rVert=\sum_n\lVert x_n\rVert\mathbf1_{A_n}$ pointwise, so [L1] and the same scalar monotone-convergence calculation give $|\nu_f|(E)=\sum_n\mu(E\cap A_n)\lVert x_n\rVert$.

3.1 Audit the examples at the boundaries. [L1, L2, step 1.1, step 2.1] For $E=\varnothing$ both measures vanish. For $f=0$, the induced vector measure and its variation are both zero. With one nonzero level the two formulas read $\nu_f(E)=\mu(E\cap A)x$ and $|\nu_f|(E)=\mu(E\cap A)\lVert x\rVert$, exhibiting equality even when cancellation would make the norm of a multi-level vector sum smaller. A zero coefficient on an infinite-measure level contributes zero under the established simple-integral convention. [given, L1, L2, step 1.1, step 2.1] ∎
