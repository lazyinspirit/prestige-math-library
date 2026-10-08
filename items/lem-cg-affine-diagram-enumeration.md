---
id: lem-cg-affine-diagram-enumeration
kind: lemma
title: "Enumeration of the connected positive semidefinite corank-one diagrams"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 17
deps:
  - def-cg-irreducible-affine-coxeter-type
  - lem-cg-positive-radical-and-affine-gram-exclusions
  - def-cg-standard-affine-diagrams
  - def-graph-adjacency-incidence-neighbourhood-and-degree
  - def-graph-walk-trail-path-and-cycle
  - lem-cg-affine-type-crystallographic-alcove-diagrams
  - def-cg-coxeter-diagram-components-and-finite-type
  - thm-cg-finite-type-positive-definite-criterion
  - thm-cg-finite-coxeter-classification-including-h-and-dihedral
  - lem-cg-positive-definite-diagram-exclusions
  - thm-sylvesters-criterion-for-positive-definiteness
  - def-matrix-minors-cofactors-and-adjugate
  - def-determinant-of-a-square-matrix
  - def-bilinear-symmetric-skew-and-alternating-forms
  - def-sine-and-cosine-by-power-series
  - def-pi-via-first-positive-cosine-zero
  - thm-quarter-turn-values-and-shift-formulas
  - thm-complex-nth-roots-and-roots-of-unity
  - thm-eulers-formula
  - thm-double-angle-and-power-reduction-identities
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - lem-of-square-monotone
  - thm-of-square-roots
  - cor-cauchy-reals-lub-complete
  - def-real-numbers
  - thm-reals-ordered-field
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, Princeton University Press, 2008; 600 PDF pages)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix C.3, Lemma C.3.1 with its complete proof and the complete proofs of Theorems C.1.2-C.1.3, printed pp. 436-438 (PDF pp. 452-454): domination comparison and finite/affine diagram enumeration. The proof here fills the equality cases, low-rank cycles, and semidefinite chain inequalities locally."
    - title: "M. W. Davis and G. Moussong, Notes on nonpositively curved polyhedra (Turan Workshop lecture notes, 1998/1999; 65 PDF pages)"
      url: "https://people.math.osu.edu/davis.12/notes.pdf"
      locator: "Section 6.1, Example 6.1.4 and Table 6.1.1, PDF pp. 33-34 (classification context only)."
  scraped: []
---

## Statement

Let $(W,S,m,V,B,\rho,\Gamma)$ be of affine form type ([[def-cg-irreducible-affine-coxeter-type]] (1)). Then $\Gamma$ is isomorphic as a labelled graph ([[def-cg-coxeter-diagram-components-and-finite-type]]) to one of the standard affine diagrams: $\tilde A_1$, $\tilde A_n$ for $n\ge2$, $\tilde B_n$ for $n\ge3$, $\tilde C_n$ for $n\ge2$, $\tilde D_n$ for $n\ge4$, $\tilde E_6$, $\tilde E_7$, $\tilde E_8$, $\tilde F_4$, or $\tilde G_2$ ([[def-cg-standard-affine-diagrams]]). The low-rank names $\tilde C_1=\tilde A_1$, $\tilde B_2=\tilde C_2$, $\tilde D_3=\tilde A_3$, $\tilde E_4=\tilde A_4$, and $\tilde E_5=\tilde D_5$ are represented by the corresponding listed diagrams.

In particular, if $|S|\ge3$, no edge is labelled $\infty$, every edge label is in $\{3,4,6\}$, and $\Gamma$ is either an all-$3$ cycle $\tilde A_n$ ($n\ge2$) or a tree. There are at most two edges labelled $\ge4$. Thus the cyclic case in the list is precisely the $\tilde A_n$ family; the $\tilde B_2$, $\tilde C_1$, $\tilde D_3$, $\tilde E_4$, and $\tilde E_5$ aliases are represented by $\tilde C_2$, $\tilde A_1$, $\tilde A_3$, $\tilde A_4$, and $\tilde D_5$, respectively.

## Facts & Assumptions

**Given:** A Coxeter matrix $m$ on a finite set $S$, its diagram $\Gamma$, the vector space $V=\mathbb R^S$, and the cosine matrix $C=(B(e_s,e_t))$ of the Coxeter form.

[F1] Affine form type means that $\Gamma$ is connected and $C$ is positive semidefinite of corank one ([[def-cg-irreducible-affine-coxeter-type]] (1)).

