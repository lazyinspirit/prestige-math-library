---
id: lem-quasi-finite-morphism-finite-after-etale-localization
kind: lemma
title: Quasi-finite points become finite after elementary étale localization
status: draft
dependency_level: 2
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-etale-fppf-topology-comparison-and-cohomology-models
- thm-hilbert-basis-theorem
- def-etale-morphism-schemes
- def-finitely-presented-module-and-algebra
- lem-zmt-quasi-finite-transfer-through-intermediate-rings
- lem-zmt-conductor-radical-coefficients
- lem-zmt-one-generator-local-integrality
- lem-zmt-polynomial-rings-over-normal-domains-are-normal
- lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite
- thm-transitivity-of-integrality
- thm-integrality-and-finite-module-equivalences
- thm-integral-closure-is-integrally-closed
- thm-monic-polynomial-division
- thm-localisations-are-flat
- cor-free-modules-are-projective-and-flat
- thm-splitting-fields-exist-for-nonzero-polynomials
- lem-determinant-trick-for-nakayama
- cor-noether-normalisation-module-finiteness
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, Etale Cohomology and Cohomology on Sites; More on Morphisms and Algebra
    url: https://stacks.math.columbia.edu/download/etale-cohomology.pdf
    locator: Local reconstruction from the full retrieved chapter sources, with targeted sections only. Exact item proof inputs and reading limits recorded below.
  - title: Demarche and Harari, Artin–Mazur–Milne duality for fppf cohomology, arXiv:1804.03941v3
    url: https://arxiv.org/pdf/1804.03941v3
    locator: Section2 completed-field complexes, Proposition2.1(4), Remark2.2 and Lemma2.10. It cites ordinary comparison and is not an independent proof of the generic finite-refinement geometry.
axiom_use: Only finite choices and all-witness covering refinements are used. Actual supplied cohomology models are data; no unqualified injective-existence theorem or family of closures is asserted.
proof_strategy: direct
---

## Statement

Let f:X→S be locally of finite type and let x be a specified isolated point of the fibre over s=f(x). There are affine elementary etale (U,u)→(S,s) with residue field κ(u)=κ(s), and an affine open V⊂X×S U finite over U, having exactly one point v above u, mapping to x with κ(v)=κ(x). Further elementary etale base change preserves this conclusion. The construction of U uses at most two universal monic coprime-factorization/resultant charts and principal localizations; V is obtained by principal localizations of the affine base change. No separation or choice assumption is made.

## Statement references

[[def-etale-fppf-topology-comparison-and-cohomology-models]]

[[thm-hilbert-basis-theorem]]

[[def-etale-morphism-schemes]]

[[def-finitely-presented-module-and-algebra]]

[[lem-zmt-quasi-finite-transfer-through-intermediate-rings]]

[[lem-zmt-conductor-radical-coefficients]]

[[lem-zmt-one-generator-local-integrality]]

[[lem-zmt-polynomial-rings-over-normal-domains-are-normal]]

[[lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite]]

[[thm-transitivity-of-integrality]]

[[thm-integrality-and-finite-module-equivalences]]

[[thm-integral-closure-is-integrally-closed]]

[[thm-monic-polynomial-division]]

[[thm-localisations-are-flat]]

[[cor-free-modules-are-projective-and-flat]]

[[thm-splitting-fields-exist-for-nonzero-polynomials]]

[[lem-determinant-trick-for-nakayama]]

[[cor-noether-normalisation-module-finiteness]]

## Facts & Assumptions

**Given:** All data and hypotheses of the statement, with every actual supplied cohomology model interpreted as in the topology-comparison definition.

[F1] Use the exact public interface of [[def-etale-fppf-topology-comparison-and-cohomology-models]] at the hypotheses stated there.

[F2] Use the exact public interface of [[thm-hilbert-basis-theorem]] at the hypotheses stated there.

[F3] Actual fp + flat + geometrically regular dimension-zero fibre definition; no Jacobian equivalence. [[def-etale-morphism-schemes]]

[F4] Finite polynomial relation and localization presentations. [[def-finitely-presented-module-and-algebra]]

[F5] All four unqualified local-fibre transfers; used in sections2–3. [[lem-zmt-quasi-finite-transfer-through-intermediate-rings]]

[F6] Unqualified radical coefficient conclusion; countable ZMT one-variable conductor. [[lem-zmt-conductor-radical-coefficients]]

