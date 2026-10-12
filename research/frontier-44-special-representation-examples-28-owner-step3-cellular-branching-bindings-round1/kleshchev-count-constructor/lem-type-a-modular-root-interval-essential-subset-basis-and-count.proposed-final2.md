---
id: lem-type-a-modular-root-interval-essential-subset-basis-and-count
kind: lemma
title: "An integral essential-subset basis and count for type-A root intervals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-type-a-q-schur-algebra-and-weyl-modules, def-cellular-algebra-basis-and-cell-module, thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 12
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, Branching rules for modular representations of symmetric groups, II, J. reine angew. Math. 459 (1995), 163-212; integer lowering coefficients, positive actions, zero criterion and raising pivots in sections 1-3; locally reconstructed below"
      url: "https://gdz.sub.uni-goettingen.de/id/PPN243919689_0459"
    - title: "Alexander Kleshchev, On decomposition numbers and branching coefficients for symmetric and special linear groups, Proc. London Math. Soc. (3) 75 (1997), 497-558; essential subsets, Corollary 5.8(ii), Theorems 8.6 and 9.3; locally reconstructed below"
      url: "https://darkwing.uoregon.edu/~klesh/BrIV.ps"
---

## Statement

Let $F$ have characteristic $p>0$, let $N\ge2$, and let $\mu=(\mu_1\ge\cdots\ge\mu_N\ge0)$ be a polynomial highest weight. Let $L_N(\mu)$ be the nonzero Schur Weyl-cell simple at $q=1$, regarded as a left module by star, with its canonical highest vector $v$. Put $a_i=\mu_i-\mu_{i+1}$. For every $1\le r\le s<N$, define $B(i,j)=j-i+\sum_{t=i}^j a_t$ and $C(i,j)=j-i+\sum_{t=i}^{j-1}a_t$, reduced modulo $p$ for zero tests. A matching is an injection $d$ with $x\le d(x)$; it need not preserve order between different sources. Call $J\subseteq(r,s]$ essential when no $t<u$ outside $J$ in $[r,s+1]$ admits a zero-$B$ matching $\{t\}\cup(J\cap(t,u))\to[t,u)$. Write $\varepsilon_a(r,s)$ for the number of essential sets.

The vectors $T_{r,s}(J)v$ constructed by the explicit integral coefficient recursion in the proof, indexed by essential $J$, form a basis of $L_N(\mu)_{\mu-\alpha_r-\cdots-\alpha_s}$. In particular this weight-space dimension is $\varepsilon_a(r,s)$, including dimension zero. The construction has integer-polynomial coefficients, and its positive-word pivots remain valid in every field of characteristic $p$.

Define a root $x$ to be normal in $[x,y]$ when $a_x\ne0$ and its demands $m>x$ with $B(x,m)=0$ admit an injection $z$ satisfying $x<z(m)\le m$ and $B(z(m),m)=0$. If $r$ is not normal set $\nu_a(r,s)=0$; otherwise let it be the number of $x\in[r,s]$ normal in $[x,s]$ with $C(r,x)=0$. Set $\varepsilon'_a(r,t)=\varepsilon_{a+\omega_t}(r,t)$, where only coordinate $t$ is increased by one. Then, as ordinary integers,
$$\varepsilon_a(r,s)=\nu_a(r,s)+\sum_{u=r+1}^s\varepsilon'_a(r,u-1)\nu_a(u,s).$$
No restrictedness condition is imposed on $\mu$ or on the shifted auxiliary highest weights.

## Facts & Assumptions

**Given:** $F,N,\mu,r,s$ as in the statement, with the finite integer root intervals and modulo-$p$ zero tests just defined.

[F1] The actual Schur algebra is the endomorphism algebra of the sum of permutation modules and has its dominance cellular semistandard basis and Weyl cell modules, with canonical diagonal tableau element the projection onto its permutation summand ([[def-type-a-q-schur-algebra-and-weyl-modules]]). We use this basis and its cell-product definition, not a characteristic-zero highest-weight realization.

[F2] The cell rank-one multiplication implies that a nonzero form quotient is simple, remains simple on scalar extension, and that the nonzero cell quotients cover all simple modules ([[def-cellular-algebra-basis-and-cell-module]], [[thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra]]). The local argument below proves the needed highest-vector, polynomial-matrix and weight-spanning properties explicitly.

## Proof

**Proof technique:** direct.

1.1 Extend only to K=F(t). This field is infinite, and extension preserves the rank of every finite Gram matrix. A nonzero Schur cell-form quotient stays simple after this extension: in any field a vector outside its radical generates the entire cell module by the cellular rank-one action, and the same argument applies to the extended nonzero Gram form. No algebraic closure or infinite-choice step is required. [F1, F2, construct]

2.1 Atq=1, identify ⊕_ν M^ν with the tensorword basis of (K^N)^{⊗m}, m=|μ|, by sending a distinguished permutation coset to the word with the corresponding ordered multiplicities. The symmetric group permutes the tensor positions. An endomorphism commuting with this permutation action has matrix coefficients constant on its orbits on pairs of words. Such orbits are indexed by nonnegative integer matrices A=(A_ab) with ΣA_ab=m, recording the number of positions with inputb and outputa. Let E_A be the matrix with entry1 on that orbit and0 elsewhere. The E_A have disjoint support and form a basis of the endomorphism algebra. For a matrix g,  g^{⊗m}=Σ_A (Π_ab g_ab^{A_ab})E_A. The transpose involution sends E_A to E_{A^T}; it is precisely the q=1 Schur star (the corresponding semistandard Hom maps are transposes under the orthonormal tensorword/permutation forms). [step 1.1, construct]

