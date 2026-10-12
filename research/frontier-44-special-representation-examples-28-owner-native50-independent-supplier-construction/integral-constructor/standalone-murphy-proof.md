# Standalone integral Murphy cellular basis and form

Same author/run/construction scope as `constructive-proof.md`. This is a research-only complete proof candidate for the formerly sketch-only NEW50 premise. Source actually read: Mathas manuscript PDF objects27–36, printed18–27, in `/tmp/b50/sources/mathas_raw_pages.json`; its printed21–25 Garnir/lex basis proof is reconstructed below. The dominance upgrade here is a new trace argument using the already proved local opposite-dominance double-coset zero, rather than importing Mathas Proposition3.16 or a source20 prototype.

## Required independent published/local premises

Published IDs whose actual statements were read:

- `def-generic-type-a-hecke-algebra` and `thm-standard-basis-of-the-generic-type-a-hecke-algebra`: standard basis, quadratic and braid relations, inversion length, multiplication rule. The standard-basis theorem is published; its current carrier has a judge stamp rather than a delegated audit. This is disclosed, not upgraded here.
- `def-young-tableau-standard-tableau-and-shape` and `def-partition-young-diagram-and-conjugate-partition`: partitions, row/standard tableaux, conjugation.
- `cor-sum-of-squares-of-standard-tableau-numbers`: Σλ(f^λ)^2=n! for every n≥0, including the empty shape. Published independent source is `thm-robinson-schensted-correspondence`, not source20.

Local elementary prerequisites proved here or in companion `constructive-proof.md`: row-permutation-module basis/action; sign automorphism θ; minimal parabolic and double-coset sorting; opposite-dominance zero xκHyρ=0 when κ is not dominated by ρ'. None uses the Murphy basis. Thus the proposed dependency graph has no cycle: double-coset zero → this Murphy lemma → DJ split basis → comparison/form theorems.

Use A=Z[q,q^{-1}], arbitrary specialization to R, n≥0, right modules, xα=Σw∈SαT_w for compositions α. For row-standard α-tableaux s,t set m_st^α=T_dα(s)^* xα T_dα(t). The involution star fixes generators and reverses products. For partitions, use lexicographic order temporarily; dominance replaces it in Section6. Empty and singleton shapes have x=1, one tableau, H=R and all claims below reduce to multiplication in R.

## 1. Row modules and elementary ordering facts

Sorting labels inside each row gives one representative dα(t) per right coset Sαd; inversion counting gives ell(ad)=ell(a)+ell(d) for a∈Sα. Pairing terms w and ws_i in xα gives xαT_i=qxα for every adjacent generator inside Sα. Thus b_t=xαT_dα(t) form a basis of xαH: each expands with disjoint standard-basis support Sαd, with coefficient1 at T_d. The right action is q b_t if i,i+1 lie in the same row, b_{ts_i} if the swapped tableau is row-standard and its length increases, and q b_{ts_i}+(q−1)b_t if length decreases. These assertions also follow immediately by row sorting and the standard Hecke multiplication rule. The left counterparts follow by star.

For row-standard tableaux define t≥u if every initial-label row composition of t dominates that of u. We need the following elementary support lemma: if v>g, d(t)=d(g)w and ell(d(t))=ell(d(g))+ell(w), then b_vT_w has support strictly more dominant than t. No Bruhat theorem is needed. Choose a reduced word for w; the successive tableaux starting at g and ending at t are row-standard. Indeed each length-increasing adjacent-label interchange adds one inverted pair of row-reading nodes and removes none; a within-row inversion could never disappear before the final tableau t, which has none. Thus each step is an increasing-length row-standard swap s→s'=s s_i, with i in an upper row a and i+1 in a lower row b>a; s' is less dominant than s.

