---
id: "ex-cg-link-angles-of-a2-affine-a2-and-universal-coxeter-nerve"
kind: "example"
title: "Link angles in A2, affine A2 and the universal Coxeter nerve"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 20
deps: ["lem-cg-davis-angular-vertex-link-is-metric-flag-nerve","def-cg-spherical-nerve-coset-poset-and-davis-realization","thm-cg-davis-complex-cell-incidence-and-stabilizers","def-cg-large-spherical-metric-flag-and-almost-negative-matrix","def-cg-euclidean-cone-and-spherical-join-metrics","def-cg-cat-zero-cat-one-and-local-geodesic","lem-cg-comparison-convexity-and-model-spaces","thm-cg-finite-type-positive-definite-criterion","def-cg-real-coxeter-form-and-reflection","lem-cg-reflection-form-invariance-and-rank-two-orders","thm-hh-parabolic-minimal-representatives-and-length-additivity","def-hh-coxeter-matrix-word-group-and-length","def-definiteness-inertia-and-signature-data-over-the-reals","lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta","def-axiom-of-choice"]
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups, first-edition author manuscript, 2007-2008"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Section 7.3, printed pp. 128-131 (Definition 7.3.1, Examples 7.3.2(i),(ii): the interval for C_2 and the regular 2m-gon for the dihedral group; Lemma 7.3.3 and Proposition 7.3.4); section 7.4, printed p. 132 (Example 7.4.1: for m_st = infinity the nerve is discrete and Sigma is a regular k-valent tree; Example 7.4.2, printed p. 132 (the general 3-circuit inequality; this item computes only its affine-A2 equality instance and does not assert the general classification)); section 12.1, printed pp. 231-232 (Lemma 12.1.1: the vertex link is a spherical simplex with cosine matrix of (W,S), edge length pi - pi/m_st); section 12.3, printed pp. 234-235 (Lemma 12.3.1)."
    - title: "M. W. Davis and G. Moussong, Notes on nonpositively curved polyhedra, Turan Workshop notes (1998/1999)"
      url: "https://people.math.osu.edu/davis.12/notes.pdf"
      locator: "Section 6.6, printed pp. 39-40 (the piecewise Euclidean structure and vertex link), and Section 6.7, printed p. 40 (Example 6.7.3: Coxeter edge lengths pi - pi/m_ij and the metric flag property). Lemma 6.7.4 is only sketched there and is not used; each CAT(1) case here is checked directly."
    - title: "M. W. Davis, The geometry and topology of Coxeter groups, MSC lecture slides (Tsinghua University, 2013)"
      url: "https://people.math.osu.edu/davis.12/papers/Davis-MSC.pdf"
      locator: "PDF pp. 12-15: the slides 'The second realization: the cell complex Sigma' and 'Coxeter zonotopes', and Theorem 2.19(ii),(iv) (one cell per spherical subset, the 1-skeleton is the Cayley graph). Entire 19-page document opened."
    - title: "M. R. Bridson and A. Haefliger, Metric Spaces of Non-Positive Curvature, Grundlehren der mathematischen Wissenschaften 319, Springer 1999"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "Section II.5.21, PDF p. 234, where Moussong's metric-flag lemma is stated. That general lemma is not used in this example; its three CAT(1) cases are checked directly."
  scraped: []
---
## Example

Let $(S,m)$ be a Coxeter matrix with $S$ finite, $W$ its presented group ([[def-hh-coxeter-matrix-word-group-and-length]]), $L$ its nerve, $X=|L|_B$ the finite large metric flag complex of [[lem-cg-davis-angular-vertex-link-is-metric-flag-nerve]] (3),(4), and $\operatorname{Lk}_\Sigma(w)$ the angular link of a vertex of the Davis complex, which by that lemma is isometric to $X$. Assume AC only to invoke the A-page link lemma as currently stated; the explicit group, matrix and metric computations below use no Choice. In the following three systems the link, its edge lengths and its metric flag data are computed.

