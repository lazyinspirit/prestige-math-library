---
id: lem-connected-cover-of-punctured-disc-for-irreducible-plane-curve
kind: lemma
title: "An irreducible plane curve gives a connected punctured covering"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-discriminant-and-branch-locus-weierstrass-hypersurface
  - def-reduced-holomorphic-germ-for-hypersurface
  - def-weierstrass-polynomial
  - lem-prepared-factorizations-and-irreducibility
  - lem-reduced-prepared-polynomial-has-nonzero-discriminant
  - thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
  - thm-discriminant-root-formula-and-repeated-root-criterion
  - thm-holomorphic-implicit-function-theorem
  - thm-identity-theorem-in-several-complex-variables
  - thm-removable-singularity-characterizations
  - thm-zero-order-factorization-holomorphic-function
justified_by: []
landmark: true
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: contradiction
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Chapter 6 §§6.1–6.7"
      url: "https://www.jirka.org/scv/scv.pdf"
      locator: "Theorem 6.3.3 dependence of zeros and the discriminant set (p. 178); Example 6.6.4 the branched projection of a smooth parabola (p. 190); §6.7 irreducible decomposition and branches (pp. 193–194)."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §§2, 4 and 6"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "II (4.19) finite preparation, discriminant and the unramified part of the covering (p. 95)."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Let $W\in\mathcal O_{\mathbb C^2,0}$ be a Weierstrass polynomial of degree
$m\ge1$ in the variable $y$ ([[def-weierstrass-polynomial]]), so that

$$W(x,y)=y^m+a_{m-1}(x)y^{m-1}+\cdots+a_0(x),\qquad a_j\in\mathcal O_{\mathbb C,0},\ a_j(0)=0,$$

and assume that $W$ is reduced
([[def-reduced-holomorphic-germ-for-hypersurface]]) and irreducible in
$\mathcal O_{\mathbb C^2,0}$. Then there is $\varepsilon>0$ such that, writing
$D^*:=\{x\in\mathbb C:0<|x|<\varepsilon\}$, the zero set
$Z(W)\cap(D^*\times\mathbb C)$ is a connected $m$-sheeted unramified covering
of $D^*$; moreover every zero tends to the origin over the base point:

$$(x_n,y_n)\in Z(W),\ x_n\to0\quad\Longrightarrow\quad y_n\to0 .$$

## Facts & Assumptions

**Given:** A reduced irreducible Weierstrass polynomial $W$ of degree $m\ge1$ in $y$.

[F1] $W$ is monic of degree $m$ in $y$ with coefficients in $\mathcal O_{\mathbb C,0}$ vanishing at the origin, so $W(0,y)=y^m$ and $W$ is regular in $y$ of order $m$ ([[def-weierstrass-polynomial]]).

[F2] For any $r>0$, after shrinking the coefficient disc $V$ one has $\sum_{j<m}|a_j(x)|r^{j-m}<1$ for $x\in V$, since all $a_j(0)=0$. If $|y|\ge r$, then $\sum_{j<m}|a_j(x)y^j|<|y|^m$, so $W(x,y)\ne0$. Thus every root of every slice over $V$ lies in $D=\{|y|<r\}$; this estimate uses only [F1].

[F3] Since $W$ itself is a reduced prepared polynomial, $D_W=\operatorname{Disc}_y(W)$ is a nonzero germ ([[lem-reduced-prepared-polynomial-has-nonzero-discriminant]]). For $x_0\in V$, $D_W(x_0)=0$ exactly when the slice has a repeated root ([[thm-discriminant-root-formula-and-repeated-root-criterion]]). On a root-containing representative this is the branch set of the fixed projection, as in [[def-discriminant-and-branch-locus-weierstrass-hypersurface]].

[F4] A monic polynomial of degree $m$ over $\mathbb C$ has exactly $m$ roots counted with multiplicity; hence for $x_0$ with $D_W(x_0)\ne0$ the slice $W(x_0,\cdot)$ has exactly $m$ distinct roots, all of them simple ([[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]], [[thm-discriminant-root-formula-and-repeated-root-criterion]]).

