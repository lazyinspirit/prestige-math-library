---
id: thm-triangular-fixed-tabloid-reconstruction-of-the-character-table
kind: theorem
title: "Fixed-tabloid reconstruction of the character table (Fox–Mullineux)"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-young-subgroup-tabloid-and-permutation-module,
       thm-youngs-rule-for-permutation-modules,
       def-semistandard-tableau-and-kostka-number,
       lem-kostka-change-of-basis-is-dominance-unitriangular,
       cor-frobenius-reciprocity-for-complex-characters,
       thm-first-orthogonality-relation-for-irreducible-complex-characters,
       thm-character-inner-product-computes-intertwiner-dimension,
       thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions,
       thm-centralizer-cardinality-from-cycle-type,
       thm-orbit-stabilizer,
       def-character-table-of-a-finite-group,
       def-virtual-character-and-character-ring-of-a-finite-group,
       cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types,
       def-dominance-order-on-partitions,
       def-standard-inner-product-on-complex-class-functions,
       thm-frobenius-formula-for-induced-characters,
       lem-young-permutation-module-is-induced-from-the-trivial-character,
       thm-determinant-of-a-triangular-matrix,
       cor-square-matrix-invertible-iff-determinant-is-a-unit,
       thm-determinant-multiplicative,
       cor-determinant-of-an-inverse,
       def-column-antisymmetrizer-polytabloid-and-specht-module,
       thm-complex-specht-modules-are-irreducible,
       thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]
justified_by: []
aliases: []
forward_refs: [ex-s5-character-table-by-fixed-tabloid-reconstruction]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Springer 1978 (complete author-hosted scan, 161 pp.)"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§6, printed pp. 22–26: the dictionary-order matrices m, A=(|S_λ∩C_ρ|) and B=CA^T, the Gram equation, Theorem 6.2 (reconstruction of C=B(A^T)^{-1}) and Corollary 6.5 (det C as the product of all parts of all partitions)"
    - title: "William Woods, Representation theory of the symmetric groups (Cambridge Part III essay, 33 pp.)"
      url: "https://billywoods.net/part_iii_essay.pdf"
      locator: "§4.2, printed pp. 19–24: the definitions A=(|S_λ∩ccl(μ)|), B=(|S_μ|⟨χ^λ,1_{S_μ}↑⟩), M=diag(n!/|ccl(μ)|); Lemma 4.2.1 (XA^T=B), Lemmas 4.2.2–4.2.4 (B^TB=AMA^T, triangularity and invertibility of A) and Theorem 4.2.5"
---

## Statement

Let $n\ge1$ and fix an ordering of the partitions of $n$ that is a linear
extension of the dominance order with the most dominant partition first (for
example James's dictionary order, in which $(n),(n-1,1),\dots,(1^n)$ appear in
this order). For $\lambda,\rho\vdash n$ let $\chi^\lambda$ be the irreducible
character of the Specht module $S^\lambda$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]],
[[thm-complex-specht-modules-are-irreducible]]), let $C_\rho$ be the conjugacy
class of cycle type $\rho$
([[cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types]]) and let
$S_\lambda$ be the standard Young subgroup
([[def-young-subgroup-tabloid-and-permutation-module]]). Define
$$A:=(a_{\lambda\rho}),\quad a_{\lambda\rho}:=|S_\lambda\cap C_\rho|,\qquad M:=\operatorname{diag}(z_\rho)_{\rho\vdash n},\quad z_\rho:=\prod_{i\ge1}i^{m_i(\rho)}m_i(\rho)!,$$
where $m_i(\rho)$ is the number of parts of $\rho$ equal to $i$, so that
$z_\rho=|C_{S_n}(\rho)|=n!/|C_\rho|$
([[thm-centralizer-cardinality-from-cycle-type]]); let
$C:=(\chi^\lambda(C_\rho))$ be the character table of $S_n$
([[def-character-table-of-a-finite-group]], a row for each $\lambda$, a column
for each class, entries the common values) and set
$B:=(b_{\lambda\nu}):=CA^{\mathsf T}$. Then:

1. $b_{\lambda\nu}=\sum_{\rho\vdash n}\chi^\lambda(C_\rho)\,a_{\nu\rho}=|S_\nu|\,(\chi^\lambda,1_{S_\nu}\!\!\uparrow^{S_n})=|S_\nu|\,K_{\lambda\nu}$
   ([[thm-youngs-rule-for-permutation-modules]],
   [[cor-frobenius-reciprocity-for-complex-characters]]); hence $B$ is a
   nonnegative integer matrix, upper triangular in the fixed order
   ($b_{\lambda\nu}=0$ unless $\lambda\unrhd\nu$) with diagonal
   $b_{\nu\nu}=|S_\nu|=\prod_i\nu_i!>0$
   ([[lem-kostka-change-of-basis-is-dominance-unitriangular]]).

