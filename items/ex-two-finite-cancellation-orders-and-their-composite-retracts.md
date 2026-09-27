---
id: ex-two-finite-cancellation-orders-and-their-composite-retracts
kind: example
title: Two adjacent noncomposable Gaussian pivots in either finite order
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-finite-iterated-homological-gaussian-elimination, prop-homological-gaussian-elimination-gives-a-strong-deformation-retract, lem-block-triangular-basis-changes-diagonalize-an-invertible-differential-block, def-invertible-differential-block-and-schur-complement-reduction]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "David Clark, Scott Morrison and Kevin Walker, Fixing the Functoriality of Khovanov Homology, Appendix A.1, Lemma A.2, printed pp. 1562-1563"
      url: "https://msp.org/gt/2009/13-3/gt-v13-n3-p08-p.pdf"
    - title: "Dror Bar-Natan, Fast Khovanov Homology Computations, section 4 Lemma 4.2 and section 5, printed p. 5 (PDF p. 5)"
      url: "https://www.math.utoronto.ca/~drorbn/papers/FastKh/FastKh.pdf"
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

Let $X^\bullet$ be a cochain complex with objects
$$X^0=A,\qquad X^1=B\oplus C,\qquad X^2=D_1\oplus D_2\oplus E,\qquad X^3=F\oplus G,\qquad X^4=H,\qquad X^j=0\ (j\notin\{0,1,2,3,4\}),$$
differentials $d^0=(p;q)$, $d^1=\begin{pmatrix}\psi&\beta\\ x&\gamma\\ y&\delta\end{pmatrix}$ (rows $D_1,D_2,E$, columns $B,C$), $d^2=\begin{pmatrix}z&\mu&\lambda\\ w&\nu&\varphi\end{pmatrix}$ (rows $F,G$, columns $D_1,D_2,E$) and $d^3=(r\ s)$, with $\psi:B\to D_1$ and $\varphi:E\to G$ isomorphisms and with $d^1d^0=0$, $d^2d^1=0$ and $d^3d^2=0$; this is the Lemma A.2 shape of Clark–Morrison–Walker. The two pivots $\psi$ and $\varphi$ are adjacent but not composable, so the cancellation order is a genuine choice, and the example computes the reduction in each order.

## Facts & Assumptions

**Given:** The cochain complex $X^\bullet$ displayed above, with the invertible entries $\psi:B\to D_1$ of $d^1$ and $\varphi:E\to G$ of $d^2$, and the two cancellation orders: cancel $\psi$ first and then $\varphi$ in the reduced complex, or cancel $\varphi$ first and then $\psi$.

[L1] At a pivot $\varphi$ of a block $\begin{pmatrix}a&b\\ c&\varphi\end{pmatrix}$ in a decomposition $X^n=A'\oplus U$, $X^{n+1}=B'\oplus V$, the candidate reduction keeps $X^j$ for $j\notin\{n,n+1\}$ and the components of the neighbouring differentials along the retained summands $A'$ and $B'$, and replaces the differential by the Schur complement $a-b\varphi^{-1}c$ ([[def-invertible-differential-block-and-schur-complement-reduction]], [[lem-block-triangular-basis-changes-diagonalize-an-invertible-differential-block]]).

[L2] Each single cancellation in its current complex gives cochain maps $p,\imath$ and a degree-$(-1)$ homotopy $h$ with $p\imath=1$, $1-\imath p=dh+hd$, $ph=0$, $h\imath=0$, $h^2=0$ ([[prop-homological-gaussian-elimination-gives-a-strong-deformation-retract]]).

[L3] A finite sequence of cancellations with invertible current pivots composes: the composite data is $p=p_2p_1$, $\imath=\imath_1\imath_2$, $h=h_1+\imath_1h_2p_1$ and satisfies the same five identities, and reductions obtained from different valid choices are homotopy equivalent ([[thm-finite-iterated-homological-gaussian-elimination]]).

## Verification

1.1 Complex check. The composite $d^2d^1$ has $(i,j)$-entry the sum over $D_1,D_2,E$ of the products of entries of $d^2$ and $d^1$, and each of the three displayed matrix identities $d^1d^0=0$, $d^2d^1=0$, $d^3d^2=0$ is exactly the hypothesis that consecutive differentials of $X^\bullet$ vanish; the remaining composites are zero because $X^{-1}=X^5=0$. [L1, algebra]