3.1 Invertible-matrix evaluations span this Schur algebra over K. Indeed a linear functional annihilating all g^{⊗m} gives a polynomial P(g)=Σ_A c_A g^A vanishing whenever detg≠0. Then P·det vanishes at every matrix over K. An elementary induction on the number of variables shows that a polynomial over an infinite field vanishing everywhere is zero: regard it as a polynomial in the last variable and use infinitely many values, then apply the induction to its coefficients. Thus P·det=0 as a polynomial, and the polynomial domain gives P=0, so all c_A vanish. Finite-dimensional duality proves the spanning claim. Consequently the star-converted Schur simple is a simple rational left GL_N-module, with the same submodules and composition multiplicities as the right Schur module. [step 2.1, construct]

4.1 The canonical semistandard tableau has weight μ and Schur form value1. Indeed its diagonal Schur basis element is the projection onto the permutation summand M^μ: the defining Hom map is the identity there and zero on the other summands. Its square is itself, so the defining cell-product coefficient, which is the canonical tableau norm, is1. This argument uses the canonical diagonal projection only, not an idempotence assertion for all diagonal tableau elements. Every semistandard tableau weight ν is dominated by μ: for each k, all entries≤k occur in the firstk rows by column strictness, so there are at most μ1+…+μk of them. The unique tableau of weight μ is the canonical one. Thus L has highest weight μ with one-dimensional highest space Kv, and its positive upper unipotent group fixes v: any nonconstant positive-root coefficient would have weight strictly above μ. Torus weights are integer characters, distinct as Laurent monomials over K; no Lie-eigenvalue congruence substitutes for weight equality. [step 3.1, construct]

5.1 On the open set where leading principal minors are nonzero, Gaussian elimination gives g=u^- d u^+. The negative-unipotent coefficient operators on v span L. To see this, let W be their span and let ℓ annihilate W. Then ℓ(gv)=0 on that open set because u^+v=v and dv is a scalar multiple ofv. A polynomial matrix coefficient vanishing there vanishes identically by the same polynomial-identity argument, so ℓ annihilates the coefficient orbit ofv under allGL_N. That orbit spansL by simplicity. Hence W=L. [step 4.1, construct]

6.1 Positive coefficient operators detect every nonzero vector x of weight μ−γ. If they all had zero highest coefficient onx, the Gaussian factorization would imply that the highest coefficient of gx was zero on the same open set: negative operators cannot raise a weight to μ, and no weight exceeds μ. The resulting polynomial identity would make that coefficient zero on the whole simple-module orbit ofx, which spansL and containsv, a contradiction. Thus some positive coefficient operator of weightγ raisesx to a nonzero multiple ofv. [step 5.1, construct]

7.1 For γ=α(r,s), every simple-root coefficient is1. In a product expansion of a unipotent matrix, any monomial of total root weightγ therefore has each root-variable exponent0or1, and its roots are pairwise disjoint intervals covering[r,s]. They are exactly cut partitions of that interval. Put  f_{a,b}=E_{b+1,a}, e_i=E_{i,i+1},  Y_{r,s}(U)=f_{r,u1−1}f_{u1,u2−1}…f_{uk,s}, for U={u1<…<uk}⊂(r,s], with Y(∅)=f_{r,s}. These words span the required negative coefficient space. Similarly the positive coefficient space is spanned by words using each e_r,…,e_s once. Root-matrix commutators expand every longer positive root into such simple words. Permutations of these simple letters are identified using e_i e_j=e_j e_i for|i−j|>1; their relative orders on adjacent pairs determine the canonical representative  Q_{r,s}(I)=e_{i_k}…e_{i_1} · Π_{j∈[r,s]\I}^{increasing}e_j,  I={i1<…<ik}⊂(r,s]. Every word is carried to this representative by exchanging adjacent incomparable letters in the corresponding path partial order. Hence these Q words span all positive tests at the interval weight. There are no divided powers greater than1 or factorial denominators in this grade. [step 6.1, construct]

8.1 The actions and all commutator calculations below use [E_ab,E_cd]=δ_bcE_ad−δ_daE_cb, e_i v=0, and (E_ii−E_{i+1,i+1})v=a_iv. They are integral matrix identities and apply to the actual Schur module. The construction descends from K toF because the resulting matrices have entries inF and scalar extension preserves all ranks and linear relations. [step 7.1, construct]

9.1 For M,U⊂(r,s], define ζ_{r,s}(M,U) recursively. For M=∅,  ζ(∅,U)=Π_{j∈(r,s]\U} C(r,j). For M≠∅ let m=minM and M'=M\{m}. If m∉U, put  ζ(M,U)=ζ(M',U)/C(r,m). If m∈U, put  ζ(M,U)=[ζ(M',U)−ζ_{r,m−1}(∅,U∩(r,m)) ζ_{m,s}(M',U∩(m,s])]/C(r,m). Every division here is performed in the integer polynomial ring before specialization. It is exact. To prove this, induct on|M|, keeping the stronger statement that ζ(M,U)=ζ_{r,m−1}(∅,U∩(r,m))P(C(r,m)), where P is an integer polynomial in the remaining differences independent ofr and ofU∩(r,m). At the next smallest cut, use C(r,j)=C(r,m)+C(m,j). If m∉U, the numerator contains the explicit factor C(r,m). If m∈U, the two terms are respectively evaluations P(C+D) and P(D), multiplied by the same left factor, with C=C(r,m); their difference is divisible byC, since  (C+D)^h−D^h=CΣ_{a=1}^h binom(h,a)C^{a−1}D^{h−a}. This gives the stronger factorization at the next step. The base case is the displayed product. Thus all coefficients are integer polynomials even when their displayed denominators vanish modulop. [step 8.1, construct]

10.1 Define  T_{r,s}(M)=Σ_U ζ_{r,s}(M,U)Y_{r,s}(U). The coefficient recursion is equivalently the exact negative-word recursion  C(r,m)T_{r,s}(M)=T_{r,s}(M')−T_{r,m−1}(∅)T_{m,s}(M').          (T) This follows by separating cut words according to whether the cutm occurs. In particular products of adjacent interval words concatenate when the boundary cut is present, and their commutator contributes the missing long-root word when it is absent. [step 9.1, construct]

