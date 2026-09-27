---
id: def-invertible-differential-block-and-schur-complement-reduction
kind: definition
title: An invertible cochain differential block and its candidate reduction
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-complex-homotopy-and-contractibility-in-an-additive-category, thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Dror Bar-Natan, Fast Khovanov Homology Computations, section 4 Lemma 4.2 and section 5, printed p. 5"
      url: "https://www.math.utoronto.ca/~drorbn/papers/FastKh/FastKh.pdf"
    - title: "David Clark, Scott Morrison and Kevin Walker, Fixing the Functoriality of Khovanov Homology, Appendix A.1, printed pp. 1562-1563"
      url: "https://msp.org/gt/2009/13-3/gt-v13-n3-p08-p.pdf"
verification:
  precheck: n/a
---

## Definition

**The block decomposition.** Let $X^\bullet$ be a cochain complex in an additive
category $\mathcal A$
([[def-complex-homotopy-and-contractibility-in-an-additive-category]]) and fix
an integer $n$. Suppose that in degrees $n$ and $n+1$ the objects of $X$ are
given as biproducts
$$X^n=A\oplus U,\qquad X^{n+1}=B\oplus V,$$
with the injections and projections of these biproducts fixed. With respect to
these ordered decompositions write the differential at degree $n$ as the block
matrix
$$d^n=\begin{pmatrix}a&b\\ c&\varphi\end{pmatrix}:A\oplus U\to B\oplus V,$$
where the rows name $B,V$ and the columns name $A,U$: thus $a:A\to B$,
$b:U\to B$, $c:A\to V$ and $\varphi:U\to V$ are the four components, and
composition of such block matrices is matrix multiplication
([[thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication]]).

**The pivot.** The block $\varphi:U\to V$ is a **pivot** when it is an
isomorphism, with two-sided inverse $\varphi^{-1}:V\to U$. Only $\varphi$ is
assumed invertible; $a,b,c$ are arbitrary morphisms. The objects $A,U,B,V$ may
themselves be biproducts of several objects, in which case $\varphi$ is an
invertible matrix of morphisms and is still required to be a single isomorphism
$U\to V$; in particular $U$ and $V$ need not be nonzero or indecomposable.

**The neighbours.** With respect to the same decompositions write the
neighbouring differentials as
$$d^{n-1}=\begin{pmatrix}p\\ q\end{pmatrix}:X^{n-1}\to A\oplus U,\qquad d^{n+1}=\begin{pmatrix}r&s\end{pmatrix}:B\oplus V\to X^{n+2},$$
so that $p:X^{n-1}\to A$, $q:X^{n-1}\to U$, $r:B\to X^{n+2}$ and
$s:V\to X^{n+2}$ are the neighbouring components across the two pivot blocks.

**The candidate reduction.** The **candidate reduction** $\bar X^\bullet$ of
$X^\bullet$ at the pivot $\varphi$ is the collection of objects and morphisms
$$\bar X^j:=X^j\quad(j\notin\{n,n+1\}),\qquad \bar X^n:=A,\qquad \bar X^{n+1}:=B,$$
with differentials
$$\bar d^j:=d^j\ (j\notin\{n-1,n,n+1\}),\qquad \bar d^{n-1}:=p,\qquad \bar d^n:=a-b\varphi^{-1}c,\qquad \bar d^{n+1}:=r .$$
The morphism $a-b\varphi^{-1}c:A\to B$ is the **Schur complement** of the pivot
$\varphi$ in $d^n$. In words: the objects and arrows outside degrees $n,n+1$ are
retained verbatim; the pivot blocks $U,V$ are discarded; and the differential at
degree $n$ is replaced by its Schur complement, while the neighbouring
differentials lose their components through the discarded blocks and keep $p$
and $r$.

**Status of the construction.** The words *candidate* and *reduction* are
provisional: the definition alone does not assert that
$\bar d^n\bar d^{n-1}=0$ or $\bar d^{n+1}\bar d^n=0$, that is, that
$\bar X^\bullet$ is a cochain complex. The next lemma verifies this, using the
identities $cp+\varphi q=0$ and $rb+s\varphi=0$ that follow from the square-zero
composites $d^nd^{n-1}=0$ and $d^{n+1}d^n=0$ of the given complex.

**Homological convention and scope.** For a homological, degree-lowering complex
the same formulas apply after the reindexing $n\mapsto-n$ of
[[def-complex-homotopy-and-contractibility-in-an-additive-category]]: in the
chain convention the pivot is the corresponding invertible block of $d_n$ and the
reduced differential is again the Schur complement of that block, with the
contracting homotopy of the discarded two-term complex acquiring degree $+1$. No
sign is inserted. The construction uses only the additive structure; it assumes
no abelian category, no exactness, no projectivity, no boundedness and no
homology object.
