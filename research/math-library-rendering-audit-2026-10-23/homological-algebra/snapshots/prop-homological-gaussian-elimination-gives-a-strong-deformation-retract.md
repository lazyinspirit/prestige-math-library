---
id: prop-homological-gaussian-elimination-gives-a-strong-deformation-retract
kind: proposition
title: Explicit strong deformation retract from Gaussian cancellation
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex, lem-block-triangular-basis-changes-diagonalize-an-invertible-differential-block, def-complex-homotopy-and-contractibility-in-an-additive-category]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "David Clark, Scott Morrison and Kevin Walker, Fixing the Functoriality of Khovanov Homology, Appendix A.1, printed pp. 1562-1563"
      url: "https://msp.org/gt/2009/13-3/gt-v13-n3-p08-p.pdf"
    - title: "Dror Bar-Natan, Fast Khovanov Homology Computations, section 4 Lemma 4.2 and section 5, printed p. 5"
      url: "https://www.math.utoronto.ca/~drorbn/papers/FastKh/FastKh.pdf"
verification:
  audited: 2026-09-29
  precheck: pass
---

## Statement

Let $X^\bullet$ be a cochain complex in an additive category with an
invertible-block decomposition
$d^n=\begin{pmatrix}a&b\\ c&\varphi\end{pmatrix}:A\oplus U\to B\oplus V$ and
Schur complement $\bar d=a-b\varphi^{-1}c$, let $\bar X^\bullet$ be the candidate
reduction, and let $X^\bullet\simeq\bar X^\bullet$ be the homotopy equivalence
of
[[thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]].
Define graded maps $p:X^\bullet\to\bar X^\bullet$,
$\imath:\bar X^\bullet\to X^\bullet$ and $h:X^\bullet\to X^\bullet$ by the
components
$$p^n=\begin{pmatrix}1&0\end{pmatrix},\qquad p^{n+1}=\begin{pmatrix}1&-b\varphi^{-1}\end{pmatrix},\qquad \imath^n=\begin{pmatrix}1\\ -\varphi^{-1}c\end{pmatrix},\qquad \imath^{n+1}=\begin{pmatrix}1\\ 0\end{pmatrix},$$
with all other components of $p$ and $\imath$ identities, and by
$$h^{n+1}=\begin{pmatrix}0&0\\ 0&\varphi^{-1}\end{pmatrix},\qquad h^j=0\ (j\ne n+1).$$
Then $p$ and $\imath$ are cochain maps, and with the conventions of
[[def-complex-homotopy-and-contractibility-in-an-additive-category]] for the
components of composites,
$$p\imath=1_{\bar X^\bullet},\qquad 1_{X^\bullet}-\imath p=dh+hd,\qquad ph=0,\qquad h\imath=0,\qquad h^2=0 .$$
Here $(ph)^j=p^{j-1}h^j$, $(h\imath)^j=h^j\imath^j$ and $(h^2)^j=h^{j-1}h^j$,
so each side condition is a statement about the indicated composite in the
degree written. In particular $p$ and $\imath$ are the homotopy inverses of the
homotopy equivalence of the previous theorem, exhibited by the explicit
homotopy $h$.

## Facts & Assumptions

**Given:** A cochain complex $X^\bullet$ in an additive category with the pivot decomposition at degree $n$, its reduction $\bar X^\bullet$, and the graded maps $p,\imath,h$ displayed above.

[L1] The chain isomorphism $T$ of [[thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]] has components $T^n=R^{-1}=\begin{pmatrix}1&0\\ \varphi^{-1}c&1\end{pmatrix}$ and $T^{n+1}=L=\begin{pmatrix}1&-b\varphi^{-1}\\ 0&1\end{pmatrix}$, identities elsewhere, and the transported homotopy equivalence has the form $p=\tilde pT$, $\imath=T^{-1}\tilde\imath$, $h=T^{-1}\tilde hT$ with $\tilde h^{n+1}=\begin{pmatrix}0&0\\ 0&\varphi^{-1}\end{pmatrix}$ and $\tilde p,\tilde\imath$ the projection onto and inclusion of the reduction summand.

[L2] The blocks satisfy $Ld^nR=\operatorname{diag}(\bar d,\varphi)$, $R^{-1}(p;q)=(p;0)$, $(r\ s)L^{-1}=(r\ 0)$, $q=-\varphi^{-1}cp$, $rb\varphi^{-1}=-s$, $\bar dp=0$ and $r\bar d=0$ ([[lem-block-triangular-basis-changes-diagonalize-an-invertible-differential-block]], [[thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]]).

[L3] Composites of the graded maps above are formed degreewise — $(ph)^j=p^{j-1}h^j$, $(h\imath)^j=h^j\imath^j$ and $(h^2)^j=h^{j-1}h^j$ — and the components of $p$ and $\imath$ in degrees $j\notin\{n,n+1\}$ are identities, so $\imath^jp^j=1_{X^j}$ there, sums and negatives being those of the additive ambient category ([[def-complex-homotopy-and-contractibility-in-an-additive-category]]).

## Proof

**Proof technique:** direct.

1.1 The components of $p$ are those of $\tilde pT$: in degree $n$, $p^n=\begin{pmatrix}1&0\end{pmatrix}R^{-1}=\begin{pmatrix}1&0\end{pmatrix}$; in degree $n+1$, $p^{n+1}=\begin{pmatrix}1&0\end{pmatrix}L=\begin{pmatrix}1&-b\varphi^{-1}\end{pmatrix}$; and in the remaining degrees both factors are identities. Since $p$ is a composite of cochain maps, it is a cochain map. [L1, algebra]

