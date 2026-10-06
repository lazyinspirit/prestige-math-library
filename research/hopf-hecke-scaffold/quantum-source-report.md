# Quantum-group source report for Hopf algebras & Hecke algebras

## Reading evidence and limits

Read the complete extracted text of Pavel Etingof and Mykola Semenyakin, *A brief introduction to quantum groups*, arXiv:2106.05252v3, 6 November 2024: https://arxiv.org/abs/2106.05252 and https://arxiv.org/pdf/2106.05252. This is an authoritative extensive lecture-note source by a principal quantum-group/tensor-category specialist and collaborator, originating in a 2019 mini-course and 2020 CMSA lectures. The downloaded edition has **43 PDF pages**, including its contents and complete bibliography, and the extraction has 3,115 lines and 21,184 whitespace-delimited words. All sections 1–5 and references were read, not merely searched or sampled. PDF and UTF-8 extraction are stored outside the tracked corpus at `/tmp/hopf-hecke-sources/etingof-semenyakin-quantum-groups.{pdf,txt}`. Extraction used PyMuPDF (`fitz`) with a numbered page marker before each page because `pdftotext` is unavailable.

PDF SHA-256: `a106a2a9082778505f4b2fa23768e3f49a39f76328ee27f36fb19469e13e3506`.
Text SHA-256: `d9ce28a59c31d73dbcee59971c3fa41bf964806ad1c64c5037d3af797e4d458a`.

Reading limits: full extracted prose/formulas were read; diagrams and typeset matrices were represented in linear text, which sometimes loses their layout. No claim is made to have independently solved every exercise or proved the source's advanced theorems. The authors explicitly say in §1 that there are not many proofs and many simpler results are exercises. The notes do **not** supply a systematic Hecke-algebra course or quantum Schur–Weyl duality theorem. Their cited books are supplementary pointers, not books read by this agent. Keep proof obligations open where this report marks them open.

## Exact source map and first-principles route

