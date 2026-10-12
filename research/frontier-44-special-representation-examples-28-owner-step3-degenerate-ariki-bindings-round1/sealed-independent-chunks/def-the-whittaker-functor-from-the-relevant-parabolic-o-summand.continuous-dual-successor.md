---
id: def-the-whittaker-functor-from-the-relevant-parabolic-o-summand
kind: definition
title: "The Whittaker functor from the relevant parabolic category-O summand"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 31
deps: [def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality,
       def-parabolic-category-o-for-a-standard-parabolic,
       thm-skryabins-equivalence-for-the-type-a-whittaker-pair,
       def-deformed-tensor-space-for-the-type-a-finite-w-algebra,
       def-grothendieck-group-and-character-of-category-o,
       thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer,
       prop-base-change-freeness-and-specialization-in-the-deformed-family,
       thm-schur-weyl-decomposition-with-length-cutoff,
       thm-specht-to-permutation-homomorphism-dominance,
       thm-weyls-complete-reducibility-theorem,
       thm-baer-criterion-for-injective-modules, thm-hilbert-basis-theorem,
       thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules,
       def-projective-functors-on-a-regular-integral-category-o-block,
       thm-parabolic-category-o-is-a-highest-weight-category,
       def-standard-parabolic-and-levi-subalgebras-from-simple-roots,
       thm-weyl-character-formula, thm-bgg-reciprocity,
       thm-category-o-has-enough-projectives,
       thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule,
       thm-the-parabolic-o-grothendieck-group-is-the-integral-fock-module,
       thm-simples-projectives-and-tiltings-map-to-the-three-distinguished-fock-bases,
       def-the-type-a-finite-w-algebra-and-whittaker-category,
       def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character,
       def-degenerate-cyclotomic-hecke-algebra, def-universal-enveloping-algebra,
       def-representation-of-a-lie-algebra, def-axiom-of-choice,
       def-shifted-yangian-and-pyramid-generators-for-the-type-a-finite-w-algebra,
       thm-ordered-monomial-pbw-basis-for-the-shifted-yangian]
axiom_use: "Inherited AC through Skryabin, projective/Harish-Chandra suppliers, and arbitrary vector-space extension in the Baer continuous-dual construction. The continuous dual is essential; ordinary restricted duality alone does not enter the Whittaker category."
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Sections 5.1-5.4, formulas (5.1)-(5.2) and Lemmas 5.5, 5.7, 5.11, Theorems 5.10, 5.13, 5.14, 5.17 and Corollary 5.15, printed pp. 26-36: the Whittaker functor as the composite of the row-sum duality and the Whittaker-vector functor, its exactness, the identification on the ground projective and on tensor spaces, and the nonvanishing statements."
    - title: "Joseph Bernstein and Sergei Gelfand, Tensor products of finite and infinite dimensional representations of semisimple Lie algebras, Compositio Math. 41 (1980) 245-285 (complete 42-page NUMDAM article)"
      url: "https://www.numdam.org/item/CM_1980__41_2_245_0.pdf"
      locator: "Sections 5.1-5.12, printed pp. 250-270: the fixed-central-character Harish-Chandra comparison, the regular dominant Verma comparison and the all-weight Ore/translation machinery used to identify the category-O summands."
verification:
  precheck: pass
---

## Definition

Work over $\mathbb C$ and assume the Axiom of Choice where projective covers,
duality and locally unital assemblies enter. Let
$\lambda=(0\le p_1\le\cdots\le p_n)$ be a pyramid with columns
$q_1\ge\cdots\ge q_l$, let $c=(c_1,\dots,c_l)$ be admissible in the sense that
$c_i-c_j\in\mathbb Z$ implies $c_i=c_j$, and let
$\mathcal O_c^d$ be the relevant summand of the genuine parabolic
category $\mathcal O$ attached to the labels $c$ and the degree $d$: its
objects are the modules whose column-strict labels have nonnegative integral
differences from the ground entries of each column, i.e. the labels with
$\Lambda$-diagram content $c_j+q_j-n$ in the sense of
[[def-degenerate-cyclotomic-hecke-algebra]] (the ambient categories are the
ones of [[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]]
and [[def-parabolic-category-o-for-a-standard-parabolic]]).

