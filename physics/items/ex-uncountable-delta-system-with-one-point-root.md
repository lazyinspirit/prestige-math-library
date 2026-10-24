---
id: "ex-uncountable-delta-system-with-one-point-root"
kind: "example"
title: "An explicit uncountable delta system"
status: published
origin: "pipeline"
deps: ["def-finite-delta-system"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Theorem 9.20, printed pp77–78; explicit pairwise-intersection instance"
      url: "https://euclid.colorado.edu/~monkd/jech.pdf"
justified_by: []
forward_refs: []
proof_strategy: "direct"
verification:
  audited: 2026-09-09
  precheck: "pass"
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
---

## Example

For $\alpha<\omega_1$, let $a_\alpha=\{0,\alpha+1\}$. This is an uncountable family of distinct two-element sets forming a delta system with root $\{0\}$. The singleton family $b_\alpha=\{\alpha\}$ instead has empty root.

## Facts & Assumptions

**Given:** Ordinals carry their usual membership order; $\omega_1$ is the first uncountable ordinal.

[F1] The delta-system condition is equality of every pairwise intersection at distinct indices with the specified root. [[def-finite-delta-system]]

## Verification

1.1 For each $\alpha$, $\alpha+1\ne0$, so $a_\alpha$ has two elements. Distinct ordinals have distinct successors: if $\alpha<\beta$, then $\alpha+1\le\beta<\beta+1$. Thus $a_\alpha\cap a_\beta=\{0\}$ whenever $\alpha\ne\beta$. Also $a_\alpha=a_\beta$ would identify their unique nonzero elements and force $\alpha=\beta$. Consequently the family has size $\omega_1$ and is a delta system with root $\{0\}$. [F1, given]

2.1 For $\alpha\ne\beta$, $b_\alpha\cap b_\beta=\varnothing$. The map $\alpha\mapsto b_\alpha$ is injective, so this is another $\omega_1$-sized delta system, with empty root. For instance $a_0\cap a_1=\{0,1\}\cap\{0,2\}=\{0\}$ whereas $b_0\cap b_1=\{0\}\cap\{1\}=\varnothing$. [F1, given] ∎