[F2] Every proper principal submatrix of this positive-semidefinite corank-one form is positive definite ([[lem-cg-positive-radical-and-affine-gram-exclusions]] (2)).

[F3] $\tilde A_1$ is the two-vertex graph with an edge labelled $\infty$, and for $n\ge2$, $\tilde A_n$ is the all-$3$ cycle on $n+1$ vertices ([[def-cg-standard-affine-diagrams]] (1)).

[F4] Every standard affine diagram has a positive semidefinite cosine matrix of corank one ([[lem-cg-affine-type-crystallographic-alcove-diagrams]] (3)); hence its cosine matrix is not positive definite. The consumer uses this clause only, not the crystallographic or group-presentation claims of that lemma.

[F5] In a Coxeter diagram, distinct vertices are joined exactly when their label is at least $3$, an omitted edge has label $2$, and the subdiagram on $T\subseteq S$ is induced ([[def-cg-coxeter-diagram-components-and-finite-type]] (1)-(2)).

[F6] A Coxeter system is finite if and only if its cosine form is positive definite ([[thm-cg-finite-type-positive-definite-criterion]] (1)).

[F7] The connected finite Coxeter diagrams are exactly the listed $A,B,D,E,F,H$ and $I_2(m)$ diagrams ([[thm-cg-finite-coxeter-classification-including-h-and-dihedral]] (1)).

[F8] For a path, the leading cosine determinants satisfy $d_k=d_{k-1}-\cos^2(\pi/m_{k-1})d_{k-2}$; an all-$3$ path has $d_k=(k+1)/2^k>0$ ([[lem-cg-positive-definite-diagram-exclusions]] (5)(i)).

[F9] A real symmetric matrix is positive definite exactly when all its leading principal minors are positive ([[thm-sylvesters-criterion-for-positive-definiteness]]).

[F10] The determinant is the Leibniz signed sum ([[def-determinant-of-a-square-matrix]]); deleted-row-and-column minors and their signed cofactors are defined in [[def-matrix-minors-cofactors-and-adjugate]]. Grouping the Leibniz terms by the row entry in the last row gives the cofactor expansion along that row.

[F11] The form $B$ is symmetric and bilinear, so its quadratic value in the basis $(e_s)$ is the sum of diagonal terms and twice the unordered off-diagonal terms ([[def-bilinear-symmetric-skew-and-alternating-forms]]).

[F12] Sine and cosine are defined by their real power series; in particular cosine is even, sine is odd, and $\cos0=1$ ([[def-sine-and-cosine-by-power-series]]).

[F13] The roots-of-unity theorem lists the fifth roots $e^{2\pi i k/5}$, $0\le k<5$, and Euler's formula identifies $e^{i\theta}=\cos\theta+i\sin\theta$ ([[thm-complex-nth-roots-and-roots-of-unity]], [[thm-eulers-formula]]).

[F14] If a connected affine diagram strictly dominates another Coxeter diagram, the latter's cosine matrix is positive definite ([[lem-cg-positive-radical-and-affine-gram-exclusions]] (3)).

[F15] The low-rank naming conventions include $\tilde C_1:=\tilde A_1$, $\tilde B_2:=\tilde C_2$, $\tilde D_3=\tilde A_3$, $\tilde E_4=\tilde A_4$, and $\tilde E_5=\tilde D_5$ ([[def-cg-standard-affine-diagrams]] (7)).

[F16] In the library's real-number construction, $\mathbb R$ is a complete ordered field, so every nonnegative real has a unique nonnegative square root ([[def-real-numbers]], [[thm-reals-ordered-field]], [[cor-cauchy-reals-lub-complete]], [[thm-of-square-roots]]).

[F17] Squaring is strictly increasing on nonnegative reals ([[lem-of-square-monotone]]).

[F18] For $n\ge3$, $\tilde B_n$ is the path-and-branch graph with one terminal label $4$ specified in the standard recipe ([[def-cg-standard-affine-diagrams]] (2)).

[F19] For $n\ge2$, $\tilde C_n$ is the path on $n+1$ vertices with label $4$ on both end edges and $3$ on the others ([[def-cg-standard-affine-diagrams]] (3)).

[F20] The standard $\tilde D$ diagrams are the all-$3$ star with four leaves and the two-branch trees specified in the standard recipe ([[def-cg-standard-affine-diagrams]] (4)).

