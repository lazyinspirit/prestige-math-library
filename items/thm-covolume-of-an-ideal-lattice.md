---
id: thm-covolume-of-an-ideal-lattice
kind: theorem
title: "Covolume of an integral ideal lattice"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-ring-of-integers-and-ideals-are-full-lattices
  - def-minkowski-embedding-of-a-number-field
  - thm-discriminant-as-an-embedding-determinant
  - lem-discriminant-change-of-basis
  - thm-number-field-discriminant-is-well-defined-and-nonzero
  - def-integral-basis-and-power-integral-basis
  - def-discriminant-of-a-number-field-basis-and-order
  - def-absolute-norm-of-an-ideal
  - lem-nonzero-number-field-ideal-has-finite-quotient
  - cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant
  - def-full-euclidean-lattice-and-covolume
  - def-number-field
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 4 Proposition 4.26, pp.79-80."
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "§7.1 Lemmas 7.1.7-7.1.8, pp.80-81."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $K$ be a number field of degree $n$ with $r_2$ complex places
([[def-number-field]], [[def-minkowski-embedding-of-a-number-field]]), ring of
integers $\mathcal O_K$ and discriminant $d_K\ne0$
([[thm-number-field-discriminant-is-well-defined-and-nonzero]]). Let
$\sigma:K\to\mathbb R^n$ be the unscaled Minkowski embedding and let
$\mathfrak a\subseteq\mathcal O_K$ be a nonzero **integral** ideal, with
absolute norm $N\mathfrak a=|\mathcal O_K/\mathfrak a|$
([[def-absolute-norm-of-an-ideal]]). Then

$$\operatorname{covol}\bigl(\sigma(\mathfrak a)\bigr)=2^{-r_2}\sqrt{|d_K|}\cdot N\mathfrak a .$$

The formula is for integral ideals only. It is not applied below to an ideal
that is merely fractional; such an ideal is first multiplied by a positive
integer (or by an element of $\mathcal O_K$) to become integral.

## Facts & Assumptions

**Given:** A number field $K$ of degree $n$, its ring of integers
$\mathcal O_K$, discriminant $d_K\ne0$, the unscaled Minkowski embedding
$\sigma$, and a nonzero ideal $\mathfrak a\subseteq\mathcal O_K$.

[F1] The image $\sigma(\mathfrak a)$ of a nonzero integral ideal is a full
lattice, and $\mathfrak a$ has a $\mathbb Z$-basis $\alpha_1,\dots,\alpha_n$;
moreover $\sigma(\mathcal O_K)$ is a full lattice with integral basis
$\beta_1,\dots,\beta_n$ of $\mathcal O_K$
([[thm-ring-of-integers-and-ideals-are-full-lattices]],
[[def-integral-basis-and-power-integral-basis]]).

[F2] For an ordered $\mathbb Q$-basis $\alpha_1,\dots,\alpha_n$ of $K$, the
real $n\times n$ matrix $A$ with columns $\sigma(\alpha_j)$ satisfies
$|\det A|=2^{-r_2}\sqrt{|\operatorname{disc}(\alpha_1,\dots,\alpha_n)|}$, the
real determinant being obtained from the full complex embedding matrix by
replacing each conjugate pair of rows by its real and imaginary parts
([[def-minkowski-embedding-of-a-number-field]]).

[F3] $\operatorname{disc}(\alpha_1,\dots,\alpha_n)
  =\det(\psi_i(\alpha_j))^2$ for the full list of embeddings
$\psi_1,\dots,\psi_n$, and this determinant is nonzero
([[thm-discriminant-as-an-embedding-determinant]]).

[F4] If $\beta_j=\sum_ia_{ij}\alpha_i$ for two ordered bases, then
$\operatorname{disc}(\beta_1,\dots,\beta_n)
  =\det(A)^2\operatorname{disc}(\alpha_1,\dots,\alpha_n)$
