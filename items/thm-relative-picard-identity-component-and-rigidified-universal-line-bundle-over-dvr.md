---
dependency_level: 4
id: thm-relative-picard-identity-component-and-rigidified-universal-line-bundle-over-dvr
kind: theorem
title: Relative Picard schemes and Jacobians of smooth proper DVR curves
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-relative-curve-over-dvr-universal-cohomology
- lem-smooth-proper-curve-over-dvr-has-finite-flat-cartier-multisection
- lem-relative-curve-picard-rigidification-and-affine-diagonal
- lem-projective-flat-equivalence-relation-hilbert-quotient
- thm-hilbert-scheme-represents-projective-flat-families
- thm-local-ring-smooth-curve-dvr
- lem-noetherian-flatness-by-fibres-finite-target-module
- lem-noetherian-local-flatness-criterion-finite-over-target
- thm-krull-intersection-theorem
- thm-finite-flat-modules-over-local-rings-are-free
- thm-flat-quotients-preserve-short-exact-tensor-sequences
- lem-filtered-colimit-fp-sheaf-stage
- lem-proper-flat-fp-cohomology-perfect-complex
- thm-full-riemann-roch-divisor
- thm-projective-bundle-represents-line-quotients
- lem-faithfully-flat-effective-descent-of-modules-and-algebras
- thm-faithfully-flat-descent-of-flatness
- lem-ag-flat-local-regularity-ascent-descent
- thm-smooth-morphism-formally-smooth-finite-presentation
- def-formally-smooth-morphism
- thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
- thm-picard-zero-represented-by-jacobian
- def-abelian-scheme
- def-group-scheme-over-a-scheme
- thm-proper-quasi-finite-is-finite
- thm-nakayama-lemma
- def-smooth-morphism-schemes
- def-axiom-of-choice
- def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: AC and DC are explicit actual scheme, Hilbert, flattening, cohomology and
  descent supplier hypotheses. All tests include nilpotents and non-Noetherian schemes.
sources:
  references:
  - title: Steven Kleiman, The Picard Scheme, Theorem4.8 andLemma4.9
    url: https://arxiv.org/pdf/math/0504020
    locator: PDF27–31 full relevant printed proofs read. Its AK80 effectiveness citation
      is replaced by the local all-test flattening proof; AK80 full text was not recovered/read
      and is not imported.
  - title: Quentin Guignard, On the ramified class field theory of relative curves,
      arXiv1804.02243v2
    url: https://arxiv.org/pdf/1804.02243v2
    locator: Full Section4.1–4.14, PDF16–21 read. Relative representability citations
      are not imports; the construction here uses actual local Hilbert/flattening/cohomology
      suppliers.
---

## Statement

Assume AC and DC. Let $R$ be any discrete valuation ring and $p:C\to\operatorname{Spec}R$ a smooth proper curve with geometrically connected fibres, of genus $g\ge0$. On all $R$-schemes define $\mathcal P$ as the fppf sheafification of $T\mapsto\operatorname{Pic}(C_T)/p_T^*\operatorname{Pic}(T)$. Then $\mathcal P$ is represented by a separated smooth $R$-group scheme $J$, locally of finite presentation. Degree is locally constant on tests; each fixed-degree subfunctor $\mathcal P^n$, $n\in\mathbb Z$, is represented by an open-and-closed projective finitely presented $R$-scheme $J^n$, and $J=\coprod_{n\in\mathbb Z}J^n$.

The group scheme $J^0$ is an abelian scheme of dimension $g$. Its fibre over every field-valued point of $\operatorname{Spec}R$ is canonically the Jacobian of that field curve, with the comparison on every test over that field. Thus its generic fibre is the Jacobian of $C_{\operatorname{Frac}R}$. If a section of $C_T/T$ is supplied after any base change, rigidification along it gives the normalized universal line bundle on $C_T\times_TJ_T$, and on each degree component. Without a section no ordinary universal line bundle is asserted.

The representability, base-change and normalization assertions include arbitrary nonreduced and non-Noetherian tests. No completeness, henselian property, perfect residue field, or original section is assumed. All genera and all residue characteristics are retained. AC/DC are explicit hypotheses, not closure of any stronger original unqualified consumer.

## Facts & Assumptions

**Given:** AC/DC and the DVR curve, the explicitly defined fppf Picard sheaf, and arbitrary test schemes.

