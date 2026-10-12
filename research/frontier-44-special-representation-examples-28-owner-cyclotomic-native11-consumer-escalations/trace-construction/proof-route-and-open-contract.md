# Generic cyclotomic trace: source-backed construction route and exact open supplier

**Native sign binding:** All source crossing/divided-difference formulas below use κ=−τ_native for every color pair, as proved and recorded in `native-sign-dictionary-pass1.md`; source operators must not be identified directly with native generators.

Run: frontier-44-special-representation-examples-28. Author: /root/repair_klr_global_basis/cyclotomic_trace_construction. This is proof construction, not mathematical acceptance, independent review, or consumer closure. No canonical files or native evidence were changed.

## Verified source scope

The complete retrieved Webster PDF is arXiv:1001.2020v9, *Knot invariants and higher representation theory I*, 62 PDF pages. Its page 2 explicitly fixes arbitrary base field and polynomial parameters; pages 4 and 7 impose symmetrizable real Cartan datum, graded homogeneous Q, Qij(u,v)=Qji(v,u), and nonzero extreme coefficients. Its Definition 1.5 (page 16) uses precisely y_1^{lambda_i} e(i), hence the standard first-strand monomial quotient. Theorem 1.8 (page 19) asserts a Frobenius trace; Remark 1.9 (pages 19–20) gives its symmetry adjustment. Thus no geometry, ADE, characteristic-zero, or specially normalized Q restriction is warranted for this theorem.

The raw right-closing functional is NOT generally cyclic: the proof on page 20 records a crossing relation with ratio tji/tij. Claiming that the unadjusted diagram closure is symmetric for every homogeneous Q is incorrect. A homogeneous diagonal rescaling makes it symmetric. Webster uses the opposite internal shift convention to the repository (explicit warning on page 5); the trace degree must be computed directly rather than copied as a shift.

KK1102.4677 was also retrieved completely, 42 PDF pages. Its basic tensor-Hom adjunction, projectivity and commutator results do not, by themselves, constitute the second graded adjunction required below. In particular page 12's wording “left and right adjoint” is followed by only the ordinary Ind-left-adjoint-to-Res formula and cannot be used as proof of the Frobenius property of the cyclotomic quotient.

## Closed algebraic reduction: trace nondegeneracy from an actual second adjunction

Use internal shifts M{r}_d=M_{d-r}, homogeneous HOM, and D=HOM_k(-,k). Let B be a finite-dimensional graded k-algebra and P=B as a left module. Let F:k-gmod→B-gmod be P tensor_k -, E=HOM_B(P,-). Suppose actual natural graded adjunction isomorphisms E{t} left-adjoint F left-adjoint E have been proved, including units, counits and both triangle identities. The first adjunction supplies, for each finite M, a natural degree-zero isomorphism

HOM_B(M,P) ≅ D(E M){-t} = D HOM_B(P,M){-t}.

For M=P, let φ be the image of id_P under this isomorphism. Viewed without the {-t} shift, φ is a homogeneous functional of degree t on End_B(P). Put tr(f)=φ(f). Naturality in M shows that the image of g:M→P, evaluated on f:P→M, is tr(gf). Therefore for M=P the map g↦[f↦tr(gf)] is an isomorphism End_B(P)→D End_B(P){-t}. This proves perfectness of the pairing, not merely existence of a nonzero closure. Via End_B(B)=B^op it gives a graded Frobenius functional on B. No assertion about nonzero ideals needs to be presumed: if I is a nonzero left ideal and 0≠a∈I, perfectness gives b with tr(ba)≠0, and ba∈I.

The same proof applies first to P=⊕_ν B e(ν), which is literally B. It is enough to prove the second adjunction for all word induction functors F_ν:k-gmod→B-gmod, with the same total shift t. Direct sums preserve the natural isomorphisms, and E_ν= e(ν)- identifies the sum with HOM_B(B,-). The individual idempotent words need not all be nonzero. This reduction does not assume self-duality of every indecomposable projective or of every finite module.

## Correct shift and degree

For a one-strand step from β to β+α_i, the necessary adjunction is

E_i{t_i(β)} left-adjoint F_i left-adjoint E_i,

t_i(β) = (α_i,α_i)-2(Λ-β,α_i) = -2d_i(〈h_i,Λ-β〉-1).