([[lem-discriminant-change-of-basis]]).

[F5] For every integral basis $\beta_1,\dots,\beta_n$ of $\mathcal O_K$ one has
$\operatorname{disc}(\beta_1,\dots,\beta_n)=d_K\ne0$
([[def-discriminant-of-a-number-field-basis-and-order]],
[[thm-number-field-discriminant-is-well-defined-and-nonzero]]).

[F6] $N\mathfrak a=|\mathcal O_K/\mathfrak a|$ is finite
([[def-absolute-norm-of-an-ideal]],
[[lem-nonzero-number-field-ideal-has-finite-quotient]]).

[F7] For $C\in M_n(\mathbb Z)$ with $\det C\ne0$, the subgroup
$C\mathbb Z^n\subseteq\mathbb Z^n$ has finite index $|\det C|$
([[cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant]]).

[F8] $\operatorname{covol}(\Lambda)=|\det B|$ for a $\mathbb Z$-basis
$b_1,\dots,b_n$ of a full lattice $\Lambda$ with matrix $B=(b_1\ \cdots\ b_n)$
([[def-full-euclidean-lattice-and-covolume]]).

## Proof

1.1 By [F1] and [F8], $\operatorname{covol}(\sigma(\mathfrak a))=|\det A|$, where $A$ is the matrix with columns $\sigma(\alpha_j)$ for a $\mathbb Z$-basis $\alpha_1,\dots,\alpha_n$ of $\mathfrak a$; this basis is a $\mathbb Q$-basis of $K$ because $\sigma$ is injective and $\sigma(\mathfrak a)$ is a full lattice. [F1, F8, given]
1.2 Let $\beta_1,\dots,\beta_n$ be an integral basis of $\mathcal O_K$ [F1]. Each $\alpha_j$ lies in $\mathfrak a\subseteq\mathcal O_K$, so $\alpha_j=\sum_ic_{ij}\beta_i$ with uniquely determined integers $c_{ij}$; let $C=(c_{ij})$. [F1, algebra]
2.1 The matrix $C$ has $\det C\ne0$: if $\det C=0$ there is a nonzero rational vector $y$ with $Cy=0$, whence $\sum_jy_j\alpha_j=0$, contradicting $\mathbb Q$-linear independence of the $\alpha_j$ from step 1.1. [F1, step 1.1, step 1.2, algebra]
3.1 (Index.) The map $\varphi:\mathbb Z^n\to\mathcal O_K$, $(m_i)\mapsto\sum_im_i\beta_i$, is a $\mathbb Z$-linear bijection with $\varphi(C\mathbb Z^n)=\mathfrak a$; hence $[\mathcal O_K:\mathfrak a]=[\mathbb Z^n:C\mathbb Z^n]=|\det C|$ by [F7], and by [F6] this index is $N\mathfrak a$. [F6, F7, step 1.2, step 2.1]
4.1 By [F4] applied to $\alpha_j=\sum_ic_{ij}\beta_i$ and [F5], $\operatorname{disc}(\alpha_1,\dots,\alpha_n)=\det(C)^2d_K$, so $|\operatorname{disc}(\alpha_1,\dots,\alpha_n)|=(N\mathfrak a)^2|d_K|$ by step 3.1. [F4, F5, step 3.1]
5.1 Steps 1.1, [F2] and [F3] give $\operatorname{covol}(\sigma(\mathfrak a))=|\det A|=2^{-r_2}\sqrt{|\operatorname{disc}(\alpha_1,\dots,\alpha_n)|}$, and step 4.1 evaluates the discriminant, so $\operatorname{covol}(\sigma(\mathfrak a))=2^{-r_2}\sqrt{(N\mathfrak a)^2|d_K|}=2^{-r_2}\sqrt{|d_K|}\,N\mathfrak a$. [F2, F3, step 1.1, step 4.1]
6.1 Step 5.1 is the asserted formula. [step 5.1] ∎
