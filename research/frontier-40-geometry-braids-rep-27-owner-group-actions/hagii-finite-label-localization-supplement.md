# Supplement: finite labels, strict localizations and principal-open mapping coherence

2026-10-04 proof-only supplement for the sole batch23 reviewer. This file alone is written. It replaces the principal-poset localization shorthand in Sections4/6 of `hagii-ringed-space-chart-presentation-candidate.md`;no strict map A[a^-1]->A[b^-1] is assumed merely from D(b)⊂D(a). No item,manifest,readiness or shared plan is changed.

## Actual indexing category and weak refinements

Fix a simplicial commutative ring A and put R=π0A. Let J be the set-sized poset of finite subsets E⊂A0,with arrows E⊂F. Write

U_E=intersection_{e∈E}D([e])⊂Spec R,  U_empty=Spec R,
A_E=A[E^-1].

The empty set is initial in J. Every principal open has such a label,because A0->π0A is surjective. The diagram E↦A_E is **strict**:for E⊂F,every element inverted on the source is actually inverted on the target in every simplicial degree. Ordinary localization maps commute with all coefficients/operators,identities and compositions. No π0-unit is substituted for an actual degree-zero inverse.

Let W_J consist of inclusions E⊂F with U_E=U_F. Their ring maps A_E->A_F are weak. Indeed every [f],f∈F,is a unit in R_E:its vanishing locus on Spec R_E is empty,so the ideal it generates is the unit ideal. Exact simplicial localization gives π_iA_E=(π_iA)_E;localizing these modules further at those units changes nothing. Thus the actual strict map is a normalized quasi-isomorphism even when its degree-zero target has no strict inverse before the additional localization.

For two labels E,F of the same open,E∪F is a common refinement and both maps to it belong to W_J. For an arbitrary open inclusion U_F⊂U_E,the correct comparison is the strict roof

A_E -> A_{E∪F} <- A_F,

whose right arrow is weak because U_{E∪F}=U_F. Its inverse is taken in the derived category/enhancement. This supplies the derived restriction;the potentially nonexistent ordinary A_E->A_F is never used.

## Principal-open comparison with full mapping spaces

Let P be the poset of principal opens(including empty open if it occurs,and the whole affine),and use P^op for the ring restriction direction. Define π:J->P^op by E↦U_E. For a principal open U,its left-Kan-extension comma category is

J_U={E : U⊂U_E},

with inclusion arrows. Its full subcategory J_=U={E:U_E=U}is nonempty. It is final/cofinal for colimits:for E∈J_U,the comma category(E↓J_=U)consists of finite F⊃E with U_F=U. Choose any label L of U;E∪L is an object. Binary union stays in the category and gives a common upper refinement for any finite collection. More explicitly,union with E∪L is an endofunctor admitting natural transformations from the identity and from the constant object E∪L. Their nerve homotopies show that this comma nerve is contractible. Thus the inclusion is cofinal,with all higher coherences,not just surjectivity on objects.

Exact authoritative cofinality source additionally read in full:HTT Theorem4.1.3.1 and its printed proof(PDF254–256),the relevant colimit implication in Proposition4.1.1.8(PDF244–245),and Proposition4.3.3.7 with its complete proof(PDF306). Full source is the already retrieved <https://www.math.ias.edu/~lurie/papers/HTT.pdf>,4753810 bytes,949 pages,SHA256 `58855f3a0ad6d9c470ded74a38938b9468927592e9ae1209bab6a068e67ede6e`. The theorem's comma-contractibility hypotheses were just proved explicitly. These are used on the same authorized authoritative HA/HTT route as the parent candidate;no recursive proof of generic infinity-category foundations is claimed.

Let M be the accepted derived ring∞-category,or its module analogue,with its actual combinatorial model presentation. Derived left Kan extension π_! is left adjoint to π^*. Its value on U is the homotopy colimit over J_U. This also has a concrete model calculation:ordinary π_! of a projectively Cof replacement is the ordinary comma colimit. J_U is downward closed in J. A free projective diagram generator at E restricts to the same free generator on J_U if E∈J_U,and to the initial diagram otherwise;the latter follows because E⊂F with F∈J_U forces E∈J_U. Thus restriction preserves projective Cof,and the comma colimit computes its actual derived colimit. HA's already authorized model-colimit comparison gives the displayed∞-Kan-extension value.

For any W_J-inverting J-diagram F,

(π_!F)(U) ≃ hocolim_{E∈J_=U}F(E) ≃ F(E0)

for any label E0 of U. The second comparison has explicit coherent witnesses:union with E0 is an endofunctor r(E)=E∪E0 of J_=U. There are strict natural transformations F->F∘r and const F(E0)->F∘r. Every component is a W_J-map and hence an equivalence. They identify F with the constant diagram up to natural equivalence;the comma nerve is contractible by the same two union transformations. At E0 both comparison components are identity,so this identifies the **canonical** map F(E0)->π_!F(U)as an equivalence.

