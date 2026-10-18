---
id: thm-quiver-quotient-stack-borel-moore-operation-package
kind: theorem
title: Borel–Moore operations for quiver extension and flag quotient stacks
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
- def-axiom-of-choice
- def-intrinsic-quotient-stack-borel-moore-grading
- lem-quiver-parabolic-levi-borel-model-comparisons
- lem-quiver-exact-sequence-correspondence-is-smooth-and-proper
- thm-constructible-six-functors-proper-base-change-and-verdier-duality
- lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Maxim Kontsevich and Yan Soibelman, Cohomological Hall algebra, exponential
      Hodge structures and motivic Donaldson-Thomas invariants
    url: https://arxiv.org/pdf/1006.2706v2
    locator: Sections 2.1–2.3, PDF pp. 8–11; ordinary construction and flag associativity,
      read in full; the model and normalization proofs here are local expansions.
proof_strategy: direct
---

## Statement

Assume AC and use the intrinsic rational Borel–Moore grading of [[def-intrinsic-quotient-stack-borel-moore-grading]]. For any finite quiver over $\mathbb C$, the representation, extension and finite block-flag stacks admit the following operations: representable proper invariant-flag-forgetting maps have degree-zero proper pushforward; diagonal-block-forgetting maps have smooth pullback of degree twice their relative stack dimension. For the exact-sequence map $q$ this degree is $2(e-u)=-2\chi_Q(\mathbf b,\mathbf a)$, where $e=\sum_{h:i	o j}b_i a_j$ and $u=\sum_i a_i b_i$.

These operations are independent of the indicated induced-variety and frame presentations, commute with external products, compose with the positive complex orientation, and satisfy proper/smooth base change and Cartesian pasting for the representation/extension/flag diagrams. This includes the two 2-Cartesian squares of three-step quiver flags. Loops, multiple arrows, zero coordinates and the empty quiver are allowed. This statement concerns these particular quotient stacks and maps; it is not a six-functor assertion for arbitrary Artin stacks.

## Facts & Assumptions

**Given:** a finite quiver, its ordered block decompositions, and rational coefficients.

[F1] [[lem-quiver-exact-sequence-correspondence-is-smooth-and-proper]]: the upper arrow locus has free off-diagonal rank $e$, the parabolic is $Utimes L$ with $\dim U=u$, and invariant-flag forgetting is representable proper. The proof constructs its relative closed incidence schemes and includes all rank-zero and loop cases.

[F2] [[def-intrinsic-quotient-stack-borel-moore-grading]] and [[lem-quiver-parabolic-levi-borel-model-comparisons]]: the intrinsic index, actual induced varieties, natural degree-preserving Levi/total-GL frame comparison and coherent product models. These give a proved interface for the change of presentation used below.

[F3] [[thm-constructible-six-functors-proper-base-change-and-verdier-duality]]: on separated finite-type varieties, and for equivariant maps with a single fixed GL-product group, proper trace, smooth complex orientation, external products, proper/smooth exchange, composition and Cartesian pasting are coherent. No change-group extension is imported from that theorem.

[F4] [[lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom]]: each fixed finite collection of bounded presentation coefficients, morphisms and equations has faithful comparison on sufficiently acyclic product frame models. Their unshifted bounded presentation coefficients are fixed; auxiliary dualizing shifts are removed by the stated normalization before this bounded-Hom comparison is used.

[A1] [[def-axiom-of-choice]]: AC is inherited through [F1]–[F4]; the explicit block charts and orientations make no additional choice.

## Proof

**Proof technique:** direct.

1.1 For two blocks, r:T -> S induced by L subset P is a G-equivariant
Zariski locally trivial affine-space bundle of rank u. Over a P-frame
chart its fibre is P/L=U. If p=(u0,l) then its action on U is
u -> u0+l u l^{-1}; hence the transitions are affine linear. The map
v:Y->Z is an L-equivariant vector-bundle projection of rank e.
Write their induced stack maps as

    R=[Y/L] --r--> E=[Y/P] --q--> B=[Z/L],
                       q r = v.

For any locally trivial complex affine-space bundle a:A->B of rank d,
a^!:B_i(B)->B_{i+2d}(A) is an isomorphism: in ordinary cohomology
a^* is an isomorphism by contractibility on each local chart and Cech
pasting; smooth dualizing orientation identifies BM pullback with this
map after the 2d shift. This argument applies equivariantly on every
fixed-group frame model and hence on the stable groups. It is not a
claim that the bundle admits a global zero section. It applies to r
and v, so define

    q^! := (r^!)^{-1} v^! : B_i(B) -> B_{i+2(e-u)}(E).       (3)

In this formula identify the R presentation by (2). Thus every map in
(3) is an already constructed fixed-group operation or the inverse
of a proved isomorphism. This supplies the needed nonrepresentable
smooth pullback without asserting that q is representable. [F1, F2, F3, given, construct]