1. **Why a coproduct?** §2.1.2–2.1.4, pp. 3–4, equations (2.1)–(2.3), Definition 2.1. Start with a finite group G. Pulling back functions along group multiplication gives Δf(g,h)=f(gh); evaluating at the identity gives ε; pulling back inversion gives S. Group associativity, unit and inversion become coalgebra and antipode equations. Establish the finite-set isomorphism k^(G×G) ≅ k^G⊗k^G before using it. For arbitrary infinite groups all functions on G×G are not generally this algebraic tensor product; do not silently extend this argument. The affine-group version uses coordinate rings and their product identification, a separate scheme-theory prerequisite.
2. **Algebra–coalgebra compatibility.** §2.1, p. 4, Definition 2.1. Explicitly require both Δ and ε to be unital algebra maps in the scaffold's standard bialgebra definition. The notes state Δ multiplicativity, list unit/counit/antipode identities, and then derive ε multiplicativity in Proposition 2.2(ii); they compress standard conventions. Display ηε rather than an untyped scalar ε on the right side of the antipode equation. Sweedler components carry an implicit finite sum; individual components are not canonically defined functions of h.
3. **Antipode properties and finite duality.** §2.2.1, p. 4, Proposition 2.2(i)–(v). Prove antipode uniqueness through uniqueness of a two-sided inverse in the convolution algebra Hom_k(H,H). Anti-multiplicativity/anti-comultiplicativity have their own convolution argument. Restrict the naive linear-dual Hopf algebra to finite-dimensional H; otherwise multiplication transpose lands in (H⊗H)* and need not land in H*⊗H*. Bijectivity of S is an additional hypothesis in general and is assumed by the notes after Definition 2.1; do not adopt it invisibly.
4. **Basic examples.** §2.2.2, p. 5, Example 2.3: kG, coordinate functions, enveloping algebras and U_q(sl2). For kG the formulas on basis elements verify all axioms directly. For U(g), prove maps descend from the tensor algebra modulo xy−yx−[x,y]; citing formulas on generators alone does not prove well-definedness. For U_q(sl2), nonzero q with q≠±1 is required by its displayed presentation, equations (2.4)–(2.7). §2.7 problem (7), p. 10 explicitly asks to check well-definedness; the defining relations must be preserved by Δ, ε and the anti-algebra map S. PBW/nontriviality is separate (§2.7 problem (11), p. 11).
5. **Tensor products explain the axioms.** §2.3.1–2.3.2, pp. 5–6, equations (2.9)–(2.14), Definition 2.5, Remark 2.7. Multiplicativity of Δ proves h·(v⊗w)=Σh_(1)v⊗h_(2)w is a module; coassociativity proves the usual associator is H-linear; counit identities prove unit maps H-linear. Explain naturality and coherence rather than just saying tensor product is associative up to isomorphism. A bialgebra suffices for tensor modules: antipodes are used for duals, not for the mere tensor product.
6. **Duals explain antipodes.** §2.4, pp. 6–8, equation (2.15), Definitions 2.9–2.12. The left dual action is (h·f)(v)=f(S(h)v); anti-multiplicativity makes it a left action and antipode identities prove evaluation/coevaluation H-linearity. Finite dimensionality is needed for coevaluation and rigidity. The right dual formula uses S^-1 and therefore requires bijectivity. Show basis independence of coevaluation through V⊗V*≅End(V), sending its coevaluation tensor to id_V. Do not identify V with V** as modules unless S² or an appropriate pivotal structure justifies it.
7. **Why R-matrices?** §3.1.1, p. 11, Example 3.1, Theorem 3.2: ordinary flip is not generally H-linear when Δ is noncocommutative. §3.4.3, p. 17, Definition 3.28 derives invertibility, RΔ(h)=Δ^op(h)R and the two hexagon identities (Δ⊗id)R=R_13 R_23, (id⊗Δ)R=R_13 R_12 from invertibility, H-linearity and compatibility with tensor products of c=τR. First define leg notation by embeddings H⊗H→H⊗H⊗H. These conditions imply QYBE, Exercise 3.30. Do not present QYBE alone as the definition of a quasitriangular Hopf algebra.
8. **Braiding gives local operators, not automatically Hecke operators.** §3.1.2, pp. 11–12, Definition 3.3, Proposition 3.4 and Exercise 3.5. Derive adjacent braid relations from naturality and hexagons; distant local operators commute because they act on disjoint factors. These are the only braid-group facts required for the Hopf/Hecke bridge; the separate Braid Groups category retains its own theory. An extra quadratic relation is required for the representation to factor through a Hecke algebra.
9. **Concrete finite quantum double.** §3.2, pp. 12–14, Definition 3.10, Proposition 3.11, Theorems 3.14 and 3.16; §3.4 Proposition 3.29. A finite-dimensional H has D(H), canonical R=Σa_i⊗a_i*, independent of basis. H must be finite dimensional for the finite sum/full-dual construction. Associativity of the cross-product, compatibility with coproduct and Yetter–Drinfeld equivalence remain substantive proofs, not justification by naming. A first-principles course should establish a simpler noncommutative example before assigning the double.
10. **Formal versus specialized quantum groups.** §3.5–3.7, pp. 17–22, Proposition 3.34, Proposition 3.35, Lemma 3.37 and Remark 3.41. The De Concini–Kac, Lusztig divided-power, and small forms are distinct; denominator singularities forbid naive root-of-unity specialization. Small sl2 construction here assumes a root of odd order ℓ>1. The quotient ideal requires the full Hopf-ideal conditions, including ε(I)=0. The notes' short description omits that last condition: include it explicitly. Proving basis/dimension requires PBW. Generic U_q(sl2)'s universal R is in a completion, not literally U_q(sl2)⊗U_q(sl2); specify type-I weight modules and square-root/weight convention for q^(h⊗h/2), along with local nilpotence ensuring finite series on each tensor.
11. **Advanced continuation, with prerequisites.** §4, pp. 23–29: quantum Serre presentation, formal classical limit, Lie bialgebras, Poisson-Lie groups, Manin triples, integrable highest weights. §§4.2–4.3 explicitly use torsion-free separated complete C[[ℏ]] modules and completed tensor products. Division by ℏ and independence of lift require verification; the quantization theorems 4.9/4.13/4.17 are major imported results. This is a continuation track, not the entrance to either basic theory.
12. **Affine caveat.** §§5.1–5.11, pp. 30–42: evaluation modules, strings/Drinfeld polynomials, spectral R-matrices, RTT, Yangians, q-characters. §5.2.2 expressly warns evaluation homomorphisms are not Hopf maps. §5.2.4 shows that finite-dimensional quantum affine modules need not satisfy X⊗Y≅Y⊗X; §§5.4.1–5.4.2 produce meromorphic intertwining operators with exceptional poles, not an everywhere-defined braiding. Do not transplant generic finite-type braiding claims into this category. Full RTT well-definedness, formal expansion regions, PBW and determinant localization are obligations if this continuation is included.

