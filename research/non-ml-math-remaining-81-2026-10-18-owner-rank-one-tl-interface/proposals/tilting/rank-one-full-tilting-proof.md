# Isolated rank-one tilting proof suppliers

This is a mathematical construction proposal, not a canonical edit, audit, acceptance, gate receipt, or readiness assertion. It applies to every integer ell>=3, with q=exp(pi i/ell), including even ell. The two current canonical consumers were read on 2026-10-18 while native62 was still writing. Their final carriers must be reread by the integrating owner.

## Exact proposed interfaces and dependency order

A. Rank-one full-weight highest-vector and duality lemma: the full toral character, universal bounded highest-vector property, and Hom(Delta(a),nabla(b))=delta_ab.

B. Rank-one quantum-plane tensor-filtration lemma: Delta(a) tensor Delta(b) has one Weyl factor of each weight a+b,a+b-2,...,|a-b|; likewise for dual Weyls. This includes the explicit integral exact sequence below.

C. Rank-one orthogonality and tilting classification lemma: Ext^1(Delta(a),nabla(b))=0; filtration classes are closed under direct summands; all finite tiltings are sums of the unique indecomposable T(a), whose highest weight a has multiplicity one. Tensor products are tilting. This proves classification of ALL finite tiltings, not merely an assertion restricted to tensor powers.

D. Rank-one Casimir construction and character lemma: T(a ell-1)=Delta(a ell-1), and T(a ell+b) has precisely the two Weyl factors a ell+b and a ell-b-2 for a>=1,0<=b<=ell-2. Small T(b)=Delta(b) for b<ell. This gives the exact current character consumer without an imported linkage theorem.

E. Local endomorphism trace lemma: on an outside-alcove indecomposable, every module endomorphism has pivotal trace zero; hence arbitrary direct sums thereof are negligible. This is included below.

Proposed exact new IDs (subject to owner collision/placement checks):

- A: `lem-rank-one-full-weight-highest-vectors-and-dual-orthogonality`, depending on `def-temperley-lieb-rank-one-lusztig-tilting-category`, `def-lusztig-divided-power-integral-form`, `thm-quantized-sl-two-string-formulas`, and `lem-quantum-pascal-recurrence-and-gaussian-integrality`.
- B: `lem-rank-one-quantum-plane-integral-tensor-filtrations`, depending on A and the same integral/Gaussian suppliers.
- C: `lem-rank-one-tilting-orthogonality-summands-and-classification`, depending on A and B; its finite-dimensional Fitting argument is proved locally and requires no new abstract category supplier.
- D: `lem-rank-one-casimir-projection-and-tilting-characters`, depending on A--C and `def-temperley-lieb-quantum-integers-and-quantum-characteristic`; its needed q-Lucas zero/nonzero statement and central Casimir calculation are proved locally below.
- E: `lem-rank-one-outside-alcove-endomorphisms-have-zero-trace`, depending on C,D, `thm-basic-properties-of-the-categorical-trace`, `def-the-categorical-trace-of-a-morphism-into-the-double-dual`, and `def-pivotal-structure`.

The current Weyl/dual-Weyl carrier can use A--C; the current character/dimension carrier can use D,E. Splitting D's Gaussian coefficient calculation into an earlier helper is optional, not an additional mathematical premise.

All proposed suppliers are A-page helpers. Logical order A -> B,C -> D -> E; C uses B only for existence and tensor closure. None assumes any general odd-ell category theorem. Existing Gaussian-integrality/string suppliers supply the Laurent polynomial identities used below. Root68's general highest-weight suppliers can be contextual references, but are not premises: their stated odd-ell scope does not cover this interface.

## 0. Category, integral conventions, and elementary identities

Use the algebra with KEK^-1=q^2 E, KFK^-1=q^-2 F, EF-FE=(K-K^-1)/(q-q^-1), all Lusztig divided powers and all toral binomials T_(c,t). EVERY weight m has K=q^m and T_(c,t)=[m+c choose t]_q, for every c in Z,t>=0. Every module intertwiner automatically preserves the integral grading, so this is the full module subcategory, not an extra morphism restriction: for distinct weights m<n choose c=-m and t=n-m; their T_(c,t) eigenvalues are [0 choose t]=0 and [t choose t]=1. Thus the full toral characters separate integral weights. The Hopf structure is Delta E=E tensor K+1 tensor E, Delta F=F tensor1+K^-1 tensor F; S(E)=-EK^-1, S(F)=-KF. All formulas are identities over Z[v,v^-1] before specialization, so roots introduce no denominators. The target Hopf form may instead be obtained from the existing inverse-K library form by opposite coproduct and E_target=K E_lib, F_target=F_lib K^-1, including E_target^(r)=v^(-r(r-1))K^r E_lib^(r), F_target^(r)=v^(r(r-1)) F_lib^(r)K^-r. This preserves the integral form and toral eigencharacters.

