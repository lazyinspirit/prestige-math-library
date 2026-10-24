---
id: lem-cg-positive-definite-diagram-exclusions
kind: lemma
title: "Exclusions for positive definite diagrams: trees, valency, labels, chains and arms"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 2
deps: [def-cg-coxeter-diagram-components-and-finite-type, def-cg-real-coxeter-form-and-reflection, def-definiteness-inertia-and-signature-data-over-the-reals, thm-sylvesters-criterion-for-positive-definiteness, def-matrix-minors-cofactors-and-adjugate, thm-determinant-is-the-unique-normalized-alternating-multilinear-function, def-real-and-complex-inner-product-space, def-orthogonal-projection, thm-finite-dimensional-orthogonal-decomposition, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-bilinear-symmetric-skew-and-alternating-forms, def-linear-combination-and-span, def-linear-basis, def-linear-subspace, def-sine-and-cosine-by-power-series, def-pi-via-first-positive-cosine-zero, thm-quarter-turn-values-and-shift-formulas, thm-chebyshev-multiple-angle-identities, def-chebyshev-polynomials-first-and-second-kind, thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-signs-monotonicity-and-ranges, thm-of-square-roots, lem-of-square-monotone, def-natural-numbers, thm-induction-principle, def-finite-cardinality, thm-laplace-cofactor-expansion]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jean Michel, Lectures on Coxeter groups (Beijing lecture notes, April-May 2014)"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/cox.pdf"
      locator: "Section 5 'Classification of finite Coxeter groups', proof of Theorem 5.15, printed pp. 13-15: properties (i)-(vii) of a connected spherical graph - subgraphs, no circuits (cyclicity witness), the neighbour inequality sum <e_s,e_j>^2 < 1, the folding step, at most one edge of label > 3, the chain computation (i+1)(j+1) > 4ij cos^2(pi/m) with its cases (1,j), (2,2), and the three-chain inequality 1/(p+1)+1/(q+1)+1/(r+1) > 1"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix C, Lemma C.3.1 (domination) and its proof (printed pp. 436-437) with the classification deductions (printed pp. 437-438): circuits, infinite labels, branch vertices, two branch vertices, multiple large labels and the surviving diagrams; Table C.1 (printed p. 436) for the determinants det(2A) of A_n, B_n, D_n, E_6, E_7, E_8, F_4, H_3, H_4"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $S$ be a finite set with Coxeter matrix $m$ and diagram $\Gamma$
([[def-cg-coxeter-diagram-components-and-finite-type]]), let $V=\mathbb R^S$ and
let $B$ be the Coxeter form
([[def-cg-real-coxeter-form-and-reflection]]). For $s\ne t$ in $S$ write
$$c(s,t):=-B(e_s,e_t)=\cos(\pi/m(s,t))\ (\text{finite }m(s,t)),\qquad c(s,t):=1\ (m(s,t)=\infty),$$
so that $c(s,t)\in[0,1]$, $c(s,t)=0$ exactly when $m(s,t)=2$, and
$c(s,t)\ge1/2$ whenever $m(s,t)\ge3$. The **cosine matrix** is
$C:=(B(e_s,e_t))_{s,t\in S}$, so $C$ has diagonal entries $1$ and off-diagonal
entries $-c(s,t)$. Assume that $\Gamma$ is connected and that $B$ is positive
definite ([[def-definiteness-inertia-and-signature-data-over-the-reals]]). Then:

**(1) Witness principle.** If $T\subseteq S$ and there is $0\ne u\in
V_T=\mathrm{span}\{e_s:s\in T\}$ with $B(u,u)\le0$, then $B$ is not positive
definite, because such a $u$ is a nonzero vector of $V$ with $B(u,u)\le0$.
Moreover, if all coordinates of $u$ in the basis $(e_s)_{s\in T}$ are $\ge0$ and
a labelled graph $\Gamma_0$ on $T$ has all labels at most the corresponding
labels of $\Gamma_T$ (a non-edge having label $2$), then $B_T(u,u)\le B_0(u,u)$,
where $B_0$ is the cosine form of $\Gamma_0$; so a non-positive value of $B_0$
on a non-negative vector excludes positive definiteness of $B$. The explicit non-negative witnesses below use this comparison.

