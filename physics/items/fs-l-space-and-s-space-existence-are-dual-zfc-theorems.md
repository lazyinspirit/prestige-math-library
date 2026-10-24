---
id: fs-l-space-and-s-space-existence-are-dual-zfc-theorems
kind: false-statement
title: "False: L-space and S-space existence are dual ZFC theorems"
status: published
origin: pipeline
deps:
  - thm-l-and-s-space-existence-is-asymmetric
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Moore, A solution to the L space problem, Theorem 1.3 and Section 7"
      url: https://arxiv.org/pdf/math/0501524
    - title: "Hart--Kunen, Ultra Strong S-Spaces, Corollary 4.18"
      url: https://www.uwosh.edu/faculty_staff/hartj/ultra.pdf
    - title: "Abraham, Three applications of ideal dichotomy, slides 1--4"
      url: https://www.winterschool.eu/files/4-P-Ideal_Dichotomy_III.pdf
---

## Statement

ZFC settles L-space and S-space existence in parallel by dual arguments: ZFC
proves that an L-space exists and also proves that an S-space exists, with one
proof obtained from the other by interchanging separability and Lindelöfness.

## Facts & Assumptions

**Given:** The theories in the cited result are interpreted as separate branches.  For the metamathematical nonprovability clause, assume $\operatorname{Con}(\mathrm{ZFC}+\text{there is a supercompact cardinal})$.

[F1] [[thm-l-and-s-space-existence-is-asymmetric]] proves that ZFC constructs an L-space, ZFC+CH constructs a strong S-space, ZFC+PFA proves that no S-space exists, and under the displayed source-consistency assumption S-space existence is not a theorem of ZFC.

## Refutation

**Proof technique:** direct comparison of the exact theory branches.

1.1 The first half of the proposed parallel is correct: [F1] constructs an L-space in ZFC.  But [F1] obtains an S-space only in the separate CH branch and obtains the incompatible conclusion that no S-space exists in the PFA branch. [F1, Given]

2.1 Under the source-consistency assumption in Given, [F1] proves that ZFC does not prove the existence of an S-space.  Hence the assertion that both existence statements are ZFC theorems is false relative to that same standard large-cardinal consistency assumption. [F1, Given, step 1.1]

3.1 Nor do the actual arguments arise by a formal interchange of two words: the L-space branch uses Moore's minimal-walk colouring in ZFC, the positive S-space branch uses CH, and the negative S-space branch uses PFA.  These hypotheses and conclusions cannot be conjoined, and empty or singleton spaces supply neither kind of witness.  Thus both the claimed parallel ZFC status and the claimed dual proof are refuted, with no converse consistency implication asserted. [F1, step 1.1, step 2.1] ∎
