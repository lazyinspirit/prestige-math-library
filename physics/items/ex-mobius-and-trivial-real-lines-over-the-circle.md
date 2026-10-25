---
id: ex-mobius-and-trivial-real-lines-over-the-circle
kind: example
title: The Möbius and trivial real lines over the circle
status: published
origin: pipeline
deps: [thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, §1.1 and clutching discussion"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Möbius bundle pp.6–7; real S^1 classification pp.25–26"
---

## Example

The two isomorphism classes of real line bundles over $S^1$ are the product
line and the Möbius line. In the clutching description
$S^1=\Sigma S^0$, they are distinguished by whether the two transition
values lie in the same or opposite components of
$\operatorname{GL}_1(\mathbb R)=\mathbb R^\times$.

## Facts & Assumptions

**Given:** A real line bundle over $S^1$.

[F1] Clutching over $S^1$ is the component/orbit case for maps $S^0\to\operatorname{GL}_1(\mathbb R)$, with disk-extending gauge changes ([[thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range]]).

## Verification

**Proof technique:** direct.

1.1 Write $S^0=\{a,b\}$. A clutching map is a pair $(g(a),g(b))$ of nonzero real numbers. A gauge on either interval has boundary values in the same sign component, so the sign of $g(a)g(b)^{-1}$ is unchanged. Conversely, multiply by a constant gauge and use paths within $\mathbb R_{>0}$ or $\mathbb R_{<0}$ to normalize the pair to $(1,1)$ or $(1,-1)$. Thus [F1] gives at most and at least these two classes. [F1, algebra]

2.1 For $(1,1)$ the two trivial intervals glue their fiber coordinates without a sign change, producing $S^1\times\mathbb R$. For $(1,-1)$, cut the circle at one equatorial point; the remaining interval bundle closes by $(0,t)\sim(1,-t)$, which is the Möbius line. These two witnesses realize the normalized classes. [F1, step 1.1, construct]

3.1 The invariant in step 1.1 has values $+1$ and $-1$ on the two witnesses in step 2.1, so they are not isomorphic; exhaustion in step 1.1 shows there are no others. [step 1.1, step 2.1] ∎
