---
id: ex-a-schreier-coset-graph-and-its-tree-basis
kind: example
title: "A Schreier coset graph and its spanning-tree basis"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [def-labeled-schreier-coset-graph, lem-spanning-trees-and-schreier-systems-correspond, thm-nielsen-schreier-with-an-explicit-basis]
justified_by: []
aliases: []
landmark: false
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
---

## Example

Let $H$ be the kernel of the homomorphism
$F(a,b)\to\mathbb Z/2\mathbb Z\times\mathbb Z/2\mathbb Z$ sending both $a$ and
$b$ to the nontrivial element of the corresponding factor. Then the Schreier
graph has four cosets

$$H,\ Ha,\ Hb,\ Hab,$$

and the non-tree edges of the rooted spanning tree

$$H\xrightarrow{a}Ha,\qquad H\xrightarrow{b}Hb,\qquad Ha\xrightarrow{b}Hab$$

give the free basis

$$a^2,\ b^2,\ ab^2a^{-1},\ abab^{-1},\ bab^{-1}a^{-1}.$$

## Facts & Assumptions

**Given:** The subgroup $H$ above.

[L1] The Schreier graph records cosets and labeled generator edges
([[def-labeled-schreier-coset-graph]]).

[L2] Rooted spanning trees correspond to Schreier systems
([[lem-spanning-trees-and-schreier-systems-correspond]]).

[L3] The nontrivial Schreier generators of such a tree form a free basis
([[thm-nielsen-schreier-with-an-explicit-basis]]).

## Verification

**Proof technique:** direct.

1.1 The quotient records only the parities of the exponent sums of $a$ and $b$, so the four right cosets are exactly $H$, $Ha$, $Hb$, and $Hab$. The labeled Schreier graph therefore has $a$-edges $H\leftrightarrow Ha$ and $Hb\leftrightarrow Hab$, and $b$-edges $H\leftrightarrow Hb$ and $Ha\leftrightarrow Hab$. [L1, given, construct]

2.1 The three displayed edges form a rooted spanning tree, so [L2] gives the corresponding Schreier system $\{1,a,b,ab\}$. The five positive edges not in that tree yield the nontrivial generators $a^2$, $b^2$, $ab^2a^{-1}$, $abab^{-1}$, and $bab^{-1}a^{-1}$. [L2, step 1.1, algebra]

3.1 By [L3], those five elements form a free basis of $H$. [L3, step 2.1] ∎
