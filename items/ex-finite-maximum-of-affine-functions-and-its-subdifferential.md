---
id: ex-finite-maximum-of-affine-functions-and-its-subdifferential
kind: example
title: "A finite maximum of affine functions and its active subgradients"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-basic-operations-preserving-convexity, def-subgradient-and-subdifferential, thm-strict-separation-of-a-point-from-a-closed-convex-set, thm-finite-jensen-inequality-in-euclidean-space, thm-heine-borel-rn, thm-continuous-image-of-a-compact-space-is-compact, thm-compact-subset-is-closed-and-bounded]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §3.2.3"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lecture 12"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
pipeline_run: null
---

## Example

Let $n,m\ge1$, let $a_1,\ldots,a_m\in\mathbb R^n$, and let $b_1,\ldots,b_m\in\mathbb R$. Define $f:\mathbb R^n\to\mathbb R$ by

$$f(x)=\max_{1\le j\le m}(\langle a_j,x\rangle+b_j),$$

and let $J(x)=\{j:f(x)=\langle a_j,x\rangle+b_j\}$ be the active index set. Then $f$ is convex and

$$\partial f(x)=\operatorname{conv}\{a_j:j\in J(x)\}.$$

For the two-dimensional function $f(x_1,x_2)=\max\{x_1,-x_1,x_2,-x_2\}$, the subdifferential at zero is $\operatorname{conv}\{\pm e_1,\pm e_2\}=\{v:|v_1|+|v_2|\le1\}$.

## Facts & Assumptions

**Given:** The affine family above, subgradients as in [[def-subgradient-and-subdifferential]], and finite convex combinations as in [[thm-finite-jensen-inequality-in-euclidean-space]].

[L1] The pointwise maximum of a nonempty finite family of convex functions on a common convex domain is convex ([[prop-basic-operations-preserving-convexity]]).

[L2] A point outside a nonempty closed convex set is strictly separated from it ([[thm-strict-separation-of-a-point-from-a-closed-convex-set]]).

[L3] For positive Euclidean dimension, a subset is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]]).

[L4] The continuous image of a compact subset is compact ([[thm-continuous-image-of-a-compact-space-is-compact]]).

[L5] A compact subset of a metric space is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]]).

## Verification

**Proof technique:** direct.

1.1 Each affine constituent is convex, so [L1] makes their nonempty finite maximum $f$ convex. [L1]

2.1 If $j\in J(x)$, then $f(y)\ge\langle a_j,y\rangle+b_j=f(x)+\langle a_j,y-x\rangle$. Nonnegative weighted sums of these inequalities show that every convex combination of active slopes is a subgradient. [step 1.1, algebra]

3.1 The active-weight simplex is closed and bounded, hence compact by [L3]; its affine image is compact by [L4] and closed by [L5]. If a subgradient $v$ lay outside this active convex hull, [L2] would give a direction $h$ with $\langle v,h\rangle$ strictly larger than every active $\langle a_j,h\rangle$. Finiteness lets one choose $t>0$ small enough that inactive affine pieces remain below the active maximum at $x+th$. Then the subgradient inequality would require an increment at least $t\langle v,h\rangle$, while the actual increment is $t\max_{j\in J(x)}\langle a_j,h\rangle$, a contradiction. The displayed four-piece formula follows from its four active slopes at zero. [step 2.1, L2, L3, L4, L5, algebra] ∎
