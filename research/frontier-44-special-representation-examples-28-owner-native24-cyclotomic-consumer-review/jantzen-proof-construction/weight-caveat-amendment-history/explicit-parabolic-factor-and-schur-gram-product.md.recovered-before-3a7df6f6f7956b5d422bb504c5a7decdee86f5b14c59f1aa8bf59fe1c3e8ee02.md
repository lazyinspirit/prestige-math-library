# Explicit parabolic symmetrizer coefficient and Schur Gram product

Author: `/root/repair_klr_global_basis/native24_cyclotomic_jantzen_construction`. Same pending native24 first construction round; no acceptance, consumer review, native edit, or source-retry reset. This packet adds a genuine local rational-factor computation beyond the previous gap map. The monic Schur eigenbasis/inverse-pairing proof is owned by the sibling `native24_schur_weight_gram_construction` in `../gram-proof-construction/`; the finite product below consumes its normalization exactly as stated, and remains conditional on root's review of that proof and Q.

## 1. Exact affine symmetrizer identity

Let z be an invertible indeterminate. For a contiguous row interval I of length k, let x_I=sum_{w in S_I}T_w in the affine Hecke algebra. Let X_i be the commuting affine variables. Work temporarily in the fraction field in the X's, and write

$$c_{ij}=\frac{(z-1)X_j}{X_j-X_i},\qquad d_{ij}=\frac{X_j-zX_i}{X_j-X_i},\qquad T_i=c_{i,i+1}+d_{i,i+1}s_i.$$

The Q-S1 affine PBW construction verifies this faithful crossed-product representation. Its use here introduces only a rational calculation of a finite Hecke element, not a new integral membership or flatness assertion. Then the coefficient of the identity permutation in x_I is exactly

$$C_I(X)=\prod_{\substack{i<j\\i,j\in I}}\frac{zX_j-X_i}{X_j-X_i}.$$

**Full proof.** Write x_I=sum_w a_w w in the rational crossed product. The finite row-coset pairing of w and s_iw proves T_i x_I=z x_I for each row generator: if length(s_iw)=length(w)+1, then T_i(T_w+T_{s_iw})=z(T_w+T_{s_iw}) by the quadratic relation. Compare the coefficient of w in this equality. It reads c_i a_w+d_i s_i(a_{s_iw})=z a_w. Since z-c_i=d_i and d_i is a nonzero rational function, this gives a_{s_iw}=s_i(a_w). Induction yields a_w=w(a_1).

The coefficient of the longest row permutation w_0 in sum_w T_w comes only from T_{w_0}: every other word has smaller length and cannot contain w_0 in its crossed-product expansion. Choose a reduced expression for w_0. Selecting the d_i s_i term at every position gives the product of d_{ij} over all positive roots i<j in that row interval, because the roots crossed by a reduced longest word are precisely those pairs, each once. This last elementary permutation fact can be verified by induction: moving the largest entry across k-1 smaller entries produces the roots involving it, and apply induction on k-1 to the remaining entries. Therefore w_0(a_1)=product_{i<j} (X_j-zX_i)/(X_j-X_i). Apply w_0 to both sides; it reverses every ordered pair, giving a_1=C_I(X). This proves the formula. Disjoint row intervals commute, so the identity coefficient of x_nu=product_I x_I is product_I C_I(X).

## 2. The same coefficient on a seminormal vector

Let V_lambda be the generic Specht cell module with its ACTUAL Murphy cell form b_lambda. Its seminormal basis is normalized f_t=v_t+sum_{s strictly dominates t}a_s v_s, with joint JM word r_t(i)=U_{component_t(i)}z^{content_t(i)}. Fix a semistandard tableau T of type nu and its dominance-MINIMAL standard refinement t=t_T. For every type-row interval I, the residues r_t(i), i in I, are distinct. In one physical component the nodes assigned a fixed row label form a horizontal strip; such a strip has no two nodes of equal content. To verify this, if two nodes (a,b),(a+h,b+h) had the same content, the upper new node would force the lower row's old length to be less than b+h, but the upper row's old length is at least that lower length, and the horizontal-strip interlacing condition requires the lower new row length to be at most the old upper row length, which conflicts with the upper node also being new. Equivalently, for a horizontal-strip addition kappa⊂rho, rho_{j+1}≤kappa_j; nodes in row j+1 have column ≤kappa_j, whereas new nodes in row j have column >kappa_j. Thus lower new nodes have strictly smaller content. Distinct physical components have distinct generic U-parameters. Under LM's deformation, two nodes in different components of the fixed size-n shape have content difference at most size(component a)+size(component b)-2≤n-2, so t-exponent difference n(a-b)+content difference is nonzero. All required differences are invertible over F(t), in every characteristic.

