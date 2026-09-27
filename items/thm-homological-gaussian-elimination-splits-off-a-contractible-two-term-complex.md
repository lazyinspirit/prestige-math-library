---
id: thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex
kind: theorem
title: Gaussian elimination splits a contractible two-term complex
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-block-triangular-basis-changes-diagonalize-an-invertible-differential-block, def-invertible-differential-block-and-schur-complement-reduction, def-complex-homotopy-and-contractibility-in-an-additive-category]
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
  precheck: pass
---

## Statement

Let $X^\bullet$ be a cochain complex in an additive category with an
invertible-block decomposition
$d^n=\begin{pmatrix}a&b\\ c&\varphi\end{pmatrix}:A\oplus U\to B\oplus V$ and
Schur complement $\bar d=a-b\varphi^{-1}c$, as in
[[def-invertible-differential-block-and-schur-complement-reduction]], and let
$\bar X^\bullet$ be the candidate reduction. Let $K$ be the two-term cochain
complex with $K^n=U$, $K^{n+1}=V$, $K^j=0$ for $j\notin\{n,n+1\}$ and
differential $d_K^n=\varphi$; write $\bar X\oplus K$ for the degreewise
biproduct.

1. The cochain map $T:X^\bullet\to\bar X^\bullet\oplus K$ with components
   $$T^j=1\ (j\notin\{n,n+1\}),\qquad T^n=R^{-1}=\begin{pmatrix}1&0\\ \varphi^{-1}c&1\end{pmatrix},\qquad T^{n+1}=L=\begin{pmatrix}1&-b\varphi^{-1}\\ 0&1\end{pmatrix}$$
   is an isomorphism of cochain complexes, with inverse the cochain map $T^{-1}$
   whose components are $1$ in degrees $j\notin\{n,n+1\}$, $R$ in degree $n$ and
   $L^{-1}$ in degree $n+1$.
2. $K$ is contractible, with contracting homotopy $k^{n+1}=\varphi^{-1}:V\to U$
   and $k^j=0$ for $j\ne n+1$.
3. $X^\bullet$ and $\bar X^\bullet$ are homotopy equivalent: the projection
   $\tilde p:\bar X\oplus K\to\bar X$ and the inclusion
   $\tilde\imath:\bar X\to\bar X\oplus K$ satisfy
   $\tilde p\tilde\imath=1$ and $1-\tilde\imath\tilde p=d\tilde h+\tilde h d$
   for the homotopy $\tilde h$ vanishing except in degree $n+1$, where
   $\tilde h^{n+1}=\begin{pmatrix}0&0\\ 0&\varphi^{-1}\end{pmatrix}$, so that
   $p:=\tilde pT$ and $\imath:=T^{-1}\tilde\imath$ are homotopy inverse cochain
   maps.
4. The construction is a chain isomorphism followed by deletion of a
   contractible summand: it does not identify $X^\bullet$ with
   $\bar X^\bullet$ before that summand is split off, and in general $X^\bullet$
   and $\bar X^\bullet$ do not even have the same objects.

## Facts & Assumptions

**Given:** A cochain complex $X^\bullet$ in an additive category with a pivot decomposition at degree $n$, its candidate reduction $\bar X^\bullet$, the two-term complex $K$, and the maps $T,T^{-1},L,R,L^{-1},R^{-1},\tilde p,\tilde\imath,\tilde h$ displayed above.

[L1] The candidate reduction is a cochain complex; $Ld^nR=\begin{pmatrix}\bar d&0\\ 0&\varphi\end{pmatrix}$; $R^{-1}(p;q)=(p;0)$, $(r\ s)L^{-1}=(r\ 0)$ and $rb\varphi^{-1}=-s$ ([[lem-block-triangular-basis-changes-diagonalize-an-invertible-differential-block]]).

[L2] The decomposition of $X$ at degrees $n,n+1$, the candidate reduction $\bar X^\bullet$ with objects $A,B$ in those degrees and the two-term complex $K$ with differential $\varphi$ are as in the block definition; in particular $\bar d^{n-1}=p$, $\bar d^n=\bar d$, $\bar d^{n+1}=r$ and the differential of $\bar X\oplus K$ in degree $n$ is $\begin{pmatrix}\bar d&0\\ 0&\varphi\end{pmatrix}$ ([[def-invertible-differential-block-and-schur-complement-reduction]]).

[L3] Cochain maps, homotopies, homotopy equivalence, contractibility and degreewise biproducts are defined by componentwise equations, and the identity of a zero object is the zero morphism ([[def-complex-homotopy-and-contractibility-in-an-additive-category]]).

## Proof

**Proof technique:** direct.

1.1 Away from degrees $n-1,n,n+1$ the components of $T$ are identities and $\bar X^\bullet\oplus K$ agrees with $X^\bullet$ in the two adjacent degrees of each such case, so $T$ commutes with the differentials there; at degree $n-1$ one has $T^nd^{n-1}=R^{-1}(p;q)=(p;0)=\bar d^{n-1}T^{n-1}$ by [L1] and [L2]. [L1, L2, algebra]

1.2 At degree $n$, $T^{n+1}d^n=Ld^n=\begin{pmatrix}\bar d&0\\ 0&\varphi\end{pmatrix}R^{-1}=d^n_{\bar X\oplus K}T^n$, using $Ld^nR=\operatorname{diag}(\bar d,\varphi)$ and $R^{-1}R=1$ from [L1]. [L1, L2, algebra]

