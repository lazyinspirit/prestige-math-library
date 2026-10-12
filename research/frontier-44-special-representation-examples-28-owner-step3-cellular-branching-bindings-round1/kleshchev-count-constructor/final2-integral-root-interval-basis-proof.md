# Final2 construction: integral root-interval vectors and triangular raising pivots

Author: `/root/repair_cell_head_classification/native50_pairing_constructor`.
Home proposed for a necessary standalone supplier: existing A-home22. No active item is created here. This is the continued, second/final mathematical construction candidate for the current authored-count seam. The first packet and its unresolved status remain historical evidence. No source20/50/24 counter, prior receipt, native file or consumer is edited.

## Contract and conventions

Let F have characteristic p>0, let N≥2, and let μ=(μ1≥…≥μN≥0) be a polynomial highest weight. Let L=L_N(μ) be the nonzero simple quotient of the actual q=1 Schur Weyl cell module with its canonical highest vector v. Convert the repository's right Schur modules to left modules by the Schur star. Set a_i=μ_i−μ_{i+1} for1≤i<N, l=N−1, and α(r,s)=α_r+…+α_s. The needed statement is:

For every1≤r≤s≤l, the explicitly constructed vectors T_{r,s}(J)v, with J essential in(r,s], form an F-basis of L_{μ−α(r,s)}. The vectors have integer polynomial coefficients in(a_i). There are explicit positive words Q_{r,s}(Jhat) giving distinct triangular nonzero pivots. The construction covers the original restricted μ=λ' and all legitimate lower shifted polynomial weights ν_u; no p-restrictedness of the auxiliary weights is imposed.

Here
 B(i,j)=j−i+Σ_{t=i}^j a_t,
 C(i,j)=j−i+Σ_{t=i}^{j−1}a_t.
All zero tests below mean reduction modulop. A bounded matching is an injective map d with j≤d(j); it is **not** required to preserve the order of different j's. J⊂(r,s] is nonessential exactly when there are t<u in[r,s+1]\J and a bounded zero-B matching
 {t}∪(J∩(t,u))→[t,u).
Otherwise J is essential. This is the exact subset predicate used by the separate PartI constructor. All sets are finite.

## 1. Modular foundation from the actual Schur algebra

Extend only to K=F(t). This field is infinite, and extension preserves the rank of every finite Gram matrix. A nonzero Schur cell-form quotient stays simple after this extension: in any field a vector outside its radical generates the entire cell module by the cellular rank-one action, and the same argument applies to the extended nonzero Gram form. No algebraic closure or infinite-choice step is required.

Atq=1, identify ⊕_ν M^ν with the tensorword basis of (K^N)^{⊗m}, m=|μ|, by sending m_νT_d to the word whose jth letter is the row containing entry j in the row-standard tableau t^ν d. This is the explicit right-coset/tensorword convention; for regular type and basis d, that letter is j d^(-1) under right permutation notation. The symmetric-group action on tensor positions is transported through this map, so inverses in labels and right-position actions are fixed consistently. The symmetric group permutes the tensor positions. An endomorphism commuting with this permutation action has matrix coefficients constant on its orbits on pairs of words. Such orbits are indexed by nonnegative integer matrices A=(A_ab) with ΣA_ab=m, recording the number of positions with inputb and outputa. Let E_A be the matrix with entry1 on that orbit and0 elsewhere. The E_A have disjoint support and form a basis of the endomorphism algebra. For a matrix g,
 g^{⊗m}=Σ_A (Π_ab g_ab^{A_ab})E_A.
The transpose involution sends E_A to E_{A^T}; it is precisely the q=1 Schur star (the corresponding semistandard Hom maps are transposes under the orthonormal tensorword/permutation forms).

