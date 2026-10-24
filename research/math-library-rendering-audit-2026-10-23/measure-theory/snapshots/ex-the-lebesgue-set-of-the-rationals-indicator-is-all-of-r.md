---
id: ex-the-lebesgue-set-of-the-rationals-indicator-is-all-of-r
kind: example
title: "The $L^1_{loc}$ class of $\\mathbf{1}_{\\mathbb{Q}}$ has every point as a Lebesgue point"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, def-lebesgue-point-and-lebesgue-set, prop-countable-subsets-of-rn-are-lebesgue-null]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Theorem 3.20"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $f=\mathbf{1}_{\mathbb{Q}}$ on $\mathbb{R}$. Then the
$L^1_{\mathrm{loc}}$ class of $f$ is the zero class, and its Lebesgue set is
all of $\mathbb{R}$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the Dirichlet function $f=\mathbf{1}_{\mathbb{Q}}$ on $\mathbb{R}$.

[L1] The Lebesgue set of a class consists of the points where some representative has vanishing averaged oscillation. ([[def-lebesgue-point-and-lebesgue-set]])

[L2] Every countable subset of $\mathbb{R}$ is Lebesgue null. ([[prop-countable-subsets-of-rn-are-lebesgue-null]])

## Verification

**Proof technique:** direct.

1.1 The set $\mathbb{Q}$ is countable, so [L2] gives [L2, given] $\mathbf{1}_{\mathbb{Q}}=0$ almost everywhere. Thus the $L^1_{\mathrm{loc}}$ class of $f$ is the same as the class of the zero function. [L2, given]

2.1 For the zero representative and every $x\in\mathbb{R}$, [L1, step 1.1, algebra] $$\frac{1}{\lambda(B(x,r))}\int_{B(x,r)}|0-0|\,d\lambda=0\qquad(r>0).$$ Therefore every point is a Lebesgue point of the zero representative, so by [L1] the Lebesgue set of the class is all of $\mathbb{R}$. [L1, step 1.1, algebra] ∎