For a $U(\mathfrak m)$-finitely-generated object $N$ of genuine parabolic
$\mathcal O$, the **Whittaker functor** is the covariant finite-dimensional dual
$$V(N):=\operatorname{Hom}_{\mathfrak m}(N,\mathbb C_\chi)^*.$$
Its $W(\lambda)$ action is obtained from the continuous $\chi$-part of the right
linear dual, then the reflected head/tail identification proved below. In the
notation $D_{\mathrm{row}}\mathrm{Wh}D_{\mathrm{row}}$, the middle Whittaker
operation is performed on this continuous $\chi$-part, not on the uncompleted
ordinary row-restricted dual. Write $N(A)$ for source standard objects,
$L_{\mathcal O}(A)$ for source simples, and $L_W(A)$ for the resulting
nonzero simple $W$-modules. These namespaces are distinct.

The verification below records the properties used on this page: $V$ is exact
on the $U(\mathfrak m)$-finitely-generated objects of genuine parabolic
$\mathcal O$ and intertwines finite tensoring, the Casimir and the flips; $V$
is distinct from the Hecke quotient $\operatorname{Hom}_{\mathfrak g}(T,-)$
constructed later; for the ground simple projective-injective $P_c$ and
$T=P_c\otimes V^{\otimes d}$ one has $V(P_c)=\mathbb C_c$ and
$V(T)=V_c^{\otimes d}$; and $V(L_{\mathcal O}(A))$ is the simple $W$-module $L_W(A)$ for
standard labels $A$ and zero otherwise. Nonintegral origins use the typed
equivalence of the all-weight Harish-Chandra comparison of the source; no
arbitrary complex $c$ is identified with an integral block. After fixing the
ground identification $i_0\colon V(P_c)\to\mathbb C_c$, the compatible functor
and the maps $j_d$ are unique up to the normalized unique natural isomorphism;
without this normalization scalar automorphisms prevent literal uniqueness.

## Facts & Assumptions

**Given:** The pyramid $\lambda$, admissible origins $c$, the categories $\mathcal O_c^d$ and the Whittaker data; assume AC [[def-axiom-of-choice]] for the stated imported constructions and Baer/vector-space splittings.

[F1] The parabolic and genuine-category-O interfaces: $P_c$ is the ground simple projective-injective, the standard objects $N(A)$ and simple objects $L_{\mathcal O}(A)$ are labelled by column-strict tableaux, and the category is a highest-weight category with enough projectives ([[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]], [[def-parabolic-category-o-for-a-standard-parabolic]], [[thm-parabolic-category-o-is-a-highest-weight-category]], [[thm-category-o-has-enough-projectives]]).

[F2] The finite W-algebra, its Whittaker category and Skryabin's equivalence, including the filtration $Q_\chi\otimes_{W(\lambda)}-$ and the tensor identification $M\circledast X=\mathrm{Wh}((Q_\chi\otimes_{W(\lambda)}M)\otimes X)$ on restricted $\mathfrak p$-modules ([[def-the-type-a-finite-w-algebra-and-whittaker-category]], [[thm-skryabins-equivalence-for-the-type-a-whittaker-pair]], [[def-deformed-tensor-space-for-the-type-a-finite-w-algebra]]).

[F3] The truncated tensor space $V_c^{\otimes d}$ is a filtered $(W(\lambda),H_d(\Lambda))$-bimodule with the explicit generators, and the tensor compatibility preserves the generators $x_j,s_i$ ([[def-deformed-tensor-space-for-the-type-a-finite-w-algebra]]).

[F4] Standard/Casimir/Fock interfaces: the highest-weight truncation, the Specht-to-permutation dominance comparison, the Weyl character formula computation, BGG reciprocity and the Fock-basis dictionaries on the source side ([[thm-schur-weyl-decomposition-with-length-cutoff]], [[thm-specht-to-permutation-homomorphism-dominance]], [[thm-weyl-character-formula]], [[thm-bgg-reciprocity]], [[thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule]], [[thm-the-parabolic-o-grothendieck-group-is-the-integral-fock-module]], [[thm-simples-projectives-and-tiltings-map-to-the-three-distinguished-fock-bases]], [[thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules]], [[def-projective-functors-on-a-regular-integral-category-o-block]], [[prop-base-change-freeness-and-specialization-in-the-deformed-family]], [[def-grothendieck-group-and-character-of-category-o]]).