2.1 For a finite block flag, P/L has the strictly upper block unipotent
coordinates. Filter by distance from the diagonal; the successive
quotients consist of the independent matrices in that distance and
are vector groups. On pivot charts the quotient by each filtration
step is a locally trivial affine bundle. Applying the preceding
argument successively proves that r^! remains an isomorphism of shift
2 dim(P/L), independent of the filtration: after pullback to the
adapted-frame charts it is the single positive complex Thom class
of the ordered upper blocks, and ordinary smooth composition gives
that class in every filtration order. The arrow-block projection has
all corresponding free upper blocks, so (3) has shift twice

    sum_{s<t} (sum_{h:i->j} d_i^t d_j^s - sum_i d_i^s d_i^t).

In particular successive diagonal-forgetting smooth maps compose
with exactly this orientation and degree. This proves the flag
composition rule used below, rather than assuming it for q. [F1, F2, F3, step 1.1, construct]

3.1 The proper p:E->M_d is represented, using E=[S/G], by the
G-equivariant proper incidence map S->X_d. Its finite stage

    S x_G U -> X_d x_G U

is proper: it is the associated closed subvariety in the relative
product Grassmannian over X_d x_G U. The common auxiliary dimension
dim U in (1) proves that p_* has intrinsic degree zero. Naturality
of the proper trace under the product-resolution comparison proves
independence of U and composition. [F1, F2, F3, construct]

4.1 Here are details ensuring that finite-stage proper/smooth base change
and pasting give the interface needed for CoHA. In a 2-Cartesian square
of these particular quotient stacks with a representable proper map f
and a smooth block-forgetting map q, first choose a free frame cover
C_N->C of the common target, with auxiliary dimension t. Since f is
representable, A_N=A x_C C_N is a separated finite-type variety and
A_N->C_N is proper. Use the induced incidence description to see it
as the closed subvariety of the relative flag bundle; no additional
source frame is adjoined to that proper arrow.

If B->C is nonrepresentable, choose B's adapted-frame presentation
and a free frame space of dimension w for its total GL product.
Its associated principal-group quotient B_N over C_N is a separated
finite-type variety. This follows directly from the upper-block
vector-bundle chart over flags in section3; after choosing target
frames, its map to C_N has fibre (A^e x U)/U_unip. The action is free
on the frame factor. Local P-frame sections identify this quotient
with an affine bundle over the corresponding frame quotient, so
B_N->C_N is smooth of dimension r+w, where r=e-u. Put

    D_N = A_N x_{C_N} B_N.

This is now an actual Cartesian square of varieties; D_N->B_N is
proper and D_N->A_N is smooth of dimension r+w. Its four maps are
the finite representatives of the original square. The normalization
of C_N,A_N uses t, and of B_N,D_N uses t+w. Thus the ordinary smooth
shift 2(r+w) becomes 2r after (1), while both proper shifts remain
zero. Ordinary coherent proper/smooth base change applies, so

    q^! f_* = f'_* (q')^!                               (4)

in the intrinsic groups. The map called q^! here is (3): add the
Levi frame as well and compare on their product. On the common
adapted-frame principal bundle both maps are the same vector-bundle
orientation, with the u-dimensional affine-bundle orientation
inverted. The faithful bounded-Hom comparison in section3 identifies
them before passing to groups. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, construct]

5.1 This also proves that these constructions do not depend on cover
or presentation. Any two finite choices are compared by their product;
on that product the maps are ordinary unit/counit traces and positive
complex smooth orientations, and the comparisons are natural in these
maps. For a fixed finite collection of maps or equations, choose all
frame gaps greater than the finitely many bounded-Hom comparison
bounds of their inputs, outputs, units, counits and orientation maps.
All objects descend from bounded constructible coefficients on the
fixed finite presentation varieties. Faithfulness then reflects the
finite-stage equality. One does not choose one N for every degree.

For a pasted pair of Cartesian squares, use the same target frame
cover, add the product of the finitely many source frame spaces, and
pull back the proper arrows rather than adding independent frames
to them. This realizes all corners of the pasted diagram as ordinary
Cartesian squares simultaneously. The ordinary six-functor theorem
says their exchange maps paste: expanding them as adjunction mates
reduces the equation to the composition of units/counits and the
triangle identities. The product-resolution comparisons preserve
those units and counits by their common principal-bundle identity.
Therefore (4) respects Cartesian pasting, composition of proper maps,
composition of block-smooth maps, identities and external products.
For external products use product frame covers; orientations concatenate
in the displayed order and their real degrees are even. No unproved
stack formalism, transversality, or finite-dimensional cohomology
of an infinite classifying space is used. [F2, F3, F4, step 4.1]

6.1 Steps 1.1–5.1 construct the stated operations, degrees, comparison independence and coherence. AC enters through [A1]. [A1, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎
