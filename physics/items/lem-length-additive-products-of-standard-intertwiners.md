---
id: lem-length-additive-products-of-standard-intertwiners
kind: lemma
title: "Length-additive products of the standard intertwiners"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - lem-standard-intertwiners-form-a-basis-of-the-principal-series-endomorphism-algebra
  - thm-weyl-stabilizer-controls-principal-series-endomorphisms
  - def-diagonal-torus-characters-and-weyl-action
  - def-standard-intertwining-operators-for-finite-principal-series
  - lem-length-increasing-hecke-products
  - def-bruhat-double-coset-basis-of-the-finite-hecke-algebra
  - def-principal-series-module-for-finite-gl-n
  - def-compositions-partial-flags-and-standard-parabolics
  - thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq
  - thm-group-ring-is-a-unital-algebra-with-basis-g
  - thm-determinant-of-a-triangular-matrix
  - thm-determinant-multiplicative
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Lemma 11.9 and its proof, printed p. 49"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Theorem 11.11 and the preceding discussion of (P1)-(P3), printed pp. 49-50"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - The relation $\\bar T_s\\bar T_w=\\bar T_{sw}$ for length-increasing products, printed p. 44"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations, Remark 9.3, Proposition 9.5, §11.1 and Theorem 11.11"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

For Weyl-sorted $\eta=(a_1^{n_1},\dots,a_k^{n_k})$ with distinct $a_r$, put
$L=\prod_r\operatorname{GL}_{n_r}(\mathbb F_q)$ and
$\rho(l)=\prod_r a_r(\det l_r)$. With the canonical intertwiners $B_w$ of
[[def-standard-intertwining-operators-for-finite-principal-series]], set
$T_w=\rho(\dot w)^{-1}B_w$ for $w\in W_\eta$. Then $T_uT_v=T_{uv}$ whenever the
intrinsic (equivalently here ambient) lengths add, and the simple $T_s$ satisfy
all type-A braid and commuting relations. The raw basis also has length-additive
products $B_uB_v=B_{uv}$ in these sorted coordinates. For arbitrary $\chi$,
choose the prescribed sorting $\eta$ and a module isomorphism
$J:I(\chi)\to I(\eta)$ from
[[thm-weyl-stabilizer-controls-principal-series-endomorphisms]]; transport the
normalized basis through $J$. Its labels and length are transported through the
sorting permutation. This does not identify the unsorted raw ambient-length
basis with the transported basis. No choice principle is used.

## Facts & Assumptions

**Given:** $n\ge1$, a prime power $q$, $G=\operatorname{GL}_n(\mathbb F_q)$ with diagonal torus $T$ and Borel $B$, a Weyl-sorted character $\eta=(a_1^{n_1},\dots,a_k^{n_k})$ with distinct characters $a_r$ of $\mathbb F_q^\times$, the blocks $n_1,\dots,n_k$ of $n$, the standard parabolic $P=L\ltimes U_P$ with Levi $L=\prod_r\operatorname{GL}_{n_r}(\mathbb F_q)$ and unipotent radical $U_P$, the character $\rho(l)=\prod_r a_r(\det l_r)$ of $L$, the principal series module $I(\eta)$ with its idempotent $e_\eta=e_\eta^G$, and for $w\in W_\eta$ the corner element $\Theta_{w^{-1}}=q^{\ell(w)}e_\eta\dot w^{-1}e_\eta$ and operator $B_w=R_{\Theta_{w^{-1}}}$ ([[def-standard-intertwining-operators-for-finite-principal-series]]).

[F1] The Weyl group of $G$ is $W=S_n$ with simple transpositions $s_i$ and inversion length $\ell$; for the sorted character $\eta$ the stabiliser is the group of block permutations $W_\eta=\prod_rS_{n_r}$ ([[def-diagonal-torus-characters-and-weyl-action]]).

[F2] The elements $B_w$, $w\in W_\eta$, form a $\mathbb C$-basis of $\operatorname{End}_G(I(\eta))$, where the corner multiplication is the multiplication in $\mathbb C[G]$ and right multiplication turns $e_\eta\mathbb C[G]e_\eta$ into $\operatorname{End}_G(I(\eta))$ with reversed products ($R_aR_b=R_{ba}$) ([[def-standard-intertwining-operators-for-finite-principal-series]], [[lem-standard-intertwiners-form-a-basis-of-the-principal-series-endomorphism-algebra]]).