For clarity, the only straightening identity needed here is the divided-power E-F commutation identity: on a highest vector w of weight a,

E^(r) F^(j) w = [a-j+r choose r]_q F^(j-r)w.

It follows by commuting one E past successive F's using EF-FE and then collecting Gaussian coefficients; the resulting identity is Laurent-polynomial and is valid for arbitrary r,j after clearing the generic factorials. Together with F^(r)F^(j)=[r+j choose r]F^(r+j), this shows that a highest vector w of weight a in a module supported on [-a,a] determines a UNIQUE homomorphism Delta(a)->M, v_j -> F^(j)w. Indeed F^(j)w=0 for j>a by support, E^(r)w=0 for r>0 by support, and the displayed formulas verify all E,F divided actions; toral actions agree by their full weight characters. This proves the needed bounded highest-vector property directly. The corresponding formula verifies the toral action on every Weyl basis vector: T_(c,t)v_j=[a-2j+c choose t]v_j. No K-only replacement is used.

The contragredient dual has weights -m. Its toral character is the character at -m, because the antipode on toral binomials is obtained from K -> K^-1 in their generic Laurent products, then specialized. Tensor products have weight m+n and full toral character at m+n by the generic coproduct Gaussian identity. Thus duals, submodules, quotients and all constructions below remain in the full-weight category. Double duality is naturally isomorphic to the identity via K, since S^2=Ad K.

## A. Hom orthogonality

The Weyl module is generated by its weight-a vector because F^(j)v_0=v_j, including j>=ell. Its dual has one-dimensional weight a and support [-a,a]. A map Delta(a)->nabla(b) vanishes if a>b, since it vanishes on the generating highest vector. If a<b, dualizing and identifying the double dual gives a map Delta(b)->nabla(a), which vanishes by the preceding case. For a=b, a nonzero vector in the highest line of nabla(a) gives a nonzero map by the bounded highest-vector property; every map is determined by this vector. Hence Hom has dimension delta_ab. This proof uses no simplicity or linkage premise.

## B. An integral tensor-filtration calculation

Let P be the quantum plane over A=Z[v,v^-1], with generators x,y and relation yx=v xy. Give x,y weights 1,-1 and actions Ex=0,Ey=x,Fx=y,Fy=0. The stated coproduct preserves the relation: E(yx-vxy)=v x^2-v x^2=0 and F(yx-vxy)=v y^2-v y^2=0. On P_n the ordered monomials X_j=x^(n-j)y^j form a free basis and

E^(r)X_j=[j choose r]_v X_(j-r), F^(r)X_j=[n-j choose r]_v X_(j+r).

These identities follow first at generic v by the module-algebra rule and then integrally. Toral binomials act at weight n-2j. This is nabla(n): writing w_j=(v_(n-j))^* in the dual Weyl string gives E w_j=-v^(n-2j+2)[j]w_(j-1), Fw_j=-v^(-n+2j)[n-j]w_(j+1); rescale by c_0=1,c_j/c_(j-1)=-v^(-n+2j-2). The rescaled coefficients are [j],[n-j], and all higher divided formulas follow integrally as well.

For a,b>=1, multiplication and the invariant tensor x tensor y-v^-1 y tensor x give the sequence

0 -> P_(a-1) tensor P_(b-1) --i--> P_a tensor P_b --mu--> P_(a+b) ->0,

i(f tensor g)= f x tensor y g-v^-1 f y tensor x g.

Both maps are module maps: insertion of the displayed invariant tensor followed by multiplication in the two adjacent factors is a composite of module maps. The tensor is invariant under E,F, all higher divided powers (their degree exceeds its weight support), and all toral elements (weight zero). Also mu i=0 because yx=vxy.

