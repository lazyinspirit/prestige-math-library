---
id: def-subrepresentation-quotient-representation-and-intertwiner
kind: definition
title: Subrepresentations, quotient representations, and intertwiners
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-representation-of-a-lie-algebra, def-quotient-module]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, §11.1, printed pp. 61–62"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §4.1, printed pp. 49–50"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Definition

Let $V$ be a representation of $\mathfrak g$.

A linear subspace $W\subseteq V$ is **stable** if $xw\in W$ for every
$x\in\mathfrak g$ and $w\in W$. With the restricted action, such a $W$ is a
**subrepresentation**.

For a stable subspace $W$, the **quotient representation** on $V/W$ is

$$x(v+W)=xv+W.$$

This is independent of the representative: replacing $v$ by $v+w$ changes
$xv$ by $xw\in W$. The representation identity descends because both sides
are the corresponding cosets of the identity in $V$.

For representations $V,V'$ of the same Lie algebra, an **intertwiner** is a
linear map $T:V\to V'$ such that

$$T(xv)=xT(v)$$

for all $x\in\mathfrak g$ and $v\in V$.