Set Phi_i=T_i-c_i. Bernstein commutation gives Phi_i f=s_i(f)Phi_i. The Phi_w for reduced w form a basis over the ring localized at the variable differences: each Phi_w is T_w plus smaller Bruhat terms, so the transition matrix is unitriangular; braid independence also follows from the faithful crossed-product representation. Consequently x_I can be expanded as C_I(X)+sum_{w!=1} b_w(X)Phi_w, with b_w having only variable-difference denominators. Indeed the identity coefficient in the crossed product is exactly its Phi_1 coefficient because Phi_w has just the crossed-product permutation w. This argument does NOT divide by d_{ij}, which may evaluate to zero on a particular tableau.

Restrict to the JM eigenword subspace with the fixed multiset of residues in each type-row interval. It is invariant under the row generators, since Bernstein commutation allows only interchange of adjacent row entries. All differences inside each such interval are invertible on this subspace, so the localized equality acts legitimately. For w!=1, Phi_w, if nonzero on f_t, changes its distinct row entries by w and hence gives a different JM word. It therefore has zero diagonal coefficient at f_t. The diagonal coefficient of f_t x_nu is exactly

$$C_t=\prod_{I\text{ a type-row interval}}\ \prod_{\substack{i<j\\i,j\in I}}\frac{z r_t(j)-r_t(i)}{r_t(j)-r_t(i)}.$$

This remains true if an intertwiner annihilates f_t; no inverse of that intertwiner was introduced. It is also independent of selecting an auxiliary characteristic-zero specialization.

## 3. Completely explicit Specht norm algorithm

The numbers gamma_t=b_lambda(f_t,f_t) can be computed from the proved Murphy/JM data without leaving an unspecified structure constant in the determinant product.

For the initial row-reading tableau t^lambda, f_{t^lambda}=v_{t^lambda}, and

$$\gamma_{t^\lambda}=P_\lambda(z)\prod_{a=1}^{\ell}\ \prod_{x\in[\lambda^{(a)}]}\ \prod_{b>a}(U_a z^{\operatorname{content}(x)}-U_b),\qquad P_\lambda(z)=\prod_{\text{rows }r\text{ of }\lambda}[|r|]_z!.$$

**Proof of the initial value.** The cellular Gram entry is the coefficient of m_lambda in m_lambda^2 modulo higher shapes. The initial cell vector is the greatest standard tableau, so the JM triangular action has no higher terms and gives its residue word exactly. Every row generator acts on it by z, whence x_lambda acts by P_lambda(z). The polynomial u_lambda acts by the displayed residue product. Since m_lambda=x_lambda u_lambda, the cell coefficient is their product. This argument uses the actual fixed Murphy-cell normalization.

Suppose t strictly dominates s=t(i,i+1), with s standard. Put A=r_t(i), B=r_t(i+1). Then

$$\gamma_s=\gamma_t\,\frac{(zB-A)(B-zA)}{(B-A)^2}.$$

**Proof of the recurrence.** Bernstein commutation shows that f_t T_i has support only on f_t and f_s, because its off-diagonal term swaps those two JM eigenvalues. Its diagonal coefficient is a_t=(z-1)B/(B-A); the swapped diagonal coefficient is a_s=(z-1)A/(A-B), so a_t+a_s=z-1. The off-diagonal coefficient from f_t to f_s is1 in the fixed monic normalization. To verify it, the length-additive Murphy equality v_t T_i=v_s holds since t is more dominant and d(s)=d(t)s_i has greater length. Project to the s-word. In the expansion v_t=sum_{u>=t}a_u f_u with a_t=1, the only u that can reach the s-word under T_i is u=t or u=s; the latter is absent because s<t. Thus v_t T_i F_s=f_t T_i F_s. But v_s F_s=f_s by its monic normalization, proving coefficient1.

Write the reverse off-diagonal coefficient as b_s. The quadratic relation gives b_s=z+(z-1)a_t-a_t^2=(z-a_t)(1+a_t)=(B-zA)(zB-A)/(B-A)^2. Contravariance and orthogonality yield gamma_s=b_s gamma_t, proving the formula. The denominator is nonzero: a permitted standard swap concerns incomparable nodes; equal-content nodes in one component are comparable, and distinct components of a fixed shape have distinct generic residues as above.

