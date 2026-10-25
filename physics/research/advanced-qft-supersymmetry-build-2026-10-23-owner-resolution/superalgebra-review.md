# Superalgebra prerequisite: owner scientific resolution proposal

Run: `advanced-qft-supersymmetry-build-2026-10-23`. Review date: 2026-10-23.
This is research evidence and an authoring prescription, not a publication,
acceptance, gate result, repaired plan, imported snapshot, or completed item.

## Disposition

Use a self-contained local alternative inside the existing mathematical A page
`aqft-susy-math-foundations`. Its approved first three items already undertake
the real bracket, Jacobi proof, and Hilbert representation. Adding the elementary
signed grading and action definitions to those exact definitions is a small part
of their existing obligations. It does not require universal enveloping algebras,
super-PBW, highest weights, or a general supermodule equivalence theorem.

I independently read the complete current original carriers for
`def-lie-superalgebra-over-complex-numbers`, `def-lie-supermodule`,
`def-universal-enveloping-superalgebra`,
`thm-supermodules-equivalent-to-graded-u-modules`, and the original N=1 bracket
definition/Jacobi theorem, at the `source_root` actually recorded in
`research/math-imports.json`. I also read their A page. The first four items and
the page are absent from the current import manifest. The items are marked
published but display judge-only verification. That label is not fresh proof
acceptance. The module equivalence proof is algebraic: extension through the
universal property and restriction through the quotient relations. It provides
no real form, Hilbert domain, self-adjointness or spectral-invariance theorem.
Its universal-property prerequisite was not independently read in this pass;
there is no claim here to audit its complete dependency closure.

The proposed local replacement removes all three blocked logical supplier uses
without importing or accepting those originals. The original drift report must
remain unchanged. Root should reconcile candidate/context supplier records with
the actual replacement; source references may remain truthful historical/context
references, but must not be load-bearing unpinned dependencies.

No new A/B pair is needed to cure this hold. The nine-item A page is broad, but
the cure adds no separate substantial theory. A future systematic enveloping
superalgebra course would deserve its own pair; none of the inspected current
consumers requires that theory. New pairs are authorized, but authorization does
not make unused general theory a prerequisite.

## Exact local definition and complete Jacobi route

The following gives a coordinate construction for the approved extended algebra.
It is research mathematics to be incorporated, attributed and independently
reviewed in the ordinary authored carriers. All spaces below have specified
finite bases; no basis-selection or arbitrary choice assumption is used.

First define a real or complex super vector space as a direct sum of even and
odd vector spaces; homogeneous parity is 0 or 1. A bilinear bracket must preserve
parity addition, satisfy `[x,y]=-(-1)^(|x||y|)[y,x]`, and satisfy
`[x,[y,z]]=[[x,y],z]+(-1)^(|x||y|)[y,[x,z]]`.
A representation on a graded vector space D is a parity-preserving linear map
rho into End(D) satisfying
`rho([x,y])=rho(x)rho(y)-(-1)^(|x||y|)rho(y)rho(x)`.
These explicit equations are all the algebraic interfaces needed here.

For integer N>=1, take two based two-dimensional complex spaces S and Sdot,
each with alternating form epsilon having epsilon_12=1. Let
`l=sl(S) direct-sum sl(Sdot)`, with componentwise matrix commutator; let
`V=S tensor Sdot`, concretely the based four-dimensional space with basis
`T_(alpha,dot beta)`. The center C has independent basis `Z^IJ` and
`Zbar_IJ` for I<J, extending by antisymmetry and zero diagonal. The even space
is `l direct-sum V direct-sum C`. The odd space has basis Q^I_alpha and
Qbar_(dot alpha I), with N copies of each spinor space.

For L=(A,B), its action is the fundamental action A on every Q copy, the
fundamental action B on every dotted copy, and the tensor action
`A tensor 1 + 1 tensor B` on V. It acts by zero on C. Define the complete
remaining bracket table by

- `[L,L']` is the componentwise matrix commutator;
- `[L,t]=L.t`, `[L,q]=L.q`, `[L,c]=0`;
- `[V,V]=[V,C]=[C,C]=[V,odd]=[C,odd]=0`;
- `{Q^I_alpha,Qbar_(dot beta J)}=-2 delta^I_J T_(alpha,dot beta)`;
- `{Q^I_alpha,Q^J_beta}=2 epsilon_(alpha beta) Z^IJ`;
- `{Qbar_(dot alpha I),Qbar_(dot beta J)}=2 epsilon_(dot alpha dot beta) Zbar_IJ`.

