---
id: lem-gts-derived-affine-mixed-hkr-negative-cyclic-comparison
kind: lemma
title: Derived affine mixed HKR and negative-cyclic comparison
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-calabi-yau-orientations-derived-perfect-moduli
deps:
- def-axiom-of-choice
- thm-model-structures-on-variable-simplicial-modules-and-algebras
- thm-dold-kan-equivalence-for-simplicial-modules
- lem-additive-kan-and-normalized-fibration-criterion
- lem-simplicial-normalization-prism-and-trivial-fibration-criterion
- thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex
- lem-fixed-base-simplicial-cotangent-represents-derived-derivations
- lem-simplicial-algebra-cotangent-adjunctions-before-deriving
- lem-boundary-horn-product-is-anodyne
- def-gts-closed-n-shifted-symplectic-form
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-model-structures-on-variable-simplicial-modules-and-algebras: mathematical-premise
  thm-dold-kan-equivalence-for-simplicial-modules: mathematical-premise
  lem-additive-kan-and-normalized-fibration-criterion: mathematical-premise
  lem-simplicial-normalization-prism-and-trivial-fibration-criterion: mathematical-premise
  thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex: mathematical-premise
  lem-fixed-base-simplicial-cotangent-represents-derived-derivations: mathematical-premise
  lem-simplicial-algebra-cotangent-adjunctions-before-deriving: mathematical-premise
  lem-boundary-horn-product-is-anodyne: mathematical-premise
  def-gts-closed-n-shifted-symplectic-form: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pending
dependency_level: 2
---

## Statement

Assume the Axiom of Choice and let $k$ be any characteristic-zero field. For every connective derived commutative $k$-algebra $A$, computed in the actual simplicial commutative-algebra model, there is a natural quasi-isomorphism of mixed complexes from derived Hochschild chains to the resolved de Rham complex:
$$I:\mathrm{HH}^{\mathrm{der}}(A/k)\longrightarrow\bigoplus_{p\ge0}\mathbf L\!\wedge^p L_{A/k}[p].$$
Its ordinary polynomial formula is $I_n(a_0[a_1|\cdots|a_n])=a_0\,da_1\wedge\cdots\wedge da_n/n!$, and it intertwines Connes B with the de Rham differential. The comparison respects all derived algebra maps and their higher homotopies. It induces the negative-cyclic product comparison and, for every weight $p$, a natural map to the weighted negative-cyclic de Rham complex. In product component $r$ the weight-$p$ projection retains de Rham weight $p+r$. The same formulas give a natural absolute-to-relative mixed comparison square for every derived algebra map, without asserting a relative HKR quasi-isomorphism over an arbitrary non-field base. No smoothness or finite-presentation hypothesis on $A$ is imposed.

## Statement references

[[def-axiom-of-choice]]

[[thm-model-structures-on-variable-simplicial-modules-and-algebras]]

[[thm-dold-kan-equivalence-for-simplicial-modules]]

[[lem-additive-kan-and-normalized-fibration-criterion]]

[[lem-simplicial-normalization-prism-and-trivial-fibration-criterion]]

[[thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex]]

[[lem-fixed-base-simplicial-cotangent-represents-derived-derivations]]

[[lem-simplicial-algebra-cotangent-adjunctions-before-deriving]]

[[lem-boundary-horn-product-is-anodyne]]

[[def-gts-closed-n-shifted-symplectic-form]]

## Facts & Assumptions

**Given:** AC, the characteristic-zero field, the actual simplicial commutative algebra model, and its derived cotangent complex.

[F1] [[def-axiom-of-choice]]: AC permits the resolution and splitting choices below.

[F2] [[thm-model-structures-on-variable-simplicial-modules-and-algebras]]: The stated model structures have functorial cell factorizations and actual simplicial mapping corners; their Statement explicitly supplies no tensor-flatness, which is proved below.