## Elementary Hecke bridge to develop explicitly

Work over a field k with a specified q∈k×. On a vector space V with ordered basis e_1,…,e_d, define an operator T on V⊗V by

- T(e_a⊗e_a)=q e_a⊗e_a;
- T(e_a⊗e_b)=e_b⊗e_a if a<b;
- T(e_a⊗e_b)=e_b⊗e_a+(q−q^-1)e_a⊗e_b if a>b.

This is an elementary proposed scaffold construction, **not a theorem quoted from these notes**. On each two-dimensional span associated with a<b its matrix is [[0,1],[1,q−q^-1]], so T²=(q−q^-1)T+1 and (T−q)(T+q^-1)=0; on the diagonal spans the same equation holds. This proves T invertible with T^-1=T−(q−q^-1). For adjacent local T_i one must verify T_1 T_2 T_1=T_2 T_1 T_2 on triple tensors; split into all equal, two equal, and all distinct order patterns, and give the actual calculations or a complete lemma. Distant commutation is immediate. This is enough to construct a representation of the normalized type-A Hecke algebra, once that algebra's presentation and universal property are established.

To convert to the other widespread normalization, set S_i=qT_i and Q=q². Then (S_i−Q)(S_i+1)=0, and the same braid relations hold. State this conversion whenever comparing sources. At q=1 the operator is the usual flip and the algebra specializes to the symmetric-group algebra. At q=−1 the normalized algebra also has T_i²=1 but the diagonal operator is −1, so the specific tensor representation is not the ordinary permutation representation.

A correct quantum Schur–Weyl chapter must **separately** supply: a chosen presentation and tensor action of U_q(gl_d); an explicit verification that T commutes with that action; a clearly stated centralizer theorem with parameter/field hypotheses; proof of the theorem or a declared imported supplier. Mere commutation proves inclusion in the commutant, not equality. Even classically the action of k[S_n] on V^⊗n need not be faithful for small d; do not equate the abstract Hecke algebra with its image without a faithful-range hypothesis. Semisimplicity arguments cannot be reused at root-of-unity parameters or in positive characteristic without fresh hypotheses.

## Source-text cautions relevant to faithful adaptation

The notes are valuable precisely for motivation and architecture, but they should not be copied as a proof-complete source. Their exercise-heavy style leaves real obligations. Some displayed compressed statements also demand checking before adaptation:

- §3.4 reconstruction identifies End(F) with H for an appropriate full module category; restricting indiscriminately to finite-dimensional modules can give a completion instead. Its p. 17 Example 3.27(i) says H=Aut(F); the algebra in reconstruction is End(F), while tensor automorphisms form a group functor. Use the correctly typed construction.
- §4.1's displayed quantum Serre sum as extracted lacks alternating signs. The usual relation has (−1)^k coefficients (with convention-dependent q-binomial factors); do not reproduce that displayed formula without checking the original/typesetting and an independent standard source.
- §5.11 equation (5.48)'s final Laurent monomial as extracted repeats the a variable where the b variable is expected; expand the product independently.
- Theorem 5.35 describes the integral Grothendieck ring as a C-polynomial algebra. The intended integral version has Z coefficients, or one must explicitly tensor K_0 with C. Preserve the distinction.

These cautions are not assertions that every typography issue has been independently checked in the rendered PDF. They flag algebraic inconsistencies in extracted statements and prevent uncritical copying. No textbook cited only in the bibliography has been claimed as read.

Local verification: a Python dictionary implementation of exact Laurent-polynomial coefficients in Z[q,q^-1] checked the proposed operator's adjacent braid identity on all 27 triples over three ordered labels. These cover every equality/order pattern for arbitrary d. This is an algebraic consistency check, not a replacement for the human-readable case proof requested above, and it does not establish any quantum-group centralizer theorem.

## HH18 supplement: a complete generic two-centralizer proof route

### Additional sources actually extracted/read

