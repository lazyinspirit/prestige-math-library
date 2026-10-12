# Local deformation projectives: independent algebraic reconstruction

Run: frontier-44-special-representation-examples-28; batch13 only.
Status: local construction below reviewed; no readiness registration. The separate
all-localizations universal-Verma theorem has its own finite-kernel proof route.

The constructive source is Peter Fiebig, *Moment graphs in representation theory
and geometry*, author notes `Skript_MomGra.pdf`, §§9.2–9.5, Proposition9.12,
Lemma9.13. The notes' Proposition9.14 assumes a **complete** local algebra;
Theorem9.16 invokes it. Thus the notes alone are not evidence for arbitrary
noncomplete R. The splitting argument below replaces that particular use of
idempotent lifting. `Skript_Cologne.pdf` Theorem2.19 states the result but does
not supply these missing details.

Source files read: `/tmp/kl3/Skript_MomGra.txt` §§9.2–9.9,
`/tmp/kl3/Skript_Cologne.txt` §2 deformation section, and
`/tmp/kl3/fiebig-0305378.txt` §§2.1–2.4,3.1–3.3,3.5–3.6. The latter full paper
imports the foundation from Fiebig's Math.Z.243(2003)689–717. Freiburg's actual
public API reports zero files and no external files for that primary paper;
Springer's fetched body is a subscription preview, not the mathematical text.

Let R=Sym(h)_(0), lambda dominant regular integral, and let the finite orbit
labels be xi=x dot lambda. Work with relative weights nu: h acts on a weight
space by nu+tau, with tau the tautological parameter. Objects have locally
b-finite weight decomposition and finite generated weight spaces. The relevant
lambda block has highest weights bounded above by lambda. All arguments below
also apply over a localization of R with finitely many residual highest labels,
provided the ordinary residual highest-weight structure is established.

## 1. Explicit projectives and arbitrary base change

For xi<=lambda, put d=lambda-xi and truncate U(b), as a graded (left U(b),
right U(h))-bimodule, by all positive-root PBW weights gamma not <=d. This is a
two-sided ideal: adding positive-root weights cannot turn an excluded weight
into an allowed one. Denote the quotient B_d. It is finite **free as a right
U(h)-module**, not finite dimensional as a vector space. Its PBW basis is the
finite set of positive-root monomials with weight gamma<=d.

Let R_xi have U(h)-action H -> tau(H)+xi(H), and set
Q_R(xi)=U(g) tensor_U(b) (B_d tensor_U(h) R_xi).
For any object N with no relative weight above lambda, evaluation at
1 tensor1 tensor1 gives Hom(Q_R(xi),N)=N^xi. Indeed the tensor generator is
cyclic, and a vector v of weight xi is killed by every excluded positive-root
PBW monomial because its target weight is not <=lambda. The tensor-Hom
adjunction proves existence and uniqueness of the corresponding map.
Consequently Q_R(xi) is projective in that truncated category.

The finite right-free b-module B_d tensor R_xi has a filtration by its
positive PBW weights in descending order; n+ raises weights and acts trivially
on each successive quotient. Each quotient is a finite direct sum of
rank-one b-R modules of some weight xi+gamma. PBW makes induction exact, so
Q_R(xi) has a finite deformed Verma flag and finite free relative weight spaces.

For every R-algebra R', Q_R(xi) tensor_R R'=Q_R'(xi); moreover relative weight
spaces commute with base change because the module is their direct sum.
Thus Hom(Q_R(xi),N) tensor_R R'=Hom(Q_R'(xi),N tensor_R R') without a flatness
assumption. A finite direct sum or direct summand of these Q's has the same
property: its Hom functor is the image of an idempotent in the corresponding
sum of weight functors, and taking the image of a split idempotent commutes
with every tensor product. For Verma-filtered targets the Hom module is finite
free over local R. In particular End(Q) and End(P) for such summands P are
finite free R-algebras.

## 2. Finite central projectors over noncomplete R

For a finite Verma flag with labels nu_i, a central element z acts on its ith
standard quotient by f_i=HC_rho(z)(nu_i+rho+tau) in R. Hence the commuting
polynomial product product_i(z-f_i) annihilates the object: apply the factors
in flag order, each taking one quotient into the previous submodule.

Choose z whose finitely many distinct special central characters c_j are
pairwise different. This is possible since distinct highest-weight central
characters are separated by the center and a finite union of proper linear
hyperplanes cannot exhaust a finite-dimensional complex span of separators.
Group factors with common special character into monic polynomials p_j(X).
For j!=k their resultant specializes to a product of nonzero differences
c_j-c_k, so is a unit of R. The adjugate Sylvester-matrix identity gives
A_jk(X)p_j(X)+B_jk(X)p_k(X)=Res(p_j,p_k), and dividing by this unit proves
(p_j,p_k)=R[X]. The Chinese remainder theorem therefore produces polynomial
idempotents e_j modulo product_j p_j. Evaluating at z gives actual commuting
projectors on the object, not merely formal projectors modulo the maximal ideal.
They isolate its special central-character components. Each component of Q
is a projective direct summand and retains the arbitrary Hom base-change law.
No Henselian or complete-ring hypothesis is used.