11.1 The following splitting identity is integral:  T_{r,i−1}(E)T_{i,s}(F)  =T_{r,s}(E∪F)−T_{r,s}((E\{e})∪{i}∪F)−C(e,i)T_{r,s}(E∪{i}∪F),    (P) where E⊂(r,i), F⊂(i,s], e=maxE. If E=∅ omit the middle term and set e=r. For E=∅ this is (T) rearranged at cuti. For nonemptyE, remove its smallestm, insert (T) on the left and apply the induction to the two shorter products. Use C(r,i)=C(r,m)+C(m,i). The terms containing the extra cutm cancel in pairs, and the remaining numerator is  C(r,m)[T(E∪F)−T((E\{e})∪{i}∪F)−C(e,i)T(E∪{i}∪F)]. Exact divisibility already proved permits cancellation in the integer polynomial ring; reduction toF is made only afterwards. This proves(P) by induction, including the singletonE case. [step 10.1, construct]

12.1 Order subsets by their largest differing element, with the subset containing that element larger. Complements reverse this order. The transition fromT(M) toY(U) is unit triangular:  T_{r,s}(M)=Y_{r,s}((r,s]\M)+Σ_{U<(r,s]\M} c_UY_{r,s}(U).         (U) Here is an explicit induction. First (T), descending onj, gives  T_{r,s}([j,s])=Σ_{U⊂(r,j)}(Π_{d∈(r,j)\U}C(r,d))Y_{r,s}(U). For j=s+1 this is the defining empty-M product; to pass toj subtract T_{r,j−1}(∅)T_{j,s}([j+1,s]) in(T). The terms with cutj cancel, leaving the indicated sum divided by the common factorC(r,j). Atj=r+1 this gives T((r,s])=Y(∅). For any otherM choose i∉M, split M=E∪F aroundi, and rearrange(P). The product of the two shorter leadingY words is the cut word for the complement ofM, with coefficient1. The two other T terms have strictly largerM, hence strictly smaller complementary leading cuts. Induct on interval length and then downward onM. This proves(U). Therefore theT words span precisely the same interval negative coefficient space as theY words. [step 11.1, construct]

13.1 If J has consecutive components [β1,γ1],…,[βq,γq], matrix commutation and(T) give, for i<s,  e_i T_{r,s}(J)v=0 unless i=β_a−1 for somea;  e_{β_a−1}T_{r,s}(J)v  =−T_{r,β_a−2}(J∩(r,β_a−1))    T_{β_a,s}((β_a,γ_a]∪⋃_{b>a}[β_b,γ_b])v.                  (X) Empty prefix operators are interpreted as1. The endpoint action, with h=maxJ, is  e_sT(J)v=T_{r,s−1}(J\{h})v+B(h,s)T_{r,s−1}(J)v  if h<s;  e_sT(J)v=T_{r,s−1}(J\{s})v                         if h=s;  e_sT(∅)v=B(r,s)T_{r,s−1}(∅)v.                    (E) [step 12.1, construct]

14.1 These formulas follow directly as follows. In the empty-J expansion, groupY words by membership of i and i+1 in their cuts. The coefficient of each residual word cancels through  −C(r,i+1)+C(r,i)+(a_i+1)=0 for i<s. At the endpoint the two contributions are C(r,s) and a_s, whose sum isB(r,s), giving(E). For generalJ, remove m=minJ in(T). For i<m−1 the empty-prefix cancellation is unchanged. At i=m−1, the first term has zero action; on the product term the empty-prefix endpoint coefficient is B(r,m−1)+1=C(r,m), since the later negative interval increases its adjacent Cartan value by1. This cancels the displayed denominator and gives the first component case of(X). For later component starts the positive operator commutes with the initial prefix, and applying the induction to both terms in(T) is exactly the same(T) recursion for the shorter first factor in(X). All other internal indices give two zero terms. Applying the endpoint induction to(T) gives(E); in the singleton case its numerator is  B(r,s)T_{r,s−1}(∅)−B(m,s)T_{r,m−1}(∅)T_{m,s−1}(∅), and B(r,s)−B(m,s)=C(r,m) yields(E) by(T). The general case cancels in the same way after deleting the maximal cut. All identities were derived integrally before reduction, so no denominator is cancelled inF. [step 13.1, construct]

15.1 Set Ξ_{r,s}(J) by  e_r e_{r+1}…e_s T_{r,s}(J)v=Ξ_{r,s}(J)v. The endpoint calculation and(T) give  Ξ(∅)=Π_{a=r}^sB(r,a),  Ξ(J)=[Ξ(J\{m})−Ξ_{r,m−1}(∅)Ξ_{m,s}(J\{m})]/C(r,m), m=minJ.     (C) Again this is an integer polynomial: it is the actual integral highest coefficient of a matrix-word action, or follows by the same difference-divisibility induction asζ. The product in the empty case is essential; the historical printed sum in1995Definition2.9 is not used. [step 14.1, construct]

