---
id: ex-compact-affine-interpolation-family
kind: example
title: "Affine interpolants with endpoints in a compact rectangle form a compact family"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-compactness-under-continuous-maps, thm-heine-borel-rn, def-topology-of-uniform-convergence]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Fix reals $\alpha\leq\beta$ and $\gamma\leq\delta$. For $(a,b)$ in the rectangle $P=[\alpha,\beta]\times[\gamma,\delta]$, define

$$f_{a,b}(t):=(1-t)a+tb\qquad(0\leq t\leq1).$$

The family $\mathcal A:=\{f_{a,b}:(a,b)\in P\}$ is compact in the uniform topology on $C([0,1],\mathbb R)$. It is equicontinuous and pointwise relatively compact, and the endpoint map $f\mapsto(f(0),f(1))$ identifies it homeomorphically with $P$.

## Facts & Assumptions

**Given:** The compact rectangle $P$ and the affine family $\mathcal A$.

[L1] Continuous images of compact spaces are compact ([[thm-compactness-under-continuous-maps]]).

[L2] Closed bounded rectangles in $\mathbb R^2$ are compact ([[thm-heine-borel-rn]]).

[L3] The uniform topology is induced by the uniform metric on the function space ([[def-topology-of-uniform-convergence]]).

## Verification

**Proof technique:** direct.

1.1 By [L2], $P$ is compact. Define $\Phi:P\to C([0,1],\mathbb R)$ by $\Phi(a,b)=f_{a,b}$. [L2]

1.2 For $0\leq t\leq1$,

$$|f_{a,b}(t)-f_{a',b'}(t)|\leq|a-a'|+|b-b'|.$$

Thus $\Phi$ is continuous into the uniform topology of [L3]. [L3, algebra]

1.3 Put $M=\max\{|\alpha|,|\beta|,|\gamma|,|\delta|\}$. Every member satisfies $|f_{a,b}(s)-f_{a,b}(t)|=|b-a||s-t|\leq2M|s-t|$, so the family is equicontinuous, including the degenerate case $M=0$. [algebra]

2.1 By [L1], $\mathcal A=\Phi[P]$ is compact. [L1, step 1.1, step 1.2]

2.2 The endpoint map $E:\mathcal A\to P$, $E(f)=(f(0),f(1))$, is continuous because uniform distance controls both endpoint differences, and $E\circ\Phi$ and $\Phi\circ E$ are identity maps. Hence $\Phi$ is a homeomorphism onto $\mathcal A$. [L3, step 1.2]

3.1 For fixed $t$, the coordinate set $\{f_{a,b}(t):(a,b)\in P\}$ is the continuous image of compact $P$, hence compact by [L1]. It is therefore already its compact closure, proving pointwise relative compactness. [L1, step 1.1] ∎
