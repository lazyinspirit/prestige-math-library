---
id: thm-cg-finite-coxeter-classification-including-h-and-dihedral
kind: theorem
title: "Classification of finite Coxeter systems, including the H and dihedral families"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 14
deps: [thm-cg-finite-type-positive-definite-criterion, lem-cg-positive-definite-diagram-exclusions, lem-cg-diagram-products-and-invariant-form-comparison, def-cg-coxeter-diagram-components-and-finite-type, def-cg-real-coxeter-form-and-reflection, thm-sylvesters-criterion-for-positive-definiteness, def-matrix-minors-cofactors-and-adjugate, thm-determinant-is-the-unique-normalized-alternating-multilinear-function, def-definiteness-inertia-and-signature-data-over-the-reals, def-graph-isomorphism-and-complement, def-external-direct-product-of-groups, def-internal-direct-product-of-subgroups, thm-chebyshev-multiple-angle-identities, def-chebyshev-polynomials-first-and-second-kind, thm-of-square-roots, lem-of-square-monotone, def-natural-numbers, thm-induction-principle, def-finite-cardinality, def-linear-basis, def-bilinear-symmetric-skew-and-alternating-forms, def-hh-coxeter-matrix-word-group-and-length, thm-sine-cosine-signs-monotonicity-and-ranges, cor-trigonometric-parity-and-pythagorean-identity, thm-quarter-turn-values-and-shift-formulas, cor-pi-is-the-first-positive-sine-zero, thm-double-angle-and-power-reduction-identities, lem-viete-finite-cosine-product-and-nested-radicals, thm-external-direct-product-is-a-group, def-internal-direct-sum, def-linear-combination-and-span, thm-laplace-cofactor-expansion]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: induction
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Theorem C.1.2 with Table 6.1 (classification of finite Coxeter groups), Appendix C, printed pp. 433-434; Lemma C.2.1, Lemma C.2.2, Lemma C.2.3 and Table C.1 (printed pp. 434-436); proofs of Theorems C.1.2-C.1.3 (printed pp. 437-438); Theorem 6.12.9 (printed pp. 119-120)"
    - title: "Jean Michel, Lectures on Coxeter groups (Beijing lecture notes, April-May 2014)"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/cox.pdf"
      locator: "Theorem 5.15 with its two-part proof, printed pp. 13-15: the list A, B, D, E, F, G, H, I; the determinant computations det C(An)=n+1, det C(Bn)=2, det C(Dn)=4, det C(E6)=3, det C(E7)=2, det C(E8)=1, det C(F4)=1, det C(I2(m))=4(1-cos^2(pi/m)), det C(H3)=3-sqrt5, det C(H4)=(7-3sqrt5)/2; and the remark that I2(2)=A1xA1, I2(3)=A2, I2(4)=B2"
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
([[def-cg-coxeter-diagram-components-and-finite-type]]), $W$ the presented group
with length $\ell$ ([[def-hh-coxeter-matrix-word-group-and-length]]),
$V=\mathbb R^S$ with Coxeter form $B$ and cosine matrix
$C=(B(e_s,e_t))_{s,t\in S}=(-\cos(\pi/m(s,t)))_{s,t}$
([[def-cg-real-coxeter-form-and-reflection]]), with $\cos(\pi/\infty):=1$ in this matrix notation.

**(1) Irreducible case.** If $\Gamma$ is connected, then $W$ is finite if and
only if $\Gamma$ is isomorphic as a labelled graph
([[def-graph-isomorphism-and-complement]]) to one of the following **standard
diagrams**:

- $A_n$, $n\ge1$: a path on $n$ vertices, all edges labelled $3$;
- $B_n$, $n\ge2$: a path on $n$ vertices whose labels are $3,\dots,3,4$ (one
  edge of label $4$, at an end);
- $D_n$, $n\ge4$: the star with one degree-$3$ vertex and three arms of
  $1,1,n-3$ vertices, all edges labelled $3$;
- $E_6$, $E_7$, $E_8$: the stars with arms of $1,2,2$; $1,2,3$; $1,2,4$ vertices,
  all edges labelled $3$;
