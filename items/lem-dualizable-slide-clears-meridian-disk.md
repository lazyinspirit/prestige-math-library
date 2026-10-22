---
id: lem-dualizable-slide-clears-meridian-disk
kind: lemma
title: "A dualizable link can slide off a meridian disk"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-dualizable-handle-link
  - def-countable-choice
  - def-handle-slide-of-one-k-handle-over-another
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Lisa Piccirillo, The Conway knot is not slice"
      url: "https://arxiv.org/pdf/1808.02923"
      locator: "Theorem 3.1 proof, §3, arXiv v1 PDF p. 4, finite slides removing intersections with $D_R$"
    - title: "Jennifer Hom, Getting a handle on the Conway knot"
      url: "https://arxiv.org/pdf/2107.09171"
      locator: "§§5–6, handle and shared-trace background; the disk-clearing slide construction is in Piccirillo's Theorem 3.1 proof"
---

## Statement

Assume countable choice. Let $(B,G,R)$ be a dualizable framed handle link, and
isotope $R$ to an unknot bounding a disk $D_R$ that meets $B$ transversely in
one point. Then there is a finite sequence of slides of the $2$-handle $G$ over
the $2$-handle $B$, together with link isotopies, after which the attaching
circle for $G$ is disjoint from $D_R$.

## Statement references

[Piccirillo, Theorem 3.1 proof](https://arxiv.org/pdf/1808.02923)

[Hom, §§5–6, handle and shared-trace background](https://arxiv.org/pdf/2107.09171)

## Facts & Assumptions

**Given:** Countable choice, a dualizable handle link, and the stated spanning disk $D_R$.

[A1] Countable choice, written $\mathrm{AC}_\omega$, is [[def-countable-choice]].

[F1] [[def-dualizable-handle-link]]: both $B\cup R$ and $G\cup R$ are meridional pairs; $B$ and $G$ are zero-framed $2$-handle attaching circles, while $R$ is dotted and represents a $1$-handle.

[F2] [[def-handle-slide-of-one-k-handle-over-another]]: a slide of $G$ over $B$ replaces its attaching circle by a band sum with a signed framed parallel copy of $B$.

## Proof

1.1 Let $q$ be the unique point of $B\cap\operatorname{int}D_R$, and put the current attaching circle $G$ transverse to $D_R$. Its intersection set is finite: it is a compact zero-dimensional transverse submanifold, disjoint from $\partial D_R=R$. If it is empty there is nothing to do. Otherwise choose $p\in G\cap\operatorname{int}D_R$. A sufficiently close framed parallel $B'$ of $B$ is disjoint from $B\cup G\cup R$ and meets $D_R$ once, at a point $q'$ close to $q$. Indeed near $q$ the transverse arc $B$ has product coordinates in which $D_R$ is $z=0$ and $B$ is a vertical interval; choose the parallel's displacement there tangent to the disk. Away from this coordinate ball the compact sets $B$ and $D_R$ are disjoint, so a sufficiently small parallel creates no other intersection. The displacement can be interpolated in the framed normal disk bundle without changing the prescribed parallel's framing. [A1, F1, F2, given, choose, construct]


2.1 Orient the signed parallel $B'$ so that its intersection sign with $D_R$ at $q'$ is opposite to the sign of the intersection of $G$ with $D_R$ at $p$. Reversing the orientation of the parallel changes this sign without changing its underlying framed curve, and [F2] permits either signed parallel. Join $p$ to $q'$ by a smooth embedded arc $a$ in $\operatorname{int}D_R$ whose interior misses $G\cap D_R$, $q$, and $q'$. Such an arc is obtained by a polygonal path in the disk minus the finitely many forbidden points, removing loops in its finite subdivision and smoothing its corners in small disjoint disks. A thin strip about $a$ misses the remaining intersections and $B$. Choose the strip's normal product neighborhood so that the short branches of $G$ at $p$ and the chosen oriented $B'$ at $q'$ are vertical, while its interior misses all three retained components. In its positive side, join short intervals of these vertical branches by an embedded band running just above $a$. Give the band its product framing and choose the band-end coordinates by the full seam convention in [F2], so its orientation extends the orientation of $G$ over the selected signed parallel. Band summing $G$ with this $B'$ is therefore an allowed slide over $B$. [F2, step 1.1, choose, construct]


3.1 One of the new band-sum arcs runs along one edge of the band between $p$ and $q'$. Together with a parallel of $a$ in $D_R$, it bounds an embedded product disk in the positive half-neighborhood. Of the two endpoints, one has positive intersection sign and the other negative sign. Orienting this arc from the positive-sign crossing to the negative-sign crossing, it enters the positive side of $D_R$ at the first endpoint and exits at the second; thus the entire arc lies on the positive side. Its interior misses the slid circle and the retained components: the other edge of the band is chosen on the opposite transverse side of this disk, and the rest of $B'$ and $G$ misses the neighborhood. Push this arc across the disk and slightly into the negative side of $D_R$, rounding its ends. In strip coordinates this replaces the arch above $z=0$ joining the two opposite-sign intersections by an arc below $z=0$; extend the motion to its thin tubular neighborhood. This is a link isotopy supported away from $B\cup R$. It removes precisely $p,q'$ and creates none, while all old intersections away from $p$ persist. Thus a slide followed by this isotopy changes $|G\cap D_R|$ from $N$ to $N+1-2=N-1$. Transport the attaching framing by this isotopy. [F2, step 2.1, construct, algebra]


4.1 Repeat steps 1.1–3.1 for the current attaching circle whenever an intersection remains. Each new parallel and strip can be chosen sufficiently thin for that finite stage, and the fixed $B,R,D_R$ are retained. The nonnegative integer intersection count drops by one at every stage, so after exactly the original number of intersections the current attaching circle is disjoint from $D_R$. The resulting finite sequence consists solely of the permitted framed slides and link isotopies and proves the full statement. [A1, F1, F2, step 1.1, step 3.1, induction, construct] ∎