16.1 If J has a bounded zero-B matching d:J→[r,s], with imageD, then  Ξ_{r,s}(J) ≡ Π_{a∈[r,s]\D}B(r,a)  (modp).                     (M) There is a polynomial proof preventing invalid modular cancellation. The stronger identity, for m=minJ (and m=s+1 when J=∅), is  Ξ_{r,s}(J)=Π_{t∈[r,s]\D}B(r,t)    +[Π_{t=r}^{m−1}B(r,t)] Σ_{j∈J}B(j,d(j))P_j(C(r,m)), where each P_j has integer-polynomial coefficients independent of r. The empty case is the defining product. Remove the smallest m, put x=C(r,m), b_t=B(m,t), v=d(m), and D'=D\{v}. The two induction formulas for J\{m}, starting respectively at r and m, have exactly the same P_j. Their left factors differ by replacing each b_t with x+b_t. Substitute them into(C), factoring A=Π_{t=r}^{m−1}B(r,t). The principal numerator is  Π_{t∈[m,s]\D'}(x+b_t)−Π_{t∈[m,s]\D'}b_t  =x Π_{t∈[m,s]\D}(x+b_t)    +b_v[Π_{t∈[m,s]\D}(x+b_t)−Π_{t∈[m,s]\D}b_t]. The bracket on the second line is divisible by x in the integer polynomial ring. Every old error term is likewise a difference R(x)−R(0), divided by x, because its prefactor and P_j undergo the same translation. Thus after the exact division the first term is the required product with D removed, the second is an integer-polynomial multiple of the new matched generator b_v=B(m,d(m)), and the remaining terms are multiples of the old matched generators. This proves the stronger identity, hence(M), without any division modulo p. [step 15.1, construct]

17.1 T_{r,s}(J)v=0 if and only if there is an endpoint u∈(r,s+1]\J and a bounded zero-B matching  {r}∪(J∩(r,u))→[r,u).                                      (Z) Write J as above and set β_{q+1}=s+2. Every possible witness can be enlarged within its gap tou=β_a−1 for somea∈[1,q+1], without changing its matched left set. Thus(Z) is equivalent to one of the following finite conditions π(a): the earlier components ⋃_{b<a}[β_b,γ_b] have a bounded zero-B matching into[r,β_a−2], and there is an unused zero-B target for the additional left pointr. [step 16.1, construct]

18.1 Induct on interval length. The single-root case is f_rv=0 iff a_r=0 modulop, by e_rf_rv=a_rv and positive detection, exactly(Z). Suppose π(a) holds. For each component-start action in(X), if its indexb<a, the tail has the shorter witness obtained from the existing matching by taking its start β_b as the extra left point; if b≥a, the prefix has the earlier witnessπ(a). Thus each such product is zero by the induction. All other e_i with i<s annihilate by(X). If a≤q, the endpoint witness is≤β_q−1. Both shorter terms in(E) retain it after the last cutγ_q is deleted, so they are zero by induction. If a=q+1, allJ has a regular matchingD and its unused zero-B targetr gives Ξ(J)=0 by(M). Since e_iT(J)v=0 for i<s, any positive simple-word test of the full interval is either zero immediately or is forced to act in the order s,s−1,…,r: a smaller out-of-order first letter commutes past all the already acted larger letters and killsT(J)v. Its only possible surviving value is thereforeΞ(J), which is zero. Positive detection from the modular foundation already proved gives T(J)v=0. [step 17.1, construct]

19.1 Conversely suppose T(J)v=0 but noπ(a) holds. Its earlier prefix in each(X) is nonzero by induction; otherwise the shorter witness would already give one of the forbiddenπ(a). Separated prefix and tail operators in(X) commute, and their product onv is nonzero whenever both factors are nonzero: choose positive tests raising the two separate factors to nonzero multiples ofv, commute them across the opposite negative factor, and their product raises the product to the nonzero product scalar. Thus each tail in(X) must be zero. [step 18.1, construct]

20.1 Work backwards through the components. For the last component, its zero tail gives a bounded zero-B matching of all [β_q,γ_q] into[β_q,s]. In general the zero tail beginningβ_b gives a matching of components b,…,a−1 into[β_b,β_a−2] for somea>b. All later components a,…,q already have a regular matching by the backward induction, using targets≥β_a. These two target ranges are disjoint, so their union matches all components b,…,q. Thus allJ is regular. But T(J)v=0 implies Ξ(J)=0, and(M) then supplies an unused targeta with B(r,a)=0. Matchr to that target to obtainπ(q+1), a contradiction. This proves(Z). [step 19.1, construct]

21.1 It follows immediately that J is nonessential iff T_{i,s}(J∩(i,s])v=0 for some i∈[r,s]\J: its witness is precisely the t=i witness in the essential predicate. [step 20.1, construct]

22.1 If J is nonessential and T(J)v≠0, choose i∈(r,s]\J with T_{i,s}(J∩(i,s])v=0 by(Z); i=r would have made T(J)v=0 already. Put E=J∩(r,i), F=J∩(i,s], e=maxE if nonempty. The splitting identity(P) gives  T(J)v=T((E\{e})∪{i}∪F)v+C(e,i)T(J∪{i})v, with the first term omitted if E=∅ and e=r. Both new subsets are strictly larger thanJ. Repeating terminates because there are finitely many subsets; each nonessential vector is expressed through larger essential ones or zero. Combining with(U) and the modular foundation already proved shows that essentialT vectors span the root weight space. If there are no essential sets, the result is the zero space; no division is involved in this straightening. [step 21.1, construct]

23.1 For I=[b1,c1]∪…∪[bH,cH] and J=[β1,γ1]∪…∪[βq,γq], write I≪J when each block ofI is a prefix of a block ofJ: b_a=β_{u_a}, c_a≤γ_{u_a}. Put  Δ0=⋃_{b<u1}J_b,  Δa=(J_{u_a}\I_a)∪⋃_{u_a<b<u_{a+1}}J_b,  ΔH=(J_{u_H}\I_H)∪⋃_{b>u_H}J_b. Call I linked toJ if everyΔa admits a bounded zero-B matching to targets≤b_{a+1}−2, with b_{H+1}=s+2. IfH=0 this means allJ is regularly matched to(r,s]. Define Jhat as the least linkedI in the subset order; it exists sinceI=J is linked. [step 22.1, construct]

24.1 Let h(I,J) be the highest coefficient Q(I)T(J)v=h(I,J)v. The action formulas give  h(I,J)=0 unless I≪J,  h(I,J)=±Ξ_{r,b1−2}(Δ0) Π_{a=1}^{H−1}Ξ_{c_a,b_{a+1}−2}(Δa) Ξ_{c_H,s}(ΔH) if I≪J.     (H) ForH=0 useh(∅,J)=Ξ_{r,s}(J). The signs are the explicit signs from the occurrences of(X), hence±1 and irrelevant to zero/nonzero tests. [step 23.1, construct]

25.1 To verify(H), factor the positive word exactly as  Q(I)=Q_{r,b1−2}(∅) Q_{b1,b2−2}((b1,c1])…Q_{bH,s}((bH,cH])        e_{b1−1}e_{b2−1}…e_{bH−1}. This is just the canonicalQ word reordered by commutations of letters at distance>1. Apply the rightmost displayed gap letters using(X). A start b_a not among theβ's gives zero immediately. When starts align, each gap action separates the negative factors into intervals with that simple root removed, so they commute with the other interval's positive factors. The sign contributed is(−1)^H. [step 24.1, construct]

26.1 The remaining one-block calculation is completely explicit. For K⊂(b,d] and b≤c≤d,  Q_{b,d}((b,c])T_{b,d}(K)v  = (−1)^{c−b} Ξ_{c,d}(K∩(c,d])v if(b,c]⊂K, and is zero otherwise. Indeed Q=e_c e_{c−1}…e_{b+1} e_b e_{c+1}…e_d. Move e_b past e_{c+1},…,e_d, which commute with it when c>b. If b+1 is a cut, (X) gives e_bT_{b,d}(K)v=−T_{b+1,d}(K\{b+1})v; repeat for b+1,…,c−1. Each letter commutes with the still unacted end letters, and each application deletes exactly one initial cut and contributes−1. The last remaining word is e_c e_{c+1}…e_d on that tail, exactlyΞ_{c,d}. If the first missing initial cut is k+1, (X) says e_k annihilates the current tail, so the result is zero. The case c=b is the definition ofΞ. [step 25.1, construct]

27.1 Apply this one-block formula to the separated factors. It forces c_a≤γ_{u_a}; its remaining cut set is exactlyΔa, while the initial factor has cut setΔ0. This proves(H), with the explicit sign(−1)^{H+Σ_a(c_a−b_a)}. Empty intervals contribute1. This proof uses only(X), the definition ofQ and commuting separated roots, and no source lemma as a premise. [step 26.1, construct]

28.1 For linkedI, apply(M) to every factor in(H). Thus its value is, up to sign, the product of B(r,d) on the unmatched initial target interval and B(c_a,d) on the unmatched later target intervals. This gives the following pivot assertions. [step 27.1, construct]

29.1 First, if T(J)v≠0, then h(Jhat,J)≠0. A zero factor in the initial interval would match the extra left pointr to that unused target, together with itsΔ0 matching, yielding(Z). A zero factor at endpointc_a would let one remove that endpoint fromJhat and match its newly released left point to the unused zero target. The old matchings remain disjoint; if that endpoint was a singleton block, merge the two adjacent target intervals, whose old ranges were disjoint. This produces a smaller linked subset, contradicting minimality ofJhat. [step 28.1, construct]

30.1 Second, h(I,J)=0 whenever I>Jhat. Otherwise(H) gives I⊂J. Let i=max(I\Jhat). The two sets agree abovei. It must be the endpoint of itsI block: ifi+1 were in that same block and inJhat, it would start aJhat block at i+1, hence also aJ block by≪, contradicting i∈J. The next block start is common to both sets. The link matching forJhat therefore matches {i} together with the correspondingΔ block ofI into the target interval up to that next start minus2. Apply(M) to theΞ factor startingati. The unused target ofi is a zero factor in its residual product, so that factor andh(I,J) are zero. [step 29.1, construct]

31.1 Third, essentialJ have distinctJhat. Suppose J>K are essential with the samehat, and let t=max(J\K). Their tails above t agree, and t∉hat. Locate t inside theΔ block between two consecutivehat components. The link matching for that block restricts to a bounded zero-B matching on {t}∪(K∩(t,u)) into[t,u), whereu is one less than the next common block start (or s+1 at the end). Indeed the J component containingt ends before that next start; all entries between t andu inK are the common tails ofJ. The lower bound follows from boundedness of the matching, and the upper bound is exactly the link target bound. Botht andu lie outsideK. This makesK nonessential, a contradiction. [step 30.1, construct]

32.1 In a putative nontrivial relation among essentialT vectors, chooseM whoseJhat is largest among the nonzero coefficients. ApplyQ(Mhat). A term with a smallerhat is killed by the second pivot assertion, and a term with a largerhat has coefficientzero by choice. Distinctness ofhats leaves only theM term, with nonzero coefficienth(Mhat,M) by the first assertion and essentiality through(Z). This contradicts the relation. Thus essential vectors are independent; the essential straightening already proved supplied spanning. The exact dimension is therefore ε_a(r,s)=#essential subsets. [step 31.1, construct]

33.1 All entries of theT/Q matrices are reduced integer polynomials in thea_i. The construction overF(t) hence gives the same rank and basis overF: a relation overF would remain one overF(t), and the equality of finite Gram ranks on extension rules out a missing dimension. Empty root weight spaces and all modular zeros were retained. The proof works for arbitrary dominant polynomial weights and all intervals, including the shifted lower weights needed by first-level character inversion. It does not assert semisimplicity of the Schur or symmetric-group algebra. [step 32.1, construct]

34.1 Fix a prime p, a rank l≥1, and arbitrary nonnegative fundamental-weight coordinates Λ=(λ1,…,λl). No p-restricted or p-small coordinate assumption is imposed. All B,C,λ zero/nonzero tests below are in F_p; all cardinalities are ordinary nonnegative integers. For 1≤a≤b≤l define [step 33.1, construct]

35.1 `B(a,b)=b−a+Σ_{k=a}^b λ_k`, `C(a,b)=b−a+Σ_{k=a}^{b−1}λ_k`. [step 34.1, construct]

36.1 The identities used throughout are `B(a,b)=C(a,b)+λ_b` and, for a≤x≤b, `B(a,b)=C(a,x)+B(x,b)` and `C(a,b)=C(a,x)+C(x,b)`. [step 35.1, construct]

37.1 For integers r≤s, `(r,s]={r+1,…,s}`. An injection f:M→N is **weakly increasing** here when f(j)≥j for every j; it need NOT preserve the order of different source elements. Weakly decreasing means f(j)≤j. This agrees with Definition1.12 and is important for the augmenting paths below. [step 36.1, construct]

38.1 A subset J⊂(r,s] is **nonessential** if there are t<u in `[r,s+1]\J` and an injection [step 37.1, construct]

39.1 `d:{t}∪(J∩(t,u))→[t,u)` with d(x)≥x and B(x,d(x))=0 for every source x. [step 38.1, construct]

40.1 Otherwise J is essential. Write E(r,s) for this family and ε(r,s)=|E(r,s)|. A subset J⊂(r,s] is **regular** if it has an injection `f:J→(r,s]` with f(j)≥j and B(j,f(j))=0. The empty subset is regular. [step 39.1, construct]

41.1 An index a is **normal in [a,b]** if λ_a≠0 and its demand set `M={m∈(a,b]:B(a,m)=0}` has a compensation injection `z:M→(a,b]` with z(m)≤m and B(z(m),m)=0. Define σ(a,b) as its indicator. Also set σ(a,a−1)=1. The root normality depends only on [a,b]; an ambient earlier endpoint does not change it. [step 40.1, construct]

42.1 If r is not normal, put N(r,s)=∅. If r is normal, set [step 41.1, construct]

43.1 `N(r,s)={a∈[r,s]: a is normal in [a,s] and C(r,a)=0}`, `ν(r,s)=|N(r,s)|`. [step 42.1, construct]

44.1 The primed functions refer to the last-interval-coordinate shift: [step 43.1, construct]

45.1 `ε′_Λ(r,s)=ε_{Λ+ω_s}(r,s)`, `ν′_Λ(r,s)=ν_{Λ+ω_s}(r,s)`. [step 44.1, construct]

46.1 Only λ_s is increased by1. An interval ending before s sees no effect of that shift. All shifted weights remain dominant. [step 45.1, construct]

47.1 The desired count recurrence, for every1≤r≤s≤l, is [step 46.1, construct]

48.1 `ε_Λ(r,s)=ν_Λ(r,s)+Σ_{u=r+1}^s ν_Λ(u,s) ε′_Λ(r,u−1)`.  (T) [step 47.1, construct]

49.1 In particular r=i,s=l gives the parent's exact first-level count formula with the final fundamental coordinate shifted at u−1, not at l or at the first coordinate. [step 48.1, construct]

50.1 Order subsets colexicographically: at the largest element of their symmetric difference, the subset containing that element is larger. The regular family is finite and nonempty, so it has a unique maximum P. [step 49.1, construct]

51.1 **Claim:** an essential regular subset exists iff r is normal; if it exists it is exactly P. [step 50.1, construct]

52.1 First let J be regular and essential, with matching f. If λ_r=0, add the source r with f(r)=r; this is disjoint from f(J), whose images are>r. It is a forbidden witness with endpoints r,s+1. Hence λ_r≠0. Let R={m∈(r,s]:B(r,m)=0}. Every m∈R must belong to f(J), since an unused m could be assigned to the extra source r and would again give a forbidden witness. For each m∈R choose j=f^{-1}(m). Then j≤m and `C(r,j)=B(r,m)−B(j,m)=0`; hence j compensates m. These j are distinct, proving r is normal. Moreover, if I>J were another regular subset, let t be the largest element in I\J at the highest difference. The subsets agree above t. Restrict a regular matching of I to `{t}∪(J∩(t,s])`; its targets lie in[t,s+1) and are distinct. Since t∉J, this is a forbidden witness for J. Thus J=P. [step 51.1, construct]

53.1 Conversely assume r normal and let J=P with a regular matching f. Suppose a forbidden witness d has endpoints t<u. If t>r, the subset `I={t}∪(J∩(t,s])` is regular: use d on its sources below u and use f on J≥u. Their targets are respectively<u and≥u, so are disjoint. Since t∉J and all larger elements are retained, I>J, a contradiction. [step 52.1, construct]

54.1 It remains to treat t=r. Put J0=J∩(r,u), δ=d|J0, and m0=d(r). The target m0 is not in δ(J0), and m0>r since λ_r≠0. Let R0={m∈(r,u):B(r,m)=0}. Normality gives a compensation injection z on R0; its targets satisfy r<z(m)≤m<u and C(r,z(m))=0. Begin at the unused target m0. If z(m0)∉J0, add that new source and assign it m0. Otherwise set j1=z(m0), reassign j1 to m0, and release m1=δ(j1). Then `B(r,m1)=C(r,j1)+B(j1,m1)=0`, so m1∈R0. Continue: use compensation z(m1), reassign it to m1 if it lies in J0, and release its old δ-target. All targets and compensation sources along this path are distinct: δ and z are injective, and a cycle would force the initially unused m0 to be a δ-image. Finiteness therefore ends at a source z(mq)∉J0. Every reassignment has B=0 and respects the lower-bound constraint z(m)≤m. Keep δ on untouched J0 and f on J≥u; those latter targets are≥u and disjoint. This constructs a regular matching for J together with one new source in(r,u), contradicting maximality. Thus J is essential. [step 53.1, construct]

55.1 This proves the claim, including uniqueness, without assuming a source theorem or using a representation-theoretic count. [step 54.1, construct]

56.1 Two elementary consequences of the witness definition will be used. [step 55.1, construct]

57.1 **Truncation.** If M is essential in(r,s] and q∈(r,s]\M, then M∩(r,q−1] is essential in(r,q−1]. Any forbidden witness for the truncated interval has endpoints≤q, also outside M, and is a witness in the original interval. [step 56.1, construct]

58.1 **Concatenation.** If P is essential in(r,v−2] and J essential in(v,s], then `P∪{v}∪J` is essential in(r,s]. A forbidden witness wholly to the left or right gives the corresponding forbidden witness. A witness crossing v contains v as a source; restrict it to `{v}∪(J∩(v,u))`. Since all such sources and their targets are≥v, this is a forbidden witness for J. The virtual case v=r+1 uses P=∅ and the same restriction argument. [step 57.1, construct]

59.1 Let M be essential. If it is regular it is the unique P(r,s) of the regular-essential matching argument already proved, and σ(r,s)=1. Otherwise let v be the largest element of M satisfying [step 58.1, construct]

60.1 `v−1∉M` and `M∩(r,v−2] is regular in(r,v−2]`. [step 59.1, construct]

61.1 Such v exists: take min M, with empty prefix. The prefix is essential by truncation at q=v−1, hence equals the unique P(r,v−2); in particular σ(r,v−2)=1 (or the virtual value1). [step 60.1, construct]

62.1 We show J=M∩(v,s] is essential. If it had a witness t<u with t>v, that is already a forbidden witness for M. If t=v, the witness matches M∩(v,u) into(v,u); combine it with the regular prefix matching, whose images are≤v−2. Because v−1∉M, this makes M∩(r,u) regular in(r,u−1]. If u=s+1 or there is no element of M above u, it makes M regular, contrary to assumption. Otherwise let q=min(M∩(u,s]); then q≥u+1, q−1∉M, and that same matching makes M∩(r,q−2] regular. This contradicts maximality of v. Thus J is essential, and [step 61.1, construct]

63.1 `M=P(r,v−2)∪{v}∪J`. [step 62.1, construct]

64.1 The decomposition is unique. Indeed, in a concatenated set with essential tail J, no larger m>v can meet the same two prefix conditions: a regular matching for its prefix, restricted to `{v}∪(J∩(v,m−1))`, would be a forbidden witness for J with endpoints v,m−1. The regular essential case cannot equal a concatenated case, because a regular matching of the whole set restricted to `{v}∪J` would make J nonessential with endpoints v,s+1. [step 63.1, construct]

65.1 Iterating this unique decomposition gives a bijection between essential subsets and **σ-cut paths** Q={q1<…<qf}⊂(r,s] satisfying [step 64.1, construct]

66.1 `σ(r,q1−2)σ(q1,q2−2)…σ(q_{f−1},qf−2)σ(qf,s)=1`. [step 65.1, construct]

67.1 For f=0 the condition is σ(r,s)=1. The inverse recursively inserts the unique regular essential prefix P and the cut point, so this is a genuine bijection, not merely equal cardinalities. In particular ε(r,s) counts these paths. [step 66.1, construct]

68.1 For a fixed r, B(z,m)=B(r,m)−C(r,z). For a demand m with B(r,m)=0, its eligible compensation positions are exactly z∈(r,m] with C(r,z)=0. This is a prefix/Ferrers matching problem. A compensation injection exists iff at every cutoff x the number of demands≤x does not exceed the number of eligible compensation positions≤x: necessity follows by counting distinct targets; sufficiency follows by pairing increasing demands with increasing available eligible positions. This is a complete greedy matching proof. [step 67.1, construct]

69.1 If λ_r≠0, initialize a stack with r. Scan m=r+1,…,s. When λ_m≠0, push m if C(r,m)=0, pop the last push if B(r,m)=0, and otherwise do nothing. These push/pop cases are disjoint, since B−C=λ_m. When λ_m=0 and B=C=0, the position supplies and consumes its own compensation slot, so it changes neither the matching inequality nor the stack; all other zero-coordinate positions are likewise neutral. Kill the root walk permanently if its initial push r is popped. The prefix matching inequalities prove that r is normal exactly when the walk is not killed. [step 68.1, construct]

70.1 When it is not killed, its final stack is exactly N(r,s). A pushed position a has C(r,a)=0 and λ_a≠0. For every m≥a the B,C identities give B(a,m)=B(r,m) and C(a,m)=C(r,m). Thus a is normal precisely when no suffix after it has excess pops over pushes, equivalently when its push survives the last-in-first-out matching. This proves the claimed exact stack interpretation of ν and N. For a killed root, N is empty by definition. The same proof applies verbatim to every shifted weight. [step 69.1, construct]

71.1 We record two consequences of the stack, with proofs exposing the endpoint shift. [step 70.1, construct]

72.1 **Bridge lemma.** Suppose x<y, σ(x,y−2)=1 and ν′(x,y−1)=0. If y is normal in[y,s], then [step 71.1, construct]

73.1 `N(x,s)={x} ⊔ N(y,s)`, [step 72.1, construct]

74.1 and x precedes all indices of N(y,s). [step 73.1, construct]

75.1 For y=x+1, ν′(x,x)=0 means λ_x+1=0; hence λ_x=−1≠0 and C(x,y)=1+λ_x=0. This proves the claim by the stack identities. For y≥x+2, the unshifted walk is alive through y−2. Shifting only λ_{y−1} cannot affect its earlier steps. To make ν′=0 at its final step, the shifted walk must pop its last surviving root: its prior stack therefore has height1 and [step 74.1, construct]

76.1 `B(x,y−1)+1=C(x,y)=0`, with λ_{y−1}+1≠0. [step 75.1, construct]

77.1 In the original walk B(x,y−1)=−1≠0. Also C(x,y−1)=−1−λ_{y−1}≠0 by the last nonzero condition. Thus the original y−1 step is neutral, and the stack before y consists only of x. Since C(x,y)=0 and y is normal, y is a nonzero-coordinate push; for every later position the walks based at x and y have identical events. The stack is consequently {x} followed by N(y,s), as claimed. This argument works in p=2 as well, since−1 is always nonzero. [step 76.1, construct]

78.1 **Consecutive-normal lemma.** In a nonempty N(r,s) let a<b be consecutive final stack entries. Then σ(a,b−2)=1 and ν′(a,b−1)=0. First normality of a gives prefix normality and hence σ=1. Both final entries satisfy C(r,a)=C(r,b)=0, so C(a,b)=0. Before b is pushed, the stack based at a has exactly its initial entry: any additional unmatched push earlier than b would survive whenever b survives (last-in-first-out pops cannot remove it before removing b), and would be an intervening final normal entry. The step b−1 is neutral in the original walk. Indeed B(a,b−1)=−1; if C(a,b−1)=0, then λ_{b−1}=−1, and b−1 would be such an intervening surviving push. Therefore λ_{b−1}+1≠0. Increasing λ_{b−1} by1 creates exactly one final pop of the height-one stack, proving ν′=0. The adjacent case is λ_a+1=C(a,b)=0, giving ν′(a,a)=0 directly. [step 77.1, construct]

79.1 These conclusions also apply to normal sets under a shift at some final endpoint s: when a<b≤s, their bridge intervals end before s, so their B,C constants are unchanged by the outer shift. The λ_b term is absent from C(a,b), which is why this remains true even when b=s. [step 78.1, construct]

80.1 For a σ-cut path M={m1<…<mh}, put m0=r. Retain exactly the cut points m_w for which [step 79.1, construct]

81.1 `ν′(m_{w−1},m_w−1)>0`. [step 80.1, construct]

82.1 Call the retained set Q={q1<…<qf}. Partition M into blocks between retained cuts. Every internal removed cut has prime-zero bridge; the next retained cut has prime-positive boundary. Repeated application of the bridge lemma, in the weight shifted at the next retained boundary endpoint, shows that the removed cuts in this block are precisely an initial segment of [step 81.1, construct]

83.1 `N′(q_v,q_{v+1}−1)` (excluding its first entry q_v), [step 82.1, construct]

84.1 where q0=r. The final block is similarly an initial segment of N(qf,s), excluding qf. All these normal sets are nonempty, because the retained boundary has positive ν′ and the last σ condition makes the final root normal. [step 83.1, construct]

85.1 More explicitly, the block containing a removed-cut chain x=a0<a1<…<at before a retained endpoint y has σ(a_j,a_{j+1}−2)=1 and prime-zero between consecutive removed cuts, while ν′(at,y−1)>0. The last root at is normal for the weight shifted at y−1. Repeated bridge identities therefore make a0,…,at the first t+1 entries of N′(x,y−1). This proves the asserted initial-segment property and determines t uniquely. The final block uses the same argument with unshifted N. [step 84.1, construct]

86.1 Conversely, for any Q={q1<…<qf} choose integers [step 85.1, construct]

87.1 `1≤a_v≤ν′(q_v,q_{v+1}−1)` for v=0,…,f−1, and `1≤a_f≤ν(qf,s)`. [step 86.1, construct]

88.1 For every segment insert the first a_v−1 normal indices after its initial index, and include every retained cut q1,…,qf. The consecutive-normal lemma proves each new bridge has the required σ condition and prime-zero value. Normality of the last inserted index proves σ up to the next retained boundary and a positive ν′ there; the final index is normal in its tail. Thus the result is a σ-cut path. Its retention operation returns exactly Q, and the initial-segment lengths return the chosen a_v. The two constructions are inverse. [step 87.1, construct]

89.1 Hence there is an explicit bijection from σ-cut paths onto the disjoint union, over all Q⊂(r,s], of sets of size [step 88.1, construct]

90.1 `ν′(r,q1−1)ν′(q1,q2−1)…ν′(q_{f−1},qf−1)ν(qf,s)`, [step 89.1, construct]

91.1 with size ν(r,s) when Q=∅. Together with the essential/path bijection already proved this proves that ε equals this weighted-cut sum. Grouping its nonempty cuts by their first point gives the complete local recurrence [step 90.1, construct]

92.1 `ε(r,s)=ν(r,s)+Σ_{u=r+1}^s ν′(r,u−1) ε(u,s)`.  (A) [step 91.1, construct]

93.1 This is the source5.6(iv) seam established by finite injections/bijections, not by an essential-basis or branching citation. [step 92.1, construct]

94.1 Fix s and consider indices1,…,s. Let A be the strictly upper triangular integer matrix [step 93.1, construct]

95.1 `A[r,u]=ν′_Λ(r,u−1)` for r<u, [step 94.1, construct]

96.1 and B the strictly upper triangular matrix [step 95.1, construct]

97.1 `B[r,u]=ε′_Λ(r,u−1)` for r<u. [step 96.1, construct]

98.1 Apply(A) to the interval[r,u−1] in the dominant weight Λ+ω_{u−1}. Its first primed factor on[r,v−1], v<u, does not see the outer endpoint shift, so it is ν′_Λ(r,v−1). The tail is ε′_Λ(v,u−1). Therefore [step 97.1, construct]

99.1 `B=A+AB`. [step 98.1, construct]

100.1 Since A is strictly upper triangular, `I+B=I+A+…+A^{s−1}=(I−A)^{-1}`. Let E and N be column vectors with entries ε(r,s) and ν(r,s). Equation(A) is E=N+AE, so `N=(I−A)E`. Multiplying by I+B gives [step 99.1, construct]

101.1 `E=(I+B)N`. [step 100.1, construct]

102.1 Component r is precisely(T): [step 101.1, construct]

103.1 `ε_Λ(r,s)=ν_Λ(r,s)+Σ_{u=r+1}^s ε′_Λ(r,u−1)ν_Λ(u,s)`. [step 102.1, construct]

104.1 All entries are ordinary integers; only nilpotence and finite matrix multiplication are used. This is also the finite reverse-character-inversion arithmetic needed by the sibling construction. No division, characteristic-zero argument, or generic dimension count appears. [step 103.1, construct]

105.1 For r=s, essential subsets consist only of∅ and it is essential exactly when λ_r≠0; the normal set is then{r}. Both sides are0 or1 accordingly. All endpoint and zero-coordinate cases are therefore included. Nothing in the proof depends on the prime beyond working in a characteristic-p field for the zero tests and1≠0. The recurrence is uniform in arbitrary dominant coordinates and every root interval. [step 104.1, construct] ∎

## Remarks

This research proposal is a new necessary local supplier for the existing A-home22, within the same frontier and current K FINAL2 construction. It is not registered or accepted merely by this file. Its operators and basis were constructed by the pairing constructor; its pure finite matching recurrence was constructed by the separately authorized integral constructor. No native author provenance is borrowed. Authentic source reading and hashes are recorded in the adjacent final2 handoff. The 1995 printed sum in the empty Xi definition is corrected to the product forced by the explicit action; that misprint is not used. No full-book or full-article reading is claimed.
