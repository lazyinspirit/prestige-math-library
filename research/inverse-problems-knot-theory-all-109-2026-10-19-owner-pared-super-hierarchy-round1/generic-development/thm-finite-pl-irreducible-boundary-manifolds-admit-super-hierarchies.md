---
id: thm-finite-pl-irreducible-boundary-manifolds-admit-super-hierarchies
kind: theorem
title: "Finite PL irreducible boundary manifolds admit finite super hierarchies"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-finite-simplicial-three-manifolds-admit-coherent-waldhausen-handles
  - lem-normal-handle-cuts-strictly-decrease-finite-complexity
  - lem-superincompressible-cuts-admit-finite-coherent-handle-normalization
  - lem-irreducible-finite-pl-manifolds-admit-disk-allowed-superincompressible-cuts
  - lem-finite-pl-irreducible-manifolds-admit-finite-boundary-disk-decompositions
  - lem-finite-pl-two-sided-incompressibility-is-pi-one-injectivity
  - lem-finite-pi1-injective-surface-cuts-preserve-three-manifold-irreducibility
proof_strategy: strong-induction
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Michael Kapovich, Hyperbolic Manifolds and Discrete Groups"
      url: https://www.math.ucdavis.edu/~kapovich/RFG/book.pdf
      locator: "Definitions1.10–1.16 and Theorem1.17, printed3–4/PDF25–26, actual full passages read. The hierarchy assertion is stated there without proof; the finite construction below is local."
    - title: "Friedhelm Waldhausen, On irreducible 3-manifolds which are sufficiently large"
      url: https://homepages.math.uic.edu/~kauffman/Waldhausen.pdf
      locator: "Full§2, printed61–65, actual complete proof read; coherenthandle descent is supplied locally with disk and super-surface branches."
---

## Statement

Assume full AC. Let $M$ be a compact connected oriented PL three-manifold with nonempty boundary and a supplied finite simplicial manifold triangulation. Suppose every locally flat PL sphere in its interior bounds an interior parametrized PL ball. Then there is a finite sequence of cuts, each along a connected compact oriented two-sided properly embedded locally flat PL surface $F$ in one current component, ending in a finite disjoint union of parametrized PL balls. Every cutting surface has nonempty boundary, every boundary circle is essential in the boundary of its current component, and every cutting surface is superincompressible in this explicit disk-allowed sense:

* it is injective on fundamental groups and has no ordinary compressing disk;
* it has no boundary-compressing disk with essential proper surface arc;
* there is no embedded injective compressing annulus whose interior misses $F\cup\partial M$, whose inner end is an essential circle of $F$ not parallel to a boundary circle of $F$, and whose outer end lies on the current manifold boundary.

Essential disks are allowed cutting surfaces; their annulus clause is vacuous. When a nondisk surface is selected, the current component has the boundary-disk-ball property, and hence its inessential-arc boundary disks are relatively trivial by an actual ball isotopy. Thus nondisk cuts also satisfy the relative boundary-incompressibility convention, with the explicit essential-disk exception, used in Kapovich's definition.

All cut pieces remain irreducible and inject on fundamental groups into $M$. The two copies of each cutting face, their product collars and all face maps are retained, so the original manifold is recovered by the finite sequence of the prescribed pairwise gluings. The construction uses one initial coherent handle system and its cut descendants; the sum of the handle complexities over all current components strictly decreases after each cut. No supplied hierarchy is an input. No full pared axioms, peripheral marking theorem, or smooth-to-PL conversion is inferred.

## Facts & Assumptions

**Given:** The compact finite PL manifold, orientation, irreducibility and choice hypothesis in the Statement.

[F1] A supplied finite simplicial manifold triangulation gives actual coherent ball–beam–plate handles. A normal connected proper cutting surface that is not a boundary-parallel disk strictly decreases the nonnegative handle triple $(X,Y,Z)$, and the cut carries the induced handle and face parameters. [[lem-finite-simplicial-three-manifolds-admit-coherent-waldhausen-handles]] [[lem-normal-handle-cuts-strictly-decrease-finite-complexity]]

[F2] Essential disks have essential normal representatives, possibly in a different disk isotopy class. On an irreducible boundary-disk-ball piece, a connected nondisk injective boundary-incompressible surface with essential boundary admits normal position by ambient isotopy. [[lem-superincompressible-cuts-admit-finite-coherent-handle-normalization]]

[F3] On any compact connected oriented irreducible finite PL piece with a positive-genus boundary component there is a connected proper oriented surface with nonzero boundary homology, no ordinary or essential-arc boundary compression, no injective compressing annulus with inner end not boundary-parallel, essential boundary circles, and injective surface group. Essential disks are allowed. [[lem-irreducible-finite-pl-manifolds-admit-disk-allowed-superincompressible-cuts]]

[F4] In an irreducible piece a proper disk whose boundary bounds a disk in the boundary cobounds a parametrized ball with that boundary disk. A piece with a sphere boundary component is a parametrized ball. Essential disk cuts preserve irreducibility, and finite disk decompositions use the integer boundary weight $\sum\max(2g-1,0)$, including the separating-disk case. [[lem-finite-pl-irreducible-manifolds-admit-finite-boundary-disk-decompositions]]