[F7] Unqualified one-generator localization result. [[lem-zmt-one-generator-local-integrality]]

[F8] Unqualified polynomial normality in countable going-down application. [[lem-zmt-polynomial-rings-over-normal-domains-are-normal]]

[F9] Finite integral subalgebras throughout. [[lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite]]

[F10] Integral closure replacement in ZMT induction. [[thm-transitivity-of-integrality]]

[F11] Finite algebras integral and finite integral generation. [[thm-integrality-and-finite-module-equivalences]]

[F12] Normalization inside a fraction field. [[thm-integral-closure-is-integrally-closed]]

[F13] Explicit monic quotient bases and successive root algebras. [[thm-monic-polynomial-division]]

[F14] Localization exactness; factorization splitting algebra flatness. [[thm-localisations-are-flat]]

[F15] ONLY unqualified clause3: free modules flat; no projectivity/AC inference. [[cor-free-modules-are-projective-and-flat]]

[F16] Finite sequence of root adjunctions, no full algebraic closure. [[thm-splitting-fields-exist-for-nonzero-polynomials]]

[F17] Finite annihilator trick and idempotent ideals. [[lem-determinant-trick-for-nakayama]]

[F18] Unqualified finite polynomial-subring normalization, only section5.0 isolated-point bridge. [[cor-noether-normalisation-module-finiteness]]

## Proof

**Proof technique:** direct.

First prove the finitely presented subcase. The final finite-ideal reduction then proves the full finite-type Statement without asserting finite presentation of the original algebra.

1.1 Here “countable” always means supplied with an enumeration; repetitions are allowed. Subrings, quotients, finite polynomial rings, localizations and fraction fields of an enumerated ring have enumerations in ZF. For a nonempty subset use its least-index occurrences and a fixed default element; this does not choose enumerations from an arbitrary family. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, given, construct, algebra]

2.1 If I is an ideal of a countable ring C and T a multiplicative subset disjoint from I, enumerate C as c_0,c_1,…. Starting at I_0=I, set I_{n+1}=I_n+(c_n) if this ideal misses T, and I_{n+1}=I_n otherwise. This is recursion with a uniquely prescribed yes/no rule, not dependent choice. The union P misses T. If a∉P, the stage for a shows (P+(a))∩T≠∅. Thus if a,b∉P and ab∈P, multiplying witnesses t=p+ra and t'=p'+r'b gives tt'∈P∩T, impossible. Hence P is prime. This replaces every prime-ideal existence invocation for countable rings. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 1.1, given, construct, algebra]

3.1 A countable reduced ring C with a given prime q has a minimal prime below q. Begin with T_0=C\q and recursively adjoin c_n multiplicatively if doing so keeps 0 out. Let T be the union. If a∉T, maximality gives t a^m=0 for some t∈T,m≥1. Reducedness gives ta=0, since (ta)^m=0. Therefore in T^{-1}C every element represented by a∉T is zero and every element represented by a∈T is a unit. This nonzero ring is a field. The kernel P of C→T^{-1}C is prime, contained in q, and minimal: every prime P'⊂P misses T and localizes to the zero ideal of that field, hence contracts back to P. A reduced local ring at a minimal prime is a field by the same localization argument. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 2.1, given, construct, algebra]

4.1 Countable lying over. If A⊂B is an integral inclusion of countable rings and p⊂A is given prime, the ring B⊗A κ(p) is nonzero. Indeed, if 1∈pB_p, a finite expression uses a finite integral A_p-subalgebra M containing 1; it is a finite A_p-module and M=pM. The determinant trick gives (1-a)M=0 with a∈pA_p. Since 1-a is a unit, this contradicts 1∈M. Apply 2.1 to the nonzero countable fibre ring, with I=0,T={1}, and contract its prime. The contraction is exactly p. There is no selection of a family of primes. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 3.1, given, construct, algebra]

