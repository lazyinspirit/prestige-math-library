---
id: ex-neighbouring-differentials-after-a-gaussian-basis-change
kind: example
title: Neighboring differentials transform with the pivot basis changes
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-block-triangular-basis-changes-diagonalize-an-invertible-differential-block, def-invertible-differential-block-and-schur-complement-reduction]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Dror Bar-Natan, Fast Khovanov Homology Computations, section 4 Lemma 4.2 and section 5, printed p. 5 (PDF p. 5)"
      url: "https://www.math.utoronto.ca/~drorbn/papers/FastKh/FastKh.pdf"
    - title: "David Clark, Scott Morrison and Kevin Walker, Fixing the Functoriality of Khovanov Homology, Appendix A.1, printed pp. 1562-1563"
      url: "https://msp.org/gt/2009/13-3/gt-v13-n3-p08-p.pdf"
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Example

Let $k$ be any field and consider the cochain segment
$$X^0=k\xrightarrow{d^0=\binom{1}{-1}}X^1=k^2\xrightarrow{d^1=\begin{pmatrix}1&1\\ 1&1\end{pmatrix}}X^2=k^2\xrightarrow{d^2=(1\ -1)}X^3=k,\qquad X^j=0\ (j\notin\{0,1,2,3\}) .$$
Both neighbouring composites vanish, $d^1d^0=(0,0)$ and $d^2d^1=(0,0)$, so this
is a cochain complex. Cancel the lower-right identity in degree $1$, i.e. use
the coordinate decomposition $X^1=A\oplus U$, $X^2=B\oplus V$ with $A,B$ the
first coordinates and $U,V$ the second coordinates; then
$a=b=c=\varphi=1$ and $\varphi$ is invertible.

The example computes the basis changes of
[[lem-block-triangular-basis-changes-diagonalize-an-invertible-differential-block]]
explicitly and shows that the transformed neighbouring arrows are $(1;0)$ and
$(1,0)$, with diagonalized pivot $\operatorname{diag}(0,1)$, so the reduced
segment is $k\xrightarrow{1}k\xrightarrow{0}k\xrightarrow{1}k$.

## Facts & Assumptions

**Given:** The cochain segment $X^\bullet$ displayed above with the coordinate decomposition in degrees $1,2$, the pivot $\varphi=1$, the neighbouring components $d^0=(p;q)$ and $d^2=(r\ s)$, and the morphisms $L,R,L^{-1},R^{-1}$ of the lemma.

[L1] For the decomposition at degree $n=1$ one has $L=\begin{pmatrix}1&-b\varphi^{-1}\\ 0&1\end{pmatrix}$, $L^{-1}=\begin{pmatrix}1&b\varphi^{-1}\\ 0&1\end{pmatrix}$, $R=\begin{pmatrix}1&0\\ -\varphi^{-1}c&1\end{pmatrix}$, $R^{-1}=\begin{pmatrix}1&0\\ \varphi^{-1}c&1\end{pmatrix}$, and $Ld^1R=\operatorname{diag}(a-b\varphi^{-1}c,\varphi)$, $R^{-1}(p;q)=(p;0)$, $(r\ s)L^{-1}=(r\ 0)$ ([[lem-block-triangular-basis-changes-diagonalize-an-invertible-differential-block]]).

[L2] The reduced complex keeps $X^0$ and $X^3$, replaces $X^1$ by $A$ and $X^2$ by $B$, and has differentials $\bar d^0=p$, $\bar d^1=a-b\varphi^{-1}c$, $\bar d^2=r$ ([[def-invertible-differential-block-and-schur-complement-reduction]]).

## Verification

1.1 The vanishing composites: $d^1d^0=\begin{pmatrix}1&1\\ 1&1\end{pmatrix}\binom{1}{-1}=\binom{0}{0}$ and $d^2d^1=(1\ -1)\begin{pmatrix}1&1\\ 1&1\end{pmatrix}=(0\ 0)$, so $X^\bullet$ is a cochain complex; the blocks of $d^1$ are $a=b=c=\varphi=1$ because its lower-right entry is the identity, and the neighbour components are $d^0=(p;q)=(1;-1)$ and $d^2=(r\ s)=(1\ -1)$. [L2, algebra]

1.2 The basis changes are $L=\begin{pmatrix}1&-1\\ 0&1\end{pmatrix}$ with inverse $L^{-1}=\begin{pmatrix}1&1\\ 0&1\end{pmatrix}$, and $R=\begin{pmatrix}1&0\\ -1&1\end{pmatrix}$ with inverse $R^{-1}=\begin{pmatrix}1&0\\ 1&1\end{pmatrix}$, all with entries in $k$ and determinant $1$. [L1, algebra]

2.1 The transformed incoming arrow is $R^{-1}(p;q)=\begin{pmatrix}1&0\\ 1&1\end{pmatrix}\binom{1}{-1}=\binom{1}{0}$; the transformed outgoing arrow is $(r\ s)L^{-1}=(1\ -1)\begin{pmatrix}1&1\\ 0&1\end{pmatrix}=(1\ 0)$. [L1, step 1.1, step 1.2, algebra]

2.2 The diagonalized middle differential is $Ld^1R$: first $d^1R=\begin{pmatrix}1&1\\ 1&1\end{pmatrix}\begin{pmatrix}1&0\\ -1&1\end{pmatrix}=\begin{pmatrix}0&1\\ 0&1\end{pmatrix}$, then $L\begin{pmatrix}0&1\\ 0&1\end{pmatrix}=\begin{pmatrix}1&-1\\ 0&1\end{pmatrix}\begin{pmatrix}0&1\\ 0&1\end{pmatrix}=\begin{pmatrix}0&0\\ 0&1\end{pmatrix}=\operatorname{diag}(a-b\varphi^{-1}c,\varphi)$ with $a-b\varphi^{-1}c=1-1=0$. [L1, step 1.2, algebra]

3.1 By [L2] the reduced complex has $X^0=k$, $X^1=A=k$, $X^2=B=k$, $X^3=k$ with differentials $\bar d^0=p=1$, $\bar d^1=a-b\varphi^{-1}c=0$ and $\bar d^2=r=1$, that is the reduced segment $k\xrightarrow{1}k\xrightarrow{0}k\xrightarrow{1}k$; its composites are $0\cdot1=0$ and $1\cdot0=0$, so it is a cochain complex, as the lemma guarantees. In the transformed coordinates the discarded components are exactly $\varphi^{-1}cp+q=1-1=0$ of the incoming arrow and $rb\varphi^{-1}+s=1-1=0$ of the outgoing arrow, which is why the second entries of the transformed arrows vanish; the entries along the retained summands, namely $p=1$ and $r=1$, pass to the reduction unchanged. ∎ [L1, L2, step 2.1, step 2.2, algebra]
