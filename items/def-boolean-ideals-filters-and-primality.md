---
id: def-boolean-ideals-filters-and-primality
kind: definition
title: Boolean ideals, filters, prime ideals and ultrafilters
status: draft
origin: pipeline
deps: [def-boolean-algebra-for-stone-duality]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Tressl, Stone Duality for Boolean Algebras, 2.2.2–2.2.6 and 2.2.13, pp. 4–8"
      url: https://personalpages.manchester.ac.uk/staff/Marcus.Tressl/papers/StoneDualityBooleanAlgebras.pdf
---

## Definition

Let $B$ be a [[def-boolean-algebra-for-stone-duality|Boolean algebra]]. An **ideal** $I\subseteq B$ contains $0$, is downward closed, and is closed under binary joins. Thus $b\in I$ and $a\le b$ imply $a\in I$. A **filter** $F\subseteq B$ contains $1$, is upward closed, and is closed under binary meets. These definitions include the improper ideal and filter $B$.

An ideal is **proper** when $1\notin I$; a filter is proper when $0\notin F$. A **prime ideal** is a proper ideal such that $a\wedge b\in I$ implies $a\in I$ or $b\in I$. A **prime filter** is a proper filter such that $a\vee b\in F$ implies $a\in F$ or $b\in F$.

An **ultrafilter** is a maximal proper filter under inclusion. A **maximal ideal** is a maximal proper ideal. Maximality always refers to proper objects. Consequently the trivial algebra has no prime ideals, maximal ideals, proper filters or ultrafilters. These are algebraic filters; a forcing preorder has a different filter definition.

The ideal convention here is downward closure. The upward inequality printed in Tressl 2.2.6(iv)(b) is not adopted.
