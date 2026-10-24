---
id: lem-between-copy-proper-exchanges-have-essential-diagonals-and-rigid-cap-counts
kind: lemma
title: Between-copy proper exchanges have essential diagonals and rigid cap counts
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams
  - lem-closed-normal-subdiagrams-inherit-strict-irregular-disk-improvement
  - lem-irregular-switches-in-original-face-braids-give-strict-essential-disk-improvement
  - lem-essential-pl-disks-admit-normal-replacements
  - lem-normal-exchange-disk-patches-have-positive-edge-weight
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 6
sources:
  references:
    - title: "Wolfgang Haken, Theorie der Normalflächen: Ein Isotopiekriterium für den Kreisknoten, Acta Mathematica105 (1961),245–375"
      url: https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5921-11511_2007_Article_BF02559591.pdf
      locator: Complete Chapter5, printed pp.360–374, fundamental normal-surface construction in adapted coordinates; normal-surface/exchange context for the local formulation here. The source has additional separation/adapted-coordinate hypotheses and is not attributed the present original-coordinate refinement.
  attribution_boundary: Existing authoritative subject baseline and local formulation/proof refinement, not a verbatim external theorem; the actual accepted local argument and exact hypotheses remain unchanged.
  reading_limits: URL and locator drawn from existing canonical source metadata/Statement-reference bibliography only. No source was fetched or newly read for this metadata repair; retained author reading limits remain unchanged and are not transferred into a new whole-source reading claim.
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $D$ be a least-weight essential normal disk in a finite simplicial triangulation of a compact PL three-manifold, with lexicographically least normal vector among essential disks at that weight; put $d=v(D)$. In an actual original-triangulation regular diagram whose full resolution consists of two disjoint disks $D_0,D_1$ with vector $d$, choose an original proper double arc whose exchange disk joins a trace on $D_0$ to a trace on $D_1$.

Switch every other original curve regularly and leave this arc unswitched. Its two affected parametrizing components are embedded essential normal disks, each with vector $d$. In the transverse exchange rectangle choose the cap on the upper side at each frontier, denoting these adjacent caps by $E_0,E_1$; write $K_i$ for the complementary disk in $D_i$. Then

$$N(E_0)=N(E_1)>0,\qquad N(K_0)=N(K_1)>0,$$

where equality is componentwise on the original global edges and positivity means positive total weight. The two original diagonal disks are $E_0$ joined to $K_1$ and $K_0$ joined to $E_1$, along their original exchange continuations. The opposite, irregular pairing gives two embedded proper PL disks, at least one with null-homotopic boundary. This holds without fundamentalness, irreducibility, orientability or a choice principle. No normal parallelism of the caps is asserted.

## Facts & Assumptions

**Given:** The actual original face-braid diagram and its exchange rectangle, with the two least disk copies and their specified transverse upper and lower germs. Counts $N$ refer throughout to the original triangulation.

[F1] Any partial regular resolution has embedded normal tetrahedral parametrizing disks and only its unswitched double curves. Its total vector and edge counts are unchanged. [[lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams]]

[F2] Restricting to whole parametrizing components closed under their remaining double curves retains the original face strands and switches. In a face strip containing an irregular switch, the first such switch from the original edge joins two outer strands and produces a parametrizing arc returning to that edge. This is the actual local construction in steps 1.2–2.1 of [[lem-irregular-switches-in-original-face-braids-give-strict-essential-disk-improvement]], and its restriction is verified in steps 1.1–2.1 of [[lem-closed-normal-subdiagrams-inherit-strict-irregular-disk-improvement]]. The return arc exists before any hypothesis about which component contains its endpoints.

[F3] For an embedded essential PL disk containing such an embedded face-return arc, the normal-replacement procedure either already loses an edge point in its preliminary moves, or preserves its face curve until tetrahedral pieces are disks and then removes two edge intersections at the return. It therefore gives strict decrease relative to this disk's own weight. For a second essential PL disk, the procedure is nonincreasing. These are the actual finite moves of [[lem-essential-pl-disks-admit-normal-replacements]] and proof step 4.1 of [[lem-irregular-switches-in-original-face-braids-give-strict-essential-disk-improvement]], not an inference that the old one-output bound applies to each component separately.

[F4] A disk cap cut off by one proper trace on a normal disk has positive edge weight, by the distinct-side cell count. [[lem-normal-exchange-disk-patches-have-positive-edge-weight]]

## Proof

