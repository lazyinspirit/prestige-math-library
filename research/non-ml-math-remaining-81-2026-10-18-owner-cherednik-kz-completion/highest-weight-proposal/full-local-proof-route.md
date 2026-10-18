# Cherednik highest-weight, rank, and family suppliers: complete local route

Isolated proposal, 2026-10-18. Owner `/root/math81_frobenius` retains all
integration and consumers. No canonical carrier, batch70 input, manifest,
contract, runtime, or history is changed here. This file is a mathematical
proposal, not a workflow review/acceptance receipt.

## Sources actually read and source proof boundaries

Retrieved the full authoritative PDFs of GGOR, arXiv:math/0212036 (28 pages),
and Etingof–Ma, arXiv:1001.0432 (92 pages), into this directory's `sources/`.
Text extraction has explicit PDF page markers. Read the complete relevant
GGOR §§2.1–2.6 (PDF3–9), §3.2–3.3 (11–12), §5.3–5.4 (20–22), and the
relevant §5.2 induced-connection/rank setting (18–20). Read Etingof–Ma
§§3.5–3.10 (17–20), Theorem6.4, Theorem6.5 and Corollary6.6 (45–47), and
Theorem6.10 (48). The latter equivalence proof is only a GGOR citation.

GGOR constructs projectives in Lemma2.5/Corollaries2.6–2.10, declares
highest-weight structure in Theorem2.19, then cites CPS1 Theorem3.11 for
reciprocity. The local argument below proves reciprocity, rather than using
that citation. Etingof–Ma's projective proof says the nilpotence constraint
is vacuous for large n, without spelling out the uniform bound over all
objects; §1 below proves that uniformity. GGOR Proposition3.3 uses a
decomposition map for [standard]=[costandard]; §3 below proves the equality
directly by Euler/W characters over C. No arbitrary self-dual W or real
reflection-group assumption is introduced.

The current native all-object and equivalence carriers explicitly retain
missing projective/family and BGG/rank suppliers. A third actual defect is
in the native standard-factorization proof: its logarithmic-residue lemma
only proves a characteristic polynomial/eigenvalue assertion, whereas the
consumer infers actual diagonalizability at resonant parameters. The
nonresonant-gauge plus holomorphic-family proof in §5 supplies the genuine
polynomial relation and makes standard factorization a consumer of that
family lemma. Eigenvalues alone do not imply that relation.

## Exact local inputs and proposed supplier IDs

Use the current minus-sign presentation and root normalization. Write
H=H_{1,c}, X=S(h*), Y=S(h), B=Y⋊CW, D=X⋊CW. The existing category is the
zero-support locally-nilpotent category, Etingof–Ma's O_c(W,h)_0, not the
larger locally-finite category with all central supports.

Existing usable inputs (their actual carrier statements/proofs inspected):

* `def-rational-cherednik-reflection-data-and-parameters`;
  `def-rational-cherednik-algebra`;
  `thm-rational-cherednik-pbw-theorem`;
  `def-rational-cherednik-category-o`;
  `def-rational-cherednik-standard-module`;
  `thm-rational-cherednik-standard-module-lies-in-category-o`.
* `lem-rational-cherednik-category-o-has-finite-length`: in particular its
  proof gives eu=Σx_i y_i+n/2−Σ_s c_s s, [eu,x]=x, [eu,y]=−y,
  [eu,W]=0, local finite Euler action, finite-dimensional generalized
  eigenspaces, standards' eigenvalues a_E+d, and simple heads L(E).
* `lem-rational-cherednik-dunkl-localization-and-flat-connection`: exact
  localization/KZ and the formula for the localized derivation. It does
  not prove highest-weight structure or BGG.
* `def-rational-cherednik-kz-functor-and-finite-hecke-algebra`: positive
  meridian convention and roots μ_H,j. This defines the target quotient;
  it cannot prove factorization.
* `cor-sum-of-squares-formula-for-irreducible-degrees` (read fully): over C,
  Σ_E(dim E)^2=|W|.
* `thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras`
  is available after the finite-algebra equivalence below. Its proof was
  read earlier in the same assignment chain. Alternatively reproduce its
  finite-length Fitting/minimal-summand argument verbatim in this setting.

