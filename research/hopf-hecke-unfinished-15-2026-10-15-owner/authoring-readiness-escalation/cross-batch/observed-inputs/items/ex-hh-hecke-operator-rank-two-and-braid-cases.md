---
id: ex-hh-hecke-operator-rank-two-and-braid-cases
kind: example
title: "The rank-two ordered-basis Hecke operator and all braid cases"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 0
deps: [def-hh-hecke-symmetry-and-ordered-basis-operator, thm-tensor-product-basis-from-bases]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Li Luo and Weiqiang Wang, Lectures on dualities ABC in representation theory"
      url: "https://arxiv.org/pdf/2012.07203"
      locator: "§6.1, PDF pp. 30–31: the type-A Hecke tensor action and its parameter convention"
verification:
  precheck: pass
---

## Example

Let $F=\mathbb Q(q)$, put $\eta=q-q^{-1}$, and use the operator $T$ of [[def-hh-hecke-symmetry-and-ordered-basis-operator]]. Write $e_ae_b$ for $e_a\otimes e_b$. For $N=2$, in the ordered basis $(e_1e_1,e_1e_2,e_2e_1,e_2e_2)$ its matrix is

$$\begin{pmatrix}q&0&0&0\\0&0&1&0\\0&1&\eta&0\\0&0&0&q\end{pmatrix}.$$

The complete weak-order case table for three tensor positions is below. In rows with two distinct labels assume $a<b$; in rows with three distinct labels assume $a<b<c$.

| Input | $T_1T_2T_1$ | $T_2T_1T_2$ |
|---|---|---|
| $aaa$ | $q^3aaa$ | $q^3aaa$ |
| $aab$ | $qbaa$ | $qbaa$ |
| $aba$ | $qaba+q\eta\,baa$ | $qaba+q\eta\,baa$ |
| $baa$ | $qaab+q\eta\,aba+q^2\eta\,baa$ | $qaab+q\eta\,aba+q^2\eta\,baa$ |
| $abb$ | $qbba$ | $qbba$ |
| $bab$ | $qbab+q\eta\,bba$ | $qbab+q\eta\,bba$ |
| $bba$ | $qabb+q\eta\,bab+q^2\eta\,bba$ | $qabb+q\eta\,bab+q^2\eta\,bba$ |
| $abc$ | $cba$ | $cba$ |
| $acb$ | $bca+\eta\,cba$ | $bca+\eta\,cba$ |
| $bac$ | $cab+\eta\,cba$ | $cab+\eta\,cba$ |
| $bca$ | $acb+\eta\,bca+\eta\,cab+\eta^2cba$ | $acb+\eta\,bca+\eta\,cab+\eta^2cba$ |
| $cab$ | $bac+\eta\,bca+\eta\,cab+\eta^2cba$ | $bac+\eta\,bca+\eta\,cab+\eta^2cba$ |
| $cba$ | $abc+\eta\,acb+\eta\,bac+\eta^2bca+\eta^2cab+(\eta+\eta^3)cba$ | $abc+\eta\,acb+\eta\,bac+\eta^2bca+\eta^2cab+(\eta+\eta^3)cba$ |

At $q=1$, $T$ is the ordinary flip. At $q=-1$, $T^2=I$, but $T(e_a\otimes e_a)=-e_a\otimes e_a$, so $T$ is not the ordinary flip.

## Facts & Assumptions

**Given:** $F=\mathbb Q(q)$, an ordered basis $e_1<\cdots<e_N$, the operator $T$, and the standard elementary-tensor bases of the finite tensor powers.

[F1] The operator fixes an equal pair with coefficient $q$, flips an increasing pair, and sends a decreasing pair $e_a\otimes e_b$ to $e_b\otimes e_a+(q-q^{-1})e_a\otimes e_b$ ([[def-hh-hecke-symmetry-and-ordered-basis-operator]]).

[F2] If two vector spaces are free with specified bases, the elementary tensors of those bases form a basis of their tensor product; iterating this gives the displayed pair and triple bases ([[thm-tensor-product-basis-from-bases]]).

## Verification

**Given:** The data in [F1]–[F2].

1.1 Applying [F1] to the four ordered pairs for $N=2$ gives the displayed matrix: the unequal-pair block on $(e_1e_2,e_2e_1)$ is $\begin{pmatrix}0&1\\1&\eta\end{pmatrix}$ and the equal pairs have eigenvalue $q$. The elementary tensor basis from [F2] makes these blocks a full decomposition of the operator. The unequal-pair block satisfies $T^2=\eta T+I$, while the equal-pair identity is $q^2=\eta q+1$; since $T^2-\eta T-I=(T-qI)(T+q^{-1}I)$, the quadratic relation holds. The same block has inverse $T-\eta I$, and the equal-pair inverse is $q^{-1}=q-\eta$. [given, F1, F2, algebra]

1.2 Every entry in the table is obtained by applying the three cases of [F1] successively to the indicated adjacent pair; the thirteen rows exhaust the weak-order patterns (one all-equal, six with exactly two distinct labels, and six with three distinct labels). The two computed columns agree in every row, and the triple basis in [F2] spans $V_N^{\otimes3}$, so $T_1T_2T_1=T_2T_1T_2$ on the whole tensor cube. [given, F1, F2, algebra]

2.1 At $q=1$, $\eta=0$ and the three defining branches reduce to the flip, including the equal-label branch. At $q=-1$, $\eta=0$, so the quadratic relation becomes $T^2=I$, while the equal-label formula gives $T(e_a\otimes e_a)=-e_a\otimes e_a$; this distinguishes that specialization from the ordinary flip. [given, F1, step 1.1, algebra] ∎