**(i) $A_2$.** Let $S=\{s,t\}$ and $m(s,t)=3$, so $W=W_S$ is the dihedral group of order $6$, hence finite. Every subset of $S$ is spherical, so $L$ is the single edge $\{s,t\}$, $\mathbb S=\{\emptyset,\{s\},\{t\},S\}$, and $X$ is the spherical segment with vertices $s,t$ and length $$\pi-\pi/3=2\pi/3,\qquad \text{cosine matrix } \begin{pmatrix}1&-1/2\\-1/2&1\end{pmatrix}=B_S,$$ which is positive definite. The Coxeter cell $C_S$ is a regular hexagon when $d_s=d_t$ ([[lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta]] (4)). Hence $\operatorname{Lk}_\Sigma(w)$ is an arc of length $2\pi/3$, equal to the interior angle of that hexagon at the vertex; the arc is a CAT(1) geodesic interval by the direct comparison argument in step 2.2.

**(ii) Affine $A_2$.** Let $S=\{s,t,u\}$ and $m(s,s)=1$ and $m(s,t)=3$ for distinct generators. The three pairs are spherical, but $S$ is not: with $J$ the all-ones matrix, $$B_S=\tfrac32 I-\tfrac12 J$$ is positive semidefinite with kernel $\mathbb R(1,1,1)$ and is not positive definite, so $W_S$ is infinite ([[thm-cg-finite-type-positive-definite-criterion]] (1), [[def-definiteness-inertia-and-signature-data-over-the-reals]]). Thus $L$ is the triangle boundary with the three edges $\{s,t\},\{t,u\},\{u,s\}$, and $X$ is the circle built from three edges of length $2\pi/3$, of total length $2\pi$; the triple $\{s,t,u\}$ is pairwise adjacent, its cosine matrix $B_S$ is not positive definite, and the metric flag condition ([[def-cg-large-spherical-metric-flag-and-almost-negative-matrix]] (3)) correctly leaves the triangle unfilled. The vertex link is therefore the round circle $S^1_{2\pi}$, which is CAT(1), $\ell=2\pi$ being exactly the equality case of the criterion "a circle of length $\ell$ is CAT(1) if and only if $\ell\ge2\pi$" ([[lem-cg-comparison-convexity-and-model-spaces]] (vi)); geometrically the three incident rank-two cells contribute the local link angles $2\pi/3$ given by the link lemma, for total angle $2\pi$; when $d_s=d_t=d_u$ these are regular hexagons.

**(iii) Universal Coxeter system.** Let $m(s,t)=\infty$ for all distinct $s,t$. Then no pair is spherical, so $\mathbb S$ consists of $\emptyset$ and the singletons, $L$ is the discrete complex on $S$, and every cell of $\Sigma$ has dimension $\le1$. Hence $X$ is $0$-dimensional, $\operatorname{Lk}_\Sigma(w)$ is the finite set $S$ with distinct points at truncated angular distance $\pi$, and its cone is the metric star of $|S|$ Euclidean rays joined at one apex (a point if $S=\emptyset$, a ray if $|S|=1$, and $\mathbb R$ if $|S|=2$). The associated almost-negative matrix is $B$, with $B(e_s,e_t)=-1$ for $s\ne t$; for $|S|=2$ it is $\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$, positive semidefinite with kernel $\mathbb R(1,1)$. There are no pairwise adjacent sets of two or more vertices, so the metric flag test holds; the CAT(1) tests hold vacuously for this discrete $\pi$-separated link. For $|S|=2$ its cone is the line.

**(iv) Comparison.** In all three cases the identity $\cos(\text{edge length})=B(e_s,e_t)$ holds, with $B(e_s,e_t)=-1$ for the non-edges $m=\infty$; the edge length is $\pi-\pi/m(s,t)$ ; it agrees with $\pi/m(s,t)$ only when $m(s,t)=2$, and the metric flag test uses positive definiteness of the cosine matrix $B_T$ of a pairwise adjacent set, not merely its pairwise edge data.

## Facts & Assumptions

**Given:** AC, a finite Coxeter matrix $(S,m)$ and its presented group $W$, the spherical subsets $\mathbb S$ with nerve $L$, the finite large metric flag complex $X=|L|_B$ with its truncated angular metric, and the three systems of clauses (i)-(iii). AC is included only because the cited A-page link lemma has a global AC premise.

[F1] The Coxeter presentation has involution and finite-label relators, and its universal property extends any generator assignment satisfying them to a homomorphism ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F2] A subset $T\subseteq S$ is spherical exactly when $W_T$ is finite; the nerve $L$ has the nonempty spherical subsets as simplices and is finite ([[def-cg-spherical-nerve-coset-poset-and-davis-realization]] (1)).

