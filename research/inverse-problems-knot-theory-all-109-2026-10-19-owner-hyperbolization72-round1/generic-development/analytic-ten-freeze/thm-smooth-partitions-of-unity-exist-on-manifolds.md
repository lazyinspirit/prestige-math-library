---
id: thm-smooth-partitions-of-unity-exist-on-manifolds
kind: theorem
title: "Smooth partitions of unity exist on manifolds"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-countable-choice, lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it, lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking, lem-manifold-bump-for-a-compact-set-inside-an-open-set, lem-normalizing-a-locally-finite-positive-smooth-family, def-smooth-partition-of-unity-subordinate-to-an-open-cover]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-08-receipts.jsonl (thm-smooth-partitions-of-unity-exist-on-manifolds). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$. Every open cover of a smooth manifold admits a smooth partition of unity subordinate to it.

## Facts & Assumptions

**Given:** Countable Choice ([[def-countable-choice]]), a smooth manifold $M$, and an indexed open cover $(U_j)_{j\in J}$ of $M$.

[L1] Under Countable Choice, the cover has an at-most-countable subordinate cover by relatively compact coordinate balls ([[lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it]]).

[L2] Under Countable Choice, such a cover has an at-most-countable locally finite shrinking indexed by a possibly finite or empty set $I$, with $\overline{W_k}\subseteq V_k\subseteq U_{j(k)}$ ([[lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking]]).

[L3] For every compact set inside an open set there is a smooth manifold bump equal to $1$ on a neighbourhood of that compact set and supported in the open set ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[L4] A locally finite nonnegative smooth family that is pointwise positive normalizes to a partition of unity ([[lem-normalizing-a-locally-finite-positive-smooth-family]]).

[A1] Countable Choice also selects one [L3] bump for each $k\in I$ when $I$ is infinite; finite choice handles a finite $I$, and no choice is needed when $I$ is empty.

## Proof

**Proof technique:** direct.

1.1 Apply [L1] and then [L2] to obtain an at-most-countable index set $I$, open sets $W_k$ and coordinate balls $V_k$ for $k\in I$ such that $M=\bigcup_{k\in I}W_k$, the family $(V_k)$ is locally finite, and each $V_k$ lies in a selected cover member $U_{j(k)}$. The set $I$ is allowed to be finite or empty. [L1, L2, given]

2.1 For each $k\in I$, [L3] gives a nonempty set of smooth functions $g_k:M\to[0,1]$ equal to $1$ near $\overline{W_k}$ and supported in $V_k$. Use [A1] to select one for each $k$. The family $(g_k)_{k\in I}$ is locally finite and pointwise positive because every point lies in some $W_k$. When $M$ is empty, $I$ may be empty and the partition claim is vacuous. [L3, A1, step 1.1, choose]

3.1 Normalize $(g_k)$ by [L4]; the resulting nonnegative smooth family $(\psi_k)_{k\in I}$ has locally finite supports, sums to one, and satisfies $\operatorname{supp}(\psi_k)\subseteq V_k\subseteq U_{j(k)}$ for every $k$. [L4, step 2.1]

4.1 To index the partition by the original cover as required by [[def-smooth-partition-of-unity-subordinate-to-an-open-cover]], put $\phi_j=\sum_{k\in I:\,j(k)=j}\psi_k$ for each $j\in J$. Every sum is locally finite and smooth; the family $(\operatorname{supp}\phi_j)_{j\in J}$ is locally finite, since near any point only finitely many $\psi_k$ have support. Nonnegativity and local finiteness give $\operatorname{supp}\phi_j=\bigcup_{k:\,j(k)=j}\operatorname{supp}\psi_k\subseteq U_j$, and $\sum_{j\in J}\phi_j=\sum_{k\in I}\psi_k=1$. Thus $(\phi_j)_{j\in J}$ is the required subordinate partition. [step 3.1, construct] ∎
