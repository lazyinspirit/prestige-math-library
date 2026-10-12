# Current Step3 weight-Gram construction and balanced hook correction

Run `frontier-44-special-representation-examples-28`; author `/root/repair_cell_head_classification/native50_integral_constructor`. This is the FIRST new Step3 binding pass, disjoint from the exhausted old20 repair and the concluded independent NEW50 construction. No canonical/native item, manifest, coverage, decision, gate or state writes. Actual observed preimages and raw hashes are in `input-guards.json`; native writers were live, so these are historical observations, not a stable certification.

Target: `thm-q-schur-weyl-weight-space-gram-determinant-hook-product`; dependent displayed formula in `thm-q-schaper-virtual-radical-layer-formula` and its beta-symbol supplier are included as necessary mathematics, while actual consumer closure remains parent-owned.

## Actual source reading and source defects

Verified complete79-page PDF SHA256 `8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0`, at `scratchpad/source-cache/symmetric-groups/modular-hecke-textbook/mathas-1999-ihaschur.pdf`. Actually read visually PDF52–63 / printed46–57 (including the full5.18/5.19 and5.22–5.27 arguments); additionally read the text layer of PDF64–66 / printed58–60 for the q-Schaper consequence for the missing norm derivation (5.3–5.18). PDF50–51 / printed44–45 were also viewed for their source boundary. No full-book reading is claimed. `mutool draw` generated the visual pages; the plain text extraction has badly encoded symbols and was not trusted for signs.

The source's displayed5.24/5.27 and subsequent prose are internally inconsistent. Its prose immediately before5.24 restricts indices by β_b<β_c+h, whereas the displayed product uses β_b>β_c−h and reverses the displacement. Source Example5.25 and Example5.28 give the actual intended answer. The local proof below resolves the signs mathematically, rather than citing the inconsistent display.

For λ=(3,2), β=(6,5,3,1,0), the pair (1,1),(1,2) has h11=4,h12=3. The correct hook exponent is dμ(9,2,3,1,0)=−|T0((1^5),μ)|, yielding the source's [4]/[3] exponent−. The source's balanced +h11/−h11 gives (10,1,3,1,0), a repeated-entry zero. The CURRENT authored uneven +h11/−h12 gives (10,2,3,1,0), whose recovered partition has size6, not5. Thus neither displayed carrier can be copied unchanged.

## Corrected exact interfaces

Fix a beta length L≥λ1 (L=n is sufficient). Set β_i=λ'_i+L−i. For arbitrary integer sequences a, let dμ(a)=sgn(w)|T0(ν,μ)| if sorting its distinct nonnegative entries gives the beta numbers of ν of size |μ|, and set it to0 otherwise. Semistandard tableaux use the weight alphabet1,…,d; in particular dμ=0 automatically if ν has more than d rows. The sorting permutation is only asserted unique in the distinct-entry case. In a fixed S(d,n) Grothendieck group, the symbol is additionally0 unless |ν|=n and ν has at most d rows.

The branching decrement is **a_i−1 when i∈C**, not the current supplier's constant−1. With z the last nonzero weight part, and μbar that part removed,

`dμ(a)=Σ_{|C|=z}dμbar(a−1_C)`.  (B)

The ordinary strictly decreasing case follows by deleting the largest entries from semistandard tableaux: these form a horizontal strip, hence occupy the feet of z different columns. Invalid deletions produce a repeated or negative beta sequence and contribute0. For arbitrary a, the two sides are alternating functions in its entries: exchanging two indices permutes the subsets C and changes every valid sorting sign. If a has equal entries, pair terms by that exchange; the subsets selecting both/neither have repeated entries and vanish, and the subsets selecting exactly one cancel. If a has a negative entry, every decremented sequence still has a negative entry and both sides vanish. Thus (B) follows from the strictly decreasing case by sorting. The base μ=0 is1 for the beta sequence (L−1,…,0), up to sorting sign, and0 otherwise. This is a finite combinatorial definition/identity, not an additional source assumption.

The corrected Gram formula is

