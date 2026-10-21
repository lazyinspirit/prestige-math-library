---
id: lem-essential-proper-haken-cuts-have-finite-sequential-length
kind: lemma
title: Essential proper Haken cuts have finite sequential length
status: draft
origin: session
proof_strategy: direct
deps:
  - lem-finite-pl-haken-finiteness-and-maximal-closed-surface-families
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jaco Lectures on Three-Manifold Topology IV.7–IV.13
      url: https://www.maths.gla.ac.uk/~mpowell/Lectures-3-mfld-topology_Jaco.pdf
---

## Statement

Let $M$ be a compact orientable irreducible finite PL three-manifold, and let $h(M)$ be a bound for its pairwise disjoint, pairwise nonparallel closed incompressible surface families. Every sequential partial hierarchy of connected two-sided incompressible, boundary-incompressible surfaces which are neither disks nor boundary-parallel has at most $3h(M)$ cuts. The maximum number $\ell(M)$ of such cuts is finite; after any allowed cut, each resulting component $Q$ satisfies $\ell(Q)<\ell(M)$.

## Facts & Assumptions

[F1] The closed-family bound is supplied by [[lem-finite-pl-haken-finiteness-and-maximal-closed-surface-families]]. Only its actual closed-surface scope is used; proper hierarchy surfaces are converted to closed compression frontiers in the proof.

## Proof

**Given:** A finite PL manifold $M$, the closed-family bound in F1, and any finite prefix of the stated hierarchy.

### The exact rank

1.1 A relevant partial hierarchy cuts successively along connected two-sided incompressible, boundary-incompressible surfaces which are neither disks nor parallel into the current boundary. The word boundary refers to the ENTIRE current boundary, including copies of earlier cuts. An arbitrary incompressible hierarchy need not be finite; Jaco gives actual infinite examples in PDF62–64. The boundary-incompressibility hypothesis is essential. [given, construct]

