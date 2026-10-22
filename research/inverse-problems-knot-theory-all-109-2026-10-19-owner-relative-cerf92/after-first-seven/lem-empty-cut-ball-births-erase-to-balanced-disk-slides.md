---
id: lem-empty-cut-ball-births-erase-to-balanced-disk-slides
kind: lemma
title: "Empty cut-ball births erase to balanced disk slides"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - def-admissible-pointed-heegaard-floer-data
  - lem-marked-planar-cut-surface-regions-are-realized-by-disk-slides
  - lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms
  - thm-collar-neighborhood-theorem
  - thm-isotopy-extension
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "Proposition2.2, Lemma2.3 and Lemma2.4, printed6–7, elimination of additional zero/three handles via extended attaching systems; the rooted marked-forest version is proved here"
---

## Statement

Assume Countable Choice. Let $U$ be a connected handlebody with a fixed system of $k\ge1$ disjoint actual trivial knot arcs and marked endpoints on its boundary. An extended compression system here means finitely many disjoint proper disks cutting $U$ into $k$ balls containing one of these arcs each, with simultaneous disjoint boundary-parallelism disks, and $e\ge0$ additional empty balls. No cut ball contains two arcs. All disk boundaries avoid the endpoints.

Form its finite dual graph, with a vertex for each cut ball, an edge for each disk, and the $k$ occupied vertices distinguished. Choose a forest containing every vertex and with exactly one distinguished vertex in each tree. Deleting the compression disks corresponding to its edges gives a balanced compression system with exactly $k$ marked one-arc balls. Such forests always exist. Any two resulting balanced compression systems are related by finitely many disk slides and isotopies avoiding all marks and preserving the actual arcs and their simultaneous bridge disks.

Consequently a finite sequence of extended-system isotopies, disk slides, and insertions or removals of a boundary-parallel disk splitting off an empty ball induces a finite sequence of balanced-system isotopies and disk slides between any chosen forest reductions at its endpoints. The input sequence is supplied, not asserted to exist. Applied to either side of a knot diagram, this erases empty index-zero/index-one births and their dual index-two/index-three births from that supplied disk-move sequence. No isolated marked knot component is created, no mark is inserted, and the other system stays fixed. This is an erasure of empty births; births involving a new marked pair require their actual separate MOS local model.

## Facts & Assumptions

**Given:** The extended disk system and its cut balls, actual arcs, bridge disks, and, for the last assertion, a finite supplied sequence of extended moves of the stated kind.

[F1] [[def-admissible-pointed-heegaard-floer-data]] specifies the balanced disk and arc conditions sought after reduction.

[F2] [[lem-marked-planar-cut-surface-regions-are-realized-by-disk-slides]] supplies the actual finite slides across an empty planar region and their balanced disk/arc preservation proof. The proof supplies the empty two-face cap transfer for each individual slide; the two faces of a repeated disk may be processed in separate slides, with distinct moving and retained labels in each slide.

[F3] Smooth disk and collar identifications and supported isotopies are available under Countable Choice ([[lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms]], [[thm-collar-neighborhood-theorem]], [[thm-isotopy-extension]]).

## Proof

1.1 The dual graph is connected, because regluing disk faces in different graph components cannot connect them, whereas $U$ is connected. Identify its $k$ distinguished vertices to a single root vertex. The resulting finite graph is connected, so it has a spanning tree: start at the root and repeatedly add an edge reaching a vertex not yet reached until all vertices have been reached. Lift these edges to the original graph. They contain no cycle, since any original cycle would remain a cycle after root identification. Nor can one lifted component contain two distinguished vertices, since a path between such vertices would give a cycle in the quotient tree. Every vertex belongs to a component meeting a distinguished vertex, because its unique quotient-tree path to the root lifts to a path ending at one of those vertices. Thus the lift is the required rooted forest, with exactly $e$ edges. Deleting its disk edges reglues the cut balls along disk faces in this forest. A tree of balls glued along disks is a ball: remove a leaf and absorb its ball through the attaching disk, using a disk collar; repeat finitely. Each such ball contains precisely its root arc. Its original bridge disk remains a bridge disk after these gluings, since no disk face meets it. Therefore the retained disks give the claimed balanced compression system. [F1, F3, given, construct]

