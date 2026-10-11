---
id: lem-finite-type-a-tensor-hecke-bars-and-complementary-coefficient-charts
kind: lemma
title: "Finite type-A tensor Hecke bars and complementary coefficient charts"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
proof_strategy: direct
deps: [def-axiom-of-choice, def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules, def-higher-level-wedge-tensor-fock-module, def-dual-canonical-canonical-and-quasi-canonical-fock-bases, thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations, def-normalized-type-a-hecke-algebra-and-its-bar-involution, thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis, def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization, lem-the-parabolic-hecke-modules-have-standard-bases-actions-and-compatible-bars, thm-existence-and-uniqueness-of-the-parabolic-kazhdan-lusztig-basis, thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones, lem-bruhat-order-basic-properties-for-permutations]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan, Dual canonical bases and Kazhdan-Lusztig polynomials"
      url: "https://arxiv.org/pdf/math/0509700"
      locator: "Sections 4–5, equations (4.1)–(4.7), Lemma 3/Theorem 4/Corollary 5, and equations (5.6)–(5.8)/Theorem 11/Corollary 13; local generator, complementary-index and exterior transport below."
---

## Statement

Assume inherited AC [[def-axiom-of-choice]] only for the quantum-bar suppliers. In a finite type-$A$ natural tensor space, write $s$ for the source parameter, $a w$ for the right place action, $w_a$ for the shortest sorting permutation, $d_a=w_a^{-1}$, $K$ for the stabilizer of the weakly increasing sorted tuple, $w_K$ for its longest element, and $w_0$ for the full longest permutation. Let $L_b=\sum_a U_{a,b}(s)M_a$ be the positive-source ordinary-bar chart and $M_b=\sum_a D_{a,b}(s)L_a$ its inverse. Then
$$U_{a,b}(s)=(-s)^{\ell(w_b)-\ell(w_a)}\sum_{z\in K}(-1)^{\ell(z)}P_{w_az,w_b}(s^{-2}),$$
$$D_{a,b}(s)=s^{\ell(w_b)-\ell(w_a)}P_{d_bw_0,d_aw_0}(s^{-2}).$$
Coefficients vanish outside the indicated Bruhat intervals. For decreasing-column wedge tensors in either factor order, the ordinary-bar embedding is
$$\iota(M_B)=\sum_{C\sim_{\mathrm{col}}B}(-s)^{\ell(B,C)}M_{a(C)},\qquad \iota(L_A)=L_{a(A)}.$$
Consequently the wedge inverse coefficient is
$$d_{A,B}(s)=\sum_{C\sim_{\mathrm{col}}B}(-s)^{\ell(B,C)}D_{a(A),a(C)}(s).$$
Here $\ell(B,C)$ is the number of within-column adjacent swaps from the decreasing reading. These identities are independent of category $\mathcal O$ and of linkage or simple-label identification.

## Facts & Assumptions

**Given:** A finite natural tensor cut and finite decreasing-column wedge tensors, with the source coproduct, ordered monomials and ordinary bars of [[def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules]], [[def-higher-level-wedge-tensor-fock-module]], [[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]].

[F1] Ordinary tensor bars: the normalized quasi-$R$ bar is compatible with the coproduct, triangular in prefix dominance and independent of parentheses ([[thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations]]).

[F2] Hecke bases and coefficients ([[def-normalized-type-a-hecke-algebra-and-its-bar-involution]], [[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]], [[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]]): $H_i^2=1+(v^{-1}-v)H_i$, $\bar H_i=H_i-(v^{-1}-v)$, and ordinary positive coefficients are $v^{\ell(y)-\ell(x)}P_{x,y}(v^{-2})$.

[F3] Induced bars and reduction ([[lem-the-parabolic-hecke-modules-have-standard-bases-actions-and-compatible-bars]], [[thm-existence-and-uniqueness-of-the-parabolic-kazhdan-lusztig-basis]], [[thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones]]): the trivial character is $v^{-1}$, the sign character is $-v$, their standard bases use shortest left representatives, the sign coefficient is $\sum_{z\in K}(-v)^{\ell(z)}h_{zx,y}(v)$, and the spherical coefficient is $h_{w_Kx,w_Ky}(v)$.

[F4] Triangular uniqueness and reverse forms ([[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]]); longest permutations reverse Bruhat order ([[lem-bruhat-order-basic-properties-for-permutations]]).

## Proof

**Proof technique:** construct the tensor action, compare the two induced charts through a reverse-position pairing, and restrict the exterior embedding.