5.1 Countable going down over normal domains. Suppose A⊂B is an integral inclusion of countable domains, A normal, p_0⊂p_1 in A and q_1 over p_1 in B. We first prove A∩p_0B_{q_1}=p_0. For b in that intersection write bs=Σ a_jb_j with a_j∈p_0 and s∉q_1, in B. The finite integral A-algebra M=A[s,b_j] and the adjugate determinant trick give a monic equation P(bs)=0 whose nonleading coefficients belong to p_0. If b∉p_0, the monic minimal polynomial m_s over Frac(A) divides b^{-deg P}P(bT). Its coefficients belong to A: take a finite splitting field of a monic A-polynomial annihilating s; each root of m_s is integral over A, so its elementary symmetric coefficients are integral and lie in Frac(A), hence in normal A. Such a finite splitting field is built by finitely many irreducible-factor adjunctions and needs no algebraic closure. Monic division shows m_s divides the displayed polynomial already over A_{p_0}; reduction modulo p_0 makes m_s a monic divisor of a power of T. Its nonleading coefficients therefore belong to p_0. Consequently s^{deg m_s}∈p_0B⊂q_1, contradicting s∉q_1. This proves the contraction equality. Apply 2.1 in the countable ring B_{q_1}/p_0B_{q_1}, avoiding the nonzero elements of A/p_0. Its inverse-image prime gives q_0⊂q_1 over p_0. This proves the needed going-down clause without invoking the AC-qualified public theorem. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 4.1, given, construct, algebra]

6.1 Let R⊂B be countable reduced rings, let z∈B be strongly transcendental over R (uΣa_i z^i=0 implies ua_i=0 for every i), and suppose B finite over R[z]. We show R→B is nowhere quasi-finite. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 5.1, given, construct, algebra]

7.1 First suppose R,B are domains and R normal. For a purported quasi-finite prime q let p=q∩R and r=q∩R[z]. Its residue field κ(q), and hence κ(r), is finite over κ(p). Thus r strictly contains pR[z], since otherwise κ(r)=κ(p)(z). Polynomial normality makes R[z] normal. Apply 5.1 to the integral extension R[z]⊂B to obtain q'⊊q over pR[z]. Both primes contract to p in R. They give a strict prime chain in the finite-dimensional local fibre B_q/pB_q. Every prime of a finite-dimensional field algebra is maximal (a nonzero element of its domain quotient acts injectively and hence surjectively). Contradiction. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 6.1, given, construct, algebra]

8.1 For arbitrary domains R⊂B, let R^ν be the normalization of R in Frac(R), and B^ν=R^ν[B] inside Frac(B). These are countable; B^ν is integral over B and finite over R^ν[z]. For any given q use 4.1 to lift it to B^ν. Base-change and quotient transfer preserve quasi-finiteness, while the normal case rules it out there. Therefore the domain case holds. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 7.1, given, construct, algebra]

9.1 For reduced rings choose a minimal prime q_0⊂q by 3.1 and put p_0=q_0∩R. Strong transcendence descends to B/q_0: if uΣa_i z^i∈q_0, its image is zero in the field B_{q_0}; clearing one denominator w∉q_0 gives wuΣa_i z^i=0. Strong transcendence gives wua_i=0, hence ua_i∈q_0. Thus the domain case applies to R/p_0⊂B/q_0. Quotient transfer again contradicts quasi-finiteness at q. All prime selections occurred in enumerated rings by 2.1–5.1. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 8.1, given, construct, algebra]

10.1 Let A→B be a finite-type map of countable rings, quasi-finite at a given prime q. Write Int_A(B) for the integral closure of the image of A in B. We prove that some g∈Int_A(B)\q satisfies Int_A(B)_g=B_g. Induct on a finite list z_1,…,z_n such that B is finite over A[z_1,…,z_n]. For n=0, every element is integral, so g=1. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 9.1, given, construct, algebra]

11.1 For n=1 replace A by Int_A(B); this remains countable, integrally closed in B, and B is finite over A[z]. Quasi-finiteness transfers through this intermediate ring by the unqualified published transfer lemma. Put D=A[z]⊂B and J={b∈B:bB⊂D}. The unqualified published conductor coefficient lemma says that in B/√J the image of z is strongly transcendental over A/(A∩√J): a polynomial relation with multiplier means every multiplied coefficient lies in √J. These quotient rings are reduced and the upper ring is finite over the polynomial subring. Section 2 therefore says this quotient is nowhere quasi-finite. If J⊂q, quotient transfer would contradict that conclusion. Choose s∈J\q. Then D_s=B_s: for b∈B, sb∈D. At q∩D the map A→D is quasi-finite, by the published localization transfer. The unqualified one-generator local-integrality lemma gives h∈A\q with A_h=D_h, since A is already integrally closed in B. Write s=r/h^m in D_h=A_h. Then r∉q, and A_{rh}=B_{rh}; take g=rh. This proves the one-variable case, with section 2 replacing the sole AC-qualified input in the published ZMT proof. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 10.1, given, construct, algebra]

