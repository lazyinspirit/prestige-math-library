---
id: lem-branching-rule-for-specht-induction-and-coinvariants
kind: lemma
title: "Branching rule for Specht modules: adding or removing boxes in distinct columns"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [cor-outer-pieri-rules-for-trivial-and-sign-factors,
       cor-frobenius-reciprocity-for-complex-characters,
       def-coinvariants-functor-of-a-group-module,
       lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields,
       thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order,
       def-polytabloid-specht-module-over-an-arbitrary-field,
       lem-integral-specht-garnir-straightening-and-field-basis,
       rem-induced-representation-agrees-with-the-tensor-product-model,
       thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction,
       cor-schurs-lemma-for-irreducible-representations,
       cor-change-of-rings-for-extension-of-scalars,
       thm-associativity-of-balanced-tensor-products,
       thm-tensor-products-commute-with-arbitrary-direct-sums,
       def-restriction-and-extension-of-scalars,
       def-tensor-product-of-modules-by-generators-and-relations]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Church, Jordan S. Ellenberg and Benson Farb, “FI-modules and stability for representations of symmetric groups”, arXiv:1204.4533v4 (2014); published in Duke Math. J. 164 (2015) 1833–1910"
      url: "https://arxiv.org/pdf/1204.4533"
      locator: "Lemma 3.2.3 (branching rule for $S_n$-representations) with its proof comment, printed pp. 18–19: induction from $S_n\\times S_k$ adds one box in $k$ different columns, and the $S_k$-coinvariants of the restriction remove one box from $k$ different columns"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995 (author-hosted full text)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §5, equations (5.16)–(5.17), printed pp. 73–74: the Pieri rules for multiplication by a complete or elementary symmetric function"
---

## Statement

Let $F$ be a field of characteristic $0$, let $\lambda\vdash n$, and let
$S^\lambda_F$ be the corresponding field-valued Specht module
([[def-polytabloid-specht-module-over-an-arbitrary-field]]).

(i) For every $k\ge0$ there is an isomorphism of $FS_{n+k}$-modules

$$\operatorname{Ind}_{S_n\times S_k}^{S_{n+k}}\bigl(S^\lambda_F\boxtimes F\bigr)\cong\bigoplus_{\mu}S^\mu_F,$$

summed over the partitions $\mu\vdash n+k$ obtained from $\lambda$ by adding
one box to each of $k$ different columns (equivalently, $\mu\supseteq\lambda$
and $\mu/\lambda$ is a horizontal $k$-strip).

(ii) For every $0\le k\le n$ there is an isomorphism of $FS_{n-k}$-modules

$$\bigl(\operatorname{Res}^{S_n}_{S_{n-k}\times S_k}S^\lambda_F\bigr)_{S_k}\cong\bigoplus_{\nu}S^\nu_F,$$

summed over the partitions $\nu\vdash n-k$ obtained from $\lambda$ by removing
one box from each of $k$ different columns, where the outer subscript denotes
$S_k$-coinvariants of the restriction to the ordered block subgroup
$S_{n-k}\times S_k\le S_n$ ([[def-coinvariants-functor-of-a-group-module]]);
the left-hand side is an $FS_{n-k}$-module because the two blocks commute. All
multiplicities are $0$ or $1$. No choice principle is used.

## Facts & Assumptions

**Given:** A field $F$ of characteristic $0$, a partition $\lambda\vdash n$, and an integer $k\ge0$ in part (i) or $0\le k\le n$ in part (ii).

[F1] For every field extension $K/F$, the standard polytabloid bases identify $K\otimes_FS^\mu_F\cong S^\mu_K$ for every $\mu$, and $\dim_FS^\mu_F=f^\mu$ is independent of the characteristic-zero field ([[def-polytabloid-specht-module-over-an-arbitrary-field]], [[lem-integral-specht-garnir-straightening-and-field-basis]]).

[F2] Over any characteristic-zero field the modules $S^\mu_F$ form a complete irredundant list of irreducible $FS_m$-modules, and Maschke's theorem makes every finite-dimensional $FS_m$-module semisimple; consequently, for a finite-dimensional semisimple module $M$, the multiplicity of $S^\mu_F$ in $M$ equals $\dim_F\operatorname{Hom}_{FS_m}(S^\mu_F,M)$, and a nonzero map between irreducible modules is an isomorphism ([[lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields]], [[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]], [[cor-schurs-lemma-for-irreducible-representations]]).