Invertible-matrix evaluations span this Schur algebra over K. Indeed a linear functional annihilating all g^{⊗m} gives a polynomial P(g)=Σ_A c_A g^A vanishing whenever detg≠0. Then P·det vanishes at every matrix over K. An elementary induction on the number of variables shows that a polynomial over an infinite field vanishing everywhere is zero: regard it as a polynomial in the last variable and use infinitely many values, then apply the induction to its coefficients. Thus P·det=0 as a polynomial, and the polynomial domain gives P=0, so all c_A vanish. Finite-dimensional duality proves the spanning claim. Consequently the star-converted Schur simple is a simple rational left GL_N-module, with the same submodules and composition multiplicities as the right Schur module.

The canonical semistandard tableau has weight μ and Schur form value1. Indeed its diagonal Schur basis element is the projection onto the permutation summand M^μ: the defining Hom map is the identity there and zero on the other summands. Its square is itself, so the defining cell-product coefficient, which is the canonical tableau norm, is1. This argument uses the canonical diagonal projection only, not an idempotence assertion for all diagonal tableau elements. Every semistandard tableau weight ν is dominated by μ: for each k, all entries≤k occur in the firstk rows by column strictness, so there are at most μ1+…+μk of them. The unique tableau of weight μ is the canonical one. Thus L has highest weight μ with one-dimensional highest space Kv, and its positive upper unipotent group fixes v: any nonconstant positive-root coefficient would have weight strictly above μ. Torus weights are integer characters, distinct as Laurent monomials over K; no Lie-eigenvalue congruence substitutes for weight equality.

On the open set where leading principal minors are nonzero, Gaussian elimination gives g=u^- d u^+. The negative-unipotent coefficient operators on v span L. To see this, let W be their span and let ℓ annihilate W. Then ℓ(gv)=0 on that open set because u^+v=v and dv is a scalar multiple ofv. A polynomial matrix coefficient vanishing there vanishes identically by the same polynomial-identity argument, so ℓ annihilates the coefficient orbit ofv under allGL_N. That orbit spansL by simplicity. Hence W=L.

Positive coefficient operators detect every nonzero vector x of weight μ−γ. If they all had zero highest coefficient onx, the Gaussian factorization would imply that the highest coefficient of gx was zero on the same open set: negative operators cannot raise a weight to μ, and no weight exceeds μ. The resulting polynomial identity would make that coefficient zero on the whole simple-module orbit ofx, which spansL and containsv, a contradiction. Thus some positive coefficient operator of weightγ raisesx to a nonzero multiple ofv.

For γ=α(r,s), every simple-root coefficient is1. In a product expansion of a unipotent matrix, any monomial of total root weightγ therefore has each root-variable exponent0or1, and its roots are pairwise disjoint intervals covering[r,s]. They are exactly cut partitions of that interval. Put
 f_{a,b}=E_{b+1,a}, e_i=E_{i,i+1},
 Y_{r,s}(U)=f_{r,u1−1}f_{u1,u2−1}…f_{uk,s},
for U={u1<…<uk}⊂(r,s], with Y(∅)=f_{r,s}. These words span the required negative coefficient space. Similarly the positive coefficient space is spanned by words using each e_r,…,e_s once. Root-matrix commutators expand every longer positive root into such simple words. Permutations of these simple letters are identified using e_i e_j=e_j e_i for|i−j|>1; their relative orders on adjacent pairs determine the canonical representative
 Q_{r,s}(I)=e_{i_k}…e_{i_1} · Π_{j∈[r,s]\I}^{increasing}e_j,
 I={i1<…<ik}⊂(r,s].
Every word is carried to this representative by exchanging adjacent incomparable letters in the corresponding path partial order. Hence these Q words span all positive tests at the interval weight. There are no divided powers greater than1 or factorial denominators in this grade.

The actions and all commutator calculations below use [E_ab,E_cd]=δ_bcE_ad−δ_daE_cb, e_i v=0, and (E_ii−E_{i+1,i+1})v=a_iv. They are integral matrix identities and apply to the actual Schur module. The construction descends from K toF because the resulting matrices have entries inF and scalar extension preserves all ranks and linear relations.

