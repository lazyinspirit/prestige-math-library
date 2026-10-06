---
id: lem-characteristic-disk-with-essential-boundary-data-produces-a-vanishing-cycle
kind: lemma
title: "A characteristic disk with essential boundary data produces a vanishing cycle"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-first-essential-loop-of-a-transverse-family-is-a-vanishing-cycle, lem-characteristic-disk-center-saddle-index-count, lem-nullhomotopy-persists-under-a-compact-transverse-deformation, lem-first-saddle-lobe-admits-a-collar-fixed-center-saddle-cancellation, def-countable-choice-principle-for-foliation-pair, lem-characteristic-disk-singular-images-can-be-separated-into-distinct-leaves-rel-collar, lem-center-frontier-selection-and-cancellation-search-has-a-finite-rank]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 14
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (complete English translation)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a76, printed pp. 16-19; \u00a77, Theorem 7.1 and Lemmas 7.1-7.9, printed pp. 19-25"
    - title: "Mark Brittenham, Foliations and the Topology of 3-Manifolds, classes 11-20"
      url: "https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lecs_11_to_20.pdf"
      locator: "Class 11, PDF pp. 1-3; finite selection and cancellation supplied explicitly"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a $C^2$ cooriented codimension-one foliation of a $3$-manifold, and let $h:D^2\to M$ be a disk map in relative generic position. Suppose either (a) $h|_{\partial D^2}$ is a closed transversal, or (b) $h(\partial D^2)$ is a loop in one leaf and represents a nonzero class of that leaf. Then $F$ admits a vanishing cycle.

## Facts & Assumptions

**Given:** A $C^2$ cooriented codimension-one foliation $F$ of a $3$-manifold, a disk map $h:D^2\to M$ in relative generic position, and either alternative (a) or (b) of the statement.

[F1] The in-pair item [[lem-center-frontier-selection-and-cancellation-search-has-a-finite-rank]] states the full-disk theorem: on a separated generic characteristic disk with transverse boundary or regular essential leafwise boundary, the finite inner-source-disk search either finds a $C^2$ vanishing-cycle trace or selects a null simple one-center/one-saddle frontier whose collar-fixed cancellation reduces the full-disk saddle count by one, iteration terminating in a vanishing cycle with rank (total saddles, interior saddles of the current invariant search disk).

[F2] The in-pair item [[lem-first-essential-loop-of-a-transverse-family-is-a-vanishing-cycle]] produces a vanishing cycle from the first essential loop of a transverse family, the in-pair item [[lem-first-saddle-lobe-admits-a-collar-fixed-center-saddle-cancellation]] supplies the collar-fixed cancellation, and the sibling-pair items `lem-characteristic-disk-center-saddle-index-count`, `lem-nullhomotopy-persists-under-a-compact-transverse-deformation` and `lem-characteristic-disk-singular-images-can-be-separated-into-distinct-leaves-rel-collar` supply the index count, compact nullhomotopy persistence and separation inputs of the search; their uses are flagged in steps 1.1 and 1.2 below.

[F3] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).

## Proof

**Proof technique:** direct.

1.1 In alternative (a) the boundary loop $h|_{\partial D^2}$ is a closed transversal; an ambiently null closed transversal spans a relative $C^2$ characteristic disk, so the data satisfy the transverse-boundary case of the full-disk theorem [F1]. Applying that theorem to the relative generic disk, the finite search either produces a $C^2$ vanishing-cycle trace directly or performs finitely many rank-decreasing cancellations of the form supplied by [F2] and terminates in a vanishing cycle; neither the ambient spanning disk nor any intermediate object is a leafwise cap. [F1, F2, given]

1.2 In alternative (b) the loop $h(\partial D^2)$ lies in one leaf and represents a nonzero class of that leaf, so a nonzero element of the kernel of $\pi_1(L)\to\pi_1(M)$ is represented by a $C^2$ leaf loop spanning an ambient $C^2$ disk; this is the regular essential leafwise boundary case of the full-disk theorem [F1] with the separation input of [F2], and the same finite search terminates in a vanishing cycle after finitely many rank-decreasing cancellations or a first-essential-loop step. [F1, F2, given]

2.1 Therefore in either alternative the foliation $F$ admits a vanishing cycle; the argument needs only one relative generic disk, finitely many cancellations and the cited index, persistence and separation suppliers, hence only the standing countable choice from [F3]. [F1, F2, F3, step 1.1, step 1.2] ∎