[F5] Noetherianity, Baer injectivity, complete reducibility and Hilbert basis inputs used to make the functorial constructions finite and exact ([[thm-hilbert-basis-theorem]], [[thm-baer-criterion-for-injective-modules]], [[thm-weyls-complete-reducibility-theorem]], [[def-standard-parabolic-and-levi-subalgebras-from-simple-roots]]).



## Proof

**Proof technique:** direct.

**Given:** Assume AC. Use $U=U(\mathfrak m)$ and $I=I_\chi$. The source standards are $N(A)$, source simples $L_{\mathcal O}(A)$ (abbreviated $L_O(A)$ in the computations), and output simples $L_W(A)$. The finite tensor/Hopf comparisons use the actual Skryabin displayed map, not cofree constant evaluation.

1.1 Let U=U(m), I=I_chi. Replace x by y=x−chi(x). These shifted generators have the original brackets, because chi vanishes on brackets. Choose a basis adapted to the lower-central filtration, with weight w_i the largest lower-central index containing its basis vector. PBW reordering and the commutator formula show that I^n is spanned by ordered monomials of total lower-central weight≥n: one inclusion follows from reordering n factors, while the reverse follows because each basis vector of weight w lies in I^w, being a linear combination of iterated brackets of length w. [F1, F2, F5, construct, algebra]

1.2 The Rees algebra R=⊕_(n≥0) I^n t^n is generated by y_i t^r, 0≤r≤w_i. Their span is a finite-dimensional Lie algebra: a nonzero bracket component y_k has w_k≥w_i+w_j, so r+s≤w_k. PBW gives its enveloping algebra a polynomial associated graded. For any left ideal, Hilbert basis gives finitely many generators of its homogeneous leading ideal; lift them and subtract matching highest-degree terms until the nonnegative degree decreases to zero. The lifts generate the original ideal. Thus the enveloping algebra is left noetherian, and its surjection onto R makes R left noetherian. For a left ideal J⊂U, ⊕(J∩I^n)t^n is a graded left ideal of R and has finitely many homogeneous generators. For fixed k, choosing n greater than k plus their largest degrees gives J∩I^n⊂I^k J. This is the precise Artin–Rees consequence needed here. [F1, F2, F5, construct, algebra]

1.3 Set E_chi=∪_(n≥0)(U/I^n)^*, with left action (x f)(r)=f(r x). To prove injectivity, take a U-linear map phi:J→E_chi. U is noetherian, so choose finitely many generators of J. A common I^k kills their images and hence all images, since I is two-sided. The scalar functional lambda(j)=phi(j)(1) kills I^k J. Choose n with J∩I^n⊂I^k J, extend lambda from J/(J∩I^n) to U/I^n, and call the extension a∈E_chi. The map U→E_chi, u↦u a, extends phi, because at r its value on j is a(rj)=phi(rj)(1)=phi(j)(r). Baer's criterion gives injectivity. This supplies the injective-continuous-dual assertion cited without proof in BK Lemma8.20. [F1, F2, F5, construct, algebra]

1.4 For a U(m)-finitely generated g-module X, evaluation at1 identifies Hom_m(X,E_chi) with the scalar functionals lambda:X→C that kill I^n X for some n. Indeed, reconstruct the map by F_lambda(v)(r)=lambda(rv); finitely many generators give a common n. The right U(g)-action is (lambda·u)(v)=lambda(uv). On E-valued maps its formula is therefore [F1, F2, F5, construct, algebra]

1.5 (F·u)(v)(r)=lambda(u r v), [F1, F2, F5, construct, algebra]

1.6 not the generally non-m-linear expression F(uv)(r)=lambda(r u v). This distinguishes the compressed scalar-functional notation in the source from a literal E-valued composition. [F1, F2, F5, construct, algebra]

1.7 The right action preserves continuity. For a fixed u∈U(g), the finite PBW subspace generated by all iterated ad m on u is finite-dimensional and its negative-column action is nilpotent; sufficiently long products of ad m vanish. Moving u past a product of sufficiently many shifted m generators therefore leaves at least n of them on the left. Equivalently u I^(n+C)⊂I^n U(g) for some C=C(u). Thus lambda u kills I^(n+C)X. On this continuous-dual module the right shifted m-action is locally nilpotent. Injectivity of E_chi makes Hom_m(−,E_chi) exact, and right Skryabin makes its Whittaker vectors exact. These Whittaker vectors are precisely Hom_m(X,C_chi). Dualizing this finite-dimensional vector space gives an exact covariant functor. [F1, F2, F5, construct, algebra]