1.1 **The actual reciprocal action.** Set $q=s^{-1}$. On adjacent letters define $M_aH_i=M_{as_i}$ if $a_i<a_{i+1}$, $M_aH_i=sM_a$ if they are equal, and $M_aH_i=M_{as_i}+(s-s^{-1})M_a$ if $a_i>a_{i+1}$. On an unequal two-letter span its matrix has square $1+(s-s^{-1})H_i$; on an equal span this is $s^2=1+(s-s^{-1})s$. For three adjacent letters, applying the two triple products to their six possible strict orders, or their three possible orders with one equality, gives the same swapped tuple and the same coefficients; with all equal both are $s^3$. Distant actions commute. Thus these are the generators of $H_q$. Substitution of the natural $E_j,F_j$ replacement actions and the source coproduct shows that they commute with the quantum action: on the two active letters the toral coefficients are $s^{\mathbf1_{a=j}-\mathbf1_{a=j+1}}$, and the unequal two-term expression cancels the extra $s-s^{-1}$ term; equal active letters give the sum $s+s^{-1}$ on both sides. All other letters are unaffected. The same two-letter calculation gives $\psi M_{ba}=M_{ba}+(s^{-1}-s)M_{ab}$ for $a<b$ and fixes increasing and equal tuples. Therefore $\psi(xH_i)=\psi(x)\bar H_i$; adjoining spectator factors follows from quasi-$R$ naturality and factorization in [F1]. [F1, F2, algebra]

1.2 **Cyclic induced bar and signed transport.** If $b$ is the sorted tuple, $M_b$ is bar fixed by weight transfer. Every tuple is $b d_a$, where $d_a$ is shortest left modulo $K$, and along a reduced expression all successive swaps increase inversions, so $M_bH_{d_a}=M_a$. Equal-position generators act as $s=q^{-1}$, giving a surjection $\mathbf1_K\otimes H_q\to\operatorname{span}\{M_a\}$; the same shortest representatives index both bases, so it is an isomorphism. Step 1.1 and the fixed cyclic vector identify the induced and tensor bars. Change generators to $G_i=-H_i$: they satisfy the normalization with $v=s$, their stabilizer character is $-s$, and their standard vectors are $n_{d_a}=(-1)^{\ell(d_a)}M_a$. The positive-$s$ sign canonical vector at $d_b$, multiplied by $(-1)^{\ell(d_b)}$, is exactly $L_b$ by triangular uniqueness. [F1, F2, F3, step 1.1]

1.3 **The positive tensor coefficient.** The sign reduction in [F3] gives $U_{a,b}=(-1)^{\ell(d_a)+\ell(d_b)}\sum_z(-s)^{\ell(z)}s^{\ell(d_b)-\ell(zd_a)}P_{zd_a,d_b}(s^{-2})$. Shortest-left length additivity cancels the powers of $s$ inside the sum. Inversion of permutations preserves ordinary KL coefficients: the algebra anti-involution $H_x\mapsto H_{x^{-1}}$ preserves bar and positive triangularity, so uniqueness in [F2] proves $P_{x,y}=P_{x^{-1},y^{-1}}$. Replace $z$ by $z^{-1}$ to obtain the stated formula with $w_az,w_b$. This is a change of generators and standard-vector signs, not a reciprocal substitution in a positive chart. [F2, F3, step 1.2, algebra]

2.1 **Reverse-position indices and pairing.** Put $M_a^*=M_{aw_0}$ as actual vectors in the same tensor space. The shortest-left representative of $aw_0$ is $c_a=w_Kd_aw_0$: reversal interchanges increasing and decreasing places, and reversal within each equal-value block restores shortest-left status. Its length is $\ell(w_0)-\ell(w_K)-\ell(d_a)$. Define the bilinear form $(M_a,\psi M_b^*)=\delta_{ab}$; its Gram matrix is the inverse of the bar matrix after reversing the second label, so it is not the raw permutation matrix. The three generator cases of step 1.1 and $\psi(xH_i)=\psi(x)\bar H_i$ give $(xH_i,y)=(x,yH_{N-i})$, where $N$ is the number of tensor positions. The coproduct replacement calculation likewise gives $(E_jx,y)=(x,F_jy)$ and $(D_jx,y)=(x,D_jy)$. The two-letter bar identity iterated through a reduced word for $w_0$ gives
$$\psi M_a=s^{\sum_u\binom{\operatorname{mult}_u(a)}2}M_a^*H_{w_0}^{-1}.$$
The exponent depends only on the fixed multiset. This formula follows by successively moving the last letter past its predecessors: unequal pairs contribute the two-letter bar above, while each equal pair contributes $s^{-1}$ from $H_i^{-1}$, cancelled by the displayed power. It also proves symmetry: writing $m(a)=\sum_u\binom{\operatorname{mult}_u(a)}2$, generator adjunction and the invariance of $H_{w_0}$ under $H_i\mapsto H_{N-i}$ give $(\psi M_b^*,M_a)=s^{m(b)}(M_bH_{w_0}^{-1},M_a)=s^{m(b)-m(a)}(M_b,\psi M_a^*)=\delta_{ab}$. Since the two displayed families are bases, the form is symmetric.  [F1, F4, step 1.1, step 1.2, algebra]