- Pavel Etingof et al., *Introduction to representation theory*, arXiv:0901.0827, https://arxiv.org/pdf/0901.0827. Downloaded complete 108-page PDF and extracted it to `/tmp/hopf-hecke-sources/etingof-representation.{pdf,txt}`. **Read relevant proofs in full, not the complete 108-page book:** §§2.1–2.3, pp. 23–25 (Proposition 2.2, Corollary 2.4, Density Theorem 2.5 and matrix-algebra representations), §§4.18–4.19, pp. 64–65 (Double Centralizer Theorem 4.54, Theorem 4.55, Lemma 4.56, Schur–Weyl Theorem 4.57 and Proposition 4.58). Lemma 4.56(i)'s source proof invokes an earlier irreducibility exercise; replace that invocation by the explicit polarization identity below, so no such exercise remains an implicit supplier.
- Alexei Davydov and Alexander Molev, *A categorical approach to classical and quantum Schur–Weyl duality*, arXiv:1008.3739v2, https://arxiv.org/pdf/1008.3739. Downloaded/extracted complete 37-page PDF to `/tmp/hopf-hecke-sources/davydov-molev.{pdf,txt}`. **Read §4.1–4.2, pp. 14–16, in full**, including (4.2)–(4.3) and Propositions 4.4–4.7. Its (4.3) is exactly the elementary operator in the earlier report, so the operator now has a checked source locator. The article explicitly imports fullness from Jimbo; it does not provide the complete centralizer proof locally.
- Richard Dipper, Stephen Doty and Friederike Stoll, *Quantized mixed tensor space and Schur–Weyl duality*, arXiv:0810.1227v4, https://arxiv.org/pdf/0810.1227. Complete 31-page PDF downloaded/extracted to `/tmp/hopf-hecke-sources/dipper-doty-stoll.{pdf,txt}`. **Read §§1–2 through Theorem 2.1, pp. 3–8, in full**, covering quantum-group/vector-module/integral-form constructions, tensor actions, Hecke normalization, both-centralizer statements 1.3–1.4 and ordinary-tensor Theorem 1.6. Ordinary tensor surjectivity is imported there from earlier sources; the full mixed-tensor proof is not claimed as read.
- Attempted the original Jimbo DOI `10.1007/BF00400222` PDF endpoint. It returned a subscription-preview HTML article page despite a successful HTTP response. **This is not a full-text Jimbo reading.** No claim below depends on having read that paper. The elementary proof below closes the generic claim directly from the fully read classical proof and explicit regular matrices.

### Statement and conventions

Let F=Q(q), with q indeterminate, N≥1 and r≥0. Put V=F^N and M=V^⊗r. Let A_F be the image of the standard U_q(gl_N) vector tensor representation and B_F the image of the normalized type-A Hecke algebra acting by the operator T in this report. The claim is

A_F = End_{B_F}(M),   B_F = End_{A_F}(M).

These are **image** equalities. No faithfulness claim is made when N<r. All statements involve finite-dimensional matrix algebras, so infinite quantum-group dimensions play no role in the dimension bounds.

Choose generators L_j^±1, E_i, F_i (1≤j≤N, 1≤i<N), K_i=L_i L_(i+1)^-1. On the vector basis: L_j e_a=q^(δ_ja)e_a; E_i e_a=δ_(a,i+1)e_i; F_i e_a=δ_(a,i)e_(i+1). Choose Δ(E_i)=E_i⊗K_i+1⊗E_i, Δ(F_i)=F_i⊗1+K_i^-1⊗F_i, Δ(L_j)=L_j⊗L_j. These match the local T convention used here. Relations to verify are: commuting/invertible L_j; L_j E_i L_j^-1=q^(δ_ji−δ_j,i+1)E_i and inverse exponent for F_i; [E_i,F_j]=δ_ij(K_i−K_i^-1)/(q−q^-1); distant E/F commutation; adjacent quantum Serre identities E_i²E_j−(q+q^-1)E_iE_jE_i+E_jE_i²=0 and likewise for F. On V, E_i²=F_i²=0 and the mixed three-letter products for adjacent i,j vanish, so these identities are direct matrix checks. The commutator is the diagonal matrix with entries +1 at i, −1 at i+1, and zero elsewhere, equal to its displayed K quotient. To extend the representation via iterated coproduct, either prove the coproduct preserves these relations as an algebra map or use the already supplied type-A Hopf-presentation lemma. This construction obligation must precede the centralizer argument.

The T relation and braid identity were verified earlier; T commutes with the two-site coproduct matrices for every E_i,F_i,L_j. This last statement requires a complete local basis-case lemma, not a claim based solely on quasitriangularity. Once supplied, iterated Δ shows each T_a commutes with the full quantum action: for instance the iterated E_i action is the sum of E_i on position b, K_i on all later positions, and identities on earlier positions; the two terms touching positions a,a+1 combine as Δ(E_i), and all other terms contain either K_i⊗K_i or identity on those positions. F_i and L_j have the same argument.

