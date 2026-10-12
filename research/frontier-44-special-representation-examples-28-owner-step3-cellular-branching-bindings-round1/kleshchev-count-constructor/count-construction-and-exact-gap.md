# Kleshchev first-level count: local reduction and exact unclosed rank lemma

Author: `/root/repair_cell_head_classification/native50_pairing_constructor`.
Run: `frontier-44-special-representation-examples-28`.
Target: `thm-kleshchev-first-level-branching-multiplicity`.
Status: **NOT COMPLETE; no READY claim**. This is research-only construction for the newly confirmed count seam, current authored-binding repair1/max2. It is not a review of consumers and resets no source20/50/24 histories, exceptions or caps. All writes are confined to this directory.

## Actual source and proof boundary

The actual canonical target and parent's proposed binding item were read completely, as was the current normal-node multiplicity item. The latter depends on this target and admits that its count is recorded from sources, so using it here would be both circular and unproved.

The authentic 1997 converted PDF has66 pages and SHA256 `7042528e267a761105186e14549925a63497a01bc63ec45a4a26722e4f445184`. This is distinct from the preserved original PostScript hash `0bbf3d69ddf20940089045c540e3d516c542118ab06644c5d26c430bedf46558`; the conversion must not be called the authenticated PostScript bytes. The exact read-page list is recorded separately. In particular printed57–58 were read visually and in normalized-font extracted text, including the complete proofs of Lemma9.2 and Theorem9.3; printed64–65 were read in extracted text. No whole66-page reading is claimed.

Theorem9.3 says τ_i=ν_Λ(i,l), not γ(j,p). Its proof merely compares:

τ_i = ε_Λ(i,l) − Σ_{u>i} τ_u ε'_Λ(i,u−1),
ν_Λ(i,l) = ε_Λ(i,l) − Σ_{u>i} ν_Λ(u,l) ε'_Λ(i,u−1).

The first equation is Lemma9.2. The second is Corollary5.8(ii). Identifying ε with an actual modular weight-space dimension uses Corollary8.10(i), hence the essential-subset basis Theorem8.6. Theorem8.6 requires the lowering/raising-operator results7.7–7.13 quoted from the 1995 paper, together with the essential-subset combinatorics. Repeating the two equations therefore does not constitute a local proof of the count.

The parent's authentic cached **1995** scan is available and was verified, not fetched anew: `scratchpad/source-cache/symmetric-groups/modular-articles/kleshchev-1995-branching-rules-ii.pdf`,51 pages,3,841,501 bytes, SHA256 `6a7a7856d3eb8c8198920c02bdcdd16d8b350f024d39ae96215f072050bc368c`. Its first page is digitization metadata and PDFpage2 is printed163. The body is image-only. Relevant portions actually inspected include printed170–171 (commutation relations and the highest-weight radical criterion),174–176 (Definitions2.3/2.5, integral lowering coefficients and their integrality proof),190–191 (raising/lowering pivots),194–197 (the complete displayed proof of Proposition3.2). These source ranges make the reconstruction feasible in principle; they have not yet all been incorporated into a complete local operator/pivot proof. No whole51-page reading is claimed, and no inaccessible-source claim is retained for this authentic scan.

## 1. A complete finite combinatorial count translation

For an ordinary p-regular partition λ and removable node A=(j,λ_j), define a word T_j by listing rows k=j−1,j−2,…,1 and retaining precisely:

* `+` when (k,λ_k) is removable and λ_k−k≡λ_j−j (modp);
* `−` when (k,λ_k+1) is addable and λ_k−k+1≡λ_j−j (modp).

At most one condition holds in a row, since their residues differ by1 and p≥2. Call T latticed when every prefix has at least as many `+` signs as `−` signs. Put g(T)=0 when T is not latticed, and otherwise put g(T)=1 plus the number of `+` positions whose following suffix is latticed (the empty suffix is latticed).

Here is a local proof of the desired node-count interpretation. Under transpose, A becomes a removable node of μ=λ' of residue minus the residue of A. Its later same-residue boundary nodes in the top-to-bottom μ-signature are exactly the above ordinary boundary nodes listed in T_j, in that order. A removable node contributes a signature `−`, hence a stack push; an addable node contributes `+`, hence a pop. The ordering assertion follows because above ordinary corners have strictly larger column index than A. Equal-column addable/removable boundary pairs differ in row by1, hence have distinct residues and cannot occur together in this residue class. Lower ordinary corners have smaller column. A lower addable boundary node with column equal to A must be the first row of the next shorter row-block, immediately below A; its residue differs from A by1, so it is not in this class.

The reduction `−+→0` is implemented by pushing removables and popping the most recent removable when an addable is read. Signs earlier than A do not affect whether A is later popped. A survives exactly when no prefix after A has more pops than pushes, precisely the lattice condition on T_j. If A survives, an above ordinary removable B survives exactly when its following suffix has no prefix with more pops than pushes. Thus