[F3] [[thm-dold-kan-equivalence-for-simplicial-modules]]: Dold–Kan normalization over a constant ring is exact and has its specified inverse. It does not identify variable-base modules with ordinary modules over a fixed ring.

[F4] [[lem-additive-kan-and-normalized-fibration-criterion]]: The additive Kan and normalized fibration criteria identify the actual lifting maps.

[F5] [[lem-simplicial-normalization-prism-and-trivial-fibration-criterion]]: Normalization has its natural degeneracy projection and prism homotopies.

[F6] [[thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex]]: The ordinary finite-variable polynomial Hochschild calculation uses the actual diagonal Koszul and bar resolutions; the mixed operator and derived extension are supplied below.

[F7] [[lem-fixed-base-simplicial-cotangent-represents-derived-derivations]]: The fixed-base simplicial cotangent complex represents the stated derived derivations.

[F8] [[lem-simplicial-algebra-cotangent-adjunctions-before-deriving]]: The underived simplicial cotangent adjunction is available before deriving.

[F9] [[lem-boundary-horn-product-is-anodyne]]: Products of simplex boundary/horn inclusions give the required generating pushout-product cells.

[F10] [[def-gts-closed-n-shifted-symplectic-form]]: The weighted negative-cyclic convention uses the product with component degree j−2r and differential Dm_r+εm_(r−1).

## Proof

**Given:** [F1]–[F10].

1.1 The explicit ordinary mixed comparison. For an ordinary unital k-algebra R let Namely, C_n(R)=R⊗(R/k·1)^{⊗n}, n≥0.. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, algebra, construct]

2.1 The homological Hochschild boundary on a representative is Namely, b(a0⊗…⊗an)=Σ_{i=0}^{n−1}(−1)^i a0⊗…⊗ai ai+1⊗…⊗an +(−1)^n an a0⊗a1⊗…⊗a(n−1).. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 1.1, algebra, construct]

3.1 The Connes operator is Namely, B(a0⊗…⊗an)=Σ_{i=0}^n (−1)^{ni} 1⊗ai⊗…⊗an⊗a0⊗…⊗a(i−1).. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 2.1, algebra, construct]

4.1 Terms with a unit in a barred slot are zero. These formulas are independent of the representatives of barred factors. The adjacent-multiplication faces and unit-insertion degeneracies satisfy the simplicial identities by associativity and the unit identities, so b²=0. For completeness the cyclic proof of the other relations uses the signed cyclic rotation t_n=(−1)^n(a0,…,an)↦(an,a0,…,a(n−1)), N_n=1+t_n+…+t_n^n, and the extra degeneracy s inserting a unit in front. The identities Namely, (1−t)N=N(1−t)=0, b(1−t)=(1−t)b',  b'N=Nb,  b's+sb'=1. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 3.1, algebra, construct]

5.1 follow by moving each multiplication face past one rotation and pairing all non-wraparound faces; b' omits the cyclic face. They give bB+Bb=0 and B²=0 for B=(1−t)sN. Modulo degenerate tensors this is exactly the displayed formula, because the t s term has a unit in a barred slot. These are finite identities in every n. All operators commute with algebra maps. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 4.1, algebra, construct]

6.1 For commutative R define Namely, I_n(a0⊗…⊗an) = (1/n!) a0 da1∧…∧dan ∈Ω^n_(R/k).. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 5.1, algebra, construct]

7.1 Then I_(n−1)b=0: expand d(ai ai+1)=ai dai+1+ai+1 dai, and consecutive terms cancel, with the cyclic face canceling the last remaining endpoint. Also Namely, I_(n+1) B = d_dR I_n.. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 6.1, algebra, construct]

8.1 Indeed all n+1 cyclic summands have the same exterior product after their displayed sign is combined with the sign for cyclically permuting n+1 one-forms. Their coefficient is (n+1)/(n+1)!=1/n!. Thus this is a natural morphism of mixed complexes to the differential-zero complex ⊕_n Ω^n[n], with mixed operator d_dR. No choice of polynomial coordinates enters I. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 7.1, algebra, construct]

