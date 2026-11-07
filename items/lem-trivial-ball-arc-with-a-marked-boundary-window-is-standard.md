---
id: lem-trivial-ball-arc-with-a-marked-boundary-window-is-standard
kind: lemma
title: "A trivial ball arc with a marked boundary window is standard"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-smooth-ball-windows-and-boundary-disk-absorption
  - lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms
  - thm-neat-submanifolds-have-boundary-adapted-slice-charts
  - lem-the-extended-time-dependent-field-has-a-global-time-one-flow
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from disk extension, ball-window isotopies and compactly supported smooth flows. All neighborhoods and gluing operations are finite."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology, Chapter 1, printed p.3, Lemma 1.3 and its ball-operation proof; marked-arc refinement proved here"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
---

## Statement

Assume countable choice. Let $B$ be a smooth closed three-ball and let $a\subset B$ be a smooth neat proper arc with endpoints $p,q$. Supply a boundary-parallelism disk: an embedded disk $D$ with $\partial D=a\cup\lambda$, where $\lambda\subset\partial B$ is an arc joining $p$ to $q$ and $\operatorname{int}D\subset\operatorname{int}B$. The disk is smooth with the compatible corner charts at the two endpoints. Let $U\subset\partial B$ be a smooth closed disk with $p\in\operatorname{int}U$ and $q\notin U$.

There is a diffeomorphism of triples from $(B,a,U)$ to the standard closed unit ball, its vertical diameter, and its lower closed hemisphere, taking $p$ to the lower pole and $q$ to the upper pole. More precisely, after any preliminary standardization of $(B,a)$ with these endpoint images, the correction standardizing the marked boundary window can be made by an ambient isotopy of that ball fixing its diameter pointwise. Thus specifying the boundary window adds no unidentified motion or twist of the proper arc.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable choice, the ball, neat proper arc with an actual boundary-parallelism disk, and a marked boundary disk containing exactly its first endpoint.

[F1] A smooth ball can be shrunk and linearized by an ambient isotopy; a boundary disk is a standard ball window. A ball attached along a boundary disk can be absorbed, with the diffeomorphism supported near that ball and its attaching collar. The reverse disk-window removal also preserves the ball type. ([[lem-smooth-ball-windows-and-boundary-disk-absorption]])

[F2] Smooth planar disk regions are standard disks, and smooth orientation-preserving boundary maps extend to disk diffeomorphisms agreeing with prescribed inward collars. ([[lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms]])

[F3] Neat submanifolds have charts simultaneously straightening them and the ambient boundary. ([[thm-neat-submanifolds-have-boundary-adapted-slice-charts]])

[F4] Compactly supported smooth fields have unique global smooth flows on compact time intervals, giving ambient isotopies; a field vanishing on a set fixes it pointwise. ([[lem-the-extended-time-dependent-field-has-a-global-time-one-flow]])

## Proof

1.1 Extend the bridge disk a short distance across its interior boundary arc $a$, leaving its boundary on $\partial B$ along a slightly longer boundary arc near $\lambda$. This gives a disk $D'$ containing $a$ as a neat proper arc and meeting $\partial B$ in one boundary interval. The construction is local: extend the disk parametrization across $a$ in its smooth boundary charts, and at $p,q$ use the quadrant charts with $\partial B$ as one face; compactness permits a common narrow strip. The extension is embedded after shrinking, since its new strip is locally embedded and disjoint compact parts of the original disk remain separated. In the extended planar parameter domain, $a$ cuts $D'$ into the original bridge disk and a thin added disk strip. Their boundary parametrizations can be identified with those of two half-disks, matching the parametrization and collar of $a$, by [F2]. Glue these maps across the common collar. This identifies $D'$ with a standard disk and $a$ with a diameter. The finitely many corner charts at its endpoints are retained before rounding. [given, F2, F3, construct]