2. **(Gram equation.)** $B^{\mathsf T}B=AMA^{\mathsf T}$, that is,
   $\sum_{\lambda\vdash n}b_{\lambda\nu}b_{\lambda\mu}=\sum_{\rho\vdash n}z_\rho\,a_{\nu\rho}a_{\mu\rho}$
   for all $\nu,\mu\vdash n$
   ([[thm-first-orthogonality-relation-for-irreducible-complex-characters]],
   [[thm-orbit-stabilizer]]).

3. $B$ is the unique nonnegative, upper-triangular matrix with positive
   diagonal satisfying the Gram equation of (2) in the fixed order, and its
   diagonal is necessarily $b_{\nu\nu}=|S_\nu|$. The matrix $A$ is invertible
   with $\det A=\prod_{\lambda\vdash n}\prod_i(\lambda_i-1)!$; consequently the
   character table is recovered from $A$ and the Gram equation alone as
   $$C=B\,(A^{\mathsf T})^{-1},\qquad \det C=\prod_{\lambda\vdash n}\prod_i\lambda_i,$$
   the product of all parts of all partitions of $n$
   ([[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]]).
   No choice principle is used.

## Facts & Assumptions

**Given:** An integer $n\ge1$, an ordering of the partitions of $n$ that is a linear extension of dominance with the most dominant partition first, the standard Young subgroups $S_\nu\le S_n$, the conjugacy classes $C_\rho$, the irreducible characters $\chi^\lambda$ with characters of the Specht modules, and the numbers $a_{\nu\rho}$, $z_\rho$, $\chi^\lambda(C_\rho)$ of the statement.

[F1] The standard Young subgroup of type $\lambda$ is the direct product of the symmetric groups of the blocks of $\lambda$, so $|S_\lambda|=\prod_i\lambda_i!$; the Young permutation module $M^\lambda$ with tabloid basis has character $1_{S_\lambda}\!\!\uparrow^{S_n}$ ([[def-young-subgroup-tabloid-and-permutation-module]], [[lem-young-permutation-module-is-induced-from-the-trivial-character]]).

[F2] Young's rule: $M^\nu\cong\bigoplus_{\lambda\vdash n}(S^\lambda)^{\oplus K_{\lambda\nu}}$ as $\mathbb C S_n$-modules, and in every decomposition the multiplicity of $S^\lambda$ is $K_{\lambda\nu}$ ([[thm-youngs-rule-for-permutation-modules]], [[def-semistandard-tableau-and-kostka-number]]). Moreover $K_{\lambda\nu}=0$ unless $\lambda\unrhd\nu$, and $K_{\nu\nu}=1$ ([[lem-kostka-change-of-basis-is-dominance-unitriangular]], [[def-dominance-order-on-partitions]]).

[F3] The Specht characters exhaust the irreducible characters of $S_n$ ([[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]]). The irreducible characters $\chi^\lambda$ are orthonormal for the standard inner product $\langle\varphi,\psi\rangle=|G|^{-1}\sum_g\varphi(g)\overline{\psi(g)}$ ([[thm-first-orthogonality-relation-for-irreducible-complex-characters]], [[def-standard-inner-product-on-complex-class-functions]]), and $\langle\chi_V,\chi_W\rangle=\dim\operatorname{Hom}_G(W,V)$, so multiplicities are read off by inner products ([[thm-character-inner-product-computes-intertwiner-dimension]]); they form an orthonormal basis of the class functions ([[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]]).

[F4] Frobenius reciprocity $\langle\operatorname{Ind}_H^G\chi,\psi\rangle_G=\langle\chi,\operatorname{Res}_H^G\psi\rangle_H$ ([[cor-frobenius-reciprocity-for-complex-characters]]) and Frobenius' formula $\operatorname{Ind}_H^G\chi(g)=|H|^{-1}\sum_{x\in G,\,x^{-1}gx\in H}\chi(x^{-1}gx)$ ([[thm-frobenius-formula-for-induced-characters]]).

[F5] $z_\rho=|C_{S_n}(\sigma)|$ for $\sigma$ of cycle type $\rho$; by orbit–stabilizer for the conjugation action, $|C_\rho|\cdot z_\rho=n!$, so $|C_\rho|=n!/z_\rho$ and $z_\rho>0$ ([[thm-centralizer-cardinality-from-cycle-type]], [[thm-orbit-stabilizer]], [[cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types]]).

