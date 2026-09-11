# Choice-free local Hom-bundle repair plan

Read before proposed authoring: the four current batch9 consumers, the complete
published dual/Hom theorem, the complete countable-cocycle and countable-choice
Lindelof suppliers, hereditary second countability, product-of-countable,
open-surjection quotient, and smooth matrix inversion. Group e has accepted the
four consumers using the affected full existence clause. No batch9 item has yet
been changed by this audit.

The published proof omits topology and second countability. Its available
countable-cover construction needs countable choice, but this does not show
choice is necessary. The following finite-product open-quotient construction
avoids selecting any countable family of frames.

Let A and B be supplied smooth bundles of fixed finite ranks r,s over M, with
Hausdorff second-countable total spaces, including the boundary convention.
For r>0 define D to consist of tuples (a_1,...,a_r,b_1,...,b_r) in A^r times B^r
whose entries lie over a common p and whose a-tuple is a basis of A_p.
Give D the subspace topology. Choose one countable base of A and one of B;
this is a finite choice of witnesses, valid in ZF. Their finite product boxes
have indices in a finite power of N, countable by repeated explicit pairing.
Their traces give a countable base of D. No smooth-manifold structure on the
ambient fibre product or frame space is required for this argument.

Let H be the fibrewise set of linear maps A_p to B_p. The map q:D→H sends a
tuple to the unique linear map taking a_i to b_i. It is surjective: a basis
exists in each individual finite-dimensional fibre; no simultaneous selection
of bases occurs. Give H the quotient topology from q.

For any one common local trivialization over U, D over U is homeomorphic to
U times GL(r,R) times Mat(s,r). In these coordinates q followed by the proposed
Hom chart is (p,C,V)→(p,V C^{-1}). This is a continuous open surjection:
(p,C,V)↦(p,C,V C^{-1}) is a homeomorphism, inverse (p,C,T)↦(p,C,TC), followed
by an open coordinate projection. Consequently each proposed Hom chart is a
homeomorphism for the quotient topology. To justify restriction, D over U is
open and saturated; the quotient-topology criterion says H over U is open
and its restricted quotient topology agrees with the restriction. Local
openness of q on every such D over U makes q globally open.

The images under q of the countable base of D form a countable base of H:
if h belongs to open O, pick one d above h and a basic neighbourhood C of d
inside q^{-1}(O); then h belongs to open q(C) contained in O. This uses only
one existential witness for the assertion, not a choice function.

Distinct maps over distinct points have disjoint inverse images of base
neighbourhoods. Distinct maps over one point have disjoint neighbourhoods in
one Hom chart, itself an open subset of H. Thus H is Hausdorff. Hom chart
changes are T↦h T g^{-1}, hence smooth with smooth inverses by matrix
multiplication and smooth inversion. For boundary charts use local smooth
extensions of the finitely many matrix entries; invertibility persists on a
smaller ambient neighbourhood because the determinant is nonzero. Rank-zero
matrices are unique. The chart domain is a base half-space chart times a
Euclidean matrix space, again a half-space chart. H is therefore a smooth
bundle in the exact convention. Its topology and maximal smooth atlas are
canonical because every common local trivialization yields the same chart.

For r=0, H is the rank-zero bundle canonically M; for s=0 the same is true.
The empty base gives the empty total space. The dual is Hom(A,M×R), whose
trivial target has an explicit countable product base. End and iterated Hom
follow by finite repetition. Tensor products then use the existing proved
multilinear currying and product-frame calculation, with no new choice.

Proposed placement: inline this complete general Hom construction into the
existing audited definition of a bundle connection, before Omega^1. Replace
its dependency on the defective existence theorem by the precise elementary
topology, matrix-inversion and bundle-definition suppliers; the three other
current consumers use this new inline construction through that earlier
existing item. Preserve no-choice local operator claims, since the global
construction above itself is choice-free. Reconcile manifests, exact contracts,
coverage and current Step5 decisions after authoring. No new item or pair.

Primary check: Brian Conrad, *Linear algebra operations on vector bundles*,
section3 through Examples3.1–3.2, printed pp7–9,
https://math.stanford.edu/~conrad/diffgeomPage/handouts/bundleops.pdf.
Read the full relevant topology/gluing and Hom/dual chart discussion. It
corroborates the local matrix construction and dual=Hom(A,trivial line),
including premanifolds with corners. The finite-product open-quotient proof
of second countability above is supplied locally; it is not attributed to a
source claim about weak choice. No whole18-page source reading is asserted.
