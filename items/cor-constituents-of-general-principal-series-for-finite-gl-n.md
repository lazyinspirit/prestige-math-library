---
id: cor-constituents-of-general-principal-series-for-finite-gl-n
kind: corollary
title: "The constituents of a general finite principal series"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - thm-general-finite-principal-series-endomorphism-algebra
  - lem-constituent-multiplicities-under-a-semisimple-endomorphism-algebra
  - thm-complex-irreducibles-of-symmetric-groups-are-specht-modules
  - thm-hook-length-formula
  - thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order
  - thm-spherical-principal-series-constituents-of-gl-n-fq
  - lem-trace-form-nondegeneracy-characterizes-semisimple-finite-dimensional-algebras
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Corollary 11.12 and Example 11.13 (parametrisation of the series by irreducibles of $W(L,N)^F$), printed p. 50"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Theorem 5.21 and Example 5.22 (multiplicities are dimensions of simple modules of $W^F\\cong S_n$), printed pp. 45-46"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
    - title: "Ivan Losev, Lecture 8: Representations of GL_n(F_q) - Section 2.1 (summands indexed by simple modules of the endomorphism algebra), PDF pp. 3-4"
      url: "https://ivanloseu.github.io/RT/RT8.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice, used through Tits deformation. Let
$G=\operatorname{GL}_n(\mathbb F_q)$, $\chi\in\widehat T$ with equal-character
blocks of sizes $n_1,\dots,n_k$ and Weyl stabiliser
$W_\chi=S_{n_1}\times\cdots\times S_{n_k}$. Then the isomorphism classes of
simple constituents of the principal series $I(\chi)$ are indexed by the tuples
$(\lambda^{(1)},\dots,\lambda^{(k)})$ of partitions
$\lambda^{(r)}\vdash n_r$, and the multiplicity of the constituent attached to
such a tuple equals
$$\prod_{r=1}^kf^{\lambda^{(r)}},$$
the product of the numbers of standard tableaux of the parts; equivalently
$$\operatorname{End}_G\bigl(I(\chi)\bigr)\cong\prod_{(\lambda^{(1)},\dots,\lambda^{(k)})}\operatorname M_{\prod_rf^{\lambda^{(r)}}}(\mathbb C).$$
In particular, if $\chi$ is regular ($k=n$, all $n_r=1$) then $I(\chi)$ is
irreducible, and if $\chi$ is trivial ($k=1$, $n_1=n$) the multiplicities are
the hook-length numbers $f^\lambda$ of
[[thm-spherical-principal-series-constituents-of-gl-n-fq]].

## Facts & Assumptions

**Given:** $G=\operatorname{GL}_n(\mathbb F_q)$ with Borel $B$ and diagonal torus $T$, a character $\chi\in\widehat T$ with equal-character block sizes $n_1,\dots,n_k$, the stabiliser $W_\chi=S_{n_1}\times\cdots\times S_{n_k}$, the principal series $I(\chi)$ and its endomorphism algebra $E=\operatorname{End}_G(I(\chi))$.

[F1] Assume AC; $E\cong\bigotimes_rH_q(S_{n_r})=H_q(W_\chi)$, and $E\cong\mathbb C[W_\chi]$ preserving the number and dimensions of simple modules, with the identification $E\cong H_q(W_\chi)$ itself choice-free ([[thm-general-finite-principal-series-endomorphism-algebra]], [[def-axiom-of-choice]]).