12.1 For n>1 let C=Int_{A[z_1,…,z_{n-1}]}(B). It is a subring of the countable B, B is finite over C[z_n], and C→B is quasi-finite at q. The one-variable case supplies g'∈C\q with C_{g'}=B_{g'}. Choose finitely many numerators y_j∈C, together with g', such that C_0=A[z_1,…,z_{n-1},g',y_j] has (C_0)_{g'}=B_{g'}. This is possible by taking numerator witnesses for the finite algebra generators of B and for 1/g'. Each added element is integral over A[z_1,…,z_{n-1}], so C_0 is finite over that ring. Localization transfer makes A→C_0 quasi-finite at q∩C_0. Induction gives h∈Int_A(C_0)\q with Int_A(C_0)_h=(C_0)_h. Write g'=c/h^m in this localization; c∈Int_A(C_0) and c∉q. Then g=hc∈Int_A(B)\q has B_g=(C_0)_g=Int_A(B)_g. This proves countable algebraic ZMT entirely locally. It does not remove AC from, or change, the existing published global theorem. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 11.1, given, construct, algebra]

13.1 A finite algebra with a principal open chart suffices. Choose finite algebra generators b_i of B and write b_i=c_i/g^{n_i} in B_g, with c_i∈Int_A(B). Then C=A[g,c_i]⊂B is finite over A and C_g=B_g. This is the only output of section 3 needed below. All the rings in sections 1–3 are subsets, quotients, finite-type extensions or localizations of a single enumerated ring or its fraction fields. Their enumerations are induced by the finite constructions, not chosen from a family. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 12.1, given, construct, algebra]

14.1 Given a monic f∈R[T] of degree r+s, and a specified factorization f̄=ḡh̄ over κ(p), with ḡ,h̄ monic coprime of degrees r,s≥1, form [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 13.1, given, construct, algebra]

15.1 C=(R[b_1,…,b_r,c_1,…,c_s]/(coefficients(g_u h_u−f)))_Δ, [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 14.1, given, construct, algebra]

16.1 where g_u,h_u are the universal monic polynomials of these degrees and Δ=Res(g_u,h_u). The resultant can equivalently be taken, up to sign, as the determinant of (a,b)↦a h_u+g_u b on polynomials of degrees <r,<s. Thus its inverse gives a Bezout identity. Coefficient substitution in κ(p) defines the specified prime p' of C and gives κ(p')=κ(p), because the image contains R/p and lies inside its fraction field. This construction needs no prime-existence theorem. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 15.1, given, construct, algebra]

17.1 Flatness without a Jacobian theorem. The ordered splitting algebra of a monic degree n polynomial is obtained by adjoining its first root via its monic degree n equation, dividing by T−a_1, adjoining the next root via the resulting monic degree n−1 equation, and continuing. Each step is free on 1,a,…,a^{d−1}. Therefore its algebra D_f is finite free of rank n! over R. In D_f write f=∏_{i=1}^n(T−a_i), and put w=∏_{i≤r<j}(a_i−a_j). The algebra D=(D_f)_w is flat over R, as a localization of a free R-algebra. On the other hand, by the two universal properties it is the ordered splitting algebra of g_u and h_u over C: the first r roots split g_u, the others split h_u, and inverting their cross-product is exactly inverting their resultant. Successive monic divisions give mutually inverse homomorphisms on all root and coefficient generators. Hence D is finite free of rank r!s! over C, with a monomial basis containing 1. For an injection M→N of R-modules, let K be the kernel after tensoring with C. Tensoring with D over C is exact and turns it into the kernel after tensoring with the flat R-algebra D, which is zero. Since D≅C^{r!s!} as a C-module, D⊗C K=0 implies K=0. Thus C is R-flat. This argument proves the required descent by finite free modules, not by invoking a qualified smoothness criterion. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 16.1, given, construct, algebra]