- $F_4$: the path on four vertices with labels $3,4,3$;
- $H_3$: the path on three vertices with labels $3,5$, and $H_4$: the path on
  four vertices with labels $3,3,5$;
- $I_2(m)$, $3\le m<\infty$: two vertices joined by a single edge labelled $m$.

**(2) Reducible case.** For an arbitrary finite $S$, with components of $\Gamma$
on the vertex sets $S_1,\dots,S_k$, the group $W$ is finite if and only if every
component $\Gamma_{S_i}$ is one of the diagrams of (1); in that case
$W\cong W_{S_1}\times\cdots\times W_{S_k}$
([[lem-cg-diagram-products-and-invariant-form-comparison]] (1),
[[def-external-direct-product-of-groups]]). Thus the finite Coxeter systems are
exactly the direct products of the irreducible types listed in (1).

**(3) Positivity of the listed diagrams.** For every diagram $\Gamma$ of the
list (1) the form $B$ is positive definite. In more detail: every proper
principal submatrix of the matrix of $B$ is a block diagonal matrix whose blocks
are matrices of listed diagrams of smaller rank, and the determinant of the full
$n\times n$ cosine matrix of each listed diagram, multiplied by $2^n$ (i.e.
$\det(2C)$), is
$$A_n: n+1,\quad B_n: 2,\quad D_n: 4,\quad E_6: 3,\ E_7: 2,\ E_8: 1,\quad F_4: 1,\quad H_3: 3-\sqrt5,\quad H_4: \frac{7-3\sqrt5}2,\quad I_2(m): 4\sin^2(\pi/m),$$
all of which are positive. Hence $B$ is positive definite for each listed
diagram (Sylvester's criterion;
[[thm-sylvesters-criterion-for-positive-definiteness]]), and by (1) of
[[thm-cg-finite-type-positive-definite-criterion]] each such diagram defines a
finite Coxeter group.

**(4) Coincidences.** As Coxeter systems one has $A_2=I_2(3)$,
$B_2=C_2=I_2(4)$ and $G_2=I_2(6)$; more generally with the usual naming
conventions $A_1=B_1$ (the one-vertex diagram), $A_3=D_3$ (the path on three
vertices), $H_2=I_2(5)$, and $A_1\times A_1=I_2(2)$ if the notation $I_2(m)$ is
extended to $m=2$, the disconnected two-vertex diagram (no edge, since $m=2$
draws no edge). Apart from these identifications the diagrams of (1) are
pairwise non-isomorphic, and the classification list is therefore the
duplicate-free list $A_n$ ($n\ge1$), $B_n$ ($n\ge2$), $D_n$ ($n\ge4$),
$E_6,E_7,E_8,F_4,H_3,H_4$ and $I_2(m)$ with $m\ge3$, $m\notin\{3,4\}$,
where $I_2(3),I_2(4)$ are also written $A_2,B_2$ and $I_2(5),I_2(6)$ are also
written $H_2,G_2$.

## Facts & Assumptions

**Given:** A finite set $S$ with Coxeter matrix $m$, its diagram $\Gamma$, the presented group $W$ with length $\ell$, the space $V=\mathbb R^S$ with Coxeter form $B$ and cosine matrix $C=(B(e_s,e_t))$.

[F1] $W$ is finite if and only if $B$ is positive definite ([[thm-cg-finite-type-positive-definite-criterion]] (1)).

[F2] Every connected positive definite diagram is isomorphic as a labelled graph to one of $A_n$ ($n\ge1$), $B_n$ ($n\ge2$), $D_n$ ($n\ge4$), $E_6,E_7,E_8$, $F_4$, $H_3$, $H_4$, $I_2(m)$ ($m\ge3$); moreover for a path with labels $m_1,\dots,m_{n-1}$ the determinants $d_k$ of the leading $k\times k$ principal submatrices of $C$ satisfy $d_0=1$, $d_1=1$ and $d_k=d_{k-1}-\cos^2(\pi/m_{k-1})d_{k-2}$, with $d_k=(k+1)/2^k$ and $\det(2C)=n+1$ when all labels are $3$ ([[lem-cg-positive-definite-diagram-exclusions]] (5)(i),(7)).