### Classical prerequisite, with the source's hidden exercise removed

Work first over C and W=(C^N)^⊗r. Let B_0 be the permutation-algebra image of C[S_r] and A_0 the image of U(gl_N). Under End(W)≅End(C^N)^⊗r, permutation conjugation permutes tensor factors. Therefore End_{B_0}(W) is exactly the invariant symmetric tensors, spanned by orbit sums of pure basis tensors. For an associative algebra U and elements a_1,…,a_r, the identity

Σ_(J⊆{1,…,r}) (−1)^(r−|J|) (Σ_(j∈J) a_j)^⊗r = Σ_(σ∈S_r) a_(σ1)⊗⋯⊗a_(σr)

follows by expanding and using inclusion–exclusion: a term survives precisely when every one of the r labels occurs, thus each occurs once. Consequently invariant symmetric tensors are spanned by a^⊗r. Repeated a_j are permitted; dividing by their stabilizer size is valid in characteristic zero.

For each a∈End(C^N), consider commuting elements x_b=1⊗⋯⊗a⊗⋯⊗1 (a on position b). Their power sums p_m=Σ_b x_b^m are exactly the iterated Lie operators Δ_r(a^m), so belong to A_0. Newton's identities recursively express e_r(x_1,…,x_r)=x_1⋯x_r=a^⊗r in p_1,…,p_r: e_0=1 and m e_m=Σ_(j=1)^m (−1)^(j−1)e_(m−j)p_j. To prove the recursion locally, differentiate E(t)=∏_b(1+x_b t), use E'(t)/E(t)=Σ_(j≥1)(−1)^(j−1)p_j t^(j−1), and compare coefficients. The x_b commute, so this formal-power-series derivation is valid even though End(C^N) itself is noncommutative. Division by m is valid in characteristic zero. Thus all symmetric invariant tensors lie in A_0. The opposite inclusion follows because Lie tensor operators commute with permutations. Hence A_0=End_{B_0}(W).

Maschke's proof is local: average any projection onto an invariant subspace over the finite group, dividing by r!, to obtain an equivariant projection. Thus W is semisimple as a permutation module. For its distinct simple factors S_λ and multiplicity spaces C^(m_λ), density (fully read source Theorem 2.5, pp. 23–24) identifies B_0 with ⊕_λ End(S_λ)⊗1. Schur's lemma identifies End_{B_0}(W) with ⊕_λ1⊗End(C^(m_λ)). Taking its commutant once more gives B_0. This proves B_0=End_{A_0}(W). Source Theorem 4.54 gives the same matrix-block proof. If required locally, source Proposition 2.2 and Corollary 2.4 provide the full finite-dimensional density proof, rather than invoking an unproved general density theorem.

All matrices and spaces in this argument can be defined over Q. Tensoring a finite rational linear commutation system with C preserves rank and nullity, and scalar extension preserves the span rank of finite sets of words. The established equalities therefore descend to Q. This avoids any silent assumption that Q[S_r] has already been shown split.

### Generic specialization argument: both rank sandwiches

Let R=Q[q,q^-1]_(q−1), the local ring of rational functions regular at q=1, with fraction field F and residue field Q. Use M_R=(R^N)^⊗r. All displayed quantum tensor matrices and T_a have entries in R. Adjoin matrices

H_j(q)=(L_j−1)/(q−1)

to the finite quantum generator set. They belong to A_F and are regular: on a basis word containing m copies of j, their diagonal entry is (q^m−1)/(q−1)=1+q+⋯+q^(m−1), interpreted as 0 when m=0. At q=1 they specialize to the jth classical diagonal count operator, exactly Δ_r(E_jj). E_i,F_i specialize to adjacent classical raising/lowering operators. These, together with the diagonal count operators, generate A_0: commutators of adjacent matrix units give all off-diagonal units and diagonals are already present. By contrast L_j alone specializes to identity and would lose this prerequisite. T_a specialize to ordinary adjacent permutations and therefore generate B_0.

For a finite family of regular matrices G, form the matrix of the linear map C_G:X↦([X,g])_(g∈G) on the r-tensor endomorphism space. A nonzero minor of its specialization remains a nonzero rational function, so rank_F C_G≥rank_Q C_G(1). Thus **commutant nullity can only decrease generically**:

dim_F End_{B_F}(M) ≤ dim_Q End_{B_0}(M_0)=dim_Q A_0,

dim_F End_{A_F}(M) ≤ dim_Q End_{A_0}(M_0)=dim_Q B_0.