The published `thm-bgg-reciprocity` and
`def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category`
were read: both have semisimple Lie/parabolic-category hypotheses and
cannot supply rational-Cherednik highest-weight structure. Likewise the
published induction/coinduction adjunction for group modules is not an
arbitrary-algebra Ext theorem; the needed algebra calculation is supplied
below.

Proposed new IDs, in dependency order:

1. `thm-rational-cherednik-category-o-projective-generator-from-generalized-standards`:
   §1–2 below. Uses PBW, standards, and the Euler/finite-length lemma.
2. `lem-rational-cherednik-costandard-orthogonality-and-character`:
   §3. Uses PBW and Euler/finite-length, not BGG or Hecke factorization.
3. `thm-rational-cherednik-category-o-bgg-reciprocity-and-projective-generator-rank`:
   §4. Uses1,2, exact KZ/localization, and sum-of-squares.
4. `lem-rational-cherednik-kz-relation-specializes-in-flat-family`:
   §5. Uses1, PBW/localization, elementary analytic ODE, and the defined
   Hecke roots. It MUST NOT depend on the current standard-factorization
   theorem. Both standard- and all-object factorization become consumers.

## 1. Uniform generalized-standard projective generator

Fix c, let Σ={a_E:E∈IrrW}, and let b=min_E Re(a_E). Every object's Euler
spectrum lies in Σ+Z_{≥0}: a simple is a quotient of Δ(E), and an exact
sequence's generalized Euler spaces are exact. This follows from the
existing finite-length theorem. Exactness of a fixed generalized eigenspace
on locally finite operators is elementary: decompose a preimage into its
finitely many generalized eigencomponents and retain the desired one.
Every generalized eigenspace is finite-dimensional.

1.1 Choose n so large that Re(β)−(n+1)<b for all β∈Σ. For any object M,
every degree-(n+1) monomial in y sends M[β] into M[β−(n+1)]=0. Therefore
Y_{>n}M[β]=0 for ALL M and ALL β∈Σ. This bound depends only on c and W,
not on M. Higher monomials also vanish by factoring them. This closes the
uniformity hidden in the abbreviated source proof.

1.2 Let E_n=CW⊗(Y/Y_{>n}), with diagonal W-action and Y multiplying the
second factor, and put G_n=H⊗_B E_n. PBW gives
G_n=X⊗CW⊗(Y/Y_{>n}). Give x degree1, y degree−1, and W degree0.
Its total-degree spaces are finite-dimensional, since the y-degree is at
most n. The operator Z=eu−degree commutes with every H-generator:
[eu,a]=deg(a)a=[degree,a]. It preserves total degree. The degree-zero
space is finite and contains the finite generating set CW⊗1; hence Z is
locally finite with finitely many generalized eigenvalues on G_n. Its
generalized Z-eigenspaces G_n^β are therefore actual H-direct summands.

1.3 Induction adjunction is explicit here: an H-map G_n→M is determined
by the image of 1⊗1⊗1, which can be any vector killed by Y_{>n}. Its values
on w⊗p(y) are p(y) w m, and the diagonal-W convention gives the necessary
relations. Evaluation on this degree-zero generator intertwines
precomposition by Z with eu_M: an H-map f has f(Zv)=eu_M f(v) when v has
degree zero. It follows that
 Hom_H(G_n^β,M)=M[β]∩Ann_M(Y_{>n}).
By1.1, for β∈Σ this is exactly M[β]. (The source uses the same isomorphism
with a grading shift; the ungraded Z-block formulation keeps it explicit.)
Thus P_β=G_n^β represents the exact functor M↦M[β], so P_β is projective.
The finite sum P_Σ=⊕_{β∈Σ}P_β detects nonzero objects: every nonzero M has
a nonzero singular W-submodule, on which eu equals z=n/2−Σ c_s s, so one
of its Σ-eigenspaces is nonzero.

