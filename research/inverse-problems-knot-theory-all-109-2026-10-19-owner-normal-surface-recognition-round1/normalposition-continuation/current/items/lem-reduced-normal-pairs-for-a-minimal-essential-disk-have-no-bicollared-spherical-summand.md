---
id: lem-reduced-normal-pairs-for-a-minimal-essential-disk-have-no-bicollared-spherical-summand
kind: lemma
title: "A reduced pair for a minimal essential disk has no bicollared spherical summand"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams
  - lem-regular-normal-sum-diagrams-have-reduced-connected-pairs
  - lem-spherical-normal-summands-admit-weight-controlled-disk-compressions
  - lem-separating-spherical-normal-pairs-reduce-to-zero-edge-annular-patches
  - lem-irregular-switches-in-original-face-braids-give-strict-essential-disk-improvement
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Wolfgang Haken, Theorie der Normalflächen, Acta Mathematica105 (1961),245–375"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5921-11511_2007_Article_BF02559591.pdf"
      locator: "Chapter5, Satz8–9, printed pp.364–369. The proof below replaces the global sphere-separation assumption by the proved edge-parity argument and uses the original-triangulation strict irregular-switch supplier."
---

## Statement

Let $F$ be an essential normal disk in a finite simplicially triangulated compact PL three-manifold, chosen with least edge weight and then lexicographically least normal vector among disks of that weight. Suppose a nontrivial coordinate decomposition has been put into the original-triangulation diagram of [[lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams]], and partial regular switches have produced a reduced connected pair $G,H$ as in [[lem-regular-normal-sum-diagrams-have-reduced-connected-pairs]]. Retain the constructed face braids and the remaining switching curves.

Neither $G$ nor $H$ can be a two-sphere with a supplied PL product neighborhood. In particular, the separating-sphere case with zero-edge annular patches is also excluded. No hypothesis that every sphere in the ambient manifold separates or bounds a ball is used. The bicollar is explicit input here; this lemma does not itself supply the finite PL bicollar theorem.

## Statement references

[[lem-spherical-normal-summands-admit-weight-controlled-disk-compressions]] — the nonseparating-sphere exclusion by two compressions and edge parity.

[[lem-irregular-switches-in-original-face-braids-give-strict-essential-disk-improvement]] — strict improvement after an irregular switch in the original edge weight.

## Facts & Assumptions

**Given:** The minimal essential disk, constructed face braids, reduced connected pair and the hypothetical bicollared spherical summand.

[F1] In the reduced pair, switching any nonempty subset of remaining curves regularly has connected normalization. No intersection circle or arc separates both summands. Their vectors add to $v(F)$ and their edge weights add to $w(F)$. ([[lem-regular-normal-sum-diagrams-have-reduced-connected-pairs]])

[F2] A bicollared spherical summand in this position must separate its ambient component when $F$ is weight-then-lex minimal: the two-compression equality forces all its edge counts even, hence separation; the strict case contradicts least weight. ([[lem-spherical-normal-summands-admit-weight-controlled-disk-compressions]], step 8.1)

[F3] For a separating spherical pair, cutting the other summand along the intersection circles yields a pair of pants $K$ carrying the essential boundary and a nonempty annular family. Its other boundary circles $a,b$ are distinct. On the sphere the disks $E_a,E_b$ bounded by them and not containing one another are disjoint. Capping $K$ by these disks on the opposite side gives an embedded proper essential disk. This is the complete finite construction in [[lem-separating-spherical-normal-pairs-reduce-to-zero-edge-annular-patches]], steps 1.1–5.1.

[F4] If a partial resolution of the retained braid diagram uses an irregular switch and contains an embedded essential disk as a parametrizing component, a normal essential disk of weight strictly less than the total original weight exists. ([[lem-irregular-switches-in-original-face-braids-give-strict-essential-disk-improvement]])

## Proof

1.1 Suppose, after exchanging names if necessary, that $G=S$ is a bicollared two-sphere, and write $Y=H$. Their remaining intersection is nonempty: otherwise their full regular sum would be the disjoint union of two nonempty surfaces, contradicting the connected disk $F$. It consists of circles, because $S$ is closed. Every circle separates $S$, so [F1] makes each nonseparating in $Y$. The full sum has boundary exactly $\partial Y$, and cutting and regluing circles preserves Euler characteristic. Thus $\partial Y$ is the one essential boundary circle of $F$ and $\chi(Y)=1-2=-1$. Each tetrahedral trace joins distinct faces by the preserved partial-switch construction, hence joins distinct sides of its normal disk. These are precisely the compression supplier's hypotheses. [given, F1, construct, algebra]

2.1 By [F2], $S$ separates its ambient component. Apply [F3] to obtain the boundary-carrying pair of pants $K$, distinct intersection circles $a,b$, and disjoint spherical caps $E_a,E_b$. The interior of $K$ misses $S$ and lies on one side. The cap construction uses the other side and its supplied product neighborhood. Its resulting disk has boundary the original essential circle. [given, F2, F3, step 1.1, construct]

3.1 This capped disk is a parametrizing component of an explicit partial resolution of $S\cup Y$. Switch just the two curves $a,b$, selecting at $a$ the pairing joining the $K$ side to the $E_a$ side, and at $b$ the pairing joining $K$ to $E_b$. The complementary two branches are paired with one another in each neighborhood. Leave every other double curve unswitched. Following the parametrization from $K$ now enters exactly these two disks and returns, producing $P=K\cup E_a\cup E_b$ with its switching collars. Any other intersections in the cap interiors are with discarded portions of $Y$, so their unswitched crossings do not join parametrizing components. The image of $P$ is embedded by the opposite-side cap construction [F3]. [given, F3, step 2.1, construct]

4.1 There is at least one other nonempty parametrizing component. The sphere region between the two disjoint cap disks is a nonempty annulus, not included in $P$; all its points outside the two switching collars persist in other components. Consequently the partial resolution of step 3.1 has disconnected normalization. If both selected switches had been regular, this would contradict [F1], since $\{a,b\}$ is nonempty. At least one of these two switches is therefore irregular. [F1, step 2.1, step 3.1, contradiction]

5.1 The diagram producing $S,Y$ was obtained from the constructed original diagram by preliminary regular switches only. It retains its monotone face strips by the partial-switch supplier. Steps 3.1–4.1 add at least one irregular switch, and $P$ is an embedded proper disk with essential boundary. Apply [F4]. Its total original weight is $w(S)+w(Y)=w(F)$ by [F1], because all previous switches miss the edges. We obtain an essential normal disk of weight strictly less than $w(F)$, contradicting the least-weight choice. This contradiction excludes $S$, and the same argument excludes a spherical $H$. It includes the zero-weight annular case, since [F4] forces an original-edge return even when no discarded annulus carries an edge intersection. [given, F1, F4, step 3.1, step 4.1, contradiction] ∎
