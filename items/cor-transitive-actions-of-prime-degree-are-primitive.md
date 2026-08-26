---
id: cor-transitive-actions-of-prime-degree-are-primitive
kind: corollary
title: "A transitive action of prime degree is primitive"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-primitive-and-imprimitive-actions, def-prime, prop-blocks-in-a-finite-transitive-action-have-equal-size]
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

## Statement

Let $G$ act transitively on a finite set $\Omega$ of prime cardinality. Then
the action is primitive.

## Facts & Assumptions

**Given:** A transitive action of $G$ on a finite set $\Omega$ with $|\Omega|$ prime.

[L1] A transitive action is primitive when its only block systems are the singleton partition and the one-block partition ([[def-primitive-and-imprimitive-actions]]).

[L2] In a finite transitive action, every block in a block system has the same size, and that size divides $|\Omega|$ ([[prop-blocks-in-a-finite-transitive-action-have-equal-size]]).

[L3] A prime natural number has no positive divisors other than $1$ and itself ([[def-prime]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal B$ be a block system and let $B \in \mathcal B$. By [L2], the positive integer $|B|$ divides the prime $|\Omega|$. So [L3] gives $|B| = 1$ or $|B| = |\Omega|$. [L2, L3]

2.1 If $|B| = 1$, then every block has size $1$ by [L2], so $\mathcal B$ is the singleton partition. If $|B| = |\Omega|$, then $B = \Omega$ and $\mathcal B = \{\Omega\}$. Thus every block system is trivial, and [L1] makes the action primitive. [step 1.1, L1, L2] ∎