## 3. Direct summands retain Verma flags over local R

For a maximal flag label nu, let K_nu=U(g)X^nu be the canonical top-generated
submodule. Induction on the given flag proves
K_nu=Delta_R(nu) tensor_R X^nu, and X/K_nu is Verma-filtered.
If the final quotient has label different from nu, its nu weight is zero and
K_nu is contained in the previous flag term; the assertion follows by induction
and concatenating its quotient flag with the last quotient. If the final label
is nu, its rank-one top-weight quotient has an R-linear lift, because the
weight spaces are finite free. This lift is a highest vector since nu is
maximal. The universal Verma map from the lifted vector is a section of that
final Verma quotient (its top map is the identity), so that final extension
splits and the induction again applies.

An idempotent e on X preserves K_nu. Its restriction there is
id_Delta tensor e_nu; the image of the finite free weight-space projector e_nu
is finite free over local R. Thus eK_nu is a sum of copies of Delta_R(nu).
On X/K_nu the induced idempotent has a Verma-filtered image by induction on
the smaller flag length. The exact sequence with these two images proves
eX Verma-filtered. The same proof applies to 1-e. All multiplicities and
relative weight ranks specialize unchanged because every flag quotient is
free over R. This is the precise deformation version of the published
maximal-weight peeling argument; arbitrary idempotent lifting is not involved.

## 4. Construct the lifts by removing already lifted higher labels

Order the orbit weights in a linear extension from highest to lowest.
The selected central component of Q_R(xi) has special fiber a finite projective
Q_0. Since Q represents weight xi,
dim Hom(Q_0,L(yi))=dim L(yi)^xi.
A nonzero right-hand side forces yi>=xi, and for yi=xi it is one.
Therefore Q_0 contains P(xi) once and otherwise only higher-label projectives.
These higher labels have already been lifted in the induction. Write their
lifted sum H_R and choose the actual split inclusion and retraction of H_0
in Q_0. Their maps lift to s:H_R->Q_R and t:Q_R->H_R, since both sources
are projective summands of Q's and their Hom functors commute with reduction.
Then ts is the identity modulo the maximal ideal.

For a finite R-algebra A and a in A congruent to1 modulo mA, left and right
multiplication by a are surjective R-linear maps on A: their cokernels are
finite and vanish modulo m, so Nakayama kills them. Obtain ab=1 and ca=1;
then c=c(ab)=(ca)b=b, giving a two-sided inverse. Apply this to
A=End(H_R) and a=ts. Replacing t by (ts)^(-1)t makes ts=id. The idempotent
st on Q_R is now an actual split projector. Its complementary image P_R(xi)
is projective, Verma-filtered, and has special fiber precisely P(xi).

The highest label starts with its dominant Verma, which represents its top
weight functor in the block. Induction constructs all finitely many lifts.
Two proposed lifts with the same special cover are isomorphic: lift an
isomorphism and its inverse using Hom base change and use the same finite-End
near-identity argument. Their flag multiplicities are the ordinary BGG
multiplicities by exact specialization of the free flag factors.

## 5. Fixed regular source and singular targets

The dominant deformed Verma represents its top-weight functor in its block.
Finite-dimensional tensoring and central projection are exact biadjoints over R
by the tensor-Hom pairing, so preserve projectives. First prove ordinary
wall-word object generation using the two-step standard flags, right-action
subexpression expansion, BGG unitriangularity and the coefficient-one top
standard: every P_w occurs as a summand. The corresponding deformed word is
projective with that closed fiber; the construction and Hom base change above
lift its ordinary decomposition. Uniqueness of projective lifts identifies its
summands with all constructed P_R(w). This proves membership in the fixed
regular-source tensor family without using the later functor classifier.

For a dot-dominant integral target nu (nu+rho in the closed chamber), construct
its coset-labelled projectives by the same truncated induction. Choose
sigma=nu+N rho regular dominant sufficiently large that sigma-mu is dominant
for every mu in this finite target orbit. A finite-dimensional simple E with
lowest extremal weight mu-sigma exists. The tensor E M(sigma) is projective;
all standards in its selected target component have labels at least mu and
mu occurs once. Projective standard triangularity gives P(mu) once. Lift that
splitting by projective Hom base change. Dominant norm-distance translation
between the regular weights sigma and the fixed lambda retains one Verma
factor in each direction. Thus their tensor families coincide; composing
natural block projectors produces a summand of the product tensor E2 E1.
All singular target projectives therefore belong to the regular-source family,
not necessarily the family generated by the singular Verma itself.

## 6. Current independent interfaces

This construction proves the local projective/flag/Hom-base-change interface
without the universal-Verma theorem. The height-one residual linkage and
nonsplit-pair calculation is supplied explicitly in the central-order proof
note; the separate all-T universal endomorphism proposition is now proved by
the four local algebraic helpers and finite highest-weight kernel matrices.
These routes are distinct and the local construction has no classifier cycle.
Readiness remains unregistered pending root stable-input guard authorization.