For a P^op-diagram G,π^*G is W_J-inverting,and π_!π^*G(U)reduces to the constant G(U)over J_=U. Therefore its counit is an equivalence. Conversely the preceding calculation shows the unit F->π^*π_!F is an equivalence for every W_J-inverting F. The derived adjunction thus gives an equivalence

Fun(P^op,M) ≃ Fun(J,M)_{W_J-inverting},

where the right side is the **full** subcategory. This proves the mapping-space comparison,not only an equivalence of localized homotopy categories. It is the precise presentation needed here;an additional arbitrary-target calculus-of-fractions theorem is unnecessary.

In particular E↦A_E descends to a principal-open derived ring diagram. Its values are canonically the localizations prescribed by any labels,its open-refinement maps are those derived roofs,and its higher compatibility is the unit/counit/Kan-extension coherence. The accepted affine recognition/localization counit identifies it with the restriction of the actual Spec A ring stack. The target diagram E↦RΓ(f^-1U_E,O_B)is π^*of the derived pushforward's principal restriction;it is W_J-inverting because same labels' opens are literally equal. By the full subcategory equivalence,the source/target diagram mapping space on J is precisely the principal-open ring-stack mapping space. Hypercover descent then supplies the same mapping space on all opens,as in the accepted affine recognition packet.

## Corrected mapping inverse on the strict finite-label category

For a fixed continuous f:Specπ0B->Specπ0A,let T_f be the union of components of RMap_ring(A,B)whose π0 ring maps have underlying continuous spectrum map f. Different ring homomorphisms sharing f remain distinct;higher maps remain present.

Use J,not an assumed strict principal-poset localization diagram. Replace the strict A_E diagram projectively **under constant A** by QD. The constant A is free at the initial label empty;QD is Cof,and each value is a cofibrant A-algebra model of A_E. A projective Cof replacement remains W_J-inverting,by its objectwise weak comparison with A_E. Let H_f(E)=RΓ(f^-1U_E,O_B),with its actual restriction maps and a valid strict diagram representative. It is W_J-inverting. The literal mapping-corner restriction is a Kan fibration

p:Map_J(QD,H_f)->Map_J(const A,H_f)=RMap_ring(A,B).

The equality is evaluation at the initial label together with the accepted affine derived-sections comparison. For β∈T_f,its fibre is derived coherent maps under A. Compute it by the projective simplicial bar:degree r contains the free diagrams over chains E0⊂⋯⊂Er on QD(E0). The bar is Cof;its augmentation contracts objectwise by appending the endpoint label. Mapping into H_f gives the Reedy-fibrant cosimplicial end

N^r=product_{E0⊂⋯⊂Er}RMap_{A-alg}(QD(E0),H_f(Er)).

Every factor is contractible. Indeed U_Er⊂U_E0,so on f^-1U_Er the image underβ of **every element of E0**is a π0-unit. The accepted derived localization universal property makes the relative extension space from A_E0 contractible. This is a mapping-space statement for all parameter simplices,not only existence of an ordinary point extension. The homotopy limit of these contractible fibres is contractible;the bar end includes every chain coherence. Thus p is an equivalence over T_f. By the preceding π_!/π^*equivalence,this is also the full principal-open/stack mapping comparison,not merely the finite-label mapping comparison.

For ordinary locality,the truncation of an extension is the unique localized ring map extendingβ. At q it is(π0A)_{β^-1q}->(π0B)_q. It is local precisely for the assigned underlying f when β^-1q=f(q). Thus local ringed-space morphisms are exactly p^-1(T_f). The disjoint union over f gives the full affine mapping equivalence RMap_dSch(Spec B,Spec A)≃RMap_ring(A,B),as claimed in the parent candidate with its corrected label index.

## Naturality under arbitrary open refinements

For U_F⊂U_E,the roof through E∪F supplies restriction in the descended diagram;it is already encoded by the functor π_!. Changing labels of either open has a common union refinement with weak same-open arrows. For several successive open inclusions,take the union of **all** their finite labels;the common-refinement categories are closed under further union and contractible. The derived unit/counit is natural on the whole diagram,so all compositions,triple overlaps and higher parameter simplices agree through these refinements. This is more than individually choosing inverses to weak maps.

The map p and its bar fibre are natural in the strict coefficient diagrams and the target restriction functor. Full faithful π^*transports that naturality to the principal-open category. The inverse of p over T_f has contractible space of inverse choices,so that natural equivalence transports coherently through coefficient changes and composition of affine maps. This repairs precisely the strict-unit gap while preserving the full mapping inverse and its naturality.

## Disposition

Under the parent candidate's accepted direct models,authoritative rectification/affine recognition and derived-localization universal property,this supplement closes the finite-label/principal-open interface. No strict degreewise restriction is inferred from a π0 open inclusion. The earlier shorthand should be replaced by this J/W_J/derived-Kan-extension construction during sole-owner integration. No additional mathematical hold is identified in this interface under those named accepted inputs;the helper makes no shared readiness decision.
