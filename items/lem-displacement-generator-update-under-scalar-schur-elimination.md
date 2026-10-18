---
id: lem-displacement-generator-update-under-scalar-schur-elimination
kind: lemma
title: "One exact scalar elimination step updates a displacement generator"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-block-lu-factorisation
  - def-displacement-rank-generators-and-lower-shift
  - def-matrix-product-and-identity-matrix
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniel Kressner and Robert Luce, Fast computation of the matrix
        exponential for a Toeplitz matrix, Lemma 3.1"
      url: "https://www.epfl.ch/labs/mathicse/wp-content/uploads/2018/10/23.2016_DK-R\
        L.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge2$, let $A=\begin{pmatrix}d&r^*\\ \ell&M\end{pmatrix}\in\mathbb C^{n\times n}$ with $d\ne0$, and let $s\ge1$ be an integer. Let $Z_n=\begin{pmatrix}0&0\\ e_0&Z_{n-1}\end{pmatrix}$ be the lower shift partitioned after its first row and column. Suppose
$$A-Z_nAZ_n^*=GH^*,\qquad G=\begin{pmatrix}\widehat G\\G_b\end{pmatrix},\quad H=\begin{pmatrix}\widehat H\\H_b\end{pmatrix},$$
where $G,H\in\mathbb C^{n\times s}$, $\widehat G,\widehat H\in\mathbb C^{1\times s}$, and $G_b,H_b\in\mathbb C^{(n-1)\times s}$. Let
$$S:=M-\ell d^{-1}r^*$$
be the scalar-pivot Schur complement. Define
$$p:=e_0+(Z_{n-1}\ell-\ell)/d,\qquad q:=e_0+(Z_{n-1}r-r)/\overline d,\qquad G':=G_b+p\widehat G,\quad H':=H_b+q\widehat H.$$
Then
$$S-Z_{n-1}SZ_{n-1}^*=G'H'^*.$$
Thus the updated displacement rank is at most $s$, although it can decrease. This is an exact identity conditional on the nonzero pivot $d$; it makes no conditioning or growth claim.

## Facts & Assumptions

**Given:** The block matrix $A$, nonzero scalar pivot $d$, lower shifts, and a width-$s$ generator $G,H$ for $A-Z_nAZ_n^*$.

[F1] The lower shift and displacement are $Z_n$ and $A-Z_nAZ_n^*$. [[def-displacement-rank-generators-and-lower-shift]]

[F2] Eliminating an invertible leading block uses the Schur complement $A_{22}-A_{21}A_{11}^{-1}A_{12}$. [[def-block-lu-factorisation]]

[F3] Matrix products are evaluated by their finite entry sums. [[def-matrix-product-and-identity-matrix]] Here $B^*$ denotes the conjugate transpose, $(B^*)_{ij}:=\overline{B_{ji}}$.

## Proof

1.1 Write $e=e_0\in\mathbb C^{n-1}$ and $Z'=Z_{n-1}$. Direct block multiplication using [F3] gives $$Z_nAZ_n^*= \begin{pmatrix} 0&0\\ 0&(ed+Z'\ell)e^*+(er^*+Z'M)Z'^* \end{pmatrix}.$$ Therefore the first row and column of $A-Z_nAZ_n^*$ are $(d,r^*)$ and $(d,\ell)^T$, while its lower-right block is $$M-Z'MZ'^*-dee^*-Z'\ell e^*-er^*Z'^*.$$ [F1, F3, algebra]

2.1 Comparing the four blocks of $GH^*=A-Z_nAZ_n^*$ in step 1.1 gives $\widehat G\widehat H^*=d$, $G_b\widehat H^*=\ell$, $\widehat G H_b^*=r^*$, and $$G_bH_b^*=M-Z'MZ'^*-dee^*-Z'\ell e^*-er^*Z'^*.$$ [given, step 1.1, algebra]

3.1 From the definitions of $G'$ and $H'$, $$G'H'^*=G_bH_b^*+\ell q^*+pr^*+dpq^*.$$ Here $q^*=e^*+(r^*Z'^*-r^*)/d$ and $p=e+(Z'\ell-\ell)/d$. Expand them separately: $$\ell q^*=\ell e^*+(\ell r^*Z'^*-\ell r^*)/d,\quad pr^*=er^*+(Z'\ell r^*-\ell r^*)/d,$$ $$dpq^*=dee^*+er^*Z'^*-er^*+(Z'\ell-\ell)e^* +((Z'\ell-\ell)(r^*Z'^*-r^*))/d.$$ The non-fractional terms combine to $dee^*+Z'\ell e^*+er^*Z'^*$, and the common fractional numerator simplifies by distributivity: $$\ell r^*Z'^*-\ell r^*+Z'\ell r^*-\ell r^*+(Z'\ell-\ell)r^*Z'^*-(Z'\ell-\ell)r^* =-\ell r^*+Z'\ell r^*Z'^*.$$ Thus $$\ell q^*+pr^*+dpq^* =dee^*+Z'\ell e^*+er^*Z'^*-\ell r^*/d+Z'\ell r^*Z'^*/d,$$ as required. Substituting [F2] and step 2.1 now yields $$G'H'^*=M-Z'MZ'^*-\ell r^*/d+Z'\ell r^*Z'^*/d=S-Z'SZ'^*.$$ [F2, step 2.1, algebra]

4.1 The factors $G',H'$ each have $s$ columns, so their product has rank at most $s$. A strict rank decrease is possible when columns become dependent; no exact rank preservation or numerical growth bound is asserted. [step 3.1, algebra] ∎

## Remarks

The source's general generator block-update lemma states the same structural fact for a block pivot. The scalar lower-shift specialization above supplies its full algebraic verification. A nonzero pivot permits this exact update; it does not guarantee a well-conditioned or small-growth elimination.
