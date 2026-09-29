---
id: lem-noetherian-flatness-by-fibres-finite-target-module
kind: lemma
title: Noetherian fibrewise flatness for a module finite over the target
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - lem-noetherian-local-flatness-criterion-finite-over-target
  - thm-flatness-criteria-by-injections-and-ideals
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Algebra, Lemma 10.99.15 (tag 00MP), Noetherian fibrewise flatness criterion"
      url: https://stacks.math.columbia.edu/tag/00MP
---

## Statement

Assume the Axiom of Choice. Let $R\to S\to S'$ be local
homomorphisms of Noetherian local rings, and let $M$ be a finite
$S'$-module. Write $\mathfrak m$ for the maximal ideal of $R$.
If $M$ is flat over $R$ and $M/\mathfrak mM$ is flat over
$S/\mathfrak mS$, then $M$ is flat over $S$. The conclusion also
holds when $M=0$. No finiteness of $M$ over $R$ or $S$ is assumed.

This is the module-flatness conclusion of Stacks Lemma 10.99.15;
its additional conclusion that $S$ is flat over $R$ is not needed
here.

## Facts & Assumptions

**Given:** The Noetherian local tower, finite target module, and two flatness hypotheses.

[F1] Flatness over $R$ makes the multiplication map $\mathfrak m\otimes_RM\to M$ injective ([[thm-flatness-criteria-by-injections-and-ideals]]).

[F2] If $S\to S'$ is a local Noetherian map, $M$ is finite over $S'$, $I\subsetneq S$, $M/IM$ is flat over $S/I$, and $I\otimes_SM\to M$ is injective, then $M$ is flat over $S$ ([[lem-noetherian-local-flatness-criterion-finite-over-target]]).

## Proof

**Proof technique:** transfer the ideal-tensor injection along the middle ring, then apply the finite-over-target local criterion.

1.1 Set $I=\mathfrak mS\subsetneq S$. For any $S$-module $M$, there is a natural surjection $$\mathfrak m\otimes_RM\longrightarrow I\otimes_SM.$$ Indeed $I$ is generated as an $S$-module by images of elements of $\mathfrak m$; a pure tensor $(\sum_a r_as_a)\otimes m$ with $r_a\in\mathfrak m$, $s_a\in S$ is the image of $\sum_a r_a\otimes s_am$. This works whether or not $M$ is finite over either smaller ring. [F1]

2.1 The composite $$\mathfrak m\otimes_RM\longrightarrow I\otimes_SM\longrightarrow M$$ is the multiplication map of [F1], hence injective. Since the first arrow is surjective by step 1.1, the second arrow $I\otimes_SM\to M$ is injective. The quotient $M/IM$ is exactly $M/\mathfrak mM$, flat over $S/I=S/\mathfrak mS$ by hypothesis. Apply [F2] to $S\to S'$ and $I$ to conclude that $M$ is flat over $S$. [F1, F2, step 1.1]

3.1 If $M=0$, both hypotheses and the conclusion hold, and the same argument applies. The Axiom of Choice is inherited from [F2]; no additional infinite selection is used. [F2, step 2.1] ∎