2.1 Take a small closed thickening $N$ of $D'$ in $B$. It is a rounded product $D'\times[-\delta,\delta]$ and meets $\partial B$ in one rectangle window $W$ around the boundary interval of $D'$. To obtain the product compatibly at $\partial B$, choose a transverse field to $D'$ tangent to $\partial B$ on that interval, using the half-slice charts of [F3]. The oriented normal direction of the disk chooses the same transverse cone in finitely many charts; a positive weighted sum stays transverse. Its short flow in [F4] is the required thickening. Compactness and local inverses give a common injective product neighborhood. The arc lies in $D'\times\{0\}$ with endpoints in the interior of $W$ and otherwise in the interior of $N$. Under the disk coordinates of step 1.1 this is the diameter in the central disk of a rounded cylinder. Round the cylinder convexly away from those endpoints and rescale its normal coordinate. A radial diffeomorphism to a round ball preserves that central diameter: choose its radial scaling constant near the origin and interpolate to the positive boundary-radius function over a long logarithmic radial interval, so the radial derivative stays positive. Hence $(N,a)$ is a standard ball with diameter. [step 1.1, F3, F4, construct]

3.1 The complement $K=\overline{B\setminus N}$ is a ball by the reverse ball-window removal assertion of [F1], since $N$ is a ball meeting $\partial B$ in the one disk $W$. Moreover $B=N\cup K$ is their boundary sum along the other boundary disk of $N$. This attaching disk and the whole $K$ miss $a$, whose endpoints lie in the interior of $W$. Absorb $K$ into $N$ by [F1], choosing its attaching collar disjoint from $a$. The resulting diffeomorphism $(B,a)\to(N,a)$ fixes the arc. Combine it with the standardization of step 2.1, choosing the order of the two diameter endpoints so that $p$ goes to the lower pole and $q$ to the upper pole. This proves the unmarked assertion using the actual bridge disk. [step 2.1, F1, construct]

4.1 Work now in that standard ball. On its boundary sphere the image of $U$ contains the lower pole and misses the upper pole. The shrinking and linearization proof in [F1], applied in dimension two with the disk center at the lower pole, gives an isotopy carrying $U$ to a sufficiently small round latitude disk about that pole, fixing the pole throughout. In detail the shrinking disk embeddings $e(r(t)x)$ fix $e(0)=p$; their linear interpolation also fixes $p$; their velocities therefore vanish there. Choose every extension neighborhood disjoint from $q$, since the whole shrinking track lies in $U$. Use a standard sphere chart at $p$ for the final linearization. Enlarge the resulting latitude disk to the lower hemisphere by latitude disks, still fixing both poles. The associated boundary isotopy $h_t$ thus fixes $p,q$ pointwise, though it can rotate their surrounding directions. [step 3.1, F1, construct]

5.1 Extend this sphere isotopy over the ball fixing the diameter pointwise. Its boundary velocity vanishes at both endpoints. In endpoint coordinates $(x,y,z)$ where the sphere is $z=0$ and the diameter is the positive $z$-axis, extend that tangential velocity independently of $z$ and multiply by a cutoff. It then vanishes along the diameter axis. Away from the endpoint charts choose a thin boundary collar missing the remaining compact diameter subarc, extend there with a cutoff, and use a finite partition to join the extensions. All terms have the prescribed boundary value, are tangent to the boundary, and vanish on the diameter. Such a finite partition is obtained by finitely many coordinate bumps divided by their positive sum near the compact boundary track, then cut off in a common boundary neighborhood. The field has compact support, so [F4] supplies its ball-preserving flow, fixing the diameter and extending $h_t$ by uniqueness. This proves that any rotation near an endpoint in step 4.1 adds no motion of the arc itself. [step 4.1, F3, F4, construct]

6.1 The composite of the preliminary pair diffeomorphism of step 3.1 and the diameter-fixed correction of step 5.1 is a diffeomorphism of the required triples. The same correction applies after any preliminary endpoint-ordered standardization, because its only input is the marked sphere disk containing the lower pole and missing the upper one. This proves both assertions. [step 3.1, step 4.1, step 5.1] ∎