1.3 $K$ is a cochain complex: its only composite of consecutive differentials is $d_K^{n+1}d_K^n=0\cdot\varphi=0$, the differentials into and out of the zero objects $K^j$ being zero morphisms. [L2, L3, algebra]

1.4 $K$ is contractible with the displayed $k$: in degree $n$ one has $d_K^{n-1}k^n+k^{n+1}d_K^n=0+\varphi^{-1}\varphi=1_U$, in degree $n+1$ one has $d_K^nk^{n+1}+k^{n+2}d_K^{n+1}=\varphi\varphi^{-1}+0=1_V$, and in every other degree both terms are zero morphisms on a zero object. [L3, algebra]

2.1 At degree $n+1$, $T^{n+2}d^{n+1}=\begin{pmatrix}r&s\end{pmatrix}$ and $d^{n+1}_{\bar X\oplus K}T^{n+1}=\begin{pmatrix}r&0\end{pmatrix}L=\begin{pmatrix}r&-rb\varphi^{-1}\end{pmatrix}=\begin{pmatrix}r&s\end{pmatrix}$, using $rb\varphi^{-1}=-s$ from [L1]. Hence $T$ is a cochain map. [L1, L2, step 1.2, algebra]

2.2 The family $T'$ with components $1$ in degrees $j\notin\{n,n+1\}$, $R$ in degree $n$ and $L^{-1}$ in degree $n+1$ is a two-sided inverse of $T$ componentwise: $T'^nT^n=RR^{-1}=1$, $T^nT'^n=R^{-1}R=1$, $T'^{n+1}T^{n+1}=L^{-1}L=1$, $T^{n+1}T'^{n+1}=LL^{-1}=1$, and the remaining components are identities. [L1, step 1.2, algebra]

2.3 In the biproduct $\bar X^\bullet\oplus K$ the projection $\tilde p$ onto $\bar X$ and the inclusion $\tilde\imath$ of $\bar X$ satisfy $\tilde p\tilde\imath=1_{\bar X}$. For the homotopy $\tilde h$ that vanishes in all degrees except $n+1$, where $\tilde h^{n+1}=\begin{pmatrix}0&0\\ 0&\varphi^{-1}\end{pmatrix}$ in the coordinates $B\oplus V\to A\oplus U$, one computes degreewise: in degree $n$ both $1-\tilde\imath\tilde p=\begin{pmatrix}0&0\\ 0&1_U\end{pmatrix}$ and $d\tilde h+\tilde h d=\tilde h^{n+1}\begin{pmatrix}\bar d&0\\ 0&\varphi\end{pmatrix}=\begin{pmatrix}0&0\\ 0&1_U\end{pmatrix}$; in degree $n+1$ both $1-\tilde\imath\tilde p=\begin{pmatrix}0&0\\ 0&1_V\end{pmatrix}$ and $d\tilde h+\tilde h d=\begin{pmatrix}\bar d&0\\ 0&\varphi\end{pmatrix}\tilde h^{n+1}=\begin{pmatrix}0&0\\ 0&1_V\end{pmatrix}$; in all other degrees $\tilde h=0$ and $\tilde\imath\tilde p=1$. [L2, L3, step 1.3, algebra]

3.1 The family $T'$ is a cochain map: for every $j$, using the equation $T^{j+1}d^j=d^j_{\bar X\oplus K}T^j$ for the cochain map $T$ and the componentwise inverse identities of step 2.2, one has $T'^{j+1}d^j_{\bar X\oplus K}=T'^{j+1}d^j_{\bar X\oplus K}T^jT'^j=T'^{j+1}T^{j+1}d^jT'^j=d^jT'^j$. Hence $T'=T^{-1}$ is the displayed inverse cochain map. [step 2.2, step 1.1, step 1.2, step 2.1, algebra]

4.1 Define $p:=\tilde pT:X^\bullet\to\bar X^\bullet$, $\imath:=T^{-1}\tilde\imath:\bar X^\bullet\to X^\bullet$ and $h:=T^{-1}\tilde hT$. Then $p\imath=\tilde pTT^{-1}\tilde\imath=\tilde p\tilde\imath=1$ and $1-\imath p=T^{-1}(1-\tilde\imath\tilde p)T=T^{-1}(d\tilde h+\tilde h d)T=d(T^{-1}\tilde hT)+(T^{-1}\tilde hT)d=dh+hd$, using $Td=dT$ and $T^{-1}d=dT^{-1}$ for the chain isomorphisms $T,T^{-1}$ of steps 1.1 to 2.2. Hence $p$ and $\imath$ are cochain maps that are homotopy inverse, so $X^\bullet$ and $\bar X^\bullet$ are homotopy equivalent. [step 2.3, step 3.1, algebra]

5.1 Steps 1.1, 1.2 and 2.1 show that $T$ is a cochain map and steps 2.2 and 3.1 show that $T'$ is a two-sided inverse cochain map, so $T$ is an isomorphism of complexes with inverse $T^{-1}=T'$; steps 1.3 and 1.4 show that $K$ is a complex contractible via $\varphi^{-1}$; and step 4.1 transports the direct-sum deformation retract along $T$ to the homotopy equivalence of $X^\bullet$ with $\bar X^\bullet$. Because the construction replaces the objects $A\oplus U$, $B\oplus V$ by $A$, $B$ and modifies the neighbouring differentials, it never asserts an equality of complexes between $X^\bullet$ and $\bar X^\bullet$: the deletion of $K$ is a homotopy equivalence only after the chain isomorphism $T$. ∎ [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 1.4, step 4.1]
