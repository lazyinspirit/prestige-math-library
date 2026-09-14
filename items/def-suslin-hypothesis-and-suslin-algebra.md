---
id: def-suslin-hypothesis-and-suslin-algebra
kind: definition
title: "The Suslin Hypothesis and Suslin algebras"
status: draft
origin: pipeline
deps: [def-suslin-line-order-interface, def-complete-boolean-algebra-and-regular-open-sets, def-poset-ccc-and-knaster-property, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Monk, Set theory following Jech, Sections 9 and 15, especially Lemma 15.45, printed pp. 67 and 278"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Definition

Work in ZFC, so the axiom of choice is available as stated in [[def-axiom-of-choice]]. The **Suslin Hypothesis** (SH) says that there is no Suslin line in the strong order-theoretic sense of [[def-suslin-line-order-interface]].

Let $B$ be a complete Boolean algebra as in [[def-complete-boolean-algebra-and-regular-open-sets]]. It is **atomless** if every $0<b\in B$ has some $c$ with $0<c<b$. Regard $B^+=B\setminus\{0\}$ as a forcing order with stronger elements smaller. The algebra is **ccc** when $B^+$ is ccc in the sense of [[def-poset-ccc-and-knaster-property]], equivalently when every pairwise disjoint family of nonzero Boolean elements is countable.

The algebra $B$ is **countably distributive** when, for every double sequence $(b_{n,m})_{n,m<\omega}$ in $B$,

$$\bigwedge_{n<\omega}\bigvee_{m<\omega}b_{n,m}=\bigvee_{f\in\omega^\omega}\bigwedge_{n<\omega}b_{n,f(n)}.$$

A **Suslin algebra** is a complete, atomless, ccc, countably distributive Boolean algebra with $0\ne1$. The last clause explicitly excludes the one-element algebra; atomlessness alone can be vacuous there. Empty joins and meets retain the complete-algebra conventions $\bigvee\varnothing=0$ and $\bigwedge\varnothing=1$. The displayed distributive law uses the nonempty index set $\omega$ in both coordinates, so it asserts no selection from an empty family.

The definition itself makes no choice. AC is declared because the equivalence and construction theorems on this page use simultaneous successor orders, maximal antichains, and countable enumerations.
