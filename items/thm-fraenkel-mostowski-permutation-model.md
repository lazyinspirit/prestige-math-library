---
id: thm-fraenkel-mostowski-permutation-model
kind: theorem
title: Fraenkel–Mostowski permutation-model theorem
status: published
origin: pipeline
deps: [def-symmetric-and-hereditarily-symmetric-sets, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Jech, The Axiom of Choice, Theorem 4.1, pp. 46–47", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement

For a transitive ZFA model $M$ and an $M$-internal normal permutation system $(A,G,\mathcal F)$, $\mathrm{HS}_{\mathcal F}^M$ is a transitive ZFA model with the same atoms and pure kernel. Here $A,G,\mathcal F\in M$, the action and filter satisfy the defining clauses in $M$, and hereditary symmetry is evaluated in $M$. Even if $M$ satisfies AC, $\mathrm{HS}_{\mathcal F}^M$ need not.

## Facts & Assumptions

**Given:** The stated transitive ZFA model and $M$-internal normal permutation system. AC is not assumed for the model construction.

[F1] [[def-symmetric-and-hereditarily-symmetric-sets]] gives transitivity and hereditary closure.

[F2] [[def-axiom-of-choice]] names the property addressed only in the final noninheritance clause.

## Proof

1.1 Every atom is symmetric because $\operatorname{fix}_G(\{a\})$ fixes $a$, and every pure set is fixed by every permutation; both are hereditarily symmetric, so $A\cup K\subseteq\mathrm{HS}$, while conversely the pure kernel is unchanged because no atom lies in a pure set. Transitivity is F1. Empty Set, Infinity, Extensionality and Foundation restrict from $M$. If $x,y\in\mathrm{HS}$, the stabilizer intersection fixes $\{x,y\}$, $x\cup y$, and the usual finite set operations; their members are hereditary, giving Pairing and Union. [F1]

1.2 Because $G,\mathcal F$ and their action are internal to $M$, the predicate “$u\in\mathrm{HS}_{\mathcal F}^M$” is definable over $M$ from those parameters by rank recursion. Hence $M$-Separation forms

$$z=\{u\in\mathcal P^M(x):M\models u\in\mathrm{HS}_{\mathcal F}\}.$$

Every permutation fixing $x$ maps $z$ to itself because hereditary symmetry is invariant; all members are HS, so $z\in\mathrm{HS}$ and it is exactly the internal power set. For Separation with supported parameters, formula invariance shows the defining subset of $x$ has the intersection of their stabilizers as support. [F1]

1.3 For Replacement, suppose the internal formula assigns a unique $y$ to every $x\in a$. Ambient Replacement forms the image $b$. Any permutation fixing $a$ and all parameters maps a witnessed pair $(x,y)$ to $(gx,gy)$; uniqueness therefore maps $b$ to itself. Each value $y$ is in HS by the internal quantifier domain, so $b$ is hereditarily symmetric. This proves every ZFA axiom without Choice. [F1]

2.1 Noninheritance is witnessed by the finite-support full-permutation system on a countably infinite atom set: its atom set is HS, but a supported well-order would be moved by a transposition outside its finite support. Thus the ambient $M$ may satisfy F2 while its HS submodel does not. [F2] ∎