[F21] The standard $\tilde E_6,\tilde E_7,\tilde E_8$ diagrams are the all-$3$ stars with arms $(2,2,2)$, $(1,3,3)$, and $(1,2,5)$ ([[def-cg-standard-affine-diagrams]] (5)).

[F22] The standard $\tilde F_4$ and $\tilde G_2$ diagrams are the paths with labels $(3,3,4,3)$ and $(3,6)$ ([[def-cg-standard-affine-diagrams]] (6)).

[F23] For a positive-definite path with one edge labelled $m\ge4$, the split sizes $i\le j$ satisfy the strict inequality $(i+1)(j+1)>4ij\cos^2(\pi/m)$ ([[lem-cg-positive-definite-diagram-exclusions]] (5)(ii)); this hypothesis is not available for the semidefinite form here.

[F24] A positive-definite all-$3$ diagram with one degree-$3$ vertex and arm sizes $p,q,r$ satisfies $\frac1{p+1}+\frac1{q+1}+\frac1{r+1}>1$ ([[lem-cg-positive-definite-diagram-exclusions]] (6)).

[F25] Cycles, paths, and acyclicity are defined in the underlying simple graph ([[def-graph-walk-trail-path-and-cycle]]).

[F26] A vertex degree is the number of its neighbours ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

[F27] $\pi>0$, $\cos(\pi/2)=0$, $\cos\pi=-1$, and $\cos(x+\pi)=-\cos x$ ([[def-pi-via-first-positive-cosine-zero]], [[thm-quarter-turn-values-and-shift-formulas]]).

[F28] The double-angle and power-reduction identities hold, including $\cos^2x=(1+\cos2x)/2$ ([[thm-double-angle-and-power-reduction-identities]]).

[F29] Cosine is strictly decreasing on $[0,\pi]$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]]).

## Proof

**Proof technique:** use the corank-one proper-minor property and strict domination to force standard affine subdiagrams to be the whole diagram; in the remaining path and arm cases, give the semidefinite inequalities and finite determinant calculations explicitly. No choice principle is used.

1.1 Let $n=|S|$. If $n=0$, the diagram is not connected, and if $n=1$ its cosine matrix is $[1]$, so it is positive definite rather than corank one [F1]. For $n=2$, connectedness gives one edge labelled $m\ge3$ or $m=\infty$: if $m<\infty$, then $0<\cos(\pi/m)<1$ because $0<\pi/m\le\pi/3<\pi/2$, $\cos(\pi/2)=0$, $\cos0=1$ by its power series, and cosine is strictly decreasing; hence the leading minors $1$ and $1-\cos^2(\pi/m)$ are positive, so Sylvester's criterion makes the matrix positive definite [F9,F12,F27,F29]. If $m=\infty$, the matrix is $\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$, the standard $\tilde A_1$. Hence assume $n\ge3$. [F1,F3,F5,F9,F12,algebra]

1.2 The cosine values needed below are $\cos(\pi/3)=1/2$, $\cos(\pi/4)=\sqrt2/2$, $\cos(\pi/6)=\sqrt3/2$, and $c_5^2:=\cos^2(\pi/5)=(3+\sqrt5)/8$. For the first, if $c=\cos(\pi/3)$ then $2c^2-1=\cos(2\pi/3)=-c$, so $(2c-1)(c+1)=0$; strict decrease of cosine and $\pi/3<\pi$ give $c>-1$, hence $c=1/2$. The other two follow from $\cos^2x=(1+\cos2x)/2$, $\cos(\pi/2)=0$, positivity on $(0,\pi/2)$, and the nonnegative square root [F16]. For $c_5=\cos(\pi/5)$, put $\zeta=e^{2\pi i/5}$. The five distinct fifth roots of unity include $1$ and $\zeta\ne1$, and since $\zeta^5=1$ the geometric-series identity gives $1+\zeta+\zeta^2+\zeta^3+\zeta^4=0$. Set $y=\zeta+\zeta^{-1}$; dividing by $\zeta^2$ and using $y^2=\zeta^2+2+\zeta^{-2}$ gives $y^2+y-1=0$. Since $\zeta^4=\zeta^{-1}$, Euler's formula and the even/odd parity of cosine and sine give $y=2\cos(2\pi/5)>0$; positivity follows from $0<2\pi/5<\pi/2$ and strict decrease to $\cos(\pi/2)=0$. Thus $(2y+1)^2=5$ and $2y+1>0$, so uniqueness of the nonnegative square root [F16] gives $y=(\sqrt5-1)/2$. The double-angle identity then gives $c_5^2=(1+\cos(2\pi/5))/2=(3+\sqrt5)/8$. [F12,F13,F16,F27,F28,F29,algebra]

