---
id: lem-na-scott-zhang-boundary-preserving-p1-interpolant
kind: lemma
title: "Boundary-preserving face-average P1 interpolation"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: ["def-matching-affine-simplicial-meshes", "def-broken-and-conforming-polynomial-spaces", "def-wkp-zero-as-a-sobolev-closure", "def-sobolev-space-wkp-and-its-norm", "lem-shape-regular-affine-simplex-scaling", "thm-reference-simplex-trace-and-gauss-green", "thm-reference-simplex-poincare-wirtinger", "thm-bramble-hilbert-on-reference-simplex", "def-countable-choice", "thm-zero-boundary-piecewise-polynomials-in-w10p", "thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field", "lem-affine-pullback-weak-derivatives-and-scaling"]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapters 49–54 (complete course notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap49.pdf
      locator: "§49.4.2, Babuška–Brezzi; Chapter 50, §§50.1–50.2, mixed approximation and Schur complement; Chapters 53–54, Stokes and MINI element."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2 and pp. 276–277; Chapter 8, §§8.2, 8.4.2, 8.5.5, 8.6.1, 8.7.1 and 8.10."
---

## Statement

Assume Countable Choice. Let $D$ be a bounded connected Lipschitz polygonal/polyhedral domain with a conforming shape-regular simplicial mesh, $d=2$ or $3$, mesh size $h=\max_Kh_K$. For each interior mesh vertex $z$, choose any incident facet $F_z$; for each boundary vertex choose an incident boundary facet. Let $\psi_{z,F_z}\in P_1(F_z)$ be the unique dual affine function satisfying $\int_{F_z}\psi_{z,F_z}\varphi_y=\delta_{zy}$ for the facet's P1 nodal basis. Define
$$I_hv=\sum_z\left(\int_{F_z}\psi_{z,F_z}\operatorname{tr}v\right)\varphi_z.$$
This is a linear face-average interpolant $H^1(D)\to S_h$, where $S_h$ is the continuous piecewise P1 space. It maps $H^1_0(D)$ into $S_h\cap H^1_0(D)$, is uniformly $H^1$-seminorm stable, and for each element patch $\omega_K$ has
$$\|v-I_hv\|_{L^2(K)}\le Ch_K\|\nabla v\|_{L^2(\omega_K)}.$$
If $v\in H^2(D)$, then $\|\nabla(v-I_hv)\|_{L^2(K)}\le Ch_K\|D^2v\|_{L^2(\omega_K)}$. Constants depend only on dimension, the fixed domain, and the mesh shape-regularity bound. No point evaluation is used.

## Facts & Assumptions

**Given:** A conforming affine mesh of a bounded connected Lipschitz polygon/polyhedron, its shape-regularity bound, and the Sobolev spaces on its cells.

[A1] Countable Choice is inherited through the H0 closure interface used to identify zero boundary traces. ([[def-countable-choice]])

[F1] Matching affine simplices and conforming P1 spaces have shared facet traces; continuous piecewise polynomials with zero boundary facet trace belong to $H^1_0(D)$. ([[def-matching-affine-simplicial-meshes]], [[def-broken-and-conforming-polynomial-spaces]], [[thm-zero-boundary-piecewise-polynomials-in-w10p]])

[F2] Shape regularity gives uniform affine scaling between each simplex and the reference simplex. ([[lem-shape-regular-affine-simplex-scaling]])

[F3] The reference simplex has a bounded trace map and a Poincare–Wirtinger inequality; Bramble–Hilbert gives affine approximation with the stated derivative-order scaling. ([[thm-reference-simplex-trace-and-gauss-green]], [[thm-reference-simplex-poincare-wirtinger]], [[thm-bramble-hilbert-on-reference-simplex]])

[F4] $H^1_0(D)$ is the closure of compactly supported smooth functions, so its trace on every boundary facet is zero by continuity of the face trace. ([[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]], [[thm-reference-simplex-trace-and-gauss-green]])

[F5] On a finite-dimensional real normed space, all norms are equivalent. ([[thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field]])

[F6] Affine pullback transports H1 norms and face traces between a simplex and its reference simplex; the trace bound then follows from [F3]. ([[lem-affine-pullback-weak-derivatives-and-scaling]], [[thm-reference-simplex-trace-and-gauss-green]])



## Proof

1.1 On each reference facet, the P1 facet mass matrix is positive definite because $\int_Fp^2>0$ for every nonzero affine polynomial. Its inverse defines the dual functions $\widehat\psi_z$; affine scaling in [F2] gives $\|\psi_{z,F}\|_{L^2(F)}\le C h_F^{-(d-1)/2}$. The trace map in [F3] therefore makes every coefficient of $I_hv$ a bounded linear functional on the H1 trace of an adjacent cell. Shared coefficients define a continuous P1 function. If $v\in H^1_0$, [F4] makes all selected boundary-facet averages zero, so $I_hv$ has zero boundary nodal values and belongs to $H^1_0$ by [F1]. [A1, F1, F2, F3, F4, F6, construct]

1.2 The coefficients reproduce every global affine polynomial: on the selected facet its trace is P1 and the dual moment equals its value at $z$. Shape regularity bounds the number of cells at each vertex: each simplex's vertex solid angle has a positive lower bound, while the total angle is at most $2\pi$ in dimension two or $4\pi$ in dimension three. The vertex-star graph is connected as follows. Choose a small chart cylinder meeting only cells incident to the vertex. At an interior vertex, a small ball lies in $D$. At a boundary vertex, the Lipschitz chart represents this local part of $D$ as the region above a Lipschitz graph; within a smaller base ball, vertical paths to a common height above the graph and a horizontal segment at that height connect any two points. Hence this local part is path connected. Join interior points of any two incident cells by a polygonal path there and perturb its finitely many segments to avoid the finite mesh skeleton of codimension at least two. The path then crosses only facet interiors and gives a facet-adjacency chain among cells incident to the vertex. Adjacent cell diameters are comparable by [F2]. Thus vertex-patch diameters and overlap are uniformly bounded. [F1, F2, construct]

2.1 Let $\omega_K$ be the union of cells meeting a vertex of $K$. Shape regularity bounds the number of cells at each vertex: each has a solid angle bounded below by the reference-cell shape bound, whereas the total angle is at most $2\pi$ in dimension two and $4\pi$ in dimension three. Each vertex-star graph is connected by step 1.2, and all stars of vertices of $K$ contain $K$, so their union is connected; neighboring cell diameters are comparable by [F2]. For adjacent cells $T,T'$ with common facet $F$, let $m_T,m_{T'}$ be their volume means. Cell Poincare and trace in [F3] give $\|w-m_T\|_{L^2(F)}\le Ch_K^{1/2}\|\nabla w\|_{L^2(T)}$ and the analogous bound on $T'$. Since $|F|^{1/2}\asymp h_K^{(d-1)/2}$, it follows that $|m_T-m_{T'}|\le Ch_K^{(2-d)/2}\|\nabla w\|_{L^2(T\cup T')}$. A path of bounded length through the patch graph then compares all cell means to one fixed $c_K$ and proves $\|w-c_K\|_{L^2(\omega_K)}\le Ch_K\|\nabla w\|_{L^2(\omega_K)}$. Applying the scaled trace estimate of [F3] and $\|\psi_{z,F_z}\|_{L^2(F_z)}\le Ch_K^{-(d-1)/2}$ gives $|\int_{F_z}\psi_{z,F_z}(w-c_K)|\le Ch_K^{1-d/2}\|\nabla w\|_{L^2(\omega_K)}$ for every vertex of $K$. [A1, F2, F3, step 1.2]

2.2 Suppose $v\in H^2(D)$. On each cell $T\subset\omega_K$, Bramble--Hilbert and affine scaling in [F2, F3] give $p_T\in P_1(T)$ with $\|v-p_T\|_{L^2(T)}\le Ch_T^2\|D^2v\|_{L^2(T)}$ and $\|\nabla(v-p_T)\|_{L^2(T)}\le Ch_T\|D^2v\|_{L^2(T)}$. For adjacent cells $T,T\prime$ sharing a facet $F$, the scaled trace estimate applied to $v-p_T$ and its first derivatives gives $\|p_T-p_{T\prime}\|_{L^2(F)}\le Ch_K^{3/2}\|D^2v\|_{L^2(T\cup T\prime)}$ and $|F|^{1/2}|\nabla p_T-\nabla p_{T\prime}|\le Ch_K^{1/2}\|D^2v\|_{L^2(T\cup T\prime)}$. The second bound controls the full gradient difference, and the first then controls its constant part. Normalize both cell diameters by $h_K$. Shape regularity and comparability across the shared facet bound the normalized affine maps and their inverses; there are only finitely many vertex-orderings. Their closure is a compact set of nondegenerate reference-pair configurations. Finite-dimensional norm equivalence [F5] varies continuously on this compact set, so its constants are uniform; affine scaling then gives $\|p_T-p_{T\prime}\|_{H^1(T)}\le Ch_K\|D^2v\|_{L^2(T\cup T\prime)}$. A bounded path through the connected cell-star graph lets one fixed cell polynomial $p\in P_1$ satisfy $\|v-p\|_{L^2(\omega_K)}\le Ch_K^2\|D^2v\|_{L^2(\omega_K)}$ and $\|\nabla(v-p)\|_{L^2(\omega_K)}\le Ch_K\|D^2v\|_{L^2(\omega_K)}$. This uses only local approximation and does not impose boundary values on $v$. [A1, F2, F3, F5, algebra, step 1.2]

3.1 The reference P1 basis satisfies $\|\varphi_z\|_{L^2(K)}\le Ch_K^{d/2}$ and $\|\nabla\varphi_z\|_{L^2(K)}\le Ch_K^{d/2-1}$. Since $I_h$ reproduces constants, step 2.1 bounds $\|I_hw-c_K\|_{L^2(K)}\le Ch_K\|\nabla w\|_{L^2(\omega_K)}$ and $\|\nabla I_hw\|_{L^2(K)}\le C\|\nabla w\|_{L^2(\omega_K)}$. Together with the patch Poincare bound for $w-c_K$, these prove the $L^2$ approximation and local H1 stability. Summing and using bounded overlap proves global H1-seminorm stability. [A1, F2, algebra, step 2.1]

4.1 Facet duality reproduces every affine polynomial at every vertex, so $I_hp=p$ on $K$. Apply the local H1 stability from step 3.1 to $v-p$ and use step 2.2 to get $\|\nabla(v-I_hv)\|_{L^2(K)}\le Ch_K\|D^2v\|_{L^2(\omega_K)}$. Summing over cells and using the bounded patch overlap from step 3.1 proves the global H1 approximation estimate. [A1, F1, algebra, step 3.1, step 2.2] ∎