## 2. Explicit integral lowering polynomials

For M,U⊂(r,s], define ζ_{r,s}(M,U) recursively. For M=∅,
 ζ(∅,U)=Π_{j∈(r,s]\U} C(r,j).
For M≠∅ let m=minM and M'=M\{m}. If m∉U, put
 ζ(M,U)=ζ(M',U)/C(r,m).
If m∈U, put
 ζ(M,U)=[ζ(M',U)−ζ_{r,m−1}(∅,U∩(r,m)) ζ_{m,s}(M',U∩(m,s])]/C(r,m).
Every division here is performed in the integer polynomial ring before specialization. It is exact. To prove this, induct on|M|, keeping the stronger statement that ζ(M,U)=ζ_{r,m−1}(∅,U∩(r,m))P(C(r,m)), where P is an integer polynomial in the remaining differences independent ofr and ofU∩(r,m). At the next smallest cut, use C(r,j)=C(r,m)+C(m,j). If m∉U, the numerator contains the explicit factor C(r,m). If m∈U, the two terms are respectively evaluations P(C+D) and P(D), multiplied by the same left factor, with C=C(r,m); their difference is divisible byC, since
 (C+D)^h−D^h=CΣ_{a=1}^h binom(h,a)C^{a−1}D^{h−a}.
This gives the stronger factorization at the next step. The base case is the displayed product. Thus all coefficients are integer polynomials even when their displayed denominators vanish modulop.

Define
 T_{r,s}(M)=Σ_U ζ_{r,s}(M,U)Y_{r,s}(U).
The coefficient recursion is equivalently the exact negative-word recursion
 C(r,m)T_{r,s}(M)=T_{r,s}(M')−T_{r,m−1}(∅)T_{m,s}(M').          (T)
This follows by separating cut words according to whether the cutm occurs. Products of adjacent interval words concatenate with the boundary cut present; this is exactly the cut-word product in the numerator.

The following splitting identity is integral:
 T_{r,i−1}(E)T_{i,s}(F)
 =T_{r,s}(E∪F)−T_{r,s}((E\{e})∪{i}∪F)−C(e,i)T_{r,s}(E∪{i}∪F),    (P)
where E⊂(r,i), F⊂(i,s], e=maxE. If E=∅ omit the middle term and set e=r. For E=∅ this is (T) rearranged at cuti. For nonemptyE, remove its smallestm, insert (T) on the left and apply the induction to the two shorter products. Use C(r,i)=C(r,m)+C(m,i). The terms containing the extra cutm cancel in pairs, and the remaining numerator is
 C(r,m)[T(E∪F)−T((E\{e})∪{i}∪F)−C(e,i)T(E∪{i}∪F)].
Exact divisibility already proved permits cancellation in the integer polynomial ring; reduction toF is made only afterwards. This proves(P) by induction, including the singletonE case.

Order subsets by their largest differing element, with the subset containing that element larger. Complements reverse this order. The transition fromT(M) toY(U) is unit triangular:
 T_{r,s}(M)=Y_{r,s}((r,s]\M)+Σ_{U<(r,s]\M} c_UY_{r,s}(U).         (U)
Here is an explicit induction. First (T), descending onj, gives
 T_{r,s}([j,s])=Σ_{U⊂(r,j)}(Π_{d∈(r,j)\U}C(r,d))Y_{r,s}(U).
For j=s+1 this is the defining empty-M product; to pass toj subtract T_{r,j−1}(∅)T_{j,s}([j+1,s]) in(T). The terms with cutj cancel, leaving the indicated sum divided by the common factorC(r,j). Atj=r+1 this gives T((r,s])=Y(∅). For any otherM choose i∉M, split M=E∪F aroundi, and rearrange(P). The product of the two shorter leadingY words is the cut word for the complement ofM, with coefficient1. The two other T terms have strictly largerM, hence strictly smaller complementary leading cuts. Induct on interval length and then downward onM. This proves(U). Therefore theT words span precisely the same interval negative coefficient space as theY words.

## 3. Positive action and the scalar product calculation

If J has consecutive components [β1,γ1],…,[βq,γq], matrix commutation and(T) give, for i<s,
 e_i T_{r,s}(J)v=0 unless i=β_a−1 for somea;
 e_{β_a−1}T_{r,s}(J)v
 =−T_{r,β_a−2}(J∩(r,β_a−1))
   T_{β_a,s}((β_a,γ_a]∪⋃_{b>a}[β_b,γ_b])v.                  (X)
Empty prefix operators are interpreted as1. The endpoint action, with h=maxJ, is
 e_sT(J)v=T_{r,s−1}(J\{h})v+B(h,s)T_{r,s−1}(J)v  if h<s;
 e_sT(J)v=T_{r,s−1}(J\{s})v                         if h=s;
 e_sT(∅)v=B(r,s)T_{r,s−1}(∅)v.                    (E)

These formulas follow directly as follows. In the empty-J expansion, groupY words by membership of i and i+1 in their cuts. The coefficient of each residual word cancels through
 −C(r,i+1)+C(r,i)+(a_i+1)=0
for i<s. At the endpoint the two contributions are C(r,s) and a_s, whose sum isB(r,s), giving(E). For generalJ, remove m=minJ in(T). For i<m−1 the empty-prefix cancellation is unchanged. At i=m−1, the first term has zero action; on the product term the empty-prefix endpoint coefficient is B(r,m−1)+1=C(r,m), since the later negative interval increases its adjacent Cartan value by1. This cancels the displayed denominator and gives the first component case of(X). For later component starts the positive operator commutes with the initial prefix, and applying the induction to both terms in(T) is exactly the same(T) recursion for the shorter first factor in(X). All other internal indices give two zero terms. Applying the endpoint induction to(T) gives(E); in the singleton case its numerator is
 B(r,s)T_{r,s−1}(∅)−B(m,s)T_{r,m−1}(∅)T_{m,s−1}(∅),
and B(r,s)−B(m,s)=C(r,m) yields(E) by(T). The general case cancels in the same way after deleting the maximal cut. All identities were derived integrally before reduction, so no denominator is cancelled inF.

Set Ξ_{r,s}(J) by
 e_r e_{r+1}…e_s T_{r,s}(J)v=Ξ_{r,s}(J)v.
The endpoint calculation and(T) give
 Ξ(∅)=Π_{a=r}^sB(r,a),
 Ξ(J)=[Ξ(J\{m})−Ξ_{r,m−1}(∅)Ξ_{m,s}(J\{m})]/C(r,m), m=minJ.     (C)
Again this is an integer polynomial: it is the actual integral highest coefficient of a matrix-word action, or follows by the same difference-divisibility induction asζ. The product in the empty case is essential; the historical printed sum in1995Definition2.9 is not used.

If J has a bounded zero-B matching d:J→[r,s], with imageD, then
 Ξ_{r,s}(J) ≡ Π_{a∈[r,s]\D}B(r,a)  (modp).                     (M)
There is a polynomial proof preventing invalid modular cancellation. The stronger identity, for m=minJ (and m=s+1 when J=∅), is
 Ξ_{r,s}(J)=Π_{t∈[r,s]\D}B(r,t)
   +[Π_{t=r}^{m−1}B(r,t)] Σ_{j∈J}B(j,d(j))P_j(C(r,m)),
where each P_j has integer-polynomial coefficients independent of r. The empty case is the defining product. Remove the smallest m, put x=C(r,m), b_t=B(m,t), v=d(m), and D'=D\{v}. The two induction formulas for J\{m}, starting respectively at r and m, have exactly the same P_j. Their left factors differ by replacing each b_t with x+b_t. Substitute them into(C), factoring A=Π_{t=r}^{m−1}B(r,t). The principal numerator is
 Π_{t∈[m,s]\D'}(x+b_t)−Π_{t∈[m,s]\D'}b_t
 =x Π_{t∈[m,s]\D}(x+b_t)
   +b_v[Π_{t∈[m,s]\D}(x+b_t)−Π_{t∈[m,s]\D}b_t].
The bracket on the second line is divisible by x in the integer polynomial ring. Every old error term is likewise a difference R(x)−R(0), divided by x, because its prefactor and P_j undergo the same translation. Thus after the exact division the first term is the required product with D removed, the second is an integer-polynomial multiple of the new matched generator b_v=B(m,d(m)), and the remaining terms are multiples of the old matched generators. For complete control of the universal cancellation, replace the variable a_r by the formal coordinate x=C(r,m), since m>r and its coefficient in C(r,m) is1. Thus the integer polynomial ring is Z[x,remaining a]. Every matched generator B(j,d(j)) has j≥m and is independent of x. Its quotient is therefore a polynomial ring in x over the remaining coefficient quotient, so multiplication by x is injective even if that coefficient quotient has torsion or zero divisors. The exact paired divisions retain the matched ideal before specialization; no cancellation in a characteristic-p coefficient field occurs. This proves the stronger identity, hence(M), without any division modulo p.

## 4. Exact vanishing criterion for oneT vector

T_{r,s}(J)v=0 if and only if there is an endpoint u∈(r,s+1]\J and a bounded zero-B matching
 {r}∪(J∩(r,u))→[r,u).                                      (Z)
Write J as above and set β_{q+1}=s+2. Every possible witness can be enlarged within its gap tou=β_a−1 for somea∈[1,q+1], without changing its matched left set. Thus(Z) is equivalent to one of the following finite conditions π(a): the earlier components ⋃_{b<a}[β_b,γ_b] have a bounded zero-B matching into[r,β_a−2], and there is an unused zero-B target for the additional left pointr.

Induct on interval length. The single-root case is f_rv=0 iff a_r=0 modulop, by e_rf_rv=a_rv and positive detection, exactly(Z). Suppose π(a) holds. For each component-start action in(X), if its indexb<a, the tail has the shorter witness obtained from the existing matching by taking its start β_b as the extra left point; if b≥a, the prefix has the earlier witnessπ(a). Thus each such product is zero by the induction. All other e_i with i<s annihilate by(X). If a≤q, the endpoint witness is≤β_q−1. Both shorter terms in(E) retain it after the last cutγ_q is deleted, so they are zero by induction. If a=q+1, allJ has a regular matchingD and its unused zero-B targetr gives Ξ(J)=0 by(M). Since e_iT(J)v=0 for i<s, any positive simple-word test of the full interval is either zero immediately or is forced to act in the order s,s−1,…,r: a smaller out-of-order first letter commutes past all the already acted larger letters and killsT(J)v. Its only possible surviving value is thereforeΞ(J), which is zero. Positive detection from Section1 gives T(J)v=0.

Conversely suppose T(J)v=0 but noπ(a) holds. Its earlier prefix in each(X) is nonzero by induction; otherwise the shorter witness would already give one of the forbiddenπ(a). Separated prefix and tail operators in(X) commute, and their product onv is nonzero whenever both factors are nonzero: choose positive tests raising the two separate factors to nonzero multiples ofv, commute them across the opposite negative factor, and their product raises the product to the nonzero product scalar. Thus each tail in(X) must be zero.

Work backwards through the components. For the last component, its zero tail gives a bounded zero-B matching of all [β_q,γ_q] into[β_q,s]. In general the zero tail beginningβ_b gives a matching of components b,…,a−1 into[β_b,β_a−2] for somea>b. All later components a,…,q already have a regular matching by the backward induction, using targets≥β_a. These two target ranges are disjoint, so their union matches all components b,…,q. Thus allJ is regular. But T(J)v=0 implies Ξ(J)=0, and(M) then supplies an unused targeta with B(r,a)=0. Matchr to that target to obtainπ(q+1), a contradiction. This proves(Z).

It follows immediately that J is nonessential iff T_{i,s}(J∩(i,s])v=0 for some i∈[r,s]\J: its witness is precisely the t=i witness in the essential predicate.

## 5. Spanning by essential vectors

If J is nonessential and T(J)v≠0, choose i∈(r,s]\J with T_{i,s}(J∩(i,s])v=0 by(Z); i=r would have made T(J)v=0 already. Put E=J∩(r,i), F=J∩(i,s], e=maxE if nonempty. The splitting identity(P) gives
 T(J)v=T((E\{e})∪{i}∪F)v+C(e,i)T(J∪{i})v,
with the first term omitted if E=∅ and e=r. Both new subsets are strictly larger thanJ. Repeating terminates because there are finitely many subsets; each nonessential vector is expressed through larger essential ones or zero. Combining with(U) and Section1 shows that essentialT vectors span the root weight space. If there are no essential sets, the result is the zero space; no division is involved in this straightening.

## 6. Explicit raising pivots

For I=[b1,c1]∪…∪[bH,cH] and J=[β1,γ1]∪…∪[βq,γq], write I≪J when each block ofI is a prefix of a block ofJ: b_a=β_{u_a}, c_a≤γ_{u_a}. Put
 Δ0=⋃_{b<u1}J_b,
 Δa=(J_{u_a}\I_a)∪⋃_{u_a<b<u_{a+1}}J_b,
 ΔH=(J_{u_H}\I_H)∪⋃_{b>u_H}J_b.
Call I linked toJ if everyΔa admits a bounded zero-B matching to targets≤b_{a+1}−2, with b_{H+1}=s+2. IfH=0 this means allJ is regularly matched to(r,s]. Define Jhat as the least linkedI in the subset order; it exists sinceI=J is linked.

Let h(I,J) be the highest coefficient Q(I)T(J)v=h(I,J)v. The action formulas give
 h(I,J)=0 unless I≪J,
 h(I,J)=±Ξ_{r,b1−2}(Δ0) Π_{a=1}^{H−1}Ξ_{c_a,b_{a+1}−2}(Δa) Ξ_{c_H,s}(ΔH) if I≪J.     (H)
ForH=0 useh(∅,J)=Ξ_{r,s}(J). The signs are the explicit signs from the occurrences of(X), hence±1 and irrelevant to zero/nonzero tests.

To verify(H), factor the positive word exactly as
 Q(I)=Q_{r,b1−2}(∅) Q_{b1,b2−2}((b1,c1])…Q_{bH,s}((bH,cH])
       e_{b1−1}e_{b2−1}…e_{bH−1}.
This is just the canonicalQ word reordered by commutations of letters at distance>1. Apply the rightmost displayed gap letters using(X). A start b_a not among theβ's gives zero immediately. When starts align, each gap action separates the negative factors into intervals with that simple root removed, so they commute with the other interval's positive factors. The sign contributed is(−1)^H.

The remaining one-block calculation is completely explicit. For K⊂(b,d] and b≤c≤d,
 Q_{b,d}((b,c])T_{b,d}(K)v
 = (−1)^{c−b} Ξ_{c,d}(K∩(c,d])v
if(b,c]⊂K, and is zero otherwise. Indeed Q=e_c e_{c−1}…e_{b+1} e_b e_{c+1}…e_d. Move e_b past e_{c+1},…,e_d, which commute with it when c>b. If b+1 is a cut, (X) gives e_bT_{b,d}(K)v=−T_{b+1,d}(K\{b+1})v; repeat for b+1,…,c−1. Each letter commutes with the still unacted end letters, and each application deletes exactly one initial cut and contributes−1. The last remaining word is e_c e_{c+1}…e_d on that tail, exactlyΞ_{c,d}. If the first missing initial cut is k+1, (X) says e_k annihilates the current tail, so the result is zero. The case c=b is the definition ofΞ.

Apply this one-block formula to the separated factors. It forces c_a≤γ_{u_a}; its remaining cut set is exactlyΔa, while the initial factor has cut setΔ0. This proves(H), with the explicit sign(−1)^{H+Σ_a(c_a−b_a)}. Empty intervals contribute1. This proof uses only(X), the definition ofQ and commuting separated roots, and no source lemma as a premise.

For linkedI, apply(M) to every factor in(H). Thus its value is, up to sign, the product of B(r,d) on the unmatched initial target interval and B(c_a,d) on the unmatched later target intervals. This gives the following pivot assertions.

First, if T(J)v≠0, then h(Jhat,J)≠0. A zero factor in the initial interval would match the extra left pointr to that unused target, together with itsΔ0 matching, yielding(Z). A zero factor at endpointc_a would let one remove that endpoint fromJhat and match its newly released left point to the unused zero target. The old matchings remain disjoint; if that endpoint was a singleton block, merge the two adjacent target intervals, whose old ranges were disjoint. This produces a smaller linked subset, contradicting minimality ofJhat.

Second, h(I,J)=0 whenever I>Jhat. Otherwise(H) gives I⊂J. Let i=max(I\Jhat). The two sets agree abovei. It must be the endpoint of itsI block: ifi+1 were in that same block and inJhat, it would start aJhat block at i+1, hence also aJ block by≪, contradicting i∈J. The next block start is common to both sets. The link matching forJhat therefore matches {i} together with the correspondingΔ block ofI into the target interval up to that next start minus2. Apply(M) to theΞ factor startingati. The unused target ofi is a zero factor in its residual product, so that factor andh(I,J) are zero.

Third, essentialJ have distinctJhat. Suppose J>K are essential with the samehat, and let t=max(J\K). Their tails above t agree, and t∉hat. Locate t inside theΔ block between two consecutivehat components. The link matching for that block restricts to a bounded zero-B matching on {t}∪(K∩(t,u)) into[t,u), whereu is one less than the next common block start (or s+1 at the end). Indeed the J component containingt ends before that next start; all entries between t andu inK are the common tails ofJ. The lower bound follows from boundedness of the matching, and the upper bound is exactly the link target bound. Botht andu lie outsideK. This makesK nonessential, a contradiction.

## 7. The essential basis and every field

In a putative nontrivial relation among essentialT vectors, chooseM whoseJhat is largest among the nonzero coefficients. ApplyQ(Mhat). A term with a smallerhat is killed by the second pivot assertion, and a term with a largerhat has coefficientzero by choice. Distinctness ofhats leaves only theM term, with nonzero coefficienth(Mhat,M) by the first assertion and essentiality through(Z). This contradicts the relation. Thus essential vectors are independent; Section5 supplied spanning. The exact dimension is therefore ε_a(r,s)=#essential subsets.

All entries of theT/Q matrices are reduced integer polynomials in thea_i. The construction overF(t) hence gives the same rank and basis overF: a relation overF would remain one overF(t), and the equality of finite Gram ranks on extension rules out a missing dimension. Empty root weight spaces and all modular zeros were retained. The proof works for arbitrary dominant polynomial weights and all intervals, including the shifted lower weights needed by first-level character inversion. It does not assert semisimplicity of the Schur or symmetric-group algebra.

## Construction boundary

This packet supplies the explicit modular essential-subset basis, rather than just a finite Gram algorithm or bibliographic theorem label. The separate PartI constructor supplies the complete uniform ε/ν recurrence. The final count construction must bind and combine both exact proof carriers before a complete target proposal or active helper origin is registered. No native-ready decision is issued by this research packet, and the parent owns its mathematical acceptance and all consumers.