2.1 Any two quotient spanning trees are connected by elementary edge exchanges. If $T\ne T'$, choose $b\in T'\setminus T$; adding $b$ to $T$ gives a unique cycle. That cycle has an edge $a\in T\setminus T'$, since otherwise $T'$ would contain the whole cycle. Replacing $a$ by $b$ gives another tree and increases the number of edges shared with $T'$. Repeat. For one lifted exchange, deleting $a$ from the original rooted forest detaches a tree component $C$ with no distinguished vertex. The new edge $b$ joins $C$ to the rest, possibly at a different distinguished-root component. Glue the empty balls at vertices of $C$ along their internal forest edges. By step1.1 the result is an empty ball $E$. Its boundary has one face for $a$, one face for the incidence of $b$ into $C$, and the faces of all other retained disks incident to $C$. The other face of $b$ is outside $C$. Other disks may have both faces in $E$. No marked point or actual knot arc lies in $E$. [F1, F3, step 1.1, construct]

3.1 In the current forest reduction, $a$ was deleted, so $E$ is attached through its $a$ face to one occupied root ball. The retained $b$ face and all its other retained disk faces lie on the boundary of this empty cap. The part of $\partial E$ outside the $a$ face is a disk with these faces removed and contains no marked point. Slide the retained disk $b$ successively over every other incident retained face, always using a band in this planar empty-cap region. Each individual band is supplied by [F2]: take a disk neighborhood of the current $b$ face and the next face joined by a thin arc missing all remaining faces. The cap transfer replaces those two holes by the single new $b$ hole, decreasing the number of other face holes by one. If a disk has both faces in the region, use the two faces successively; at each individual slide its label differs from the anchor label $b$. The boundary of this local band sum replaces two inner face rims by their merged rim; the rest of the planar region is unchanged, so it leaves an empty residual planar cap even when the opposite face of the retained disk lies in the same cut ball. At the end only the boundary $a$ and the new $b$ boundary remain; they cobound an empty annulus, so the final isotopy takes the new $b$ boundary to $a$. The new disk is parallel to the original $a$ disk across the remaining empty ball: the boundary-sum caps and the $a$ face are its two complementary boundary disks, with the annulus between them. A product collar isotopy in this empty ball identifies the disks themselves. All operations miss the actual arcs and marks and preserve their bridge data by [F2]–[F3]. The result replaces the retained disk $b$ by $a$, exactly the disk complement of the exchanged forest. Step2.1 now proves independence of the chosen forest reduction. [F2, F3, step 1.1, step 2.1, construct]

4.1 Consider a single extended disk slide replacing $D_b$ by a boundary sum $D_b'$ with a parallel of another disk $D_c$. The old disks and $D_b'$ can be chosen simultaneously disjoint: use a separate thin parallel copy of $D_c$, a band collar, and a small parallel displacement from $D_b$. On cutting along all old disks, $D_b'$ is a disk parallel to the boundary cap enclosing the $D_b,D_c$ faces and their band. That cap misses all marks and actual arcs. Adding $D_b'$ therefore refines one cut ball by splitting off one empty ball, leaving the occupied arc, if present, in the other ball. The union system is an extended compression system. Removing $D_b'$ recovers the old system, and removing $D_b$ recovers the slid system. For either removal the two adjoining cut balls merge along one disk to the old cut ball; this merging edge cannot join two occupied balls, since the old system has at most one arc in each ball. Hence any chosen rooted forest of the old or slid system lifts to a rooted forest of this common refinement by adding the removed edge. Step3.1 relates the two lifted forest reductions by balanced slides. This proves the assertion for an extended slide, including slides supported in an empty cut ball. [F2, F3, step 2.1, step 3.1, construct]

5.1 An insertion splitting off an empty ball is already precisely such a refinement. A forest reduction of the old system lifts by including its new disk edge; any reduction of the new system is related to that lift by step3.1. Deletions reverse this argument. An extended disk isotopy transports its chosen forest and reductions, giving the corresponding balanced isotopy; if the supplied end reduction is different, use step3.1 there. Concatenate these finite balanced sequences for the supplied finite list of extended moves. In a full knot diagram, each slide changes only the selected compression system; transverse perturbations against the other system are included in [F2]. The actual arcs, all marks and their pairing were preserved, so every reduced full diagram remains balanced with the same oriented knot. An empty zero-handle joined by its cancelling one-handle produces exactly an empty cut ball and its separating disk; the dual description on the upper handlebody gives the same empty-ball insertion for a two/three pair. These are therefore erased by the construction just proved whenever they occur in the supplied extended disk path. No global Morse or trajectory-family existence was inferred. All graph arguments and constructions were finite, with Countable Choice used only through [F2]–[F3]. [F1, F2, F3, step 1.1, step 3.1, step 4.1, construct] ∎
