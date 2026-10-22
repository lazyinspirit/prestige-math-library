---
id: lem-boundary-sum-of-one-string-ball-tangles-preserves-nontriviality
kind: lemma
title: "Triviality of a boundary sum of one-string ball tangles"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-two-point-sphere-cuts-unknot-into-boundary-parallel-arcs
  - lem-knot-genus-zero-iff-unknot
  - def-oriented-seifert-surface-and-knot-genus
  - thm-isotopy-extension
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from the ball-arc, surface and isotopy-extension suppliers. All disk adjustments and gluings are finite."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "William Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), 37–44, Lemma 1 case (2), printed pp.39–40; expanded side-tangle prerequisite"
      url: "https://doi.org/10.1016/0040-9383(84)90023-5"
---

## Statement

Assume countable choice. Let $B=B_1\cup_D B_2\subset S^3$ be a supplied smooth boundary sum of two embedded balls along a disk, with corners rounded. In each $B_i$ let $T_i$ consist of one proper smooth arc $a_i$ and finitely many disjoint interior circles. Suppose $T_i\cap D$ is just one endpoint of $a_i$, matched to the corresponding endpoint in the other disk. The union is a one-string ball tangle $T\subset B$. Call such a tangle trivial if it has no circle components and its proper arc cobounds an embedded disk with an arc in the boundary sphere, with disk interior in the ball interior.

Then $T$ is trivial if and only if both $T_1$ and $T_2$ are trivial. In particular, a nontrivial factor makes the boundary sum nontrivial, and a nontrivial boundary sum has a nontrivial factor.

## Statement references

[[def-countable-choice]]

[[lem-two-point-sphere-cuts-unknot-into-boundary-parallel-arcs]]

## Facts & Assumptions

**Given:** Countable choice, the supplied smooth ball boundary sum, and the two one-string tangles.

[F1] A sphere meeting an unknot twice cuts it into two boundary-parallel ball arcs under countable choice. ([[lem-two-point-sphere-cuts-unknot-into-boundary-parallel-arcs]])

[F2] A knot bounding an embedded oriented disk has Seifert genus zero and is an unknot under countable choice. ([[def-oriented-seifert-surface-and-knot-genus]], [[lem-knot-genus-zero-iff-unknot]])

[F3] Smooth isotopies of compact embedded submanifolds extend to ambient isotopies under countable choice. ([[thm-isotopy-extension]], [[def-countable-choice]])

[F4] Embedded circles on a sphere bound complementary disk regions, using a stereographic linear nullhomotopy; finite surface disk normal forms permit the corresponding disk and boundary-arc constructions. ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]])

## Proof

1.1 Every circle component of either factor remains a circle component of $T$. Thus if $T$ is trivial neither factor has a circle; if both factors are trivial the sum has none. It remains to analyze the single arcs and their boundary-parallelism disks. Write $p$ for the common arc endpoint in $D$, and $x_i$ for the remaining endpoint on the unglued part of $\partial B_i$. [given, construct]

2.1 Suppose the total arc $a=a_1\cup a_2$ is boundary-parallel, with disk $E$ and boundary arc $b\subset\partial B$. Close $a$ by pushing the interior of $b$ just outside $B$. The disk $E$, extended across the thin boundary collar, gives a smooth spanning disk for the resulting knot $K$, so [F2] makes $K$ an unknot. The sphere $\partial B_i$, rounded along $\partial D$ away from $p$, meets $K$ exactly at $p$ and $x_i$: the pushed cap lies outside $B$ except for its endpoint collars. Smooth these endpoint collars transversely. Its portion inside $B_i$ is precisely $a_i$ up to these arbitrarily short collar adjustments. By [F1] it is boundary-parallel in $B_i$. Undoing the collar adjustment transports its disk back to $a_i$. Together with step 1.1 this proves triviality of both factors. [F1, F2, step 1.1, construct]

2.2 Conversely assume both arcs are boundary-parallel, and choose disks $E_i$ with boundary $a_i\cup b_i$. Fix a point $q\in\partial D$ away from the endpoints and a simple arc $\lambda\subset D$ from $p$ to $q$. On each $\partial B_i$, choose a simple boundary arc $b_i'$ from $p$ to $x_i$ which follows $\lambda$ in $D$ and otherwise lies in the unglued boundary disk. Any two simple arcs in a sphere with these two fixed endpoints are isotopic relative to the endpoints. To check the endpoint issue, remove small endpoint disks and straighten the arc germs. The intervening surface is an annulus; two spanning arcs differ by an integer winding, removed by rotating one endpoint disk through that many full turns while fixing its center. After this adjustment, remove finitely many innermost bigons and slide the remaining disjoint arcs across their disk, using [F4]. Thus an isotopy takes $b_i$ to $b_i'$ and fixes $p,x_i$, although it need not fix their neighborhoods. [given, F4, step 1.1, construct]

3.1 Extend this boundary isotopy to the ball fixing $a_i$ pointwise. Here is the relative collar construction. At an endpoint use coordinates $(x,y,z)$ with the boundary $z=0$ and $a_i$ the positive $z$-axis. The time-dependent boundary field vanishes at $(0,0)$; extend it independently of $z$ there, so that it vanishes along $a_i$. Away from these charts take a sufficiently thin boundary collar missing the remaining compact interior subarc, and extend with a cutoff. Patch the finitely many extensions by a partition of unity; they have the same prescribed boundary values and all vanish along $a_i$. Their compactly supported flow gives the claimed extension, in the relative form of [F3]. It transports $E_i$ to a boundary-parallelism disk with boundary $a_i\cup b_i'$. The two transported disks meet exactly along $\lambda$: their interiors lie in the disjoint ball interiors and their other boundary arcs lie on the unglued boundary pieces. [F3, step 2.2, construct]

4.1 Glue these disks along $\lambda$ and round the seam. Two disks joined along one boundary interval form a disk, as can be checked by flattening that interval and its two half-disk collars. Its boundary is $a_1\cup a_2$ together with the two remaining boundary arcs joined at $q$, which form an arc in $\partial B$. Along the interior of $\lambda$ the glued disk lies in the interior of $B$, and all other interior points already lie in the ball interiors. It is therefore a boundary-parallelism disk for the total arc. Step 1.1 excludes circle components, so $T$ is trivial. Together with step 2.1 this proves the equivalence and both stated consequences. [step 1.1, step 2.1, step 3.1, construct] ∎
