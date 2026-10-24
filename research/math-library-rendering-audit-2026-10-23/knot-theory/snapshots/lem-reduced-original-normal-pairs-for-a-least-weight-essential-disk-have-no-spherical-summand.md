---
id: lem-reduced-original-normal-pairs-for-a-least-weight-essential-disk-have-no-spherical-summand
kind: lemma
title: A reduced original normal pair for a least-weight essential disk has no
  spherical summand
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams
  - lem-regular-normal-sum-diagrams-have-reduced-connected-pairs
  - lem-positive-euler-finite-pl-surfaces-are-disks-spheres-or-projective-planes
  - lem-irregular-switches-in-original-face-braids-give-strict-essential-disk-improvement
  - thm-polygonal-jordan-curve
  - thm-simple-polygon-admits-a-triangulation
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
      locator: Chapter5 Satz7–9, printed pp.361–369. This disk-specific proof uses the
        original-face braid and the retained switch neighborhoods; it requires
        no global sphere-separation or sphere-bicollar input.
dependency_level: 5
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $F$ be a least-edge-weight essential normal disk in a compact PL three-manifold with a finite simplicial triangulation. Put a nontrivial decomposition of $v(F)$ into the original-triangulation regular diagram of the original-triangulation regular-sum construction, and obtain a reduced connected pair $G,H$ by the reduced-connected-pair lemma, retaining the face braids and switch neighborhoods.

Neither $G$ nor $H$ is a two-sphere. No lexicographic tie-break, ambient orientability, projective-plane exclusion, sphere separation, sphere irreducibility or separately supplied bicollar is required. The needed local side choices come from the retained coherent regular switches themselves.

## Statement references

[[lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams]]

[[lem-regular-normal-sum-diagrams-have-reduced-connected-pairs]]

[[lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams]] — constructed original-coordinate diagrams and coherent partial switches.

[[lem-irregular-switches-in-original-face-braids-give-strict-essential-disk-improvement]] — strict improvement for an embedded essential disk component after an irregular switch.

## Facts & Assumptions

**Given:** The least-weight essential disk and its constructed reduced pair.

[F1] In the reduced pair, every nonempty partial selection of remaining regular switches has connected normalization; no circle separates both summands. Their edge weights add to $w(F)$. All remaining tetrahedral traces join distinct faces and the regular pairings extend consistently along whole double curves. ([[lem-regular-normal-sum-diagrams-have-reduced-connected-pairs]], [[lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams]])

[F2] The finite graph-neighborhood construction in [[lem-positive-euler-finite-pl-surfaces-are-disks-spheres-or-projective-planes]] gives a connected boundary surface with Euler characteristic $-1$ as a disk with two rectangular bands. If it has three boundary circles, both bands must increase the boundary count by one, since each changes it by at most one. Each such attachment joins two intervals on the same circle without a twist, splits that circle into two, and removes one disk from a planar model. Thus this surface is a pair of pants. This is a finite band calculation, not an invocation of full surface classification or choice.

[F3] A simple PL circle on a PL sphere bounds two disks. A circle inside a pair of pants is either inessential or parallel to a boundary circle: cap the three boundary circles on a sphere, and choose a side of the given circle containing at most one cap. With zero caps it is a disk, and with one it is an annulus after removing the cap. These are finite polygonal separation and triangulation constructions. ([[thm-polygonal-jordan-curve]], [[thm-simple-polygon-admits-a-triangulation]])

[F4] An irregular partial resolution containing an embedded essential disk as a parametrizing component yields an essential normal disk of weight strictly below the diagram's total original weight. ([[lem-irregular-switches-in-original-face-braids-give-strict-essential-disk-improvement]])

## Proof

1.1 Suppose $G=S$ is a sphere and put $Y=H$. Their remaining intersection is nonempty, since otherwise their full resolution would be a disconnected union. It consists only of circles, because $S$ is closed. Each circle separates $S$, and therefore is nonseparating in $Y$ by [F1]. Each is also two-sided in $Y$, using only the coherent switching neighborhoods. Indeed, choose one of its two disk sides on $S$ by [F3]. In a transverse cross-section there are two $S$ rays and two $Y$ rays. The retained regular pairing pairs this chosen $S$ ray with one $Y$ ray. Transport it around the circle. The $S$ ray returns to itself, as the chosen disk side is global on $S$, and the regular pairing returns to itself by [F1]. Consequently the selected $Y$ ray returns to itself. The local rectangular collars on $Y$ thus glue without reversal and give an annular collar of the circle in $Y$. No ambient sphere collar was used. [given, F1, F3, construct]

2.1 The full resolution has boundary exactly $\partial Y$ and Euler characteristic $2+\chi(Y)=1$, since interior-circle cutting and regluing preserves Euler characteristic. Hence $Y$ has one essential boundary circle $C$ and $\chi(Y)=-1$. Cut it along one intersection circle $c_0$, using its annular collar from step 1.1. It stays connected and has Euler characteristic $-1$ and three boundary circles, so is a pair of pants by [F2]. Any other intersection circle is inessential or boundary-parallel there by [F3]. It cannot be inessential or parallel to $C$, since then it would separate $Y$ after regluing the copies of $c_0$. Thus every other circle is parallel to one of those two copies. Cutting along the whole family consequently yields a single pair of pants $K$ containing $C$ and otherwise annuli. This follows by ordering the finitely many nested parallel circles at the two ends of the cut pair of pants. [given, F1, F2, F3, step 1.1, construct, algebra]

3.1 If the intersection family consists of $c_0$ alone, cutting $S$ gives two disks $E_1,E_2$, and cutting $Y$ gives $K$. Either local switch along $c_0$ attaches one of these disks to each of the two cut boundary circles of $K$. Both choices therefore produce one connected disk with boundary $C$. With all double curves resolved its image is embedded. Choose the irregular switch. Its disk is essential, so [F4] produces a normal essential disk of weight less than $w(F)$, contradicting minimality. [given, F1, F3, F4, step 1.1, step 2.1, construct, contradiction]

3.2 If there are at least two intersection circles, the other two boundary circles $a,b$ of $K$ are distinct members of the family. On $S$ take the two disjoint disks $E_a,E_b$ bounded by them whose interiors avoid the other boundary circle; [F3] gives those disks and a remaining nonempty annulus. Resolve just $a,b$, choosing at each the pairing that joins the $K$ side to the corresponding cap side, and leave all other curves unswitched. Then $K\cup E_a\cup E_b$, rounded only in those switching neighborhoods, is one parametrizing disk component $P$ with boundary $C$. Its image is embedded: the cap interiors are disjoint subsets of $S$, the interior of $K$ misses $S$, and each local switch joins adjacent rays of the two transverse sheets by a disjoint strip. Other intersection circles inside a cap meet only portions of $Y$ outside $K$; their unswitched crossings do not join parametrizing components and do not give self-intersections of $P$. Thus no global side of $S$ or displacement of entire caps is needed. [F1, F3, step 1.1, step 2.1, construct]

4.1 The remaining spherical annulus supplies points outside $P$, so the normalization in step 3.2 is disconnected. If both selected pairings were regular, this would contradict the reduced property [F1]. At least one is irregular. Apply [F4] to its embedded essential disk component $P$. Previous regular switches and these two switches miss the original edges, and the total original weight is $w(S)+w(Y)=w(F)$. The resulting essential normal disk has weight less than $w(F)$, a contradiction. Together with step 3.1 this excludes a spherical $G$, and exchanging names excludes a spherical $H$. Every construction used the original diagram and its existing neighborhoods. [given, F1, F4, step 3.1, step 3.2, contradiction] ∎