1.2 Let $h(M)$ be a finite bound for the size of a family of pairwise disjoint, mutually nonparallel, closed incompressible surfaces in $M$. Fact F1 supplies such a bound. The following construction shows that a relevant partial hierarchy has at most $3h(M)$ cuts. Hence its maximum length $\ell(M)$ is a finite nonnegative integer. Prepending an allowed cut to a partial hierarchy of a resulting component proves $\ell(M')<\ell(M)$, exactly the first-coordinate property needed by the sutured complexity construction. [step 1.1, construct]

### Compression disks disjoint from an actual cut

1.3 An irreducible compact manifold has a finite complete compression-disk system: compress its boundary along an essential disk whenever possible. At each step the total boundary genus drops under a nonseparating compression, or the sum of squared component genera drops under a separating one. Spherical boundary is capped on the compression-body side by irreducibility. Thus only finitely many essential compressions are needed, and the remaining components have incompressible boundary. [step 1.2, construct]

1.4 Let $F$ be incompressible and boundary-incompressible. Choose such a disk system minimizing its intersection with $F$, with its number of disks and the homeomorphism types of its compressed components fixed. Circles of intersection disappear by the innermost-disk argument and irreducibility. If an arc remains, take an outermost one on a compression disk. Boundary-incompressibility of $F$ gives a disk $E$ in $F$ bounded by that arc and an arc of $\partial F$. If $E$ contains other disk-system arcs, choose an arc outermost in $E$ away from the first one. It cuts off a subdisk $E'$ whose interior is disjoint from the system. [step 1.3, construct]

1.5 In the compressed manifold, $E'$ is a properly embedded disk in a boundary-incompressible irreducible component. Its boundary therefore bounds a boundary disk and the union bounds a ball. One of the two pieces of the compression disk cut by $\partial E'$ lies on that ball. Replace that piece by $E'$, pushing slightly off $F$. This is a disk slide across that very ball: the number of disks and the homeomorphism types of the compressed components are unchanged, while intersection with $F$ strictly decreases. This contradicts minimality. A complete compression system disjoint from $F$ therefore exists. The argument also works simultaneously for a disjoint collection consisting of $F$ and closed incompressible surfaces: closed components require only the circle-removal step. [step 1.4, construct]

### Closed frontiers attached to a finite hierarchy prefix

1.6 Fix a finite prefix $F_1,\ldots,F_k$; constructing a bound for every finite prefix is enough. Write $M_j$ for the actual manifold immediately before cutting $F_j$. If $F_j$ is closed, assign $S_j=F_j$. If it is proper, choose a complete compression-disk system disjoint from it. Let $Q_j$ be the compressed component containing $F_j$. Its boundary is closed and incompressible. Choose a boundary component meeting $\partial F_j$, and push it a small distance into $Q_j$ to form the closed surface $S_j$. It crosses $F_j$ in curves parallel to its boundary and is incompressible in $M_j$. The selected boundary is not a sphere: its compressed irreducible component would then be a ball, in which an incompressible boundary-incompressible proper surface is a disk, contrary to the chosen cut. Thus the closed-family supplier is used on its positive-genus incompressible surfaces, not on an arbitrary family of small spheres. [step 1.5, construct]

1.7 The choices can be made disjointly, in reverse order through the finite prefix. At stage $j$, all already chosen $S_q$, $q>j$, lie in $M_j\setminus F_j$ and are closed incompressible there. Choose the compression disks disjoint simultaneously from $F_j$ and these surfaces by the disk-exchange construction. Push the selected compressed boundary only within a collar avoiding those compact closed surfaces. This produces $S_j$ disjoint from every later $S_q$. In particular there is no assertion that the proper surfaces $F_j$ themselves become a disjoint proper family in the original manifold. [step 1.6, construct]

1.8 A closed incompressible surface lying after an incompressible cut is still incompressible before it. To prove this, take a compressing disk minimizing its intersection with the cut surface. An innermost intersection circle bounds a disk on the incompressible cut surface; replace across it, using irreducibility to remove the resulting sphere. Since the boundary of the compressing disk lies on a closed surface disjoint from the cut, only intersection circles occur. Removing them gives a compression in the cut manifold, a contradiction. Inducting backward shows that every $S_j$ is closed incompressible in the ORIGINAL $M$. [step 1.7, construct]

### Why no parallelity class contains four assigned frontiers

1.9 Suppose four assigned frontiers are parallel. If two come from closed cuts, order their indices $p<q$. Their intervening product region makes the later cut $F_q$ parallel into the boundary copy left by $F_p$, contradicting the hierarchy condition. [step 1.8, construct]

1.10 Otherwise at least three, say $S_p,S_q,S_r$, came from proper cuts. Order these three spatially in their common product region, and call the middle one $S_p$. One of the other two lies on the compressed-component side of $S_p$; call it $S_q$. Its index is later: an earlier assigned proper frontier intersects its own cut surface, so it could not be wholly contained in $M_p$, from which that earlier surface's neighborhood has already been removed. Thus $p<q$. [step 1.9, construct]

1.11 The surfaces $S_p$ and $S_q$ cobound a product on that side. The proper surface $F_p$ has boundary on the compressed boundary defining $S_p$ and is disjoint from the later $S_q$. Consequently it lies on the collar side of $S_q$. The product interval gives a parallelism of $F_p$ into the boundary of $Q_p$. One can see this relative to a finite disk-and-band decomposition of $F_p$: remove innermost projection circles using incompressibility, and remove outermost projection bigons using boundary incompressibility; the remaining disks and bands follow the product intervals to their boundary images. No crossing can remain without one of those two forbidden disks. [step 1.10, construct]

1.12 But such a parallelism is impossible here. Its image $F'_p$ on $\partial Q_p$ consists of a portion of $\partial M_p$ together with finitely many disk scars of the compression system. Since the original $F_p$ was not boundary-parallel in $M_p$, the image uses scars. Since it is not a disk, it has an essential spanning arc $\beta$ avoiding the interiors of the finitely many scars; slide its endpoints off the scars along their boundary if necessary. Thus $\beta$ lies on the original boundary $\partial M_p$. The parallelism carries it to an essential spanning arc $\alpha$ in $F_p$ and sweeps a disk with boundary $\alpha\cup\beta$. Its interior is disjoint from $F_p$. This is an actual boundary-compressing disk for $F_p$ in $M_p$, contradicting the relevant hierarchy hypothesis. This is precisely where a nondisk, boundary-incompressible cut is required. [step 1.11, construct]

1.13 Hence at most three assigned frontiers lie in any parallelity class. Choose one from each class. These representatives are a disjoint, pairwise nonparallel, CLOSED incompressible family in the original manifold, so there are at most $h(M)$ of them. It follows that $k\le3h(M)$. [step 1.12, construct] ∎
