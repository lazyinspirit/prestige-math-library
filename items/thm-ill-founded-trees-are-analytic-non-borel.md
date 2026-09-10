---
id: thm-ill-founded-trees-are-analytic-non-borel
kind: theorem
title: "Ill-founded trees form an analytic non-Borel set"
status: draft
origin: pipeline
deps: ["def-descriptive-tree-rank", "lem-countable-tree-ranks-and-rank-monotonicity", "thm-analytic-families-of-well-founded-trees-have-bounded-rank", "lem-analytic-countable-operations-and-borel-inclusion", "def-axiom-of-choice"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Example 4.7 pp35–36 and Theorem 5.3/Corollary 5.4 p44 (non-Borel conclusion); alternative proof from local direct boundedness"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

In ZFC, $\mathrm{IF}=\mathrm{Tr}\setminus\mathrm{WF}$ is analytic and not Borel; $\mathrm{WF}$ is coanalytic and not analytic.

## Facts & Assumptions

[F1] [[def-descriptive-tree-rank]] gives the Polish coordinate space of trees and WF.

[F2] [[lem-countable-tree-ranks-and-rank-monotonicity]] identifies ill-foundedness with a branch and realizes every countable rank.

[F3] [[thm-analytic-families-of-well-founded-trees-have-bounded-rank]] bounds the ranks of an analytic family contained in WF.

[F4] [[lem-analytic-countable-operations-and-borel-inclusion]] makes every Borel set analytic and coanalytic.

[A1] Assume [[def-axiom-of-choice]].

## Proof

**Given:** ZFC and the tree space with the specified rank conventions.

1.1 The set $C=\{(T,x):\forall n\ x\upharpoonright n\in T\}$ in $\mathrm{Tr}\times\mathcal N$ is closed. Failure is witnessed by n; fixing the first n coordinates of x and the tree coordinate excluding its prefix gives an open neighbourhood still failing that condition. By F2 its projection is exactly IF. Thus IF is analytic by the closed-projection convention, and its complement WF is coanalytic. [F1, F2, A1]

2.1 If WF were analytic, F3 with A1 would give a countable $\gamma$ strictly bounding every well-founded tree rank. F2 with A1 supplies a tree of rank $\gamma$, contradicting that strict bound. Therefore WF is not analytic. If IF were Borel its complement WF would be Borel by the sigma-algebra axiom, hence analytic by F4 and A1, again a contradiction. Thus IF is not Borel. QED. [F2, F3, F4, A1, step 1.1]
