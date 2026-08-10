---
id: cex-polar-coordinates-are-not-globally-injective
kind: counterexample
title: "Polar coordinates on a full closed angular period are not injective and are singular at radius zero"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-jacobian-determinant-of-a-c-one-map, thm-sine-cosine-zero-sets-and-fundamental-period, cor-trigonometric-parity-and-pythagorean-identity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

**False claim.** The polar map $(r,\theta)\mapsto(r\cos\theta,r\sin\theta)$ is injective with invertible derivative on every closed rectangle of nonnegative radii and one full angular period.

## Facts & Assumptions

**Given:** The polar map $P$ on $[0,1]\times[0,2\pi]$.

[L1] Sine and cosine have common period $2\pi$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[L2] Sine and cosine satisfy $\sin^2\theta+\cos^2\theta=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

## Counterexample

**Proof technique:** direct.

1.1 For every $r>0$, periodicity [L1] gives $P(r,0)=P(r,2\pi)$ although the two parameter points differ. Thus the two closed seam faces already destroy injectivity. [L1, given]

2.1 At $r=0$, every angle maps to the origin, providing infinitely many preimages even away from comparing the seam endpoints. [given, step 1.1]

3.1 Direct differentiation and [L2] give $\det DP(r,\theta)=r$. Thus $\det DP(0,\theta)=0$, so the derivative is singular along the entire zero-radius edge and the map violates both claimed hypotheses. [L2, step 2.1] ∎