[F6] For a triangular matrix over a commutative ring, the determinant is the product of its diagonal entries; the determinant is multiplicative, $\det(A^{-1})=\det(A)^{-1}$ for invertible $A$, and a square matrix over a commutative ring is invertible exactly when its determinant is a unit ([[thm-determinant-of-a-triangular-matrix]], [[thm-determinant-multiplicative]], [[cor-determinant-of-an-inverse]], [[cor-square-matrix-invertible-iff-determinant-is-a-unit]]).

## Proof

**Proof technique:** direct.

1.1 Fix $\lambda,\nu\vdash n$. Evaluating the inner product by the class decomposition of $S_\nu$ and then applying Frobenius reciprocity [F4] yields $\sum_{\rho}\chi^\lambda(C_\rho)a_{\nu\rho}=\sum_{g\in S_\nu}\chi^\lambda(g)=|S_\nu|\,\langle\chi^\lambda|_{S_\nu},1_{S_\nu}\rangle_{S_\nu}=|S_\nu|\,\langle\chi^\lambda,1_{S_\nu}\!\!\uparrow^{S_n}\rangle_{S_n}$. By [F1] the induced character is the character of $M^\nu$, which by Young's rule [F2] is $\sum_{\mu}K_{\mu\nu}\chi^\mu$; orthonormality [F3] gives $\langle\chi^\lambda,1_{S_\nu}\!\!\uparrow^{S_n}\rangle=K_{\lambda\nu}$, hence $b_{\lambda\nu}=|S_\nu|K_{\lambda\nu}$. Since $K_{\lambda\nu}$ is a nonnegative integer vanishing unless $\lambda\unrhd\nu$, with $K_{\nu\nu}=1$, and since $|S_\nu|=\prod_i\nu_i!>0$, the matrix $B$ is a nonnegative integer matrix, upper triangular in the fixed order, with $b_{\nu\nu}=|S_\nu|>0$. [F1, F2, F3, F4, given]

1.2 The entries $a_{\lambda\rho}=|S_\lambda\cap C_\rho|$ are nonnegative integers. If $a_{\lambda\rho}\ne0$, choose $\sigma\in S_\lambda\cap C_\rho$: the cycles of $\sigma$ lie in the blocks of $S_\lambda$, so the parts of $\rho$ are split into groups whose sums are the parts $\lambda_1,\lambda_2,\dots$ of $\lambda$. For every $r\ge1$ the $r$ largest parts of $\rho$ lie in at most $r$ distinct groups, so $\sum_{i\le r}\rho_i\le\sum_{i\le r}\lambda_i$ (the group sizes $\lambda_i$ decrease and the groups are labelled in that order), whence $\lambda\unrhd\rho$; therefore $a_{\lambda\rho}=0$ unless $\lambda\unrhd\rho$ and $A$ is upper triangular in the fixed order. For the diagonal, an element of $S_\lambda$ of cycle type $\lambda$ consists of exactly one cycle of length $\lambda_i$ on each block of size $\lambda_i$, and the number of $\lambda_i$-cycles on a $\lambda_i$-element block is $(\lambda_i-1)!$, so $a_{\lambda\lambda}=\prod_i(\lambda_i-1)!>0$. By [F6] the determinant of the triangular matrix $A$ is the product of its diagonal, $\det A=\prod_{\lambda\vdash n}\prod_i(\lambda_i-1)!\ne0$; a nonzero rational number is a unit of $\mathbb Q$, so $A$ is invertible over $\mathbb Q$ by [F6]. [F1, F6, given, algebra]

2.1 For $\nu,\mu\vdash n$, step 1.1 gives $(B^{\mathsf T}B)_{\nu\mu}=\sum_\lambda b_{\lambda\nu}b_{\lambda\mu}=|S_\nu||S_\mu|\sum_\lambda K_{\lambda\nu}K_{\lambda\mu}$. By Young's rule [F2] the characters of $M^\nu$ and $M^\mu$ are $\sum_\lambda K_{\lambda\nu}\chi^\lambda$ and $\sum_\lambda K_{\lambda\mu}\chi^\lambda$, so orthonormality [F3] gives $\sum_\lambda K_{\lambda\nu}K_{\lambda\mu}=\langle1_{S_\nu}\!\!\uparrow^{S_n},1_{S_\mu}\!\!\uparrow^{S_n}\rangle_{S_n}$. For $g$ of cycle type $\rho$, Frobenius' formula [F4] and the change-of-variable count $|\{x\in S_n:x^{-1}gx=h\}|=z_\rho$ for each $h\in C_\rho$ give $(1_{S_\nu}\!\!\uparrow^{S_n})(g)=z_\rho a_{\nu\rho}/|S_\nu|$. Hence $\langle1_{S_\nu}\!\!\uparrow^{S_n},1_{S_\mu}\!\!\uparrow^{S_n}\rangle=\frac1{n!}\sum_\rho|C_\rho|\frac{z_\rho a_{\nu\rho}}{|S_\nu|}\frac{z_\rho a_{\mu\rho}}{|S_\mu|}=\frac{1}{|S_\nu||S_\mu|}\sum_\rho z_\rho a_{\nu\rho}a_{\mu\rho}$, where $|C_\rho|=n!/z_\rho$ by [F5]. Multiplying by $|S_\nu||S_\mu|$ gives $(B^{\mathsf T}B)_{\nu\mu}=\sum_\rho z_\rho a_{\nu\rho}a_{\mu\rho}=(AMA^{\mathsf T})_{\nu\mu}$, the last equality by the definitions of $A$, $M$ and matrix multiplication. [step 1.1, F1, F2, F3, F4, F5, algebra]