Every standard tableau is obtainable from t^lambda by a sequence of adjacent swaps of incomparable entries that monotonically increases the permutation length. One explicit construction is to view standard tableaux as linear extensions of the Young-node order, with t^lambda as the fixed row-reading extension. Bubble-sort the desired extension toward this fixed extension, swapping adjacent inversions; those inverted elements are incomparable, since comparable elements have the same relative order in both linear extensions. Reversing those swaps gives the required path. The norm recurrence along this finite path is an actual algorithm. Its product is independent of the chosen path because every factor was proved to equal a ratio of the same cell norms; no path-independence assertion replaces the proof.

## 4. The resulting actual Schur Gram determinant product

Let u_T denote the eigenvalue of u_nu on the row-prefix eigenline of T:

$$u_T=\prod_{x\in[\lambda]}\ \prod_{b>a_T(x)}\big(U_{\operatorname{component}(x)}z^{\operatorname{content}(x)}-U_b\big),$$

where a_T(x) is the TYPE component of the label of x, not its physical component. The flag condition has physical component(x)≤a_T(x); every b>a_T(x) is therefore a different physical component. In the LM deformation each factor is nonzero because |content(x)|≤n-1, so n(component(x)-b)+content(x) cannot vanish. The quantum row factorial P_nu(z) is likewise nonzero over F(t).

The sibling corrected the refinement convention during construction: t_T must be dominance-MINIMAL in its fibre. With f_t=v_t+more dominant terms, no smaller refinement exists to contribute to the coefficient of v_t; choosing a maximal refinement would not justify that coefficient comparison. With this corrected convention, the sibling inverse-pairing/eigenbasis proof gives a monic Schur weight eigenbasis g_T=w_T E_T with det transition1, normalized so f_{t_T}x_nu=C_{t_T}g_T. Its calculation gives

$$b_\lambda(g_T,g_T)=\frac{P_\nu(z)\gamma_{t_T}}{C_{t_T}},\qquad m_\nu g_T=P_\nu(z)u_T g_T.$$

The actual Schur form is b_lambda with inverse m_nu on its image, so its diagonal norm is gamma_{t_T}/(C_{t_T}u_T). Consequently, with the sibling normalization and Q bound as hypotheses, there is the explicit exact rational identity

$$\det G_{\lambda\nu}=\prod_{T\in\operatorname{SStd}_\nu(\lambda)}\frac{\gamma_{t_T}}{C_{t_T}u_T}.$$

All terms are now explicit finite products: gamma is given by the initial product and adjacent-swap factors in §3; C by §2; u by the displayed product. No Schur-functor injectivity, residue-character injectivity, rational K0, unproved generic flatness, or James–Mathas citation is used. The result is a determinant formula, not yet the required rim-hook formula. Parent must bind the sibling monic eigenbasis proof and Q precisely before treating even this formula as a proved local supplier.

## 5. Exact remaining cancellation obligation

Let P_{lambda nu} denote the explicit finite product in §4. The full J theorem now reduces, more concretely than the original unspecified determinant, to proving

$$\nu_{t-1}(P_{\lambda\nu})=\sum_{\mu:\lambda\triangleright\mu}K_{\mu\nu}\sum_{\substack{x\in[\lambda],\ y\in[\mu]\\[\lambda]\setminus r_x^\lambda=[\mu]\setminus r_y^\mu}}(-1)^{\operatorname{leg}(r_x^\lambda)+\operatorname{leg}(r_y^\mu)}\nu_{t-1}\big(\operatorname{res}_O(f_x^\lambda)-\operatorname{res}_O(f_y^\mu)\big).$$

This requires an actual cancellation/alternation argument over semistandard tableaux, including crosscomponent rim-hook transfers and all signs. It has NOT been proved here. A product formula over seminormal standard refinements is progress, but is not a valid reason to assert this equality. The previous leaves turn this exact equality into the integer K0 sum once established. Root's foot-exponent-separation proof makes every rim-hook valuation finite and the earlier Laurent-binomial leaf computes each one in any characteristic.

## Source boundary and handoff

No additional original James–Mathas request was made. The exhausted attempt record is `../primitive-proof-construction/james-mathas-retrieval-attempts.json`; it was actually read on resumption. The independently lawful alternate Mathas–Soriano arXiv:math/0604108v4 (29 PDF pages) was fetched and only Example2.17 pp.7–8 and Theorem3.12/Remark3.13 pp.12–13 were read in extracted text. They confirm the general monic-orthogonal-basis strategy but do not supply the explicit cyclotomic Schur cancellation; the arguments above are local computations. Mathas review p.40's abbreviated `det G^lambda_mu=g_lambda_mu` is not a substitute for the weighted product and is not imported as a theorem. The original J source remains unread and the full J sum remains open.