1.3 Suppose the underlying graph contains a cycle on a vertex set $T$, with $r\ge3$ vertices. On $T$ put the all-$3$ cycle $\Delta=\tilde A_{r-1}$ and let $u$ be the sum of its $r$ basis vectors. Its quadratic value is $r-2r(1/2)=0$, so its cosine matrix is not positive definite. The induced graph $\Gamma_T$ contains $\Delta$ and has labels at least those of $\Delta$; if it strictly dominates $\Delta$, the full affine diagram $\Gamma$ also strictly dominates $\Delta$ on $T$, so [F14] would make $\Delta$ positive definite, a contradiction. If $\Gamma_T=\Delta$ but $T\subsetneq S$, its principal matrix is not positive definite, again contradicting [F2]. Therefore $T=S$ and $\Gamma=\Delta$, which is a listed all-$3$ cycle. [F2,F3,F5,F11,F14,F25,algebra]

2.1 If an edge has label $\infty$, its two-vertex principal matrix is $\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$, which is not positive definite because $(1,1)$ has quadratic value $0$. Since this is a proper principal submatrix when $n\ge3$, it contradicts [F2]; thus no edge has label $\infty$. [F2,F5,step 1.1,algebra]

2.2 Suppose two distinct edges have labels at least $4$. Since the graph is acyclic by Step 1.3, the minimal connected subdiagram containing these edges is a path whose first and last edges have label at least $4$. Replace those two labels by $4$ and every internal edge by $3$; the resulting diagram is $\tilde C_k$ for some $k\ge2$ by [F19], and is not positive definite by [F4]. If it is a strict subdiagram or any retained label is larger, [F14] would make it positive definite. If it is the whole diagram with equal labels, $\Gamma=\tilde C_k$. Hence the only possibility with two or more such edges is exactly a $\tilde C_k$ diagram; in particular there cannot be three such edges. [F2,F19,F4,F5,F14,F25,step 1.3,algebra]

2.3 For a path with edge labels $m_1,\dots,m_{k-1}$, let $d_k$ be the determinant of its leading $k\times k$ cosine matrix and put $d_0=d_1=1$. The last row has only the entries $-c$ and $1$, where $c=\cos(\pi/m_{k-1})$; the diagonal cofactor is $d_{k-1}$, while the minor for the $-c$ entry is $-c d_{k-2}$ and its cofactor sign is $(-1)^{k+(k-1)}=-1$, so that cofactor is $c d_{k-2}$. The expansion from [F10] therefore gives $d_k=d_{k-1}-c^2d_{k-2}$. This is also the recurrence in the positive-definite path result [F8](5)(i). When every label is $3$, Step 1.2 gives $c=1/2$, and induction yields $d_k=(k+1)/2^k>0$. Thus an all-$3$ path is positive definite by [F9] and cannot have corank one. [F5,F8,F9,F10,F25,step 1.2,algebra]

2.4 For later use, suppose a path has exactly one edge labelled $m\ge4$. Let that edge split the path into $i\le j$ vertices, both at least $1$, and put $c=\cos(\pi/m)$. Weight the vertices on the two sides from their remote ends toward the large edge by $1,2,\dots,i$ and $1,2,\dots,j$, giving nonzero vectors $u,v$. Expanding along the all-$3$ parts gives $B(u,u)=\sum_{h=1}^i h^2-\sum_{h=1}^{i-1}h(h+1)=i(i+1)/2$, $B(v,v)=j(j+1)/2$, and the only cross term is $B(u,v)=-ijc$. Since $B$ is positive semidefinite, $B(tu+v,tu+v)\ge0$ for every real $t$; choosing $t=-B(u,v)/B(u,u)$ yields $B(u,v)^2\le B(u,u)B(v,v)$ and hence $(i+1)(j+1)\ge4ijc^2$. The strict inequality in [F23](5)(ii) assumes positive definiteness and cannot be used for the present semidefinite form; the derived non-strict inequality includes the affine equality cases. [F1,F5,F23,F11,F25,step 1.2,algebra]