[F2] $\mathbb C[G]$ and hence every finite-dimensional complex $G$-module is semisimple ([[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]).

[F3] For a finite-dimensional semisimple $\mathbb C$-algebra $A$ and a semisimple finite-dimensional $A$-module $M\cong\bigoplus_iV_i^{\oplus m_i}$ over pairwise non-isomorphic simples, $E=\operatorname{End}_A(M)$ is semisimple with $E\cong\prod_i\operatorname M_{m_i}(\mathbb C)$, and its simple modules are the spaces $\operatorname{Hom}_A(V_i,M)$ of dimension $m_i$ ([[lem-constituent-multiplicities-under-a-semisimple-endomorphism-algebra]]).

[F4] A nonzero semisimple finite-dimensional $\mathbb C$-algebra is isomorphic to a product of matrix algebras, with simple modules the natural column modules of the factors ([[lem-trace-form-nondegeneracy-characterizes-semisimple-finite-dimensional-algebras]]).

[F5] The simple $\mathbb C[S_m]$-modules are the Specht modules $S^\lambda$, $\lambda\vdash m$, pairwise non-isomorphic, and $\dim_{\mathbb C}S^\lambda=f^\lambda$ is the number of standard $\lambda$-tableaux ([[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]], [[thm-hook-length-formula]]).



## Proof

**Proof technique:** direct.

1.1 By [F2] the module $I(\chi)$ is a semisimple $\mathbb C[G]$-module, so [F3] applies to it with $A=\mathbb C[G]$ and $M=I(\chi)$: the constituents $V_i$ of $I(\chi)$ are in bijection with the simple $E$-modules $\operatorname{Hom}_G(V_i,I(\chi))$, and the multiplicity of $V_i$ equals the dimension of that simple $E$-module. By [F1] we have $E\cong\bigotimes_rH_q(S_{n_r})$ and, through the Tits isomorphism, $E\cong\mathbb C[W_\chi]=\bigotimes_r\mathbb C[S_{n_r}]$. [F1, F2, F3]

2.1 By [F4] each factor is a product of matrix algebras, $\mathbb C[S_{n_r}]\cong\prod_{i}\operatorname M_{d^{(r)}_i}(\mathbb C)$, with simple modules the column modules of dimensions $d^{(r)}_i$; by [F5] these simple modules are exactly the Specht modules $S^{\lambda^{(r)}}$, $\lambda^{(r)}\vdash n_r$, of dimension $f^{\lambda^{(r)}}$. For matrix algebras there is an algebra isomorphism $\operatorname M_a(\mathbb C)\otimes\operatorname M_b(\mathbb C)\cong\operatorname M_{ab}(\mathbb C)$ sending the matrix units $E_{ij}\otimes F_{kl}$ to the matrix units indexed by the pairs $(i,k),(j,l)$, which is multiplicative because the products of pairs multiply componentwise; tensoring over the factors therefore gives $\bigotimes_r\mathbb C[S_{n_r}]\cong\prod_{(\lambda^{(1)},\dots,\lambda^{(k)})}\operatorname M_{\prod_rf^{\lambda^{(r)}}}(\mathbb C)$, with the simple module of the tuple $(\lambda^{(1)},\dots,\lambda^{(k)})$ being the external tensor product $S^{\lambda^{(1)}}\boxtimes\cdots\boxtimes S^{\lambda^{(k)}}$ of dimension $\prod_rf^{\lambda^{(r)}}$. [F4, F5, step 1.1, algebra]

3.1 Transporting the simple $E$-modules of step 2.1 along the isomorphism $E\cong\mathbb C[W_\chi]$ and applying the parametrisation of step 1.1, the constituents of $I(\chi)$ are indexed by the tuples $(\lambda^{(1)},\dots,\lambda^{(k)})$, and the constituent attached to a tuple has multiplicity $\prod_rf^{\lambda^{(r)}}$; by [F3] the endomorphism algebra is $\prod_{(\lambda^{(1)},\dots,\lambda^{(k)})}\operatorname M_{\prod_rf^{\lambda^{(r)}}}(\mathbb C)$, as displayed. If $\chi$ is regular then every $n_r=1$ and the only partition of each $n_r=1$ is $(1)$, with $f^{(1)}=1$, so the tuple index set has one element and its multiplicity is $1$: $I(\chi)$ is irreducible. If $\chi$ is trivial then $k=1$, $n_1=n$, and the formula is the spherical multiplicity formula of [[thm-spherical-principal-series-constituents-of-gl-n-fq]]. [F3, step 2.1, algebra]

4.1 Steps 1.1, 2.1 and 3.1 give the index set, the multiplicities, the endomorphism algebra and the two boundary cases. AC is carried only from the Tits-deformation supplier inside [F1], as declared; all remaining arguments are finite-dimensional over $\mathbb C$. [F1, F3, step 1.1, step 2.1, step 3.1] ∎ 