18.1 Geometric fibres. Over an arbitrary field extension k of a residue field of R, construct a finite splitting extension E/k of f using finitely many irreducible adjunctions. Write f=∏_{j=1}^m(T−a_j)^{d_j} with distinct a_j∈E. The factorization algebra C_E is a finite product of copies of E, indexed by subsets J⊂{1,…,m} with Σ_{j∈J}d_j=r. Here is an all-test-algebra justification, including nilpotents. For any E-algebra Q, a coprime monic factorization f=gh gives a product decomposition Q[T]/f=Q[T]/g×Q[T]/h. The Chinese remainder decomposition of the left side is ∏_j Q[t]/t^{d_j}. Idempotents in Q[t]/t^{d_j} are exactly idempotents of Q: reduction modulo the nilpotent ideal (t) is a bijection on idempotents. To check that bijection, lift an idempotent through square-zero ideals by the correction e↦e−(e²−e)(2e−1)^{-1}, and iterate finitely; uniqueness follows because a nilpotent difference of commuting idempotents is zero. Thus the decomposition is determined by m idempotents of Q. The finite products of these idempotents and their complements decompose Q into pieces where exactly a subset J is assigned to g. On each such piece the monic kernel ideal is generated by ∏_{j∈J}(T−a_j)^{d_j}; monic polynomial division identifies the factor with g, and its degree forces Σd_j=r. Conversely every such decomposition of Q gives that coprime factorization. This is precisely the functor of the indicated finite product of copies of E, so proves the asserted algebra identity, not only a statement about points. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 17.1, given, construct, algebra]

19.1 Every fibre C_k is consequently finite-dimensional and reduced: injectivity C_k→C_E follows from faithful flatness of the finite field extension, and linear independence over k stays independent over E (use a finite basis of E/k). Its dimension is bounded by the number of subsets, so a finite basis is obtained by a finite maximal independent-list argument. A reduced finite-dimensional commutative algebra has field localizations: localization at a given prime is still finite-dimensional (the finite-polynomial inverse argument of 21.1 expresses denominator inverses inside the original algebra). In this local algebra its maximal-ideal powers stabilize; the finite-generator determinant trick gives an idempotent generating a stabilized power, as in 25.1. An idempotent in the maximal ideal of a local ring is zero, so the maximal ideal is nilpotent; reducedness makes it zero. Thus this localization is a field, a regular local ring of dimension zero. The same argument applies to every k, so the fibres are geometrically regular of dimension zero. Together with 17.1 and the explicit finite presentation this proves C is étale according to the actual unqualified Definition, without the AC-qualified Jacobian criterion. Factors of degree zero require no chart and are dealt with by the identity base map. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 18.1, given, construct, algebra]

20.1 The isolated-point formulation needs no concealed residue-field or maximal-ideal principle. In a finite-type fibre chart D over k, choose a principal open D(h) consisting of the given isolated point. Its nonzero finite-type coordinate ring E has one prime. The unqualified Noether normalization corollary makes E finite over an injected k[z_1,…,z_d]. If d≥1, the two explicit maximal ideals (z_1,…,z_d) and (z_1−1,z_2,…,z_d) each have a nonzero finite-dimensional fibre of E: localize the injection at that ideal and apply the finite-module determinant trick to rule out E=mE. Each such finite-dimensional fibre has a maximal ideal by choosing a proper ideal of greatest possible vector-space dimension. Their contractions to E are distinct primes, a contradiction. Hence d=0 and E is finite-dimensional over k. Its local ring at the given point is also finite-dimensional. Thus isolatedness implies the local-fibre convention used below; conversely finite local fibre yields the needed finite principal open by 21.1. No algebraic closure, arbitrary prime ideal theorem or countable choice is used here. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 19.1, given, construct, algebra]

21.1 Shrink X and S to affine charts Spec B→Spec A containing x and s, with B finitely presented over A. Put p=s and q=x in ring notation. The finite local fibre E=(B⊗Aκ(p))_q is finite-dimensional by quasi-finiteness. It follows that, after replacing B by B_b for one b∉q, its entire fibre B⊗Aκ(p) is finite-dimensional. Explicitly, every algebra generator satisfies a monic polynomial in E. Clear the finitely many denominators in these equations in the fibre ring to obtain a single element outside q on whose principal open all these equations hold. The image of the original fibre algebra is then generated by finitely many integral elements and is finite-dimensional. Localizing this finite-dimensional image remains finite-dimensional: for each inverted element z a relation z^d h(z)=0 with h(0)≠0 expresses its inverse polynomially after discarding its annihilated summand. Thus the entire principal-open fibre is finite. This avoids an appeal to openness of the quasi-finite locus. The replacement B_b remains finitely presented over A and affine open in X. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 20.1, given, construct, algebra]