3.1 Suppose exactly one edge has label at least $4$ and $\Gamma$ has a vertex of degree at least $3$. A vertex of degree at least $4$, together with four of its neighbours, gives a subdiagram dominating $\tilde D_4$; two distinct degree-$3$ vertices, the path between them, and two additional neighbours at each end give a subdiagram dominating some $\tilde D_k$. These are standard affine diagrams and are not positive definite by [F20,F4]. A strict domination contradicts [F14]; an equal proper subdiagram contradicts [F2]. Equality on all vertices would make $\Gamma$ a $\tilde D$ diagram with all labels $3$, contrary to the assumed large edge. Thus there is exactly one degree-$3$ vertex $v$. The unique large edge lies on one of its three arms. Retain the path from $v$ through that edge to its endpoint farther from $v$, and retain just the first edge on each of the other two arms. Lower the retained large label to $4$ (and all other retained edges already have label $3$). The resulting comparison diagram is $\tilde B_k$ with its terminal label $4$; it is not positive definite by [F4]. The same strict-domination and proper-principal arguments force it to be all of $\Gamma$ with the large label exactly $4$. Therefore the branched case is precisely $\tilde B_k$. If there is no vertex of degree at least $3$, the connected acyclic graph is a path. [F2,F4,F5,F14,F18,F20,F25,F26,step 2.2,algebra]

3.2 For an all-$3$ star with arms of $p,q,r$ vertices, each arm block is the positive definite all-$3$ path matrix $A_j$ from Step 2.3. Solving $A_jz=e_1$ gives $z_h=2(j+1-h)/(j+1)$: the entries form an arithmetic progression, satisfy the endpoint and interior tridiagonal equations, and the solution is unique since $A_j$ is positive definite. Thus $(A_j^{-1})_{11}=2j/(j+1)$. If $x$ is the central coordinate and $y_a$ are the arm vectors, the quadratic form is $x^2+\sum_a(y_a^{\mathsf T}A_{j_a}y_a-xe_1^{\mathsf T}y_a)$. For each arm, $y_a^{\mathsf T}A_{j_a}y_a-xe_1^{\mathsf T}y_a=(y_a-\frac{x}{2}A_{j_a}^{-1}e_1)^{\mathsf T}A_{j_a}(y_a-\frac{x}{2}A_{j_a}^{-1}e_1)-\frac{x^2}{4}e_1^{\mathsf T}A_{j_a}^{-1}e_1$. Thus the remaining central coefficient is $1-\frac{p}{2(p+1)}-\frac{q}{2(q+1)}-\frac{r}{2(r+1)}=\frac12(\frac1{p+1}+\frac1{q+1}+\frac1{r+1}-1)$. Hence the star is positive definite when that reciprocal sum exceeds $1$. In particular the finite stars $(1,1,r)$ for $r\ge1$ and $(1,2,2),(1,2,3),(1,2,4)$ have positive definite forms, with central coefficients respectively $1/(2(r+1)),1/12,1/24,1/60$. By [F6] they are finite Coxeter systems, and [F7](1),(3) identifies these as the finite $D$ and $E$ diagrams. The same reciprocal sum is the necessary three-arm bound supplied for positive definite diagrams by [F24]. [F5,F6,F7,F24,F11,F25,step 2.3,algebra]

3.3 The integer cases from Step 2.4 are as follows. If $m=4$, then $(i-1)(j-1)\le2$, so $i=1$ with arbitrary $j$, or $(i,j)=(2,2)$ or $(2,3)$; the first paths are finite $B$ diagrams, $(2,2)$ is finite $F_4$, and $(2,3)$ is $\tilde F_4$ up to reversal. If $m=5$, then $4c^2=(3+\sqrt5)/2>9/4$ because $2\sqrt5>3$ (indeed $\sqrt5>2$ by [F16,F17]); if $i\ge2$, then $j\ge i$ and $(i+1)(j+1)/(ij)=(1+1/i)(1+1/j)\le9/4$, contradicting Step 2.4. Thus $i=1$, and $2(j+1)\ge4c^2j$ forces $j\le4/(\sqrt5-1)=\sqrt5+1<4$ since $\sqrt5<3$ by [F16,F17]; the formal cases $j=1,2,3$ are $I_2(5)$, $H_3$, and $H_4$, with $j=1$ already treated in rank $2$. If $m\ge6$, then $4c^2\ge3$; the same ratio bound excludes $i\ge2$, so $i=1$, and $2(j+1)\ge3j$ gives $j\le2$. For $j=1$ rank $2$ was treated in Step 1.1, while $j=2$ requires $m=6$ (for $m>6$, strict monotonicity gives $4c^2>3$) and gives the path $\tilde G_2=(3,6)$. For completeness, the finite path claims just used follow from Step 2.3 and Sylvester: a terminal $4$-edge has final determinant $2^{-j}$ after an all-$3$ prefix, the $(3,4,3)$ path has leading determinants $1,3/4,1/4,1/16$, and the $(5,3)$ and $(5,3,3)$ paths have leading determinants $1,(5-\sqrt5)/8,(3-\sqrt5)/8$ and $1,(5-\sqrt5)/8,(3-\sqrt5)/8,(7-3\sqrt5)/32$, respectively. The roots obey $2<\sqrt5<3$ by [F16,F17], and $3\sqrt5<7$ since both sides are positive and their squares satisfy $45<49$; hence all these determinants are positive. Thus the finite cases are positive definite by [F9], their groups are finite by [F6], and the finite classification [F7] gives their names; the equality paths are exactly the listed affine diagrams. [F22,F5,F6,F7,F9,F16,F17,F25,F29,step 1.1,step 1.2,step 2.3,step 2.4,algebra]

