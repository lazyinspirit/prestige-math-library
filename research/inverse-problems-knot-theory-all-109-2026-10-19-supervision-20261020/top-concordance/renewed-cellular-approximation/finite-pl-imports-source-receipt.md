# Finite PL imports for Cantrell–Edwards Lemma 2

This is a new source/operation receipt, not a review or repair of the held exceptional-endpoint draft. It does not adopt the endpoint, cap, or annular theorem.

## Actual source access and reading

E. C. Zeeman, *Unknotting spheres*, Annals of Mathematics 72 (1960), 350–361, was recovered from the public LMS archive:
https://www.lms.ac.uk/sites/default/files/1960%20Unknotting%20spheres.pdf
The durable copy is `annular-primary/zeeman1960-unknotting-spheres.pdf`, with extracted text alongside it. Its 13 physical PDF pages are the JSTOR cover and printed pages 350–361; the cover and article identify the correct title, author, volume, and pages. Printed 350–355 were read completely in extracted text. The entire Lemma 3 and its proof, printed 354–355, were also inspected in rendered page images. Printed 358 was read incidentally; no complete reading of the remaining article is claimed.

V. K. A. M. Gugenheim, *Piecewise Linear Isotopy and Embedding of Elements and Spheres (I)*, Proc. London Math. Soc. (3)3 (1953), 29–53, DOI 10.1112/plms/s3-3.1.29, has NOT been recovered or read. Lawful Wiley/Oxford endpoints returned access blocks. Exact-title/DOI searches and the Ranicki public author memorial did not locate a public primary. No challenge or access restriction was bypassed. Consequently this receipt does not claim to reproduce Gugenheim p.32. The precise dimension-five disk operation needed by Cantrell–Edwards has the independent elementary proof below.

The Cantrell–Edwards primary `annular-primary/cantrell-edwards1963-curves.pdf` was previously read in full (printed 451–457), with printed 451–453 also inspected as images. Its Lemma 2 uses a polygonal spanning disk and finite ambient simplicial moves; the matching of successive annuli remains the E1 author's responsibility.

## 1. A finite embedded disk in a convex five-ball

Let C be a polygonal simple closed curve in a convex closed five-ball B, with finitely many straight edges, and let J be a finite polygonal complex of dimension at most one disjoint from C. Then there is an embedded finite PL two-cell D in B with boundary C, interior in int(B), and D disjoint from J. Here J may be omitted. No claim of an arbitrarily small disk around C is made.

Choose v in int(B) outside all affine spans aff(e union f), where e,f range over edges of C, including equal or incident edges, and outside all aff(e union tau), where tau ranges over simplices of J. Each forbidden affine subspace has dimension at most three. Also exclude the finitely many spans needed to ensure v is not on C or J. A finite union of proper affine subspaces has empty interior: for example, choose a nonzero affine linear equation vanishing on each one; their product is a nonzero polynomial and cannot vanish on an open ball. Thus an eligible v exists by a finite argument.

Take D to be the union of the triangles v*e. Each triangle is nondegenerate. If two cone triangles meet away from their common cone face, the equality of two radial affine combinations implies v belongs to aff(e union f), unless the two base points coincide. The latter possibility gives exactly the common cone face. Thus the triangles constitute an embedded copy of the abstract cone on C, a finite PL disk. Similarly an intersection of v*e with tau would imply v belongs to aff(e union tau); hence D misses J. Convexity places every triangle in B; strict interior placement of v makes the interior of every segment from v to C lie in int(B). This proves the asserted relative-boundary placement even if C meets the boundary of B.

A specified PL-coordinate ball suffices instead of a straight convex ball: carry the data to a standard convex polyhedral ball by the GIVEN PL chart, perform the finite construction, and pull back. This does not manufacture a PL chart for a merely TOP ball. A locally flat spanning disk is not needed for this disk-existence output; if that stronger output is used, it needs the additional argument, not the word “cone.” Zeeman's printed-355 example explains precisely this distinction.

## 2. Actual ambient extension of one triangle move

Let a finite embedded polygonal curve change across one triangle A in R^5 by replacing one boundary arc of A by its complementary arc, with int(A) disjoint from the curve. Keep all the common curve fixed. For every prescribed open neighborhood O of A there is an ambient PL homeomorphism supported in O that realizes this change. Any additional finite protected complex disjoint from A can also be fixed by taking the support sufficiently small. A protected common face may remain when it belongs to the fixed common curve, as in the source construction. This is exactly Zeeman Lemma 3 with n=1 and k=5, not a smooth isotopy-extension assertion.

Here is its actual extension construction. Write the move simplex A as B*C, so the old and new portions are B*boundary(C) and boundary(B)*C. Put b,c at the barycenters of B,C and a at the barycenter of A. The segment X=[b,c] contains a. Since the common part of the two finite curves meets A only in boundary(B)*boundary(C), choose a sufficiently small neighborhood W of X such that joining points of W to this fixed face meets the common curve only in that face. Choose a slightly extended segment Y=[b',c'] in W, ordered b',b,c,c', and a perpendicular three-simplex Z in W with barycenter a. The join

N = Y * boundary(Z) * boundary(B) * boundary(C)

is the small convex five-dimensional neighborhood of int(A) used in the proof. Its size away from A is arbitrarily small. The PL homeomorphism of Y carrying b to c and fixing b',c' extends by the identity on boundary(Z)*boundary(B)*boundary(C), and join-linearly over N. It fixes the entire boundary of N, carries the old arc to the new arc, and fixes the common curve. Extend it by identity outside N. This is the ambient homeomorphism. The source's empty-face conventions apply to a vertex B or C.

For a finite sequence of such legal triangle moves, compose the finitely many homeomorphisms. Its support is contained in the union of the chosen neighborhoods. This gives the finite disk-slide operation WHEN the actual disk triangulation/sweep provides the legal triangles, with their interiors missing the retained curve. It does not assert that every proposed disk exchange is legal: the side of each retained seam, other curve pieces, and protected sets must be checked in the actual construction. In particular it does not validate the previously rejected all-OUTSIDE disk replacement.

## 3. What the existing declared interfaces supply

Only Statements were inspected for the following potentially relevant existing items. The smooth isotopy-extension statements concern smooth embeddings/diffeomorphisms, not ambient PL triangle moves. The declared locally flat codimension-three arc unknotting statement is TOP in its stated four-dimensional product, not the relative PL-five operation. The PL arc-disk statement concerns incompressible three-manifold boundaries; the protected handle-core product statement is dimension three; PL Schoenflies is dimension three. The simplex-preserving PL self-homeomorphism statement supplies an isotopy AFTER such a finite-complex homeomorphism is given, not its extension across a triangle.

Accordingly none of those inspected Statements exports the two precise operations above. This is not an exhaustive assertion about every repository Statement. No accepted proof body was reread or revalidated. These two narrow operations can be supplied directly by the new finite affine proof and the actual Zeeman Lemma 3 proof, respectively. Gugenheim primary access remains unresolved; the mathematical dimension-five disk import does not depend on access to it once the explicit finite proof above is used.

## Boundary of this receipt

The E1 author must still verify the actual Cantrell–Edwards disk-exchange placement, legal finite move supports, boundary-set preservation of each f_i and phi_i, and the whole-boundary matching g_i = psi_i phi_(i+1) phi_i. No infinite composition, endpoint flatness, global closed-ball production, cap straightening, or original theorem is established here. There is no new endpoint review cycle in this receipt.