[F3] Under AC, clause (3) of the A-page link lemma identifies each angular vertex link with the finite spherical complex $X=|L|_B$ and identifies its spherical simplices by their cosine matrices ([[lem-cg-davis-angular-vertex-link-is-metric-flag-nerve]] (3)). Its CAT(1) clause (6) is not used here.

[F4] The Coxeter form has $B(e_s,e_s)=1$, $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for finite labels, and $B(e_s,e_t)=-1$ for $m(s,t)=\infty$ ([[def-cg-real-coxeter-form-and-reflection]] (2)).

[F5] On a pair plane $\mathbb Re_s+\mathbb Re_t$, the Gram matrix is $\begin{pmatrix}1&-c\\-c&1\end{pmatrix}$; it is positive definite for finite $m$ and positive semidefinite with radical $\mathbb R(e_s+e_t)$ for $m=\infty$ ([[lem-cg-reflection-form-invariance-and-rank-two-orders]] (3)(i)).

[F6] For finite $S$, $W$ is finite if and only if its Coxeter form on $\mathbb R^S$ is positive definite ([[thm-cg-finite-type-positive-definite-criterion]] (1), [[def-definiteness-inertia-and-signature-data-over-the-reals]]).

[F7] The Davis cells are indexed by the spherical cosets $wW_T$ and have dimension $|T|$ ([[thm-cg-davis-complex-cell-incidence-and-stabilizers]] (1),(2)).

[F8] The Davis 2-cell for a finite-label pair is a $2m(s,t)$-gon, and when $|T|=2$ and $d_s=d_t$, $C_T$ is the regular $2m(s,t)$-gon ([[lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta]] (3),(4)).

[F9] The Euclidean cone formula is $d_C(o,(r,x))=r$ and $d_C((r,x),(s,y))^2=r^2+s^2-2rs\cos d_\pi(x,y)$, with $d_\pi=\min\{\pi,d_{\mathrm{path}}\}$; distinct components have truncated distance $\pi$ ([[def-cg-euclidean-cone-and-spherical-join-metrics]] (2)-(4)).

[F10] In a large spherical complex, the metric flag condition says that a pairwise adjacent vertex set spans a simplex if and only if its cosine matrix is positive definite ([[def-cg-large-spherical-metric-flag-and-almost-negative-matrix]] (3)).

[F11] CAT(1) requires geodesics for pairs at distance $<\pi$ and spherical comparison only for geodesic triangles of perimeter $<2\pi$ ([[def-cg-cat-zero-cat-one-and-local-geodesic]] (2),(3)).

[F12] The round circle $S^1_\ell$ is CAT(1) if and only if $\ell\ge2\pi$ ([[lem-cg-comparison-convexity-and-model-spaces]] (vi)).

[F13] For a subset $T$, $(W_T,T)$ is the Coxeter system for the restricted Coxeter matrix ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2)).

[F14] AC is assumed only to invoke the globally AC-qualified A-page link lemma; the finite group, matrix, cone and CAT(1) calculations in this example make no choice selections ([[def-axiom-of-choice]]).

[F15] Under AC, clauses (2)-(3) of the A-page link lemma give the local edge-cell length $\pi-\pi/m(s,t)$ for finite labels, without asserting a global shortest-path equality ([[lem-cg-davis-angular-vertex-link-is-metric-flag-nerve]] (2)).

[F16] Under AC, clause (4) of the A-page link lemma records $X$ as a finite large metric flag complex with associated matrix $B$ ([[lem-cg-davis-angular-vertex-link-is-metric-flag-nerve]] (4)).

[F17] The empty cosine matrix is positive definite by convention ([[def-cg-large-spherical-metric-flag-and-almost-negative-matrix]] (3)).
## Verification

**Given:** AC, a finite Coxeter matrix $(S,m)$, its presented group $W$, the nerve $L$, the finite large metric flag complex $X=|L|_B$ with truncated angular metric, and the three systems (i)-(iii). AC is used only through the stated A-page link lemma; all local calculations are choice-free.

**Proof technique:** direct.

