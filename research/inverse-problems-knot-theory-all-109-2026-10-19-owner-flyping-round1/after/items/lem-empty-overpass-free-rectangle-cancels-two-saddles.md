---
id: lem-empty-overpass-free-rectangle-cancels-two-saddles
kind: lemma
title: "An empty overpass-free rectangle cancels two saddles"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-empty-boundary-rectangle-supplies-a-surface-bridge-disk
  - lem-disk-replacement-on-a-nonsplit-two-point-sphere
  - thm-neat-submanifolds-have-boundary-adapted-slice-charts
  - thm-collar-neighborhood-theorem
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from the geometric disk and collar suppliers. The patch constructions and component counts are finite."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "William Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), 37–44, Lemma 1(ii), printed p.40, Figure 5(b)"
      url: "https://doi.org/10.1016/0040-9383(84)90023-5"
---

## Statement

Assume countable choice. Let $L$ be a nonsplit smooth link and let $S$ be a smooth sphere meeting $L$ transversely twice. Supply pairwise disjoint closed crossing balls $C_1,\ldots,C_n$ such that $S\cap C_j$ is a finite collection of proper saddle disks disjoint from $L$. Supply also a closed ball $B$ whose interior misses $L$ and every $C_j$, such that $S\cap B$ is a finite neat proper disk family.

In one crossing ball $C=C_k$, let $\sigma_0,\sigma_1$ be two adjacent saddle disks: their boundary circles cobound an annulus $A\subset\partial C$ with interior disjoint from $S\cup L$. Suppose a rectangle $R\subset A\cap\partial B$ joins an arc $\alpha_0\subset\partial\sigma_0$ to an arc $\alpha_1\subset\partial\sigma_1$, its other sides span the annulus, and $R\cap S=\alpha_0\cup\alpha_1$. Require that $R$ misses $L$, and that these two arcs lie on the boundary of the same disk component $E$ of $S\cap B$. All shared faces and their surface pieces have supplied compatible corner roundings.

Then there is an ambient isotopy fixing $L$ pointwise whose final sphere agrees with $S$ near every other saddle disk and meets each crossing ball in precisely its old saddle disks with $\sigma_0,\sigma_1$ deleted from $C_k$. In particular its total number of saddle disks decreases by exactly two. This is the overpass-free rectangle case; no meridional-surgery case is included.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable choice, the nonsplit link, its two-point sphere, the protected crossing balls, the open-side ball and its disk pieces, and the specified adjacent-saddle empty rectangle.

[F1] An empty boundary rectangle between two arcs of one disk component in a finite proper disk family supplies a bridge disk avoiding every disk component. Its proof constructs the bridge on the side ball obtained by cutting along that component, then removes interior intersection circles while preserving the bridge's boundary collar. ([[lem-empty-boundary-rectangle-supplies-a-surface-bridge-disk]])

[F2] In a nonsplit link, a disk whose interior misses a transverse two-point sphere and the link has boundary bounding a puncture-free disk on the sphere. Replacing that sphere disk by a nearby copy of the supplied disk is an ambient isotopy fixing the link, with the retained sphere unchanged outside a small boundary collar. ([[lem-disk-replacement-on-a-nonsplit-two-point-sphere]])

[F3] A neat submanifold and the ambient boundary have simultaneous half-space slice charts. A smooth manifold with boundary has a product collar under countable choice. ([[thm-neat-submanifolds-have-boundary-adapted-slice-charts]], [[thm-collar-neighborhood-theorem]])

## Proof

1.1 Choose a spanning core $\rho$ of $R$ and a proper arc $\beta\subset E$ joining its endpoints. Take a narrow band $T\subset E$ about $\beta$, widened at its ends to have attaching intervals exactly $\alpha_0,\alpha_1$; disjoint boundary collars of those two intervals and a thin interior arc neighborhood give such a band. The union $P_0=\sigma_0\cup T\cup\sigma_1$ is a disk: it joins two disks by one band along two different components. Its interior is disjoint from $L$, because the saddle disks and $\operatorname{int}B$ are disjoint from $L$, and the attaching intervals miss $L$. Its boundary is a simple circle on $S$, and its complement on $S$ contains the two link punctures. [given, construct]

2.1 Use the side ball $V$ from the construction in [F1], whose boundary has $E$ as one face and the boundary disk of $B$ containing $R$ as the other. Indent the interior of $R$ a small distance into $V$, tapering to zero at its boundary, to obtain $R^+$ and a ball $V'$ with the same $E$ face. This is a boundary collar indentation: in collar coordinates it replaces $t\ge0$ by $t\ge\gamma(x)$ for a small nonnegative function $\gamma$ supported in the rectangle interior; the map $t\mapsto t-\gamma(x)\eta(t)$ has positive derivative for a sufficiently small indentation. Thus $V'$ is still a ball, and the disk family other than $E$ is unaffected, since the rectangle was empty. The interior of $R^+$ is outside every crossing ball and misses $L$. Apply the actual bridge construction of [F1] in $V'$ to the loop $\beta\cup\rho^+$ on its boundary. It gives a proper bridge disk $Q$ in $V'$ whose interior misses the whole disk family and whose boundary collar can be kept fixed during the finite circle surgeries. [step 1.1, F1, F3, construct]