1.8 The restricted dual uses the row-sum torus a=span{Σ_(row(j)=r)E_jj}, not the full Cartan and not the column-origin vector c. Every e-adjacent pair lies in one row, so chi has a-weight0. If X is generated over U(m) by finitely many a-weight spaces, an m-linear functional into C_chi vanishes outside those finitely many weights: lambda(uv)=chi(u)lambda(v), and chi(u)=0 in every nonzero a-weight. Thus the restricted-dual definition agrees with the entire finite-dimensional Hom space. Generalized parabolic Vermas are U(m)-free on a finite-dimensional Levi module by PBW; their finite projective flags/presentations from the repaired parabolic highest-weight supplier make every genuine parabolic O object finitely generated over U(m). This establishes exactness on precisely that category. [F1, F2, F5, construct, algebra]

1.9 For X=U(g)⊗_(U(p))X_0, the Hom space is canonically X_0^*. The finite-W action on its covariant dual uses the right-model head twist eta_head(E_jj)=E_jj+n−Σ_(k≤col(j))q_k. The left-model twist is eta_tail(E_jj)=E_jj+n−Σ_(k≥col(j))q_k. Their numerical difference is −tr_m(ad E_jj), since the trace counts earlier minus later column heights. This numerical identity does not by itself prove equality of the two W models. The actual identification of the left/right W models and compatibility on all shifted-Yangian generators is the explicit matrix-generator check in the companion finite-W matrix note; the vector-space duality alone does not supply it. [F1, F2, F5, construct, algebra]

1.10 Reflect the pyramid and transpose matrix units with its column-renumbering permutation. This is an anti-isomorphism of U(g). Reversing each path preserves its degree, sign and cut inequalities and sends P_ij;x to P'_ji;x term by term. The shift matrix is transposed. The preceding reflected generator theorem therefore identifies the reflected W and the transpose images of the original generators. Applying this anti-isomorphism to its left reduction condition turns the left ideal into the right ideal and its tail shift into the original head shift. Consequently the SAME original W subalgebra equals {u:[eta_head(u),m]⊂I_chi U(g)}. Numerically eta_head−eta_tail=−tr_m ad on each diagonal matrix; this equality is explained by the column counts but is not used as a substitute for the path-transpose proof. [F2, F3, construct, algebra]

1.11 Fix an admissible origin: c_j−c_k integral implies c_j=c_k. The original arbitrary-origin deformed tensor algebra remains separate and unrestricted. In a column of height q whose global row numbers are n−q+1,…,n, write its strict entries a_1,…,a_q. The genuine head-model V action makes its finite-Levi highest weight nu_s=a_s+n−q+s−1. This follows directly from the global highest weight lambda_i=a_i+i−1 and eta_head diagonal shift n−q_1−…−q_col: the column-reading position i=q_before+(global_row−n+q) gives lambda_i+eta_head=a_i+global_row−1. [F1, F2, F3, F4, F5, construct, algebra]

1.12 Finite-Levi Weyl gives, on row variables z_(n−q+1),…,z_n, [F1, F2, F3, F4, F5, construct, algebra]

1.13 ch L(nu)=det(z_r^(nu_s+q−s))/det(z_r^(q−s)) =(Π_(r=n−q+1)^n z_r^(n−1)) det(z_r^(a_s))/det(z_r^(q−s)). [F1, F2, F3, F4, F5, construct, algebra]

1.14 The numerator exponent is exactly a_s+n−1; the column height and reading offset cancel. The prefactor and denominator are independent of the entries. Products over columns therefore identify the row-torus character of V(N(A)) with a fixed factor times products of nested bottom-row flag minors, evaluated at y_(r,a)=z_r^a. For the ground column a_s=c+1−(n−q+s), the determinant cancels the Vandermonde and gives precisely Π z_r^c, verifying the origin normalization. [F1, F2, F3, F4, F5, construct, algebra]

