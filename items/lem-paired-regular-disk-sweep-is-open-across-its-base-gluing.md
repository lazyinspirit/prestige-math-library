---
id: lem-paired-regular-disk-sweep-is-open-across-its-base-gluing
kind: lemma
title: A paired regular disk sweep is open across its base gluing
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- def-countable-choice-principle-for-foliation-pair
- lem-canonical-jordan-cap-bundle-develops-coherently-over-every-positive-band
- lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
- lem-c2-inverses-and-scalar-return-roots
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 13
verification:
  precheck: pass
sources:
  scraped: []
  references:
  - title: S. P. Novikov, The Topology of Foliations (complete English translation)
    url: https://homepage.mi-ras.ru/~snovikov/23.pdf
    locator: §8, Theorem 8.1 and its proof, printed pp. 26-27; finite seam-gluing adapter supplied locally
---

## Statement

Let $D$ be an actual compact C² disk region homeomorphic to the closed disk, and let G:D×[a,b]→M be a C² immersed disk sweep, transverse in the time direction with one constant sign. Suppose an interior subdisk U⊂D at the b-base is identified to the whole a-base by a diffeomorphism h:D→U satisfying G(y,a)=G(h(y),b), with their leafwise tangent maps agreeing under h. On the quotient X, the induced map is locally open at every interior seam point; its compact image has boundary contained in the image of ∂X. No global injectivity is required.

## Facts & Assumptions

**Given:** A $C^2$ immersed disk sweep $G:D\times[a,b]\to M$ transverse in the time direction with one constant sign, and a base identification $h:D\to U$ of an interior subdisk $U$ at the $b$-base with the whole $a$-base such that $G(y,a)=G(h(y),b)$ and the leafwise tangent maps agree under $h$.

[F1] The in-pair item [[lem-canonical-jordan-cap-bundle-develops-coherently-over-every-positive-band]] supplies coherent regular $C^2$ cap development with $V$-orbit tracks. The base diffeomorphism $h$ and the equality of the two base maps and their leafwise differentials are separate hypotheses of this item, not conclusions of that supplier; the sibling-pair item `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups` supplies the leafwise disk and plaque structure used locally.

[F2] A $C^2$ map with invertible derivative has a $C^2$ local inverse, and a $C^2$ scalar equation with nonzero normal derivative has a unique local $C^2$ root ([[lem-c2-inverses-and-scalar-return-roots]]).

[F3] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).



## Proof

**Proof technique:** direct.

1.1 At a seam point choose a small leafwise plaque chart around its common image. The $a$-base and $b$-base maps have invertible leafwise differentials by the immersion and agreement hypotheses, so after shrinking each has a plaque inverse branch and its nearby time slices are graphs over that plaque patch by [F2]. The differential in the time direction has the same nonzero transverse sign on both sheets. The piece of the cylinder adjoining the $a$-base has parameter $t>a$, whereas the piece adjoining the $b$-base has $t<b$; therefore their transverse graph coordinates occupy opposite sides of the common base plaque, with uniform nonzero first derivative after shrinking. Each half supplies a local half-neighbourhood of that plaque, and their union supplies a full neighbourhood; since the leafwise identification $h$ pairs the base inverse branches, this is precisely a neighbourhood of the seam point in the quotient $X$. [F1, F2, given, construct]

2.1 Away from the seams, $G$ is an ordinary local diffeomorphism by its two leafwise directions and the transverse time direction, so every interior point of $X$ has locally open image. Because $X$ is compact and $M$ is Hausdorff, the image $f(X)$ is closed. If $z\in f(X)$ does not lie in $f(\partial X)$, every preimage of $z$ is an interior point and any one of them gives a neighbourhood of $z$ contained in $f(X)$, so $z$ is not a boundary point of $f(X)$; hence $\partial f(X)\subseteq f(\partial X)$. [F2, step 1.1]

3.1 This proves exactly the seam openness and the image-boundary containment, allowing multiple image sheets and not substituting an immersion for an embedding. On the unglued $b$-base annulus $D\setminus U$ the available cylinder side is $t<b$, which is the positive transverse side when $G_t$ is negatively transverse, so at each regular annulus point of the unglued part the positive transverse direction points inward to the locally occupied image side; the lateral fence and possible multiple boundary sheets still require a separate no-exit argument, so no further conclusion is asserted here. The construction uses finitely many charts and inverse branches, hence only the standing countable choice from [F3]. [F1, F2, F3, step 2.1] ∎
