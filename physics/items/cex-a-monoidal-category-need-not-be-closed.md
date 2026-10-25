---
id: cex-a-monoidal-category-need-not-be-closed
kind: counterexample
title: "A monoidal category need not be closed"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-left-closed-and-right-closed-monoidal-category, thm-a-poset-with-finite-meets-is-a-strict-monoidal-category, def-lattice-distributive-lattice-and-order-ideal]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, 2nd ed., Section 4.4"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Example 2.3.12"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement refuted

Every monoidal category is closed.

## Facts & Assumptions

**Given:** The five-element diamond lattice $M_3=\{0,p,q,r,1\}$ with $0< p,q,r <1$ and $p,q,r$ pairwise incomparable.

[L1] A poset with top element and binary meets becomes a strict monoidal category under meet ([[thm-a-poset-with-finite-meets-is-a-strict-monoidal-category]]).

[L2] In a lattice, binary meets exist and are written $\wedge$ ([[def-lattice-distributive-lattice-and-order-ideal]]).

[L3] Right closed means that, for each fixed object $X$, the functor $-\otimes X$ has a right adjoint ([[def-left-closed-and-right-closed-monoidal-category]]).

## Counterexample

**Proof technique:** direct.

1.1 In $M_3$, the meet operation satisfies $p\wedge q=0$, $p\wedge r=0$, and $p\wedge 1=p$, while $q$ and $r$ are incomparable below $1$. By [L1] and [L2], the associated poset-category is a strict monoidal category with tensor product $\wedge$ and unit $1$. [given, L1, L2]

2.1 Fix $X:=p$ and $Y:=q$. An object $a$ satisfies $a\wedge p\le q$ exactly when $a\in\{0,q,r\}$: this holds for $0,q,r$, fails for $1$ because $1\wedge p=p\nleq q$, and fails for $p$ because $p\wedge p=p\nleq q$. [step 1.1, given, algebra]

3.1 The set $\{0,q,r\}$ has no greatest element, since $q$ and $r$ are incomparable and both dominate $0$. Therefore there is no object $[p,q]$ with $a\le [p,q]$ iff $a\wedge p\le q$, so the functor $-\wedge p$ has no right adjoint. By [L3], this monoidal category is not right closed and hence not closed. [step 2.1, L3, algebra] ∎
