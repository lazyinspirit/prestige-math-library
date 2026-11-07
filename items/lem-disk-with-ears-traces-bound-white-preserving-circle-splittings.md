---
id: lem-disk-with-ears-traces-bound-white-preserving-circle-splittings
kind: lemma
title: "Disk-with-ears traces bound white-preserving circle splittings"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations
  - lem-jordan-schoenflies-extension-for-plane-curves
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the Jordan-disk and finite smooth disk-parameter suppliers. The counting and innermost-circle argument are finite."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, PDF pp.18,22,26,46, footnote29 and Lemmas3.24–3.26; finite disk-trace bound supplied here"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

Assume full AC. In a smooth sphere $S$, supply pairwise disjoint smooth disks $Y_i$, each consisting of a core disk $B_i$ and finitely many rectangular ears attached along pairwise disjoint closed proper intervals $J_{ij}$ of $\partial B_i$. Each ear meets the core exactly in its attaching interval, and the part of $\partial B_i$ outside the interiors of those intervals lies in $\partial Y_i$. Also supply a compact smooth surface $B$ containing the core disks, with every $J_{ij}$ contained in $\partial B$, and white disks $W_k$ disjoint from the $Y_i$. All disk and ear collars are actual compatible smooth parameters, with finite corners allowed.

Let $\Gamma$ be a finite disjoint union of embedded circles in $S$. Its intersections with each core, ear and white disk are properly embedded arcs transverse to the attaching seams. Suppose:

- Every circle of $\Gamma$ disjoint from the white disks lies in the interior of one $Y_i$.
- No arc of $\Gamma\cap B_i$ cobounds a disk in $B$ with an arc of $\partial B$.
- There is no embedded arc in a core $B_i$, with interior disjoint from $\Gamma\cup\partial B_i$, joining interiors of two different arcs of $\Gamma\cap B_i$ that belong to the same circle of $\Gamma$.

Then every circle contains a white-disk arc. In particular, if $N$ is the number of circles and $M$ is the number of arcs of $\Gamma\cap\bigcup_k W_k$, then $N\leq M$.

Consequently, consider any sequence of such configurations on the same supplied disks and ears, satisfying these three hypotheses at every stage. Suppose each step leaves the white-disk traces unchanged and replaces one trace circle by the two circles obtained by surgery along an embedded same-circle chord, leaving all other circles unchanged. Starting with $N_0$ circles, the sequence has at most $M-N_0$ steps. This assertion permits steps neutral for any separately chosen complexity coordinate. It does not assert that a particular surface-isotopy hierarchy preserves the three hypotheses or realizes the required circle surgery.

## Statement references

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** Full AC, the actual finite disks, ears, surface and circle traces, and the three stated prohibitions; for the last assertion, the supplied sequence of white-trace-preserving circle surgeries.

[F1] A planar Jordan curve bounds a disk; applying a supplied disk chart gives the corresponding inside disk for a circle in the interior of a disk. ([[lem-jordan-schoenflies-extension-for-plane-curves]])

[F2] Actual smooth disk parameters with prescribed finite boundary arcs and collars are available. In particular, a finite collection of disjoint proper arcs cuts a disk into disks, and two different boundary arcs of any resulting disk can be joined through its interior by a smooth arc. The latter assertions can also be obtained by cutting the parameter disk successively along the proper arcs and using its boundary collars. ([[lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations]], Proof7.1–12.1)

[F3] Full AC implies countable choice for the smooth disk supplier. ([[thm-choice-implies-dependent-implies-countable-choice]])

## Proof

1.1 Suppose a circle misses all white disks. By the first hypothesis it lies in $\operatorname{int}Y_i$ for some $i$ and bounds an inside disk there by [F1]. Any other trace circle meeting this disk lies wholly inside it, since trace circles are disjoint. Choose an innermost one among the finitely many contained circles, and call it $\gamma$; write $A$ for its inside disk. Thus $A\cap\Gamma=\gamma$. The circle $\gamma$ meets the core $B_i$: otherwise it lies in a single ear, contradicting the assumption that all intersections with ears are proper arcs. It also cannot lie entirely in $B_i$, by the corresponding proper-arc assumption for the core. [given, F1, F3, choose]

2.1 Cut the core disk along all the proper arcs of $\Gamma\cap B_i$. A proper arc in a disk together with either of the two boundary paths is a Jordan curve; [F1] gives its two disk sides. Induction over the finite disjoint arcs therefore makes every resulting region have disk closure, with the smooth corner parameters of [F2]. Because $\operatorname{int}A$ has no trace, each component of $\operatorname{int}A\cap B_i$ is the interior, relative to $B_i$, of one of these regions. Choose one incident to an arc of $\gamma\cap B_i$ on its $A$ side, and denote its closure by $R$. This is an actual disk with corners. Its boundary consists of one or more whole arcs of $\gamma\cap B_i$ and intervals of $\partial B_i$. No other trace circle contributes to $\partial R$, by step1.1. Moreover every interval of $\partial R$ not on $\gamma$ lies in an attaching interval $J_{ij}$: the remaining parts of $\partial B_i$ are in $\partial Y_i$, whereas $A\subset\operatorname{int}Y_i$. The boundary of $R$ contains at least one trace arc by its choice. [given, step 1.1, F1, F2, construct]

3.1 If $\partial R$ contains just one trace arc $\beta$, its complementary boundary path lies in the disjoint union of the attaching intervals, hence in a single $J_{ij}\subset\partial B$. The disk $R\subset B$ therefore makes $\beta$ boundary-parallel in $B$, contrary to the second hypothesis. If $\partial R$ contains at least two trace arcs, join interior points on two different such arcs by a smooth embedded arc through $\operatorname{int}R$, using its actual disk parameter. Its interior misses $\Gamma\cup\partial B_i$, and both endpoint arcs belong to $\gamma$. This contradicts the third hypothesis. Both alternatives are impossible. Hence no trace circle misses all white disks. [given, step 2.1, F2, construct]

4.1 Each circle therefore contains at least one component arc of the white trace, and disjoint circles contain disjoint such arcs. Counting the finite nonempty sets of arcs on each circle gives $N\leq M$; when $M=0$ this also proves $N=0$. No choice of a representative arc from an infinite family is involved. [step 3.1, algebra]

5.1 Surgery along a chord on one circle has two outcomes obtained by joining the two complementary paths of that circle to the two sides of a thin chord rectangle. Both outcomes are circles, and all other circles are retained; thus the stipulated surgery increases $N$ by exactly one. At stage $r$ of the supplied sequence, $N_r=N_0+r$, while the unchanged white trace still has exactly $M$ arcs. Applying step4.1 at that stage gives $r\leq M-N_0$. An infinite sequence would have a prefix of length $M-N_0+1$, contradicting this bound. This proves the finite termination assertion, including the empty sequence and the case $M=N_0$. The geometric hypotheses must hold at every stage; they have not been inferred from the names of any isotopy moves. [given, step 4.1, construct, algebra] ∎