[F5] Two-sided PL incompressibility is equivalent to fundamental-group injection, with the sphere convention stated in the criterion. Cutting along a finite family of injective two-sided proper surfaces preserves irreducibility and injects each piece group into the original group. [[lem-finite-pl-two-sided-incompressibility-is-pi-one-injectivity]] [[lem-finite-pi1-injective-surface-cuts-preserve-three-manifold-irreducibility]]

## Proof

1.1 Install the actual coherent handle system of [F1]. For a finite collection of current components let $\Phi$ be the entrywise sum of their triples $(X,Y,Z)$. Each entry is a nonnegative integer, including isolated zero-handles by the definition of $Z$. Cut-face collars and the inherited finite PL subdivisions give supplied finite triangulations for subsequent current components; this is only a record of the already cut finite geometry, not a replacement of its handle system. Initially the collection is $\{M\}$. [F1, given, construct]

2.1 Consider a current irreducible component $C$ which is not a ball. It cannot have a sphere boundary component by [F4]. All its boundary components are therefore positive-genus oriented surfaces. If $C$ has a proper disk with essential boundary, use the first branch of [F2] to select an actual essential disk $F$ in its current normal position. Its group is trivial, so its injection and absence of an ordinary compression are immediate. Every proper arc in a disk cuts off a disk, so the essential-arc boundary-compression condition is empty; no inner circle essential in a disk exists for a compressing annulus. This is the allowed disk branch, with no claim that the disk boundary is nonzero in homology. [F2, F4, F5, step 1.1, given, construct]

3.1 Otherwise every proper disk in $C$ has nullhomotopic boundary. [F4] then gives the full boundary-disk-ball property. Apply [F3] to obtain a connected surface $S$ with $[\partial S]\ne0$. It cannot be a disk: the boundary of every proper disk now bounds a boundary disk and has zero boundary homology. It is not a sphere, since it has nonempty boundary. It has all the compression, annulus and boundary properties required in the Statement. The second branch of [F2] takes $S$ by ambient isotopy to a normal $F$, preserving all these properties and its nonzero boundary class. For the stronger relative boundary-disk convention, an arc inessential in $F$ cuts off a disk on $F$; joining it to any proposed boundary-compression disk gives a proper disk in $C$. The boundary-disk-ball property and the empty-boundary-ball construction of [F2] make its disk replacement a relative boundary isotopy. Thus no relatively nontrivial such inessential-arc disk remains. Essential arcs were already excluded. [F2, F3, F4, step 2.1, given, construct]

4.1 In either branch $F$ is not a disk parallel to a disk in $\partial C$: its disk boundary is essential in the disk branch, and its boundary homology is nonzero in the nondisk branch. Apply [F1]'s strict-cut lemma in the actual current handle system. The component's inherited sum strictly decreases, and all other current components are unchanged; hence the whole $\Phi$ strictly decreases in lexicographic order. By [F5] the new components remain irreducible and their groups inject into $\pi_1(C)$. Orientations and two-sided product collars give their actual inherited PL face charts. Retain the two distinct labeled copies of $F$ and all its boundary collar faces. [F1, F5, step 2.1, step 3.1, given, construct]

5.1 Well-founded induction on $\Phi\in\mathbb N^3$ gives a finite sequence ending in balls. More explicitly, induct on its first entry; while that is fixed induct on the second, and while both are fixed induct on the third. If all components are balls stop. Otherwise choose one nonball component and apply steps2.1–4.1; the resulting finite component collection has strictly smaller $\Phi$, so the induction hypothesis supplies its finite continuation. Only finitely many components occur after one cut, and composing the one cut with that finite continuation gives a finite sequence. No bound on lower entries after a higher-entry decrease is assumed. If a nonball terminal component remained, steps2.1–4.1 would provide another strict cut, contradicting termination of this induction. [step 1.1, step 2.1, step 3.1, step 4.1, given, induction]

6.1 Fundamental-group injections compose along this finite sequence, and [F5] preserves irreducibility at each step. The selected surfaces have exactly the asserted properties by steps2.1–3.1 and transport under their normalizing isotopies. Each cut was splitting along a supplied product collar with distinct face labels. Re-identifying those paired faces by the recorded identity-in-original-coordinates map, in reverse order, recovers the preceding component, and finitely many such recoveries give $M$. Thus the hierarchy, finiteness, group injections and full topological gluing data have been constructed from the original input. No given hierarchy, pared cut axiom, relative marking theorem or arbitrary-manifold conversion has entered the proof. [F1, F5, step 2.1, step 3.1, step 4.1, step 5.1, given, construct] ∎

## Scope

This proves finite disk-allowed super hierarchy existence in the supplied PL category. Boundary annuli/tori can be carried as additional finite labels, but proving their required minimal placement, their square updates and the full pared axioms of all cut pieces requires actual additional arguments. Analytic gluing and relative marking remain separate interfaces.