1.4 P_Σ is a finite projective generator, not merely a detector. Hom spaces
are finite: choose finitely many H-generators of its source decomposed
into generalized Euler eigenvectors; their images lie in finitely many
finite-dimensional target weight spaces. The evaluation map
P_Σ⊗Hom(P_Σ,M)→M is a finite sum of images. If its cokernel were nonzero,
a nonzero map from P_Σ to that cokernel would lift by projectivity,
contradicting the definition of the evaluation image. Thus evaluation is
surjective. Its kernel is again in O, so every object has a presentation
P_Σ^b→P_Σ^a→M→0. Put Γ=End(P_Σ)^op, a finite-dimensional C-algebra.
Applying Hom(P_Σ,−) to these presentations shows full faithfulness and
essential surjectivity onto Γ-finite-modules: a presentation by finite free
Γ-modules lifts to such a map of P_Σ sums, and its cokernel is the inverse
construction. This is the complete finite Morita argument needed here;
no cocompleteness of O is claimed.

1.5 G_n has a finite standard filtration. Filter Y/Y_{>n} by descending
y-degree. The dth layer is S^d(h)⊗CW with Y acting by zero. Induction is
exact because PBW makes H free as a right B-module; split each finite
W-module layer into irreducibles by averaging projections over W. This
produces standards Δ(F), with their generators in total degree−d. On
such a layer Z acts by the scalar a_F+d. Applying the exact generalized
Z-projection to this filtration leaves a whole standard when a_F+d=β
and zero otherwise. Hence every P_β is standard-filtered, with those
explicit labels; in particular P_Σ has a finite standard flag.

## 2. Direct summands, projective covers, and highest-weight structure

2.1 If Ext^1_O(Δ(E),Δ(F)) is nonzero, then a_E−a_F is a positive integer.
Indeed, in an extension lift the generating E to its generalized eu-space
of weight a_E and split the W-isotypic surjection by finite-group
averaging. Each y maps this lift into Δ(F)[a_E−1]. Unless a_E−a_F is a
positive integer, that space is zero. The lift is then singular, hence
extends by induction adjunction to Δ(E)→the extension splitting the
surjection. This proof also covers a_E=a_F and distinct labels with equal
Euler scalars; it does not mistake equal scalars for positive differences.
An endomorphism of Δ(E) is scalar because it is determined on the
irreducible degree-zero E. A map Δ(E)→Δ(F) is zero if Re(a_E)<Re(a_F),
or if Re values are equal and E≠F: at that weight either the target has
no space or its only possible degree is0 and its W-label is F.

2.2 Direct summands of standard-filtered modules are standard-filtered,
with the following proof rather than an unsupported general assertion.
Sort a standard flag by increasing Re(a) from bottom to top. An adjacent
inversion splits by2.1, allowing its two factors to be swapped; finite
inversion reduction finishes. Extensions among factors of the same real
part split as well. For the minimal real part, the resulting bottom
submodule is a direct sum of the corresponding standards. It is
canonical: it is the image of the evaluation sum
 ⊕_{E of minimal Re(a)} Δ(E)⊗Hom(Δ(E),M)→M.
All such maps factor through that bottom submodule because their maps to
the larger-real-part quotient are zero by2.1. The evaluation is injective
because this bottom is a direct sum and Hom between its distinct labels
is zero, with scalar endomorphisms on each label. Thus every endomorphism,
in particular every idempotent, preserves this canonical bottom and acts
there by matrices on the multiplicity spaces. Its image in that bottom is
again a sum of standards. On the quotient apply induction on the number
of distinct real parts. The idempotent image has a standard flag as
claimed. This also proves additivity of flag multiplicities on summands.

2.3 The finite-algebra model from1.4 has projective covers, by the actual
finite-dimensional-algebra projective-cover theorem. Transport them back
to get P(E)→L(E). Each is a direct summand of a finite sum of P_Σ, so2.2
makes it standard-filtered. Its head is L(E) once. Sort its flag as in2.2.
The top real-part group is a quotient which is a direct sum of standards;
its simple heads are quotients of P(E). Hence this top group can contain
only Δ(E), once: any other label or a second copy would contradict the
simple head L(E). Thus
 0→K(E)→P(E)→Δ(E)→0,