`Gμλ=q^N ∏_{(a,b),(a,c)∈[λ], b<c} ([h_ab]_q/[h_ac]_q)^{Dμ(a;b,c)}`,

`Dμ(a;b,c)=dμ(β+h_ac e_b−h_ac e_c)`.

Both shifts use the SAME h_ac. Equivalently

`Dμ(a;b,c)=−dμ(β−h_ab e_b+h_ab e_c)`,

because h_ab−h_ac=β_b−β_c, so the two displaced entries exchange. Total beta sum is preserved, and every resulting symbol belongs to the same degree n. N=Σ_{T∈T0(λ,μ)}ell(d(last(T))) in the fixed standardization normalization.

All rational products are formed first over Q(q). The universal result is a Laurent polynomial, proved below from the integral Gram matrix; arbitrary specialization means evaluating that polynomial. It never means evaluating 0/0 fractions in R or asserting nonnegative valuations without proof.

## A. Seminormal norm construction: precise local inputs and proof

The q-Schur cellular semistandard basis, its actual weight projections eμ, and its evaluation realization `Wμλ≅Hom_H(Mμ,C_Mλ)` must be established locally. Only the summand projections eμ are idempotents; the current definition's assertion that **every** diagonal cellular element φTT is an orthogonal idempotent is false in a general cellular algebra and is not used. The Hecke input needed is the dominance-triangular JM action and normalized adjacent generator action on the Murphy cell module. These are the exact prerequisite interfaces, not merely the native worker's ready label. Relevant existing IDs are `thm-hecke-jucys-murphy-action-is-dominance-triangular`, `thm-separated-hecke-residues-give-seminormal-idempotents-and-bases`, and the parent's corrected q-Schur structure supplier. This packet does not silently accept their current sketch proofs.

The norm argument may enlarge the alphabet to D=max(d,n) so that the ω=(1^n) corner exists. This preserves the original d<n scope: the direct sum of permutation modules with weights supported in1,…,d is a literal summand of the D-alphabet permutation module. Its summand projection e gives `eS(D,n)e=End_H(M_d)=S(d,n)`. The semistandard basis elements whose two types are supported in that alphabet are the same homomorphisms in both algebras, with the same multiplication coefficients. A shape admitting such a semistandard tableau has at most d rows (its first column has distinct entries). Hence the Weyl weight basis and its form on the specified λ,μ are unchanged in this corner. Prove the norm in D≥n, then restrict these identical coefficients back to d. No hypothesis d≥n is added to the Gram theorem.

Work temporarily over K=Q(q). The Hecke Murphy basis m_t has a unitriangular orthogonal eigenbasis f_t for commuting self-adjoint JM elements L_k. This can be constructed by finite simultaneous triangular diagonalization: the joint content sequences are distinct (successive removable nodes have distinct contents); choose a linear combination of the finitely many L_k whose eigenvalues are distinct, by the first integer coefficient tuple avoiding the finitely many nonzero linear differences, and apply ordinary Lagrange projectors. Commutativity makes the eigenvectors simultaneous, and distinct eigenvalues of a self-adjoint element make them orthogonal. The triangular normalization is f_t=m_t+(more dominant terms). No field-specialization assumption is carried into the final integral theorem.

For a standard t, define Γ_t(i,j) to consist of the last node (k,l) in each earlier column l<j whose label is smaller than t(i,j). Let

`γ_t=∏_{(i,j)}∏_{(k,l)∈Γ_t(i,j)} [j−i+k−l+1]_q/[j−i+k−l]_q`.

At t=t^λ this telescopes row by row to [λ]_q!, while the cell multiplication xλ²=[λ]_q!xλ gives the same initial norm. If s is more dominant than t=s(i,i+1), the normalized Hecke action gives `f_t=f_s(T_i+α)`, with α=1/[content_s(i)−content_t(i)]_q. Adjointness, orthogonality, and T_i²=(q−1)T_i+q give

`(f_t,f_t)=(q+α)(1−α)(f_s,f_s)`.