1.1 Clause (i). Under AC [F14], invoke clauses (2)-(4) of the A-page link lemma [F3,F15,F16] for the vertex links and their local metrics. For $S=\{s,t\}$ with $m(s,t)=3$, [F4] gives $B_S=\begin{pmatrix}1&-1/2\\-1/2&1\end{pmatrix}$, whose eigenvalues are $1/2$ and $3/2$, so it is positive definite. The assignments $s\mapsto(12)$ and $t\mapsto(23)$ satisfy the presentation relators, so [F1] gives a homomorphism $W_S\to S_3$; it is onto. Put $a=st$. The presentation gives $a^3=1$, $t=sa$, and $sas=a^{-1}$, so every word reduces to $a^i$ or $a^is$ for $i=0,1,2$. Hence $|W_S|\le6$; the surjection gives $|W_S|\ge6$, so $W_S\cong S_3$, the dihedral group of order six. Every subset is spherical [F2]; $L$ is one edge and [F3,F15] give edge length $2\pi/3$ with cosine matrix $B_S$. The empty cosine matrix is positive definite by [F17], and every nonempty subset has a positive-definite cosine matrix as a principal submatrix of $B_S$; since every subset is spherical, the metric-flag equivalence holds [F10]. When $d_s=d_t$, [F8] gives the regular hexagonal cell. [F1, F2, F3, F4, F8, F10, F14, F15, F16, F17, algebra]

1.2 Clause (ii). Let $S=\{s,t,u\}$ and $m(s,s)=1$ and $m(s,t)=3$ for distinct generators. By [F4], $B_S=\tfrac32 I-\tfrac12 J$. For $x=(x_1,x_2,x_3)$, $$2x^TB_Sx=3\sum_i x_i^2-(\sum_i x_i)^2=(x_1-x_2)^2+(x_2-x_3)^2+(x_3-x_1)^2,$$ so $B_S$ is positive semidefinite with kernel $\mathbb R(1,1,1)$ and is not positive definite. Hence $W_S$ is infinite by [F6]. Each pair has matrix $\begin{pmatrix}1&-1/2\\-1/2&1\end{pmatrix}$ with eigenvalues $1/2$ and $3/2$, so it is positive definite by [F5] and its parabolic is finite by [F6,F13]. The nerve therefore has all three edges but no 2-simplex [F2]. By [F3,F15], $X$ is the cycle of three edges of length $2\pi/3$, hence the round circle of circumference $2\pi$. Its pairwise adjacent triple has cosine matrix $B_S$, which is not positive definite, so the metric flag test leaves it unfilled [F10]. The empty matrix is positive definite by [F17], each singleton has matrix $[1]$, and every pair is an edge with positive-definite matrix by the preceding calculation. Thus the only pairwise adjacent set failing to span a simplex is the triple, whose matrix is not positive definite, so both directions of the metric-flag condition hold. The three incident rank-two cells contribute local link angles $2\pi/3$ each by [F15], for total angle $2\pi$; when $d_s=d_t=d_u$, they are regular hexagons by [F8]. [F2, F3, F4, F5, F6, F8, F10, F15, F17, algebra]

2.1 Clause (iii). Let every distinct pair in the finite set $S$ have label $\infty$. For each distinct $s,t$, [F4,F5] give the pair matrix $\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$, which is positive semidefinite with radical $\mathbb R(e_s+e_t)$ and is not positive definite; hence $W_{\{s,t\}}$ is infinite by [F6,F13]. No pair is spherical, so [F2] makes $L$ discrete; [F7] gives Davis cells of dimension at most one and [F3] identifies the link with the points of $S$ at pairwise truncated distance $\pi$. By [F9], points of radii $r,q$ on the same ray have distance $|r-q|$, and points on distinct rays have distance $r+q$; if either radius is zero, the cone-apex formula gives the same result. Thus the cone is the metric star of $|S|$ rays: a point for $S=\emptyset$, a ray for $|S|=1$, and for $|S|=2$ an isometric copy of $\mathbb R$ by sending the two rays to opposite half-lines. The almost-negative matrix has off-diagonal entries $-1$; for $|S|=2$ its quadratic form is $(x_1-x_2)^2$ and its kernel is $\mathbb R(1,1)$. The metric flag test holds: a pairwise adjacent set has at most one vertex, the empty matrix is positive definite by [F17], and a singleton has matrix $[1]$ [F10]. [F2, F3, F4, F5, F6, F7, F9, F10, F17, step 1.1, algebra]

2.2 Clause (i), CAT(1). Step 1.1 identifies the link with an interval of length $L=2\pi/3$. For any three points ordered along it, the side lengths are $a,b,a+b$ with $a+b\le L$, so the perimeter is $2(a+b)\le4\pi/3<2\pi$. The spherical comparison triangle is the same degenerate great-circle segment, since the longest side is the sum of the other two and is less than $\pi$; corresponding side-point distances therefore agree. Thus the interval satisfies the CAT(1) comparison. Its closed midpoint ball of radius $\pi/3$ is the whole interval and is convex. [F11, step 1.1, algebra]

