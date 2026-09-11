---
id: "ex-a-finite-chain-needing-different-subdivision-depths-on-its-simplices"
kind: "example"
title: "A finite chain needing different subdivision depths on its simplices"
deps: ["prop-barycentric-subdivision-and-prism-preserve-smooth-singular-chains", "def-barycentric-subdivision-chain-operator"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "DG-16 B inventory; explicit verification or unresolved witness in proof_plan"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Example

For the cover $U=(-\infty,3/4)$, $V=(1/4,\infty)$ of $\mathbb R$, the finite real chain $c=\kappa+\sigma$ with $\kappa(t)=0$ and $\sigma(t)=t$ has simplices of different least subdivision depths: zero for $\kappa$ and one for $\sigma$.

## Facts & Assumptions

**Given:** These two paths and this ordered cover.

[F1] Smooth subdivision consists of affine domain pieces ([[prop-barycentric-subdivision-and-prism-preserve-smooth-singular-chains]]).

[F2] In dimension one the subdivision cone gives the two oriented halves ([[def-barycentric-subdivision-chain-operator]]).

## Proof

1.1 The image of $\kappa$ is $\{0\}\subset U$, so it is already small. The image $[0,1]$ of $\sigma$ is in neither $U$ nor $V$, since $1\notin U$ and $0\notin V$. Thus its least depth is positive. Both paths extend smoothly to all real parameters. [given, F1]

2.1 The cone convention [F2] gives $S\sigma=\alpha-\beta$, where $\alpha(t)=(1+t)/2$ and $\beta(t)=(1-t)/2$. Their images are respectively $[1/2,1]\subset V$ and $[0,1/2]\subset U$. Thus $S\sigma$ is small and the least depth of $\sigma$ is exactly one. Since both halves of the constant path are the same constant path, $S\kappa=\kappa-\kappa=0$. Consequently $Sc=\alpha-\beta$ is small. [F1, F2, step 1.1, algebra]

3.1 This exhibits different least depths within a finite chain, while the common bound one works for the entire chain. The two terms of $c$ are distinct basis maps, so the nonsmall $\sigma$ does not cancel before subdivision. Zero coefficients or the empty chain would have no such obligation. Endpoint inclusions above are strict relative to the cover thresholds, and the degenerate constant path has been computed rather than discarded. No choice is used. [F1, F2, step 1.1, step 2.1] ∎
