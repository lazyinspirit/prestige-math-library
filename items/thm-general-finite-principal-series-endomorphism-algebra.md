---
id: thm-general-finite-principal-series-endomorphism-algebra
kind: theorem
title: "The endomorphism algebra of a general finite principal series"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - thm-weyl-stabilizer-controls-principal-series-endomorphisms
  - lem-standard-intertwiners-form-a-basis-of-the-principal-series-endomorphism-algebra
  - lem-length-additive-products-of-standard-intertwiners
  - lem-rank-one-hecke-parameter-for-equal-torus-characters
  - thm-tits-deformation-for-the-type-a-hecke-algebra
  - def-diagonal-torus-characters-and-weyl-action
  - def-standard-intertwining-operators-for-finite-principal-series
  - def-generic-type-a-hecke-algebra
  - thm-standard-basis-of-the-generic-type-a-hecke-algebra
  - thm-type-a-iwahori-hecke-presentation
  - lem-constituent-multiplicities-under-a-semisimple-endomorphism-algebra
  - def-axiom-of-choice
  - thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Theorem 11.11 and Corollary 11.12 (the endomorphism algebra of a cuspidal pair is the Iwahori-Hecke algebra of $W(L,N)^F$), printed pp. 49-50"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Equation (11.7) and Lemmas 11.8-11.10, printed pp. 48-49"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - The Hecke algebra relations and the parameter $q_s$, with $q_s=q$ for $GL_n$ (Exercise 5.11), printed p. 44"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice, used for the Tits-deformation conclusion below. Let
$\chi$ be any torus character of $G=\operatorname{GL}_n(\mathbb F_q)$, with
equal-character block sizes $n_1,\dots,n_k$ and stabilizer
$W_\chi\cong\prod_rS_{n_r}$. Then
$$\operatorname{End}_G I(\chi)\cong\bigotimes_r H_q(S_{n_r})=H_q(W_\chi),$$
with every parameter exactly $q$. In Weyl-sorted coordinates
$\eta=(a_1^{n_1},\dots,a_k^{n_k})$ the Hecke basis maps to
$T_w=\lambda_wB_w$, where $\lambda_w=\prod_ra_r(-1)^{-\ell(w_r)}$ and $B_w$ uses
right multiplication with inverse indexing. For an unsorted character the Hecke
basis is transported from this sorted module through a module isomorphism; this
statement makes no equality claim between that transported basis and the raw
ambient-length Bruhat basis. Consequently $\operatorname{End}_G I(\chi)$ is
semisimple and is abstractly isomorphic to $\mathbb C[W_\chi]$, preserving
simple-module dimensions. Characters in the same $S_n$-orbit give isomorphic
principal-series modules and endomorphism algebras. The endomorphism algebra
identification with $H_q(W_\chi)$ itself uses no choice principle.

## Facts & Assumptions

**Given:** A character $\chi$ of the diagonal torus $T$ of $G=\operatorname{GL}_n(\mathbb F_q)$ with equal-coordinate block sizes $n_1,\dots,n_k$, its Weyl-sorted representative $\eta=(a_1^{n_1},\dots,a_k^{n_k})$ with distinct $a_r$, the stabilizers $W_\chi\cong W_\eta=\prod_rS_{n_r}$ ([[def-diagonal-torus-characters-and-weyl-action]]), the principal series modules $I(\chi),I(\eta)$ and the finite Hecke algebras $H_q(S_m)$.

[F1] For sorted $\eta$ the intertwiners $B_w=R_{\Theta_{w^{-1}}}$, $w\in W_\eta$, form a $\mathbb C$-basis of $\operatorname{End}_G(I(\eta))$ ([[lem-standard-intertwiners-form-a-basis-of-the-principal-series-endomorphism-algebra]], [[def-standard-intertwining-operators-for-finite-principal-series]]).

[F2] With the normalization $T_w=\rho(\dot w)^{-1}B_w$, $w\in W_\eta$, one has $T_uT_v=T_{uv}$ whenever the lengths add and the simple $T_s$ satisfy the type-A braid and commuting relations; here $\rho(l)=\prod_ra_r(\det l_r)$ ([[lem-length-additive-products-of-standard-intertwiners]]).

[F3] Each simple $T_s$ satisfies $T_s^2=(q-1)T_s+q\,\mathrm{id}$ and $\lambda_w=\rho(\dot w)^{-1}=\prod_ra_r(-1)^{-\ell(w_r)}$ ([[lem-rank-one-hecke-parameter-for-equal-torus-characters]]).

[F4] $H_q(S_m)$ is the specialization at $v\mapsto q$ of the generic type-A Hecke algebra, with the type-A presentation, and has $\mathbb C$-basis $T_w$, $w\in S_m$, of cardinality $m!$ ([[thm-type-a-iwahori-hecke-presentation]], [[def-generic-type-a-hecke-algebra]], [[thm-standard-basis-of-the-generic-type-a-hecke-algebra]]).

[F5] $\dim_{\mathbb C}\operatorname{End}_G(I(\eta))=|W_\eta|=\prod_rn_r!$, and $I(\chi)\cong I(w\cdot\chi)$ for every $w\in S_n$ ([[thm-weyl-stabilizer-controls-principal-series-endomorphisms]]).

