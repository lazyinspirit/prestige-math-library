---
id: lem-core-face-chords-of-disk-pieces-give-supported-circle-splittings
kind: lemma
title: "Core-face chords of disk pieces give supported circle splittings"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations
  - lem-jordan-schoenflies-extension-for-plane-curves
  - lem-choice-free-isotopy-extension-for-a-compact-smooth-source
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the Jordan-disk and finite smooth disk-parameter suppliers. The actual parallel disk and graph push use finite compact collars."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Definition3.10 and footnote38, PDF p.21, Figure19 p.22; local core-face construction supplied here"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

Assume full AC. Let $H$ be a supplied smooth closed ball in a smooth three-manifold without boundary, with boundary sphere $S$. Let $F$ be a compact smooth embedded surface transverse to $S$, with boundary disjoint from $H$. Assume all components of $F\cap H$ are proper disks, and supply actual compatible smooth ball parameters, with face collars and corner roundings, for the closures of the components of $H\setminus F$. Put $\Gamma=F\cap S$. Let $\alpha\subset S$ be an embedded arc whose interior misses $\Gamma$, whose endpoints lie transversely on the same circle $\gamma\subset\Gamma$, and which is otherwise disjoint from $F$. Let $G$ be a compact obstacle disjoint from $\operatorname{int}H\cup\alpha$.

Then the disk $\Delta\subset F\cap H$ bounded by $\gamma$ contains a proper arc $\beta$ with the same endpoints as $\alpha$, and $\alpha\cup\beta$ bounds an embedded disk $X$ whose interior lies in one cut-ball component and misses $F\cup G$. There is a smooth ambient isotopy supported near $X$, fixing $G$ and $\partial F$, that pushes a narrow strip of $F$ about $\beta$ across $X$ and past $\alpha$. It leaves all other upper disk pieces unchanged and replaces $\Delta$ by two proper disks in $H$. On $S$ it replaces $\gamma$ by its two-circle surgery along $\alpha$; all other trace circles are unchanged. Hence $|F\cap S|$ increases by exactly one.

The isotopy and the replacement statement are about this supplied smooth ball and disk-piece configuration. No preservation of a separate crossing-ball normal form or a chosen hierarchy of diagram moves is asserted.

## Statement references

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The ball, transverse smooth surface, disk pieces, actual cut-ball parameters, chord and compact obstacle in the Statement.

[F1] A regular Jordan circle in a sphere bounds two disk regions; this follows by a disk chart or stereographic projection. ([[lem-jordan-schoenflies-extension-for-plane-curves]])

[F2] The finite smooth disk-normalization proof supplies disk parameters with prescribed smooth boundary arcs and collars, including finitely many corners. Smooth-input chart extensions and a sufficiently thin normal collar give compatible coordinates around a compact embedded disk. ([[lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations]], Proof7.1–12.1)

[F3] A smooth embedding isotopy of a compact source, stationary near its time endpoints, extends to a smooth ambient isotopy supported in any prescribed open neighborhood of its compact track. ([[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]])

[F4] Full AC implies countable choice for the smooth suppliers. ([[thm-choice-implies-dependent-implies-countable-choice]])

## Proof

1.1 The interior of $\alpha$ belongs to one component of $S\setminus\Gamma$, and faces one cut-ball $K$. Both ends face the same copy of $\Delta$ on $\partial K$. Indeed, $\gamma$ separates $S$ by [F1], so the chord approaches both ends from the same side of $\gamma$. Along the boundary of a proper disk the two sides of that circle correspond to its two disk faces: orient the disk and use its continuous normal to distinguish them. This identification is constant along $\gamma$, and the chosen component of $S\setminus\Gamma$ remains on one face. Using a smooth parameter of $\Delta$, join the chord endpoints by a proper embedded arc $\beta$ whose endpoint tangents are transverse to $\gamma$. On $\partial K$, the two arcs $\alpha$ and $\beta$ now form an embedded circle with two corners. It bounds a disk region $R$ by [F1]; use the supplied boundary-sphere chart and [F2] for its smooth corner parameter. Push the interior of $R$ into $K$ using its inward collar, keeping the boundary fixed and positive collar height at every interior point. This yields the disk $X$ with interior disjoint from all boundary faces, hence from $F$. It misses $G$, since its interior is in $\operatorname{int}H$ and its boundary lies in $\alpha\cup\beta$, also disjoint from $G$. [given, F1, F2, F4, construct]

2.1 Here is a local smooth model for the strip push, including its two end neighborhoods. Parametrize the bigon $X$ so its edges are $r=0$ and $r=h(s)$ for $0\leq s\leq1$, where $h>0$ on $(0,1)$, $h(0)=h(1)=0$, and both endpoint zeros are simple. The first edge is $\beta$ and the second $\alpha$. The transverse end collars and [F2] extend this to coordinates $(s,t,r)$ on a thin neighborhood of $X$: $F$ is $r=0$ near $\beta$, and $S$ is $r=h(s)$ near $\alpha$. The two edge prescriptions are compatible at their transverse corners; in their two-dimensional tangent plane they are the two sides of the bigon, while $t$ is the transverse coordinate. Extend $h$ negatively just beyond its two simple zeros. Shrink the coordinate neighborhood so it contains no other sheet of $F$, and no other sheet of $S$ beyond that prescribed graph; compactness of the disk and injectivity of its collars permit this. A slight extension past $r=h(s)$ remains disjoint from the compact obstacle and $\partial F$. Choose a nonnegative smooth $q(s)$ supported in this extended interval, with $q(s)>h(s)$ on $[0,1]$, and so close to $h$ on the positive interval that its graph lies in the chosen slight extension. Choose an even smooth cutoff $\chi(t)$, equal to one on a smaller central strip, zero outside a slightly larger strip, and strictly decreasing between those two strips for $t>0$. Replace $F$ there by the graphs $r=u q(s)\chi(t)$, $0\leq u\leq1$. They agree with the fixed surface on the outside collars and remain embeddings because they are graphs in a neighborhood containing no other sheet. This is a smooth embedding isotopy of the entire surface, supported near the actual disk, and its track misses $G\cup\partial F$. [step 1.1, F2, construct]

3.1 At the final time, the new intersection with $S$ satisfies $\chi(t)=h(s)/q(s)$. For $0<s<1$ the right side lies strictly between zero and one, so it gives exactly two arcs, on the two transition strips $t>0$ and $t<0$. Near either endpoint the implicit function theorem applies using the nonzero derivative of $h$ there, so each arc joins smoothly to the unchanged traces beyond the strip. These are exactly the two copies of $\alpha$ joining the cut ends of the two complementary paths of $\gamma$. They form two circles. In $H$, the strip along the proper arc $\beta$ has been removed from $\Delta$; the retained pieces are its two disk sides, with their rounded strip collars. Every other disk piece is unchanged. Thus the trace count increases by one and all the stated proper pieces remain disks. Make the graph family stationary at its time ends and apply [F3] in a neighborhood of its compact track disjoint from $G\cup\partial F$. This gives the asserted ambient isotopy with the required support and fixed sets. [step 1.1, step 2.1, F3, construct, algebra] ∎