9.1 For R=k[x1,…,xm], this particular I is a quasi-isomorphism, not merely a map to an abstractly isomorphic homology group. To see this, use the diagonal resolution K over S=k[xL,xR], with ∂e_i=x_i,L−x_i,R. Use the left S-action on the two outer bar slots. Its explicit comparison to the two-sided bar resolution sends Namely, e_(i1)∧…∧e_(in) ↦ Σ_{σ∈S_n}sgn(σ) 1⊗x_(iσ1)⊗…⊗x_(iσn)⊗1.. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 8.1, algebra, construct]

10.1 Interior multiplication faces cancel in pairs by commutativity; the two outer faces are the alternating deletion differential with coefficient x_i,L−x_i,R. Hence it is a chain map over the identity augmentation. Both augmented complexes are projective resolutions, so the actual resolution-comparison supplier gives a chain homotopy inverse. Tensor with the diagonal R, and then quotient by unit degeneracies using the explicit simplicial normalization projection. The source differential becomes zero and the composite with I sends every increasing wedge basis to the corresponding dx wedge, because its n! summands cancel the factor1/n!. It is therefore an isomorphism on this zero-differential model. This proves that I itself is a quasi-isomorphism. The case m=0 includes the empty wedge. An arbitrary set of polynomial variables is the filtered union of finite subsets; every tensor, polynomial and finite differential form involves finitely many variables, and filtered colimits of vector spaces preserve kernels and cokernels. The conclusion holds for arbitrary polynomial R. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 9.1, algebra, construct]

11.1 The simplicial polynomial resolution and finite totalization. Factor k→A functorially by the actual cell-factorization supplier as k→P→A, with the first map a relative polynomial cell complex and the second a trivial fibration. In each simplicial degree, attaching a cell adjoins precisely the generators not in the specified boundary subset: a pushout of a polynomial algebra on a subset replaces those boundary generators by their prescribed existing values and leaves the other variables free. It imposes no relation on the old algebra. Starting at k and taking the transfinite union shows P_s is a polynomial k-algebra in every degree s. The construction is functorial in A. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 10.1, algebra, construct]

12.1 Apply the preceding C,b,B and I to every P_s. Apply normalization in the simplicial index s; it is exact and its projection is natural, so it commutes with b,B and I. Put the summand with indices(s,n) in cohomological degree −s−n and set Namely, D=b+(−1)^n ∂_simp,     ε=B.. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 11.1, algebra, construct]

13.1 Because b and B commute with every simplicial operator, D²=0, ε²=0 and Dε+εD=0. On the forms side set D=(−1)^p ∂_simp in weight p and ε=d_dR. The natural I from the ordinary mixed comparison is a morphism of these mixed complexes. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 12.1, algebra, construct]

14.1 It is a quasi-isomorphism. Before simplicial normalization, each fixed s comparison is a quasi-isomorphism in Hochschild degree n by the ordinary mixed comparison. The same is true after exact normalization. Filter the cone total complex by the simplicial degree. The associated row complexes are acyclic; alternatively eliminate a total cycle row by row using those exact rows. In total degree −q there are only q+1 possible pairs(s,n), with s+n=q. Thus this process is finite in each degree, and no infinite filtration-completeness or exchange-of-limits premise is needed. This proves the claimed total quasi-isomorphism. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 13.1, algebra, construct]

15.1 Weak-equivalence invariance without commutative rectification. The following local tensor verification is useful because the actual model supplier disclaims tensor-flatness. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 14.1, algebra, construct]