The tableau product changes only at the two swapped nodes: exchanging them adds one predecessor corner and removes the other, giving

`γ_t=q^{-1}(q+α)(1−α)γ_s`.

Indeed the two changed ratios are `[ρ+1]_q[ρ−1]_q/[ρ]_q²`, where ρ is their content difference; using `[ρ+1]=1+q[ρ]` and `[ρ−1]=q^{-1}([ρ]−1)` proves the displayed relation. Standard tableaux are reached from t^λ by adjacent swaps of incomparable Young-poset nodes, increasing inversion length, so induction gives `(f_t,f_t)=q^{ell(d(t))}γ_t`.

For semistandard T, define Γ_T(i,j) analogously, with labels strictly smaller than T(i,j), and let γ_T be the same product over those predecessor corners. Define P_t^μ(i,j) to consist of earlier-column nodes with the same T-entry and with smaller standard label in t. Put π_t equal to the product of the same axial ratios over P_t^μ. For t=last(T), partitioning the predecessor set into strictly smaller T-entries and equal T-entries gives `γ_t=π_t γ_T` exactly.

The block sums L_k^μ of the Hecke JM elements commute with xμ and act on the semistandard basis with leading eigenvalue `Σ_{T(i,j)=k}[j−i]_q`: evaluate the basis homomorphism on xμ, use its expansion `m_T=m_last(T)+(more dominant standard terms of the same type)` and the Hecke triangular action. This yields a triangular action with the same semistandard leading coefficient. The joint block eigenvalues separate semistandard tableaux over K: multiplying their differences by q−1 identifies the content multisets of every initial-label subshape; those multisets determine a partition (the positive and negative diagonal multiplicities recover its Frobenius arm and leg lengths). The same finite Lagrange construction gives a unitriangular orthogonal basis ψ_T of Wμλ.

Let U_T and V_T be the mutually adjoint cell maps between the μ-weight and ω=(1^n)-weight corners, supplied by the semistandard cellular multiplication. Evaluation on xμ and the row symmetrizer gives `V_T f_t=π_t ψ_T` when μ(t)=T. Here is the scalar verification, not a citation substitute. For first(T), the row-intersection subgroup ν has block sizes equal to the numbers of equal entries within each row; its symmetrizer contributes [ν]_q! to the leading coefficient, and the same-entry axial product π_first telescopes to [ν]_q!. For another t in the same fiber, move from first(T) by adjacent incomparable swaps inside a μ-label block; right multiplication by T_i acts on xμ by q and the normalized recurrence f_t=f_s(T_i+α) multiplies this scalar by q+α. The same-entry axial product π_t changes by q+α at precisely the swapped pair. This proves the scalar by induction. The necessary fiber connectivity is finite bubble sorting of the standardizations of the horizontal strips formed by equal T-entries.

Likewise `U_T ψ_T=f_last(T)+(more dominant orthogonal vectors)`: evaluate the semistandard basis map, whose expansion has leading m_last(T) with coefficient1, and use the two unitriangular transitions. Consequently, for t=last(T), adjointness gives

`π_t(ψ_T,ψ_T)=(V_T f_t,ψ_T)=(f_t,U_T ψ_T)=(f_t,f_t)=q^{ell(d(t))}γ_t`,

and `(ψ_T,ψ_T)=q^{ell(d(t))}γ_T`. This is the actual full norm in source5.18. The current F1 claim that the norm is q^{ell} alone is false. Since the transition ψ_T↔φ_T is unitriangular, its determinant is1, so

`Gμλ=q^N gμλ`, where `gμλ=∏_{T∈T0(λ,μ)}γ_T`.  (N)

This proves the determinant/norm step conditional only on the exact local q-Schur evaluation and Hecke triangular/action prerequisites specified above. Those interfaces must be independently certified by the parent; this packet supplies their norm consequence with the scalar calculation exposed.

## B. Complete beta-product regrouping, repairing source5.24

Keep a fixed beta length L through all deletions. Define for h≥1

`A_h(β,μ)=−Σ_{b≠c, β_b−h<β_c} dμ(β−h e_b+h e_c)`.

