---
id: fs-the-tubular-neighbourhood-retraction-is-canonical
kind: false-statement
title: "FALSE: the tubular-neighbourhood retraction is canonical"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-two-tubular-neighbourhood-germs-are-isomorphic-near-the-zero-section]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Tubular Neighborhoods"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

**False claim:** the tubular-neighbourhood retraction of an embedded
submanifold is canonical.

## Facts & Assumptions

**Given:** The annulus
$$
A:=\{(r\cos\theta,r\sin\theta):1/2<r<3/2\}
$$
around the unit circle $S^1\subseteq\mathbb R^2$.

[L1] Two tubular neighbourhoods are unique only up to shrinking and germ
isomorphism near the zero section
([[prop-two-tubular-neighbourhood-germs-are-isomorphic-near-the-zero-section]]).

## Refutation
**Proof technique:** direct.

1.1 The radial map $$r_0(r\cos\theta,r\sin\theta):=(\cos\theta,\sin\theta)$$ is a smooth retraction $A\to S^1$. [given, construct]

2.1 Choose a smooth function $\alpha:(1/2,3/2)\to\mathbb R$ with $\alpha(1)=0$ and $\alpha(r)\ne0$ for some $r\ne1$. The tubular chart $$\Phi_1(e^{i\theta},t):=(1+t)e^{i(\theta-\alpha(1+t))}$$ is a diffeomorphism from $S^1\times(-1/2,1/2)$ onto $A$ and agrees with the inclusion at $t=0$. Its induced tubular retraction is $$r_1(re^{i\theta})=e^{i(\theta+\alpha(r))}.$$ Thus $r_1$ is genuinely a tubular-neighbourhood retraction, and $r_1\ne r_0$ away from the circle. [step 1.1, construct]

3.1 Therefore the retraction depends on the chosen tubular chart and is not canonical. The correct uniqueness statement is the weaker germ statement recorded in [L1]. [L1, step 2.1] ∎
