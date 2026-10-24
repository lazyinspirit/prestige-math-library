---
id: fs-homotopy-equivalent-spaces-are-homeomorphic
kind: false-statement
title: "FALSE: homotopy-equivalent spaces must be homeomorphic"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-homotopy-equivalence, cor-convex-subsets-of-rn-are-contractible, cor-contractible-iff-identity-nullhomotopic, thm-r-uncountable, def-homeomorphism-and-open-maps]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Statement

**False claim.** If two topological spaces are homotopy equivalent, then they are homeomorphic.

## Facts & Assumptions

**Given:** A one-point space $P=\{p\}$ and the real line $\mathbb R$ with its usual topology.

[A1] A map $f:X\to Y$ is a homotopy equivalence when it has a continuous $g:Y\to X$ with $g\circ f\simeq\operatorname{id}_X$ and $f\circ g\simeq\operatorname{id}_Y$ ([[def-homotopy-equivalence]]).

[L1] The real line is a nonempty convex subset of itself, hence is contractible, and its identity is homotopic to the constant map at $0$ ([[cor-convex-subsets-of-rn-are-contractible]], [[cor-contractible-iff-identity-nullhomotopic]]).

[L2] A homeomorphism is in particular a bijection ([[def-homeomorphism-and-open-maps]]).

[L3] The set $\mathbb R$ is uncountable, whereas a singleton is finite ([[thm-r-uncountable]]).

## Refutation

**Proof technique:** direct.

1.1 Define $i:P\to\mathbb R$ by $i(p)=0$ and let $q:\mathbb R\to P$ be the unique map. Both are continuous: the preimage of an open set under either map is either empty or the whole domain. [construct]

1.2 No bijection $P\to\mathbb R$ exists by [L3], so no homeomorphism exists by [L2]. [L2, L3]

2.1 One has $q\circ i=\operatorname{id}_P$, while $i\circ q=c_0\simeq\operatorname{id}_{\mathbb R}$ by [L1]. Thus $i$ is a homotopy equivalence with homotopy inverse $q$ by [A1]. [step 1.1, L1, A1]

3.1 Therefore $P$ and $\mathbb R$ are homotopy equivalent by step 2.1 but not homeomorphic by step 1.2, refuting the claim. [step 2.1, step 1.2] ∎