All omitted brackets follow by bilinearity and graded skew symmetry, not by
additional assumptions. In particular both epsilon and Z are antisymmetric:
their product is symmetric in the combined spinor/flavor labels, as required
for two odd arguments. The specialist note's phrase 'symmetric in spinor
indices only through epsilon' should not be repeated: epsilon itself is
antisymmetric. N=1 has no scalar central generator.

The coordinate proof of Jacobi is short and exhaustive:

1. Matrix commutators satisfy Jacobi by expansion of the associative products.
The fundamental actions obey the representation identity by the same expansion.
On V, the two tensor actions commute, so their commutator is
`[A,A'] tensor 1 + 1 tensor [B,B']`. Thus the even semidirect bracket has
Jacobi, including its abelian V and central C parts.
2. Two even and one odd entries give exactly the fundamental representation
identity; V and C act as zero. This checks every such ordering by graded skew
symmetry.
3. One even and two odd entries require equivariance of the odd bracket.
For mixed chirality this is exactly the displayed tensor action on T. For equal
chirality, `A^t epsilon+epsilon A=0` for every traceless 2x2 A: direct expansion
with A=[[a,b],[c,-a]] gives zero. The identical identity holds for B. Since
Z and Zbar are Lorentz scalars, the central brackets are equivariant. Translation
and central even arguments give zero on both sides.
4. Three odd entries give zero term by term because their inner brackets lie
in V+C, which acts trivially on the odd part. These four parity patterns exhaust
Jacobi. Odd self-Jacobi follows as well (each term is already zero here).
Grading and graded skew symmetry follow directly from the table.

The Lorentz matrix presentation supplies every even-even and even-odd bracket;
authoring may additionally expand it in M_(mu nu) coordinates, but must derive
that coordinate change with its i/sign convention. It must not simply attach a
mostly-minus textbook bracket table to the approved mostly-plus odd brackets.

## Involution, real form, metric and spinor bridge

Let * be conjugate-linear, fix the based identification of the conjugate of S
with Sdot, and set
`(A,B)*=(-conj(B),-conj(A))`, `Q*=Qbar`, `Qbar*=Q`,
`T_(alpha,dot beta)*=T_(beta,dot alpha)`, `Z*=Zbar`, `Zbar*=Z`.
This is a parity-preserving involution with
`[x,y]*=-(-1)^(|x||y|)[x*,y*]`, the operator-adjoint convention.
For Lorentz matrices this follows because conjugation preserves commutators and
the extra minus sign reverses their bracket; mixed actions exchange the two
fundamental factors with that minus sign. For the mixed odd bracket it exchanges
the two tensor factors; for equal chirality it interchanges Z and Zbar and the
real epsilon coefficients. Zero brackets remain zero. Thus every table entry
respects *.

A genuine real Lie superalgebra is the fixed space of the conjugate-linear
bracket automorphism tau given by `tau(x)=-x*` on even elements and `tau(x)=i x*`
on odd elements. Indeed tau^2=1; the even-even, even-odd and odd-odd bracket
identities follow respectively from the minus, i, and i^2 factors above.
The fixed space spans the complex algebra because any x decomposes as
`(x+tau x)/2 + i (x-tau x)/(2i)`. Its Lorentz fixed space consists of
`(A,conj(A))`, identifying the real algebra sl(2,C). Its translation space is
the skew-Hermitian bispinor space. Hermitian physical momenta are i times real
skew generators; do not call all Hermitian generators a real subalgebra under
the raw operator commutator.

Use eta=diag(-,+,+,+), sigma^mu=(I,sigma_1,sigma_2,sigma_3),
bar sigma^mu=(I,-sigma_1,-sigma_2,-sigma_3). The Pauli matrices are
sigma_1=[[0,1],[1,0]], sigma_2=[[0,-i],[i,0]], sigma_3=diag(1,-1).
Identify the Hermitian generator-valued matrix T with
`T_(alpha,dot beta)=sigma^mu_(alpha,dot beta) P_mu`. The four Pauli matrices
are a complex basis of 2x2 matrices, so this is an invertible basis change;
T*=T with exchanged indices implies `P_mu*=P_mu`.
`det(sigma^mu p_mu)=p_0^2-|p_vec|^2=-eta^(mu nu)p_mu p_nu`.
The real spin group SL(2,C) acts on Hermitian matrices by H -> g H g^dagger;
its derivative is the tensor action above and determinant is preserved.
This fixes the flat spin/vector bridge explicitly, without importing a curved
spin-bundle existence theorem. The usual lower/upper dotted-index conversion
uses epsilon; the two conventions must not be silently mixed.
Then the mixed bracket is precisely the approved
`{Q,Qbar}=-2 sigma^mu P_mu delta`, with P_0=-M at rest and positive diagonal
anticommutator 2M. This construction preserves the complete real structure,
central charges and approved normalization, not merely a complex N=1 fragment.