**(2) No cycles.** $\Gamma$ contains no cycle: if $s_1,\dots,s_r$ ($r\ge3$) are
distinct vertices whose consecutive pairs $\{s_i,s_{i+1}\}$ ($i$ modulo $r$) are
edges, then $u=e_{s_1}+\cdots+e_{s_r}$ satisfies
$B(u,u)\le r-2r\cdot\frac12=0$, because the $r$ consecutive pairs contribute
$c\ge\frac12$ each and all other pairs contribute $c\ge0$.

**(3) Valency and local labels.** For every $s\in S$,
$$\sum_{t\in N(s)}c(s,t)^2<1 .$$
In particular: no label is $\infty$; no vertex has four or more neighbours; if a
vertex has exactly three neighbours then its three edges all have label $3$; and
if a vertex has exactly two neighbours with labels $m_1\le m_2<\infty$, then
$m_1=3$ and $m_2\le5$; in particular the pairs $(4,4)$ and $(3,6)$ are forbidden
at a vertex.

**(4) At most one branch vertex, and at most one large label.**

(i) $\Gamma$ has at most one vertex of degree $3$ (hence, with (3), at most one
vertex of degree $\ge3$).

(ii) $\Gamma$ has at most one edge whose label is $\ge4$; and if such an edge
exists then $\Gamma$ has no vertex of degree $3$, so by (3) $\Gamma$ is a path.

**(5) Paths.** Suppose $\Gamma$ is a path on $n$ vertices, with labels
$m_1,\dots,m_{n-1}$ along the path. In formulas involving labels, $\cos(\pi/\infty)$ denotes the coefficient $1$.

(i) If $d_k$ is the determinant of the leading $k\times k$ principal submatrix of
the cosine matrix $C$, then $d_0=1$, $d_1=1$ and
$d_k=d_{k-1}-\cos^2(\pi/m_{k-1})\,d_{k-2}$ for $2\le k\le n$; for the path with
all labels $3$ one gets $d_k=(k+1)/2^k>0$ for every $k$, and $\det(2C)=n+1$.

(ii) If the labels are all $3$ except one edge labelled $m\ge4$, and that edge
splits the path into two subpaths with $i$ and $j$ vertices ($i+j=n$, $i\le j$,
$i,j\ge1$), then
$$(i+1)(j+1)>4ij\cos^2(\pi/m).$$
Consequently: if $m\ge6$ then $i=j=1$; if $m=5$ then
$(i,j)\in\{(1,1),(1,2),(1,3)\}$; if $m=4$ then $i=1$, or $(i,j)=(2,2)$.

**(6) Three arms.** Suppose $\Gamma$ has a (unique) vertex $v$ of degree $3$ and
all its edges have label $3$, and let $p,q,r\ge1$ be the numbers of vertices in
the three components of $\Gamma-v$ (each of which is a path). Then
$$\frac1{p+1}+\frac1{q+1}+\frac1{r+1}>1 .$$
Consequently, up to permutation, $(p,q,r)=(1,1,r)$ for some $r\ge1$, or
$(p,q,r)\in\{(1,2,2),(1,2,3),(1,2,4)\}$.

**(7) Conclusion.** Every connected positive definite Coxeter diagram is
isomorphic as a labelled graph to one of: $A_n$ ($n\ge1$; a path, all labels
$3$), $B_n$ ($n\ge2$; a path, labels $3,\dots,3,4$), $D_n$ ($n\ge4$; the star
with arms of $1,1,n-3$ vertices), $E_6,E_7,E_8$ (the stars with arms $1,2,2$;
$1,2,3$; $1,2,4$), $F_4$ (the path with labels $3,4,3$), $H_3$ (the path with
labels $3,5$), $H_4$ (the path with labels $3,3,5$), or $I_2(m)$ ($m\ge3$; two
vertices joined by one edge labelled $m$).

## Facts & Assumptions

**Given:** A finite set $S$ with Coxeter matrix $m$, its diagram $\Gamma$, the space $V=\mathbb R^S$ with the Coxeter form $B$, the cosine numbers $c(s,t)$ of the statement, and the hypothesis that $\Gamma$ is connected and $B$ is positive definite.

[F1] In the diagram $\Gamma$, distinct vertices $s\ne t$ are joined by an edge exactly when $m(s,t)\ge3$, and the neighbours of $s$ are $N(s)=\{t\in S:t\ne s,\ m(s,t)\ge3\}$; the components of $\Gamma$ partition $S$, and a cycle of $\Gamma$ is a cycle of the underlying simple graph ([[def-cg-coxeter-diagram-components-and-finite-type]]).

