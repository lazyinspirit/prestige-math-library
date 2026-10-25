---
id: cex-the-punctured-disc-is-connected-but-not-simply-connected
kind: counterexample
title: "The punctured disc is connected but not simply connected"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-grand-equivalence-for-simply-connected-plane-domains,
       thm-winding-number-circle-traversed-k-times]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Exercise 4.3.1"
      url: "https://www.jirka.org/ca/ca.pdf"
---

## Statement refuted

Every connected subdomain of the unit disc is simply connected.

## Facts & Assumptions

**Given:** The punctured disc $\Omega=\{z\in\mathbb C:0<|z|<1\}$ and the circle $\gamma(t)=\tfrac12e^{it}$ on $[0,2\pi]$.

[L1] In the grand theorem, connected spherical complement is equivalent to simple connectivity ([[thm-grand-equivalence-for-simply-connected-plane-domains]]).

[L2] A circle around the origin has winding number $1$ about the origin ([[thm-winding-number-circle-traversed-k-times]]).

## Counterexample

**Proof technique:** direct.

1.1 The punctured disc is open and connected, and the loop $\gamma$ lies in it. Its spherical complement is the union of the singleton $\{0\}$ and the outer region $\{|z|\ge1\}\cup\{\infty\}$, so it is disconnected. [given]

2.1 By [L1], step 1.1 shows that the punctured disc is not simply connected. Fact [L2] gives the same geometric reason numerically: the loop $\gamma$ still winds once around the omitted point $0$. [step 1.1, L1, L2]

3.1 This refutes the claim. [step 1.1, step 2.1] ∎
