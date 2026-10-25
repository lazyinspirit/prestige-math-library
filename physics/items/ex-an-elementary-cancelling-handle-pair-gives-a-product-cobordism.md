---
id: ex-an-elementary-cancelling-handle-pair-gives-a-product-cobordism
kind: example
title: An elementary cancelling handle pair gives a product cobordism
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 9
deps:
- def-h-cobordism
- def-geometric-cancelling-handle-pair
- thm-handle-cancellation
- thm-creation-of-a-cancelling-handle-pair
- def-handle-decomposition-relative-to-the-incoming-boundary
- def-attaching-belt-intersection-matrix-of-adjacent-index-handles
- lem-geometric-cancellation-is-a-unit-entry-in-the-handle-matrix
- lem-compact-transverse-complementary-intersections-are-finite
- def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Introduction and §§1--9, printed pp. 1--113; §5 cancellation, printed pp. 45--66
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 1, printed pp. 1--22 (§§1.1--1.5); Lemmas 1.12--1.13, printed pp. 7--8
verification:
  precheck: pass
---
## Example

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $M_0$ be a closed smooth $n$-manifold, and let $W$ be obtained from the
collar $M_0\times[0,1]$ by attaching a $k$-handle and then a $(k+1)$-handle,
$0\le k\le n-1$, whose attaching sphere meets the belt sphere of the $k$-handle
transversely in exactly one point and lies in the standard complementary
configuration on a disc of the outgoing boundary. Then $W$ is diffeomorphic to
$M_0\times[0,1]$ relative to $M_0\times\{0\}$; in particular $W$ is an
h-cobordism, and if $M_0$ is oriented and $1\le k\le n-2$ the attaching-belt intersection matrix of the connected collar component containing the pair in
the two-index presentation is the $1\times1$ matrix $(\varepsilon)$ with
$\varepsilon=\pm1$ the local intersection sign, normalisable to $(1)$ by
reorienting a core or cocore. Without orientations, in the same middle range, the corresponding one-entry matrix is $(1)$ modulo two. Thus the local model of the theorem's
cancellation step is realised by a genuine product.

## Facts & Assumptions

**Given:** Countable choice, a closed smooth $n$-manifold $M_0$ and a manifold $W$ obtained from the collar $M_0\times[0,1]$ by attaching a $k$-handle $h^k$ and then a $(k+1)$-handle $h^{k+1}$, $0\le k\le n-1$, whose attaching sphere meets the belt sphere of $h^k$ transversely in exactly one point and lies in the standard complementary configuration on a disc of the outgoing boundary.

[F1] A consecutive pair is geometrically cancelling when the attaching sphere of the upper handle meets the belt sphere of the lower one transversely in exactly one point ([[def-geometric-cancelling-handle-pair]]).

[F2] A geometrically cancelling consecutive pair may be deleted from a handle presentation by a diffeomorphism relative to the incoming boundary, and the diffeomorphism may be taken to act only in a collar of the affected boundary disc and in the two handles, carrying later attaching data along ([[thm-handle-cancellation]]).

[F3] On the connected component containing the prescribed disc, every handle presentation may be modified by introducing a geometrically cancelling pair of consecutive indices at any prescribed disc of the outgoing boundary, without changing the manifold relative to the incoming boundary ([[thm-creation-of-a-cancelling-handle-pair]]).

[F4] A finite handle decomposition relative to $M_0$ with empty handle list presents the collar $M_0\times[0,\varepsilon]$, and the manifold is diffeomorphic to it relative to $M_0$ ([[def-handle-decomposition-relative-to-the-incoming-boundary]]).

[F5] In the situation of the adjacent-index matrix definition, if the attaching sphere of the $(k+1)$-handle meets the belt sphere of the $k$-handle transversely in exactly one point, the oriented entry is $\pm1$, equal to the local intersection sign of that point ([[lem-geometric-cancellation-is-a-unit-entry-in-the-handle-matrix]], [[def-attaching-belt-intersection-matrix-of-adjacent-index-handles]]).