The finite G for B consists of T_a. The finite G for A consists of E_i,F_i,L_j^±1,H_j(q); it generates precisely A_F since the H_j are already elements of that image.

Because A_0 is finite dimensional and generated by the specialized quantum generators, choose finitely many words whose specialized matrices are a basis of A_0. Their lifts are regular matrices in A_F. Their vectorized-column matrix has a full-rank minor nonzero at q=1; hence their lifts are F-linearly independent and dim_F A_F≥dim_Q A_0. Similarly lift a finite word basis of B_0 to Hecke words, giving dim_F B_F≥dim_Q B_0. There is no assertion that every rational word coefficient or arbitrary denominator is regular: only the selected words in the chosen regular matrices are used, and their minors are evaluated where all entries are regular.

Commuting inclusion supplies the remaining inequalities. Therefore

dim_Q A_0 ≤ dim_F A_F ≤ dim_F End_{B_F}(M) ≤ dim_Q A_0,

dim_Q B_0 ≤ dim_F B_F ≤ dim_F End_{A_F}(M) ≤ dim_Q B_0.

Equality of dimensions plus the inclusions proves **both centralizer equalities**. Neither generic quantum semisimplicity nor a quantum character-dimension formula is needed. In particular, there is no unsupported step claiming rank constancy from a single specialization; the two opposite inequalities are proved separately.

Boundary cases: r=0 gives a one-dimensional tensor unit and both images/commutants F; N=1 gives a one-dimensional tensor space, T_a=q and all images F; r=1 gives B_F=F and A_F=End_F(V) because matrix units are generated by E_i,F_i and diagonal matrices. The argument covers all N≥1 and r≥0, including N<r, because it compares **images**, not the dimension r! of an abstract Hecke algebra. No root-of-unity or numerical-q specialization is asserted by this generic proof.

Closure condition for HH18: include/prove the finite type-A Hopf-presentation relation check and local T/coproduct commutation lemma before this proof; include the classical polarization/Newton and semisimple double-commutant supplier (or its exact local source proof). With those explicit prerequisites, the two-sided rank argument is a complete centralizer proof, not merely commuting inclusion.

## Quantum-double convention supplement

The extracted §3.2 formula (3.10) fails a unit test: setting its H variable to 1 yields S^-1(b) rather than b. Do not copy it.

For **direct** left-left Yetter–Drinfeld data δ(v)=v_-1⊗v_0 and δ(hv)=h_1 v_-1 S(h_3)⊗h_2v_0, the evaluation f·v=f(v_-1)v_0 is a representation of H*op, not ordinary H*: f·(g·v)=(g*f)·v with * the usual convolution. A coherent candidate uses the vector space D=H*op⊗H, normal order f h, ordinary dual coproduct Δ(f)(x,y)=f(xy), tensor coalgebra, and crossing

h f = Σ f_1(S(h_1)) f_3(h_3) f_2 h_2.

Equivalently f h=Σ f_1(h_1)f_3(S(h_3))h_2 f_2. The first identity follows on every YD module by cancellation of S(h_1)h_2 and S(h_4)h_5 after applying compatibility; the second follows immediately by evaluating f on δ(hv). In normal order,

(f⊗h)(g⊗k)=Σ g_1(S(h_1))g_3(h_3)(g_2*f)⊗h_2k.

Unit ε_H⊗1, counit f(1)ε_H(h), coproduct Δ_D(f⊗h)=Σ(f_1⊗h_1)⊗(f_2⊗h_2). Assume bijective S. On generators the antipode is S_D(h)=S_H(h), S_D(f)=f∘S_H^-1, extended reversing products. The canonical R in this convention has **dual-first leg order**:

R=Σ(f_i⊗1)⊗(ε_H⊗h_i).

Then τR(v⊗w)=Σ h_i w⊗f_i(v_-1)v_0=v_-1 w⊗v_0, the required left-left YD braiding. The tensor coalgebra matches direct coactions because f(v_-1w_-1)=Σ f_1(v_-1)f_2(w_-1). Basis independence follows from the canonical tensor in H*⊗H. Unit checks pass by counit identities. This is a derivation and proposed coherent convention, **not a source-quoted complete double proof**: associativity of the multiplication, coproduct compatibility and the antipode identities must still be checked independently and supplied explicitly by HH10's author/auditor. The auditor has been sent the formulas and these obligations. Do not report the complete double construction proven solely from this supplement.
