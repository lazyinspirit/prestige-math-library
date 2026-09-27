---
id: ex-generic-affine-hyperplanes-meet-an-embedded-submanifold-transversely
kind: example
title: "Generic affine hyperplanes meet an embedded submanifold transversely"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: []
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-maintenance-receipts.jsonl (ex-generic-affine-hyperplanes-meet-an-embedded-submanifold-transversely). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Example

For the unit circle $S^1\subseteq\mathbb R^2$, the vertical line
$H_a=\{x=a\}$ meets $S^1$ transversely for every $a\in\mathbb R\setminus\{-1,1\}$.
For $|a|>1$ the intersection is empty, and for $|a|<1$ it consists of two
transverse points.

## Facts & Assumptions

**Given:** The height map $h:S^1\to\mathbb R$, $h(x,y)=x$, and a real parameter $a$.

## Verification
**Proof technique:** direct.

1.1 The fibre $h^{-1}(a)$ is $S^1\cap H_a$. When $|a|<1$, the equation $x=a$ on $x^2+y^2=1$ gives the two points $(a,\pm\sqrt{1-a^2})$. A tangent vector at $(x,y)$ is $(-y,x)$, and $dh(-y,x)=-y$, which is nonzero at both points because $y\neq0$. [given, algebra]

2.1 For $|a|>1$ the fibre is empty, hence transverse vacuously. For $a=\pm1$ it consists of one point with $y=0$, where $dh$ vanishes and transversality fails. Thus the exceptional set is exactly the finite, hence null, set $\{-1,1\}$. [step 1.1]

3.1 Thus generic affine hyperplanes meet the embedded circle transversely. [step 2.1] ∎
