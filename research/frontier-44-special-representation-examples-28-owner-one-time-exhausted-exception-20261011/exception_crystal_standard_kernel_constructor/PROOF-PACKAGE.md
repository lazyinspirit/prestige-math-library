# C1: the exact nonstandard kernel and standard-socle criterion

Run: `frontier-44-special-representation-examples-28`. Constructor:
`/root/exception_crystal_standard_kernel_constructor`. Integration and supplier/
consumer acceptance remain with `/root/repair_klr_global_basis` and root. This is
guarded construction evidence, not a native verdict. No canonical item, receipt,
state, prior repair count, or gate is changed.

The exact consuming IDs are
`def-the-whittaker-functor-from-the-relevant-parabolic-o-summand`,
`thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives`,
and `thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects`.
The local arguments below can be inserted in their Facts/Proof interfaces; they
do not require rebuilding any accepted source16 supplier.

## Consumed local suppliers and conventions

1. `thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule`
   proves the actual normalized **module** projection pi, not merely a crystal
   map. Its integral kernel has the basis L_A for A off Std, and the image has
   the independent basis D_A=pi L_A for A in Std. Its Proof 5.1–8.1 gives the
   contravariance, module-linearity, delta evaluations, and saturated integral
   kernel. Its Proof 2.1–4.1 identifies Std with the original-order source upper
   ground component, equivalently the reverse-factor library lower component.
2. `thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix` and
   `thm-the-parabolic-o-grothendieck-group-is-the-integral-fock-module` give the
   standard-class map and [M(B):L(A)]=d_{A,B}(1). Inverting this exact matrix
   gives [L(A)]=L_A(1). This uses only the simple part of
   `thm-simples-projectives-and-tiltings-map-to-the-three-distinguished-fock-bases`,
   whose Proof 1.1 spells it out; its Ringel/tilting part is unnecessary here.
3. `thm-residue-translation-functors-give-the-integrable-fock-space-action`
   supplies exact biadjoint residue functors, standard flags, Chevalley action,
   and the actual simple head/socle theorem. Its head supplier is exactly
   `lem-the-local-affine-hecke-socle-argument-for-residue-translations`.
4. `thm-parabolic-category-o-is-a-highest-weight-category` gives finite length,
   BGG standard flags of projectives, simple-preserving restricted duality, and
   the usual highest-weight Ext ordering. The specific orientation required
   here is Ext^1(M(C),M(D))=0 unless C<D, with the source tableau Bruhat order:
   [M(C):L(D)] can be nonzero only for D<=C. This is also source17 (4.4).
5. `lem-separated-integral-cosets-give-typed-parabolic-category-equivalences`
   supplies the exact standard/simple/categorical tensor boundary for complex
   admissible origins. Its Proof 14.1–16.1 supplies the entry and residue shifts.

All inherited AC hypotheses of these suppliers are retained. The source
parameter is s; the library parameter is t=s^{-1}. Here L_A always means the
source **positive-s dual-canonical** vector. The original-order library lower
family T_A is labelled by Rev, not Std. The reverse-factor lower inclusion is
labelled by Std. The actual library upper vector is s^{a(alpha)}D_A, not the
unrescaled ordinary-bar-fixed D_A. The specialization used below is s=1, so
those weight units become 1; the proof does not identify the two embedded
integral lattices. The antispherical entry-stabilizer matrix p and the genuine
mixed parabolic composition matrix d remain the distinct signed families in
the accepted supplier. No Hecke simple classifier or eventual Ariki theorem
enters this argument.

## 1. Off-Std is a stable Serre kernel, not just a closed crystal set

Let A be nonstandard and write K for the integral Fock kernel of pi. By the
proved basis-subset kernel statement,

$$K=\bigoplus_{A\notin\mathrm{Std}}\mathbb Z[s,s^{-1}]L_A.$$

The Chevalley operators preserve the integral Fock lattice, and pi is a module
map. Thus E_i K and F_i K lie in K. This implication needs module-linearity;
closure of the off-Std crystal vertices alone would not exclude additional
Std composition factors of a residue translate. Since K is a direct summand
with the displayed basis and its quotient has the independent D-basis, tensor
specialization at s=1 gives exactly

$$\ker\pi_1=\bigoplus_{A\notin\mathrm{Std}}\mathbb Z L_A(1).$$

There is no extra kernel after specialization. Equivalently this follows by
writing pi in the L/D bases as the coordinate projection with entries 0 and 1.
For a nonstandard A, the categorical/K_0 dictionary now gives

$$[f_iL(A)]=F_i L_A(1)\in\ker\pi_1,\qquad [e_iL(A)]=E_iL_A(1)\in\ker\pi_1.$$

