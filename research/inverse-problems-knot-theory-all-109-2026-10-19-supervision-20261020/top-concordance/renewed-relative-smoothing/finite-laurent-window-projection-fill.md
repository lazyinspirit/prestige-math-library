# Finite Laurent-window realization of a partial projection

This supplies one actual algebraic operation needed in the independent
controlled-end-completion route. It does not supply a smoothing of W.

The new source is Quinn, *Ends of maps I*, printed pp.324–325, especially the
projection argument on p.325. Read the cached OCR of pp.321–330 in full and
visually checked p.325 against the supplied page image, where the displayed
Laurent-window formulas are legible. The construction below expands that
particular argument. The source's other operations are not thereby certified.

Let R be a unital ring and G a finite free R-module. Suppose e:G→G is a
partially defined geometric projection: its failure to satisfy e²=e is confined
to an inner bad region. Let G=G₂⊕G₁⊕G₀ be the geometric decomposition into an
outer region, an intermediate annulus, and an inner region, separated by
buffers wider than the propagation of e and e². Write G₁₂=G₁⊕G₂ and
G₀₁=G₀⊕G₁, with their evident inclusions i_j and projections p_j.
The exact algebraic hypotheses required of those buffers are

(e²−e)i₁₂=0,  p₂(e²−e)=0,  p₀ e i₂=0,  p₂ e i₀=0.

These may instead be supplied directly as finite matrix identities. An
application using distance buffers must prove that its distances and
propagation imply these identities. All modules and matrices here are finite.

Pass temporarily to the Laurent ring S=R[t,t⁻¹] and set

H=e+t(1−e),   J=e+t⁻¹(1−e).

Direct multiplication gives
HJ=JH=1+(2−t−t⁻¹)(e²−e).
No K-theory assertion is needed for this identity. If i:G₁₂[S]→G[S] and
p:G[S]→G₁₂[S] denote the inclusion and projection, the first buffer identity
gives pJHi=1. Set q=1−HipJ. Then q²=q, qHi=0, and pJq=0.
The matrix

A = ((Hi,q),(0,pJ)): G₁₂[S]⊕G[S] → G[S]⊕G₁₂[S]

is an actual isomorphism. Its explicit inverse sends (w,z) to
(pJw, Hiz+qw); multiplying both compositions verifies the assertion with the
three identities just listed. To verify the support, p₂ e i₀=0 gives
p₂Hip=p₂H, and hence p₂q=p₂−p₂HJ=0 by p₂(e²−e)=0. Thus
im(q)⊂G₀₁[S]. Also p₀ e i₂=0 gives Ji₂⊂G₁₂[S], and therefore
qi₂=i₂−HJi₂=0. These are the actual outer-agreement identities used below.

For a finite free R-module V, write V[a,b] for the direct sum of t^j V with
a≤j≤b, allowing infinite endpoints. Put
F=G₁₂⊕G and F′=G⊕G₁₂. Then F[S] is the direct sum of its positive and
negative Laurent half-modules F[0,∞] and F[−∞,−1]. Their A-images L₊ and L₋
are complementary R-submodules of F′[S], because A is an isomorphism.

Identify F′[S]=G₂[S]⊕B[S], with B=G₀₁⊕G₁₂. Since A and A⁻¹ have finite
Laurent degree bounds, there is a finite integer s such that

T₊=G₂[1,∞]⊕B[s+1,∞] ⊂ L₊,

T₋=G₂[−∞,−1]⊕B[−∞,−s−1] ⊂ L₋.

One obtains such s by taking the maximum of the finitely many exponents in
the matrix and inverse, plus the two buffer margins. This is a finite maximum,
not a selection from an arbitrary family. On G₂ the shifted cutoff is exactly
the shift in H=e+t(1−e): the e-summand starts at degree zero and the
(1−e)-summand at degree one.

Let C=G₂[0,0]⊕B[−s,s], a finite free R-module, and let π:F′[S]→C be the
projection with kernel T₊⊕T₋. The two submodules π(L₊) and π(L₋) are
complementary in C. They span because L₊+L₋=F′[S]. To check intersection,
suppose π(u₊)=π(u₋), with u₊∈L₊ and u₋∈L₋. Write
u₊−u₋=v₊+v₋, with v₊∈T₊ and v₋∈T₋. Then
u₊−v₊=u₋+v₋ lies in L₊∩L₋=0, so both projections are zero. This proves
the direct-sum assertion without presupposing that either summand has a basis.

Projection onto π(L₊) along π(L₋) is therefore an actual idempotent P on C.
More explicitly, if j_C:C→F′[S] is the evident finite-window inclusion, then

P=π A pr_[0,∞] A⁻¹ j_C.

On each of the finitely many basis vectors of C this formula involves only
finitely many Laurent coefficients, so it defines an actual finite R-matrix;
no basis of a projective image has been selected to define it.
Its restriction to the degree-zero outer module G₂ is e. Indeed, for x∈G₂,

x = H(ex) + H(t⁻¹(1−e)x).

The first preimage has nonnegative degrees and the second negative degrees.
The two resulting degree-zero components are ex and (1−e)x, respectively;
the buffer identities ensure the displayed local computation is valid on the
outer region. Thus P(x)=ex under the stated finite-window identifications.
This supplies an exact finite algebraic extension of the given outer projection.

This construction neither assumes that finitely generated projective modules
are free nor infers a basis from a vanishing obstruction. It constructs the
needed projection directly on a finite free module. The statement that it
extends e on G₂ is an algebraic agreement under the displayed module
identifications. It is not by itself a controlled geometric relocation:
B=G₀₁⊕G₁₂ contains an auxiliary copy of G₂, and this algebra does not place
that copy at a puncture while retaining its original geometric labels.
The torus application must supply its separate placement and radial collapse,
and prove agreement on the region where that collapse is the identity.
Subsequent elementary
diagonalization of a global projection, controlled torus lifting/truncation,
geometric realization by handles, and the end-completion limit are separate
operations still owed by the full end theorem. Every operation in this finite
construction is algebraic or uses a maximum of finitely many bounds; it adds
no choice assumption to the annular route.