1.1 Resolve every curve except the chosen proper arc regularly. Only the pieces of $D_0,D_1$ incident to it can be affected by undoing it. Cutting their proper traces gives four disks $E_0,K_0,E_1,K_1$. In the transverse rectangle label the upper left and right rays $0,1$, and the lower left and right rays $2,3$. The full regular pairing is $(0,2),(1,3)$; the original unswitched diagonals are $(0,3),(1,2)$; the irregular pairing is $(0,1),(2,3)$. Thus the inverse diagram has two parametrizing disks $U=E_0\cup K_1$ and $V=K_0\cup E_1$, with their joining strips understood. Each is embedded: the only remaining double arc joins one branch from each component, and neither component has a self-intersection. They are normal by [F1], with $v(U)+v(V)=2d$. The irregular resolution instead gives two embedded PL disks $W=E_0\cup E_1$ and $Z=K_0\cup K_1$. All these joins are along proper boundary intervals, so the disk topology follows by gluing two disk parameters along an interval. All switching neighborhoods miss the original edges; in particular $w(W)+w(Z)=2w(D)$. [given, F1, construct, algebra]

2.1 The disks $W,Z$ cannot both be essential. Indeed their irregular resolution has a return parametrizing face arc by [F2]. It lies wholly on one of these two disk components, say $W$, and is embedded there because $W$ is embedded. If both were essential, normalize $W$ strictly decreasingly by [F3] and $Z$ nonincreasingly. To spell out the strict alternative, if a preliminary move or discard loses an edge point of $W$, strict decrease is already obtained; otherwise its face curve and the return arc persist, and the edge bigon removes two intersections while retaining an essential disk. The two normal outputs then satisfy $w(W^*)+w(Z^*)<2w(D)$. Both must have weight at least $w(D)$, a contradiction. Consequently at least one irregular output has null-homotopic boundary. This is a joint weight argument, not the old bound of one output by the entire two-disk input weight. [given, F2, F3, step 1.1, construct, algebra, contradiction]

3.1 Mark the exchange disk as a rectangle with frontier intervals $\alpha_i:p_i\to q_i$ and boundary connectors $b:p_0\to p_1$, $c:q_0\to q_1$ in $\partial M$. Let $u,u'$ be the original-boundary arcs of $E_0,K_0$, both directed from $p_0$ to $q_0$. Transport the original-boundary arcs of $E_1,K_1$ by $a\mapsto b\,a\,c^{-1}$, obtaining paths $v,v'$ with the same endpoints. The original disk boundaries are $u(u')^{-1}$ and $v(v')^{-1}$, up to basepoint transport, and both are essential. The inverse diagonal boundaries are $u(v')^{-1}$ and $u'v^{-1}$; the irregular boundaries are $uv^{-1}$ and $u'(v')^{-1}$, up to conjugacy or inversion. A null-homotopic path loop $a_1a_2^{-1}$ is precisely a homotopy between $a_1,a_2$ with endpoints fixed. If either diagonal loop and either irregular loop were null, their common path would give either $u\simeq u'$ or $v\simeq v'$ with endpoints fixed. For example $u\simeq v'$ and $u\simeq v$ imply $v\simeq v'$; pairing $u\simeq v'$ with $u'\simeq v'$ instead gives $u\simeq u'$. The other two cases interchange primes. Each contradicts an essential original boundary. Step 2.1 supplies a null irregular loop, so neither diagonal loop is null: both $U,V$ are essential. The connectors are those of the actual rectangle, not arbitrary path identifications. [given, step 1.1, step 2.1, construct, contradiction]

4.1 The two essential normal disks $U,V$ have weights summing to $2w(D)$, so least weight forces each to have weight $w(D)$. Their vectors sum to $2d$ by step 1.1. At the first coordinate differing from $d$, one would be smaller and the other larger. Lexicographic minimality among essential normal disks of this weight excludes that possibility. Hence $v(U)=v(V)=d$. [given, step 1.1, step 3.1, algebra, contradiction]

5.1 The original strips are edge-free, and the four cut caps partition the original disk edge points. Thus $N(U)=N(E_0)+N(K_1)=N(D)$, whereas $N(D_1)=N(E_1)+N(K_1)=N(D)$. Subtraction gives $N(E_0)=N(E_1)$. The complementary equalities similarly give $N(K_0)=N(K_1)$. Each of these four caps is cut from one normal disk by the selected proper trace alone, so [F4] makes its total edge weight positive. This proves all assertions without identifying any raw cap replacement with an ambiently parallel normal cap. [given, F4, step 1.1, step 4.1, construct, algebra] ∎
