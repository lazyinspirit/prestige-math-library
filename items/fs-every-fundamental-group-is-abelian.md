---
id: fs-every-fundamental-group-is-abelian
kind: false-statement
title: "FALSE: every fundamental group is abelian"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-fundamental-group-of-two-circle-wedge,
       thm-reduced-words-form-the-free-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Example 1.21"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Statement

**False claim:** for every pointed topological space $(X,x_0)$, the group $\pi_1(X,x_0)$ is abelian.

## Facts & Assumptions

**Given:** The two-circle wedge $W=S^1\vee S^1$ with standard loop classes $a$ and $b$.

[L1] The group $\pi_1(W,w)$ is the free group on $a$ and $b$ ([[cor-fundamental-group-of-two-circle-wedge]]).

[F1] The reduced words on a basis and its formal inverses form the free group on that basis ([[thm-reduced-words-form-the-free-group]]).

## Refutation

**Proof technique:** direct.

1.1 Under [L1], the products $ab$ and $ba$ are represented by the two reduced words with syllable sequences $(a,b)$ and $(b,a)$. [L1]

2.1 These reduced words are distinct by [F1], so $ab\ne ba$ in $\pi_1(W,w)$. [step 1.1, F1]

3.1 Thus the fundamental group of the two-circle wedge is not abelian, providing a counterexample to the universal claim. [step 2.1] ∎
