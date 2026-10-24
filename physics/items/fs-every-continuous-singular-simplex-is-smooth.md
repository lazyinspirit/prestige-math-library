---
id: "fs-every-continuous-singular-simplex-is-smooth"
kind: "false-statement"
title: "Every continuous singular simplex is smooth"
deps: ["def-smooth-singular-simplex"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://people.math.harvard.edu/~pspark/derham.pdf"
      locator: "DG-16 false-statement inventory; exact refutation or unresolved wording recorded in proof_plan"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement refuted

Every continuous singular simplex in a smooth manifold is a smooth singular simplex.

## Facts & Assumptions

**Given:** The target is the boundaryless manifold $\mathbb R$.

[F1] Smooth singular simplices extend smoothly to an open affine neighbourhood of their whole closed domain ([[def-smooth-singular-simplex]]).

## Proof

1.1 The path $\sigma(t)=|t-1/2|$ on $[0,1]=\Delta^1$ is continuous, since $||s-1/2|-|t-1/2||\le|s-t|$. At its interior point $1/2$ the right difference quotients are one and the left difference quotients are minus one. Therefore it is not differentiable there. [given, algebra]

2.1 Any extension in [F1] would restrict to a differentiable function on an interval around $1/2$ agreeing with $\sigma$. Its derivative would have to equal both limits from step 1.1, an impossibility. Thus this is a continuous singular one-simplex which is not smooth. [F1, step 1.1]

3.1 Its endpoints both equal $1/2$, but it is nonconstant, so endpoint agreement does not fix the interior defect. All zero-simplices and constant simplices in this target are smooth by constant extension; the empty target has no witness. The explicit formula uses no choice and requires no boundary-target convention. [F1, step 1.1, step 2.1] ∎
