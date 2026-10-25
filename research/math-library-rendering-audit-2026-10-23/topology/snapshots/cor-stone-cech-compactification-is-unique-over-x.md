---
id: cor-stone-cech-compactification-is-unique-over-x
kind: corollary
title: "Stone–Čech compactifications are uniquely homeomorphic over the original space"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-stone-cech-compactification, thm-stone-cech-evaluation-closure-universal-property, cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Stacks Project, Stone–Čech compactification"
      url: "https://stacks.math.columbia.edu/tag/0908"
pipeline_run: null
---

## Statement

Under the hypotheses of [[thm-stone-cech-evaluation-closure-universal-property]], two Stone–Čech compactifications $(B,i)$ and $(B',i')$ of $X$ are uniquely homeomorphic by a map $u:B\to B'$ satisfying $u\circ i=i'$.

## Facts & Assumptions

**Given:** Stone–Čech compactifications $(B,i)$ and $(B',i')$ of $X$ under the stated choice hypotheses.

[L1] The Stone–Čech property gives a unique continuous extension into every compact Hausdorff target ([[def-stone-cech-compactification]]).

[L2] Continuous maps to a Hausdorff target agreeing on a dense subset are equal ([[cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] twice to obtain continuous $u:B\to B'$ and $v:B'\to B$ with $u\circ i=i'$ and $v\circ i'=i$. [L1]

2.1 The maps $v\circ u$ and $\operatorname{id}_B$ agree on $i[X]$, which is dense in $B$, so [L2] gives $v\circ u=\operatorname{id}_B$. Similarly $u\circ v=\operatorname{id}_{B'}$. [L2, step 1.1]

3.1 Hence $u$ is a homeomorphism over $X$; its uniqueness is the uniqueness clause in [L1]. [L1, step 2.1] ∎
