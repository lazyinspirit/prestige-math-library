# Completion assembly for an actual smooth stabilized product

This proves the assembly and choice step in the special product-end case.
The finite approximate-completion operation and controlled smooth slab-product
operation are explicit hypotheses below; they are not treated as already proved.
The source for the general assembly is Quinn, *Ends of maps I*, §2.8,
printed pp.284–285, newly read in full cached OCR along with §§1–2 pp.279–285,
§5 pp.301–307, §6 pp.308–314 and §7 pp.314–320. The separate finite projection
operations in this directory contribute to the finite approximate-completion
operation, not to the existence of the initial smoothing.

## Input

Let B be a compact topological five-manifold, and suppose an **actual** smooth
six-manifold P and a homeomorphism θ:P→B×R are supplied. Smooth product data
are supplied near the prescribed boundary or closed product region D in B.
Write e=pr_B θ and t=pr_R θ. Only the positive end is to be completed.
Choose an actual smooth hypersurface below t=0 and work above it; this boundary
is part of the prescribed relative data. All constructions below agree with
the prescribed product near D. An exhaustion handles a noncompact B if that
additional locally finite control has been proved; no such extension is
silently included here.

Assume these two finite operations in the smooth category:

1. Given a positive tolerance η, sufficiently long and sufficiently controlled
   finite tame structures yield an η-approximate completion. The frontier of
   that approximate completion lies between the first and last neighborhoods
   in the supplied finite structure, and the operation preserves D.
2. For successive sufficiently accurate approximate completions, their compact
   intervening slab is a controlled h-cobordism and has a product extending the
   prescribed D-product. This includes the controlled homology-to-homotopy and
   duality step; an isomorphism of chain complexes alone is insufficient.

The second operation is used only on the already smooth six-manifold P. It
does not assume a smooth structure on B and does not apply the five-dimensional
controlled theorem to the unsmoothed comparison region.

## Independent finite structures in prescribed bands

Fix height bands J_i=[3i,3i+1], for positive integers i, and positive error
budgets ε_i with finite sum, tending to zero. Choose the approximation
tolerances η_i in advance small enough for the adjacent slab-product errors
ε_{i−1}, ε_i. The needed finite number j_i of tame stages and their control
tolerances are determined by operation 1. None of these choices depends on a
previously constructed approximate completion.

Here the product topology gives more than general tameness. In each fixed
band one can construct an arbitrarily long finite tame structure, with its
projected homotopies stationary in B. To see this, choose sufficiently many
ordered heights in that band. Approximate the continuous function t by a
smooth function g with a positive error smaller than all the successive
height gaps, preserving the prescribed smooth data. Choose regular levels
of g between those heights. Their superlevel neighborhoods U_j satisfy

{t>s_j+α} ⊂ U_j ⊂ {t>s_j−α},

with the intervals [s_j−α,s_j+α] pairwise disjoint and ordered. Their frontiers
are genuine smooth compact hypersurfaces: compactness follows because B is
compact and the frontier lies in a bounded θ-height slab. Smooth approximation
and these finitely many regular values are routine smooth operations on the
already smooth P; no topological smoothing theorem is being used here.

The tame deformation is explicit. Pick c between the upper height bound for
U_{j+1}'s frontier and the lower bound for U_{j+2}'s frontier, and replace
t by min(t,c), linearly through the homotopy parameter, using θ coordinates.
The shell U_j−U_{j+1} is fixed: its heights are below c. Points moved by the
clamp remain in U_j because the entire interval from c upwards lies in U_j.
The image misses U_{j+2}, since its height is below U_{j+2}'s lower bound.
Projection to B is exactly constant during this homotopy.

The controlled 0- and 1-connectedness of the buffered inclusions follows
equally explicitly. A constant-height section between two frontier bounds
lies in the buffered annular region. Given a finite relative two-complex,
retain its B-coordinate and extend/interpolate its height into that section;
the extra outer buffer ensures that the interpolation remains in the larger
annulus. A vertical interval changes no B-coordinate. For the universal
local cover, apply this construction over a contractible coordinate ball of B;
the local end group is trivial. Thus the finite structures required by
operation 1 are available in every fixed J_i with arbitrarily small control.

## Countable Choice rather than a dependent selection