g(T_j)=0 if A is not normal,
g(T_j)=1+#(normal removable nodes strictly above A of A's residue) if A is normal.

This proves the combinatorial identification without a branching theorem or a Fock/crystal theorem. It does **not** prove that a module multiplicity equals g(T_j).

The proposed Statement's unconditional final “equivalently” sentence is false. For p=2, λ=(5,3,1) and A=(3,1), both λ and λ\A=(5,3) are regular. Its transpose μ=(3,2,2,1,1) has residue0 signature `−+−` from (1,3),(4,2),(5,1); the first two signs cancel, so A'= (1,3) is not normal, while B'=(5,1) is normal. Thus B=(1,5) is a normal node above A of the same residue, and the unconditioned count of normal nodes weakly above A is1 although g(T_A)=0. The rich piecewise Statement is preserved by writing γ(A)=1_{A normal}·#(normal nodes weakly above A), or by retaining its two displayed cases. A is normal precisely when this **piecewise γ(A)** is nonzero, not when the unconditioned above-count is nonzero.

## 2. Exact algebraic indexing and character inversion

For λ≠(n), choose Schur rank N=n, put μ=λ', μ_N=0 and l=N−1. Let Λ=Σ_{a=1}^l(μ_a−μ_{a+1})ω_a. The algebraic root corresponding to A=(j,λ_j) is β_i=α_i+…+α_l, with **i=λ_j**. For every u with μ_u>μ_{u+1}, let ν_u=(μ_1,…,μ_{N−1})−ε_u, a dominant lower-rank polynomial weight, and let

b_u=[L_N(μ)^1:L_{N−1}(ν_u)],
d_i=dim L_N(μ)_{μ−ε_i+ε_N},
a_{iu}=dim L_{N−1}(ν_u)_{ν_i}  (u>i),

where ν_i is used as a weight even when it is not dominant. Set b_u=0 for nondominant candidates. The first-level weights have last coordinate1, so restricting to the first N−1 diagonal coordinates is injective on them; this avoids substituting characteristicp for a rank or identifying different torus characters modulop.

The elementary character statement is:

(*)  d_i=b_i+Σ_{u>i}b_u a_{iu}.

It follows once one has proved that every first-level highest weight dominating ν_i is among the ν_u with u≥i. Indeed torus weight-space dimension is additive on a finite composition series, only factors with highest weight dominating ν_i can contribute at that weight, and the own highest weight of L(ν_i) has dimension1. This proves (*) and the reverse recursion b_i=d_i−Σ_{u>i}b_u a_{iu}. This is the real content of Lemma9.2 before the weight dimensions are replaced by essential-subset counts.

For completeness, the required highest-weight support exclusion is the **disconnected-root primitive exclusion**, not a normal-node count: if a primitive composition-factor vector has full deficit Γ=Σ n_a α_a with n_l=1 and each n_a∈{0,1}, its support must be a terminal interval [u,l]. There is an elementary way to prove it in the actual highest-weight algebra. A disconnected initial component [t,v] commutes with the later components because there is a missing simple root between them. The negative root monomials of deficit Γ factor across those components. Their normalized contravariant Gram matrix factors as a tensor product, since both positive and negative operators from separated components commute. Its simple quotient is therefore the tensor product of the quotients of those component Gram matrices. Choose a basis of the first component image and the positive dual raising operators obtained by inverting its nonsingular reduced Gram matrix. The sum of each negative basis operator followed by its positive dual is the identity on that component weight space. Applied to a primitive vector in a composition-series quotient, each positive operator has positive Levi weight and sends the vector into the preceding submodule. That submodule is Levi-stable, so applying the negative operators also stays in it; the identity would put the primitive vector in the preceding submodule, a contradiction. This rules out a separated initial component. Repeating rules out every gap, leaving [u,l]. All divisions are only by nonzero field matrix entries, not by integer factorials.

This supplies the operator argument needed for support exclusion **provided the finite hyperalgebra PBW spanning and normalized modular contravariant-form realization are supplied**. Those standard highest-weight prerequisites must be proved in a genuine local supplier; the characteristic-zero Verma/Shapovalov items in the existing library do not have this modular scope. The 1995 Lemma1.3(ii) gives the same radical criterion by triangular decomposition; this note does not relabel an unproved modular PBW premise as a proved library dependency. Accordingly Section2 is a sound conditional reduction, not an unconditional new active theorem.

No restriction is imposed that all ν_u remain p-restricted: some first-level factors are killed by the lower Schur functor, but still contribute to (*) and must be retained in its algebraic count. Omitting them would not prove the group multiplicity.

## 3. A concrete finite Gram construction avoiding unread Carter operators