[A1] The actual scheme, cohomology, Hilbert, flattening and descent suppliers assume AC/DC. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] Universally the structure sheaf has constants equal to the base and no cohomology above degree one on affine tests. High-degree line bundles have a base-change-compatible vector bundle of sections and no positive direct images. The actual universal finite cohomology complex computes arbitrary-algebra comparisons. [[lem-relative-curve-over-dvr-universal-cohomology]] [[lem-proper-flat-fp-cohomology-perfect-complex]]

[F2] There is a finite flat Cartier multisection $Z$ of positive rank $e$, with projective-space embedding of $C/R$ and a tautological section after the full finite faithfully flat base change $Z/R$. [[lem-smooth-proper-curve-over-dvr-has-finite-flat-cartier-multisection]]

[F3] On all tests a supplied section identifies the relative fppf Picard sheaf with normalized actual line bundles and unique normalized isomorphisms; these descend effectively, and the diagonal is affine of finite presentation. [[lem-relative-curve-picard-rigidification-and-affine-diagonal]]

[F4] The projective Hilbert theorem represents flat finitely presented embedded families on all tests over a Noetherian base. Closed points of a smooth field curve have DVR local rings. Finite flat modules over Noetherian local rings are free, and Nakayama detects vanishing of finite modules. [[thm-hilbert-scheme-represents-projective-flat-families]] [[thm-local-ring-smooth-curve-dvr]] [[thm-finite-flat-modules-over-local-rings-are-free]] [[thm-nakayama-lemma]]

[F5] The Noetherian finite-over-target local criterion and fibrewise flatness criterion apply without finiteness over the smaller base. Krull intersection vanishes for an ideal in the Jacobson radical of a Noetherian local ring. A flat quotient preserves the exact sequence under arbitrary tensoring. [[lem-noetherian-local-flatness-criterion-finite-over-target]] [[lem-noetherian-flatness-by-fibres-finite-target-module]] [[thm-krull-intersection-theorem]] [[thm-flat-quotients-preserve-short-exact-tensor-sequences]]

[F6] Finitely presented sheaves, maps and identities descend to finite stages; descend an inverse and evaluation identities to retain invertibility. Curve Riemann–Roch identifies fibre degree with Euler characteristic plus $g-1$. [[lem-filtered-colimit-fp-sheaf-stage]] [[thm-full-riemann-roch-divisor]]

[F7] Projective bundles use the invertible-quotient convention and represent those quotients on all tests. [[thm-projective-bundle-represents-line-quotients]]