22.1 For each of the finitely many algebra generators of this new B choose a monic annihilating polynomial over κ(p) in the finite fibre. Lift its coefficients to A_p and clear one common denominator outside p. Each lifted polynomial evaluates to an element of pB_p; record a finite expression as Σ a_jd_j with a_j∈p and d_j∈B_p. Clear the finitely many further base denominators and record the finite polynomial-relation witnesses in the fixed presentation of B. Let A_0⊂A_a be the Z-subalgebra generated by all coefficients in this finite list: the defining relations, the lifted monic polynomials, the p-elements a_j, and the polynomial expression witnesses. Then B_0=A_0[z_1,…,z_m]/(the fixed relations) satisfies B_0⊗A_0 A_a=B_a. If p_0=pA_a∩A_0, the same monic relations hold modulo p_0, so B_0⊗κ(p_0) is finite-dimensional (bounded monomials in its generators span). Both A_0 and B_0 have explicit enumerations by integer polynomials. The contraction q_0 of the given q is a prime with finite local fibre. Apply 13.1 to obtain a finite A_0-algebra C_0⊂B_0 and g∈C_0\q_0 with (C_0)_g=(B_0)_g. No prime of a coefficient model was chosen by lying over: p_0,q_0 are actual contractions of the two given points. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 21.1, given, construct, algebra]

23.1 Let F∈A_0[T] be a monic polynomial annihilating g. In κ(p_0)[T] write F̄=T^e H̄ with H̄(0)≠0, multiplying F by T if necessary to make e≥1. Since g∉q_0, H̄ has positive degree. Use the chart 14.1 for these coprime factors, and also invert the constant coefficient of the lift H, which is nonzero at its specified point. Over this elementary étale A_0', write F=I H with Ī=T^e. In C_0⊗A_0 A_0' the elements I(g),H(g) have product zero and generate the unit ideal. Therefore that ring decomposes as its localizations at I(g) and H(g). The first factor C_1 is a direct summand of the finite module, hence finite over A_0'. On it H(g)=0, and H(0) is a unit, so g is a unit. It follows from (C_0)_g=(B_0)_g that Spec C_1 is an open subscheme of Spec(B_0⊗A_0 A_0'); concretely it is the principal open where g and I(g) are invertible. The given q_0 lies in this open because Ī(g)=g^e is nonzero in κ(q_0). The fibre may contain several points after extension of the actual base; uniqueness has not yet been asserted. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 22.1, given, construct, algebra]

24.1 Base change this entire finite chart along A_0→A_a. The specified elementary étale point with residue κ(p_0) gives the canonical point u_1 with residue κ(p) after this base change, by the map to κ(p). The finite open C_1 becomes a finite algebra C over the resulting base R. The original x belongs to its fibre because its image of g and I(g) is nonzero. Its residue field is still κ(x): the fibre after base change by the residue-preserving u_1 is literally the original fibre, not a separable closure or a selected embedding. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 23.1, given, construct, algebra]

25.1 Isolate x in the finite fibre D=C⊗Rκ(u_1). Let m be its corresponding maximal ideal; D/m=κ(x). Because D is finite-dimensional, choose N≥1 with m^N=m^{N+1}; then m^N=m^{2N}. Put J=m^N. It is a finitely generated ideal satisfying J=J². Write generators y_i=Σ a_{ij}y_j with a_{ij}∈J. The adjugate determinant yields (1-e)J=0 with e∈J. Thus e acts as identity on J, e²=e, and J=De. Let ε=1-e. The algebra D_ε=D/J has the unique prime m/J: its ideal m/J is nilpotent and its quotient is the field D/m. Its residue field at that prime is κ(x). This argument uses only finite-dimensional linear algebra and the given ideal m, not a choice of the other points of the fibre. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 24.1, given, construct, algebra]

