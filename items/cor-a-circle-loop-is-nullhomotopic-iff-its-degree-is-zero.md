---
id: cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero
kind: corollary
title: "A based circle loop is nullhomotopic exactly when its degree is zero"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-circle-loops-are-path-homotopic-iff-they-have-equal-degree, def-standard-integer-loops-in-the-circle, prop-standard-circle-loops-have-their-integer-degrees]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Ch. 1, Section 1.1"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Ch. 1, Section 5"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

A based circle loop is nullhomotopic exactly when its degree is zero. Here
nullhomotopic means path-homotopic relative to the endpoints to the constant
loop at $[0]$.

## Facts & Assumptions

**Given:** A based loop $\alpha$ at $[0]$.

[L1] Two based circle loops are path-homotopic if and only if they have equal degree ([[thm-circle-loops-are-path-homotopic-iff-they-have-equal-degree]]).

[L2] $\deg(\omega_n)=n$ for every integer $n$ ([[prop-standard-circle-loops-have-their-integer-degrees]]).

[L3] For every integer $n$, define $\widetilde\omega_n(t)=nt$ and $\omega_n=p\circ\widetilde\omega_n$; in particular, $\omega_0$ is the constant loop at $[0]$ ([[def-standard-integer-loops-in-the-circle]]).

## Proof

**Proof technique:** direct.

1.1 If $\alpha$ is nullhomotopic, then it is path-homotopic to the constant loop $\omega_0$ by [L3]. The forward implication of [L1] and [L2] give $\deg(\alpha)=\deg(\omega_0)=0$. [L1, L2, L3]

1.2 Conversely, if $\deg(\alpha)=0$, then [L2] gives $\deg(\alpha)=\deg(\omega_0)$. The reverse implication of [L1] makes $\alpha$ path-homotopic to $\omega_0$, which is the required based nullhomotopy by [L3]. [L1, L2, L3]

2.1 Steps 1.1 and 1.2 establish both directions of the degree-zero criterion. [step 1.1, step 1.2] ∎
