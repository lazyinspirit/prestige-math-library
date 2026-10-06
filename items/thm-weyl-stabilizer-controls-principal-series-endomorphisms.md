---
id: thm-weyl-stabilizer-controls-principal-series-endomorphisms
kind: theorem
title: "The Weyl stabiliser controls the principal series endomorphisms"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - lem-mackey-support-for-homs-between-finite-principal-series
  - def-diagonal-torus-characters-and-weyl-action
  - thm-character-inner-product-computes-intertwiner-dimension
  - def-standard-inner-product-on-complex-class-functions
  - thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order
  - thm-schurs-lemma-for-modules
  - cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue
  - cor-the-complex-numbers-are-an-algebraic-closure-of-the-reals
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jay Taylor, Finite Reductive Groups - Theorem 5.21 (a bijection Irr(W^F) to Irr(G | R_T^G(M))), printed pp. 45-46"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Section 11.3, equation (11.7) (dimension |W(L,N)^F| of the endomorphism algebra), printed pp. 47-49"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Masao Oi, Representation Theory of Finite Groups of Lie Type - Proposition 2.7 and its proof (the Weyl transforms of chi_1 x chi_2), printed pp. 12-13"
      url: "https://masaooi.github.io/DL.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $n\ge1$, let $q$ be a prime power, put $G=\operatorname{GL}_n(\mathbb F_q)$
with diagonal torus $T$, and let $\chi,\chi'\in\widehat T$ with Weyl stabiliser
$W_\chi\le S_n$ ([[def-diagonal-torus-characters-and-weyl-action]]). Then:

1. $\operatorname{Hom}_G(I(\chi),I(\chi'))\ne0$ if and only if
$\chi'=w\cdot\chi$ for some $w\in S_n$; in that case
$$\dim_{\mathbb C}\operatorname{Hom}_G\bigl(I(\chi),I(\chi')\bigr)=\#\{\,u\in S_n:\chi=u\cdot\chi'\,\}=|W_\chi|,$$
and in general this dimension is either $0$ or $|W_\chi|$, hence at most
$|W_\chi|$;
2. in particular
$$\dim_{\mathbb C}\operatorname{End}_G\bigl(I(\chi)\bigr)=|W_\chi|=\prod_{r=1}^kn_r!,$$
where $n_1,\dots,n_k$ are the sizes of the equal-character blocks of $\chi$;
3. $I(\chi)\cong I(w\cdot\chi)$ for every $w\in S_n$, although conjugating
functions by the permutation matrix $\dot w$ need not preserve the
$B$-covariance condition and therefore is not by itself an intertwiner of the
principal series modules.

All statements hold over $\mathbb C$ for every prime power $q$ and every
character $\chi$, and no splitting hypothesis beyond $\mathbb C$ being a
splitting field for the finite groups $T$ and $S_n$ is needed. No choice
principle is used.

## Facts & Assumptions

**Given:** $G=\operatorname{GL}_n(\mathbb F_q)$, the torus $T$, characters $\chi,\chi'\in\widehat T$, their principal series modules $I(\chi)=R_T^G(\chi)$ and $I(\chi')=R_T^G(\chi')$, and the Weyl stabiliser $W_\chi$.

[F1] The Mackey support lemma computes $\dim_{\mathbb C}\operatorname{Hom}_G(I(\chi),I(\chi'))=\#\{u\in S_n:\chi=u\cdot\chi'\}$, and this is nonzero exactly when $\chi'$ lies in the $S_n$-orbit of $\chi$ ([[lem-mackey-support-for-homs-between-finite-principal-series]]). The Weyl stabiliser $W_\chi=\{w:w\cdot\chi=\chi\}$ is a Young subgroup of $S_n$ with $|W_\chi|=\prod_rn_r!$; its conjugates $W_{w\cdot\chi}=wW_\chi w^{-1}$ have the same order ([[def-diagonal-torus-characters-and-weyl-action]]).

[F2] For finite-dimensional complex $G$-modules $V,W$ one has $\dim\operatorname{Hom}_G(W,V)=\langle\chi_V,\chi_W\rangle$ for the standard Hermitian inner product on class functions, which is positive definite ([[thm-character-inner-product-computes-intertwiner-dimension]], [[def-standard-inner-product-on-complex-class-functions]]).

[F3] Maschke's theorem gives a complement to every submodule of a finite-dimensional complex $G$-module. Repeatedly splitting a nonzero submodule of least positive dimension gives a finite direct sum of simples ([[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]). For a simple finite-dimensional complex $G$-module $V$, every endomorphism $T$ has an eigenvalue $\lambda$; Schur's lemma forces $T-\lambda\mathrm{id}=0$, since this endomorphism has nonzero kernel. Thus $\operatorname{End}_G(V)=\mathbb C$, Homs between non-isomorphic simples vanish, and finite component projections give $\dim\operatorname{Hom}_G(V,M)$ equal to the multiplicity of $V$ in $M$ ([[thm-schurs-lemma-for-modules]], [[cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue]], [[cor-the-complex-numbers-are-an-algebraic-closure-of-the-reals]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the dimension $d(\chi,\chi'):=\dim_{\mathbb C}\operatorname{Hom}_G(I(\chi),I(\chi'))$ equals $\#\{u\in S_n:\chi=u\cdot\chi'\}$ and is nonzero exactly when $\chi'=w\cdot\chi$ for some $w$. If $\chi'=w\cdot\chi$ then $\chi=u\cdot\chi'\iff uw\in W_\chi\iff u\in W_\chi w^{-1}$, so the counting set is the coset $W_\chi w^{-1}$ and $d(\chi,\chi')=|W_\chi|$; otherwise it is empty and $d(\chi,\chi')=0$. This proves assertion (1), including the bound $d(\chi,\chi')\le|W_\chi|$. [F1, algebra]

2.1 Assertion (2) is the case $\chi'=\chi$ of step 1.1: $\dim_{\mathbb C}\operatorname{End}_G(I(\chi))=\#\{u:\chi=u\cdot\chi\}=|W_\chi|$, and the order of the Young subgroup is $\prod_{r=1}^kn_r!$ by [F1]. [F1, step 1.1, algebra]

3.1 Fix $w\in S_n$, let $c$ and $c'$ be the characters of $I(\chi)$ and $I(w\cdot\chi)$, and compute the four inner products using [F2] and steps 1.1 and 2.1: $\langle c,c\rangle=\dim\operatorname{End}_G(I(\chi))=|W_\chi|$; $\langle c',c'\rangle=\dim\operatorname{End}_G(I(w\cdot\chi))=|W_{w\cdot\chi}|=|W_\chi|$; and $\langle c,c'\rangle=\dim\operatorname{Hom}_G(I(w\cdot\chi),I(\chi))=\#\{u:w\cdot\chi=u\cdot\chi\}=|W_\chi|$, because $w\cdot\chi=u\cdot\chi\iff u^{-1}w\in W_\chi$, a coset of $W_\chi$; conjugate symmetry of the inner product gives $\langle c',c\rangle=\overline{\langle c,c'\rangle}=|W_\chi|$ since the value is real. Therefore $\langle c-c',c-c'\rangle=|W_\chi|-|W_\chi|-|W_\chi|+|W_\chi|=0$. [F1, F2, step 1.1, step 2.1, algebra]

4.1 The standard inner product on complex class functions is positive definite by [F2], so $\langle c-c',c-c'\rangle=0$ forces $c=c'$ as functions on $G$. [F2, step 3.1]

5.1 Both $I(\chi)$ and $I(w\cdot\chi)$ are finite-dimensional complex $G$-modules, hence semisimple by [F3]. For every simple constituent $V$ of either module, with character $\chi_V$, [F3] and [F2] give its multiplicities as $\dim\operatorname{Hom}_G(V,I(\chi))=\langle c,\chi_V\rangle$ and $\dim\operatorname{Hom}_G(V,I(w\cdot\chi))=\langle c',\chi_V\rangle$. Since $c=c'$ by step 4.1, these multiplicities agree, and the finite simple decompositions give $I(\chi)\cong I(w\cdot\chi)$. Conjugating functions with $\dot w$ gives covariance for the conjugate Borel $\dot wB\dot w^{-1}$, which need not equal $B$, so that operation alone need not give an intertwiner for the fixed Borel. [F2, F3, step 4.1, algebra]

6.1 Assertion (1) is step 1.1, assertion (2) is step 2.1, and assertion (3) is step 5.1 together with the caveat recorded there; the argument used only the finite Mackey count, the standard positive definite inner product, Maschke's theorem and Schur's lemma, and it applied the conjugation formula for the stabiliser only at the level of permutation actions of $S_n$ on $\widehat T$, so no choice principle is used. [step 1.1, step 2.1, step 5.1] ∎ 