## Hilbert definition and the spectral issue

Define a positive complex Hilbert space H with grading Gamma=Gamma*=Gamma^-1,
and a strongly continuous even unitary representation U of
`SL(2,C) semidirect R^4` (the spin cover, not merely the Lorentz group).
Specify a joint momentum PVM E on R^4 and self-adjoint P_mu by its coordinate
spectral integrals, with `U(a)=integral exp(i a^mu p_mu) dE(p)` and future-cone
support `p^0=-p_0>=|p_vec|`. Giving E as representation data avoids falsely
claiming to have proved the joint spectral theorem from formal commutators.
Lorentz covariance must agree with the preceding bispinor convention.

Give closed densely defined odd charges Q, their actual Hilbert adjoints Q*,
and central operators with the stated adjoint pairing. Require a common dense
graded D contained in the domains of all products used in the algebra, invariant
under the generators, with the full displayed relations holding on D. Invariance
under the integrated even group and the exact spinor covariance must also be
specified, with equality of the closed operator domains. On real even generators
rho is the derived skew-adjoint representation; on Hermitian P it is self-adjoint.
For positivity calculations on D the weaker identity Qbar=Q* restricted to D
suffices, but calling formal conjugation an actual everywhere defined adjoint
would be incorrect.

Crucially, require each closed Q and Q* to commute with the integrated
translations INCLUDING domain invariance:
`U(a)D(Q)=D(Q)` and `Q U(a)psi=U(a)Q psi` for psi in D(Q), for every a.
Equivalently one may put the needed condition directly into the definition:
for every Borel B in momentum space,
`E(B)D(Q) subset D(Q)` and `Q E(B)psi=E(B)Q psi`, and likewise for Q*.
The latter projection condition is the least ambiguous authoring interface.
For nonnormal Q this is a reducing-projection/domain condition, not a claim
that Q itself has a self-adjoint spectral measure.

Here is why integrated commutation implies that condition. The closed graph
G(Q) in H direct-sum H is invariant under every U(a) direct-sum U(a); the same
holds for -a, so it is reducing. Its orthogonal projection therefore commutes
with those unitaries. The joint spectral projections commute with that graph
projection as well, by uniqueness of the Fourier transforms of finite scalar
spectral measures (apply the equality of all matrix coefficients to the
commutator with the graph projection). Hence E(B) direct-sum E(B) preserves
G(Q), exactly the asserted domain and intertwining identity. Alternatively take
the projection condition as supplied data and no spectral-commutant theorem is
needed to define the representation. An author choosing the integrated proof
route must supply/locally prove the indicated uniqueness fact; it is not certified
by this prescription or the old supermodule theorem.

The specialist note's passage from `[P_mu,Q]=0` on D to spectral mass
invariance is insufficient as written. The inspected local counterexample
`cex-nrqm-uncertainty-commutator-zero-on-a-core-is-not-spectral-compatibility`
uses periodic and antiperiodic momentum extensions on L2(0,1), agreeing and
commuting on C_c^infinity while their rank-one spectral projections fail to
commute. Its current text expressly makes no graph-core assertion despite the
legacy ID. This illustrates the missing domain information; I do not claim its
full prerequisite closure was audited. Adding integrated/domain covariance to
the intended unitary representation supplies the correct hypothesis without
weakening the approved same-mass conclusion.

## Consumer dispositions and remaining authoring

