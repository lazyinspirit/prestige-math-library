---
id: def-standard-subgroups-of-gl-n-over-a-finite-field
kind: definition
title: Standard subgroups of finite general linear groups
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-finite-field-and-its-order, thm-existence-of-finite-fields, def-invertible-matrix-and-general-linear-group, thm-determinant-of-a-triangular-matrix, def-triangular-and-diagonal-matrices-over-a-commutative-ring, thm-matrix-multiplication-laws, cor-general-linear-group-is-a-group, def-subgroup, lem-standard-basis-of-f-n, def-matrices-over-a-commutative-ring]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Example 4.5, Lemma 4.7 and Example 8.4, printed pp. 18 and 30"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Exercise 4.28 and Definition 5.2, printed pp. 38-39 and 42"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Definition

**The ground field and the group.** Let $n\ge1$ and let $q$ be a prime power,
that is $q=p^m$ for a prime $p$ and an integer $m\ge1$. There exists a field
with exactly $q$ elements ([[thm-existence-of-finite-fields]]); fix one and call
it $\mathbb F_q$, so that $|\mathbb F_q|=q$
([[def-finite-field-and-its-order]]). Throughout, matrices have entries in
$\mathbb F_q$:
$$M_n(\mathbb F_q)=\{\,A:\{1,\dots,n\}\times\{1,\dots,n\}\to\mathbb F_q\,\},\qquad G:=\operatorname{GL}_n(\mathbb F_q),$$
the second being the set of invertible matrices, which is a group under matrix
multiplication ([[def-invertible-matrix-and-general-linear-group]],
[[cor-general-linear-group-is-a-group]]). Fixed throughout are the identity
matrix $I_n$ and the $i$-th standard basis vector $e_i$ of $\mathbb F_q^n$.

**Indexing convention.** On this page the rows and columns of a matrix are
numbered $1,\dots,n$ and a matrix is written $A=(a_{ij})_{1\le i,j\le n}$; this
is the usual relabelling of the $0$-indexed convention of
[[def-matrices-over-a-commutative-ring]]. We write $e_1,\dots,e_n$ for the
standard unit vectors of $\mathbb F_q^n$, so that $e_i$ has entry $1$ in
position $i$ and entry $0$ elsewhere; this is the $1$-indexed relabelling of the
ordered basis $e_0,\dots,e_{n-1}$ of [[lem-standard-basis-of-f-n]]. The
**standard flag** of $V=\mathbb F_q^n$ is the chain
$$V_0:=\{0\}\subsetneq V_1:=\langle e_1\rangle\subsetneq V_2:=\langle e_1,e_2\rangle\subsetneq\cdots\subsetneq V_n:=\langle e_1,\dots,e_n\rangle=V,$$
whose members are the **standard coordinate subspaces**; each $V_i$ has
$\dim_{\mathbb F_q}V_i=i$ and $V_{i-1}\subsetneq V_i$ for $1\le i\le n$, since
$e_1,\dots,e_i$ is a basis of $V_i$ and $e_i\in V_i\setminus V_{i-1}$.

**Upper triangular, diagonal and unitriangular matrices.** A matrix
$A=(a_{ij})\in M_n(\mathbb F_q)$ is **upper triangular** when $a_{ij}=0$ for all
$i>j$ and **diagonal** when $a_{ij}=0$ for all $i\ne j$
([[def-triangular-and-diagonal-matrices-over-a-commutative-ring]]). It is
**upper unitriangular**, or simply **unitriangular**, when it is upper
triangular and $a_{ii}=1$ for every $i$. Define the following subsets of $G$:
$$B:=\{\,b\in G: b\text{ is upper triangular}\,\},\qquad T:=\{\,t\in G: t\text{ is diagonal}\,\},\qquad U:=\{\,u\in G: u\text{ is unitriangular}\,\}.$$
$B$ is the **standard Borel subgroup**, $T$ the **standard (diagonal) torus**
and $U$ the **standard maximal unipotent subgroup** of $G$.