[F3] Over $\mathbb C$, with the ordered block subgroup, the outer Pieri rule gives $\operatorname{Ind}_{S_m\times S_r}^{S_{m+r}}(S^\mu_{\mathbb C}\boxtimes S^{(r)})\cong\bigoplus_{\nu}S^\nu_{\mathbb C}$ over the $\nu$ obtained from $\mu$ by adding one box in each of $r$ different columns, all multiplicities one; for $r=0$ this is $S^\mu_{\mathbb C}$ itself ([[cor-outer-pieri-rules-for-trivial-and-sign-factors]]).

[F4] For finite groups $H\le G$ and a commutative ring $k$, induction is the tensor product $kG\otimes_{kH}W$ and is left adjoint to restriction; dually Frobenius reciprocity gives $\operatorname{Hom}_{kG}(\operatorname{Ind}_H^GW,V)\cong\operatorname{Hom}_{kH}(W,\operatorname{Res}_H^GV)$ ([[rem-induced-representation-agrees-with-the-tensor-product-model]], [[thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction]], [[cor-frobenius-reciprocity-for-complex-characters]]).

[F5] Extension of scalars along $R\to S$ sends tensor products to tensor products: $S\otimes_R(M\otimes_RN)\cong(S\otimes_RM)\otimes_S(S\otimes_RN)$ and $N\otimes_RM\cong N\otimes_S(S\otimes_RM)$; balanced tensor products are associative, and tensor products commute with arbitrary direct sums ([[cor-change-of-rings-for-extension-of-scalars]], [[thm-associativity-of-balanced-tensor-products]], [[thm-tensor-products-commute-with-arbitrary-direct-sums]], [[def-restriction-and-extension-of-scalars]], [[def-tensor-product-of-modules-by-generators-and-relations]]).