16.1 Every simplicial k-vector space is cofibrant as well as fibrant. Fibrancy is the actual additive Kan result. For cofibrancy, normalization reduces lifting against a trivial fibration to a map of nonnegative complexes which is surjective in each degree with acyclic kernel. Positive-degree surjectivity is the normalized fibration criterion; degree-zero surjectivity follows from surjectivity on H0 and degree-one surjectivity. Choose bases and lift a chain map degree by degree: after the lower degrees have been lifted, the difference between the desired boundary and the boundary of a chosen lift is a cycle in that acyclic kernel; subtract a primitive. This is a linear construction after choices of bases/splittings, using AC. Full faithfulness of Dold–Kan turns it into the required simplicial lift. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 15.1, algebra, construct]

17.1 Consequently a weak equivalence of simplicial k-vector spaces is a simplicial homotopy equivalence. Here is the model argument with its needed data: factor it as a cofibration followed by a trivial fibration. The cofibration is also acyclic by two-out-of-three. Cofibrancy gives a section of the latter map; fibrancy gives a retraction of the former. The actual mapping-corner theorem makes the relevant mapping fibers trivial Kan fibrations. The two composites and identity maps have the same image in those fibers, so a one-simplex in a fiber gives each required simplicial homotopy. This constructs a homotopy inverse. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 16.1, algebra, construct]

18.1 Tensoring a simplicial homotopy with an arbitrary simplicial k-vector space preserves it: in degree n send (x⊗v,t) to H_n(x,t)⊗v for each simplex t of Δ[1], and extend linearly. Faces and degeneracies commute with this formula. Thus degreewise tensor products preserve weak equivalences; finite tensor powers do too. This proof uses no tensor-normalization equivalence or E-infinity/cdga theorem. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 17.1, algebra, construct]

19.1 It follows that a weak equivalence P→Q induces a weak equivalence on each simplicial C_n: use tensor-power invariance and exactness of the natural normalization splitting in Hochschild degree. Totalize over n≥0. The same finite-first-quadrant argument as the simplicial finite-totalization construction proves a quasi-isomorphism of mixed complexes. Therefore C applied to the polynomial resolution computes a resolution-independent relative derived Hochschild mixed complex. The comparison I is natural under actual simplicial polynomial maps. A functorial polynomial resolution and the universal property of localization at weak equivalences consequently give the natural derived comparison, including higher naturality, rather than only unrelated isomorphisms for different algebras. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 18.1, algebra, construct]

20.1 Matching the actual cotangent/de Rham model. Here are the module-flatness details needed to identify the target; they must not be inferred merely from the existence of a model structure. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 19.1, algebra, construct]

21.1 A cellular simplicial P-module is filtered by its attached free cells. In each simplicial degree an attachment is a split injection of P-modules, with quotient P⊗k (k[Δ[q]]/k[∂Δ[q]]). Hence tensoring the filtration with any P-module preserves the injections and the displayed quotients. If M is an acyclic simplicial P-module, its underlying simplicial k-vector space is acyclic. The quotients after tensoring with M are acyclic by the k-tensor result of the weak-equivalence and tensor construction. Normalization is exact; induction on the cells and exactness of filtered colimits prove that M⊗P F is acyclic for a cellular F, and hence for a retract of such an F. In addition F is degreewise flat, since each cellular module is degreewise free and a retract is degreewise projective. To treat an arbitrary weak equivalence f, factor it in simplicial P-modules as an acyclic cofibration followed by a trivial fibration. A cell cofibration is a degreewise split injection; so are its retracts, and a weak such injection has an acyclic cokernel by exact normalization. A trivial fibration is degreewise surjective by the normalized additive criterion (degree zero follows from H0 and degree-one surjectivity), with acyclic kernel. Degreewise flatness preserves these two short exact sequences after tensoring with F. Their kernel or cokernel becomes acyclic by the preceding cell argument. Exact normalization and the long homology sequence prove that both tensor maps are weak equivalences. Thus cofibrant simplicial P-modules are homotopy-flat for arbitrary weak equivalences. This argument does not apply a constant-ring Dold–Kan module equivalence to the variable base P. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 20.1, algebra, construct]