For a word ν=(i_1,...,i_n), set β_r=Σ_{a≤r}α_{i_a}. Composing adjunctions adds the shifts, so

Σ_r t_{i_r}(β_{r-1}) = -2(Λ,β)+Σ_r(α_{i_r},α_{i_r})+2Σ_{a<r}(α_{i_a},α_{i_r}) = -2[(Λ,β)-(β,β)/2].

Thus t=-2def_Λ(β) is word independent and even. In rank one, β=α_i and B=k[x]/x^{λ_i}, the functional extracting x^{λ_i-1} has degree -2d_i(λ_i-1), confirming the sign. D B≅B{t}; equivalently B≅D B{-t}. The false positive sign in the old rank-one clause must be corrected. Zero blocks require the usual vacuous symmetric-algebra convention; do not demand a nonzero functional on B=0.

## Closed algebraic symmetry adjustment, conditional on the actual crossing identity

Suppose the constructed raw trace satisfies cyclicity with idempotents, dots, equal-color crossings and, for a different-color crossing p_ν=τ_r e(ν):ν→s_rν, the relation

tr(p_ν a)=r_ν tr(a p_ν),  a∈e(ν)B e(s_rν),

where r_ν is a nonzero scalar depending only on the ordered pair of colors, with r_(j,i)=r_(i,j)^(-1). Webster's conventions give r as tji/tij; repository crossing orientation must be translated explicitly, not assumed. Choose a fixed order on the finitely many colors occurring in β, and a sorted reference word. Define c_ν by multiplying the inverse r of each adjacent inversion in a path from the reference word to ν. This is path independent: distant swaps commute, braid moves have the same three pair factors in either order, backtracking cancels reciprocal factors, and equal-color swaps contribute 1. Equivalently use the product over inversion pairs of individual colored occurrences; repeated equal colors give no factor. Hence c_(s_rν) r_ν=c_ν.

Let c=Σ_ν c_ν e(ν), an invertible homogeneous degree-zero diagonal element, and tr'(b)=tr(cb). For the crossing above, tr'(p_ν a)=c_(s_rν)r_ν tr(a p_ν)=c_ν tr(a p_ν)=tr'(a p_ν). Idempotents/dots/equal crossings obey the same identity with ratio 1. Since these generate B, moving generators successively proves tr'(ab)=tr'(ba) for all a,b. The bilinear form remains perfect because multiplication by c is invertible. Its degree remains -2def. No claim that c is central is needed or true in general.

## Exact remaining local supplier: not closed in this helper

Suggested new supplier within the existing 11A page:

`lem-cyclotomic-klr-graded-biadjunction-and-crossing-mates`.

Statement contract: under the full generic real symmetrizable/Q1–Q4/standard cyclotomic hypotheses, prove E_i{t_i(β)}⊣F_i⊣E_i on finite graded module categories by explicit homogeneous bimodule maps and both triangle identities, and prove the above mates/crossing ratio identity on word projectives, with the precise repository t_ij orientation. This contract must NOT depend on the graded-symmetric theorem. Ordinary tensor-Hom reciprocity and KK's projectivity/commutator suppliers may be prerequisites; Frobenius/symmetry is a consequence, so reversing this edge would be circular.

A lawful source route is Webster §1.2 Theorem 1.4 + §1.3 Proposition 1.7 (pages 11–19), followed by the page-20 induction and Figure 6. But importing these as an unexplained diagrammatic biadjunction is not a full local proof. Necessary work includes constructing the minimal-parabolic rank-one action (explicit symmetric-function bimodules, cup/cap maps and nil-Hecke identities), proving its nondegeneracy/basis assertion, proving the quotient-to-cyclotomic algebra identification (intersection of the enlarged ideal with R and the capping-off argument), and expanding the three crossing-mate cases in Figure 6. These are exactly the unproved prerequisite content here. The complete PDFs are authoritative evidence for the truth and parameter scope, not local proof substitutes.

Until that supplier is genuinely written and checked, the generic graded-symmetric clause remains blocked locally; it should not be narrowed to geometry/ADE or declared proved from “some closure is nonzero”. The algebraic reduction above is complete conditional on its explicit supplier contract, and can become the concise theorem proof once that supplier closes. The parent owns integration and consumer review.
