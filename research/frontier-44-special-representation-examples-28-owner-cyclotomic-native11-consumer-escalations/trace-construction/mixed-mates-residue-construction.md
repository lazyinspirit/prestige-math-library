# Mixed-color mates: explicit monic-residue calculation and the remaining transfer interface

**Native sign binding:** All source crossing/divided-difference formulas below use κ=−τ_native for every color pair, as proved and recorded in `native-sign-dictionary-pass1.md`; source operators must not be identified directly with native generators.

Run frontier-44-special-representation-examples-28; author /root/repair_klr_global_basis/cyclotomic_trace_construction. No generic symmetry acceptance is recorded. Complete Cautis–Lauda1111.1431 was additionally retrieved, with hashes in `cautis-lauda-retrieval.json`; read §§6.1–6.3 and7.2. Its §6 proof uses one-dimensional Hom spaces, and its cyclotomic Corollary7.1 expressly assumes Conjecture7.1 on the graded center. That premise is not established locally for all generic parameters, so its corollary is not an admissible replacement for the calculation below.

## One-variable identity over every coefficient ring

Let C be a commutative ring, p(u) monic of degreeN and q(u) monic of degreeA, and let Q(u)=tq(u) with t a unit. Put L=C[u]/p, L'=C[u]/(pq). Their coefficient forms are ε_p(f)=coefficient of u^{N-1} in the remainder modulo p and ε_pq(f)=coefficient of u^{N+A-1} in the remainder modulo pq. The map π:L'→L is monic remainder. The map j:L→L', f↦Qf, is well defined because Qp=t pq=0. For f represented by degree<N, Qf has degree<N+A and its top coefficient equals t times the top coefficient of f. Therefore

ε_pq(jf)=t ε_p(f).

This proves the extreme-coefficient scalar without assuming anything about a trace on the generic KLR algebra. The pairings of both monic extensions are perfect by their triangular power-basis Gram matrices. It follows that j is injective and its adjoint, relative to the two coefficient forms, is tπ. This proof works in every characteristic and under every coefficient specialization.

For actual KLR parameters, Q(u)=Q_ij(u,y) and t=t_ij is the coefficient of u^{-a_ij}; q=Q_ij/t_ij is monic. Lower Q coefficients play no role in this scalar, but are retained in p q and in all quotient maps. Reversing i,j gives the independent scalar t_ji.

## Full rank-one-string identity, without factorial division

For the universal monic p of degreeN, use the H_r(p) algebra and symmetric perfect form t_r^p constructed in `rank-one-universal-model.md`. Write Δ_r=∏_{s<t}(X_s-X_t), b_r=X_1^{r-1}X_2^{r-2}...X_{r-1}. There is an ordered formal-residue formula

t_r^p(z)=(-1)^{r(N-r)} Res_{X_1,...,X_r}(Δ_r b_r Tr(z)/∏_{s=1}^r p(X_s)),

where Res means coefficient of X_1^{-1}...X_r^{-1} in the expansions at infinity, and Tr is the nil-Hecke matrix trace in the chosen Artin matrix presentation. This formula has no1/r! factor. To verify it integrally, first use the universal coefficient ring over Z and its rational fraction field with generic distinct roots ξ_1,...,ξ_N. Iterated residue is a sum over ordered root tuples. Repeated roots contribute0 because Δ vanishes. For a fixed r-element subset, summing the orderings gives

Σ_σ Δ(ξ_σ)b_r(ξ_σ)=Δ(ξ)Σ_σ sign(σ)b_r(ξ_σ)=Δ(ξ)^2.

The ordered denominator contributes ∏_{s≠t}(ξ_s-ξ_t)=(-1)^{r(r-1)/2}Δ(ξ)^2. The remaining denominator is the product of differences between the chosen subset and its complement. Thus the sum agrees, up to the displayed sign, with the parabolic divided-difference integration used in I_r. The same localization expression for the parabolic divided difference follows directly by expanding each ∂=(s−1)/(X_s-X_{s+1}); all terms outside subset representatives vanish on block-symmetric inputs. Both sides are integral polynomial expressions in the coefficients of p: the residue uses only monic inversion and finitely many coefficients for a polynomial input, and the divided differences preserve the integral polynomial ring. Equality over the rational universal fraction field therefore is an integral polynomial identity and specializes to every ring/characteristic. Matrix trace extends the identity to all z. This argument uses a characteristic-zero fraction field only to prove an integral identity, not as a hypothesis on the result.

