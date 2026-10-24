---
id: thm-pe12-l2-projector-w1p-stability
kind: theorem
title: L2 projections are uniformly W1p-stable on quasi-uniform conforming meshes
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [lem-pe12-quasiuniform-mass-inverse-decay, lem-pe12-boundary-preserving-quasi-interpolation, def-pe12-gelfand-triple, def-pe12-monotone-diffusion-flux, def-pe12-stable-conforming-fem-family, def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, thm-zero-boundary-piecewise-polynomials-in-w10p, thm-polynomial-inverse-and-discrete-trace-estimates, thm-poincare-inequality-for-w-one-p-zero, lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set, thm-holder-inequality-for-integrals, lem-pe12-w0p-separable-reflexive, lem-pe12-w1p-compact-l2-embedding, def-countable-choice, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lars Diening, Johannes Storn, and Tabea Tscherpel, On the Sobolev and Lp-Stability of the L2-Projection, arXiv:2008.01801v2"
      url: https://arxiv.org/pdf/2008.01801v2
      locator: "§2.2, Proposition 2.2, and §4.4, Theorem 4.14 with complete proof, PDF pp. 4–5 and 24–25. The paper treats its stated mesh-grading conditions; this carrier proves the global quasi-uniform branches below directly."
    - title: "Christian Clason, Introduction to Finite Element Methods, arXiv:1709.08618v2"
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 12 §12.1, PDF pp. 102–103: the finite-element L2 projection and parabolic method-of-lines context."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice and fix a degree $k\ge1$. Take a sequence of meshes
with $h\to0$ in either branch and use the
zero-boundary Lagrange spaces $V_h$ from
[[lem-pe12-quasiuniform-mass-inverse-decay]]: globally quasi-uniform,
shape-regular matching affine simplices on a bounded Lipschitz polyhedral
open set in $d\ge2$ (with the local graph-chart convention of
[[lem-pe12-boundary-preserving-quasi-interpolation]]), or interval
partitions of a nonempty bounded interval (or a finite nonempty union of
intervals with disjoint closures) in $d=1$. For $f\in L^1(\Omega)$ define
$P_hf\in V_h$ by the finite mass system
$$
\int_\Omega (P_hf)w_h=\int_\Omega fw_h\qquad(w_h\in V_h).
$$
This is well-defined, agrees on $L^2(\Omega)$ with the $L^2$-orthogonal
projection, and is the identity on $V_h$. There are constants independent
of $h$ such that
$$\|P_hf\|_{L^r(\Omega)}\le C_r\|f\|_{L^r(\Omega)}\qquad(1\le r\le\infty).$$
For every $1<p<\infty$ and $v\in W_0^{1,p}(\Omega)$,
$$\|\nabla P_hv\|_{L^p(\Omega)}\le C_p\|\nabla v\|_{L^p(\Omega)},\qquad P_hv\longrightarrow v\quad\text{in }W^{1,p}(\Omega).$$
For the PE12 application, additionally assume the Axiom of Choice and
$p>\max(1,2d/(d+2))$. The compact embedding
[[lem-pe12-w1p-compact-l2-embedding]] makes $V=W_0^{1,p}(\Omega)$ a dense
subspace of $H=L^2(\Omega)$, and
[[lem-pe12-w0p-separable-reflexive]] supplies the separable reflexive Banach
structure. Thus these spaces form the evolution triple of
[[def-pe12-monotone-diffusion-flux]] and
[[def-pe12-gelfand-triple]], and the $P_h$ above is its $H$-orthogonal
projector. Together with any time partitions whose maximum step tends to
zero it satisfies the projector clauses in
[[def-pe12-stable-conforming-fem-family]]. For every $d\ge2$, the uniform
Kuhn/Freudenthal meshes of $\Omega=(0,1)^d$, and for $d=1$ the uniform
interval meshes of $\Omega=(0,1)$, are explicit nonempty instances throughout
that full strict $p$ range. Time refinement is independent of spatial
refinement.

## Facts & Assumptions

**Given:** Countable Choice; fixed $k\ge1$; one of the two mesh branches;
and a finite mesh in its family.

[F1] The scaled mass matrix has uniform spectrum, inverse decay, absolute
row and column sums, and coefficient scaling; the one-dimensional interval
branch is part of its Statement
([[lem-pe12-quasiuniform-mass-inverse-decay]]).

[F2] The zero-boundary quasi-interpolant maps $W_0^{1,p}$ into $V_h$, is
uniformly gradient-stable, and converges strongly in $W^{1,p}$ for every
finite $p$. Its proof establishes $V_h\subset W_0^{1,p}$ directly on the
interval branch as well as the interval quasi-interpolation estimates
([[lem-pe12-boundary-preserving-quasi-interpolation]]).

[F3] On $d\ge2$ shape-regular matching simplices, degree-$k$ polynomials
satisfy the inverse estimate $\|\nabla w_h\|_{L^p(K)}\le
C h_K^{-1}\|w_h\|_{L^p(K)}$
([[thm-polynomial-inverse-and-discrete-trace-estimates]]). On an interval,
the local upper gradient and lower function coefficient bounds in [F1],
after division, give the same estimate.

[F4] The zero-boundary conforming polynomial space on a matching simplex
mesh is contained in $W_0^{1,p}$ for finite $p$
([[thm-zero-boundary-piecewise-polynomials-in-w10p]]); the interval
membership branch is proved in [F2].

[F5] $C_c^\infty(\Omega)$ is dense in $L^2(\Omega)$ for every open $\Omega$
([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]).

[F6] An admissible stable conforming FEM sequence requires finite-dimensional
$V_k\subset V$, their $H$-orthogonal projectors, uniform $V$-stability,
strong $V$-approximation, and time partitions whose maximum step tends to
zero ([[def-pe12-stable-conforming-fem-family]]).

[F7] On an open set bounded in one direction, Poincaré bounds the $L^p$
norm of a zero-boundary function by its gradient norm for finite $p$
([[thm-poincare-inequality-for-w-one-p-zero]]).

[F8] Hölder's inequality bounds each mass right-hand-side functional
$f\mapsto\int_\Omega f\phi_i$ on $L^p(\Omega)$ by
$\|f\|_p\|\phi_i\|_{p'}$
([[thm-holder-inequality-for-integrals]]).

[F9] In the strict PE12 exponent range, $W_0^{1,p}(\Omega)$ is densely,
continuously, and compactly embedded in $L^2(\Omega)$, including the interval
branch ([[lem-pe12-w1p-compact-l2-embedding]]).

[F10] For bounded open $\Omega$ and $1<p<\infty$,
$W_0^{1,p}(\Omega)$ is a separable reflexive real Banach space
([[lem-pe12-w0p-separable-reflexive]]).

[F11] Under the strict PE12 exponent and Axiom of Choice, the flux-space
definition uses $V=W_0^{1,p}(\Omega)$ with gradient norm and $H=L^2(\Omega)$;
Poincaré [F7] makes this norm equivalent to the inherited Sobolev norm,
so [F10] supplies separability and reflexivity. The compact embedding [F9]
is dense, and the evolution-triple definition fixes their real pairing
([[def-pe12-monotone-diffusion-flux]],
[[def-pe12-gelfand-triple]]).

[A1] Countable Choice is the declared background for the finite-element
Sobolev, density, and compactness interfaces used here
([[def-countable-choice]]).

[A2] The PE12 evolution-triple application assumes the Axiom of Choice
through the reflexivity, compact embedding, and flux-space interfaces
([[def-axiom-of-choice]]).

## Proof

1.1 The nodal system in [F1] has an invertible interior mass matrix whenever $V_h\ne\{0\}$; if $V_h=\{0\}$, set $P_hf=0$. For finite $r$, every basis function is bounded by a mesh-independent constant and is supported on the cells incident to its node. Hölder and the coefficient scaling in [F1] therefore give, for $b_i=h^{-d}\int_\Omega f\phi_i$, $$ |b_i|^r\le C h^{-d}\int_{\operatorname{supp}\phi_i}|f|^r, \qquad \|b\|_{\ell^r}\le Ch^{-d/r}\|f\|_{L^r(\Omega)}. $$ The second inequality follows because on each cell only the fixed number $N(d,k)$ of local basis supports occur, so their overlap is bounded. For $r=\infty$, $\|b\|_{\ell^\infty}\le C\|f\|_\infty$. [A1, F1, F8, given, algebra]

1.2 For $d=1$, the explicit meshes of $\Omega=(0,1)$ are $K_j=[j/N,(j+1)/N]$, $0\le j<N$. They meet at whole endpoints, $h_N=1/N$, each inradius is $1/(2N)$, their shape ratio is $2$, and $\theta=1$; hence $h_N\to0$. For $d\ge2$, in every grid cube $a+[0,1/N]^d$, take the $d!$ simplices with cumulative vertices $$ a,\quad a+N^{-1}e_{\pi_1},\quad a+N^{-1}(e_{\pi_1}+e_{\pi_2}),\quad\ldots,\quad a+N^{-1}\sum_{j=1}^de_j $$ for permutations $\pi$ of $\{1,\ldots,d\}$. In coordinates $t=N(x-a)$ each is $1\ge t_{\pi_1}\ge\cdots\ge t_{\pi_d}\ge0$. Sorting coordinates covers the cube and strict orderings have disjoint interiors. For a permutation $\pi$, the barycentric gaps are $g_0=1-t_{\pi_1}$, $g_j=t_{\pi_j}-t_{\pi_{j+1}}$ for $1\le j<d$, and $g_d=t_{\pi_d}$; the simplex is $g_j\ge0$, $\sum_jg_j=1$. For two permutations, every pair of coordinates ordered oppositely must be equal in their intersection. In either order chain, that equality forces every intervening coordinate equal, hence sets the corresponding consecutive barycentric gaps to zero. The resulting equality blocks have the same relative order in both permutations: otherwise a pair of blocks would be oppositely ordered and would have been merged by an inversion equality. Thus the intersection is exactly the face obtained by setting those gaps to zero, so the within-cube triangulation is matching. On a cube face, coordinates fixed to $1$ occur first and those fixed to $0$ occur last in every compatible ordering; the induced ordering of the remaining coordinates is identical from either adjacent cube. Thus the global simplices meet only in whole faces and form a matching mesh. [given, construct, algebra]

2.1 If $V_h=\{0\}$, then $P_hf=0$ and the $L^r$ bounds are immediate. Otherwise, if $c$ is the coefficient vector of $P_hf$, then $A_hc=b$. Let $D=A_h^{-1}$, and let $R,C_0$ bound its absolute row and column sums from [F1]. For $1<r<\infty$, apply [F8] on the finite counting measure to the factors $a_j^{1/r}|b_j|$ and $a_j^{1-1/r}$, where $a_j=|D_{ij}|$. This gives $\sum_ja_j|b_j|\le(\sum_ja_j|b_j|^r)^{1/r}(\sum_ja_j)^{1-1/r}$. If the row sum is zero both sides vanish. Raising to $r$ and summing the rows gives $$ \sum_i\Big|\sum_jD_{ij}b_j\Big|^r \le R^{r-1}\sum_{i,j}|D_{ij}|\,|b_j|^r \le R^{r-1}C_0\sum_j|b_j|^r. $$ For $r=1$, the triangle inequality and the column sums directly give $\sum_i|\sum_jD_{ij}b_j|\le C_0\sum_j|b_j|$, the same displayed bound. For $r=\infty$, the row-sum bound gives $\|Db\|_{\ell^\infty}\le R\|b\|_{\ell^\infty}$. Combining these coefficient estimates with [F1] proves the asserted $L^r$ bound for $P_h$. If $f\in L^2$, the mass equations are exactly orthogonality to $V_h$, so $P_h$ is the orthogonal projection and fixes every $w_h\in V_h$. [F1, F8, step 1.1, algebra]

2.2 Each cube simplex contains opposite cube corners and lies in its cube, so its diameter is $h_N=\sqrt d/N$. In row order $\pi_1,\ldots,\pi_d$, the cumulative-vertex edge matrix has columns $e_{\pi_1},e_{\pi_1}+e_{\pi_2},\ldots,\sum_{j=1}^de_{\pi_j}$ before scaling by $1/N$. Subtracting each preceding column from the next gives the permuted identity matrix, so its determinant has absolute value $N^{-d}$; the simplex volume is $1/(d!N^d)$. Its facets in ordered coordinates are $t_{\pi_1}=1$, $t_{\pi_d}=0$, and $t_{\pi_j}=t_{\pi_{j+1}}$. Put $r=1/(2+(d-1)\sqrt2)$ and set $t_{\pi_j}=r+(d-j)\sqrt2r$. The endpoint gaps are $r$ and successive coordinate gaps are $\sqrt2r$, so this point is at perpendicular distance $r$ from every facet and is the center of an inscribed ball of radius $r$. For any inscribed ball of radius $s$, its center must have endpoint gaps at least $s$ and successive coordinate gaps at least $\sqrt2s$; adding these gaps gives $1\ge2s+(d-1)\sqrt2s$. Thus the inradius is exactly $r/N$ and the shape ratio is $\sqrt d(2+(d-1)\sqrt2)$, independent of $N$, all cell diameters equal $h_N$ (global quasi-uniformity with $\theta=1$), and only the $d!$ ordered shapes occur. The cube is a bounded Lipschitz polyhedral open set. At a boundary point choose a vector $v$ with $n_j\cdot v>0$ for each active inward face normal $n_j$, and write nearby points as $z+y+sv$ with $y\perp v$. The active inequalities become $s>-n_j\cdot y/(n_j\cdot v)$; inactive face inequalities remain strict in a sufficiently small neighborhood. Thus locally the cube is the epigraph of the maximum of finitely many affine functions, which is Lipschitz. These are nonempty mesh families satisfying the $d\ge2$ hypotheses. [given, step 1.2, algebra]

3.1 Fix $1<p<\infty$ and $v\in W_0^{1,p}(\Omega)$. For sufficiently fine meshes, since $P_hQ_hv=Q_hv$, the inverse inequality in [F3] and the $L^p$ bound from step 2.1 give $$ \|\nabla P_hv\|_p \le \|\nabla Q_hv\|_p+C h^{-1}\|P_h(v-Q_hv)\|_p \le \|\nabla Q_hv\|_p+C h^{-1}\|v-Q_hv\|_p \le C_p\|\nabla v\|_p, $$ by [F2]. The inverse estimate holds on the interval branch as recorded in [F3]; on simplex meshes summing its cell estimates uses $h_K\ge\theta h$. A sequence with $h\to0$ has only finitely many coarser initial meshes. On each such mesh, $P_h$ is finite rank and its coefficient functionals $v\mapsto\int_\Omega v\phi_i$ are bounded on $L^p$; hence its $W^{1,p}$ output norm is bounded by a mesh-dependent multiple of $\|v\|_{L^p}$ by [F8]. Poincaré [F7] bounds this by a multiple of $\|\nabla v\|_p$. Enlarging $C_p$ over the finitely many initial meshes gives the stated uniform estimate. [F2, F3, F7, F8, step 2.1, algebra]

4.1 Step 2.1 and the approximation estimate of [F2] show $\|P_hv-v\|_p\le C h\|\nabla v\|_p$. For gradients, write $P_hv-v=P_h(v-Q_hv)+(Q_hv-v)$. Apply the uniform gradient bound proved in the preceding step to $v-Q_hv\in W_0^{1,p}$ and the strong approximation in [F2]; both gradient terms tend to zero. Hence $P_hv\to v$ in the full $W^{1,p}$ norm. [F2, step 2.1, step 3.1, algebra]

5.1 Let $\psi\in C_c^\infty(\Omega)$. Since $Q_h\psi\in V_h$ and $P_hQ_h\psi=Q_h\psi$, the $L^2$ bound in step 2.1 gives $$ \|P_h\psi-\psi\|_2 \le\|P_h(\psi-Q_h\psi)\|_2+\|Q_h\psi-\psi\|_2 \le(C_2+1)\|Q_h\psi-\psi\|_{W^{1,2}}\longrightarrow0 $$ by [F2]. For arbitrary $f\in L^2(\Omega)$, choose $\psi\in C_c^\infty(\Omega)$ with $\|f-\psi\|_2<\varepsilon$ using [F5]. The $L^2$ orthogonal projection is a contraction, so $$ \limsup_{h\to0}\|P_hf-f\|_2\le2\varepsilon. $$ Letting $\varepsilon\downarrow0$ proves strong $L^2$ convergence for every $f\in L^2(\Omega)$. [A1, F5, step 2.1, step 4.1, algebra]

6.1 On each explicit mesh family, $V_h\subset V$: [F4] proves this for matching simplices and the interval membership argument is part of [F2]. The preceding estimates give the $H$-orthogonal projectors, uniform $V$-stability, and strong $V$ approximation; pair the spatial index $N$ with any time partitions whose maximum steps tend to zero. The resulting family satisfies all clauses of [F6], with no coupling between spatial and time refinement. [F2, F4, F6, step 3.1, step 4.1, step 5.1, step 1.2, step 2.2, given]

7.1 In the PE12 branch, [A2], [F7], [F9], [F10], and [F11] give the evolution triple with dense continuous compact inclusion. The explicit stable families from step 6.1 therefore instantiate the stated PE12 application for every strict $p$ in the Statement. [A2, F7, F9, F10, F11, step 6.1, given] ∎

## Remarks

The drawing shows only the $d=2$, $N=1$ coordinate-order subdivision. The
blue triangle is $K_{(1,2)}=\{0\le x_2\le x_1\le1\}$, the orange triangle is
$K_{(2,1)}=\{0\le x_1\le x_2\le1\}$, and their red diagonal is the shared
whole edge $x_1=x_2$. The coordinate proof above establishes matching for
all $d$ and $N$; no proof uses visual features of this illustration.

```tikz
\definecolor{cellorange}{HTML}{FFE8D1}
\begin{tikzpicture}[scale=4,font=\large]
  \fill[blue!15] (0,0)--(1,0)--(1,1)--cycle;
  \fill[cellorange] (0,0)--(0,1)--(1,1)--cycle;
  \draw[thick] (0,0) rectangle (1,1);
  \draw[very thick,red] (0,0)--(1,1);
  \draw[->] (0,0)--(1.18,0) node[right] {$x_1$};
  \draw[->] (0,0)--(0,1.18) node[above] {$x_2$};
  \node at (0.72,0.28) {$K_{(1,2)}$};
  \node at (0.28,0.72) {$K_{(2,1)}$};
  \node[below left] at (0,0) {$(0,0)$};
  \node[below] at (1,0) {$(1,0)$};
  \node[left] at (0,1) {$(0,1)$};
  \node[above right] at (1,1) {$(1,1)$};
\end{tikzpicture}
```
