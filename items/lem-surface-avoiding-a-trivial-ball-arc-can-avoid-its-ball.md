---
id: lem-surface-avoiding-a-trivial-ball-arc-can-avoid-its-ball
kind: lemma
title: "A surface avoiding a trivial ball arc can avoid its ball"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-trivial-ball-arc-with-a-marked-boundary-window-is-standard
  - thm-neat-submanifolds-have-boundary-adapted-slice-charts
  - thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set
  - lem-the-extended-time-dependent-field-has-a-global-time-one-flow
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from marked arc standardization, cutoffs and smooth flows. The finite-ball assertion is a finite composition."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology, Chapter 1, printed p.3, ball shrinking and disk-window operations; relative arc version supplied here"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
---

## Statement

Assume countable choice. Let $L\subset S^3$ be a smooth link, and let a smooth closed ball $W$ meet it in a single neat proper boundary-parallel arc $a$, with a boundary-parallelism disk supplied. Let $\Sigma\subset S^3$ be a compact smooth surface disjoint from $a$. In every prescribed open neighborhood of $W$ there is a supported smooth ambient isotopy fixing $L$ pointwise whose final surface is disjoint from $W$.

The same conclusion holds for finitely many pairwise disjoint such balls when $\Sigma$ misses every captured arc; their isotopies can have disjoint support neighborhoods. In particular, a two-point decomposing sphere whose punctures avoid these balls can be moved off all of them while retaining its punctures and the nontriviality of its two side tangles.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable choice, the smooth link, ball with supplied trivial-arc witness, compact surface avoiding that arc and the allowed support neighborhood.

[F1] A ball containing a supplied boundary-parallel proper arc is diffeomorphic to a round ball with diameter; the marked-window assertion also retains the endpoint order. ([[lem-trivial-ball-arc-with-a-marked-boundary-window-is-standard]])

[F2] Neat proper arcs and ambient boundaries have simultaneous half-space slice charts. ([[thm-neat-submanifolds-have-boundary-adapted-slice-charts]])

[F3] Smooth cutoffs exist under countable choice. ([[thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]])

[F4] A compactly supported smooth field has a unique global smooth flow on a compact time interval, whose inverse evolution is smooth; a field zero on a set fixes it pointwise. ([[lem-the-extended-time-dependent-field-has-a-global-time-one-flow]])

## Proof

1.1 Choose a standard pair diffeomorphism from [F1], taking $W$ to the unit ball and $a$ to its vertical diameter. Its coordinates extend to a neighborhood of the closed ball and can retain the continued link as the vertical axis near both endpoints. Here is the relative extension detail. Smooth coordinate functions extend locally across the boundary by their boundary-smoothness convention; finite boundary charts patch them to an extension agreeing with the original coordinates on $W$. At either endpoint use [F2] for the continued arc. Any transverse coordinate error on its exterior axis has all jets zero at the endpoint, since the interior axis already has zero transverse coordinates. Subtract those exterior-axis errors with an axis cutoff; the correction is smooth across the endpoint and zero on $W$. The differential remains invertible on a sufficiently small extension, and compactness excludes new collisions after a common shrink. The rest of $L$ is separated from $W$, so the extension neighborhood may meet it only in this diameter and its short continued endpoint arcs. It may also lie in the prescribed neighborhood. [given, F1, F2, construct]

2.1 In these coordinates put $F_t(x,y,z)=(\rho(t)x,\rho(t)y,z)$, where $\rho$ decreases smoothly from $1$ to a positive $r$. Every slice embeds the unit ball and fixes its diameter. As $r\to0$ the final ellipsoid is contained in any prescribed neighborhood of that compact diameter: its transverse radius is at most $r$. The compact set $\Sigma\cap W$ misses the diameter, so choose $r>0$ small enough that this ellipsoid is disjoint from $\Sigma$. This uses only separation of two compact sets, not a collapse at $r=0$. [step 1.1, construct, choose]

3.1 Realize the contraction by an ambient link-fixed field. In the extension neighborhood take $X_t=(\rho'(t)/\rho(t))(x\partial_x+y\partial_y)$ and multiply by a cutoff equal to one near the closed unit ball and supported in that neighborhood, using [F3]. Extend it by zero to $S^3$. The field vanishes on the vertical axis and elsewhere its support misses $L$, so it fixes the whole link pointwise. The trajectories $F_t(x,y,z)$ of points in the unit ball stay inside it and solve this field's equation. By [F4] the ambient flow $H_t$ therefore satisfies $H_t(W)=F_t(W)$. In particular $H_1(W)$ misses $\Sigma$ by step 2.1. [step 1.1, step 2.1, F3, F4, construct]

4.1 Use the inverse ambient isotopy $H_t^{-1}$. It starts at the identity, fixes $L$ pointwise and has the same support neighborhood. Its final surface misses $W$, since $H_1^{-1}(\Sigma)\cap W=H_1^{-1}(\Sigma\cap H_1(W))=\varnothing$. For finitely many disjoint balls choose disjoint support neighborhoods and apply these inverses successively; earlier avoided balls remain unchanged by later motions. A link-fixed ambient isotopy transports every side tangle and boundary-parallelism disk, so it retains both nontriviality and the original punctures. [step 2.1, step 3.1, F4, construct] ∎
