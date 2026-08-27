---
id: ex-folner-boxes-in-zn
kind: example
title: "Boxes in Z^n are Folner sets"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [def-folner-set-and-folner-condition, thm-folner-criterion-for-amenability]
justified_by: []
aliases: []
landmark: false
generation:
  role: example
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references: []
---

## Example

For $(\mathbb Z^d,+)$ and any finite subset $S\subseteq\mathbb Z^d$, the boxes

$$Q_n=[-n,n]^d\cap\mathbb Z^d$$

form a Folner family.

## Facts & Assumptions

**Given:** A finite set $S\subseteq\mathbb Z^d$ and a real $\varepsilon>0$.

[L1] Folner sets are measured by relative symmetric-difference boundary ([[def-folner-set-and-folner-condition]]).

[L2] Under the ultrafilter lemma, such Folner families witness amenability through the Folner criterion ([[thm-folner-criterion-for-amenability]]).

## Verification

**Proof technique:** direct.

1.1 Let $M=\max_{s\in S}\|s\|_\infty$. For each $s\in S$, the translate $s+Q_n$ differs from $Q_n$ only inside the $M$-thick boundary layers of the cube, so $|(s+Q_n)\triangle Q_n|=O(n^{d-1})$. [given, algebra]

2.1 Because $|Q_n|=(2n+1)^d$, the ratio $|(s+Q_n)\triangle Q_n|/|Q_n|$ tends to $0$ as $n\to\infty$ uniformly in $s\in S$. Hence the boxes are eventually $(S,\varepsilon)$-Folner by [L1], illustrating [L2]. [L1, L2, step 1.1] ∎