[F6] Under the complementary-dimensional transversality hypotheses the transverse intersection of a compact and a closed factor is finite, so the intersection number is a finite sum of local signs ([[lem-compact-transverse-complementary-intersections-are-finite]]).

[F7] A compact smooth cobordism triad is an h-cobordism when both face inclusions are homotopy equivalences ([[def-h-cobordism]]).

## Verification

**Proof technique:** direct.

1.1 The given configuration is exactly the hypothesis of [F1]: the handles $h^k$, $h^{k+1}$ are consecutive, the attaching sphere of $h^{k+1}$ meets the belt sphere of $h^k$ transversely in exactly one point, so $h^k,h^{k+1}$ form a geometrically cancelling pair. [F1, given]

1.2 Suppose $M_0$ is oriented and $1\le k\le n-2$, and use the induced orientations on the handles and middle level. Restrict to the connected collar component containing the prescribed boundary disc: its outgoing boundary before the pair is connected, as required by the matrix definition, and every other component has an empty handle list. This component’s two-handle presentation has a single $k$-handle and a single $(k+1)$-handle, so by the matrix definition the intersection matrix is the $1\times1$ matrix with the single entry given by the oriented intersection number of the two spheres; by [F5] that entry is $\pm1$ equal to the local intersection sign of the unique transverse point, and the finiteness underlying the count is [F6]. Without orientations [F5] supplies instead the mod-two entry $1$. Reorienting the core of $h^k$ or the cocore of $h^{k+1}$ reverses the induced orientation of the corresponding sphere and hence the sign of the entry alone, so the matrix is normalisable to $(1)$. [F5, F6, given]

1.3 Conversely, by [F3] a geometrically cancelling consecutive pair with the standard complementary configuration may be inserted at any prescribed disc of the outgoing boundary of any presentation without changing the presented manifold relative to the incoming boundary; hence the displayed configuration is exactly the inverse of a trivial local modification of the collar. [F3, given]

2.1 Apply the cancellation theorem to the connected collar component containing the given outgoing disk, and leave all other collar components fixed. For the geometrically cancelling pair of step 1.1, the manifold $W=M_0\times[0,1]+h^k+h^{k+1}$ is diffeomorphic to the collar $M_0\times[0,1]$ relative to $M_0\times\{0\}$, and the diffeomorphism may be taken supported in a collar of the affected disc and the two handles; the cancelled manifold is presented relative to $M_0\times\{0\}$ by the empty handle list, which by [F4] is diffeomorphic to $M_0\times[0,\varepsilon]$, and the collar reparametrization gives $M_0\times[0,1]$. [F2, F4, step 1.1]

3.1 The diffeomorphism $F:W\to M_0\times[0,1]$ of step 2.1 is the identity on $M_0\times\{0\}=M_0$ and carries the second face of $W$ onto $M_0\times\{1\}$, so it conjugates the inclusion $M_0\hookrightarrow W$ to the standard inclusion of the face $M_0\times\{0\}$ and the other face inclusion to the standard inclusion of $M_0\times\{1\}$ composed with a diffeomorphism of that face; both standard inclusions are homotopy equivalences (via the projections $(x,t)\mapsto(x,i)$ and the linear homotopies). Hence both face inclusions of $W$ are homotopy equivalences and, by [F7], $W$ is an h-cobordism. [F7, step 2.1]

4.1 Therefore an elementary cancelling pair attached to a collar builds a genuine product: $W\cong M_0\times[0,1]$ relative to $M_0\times\{0\}$, so $W$ is an h-cobordism, the connected component containing the pair has two-index intersection matrix $(\varepsilon)$ with $\varepsilon=\pm1$ normalisable to $(1)$ when $M_0$ is oriented and $1\le k\le n-2$ (without orientations, in the same middle range, use the mod-two entry), and by step 1.3 the configuration is precisely the inverse of the trivial local modification that inserts a cancelling pair. This is the local model of the cancellation step of the h-cobordism theorem. [F1, F2, F3, step 1.2, step 1.3, step 2.1, step 3.1] ∎
