---
id: "lem-def-operation-is-absolute"
kind: "lemma"
title: "Absoluteness of the definable power-set operation"
deps: ["def-definable-subsets-of-a-membership-structure", "lem-finite-tuple-satisfaction-is-absolute"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Geschke §5.4 p16; Marks Exercise 20.1 and Lemma 20.7 pp86–88
      url: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZF, if $N$ is a transitive ZF model and $A\in N$, then $\operatorname{Def}^N(A)=\operatorname{Def}(A)$. Every subset externally definable over $(A,\in)$ with parameters from $A$ therefore belongs to $N$. This conclusion concerns definable subsets, not all subsets.

## Facts & Assumptions

**Given:** ZF; transitive ZF model N containing A. Internal Separation and finite-tuple absoluteness identify each subset in both directions; Replacement assembles the identical Def set.

[F1] [[def-definable-subsets-of-a-membership-structure]]: Def collects the subsets given by formula codes and finite parameter tuples, with Def(empty)={empty}.

[F2] [[lem-finite-tuple-satisfaction-is-absolute]]: Finite tuples, formula codes and their satisfaction in the nonempty structure agree internally and externally.

## Proof

1.1 If $A=\varnothing$, internal Pairing constructs the actual singleton $\{\varnothing\}$ by transitivity, so both Def operations give that set. Suppose henceforth that $A\ne\varnothing$. [F1, given]

2.1 For each external formula and finite parameter tuple from $A$, the code and tuple belong to $N$. Internal Separation gives $b\in N$ consisting of the internally satisfying elements of $A$. For each actual $x\in A$, finite-tuple absoluteness gives $x\in b$ exactly when the external formula holds. Transitivity ensures that $b$ has no additional elements. Hence every external Def subset is an internal Def subset. [F1, F2, step 1.1]

3.1 Conversely an internal member of Def has an internal code and tuple witnessing its definition. These are actual code and tuple, and the same satisfaction comparison identifies its subset with the externally defined one. Internal Replacement collects exactly these subsets; both inclusions show equality of the two Def sets. [F1, F2, step 2.1] ∎