where K(E) has a standard flag with a_F−a_E a negative real number.
In fact every occurring F satisfies a_E−a_F∈Z_{>0}: the constructed
P_Σ and all modules decompose by Euler congruence classes modulo Z,
and P(E), being indecomposable with top E, belongs to E's congruence
class. Equivalently use its Euler-spectrum block decomposition directly.
Standards' other composition factors have a_F−a_E∈Z_{>0}, with E itself
once at degree0. With the partial order E<F iff a_E−a_F∈Z_{>0}, these
are precisely the finite highest-weight standard-support and projective-
kernel conditions. No assertion about real W or parameter genericity has
been made.

2.4 Each L(E) has scalar endomorphisms: an endomorphism is determined on
its generating copy of E in lowest Euler degree. Distinct E have distinct
simple labels. If L(E)=L(F), the two lowest Euler weights must agree
(otherwise the spectra bounded below by the respective a-values give a
positive-integer difference in both directions), and then their lowest
W-labels give E=F. For a projective cover P(E), every nonzero map to a
simple has its unique maximal kernel, so
 Hom(P(E),L(F))=δ_{EF}C.
Exactness along a composition series now gives
 dim Hom(P(E),M)=[M:L(E)].

## 3. Costandards, orthogonality, and their actual character proof

3.1 Regard E as a D=X⋊CW-module with x acting by zero. Form the full
coinduced module N(E)=Hom_D(H,E), with (h f)(u)=f(u h). PBW identifies it
with the PRODUCT over d≥0 of Hom_C(S^d h,E), with the natural W action.
Define ∇(E) to be the direct SUM of these finite pieces. This equals the
Euler-locally-finite submodule of N(E). In fact on the degree-d piece eu
acts by a_E+d: for u∈S^d h, u eu=(eu+d)u, and evaluating a D-linear f
kills the left x_i in Σx_i y_i and evaluates z on E as a_E. All a_E+d are
distinct as d varies. Each y lowers degree, each x raises degree, and W
preserves it; therefore the direct sum is H-stable and Y-locally nilpotent.
As an Euler-graded W-space it is
 ∇(E)_{a_E+d}=Hom_C(S^d h,E)≅S^d(h*)⊗E,
identical to the corresponding piece of Δ(E).

3.2 We verify ∇(E) actually belongs to O, rather than assuming that a
restricted coinduction is finitely generated. In any nonzero module with
locally nilpotent Y and locally finite eu, a nonzero singular W-submodule
exists: take the finite Y-orbit of a vector and the common kernel of the
commuting nilpotents, then a finite irreducible W-submodule of that kernel.
Its Euler scalar belongs to Σ. Thus the finite integer
 d(M)=Σ_{β∈Σ}dim M[β]
is positive on every nonzero subquotient whose weight spaces are finite,
and is additive in exact sequences. For ∇(E) it is finite by3.1. A strict
chain of its submodules therefore has length at most d(∇(E)); maximal and
minimal submodules exist by this integer bound, and iteration produces a
finite composition series. Every simple subquotient is generated by a
singular irreducible W-module, hence is a quotient of some Δ(F) and is in
O. Extensions of finitely generated X-modules are finitely generated:
lift a finite generating set of the quotient and adjoin one of the
submodule. Hence ∇(E) is finite over X and belongs to O.

