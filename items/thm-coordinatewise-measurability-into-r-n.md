---
id: thm-coordinatewise-measurability-into-r-n
kind: theorem
title: "A map into $\\mathbb{R}^n$ is measurable exactly when its coordinates are measurable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-generating-family-criterion-for-measurable-functions, thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn, thm-threshold-characterisations-of-real-and-extended-real-measurability]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Section 2B"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

Let $n\ge1$, let $(X,\mathcal{A})$ be a measurable space, and let
$f = (f_1,\dots,f_n) : X \to \mathbb{R}^n$. Then $f$ is measurable if and only
if each coordinate function $f_j : X \to \mathbb{R}$ is measurable.

## Facts & Assumptions

**Given:** A natural number $n\ge1$, a measurable space $(X,\mathcal{A})$, and a function
$f=(f_1,\dots,f_n):X \to \mathbb{R}^n$.

[L1] Rational open boxes generate the Borel sigma-algebra on $\mathbb{R}^n$.
([[thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn]])

[L2] A generating family on the codomain suffices to test measurability.
([[thm-generating-family-criterion-for-measurable-functions]])

[L3] Real-valued measurability is equivalent to threshold measurability.
([[thm-threshold-characterisations-of-real-and-extended-real-measurability]])

## Proof

**Proof technique:** direct.

1.1 Suppose $f$ is measurable. Fix $j$ and a real $a$. Then [L3, given]

$$\{x : f_j(x) > a\} = f^{-1}\!\big(\mathbb{R}^{j-1} \times (a,\infty) \times \mathbb{R}^{n-j}\big).$$

The displayed strip is open, hence Borel in $\mathbb{R}^n$, so the preimage is
measurable. By [L3], each coordinate $f_j$ is measurable. [L3, given]

1.2 Conversely, suppose every coordinate $f_j$ is measurable. Let [L1, L3, algebra]
$B = \prod_{j=1}^n (a_j,b_j)$ be a rational open box. Then

$$f^{-1}(B) = \bigcap_{j=1}^n \{x : a_j < f_j(x) < b_j\},$$

and each factor on the right is measurable by [L3]. Therefore
$f^{-1}(B) \in \mathcal{A}$ for every rational open box $B$. [L1, L3, algebra]

2.1 By [L1] and [L2], step 1.2 implies that $f$ is measurable. Together with [step 1.1, step 1.2, L1, L2]
step 1.1, this proves the equivalence. [step 1.1, step 1.2, L1, L2] ∎