- `def-qftx-super-poincare-algebra-4d`: incorporate signed grading locally and
use the complete construction above. No supermodule or enveloping supplier is
required. Bind its well-definedness to the existing planned Jacobi lemma in the
ordinary definition/justification direction, avoiding a dependency cycle.
- `lem-qftx-super-poincare-graded-jacobi`: use all four parity cases above,
including central epsilon invariance and involution compatibility. The root
N=1 proof is useful comparison only; it does not prove the N-extended real claim.
- `def-qftx-unitary-super-poincare-representation`: incorporate the explicit
rho identity, positive Hilbert/domain/adjoint data and projection reduction.
The algebraic enveloping equivalence is unnecessary; remove that logical use.
- `thm-qftx-supermultiplet-mass-degeneracy`: define mass-squared by the
pushforward PVM `F(C)=E({p:-eta^(mu nu)p_mu p_nu in C})`. Q and Q* reduce F by
the preceding condition. Thus a nonzero Q-image of any vector in D(Q) in a
fixed-mass subspace stays in that subspace. No sharp-momentum normalizability
assumption is needed. In an irreducible super-representation, every F(C) also
commutes with the even group (mass is Lorentz invariant) and Gamma, hence its
range is an invariant graded subrepresentation. Irreducibility forces every
F(C) to be 0 or I. A normalized countably additive 0/1 Borel probability on R
is a point mass (use its monotone distribution function), so the mass-squared
has one value. Nonzero superpartners have that value. Equality of gauge charges
requires separately specified commuting integrated gauge action/domain data;
it does not follow from spacetime supersymmetry alone.
- `thm-qftx-n-extended-central-charge-bounds`: work on the supplied invariant
mass/central-charge representation fiber, not a fictitious normalizable rest
momentum vector of the full Hilbert space. For N=2 set q=Q^1_1, r=Q^2_2,
Z^12=Z and Z=e^(i phi)|Z|. With A=q-e^(i phi)r*, expand
`{A,A*}=2M+2M-e^(-i phi)2Z-e^(i phi)2conj(Z)=4(M-|Z|)I`.
For psi in D its expectation is `||A psi||^2+||A* psi||^2`, so M>=|Z|.
At equality BOTH terms vanish on the domain. On a finite-dimensional
rest fiber domains are the whole fiber; for an infinite-dimensional fiber keep
the stated dense-domain/quadratic-form conclusion and justify any extension.
For general N one can avoid importing a skew block-diagonalization theorem.
On the fixed scalar-central-charge rest fiber put a_I=Q^I_1 and b_I=(Q^I_2)*.
The anticommutator matrix for (a,b) is
`2 [[M I,Z],[Z^dagger,M I]]`. Indeed the upper off-diagonal entry is
`{a_I,b_J*}=2 Z^IJ`, and the lower block is its adjoint. For coefficient
vectors u,v and A=u^dagger a+v^dagger b, positivity gives
`M(||u||^2+||v||^2)+2 Re(u^dagger Z v)>=0`.
If ||v||=1 and Zv is nonzero, choose u=-Zv/||Zv||. This yields
M>=||Zv||; taking the finite-dimensional supremum gives M>=||Z||, where
||Z||=sup_(||v||=1)||Zv||. Conversely this bound makes the displayed quadratic
form nonnegative by Cauchy-Schwarz and 2||u||||v||<=||u||^2+||v||^2.
This is exactly all scalar-central-charge BPS inequalities, expressed as
an operator norm instead of named skew singular-value blocks. In finite
dimension the continuous norm function on the unit sphere has a maximum.
At M=||Z||>0 a maximizing v and u=-Zv/M give a null supercharge combination;
its adjoint also annihilates domain vectors by the same positive norm identity.
At M=||Z||=0 all diagonal anticommutators vanish and all charges annihilate
domain vectors. If individual blocks or multiplet dimensions are claimed,
their explicit skew normal form and Clifford multiplicity proof remain further
authoring obligations. This direct norm argument does not count multiplets.
- `def-qftx-bps-state-and-saturation`, `pthm-qftx-n2-bps-central-charge-mass`
and `pthm-qftx-global-susy-vacuum-energy`: retain central-charge, domain,
normalizability and model assumptions from the bound. It proves no state
existence/stability or charge dictionary. Vacuum energy positivity uses the
appropriate rest/vacuum sector and excludes uncontrolled surface charges;
infinite-volume vacuum energy density needs its own normalization and limits.
- The four other foundations items (superspace/chiral definitions and
trace-class index definition/theorem) do not consume the held originals in the
inspected inventory. They retain their own existing obligations. In particular
trace-class spectral pairing cannot be replaced by a merely formal cyclic
trace of unbounded products.

The immediate physical page `qftx-susy-algebra-and-multiplets` and downstream
SUSY/BPS pages inherit the repaired actual interfaces; the existing
`qftx-eft-operator-quotients` page-level edge does not establish any use of
universal enveloping theory. Current inspected candidate carriers do not yet
exist in items/: this is a construction-stage disposition of planned consumers,
not a claim to have reviewed unwritten proofs. Root owns integration, precise
current manifests, metadata recertification, acceptance and ordinary gates.

## Reading limits

Read-only originals and local research carriers were inspected as recorded in
the companion JSON. No external full text was retrieved in this recovery pass.
The specialist note's prior external-source reading ledger belongs to its author;
I have not re-attested those readings. The arguments above were independently
checked against the displayed local definitions. No empirical claim, interacting
continuum existence theorem, general super-PBW theorem, or acceptance of the
original mathematical closure is asserted.