3.3 The arbitrary-algebra coinduction adjunction is explicit: maps $M\to\operatorname{Hom}_D(H,F)$ correspond by evaluation at $1$ to $D$-maps $M\to F$, with inverse $m\mapsto(u\mapsto f(um))$. Compute Ext using the finite Koszul resolution $P_i=H\otimes_{\mathbb CW}(\Lambda^i\mathfrak h\otimes E)$, augmented onto $\Delta(E)$, with differential $u\otimes(y_1\wedge\cdots\wedge y_i\otimes e)\mapsto\sum_j(-1)^{j-1}uy_j\otimes(y_1\wedge\cdots\widehat y_j\cdots\wedge y_i\otimes e)$. The commuting $y_j$ give differential square zero, and the formula is $W$-equivariant, so it is well-defined. Each $\Lambda^i\mathfrak h\otimes E$ is a summand of a finite free $\mathbb CW$-module by averaging, so $P_i$ is a finite projective $H$-module. PBW identifies its restriction to $D$ with $D\otimes_{\mathbb CW}(Y\otimes\Lambda^i\mathfrak h\otimes E)$, whose differential is the ordinary polynomial Koszul operator $d=\sum_j y_j\iota_j$. On polynomial degree $p$ and exterior degree $i$ with $p+i>0$, the operator $h=(\sum_j\varepsilon_j\partial_{y_j})/(p+i)$ satisfies $dh+hd=1$, by the identities between exterior multiplication $\varepsilon_j$ and contraction $\iota_j$. It is $W$-equivariant and extends $D$-linearly. In total degree zero, augmentation projects to $D\otimes_{\mathbb CW}E=\operatorname{Res}_D\Delta(E)$. Thus this augmented restricted complex is explicitly contractible, proving exactness of the finite $H$-projective resolution. Adjunction identifies its Hom complex into $N(F)$ with this $D$-Hom complex into $F$, so $\operatorname{Hom}_H(\Delta(E),N(F))=\operatorname{Hom}_W(E,F)=\delta_{EF}\mathbb C$ and $\operatorname{Ext}^1_H(\Delta(E),N(F))=0$. No infinite free module or arbitrary choice principle is used. Any map from an Euler-locally-finite module into $N(F)$ lands in $\nabla(F)$ by3.1. For an extension $0\to\nabla(F)\to U\to\Delta(E)\to0$ in $\mathcal O_c$, push out to $N(F)$. The vanishing gives a retraction $U\to N(F)$ extending the inclusion of $\nabla(F)$; its image is Euler-locally-finite and hence lies in $\nabla(F)$. This splits the original extension and proves the stated orthogonality in $\mathcal O_c$.

3.4 The costandard has simple socle L(E) once. Any simple submodule
L(F) gives a nonzero map Δ(F)→∇(E), so F=E by3.3. Finite length ensures
a nonzero socle, and its E-multiplicity is at most dim Hom(Δ(E),∇(E))=1.
This proves the assertion without a self-duality assumption on E or W.

3.5 Direct equality of standard and costandard classes over C:
Euler/W characters are additive on exact sequences and3.1 gives identical
characters for Δ(E) and ∇(E). Simple characters are linearly independent.
Indeed, in a finite nonzero integral relation choose among labels with
nonzero coefficient a minimal Re(a_F); at Euler weight a_F only the
lowest W-module of those minimal-real-part labels contributes. Terms with
larger real part cannot contribute; different imaginary parts do not have
that weight, and different W-labels with the same scalar have independent
W-characters. Thus its coefficient must vanish, a contradiction. (Within
a label its lowest space is F once.) Consequently character equality gives
 [∇(E):L(F)]=[Δ(E):L(F)] for all E,F,
and [∇(E)]=[Δ(E)] in K_0(O). This is valid for every finite complex
reflection group and all c. It does not identify the actual modules or
assume a simple-preserving contravariant duality.

## 4. BGG, representing KZ, and the dimension |W|

4.1 Apply Hom(−,∇(F)) along a standard flag of P(E). The Hom/Ext1
orthogonality in3.3 makes each Hom sequence short exact, and its dimension
adds1 precisely for a Δ(F) section. Hence
 (P(E):Δ(F))=dim Hom(P(E),∇(F)).
By projective-cover exactness2.4, the latter is [∇(F):L(E)], and3.5 makes
it [Δ(F):L(E)]. This proves full Cherednik BGG reciprocity with its actual
highest-weight/projective prerequisites supplied.

4.2 Let F:O→finite-dimensional C-vector spaces be ANY exact C-linear
functor, in particular KZ with its Hecke action temporarily forgotten.
Put r_E=dim F(L(E)) and P_F=⊕_E P(E)^{r_E}. Choose a basis of F(L(E))
and lift it to F(P(E)), using exactness on P(E)→L(E). For each chosen lift
v, the map Hom(P(E),M)→F(M), f↦F(f)v, is natural. Summing defines
 Hom(P_F,−)→F.
On every simple it is an isomorphism, by2.4 and the chosen bases.
Both functors are exact, so induction on composition length, using the
short exact sequences of their values, proves it is an isomorphism on
every object. This proves representability by the displayed projective
P_F without using finite-dimensional Eilenberg–Watts or an unproved
representability theorem. For KZ this is P_KZ. It need not generate all O
because some r_E can be zero; its image generates the torsion quotient
once the owner's fully faithful quotient argument is supplied.

