---
id: ex-blocks-in-a-regular-cyclic-action
kind: example
title: "Blocks in a regular cyclic action are cosets of subgroups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-block-and-block-system-for-a-group-action, def-regular-actions]
justified_by: []
aliases: []
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
  references:
    - title: "J. S. Milne, Group Theory, Chapter 4"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Transitive Group Actions"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/transitive.pdf"
pipeline_run: null
---

## Example

Let the cyclic group $C_n = \mathbb Z/n\mathbb Z$ act on itself by
translations
$$a \cdot x := a + x.$$
This action is regular ([[def-regular-actions]]).

Its blocks are exactly the cosets of subgroups of $C_n$. In particular, if
$n$ is composite, the cosets of any proper nontrivial subgroup give a
nontrivial block system, while if $n$ is prime only the trivial block systems
occur.

## Facts & Assumptions

**Given:** The translation action of $C_n$ on itself.

[L1] A block is a nonempty subset $B$ such that for every group element $g$, either $g \cdot B = B$ or $(g \cdot B) \cap B = \varnothing$ ([[def-block-and-block-system-for-a-group-action]]).

[L2] A regular action is transitive and free ([[def-regular-actions]]).

## Verification

**Proof technique:** direct.

1.1 If $H \le C_n$, then every translate $a + H$ is either $H$ itself or a disjoint coset of $H$. So each coset of $H$ is a block, and the cosets of $H$ form a block system. [L1, algebra]

1.2 Conversely, let $B$ be a block containing $0$. For any $x \in B$, the translate $x + B$ meets $B$ at $x$, so [L1] gives $x + B = B$. Hence $B$ is closed under subtraction: if $x,y \in B$, then $y \in x + B$ implies $y - x \in B$. Therefore $B$ is a subgroup of $C_n$. [L1]

2.1 Every block is a translate of one containing $0$, so steps 1.1-1.2 show that the blocks are exactly the cosets of subgroups. When $n$ is composite, $C_n$ has a proper nontrivial subgroup; when $n$ is prime, it does not. [step 1.1, step 1.2, L2] ∎
