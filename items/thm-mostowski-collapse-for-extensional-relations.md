---
id: thm-mostowski-collapse-for-extensional-relations
kind: theorem
title: "Mostowski collapse for extensional relations"
status: published
origin: pipeline
deps: ["lem-extensional-collapse-is-injective", "def-extensional-relation-and-collapse-map"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Marks, Set Theory, Berkeley edition \u2014 Theorem 6.11 p.32."
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
---

## Statement

Every well-founded setlike extensional relation $R$ on a definable class $X$ is isomorphic to membership on a unique transitive definable class $Y$, by a unique definable isomorphism $\pi:X\to Y$. For a set domain $X$, the isomorphism and its image are sets. This holds without ambient Foundation.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] For a well-founded setlike extensional relation $R$ on a definable class $X$, its collapse map $\pi$ is injective. ([[lem-extensional-collapse-is-injective]])

[F2] For a well-founded setlike relation $R$ on $X$, the collapse map is the unique definable function satisfying $\pi(x)=\{\pi(y):yRx\}$. Its existence and uniqueness follow from well-founded recursion. ([[def-extensional-relation-and-collapse-map]])

## Proof

1.1 Use the collapse map and let $Y=\{\pi(x):x\in X\}$. It is injective by the extensional-collapse lemma and surjective onto this range by definition. If $z\in\pi(x)$, its defining equation gives $z=\pi(y)$ for some $yRx$; hence $z\in Y$. Thus $Y$ is transitive. [F1, F2]

2.1 If $yRx$ then $\pi(y)\in\pi(x)$. Conversely, if $\pi(y)\in\pi(x)$, the collapse equation gives $zRx$ with $\pi(z)=\pi(y)$; injectivity gives $z=y$. This proves preservation and reflection of the relation. [F1, F2, step 1.1]

3.1 For any other isomorphism $j$ onto a transitive class $Z$, each member of $j(x)$ lies in $Z$ and so is $j(y)$ for a unique $y\in X$. Relation reflection then says exactly $yRx$. Consequently $j(x)=\{j(y):yRx\}$, the same recursion as $\pi$. Uniqueness of the collapse map gives $j=\pi$, and thus $Z=Y$. When $X$ is a set, Replacement forms both its graph and image. [F2, step 2.1] ∎