22.1 The same generating-cell computation proves the required tensor-cofibrancy: the pushout product of free module cells is P tensored with the product of the corresponding simplex inclusions, and the supplied boundary/horn-product lemma gives the (acyclic) cell inclusions. Transfinite cell induction and retracts show tensor products of cofibrant P-modules are cofibrant. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 21.1, algebra, construct]

23.1 For polynomial-cell P, Ω^1_(P/k) is a cellular simplicial P-module: differentiating an attached free algebra generator attaches the corresponding free module generator, with its faces the differentiated attaching map. The fixed-base cotangent adjunction therefore identifies Namely, L_(A/k) ≃ A⊗P Ω^1_(P/k). [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 22.1, algebra, construct]

24.1 with derived base change, not an underived comparison on an arbitrary noncofibrant input. In characteristic zero, Ω^p_(P/k) is the image of the antisymmetrizing idempotent1/p! on the pth tensor power of Ω^1_(P/k). This is a retract of a cofibrant module. Tensor-cofibrancy and homotopy-flatness show that after A-base change it computes the derived exterior power of L_(A/k). Finally P→A is a weak equivalence of right simplicial P-modules. Tensor with Ω^p_(P/k); the just-proved flatness gives a weak equivalence Namely, Ω^p_(P/k) → A⊗P Ω^p_(P/k).. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 23.1, algebra, construct]

25.1 Thus NΩ^p_(P/k) is exactly the underlying k-complex of the derived exterior-power model in the existing closed-form definition. This identifies the target of I with the intended derived de Rham graded mixed complex in the actual simplicial model. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 24.1, algebra, construct]

26.1 Negative-cyclic completion and the precise weight-two projection. For a mixed cochain complex(E,D,ε), with ε degree−1, use the adopted product model Namely, NC(E)^j=∏_{r≥0} E^(j−2r), (d_NC m)_r=D m_r+ε m_(r−1),  m_(−1)=0.. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 25.1, algebra, construct]

27.1 This construction preserves quasi-isomorphisms of underlying mixed complexes. A direct proof avoids an unproved interchange of inverse limits: if E is acyclic and m is a cycle, choose v0 with Dv0=m0, then inductively solve Namely, Dv_r = m_r−εv_(r−1).. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 26.1, algebra, construct]

28.1 The right side is a D-cycle because Dm_r=−εm_(r−1), Dε=−εD, and ε²=0. Choose a primitive in each degree. The resulting infinite sequence is an element of the product, and d_NC v=m; no sum is taken. Apply this to the mixed mapping cone of a quasi-isomorphism. This is also the explicit semifree-Hom argument already accepted for the corrected NC convention. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 27.1, algebra, construct]

29.1 Apply NC to I. For a graded de Rham mixed target, define the weight-p projection by retaining, in product component r, precisely de Rham weight p+r. It is a chain map because the internal differential preserves weight and ε raises it by one. Therefore there is a canonical natural map Namely, NC(HH^der(A/k)) → NC^w(DR(A/k))(p).. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 28.1, algebra, construct]

30.1 For p=2 its degree-zero space is exactly the closed two-form space of shift2, since the closed-form definition uses [n−p]=[0]. This proves the mixed-HKR and completion interface needed after a universal negative-cyclic character has actually been constructed. It does not construct that character. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 29.1, algebra, construct]

31.1 For a derived map A→B, resolve the diagram by polynomial-cell algebras P→Q. The same polynomial formula I on Q gives the absolute row over k and the relative row over P. Sending absolute tensors to balanced tensors and absolute differentials to relative differentials commutes term by term with I, b and B. Normalization, totalization and the negative-cyclic product construction therefore give the claimed natural derived comparison square. This asserts a relative mixed map only; the quasi-isomorphism proved above is the absolute one over the field k. [F2, F7, F8, F10, step 30.1, algebra, construct] ∎
