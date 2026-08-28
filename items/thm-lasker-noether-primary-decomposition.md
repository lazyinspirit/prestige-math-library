---
id: thm-lasker-noether-primary-decomposition
kind: theorem
title: "Every submodule of a finite module over a Noetherian ring has a minimal primary decomposition"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dependent-choice, thm-finitely-generated-modules-over-noetherian-rings-are-noetherian, thm-equivalent-characterizations-of-noetherian-modules, lem-irreducible-submodule-is-primary-noetherian, lem-primary-decomposition-delete-redundant-components, lem-primary-decomposition-combine-equal-radicals]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem (18.21)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Theorem 19.11"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Statement

Assume Dependent Choice.

Let $R$ be a Noetherian commutative ring and let $M$ be a finitely generated
left $R$-module. Every submodule $N \subseteq M$ has a finite primary
decomposition. After deleting redundant components and combining equal radicals,
one obtains a minimal primary decomposition. When $N=M$, the decomposition is
the empty intersection, interpreted as $M$. In particular, every ideal of a
Noetherian ring has a minimal primary decomposition.

## Facts & Assumptions

**Given:** Dependent Choice, a Noetherian commutative ring $R$, a finitely generated left $R$-module $M$, and a submodule $N \subseteq M$.

[L1] A finitely generated module over a Noetherian ring is Noetherian ([[thm-finitely-generated-modules-over-noetherian-rings-are-noetherian]]).

[L2] Assuming Dependent Choice, a Noetherian module has the maximal condition on submodules ([[thm-equivalent-characterizations-of-noetherian-modules]]).

[L3] An irreducible submodule of a Noetherian module is primary ([[lem-irreducible-submodule-is-primary-noetherian]]).

[L4] Finite primary decompositions can be made irredundant by deleting redundant components ([[lem-primary-decomposition-delete-redundant-components]]).

[L5] In a finite primary decomposition of a submodule of a finitely generated module over a Noetherian commutative ring, equal-radical primary components can be combined into one primary component ([[lem-primary-decomposition-combine-equal-radicals]]).

## Proof

**Proof technique:** direct.

1.1 The submodule $M$ has the empty primary decomposition, whose intersection is interpreted as $M$. [given]

2.1 By [L1], the module $M$ is Noetherian. Suppose, toward contradiction, that some submodule of $M$ has no finite primary decomposition. Let $\Sigma$ be the set of such submodules. By step 1.1, $M\notin\Sigma$. By [L2], choose a maximal element $Q$ of $\Sigma$; then $Q\subsetneq M$. [L1, L2, step 1.1, given, construct]

3.1 The submodule $Q$ is irreducible. Indeed, if $Q=A\cap B$ with $Q \subsetneq A$ and $Q \subsetneq B$, then the maximality of $Q$ in step 2.1 forces finite primary decompositions of $A$ and $B$. Intersecting those two finite decompositions gives a finite primary decomposition of $Q$, contrary to $Q \in \Sigma$. [step 2.1, algebra]

4.1 Because $Q$ is irreducible and proper and $M$ is Noetherian, [L3] shows that $Q$ is primary. But a primary submodule is already a one-term finite primary decomposition, again contradicting $Q \in \Sigma$. Therefore $\Sigma$ is empty: every submodule of $M$ has a finite primary decomposition. [L3, step 2.1, step 3.1]

5.1 If $N=M$, the empty decomposition from step 1.1 is irredundant and has pairwise distinct radicals vacuously, so it is minimal. If $N\subsetneq M$, start from a finite primary decomposition supplied by step 4.1, apply [L4] to remove redundant components, and then apply [L5] to merge equal-radical blocks. The resulting decomposition is finite, has the same intersection, has no redundant component, and has pairwise distinct radicals; hence it is minimal. [L4, L5, step 1.1, step 4.1]

6.1 Taking $M=R$ recovers the ideal case, because ideals are precisely the submodules of the regular module over a commutative ring. [step 5.1, algebra] ∎
