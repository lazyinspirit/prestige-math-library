---
id: ex-a-two-by-two-unit-pivot-fixes-the-minus-schur-sign
kind: example
title: A unit pivot forces the minus Schur sign
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-block-triangular-basis-changes-diagonalize-an-invertible-differential-block, def-invertible-differential-block-and-schur-complement-reduction, cor-homological-gaussian-elimination-preserves-homotopy-type-and-homology, def-homology-object-of-a-chain-complex]
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
---

## Example

Work over $\mathbb Q$ and let
$$X^0=\mathbb Q^2,\qquad X^1=\mathbb Q^2,\qquad d^0=\begin{pmatrix}1&1\\ 1&1\end{pmatrix},\qquad d^1=0,\qquad X^j=0\ (j\notin\{0,1\}) .$$
This is a two-term cochain complex, since $d^1d^0=0$. Decompose
$X^0=A\oplus U$ and $X^1=B\oplus V$ with $A,B$ the first coordinates and
$U,V$ the second coordinates, so that the four blocks of $d^0$ are
$a=b=c=\varphi=1$ and the lower-right entry of $d^0$ is the identity, an
invertible pivot.

The example compares the two candidate signs in the Schur complement
$a\mp b\varphi^{-1}c$: the correct minus sign gives the reduced differential
$1-1\cdot1^{-1}\cdot1=0$ on $\mathbb Q\to\mathbb Q$, whose kernel and cokernel
are both one-dimensional and agree with those of $d^0$, while the plus sign
gives multiplication by $2$, whose kernel and cokernel both vanish.

## Facts & Assumptions

**Given:** The two-term complex $X^\bullet$ displayed above with the coordinate decomposition at degree $0$, and the candidate reduction $\bar X^\bullet$ at the pivot $\varphi=1$.

[L1] With $L=\begin{pmatrix}1&-b\varphi^{-1}\\ 0&1\end{pmatrix}$ and $R=\begin{pmatrix}1&0\\ -\varphi^{-1}c&1\end{pmatrix}$ one has $Ld^0R=\operatorname{diag}(a-b\varphi^{-1}c,\varphi)$, $R^{-1}(p;q)=(p;0)$, $(r\ s)L^{-1}=(r\ 0)$ and $\bar dp=0=r\bar d$; the candidate reduction is a cochain complex ([[lem-block-triangular-basis-changes-diagonalize-an-invertible-differential-block]]).

[L2] The candidate reduction keeps $X^j$ for $j\notin\{0,1\}$, replaces $X^0$ by $A$ and $X^1$ by $B$, and its differentials at degrees $-1,0,1$ are $p$, $a-b\varphi^{-1}c$ and $r$ where $d^{-1}=(p;q)$ and $d^1=(r\ s)$ ([[def-invertible-differential-block-and-schur-complement-reduction]]).

[L3] Over an abelian category the reduction is homotopy equivalent to $X^\bullet$ by a strong deformation retract, and the induced maps on homology objects of the reindexed chain complexes are inverse isomorphisms; in particular isomorphic homology objects in every degree ([[cor-homological-gaussian-elimination-preserves-homotopy-type-and-homology]]).

[L4] The homology object $H_n$ of a chain complex is the cokernel of the boundary-to-cycle map $B_n(C)\to Z_n(C)$; for a two-term complex the homology at the source is the kernel of its outgoing differential, and at the target it is the cokernel of its incoming differential ([[def-homology-object-of-a-chain-complex]]).

## Verification

1.1 The lower-left $2\times2$ block of $d^0$ is $\begin{pmatrix}1&1\\ 1&1\end{pmatrix}$ in the rows $B,V$ and columns $A,U$, so $a=b=c=\varphi=1$ and the pivot is the lower-right identity, invertible with $\varphi^{-1}=1$. [L2, algebra]

1.2 The Schur complement is $a-b\varphi^{-1}c=1-1\cdot1^{-1}\cdot1=0$, so by [L1] the reduction has differential $\bar d^0=0:\mathbb Q\to\mathbb Q$; its neighbouring arrows are $\bar d^{-1}=p=0$ and $\bar d^1=r=0$, because $d^{-1}=0$ and $d^1=0$ have no components into or out of the discarded summands. Hence $\bar X^\bullet$ is $\mathbb Q\xrightarrow{0}\mathbb Q$ in degrees $0,1$. [L1, L2, algebra]

1.3 Under the reindexing $C_n=X^{-n}$ the two-term complex becomes the chain complex $\mathbb Q\xrightarrow{d^0}\mathbb Q$ concentrated in degrees $0,-1$, so by [L4] its homology is $H_0=\ker d^0$ and $H_{-1}=\operatorname{coker}d^0$, corresponding to cochain degrees $0$ and $1$. For the reduction these are $\ker(0)=\mathbb Q$ and $\operatorname{coker}(0)=\mathbb Q$; for $X^\bullet$ they are $\ker d^0=\mathbb Q(1,-1)\cong\mathbb Q$, since $\begin{pmatrix}1&1\\ 1&1\end{pmatrix}\binom{x}{y}=\binom{x+y}{x+y}$, and $\operatorname{coker}d^0=\mathbb Q^2/\mathbb Q(1,1)\cong\mathbb Q$. The two complexes therefore have isomorphic one-dimensional homology, as [L3] requires. [L1, L3, L4, algebra]

2.1 With the plus sign, the candidate differential would be $a+b\varphi^{-1}c=1+1=2$, the map $\mathbb Q\xrightarrow{2}\mathbb Q$ with $\ker(2)=0$ and $\operatorname{coker}(2)=\mathbb Q/2\mathbb Q=0$; its homology would vanish in both degrees, whereas $X^\bullet$ has one-dimensional homology in both degrees and is homotopy equivalent to its reduction by [L3]. The plus sign is therefore impossible, and the example exhibits the minus sign in the Schur complement. ∎ [L3, step 1.2, step 1.3, algebra]
