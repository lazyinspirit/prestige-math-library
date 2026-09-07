---
id: thm-sierpinski-arbitrary-set-gch-implies-choice
kind: theorem
title: "Sierpiński: arbitrary-set GCH implies AC in ZF"
status: draft
origin: pipeline
deps: ["def-local-gch-for-arbitrary-sets", "thm-specker-two-local-gch", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Caicedo, Some choiceless results (5), GCH consequence of Specker"
      url: https://caicedoteaching.wordpress.com/2009/02/02/580-some-choiceless-results-5/
    - title: "Carneiro, §2, local-to-global reduction, pp.1–2"
      url: https://arxiv.org/pdf/1506.03533
---

## Statement

Over ZF, arbitrary-set GCH implies the Axiom of Choice.

## Facts & Assumptions

[F1] [[def-local-gch-for-arbitrary-sets]]: Arbitrary-set GCH supplies local GCH at every infinite set.

[F2] [[thm-specker-two-local-gch]]: A set containing omega and satisfying the two local hypotheses is well-orderable.

[F3] [[def-axiom-of-choice]]: A choice function selects a member of every set in a family of nonempty sets.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 For any set $A$, form $X=A\sqcup\omega$. The second summand explicitly embeds omega into $X$, so $X$ and $\mathcal P(X)$ are infinite. Global GCH supplies both local hypotheses. Specker well-orders $X$, and restriction well-orders $A$. This also covers finite and empty $A$. [F1, F2]

2.1 For any family of nonempty sets, well-order its union by the preceding step and take the least member of each set. Replacement forms the resulting choice function. The empty family has the empty function. Thus AC holds. [F3, step 1.1] ∎
