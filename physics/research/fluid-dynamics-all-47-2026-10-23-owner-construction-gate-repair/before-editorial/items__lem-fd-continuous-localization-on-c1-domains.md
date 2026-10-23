---
id: lem-fd-continuous-localization-on-c1-domains
kind: lemma
title: Continuous residuals localize on C1 domains
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - lem-fd-c1-domain-jordan-integrals
  - thm-multidimensional-integral-properties
  - thm-jordan-content-and-indicator-integrability
dependency_roles:
  lem-fd-c1-domain-jordan-integrals: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
  thm-jordan-content-and-indicator-integrability: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
    - title: Jiří Lebl, Basic Analysis II, §10.5 Jordan measurable sets
      url: https://www.jirka.org/ra/html/sec_jordansets.html
      locator: "Definition10.5.4 and Propositions10.5.5–10.5.6, especially integral
        monotonicity: ingredients in the local continuity-and-positive-ball
        localization proof. Lebl is not asserted to state this complete
        C1-subdomain localization lemma verbatim."
---

## Statement

Let $\Omega\subseteq\mathbb R^3$ be open and let $h:\Omega\to\mathbb R$ be continuous. A bounded $C^1$ subdomain of $\Omega$ means a nonempty bounded open set $V$ with $\overline V\subset\Omega$ whose boundary is locally, after rigid coordinate changes, a $C^1$ graph with $V$ on one side. If $\int_Vh\,dx=0$ for every bounded $C^1$ subdomain $V\Subset\Omega$, then $h=0$ throughout $\Omega$. If instead $\int_Vh\,dx\ge0$ for every such $V$, then $h\ge0$ throughout $\Omega$. These are pointwise conclusions for continuous integrands; no assertion is made for merely integrable or distributional residuals.

## Statement references

[[lem-fd-c1-domain-jordan-integrals]]

[[thm-multidimensional-integral-properties]]

These are source ingredients adapted in the local proof, rather than an attribution of this complete lemma verbatim.

[Jiří Lebl, Basic Analysis II, §10.5 Jordan measurable sets](https://www.jirka.org/ra/html/sec_jordansets.html) — Definition10.5.4 and Propositions10.5.5–10.5.6, especially integral monotonicity: ingredients in the local continuity-and-positive-ball localization proof. Lebl is not asserted to state this complete C1-subdomain localization lemma verbatim.

## Facts & Assumptions

**Given:** The open region $\Omega$, the continuous scalar field $h$, and the integral conditions stated in the lemma.

[F1] [[lem-fd-c1-domain-jordan-integrals]]: every bounded open region with locally $C^1$ graph boundary is Jordan measurable, and its Riemann integral is the zero-extension integral.

[F2] [[thm-multidimensional-integral-properties]]: the Riemann integral is monotone on a rectangle.

[F3] [[thm-jordan-content-and-indicator-integrability]]: the indicator of a Jordan set is Riemann integrable and its integral equals its content; a nondegenerate cube has positive content equal to its volume.

## Proof

**Given:** [F1]–[F3], an open $\Omega$, and continuous $h$.

1.1 If $h(a_0)>0$ at some $a_0\in\Omega$, continuity gives a closed ball $\overline{B_r(a_0)}\subset\Omega$ and a constant $c>0$ with $h\ge c$ on that ball. Let $V=B_r(a_0)$. After a rigid rotation putting $a_0$ on the vertical axis, the boundary near each sphere point is a graph of one of the $C^1$ branches $z=\pm\sqrt{r^2-|y|^2}$, with $V$ on one side, so $V$ is a bounded $C^1$ subdomain. Choose a nondegenerate closed cube $Q\subset V$. By [F1] the integral over $V$ exists; monotonicity [F2] and the cube-content formula [F3] give $\int_V1\,dx\ge\int_Q1\,dx=\operatorname{vol}(Q)>0$, hence $\int_Vh\,dx\ge c\int_V1\,dx>0$. This contradicts the zero-integral hypothesis. If instead $h(a_0)<0$, the same ball construction gives $h\le-c$ on $V$ and $\int_Vh\,dx\le-c\int_V1\,dx<0$, contradicting either stated integral hypothesis. [F1, F2, F3, given]

2.1 The zero-integral case therefore has neither positive nor negative values, so $h=0$ throughout $\Omega$. The nonnegative-integral case has no negative values, so $h\ge0$ throughout $\Omega$. These are the two asserted conclusions. [given, step 1.1] ∎