[F3] For each block $r$ let $e_r=|B_r|^{-1}\sum_{b\in B_r}\widetilde\eta_r(b)^{-1}b$ and let $e_{B_r}$ be the corresponding idempotent for the trivial character. The map $m_r:\mathbb C[\operatorname{GL}_{n_r}(\mathbb F_q)]\to\mathbb C[\operatorname{GL}_{n_r}(\mathbb F_q)]$, $g\mapsto\psi_r(g)^{-1}g$ with $\psi_r=a_r\circ\det$, is an algebra automorphism, and $m_r(e_{B_r})=e_r$ because for upper triangular $b$ one has $\psi_r(b)=a_r(\det b)=\prod_ia_r(b_{ii})=\widetilde\eta_r(b)$. Multiplicativity of the determinant makes $\psi_r$ a character, so $m_r(g)m_r(h)=\psi_r(gh)^{-1}gh=m_r(gh)$; the inverse scales $g$ by $\psi_r(g)$. ([[thm-group-ring-is-a-unital-algebra-with-basis-g]], [[thm-determinant-multiplicative]], [[thm-determinant-of-a-triangular-matrix]], [[def-principal-series-module-for-finite-gl-n]]).

[F4] For every block $r$ the standard basis elements $T_x^{(r)}=q^{\ell(x)}e_{B_r}\dot xe_{B_r}$, $x\in S_{n_r}$, of the block Hecke algebra satisfy $T_x^{(r)}T_y^{(r)}=T_{xy}^{(r)}$ whenever $\ell(xy)=\ell(x)+\ell(y)$ ([[def-bruhat-double-coset-basis-of-the-finite-hecke-algebra]], [[lem-length-increasing-hecke-products]]).

[F5] $\dim_{\mathbb C}\operatorname{End}_G(I(\eta))=|W_\eta|$ and $I(\chi)\cong I(w\cdot\chi)$ for every $w\in S_n$, so an arbitrary $\chi$ is isomorphic to its sorted form ([[thm-weyl-stabilizer-controls-principal-series-endomorphisms]]).

[F6] $P=L\ltimes U_P$ with $L$ normalising $U_P$, and $B=(B\cap L)U_P$ is a bijection, so every $b\in B$ has a unique expression $b=ul$ with $u\in U_P$, $l\in B\cap L$ ([[thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq]], [[def-compositions-partial-flags-and-standard-parabolics]]).

## Proof

**Proof technique:** direct.

1.1 In the group algebra $\mathbb C[G]$ one has $e_\eta^G=e_{U_P}e_\eta^L$ with $e_{U_P}=|U_P|^{-1}\sum_{u\in U_P}u$ and $e_\eta^L=\prod_r e_r$: indeed $B=U_PB_L$ is a bijection because $P=L\ltimes U_P$ and $B=(B\cap L)U_P$, and $\widetilde\eta(ul)=\widetilde\eta(l)$ for $u\in U_P$, $l\in B\cap L$, so $\sum_{b\in B}\widetilde\eta(b)^{-1}b=(\sum_{u\in U_P}u)\bigl(\sum_{l\in B\cap L}\widetilde\eta(l)^{-1}l\bigr)=|U_P|e_{U_P}\prod_r|B_r|e_r$, while $|B|=|U_P|\prod_r|B_r|$. Moreover $e_{U_P}$ commutes with every element of $\mathbb C[L]$, because $lU_Pl^{-1}=U_P$ for $l\in L$ (the Levi normalises the unipotent radical), so conjugation by $l$ permutes the sum defining $e_{U_P}$. [F6, algebra]

1.2 Fix a block $r$ and $x,y\in S_{n_r}$ with $\ell(xy)=\ell(x)+\ell(y)$. Since $m_r$ is an algebra automorphism with $m_r(e_{B_r})=e_r$ and $m_r(\dot z)=\psi_r(\dot z)^{-1}\dot z$, one has $m_r(e_{B_r}\dot ze_{B_r})=\psi_r(\dot z)^{-1}e_r\dot ze_r$ for every $z$. Applying $m_r$ to the block identity $e_{B_r}\dot xe_{B_r}\cdot e_{B_r}\dot ye_{B_r}=e_{B_r}\dot{xy}e_{B_r}$, which follows from [F4] by writing $e_{B_r}\dot ze_{B_r}=q^{-\ell(z)}T_z^{(r)}$, and using multiplicativity of $\psi_r$ together with $\dot x\dot y=\dot{xy}$, the scalar factors cancel and give $e_r\dot xe_r\cdot e_r\dot ye_r=e_r\dot{xy}e_r$. [F3, F4, algebra]

