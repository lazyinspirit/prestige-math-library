---
id: lem-primary-decomposition-delete-redundant-components
kind: lemma
title: "A finite primary decomposition can be stripped of redundant components"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-primary-decomposition-minimal-and-isolated-components]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §18"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §19"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Statement

If
$$
N=Q_1\cap\cdots\cap Q_r
$$
is a finite primary decomposition of a submodule $N \subseteq M$, then some
subfamily of the $Q_i$ has the same intersection and is irredundant.

## Facts & Assumptions

**Given:** A commutative ring $R$, a left $R$-module $M$, a submodule $N \subseteq M$, and a finite primary decomposition $N=Q_1\cap\cdots\cap Q_r$.

[L1] Minimality requires both that no component be redundant and that the component radicals be pairwise distinct ([[def-primary-decomposition-minimal-and-isolated-components]]).

## Proof

**Proof technique:** direct.

1.1 If the displayed decomposition has no redundant component, then it is already irredundant, which is the first condition recorded in [L1]. Otherwise choose an index $j$ such that $Q_j \supseteq \bigcap_{i\ne j}Q_i$. Then $$ N=\bigcap_{i=1}^rQ_i=\bigcap_{i\ne j}Q_i, $$ so removing $Q_j$ preserves the intersection. [L1, given, choose, algebra]

2.1 Each removal in step 1.1 shortens the finite list of components by one. Repeating step 1.1 therefore terminates after finitely many deletions and produces a decomposition with the same intersection and no redundant component. [step 1.1, algebra]

3.1 This is the required irredundant subfamily. [step 2.1] ∎
