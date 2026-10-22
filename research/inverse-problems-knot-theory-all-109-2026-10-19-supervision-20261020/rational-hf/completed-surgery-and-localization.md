# Completed surgery and localization: the remaining infinity operation

This is continuation authoring, not independent acceptance. The grading/map
construction in the adjacent files is reused. The purpose here is to keep
the infinity nonvanishing argument separate from its already zero degree.

## Why an infinity triangle cannot be obtained by a naive sum

For a fixed Spin-c cobordism the infinity triangle map has finite sums on
generators. The surgery exact triangle instead sums over Spin-c structures.
Its torus factors have basepoint multiplicities r(r+1)/2 for unbounded r.
In CF⁺ only finitely many survive on any input; in CF∞ they need not.
Accordingly a literal sum of all such maps into the Laurent-polynomial
complex is not justified. Nor can CF⁺ be localized in U to recover CF∞:
every plus-chain element is U-torsion, so that localization is zero.

The correct finite-rank replacement uses K=F₂((U)), the field of formal
Laurent series bounded below in the exponent. A finite free Laurent complex
can be tensored with K. A family of disk or polygon terms with n_z tending
to infinity then converges coefficientwise in K. At each bounded n_z the
admissibility estimate supplies finitely many terms. This construction
therefore permits the all-Spin-c surgery sums without falsely declaring them
Laurent-polynomial maps.

## The completed triangle from an actual torus triad

Represent a knot exterior by a Heegaard surface with one missing meridian.
Choose its three filling slopes β_g,γ_g,δ_g with pairwise intersection one
and γ_g the smoothing of the oriented juxtaposition β_g+δ_g. The other
β,γ,δ curves are small Hamiltonian translates. Shrink the γ smoothing
towards that juxtaposition. The outgoing intersection generators then split
into those nearest the β generators and those nearest the δ generators.
This gives the vector-space splitting B=A⊕C, with inclusion ι, projection
π, and section R of π. It is not initially a splitting of chain complexes.

Make every periodic domain have signed area zero, using winding and an
area form on the complement; choose the two local triangles of its torus
periodic domain to have equal area. Let M>0 be the smallest area of the
old complementary regions. Choose the smoothing and Hamiltonian translates
so their total unsigned area ε is less than M/8. For each intersection
generator choose a reference triangle from a fixed generator and define
its energy level by minus that triangle's area. Periodic ambiguities have
zero area. Changing its U exponent by n changes the level by minus n
times the surface area. Thus the energy filtration is the U-adic filtration
up to finitely many generator-dependent constants.

The triangle maps f:A→B and g:B→C have leading terms ι and π on Im R.
These terms are the unique small triangles in the smoothing bands, with
n_z=0 and count one. Any other nonnegative triangle uses an old
complementary region and has area at least M−ε. Consequently the error
terms lower the filtration by at least M−2ε. The differential also strictly
lowers it, since a nonconstant holomorphic disk has positive area.

The composite gf has a rectangle nullhomotopy H. In the auxiliary torus
there are two triangle families, one for each sign of the odd characteristic
value, with the same n_z=r(r+1)/2 and each counted once. They cancel over
F₂. The accepted rectangle-end/gluing identity then gives

    gf = dH+Hd.

The rectangle used by H must use an old complementary region; there is no
small-band rectangle with these four prescribed corners. Comparing its
area with the two reference small triangles gives RH lower than ι by at
least M−4ε. Thus all the following corrections strictly lower the energy
filtration and converge in K:

    R′ = R Σ_(n≥0) (1−gR)^n,
    f′ = f − d(R′H) − (R′H)d.

The series telescopes to gR′=1. Since g is a chain map,
gf′=gf−dH−Hd=0, and f′ is a chain map. Its leading term is still ι.
Let L be projection onto the A part of B=A⊕C. Then Lf′=1+N with N
strictly filtration decreasing, so ΣN^n is its inverse. Hence f′ is
injective. To prove exactness at B, write a cycle-free element b∈ker g
as ιa+Rc. The equation gb=0 determines c from a because gR is invertible.
This identifies ker g with the graph of a map A→C. The projection L
therefore identifies ker g with A, and Lf′ is invertible, so Im f′=ker g.
The resulting short exact sequence of completed chain complexes gives the
surgery long exact sequence over K. This proves exactness by convergent
Gaussian elimination, not by localizing the plus sequence.

The construction keeps Spin-c labels on the knot exterior. The maps are
the sums over their extending structures, with those exterior restrictions.
The all-structure sums are essential here; the degree formula still applies
to each fixed-structure summand, not to their inhomogeneous sum.

## A useful rank argument which does not assume scalar automorphisms

Suppose a wound zero-surgery complex has been constructed as
Cone(δ_in+δ_out:R→L), and that both δ_in and δ_out induce isomorphisms
on infinity homology. These are the precise geometric inputs of the next
paragraph, not conclusions of the completed triangle itself. Let r be the
K-dimension of HF∞ of the integral homology sphere before surgery. In the
torsion Spin-c summand of zero surgery the two maps have equal degree, so
after one is inverted their sum is 1+A on an r-dimensional vector space,
with A an automorphism. Put h=dim ker(1+A). Its cone has dimension 2h.
This uses equality of kernel and cokernel dimensions of a square matrix;
it does not assume A is a scalar or already the identity.