26.1 Lift ε to c∈C after inverting one additional element of R outside u_1 (clear its finite residue-field denominator). If ε=1, no further isolation is needed. Otherwise choose a monic polynomial P over R annihilating c. Modulo u_1 write P̄=T^d Q̄ with Q̄(0)≠0; multiplying P by T makes d≥1, and the nonzero ε-summand gives Q̄(1)=0, so Q̄ has positive degree. Apply a second chart 14.1 and invert Q(0). The factor C_{I(c)} (notation as in 23.1) is finite over this final elementary étale base and is an open subscheme of Spec C. Its fibre is exactly D_ε: at the fibre c=ε, Ī(c)=ε^d=ε. Thus this final open V has precisely one point v over u, maps to x and has κ(v)=κ(x). It remains affine and finite. The two factorization charts, their resultant inversions, and all principal base localizations have been retained explicitly. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 25.1, given, construct, algebra]

27.1 Composition and base change preserve the asserted properties. Composition of the explicit factor charts is étale: finite presentation and flatness compose, and the zero-dimensional geometrically regular fibre criterion follows after finite splitting extensions, where each chart is a finite disjoint union of identities; principal localizations restrict these identities. The residue maps at the specified points are identities throughout. If (U',u')→(U,u) is another elementary étale neighborhood, finite morphisms and open subschemes base change, and the fibre over u' is V_u⊗κ(u)κ(u')=V_u. This proves uniqueness of its point and equality of its residue field. Hence all assertions of the finite-localization lemma follow, with no separatedness or choice hypothesis. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 26.1, given, construct, algebra]

28.1 Let f:X→S be locally of finite type, x a specified isolated point of the fibre over s. Choose affine charts Spec B→Spec A containing those points, with B=A[z1,…,zm]/I, where I need not be finitely generated. Let p be the prime of s and k=κ(p). [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 27.1, given, construct, algebra]

29.1 The ideal I_k which defines B⊗A k inside k[z1,…,zm] is finitely generated by the unqualified Hilbert basis theorem. Each member of a finite generating list is a finite k[z]-linear combination of images of elements of I: this follows from the definition of the extended ideal, not from exactness of I⊗k→k[z]. Collect all the finitely many elements of I used in these expressions and let J⊂I be their finitely generated ideal in A[z]. Their images generate I_k, so J_k=I_k. This takes only finitely many witnesses. In particular no assertion that all of I descends or is finitely generated is made. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 28.1, given, construct, algebra]

30.1 Put B0=A[z]/J. This is finitely presented over A, and its entire fibre over p is IDENTICAL to that of B, not merely homeomorphic. The point x therefore gives a specified point x0 of B0 with the same residue field and isolated in the fibre. Apply the already proved finite-presentation the finite-localization lemma to Spec B0→Spec A. Obtain elementary étale (U,u) with κ(u)=k, and principal affine open V0⊂Spec(B0⊗A O(U)), finite over U, with precisely one point above u, mapping to x0 and with residue κ(x0). [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 29.1, given, construct, algebra]

31.1 Pull this open back along the closed immersion Spec(B⊗A O(U))→Spec(B0⊗A O(U)). Its coordinate algebra is the quotient of the finite O(U)-algebra O(V0) by the image of the arbitrary ideal I/J. A quotient of a finite module is finite, regardless of whether the ideal is finitely generated. Thus V→U is finite, V is a principal affine open of the actual base change of X, and its fibre over u is the SAME as V0's fibre, since B and B0 had identical k-fibres. Its unique point maps to x with precisely κ(x). U is still built by the same two factorization/resultant charts and principal localizations; further elementary étale base changes preserve the fibre conclusion as before. This proves the full locally-finite-TYPE statement without a finite-presentation assumption. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 30.1, given, construct, algebra]

32.1 For uses starting with X→S locally finitely presented (in particular the quasisection lemma), the original finite-presentation proof may be used directly. In that case the finite open remains finitely presented over U, as needed for finite-basis lifting. The finite-type extension does not claim a new finite-presentation property for an arbitrary quotient. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 31.1, given, construct, algebra]

33.1 Exact additional published interface: `thm-hilbert-basis-theorem`, only its unqualified finite-generator conclusion for a polynomial ring over a field. No maximal-ideal existence or arbitrary-index choice clause is used. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, step 32.1, given, construct, algebra] ∎

## Source notes

This draft supplies the local arguments rather than importing their conclusions. The exact full sources were retrieved; reading was limited to the named comparison, site-induction, finite-localization and refinement sections, and the compact-support sections listed in the references. It does not claim whole-chapter reading. The staged argument is adapted from the independently bound research packet; formal comparison proofs and the generic finite-direct-image successor have their separate review status. No publication or native gate credit is asserted.