The sum is finite effectively: a nonzero term requires β_b−h≥0, so h≤maxβ. If β has repeated entries, simultaneously exchange those two indices in the ordered-pair sum; alternation of d makes every paired term cancel, including the pairs of the two equal indices. Thus A_h=0 for a repeated-entry beta sequence. If β has a negative last entry, it is also0: using that entry as donor keeps it negative; using it as receiver requires the donor's lowered beta number be even smaller, so remains negative; all other terms retain the negative entry. Thus the induction's invalid deleted sequences contribute1 to the product, as required.

Delete the largest tableau entry Z, appearing z times. Its z boxes occupy the feet of distinct columns C and leave beta β−1_C and weight μbar. The factors in γ_T belonging to boxes with smaller labels are exactly γ_{T_C}. For a deleted box at the foot of column c, its predecessor in column b occurs iff b<c and b∉C: if b is also selected, its greatest entry is Z and the preceding smaller entry is excluded by the Γ condition; otherwise its foot is smaller. Their axial difference is β_b−β_c. Therefore the exponent E_h of the formal factor [h] in g obeys the exact recursion

`E_h(β,μ)=Σ_{|C|=z} E_h(β−1_C,μbar) + Σ_{|C|=z} Σ_{b∉C,c∈C} (1_{β_b−β_c+1=h}−1_{β_b−β_c=h})dμbar(β−1_C)`.  (R)

This is the complete largest-letter factorization, with no rational factors suppressed.

Now verify that A_h obeys precisely (R). Apply branching(B) to A_h(β,μ). Compare it with Σ_C A_h(β−1_C,μbar). Write ε_i=1_{i∈C}, δ=β_b−β_c−h. The original index condition is δ<0; the deleted condition is δ−ε_b+ε_c<0. Their indicators differ only in two cases:

1. b∈C,c∉C,δ=0. The contribution to the difference is `+dμbar(β−1_C−h e_b+h e_c)`. Exchange entries b,c; since β_b−h=β_c, this becomes `−dμbar(β−1_{C'})` with C'=C−{b}+{c}. Thus its total contribution is the negative term in(R), indexed by b∉C',c∈C' and β_b−β_c=h.
2. b∉C,c∈C,δ=−1. The contribution is `−dμbar(β−1_C−h e_b+h e_c)`. Now β_b−h=β_c−1 and β_c+h−1=β_b, so exchanging b,c gives `+dμbar(β−1_C)`. This is the positive term in(R), indexed by β_b−β_c+1=h.

All other endpoint membership cases have unchanged indicators and cancel. This proves the exact recurrence for A_h. At μ=0 both E_h and A_h vanish: g=1, and a nonzero shifted beta sequence of total degree0 would have to be a permutation of (L−1,…,0); that would require h=β_b−β_c, excluded by the strict condition β_b−h<β_c. Induction on |μ| therefore gives E_h=A_h for every h. Consequently

`gμλ=∏_{h≥1}∏_{b≠c,β_b−h<β_c}[h]_q^{−dμ(β−h e_b+h e_c)}`.  (P)

This is a complete corrected beta-product proof, including every cancellation in the source's 5.23→5.24 step. The identities are proved at the level of formal exponents before evaluating quantum integers; factorization dependencies between [h] do not affect the argument.

## C. Complete hook-ratio regrouping and rim interpretation

A nonzero summand of(P) requires the lowered beta β_b−h be nonnegative and differ from every unchanged beta number. The bead-to-gap description (or the existing batch19 hook/rim-hook supplier) says precisely that h=h_ab for a node (a,b) of λ: subtracting that hook length removes R_ab. This implication must be bound to the actual batch19 supplier after its author finishes; it is not duplicated as new rim-hook theory here.

For a fixed hook h_ab, the remaining pair condition is β_c>β_b−h_ab. Since β_b−h_ab=L−1−λ_a+a, this condition is equivalent to c≤λ_a: `β_c> L−1−λ_a+a` iff λ'_c−c> a−λ_a−1, which holds exactly for columns c occupied by row a. In particular the pairs are precisely the other nodes (a,c) in that same row. Thus all surviving factors group by same-row node pairs.