Here is an integral exactness check, avoiding specialization of a merely generic filtration. For f_i=x^(a-1-i)y^i and g_j=x^(b-1-j)y^j,

i(f_i tensor g_j)=v^(i+b-1-j)X_i tensor Y_(j+1)-v^-1 X_(i+1) tensor Y_j.

Fix i+j. The target basis pairs of the corresponding total degree form one consecutive path; the displayed vectors are its adjacent differences with unit coefficients. They are linearly independent: eliminate consecutively from the first vertex. Their quotient is free of rank one, with every vertex a unit multiple of its first vertex. Multiplication sends each target vertex to a unit multiple of the same monomial in P_(a+b), so it identifies this rank-one quotient with that monomial line. This proves injectivity, exactness and freeness over A, degree by degree. Consequently the sequence stays exact at EVERY specialization.

Recursively applying this sequence proves that P_a tensor P_b has dual-Weyl factors P_(a+b),P_(a+b-2),...,P_|a-b|, each once. For a=0 or b=0 the assertion is immediate. Duality reverses the tensor order, yielding the corresponding Weyl filtration of Delta(a) tensor Delta(b). Filtering one tensor factor and then the other proves tensor closure of both filtration classes; tensoring over C is exact. Therefore tensors of tiltings are tilting.

## C. Ext, summands, and classification of every finite tilting

Consider 0->nabla(b)->M->Delta(a)->0. If a>=b then M has support [-a,a]. Lift the highest vector of Delta(a) to its weight-a subspace in M. All positive divided powers kill the lift by support. The bounded highest-vector property supplies Delta(a)->M whose composite with the quotient is identity, since it is identity on the generator. Thus the extension splits. If a<b, contragredient duality turns it into 0->nabla(a)->M^vee->Delta(b)->0, which splits by the case just proved. Hence Ext^1(Delta(a),nabla(b))=0 for all a,b. Induction on the two finite filtrations and the elementary long exact sequence for Hom/Ext gives Ext^1(D,N)=0 whenever D is Weyl-filtered and N is dual-Weyl-filtered.

We spell out summand closure rather than assume it. If M is Weyl-filtered with maximal occurring label a, its support is [-a,a]. Any occurrence of a quotient Delta(a) can be moved to the bottom of the filtration: its extension by all preceding factors splits by lifting its weight-a generator as above. Repeating for all occurrences produces an injective evaluation map

Delta(a) tensor_C M_a -> M

whose image is the sum of all maps from Delta(a) and whose quotient has a Weyl filtration with labels <a. The evaluation is injective because after moving the a-factors down it is exactly their direct sum, and each has a one-dimensional weight-a line. An idempotent e on M preserves this image and acts on it as 1 tensor e_a. Thus its image and kernel each have a submodule which is a sum of Delta(a)'s, and their quotient modules are summands of the lower-label Weyl-filtered quotient. Induction on maximal label proves both summands Weyl-filtered. Duality proves the same assertion for dual-Weyl filtrations. In particular tiltings are closed under all module direct summands.

Let V=Delta(1)=nabla(1). Its tensor power V^a is tilting by B, has maximal weight a, and its weight-a line has dimension one. Finite-dimensional modules admit indecomposable decompositions: split nontrivial direct sums recursively, which terminates by dimension. Summand closure shows their summands are tilting. Exactly one summand of V^a has weight a; call it T(a). Its weight-a dimension is one.

Every indecomposable finite-dimensional module has the following elementary Fitting property: an endomorphism f has a decomposition M=ker f^N direct-sum im f^N for large N, because stabilized kernel and image intersect trivially and have complementary dimensions. Thus on an indecomposable, f is either invertible or nilpotent. In particular, an endomorphism nonzero on a one-dimensional preserved highest line is invertible.

Now let M be ANY indecomposable finite tilting, of maximal Weyl label a. The preceding evaluation construction embeds Delta(a) tensor M_a into M with Weyl-filtered quotient having lower labels. Choose a vector in M_a and a functional on M_a pairing to 1. They specify maps on the standard submodules Delta(a) of T(a) and Delta(a) tensor M_a of M, respectively. The Ext vanishing above extends these to maps f:T(a)->M and g:M->T(a): the quotients of the respective standard submodules are Weyl-filtered, and the respective targets are dual-Weyl-filtered. The composite gf is identity on the weight-a line, hence invertible by Fitting. Therefore T(a) is a nonzero direct summand of M; indecomposability implies M is isomorphic to T(a). This also forces dim M_a=1. Applying this to any indecomposable tilting of the same highest weight proves uniqueness. Distinct a cannot give isomorphic modules, since their maximal integral weights differ. Decomposing an arbitrary finite tilting now proves the full classification.