For any r≥s, both row tabloids r and r s_i dominate s'. Only the label cutoff m=i needs checking. For row cutoffs k<a, use `count_{≤i}(r s_i;first k rows)≥count_{≤i−1}(r;first k rows)≥count_{≤i−1}(s;first k rows)=count_{≤i}(s';first k rows)`. For k≥b use `count_{≤i}(r s_i;first k rows)≥count_{≤i+1}(r;first k rows)−1≥count_{≤i+1}(s;first k rows)−1=count_{≤i}(s';first k rows)`. For a≤k<b use the first bound again, since s' contains neither label i at that cutoff and `count_{≤i}(s')=count_{≤i−1}(s)`. Unchanged cutoffs inherit the old dominance; row sorting changes none of these counts. The unswapped r already dominates s≥s'. If r>s, neither output tabloid can equal s': the unswapped source s' was below s and absent, and a swapped source equal to s' would have to be s's_i=s. Therefore each multiplication step takes support strictly above s to support strictly above s'. Induction along the reduced word proves the support lemma with strictness and all coefficients over A. This is a direct replacement for the Bruhat-based Mathas Corollary3.8.

## 2. Reordering composition shapes

If β is obtained by rearranging parts of α, choose the permutation d carrying whole α-row blocks, in their internal increasing order, to the corresponding β-row blocks. Both d and d^{-1} are distinguished representatives for these row groups. They conjugate Sβ to Sα, and inversion counting gives xαT_d=T_dxβ. Since each T_i is invertible, with inverse q^{-1}(T_i−(q−1)), T_d is invertible. Consequently xα=T_dxβT_d^{-1}. Expanding the two outside factors in the standard basis and using the row action and its star counterpart expresses every m_st^α as a linear combination of m_uv^β with u,v row-standard. No factorial is inverted. This supplies the composition-to-partition reduction used below.

## 3. Exact Garnir belt identity and tableau reduction

Fix a partition λ and a node (i,j) with j≤λ_{i+1}. Put a=t^λ(i,j), b=t^λ(i+1,j). Let α replace the two consecutive λ-parts λ_i,λ_{i+1} by `j−1, λ_i+1, λ_{i+1}−j`; remove zero parts. Thus its middle block is the interval a,…,b. Let g be the row-standard tableau equal to t^λ outside that interval, and put the interval's smallest j entries in the first j positions of row i+1 and its remaining entries in the last λ_i−j+1 positions of row i, each increasingly.

With D=Sα∩Dλ and E=Sλ∩Dα, the following identity is exact:

`xλ Σ_{d∈D}T_d = Σ_{v∈E}T_v^* xα`.  (G)

Indeed SλSα is the disjoint union of Sλd for d∈D and also the disjoint union of v^{-1}Sα for v∈E. The distinguished representatives make each product length additive; expand both sides into T_w and every element of this same product set occurs once. This proves (G) without a scalar.

Among the tableaux t^λd, d∈D, exactly one is nonstandard, namely g, and every other one strictly dominates g. To check standardness, only the column-j comparison between the two affected rows can fail: all entries left of j in the upper row are smaller than the belt, and all entries right of j in the lower row are larger. The comparison fails precisely when the lower prefix contains the j smallest belt entries, leaving every upper-tail entry larger; this is g. Other columns and other rows retain their initial inequalities. The rank description in Section1 shows that this choice of lower prefix minimizes the upper-row initial counts and hence is the least dominant belt tableau.

Let ν be the partition obtained by sorting α. Then ν>λ in lex order: the part λ_i+1 exceeds λ_i, while earlier parts are retained, and sorting can only place such an increase earlier. Rearranging (G) and applying Section2 to its right side gives

`xλT_d(g) = h − Σ_{v∈D, t^λv≠g}xλT_v`,

where h is a sum of row-standard Murphy terms of the larger partition ν. All same-shape terms are strictly more dominant than g, with coefficient−1. This is the precise integral Garnir identity.

For completeness, every nonstandard row-standard λ-tableau t factors as t=gw with ell(d(t))=ell(d(g))+ell(w), for an offending Garnir node. Choose a column violation t(i,j)>t(i+1,j). Row-increasing labels force **every** entry in the upper tail beginning at (i,j) to exceed every entry in the lower prefix ending at (i+1,j). Impose these forced inversions, in addition to the row-chain inequalities. The canonical smallest-inversion linear extension of these constraints is g: it places all earlier row blocks first, the first j−1 upper entries next, the lower prefix next, the upper tail next, and the remaining entries in row-reading order. Inversions of g are exactly the forced upper-tail/lower-prefix pairs, and they are present in t. Remove all other inversions by adjacent-label swaps of incomparable nodes: if such an inversion remains, take the first disagreement with the canonical order and move its next node left across the intervening nodes; they are incomparable, since all forced precedences already agree with that canonical order. Every interchange preserves the chosen violation and all row orders and decreases the inversion number by1. This reaches g. Reversing the chain gives the required length-additive w. This is a finite algorithm, not an existence appeal to the unavailable DJ proof.

## 4. Finite two-index straightening and lex cellularity

Descending induction on the finite lexicographic list of partitions and, within one shape, ascending dominance induction on row tableaux proves: every m_st^λ with s,t row-standard is a linear combination of standard m_uv^ν with either ν>λ, or ν=λ and u≥s,v≥t.

For a nonstandard right tableau t=gw, multiply the last identity of Section3 on the left by T_d(s)^* and on the right by T_w. Terms through h have partition ν>λ; arbitrary outside factors are reduced to row-standard indices by Section1, then the outer shape induction straightens them. Every same-shape belt term is more dominant than g, so Section1's support fact makes its product with T_w strictly more dominant than t. These terms terminate by the finite inner tableau induction. The left tableau is not changed in this same-shape operation. After the right index is standard, apply star and the identical argument to the left index. That does not change the already standard right index except in larger-shape terms, where the outer induction applies. The finite lex/dominance ordering strictly improves at each recursive call, proving termination. Section2 handles composition-shaped intermediates.

Since x_(1^n)=1, every T_w=m_{t^(1^n),t^(1^n)w}^{(1^n)}, so the standard Murphy family spans H. The independent published RSK count says its number is Σλ(f^λ)^2=n!. In the standard Hecke basis, its columns therefore form a square n!×n! matrix B over A. Spanning gives a right inverse by expressing each of the finitely many standard basis vectors in these columns. Hence det(B)det(B_rightinverse)=1, and B is invertible over A. This proves that the family is a basis over A and after every base change. No field dimension count is used.

Let J_lex^{>λ} be the span of Murphy shapes strictly lex greater than λ. The straightening above shows that HxνH involves only shapes≥lexν. Thus J_lex^{>λ}=Σν>λHxνH is a two-sided ideal. For standard t and arbitrary h, xλT_d(t)h, modulo this ideal, has only terms xλT_d(v) with v standard: right straightening retains the first index t^λ. Multiplying on the left by T_d(s)^* gives

`m_st h ≡ Σ_v r_tv(h)m_sv (mod J_lex^{>λ})`,

with coefficients independent of standard s. Star gives m_st^*=m_ts. This is the full lex cell law, proved before the dominance upgrade.

## 5. Unimodular trace and triangular mixed matrix

Define τ(T_w)=δ_{w,1}. The generator multiplication rule gives τ(T_wa)=τ(aT_w) when a is a generator; both equal q if w is that generator and0 otherwise. Moving letters of a generator word successively proves τ(ab)=τ(ba) for all a,b. Define B0(T_u,T_v)=δ_uv q^{ell(u)}. The two-dimensional ascent/descent action on each pair {w,ws_i} is self-adjoint for this diagonal form: its off-diagonal weighted entries agree because q^{ell(ws_i)}=q q^{ell(w)}. Hence right multiplication by every T_i is self-adjoint, and iteration gives B0(a,b)=τ(ab^*). In particular τ(T_uT_v^*)=δ_uvq^{ell(u)}. The trace form τ(ab) is therefore unimodular in the standard basis (star permutes that basis). This proof uses only units q^k.

θ(T_i)=(q−1)−T_i is an involutive automorphism commuting with star, checked directly on the quadratic/braid relations (or by θ(T_i)=−qT_i^{-1}). Pairing row sums gives θ(xρ)=q^{Nρ}yρ: θ(xρ) is a left/right −1 eigenvector of its parabolic, whose standard-basis coefficients are forced to be c(-q)^{-ell(w)}; its coefficient at the parabolic longest word is (-1)^{Nρ}, so c=q^{Nρ}. Equivalently apply θ to the inductive parabolic coset factorization; both methods give the same explicit unit. Thus {θ(m_ab^ρ)} is another A-basis.

Index columns of the full mixed matrix by ν=ρ', and let its entries be

`Q[(η,s,t),(ν,a,b)]=τ(m_st^η θ(m_ab^{ν'}))`.

The opposite-dominance zero proved independently in companion Section1 gives Q=0 unless η≤ν in dominance: its product contains xη H y_{ν'}, after a cyclic trace permutation if necessary. Order partition blocks lexicographically increasing. Dominance η≤ν implies η≤lexν, so Q is block upper triangular. Each diagonal block is square, because transpose bijects Std(ν) with Std(ν'), and both have (f^ν)^2 entries. The entire matrix Q is invertible: the trace pairing is unimodular and its row and column carriers are bases. Therefore its determinant, the product of diagonal block determinants, is a unit. Each diagonal block determinant is a unit over A (the product of the other determinants supplies its inverse up to the overall unit). Thus every diagonal block is a perfect pairing, also after every base change. This elementary full-basis argument does not use generic semisimplicity, a Murphy form determinant, or the later DJ comparison.

## 6. Dominance ideals and the fixed-first-index law

Fix κ and h∈HxκH. For any ν not dominating κ, τ(h θ(m_ab^{ν'}))=0 for all a,b: cyclically move the arbitrary factors until xκ is followed by an H factor and y_{ν'}, then use xκHy_{ν'}=0. Expand h in the lex Murphy basis, and inspect its partition coefficients in increasing lex order. Suppose ν does not dominate κ. Only coefficients of shapes η≤ν in dominance can contribute to the pairing against ν' by Section5. For η≠ν these have smaller lex order, and also do not dominate κ, since κ≤η≤ν would contradict κ not≤ν. Their coefficients have therefore already vanished in the induction. The perfect diagonal block at ν now forces all coefficients of shape ν to vanish. This proves that HxκH is contained in the span of Murphy shapes η≥κ in dominance.

Conversely every Murphy element of shape η belongs to HxηH by its definition. Consequently `I^{≥κ}=span{m_st^η:η≥κ}=Ση≥κHxηH` and `I^{>κ}=Ση>κHxηH` are two-sided ideals. In particular multiplication of m_st^λ involves only shapes η≥λ. Its same-shape terms and their fixed first-index coefficients are already fixed by the lex cell law from Section4, so replacing J_lex^{>λ} by I^{>λ} leaves the same equality:

`m_st h ≡ Σ_v r_tv(h)m_sv (mod I^{>λ})`.

Star fixes the basis by exchanging indices. These are exactly the cellular axioms for partitions ordered by dominance, with all coefficients in A and independent of the first index. This completes the standalone Murphy cellular basis proof over every R.

## 7. Cell modules and exact form

For a fixed first tableau s, the span of the cosets m_st+I^{>λ}, t∈Std(λ), is a free right submodule of I^{≥λ}/I^{>λ}; basis independence follows from the full Murphy basis. The fixed-first law identifies all such rows with one cell module C_M(λ), with basis c_t and action c_t h=Σ_v r_tv(h)c_v. Taking s=t^λ realizes it as `(xλ+I^{>λ})H`; in particular this is the cyclic realization used in the DJ proof. All ideals, quotients and actions have coordinate bases over A and commute with arbitrary base change, including nonflat changes.

Apply the fixed-first law to the right of m_st and its star counterpart to the left of m_uv. Their product modulo I^{>λ} lies simultaneously in the row indexed s and the column indexed v, whose intersection is the free line Rm_sv. Write

`m_st m_uv ≡ Gλ(c_t,c_u)m_sv (mod I^{>λ})`.

The scalar is independent of s,v: explicitly it is the coefficient of **the Murphy basis element xλ modulo I^{>λ}** in `xλT_d(t)T_d(u)^*xλ`, since m_st m_uv is obtained from this middle product by multiplying on the outside by T_d(s)^* and T_d(v). This is not the coefficient of xλ in the standard T_w basis (xλ is generally not a standard basis vector). Extend these coefficients bilinearly to Gλ. Star of the product exchanges t,u, proving symmetry. Associativity of three products, or comparison of the middle factors in `m_st h m_uv`, gives `Gλ(xh,y)=Gλ(x,yh^*)`. The multiplication congruence, not a generic scalar assertion, determines the form uniquely. Every coefficient lies in A and specializes verbatim. The form can be degenerate, even identically zero after specialization; no determinant or quantum factorial is inverted. At n=0,1 its unique basis vector has form1 and its only Murphy element is1.

## Integration status

This reconstructs the full local Murphy supplier and corrects the erroneous “standard-basis coefficient of xλ” form description. The parent owns independent mathematical acceptance, schema item extraction, exact source metadata and actual consumer applicability. No native record, attempt counter, READY label, published carrier, gate or engine state was changed.
