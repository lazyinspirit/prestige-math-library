---
id: thm-circle-rotation-is-ergodic-iff-angle-is-irrational
kind: theorem
title: Circle rotation is ergodic for Lebesgue measure exactly at irrational angles
deps: ["prop-circle-rotations-preserve-lebesgue-measure", "lem-irrational-circle-orbits-are-dense", "thm-ergodicity-and-invariant-functions", "thm-lebesgue-density-theorem", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: E–W Exercise 2.4.1 p.32; Proposition 2.16 conclusion
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assume countable choice. The circle rotation $R_\alpha$ is ergodic for Borel Lebesgue probability and for its completion if and only if $\alpha$ is irrational.

## Facts & Assumptions

[F1] All positive and negative powers of a rotation preserve either measure. [[prop-circle-rotations-preserve-lebesgue-measure]].

[F2] Integer powers of an irrational rotation move any center arbitrarily close to another. [[lem-irrational-circle-orbits-are-dense]].

[F3] Under countable choice, a positive measurable set has density-one points. [[thm-lebesgue-density-theorem]].

[F4] The strict invariant-set criterion is equivalent to the mod-null criterion. [[thm-ergodicity-and-invariant-functions]].

## Proof

**Given:** Assume countable choice. The circle rotation $R_\alpha$ is ergodic for Borel Lebesgue probability and for its completion if and only if $\alpha$ is irrational.

1.1 If $\alpha=p/q$ with integers p and q>=1, the set $A=\bigcup_{k=0}^{q-1}[k/q,k/q+1/(2q))$ is Borel, has measure $1/2$, and is permuted by R_alpha. Thus $R_\alpha^{-1}A=A$ and the rotation is not ergodic for either measure. This includes integral alpha with q=1. [F1, F4]

1.2 Now let alpha be irrational and let A be a strictly invariant measurable set. Suppose both A and its complement have positive measure. Choose density-one points a in A and c in its complement, different from the cut point zero. For sufficiently small $0<r<1/10$, the circle balls I=B(a,r), J=B(c,r) have length 2r and satisfy $\lambda(I\setminus A)<r/5$ and $\lambda(J\cap A)<r/5$. The ordinary density theorem applies because these small balls at the chosen points do not cross the cut. [F3, F4]

2.1 Choose an integer m with $d(R_\alpha^m a,c)<r/10$. Strict invariance and invertibility give $R_\alpha^mA=A$, and the rotated interval I has a portion outside A of measure less than r/5. Its intersection with J has length greater than $2r-r/10=19r/10$: both are radius-r arcs whose centers are less than r/10 apart. Subtracting the two exceptional portions, this intersection would contain points in both A and its complement on a set of measure at least $19r/10-2r/5=3r/2>0$, impossible. Thus every strict invariant A has measure zero or one, proving ergodicity. Together with step 1.1 this proves both directions. [step 1.2, F1, F2, F4, algebra] ∎