Set p'=p q and U_r=∏_{s=1}^r Q_ij(X_s,y), a symmetric central multiplier in the relevant matrix presentation, homogeneous of its actual internal degree. The quotient π_r:H_r(p')→H_r(p) is induced by the inclusion of the monic cyclotomic ideals. Multiplication U_r defines j_r:H_r(p)→H_r(p'): each generator p(X_1) is killed after multiplication by its Q(X_1,y) factor, and symmetry makes U_r commute with the nil-Hecke generators. Cancelling the q factors in the residue gives the exact full-form identity

t_r^{p'}(j_r z)=(-1)^{rA}t_ij^r t_r^p(z).

It proves j_r injective by perfectness, and identifies its adjoint with the quotient map times the indicated unit. No nonzero-ideal closure claim is used.

Let ε_r^p:H_{r+1}(p)→H_r(p) be the relative form, and similarly for p'. Bimodule linearity and t_r ε_r=t_{r+1}, combined with the full-form identity, give

π_r ε_r^{p'}(Q_ij(X_{r+1},y) lift(z))=(-1)^A t_ij ε_r^p(z).

For details multiply the desired identity by j_r and test against arbitrary a under t_r^{p'}; the test becomes the full-form identity at r+1, then the one at r. Perfectness proves equality after multiplying by j_r, and injectivity of j_r on the quotient proves the stated identity. This works for every z, including nil-Hecke coset elements, not only dot monomials.

The source-style forms have ε_r(X_{r+1}^{N-2r-1})=(-1)^{N+1} when the indicated top dot power is nonnegative. Normalize the second counit by ε̂_r^p=(-1)^{N+1}ε_r^p, and its second unit by the inverse scalar. This is a global weight normalization: N and h=N-2r have the same parity, so it is (-1)^{h+1}, independent of which extremal string is being represented. Both triangles persist, dots are cyclic, and degree-zero bubbles are1 in every sign branch. Since p' has degreeN+A, its normalization contributes the extra (-1)^A, cancelling the sign above. Thus the actual normalized mixed-cap identity is

π_r ε̂_r^{p'}(Q_ij(X_{r+1},y) lift(z))=t_ij ε̂_r^p(z).

Taking the ordinary mate and using perfectness gives the corresponding mixed-unit identity. Reversing colors gives t_ji. Their quotient is therefore the expected double-mate scalar t_ji/t_ij or its inverse according to the crossing orientation; the repository orientation must be bound once the transfer below is proved. All degree shifts are the already-proved t_i(β), and the degree of Q cancels the difference in the cap degrees.

## Actual highest-object polynomial comparison

For a formal H_i-annihilated object M of i-highest weightN, HG_iM has the proved power basis x^ju, 0≤j<N, hence defines monic p as in the endpoint transfer. The mixed isomorphism H_iG_j≅G_jH_i implies H_iG_jM=0; the new i-highest weight is N+A, A=−a_ij. Let β:G_iG_jM→G_jG_iM and α the reverse crossing. Moving dots gives βp(x)=G_jp(x)β, and the quadratic KLR relation gives αβ=Q_ij(x,y). Therefore p(x)Q_ij(x,y) annihilates G_iG_jM. The power basis at the new vacuum has lengthN+A, so monic uniqueness forces its companion polynomial to be pQ_ij/t_ij.

The sideways mixed isomorphism is an ordinary mate of β. The mate/unit identity says, after identifying H_iG_j with G_jH_i by that isomorphism, H_iβ sends the k-th unit-power column at the new vacuum to the k-th unit-power column at the old vacuum. Hence it is literally π, not an unspecified nonzero map. The quadratic relation then forces H_iα=j (multiplication by Q). Iterating across r i-strands gives π_r and j_r: braid moves between the i-block and the j strand have no correction because the triple involved is i,i,j or j,i,i with unequal outer colors; dots and the same-color nil-Hecke action are intertwined. This identifies the local crossing operators with the algebra maps in the residue calculation on each formal extremal string.

## Exact remaining coherence/transfer obligation

The preceding algebra computations close the coefficient, quotient and normalized-cap calculation in the universal spectator model. To assert the mixed-mate relation on every generic cyclotomic word projective, one still needs a fully proved minimal-parabolic normal-form or faithful-model interface allowing these spectator-model identities to be transported to arbitrary words/weights. The rank-one integrable detection lemma alone detects zero objects and invertibility, not arbitrary equality of two natural transformations. It must not be used to assert an unproved equality merely because that equality holds on some extremal strings.

A sufficient local supplier is the generic minimal-parabolic polynomial-model faithfulness statement: for fixed i, the formal category generated by all G_j, H_i, ordinary G_i⊣H_i, canonical rho_i and the actual mixed H_iG_j commutators acts faithfully on the family of equivariant rank-one models with spectator variables y_j and monic i-polynomial p_i(u) modified by ∏Q_ij(u,y_j)/t_ij when a j strand is added. Required proof: give every G_j bimodule and crossing operator, verify the monic companion change above, reduce morphisms to all-downward KLR diagrams with independent bubble coefficients using the proved same-color normal form, then show any fixed bounded-degree nonzero expression acts nontrivially for sufficiently large highest parameters by PBW polynomial-representation faithfulness and the independence of elementary symmetric functions below the first truncation degree. Webster §1.2 gives precisely this route, but it still needs an actual local map/coherence and faithfulness proof, not an unexplained “diagram isotopy” citation.

No generic symmetry pass follows until this coherence supplier is proved. The smallest obstruction has changed: second adjunction has a full authored noncircular route; mixed-color leading constants and residue identities are now actual computations; the remaining issue is their coherent transfer to the full generic word category.