Expand either actual finite-length module in its simple basis:
[f_iL(A)]=sum_B n_B L_B(1), with n_B nonnegative integral composition
multiplicities. Projecting gives sum_{B in Std} n_B D_B(1)=0. Independence
forces n_B=0 for every Std B. The same proof applies to e_i. Exactness and a
composition series extend this assertion to every module whose factors are
off Std. Therefore the Serre subcategory generated by the nonstandard simples
is stable under **both** residue functors. This is the required categorical
form of source17 Lemma 4.7, now proved from local suppliers.

For complex admissible c, divide the columns by their C/Z cosets kappa,
retaining each coset's original column order. Put
n_kappa=max_{j in kappa}q_j and N_kappa=sum_{j in kappa}q_j. The exact typed
dictionary is

$$a^{\rm int}=a-c_\kappa+n-n_\kappa,\quad m_j=q_j-n_\kappa,\quad \inf I_\kappa=1-n_\kappa.$$

The original complex residue i becomes
i^{int}=i-c_kappa+n-n_kappa. This is the same shift as the entry move;
the roots c_kappa+q_j-n become q_j-n_kappa. Do not substitute N_kappa for
n_kappa in this formula. On the product of integral component Fock modules
use the tensor product of the normalized projections. In the tensor L-basis
its kernel is exactly the span of labels nonstandard in at least one coset:
all-Std images are tensor products of independent D-vectors, and all other
images vanish. The partial order on C compares only entries in the same coset,
so source17 Std is exactly componentwise Std. The block-projected residue
functor acts on the appropriate factor by the typed tensor/Casimir comparison,
and the preceding stability proof applies factorwise.

To treat the whole O_c rather than only a chosen nonnegative-degree admitted
cut, first choose r>=0 so every finitely many relevant entry and its one-step
standard-flag moves lie above their ground entries for c-r(1,...,1). Integer
shifting preserves the entry cosets and O_c itself. All relevant finite-length
composition factors are in the same admitted sum of blocks. Apply the exact
typed dictionary there. This gives the same Std predicate and the same residue
functors on the original objects. No assertion that an arbitrary label belongs
to the initially fixed admitted cut is needed.

## 2. Ground component, quotient detector, and the exact lowering order

The source upper signature reads columns left to right and each column top to
bottom, assigns + to i and - to i+1, cancels -+ pairs, and changes the rightmost
surviving + under tilde f_i or the leftmost surviving - under tilde e_i.
The accepted source16 projection supplier proves that the Std set is its
ground component. Within an admitted bounded-below component every non-ground
Std A has an incoming tilde f_i edge from a Std B of degree one less: its
highest vertex is ground, repeated raising strictly decreases the nonnegative
entry-sum excess, and the signature partial-inverse property reverses the last
edge. For several cosets apply this to a non-ground component. The displayed
entry shift preserves this degree, so the statement is exactly source17's
Std_c^d recursion.

Put T_d=P_c tensor V^{tensor d}. By induction every Std simple of degree d
is a quotient of T_d: the base is L(A_c)=P_c; if A=tilde f_i B, exact f_i
carries T_{d-1}->>L(B) to f_iT_{d-1}->>f_iL(B), whose actual crystal head
surjects onto L(A). The functor f_iT_{d-1} is a direct summand of T_d, so this
is also a quotient of T_d. This uses the supplied categorical head theorem,
not an inference from a character coefficient.

For an arbitrary column-strict C, form B by leaving column 1 fixed and adding
nonnegative integers k_j to every entry of column j, choosing them successively
so that every B-entry in column j is greater than every earlier B-entry in the
same coset. Different cosets require no comparison. Then B is standard and
minimal in its fixed-entry-multiset Bruhat orbit. The triangular standard/simple
matrix gives M(B)=L(B): no strictly smaller label occurs.

Write the entries of column j of C as a_{j,1}<...<a_{j,q_j}. Define the functor

$$\mathcal E_j=(e_{a_{j,q_j}}\cdots e_{a_{j,q_j}+k_j-1})\cdots(e_{a_{j,1}}\cdots e_{a_{j,1}+k_j-1}).$$

Empty products are identities, and functors are composed rightmost first.
Apply E_2, then E_3, ..., then E_l to M(B). Thus for each column one first
lowers its **smallest entry** from a_{j,1}+k_j to a_{j,1}, then its next entry,
and so on. In the convention "entries increase bottom to top" this is
bottom-to-top. The previous heads packet's phrase "top to bottom" should be
replaced by this explicit product. Within each parenthesized product the
residues act in descending numerical order.

Here is why the construction gives an actual monomorphism, not only a flag
multiplicity. At each elementary step on the distinguished tableau, its
target entry in column j can validly be lowered: all smaller entries in that
column have already reached their original smaller values, and all larger
entries remain shifted above it. Every later column remains strictly above
the entire shifted range of column j in this coset. Consequently any other
valid change of i+1 to i must occur in an earlier column. Compared with our
change in column j, an earlier-column change increases an earlier factor
prefix by delta_i-delta_{i+1}; by the stated prefix Bruhat convention that
other resulting tableau is strictly **smaller**. Our target is therefore the
largest label in this multiplicity-free e_i-standard flag.