[F3] Distinct vertices are joined exactly when $m(s,t)\ge3$ and carry the label $m(s,t)$, a label $3$ edge being drawn unlabelled; the subdiagram $\Gamma_T$ is the induced labelled graph, so deleting a vertex removes exactly its incident edges; an isomorphism of labelled graphs is a bijection of vertex sets preserving edges and labels ([[def-cg-coxeter-diagram-components-and-finite-type]], [[def-graph-isomorphism-and-complement]]).

[F4] $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for finite $m(s,t)$ and $B(e_s,e_t)=-1$ for $m(s,t)=\infty$, with $B(e_s,e_s)=1$ ([[def-cg-real-coxeter-form-and-reflection]]), with $\cos(\pi/\infty):=1$ in this matrix notation.

[F5] A symmetric real matrix $A\in M_n(\mathbb R)$, $n\ge1$, is positive definite if and only if the determinants of all its leading $k\times k$ principal submatrices, $1\le k\le n$, are positive ([[thm-sylvesters-criterion-for-positive-definiteness]]).

[F6] Determinants are multilinear in the columns, a determinant scales by $\lambda^n$ when the $n\times n$ matrix is multiplied by $\lambda$, the determinant of a block diagonal matrix is the product of the determinants of its blocks, and each minor $M_{ij}(A)$ is the determinant of the matrix with row $i$ and column $j$ deleted ([[thm-determinant-is-the-unique-normalized-alternating-multilinear-function]], [[def-matrix-minors-cofactors-and-adjugate]], [[thm-laplace-cofactor-expansion]]).