3.1 Index the fixed total order by $1,\dots,q$ and put $G:=AMA^{\mathsf T}=B^{\mathsf T}B$. For any upper-triangular real matrix $U$ with positive diagonal and $U^{\mathsf T}U=G$, process columns $j=1,\dots,q$, and in column $j$ process rows $i=1,\dots,j$. If $i<j$, the equation $G_{ij}=\sum_{k=1}^{i}u_{ki}u_{kj}$ determines $u_{ij}=(G_{ij}-\sum_{k<i}u_{ki}u_{kj})/u_{ii}$: column $i$ and the earlier rows of column $j$ are already determined, and $u_{ii}>0$. For $i=j$, $G_{jj}=\sum_{k<j}u_{kj}^{2}+u_{jj}^{2}$ determines the unique positive $u_{jj}$. Induction therefore gives at most one such $U$, and step 2.1 supplies $U=B$, whose diagonal is $|S_\nu|$ by step 1.1. This proves the asserted uniqueness even among all upper-triangular real matrices with positive diagonal; no dominance sparsity is assumed of a competitor. [step 1.1, step 2.1, algebra]

4.1 By definition $B=CA^{\mathsf T}$, and $A^{\mathsf T}$ is invertible over $\mathbb Q$ by step 1.2, so multiplying the identity on the right by $(A^{\mathsf T})^{-1}$ gives $C=B(A^{\mathsf T})^{-1}$: the character table is recovered from $A$ alone (which gives $M$ and the Gram matrix $AMA^{\mathsf T}$) together with the Gram equation (which determines $B$ by step 3.1). For the determinant, $B$ and $A^{\mathsf T}$ are triangular, so their determinants are the products of their diagonals by [F6]: $\det B=\prod_{\lambda\vdash n}b_{\lambda\lambda}=\prod_{\lambda\vdash n}|S_\lambda|=\prod_{\lambda\vdash n}\prod_i\lambda_i!$, and $\det(A^{\mathsf T})=\det A=\prod_{\lambda\vdash n}\prod_i(\lambda_i-1)!$ by step 1.2. Therefore $\det C=\det B\cdot\det\bigl((A^{\mathsf T})^{-1}\bigr)=\det B/\det(A^{\mathsf T})=\prod_{\lambda\vdash n}\prod_i\frac{\lambda_i!}{(\lambda_i-1)!}=\prod_{\lambda\vdash n}\prod_i\lambda_i$, which is the product of all parts of all partitions of $n$. [step 1.1, step 1.2, step 3.1, F6, algebra] ∎

## Remarks

- **What the algorithm uses.** The data $A$ and $M$ are combinatorial: $a_{\nu\rho}$ counts the elements of the Young subgroup $S_\nu$ of cycle type $\rho$, and $z_\rho$ is the centralizer order. The Gram matrix $AMA^{\mathsf T}$ is therefore known without knowing any character, and the theorem says that its unique nonnegative triangular square root with positive diagonal is $B=(|S_\nu|K_{\lambda\nu})$, from which the table is $B(A^{\mathsf T})^{-1}$ ([[ex-s5-character-table-by-fixed-tabloid-reconstruction]]).

- **Where each hypothesis enters.** Positivity of the diagonal selects the positive root in the diagonal step and permits division in the off-diagonal step of the uniqueness induction; triangularity makes the off-diagonal equations solvable one entry at a time. The ordering being a linear extension of dominance with the most dominant first is what makes $A$ and $B$ triangular at all: an element of $S_\lambda$ of cycle type $\rho$ forces $\lambda\unrhd\rho$.

- **Independence from the rim-hook recursion.** Nothing here uses [[thm-murnaghan-nakayama-character-rule]] or any determinant of characters; this is a second, independent algorithm for the same table, and the two are cross-checked on the companion page.
