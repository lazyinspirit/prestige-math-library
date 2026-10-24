---
id: lem-block-triangular-basis-changes-diagonalize-an-invertible-differential-block
kind: lemma
title: Triangular basis changes diagonalize an invertible differential block
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-invertible-differential-block-and-schur-complement-reduction, def-complex-homotopy-and-contractibility-in-an-additive-category, thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Dror Bar-Natan, Fast Khovanov Homology Computations, section 4 Lemma 4.2 and section 5, printed p. 5"
      url: "https://www.math.utoronto.ca/~drorbn/papers/FastKh/FastKh.pdf"
    - title: "David Clark, Scott Morrison and Kevin Walker, Fixing the Functoriality of Khovanov Homology, Appendix A.1, printed pp. 1562-1563"
      url: "https://msp.org/gt/2009/13-3/gt-v13-n3-p08-p.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $X^\bullet$ be a cochain complex in an additive category and let
$$d^n=\begin{pmatrix}a&b\\ c&\varphi\end{pmatrix}:A\oplus U\to B\oplus V$$
be an invertible-block decomposition as in
[[def-invertible-differential-block-and-schur-complement-reduction]]: the pivot
$\varphi:U\to V$ is an isomorphism, the neighbouring components are
$d^{n-1}=\begin{pmatrix}p\\ q\end{pmatrix}$ and
$d^{n+1}=\begin{pmatrix}r&s\end{pmatrix}$, and
$\bar d:=a-b\varphi^{-1}c$ is the Schur complement. Put
$$L=\begin{pmatrix}1&-b\varphi^{-1}\\ 0&1\end{pmatrix}:B\oplus V\to B\oplus V,\qquad R=\begin{pmatrix}1&0\\ -\varphi^{-1}c&1\end{pmatrix}:A\oplus U\to A\oplus U .$$
Then:

1. $L$ and $R$ are isomorphisms, with inverses
   $L^{-1}=\begin{pmatrix}1&b\varphi^{-1}\\ 0&1\end{pmatrix}$ and
   $R^{-1}=\begin{pmatrix}1&0\\ \varphi^{-1}c&1\end{pmatrix}$.
2. $Ld^nR=\begin{pmatrix}\bar d&0\\ 0&\varphi\end{pmatrix}$.
3. $cp+\varphi q=0$ and $rb+s\varphi=0$; consequently
   $R^{-1}\begin{pmatrix}p\\ q\end{pmatrix}=\begin{pmatrix}p\\ 0\end{pmatrix}$
   and
   $\begin{pmatrix}r&s\end{pmatrix}L^{-1}=\begin{pmatrix}r&0\end{pmatrix}$.
4. $\bar dp=0$ and $r\bar d=0$.
5. The candidate reduction $\bar X^\bullet$ of
   [[def-invertible-differential-block-and-schur-complement-reduction]] is a
   cochain complex: all composites of consecutive reduced differentials vanish.

## Facts & Assumptions

**Given:** A cochain complex $X^\bullet$ in an additive category, an integer $n$, a pivot decomposition $X^n=A\oplus U$, $X^{n+1}=B\oplus V$ with invertible block $\varphi:U\to V$, neighbouring components $p,q,r,s$, the Schur complement $\bar d=a-b\varphi^{-1}c$, and the morphisms $L,R,L^{-1},R^{-1}$ displayed above.

[L1] The components of $d^n,d^{n-1},d^{n+1}$ are the blocks $a,b,c,\varphi$ and $p,q,r,s$, the pivot satisfies $\varphi\varphi^{-1}=1_V$ and $\varphi^{-1}\varphi=1_U$, and composition of morphisms between finite biproducts is matrix multiplication ([[def-invertible-differential-block-and-schur-complement-reduction]], [[thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication]]).

[L2] $X^\bullet$ is a cochain complex, so $d^nd^{n-1}=0$ and $d^{n+1}d^n=0$ ([[def-complex-homotopy-and-contractibility-in-an-additive-category]]).

## Proof

**Proof technique:** direct.

1.1 Multiplying the two matrices with [L1], the first column of $d^nR$ is $d^n(1_A;-\varphi^{-1}c)=(a-b\varphi^{-1}c;c-\varphi\varphi^{-1}c)=(\bar d;0)$ and the second is $d^n(0;1_U)=(b;\varphi)$, so $d^nR=\begin{pmatrix}\bar d&b\\ 0&\varphi\end{pmatrix}$. [L1, algebra]