In a non-torsion Spin-c summand the two maps differ in relative degree by
2n, n≠0. After homogeneous Laurent bases are chosen, the same cone is
1+U^|n|B, or an invertible Laurent multiple of it, with B a constant
invertible matrix. It is invertible over K by its convergent geometric
series. These summands therefore contribute no completed homology.
Cyclic exactness by itself does not determine the map ranks, and hence
does not supply an inequality comparing the two integral-sphere ranks.
The additional actual triangle map must be retained: it vanishes on L
and factors through the already constructed quotient quasi-isomorphism
R→CF∞(Y). Its mapping cone cancels that R/CF∞(Y) pair and leaves L.
Thus the completed surgery triangle gives rank preservation under the
individual ±1 surgery. This use needs the quotient-map factorization;
the dimension 2h of the zero-surgery group alone would not suffice.
An actual all-integral-sphere ±1-surgery induction order is still a
topological prerequisite. The recorded accepted full framed-link Kirby
classification does not by itself record that stronger order, and no
such stronger acceptance is inferred here.

## The exact winding construction still required here

The remaining geometric input is not a new closed-HF invariant. In a
diagram for zero surgery wind one meridian curve N times around a
transverse curve γ. For N large all generators of a fixed Spin-c summand
occur in the winding strip, in paired left/right positions. A periodic
domain has a coefficient at most C−N/2 on one strip side and at least
−C+N/2 outside it. Hence an index-one nonnegative domain from right to
left is either the inward class or that class plus one periodic domain
with its index-correcting sphere term. Any further positive or negative
multiple has a negative coefficient at one of those two places. There
are no left-to-right index-one positive domains. This supplies the actual
subcomplex L, quotient R, and two candidate connecting pieces.

The inward piece is leading-term invertible: its thin paired bigon has
count one and gives a bijection of the generator pairs after a U shift.
Every other inward term uses an old region. Shrink the strip so N times
its area is less than the smallest old-region area. The error then strictly
lowers the energy level, and the geometric-series inverse is legitimate
on each fixed relative degree, which contains finitely many generators.
Likewise the small triangles identify R with the pre-surgery infinity
complex, with the same leading-term argument.

The inward leading term alone does not prove the outward statement. The
following supplies the algebraic part of a more precise way to do that
comparison and isolates its geometric hypothesis.

### A truncation-index argument for the outward map

Suppose the basepoint/winding comparison has identified, for all sufficiently
large positive integers n, the same two plus complexes R⁺,L⁺ and their
connecting maps as

    δ_n = B + U^n A.

Here A induces the inward infinity isomorphism, B is the outward map, and
the zero-surgery Spin-c labels tend out of every finite set. The crucial
geometric requirement is that the plus truncations are the **same** under
these identifications: an infinity identification with n-dependent
generator truncation levels is insufficient. This requirement is explicit
rather than hidden in an infinity-only basepoint move.

Then B induces an infinity isomorphism. Here is a full algebraic proof.
R⁻ and L⁻ have finite free chain modules over F₂[U]. Their relative integral
gradings force every homogeneous torsion summand of homology to be killed
by a power of U. It follows from the negative/infinity/plus long exact
sequence that H(R⁺) and H(L⁺) each consist of r standard plus towers and
a finite-dimensional remainder, where r is their common infinity rank.
The finite remainders and bottom shifts are independent of n by the stated
truncation hypothesis. Infinity homology is free: a nonzero homogeneous
Laurent-polynomial annihilator would have to be a monomial, hence a unit.

Choose homogeneous Laurent bases, shifting their U powers so each parity
has one standard degree. A and B are then constant matrices between the
corresponding parity blocks, with A invertible; a fixed initial shift of
n or a fixed monomial determinant factor has no effect on the argument.
Write det(B+tA)=t^k q(t), q(0)≠0. This is a nonzero polynomial because
A is invertible. If B is singular, k≥1. Substituting t=U^n gives determinant
valuation nk, up to a fixed additive shift.

For a matrix on plus towers, its finite-dimensional kernel-minus-cokernel
index is this determinant valuation. To prove this, dualize a tower to
F₂[[U]] and put the matrix into Smith normal form over that discrete
valuation ring. Multiplication by U^a has a-dimensional kernel and zero
cokernel on the plus tower; multiplication by a series with nonzero
constant term is invertible there, by the locally finite geometric series.
Adding the fixed finite remainders changes the index by the constant
dim(R_reduced)−dim(L_reduced). Thus the index of δ_n is C+nk for a
constant C independent of n.

The zero-surgery plus homology vanishes for all sufficiently large labels.
Indeed the accepted finite hat complex represents only finitely many
Spin-c structures. Outside them the hat group is zero, so the exact hat/plus
sequence makes U an isomorphism on HF⁺. Every individual plus homology
class is killed by some power of U, so this isomorphism forces HF⁺=0.
The short exact sequence L⁺→CF⁺→R⁺ therefore makes δ_n an isomorphism
on homology for all large n, and its index is zero. The identity C+nk=0
for arbitrarily large n rules out k≥1. Hence B is nonsingular. Its
homogeneous Laurent matrix has unit determinant, proving the claimed
infinity isomorphism over the Laurent ring, not only after completion.

What still needs to be authored for this route is the actual **uniform plus
truncation identification** δ_n=B+U^nA. In the winding diagram an inward
domain gains one basepoint multiplicity per step while the outward domain
does not, but this alone does not identify the same-side differentials and
the generator cutoff levels uniformly. The proof must perform those
identifications, not assume them from the source's phrase that the
complexes are identical after moving the basepoint. With that geometric
input the argument above finishes the outward step without presupposing
rank one or scalar automorphisms. After this input, the rank argument
above handles integral homology spheres;
rational homology spheres require the additional primitive-filling/divisibility
induction, and the rational-cobordism map requires the corresponding
nontrivial zero-intersection two-handle maps on the standard exterior
modules. None is asserted proved by this file. Thus the original
rational-ball infinity-isomorphism clause remains explicitly held.

Primary reading for this new operation: OS *Properties and applications*,
math/0105202v4, §9.1 and §10, with the winding domain estimates in §5.2.
The accepted closed-HF and analytic suppliers were not reopened or checked.