4.1 Now suppose there is no edge labelled at least $4$, so every edge has label $3$, and the tree has a vertex of degree at least $3$. A degree-$4$ vertex produces $\tilde D_4$ as in Step 3.1; if there are two degree-$3$ vertices, the same construction there produces a $\tilde D_k$ subdiagram. The subdiagram has the exact standard $\tilde D$ labels, is not positive definite by [F4], and therefore cannot be a proper principal submatrix by [F2]; it must be all of $\Gamma$. If there is one degree-$3$ vertex, let $1\le p\le q\le r$ be the numbers of vertices on its arms. When $r\ge2$, deleting a terminal vertex of the longest arm leaves a proper connected positive definite subdiagram by [F2]; applying the three-arm inequality [F24] to that subdiagram gives $\frac1{p+1}+\frac1{q+1}+\frac1r>1$. If $r=1$, the arms are $(1,1,1)$ and Step 3.2 shows the star is finite $D_4$ and positive definite, so it cannot be affine. [F2,F20,F4,F5,F24,F25,F26,step 3.1,step 3.2,algebra]

5.1 The integer solutions to the inequality in Step 4.1, with $p\le q\le r$, are $(1,1,r)$ for $r\ge2$, $(1,2,r)$ for $2\le r\le5$, $(1,3,3)$, and $(2,2,2)$. Indeed, $p\ge3$ makes the sum at most $1/4+1/4+1/3<1$. If $p=2$ and $q\ge3$, the sum is at most $1/3+1/4+1/3<1$, so $q=2$ and then $1/3+1/3+1/r>1$ forces $r=2$. If $p=1$ and $q\ge4$, the sum is at most $1/2+1/5+1/4<1$, so $q\le3$; with $q=2$ the inequality gives $r\le5$, with $q=3$ it gives $r=3$, and $q=1$ allows every $r\ge2$. The $(1,1,r)$ stars and $(1,2,2),(1,2,3),(1,2,4)$ are the positive definite finite stars of Step 3.2 and so are excluded. The remaining cases $(2,2,2)$, $(1,3,3)$, and $(1,2,5)$ are precisely $\tilde E_6,\tilde E_7,\tilde E_8$ by [F21], as required. [F21,F25,step 3.2,step 4.1,algebra]

6.1 The cases above exhaust connected affine form type diagrams: rank at most $2$ gives only $\tilde A_1$; in rank at least $3$, Step 1.3 gives the all-$3$ cycle case or a tree, Step 2.2 handles two or more labels at least $4$, Step 3.1 handles a single large label with a branch, Step 2.3 excludes an all-$3$ path, Steps 4.1-5.1 handle the remaining all-$3$ trees, and Steps 2.4-3.3 handle the remaining paths. Reading the resulting graph shapes against [F3,F18,F19,F20,F21,F22] gives exactly the list in the statement. Its families have no infinite labels above rank $2$, all finite labels among $3,4,6$, and at most two edges labelled at least $4$; the cyclic case is exactly $\tilde A_n$ ($n\ge2$). The low-rank aliases in the statement follow from [F15]. All witnesses and constructions use finitely many vertices and explicit formulas, so no Choice is used. [F1,F3,F5,F15,F18,F19,F20,F21,F22,F25,step 1.1,step 2.1,step 1.3,step 2.2,step 2.3,step 3.1,step 4.1,step 5.1,step 2.4,step 3.3,algebra] ∎
