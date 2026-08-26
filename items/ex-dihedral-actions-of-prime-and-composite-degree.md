---
id: ex-dihedral-actions-of-prime-and-composite-degree
kind: example
title: "Dihedral actions of prime and composite degree"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-transitive-actions-of-prime-degree-are-primitive, def-block-and-block-system-for-a-group-action]
justified_by: []
aliases: []
proof_strategy: direct
verification:
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

Let $D_n$ act on the vertices of a regular $n$-gon, identified with
$\mathbb Z/n\mathbb Z$.

If $n$ is prime, this action is primitive. If $n$ is composite, then for every
divisor $d$ with $1 < d < n$ the congruence classes modulo $d$ form a
nontrivial block system.

## Facts & Assumptions

**Given:** The natural action of the dihedral group $D_n$ on the vertices $\mathbb Z/n\mathbb Z$ of the regular $n$-gon.

[L1] A transitive action of prime degree is primitive ([[cor-transitive-actions-of-prime-degree-are-primitive]]).

[L2] A block is a nonempty subset $B$ such that for every group element $g$, either $g \cdot B = B$ or $(g \cdot B) \cap B = \varnothing$ ([[def-block-and-block-system-for-a-group-action]]).

## Verification

**Proof technique:** direct.

1.1 The action of $D_n$ on the $n$ vertices is transitive, so if $n$ is prime, [L1] makes it primitive. [L1]

1.2 Suppose $n$ is composite and let $d$ satisfy $1 < d < n$ and $d \mid n$. Put $B := \{\, 0,d,2d,\dots,n-d \,\} \subseteq \mathbb Z/n\mathbb Z$. Rotations send $B$ to its residue-class translates modulo $d$, and reflections send residue classes modulo $d$ to residue classes modulo $d$ as well. Hence every dihedral image of $B$ is either $B$ itself or a disjoint residue class, so [L2] makes $B$ a block. [L2]

2.1 Because $1 < d < n$, the block $B$ is neither a singleton nor all of $\mathbb Z/n\mathbb Z$. So composite degree produces nontrivial blocks. [step 1.2] ∎
