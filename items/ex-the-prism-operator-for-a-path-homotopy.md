---
id: ex-the-prism-operator-for-a-path-homotopy
kind: example
title: "The prism operator for a path homotopy"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-prism-operator-for-a-homotopy, thm-singular-chain-homotopy-formula, def-homotopy-relative-and-path-homotopy]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "Haynes Miller, Algebraic Topology I, Lecture 6"
      url: "https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/87a1ec7a7bcb92c59881ab6a8e70e0c2_MIT18_905F16_lec6.pdf"
pipeline_run: frontier-30
---

## Example

Let $H:I\times I\to X$ be a path homotopy rel $\{0,1\}$ from $\alpha$ to
$\beta$. For the identity $1$-simplex $\iota_1:\Delta^1\to I$, the prism
operator is the sum of the two oriented triangles cutting the square
$I\times I$ along its main diagonal. If $c_0$ and $c_1$ are the constant
singular $1$-simplices at the two common endpoints, then its boundary in the
unnormalized singular chain complex is
$$\partial P_H(\iota_1)=\beta-\alpha-c_1+c_0.$$
The degenerate side terms vanish only after passing to normalized singular
chains.

## Facts & Assumptions

**Given:** A path homotopy $H:I\times I\to X$ rel $\{0,1\}$ from $\alpha$ to
$\beta$.

[L1] A path homotopy rel $\{0,1\}$ keeps the two endpoint tracks constant
([[def-homotopy-relative-and-path-homotopy]]).

[L2] The prism operator is built by triangulating $\Delta^1\times I$ into two
oriented $2$-simplices ([[def-prism-operator-for-a-homotopy]]).

[L3] The prism operator satisfies
$$g_\#-f_\#=\partial P_H+P_H\partial$$
([[thm-singular-chain-homotopy-formula]]).

## Verification

**Proof technique:** direct.

1.1 By [L2], $P_H(\iota_1)$ is the sum of the two oriented triangles obtained from the standard triangulation of the square $I\times I$. Applying [L3] to the singular simplex $\iota_1$ gives $$\partial P_H(\iota_1)=\beta-\alpha-P_H(\partial\iota_1).$$ [L2, L3, given]

2.1 The chain $\partial\iota_1$ is the terminal vertex minus the initial vertex. By [L1], these two vertices trace the constant singular $1$-simplices $c_1$ and $c_0$, respectively, so $$P_H(\partial\iota_1)=c_1-c_0.$$ Substitution into step 1.1 gives $$\partial P_H(\iota_1)=\beta-\alpha-c_1+c_0.$$ Constant singular $1$-simplices are genuine generators here, so they cannot be discarded in the unnormalized complex. [L1, step 1.1, algebra] ∎