[F5] A nonzero holomorphic germ of one variable has finite order: either it is a unit or it equals $x^k u$ with $k\ge1$ and $u$ a unit; consequently its zeros near $0$ are isolated, and only $x=0$ can be a zero of the germ ([[thm-zero-order-factorization-holomorphic-function]]).

[F6] If $x_0\in V$ and $\tau$ is a simple root of $W(x_0,\cdot)$, then near $(x_0,\tau)$ the zero set of $W$ is the graph of the unique holomorphic function $\varphi$ with $W(x,\varphi(x))=0$ and $\varphi(x_0)=\tau$, by the implicit function theorem applied to $\partial_yW(x_0,\tau)\ne0$ ([[thm-holomorphic-implicit-function-theorem]]).

[F7] A holomorphic function on a punctured disc that is bounded extends holomorphically across the puncture ([[thm-removable-singularity-characterizations]]).

[F8] A holomorphic function on a connected open set in several variables that vanishes on a nonempty open subset vanishes identically ([[thm-identity-theorem-in-several-complex-variables]]).

[F9] If $W=W_1W_2$ with $W_1$ and $W_2$ Weierstrass polynomials of positive degree, then this gives a nontrivial factorization in $\mathcal O_{\mathbb C^2,0}$; this is the implication needed below ([[lem-prepared-factorizations-and-irreducibility]]).

[F10] A covering map has fibres whose points lie in pairwise disjoint sheets, each mapped homeomorphically onto the same evenly covered open set ([[def-covering-map-and-evenly-covered-neighbourhoods]]).



**Proof technique:** contradiction — separate the covering into two open-and-closed parts, form the monic product of the roots in one part, and read a nontrivial Weierstrass factorisation of $W$.

## Proof

1.1 Choose a disc $V$ and radius $r>0$ as in [F2], and shrink $V$ to $\{|x|<\varepsilon\}$ so that $D_W(x)\ne0$ on its punctured part $D^*$, using [F3] and [F5]. By [F4] each slice over $D^*$ has exactly $m$ distinct simple roots, all in $D$ by [F2]. At any base point [F6] supplies a holomorphic graph through each root. Intersect the finitely many base neighbourhoods and shrink until these graphs stay in $D$ and are pairwise disjoint. They exhaust each fibre, since a degree-$m$ polynomial has at most $m$ roots by [F4]. Thus they give an evenly covered neighbourhood with $m$ holomorphic sheets. This proves directly, in the fixed coordinates, that $Z(W)\cap(D^*\times\mathbb C)=Z(W)\cap(D^*\times D)$ is an $m$-sheeted unramified covering. [given, F1, F2, F3, F4, F5, F6]

2.1 Every zero over $D^*$ lies in $D$ by step 1.1. Let $(x_n,y_n)$ be any sequence of zeros of the chosen representative with $x_n\to0$, allowing $x_n=0$; for all sufficiently large $n$, $x_n\in V$, and when $x_n=0$ one has $y_n=0$ by [F1]. Thus the tail of $(y_n)$ lies in the closed disc $\overline D$. For any convergent subsequence $y_{n_k}\to y_\infty$, continuity of the polynomial $W$ on a neighbourhood of $\{0\}\times\overline D$ gives $W(0,y_\infty)=\lim_k W(x_{n_k},y_{n_k})=0$, so [F1] gives $y_\infty^m=0$ and $y_\infty=0$, even if the limit was initially allowed to lie on $\partial D$. If $y_n$ did not tend to $0$, a subsequence bounded away from $0$ would have a convergent subsequence in $\overline D$ with nonzero limit, a contradiction. Hence $y_n\to0$. [step 1.1, F1, F2, F4]

3.1 Suppose for contradiction that the total space $F:=Z(W)\cap(D^*\times D)$ is disconnected, so that $F=F_1\sqcup F_2$ with $F_1,F_2$ nonempty, open and closed in $F$. [step 2.1, assume-contra]

