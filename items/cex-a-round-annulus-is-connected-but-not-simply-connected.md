---
id: cex-a-round-annulus-is-connected-but-not-simply-connected
kind: counterexample
title: "A round annulus is connected but not simply connected"
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
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4, §4.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Statement refuted

Every connected plane domain is simply connected.

## Facts & Assumptions

**Given:** The annulus $\Omega=\{z\in\mathbb C:\tfrac12<|z|<2\}$ and the unit circle $\gamma(t)=e^{it}$ on $[0,2\pi]$.

[L1] In the grand theorem, connected spherical complement is equivalent to simple connectivity ([[thm-grand-equivalence-for-simply-connected-plane-domains]]).

[L2] The circle $\gamma(t)=e^{it}$ has winding number $1$ about $0$ ([[thm-winding-number-circle-traversed-k-times]]).

## Counterexample

**Proof technique:** direct.

1.1 The annulus $\Omega$ is open and connected, and the unit circle $\gamma$ lies in $\Omega$. The spherical complement of $\Omega$ has two pieces: the closed inner disc $\{|z|\le\tfrac12\}$ and the exterior region $\{|z|\ge2\}\cup\{\infty\}$. So it is disconnected. [given]

2.1 By [L1], step 1.1 already shows that $\Omega$ is not simply connected. Fact [L2] gives the familiar loop witness: the unit circle still winds once around the omitted origin. [step 1.1, L1, L2]

3.1 Therefore connectedness of the domain does not force simple connectivity. [step 1.1, step 2.1] ∎
