---
id: cex-a-non-disjoint-union-does-not-satisfy-the-sum-rule
kind: counterexample
title: "Without disjoint copies, union does not add generating functions"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-symbolic-sum-and-product-rules, def-disjoint-union-and-cartesian-product-of-combinatorial-classes]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Counterexample

Let $A=B=\{a\}$ with $|a|=1$, and form the ordinary set-theoretic union
$A \cup B = \{a\}$ without adding tags. Then

$$\operatorname{OGF}(A)=x,\qquad \operatorname{OGF}(B)=x,\qquad \operatorname{OGF}(A \cup B)=x \ne 2x.$$

## Facts & Assumptions

**Given:** The symbolic sum rule is proved only for the tagged disjoint union $\mathcal{A}+\mathcal{B}$ ([[thm-symbolic-sum-and-product-rules]], [[def-disjoint-union-and-cartesian-product-of-combinatorial-classes]]).

## Verification

**Proof technique:** direct.

1.1 The ordinary union $A \cup B$ has one object of size $1$, so its generating function is $x$. [given]

2.1 The sum $\operatorname{OGF}(A)+\operatorname{OGF}(B)$ is $x+x=2x$, which is different from step 1.1. The failure is exactly the missing disjointness: the same object was counted twice on the right and once on the left. [step 1.1, given, algebra] ∎
