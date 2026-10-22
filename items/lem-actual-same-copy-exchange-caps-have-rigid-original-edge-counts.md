---
id: lem-actual-same-copy-exchange-caps-have-rigid-original-edge-counts
kind: lemma
title: Actual same-copy exchange caps have rigid original edge counts
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-same-copy-exchanges-on-least-fundamental-disks-have-disjoint-adjacent-caps
  - lem-closed-normal-subdiagrams-inherit-strict-irregular-disk-improvement
  - lem-normal-exchange-disk-patches-have-positive-edge-weight
  - lem-admissible-normal-vectors-have-rigid-edge-count-averages
  - lem-essential-pl-disks-admit-normal-replacements
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Chan-Ho Suh, The unknotting problem and normal surface Q-theory
      url: https://arxiv.org/pdf/1009.1500
      locator: Theorem3.12 cap replacement. The componentwise original-edge equality
        and full lexicographic conclusion are proved below without
        irreducibility.
dependency_level: 7
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

In an actual original-triangulation regular diagram let a full-resolution component $D$ be a fundamental essential normal disk, of least weight among essential normal disks and with lexicographically least normal vector at that weight. Let an annular or proper disk exchange belonging to this diagram have both trace components on $D$.

Its disjoint adjacent disk caps $E,E'$ have equal counts on every original triangulation edge and positive total edge weight: $N(E)=N(E')$ and $w(E)=w(E')>0$. Replacing either cap by a nearby copy of the other along the exchange gives an embedded proper PL disk with essential boundary. Both replacements have edge-count vector $N(D)$, and their componentwise edge-nonincreasing normal replacements have exactly the original normal vector $v(D)$.

For a proper disk exchange, the alternative disk obtained by joining its two outer caps along the exchange has null-homotopic boundary in $\partial M$. No assertion of normal parallelism of $E,E'$ is made.

## Statement references

[[lem-same-copy-exchanges-on-least-fundamental-disks-have-disjoint-adjacent-caps]] — disjoint adjacent caps in the full compact PL scope.

[[lem-admissible-normal-vectors-have-rigid-edge-count-averages]] — rigidity for the two normalized outputs, including different possible quadrilateral supports.

## Facts & Assumptions

**Given:** The actual diagram, the least-weight lexicographically least fundamental essential disk, and its specified same-copy exchange. Write $N$ for the vector of counts on all original global edges.

[F1] The caps are disjoint and adjacent. Undoing this exchange while all others remain regular leaves one connected affected parametrizing normalization, with only its one remaining self-double curve and with edge weight $w(D)$. A disconnected one would split $v(D)$ into two embedded nonempty normal vectors, contrary to fundamentalness. ([[lem-same-copy-exchanges-on-least-fundamental-disks-have-disjoint-adjacent-caps]])

[F2] An irregular resolution of that closed affected subdiagram, if it has an embedded proper essential disk output, gives a normal essential disk of weight less than $w(D)$. ([[lem-closed-normal-subdiagrams-inherit-strict-irregular-disk-improvement]])

[F3] Each of these caps is a disk patch for the two selected trace components alone. Its trace arcs in normal tetrahedral disks join distinct sides. A disk patch with zero or one original-boundary arc has positive edge weight. ([[lem-normal-exchange-disk-patches-have-positive-edge-weight]])

[F4] An embedded essential PL disk has a normal essential replacement componentwise nonincreasing on every original edge. If two admissible normal vectors have edge counts averaging to those of $D$, their normal vectors average to $v(D)$; lexicographic minimality among eligible disks then forces both to equal $v(D)$. ([[lem-essential-pl-disks-admit-normal-replacements]], [[lem-admissible-normal-vectors-have-rigid-edge-count-averages]])

## Proof

1.1 For a proper disk exchange, cut $D$ along its two traces into the outer caps $E,E'$ and middle disk $K$. The irregular resolution of the connected inverse diagram in [F1] joins $E$ to $E'$ along the exchange, producing an embedded proper disk $W$; the remaining sides of $K$ join to form the other component. These pairings are the upper-upper and lower-lower pairs in the transverse four-ray description of [F1]. All other crossings have already been resolved, so these images are embedded. If $\partial W$ were essential, [F2] would contradict the least weight of $D$. Thus $\partial W$ is null-homotopic in $\partial M$. [F1, F2, construct, contradiction]

1.2 Form the two cap replacements $A,A'$. For an annular exchange these are $D$ with $E'$ replaced by the disk consisting of the exchange annulus capped by a nearby copy of $E$, and the reverse replacement. They are embedded proper PL disks with boundary exactly $\partial D$. For a proper disk exchange attach two nearby copies of $E$ to the two frontier arcs of $K$, using the exchange strips, to obtain $A$; use two copies of $E'$ to obtain $A'$. These are again embedded disks. In detail take disjoint small product collars of the finitely many PL cap and strip cells; on each transverse exchange rectangle the two cap copies and the middle rays are joined in separate parallel levels. The maps agree along face boundaries by the supplied exchange neighborhood, and outside that neighborhood the disjoint cut pieces are unchanged. A disk joined to another disk along a boundary interval remains a disk, so the two successive attachments give the claimed disk topology. The collars can be chosen small enough to avoid all remaining surface pieces and to move edge points only along their own original edges. [given, F1, construct]

2.1 The proper-disk replacements also have essential boundary. To see this precisely, let $u$ and $v$ be the original-boundary arcs of $E,E'$, transporting the endpoints of $v$ to those of $u$ by the two boundary sides of the exchange disk in $\partial M$. The circle $\partial W$ is then $uv^{-1}$ with those connectors. Its null homotopy from step 1.1 says that $u$ and the transported $v$ are homotopic with fixed endpoints. The boundary of $A$ is obtained from $\partial D$ by substituting a transported copy of $u$ for $v$, and the boundary of $A'$ by the reverse substitution. Both are therefore homotopic to $\partial D$ in $\partial M$ and are essential. Together with the unchanged boundary in the annular case, both replacements in step 1.2 are eligible essential PL disks. [given, step 1.1, step 1.2, construct]

3.1 Let $K$ now denote the remainder of $D$ after removing the two cap interiors; in the annular case it is a disk with two holes, and in the proper case the middle disk. The exchange strips miss every original edge. The collars and copies of step 1.2 consequently give the exact componentwise identities $N(A)=N(K)+2N(E)$ and $N(A')=N(K)+2N(E')$, whereas $N(D)=N(K)+N(E)+N(E')$. In particular $N(A)+N(A')=2N(D)$. Normalize the two essential disks by [F4] to $U,V$. Their counts satisfy $N(U)+N(V)\le2N(D)$ componentwise. Each has weight at least $w(D)$, while the sum of their weights is at most $2w(D)$. Thus both weights equal $w(D)$ and every componentwise deficit is zero: $N(U)+N(V)=2N(D)$. [F4, step 1.2, step 2.1, construct, algebra]

4.1 Apply the two-output rigidity and lexicographic assertion in [F4]. It gives $v(U)=v(V)=v(D)$ and hence $N(U)=N(V)=N(D)$. Since $N(U)\le N(A)$ and $N(V)\le N(A')$, while their sums are equal by step 3.1, no edge count fell in either normalization. Therefore $N(A)=N(A')=N(D)$. Subtracting their identities in step 3.1 gives $2N(E)=2N(E')$, so $N(E)=N(E')$. Finally [F3] gives their positive total edge weight. All assertions, including the null-homotopic boundary of $W$, now follow. The equality of these edge counts has not been used to infer a relative normal isotopy of the caps. [F3, F4, step 1.1, step 3.1, construct, algebra] ∎