2.1 For $w\in W_\eta$ the permutation matrix $\dot w$ is block diagonal with blocks $\dot w_r\in\operatorname{GL}_{n_r}(\mathbb F_q)$, and $\ell(w)=\sum_r\ell(w_r)$. Using step 1.1 and $\dot w\in L$, $e_{U_P}\dot w=\dot we_{U_P}$ and $e_{U_P}^2=e_{U_P}$, one gets $e_\eta^G\dot w^{-1}e_\eta^G=e_{U_P}e_\eta^L\dot w^{-1}e_\eta^Le_{U_P}=e_{U_P}\prod_r\bigl(e_r\dot w_r^{-1}e_r\bigr)$; multiplying by $q^{\ell(w)}$ and distributing the length over the blocks gives $\Theta_{w^{-1}}=e_{U_P}\prod_r\Theta^{(r)}_{w_r^{-1}}$, where $\Theta^{(r)}_{x}=q^{\ell(x)}e_r\dot xe_r$ is the block corner element. [F1, step 1.1, algebra]

3.1 Let $u,v\in W_\eta$ satisfy $\ell(uv)=\ell(u)+\ell(v)$. Writing the block permutations $u=\prod_ru_r$, $v=\prod_rv_r$, one has $\ell(uv)=\sum_r\ell(u_rv_r)$ and $\ell(u)+\ell(v)=\sum_r(\ell(u_r)+\ell(v_r))$, so $\ell(u_rv_r)=\ell(u_r)+\ell(v_r)$ in every block. By steps 2.1 and 1.2, $\Theta_{v^{-1}}\Theta_{u^{-1}}=e_{U_P}\prod_r\Theta^{(r)}_{v_r^{-1}}\cdot e_{U_P}\prod_r\Theta^{(r)}_{u_r^{-1}}=e_{U_P}\prod_r\Theta^{(r)}_{v_r^{-1}}\Theta^{(r)}_{u_r^{-1}}=e_{U_P}\prod_r\Theta^{(r)}_{(u_rv_r)^{-1}}=\Theta_{(uv)^{-1}}$. Since right multiplication is a homomorphism (with the reversed product convention), $B_uB_v=R_{\Theta_{u^{-1}}}R_{\Theta_{v^{-1}}}=R_{\Theta_{v^{-1}}\Theta_{u^{-1}}}=R_{\Theta_{(uv)^{-1}}}=B_{uv}$: the raw basis is length-additive in the sorted coordinates. [F2, step 2.1, step 1.2, algebra]

4.1 For general $u,v$ with additivity, multiplicativity of $\rho$ and $\dot u\dot v=\dot{uv}$ give $T_uT_v=\rho(\dot u)^{-1}\rho(\dot v)^{-1}B_uB_v=\rho(\dot{uv})^{-1}B_{uv}=T_{uv}$ by step 3.1. [step 3.1, algebra]

5.1 For simple transpositions inside a block, the permutations $s_is_{i+1}s_i$ and $s_{i+1}s_is_{i+1}$ coincide and both triple products are length-additive, so step 4.1 applied twice gives $T_{s_i}T_{s_{i+1}}T_{s_i}=T_{s_is_{i+1}s_i}=T_{s_{i+1}s_is_{i+1}}=T_{s_{i+1}}T_{s_i}T_{s_{i+1}}$; for simple transpositions with commuting permutations, both products are length-additive and step 4.1 gives $T_{s_i}T_{s_j}=T_{s_is_j}=T_{s_js_i}=T_{s_j}T_{s_i}$. [F1, step 4.1, algebra]

6.1 Steps 3.1, 4.1 and 5.1 give the length-additive rule for the raw and the normalised basis together with the braid and commuting relations. For an arbitrary $\chi$, let $\sigma\in S_n$ with $\eta=\sigma\cdot\chi$ be the prescribed sorting and let $J:I(\chi)\to I(\eta)$ be a module isomorphism, which exists by [F5] with $W_\chi=\sigma^{-1}W_\eta\sigma$; conjugating the transported basis $T\mapsto J^{-1}TJ$ is an algebra isomorphism, so the same product identities hold for the transported basis, whose label in $W_\chi$ is $\sigma^{-1}w\sigma$ and whose governing length is the transported intrinsic length $\ell(w)$. This length need not equal the ambient inversion length of $\sigma^{-1}w\sigma$, because inversion length is not a class function on $S_n$, so the transported basis is not asserted to coincide with the raw ambient-length basis $\{B_v:v\in W_\chi\}$, which carries ambient lengths and no $\rho$-normalisation. All sums are finite, the block decomposition and permutation matrices are explicit, and no choice principle is used. [F5, step 3.1, step 4.1, step 5.1] ∎ 