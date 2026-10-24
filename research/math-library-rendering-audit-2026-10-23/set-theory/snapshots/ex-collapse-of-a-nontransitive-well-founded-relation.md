---
id: ex-collapse-of-a-nontransitive-well-founded-relation
kind: example
title: "Collapsing a relation that is not transitive"
status: published
origin: pipeline
deps: ["thm-mostowski-collapse-for-extensional-relations"]
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
    - title: "Marks, Set Theory, Berkeley edition \u2014 6.11 and Figure 6 p.32, reduced worked instance."
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
---

## Example

Take distinct nodes $a,b,c$ and $R=\{(a,b),(b,c)\}$. This relation is well-founded and extensional but not transitive. Its collapse is $a\mapsto\varnothing$, $b\mapsto\{\varnothing\}$, $c\mapsto\{\{\varnothing\}\}$.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] Every well-founded setlike extensional relation $R$ on a definable class $X$ is isomorphic to membership on a unique transitive definable class $Y$, by a unique definable isomorphism $\pi:X\to Y$. For a set domain $X$, the isomorphism and its image are sets. This holds without ambient Foundation. ([[thm-mostowski-collapse-for-extensional-relations]])

## Verification

1.1 The predecessor sets are respectively $\varnothing,\{a\},\{b\}$, which are distinct. In any nonempty subset of the nodes, the first present node in the list $a,b,c$ has no predecessor in that subset, proving well-foundedness. Yet $aRb$ and $bRc$ hold while $aRc$ does not. [given]

2.1 The collapse equation successively gives the three displayed values. Its range is transitive: the members of $\{\varnothing\}$ and of $\{\{\varnothing\}\}$ are already in that range. The collapse theorem makes this the unique isomorphism to a transitive membership structure. [F1, step 1.1] ∎