4.3 Projective exactness and the standard flag give
 dim Hom(P(E),P(F))=[P(F):L(E)]
 =Σ_G (P(F):Δ(G))[Δ(G):L(E)].
Insert BGG and r_E into End(P_KZ):
 dim End(P_KZ)
 =Σ_{E,F,G} r_E r_F [Δ(G):L(E)] [∇(G):L(F)]
 =Σ_G dim KZ(Δ(G)) dim KZ(∇(G)).
The standard localizes to a bundle of rank dimG; its horizontal-fiber
space has that dimension, and finite free W-descent leaves bundle rank
unchanged. Thus dimKZΔ(G)=dimG. Equality inK_0 from3.5 and exactness of
KZ give dimKZ∇(G)=dimG as well. Therefore
 dim End(P_KZ)=Σ_G(dimG)^2=|W|,
using the actual canonical sum-of-squares supplier. No Hecke dimension or
freeness assumption enters this computation. It is an input to, rather
than a consequence of, the conditional equivalence theorem. Only at the
owner's final algebra-isomorphism step should dimHecke=|W| be imposed.

## 5. Exact Hecke relations in the generalized-standard family

This proof replaces the invalid special-parameter diagonalizability
inference. It supplies a family lemma preceding both factorization items.

5.1 Let C^m be the parameter space of conjugacy-invariant c. Fix n, and
use the SAME vector space U_n=CW⊗(Y/Y_{>n}) at every parameter. PBW
identifies G_{n,c}=H_c⊗_B U_n with X⊗U_n. All commutation matrices on
this fixed PBW space are polynomial in c. This statement is valid for the
universal polynomial-parameter algebra: the existing overlap/Jacobi PBW
proof is a finite coefficient-identity proof and works over C[c] without
division; alternatively the pointwise PBW independence shows a polynomial
relation among normal words has every coefficient zero at every c, hence
is zero. Thus the family is free over C[c] and finite free over X[c].

5.2 There is an especially explicit connection on its regular-locus
trivialization. Write Y_y for multiplication by y on U_n and w for its
diagonal W-action. The localized derivation is
 ∂_y=y+Σ_s c_s α_s(y)/α_s (1−s).
On the constant generator 1⊗u, its connection matrix is exactly
 Γ_y(c,z)=Y_y+Σ_s c_s α_s(y)/α_s(z) (1−s|U_n).
The remaining term is the ordinary derivative of coefficient functions.
Consequently these are finite matrices rational in z and polynomial in c,
with no poles along fixed paths in h_reg. Their flatness is the localized
Cherednik relation. The connection on a normal disk to H has logarithmic
residue R_H(c)=Σ_{s fixes H}c_s(1−s|U_n), diagonalizable in the fixed
cyclic W_H decomposition; Y_y contributes only a holomorphic term.
The horizontal equation uses A_0(c)=−R_H(c), in the native convention.

5.3 Complete nonresonant Fuchs gauge proof. For a finite-dimensional
holomorphic logarithmic equation zU'=A(z)U, with diagonalizable A_0=A(0),
assume no difference of two eigenvalues of A_0 is a nonzero integer.
Seek G(z)=I+Σ_{n≥1}G_nz^n satisfying
 zG'=A(z)G−G A_0.
Writing A(z)=Σ_{j≥0}A_jz^j gives the unique recursion
 (nI−adA_0)G_n=Σ_{j=1}^n A_jG_{n−j}.
Every operator on the left is invertible. Its inverse norm is bounded by
C/n for all n≥1: for n>2||adA_0|| the Neumann series gives2/n; enlarge C
to handle the finitely many remaining n. If ||A_j||≤MR^{−j} on a smaller
analytic disk, then
 ||G_n||≤CM/n Σ_{j=1}^n R^{−j}||G_{n−j}||.
The scalar majorant with g_0≥||I|| satisfies
 g'(z)=CM/(R−z) g(z),
so g(z)=g_0(1−z/R)^{−CM} has positive Taylor coefficients and bounds the
matrix series inductively. Thus G converges on |z|<R, is invertible near0,
and gauges the equation to zV'=A_0V. This is actual analytic conjugacy,
not just a limiting characteristic-polynomial calculation.