1.2 The displayed inverses work: $LL^{-1}=\begin{pmatrix}1&-b\varphi^{-1}\\ 0&1\end{pmatrix}\begin{pmatrix}1&b\varphi^{-1}\\ 0&1\end{pmatrix}=\begin{pmatrix}1&0\\ 0&1\end{pmatrix}$, and symmetrically $L^{-1}L=1$; likewise $RR^{-1}=\begin{pmatrix}1&0\\ -\varphi^{-1}c&1\end{pmatrix}\begin{pmatrix}1&0\\ \varphi^{-1}c&1\end{pmatrix}=\begin{pmatrix}1&0\\ 0&1\end{pmatrix}$ and $R^{-1}R=1$, all uses of $\varphi\varphi^{-1}=1_V$ cancelling the middle terms. [L1, algebra]

1.3 The composite $d^nd^{n-1}$ is the block matrix $\begin{pmatrix}ap+bq\\ cp+\varphi q\end{pmatrix}$, so $d^nd^{n-1}=0$ gives $ap+bq=0$ and $cp+\varphi q=0$; applying $\varphi^{-1}$ on the left to the second equation gives $q=-\varphi^{-1}cp$. [L1, L2, algebra]

1.4 The composite $d^{n+1}d^n$ is the block matrix $\begin{pmatrix}ra+sc&rb+s\varphi\end{pmatrix}$, so $d^{n+1}d^n=0$ gives $ra+sc=0$ and $rb+s\varphi=0$; multiplying the second equation on the right by $\varphi^{-1}$ gives $rb\varphi^{-1}=-s$. [L1, L2, algebra]

2.1 Applying $L$ to that result, the first column is $L(\bar d;0)=(\bar d-b\varphi^{-1}0;0)=(\bar d;0)$ and the second is $L(b;\varphi)=(b-b\varphi^{-1}\varphi;\varphi)=(0;\varphi)$, hence $Ld^nR=\begin{pmatrix}\bar d&0\\ 0&\varphi\end{pmatrix}$. [step 1.1, L1, algebra]

2.2 The first component of $R^{-1}\begin{pmatrix}p\\ q\end{pmatrix}$ is $1_Ap+0\cdot q=p$ and the second is $\varphi^{-1}cp+1_Uq=\varphi^{-1}cp+q=0$ by step 1.3, so $R^{-1}\begin{pmatrix}p\\ q\end{pmatrix}=\begin{pmatrix}p\\ 0\end{pmatrix}$. [step 1.3, L1, algebra]

2.3 Similarly $\begin{pmatrix}r&s\end{pmatrix}L^{-1}=\begin{pmatrix}r1_B+s\cdot0&rb\varphi^{-1}+s1_V\end{pmatrix}=\begin{pmatrix}r&rb\varphi^{-1}+s\end{pmatrix}=\begin{pmatrix}r&0\end{pmatrix}$ by step 1.4. [step 1.4, L1, algebra]

2.4 $\bar dp=(a-b\varphi^{-1}c)p=ap-b\varphi^{-1}cp=ap+bq=0$, substituting $q=-\varphi^{-1}cp$ from step 1.3 and then $ap+bq=0$. [step 1.3, algebra]

2.5 $r\bar d=r(a-b\varphi^{-1}c)=ra-rb\varphi^{-1}c=ra+sc=0$, substituting $rb\varphi^{-1}=-s$ from step 1.4 and then $ra+sc=0$. [step 1.4, algebra]

3.1 Every composite of consecutive differentials of $\bar X^\bullet$ vanishes. In the two modified degrees these are $\bar d^nd^{n-1}=\bar dp=0$ by step 2.4 and $\bar d^{n+1}\bar d^n=r\bar d=0$ by step 2.5. In the remaining degrees the reduction either keeps the arrows of $X$ or replaces $d^{n-1}$ by its $A$-component $p$ and $d^{n+1}$ by its $B$-component $r$: thus $p\,d^{n-2}=\operatorname{pr}_A d^{n-1}d^{n-2}=0$ because $d^{n-1}d^{n-2}=0$, and $d^{n+2}r=d^{n+2}d^{n+1}\imath_B=0$ because $d^{n+2}d^{n+1}=0$, where $\operatorname{pr}_A$ and $\imath_B$ are the biproduct projection and injection recording the components $p$ and $r$. All other composites are composites of consecutive differentials of $X$, hence vanish. [L1, L2, step 2.4, step 2.5, algebra]

4.1 Step 1.2 proves clause 1; steps 1.1 and 2.1 prove clause 2; steps 1.3, 1.4, 2.2 and 2.3 prove clause 3; steps 2.4 and 2.5 prove clause 4; and step 3.1 proves clause 5. In particular the candidate reduction of the block decomposition is a genuine cochain complex with the neighbouring arrows $p$ and $r$. ∎ [step 1.2, step 1.1, step 2.1, step 1.3, step 1.4, step 2.2, step 2.3, step 2.4, step 2.5, step 3.1]