Move its standard section to the bottom of the flag. This reordering is legal:
whenever the largest section M(D) is directly above a smaller section M(C),
the extension splits since Ext^1(M(D),M(C))=0 for D not<C. Swapping such
adjacent sections finitely many times puts M(D) at the bottom. Hence there
is a monomorphism M(D)->e_i M(current distinguished tableau). Composing these
monomorphisms and applying the **exact** remaining functors preserves their
injectivity. The result is the concrete source17 Corollary 4.4 inclusion

$$M(C)\lhook\joinrel\longrightarrow\mathcal E_l\cdots\mathcal E_2 L(B).$$

All functors here remain in O_c; no assertion that this construction remains
within the initially selected degree-d summand is needed. Its final object
has the degree of C, and any finite outside-cut step is handled by the common
origin shift from section 1.

## 3. Standard-simple socle criterion and the detector's actual factors

Suppose L(A) embeds into M(C). Compose with the preceding standard embedding
to obtain a nonzero map L(A)->e_{i_1}...e_{i_r}L(B) with B standard. Repeated
biadjunction gives a nonzero map
f_{i_r}...f_{i_1}L(A)->L(B); because its target is simple this is surjective.
If A were nonstandard, section 1 would force every factor of its source to
be nonstandard, contradicting this standard simple quotient. Thus **every
simple in the socle of every standard is standard**.

The converse can also be proved without individual self-duality of arbitrary
summands. For standard A choose a common downward origin shift placing A in
nonnegative degree. Section 2 gives T_d->>L(A). Restricted duality fixes L(A),
fixes P_c, and commutes with tensoring by the transposition-self-dual V, so
T_d is self-dual. Dualizing gives L(A)->T_d. The PBW/tensor identity gives a
standard flag of T_d. For a simple submodule S of any standard-filtered X,
choose the first filtration term X_j having nonzero intersection with S.
Then S is contained in X_j, has zero intersection with X_{j-1}, and therefore
embeds in X_j/X_{j-1}, an actual standard. This proves

$$A\in\mathrm{Std}_c\quad\Longleftrightarrow\quad L(A)\text{ embeds in some generalized standard}. $$

In particular every standard-filtered module, including all projectives and
T_d, has Std socle. T_d is projective and injective: exact tensoring by V has
the exact tensoring-by-V* adjoint on both sides, so it preserves both classes.
Restricted duality makes T_d's head Std as well. If a simple quotient L(A) of
T_d is given, lifting through its projective cover gives a surjection
T_d->>P(A): its image plus rad P(A) is all P(A), and essentiality of the cover
forces that image to be all P(A). Projectivity splits the surjection. Thus
the indecomposable projective summands of T_d are exactly the covers of Std
simples, with positive multiplicity; each is injective as a summand of T_d.

Every I(A) for a Std label belongs to add(T_d) in its fixed degree: it is
D(P(A)), and add(T_d) is duality-stable. This establishes precisely the
injective-hull membership needed for the heads constructor's projective
copresentations, without asserting I(A)=P(A) or that each summand of a
self-dual direct sum is individually self-dual.

Finally, every nonzero submodule X of T_d has a nonzero simple socle (finite
length), and that socle has Std labels. Therefore an exact functor whose
simple kernel is precisely off Std cannot annihilate X. This is the detector
needed for the endomorphism comparison. **It does not say that all factors
of T_d are Std.** Indeed the same PBW/tensor standard flag contains every
degree-d standard at least once, so every degree-d Col simple occurs as a
composition factor of T_d (source17 Lemma 4.2). Socle detection and off-Std
Serre stability are the separate assertions that resolve the held interface.

## Source reading and adoption boundary

I read the complete local source16 projection and global-normalization proof
carriers, the simple/K_0/residue suppliers listed above, the typed complex
coset carrier, and the existing higher-Fock current-proof compilation. I read
the actual source17 full-text carrier at Section 4.1–4.4, printed pp.18–22,
including all of Lemmas4.1–4.3, Corollary4.4, Lemmas4.5/4.7, Corollary4.6 and
Theorem4.8's proof; source16's available full-text carrier at Sections2.2–2.4
and3.1, printed pp.6–10 and20–22. These are full source passages from the
retrieved papers, not abstracts or external theorem names substituted for a
local proof. I do not claim fresh retrieval or a cover-to-cover external read.

The local stability, explicit monomorphism, and socle arguments above close C1
using the existing accepted strongest suppliers. No new missing supplier ID
was identified for this C1 interface. The independent W1/C2/D1 construction
and root's current-carrier acceptance remain separate obligations. Root must
bind the final proof and dependency/contract mirrors on stable carriers; this
packet neither changes nor grants a native decision.