One can formulate the exact unresolved identity directly in the already constructed **Schur cell form**, without any Carter lowering-operator definitions. For each actual Weyl module W_N(μ), take its semistandard cellular basis of a given weight a. Its Gram submatrix G_N(μ;a) is obtained from the literal cell products, so it has integral entries atq=1. If a has a negative coordinate or is not a degree-compatible weight, use the empty matrix with rank0. Distinct weight spaces are orthogonal. Since L_N(μ)=W_N(μ)/rad_form W_N(μ), elementary linear algebra gives

 d_i=rank_k G_N(μ; μ−ε_i+ε_N),
 a_{iu}=rank_k G_{N−1}(ν_u; ν_i).

Proof: restricting the whole form to a weight space has radical equal to its intersection with the full radical by weight orthogonality. Its quotient is the corresponding simple-module weight space. The dimension of a vector space modulo the kernel of its Gram map is its Gram rank. This argument works in characteristic2 as well; it does not diagonalize the form or divide by any quantum factorial. The integer Gram matrices reduce modulo p, and their ranks are unchanged by extension of fields of characteristicp. Hence the route preserves every-field scope.

Alternatively a root-interval matrix has 2^{s−r} columns indexed by cuts of [r,s]. With F_{a,b}=E_{b+1,a}, each cut set produces the negative word F_{r,j1−1} F_{j1,j2−1}…F_{jm,s}. Define its matrix by taking the highest-weight coefficient of the positive transpose word times the negative word. Repeated use of [E_ab,E_cd]=δ_bc E_ad−δ_da E_cb gives integral polynomials in the fundamental-weight coordinates, with no divided powers greater than1 because every simple-root coefficient of the interval is1. This is an exact finite algorithm for the same root-interval Gram matrix after the relevant modular PBW/form realization is proved. Merely computing this matrix is not an evaluation of its rank for arbitrary p and arbitrary interval length.

## 4. The smallest uniform count lemma still missing

Define g_u purely combinatorially: if μ_u=μ_{u+1}, set g_u=0; otherwise let A_u be the ordinary removable node whose column is u (its row is Σ_{a≥u}(μ_a−μ_{a+1})), and set g_u=g(T_{A_u}) as in Section1. Do not discard A_u when its removal is not regular: its algebraic factor can still contribute.

The exact missing lemma can be stated with **no branching multiplicity in its statement**:

For every prime p, every p-regular partition λ≠(n), μ=λ', N=n, and every 1≤i≤N−1,

(R)  rank_k G_N(μ; μ−ε_i+ε_N)
     = g_i + Σ_{u=i+1}^{N−1} g_u rank_k G_{N−1}(ν_u;ν_i),

with nondominant ν_u omitted, and with all legitimate semistandard Schur Gram matrices in the fixed integral normalization.

This is a finite, uniform modular Gram-rank recurrence. If proved locally, (R) and (*) give b_i=g_i by reverse induction on i. The Section1 stack argument then identifies g_i with the full requested piecewise normal-node count, and the parent's already reconciled first-level/sign-conjugate comparison gives the symmetric-group statement. For λ=(n), the module is trivial and its unique restriction factor has multiplicity1; n=1 is the trivial restriction toS0. No characteristic or partition scope is weakened.

What has **not** been proved here is (R). The 1997 route proves it by: a complete essential-subset basis for the root interval (8.6/8.10(i)), the lower-weight shift ε'_Λ(i,u−1) with the final fundamental coordinate increased by1, and the complete combinatorial recurrence5.8(ii). The quoted lowering-operator results can now be read in the authentic 1995 scan, but the integrality definitions alone and Proposition3.2 alone do not establish the full pivot-injectivity and essential-subset enumeration needed for (R). The omitted proofs are substantive, not metadata or citation repairs.

A minimal local prerequisite package would therefore be either:

* one completely proved version of (R), using actual Schur matrices and elimination; or
* an integral interval PBW/form supplier, complete raising/lowering pivot and nonzero criteria reconstructed from1995§§2–3, a complete essential-subset basis theorem including the injectivity of J↦Jhat, and the PartI recurrence proof5.8(ii). These must be closed proofs before9.3 can be installed as a proved local supplier.

At present there is no genuinely proved local dependency with this rank/count contract. The current normal-node item cannot fill it. Reading source9.3 and citing its antecedents is insufficient, and changing F3/F4 to stronger bibliographic summaries would not repair the active item.

## Handoff

The combinatorial translation, the exact indexing, the finite Schur Gram reduction and the conditional character recursion are now concrete and checkable. The complete uniform algebraic rank-count evaluation remains unresolved. No active theorem is proposed as READY and no successful mathematical acceptance is manufactured. The parent owns whether to pursue the stated missing lemma as necessary local theory, how to preserve the original source histories, and all consumer/engine closure. This construction author owns no consumers, native state or decisions.