1.2 The components of $\imath$ are those of $T^{-1}\tilde\imath$: in degree $n$, $\imath^n=R\begin{pmatrix}1\\ 0\end{pmatrix}=\begin{pmatrix}1\\ -\varphi^{-1}c\end{pmatrix}$; in degree $n+1$, $\imath^{n+1}=L^{-1}\begin{pmatrix}1\\ 0\end{pmatrix}=\begin{pmatrix}1\\ 0\end{pmatrix}$; and in the remaining degrees both factors are identities. So $\imath$ is a cochain map. [L1, algebra]

1.3 The components of $h$ are those of $\tilde h$ transported by the identities in degrees other than $n+1$: $(T^{-1}\tilde hT)^{n+1}=R\tilde h^{n+1}L=\begin{pmatrix}0&0\\ 0&\varphi^{-1}\end{pmatrix}$. Indeed, the lower row of $L$ is $(0,1)$ and the right column of $R$ is $(0,1)^T$, so the displayed identity follows by biproduct matrix multiplication. In degree $j\ne n+1$ one has $\tilde h^j=0$ and hence $h^j=0$. [L1, algebra]

2.1 $p\imath=1_{\bar X^\bullet}$: in degree $n$ one has $p^n\imath^n=\begin{pmatrix}1&0\end{pmatrix}\begin{pmatrix}1\\ -\varphi^{-1}c\end{pmatrix}=1_A$; in degree $n+1$ one has $p^{n+1}\imath^{n+1}=\begin{pmatrix}1&-b\varphi^{-1}\end{pmatrix}\begin{pmatrix}1\\ 0\end{pmatrix}=1_B$; in every other degree $p^j\imath^j=1\cdot1=1$. [step 1.1, step 1.2, algebra]

2.2 $(1-\imath p)^n=\begin{pmatrix}1&0\\ 0&1\end{pmatrix}-\begin{pmatrix}1\\ -\varphi^{-1}c\end{pmatrix}\begin{pmatrix}1&0\end{pmatrix}=\begin{pmatrix}0&0\\ \varphi^{-1}c&1\end{pmatrix}$ and $(dh+hd)^n=d^{n-1}h^n+h^{n+1}d^n=\begin{pmatrix}0&0\\ 0&\varphi^{-1}\end{pmatrix}\begin{pmatrix}a&b\\ c&\varphi\end{pmatrix}=\begin{pmatrix}0&0\\ \varphi^{-1}c&1\end{pmatrix}$, using $h^n=0$ and the block form of $d^n$. [step 1.3, L2, algebra]

2.3 $(1-\imath p)^{n+1}=\begin{pmatrix}1&0\\ 0&1\end{pmatrix}-\begin{pmatrix}1\\ 0\end{pmatrix}\begin{pmatrix}1&-b\varphi^{-1}\end{pmatrix}=\begin{pmatrix}0&b\varphi^{-1}\\ 0&1\end{pmatrix}$ and $(dh+hd)^{n+1}=d^nh^{n+1}+h^{n+2}d^{n+1}=\begin{pmatrix}a&b\\ c&\varphi\end{pmatrix}\begin{pmatrix}0&0\\ 0&\varphi^{-1}\end{pmatrix}=\begin{pmatrix}0&b\varphi^{-1}\\ 0&1\end{pmatrix}$, using $h^{n+2}=0$. [step 1.3, L2, algebra]

2.4 $(ph)^j=p^{j-1}h^j=0$ for all $j$: for $j=n+1$ this is $p^n h^{n+1}=\begin{pmatrix}1&0\end{pmatrix}\begin{pmatrix}0&0\\ 0&\varphi^{-1}\end{pmatrix}=\begin{pmatrix}0&0\end{pmatrix}$, and for $j\ne n+1$ the factor $h^j$ is zero. [step 1.1, step 1.3, L3, algebra]

2.5 $(h\imath)^j=h^j\imath^j=0$ for all $j$: for $j=n+1$ this is $h^{n+1}\imath^{n+1}=\begin{pmatrix}0&0\\ 0&\varphi^{-1}\end{pmatrix}\begin{pmatrix}1\\ 0\end{pmatrix}=\begin{pmatrix}0\\ 0\end{pmatrix}$, and for $j\ne n+1$ the factor $h^j$ is zero. [step 1.2, step 1.3, L3, algebra]

2.6 $(h^2)^j=h^{j-1}h^j=0$ for all $j$: if $j\ne n+1$ then $h^j=0$, and if $j=n+1$ then $h^{j-1}=h^n=0$. [step 1.3, L3, algebra]

3.1 In every degree $j\notin\{n,n+1\}$ one has $h^j=0$ and $\imath^jp^j=1\cdot1=1$, hence $(1-\imath p)^j=0=(dh+hd)^j$. Together with steps 2.2 and 2.3 this gives $1-\imath p=dh+hd$. [step 1.3, step 2.2, step 2.3, L3, algebra]

4.1 Steps 2.1, 2.2, 2.3 and 3.1 show $p\imath=1$ and $1-\imath p=dh+hd$ for the explicit cochain maps $p,\imath$ and homotopy $h$, and steps 2.4 to 2.6 verify the three side conditions $ph=0$, $h\imath=0$ and $h^2=0$ in the degree conventions stated. Hence the displayed data is an explicit strong deformation retract of $X^\bullet$ onto $\bar X^\bullet$: a chosen retraction, a chosen section and a chosen contracting homotopy with the side conditions above. ∎ [step 2.1, step 2.2, step 2.3, step 3.1, step 2.4, step 2.5, step 2.6]