For each i let A_i be the nonempty set of all η_i-approximate completions
obtained by operation 1 from a tame structure whose frontiers lie in J_i,
together with their contraction data and exact D-agreement. These sets are
specified independently of one another. Countable Choice selects one
element V_i in each A_i. Every V_i contains the sufficiently high product
tail and excludes the sufficiently low product tail. Since the bands are
strictly ordered, V_{i+1} lies in the interior of V_i automatically, regardless
of which elements were selected. Their intersection in P is empty.

This avoids the invalid inference that an arbitrary recursive sequence of
existential neighborhood choices follows from Countable Choice. Disjoint
prescribed height bands supply the needed independent selections in this
particular product-end problem. If operation 1 lacks the asserted location
control, this argument cannot be used.

By operation 2, each slab closure(V_i−V_{i+1}) admits an ε_i-controlled
product with the required D-restriction. Once the V_i have been selected,
these product-existence problems are again independent and Countable Choice
selects all the products. Products are parametrized from the same actual
frontier, so their boundary maps compose. No infinite compatible-choice
problem remains: concatenate the chosen products in increasing i.

## Actual completion and extension of its map

Identify the concatenated collar with ∂₀V_1×[0,1) by assigning the i-th slab
a consecutive parameter interval with lengths, for example, 2⁻ⁱ. Adjoin
∂₀V_1×{1}. This is an actual smooth collar completion: transport the product
smooth structure through the concatenated smooth slab parametrizations.
At a finite seam use the collar parametrizations in which the slab-product
maps are products; alternatively insert the elementary collar straightening
at that seam before concatenation. Its support is confined to that finite
slab neighborhood. No compatibility at a point of P involves infinitely
many such seams, because the slabs escape to the positive end.

For each starting point x in the first frontier, its projected collar ray
has movement at most ε_i in the i-th slab. The sum of the tails tends to
zero uniformly in x. Since B is compact and hence complete in a compatible
metric, e(x,s) has a uniform continuous limit as s tends to 1. Define e on
the new boundary by that limit. Uniform convergence proves continuity on
the closed collar, including simultaneous variation of x and s. The completed
map is proper because its domain is obtained by filling the sole escaping
end, with compact B and compact frontier. The prescribed D-map extends as
the original product by the exact relative agreements.

This proves actual completion assembly from the two stated finite operations
using Countable Choice. It does not prove that the new boundary map is a
homeomorphism. Turning its cellular boundary map into a homeomorphism is a
separate five-dimensional cellular-map approximation operation. It also does
not construct the initial actual smoothing on P from a stable tangent lift.

## Local variant needed near the zero cylinder

For the comparison problem one needs completion only over a neighborhood of
the compact cylinder C=N×I in the possibly noncompact B=W. One should not
manufacture a compact B with an unsupplied smoothing on a new side boundary.
The same assembly works locally provided the two finite operations have their
explicit relative-over-C forms, with all estimates on a fixed relatively compact
neighborhood C⁺ of C. Those are the forms stated in Quinn 2.5 and 2.7; their
actual proofs, rather than their citations, are needed for the full supplier.

Choose a compatible proper metric on B and positive nested metric buffers
about C with closures in C⁺. Take the sum of all collar-path error budgets
smaller than the distance between the innermost buffer and the complement
of C⁺. Apply the finite operations over C⁺, preserving the prescribed D-data.
Start the concatenated rays on the open part of ∂₀V_1 whose projected image
lies in the innermost buffer. Every subsequent ray segment then remains over
C⁺; none encounters the uncontrolled edge of a product chart. The same
summable estimate proves a continuous limit on the new boundary patch.

Properness is local over the innermost buffer. If K is compact there, every
ray limiting to K starts in the first frontier over the closed metric
Σ ε_i-neighborhood of K. This is a compact set in the proper metric, and
that part of the first frontier is compact: its θ-heights lie in the first
bounded height band. The completed collar over K is therefore contained in
the continuous image of this compact starting set times [0,1]. It is closed
there, hence compact. This proves the needed local properness without a
compactification of B or a smoothing of a side boundary.

The finite tame structures in each height band are constructed over C⁺ as
above. Outside a slightly larger relatively compact neighborhood they need
not be changed, so the local construction uses only compact pieces of each
slab. Their independent selection and automatic nesting over C⁺ use the
same Countable Choice argument. The output is an actual smooth completion
over a neighborhood of C, conditional on the explicitly relative finite
operations and the initial actual smooth stabilized P. It is sufficient in
location for the required neighborhood smoothing, after the separate cellular
boundary-map approximation; it is not a claim of global completion over all W.