[F6] $H_q(S_m)\cong\mathbb C[S_m]$ for every $m$ and prime power $q$, preserving the number and dimensions of simple modules; this is the Tits-deformation conclusion and it uses AC ([[thm-tits-deformation-for-the-type-a-hecke-algebra]], [[def-axiom-of-choice]]).

[F7] Maschke gives invariant complements in every finite-dimensional complex $G$-module. Induction on dimension, splitting a nonzero submodule of least positive dimension, gives a finite direct sum of simples. Applying this both to $\mathbb C[G]$ and to $I(\eta)$ supplies the semisimple-algebra and semisimple-module hypotheses needed for the constituent-multiplicity lemma; that lemma makes $\operatorname{End}_G(I(\eta))$ a product of complex matrix algebras ([[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]], [[lem-constituent-multiplicities-under-a-semisimple-endomorphism-algebra]]).



## Proof

**Proof technique:** direct.

1.1 Let $H_q(W_\eta):=\bigotimes_rH_q(S_{n_r})$, presented by the disjoint union of the type-A generators of the factors together with the type-A relations inside each factor and commutation between different factors. By [F3] the generators $T_s$, $s$ simple in $W_\eta$, satisfy the quadratic relations with parameter $q$; by [F2] they satisfy the braid relations inside each block and the commutation relations between blocks. Hence the assignment sending the generators of $H_q(W_\eta)$ to the corresponding $T_s\in\operatorname{End}_G(I(\eta))$ extends to a unital $\mathbb C$-algebra homomorphism $\beta:H_q(W_\eta)\to\operatorname{End}_G(I(\eta))$. [F2, F3, F4, algebra]

2.1 The map $\beta$ is an isomorphism. It is surjective: by [F1] the $B_w$, $w\in W_\eta$, form a basis of the target, and $B_w=\lambda_w^{-1}T_w$ with $\lambda_w\ne0$ by [F3]; by [F2] each $T_w$ is a product of the generators $T_s$ along a reduced expression of $w$ (products in each block are length-additive and factors from different blocks commute), so every $B_w$ lies in the image. Both algebras have the same finite dimension: the target has dimension $|W_\eta|=\prod_rn_r!$ by [F5], and the source has basis the tensor products of the standard bases of the factors, of cardinality $\prod_rn_r!$ by [F4]. A surjection of finite-dimensional vector spaces of equal dimension is an isomorphism. Under $\beta$ the tensor basis element $\bigotimes_rT_{w_r}$ maps to $\prod_rT_{w_r}=T_w=\lambda_wB_w$ by the length-additive rule of [F2], so the Hecke basis of $\operatorname{End}_G(I(\eta))$ is exactly $\{T_w=\lambda_wB_w:w\in W_\eta\}$ with $\lambda_w=\prod_ra_r(-1)^{-\ell(w_r)}$ by [F3]. The construction of $\beta$ used only [F1]-[F5], none of which uses AC. [F1, F2, F3, F4, F5, step 1.1, algebra]

3.1 By [F7] the algebra $\operatorname{End}_G(I(\eta))$ is semisimple and a product of matrix algebras, with simple-module dimensions given by the matrix sizes. By [F4] and [F6], and using $\beta$, $H_q(W_\eta)\cong\bigotimes_rH_q(S_{n_r})\cong\bigotimes_r\mathbb C[S_{n_r}]\cong\mathbb C[W_\eta]\cong\mathbb C[W_\chi]$; an algebra isomorphism preserves the number and dimensions of simple modules. [F4, F6, F7, step 2.1, algebra]

3.2 For arbitrary $\chi$, choose the sorting $\sigma\in S_n$ with $\eta=\sigma\cdot\chi$ as in the Given data and a module isomorphism $J:I(\chi)\to I(\eta)$, which exists by [F5]; conjugation by $J$ is an algebra isomorphism $\operatorname{End}_G(I(\eta))\to\operatorname{End}_G(I(\chi))$, so transporting the Hecke basis of step 2.1 gives a Hecke basis of $\operatorname{End}_G(I(\chi))$ indexed by $W_\chi=\sigma^{-1}W_\eta\sigma$ with the transported lengths, and $\operatorname{End}_G(I(\chi))\cong H_q(W_\eta)\cong H_q(W_\chi)$. By [F5] a character $w\cdot\chi$ in the same $S_n$-orbit gives an isomorphic principal series module $I(w\cdot\chi)\cong I(\chi)$, hence an isomorphic endomorphism algebra. The transported basis is not asserted to coincide with the raw ambient-length basis $\{B_v:v\in W_\chi\}$: it carries transported lengths and the $\rho$-normalization, as recorded in [[lem-length-additive-products-of-standard-intertwiners]]. [F5, step 2.1, algebra]

4.1 Steps 1.1 and 2.1 identify $\operatorname{End}_G(I(\eta))$ with $H_q(W_\eta)$ by an explicit AC-free argument and give the Hecke basis $T_w=\lambda_wB_w$; step 3.1 gives semisimplicity and the abstract isomorphism $\operatorname{End}_G(I(\chi))\cong\mathbb C[W_\chi]$ preserving simple-module dimensions, and step 3.2 transports all of this to arbitrary $\chi$ and records orbit invariance. AC is needed only in the Tits-deformation conclusion of step 3.1, as declared; the identification with $H_q(W_\chi)$ in steps 1.1 and 2.1 is choice-free. [F5, F6, F7, step 2.1, step 3.1, step 3.2] ∎ 