4.1 The function $k(x):=|F_1\cap\pi^{-1}(x)|$ is locally constant on $D^*$: if $U\subseteq D^*$ is a disc over which the covering trivialises with sheets $V_1,\dots,V_m$, then each $V_i$ is connected by [F10], and $F_1\cap V_i$ is open and closed in $V_i$ because $F_1$ is open and closed in $F$; hence $V_i\subseteq F_1$ or $V_i\cap F_1=\varnothing$ for each $i$, so $k$ is constant on $U$. As $D^*$ is connected, $k$ is constant, say $k(x)=k$ for all $x\in D^*$, and $1\le k\le m-1$ because $F_1$ and $F_2$ are nonempty. [step 2.1, step 3.1, F10]

5.1 On such a disc $U$ the sheets of $F_1$ are graphs of holomorphic functions $\varphi_i:U\to D$ by [F6]; define $W_1(x,y):=\prod_{i\in I}(y-\varphi_i(x))$ on $U\times D$, where $I$ is the set of sheets contained in $F_1$, so $W_1$ is monic of degree $k$ in $y$ with holomorphic coefficients on $U$. For two discs $U,U'$ the definitions agree on $U\cap U'$, because at each $x\in U\cap U'$ both are the monic degree-$k$ polynomial in $y$ whose $k$ roots are the distinct points of $F_1$ over $x$ by [F3] and [F4]; hence $W_1$ is a well-defined holomorphic function on $D^*\times D$, monic of degree $k$ in $y$. Defining $W_2$ in the same way from $F_2$, we get a monic holomorphic function of degree $m-k$ on $D^*\times D$ with $k+(m-k)=m$. [step 4.1, F3, F4, F6, construct]

6.1 For every $x\in D^*$, the two monic polynomials $W_1(x,\cdot)W_2(x,\cdot)$ and $W(x,\cdot)$ in $y$ have the same $m$ distinct roots, hence are equal; therefore $W=W_1W_2$ on $D^*\times D$. [step 5.1, F3, F4]

6.2 The coefficients of $W_1$ and $W_2$ are, up to sign, the elementary symmetric functions of the corresponding root values; by step 1.1 all roots lie in the bounded disc $D$, so every coefficient is a bounded holomorphic function on the punctured disc $D^*$, and [F7] extends each coefficient holomorphically across the puncture. [step 1.1, step 5.1, F7]

7.1 The extended coefficients of $W_1$ and $W_2$ vanish at $x=0$: the roots of $W_1$ and of $W_2$ all tend to $0$ as $x\to0$ by step 2.1, and the elementary symmetric functions are continuous in the roots, so each coefficient has limit $0$. Hence the extensions are Weierstrass polynomials of degrees $k\ge1$ and $m-k\ge1$. [step 2.1, step 6.2, F1]

8.1 The functions $W,W_1,W_2$ are holomorphic on the polydisc $V\times D$ and satisfy $W=W_1W_2$ on the nonempty open subset $D^*\times D$, so by [F8] the identity holds on $V\times D$; hence $W=W_1W_2$ in $\mathcal O_{\mathbb C^2,0}$ with $W_1,W_2$ Weierstrass polynomials of positive degree. [step 6.1, step 7.1, F8]

9.1 Step 8.1 gives a factorization of $W$ into positive-degree Weierstrass polynomials. The implication recorded in [F9] makes this a nontrivial germ factorization, contradicting the assumed irreducibility of $W$; therefore $F$ is connected. [step 8.1, F9, contradiction]

10.1 By step 1.1 the local covering from step 9.1 is the full zero set $Z(W)\cap(D^*\times\mathbb C)$; it is connected and $m$-sheeted, unramified by step 1.1, and every sequence of its zeros whose base coordinates tend to $0$ has fibre coordinates tending to $0$ by step 2.1. [step 1.1, step 2.1, step 9.1, discharge-contradiction] ∎