1.15 All exponential expressions lie in the group algebra of the finite subgroup generated by their occurring complex weights and the integral row weights. That subgroup is finitely generated and torsion free, hence free abelian; its group algebra is a Laurent polynomial domain. The nonzero Vandermonde may therefore be cancelled. A zero character of an actual nonzero finite-dimensional module is impossible: its coefficients are nonnegative weight dimensions, and evaluation of the group algebra at1 is its positive dimension. [F1, F2, F3, F4, F5, construct, algebra]

1.16 Fix a finite entry alphabet U, and introduce independent variables y_(r,a), with row space C^n and entry space U. Antisymmetrizing each column of a tensor gives its bottom-row minor, and multiplying gives a GL(U)-linear map from the column-wedge tensor F to Sym(C^n⊗U). Each minor is killed by the lower-row raising operators: replacing a present row by a later row duplicates a row inside its bottom-row set. The product has row weight (p_1,…,p_n). [F1, F2, F3, F4, F5, construct, algebra]

1.17 Classical Cauchy decomposition follows from the actual published Schur–Weyl decomposition: identify the degree-N symmetric power with diagonal S_N invariants of (C^n)^tensor N⊗U^tensor N, then use the two Specht decompositions. The needed self-duality is complex linear: polytabloids have real coefficients, so their span is conjugation-stable; the bilinear tabloid form B(v,w)=sum v_T w_T is invariant and B(v,conjugate(v)) is the positive Hermitian norm. It is therefore nondegenerate on the Specht span. Schur's lemma with this explicit bilinear duality leaves one multiplicity space for each matching partition. The lower-row highest-weight line at (p_1,…,p_n) selects the partition (p_n,…,p_1), so the entire flag-minor image lies in the irreducible entry module of highest weight Lambda=Σ_j omega_(q_j). The ground product of minors is a nonzero polynomial. Hence the image is exactly this irreducible module. Actual16 proves that this constituent occurs once in F; therefore this nonzero normalized map has exactly the kernel of actual16's highest-component projection pi. No quantum flag algebra or quantum Peter–Weyl theorem is imported. [F1, F2, F3, F4, F5, construct, algebra]

1.18 For different complex cosets, first apply the companion typed category equivalence and use one independent set of variables for each coset. The same Cauchy proof applies to each coset's columns, with their retained sorted heights. Multiplication across the disjoint variable sets is injective on the tensor product. Thus the kernel is the sum of the component projection kernels, exactly the off-standard lower-basis kernel of the product of actual16 models. The shift a↦a−c_kappa+n−n_kappa and inf I_kappa=1−n_kappa is explicit in that companion proof. [F1, F2, F3, F4, F5, construct, algebra]

1.19 V is exact on the genuine parabolic category and sends N(A) to its finite-Levi standard V(A). Actual16 identifies [L_O(A)] with its source lower/dual-canonical vector L_A at parameter1. Its projection pi L_A is zero exactly off Std. The preceding flag-minor factorization consequently gives zero row-torus character of V(L_O(A)) for every off-standard A. Positivity of actual module characters makes V(L_O(A))=0. [F1, F2, F3, F4, F5, construct, algebra]

1.20 The kernel of the Grothendieck map of V is stable under every residue e/f operator, because the actual tensor identity and Casimir/flip compatibility give V e=e V and V f=f Wh. Thus after quotienting by the already-known off-standard kernel, any additional kernel would be a submodule of actual16's irreducible highest component (or the irreducible tensor product for the direct sum of coset root algebras). The ground class survives: its V image is the one-dimensional C_c by the induced-module computation. Hence no additional kernel exists. Every Std simple therefore has a nonzero V image. This argument does not presume that image simple, does not rely on injectivity of the exponential evaluation on the entire abstract polynomial module, and does not require a classification of all finite-dimensional W simples. [F1, F2, F3, F4, F5, construct, algebra]

1.21 Take finite alphabets containing the relevant finite labels and tensor words, with the proved boundary block projections; actual16 gives compatibility under enlarging the cuts. The argument applies on each cut and hence to every object in the selected finite degree/category. All comparisons use integer order within a coset, not an order on C. [F1, F2, F3, F4, F5, construct, algebra]

1.22 The ground P_c is a simple projective-injective by the actual16 integral model and the typed coset product. Tensor biadjunction makes T=P_c⊗V^tensor d projective-injective. Its indecomposable summands are precisely the Std prinjectives, with possible multiplicities; it is a detecting object, not a generator of the whole parabolic category. [F1, F2, F3, F4, F5, construct, algebra]

