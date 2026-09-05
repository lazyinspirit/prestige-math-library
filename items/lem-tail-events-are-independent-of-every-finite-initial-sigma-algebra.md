---
id: lem-tail-events-are-independent-of-every-finite-initial-sigma-algebra
kind: lemma
title: "Tail events are independent of every finite initial sigma-algebra"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-tail-sigma-algebra-of-a-sequence, thm-grouping-independent-sigma-algebras]
proof_strategy: direct
sources:
  references:
    - title: "S. R. S. Varadhan, Probability Theory, discussion before Theorem 3.15"
      url: "https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $(X_n)_{n\in\mathbb N}$ be an independent sequence of random elements. For
each $m\in\mathbb N$, let

$$\mathcal H_m:=\sigma(X_0,\dots,X_m),\qquad \mathcal G_m:=\sigma(X_n:n\ge m+1).$$

Then every tail event $A\in\mathcal T(X_n:n\in\mathbb N)$ is independent of
every event $B\in\mathcal H_m$.

## Facts & Assumptions

**Given:** An independent sequence $(X_n)_{n\in\mathbb N}$, an index $m$, a
tail event $A$, and an event $B\in\mathcal H_m$.

[L1] The tail sigma-algebra is
$\mathcal T(X_n:n\in\mathbb N)=\bigcap_{r\in\mathbb N}\sigma(X_n:n\ge r)$.
([[def-tail-sigma-algebra-of-a-sequence]])

[L2] Disjoint groups of an independent sigma-algebra family remain independent.
([[thm-grouping-independent-sigma-algebras]])

## Proof

**Proof technique:** direct.

1.1 The independent sequence $(X_n)$ gives an independent family of sigma-algebras $(\sigma(X_n))_{n\in\mathbb N}$. Grouping the first $m+1$ coordinates into one block and the remaining coordinates into the other, [L2] shows that $\mathcal H_m$ and $\mathcal G_m$ are independent sigma-algebras. [given, L2]

2.1 Because $A$ lies in the tail sigma-algebra, [L1] gives $A\in\sigma(X_n:n\ge m+1)=\mathcal G_m$. Step 1.1 therefore yields $$\mathbb P(A\cap B)=\mathbb P(A)\mathbb P(B).$$ So every tail event is independent of every event in the finite initial sigma-algebra. [L1, step 1.1] ∎
