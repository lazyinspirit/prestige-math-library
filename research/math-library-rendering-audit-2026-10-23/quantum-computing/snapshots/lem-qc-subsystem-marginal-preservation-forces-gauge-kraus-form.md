---
id: lem-qc-subsystem-marginal-preservation-forces-gauge-kraus-form
kind: lemma
title: Preserving the logical marginal forces a gauge-only channel
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 7
deps: [cor-finite-iterated-tensor-products-represent-multilinear-maps, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-adjoint-of-a-linear-map-between-inner-product-spaces, def-inner-product-space, def-qc-first-factor-partial-trace, def-qc-kraus-representation, def-qc-quantum-channel, def-qc-register-and-computational-basis, def-qc-tensor-map, def-qc-tensor-register-and-permutation, lem-qc-tensor-product-basis-and-dimension, lem-qc-knill-laflamme-product-operator-matrix-units-form-a-basis, prop-adjoint-algebra, thm-adjoint-exists-and-is-unique-in-finite-dimension, thm-finite-dimensional-orthogonal-decomposition, thm-qc-isometric-encoding-projector, thm-qc-kraus-choi-equivalence, thm-qc-kraus-map-completely-positive, thm-qc-tensor-map-composition-and-adjoint, thm-qc-trace-preserving-kraus-normalization, thm-tensor-product-basis-from-bases]
provenance:
  statement: literature-derived
  proof: ai-altered
aliases: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Information, Chapter 7: Quantum Error Correction (working draft, March 2026)"
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
    - title: "David W. Kribs, Raymond Laflamme, David Poulin, and Maia Lesosky, Operator Quantum Error Correction"
      url: https://arxiv.org/pdf/quant-ph/0504189
---

## Statement

Let $H_G,H_L$ be nonzero finite-dimensional complex inner-product spaces in the fixed order $H_G\otimes H_L$. Let $\Phi:\mathcal B(H_G\otimes H_L)\to\mathcal B(H_G\otimes H_L)$ be a channel with a finite Kraus family $K_1,\ldots,K_m$. If
$\operatorname{Tr}_G(\Phi(\rho))=\operatorname{Tr}_G(\rho)$ for every positive semidefinite trace-one operator $\rho$ on $H_G\otimes H_L$, then there are operators $A_j:H_G\to H_G$ such that $K_j=A_j\otimes I_{H_L}$ for every $j$ and $\sum_jA_j^*A_j=I_{H_G}$. Consequently $\Phi=\mathcal T_G\otimes\operatorname{id}_{\mathcal B(H_L)}$ for the channel $\mathcal T_G(X)=\sum_jA_jXA_j^*$, and the same marginal identity holds after tensoring with the identity on any finite reference space. Conversely, any finite family $A_j$ with $\sum_jA_j^*A_j=I_{H_G}$ defines a channel with this marginal-preserving property.

Also let $J:H_G\otimes H_L\to H_P$ be an isometric encoding and let $\mathcal D:\mathcal B(H_O)\to\mathcal B(H_G\otimes H_L)$ be a channel. For every unit $g_0\in H_G$, the gauge-reset map
$$X\longmapsto J(P_{g_0}\otimes\operatorname{Tr}_G(\mathcal D(X)))J^*,$$
where $P_{g_0}x=\langle x,g_0\rangle g_0$, is a channel into the encoded subspace $\operatorname{im}J$.

## Facts & Assumptions

**Given:** The finite-dimensional spaces and channel in the first part of the Statement; and, for its final assertion, the isometry $J$ and decoded channel $\mathcal D$ there specified.

[F1] [[def-qc-first-factor-partial-trace]]: in the order $H_G\otimes H_Q$, the matrix entries are $(\operatorname{Tr}_G X)_{\alpha\beta}=\sum_sX_{(s,\alpha),(s,\beta)}$, and the same formula applies with $H_Q=H_L\otimes H_R$.