1.2 Cancelling $\psi$ first. Write $X^1=C\oplus B$ and $X^2=(D_2\oplus E)\oplus D_1$, so that the pivot block of $d^1$ is $\psi:B\to D_1$, with $a=(\gamma;\delta):C\to D_2\oplus E$, $b=(x;y):B\to D_2\oplus E$ and $c=\beta:C\to D_1$. The Schur complement of the pivot is $a-b\psi^{-1}c=(\gamma-x\psi^{-1}\beta;\ \delta-y\psi^{-1}\beta):C\to D_2\oplus E$; the incoming arrow of the reduction is the $C$-component $q$ of $d^0$, and the outgoing arrow is the restriction of $d^2$ to the rows $D_2,E$, namely $\begin{pmatrix}\mu&\lambda\\ \nu&\varphi\end{pmatrix}$, in which the pivot $\varphi:E\to G$ still appears unchanged. [L1, L2, algebra]

1.3 Cancelling $\varphi$ first. In the decomposition $X^2=(D_1\oplus D_2)\oplus(E)$ and $X^3=(F)\oplus(G)$, the pivot $\varphi:E\to G$ has complement blocks $z,\mu$ (row $F$) and $w,\nu$, so the Schur complement is the arrow $D_1\oplus D_2\to F$ with entries $z-\lambda\varphi^{-1}w$ and $\mu-\lambda\varphi^{-1}\nu$; the incoming arrow is the restriction of $d^1$ to the rows $D_1,D_2$, namely $\begin{pmatrix}\psi&\beta\\ x&\gamma\end{pmatrix}$, and the outgoing arrow is $r:F\to H$. Cancelling $\psi$ second gives the middle differential $\gamma-x\psi^{-1}\beta$ on $C\to D_2$, the incoming arrow $q$ and the outgoing arrow $r$. [L1, L2, algebra]

2.1 Cancelling $\varphi$ second. In the complex of step 1.2 the pivot $\varphi:E\to G$ sits in the block of $\begin{pmatrix}\mu&\lambda\\ \nu&\varphi\end{pmatrix}$ with retained summands $D_2$ of the degree-$2$ object and $F$ of the degree-$3$ object, so the new middle differential is the Schur complement $\mu-\lambda\varphi^{-1}\nu:D_2\to F$, while the incoming arrow loses its $E$-component and becomes $\gamma-x\psi^{-1}\beta:C\to D_2$; the outgoing arrow is $r:F\to H$. [L1, step 1.2, algebra]

3.1 Order comparison. By steps 1.2 and 2.1, cancelling $\psi$ then $\varphi$ leaves the cochain complex $A\xrightarrow{q}C\xrightarrow{\gamma-x\psi^{-1}\beta}D_2\xrightarrow{\mu-\lambda\varphi^{-1}\nu}F\xrightarrow{r}H$; by step 1.3, cancelling $\varphi$ then $\psi$ leaves the same objects and the same four arrows. In each order the composite of the single-cancellation data is by [L3] the strong deformation retract data $p=p_2p_1$, $\imath=\imath_1\imath_2$, $h=h_1+\imath_1h_2p_1$ of $X^\bullet$ onto that reduction, satisfying $p\imath=1$, $1-\imath p=dh+hd$, $ph=0$, $h\imath=0$ and $h^2=0$; [L3] also gives that the two reductions are homotopy equivalent. [L3, step 2.1, step 1.3, algebra]

4.1 A concrete instance over $\mathbb Q$. Take every entry of $d^1$ equal to $1$, so $\psi=\beta=x=\gamma=y=\delta=1$; take $d^2=\begin{pmatrix}1&1&-2\\ 1&-2&1\end{pmatrix}$, $d^0=(1;-1)$ and $d^3=(0\ 0)$. Then $d^1d^0=(1-1;1-1;1-1)=0$, $d^2d^1=\begin{pmatrix}1+1-2&1+1-2\\ 1-2+1&1-2+1\end{pmatrix}=0$ and $d^3d^2=(0\ 0)$, so $X^\bullet$ is a complex. The two reduced middle arrows are $\gamma-x\psi^{-1}\beta=1-1=0$ and $\mu-\lambda\varphi^{-1}\nu=1-(-2)(1)^{-1}(-2)=1-4=-3$, and the end arrows are $q=-1$ and $r=0$; both orders give the reduced complex $\mathbb Q\xrightarrow{-1}\mathbb Q\xrightarrow{0}\mathbb Q\xrightarrow{-3}\mathbb Q\xrightarrow{0}\mathbb Q$, whose composites $0\cdot(-1)=0$ and $(-3)\cdot0=0$ vanish. ∎ [L1, L3, step 3.1, algebra]
