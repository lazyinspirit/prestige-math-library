---
id: ex-sphere-as-a-regular-level-set
kind: example
title: 'A Euclidean sphere is a regular level set with tangent hyperplanes'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-regular-level-set-local-graph-theorem, def-tangent-space-to-a-regular-level-set, thm-curve-velocities-in-a-regular-level-set-equal-its-tangent-space, def-p-norms-on-rn, def-euclidean-inner-product, lem-derivative-of-a-power, thm-algebra-of-derivatives, def-jacobian-matrix-and-gradient, thm-continuous-partial-derivatives-imply-total-differentiability]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, sphere example after the Regular Level Set Theorem'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
    - title: 'L. W. Tu, An Introduction to Manifolds, Section 11.2'
      url: 'https://www.math.toronto.edu/~jeffrey/matd67/tu.pdf'
pipeline_run: null
---

## Example

For $R>0$, the sphere $S_R^{m-1}=\{x\in\mathbb R^m:\|x\|_2=R\}$ is the regular level $F^{-1}(R^2)$ of $F(x)=\|x\|_2^2$. At $x\in S_R^{m-1}$,
$$T_xS_R^{m-1}=x^\perp=\{h:\langle x,h\rangle=0\}.$$

## Facts & Assumptions

**Given:** A radius $R>0$ and $F(x)=\langle x,x\rangle$ on $\mathbb R^m$, with $m\ge1$.

[L1] The Euclidean norm satisfies $\|x\|_2^2=\langle x,x\rangle$ ([[def-p-norms-on-rn]], [[def-euclidean-inner-product]]). The power rule and one-variable derivative algebra give the continuous Jacobian row $JF(x)=2x^{\mathsf T}$, and continuous partial derivatives imply $DF(x)h=2\langle x,h\rangle$ ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[def-jacobian-matrix-and-gradient]], [[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[L2] A regular level is locally a graph, its tangent space is the derivative kernel, and its tangent vectors are exactly its curve velocities ([[cor-regular-level-set-local-graph-theorem]], [[def-tangent-space-to-a-regular-level-set]], [[thm-curve-velocities-in-a-regular-level-set-equal-its-tangent-space]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $F^{-1}(R^2)=S_R^{m-1}$ and $DF(x)h=2\langle x,h\rangle$. [given, L1]

2.1 If $x$ lies on the sphere, then $x\ne0$ and $DF(x)x=2R^2\ne0$, so $DF(x):\mathbb R^m\to\mathbb R$ is surjective. [step 1.1, algebra]

3.1 Thus $R^2$ is a regular value. By [L2], the sphere is locally a graph and $T_xS_R^{m-1}=\ker DF(x)=x^\perp$, with the same set realized by curve velocities. [step 2.1, L2]

4.1 Negative levels are empty and hence regular by the vacuous convention; the zero level is $\{0\}$ and is critical because $DF(0)=0$. Neither boundary case is included in the positive-radius claim. [step 1.1] ∎