Take b<c in row a and put h=h_ab,k=h_ac. We have h−k=β_b−β_c. The two ordered transfers are

`B=β−h e_b+h e_c`, `C=β−k e_c+k e_b`.

They exchange their b,c entries, so dμ(B)=−dμ(C). Their contributions from(P) are `[h]^{−dμ(B)}[k]^{−dμ(C)}=([h]/[k])^{dμ(C)}`. But C=β+k e_b−k e_c, exactly the balanced exponent D in the corrected statement. This proves the full hook-ratio formula from(P).

For the rim interpretation, first remove R_ac (length k) by lowering β_c to β_c−k. Then raise β_b by k to rewrap the same number of boxes with lowest node in column b. Sorting the resulting distinct nonnegative beta numbers produces η; if a collision or a negative entry occurs, the signed symbol vanishes. The sign is the parity of the beta crossings, equivalently the sum of the heights of the removed and added rim hooks. With the standard leg convention excluding the node, this is `(-1)^{legλ_ac+legη_new}`, not automatically the sum of two OLD λ hook legs. The source uses a different leg convention including the node, which changes both exponents by1 and hence leaves their sum's parity unchanged. The current carrier's claimed `(-1)^{legλ_ab+legλ_ac}` is not generally justified for the added hook and must be checked against the actual eta rim-hook. For λ=(3,2), pair(1,1),(1,2), removal of the3-strip leaves (1,1) and has height1; adding the3-strip down column1 gives (1^5) and has height2. Their sum is3, agreeing with the negative sorting sign. In contrast the two OLD λ hook legs are both1, giving an incorrect positive sign. Thus the added-hook height must be evaluated in the new diagram η. The safe exact interface is the sorting sign dμ(C)=sgn(w)|T0(η,μ)|, with the existing batch19 beta/rim supplier used to compute its crossings. This preserves every rich combinatorial term and avoids an incorrect sign simplification.

## D. Integral specialization and q-Schaper consequence

The original semistandard cellular form matrix has entries in A=Z[q,q^{-1}], so its determinant G is in A. By(N), g=q^{-N}G also belongs to A. All products(P) and the hook product equal this same Laurent polynomial over Q(q). Therefore every commutative specialization with unit q evaluates the unique Laurent polynomial; no denominator needs to be a unit and no 0/0 expression is evaluated. This proves the original integral-domain scope, and the base-change argument in fact extends the equality to all commutative rings whenever the universal free Weyl/weight bases have been established.

For a PID lift with [n]! nonzero, every hook quantum integer in the fraction-field product is nonzero, so valuations are defined. Since q is a unit its prefactor contributes0. Applying the Jantzen Gram-valuation lemma gives the weightwise sum with coefficient `νπ([h_ab])−νπ([h_ac])` and **balanced** virtual Weyl symbol `W^{β+h_ac e_b−h_ac e_c}`. The unitriangular Kostka character matrix upgrades the identities to K0. The same corrected balanced index must be used on every Hecke symbol after the parent's actual Schur functor and normalization comparison are accepted. This is the needed surgical correction to the displayed q-Schaper prerequisite; exact filtration transport and all consumer closure stay parent-owned.

## Exact remaining acceptance obligations

The exponent recursion and corrected hook regrouping above are full fresh local proofs. The norm consequence is fully calculated from explicit Hecke and q-Schur evaluation interfaces; their actual local basis/JM proofs still require parent acceptance, since the current q-Schur definition and seminormal theorem contain sketch/error material. The beta-symbol supplier must be repaired (decrement, fixed degree/d cutoff, uniqueness only when distinct). The batch19 hook/beta-gap correspondence must be bound after its native writer finishes. The sorting-sign rim interpretation is sound; the proposed OLD-leg simplification is not yet certified and should not be copied. No claim of a complete accepted canonical theorem is made merely from this source reading.