2.3 Clause (ii), CAT(1). Step 1.2 identifies the link with the round circle of circumference $2\pi$. By [F12], this is the equality case of the criterion that $S^1_\ell$ is CAT(1) exactly when $\ell\ge2\pi$. The three incident rank-two cells contribute the local angles $2\pi/3$ each by [F15], for total angle $2\pi$; when $d_s=d_t=d_u$, they are regular hexagons by [F8]. [F8, F12, F15, step 1.2]

3.1 Clause (iii), CAT(1). Step 2.1 gives a discrete link with distinct points at distance $\pi$. Every pair at distance $<\pi$ is identical and has the constant geodesic; a triangle with any two distinct vertices has perimeter at least $2\pi$, so the only tested triangles are constant and satisfy comparison with equality. [F11, step 2.1, algebra]

4.1 Clause (iv) and conclusion. By [F15], each edge has length $\pi-\pi/m(s,t)$ and cosine $B(e_s,e_t)$, while each non-edge has $B(e_s,e_t)=-1$. Thus the edge length is $\pi-\pi/m(s,t)$; the two formulas coincide for $m(s,t)=2$ and differ for $m(s,t)>2$. In the affine case the pairwise adjacent triple is unfilled precisely because its cosine matrix is semidefinite, not positive definite [F10, step 1.2]. The A-page link description records $X$ as finite large metric flag with associated matrix $B$ [F16]; the three metric-flag tests here are checked directly in steps 1.1-2.1. The local group, matrix, cone and CAT(1) calculations use no choice; AC is used only for the A-page link-lemma invocation in step 1.1 [F14]. No general 3-circuit classification or CAT(1) theorem for all large metric flag complexes is asserted. [F3, F4, F10, F14, F15, F16, step 1.1, step 1.2, step 2.1, step 2.2, step 2.3, step 3.1] ∎

## Current supplier receipt status

These direct in-run supplier decisions remain open. The final report distinguishes current escalations from missing or stale receipts.

- `lem-cg-davis-angular-vertex-link-is-metric-flag-nerve`: its current in-run supplier decision is not closed; this item consumes it in Facts F3, F15, F16 and proof steps 1.1, 1.2, 2.1, 4.1, 2.3.
- `def-cg-spherical-nerve-coset-poset-and-davis-realization`: its current in-run supplier decision is not closed; this item consumes it in Facts F2 and proof steps 1.1, 1.2, 2.1.
- `thm-cg-davis-complex-cell-incidence-and-stabilizers`: its current in-run supplier decision is not closed; this item consumes it in Facts F7 and proof steps 2.1.
- `def-cg-euclidean-cone-and-spherical-join-metrics`: its current in-run supplier decision is not closed; this item consumes it in Facts F9 and proof steps 2.1.
- `def-cg-cat-zero-cat-one-and-local-geodesic`: its current in-run supplier decision is not closed; this item consumes it in Facts F11 and proof steps 2.2, 3.1.
- `lem-cg-comparison-convexity-and-model-spaces`: its current in-run supplier decision is not closed; this item consumes it in Facts F12 and proof steps 2.3.
- `thm-cg-finite-type-positive-definite-criterion`: its current in-run supplier decision is not closed; this item consumes it in Facts F6 and proof steps 1.2, 2.1.
- `def-cg-real-coxeter-form-and-reflection`: its current in-run supplier decision is not closed; this item consumes it in Facts F4 and proof steps 1.1, 1.2, 2.1, 4.1.
- `lem-cg-reflection-form-invariance-and-rank-two-orders`: its current in-run supplier decision is not closed; this item consumes it in Facts F5 and proof steps 1.2, 2.1.
- `thm-hh-parabolic-minimal-representatives-and-length-additivity`: its current in-run supplier decision is not closed; this item consumes it in Facts F13 and proof steps 1.2, 2.1.
- `def-hh-coxeter-matrix-word-group-and-length`: its current in-run supplier decision is not closed; this item consumes it in Facts F1 and proof steps 1.1.
- `lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta`: its current in-run supplier decision is not closed; this item consumes it in Facts F8 and proof steps 1.1, 1.2, 2.3.
