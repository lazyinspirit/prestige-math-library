---
id: cor-real-line-mod-integers-is-not-simply-connected
kind: corollary
title: "$\\mathbb R/\\mathbb Z$ is not simply connected"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-circle-as-real-line-mod-integers, prop-real-line-mod-integers-is-compact-and-path-connected, cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero, prop-standard-circle-loops-have-their-integer-degrees, def-simply-connected]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Ch. 1, Section 1.1, Theorem 1.7"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Statement

$\mathbb R/\mathbb Z$ is not simply connected.

## Facts & Assumptions

**Given:** The quotient circle with basepoint $[0]$ and its standard loop $\omega_1$.

[L1] $\mathbb R/\mathbb Z$ is compact and path-connected ([[prop-real-line-mod-integers-is-compact-and-path-connected]]).

[L2] A based circle loop is nullhomotopic exactly when its degree is zero ([[cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero]]).

[L3] $\deg(\omega_n)=n$ for every integer $n$ ([[prop-standard-circle-loops-have-their-integer-degrees]]).

[L4] A space is simply connected when it is nonempty and path-connected and its fundamental group has exactly one element at every basepoint ([[def-simply-connected]]).

[L5] The quotient circle contains its basepoint $[0]$ ([[def-circle-as-real-line-mod-integers]]).

## Proof

**Proof technique:** direct.

1.1 The quotient is nonempty because it contains $[0]$ by [L5], and it is path-connected by [L1]. [L1, L5]

1.2 By [L3], $\deg(\omega_1)=1\ne0$. The criterion [L2] therefore shows that $\omega_1$ is not nullhomotopic, so its loop class differs from the constant-loop class. [L2, L3, algebra]

2.1 Thus the fundamental group at $[0]$ does not have exactly one element. Although step 1.1 supplies the other two clauses of [L4], this failure at one basepoint violates the definition, so $\mathbb R/\mathbb Z$ is not simply connected. [step 1.1, step 1.2, L4] ∎
