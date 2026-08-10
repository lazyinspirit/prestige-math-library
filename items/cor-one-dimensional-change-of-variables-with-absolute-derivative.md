---
id: cor-one-dimensional-change-of-variables-with-absolute-derivative
kind: corollary
title: "In one dimension the compact-Jordan formula is substitution over the unoriented image interval with the absolute derivative"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-change-of-variables-for-compact-jordan-sets, thm-substitution, thm-continuous-injection-on-an-interval-is-strictly-monotone]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Theorem 10.6.6 and one-variable substitution"
      url: "https://www.jirka.org/ra/realanal2.pdf"
pipeline_run: null
---

## Statement

Let $a<b$, let $\varphi$ be $C^1$ and injective on a neighborhood of $[a,b]$, and suppose $\varphi'(x)\ne0$ there. If $f$ is continuous on an interval containing $\varphi([a,b])$, then
$$\int_{\min\{\varphi(a),\varphi(b)\}}^{\max\{\varphi(a),\varphi(b)\}}f(y)\,dy=\int_a^b f(\varphi(x))|\varphi'(x)|\,dx.$$
Thus the absolute derivative is the correct factor for the unoriented image interval.

## Facts & Assumptions

**Given:** The interval, injective $C^1$ map $\varphi$, nonvanishing derivative, and continuous $f$.

[L1] A continuous injection on an interval is strictly increasing or strictly decreasing ([[thm-continuous-injection-on-an-interval-is-strictly-monotone]]).

[L2] Oriented one-variable substitution gives $\int_{\varphi(a)}^{\varphi(b)}f=\int_a^b(f\circ\varphi)\varphi'$ ([[thm-substitution]]).

[L3] Compact-Jordan change of variables in dimension one uses the absolute Jacobian determinant ([[thm-change-of-variables-for-compact-jordan-sets]]).

## Proof

**Proof technique:** cases.

1.1 Assume first that $\varphi$ is increasing. Its nonvanishing continuous derivative cannot be negative at any point, so it is positive throughout; [L2] is exactly the displayed formula. [L1, L2, assume-case increasing]

1.2 Assume instead that $\varphi$ is decreasing. Then $\varphi'<0$ throughout, reversing both the oriented endpoints and the derivative sign in [L2], and consequently giving the following formula. [L1, L2, assume-case decreasing]
$$\int_{\varphi(b)}^{\varphi(a)}f=\int_a^b(f\circ\varphi)|\varphi'|.$$

2.1 The alternatives are exhaustive by [L1], and [L3] identifies $|\varphi'|$ with the one-dimensional absolute Jacobian factor. [L1, L3, cases-exhaustive: increasing or decreasing] ∎