[F2] $B$ is the unique symmetric bilinear form on $V$ with $B(e_s,e_s)=1$, $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for finite $m(s,t)$ and $B(e_s,e_t)=-1$ for $m(s,t)=\infty$; in particular $C$ is a symmetric matrix and $B(u,w)=\sum_{s,t\in S}u(s)w(t)B(e_s,e_t)$ ([[def-cg-real-coxeter-form-and-reflection]], [[def-bilinear-symmetric-skew-and-alternating-forms]]).

[F3] $B$ positive definite means $B(u,u)>0$ for every $u\ne0$ ([[def-definiteness-inertia-and-signature-data-over-the-reals]]).

[F4] The addition formulas and the Pythagorean identity hold for all reals: $\cos(x+y)=\cos x\cos y-\sin x\sin y$, $\cos^2x+\sin^2x=1$, and $\cos$ is even ([[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[F5] $\cos(\pi/2)=0$, $\sin(\pi/2)=1$ and $\cos\pi=-1$ ([[thm-quarter-turn-values-and-shift-formulas]]).

[F6] For every real $\theta$ one has $T_5(\cos\theta)=\cos(5\theta)$, and the Chebyshev polynomials of the first kind satisfy $T_0=1$, $T_1=t$ and $T_{n+2}=2tT_{n+1}-T_n$ ([[thm-chebyshev-multiple-angle-identities]], [[def-chebyshev-polynomials-first-and-second-kind]]).

[F7] Cosine is strictly decreasing on $[0,\pi]$, $\pi/2$ is the smallest positive zero of cosine, and $\cos$ and $\sin$ are defined by their power series ([[thm-sine-cosine-signs-monotonicity-and-ranges]], [[def-pi-via-first-positive-cosine-zero]], [[def-sine-and-cosine-by-power-series]]).

[F8] Every $a\ge0$ has a unique $\sqrt a\ge0$ with $\sqrt a^2=a$, and squaring is strictly increasing on the nonnegative reals ([[thm-of-square-roots]], [[lem-of-square-monotone]]).

[F9] If $W$ is a subspace of a finite-dimensional inner product space $V$, then $V=W\oplus W^\perp$, the orthogonal projection $P_W$ is the map with $v-P_Wv\in W^\perp$, and if $\|u\|^2=\langle u,u\rangle$ then $\|v\|^2=\|P_Wv\|^2+\|v-P_Wv\|^2$ with $P_Wv\ne v$ precisely when $v\notin W$ ([[def-real-and-complex-inner-product-space]], [[def-orthogonal-projection]], [[thm-finite-dimensional-orthogonal-decomposition]]).

[F10] For all vectors $u,v$, $|\langle u,v\rangle|\le\|u\|\,\|v\|$, with equality if and only if $u,v$ are linearly dependent ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[F11] The minor $M_{ij}(A)$ is the determinant of the matrix obtained by deleting row $i$ and column $j$, the cofactor is $C_{ij}(A)=(-1)^{i+j}M_{ij}(A)$, and determinant is the unique normalized alternating column-multilinear function of the matrix ([[def-matrix-minors-cofactors-and-adjugate]], [[thm-determinant-is-the-unique-normalized-alternating-multilinear-function]], [[thm-laplace-cofactor-expansion]]).

[F12] The $e_s$ form a basis of $V$, so vectors supported on disjoint subsets of $S$ are linearly independent unless one of them is $0$, $\mathrm{span}$ and subspaces are the published notions, and $|N(s)|$ is a finite cardinality ([[def-linear-basis]], [[def-linear-combination-and-span]], [[def-linear-subspace]], [[def-finite-cardinality]]).

[F13] The induction principle on $\mathbb N$ ([[thm-induction-principle]], [[def-natural-numbers]]).

## Proof

**Proof technique:** direct, by explicit witnesses and two determinant/inequality computations.

1.1 (Trigonometric values and comparisons.) From [F4] one gets the double-angle formula $\cos2x=2\cos^2x-1$ and the triple-angle formula $\cos3x=4\cos^3x-3\cos x$ for every real $x$. Cosine is strictly decreasing on $[0,\pi]$ with $\cos(\pi/2)=0>\cos\pi=-1$ and is positive on $[0,\pi/2)$ [F5, F7]: (i) $\cos(\pi/4)=\sqrt2/2$ because $\cos^2(\pi/4)=\frac{1+\cos(\pi/2)}{2}=\frac12$ and $\cos(\pi/4)>0$ [F8]; (ii) writing $c_3=\cos(\pi/3)$, the triple-angle formula at $x=\pi/3$ gives $4c_3^3-3c_3+1=0=(c_3+1)(2c_3-1)^2$, and $c_3>0$ because $0<\pi/3<\pi/2$ forces $c_3=1/2$; (iii) $\cos(\pi/6)=\sqrt3/2$ because $\cos^2(\pi/6)=\frac{1+\cos(\pi/3)}{2}=\frac34$ and $\cos(\pi/6)>0$ [F8]; (iv) since $\cos(\pi/m)$ is strictly increasing in $m\in\{2,3,4,\dots\}$: for $m\ge3$ one has $c(s,t)=\cos(\pi/m)\ge1/2$, for $m\ge4$ one has $c(s,t)\ge\sqrt2/2$, and for $m\ge6$ one has $c(s,t)\ge\cos(\pi/6)=\sqrt3/2$. Also $\cos(\pi/5)=(1+\sqrt5)/4$: with $c_5=\cos(\pi/5)$, iterating the recurrence of [F6] gives $T_2=2t^2-1$, $T_3=4t^3-3t$, $T_4=8t^4-8t^2+1$ and $T_5=16t^5-20t^3+5t$, so $T_5(c_5)=\cos(5\cdot\pi/5)=\cos\pi=-1$ [F5, F6], that is $16c_5^5-20c_5^3+5c_5+1=(c_5+1)(4c_5^2-2c_5-1)^2=0$ by expansion; since $0<\pi/5<\pi/2$ gives $0<c_5<1$ [F5, F7], one has $c_5\ne-1$ and $4c_5^2-2c_5-1=0$, i.e. $(c_5-\frac14)^2=\frac5{16}$; by uniqueness of the nonnegative square root $c_5-\frac14=\pm\frac{\sqrt5}4$, and $c_5>0$ excludes the negative alternative, which is $<0$ because $\sqrt5>1$ by $1<5$ and [F8]; hence $c_5=(1+\sqrt5)/4$ and $4\cos^2(\pi/5)=(3+\sqrt5)/2$ satisfies $5/2<4\cos^2(\pi/5)<3$ because $2<\sqrt5<3$ [F8]. [F4, F5, F6, F7, F8, algebra]

1.2 (Witness principle and form comparison.) By [F3], $B$ positive definite means $B(u,u)>0$ for every nonzero $u$; a nonzero $u\in V_T\subseteq V$ with $B(u,u)\le0$ therefore contradicts positive definiteness, which is the first assertion of (1). For the comparison, let $u=\sum_{s\in T}u_se_s$ have all $u_s\ge0$ and let $\Gamma_0$ be a labelled graph on $T$ whose labels are at most the corresponding labels of $\Gamma_T$; for distinct $s,t$ the comparison of labels gives $c_0(s,t)\le c_T(s,t)\le1$ (with value $0$ exactly for the non-edges and $c_0\ge0$ throughout), so $$B_T(u,u)-B_0(u,u)=-2\sum_{s<t}\bigl(c_T(s,t)-c_0(s,t)\bigr)u_su_t\le0,$$ each term being $\le0$; hence $B_T(u,u)\le B_0(u,u)$, and if $B_0(u,u)\le0$ then $B(u,u)=B_T(u,u)\le0$ with $u\ne0$, excluding positive definiteness. [F1, F2, F3, F12, algebra]

1.3 (Path determinant recursion.) Let $\Gamma$ be a path with vertices $s_1,\dots,s_n$ and $m_k=m(s_k,s_{k+1})$, and let $C$ be the cosine matrix $C=(B(e_s,e_t))$. Its leading $k\times k$ submatrix $C_k$ has diagonal entries $1$, sub- and super-diagonal entries $-c(s_k,s_{k+1})=-\cos(\pi/m_k)$, and all other entries $0$. Put $d_k=\det C_k$, with $d_0=1$ and $d_1=\det(1)=1$. Expanding $\det C_k$ along its last row $(0,\dots,0,-\cos(\pi/m_{k-1}),1)$ for $k\ge2$: the last entry contributes $\det C_{k-1}$, and writing $c=\cos(\pi/m_{k-1})$, the other entry contributes $(-c)(-1)^{2k-1}\det M$, where $M$ is obtained by deleting row $k$ and column $k-1$. Its last column has the sole nonzero entry $-c$ in its last row, so expansion gives $\det M=-c\det C_{k-2}$; this contribution is therefore $-c^2d_{k-2}$, giving $$d_k=d_{k-1}-\cos^2(\pi/m_{k-1})d_{k-2}\qquad(k\ge2).$$ [F2, F11, algebra]

2.1 (Chain inequality.) Let $\Gamma$ be a path, all of whose labels are $3$ except one edge $\{s_i,s_{i+1}\}$ labelled $m\ge4$, with $1\le i\le j=n-i$; by [F3] and [F9] the form $B$ makes $V$ a finite-dimensional inner product space. Put $u=\sum_{k=1}^{i}k\,e_{s_k}$ and $v=\sum_{k=1}^{j}k\,e_{s_{n+1-k}}$, so that $u$ is supported on $\{s_1,\dots,s_i\}$, $v$ on $\{s_{i+1},\dots,s_n\}$, and the coefficients of the two endpoints $s_i,s_{i+1}$ of the large edge are $i$ and $j$. All internal edges of the two chains have label $3$, and $B(e_{s_k},e_{s_{k+1}})=-\frac12$ by step 1.1, so the diagonal terms and the two symmetric terms for each internal edge give $$B(u,u)=\sum_{k=1}^{i}k^2-\sum_{k=1}^{i-1}k(k+1)=i^2-\sum_{k=1}^{i-1}k=\frac{i(i+1)}2,\qquad B(v,v)=\frac{j(j+1)}2,$$ with the same computation for $v$, while every mixed pair contributes $0$ except $\{s_i,s_{i+1}\}$, giving $B(u,v)=-ij\cos(\pi/m)$. Since $u,v$ are nonzero and supported on disjoint subsets of the basis $(e_s)_{s\in S}$, they are linearly independent [F12], so [F10] is strict, $B(u,v)^2<B(u,u)B(v,v)$, that is $i^2j^2\cos^2(\pi/m)<\frac{i(i+1)}2\cdot\frac{j(j+1)}2$, which gives $(i+1)(j+1)>4ij\cos^2(\pi/m)$. [F2, F3, F9, F10, F12, step 1.1, algebra]

2.2 (No cycles.) Let $s_1,\dots,s_r$ $(r\ge3)$ be distinct vertices whose consecutive pairs are edges, and put $u=e_{s_1}+\cdots+e_{s_r}\ne0$, a vector with all coordinates $\ge0$ in the basis $(e_s)$. Every consecutive pair contributes $2B(e_{s_i},e_{s_{i+1}})=-2c(s_i,s_{i+1})\le-1$ because $c\ge\frac12$ on edges [1.1], and every other pair contributes $2B\le0$ (the value $0$ for non-edges, $\le-1$ for the remaining edges), so $B(u,u)\le r-r=0$; by the witness principle [1.2] this contradicts positive definiteness of $B$. Hence $\Gamma$ contains no cycle. Connectedness gives a path between any two vertices, and two different simple paths would give a cycle between their first divergence and subsequent reunion; thus that path is unique. Removing a vertex separates its neighbours into distinct components, since a path between two neighbours avoiding the removed vertex would create a cycle. Finally, a finite connected acyclic graph of maximum degree at most $2$ is a path: a longest simple path has no extension at either end, and an additional vertex would have a path to it meeting an internal vertex (creating degree at least $3$) or an endpoint (extending it). These elementary consequences will be used below. [F1, F2, step 1.1, step 1.2, algebra]

2.3 (Path with all labels $3$.) For the path with every label $3$ the recursion of [1.3] reads $d_k=d_{k-1}-\frac14d_{k-2}$; by induction on $k$ [F13] one has $d_k=(k+1)/2^k$ for all $k\ge0$, since $d_0=1$, $d_1=1$ and $\frac{k}{2^{k-1}}-\frac14\cdot\frac{k-1}{2^{k-2}}=\frac{2k-(k-1)}{2^k}=\frac{k+1}{2^k}$. In particular $d_k>0$, and multiplying the $n\times n$ matrix $C$ by $2$ scales its determinant by $2^n$, so $\det(2C)=2^nd_n=n+1$. [step 1.3, F13, algebra]

3.1 (Integer consequences of the chain inequality.) Write $c=\cos(\pi/m)$ with $m\ge4$, where $m=\infty$ means $c=1$ [F2]. If $i\ge2$, then $j\ge i\ge2$ and $(i+1)(j+1)=ij+i+j+1\le3ij$, because $3ij-(i+1)(j+1)=2ij-i-j-1=(i-1)(j-1)+ij-2\ge1+4-2=3>0$. If $m\ge6$, including $m=\infty$, then $4c^2\ge4\cos^2(\pi/6)=3$ by [1.1], so $(i+1)(j+1)\le3ij\le4c^2ij$ and the inequality $(i+1)(j+1)>4c^2ij$ forces $i=1$; then it reads $2(j+1)>4c^2j$, i.e. $1>j(2c^2-1)\ge j/2$ because $2c^2\ge3/2$, and hence $j=1$ (for $m=\infty$ it reads $4>4$, false, so no infinite label occurs). If $m=5$, then $4c^2=(3+\sqrt5)/2$ and $4c^2-1=\frac{1+\sqrt5}2$ by [1.1]; for $i\ge2$ the inequality fails because $4c^2ij-(i+1)(j+1)=\bigl(4c^2-1\bigr)ij-i-j-1\ge\frac{1+\sqrt5}2\cdot2j-2j-1=(\sqrt5-1)j-1>0$ for $j\ge2$, so $i=1$, and then $2(j+1)>4c^2j$ reads $j<2/(4c^2-2)=4/(\sqrt5-1)=\sqrt5+1$, so $j\le3$. If $m=4$, then $4c^2=2$ by [1.1] and the inequality reads $i+j+1>ij$: for $i=1$ this holds for every $j\ge1$, for $i=2$ it reads $j<3$, so $j=2$, and for $i\ge3$ it fails since $ij-i-j-1=(i-1)(j-1)-2\ge2>0$. [F2, step 1.1, step 2.1, algebra]

3.2 (Two large labels are impossible.) Suppose two distinct edges of $\Gamma$ carry labels $\ge4$. Since [2.2] shows that $\Gamma$ is acyclic, the two edges are joined by a unique simple path; write its vertices as $x_0,x_1,\dots,x_r$ so that $x_0,x_1$ and $x_{r-1},x_r$ are the two large edges, $r\ge2$. Put $u=e_{x_0}+\sqrt2\sum_{h=1}^{r-1}e_{x_h}+e_{x_r}$ (all coordinates $\ge0$). The diagonal contribution is $1+2(r-1)+1=2r$. The two large edges contribute $2(-\cos(\pi/m))\sqrt2\le-2\sqrt2\cdot\frac{\sqrt2}2=-2$ each, by [1.1] and $m\ge4$; each of the $r-2$ remaining path edges contributes $2(-\cos(\pi/m_h))\cdot2\le-2$; and all other pairs contribute $\le0$. Hence $B(u,u)\le2r-4-2(r-2)=0$, so by the witness principle [1.2] $B$ is not positive definite, a contradiction. Therefore at most one edge of $\Gamma$ has label $\ge4$. [F1, F2, step 1.1, step 1.2, step 2.2, algebra]

3.3 (The neighbour inequality.) Fix $s\in S$ and let $t\ne t'$ be neighbours of $s$. If $t,t'$ were joined by an edge, then $s,t,t'$ would be three distinct vertices whose consecutive pairs are edges, i.e. a cycle, which [2.2] excludes; so $B(e_t,e_{t'})=0$ for distinct neighbours. By [F2] each $B(e_t,e_t)=1$, and the restriction of $B$ to the subspace $P=\mathrm{span}\{e_t:t\in N(s)\}$ is an inner product, because $B$ is positive definite on $V$ [F3] and restricts to $V\times V$. Let $e_s=p+q$ with $p\in P$, $q\in P^\perp$ be the orthogonal decomposition of [F9]; then $p=\sum_{t\in N(s)}B(e_s,e_t)e_t=-\sum_{t\in N(s)}c(s,t)e_t$ and $\|p\|^2=\sum_{t\in N(s)}c(s,t)^2$. Since $e_s$ together with the $e_t$, $t\in N(s)$, consists of distinct vectors of the basis $(e_s)_{s\in S}$, the vector $e_s$ is not in $P$ [F12], so $q\ne0$ and $$\sum_{t\in N(s)}c(s,t)^2=\|p\|^2=\|e_s\|^2-\|q\|^2<\|e_s\|^2=B(e_s,e_s)=1 .$$ [F1, F2, F3, F9, F12, step 2.2, algebra]

3.4 (Three-arm inequality.) Suppose $v$ has degree $3$ and every edge of $\Gamma$ has label $3$, and the three components of $\Gamma-v$ are paths with $p,q,r\ge1$ vertices. Weight each arm from its far end toward $v$: if the arm of $v$ with $p$ vertices is $a_1-a_2-\cdots-a_p$ with $a_p$ adjacent to $v$, put $u=\sum_{h=1}^{p}h\,e_{a_h}$, and define $w,z$ for the other two arms cyclically. Then $B(u,u)=p(p+1)/2$ by the same computation as in [2.1], $B(e_v,u)=p\cdot(-\frac12)=-\frac p2$ since only the pair $\{v,a_p\}$ contributes, and $u,w,z$ are pairwise orthogonal because their supports lie in different components of $\Gamma-v$, so no edge joins two of them [2.2]. Moreover $e_v\notin\mathrm{span}\{u,w,z\}$, as $u,w,z$ involve only basis vectors different from $e_v$; hence the orthogonal decomposition of $e_v$ with respect to that subspace is strict and [F9] gives $$1=\|e_v\|^2>\frac{B(e_v,u)^2}{B(u,u)}+\frac{B(e_v,w)^2}{B(w,w)}+\frac{B(e_v,z)^2}{B(z,z)} =\sum_{p}\frac{p^2/4}{p(p+1)/2}=\frac12\sum_p\frac p{p+1},$$ i.e. $\sum 1/(p+1)>1$. [F2, F9, F12, step 2.1, step 2.2, algebra]

4.1 (Local consequences.) Fix $s\in S$ and use $\sum_{t\in N(s)}c(s,t)^2<1$ [3.3] together with $c(s,t)\ge\frac12$ for every neighbour and $c\le1$. A neighbour with $m(s,t)=\infty$ would have $c(s,t)=1$ and hence a sum $\ge1$, so no label is $\infty$; four neighbours would give a sum $\ge4\cdot\frac14=1$, so $|N(s)|\le3$; if there are three neighbours and one of their edges has label $\ge4$, that edge contributes at least $\frac12$ while the other two each contribute at least $\frac14$ by step 1.1, giving a sum $\ge1$, a contradiction; hence all three edges have label $3$; and two neighbours with labels $m_1\le m_2$ and $c_j=\cos(\pi/m_j)$ satisfy $c_1^2+c_2^2<1$: if $m_1\ge4$ then $c_1^2\ge\frac12$ and $c_2^2\ge c_1^2\ge\frac12$ (cosine increases with $m$ [1.1]), a contradiction, so $m_1=3$ and then $c_2^2<\frac34$; since $\cos^2(\pi/6)=\frac34$ and cosine increases with $m$, $m_2\ge6$ would give $c_2^2\ge\frac34$, so $m_2\le5$. In particular $(m_1,m_2)=(4,4)$ gives $c_1^2+c_2^2=1$ and $(3,6)$ gives $\frac14+\frac34=1$, both excluded. [F2, step 1.1, step 3.3, algebra]

4.2 (Integer consequences of the three-arm inequality.) Let $1\le p\le q\le r$ with $1/(p+1)+1/(q+1)+1/(r+1)>1$. If $p\ge2$, then $p+1,q+1,r+1\ge3$ and the sum is at most $1$, so $p=1$. Then $1/(q+1)+1/(r+1)>\frac12$: if $q=1$ this holds for every $r\ge1$; if $q=2$ it reads $1/(r+1)>\frac16$, i.e. $r<5$, so $r\in\{2,3,4\}$; and if $q\ge3$ the sum is at most $\frac14+\frac14=\frac12$, a contradiction. Hence, up to permutation, $(p,q,r)=(1,1,r)$ for some $r\ge1$, or $(p,q,r)\in\{(1,2,2),(1,2,3),(1,2,4)\}$. [step 3.4, algebra]

5.1 (At most one vertex of degree $3$.) Suppose $s\ne t$ are two vertices of degree $\ge3$. By [4.1] both have degree exactly $3$. By [2.2] the diagram is acyclic, so $s$ and $t$ are joined by a unique simple path $s=v_0,v_1,\dots,v_L=t$ with $L\ge1$, the remaining neighbours $a,a'$ of $s$ and $b,b'$ of $t$ lie outside this path, and all of $a,a',b,b'$ are pairwise distinct (two of them equal would create a second $s$-$t$ path, or a triangle when $L=1$). Put $u=\sum_{h=0}^{L}e_{v_h}+\frac12(e_a+e_{a'}+e_b+e_{b'})$, a nonzero vector with all coordinates $\ge0$: its diagonal contribution is $(L+1)+4\cdot\frac14=L+2$, the $L$ path edges contribute $2(-c)\le-1$ each, the four pendant edges contribute $2(-c)\cdot\frac12=-c\le-\frac12$ each, and all other pairs contribute $\le0$; hence $B(u,u)\le(L+2)-L-2=0$, contradicting positive definiteness by the witness principle [1.2]. So at most one vertex of degree $3$ exists, and by [4.1] at most one of degree $\ge3$. [F1, F2, step 1.1, step 1.2, step 2.2, step 4.1, algebra]

5.2 (A degree-$3$ vertex excludes every large label.) Suppose $v$ has degree $3$ and some edge has label $m\ge4$. Removing $v$ from the acyclic graph of [2.2] leaves three components, and the large edge lies in one of them: write $x_0=v,x_1,\dots,x_k,y$ in order along a path, so that $\{x_k,y\}$ is the large edge (possibly $k=0$ with $y$ a neighbour of $v$), and let $b,b'$ be the neighbours of $v$ in the other two components. Then $b,b'$ and $x_0,\dots,x_k,y$ are pairwise distinct except for the described edges, and $u=\sum_{h=0}^{k}e_{x_h}+\cos(\pi/m)e_y+\frac12(e_b+e_{b'})$ is nonzero with all coordinates $\ge0$; its diagonal contribution is $(k+1)+c^2+\frac12$ with $c=\cos(\pi/m)$, the $k$ path edges $v=x_0,\dots,x_k$ contribute $2(-c_h)\le-1$ each, the large edge contributes $-2c^2$, the two edges at $v$ toward $b,b'$ contribute $-c(v,b)\le-\frac12$ each, and all other pairs contribute $\le0$. Hence $B(u,u)\le(k+1)+c^2+\frac12-k-2c^2-1=\frac12-c^2\le0$ because $m\ge4$ gives $c\ge\frac{\sqrt2}2$ and $c^2\ge\frac12$ by [1.1]; by the witness principle [1.2] this contradicts positive definiteness. So if a large label exists, no vertex of degree $3$ exists; combined with [4.1] every degree is $\le2$ and the acyclic connected $\Gamma$ is a path. [F1, F2, step 1.1, step 1.2, step 2.2, step 4.1, algebra]

6.1 (Conclusion.) Let $\Gamma$ be connected and positive definite. By [2.2] it is acyclic, hence a tree. If $\Gamma$ has no vertex of degree $3$, then by [4.1] all degrees are $\le2$, so $\Gamma$ is a path: with all labels $3$ it is $A_n$ ($n\ge1$) [2.3]; otherwise by [3.2] exactly one edge has label $m\ge4$ and [5.2] applies, and splitting the path at that edge into subpaths of $i\le j$ vertices, the inequality of [2.1] and its case analysis [3.1] give $(i,j)=(1,1)$ with $m\ge6$, giving the single edge $I_2(m)$; $(i,j)=(1,1)$ with $m=4$ or $m=5$, giving $I_2(4)=B_2$ and $I_2(5)$; $(i,j)=(1,j)$ with $j\ge2$ and $m=4$, giving the paths with labels $3,\dots,3,4$ (type $B_{j+1}$, the label-$4$ edge at an end); $(i,j)=(1,2)$ and $(1,3)$ with $m=5$, giving the paths with labels $3,5$ (type $H_3$) and $3,3,5$ (type $H_4$); and $(i,j)=(2,2)$ with $m=4$, giving the path with labels $3,4,3$ (type $F_4$). If $\Gamma$ has a vertex of degree $3$, it is unique by [5.1], its edges have label $3$ and no edge has label $\ge4$ by [5.2] and [4.1], and the three arms have $p,q,r\ge1$ vertices satisfying the inequality of [3.4]; by [4.2] they are $(1,1,r)$ with $r\ge1$, giving the star with arms $1,1,r$, i.e. $D_{r+3}$ ($n=r+3\ge4$), or $(1,2,2)$, $(1,2,3)$, $(1,2,4)$, giving $E_6$, $E_7$, $E_8$. Thus every connected positive definite diagram is one of $A_n$ ($n\ge1$), $B_n$ ($n\ge2$), $D_n$ ($n\ge4$), $E_6,E_7,E_8$, $F_4$, $H_3$, $H_4$, $I_2(m)$ ($m\ge3$) with the labels displayed in (7), which is the asserted list. [step 2.1, step 2.2, step 2.3, step 3.1, step 3.2, step 4.1, step 4.2, step 5.1, step 5.2, algebra] ∎