3.1 Retain a neat product collar of this bridge boundary, as follows. The initial boundary-sphere cap in [F1] can be pushed inward normally along its boundary, so it is transverse to $\partial V'$ there. By [F3], near its boundary curve $s\mapsto\gamma(s)$ choose coordinates $(s,v,t)$ with $t\ge0$ the inward coordinate and $v$ transverse to the curve in $\partial V'$. The disk is $v=f(s,t)$ with $f(s,0)=0$. The change $(s,v,t)\mapsto(s,v-\eta(t)f(s,t),t)$, with a cutoff equal to one near $t=0$, straightens that collar and fixes the boundary sphere pointwise. These coordinates can be taken around the whole boundary curve: its oriented tangent, the inward disk tangent and the orientation of $V'$ determine a continuous transverse line; finite chart collars and a common shrink give the annular coordinate. Equivalently this is a choice of collar for $Q$, not a change of its boundary. All subsequent intersection surgeries in [F1] are away from this collar. Therefore the two normal parallel copies of $Q$ meet $\partial V'$ on the two parallel copies of its boundary curve. Along $\beta$ their boundary intervals are precisely the two band sides in $E$, and along $\rho^+$ they are the two parallel rectangle cores in $R^+$. Both framings come from the same boundary sphere. There is no free ribbon twist to specify. [step 2.1, F1, F3, construct]

4.1 Cut the annulus $A$ along the spanning rectangle $R$. Its closure $A_0=\overline{A\setminus R}$ is a disk. Its boundary consists of the complementary arcs $a_i=\overline{\partial\sigma_i\setminus\alpha_i}$ and the two long sides $r_0,r_1$ of $R$. Take two disjoint normal parallel copies $Q_0,Q_1$ of the bridge from step 3.1. Extend their rectangle-side boundary arcs across the two half-rectangles of $R^+$ to $r_0,r_1$, and their surface-side arcs to the corresponding long sides $b_0,b_1$ of $T$. The normal collar in step 3.1 specifies these pairings: $r_j$ attaches to $b_j$, without exchanging the two sides. Glue $Q_j$ to $A_0$ along $r_j$ for $j=0,1$ and smooth the seams. Attaching a disk along one boundary interval preserves a disk, twice, so the resulting patch $P_1$ is a disk with boundary $a_0\cup b_0\cup a_1\cup b_1=\partial P_0$. [step 1.1, step 2.1, step 3.1, construct]

5.1 Choose the parallel copies on the interior side of $V'$ along their bridge interiors, and push the interior of $A_0$ slightly outside $C$, retaining the boundary $\partial P_0$ and using its normal product collars at the seams. The seam collars use the same side of $S$ throughout. Indeed at an attaching arc take coordinates with $\partial C=\{w=0\}$, $C=\{w\le0\}$, $B=\{w\ge0\}$, $S=\{v=0\}$ and the strip side $v\ge0$; the side ball $V$ occupies $v\ge0,w\ge0$, while the region between the two saddles occupies $v\ge0,w\le0$. Thus the bridge and annulus collars both approach the $v>0$ side and match after rounding. The resulting $P_1$ has interior disjoint from $S$: the bridge interiors missed all disk pieces, its surface-edge collars run on the two sides of $T$, and $\operatorname{int}A$ missed $S$ by adjacency. It misses $L$ because the bridges lie in $\operatorname{int}B$, the entire annulus $A$ misses $L$, and all rounding neighborhoods can be chosen link-free. Its interior lies outside every crossing ball: the bridge pieces lie in $\operatorname{int}B$; $A_0$ is pushed outward from $C$; all other closed crossing balls are disjoint from the compact annulus and these finitely many patches, so their collars can be avoided. The two bridge copies are disjoint by their normal product construction and the added half-rectangles are disjoint; hence this smoothing preserves embeddedness. [given, step 2.1, step 3.1, step 4.1, construct]

6.1 Apply [F2] to $P_1$. The puncture-free sphere disk bounded by its boundary is exactly $P_0$, because the other complementary disk contains both link punctures by step 1.1. Replace $P_0$ by a nearby copy of $P_1$. The retained sphere is unchanged near every other saddle patch, and the new patch lies outside all crossing balls by step 5.1. Boundary rounding can also be kept outside their interiors. Thus the new sphere has exactly the original crossing-ball intersections with the two selected disks deleted. Its total saddle count decreases by two, and the replacement is an ambient isotopy fixing $L$ pointwise. [step 1.1, step 5.1, F2, construct] ∎