5.4 Account for the fractional meridian endpoint. Choose the normal disk
at a W_H-fixed generic point of H; W_H rotates its coordinate, and the
bundle endpoint action is its fixed matrix g. The connection is
W_H-equivariant, A_0 commutes with g, and its transformed normalized gauge
satisfies precisely the same equation and has constant termI. Uniqueness
of the recursion gives the equivariance identity for G. Therefore the
endpoint-adjusted positive fractional transport is genuinely conjugate to
 g exp(iθ A_0), θ=2π/e_H,
with the native endpoint convention g=s_H. On the jth W_H-eigenspace its
value is the defined μ_H,j. This matrix is diagonalizable since A_0 and g
are simultaneously diagonal on that cyclic decomposition. Hence the
PRODUCT over j of (T_H−μ_H,j) annihilates this generic monodromy, even if
some roots happen to coincide. Conjugating along the basepoint path
preserves the relation. This argument does not assert diagonalizability
at excluded resonant parameters.

5.5 Choose c outside the following countable union of proper affine
hyperplanes: a_E(c)−a_F(c)∈Z_{>0} for any labels; and nonzero integral
differences of the normal residue eigenvalues at any H. Every relevant
difference is linear in c and is zero at c=0, so each nonzero-integer
condition cuts a proper hyperplane or an empty set. This complement is
dense in every parameter neighborhood. For example choose a line whose
direction avoids the finitely many nonzero linear forms involved; each
condition removes at most one point of the line, leaving a dense
complement to a countable set. All residue arguments5.3–5.4 apply there.
In addition category O is semisimple there: a proper standard submodule
would have a simple singular label F at degree d>0, forcing a_F−a_E=d,
which is excluded. Thus standards are simple. By2.1 all Ext1 between
standards vanish, so finite length makes every object a direct sum of
standards. This is the precise generic semisimplicity used in GGOR5.13.
It proves the generic relation for G_{n,c} either by5.4 applied directly
to U_n or by its decomposition into standards; the former is already
sufficient for the family argument.

5.6 For completeness, the monodromy matrices on G_{n,c} are holomorphic
in ALL c, not just generically. Fix piecewise smooth compact paths in
h_reg representing the based meridians. Their horizontal matrix ODE has
coefficients continuous on each segment and holomorphic in c. Its Picard
series is a sum of iterated integrals, uniformly normally convergent on
compact parameter sets because its kth term is bounded by L^k/k!, where
L bounds the integral of the coefficient norm on that set. Each term is
holomorphic in c, so the monodromy matrix is holomorphic. Inverses are
holomorphic too, by the reversed path. The endpoint W-matrix is constant.
The Hecke roots μ_H,j are exponentials of linear functions in c, hence
entire. Thus the relation matrix
 Q_H(c)=Π_j (T_H(c)−μ_H,j(c)I)
is holomorphic on parameter space. It vanishes on the dense generic set
from5.5, so continuity alone implies it vanishes everywhere (no
unproved flat specialization assertion or extension-from-subquotients
inference is used). This proves the exact Hecke relations for EVERY
G_{n,c}, every c, and every H.

5.7 For fixed c choose n as in1.1. The projective generator is a direct
summand of G_{n,c}, so every object M is a quotient of a finite sum of
G_{n,c}. Exact KZ sends this to a quotient of its monodromy module. The
Hecke relation already proved in5.6 passes to direct sums and quotients,
so it holds on KZ(M). This completes arbitrary-object factorization for
all finite complex reflection groups and all c. Standard factorization
is now an immediate consumer by taking M=Δ(E), requiring no resonant
semisimplicity statement.

## Integration limits

The conditional quotient-equivalence/full-faithfulness/Serre-roof and
algebra-surjectivity argument remains with the owner. The numerical Hecke
rank equality remains the explicit hypothesis of that final equivalence.
This document supplies the missing highest-weight/projective/BGG/rank
chain and an actual parameter-family polynomial-relation proof. The
currently incorrect standard-factorization inference is identified and
replaced, rather than used as a source premise. No theorem is reclassified
as an open problem merely because its local proof was missing.