## D. Characters by one Casimir projection

First Delta(n) is simple if 0<=n<ell or n=a ell-1 (a>=1). Indeed each weight space is one-dimensional, and E^(j)v_j=[n choose j]_q v_0. These coefficients are all nonzero in the stated cases. For the Steinberg case this nonvanishing can be checked without an unproved representation-theoretic theorem: put z=v^2 and use

[n choose j]_v=v^(-j(n-j)) {n choose j}_z.

The generating identity product_(r=0)^(n-1)(1+z^r t)=sum_j z^(j(j-1)/2){n choose j}_z t^j, at z a primitive ell-th root, decomposes each full block of ell factors as 1-(-t)^ell. More generally, for N=A ell+B and J=C ell+D, 0<=B,D<ell, this product becomes (1-(-t)^ell)^A times the residual product of B factors. The coefficient of t^J comes only from its degree-D residual coefficient times its degree-C ell block coefficient. Thus {N choose J}_z is a nonzero power/sign factor times binom(A,C){B choose D}_z; in particular it is zero if D>B, and nonzero whenever 0<=C<=A and 0<=D<=B. This proves the zero/nonzero form of q-Lucas used here, without requiring a convention for the immaterial root-of-unity factor. In particular it proves that {a ell-1 choose c ell+d}_z is a nonzero root-of-unity factor times binom(a-1,c){ell-1 choose d}_z (0<=d<ell,0<=c<=a-1). Every factor in the last Gaussian's numerator and denominator is nonzero, so the coefficient is nonzero. For n<ell this follows directly from the product formula. Any nonzero graded submodule of Delta(n) contains some v_j, hence v_0 by E^(j), hence every v_k by F^(k); this proves simplicity. Its dual is simple and has a highest vector of weight n, so the bounded highest-vector map Delta(n)->Delta(n)^vee is a nonzero isomorphism. Thus these Weyls are tilting, and C identifies them with T(n).

For a>=1 and 0<=b<=ell-2 put m=a ell+b and m'=a ell-b-2. The module

X=Delta(a ell-1) tensor Delta(b+1)

is tilting, and its Weyl labels are n_j=m-2j, j=0,...,b+1, each once. Consider the quantum Casimir

C=(q-q^-1)^2 FE+qK+q^-1 K^-1.

Its commutation with E,F,K is checked using the defining relations. It commutes with every divided power and toral binomial because the generic commutation identities hold integrally before specialization (q-q^-1 is nonzero here). It acts on Delta(n) by c_n=q^(n+1)+q^(-n-1), since this is its value on the generating highest vector.

For z=q^(b+1-2j), c_(n_j)=(-1)^a(z+z^-1). Thus c_(n_j)=c_m exactly when b+1-2j is congruent to plus or minus (b+1) modulo 2ell. As 0<b+1<ell and -b-1<=b+1-2j<=b+1, this happens precisely at j=0,b+1. The generalized c_m-eigenspace Y in X is a module direct summand. Taking this eigenspace is exact on finite-dimensional C-stable sequences: the usual primary-decomposition polynomial projectors preserve submodules and quotients. Applied to a Weyl filtration of X, it retains exactly Delta(m),Delta(m'). Thus Y is tilting with character chi(m)+chi(m').

We must prove Y indecomposable. Delta(m) is not dual-Weyl: v_(b+1) is a highest vector of weight m', because for 1<=r<=b+1,

E^(r)v_(b+1)=[a ell-1+r choose r]_q v_(b+1-r)=0;

the numerator contains [a ell], while all denominator factors [1],...,[r] are nonzero. For r>b+1 the image is zero by the string convention. The submodule generated by this highest vector is spanned by F^(j)v_(b+1), by the E-F straightening identity. Moreover it is supported on [-m',m']: the upper bound follows from this spanning description, and the lower bound follows from the following explicit truncation. We have F^(j)v_(b+1)=[b+1+j choose j]v_(b+1+j). If j>m' and the displayed basis vector is still in the original string, then

