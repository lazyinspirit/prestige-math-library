---
id: lem-author-8e1c0251ef0d-units-sheaf
kind: lemma
title: Units in a sheaf of rings form a sheaf
status: published
domain: mathematics
deps:
  - def-scheme-sites-and-sheafification
dependency_roles:
  def-scheme-sites-and-sheafification: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 6
---

## Statement
Let $\mathcal O$ be a sheaf of commutative rings on a site. The presheaf $U\mapsto\mathcal O(U)^\times$ is a sheaf of abelian groups, where $\mathcal O(U)^\times$ denotes the multiplicatively invertible elements.

## Facts & Assumptions

**Given:** A sheaf of commutative rings $\mathcal O$ on a site.

**Goal:** Prove the sheaf condition for its units.

[F1] A sheaf has unique gluing for compatible local sections, as in [[def-scheme-sites-and-sheafification]].

## Proof

1.1 For a covering of $U$, compatible local units glue by [F1] to a section $a\in\mathcal O(U)$. Their inverses are compatible, because restriction preserves inverses, and glue to a section $b$. The restrictions of both $ab$ and $1$ agree on the cover, so $ab=1$ by uniqueness. Thus $a$ is a unit. [F1, construct]

2.1 Uniqueness of a glued unit follows from uniqueness in $\mathcal O$. Multiplication and inversion commute with restriction, and commutativity makes the unit groups abelian. Hence the units form a sheaf of abelian groups. [F1, step 1.1] ∎