[F2] [[def-inner-product-space]] and [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: the pairing is linear in its first argument and $\langle Tx,y\rangle=\langle x,T^*y\rangle$.

[F3] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: finite-dimensional inner-product spaces have orthonormal bases. [[thm-finite-dimensional-orthogonal-decomposition]]: a vector can be extended to an orthonormal basis by adjoining an orthonormal basis of its orthogonal complement.

[F4] [[def-qc-kraus-representation]] and [[def-qc-quantum-channel]]: a finite Kraus family represents its channel on the full operator space, and a channel is completely positive and trace-preserving.

[F5] [[thm-qc-trace-preserving-kraus-normalization]]: a finite Kraus family is trace-preserving exactly when its adjoint-square sum is the identity.

[F6] [[thm-qc-isometric-encoding-projector]]: $J^*J=I$ for an isometric encoding.

[F7] [[def-qc-tensor-map]] and [[thm-qc-tensor-map-composition-and-adjoint]]: tensor maps act on elementary tensors and $(A\otimes B)^*=A^*\otimes B^*$.

[F8] [[lem-qc-tensor-product-basis-and-dimension]]: elementary product tensors form a basis and span the finite tensor product.

[F9] [[thm-qc-kraus-map-completely-positive]]: every finite Kraus sum is completely positive.

[F10] [[thm-qc-kraus-choi-equivalence]]: every finite-dimensional completely positive map has a finite Kraus representation.

[F11] [[lem-qc-knill-laflamme-product-operator-matrix-units-form-a-basis]]: for finite-dimensional factors with ordered bases, tensor products of operator matrix units form a basis of the endomorphisms of their product space. [[cor-finite-iterated-tensor-products-represent-multilinear-maps]] supplies the canonical reassociation for the ordered three-factor register.

## Proof


1.1 Fix unit vectors $g\in H_G$ and $\ell\in H_L$, and write $P_\ell x=\langle x,\ell\rangle\ell$. Extend $\ell$ to an orthonormal basis $(e_0,e_1,\ldots,e_{q-1})$ of $H_L$ with $e_0=\ell$, using [F3]. For each $j$, expand $K_j(g\otimes\ell)=\sum_{k<q}y_{jk}\otimes e_k$. Apply the marginal hypothesis to the rank-one density operator $P_{g\otimes\ell}$. By [F4] the output is $\sum_jP_{K_j(g\otimes\ell)}$. In each diagonal entry $k,k$, the partial-trace formula [F1] sums the squared coordinates of $y_{jk}$ over an orthonormal basis of $H_G$, so that entry is $\sum_j\|y_{jk}\|^2$. The required marginal is $P_\ell$, whose $k$th diagonal entry is zero for every $k>0$. Since each squared norm is nonnegative, $y_{jk}=0$ for all $j$ and $k>0$. Hence $K_j(g\otimes\ell)=\eta_{j,g,\ell}\otimes\ell$ for some $\eta_{j,g,\ell}\in H_G$. [given, F1, F2, F3, F4, choose, algebra]

2.1 Fix a unit $g$. If unit vectors $\ell_1,\ell_2$ are linearly independent, then $\ell_1+\ell_2\ne0$; normalize their sum and apply step 1.1 to $\ell_1,\ell_2$ and $(\ell_1+\ell_2)/\|\ell_1+\ell_2\|$. Linearity of $K_j$ gives $\eta_{j,g,\ell_1}\otimes\ell_1+\eta_{j,g,\ell_2}\otimes\ell_2 =\eta_{j,g,\ell_+}\otimes(\ell_1+\ell_2)$. Extend $\ell_1,\ell_2$ to a basis and apply its two corresponding coordinate functionals to the second tensor factor; this gives $\eta_{j,g,\ell_1}=\eta_{j,g,\ell_+}=\eta_{j,g,\ell_2}$. If $\ell_2=c\ell_1$ for a unit scalar $c$, linearity and $c\ne0$ give the same equality directly. Thus $\eta_{j,g,\ell}$ is independent of the unit vector $\ell$. [step 1.1, algebra]

3.1 Fix a unit $\ell_0\in H_L$. For unit $g$, step 1.1 shows $K_j(g\otimes\ell_0)$ lies in $H_G\otimes\operatorname{span}\{\ell_0\}$. Scaling gives the same for every $g$. Define $A_jg$ by $K_j(g\otimes\ell_0)=A_jg\otimes\ell_0$; it is unique because $u\mapsto u\otimes\ell_0$ is injective. The linearity of $K_j$ makes $A_j$ linear. By step 2.1, $K_j(g\otimes\ell)=A_jg\otimes\ell$ for all simple tensors. Since simple tensors span by [F8], $K_j=A_j\otimes I_{H_L}$. [step 1.1, step 2.1, F8, construct, choose]

4.1 Trace preservation [F5] and step 3.1 give $(\sum_jA_j^*A_j)\otimes I_{H_L}=I_{H_G}\otimes I_{H_L}$, using the tensor-adjoint rule [F7]. Apply both sides to $g\otimes\ell_0$ for arbitrary $g$ and a fixed unit $\ell_0$. Injectivity of $u\mapsto u\otimes\ell_0$ yields $\sum_jA_j^*A_j=I_{H_G}$. [F5, F7, step 3.1, algebra, choose]

5.1 Define $\mathcal T_G(X)=\sum_jA_jXA_j^*$. Its finite Kraus form makes it completely positive by [F9], and the normalization from step 4.1 makes it trace-preserving by [F5]. Thus it is a channel. On a simple operator tensor $X_G\otimes X_L$, step 3.1 gives $\Phi(X_G\otimes X_L)=\sum_j(A_jX_GA_j^*)\otimes X_L =\mathcal T_G(X_G)\otimes X_L$. By [F11], tensor products of operator matrix units form a basis of the full operator space, so linearity gives $\Phi=\mathcal T_G\otimes\operatorname{id}_{\mathcal B(H_L)}$. [step 3.1, step 4.1, F5, F9, F11, algebra]

5.2 For a finite reference space $H_R$, choose orthonormal bases of $H_G,H_L,H_R$ by [F3]; [F8] gives the product basis of $H_L\otimes H_R$. Use the canonical reassociation in [F11] and the operator matrix-unit basis there to write any operator $\rho$ on $(H_G\otimes H_L)\otimes H_R$ as $\rho=\sum_{s,t}|g_s\rangle\langle g_t|\otimes\rho_{st}$, with $\rho_{st}\in\mathcal B(H_L\otimes H_R)$. Write $A_jg_s=\sum_r a^{(j)}_{rs}g_r$. By the first-factor partial-trace formula [F1], the coefficient of $\rho_{st}$ after applying $\Phi\otimes\operatorname{id}_{\mathcal B(H_R)}$ and tracing out $G$ is $\sum_{j,r}a^{(j)}_{rs}\overline{a^{(j)}_{rt}}=\sum_j(A_j^*A_j)_{ts}=\delta_{ts}$. Therefore the output marginal is $\sum_s\rho_{ss}=(\operatorname{Tr}_G\otimes\operatorname{id}_{\mathcal B(H_R)})(\rho)$. The calculation applies to every operator, hence to every density operator and every finite reference. [F1, F3, F8, F11, step 4.1, algebra, choose]

6.1 For the gauge-reset assertion, choose an orthonormal basis $(g_s)$ of $H_G$ and define $C_s:H_G\otimes H_L\to H_L$ by $C_s(g\otimes\ell)=\langle g,g_s\rangle\ell$. Its adjoint is $C_s^*\ell=g_s\otimes\ell$, so $\sum_sC_s^*C_s(g\otimes\ell)=\sum_s\langle g,g_s\rangle g_s\otimes\ell=g\otimes\ell$; simple tensors span, hence $\sum_sC_s^*C_s=I_{H_G\otimes H_L}$. On the product basis, the matrix entries of $\sum_sC_sYC_s^*$ are exactly the first-factor contraction entries in [F1], hence $\operatorname{Tr}_G(Y)=\sum_sC_sYC_s^*$. Let $J_{g_0}:H_L\to H_P$ be $J_{g_0}\ell=J(g_0\otimes\ell)$. It is an isometry by [F6]. Choose finite Kraus operators $D_r$ for $\mathcal D$ using [F10]. Since $J_{g_0}YJ_{g_0}^*=J(P_{g_0}\otimes Y)J^*$, the gauge-reset map equals $X\mapsto\sum_{s,r}J_{g_0}C_sD_rX D_r^*C_s^*J_{g_0}^*$, so it has Kraus operators $J_{g_0}C_sD_r$, and $\sum_{s,r}(J_{g_0}C_sD_r)^*(J_{g_0}C_sD_r) =\sum_rD_r^*(\sum_sC_s^*J_{g_0}^*J_{g_0}C_s)D_r =\sum_rD_r^*D_r=I_{H_O}$. Thus the map is completely positive by [F9] and trace-preserving by [F5], so it is a channel. Its range is contained in $\operatorname{im}J$ by construction. [given, F1, F2, F5, F6, F7, F8, F9, F10, construct, choose] ∎