(a-1)ell+(ell-b-1)<=j<=a ell-1.

Write j=(a-1)ell+d, where ell-b-1<=d<ell. The upper index b+1+j has residual digit b+1+d-ell, strictly smaller than d. The same block generating identity used above (the q-Lucas coefficient identity) therefore gives [b+1+j choose j]=0. If the basis index is outside the original string it is zero by definition. Thus all j>m' vanish. The bounded highest-vector property now supplies a nonzero map Delta(m')->Delta(m), sending its highest vector to v_(b+1). By A this would be impossible if Delta(m) were nabla(m). Hence Delta(m) is not dual-Weyl.

If Y decomposed, its unique top-weight summand would be T(m), and all other summands would have lower highest weights. Additivity and nonnegativity of Weyl multiplicities show that either Y is already indecomposable, or the top summand has sole Weyl factor Delta(m) and the complement sole factor Delta(m'). The former top summand would be Delta(m) and tilting. A dual-Weyl filtration of a module with character chi(m) must have sole factor nabla(m), since Weyl characters are triangular and linearly independent; thus Delta(m)=nabla(m), contradicting the previous paragraph and A. Therefore Y=T(m), proving the two-factor character formula. This derivation handles all a, all allowed b, and both parities of ell.

## E. Pivotal dimensions and all endomorphisms

For the positive K pivotal convention, trace on a weight-m line is weighted by q^m. Hence dim_q Delta(n)=sum_(j=0)^n q^(n-2j)=[n+1]_q. The two factors in D cancel because [a ell+b+1]=(-1)^a[b+1] and [a ell-b-1]=(-1)^(a+1)[b+1]. At a ell-1 the dimension is [a ell]=0. For 0<=n<=ell-2 the dimension is positive.

Let f be any endomorphism of an indecomposable T(m). Over C, f has an eigenvalue lambda; f-lambda Id is not invertible, hence nilpotent by the Fitting argument in C. Thus f=lambda Id+N with N nilpotent. It preserves each full integral-weight space. On each such space N is nilpotent and has ordinary trace zero; multiplying by the scalar pivotal eigenvalue q^weight still gives zero. Consequently tr_q(f)=lambda dim_q T(m), which is zero for m>=ell-1. For any f:T(m)->Z and g:Z->T(m), the composite gf is such an endomorphism, so every map out of an outside-alcove indecomposable is negligible. For sums, the trace of an endomorphism is the sum of traces of its diagonal indecomposable blocks; this proves negligibility of arbitrary finite direct sums of the outside-alcove summands.

## Source record and actual reading limits

Actual sources present on disk:

- Sawin PDF SHA256 c3d929cbbc920627e53dbba011dbc86bf361d4ec6401cf8143ba9fbf0b7556ab; extracted text SHA256 1aaa3ab6c95881af651ba5dd303ad43c49c45dfba6c51a03c247ba86a31ef86b.
- Andersen--Tubbenhauer PDF SHA256 2f2067b7b583e731e0baec27574c5f7cd189c7bcd3493cfbf9533aa0d44e48eb; extracted text SHA256 4871872f10689daf2563fda463278bf169952c7decbb7620a20dee17f362f2cc.

This constructor read the actual extracted Andersen--Tubbenhauer text at lines330--670 (definitions 2.5--2.17, propositions 2.7,2.16,2.20 and their proofs, and the beginning of linkage). This confirms that 2.7 imports its simple-module proof, tensor filtration (4) is asserted as easy, summand closure imports another source, and 2.20(c) imports the final classification argument; none is treated above as an imported proof. The constructor did not visually inspect PDF pages or read the full Sawin source in this subtask. Its hashes record file identity, not full-source reading. The existing isolated-proposal's source-reading record belongs to its author and is not expanded by this construction. The proof here is an independent elementary replacement of those missing steps.

## Remaining integration work, not a mathematical acceptance claim

The owner must translate proposed A--E into actual local suppliers/contracts, verify all algebraic identities against the final native62 convention, reread final native62/78 carriers, and perform the genuine native repair/review/gate process. No current metadata, source carrier, state, stamp or gate was edited here. This manuscript supplies the scientific proof chain; no ribbon/R-matrix or centralizer proof is claimed by it.