1.23 Hd acts on T by the universal tensor Casimir. At the first tensor step, the finite p flag of V has one standard section for each column. On its jth section, the Casimir identity Omega=(C_total−C_source−C_V)/2 gives eigenvalue c_j+q_j−n. The column-order flag therefore makes Π_j(x_1−(c_j+q_j−n)) annihilate T; the remaining factors are untouched at higher degree. Thus the cyclotomic action genuinely exists on T, not merely on its V image M=V_c^tensor d. The explicit V tensor comparison transports this action to M. [F1, F2, F3, F4, F5, construct, algebra]

1.24 The filtered Vust theorem gives End_W(M)^op=B, the cyclotomic tensor image. V maps End_g(T)^op into B, and its image contains B because every Hecke operator came from T. This map is injective: a nonzero endomorphism has nonzero image inside T; that image has a Std socle factor by actual16 prinjectivity, so exact V with its established simple kernel cannot kill it. Thus End_g(T)^op=B. [F1, F2, F3, F4, F5, construct, algebra]

1.25 Choose a full finite projective generator Q of the genuine O summand containing T as an explicit summand and write its algebra as A; the projector onto T is e and B=eAe. The exact Schur functor is e(−). It kills precisely the offStd simples. Its left adjoint Ae⊗_B− is right exact and satisfies e(Ae⊗X)=X. The counit Ae⊗eN→N has kernel and cokernel killed by e. Applying V sends it to an isomorphism. Therefore V factors through e(−), and its factor F on B-mod is naturally M⊗_B− by finite free presentations. This factor is exact: the only failure of exactness after the left adjoint is killed by e and hence by Wh. It is faithful, since every B-simple is eL_O(A) for a Std label and its V image is nonzero; exactness then detects every nonzero image of a morphism. [F1, F2, F3, F4, F5, construct, algebra]

1.26 A finite-dimensional right B-module whose tensor functor is exact is projective. Explicitly, take its finite projective cover P→M with kernel K⊂P rad B. Tensor the inclusion K→P with B/rad B; flatness makes K/K rad B inject into P/P rad B, but this map is zero, so Nakayama gives K=0. Faithfulness forces every right indecomposable projective to occur in M: otherwise tensor with the corresponding left simple would vanish. Thus M_B is a progenerator. The first filtered centralizer identity gives Wd=End_B(M). The usual generator presentation/evaluation argument now gives the genuine Morita equivalence Wd-mod≃B-mod. In particular F sends B-simples to Wd-simples, proving the full relevant V simple-image claim without assuming it earlier. [F1, F2, F3, F4, F5, construct, algebra]

2.1 Tensor compatibility follows from the continuous-dual evaluation, ordinary finite tensor adjunction and the actual balanced Skryabin map: its coproduct identity carries the Casimir and flips to the deformed tensor model. Thus $V(P_c)=\mathbb C_c$ and $V(P_c\otimes V^{\otimes d})=V_c^{\otimes d}$. The preceding kernel/Morita construction proves $V(L_{\mathcal O}(A))=L_W(A)$ for standard labels and zero otherwise; it never asserts that the image of a source standard $N(A)$ is simple. The normalized comparison is determined on the ground and its tensor words, hence on the detecting tensor bimodule and on finite free quotient presentations through the established exact Morita factorization. Its ground normalization removes scalar ambiguity. This proves the stated properties of the genuine Whittaker functor, while keeping it distinct from the Hecke Hom quotient. [F1, F2, F3, F4, choose, construct, algebra] ∎

## Remarks

- The proof uses the continuous $\chi$-dual and its right action; plain row-restricted duality does not make an ordinary category-$\mathcal O$ object Whittaker. Source simples and standard objects have separate names throughout.

- The definition deliberately separates three functors that are often conflated: the genuine Whittaker functor $V$ on category $\mathcal O$, the Hecke Hom quotient $\operatorname{Hom}_{\mathfrak g}(T,-)$, and the Morita equivalence on the finite-W side. Only the first is defined here; the quotient is defined two items later.

- The nonintegral-origin construction uses the typed Harish-Chandra comparison of the source (all-weight Verma comparison, Ore twists, coset sorting), which is the content of the declared local supplier interfaces [F4]; those interfaces are recorded as dependencies and their proofs are supplied by their own items.
