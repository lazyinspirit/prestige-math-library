---
id: lem-simultaneous-surface-transversality-fixed-on-a-protected-closed-set
kind: lemma
title: "Simultaneous surface transversality fixed on a protected closed set"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family
  - thm-parametric-transversality
  - thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set
  - thm-isotopy-extension
  - lem-the-extended-time-dependent-field-has-a-global-time-one-flow
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from smooth perturbations, Sard transversality, smooth cutoffs, isotopy extension and flows. Only finitely many target surfaces are involved."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, transversality section, Corollaries 3.27–3.28 and Theorem 3.29; protected-set refinement supplied here"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Assume countable choice. Let $S$ be a compact smooth embedded surface without boundary in $S^3$, let $Z\subset S^3$ be closed, and let $T_1,\ldots,T_m$ be finitely many closed smooth embedded surfaces. Suppose $S$ is transverse to every $T_i$ on a neighborhood in $S$ of $S\cap Z$. Then there is a smooth ambient isotopy fixing a neighborhood of $Z$ pointwise whose final surface is transverse to every $T_i$. The induced isotopy of embeddings of $S$ may be taken arbitrarily close to the inclusion in the $C^1$ topology.

Thus protected surface patches and protected link points are unchanged when their original intersections with the target surfaces are already transverse. No transversality is asserted at a protected nontransverse intersection.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable choice, the compact surface, the protected closed set, the finite target family and the stated transversality near the protected intersection.

[F1] A smooth map into a boundaryless manifold has a finite-dimensional smooth perturbation family whose parameter derivative is surjective everywhere, under countable choice. ([[lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family]])

[F2] If an evaluation family is transverse to an embedded submanifold, its nontransverse slice parameters form a null set, under countable choice. ([[thm-parametric-transversality]])

[F3] A closed set in an open set admits a smooth cutoff equal to one near that closed set and supported in the open set, under countable choice. ([[thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]])

[F4] Every smooth isotopy of embeddings of a compact source into a boundaryless target extends to an ambient isotopy, under countable choice. ([[thm-isotopy-extension]])

[F5] A smooth compactly supported time-dependent field has a unique global flow, giving diffeomorphisms with inverse reverse flow, under countable choice. ([[lem-the-extended-time-dependent-field-has-a-global-time-one-flow]])

## Proof

1.1 Choose an open set $G\subset S$ on which all the required transverse conditions hold and containing the compact set $S\cap Z$. Inside $G$ choose a compact neighborhood $A$ of that intersection, by finitely many smaller coordinate disks; when the intersection is empty take $A=\varnothing$. By [F3] choose a smooth $\tau:S\to[0,1]$ equal to one near $S\setminus G$ and supported in $S\setminus A$. Replace it by its square if necessary. It vanishes near $A$, satisfies $d\tau=0$ wherever $\tau=0$, and every zero lies in $G$. Its support is compact and misses $Z$ as an ambient subset of $S$. [given, F3, construct]

2.1 Apply [F1] to the inclusion $i:S\hookrightarrow S^3$, writing its family as $\mathcal F(p,a)$ with $\mathcal F(p,0)=i(p)$. Put $G_a(p)=\mathcal F(p,\tau(p)a)$ for parameters in a sufficiently small ball about zero. Where $\tau>0$ the parameter derivative is surjective. Where $\tau=0$ we have $G_a=i$ and source derivative $di$, because $d\tau=0$; the inclusion is transverse to every $T_i$ there by step 1.1. Thus the evaluation family is transverse to every target. By [F2] a finite union of null parameter sets contains all bad slices. Every small open parameter ball has positive measure, so there is a good parameter arbitrarily close to zero. [step 1.1, F1, F2, construct]

3.1 Choose the parameter small enough that every $G_{ta}$, $0\le t\le1$, is an embedding and their moving track stays disjoint from $Z$. Here embedding stability follows directly from compactness: finitely many graph charts for $i$ have projected derivatives bounded below on smaller convex charts, preserving local injectivity and immersion under a small $C^1$ perturbation; source pairs outside a common small chart distance have a positive minimum image separation, preserving global injectivity under a small $C^0$ perturbation. The compact set $i(\operatorname{supp}\tau)$ misses closed $Z$, so sufficiently small perturbations of it stay separated from $Z$. Smooth dependence on $a$ gives uniform $C^1$ smallness for the whole segment $ta$. The resulting isotopy is stationary outside $\operatorname{supp}\tau$ and can have any prescribed $C^1$ smallness. [step 1.1, step 2.1, construct, choose]

4.1 Extend this embedding isotopy to an ambient isotopy $H_t$ by [F4], and let $Y_t=(\partial_tH_t)\circ H_t^{-1}$ be its velocity field. On each moving surface it agrees with $\partial_tG_{ta}$. Let $M$ be the compact track of $\operatorname{supp}\tau$; step 3.1 gives $M\cap Z=\varnothing$. By [F3] choose a smooth cutoff $\eta$ equal to one near $M$ with support disjoint from $Z$. Replace $Y_t$ by $X_t=\eta Y_t$ and take its flow using [F5]. At points of $G_{ta}(S)$ this field still equals the prescribed velocity: on the support track $\eta=1$, and outside it that velocity was zero. By uniqueness the new flow therefore extends the same surface isotopy. Its field vanishes on a neighborhood of $Z$, since its compact support misses $Z$, so it fixes that neighborhood pointwise. [step 3.1, F3, F4, F5, construct]

5.1 The final slice is transverse to every target by the good-parameter choice in step 2.1, the protected neighborhood is fixed by step 4.1, and the surface isotopy has the arbitrarily prescribed $C^1$ smallness of step 3.1. If $m=0$ or $S$ is empty the identity isotopy already suffices, also consistent with the construction. [step 2.1, step 3.1, step 4.1] ∎