[F7] For every real $\theta$ one has $T_5(\cos\theta)=\cos(5\theta)$, and the Chebyshev polynomials of the first kind satisfy $T_0=1$, $T_1=t$ and $T_{n+2}=2tT_{n+1}-T_n$; $\cos(x+\pi)=-\cos x$, $\cos(\pi/2)=0$, $\cos\pi=-1$; $\cos(2x)=2\cos^2x-1$; $\cos(\pi/4)=\sqrt2/2$; $\sin^2x+\cos^2x=1$ and $\sin x>0$ for $0<x<\pi$; cosine is strictly decreasing on $[0,\pi]$; and $2<\sqrt5<3$, $3\sqrt5<7$ ([[thm-chebyshev-multiple-angle-identities]], [[def-chebyshev-polynomials-first-and-second-kind]], [[thm-quarter-turn-values-and-shift-formulas]], [[thm-double-angle-and-power-reduction-identities]], [[lem-viete-finite-cosine-product-and-nested-radicals]], [[cor-pi-is-the-first-positive-sine-zero]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[lem-of-square-monotone]], [[thm-of-square-roots]], [[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[F8] A finite product of groups is finite if and only if every factor is finite: products of finite sets are finite by successive enumeration, and each factor embeds by putting identities in the other coordinates. The external direct product $W_1\times\cdots\times W_k$ is a group, and for diagram components its multiplication map is an isomorphism by [[lem-cg-diagram-products-and-invariant-form-comparison]] (1) ([[def-external-direct-product-of-groups]], [[thm-external-direct-product-is-a-group]], [[def-internal-direct-product-of-subgroups]]).

[F9] A direct sum of symmetric bilinear forms is positive definite if and only if every summand is; in a direct sum the off-diagonal blocks are zero and a principal submatrix of a block diagonal matrix is block diagonal with the corresponding principal submatrices as blocks; the $e_s$ form a basis and $\dim V=|S|$ ([[def-definiteness-inertia-and-signature-data-over-the-reals]], [[def-internal-direct-sum]], [[def-linear-basis]], [[def-linear-combination-and-span]], [[def-bilinear-symmetric-skew-and-alternating-forms]], [[def-finite-cardinality]]).

[F10] The strong induction principle on $\mathbb N$ ([[thm-induction-principle]], [[def-natural-numbers]]).

## Proof

**Proof technique:** induction on the rank, together with the finiteness criterion and the exclusion tree.

1.1 (The special cosine values and the determinant recurrences.) First the cosine values used below. For $c:=\cos(\pi/3)$ the double-angle and shift identities of [F7] give $2c^2-1=\cos(2\pi/3)=-\cos(\pi/3)=-c$, so $(2c-1)(c+1)=0$, and $c>-1$ because $0<\pi/3<\pi$, cosine is strictly decreasing on $[0,\pi]$ and $\cos\pi=-1$ [F7], hence $c=1/2$; also $\cos(\pi/4)=\sqrt2/2$ by [F7]. For $c_5:=\cos(\pi/5)$, iterating the recurrence of [F7] gives $T_5(t)=16t^5-20t^3+5t$, so $T_5(c_5)=\cos\pi=-1$, i.e. $16c_5^5-20c_5^3+5c_5+1=(c_5+1)(4c_5^2-2c_5-1)^2=0$ by expansion; since $0<\pi/5<\pi/2$ gives $0<c_5<1$ [F7], one has $c_5\ne-1$, hence $4c_5^2-2c_5-1=0$ and $(c_5-\frac14)^2=\frac5{16}$; by uniqueness of nonnegative square roots $c_5=\frac14\pm\frac{\sqrt5}4$, and $c_5>0$ excludes $\frac{1-\sqrt5}4<0$ (as $2<\sqrt5$ [F7]), so $c_5=(1+\sqrt5)/4$. Now for a path on $k$ vertices with labels $m_1,\dots,m_{k-1}$ put $D_k:=\det(2C_k)$, where $C_k$ is the leading $k\times k$ principal submatrix of $C$; since multiplying a $k\times k$ matrix by $2$ multiplies its determinant by $2^k$ [F6] and $d_k=d_{k-1}-\cos^2(\pi/m_{k-1})d_{k-2}$ with $2^kd_k=D_k$ [F2], expanding along the last row gives $D_0=1$, $D_1=2$, $D_2=4\sin^2(\pi/m_1)$ and $$D_k=2D_{k-1}-4\cos^2(\pi/m_{k-1})D_{k-2}\qquad(k\ge2).$$ In particular $D_2(A_2)=4-4\cos^2(\pi/3)=4-1=3$, $D_2(I_2(m))=4\sin^2(\pi/m)$, and for a disjoint union the matrix is block diagonal, so $D_2(A_1\sqcup A_1)=2\cdot2=4$ and $D_3(A_3)=2D_2(A_2)-D_1(A_1)=6-2=4$ [F6, F7]. [F2, F4, F6, F7, algebra]

1.2 (Induction hypothesis, recorded for use in the proof of (3).) Assume $n\ge3$ and assume that for every disjoint union $\Delta$ of listed diagrams with total rank $<n$ both statements hold: every principal minor of $C(\Delta)$ is positive, and $B_\Delta$ is positive definite. [F10, ih]

1.3 (The irreducible case: both directions of (1).) Let $\Gamma$ be connected. If $W$ is finite then $B$ is positive definite by [F1], so clause (7) of the exclusion lemma in [F2] gives that $\Gamma$ is isomorphic as a labelled graph to one of $A_n$ ($n\ge1$), $B_n$ ($n\ge2$), $D_n$ ($n\ge4$), $E_6,E_7,E_8$, $F_4$, $H_3$, $H_4$, $I_2(m)$ ($m\ge3$) with the labels displayed in (1). Conversely, if $\Gamma$ is one of those labelled graphs then $B$ is positive definite by the positivity clause (3), proved below, and then $W$ is finite by [F1]. Hence $W$ is finite if and only if $\Gamma$ is one of those labelled graphs, which is (1). [F1, F2, F3, algebra]

1.4 (Coincidences and the duplicate-free list (4).) Reading the labelled graphs of (1) [F3]: $I_2(3)$ is one edge labelled $3$, which is $A_2$; $I_2(4)$ is one edge labelled $4$, which is $B_2$, also called $C_2$ in the root-system naming, and for $n\ge3$ the paths with labels $3,\dots,3,4$ are the $B_n$; $I_2(6)$ is one edge labelled $6$, conventionally called $G_2$; $A_1$ is the one-vertex diagram, written $B_1$ in the root-system naming; $A_3$ and $D_3$ are both the path on three vertices, since the third arm of $D_3$ has length $n-3=0$; $H_2$ is $I_2(5)$ by the rank-two naming convention; and $I_2(2)$ denotes the two-vertex diagram with no edge, which by [[lem-cg-diagram-products-and-invariant-form-comparison]] (1) is the direct product $A_1\times A_1$ of two one-vertex systems [F8]. For the non-isomorphism claim, the type is recovered from invariants of the labelled graph: the number of vertices, the degree sequence, the multiset of edge labels, the position of the unique label $\ge4$ or of the unique vertex of degree $3$, and, for a diagram with a vertex of degree $3$, the multiset of the lengths of the three arms (the numbers of vertices in the components obtained by deleting that vertex); these separate every pair of the list with exactly the exceptions displayed above, and distinct $m$ give non-isomorphic $I_2(m)$ because the label is read off the single edge. Removing the duplicates gives the displayed duplicate-free list, with $I_2(3),I_2(4),I_2(6)$ named alternatively as $A_2,B_2,G_2$. [F3, F8, algebra]

2.1 (The determinant table for the listed diagrams.) Using the recurrence of 1.1 [step 1.1] with the last edge label and deleting the last one or two vertices: $A_n$ has all labels $3$, so $D_n=2D_{n-1}-D_{n-2}$ with $D_1=2$, $D_2=3$, giving $D_n=n+1$ by induction on $n$ [F10]; $B_n$ (labels $3,\dots,3,4$, the $4$ at the end) has $D_n=2D_{n-1}-2D_{n-2}$ with $D_{n-1}=n$ (the all-$3$ path $A_{n-1}$) and $D_{n-2}=n-1$, giving $D_n=2$; $B_3$ has $D_3=2D_2(A_2)-2D_1(A_1)=6-4=2$ and $F_4$ (labels $3,4,3$) has $D_4=2D_3(B_3)-D_2(A_2)=4-3=1$; $H_3$ (labels $3,5$) has $D_3=2D_2(A_2)-4\cos^2(\pi/5)D_1=6-8\cos^2(\pi/5)=3-\sqrt5$ and $H_4$ (labels $3,3,5$) has $D_4=2D_3(A_3)-4\cos^2(\pi/5)D_2(A_2)=8-\frac{9+3\sqrt5}2=\frac{7-3\sqrt5}2$; $I_2(m)$ has $D_2=4\sin^2(\pi/m)$. For any leaf $a$ with sole neighbour $b$ and off-diagonal entry $-t$ in $M=2C$, order $a$ last and $b$ next to last. Expansion along the last row gives $\det M=2\det M_{\widehat a}-t^2\det M_{\widehat a,\widehat b}$: the off-diagonal cofactor has its last column zero except for $-t$, whose expansion gives the second term with its negative sign [F6]. For label $3$, $t=1$. For $D_4$, deletion of $a$ gives $A_3$, and deletion of $a,b$ gives $A_1\sqcup A_1$; for $D_n$ with $n\ge5$, use the end of the long arm, giving $D_{n-1}$ and $D_{n-2}$ (with $D_3=A_3$). Thus $D_n(D)=2D_{n-1}-D_{n-2}$ with $D_3(A_3)=4$, $D_2(A_1\sqcup A_1)=4$, whence $D_n(D)=4$ for $n\ge4$; and deleting the end vertex of the long arm of $E_6,E_7,E_8$ respectively one and two vertices of it gives $D(E_6)=2D_5(D)-D_4(A)=8-5=3$, $D(E_7)=2D(E_6)-D_5(D)=6-4=2$, $D(E_8)=2D(E_7)-D(E_6)=4-3=1$. This is the table of (3). [F2, F4, F6, F7, step 1.1, algebra]

2.2 (The reducible case (2).) Let the connected components of $\Gamma$ be on $S_1,\dots,S_k$. By [[lem-cg-diagram-products-and-invariant-form-comparison]] (1) the multiplication map $W_{S_1}\times\cdots\times W_{S_k}\to W$ is an isomorphism, and by its (2) the form is the orthogonal direct sum $B=B_{S_1}\oplus\cdots\oplus B_{S_k}$ [F9]. A direct product of groups is finite exactly when each factor is finite [F8], and a direct sum of forms is positive definite exactly when each summand is [F9]; by 1.3 [step 1.3] applied to each component this happens exactly when every $\Gamma_{S_i}$ is one of the diagrams of (1). This is (2). [F8, F9, step 1.3, algebra]

2.3 (Base of the induction: rank $\le2$.) The empty diagram has rank $0$ and no principal minors, and its form is positive definite vacuously; $A_1$ has $D_1=2>0$, and $I_2(m)$ ($m\ge3$) has $D_2=4\sin^2(\pi/m)>0$ together with the $1\times1$ minors $2>0$, by 1.1 [step 1.1] and $\sin(\pi/m)>0$ for $0<\pi/m<\pi$ [F7]; by Sylvester's criterion [F5] the forms of $A_1$, $A_2=I_2(3)$, $B_2=I_2(4)$ and all $I_2(m)$ are positive definite. The remaining disjoint union of rank $2$ is $A_1\sqcup A_1$, with $2C=\operatorname{diag}(2,2)$, positive principal minors $2,2,4$ and positive definite form. This completes the base of the induction. [base], [F5, F7, step 1.1, algebra]

3.1 (Inductive step: every listed diagram is positive definite; clause (3).) Let $\Delta$ be a disjoint union of listed diagrams of total rank $n\ge3$, and assume the induction hypothesis of 1.2 [step 1.2]. If $\Delta$ is disconnected, its matrix is block diagonal with blocks the matrices of its components, and every principal submatrix of a block diagonal matrix is block diagonal with blocks the corresponding principal submatrices of the components, so multiplicativity of determinants [F6] and the induction hypothesis give positivity of every principal minor and positive definiteness of $B_\Delta$ [F9]. If $\Delta$ is connected, it is one of the listed diagrams: deleting vertices from an all-$3$ path leaves $A$ paths; a subpath retaining the label-$4$ endpoint edge of $B_n$ is a smaller $B$ path; proper subpaths of $F_4$ are $A$ paths, $B_2$ or $B_3$; and proper subpaths of $H_3,H_4$ are $A$ paths, $I_2(5)$ or $H_3$. Deleting a vertex of $I_2(m)$ leaves $A_1$. Deleting vertices from a star with arm lengths $(a,b,c)$ leaves stars with arm lengths $a'\le a$, $b'\le b$, $c'\le c$ (or paths, when an arm disappears); the triples $(1,1,n-3)$ of $D_n$ and $(1,2,2),(1,2,3),(1,2,4)$ of $E_6,E_7,E_8$ dominate componentwise every smaller triple, and the result is again a $D$ or $E$ diagram of smaller rank, or a path $A$ [F3]. Hence every proper principal submatrix of a listed diagram is block diagonal with blocks listed diagrams of smaller rank, and every principal minor is positive by the induction hypothesis; the full determinant is the positive table value of 2.1 [step 2.1]; since the leading principal minors are principal minors, Sylvester's criterion [F5] gives positive definiteness of the form of every listed diagram, which is (3). [F3, F5, F6, F9, step 1.2, step 2.1, algebra]

4.1 (Discharge of the induction; assembly.) The base case is 2.3 [step 2.3] and the inductive step is 3.1 [step 3.1], so by the induction principle on the rank, every disjoint union of listed diagrams, and in particular every diagram of the list (1), has positive definite form [discharge-induction: step 3.1]. Clause (1) is 1.3 [step 1.3], clause (2) is 2.2 [step 2.2], clause (3) is 2.1 and 3.1 [step 2.1, step 3.1], and clause (4) is 1.4 [step 1.4]; hence the connected finite diagrams are exactly the standard list, the finite Coxeter systems are exactly the direct products of the irreducible types, every listed diagram is positive definite and therefore finite, and the list is duplicate-free after the stated identifications. [step 1.3, step 1.4, step 2.2, step 2.3, step 3.1] ∎