2.2 **Complementary chart and inverse, with all indices.** Let $L_b^*=M_b^*+\sum_{a}q\mathbb Z[q]M_a^*$ be the ordinary-bar fixed complementary chart. In the induced module of step 1.2 this is the spherical positive-$q$ basis at $c_b$, so $L_b^*=\sum_a V_{a,b}(q)M_a^*$ with $V_{a,b}(q)=h_{w_Kc_a,w_Kc_b}(q)$ by [F3]. Write $U_{a,b}=U_{a,b}(s)$ and $V_{a,b}=V_{a,b}(s^{-1})$. Fixedness gives $L_b^*=\sum_a\bar V_{a,b}\psi M_a^*$, while $L_b=\sum_a\bar U_{a,b}\psi M_a=\sum_a\bar U_{a,b}\psi M_{aw_0}^*$. Also $L_b^*=\sum_aV_{a,b}M_{aw_0}$. Accordingly $(L_a,L_b^*)=\sum_cU_{c,a}\bar V_{c,b}$ lies in $\delta_{ab}+s\mathbb Z[s]$, while the symmetric evaluation $(L_b^*,L_a)=\sum_cV_{c,b}\bar U_{c,a}$ lies in $\delta_{ab}+s^{-1}\mathbb Z[s^{-1}]$. Their equality forces $(L_a,L_b^*)=\delta_{ab}$. Thus $U^{\mathsf T}\bar V=I$ and $D=U^{-1}=\bar V^{\mathsf T}$. Since $w_Kc_b=d_bw_0$, the spherical formula at parameter $s$ yields
$$D_{a,b}=h_{d_bw_0,d_aw_0}(s)=s^{\ell(d_b)-\ell(d_a)}P_{d_bw_0,d_aw_0}(s^{-2}).$$
This supplies the complementary longest-element identification, rather than only an abstract inverse-matrix identity. [F2, F3, F4, step 2.1, algebra]

3.1 **Primitive exterior embedding.** For one decreasing column $a_1>\cdots>a_m$ put $Y_a=\sum_{b\sim a}(-s)^{\ell(a,b)}M_b$. Pairing the two orders of any adjacent unequal letters using step 1.1 gives $Y_aH_i=-s^{-1}Y_a$; repeated entries have no sign eigenvector since their scalar is $s$. Replacing adjacent alphabet entries with $E_j,F_j$ sends $Y_a$ to the identically normalized $Y_{a'}$ or to zero on collision: all unaffected permutations match term by term, and the terms causing a collision cancel in adjacent pairs. Thus $w_{\{a_1,\ldots,a_m\}}\mapsto Y_a$ realizes the elementary wedge, with coefficient one on the decreasing tuple, integrally and injectively. The sign eigen-equations and the unique column top vector make its factor bar the ordinary restriction of the tensor bar; naturality and parenthesization in [F1] give the product embedding for arbitrary ordered column heights. Its displayed expansion is a product of these sums, hence exactly the sum over independent column permutations in the Statement. [F1, step 1.1, construct, algebra]

3.2 **Wedge charts and both orders.** Each nontrivial column permutation replaces a decreasing tuple by a smaller tuple and has coefficient in $s\mathbb Z[s]$. Expanding a wedge $L_A$ under step 3.1 therefore gives a bar-fixed ambient vector with leading term $M_{a(A)}$ and all corrections in $s\mathbb Z[s]$ on smaller tuple labels. Triangular uniqueness identifies it with the ambient $L_{a(A)}$. Expanding $\iota(M_B)$ in the ambient $L$ basis using step 2.2, and then expressing the same vector in the embedded wedge $L$ basis, gives precisely the claimed signed inverse coefficient; all ambient labels outside the decreasing-column subset have zero coefficients because the embedded $L$ vectors are a basis of the image. None of the arguments compares the heights of different columns, so the construction works unchanged in reversed factor order. At $s=1$ the displayed primitive exterior sum becomes the ordinary alternating column sum, and $D_{a,b}(1)=P_{d_bw_0,d_aw_0}(1)$ in both orders. [F4, step 2.2, step 3.1, algebra]

4.1 **Conclusion.** Steps 1.1–1.3 prove the explicit generator/bar and signed antispherical transport; steps 2.1–2.2 prove the complementary spherical coefficient and its exact longest indices; steps 3.1–3.2 prove the ordinary-bar exterior embedding and signed inverse matrix in either ordered tensor. All constructions use finite tensor and Hecke data, independently of any categorical identification. [step 1.3, step 2.2, step 3.2] ∎
