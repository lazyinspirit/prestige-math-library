---
id: ex-spectrum-of-a-zero-ring-empty
kind: example
title: "The zero ring has empty prime spectrum"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: literature-derived
generation:
  role: example
deps: [def-prime-spectrum-and-vanishing-sets, lem-vanishing-set-identities, lem-distinguished-subset-identities]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14 The spectrum of a ring"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.17: The spectrum of a ring"
      url: "https://stacks.math.columbia.edu/tag/00DY"
pipeline_run: null
---

## Example

Let $R$ be the zero ring. Then $\operatorname{Spec}(R)=\varnothing$, and consequently $V((0))=V(R)=D(0)=D(1)=\varnothing$.

## Facts & Assumptions

**Given:** The zero ring $R$.

[L1] $\operatorname{Spec}(R)$ is the set of prime ideals of $R$ ([[def-prime-spectrum-and-vanishing-sets]]).

[L2] The vanishing-set and distinguished-subset identities identify $V((0))$, $V(R)$, $D(0)$, and $D(1)$ from the prime spectrum ([[lem-vanishing-set-identities]], [[lem-distinguished-subset-identities]]).

## Verification

**Proof technique:** direct.

1.1 In the zero ring one has $0=1$, so the only ideal is the whole ring. A prime ideal must be proper, so no prime ideals exist. Therefore $\operatorname{Spec}(R)=\varnothing$. [L1, given, algebra]

2.1 Since every subset named in [L2] is defined as a subset of $\operatorname{Spec}(R)$, step 1.1 forces all of them to be empty. [L2, step 1.1]

3.1 Hence the zero ring has empty prime spectrum, and all the displayed $V$ and $D$ boundary sets are empty as well. [step 1.1, step 2.1] ∎