**The basic structure.** $B$, $T$ and $U$ are subgroups of $G$, we have
$T\le B$ and $U\le B$, and $T\cap U=\{I_n\}$. Here $I_n\in B\cap T\cap U$, and
each of the three sets is closed under products and inverses: the product of two
upper triangular (respectively diagonal, respectively unitriangular) matrices is
upper triangular (respectively diagonal, respectively unitriangular), and the
inverse of an invertible upper triangular matrix is upper triangular, with
diagonal entries $a_{ii}^{-1}$ in the diagonal case. For instance, if
$u=I_n+N$ with $N$ strictly upper triangular, then $N^n=0$ and
$$u^{-1}=I_n-N+N^2-\cdots+(-1)^{n-1}N^{n-1},$$
which is again unitriangular; the displayed product is computed with the
associative multiplication and distributivity of
[[thm-matrix-multiplication-laws]], and $N^n=0$ because $N$ moves every vector
at least one step up the flag
$0\le\langle e_1\rangle\le\langle e_1,e_2\rangle\le\cdots\le\mathbb F_q^n$.
The notation $U$ is consistent with "unipotent": every $u\in U$ satisfies
$(u-I_n)^n=0$.

**Every element of $B$ is a unique product $tu$.** Let $b=(b_{ij})\in B$. Since
$b$ is upper triangular and invertible, its determinant is the product
$b_{11}b_{22}\cdots b_{nn}$ ([[thm-determinant-of-a-triangular-matrix]]), so
$b_{ii}\ne0$ for every $i$; hence
$$t:=\operatorname{diag}(b_{11},\dots,b_{nn})\in T,\qquad u:=t^{-1}b,$$
where $t^{-1}=\operatorname{diag}(b_{11}^{-1},\dots,b_{nn}^{-1})$. A product of a
diagonal and an upper triangular matrix is upper triangular with diagonal
entries $b_{ii}^{-1}b_{ii}=1$, so $u\in U$ and $b=tu$ with $t\in T$,
$u\in U$. Conversely, if $b=t'u'$ with $t'\in T$ and $u'\in U$, then comparing
diagonal entries gives $t'=t$, and then $u'=t'^{-1}b=t^{-1}b=u$. So the
multiplication map
$$T\times U\longrightarrow B,\qquad (t,u)\longmapsto tu,$$
is a bijection: every $b\in B$ has a unique factorisation $b=tu$ with $t\in T$
and $u\in U$.

**Semidirect product structure.** $U$ is normal in $B$: for $t\in T$ and
$u\in U$ the conjugate $tut^{-1}$ is again unitriangular, and for
$g\in B$, written $g=t_0u_0$ with $t_0\in T$, $u_0\in U$, one gets
$gug^{-1}=t_0(u_0uu_0^{-1})t_0^{-1}\in U$ because $U$ is a subgroup and $T$
normalises $U$. Since $B=TU$, $T\cap U=\{I_n\}$ and $U\trianglelefteq B$, the
group $B$ is the internal semidirect product
$$B=T\ltimes U,$$
with $T$ acting on $U$ by conjugation. In particular every $b\in B$ has the
form $tu$ with $t\in T$, $u\in U$ and this expression is unique, which is the
structure used throughout this page.

**Two special cases.** For $n=1$ all matrices are $1\times1$, so
$G=B=T=\mathbb F_q^{\times}$ and $U=\{I_1\}$ is trivial. For $n=2$ the
elements of $B$ are $\begin{pmatrix}a&c\\0&d\end{pmatrix}$ with $ad\ne0$, and
the factorisation reads
$\begin{pmatrix}a&c\\0&d\end{pmatrix}
=\begin{pmatrix}a&0\\0&d\end{pmatrix}\begin{pmatrix}1&a^{-1}c\\0&1\end{pmatrix}$.

**Counting remark.** Since an upper triangular matrix has the $n(n+1)/2$
entries on and above the diagonal and an arbitrary assignment of these entries
with all diagonal entries nonzero is invertible, $|B|=(q-1)^nq^{n(n-1)/2}$;
$a_{ij}$ with $i<j$ is arbitrary in $U$. The diagonal torus $T$ is abelian and
isomorphic to $(\mathbb F_q^\times)^n$, while $U$ has order $q^{n(n-1)/2}$; the
factorisation $B=T\ltimes U$ therefore refines
$|B|=|T|\cdot|U|$.
