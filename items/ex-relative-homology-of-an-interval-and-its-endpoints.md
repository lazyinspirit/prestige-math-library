---
id: ex-relative-homology-of-an-interval-and-its-endpoints
kind: example
title: "Relative homology of an interval and its endpoints"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-long-exact-sequence-of-a-pair-in-singular-homology, def-relative-homology-connecting-homomorphism-on-cycles]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, §2.1"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Example

For $I=[0,1]$ and $E=\{0,1\}$, $H_1(I,E;G)\cong G$ and all other relative
groups vanish. For each $g\in G$, let $c_g$ be the oriented identity simplex
of $I$ with coefficient $g$. Under the canonical isomorphism $G\cong
H_1(I,E;G)$, it represents the class corresponding to $g$, and
$$\delta[c_g]=g[1]-g[0].$$

## Facts & Assumptions

**Given:** The pair $(I,E)$.

## Verification

**Proof technique:** direct.

1.1 $I$ is contractible and $H_0(E;G)\cong G\oplus G$, while the map to $H_0(I;G)\cong G$ adds the two coordinates. [given, construct]

2.1 The kernel is $\{(-g,g):g\in G\}$, and $g\mapsto(-g,g)$ is an isomorphism from $G$ onto it. Exactness identifies this kernel with $H_1(I,E;G)$ and makes all remaining relative groups vanish. The boundary of $c_g$ is $g[1]-g[0]$. [step 1.1, algebra] ∎