[F6] For a finite group $Q$ and a $kQ$-module $M$, averaging over $Q$ identifies the coinvariants $M_Q$ with the invariants $M^Q$ when $k$ contains $\mathbb Q$, so for a module $U$ on which $Q$ acts trivially one has $\operatorname{Hom}_k(U,M_Q)\cong\operatorname{Hom}_{kQ}(U,M)$ ([[def-coinvariants-functor-of-a-group-module]], [[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]).

## Proof

**Proof technique:** direct.

1.1 Let $K/F$ be a field extension. By [F1], $K\otimes_FS^\mu_F\cong S^\mu_K$; by [F4] and [F5], induction commutes with extension of scalars, so $K\otimes_F\operatorname{Ind}^{S_{n+k}}_{S_n\times S_k}(S^\lambda_F\boxtimes F)\cong\operatorname{Ind}^{S_{n+k}}_{S_n\times S_k}(S^\lambda_K\boxtimes K)$. Moreover, for finite-dimensional $F$-modules $U,W$ carrying $G$-actions, $\dim_K\operatorname{Hom}_{KG}(K\otimes_FU,K\otimes_FW)=\dim_F\operatorname{Hom}_{FG}(U,W)$: choose bases, write the intertwining conditions as a finite linear system over $F$, and note that its rank is unchanged by extending scalars. [F1, F4, F5, given, algebra]

1.2 Over $\mathbb C$, [F3] with $m=n$, $r=k$, $\mu=\lambda$ gives $M_{\mathbb C}:=\operatorname{Ind}^{S_{n+k}}_{S_n\times S_k}(S^\lambda_{\mathbb C}\boxtimes\mathbb C)\cong\bigoplus_{\mu}S^\mu_{\mathbb C}$, summed over the partitions $\mu\vdash n+k$ obtained from $\lambda$ by adding one box in each of $k$ different columns, each multiplicity one; by [F1, F2] this is the decomposition of $M_{\mathbb C}$ into irreducibles. [F1, F2, F3, given]

1.3 Let $N$ be a finite-dimensional $F(S_{n-k}\times S_k)$-module and let $\nu\vdash n-k$. Since $\operatorname{char}F=0$, averaging over the finite group $S_k$ identifies the coinvariants $N_{S_k}$ with the invariants $N^{S_k}$ [F6], and because $S_{n-k}$ and $S_k$ commute this identification is $FS_{n-k}$-equivariant; hence $\operatorname{Hom}_{FS_{n-k}}\bigl(S^\nu_F,N_{S_k}\bigr)\cong\operatorname{Hom}_{F(S_{n-k}\times S_k)}\bigl(S^\nu_F\boxtimes F,N\bigr)$, where $S_k$ acts trivially on the first factor. Composing with the adjunction of [F4] gives, for any $FS_n$-module $W$, $\operatorname{Hom}_{FS_{n-k}}\bigl(S^\nu_F,(\operatorname{Res}^{S_n}_{S_{n-k}\times S_k}W)_{S_k}\bigr)\cong\operatorname{Hom}_{FS_n}\bigl(\operatorname{Ind}^{S_n}_{S_{n-k}\times S_k}(S^\nu_F\boxtimes F),W\bigr)$. [F4, F6, given, algebra]

2.1 Let $M_{\mathbb Q}:=\operatorname{Ind}^{S_{n+k}}_{S_n\times S_k}(S^\lambda_{\mathbb Q}\boxtimes\mathbb Q)$. By step 1.1, $\mathbb C\otimes_{\mathbb Q}M_{\mathbb Q}\cong M_{\mathbb C}$, and for each $\mu\vdash n+k$ the multiplicity of $S^\mu_{\mathbb Q}$ in $M_{\mathbb Q}$, which is $\dim_{\mathbb Q}\operatorname{Hom}_{\mathbb QS_{n+k}}(S^\mu_{\mathbb Q},M_{\mathbb Q})$ by [F2], equals the multiplicity of $S^\mu_{\mathbb C}$ in $M_{\mathbb C}$. By step 1.2 those multiplicities are $1$ for the horizontal-strip shapes $\mu$ and $0$ otherwise. Since $M_{\mathbb Q}$ is finite-dimensional and semisimple over $\mathbb Q$ [F2] and its irreducibles are classified, these multiplicities determine it: $M_{\mathbb Q}\cong\bigoplus_{\mu}S^\mu_{\mathbb Q}$ over the same shapes. [F1, F2, step 1.1, step 1.2]

3.1 Applying $F\otimes_{\mathbb Q}-$ to step 2.1 and using step 1.1, [F5] and the base-change isomorphism $F\otimes_{\mathbb Q}S^\mu_{\mathbb Q}\cong S^\mu_F$ of [F1] gives $\operatorname{Ind}^{S_{n+k}}_{S_n\times S_k}(S^\lambda_F\boxtimes F)\cong F\otimes_{\mathbb Q}M_{\mathbb Q}\cong\bigoplus_{\mu}S^\mu_F$ over exactly the horizontal-strip shapes, with all multiplicities one. This is (i). [F1, F2, F5, step 1.1, step 2.1]

4.1 Take $W=S^\lambda_F$ in step 1.3 and apply (i) from step 3.1 to $\operatorname{Ind}^{S_n}_{S_{n-k}\times S_k}(S^\nu_F\boxtimes F)$: it is $\bigoplus_{\lambda'}S^{\lambda'}_F$, summed over the partitions $\lambda'\vdash n$ obtained from $\nu$ by adding one box in each of $k$ different columns. By [F2] and the classification, $\dim_F\operatorname{Hom}_{FS_n}(S^\lambda_F,\bigoplus_{\lambda'}S^{\lambda'}_F)$ is $1$ if $\lambda$ occurs among the shapes $\lambda'$ and $0$ otherwise. The condition that $\lambda$ is obtained from $\nu$ by adding one box in each of $k$ different columns is equivalent to its reverse, that $\nu$ is obtained from $\lambda$ by removing one box from each of $k$ different columns; hence the multiplicity $m_\nu:=\dim_F\operatorname{Hom}_{FS_{n-k}}\bigl(S^\nu_F,(\operatorname{Res}^{S_n}_{S_{n-k}\times S_k}S^\lambda_F)_{S_k}\bigr)$ is that $0/1$ value. [F2, step 3.1, step 1.3]

5.1 The module $(\operatorname{Res}^{S_n}_{S_{n-k}\times S_k}S^\lambda_F)_{S_k}$ is finite-dimensional over $F$ and semisimple by Maschke [F2], and its irreducible constituents are among the $S^\nu_F$ by the classification; by step 4.1 and [F2] its multiplicity at $S^\nu_F$ is $m_\nu$, which is $1$ exactly when $\nu$ is obtained from $\lambda$ by removing one box from each of $k$ different columns and $0$ otherwise. Hence $(\operatorname{Res}^{S_n}_{S_{n-k}\times S_k}S^\lambda_F)_{S_k}\cong\bigoplus_{\nu}S^\nu_F$ over those $\nu$, with all multiplicities $0$ or $1$. This proves (ii) and completes the lemma. [F2, step 2.1, step 4.1] ∎