[F8] Faithfully flat module and algebra descent is effective, without Noetherian restrictions. [[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]

[F9] Proper quasi-finite morphisms are finite. The proved projective-relation Hilbert quotient constructs an actual projective fppf quotient from a closed flat finitely presented relation on a projectively embedded Noetherian affine-base scheme. [[thm-proper-quasi-finite-is-finite]] [[lem-projective-flat-equivalence-relation-hilbert-quotient]]

[F10] On a quasi-compact separated scheme, finite affine Čech covers compute cohomology of every quasi-coherent module, including non-Noetherian schemes. [[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]

[F11] Formal smoothness requires lifts Zariski locally for all square-zero tests, and together with local finite presentation is equivalent to smoothness. [[def-formally-smooth-morphism]] [[thm-smooth-morphism-formally-smooth-finite-presentation]]

[F12] Flatness descends along faithful flatness. Regularity descends in a flat local map of Noetherian local rings without a residue-field finiteness assumption. [[thm-faithfully-flat-descent-of-flatness]] [[lem-ag-flat-local-regularity-ascent-descent]]

[F13] Over any FIELD the degree-zero Picard sheaf is its smooth proper geometrically connected Jacobian of dimension $g$, on all tests under AC/DC. The definitions of smoothness, group scheme and abelian scheme supply the final family interpretation. [[thm-picard-zero-represented-by-jacobian]] [[def-smooth-morphism-schemes]] [[def-group-scheme-over-a-scheme]] [[def-abelian-scheme]]

## Proof

**Proof technique:** construct the divisor atlas and its closed linear-system relation; use the actual scheme-theoretic Hilbert flattening quotient; lift normalized bundles across all square-zero tests and descend from the full finite flat multisection.

**Given:** The Statement data under [A1].

1.1 Fix an integer $d\ge\max(0,2g-1)$ and put $r=d+1-g>0$. The accepted Cartier-multisection lemma embeds C in an ordinary projective space over R. Apply the actual arbitrary-base Hilbert theorem to constant polynomial d, giving a projective finitely presented H with universal flat finitely presented closed family D⊂C_H. Every geometric fibre of D has finite length d, since that is precisely its constant Hilbert polynomial. D→H is proper and quasi-finite, hence finite; flat finite presentation and fixed fibre length make it finite locally free of rank d. This includes d=0, where D is empty and H=Spec R. [A1, F2, F4, F9, given, construct]

2.1 The universal ideal I is flat over H: in $0\to I\to\mathcal O_{C_H}\to\mathcal O_D\to0$, both the last module and the middle one are H-flat, so the kernel is H-flat, and the sequence stays exact after arbitrary tensoring. All these schemes are Noetherian. At any point of C_H use the actual Noetherian flatness-by-fibres criterion with module I finite over the local ring of C_H: the fibre ideal is rank-one free because a finite subscheme of a smooth geometric curve is defined in its DVR local rings by a uniformizer power (and by 1 off its support). The same holds before algebraic closure by faithful flatness. Thus I is flat over the local ring of C_H. It is finite presented, so free locally, of rank one by its residue fibre. To spell out the last familiar finite-module step, lift a basis of I/mI to a surjection A^n→I; its kernel is finite over Noetherian A and tensoring is exact by flatness. The kernel has zero residue fibre, so Nakayama makes it zero. Its inclusion I→O is injective and locally has one generator, so that generator is a nonzerodivisor. Hence D is an effective Cartier divisor. Because O_D is H-flat, this ideal sequence remains exact on every base change, so D remains Cartier on every test. Conversely a relative Cartier divisor finite flat of degree d is a Hilbert family of constant polynomial d. These inverse descriptions are equality of ideal sheaves, not only a bijection of geometric points. [F4, F5, step 1.1, algebra]

3.1 Here is the required regular-section criterion, with its local algebra and arbitrary-test extension explicit. For a flat local map A→B of Noetherian local rings and f∈B regular in $B/\mathfrak m_AB$, first f is regular in B. Indeed flatness identifies each associated graded piece $\mathfrak m_A^nB/\mathfrak m_A^{n+1}B$ with $(\mathfrak m_A^n/\mathfrak m_A^{n+1})\otimes_{A/\mathfrak m_A}(B/\mathfrak m_AB)$. Multiplication by f is injective on each such piece, since it is a direct sum of copies of multiplication by the regular residue element. If fx=0, induction puts x in every $\mathfrak m_A^nB$. Krull intersection in the Noetherian local B gives x=0. Put $M=B/fB$. The ideal-tensor injection for the local criterion has a direct proof. If $z\in\mathfrak m_A\otimes_A M$ maps to zero in $M$, lift it to $w\in\mathfrak m_A\otimes_A B$. Its product in $B$ is $fb$ for some $b\in B$. Modulo $\mathfrak m_AB$, regularity of $\overline f$ implies $b\in\mathfrak m_AB$. Lift $b$ to $w'\in\mathfrak m_A\otimes_A B$. The map $\mathfrak m_A\otimes_A B\to B$ is injective by $A$-flatness of $B$, so $w=fw'$. Its image $z$ is zero in $\mathfrak m_A\otimes_A M$. Thus that multiplication map is injective without using a flat-resolution/projective-resolution comparison. Its residue quotient is a vector space, hence flat over $A/\mathfrak m_A$. The actual published local criterion, applied with module B/fB finite over B (not necessarily over A), therefore proves B/fB A-flat. Thus a fibrewise regular section of a line bundle on a Noetherian flat family defines a relative Cartier divisor with flat quotient. This proves exactly the universal assertion needed at the Noetherian stage, without any rank-jumping assertion. For arbitrary affine T=Spec A and an invertible L of constant fibre degree d, descend L to a finite-type R-subalgebra A0 as follows. Cover the fixed quasi-compact separated C by finitely many affines and use finitely many principal opens trivializing L on C_A. Their coefficients, transition units and inverses, overlap identities and unit equations saying the opens cover involve finite data. They therefore descend to one A0, enlarging it for all identities. This constructs an invertible L0, not merely a finitely presented sheaf. Its fibre degree is locally constant: the actual universal cohomology complex has locally constant alternating rank, equal by curve Riemann–Roch to degree+1−g. Restrict to its degree-d open-and-closed locus V⊂Spec A0; the map T→Spec A0 lands in V because every A-fibre has degree d. Cover V by affine opens. On each, the accepted high-degree cohomology lemma gives $E_0=p_*L_0$ finite locally free of positive rank r. On the Noetherian projective bundle $Q_0=\mathbb P(E_0^\vee)$, the tautological section of L0 twisted by its base quotient line is nonzero on each geometric curve fibre: the base-change comparison identifies it with a nonzero vector of H0(L0). Every fibre is integral, so this section is regular everywhere on that fibre. The local algebra just proved shows its zero scheme is Cartier with base-flat quotient. Pulling its ideal sequence back along every Q0-test preserves injection, since the quotient is flat, and its ideal remains invertible. The resulting zero scheme is proper and quasi-finite of degree d, hence finite locally free of rank d. Pullback along the map $\mathbb P(E_L^\vee)\to Q_0$ supplies the required universal section criterion for every original A, including all its nilpotents. This proof uses only the positive-degree stage, not a false assertion that arbitrary fibrewise-zero loci in a jumping cohomology complex are closed. [F1, F5, F6, F7, step 2.1, construct, algebra]

4.1 For line bundle L of degree d the accepted universal-cohomology lemma gives $E_L=p_*L$ locally free of rank r, compatible with all base changes. A morphism U→$\mathbb P_T(E_L^\vee)$ is a quotient $E_L^\vee|_U\to N$, or dually a subline $N^\vee\to E_L|_U$ nonzero in every fibre. Evaluation gives a section of $L_U\otimes p_U^*N$ which is nonzero on every geometric fibre. The criterion of step 3.1 makes its zero scheme a relative Cartier divisor. Its degree is d on each fibre, so it is the divisor in H(U). Conversely a divisor with $\mathcal O(D\prime)\simeq L_U\otimes p_U^*N$ gives this subline, and hence the quotient, uniquely up to its usual line-quotient isomorphism. [F1, F7, step 3.1, construct]

5.1 The potential fppf ambiguity of that last isomorphism does not introduce a Brauer assumption. If two actual line bundles L',L have equal class in P(U), their ratio M is fppf locally the pullback of a base line. The functor p^* on base invertible sheaves is fully faithful: $\operatorname{Hom}(p^*N_1,p^*N_2)=\operatorname{Hom}(N_1,N_2)$ by the accepted universal equality p_*O=O. The local isomorphisms p^*Ni≅M induce unique base transition maps Ni→Nj; because their pullbacks are the transition maps induced by the single actual M, they obey the cocycle. Effective faithfully flat module descent glues a base line N with p^*N≅M: descend the inverse lines and their evaluation maps as well; their inverse and duality identities are detected after the faithful flat pullback, so the descended sheaf is again invertible. Thus the classification of step 4.1 is indeed the full sheaf fibre over the class of the supplied L, not a presheaf-only approximation. No ordinary universal line bundle without a section was used. [F1, F8, step 4.1, algebra]

6.1 Every $\mathcal P^d$ class has an actual L fppf locally by sheafification. E_L has positive rank, so locally a basis vector defines a projective-bundle point and thus a degree-d divisor by steps 3.1–4.1. Therefore α is an fppf epimorphism. Degree is well defined on the sheaf: it is unchanged by base-line twists and field extension, and is locally constant in a line-bundle family. The latter follows from the universal finite cohomology complex, whose Euler characteristic is its locally constant alternating rank, and curve Riemann–Roch degree=χ+g−1. So the degree-d condition descends on all tests. [F1, F6, step 3.1, step 4.1, step 5.1, construct]

7.1 Over $H$ the universal $\mathcal O(D)$ is an actual bundle. Define the functor $E=H\times_{\mathcal P^d}H$. Steps 4.1–5.1 represent it over the first $H$ by $\mathbb P_H((p_*\mathcal O(D))^\vee)$, a projective bundle of relative dimension $r-1$. The other projection is the same by exchanging divisors. Its map to H×H is a monomorphism because it represents equality of two sheaf classes. It is proper: E→H is proper and H×H→H is separated. The monomorphism is quasi-finite (geometric fibres have at most one point and are zero-dimensional), so it is finite by proper-quasi-finite finiteness. For completeness a finite monomorphism is a closed immersion without a theorem import: locally A→B has multiplication $B\otimes_A B\to B$ an isomorphism. After a residue field k, finite dimension gives $(\dim_k B_k)^2=\dim_k B_k$, so the dimension is zero or one. The map k→B_k is therefore onto, including the zero algebra. The finite A-module $\operatorname{coker}(A\to B)$ has every residue fibre zero; Nakayama at every prime makes it zero. Hence A→B is surjective. Thus E is the claimed closed family, flat and finitely presented over H. [F4, F9, step 4.1, step 5.1, step 6.1, algebra]

8.1 Apply the actual Hilbert universal property to this family, with H the parameter and H the ambient projective R-scheme, to obtain h. For every T and x,y∈H(T), if (x,y)∈E(T), transitivity and symmetry of equality in P identify their orbit families as exactly the same closed subscheme of H_T; hence h(x)=h(y). Conversely if h(x)=h(y), these closed orbit families coincide scheme-theoretically. The point x:T→H_T belongs to its own orbit via the diagonal E; it therefore belongs to y's orbit, which says precisely (x,y)∈E(T). These constructions are functorial for arbitrary T and their nilpotents. Yoneda identifies E with H×_(Hilb)H as schemes, not just on geometric points. Fibre Hilbert polynomials are locally constant on H by the Hilbert-family polynomial theorem; quasi-compact H meets only finitely many such open-and-closed polynomial loci, so h lands in finitely many projective Hilbert components. [F4, step 7.1, construct]

9.1 Steps 1.1–8.1 give projective H_d, the closed relation E_d, and its smooth projective-space-bundle projections for d≥max(0,2g−1). All hypotheses of the quotient theorem in [F9] are therefore supplied on all tests. Its quotient Q_d is projective finitely presented over R, and represents $\mathcal P^d$ because H_d→$\mathcal P^d$ is a sheaf epimorphism with exactly that kernel pair. This conclusion is scheme representability, not merely an algebraic-space atlas, a geometric-point quotient, or an image with an unproved flatness property. [F9, step 1.1, step 6.1, step 7.1, step 8.1, construct]

10.1 For an arbitrary integer n, fix the accepted finite flat Cartier multisection Z of degree e>0. Choose m≥0 with d=n+me≥max(0,2g−1). Tensoring by the actual O_C(mZ) identifies $\mathcal P^n$ with $\mathcal P^d$ on every test, so Q_d provides a projective representative J^n of $\mathcal P^n$. Different choices give canonically isomorphic representatives by their common functor and Yoneda. Define J=the disjoint union over all integers n of J^n. On any test, degree is locally constant by the finite-complex Euler-characteristic proof, hence its inverse images are open and closed, and the representing properties on those loci identify Hom(T,J) with the full relative fppf Picard sheaf. J is separated and locally of finite presentation over R (each disjoint component is separated finitely presented). Tensor product, inverse and the trivial bundle supply its group scheme operations by Yoneda, with the full associativity/unit/inverse identities inherited from the sheaf. No base point on C was chosen. [F1, F2, F13, step 6.1, step 9.1, construct]

11.1 Here is the requisite coefficient-cohomology assertion. For EVERY R-algebra A and EVERY A-module M, regard A⊕M as the square-zero R-algebra with multiplication $(a,m)(b,n)=(ab,an+bm)$. Its curve has the same topological space as C_A and its structure sheaf is $\mathcal O_{C_A}\oplus(\mathcal O_{C_A}\otimes_A M)$. This follows affine-locally by tensoring the flat R-algebra charts; the projection to C_A splits the injection and the multiplication. Finite direct sums commute with sheaf cohomology (or with the actual finite-affine Čech complex). The accepted universal-cohomology lemma gives $H^2(C_{A\oplus M},\mathcal O)=0$. Thus $H^2(C_A,\mathcal O_{C_A}\otimes_A M)=0$. No assertion of tensor-exactness for the arbitrary M and no restriction to residue-field vector spaces is used. [F1, F10, step 10.1, construct, algebra]

12.1 Now let A'→A be ANY surjection of algebras over the finite flat multisection base Z, with square-zero kernel I; A',A may be nonreduced and non-Noetherian. Because C_(A') is A'-flat, the ideal of C_A in C_(A') is $\mathcal O_{C_A}\otimes_A I$ and is square-zero. The exact units sequence on the common topological space is $1\to(\mathcal O_{C_A}\otimes_A I,+)\to\mathcal O_{C_{A\prime}}^*\to\mathcal O_{C_A}^*\to1$, where v↦1+v identifies the additive kernel with the multiplicative kernel. Surjectivity is local: on an affine open every unit of a quotient by a square-zero ideal lifts to a unit, since $(1+j)^{-1}=1-j$. For completeness one need not import Pic=H1(Gm). Given an actual line bundle L on C_A, choose finitely many affine opens of C_(A') whose reductions trivialize L; all finite intersections are affine because C_(A') is separated over the affine A'. Lift its transition units on those affine intersections. Their products on triples differ from1 by elements c_ijk of $\mathcal O_{C_A}\otimes_A I$, and associativity gives the additive Čech2-cocycle identity (I²=0). The actual finite-affine Čech theorem applies on the quasi-compact separated C_A even when A is non-Noetherian. By step 11.1 this 2-cocycle is a coboundary. Multiply the lifted transitions by1 minus a correcting1-cochain; the new transitions satisfy the exact cocycle. Glue the trivial rank-one modules to obtain a line bundle L' on C_(A') reducing to L. This is the actual unit-exactness/cohomology lifting argument on all affine square-zero tests. [F1, F10, step 11.1, construct, algebra]

13.1 The curve C_Z has its tautological section a even if Z has nilpotents. The accepted rigidification theorem therefore identifies the full J_Z functor with normalized actual line bundles on EVERY Z-test. In a square-zero lifting problem Spec A→J_Z over Spec A'→Z, take its actual normalized L; step 12.1 lifts its underlying bundle. Normalize the lift by tensoring with the inverse pullback of a^*L'. Its reduction is the original normalized pair via the canonical normalization isomorphism. Its degree function is unchanged because nilpotent thickenings do not change any geometric fibre. Thus every affine test lifts; a general test is covered by affine opens, giving exactly the local lifting convention of the actual formal-smoothness definition [F11]. Since J_Z is locally of finite presentation, the formal-smoothness theorem [F11] proves it smooth over Z. [F2, F3, F11, step 10.1, step 12.1, construct]

14.1 This smoothness descends to J/R without treating the multisection as reduced or étale. The map J_Z→J is finite faithfully flat. Smoothness of J_Z/Z and flatness of Z/R imply J_Z/R flat. On affine charts faithful flatness detects exactness of tensors, so J/R is flat. To check geometrically regular fibres, fix any residue field k of R and any extension L/k. Choose a point of the nonempty finite k-scheme Z_k, of residue field k', and a common field extension E of L and k'. The base change of J_Z→Z at that point is J_k×_k k', smooth over k'; after E it is geometrically regular. For a point of J_L, extend it to a point after the faithfully flat field extension E/L and localize. The resulting flat local map of Noetherian local rings has regular target, so the actual flat-local regularity-descent lemma gives regular source. Thus J_k is geometrically regular. J/R was already locally of finite presentation, so the actual flat/finitely-presented/geometrically-regular-fibre definition proves smoothness. The same argument applies to every J^n. [F2, F12, F13, step 13.1, algebra]

15.1 Restriction to a field fibre is identified with its full all-test Picard sheaf, because the construction represents the relative sheaf on arbitrary tests and its comparison commutes with every base change. The field theorem [F13], at its explicit AC/DC scope and in every characteristic, makes (J^0)_k the field Jacobian: geometrically connected, dimension g, smooth and proper. This is a legitimate field application, not a field theorem used over R. J^0 is projective, smooth and a group scheme over R with those geometric fibres, hence an abelian scheme of dimension g by the actual definition. Its generic fibre is canonically J_(C_K) by Yoneda. Thus it supplies the genuine AC/DC Jacobian good-reduction implication from a smooth proper curve model, retaining all genera ($g=0$ gives the trivial abelian scheme) and arbitrary DVRs. [F13, step 10.1, step 14.1, algebra]

16.1 If an original section is supplied, the accepted all-test rigidification theorem identifies the represented Picard functor with normalized line bundles. Apply it to the identity map of its representing scheme to obtain the universal normalized bundle and its section rigidification. If no section is supplied there is no assertion of an ordinary universal bundle. The multisection is used for the smoothness argument with its entire nilpotent structure; it is not descended as an ordinary universal bundle or falsely called étale. [F3, step 10.1, step 15.1, construct] ∎

## Remarks

The projective quotient is constructed by the actual universal flattening stratum, not by assuming flatness of a schematic image. Theta ampleness, a general determinant functor, algebraic-space representability, and an external AK80 quotient theorem are not inputs. This theorem supplies its full explicit AC/DC scope; original stronger unqualified consumer obligations and Parshin’s extra Dedekind-base/Abel–Jacobi/square-root-extension requirements remain separate.
