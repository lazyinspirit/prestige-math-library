---
id: lem-closed-normal-subdiagrams-inherit-strict-irregular-disk-improvement
kind: lemma
title: Closed normal subdiagrams inherit strict irregular disk improvement
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams
  - lem-triangular-normal-arcs-admit-braid-position-stable-under-partial-regular-switches
  - lem-irregular-switches-in-original-face-braids-give-strict-essential-disk-improvement
  - lem-essential-pl-disks-admit-normal-replacements
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Wolfgang Haken, Theorie der Normalflächen, Acta Mathematica105
        (1961),245–375
      url: https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5921-11511_2007_Article_BF02559591.pdf
      locator: Hauptsatz4 and Satz8, printed pp.356–366. The restriction to actual
        original-triangulation parametrizing components and its own edge weight
        is proved below.
dependency_level: 5
---

## Statement

Take an actual original-triangulation regular normal diagram, retaining its face braids after any preliminary whole-curve regular switches. Choose a nonempty union $S$ of whole components of its parametrizing normalization. Assume every remaining double curve incident to $S$ has both branches in $S$. Retain its geometric strands, tetrahedral disk pieces and remaining double curves, and write $W_S$ for the total number of its original edge-intersection points, counted on those parametrizing components.

Resolve any selection of these remaining curves regularly or irregularly. If at least one irregular switch is made, and the resulting normalization has a component whose image is an embedded proper disk with essential boundary in $\partial M$, then the original triangulation contains an essential normal disk of weight strictly less than $W_S$.

The chosen $S$ may be a single immersed parametrizing component with self-double curves; no partition of it into two globally embedded normal families is assumed. The closure condition concerns the actual remaining double curves, not merely a selection of tetrahedral disk types.

## Statement references

[[lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams]] — actual retained normal-disk diagrams and their parametrizing normalization.

[[lem-irregular-switches-in-original-face-braids-give-strict-essential-disk-improvement]] — the first-turnback argument for the whole original diagram.

## Facts & Assumptions

**Given:** The retained original face-braid diagram and the closed union $S$ of its parametrizing components, with its specified subsequent switches and embedded essential disk component $P$.

[F1] Every preliminary regular resolution retains embedded normal tetrahedral disk pieces and, in each face, embedded parametrizing arcs consisting of one central chord and two distinct monotone outer strips. All remaining crossings occur in those strips; their regular reconnection is outer-to-gate, and the irregular one joins the two outer branches and the two gate branches. ([[lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams]], [[lem-triangular-normal-arcs-admit-braid-position-stable-under-partial-regular-switches]])

[F2] Essential PL disks admit finite normal replacements componentwise nonincreasing on the original edges. The preparation fixes face curves until the tetrahedral pieces are disks, except for discarding components; an embedded face arc returning to the same edge then supplies a bigon removing two edge intersections while retaining an essential disk. ([[lem-essential-pl-disks-admit-normal-replacements]], [[lem-irregular-switches-in-original-face-braids-give-strict-essential-disk-improvement]])

## Proof

1.1 The restriction is an actual retained strand diagram. Every face parametrizing arc and every tetrahedral parametrizing disk piece belongs wholly to one component of the current normalization. Selecting whole components thus deletes whole such arcs and pieces. At a remaining double curve either both branches are retained or both are deleted, by the closure hypothesis. Consequently there is no cut strand or crossing with only one branch: the remaining two-branch crossings have exactly their former strip coordinates and regular or irregular local pairings. The selected monotone face arcs still run from their original edge endpoints to their original central gates; deleting other arcs does not change those paths. Face matching and all tetrahedral disk gluings are inherited. The retained normalization can be immersed globally, but its tetrahedral disk pieces and face parametrizing arcs have the properties [F1]. [given, F1, construct]

2.1 All switching neighborhoods miss the original edges, so the edge weights of the resulting parametrizing components sum to $W_S$. If $w(P)<W_S$, [F2] already gives the desired normal essential disk. Otherwise $w(P)=W_S$, and every retained edge point lies on $P$. Choose a face crossed by an irregularly switched curve; such a face exists because every double curve is made of tetrahedral arcs joining distinct faces. In one of its strips order the finitely many crossing neighborhoods from the outer edge towards the gate, perturbing equal horizontal coordinates along monotone strands if necessary. At the first irregular reconnection, each incoming branch follows a monotone parametrizing strand to a distinct retained endpoint on that edge: earlier unswitched crossings retain separate branches, and earlier regular switches pair outer branches to gate branches. The irregular reconnection joins these two incoming branches. It creates a parametrizing arc returning to that same original edge. Later reconnections lie farther towards the gate and cannot affect the return arc. This argument is entirely inside the retained strands of step 1.1; it does not require their current global components to be embedded or to have two different family labels. [F1, F2, step 1.1, construct, cases]

3.1 In the equality case both endpoints of the return arc lie on $P$. The entire parametrizing arc therefore lies on $P$, and its image is embedded because $P$ is embedded. Normalize $P$ by [F2]. If any preliminary discard or move removes an edge intersection, the normal replacement already has weight less than $W_S$. Otherwise those preparations retain the return arc, since its two endpoints remain and its face curve is fixed. When all tetrahedral pieces are disks, its edge bigon removes two edge intersections; for a boundary-edge compression the total output weight falls by two and at least one output disk has essential boundary, so retain that disk. Subsequent moves do not increase weight. The final essential normal disk consequently has weight strictly less than $W_S$ in either case. This proves the claimed restriction of the first-turnback argument, including the single immersed-component case. [given, F2, step 1.1, step 2.1, construct, cases] ∎
