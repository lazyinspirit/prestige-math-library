---
id: lem-simultaneous-bridge-witnesses-can-avoid-a-compression-disk-system
kind: lemma
title: "Simultaneous bridge witnesses can avoid a compression disk system"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - thm-parametric-transversality
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Innermost-disk surgery; the simultaneous marked bridge-witness version is proved locally here"
---

## Statement

Assume Countable Choice. In a compact oriented smooth three-manifold $U$ with boundary, let $D_1,\ldots,D_m$ be disjoint smooth properly embedded compression disks, whose boundary tangencies are allowed. Let finitely many actual disjoint trivial arcs avoid these disks. Supply pairwise disjoint smooth embedded bridge witness disks for these arcs, with their other boundary intervals in $\partial U\setminus\bigcup_j\partial D_j$. The marked endpoints and all witness boundaries are therefore disjoint from every compression disk; their interiors need not be.

The witnesses can be replaced, keeping their ENTIRE boundary curves and a smaller boundary collar fixed, by simultaneous smooth bridge witness disks disjoint from all $D_j$. All marked points, actual arcs, bottom boundary intervals, orientation and pairing stay fixed. Any existing neat or transverse-corner witness parametrizations near the boundary are retained. The replacements require only finitely many interior perturbations and innermost-circle cap surgeries. No change to the attaching systems, compression disks or represented knot is required.

## Facts & Assumptions

**Given:** The actual compression disks, arcs and simultaneous bridge witnesses, with their disjoint boundary curves.

[F1] Finite-dimensional smooth parameter transversality holds under Countable Choice. Compactly supported smooth cutoffs exist. ([[thm-parametric-transversality]], [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]])

[F2] A nullhomotopic regular embedded circle on an oriented surface bounds an embedded compact disk region. For smooth input its disk-and-band construction gives a smooth parametrization with prescribed boundary collar. ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]], [[lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations]], smooth-input Proof7.1–12.1)

## Proof

**Given:** The data in the Statement.

1.1 The witness boundaries are compact and disjoint from the compression disks, so smaller full boundary collars of the witnesses also miss them. All possible intersections lie in a compact subset of the witness interiors and of $\operatorname{Int}U$. Perturb these interiors so that each witness meets every compression disk transversely, keeping those collars fixed. This is a finite application of [F1], with its local parameters explicit: cover possible intersections by finitely many interior coordinate charts and source cores; supported coordinate translations of a witness supply all target tangent directions on the cores. Their evaluation map is therefore transverse to each fixed disk. Parameter transversality chooses arbitrarily small parameters transverse simultaneously to the finite disk family. Small $C^1$ perturbations retain each embedding and simultaneous disjointness, by finitely many graph-injectivity charts and positive image separation outside them. The intersections are now finitely many disjoint smooth circles: they form a compact one-manifold without boundary, since its fixed boundary collars miss the disks; finitely many connected one-manifold charts give finitely many components. Every intersection component on a disk lies in its ordinary smooth interior, so its original boundary tangency is immaterial. [F1, given, construct]

2.1 If an intersection circle remains, choose one innermost on some $D_j$ among ALL witness intersections on that disk. It bounds a disk $\Delta\subset\operatorname{Int}D_j$ whose interior misses every witness. To obtain it, apply [F2] in the disk interior; its circles are a finite nested/disjoint family, so descend through the finite inclusion order until none lies inside. Its boundary circle $C$ lies on one witness $E_i$. By [F2] in the interior of that disk it bounds a subdisk $\delta\subset\operatorname{Int}E_i$. The whole boundary of $E_i$, including the actual arc and bottom interval, lies outside $\delta$. Replace $\delta$ by a small parallel push of $\Delta$, joined to the surviving $E_i$ collar along $C$ and smoothly rounded. The push is made on the side of $D_j$ occupied by that surviving collar near $C$; this side is constant around $C$, by transversality and the two-sidedness of the oriented disk $D_j$. In a crossing chart $C\times(-\eta,\eta)^2$ the two disks are the two coordinate planes. Removing the inner witness half and replacing it by the parallel disk half joins the two surviving rays by a rounded quadrant arc on that side, with no crossing of $D_j$. Thus this is an embedded smooth disk with the original witness boundary, rather than an immersed cap. [F2, step 1.1, construct]

3.1 Choose the push and its rounding small enough to meet no other witness or compression disk. Indeed $\operatorname{Int}\Delta$ misses ALL witnesses by the choice in step2.1; away from its boundary collar compact separation gives a positive allowed width. The other compression disks are disjoint from $D_j$, so their compact separation gives a positive width as well. In the boundary collar of $C$ the single coordinate-plane crossing and its rounded replacement give the required separation explicitly. The new cap misses the surviving portion of $E_i$ outside this collar, by the same compact separation; intersections of $\Delta$ with the removed $\delta$ no longer matter. Every intersection circle formerly lying in $\delta$ disappears, including $C$, and the new cap creates none. Thus the total finite number of intersection circles strictly decreases. All other witnesses are unchanged, and the replaced disk still witnesses the SAME actual arc and bottom interval. [F1, F2, step 1.1, step 2.1, construct]

4.1 Repeat the operation until the nonnegative intersection count reaches zero. Finiteness was proved in step1.1 and each operation strictly lowers it by step3.1, so the procedure terminates. Its supports are in witness interiors, away from the fixed full boundary collars. Consequently it retains every specified endpoint, orientation, arc, bottom interval and boundary parametrization, including any existing neat corner structure. The resulting simultaneous disks are disjoint from the whole compression family. After compression they therefore supply actual bridge witnesses in the corresponding cut components, missing their disk faces. Countable Choice enters only through [F1]–[F2]; the perturbations, cap choices and termination are finite. [F1, F2, step 1.1, step 2.1, step 3.1, construct] ∎
