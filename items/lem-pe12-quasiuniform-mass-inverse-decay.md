---
id: lem-pe12-quasiuniform-mass-inverse-decay
kind: lemma
title: Quasi-uniform finite-element mass inverses have summable graph decay
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-matching-affine-simplicial-meshes, def-broken-and-conforming-polynomial-spaces, lem-reference-polynomial-norm-equivalence, lem-shape-regular-affine-simplex-scaling, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, def-countable-choice, thm-lebesgue-measure-of-a-box-of-every-kind, def-measure, prop-measure-monotonicity]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lars Diening, Johannes Storn, and Tabea Tscherpel, On the Sobolev and Lp-Stability of the L2-Projection, arXiv:2008.01801v2"
      url: https://arxiv.org/pdf/2008.01801v2
      locator: "§2.2, Lemma 2.1 and Proposition 2.2, PDF pp. 4–5: locality and graph-distance decay for the L2 projection. The present proof gives a separate entrywise Neumann-series argument under global quasi-uniformity."
    - title: "Christian Clason, Introduction to Finite Element Methods, arXiv:1709.08618v2"
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 12 §12.1, PDF pp. 102–103: nodal finite-element spaces and the L2 projection used in the parabolic Galerkin setting."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. Fix a degree $k\ge1$. The mesh contract has two
branches. In dimensions $d\ge2$, let $\Omega\subset\mathbb R^d$ be a bounded
polyhedral open set and let $\mathcal T_h$ be finite matching affine
simplex meshes as in [[def-matching-affine-simplicial-meshes]], with
$h=\max_{K\in\mathcal T_h}\operatorname{diam}K$, $h\to0$,
$\operatorname{diam}K\le h$, $\operatorname{diam}K\ge\theta h$, and
$\operatorname{diam}K/\rho_K\le\sigma$ for constants $\theta>0$ and
$\sigma<\infty$ independent of $h$. In dimension $d=1$, let $\Omega$ be a
bounded interval or a finite union of bounded intervals with pairwise
disjoint closures, and let $\mathcal T_h$ be finite interval partitions of
the component closures meeting only at whole endpoints, with interval lengths
between $\theta h$ and $h$ and $h\to0$.

For each mesh, place the degree-$k$ barycentric Lagrange nodes on every
$d\ge2$ simplex, or the $k+1$ equally spaced Lagrange nodes on every
$d=1$ interval, identify coincident nodes of matching cells, and impose zero
coefficients at every node on $\partial\Omega$. Let $V_h$ be the resulting
scalar continuous piecewise-$\mathbb P_k$ space. If $z_i$ are its interior
nodes, $\phi_i$ the global nodal basis, and
$$
M_{ij}=\int_\Omega\phi_i\phi_j,\qquad A_h=h^{-d}M,
$$
join distinct nodes when they occur in one cell and write $\delta_h(i,j)$ for
the shortest path length in this graph (with $\delta_h(i,j)=\infty$ when
there is no path, and use $q^\infty=0$). Whenever $V_h\ne\{0\}$, there are
$a,b,C>0$ and
$q\in(0,1)$, independent of the mesh, such that
$$\operatorname{spec}(A_h)\subset[a,b],\qquad |(A_h^{-1})_{ij}|\le Cq^{\delta_h(i,j)},\qquad \sup_i\sum_j|(A_h^{-1})_{ij}|+\sup_j\sum_i|(A_h^{-1})_{ij}|\le C.$$
For every cell $K$ and $1\le r<\infty$, if $c_K$ are its local nodal
coefficients and $w_h=\sum_{i\in I(K)}c_i\phi_i$ on $K$, then
$$c_r h_K^{d/r}\|c_K\|_{\ell^r}\le\|w_h\|_{L^r(K)}\le C_r h_K^{d/r}\|c_K\|_{\ell^r},\qquad \|\nabla w_h\|_{L^r(K)}\le C_rh_K^{d/r-1}\|c_K\|_{\ell^r}.$$
At $r=\infty$, omit $h_K^{d/r}$ in the function estimate and replace the
gradient bound by
$\|\nabla w_h\|_{L^\infty(K)}\le Ch_K^{-1}\|c_K\|_{\ell^\infty}$.
Summing gives, for all global nodal coefficients including zero boundary
coefficients,
$$c_r h^{d/r}\|c\|_{\ell^r}\le\Big\|\sum_i c_i\phi_i\Big\|_{L^r(\Omega)}\le C_r h^{d/r}\|c\|_{\ell^r}.$$
with the factor $h^{d/r}$ omitted at $r=\infty$. The empty interior-node
case is interpreted as $V_h=\{0\}$ and has no mass matrix to invert.

## Facts & Assumptions

**Given:** Countable Choice; one of the two stated mesh branches; a fixed $k\ge1$; and the scalar continuous degree-$k$ nodal space with zero boundary coefficients.

[F1] For $d\ge2$, a matching affine simplicial mesh consists of finitely many closed nondegenerate simplices with disjoint interiors whose union is $\overline\Omega$ and whose pairwise intersections are whole faces ([[def-matching-affine-simplicial-meshes]]). The $d=1$ interval-partition branch is defined explicitly in this Statement and does not use that $d\ge2$ definition.

[F2] On a fixed reference simplex, polynomial $L^r$ norms, derivative seminorms, facet norms, and every linear nodal functional are controlled by finite-dimensional norm equivalence ([[lem-reference-polynomial-norm-equivalence]]). The affine maps of a shape-regular simplex scale cell volume like $h_K^d$ and derivatives like $h_K^{-1}$ ([[lem-shape-regular-affine-simplex-scaling]]).

[F3] A real symmetric endomorphism on a finite-dimensional real inner-product space has an orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[F4] Axis-parallel boxes with real endpoints have Lebesgue measure equal to the product of their side lengths; measures are additive on finite disjoint families and monotone ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[def-measure]], [[prop-measure-monotonicity]]).

[A1] Countable Choice is used through the Sobolev and finite-dimensional norm interfaces in [F2], and the box-measure result in [F4] ([[def-countable-choice]]).

## Proof

1.1 On a $d\ge2$ reference simplex with barycentric coordinates $\lambda_0,\ldots,\lambda_d$, take the nodes $(\alpha_0/k,\ldots,\alpha_d/k)$ for nonnegative integers $\alpha_j$ with $\sum_j\alpha_j=k$. They are unisolvent for $\mathbb P_k$. Indeed, use induction on $d+k$, with the zero-dimensional constant case and the degree-one vertex case as bases. For $k\ge2$, restriction to the face $\lambda_0=0$ vanishes identically by the dimension induction, so the polynomial is $\lambda_0 R$ with $\deg R\le k-1$. At nodes with $\alpha_0\ge1$, the affine change $\lambda_0=(1+(k-1)\mu_0)/k$ and $\lambda_j=(k-1)\mu_j/k$ for $j\ge1$ identifies the remaining nodes with the degree-$(k-1)$ barycentric lattice. The induction makes $R$ vanish at every node of that lattice, hence $R=0$. The number of barycentric nodes is $\binom{k+d}{d}$ by placing $d$ separators among $k$ stars; this equals the number of degree-at-most-$k$ monomials in $d$ variables, so it is $\dim\mathbb P_k$ and the unisolvent values define a basis. In $d=1$, the equally spaced $k+1$ nodes are unisolvent because a nonzero degree-$k$ polynomial has at most $k$ roots. On a shared face the two cells have the same face nodes; unisolvence of the face restriction makes their polynomial traces agree when the shared nodal values agree. The same face-node unisolvence shows that zero nodal coefficients on a boundary facet give its zero polynomial trace; in $d=1$ the boundary facets are the zero-valued endpoints. Unisolvence also means that local nodal interpolation reproduces every polynomial in $\mathbb P_k$, so the local basis sums to one and reproduces affine polynomials. Thus the constructed nodal functions are conforming and have the declared zero boundary values. [F1, given, algebra]

1.2 If $\delta_h(i,j)\le m$, a path of $m$ common-cell links gives $|z_i-z_j|\le mh$. Any cell containing such a node lies in $B(z_i,(m+1)h)$. In $d\ge2$, quasi-uniformity and shape regularity give $\rho_K\ge\theta h/\sigma$; each cell therefore contains an axis-parallel open cube of side $2\theta h/(\sigma\sqrt d)$ inside an inscribed ball. These cubes are disjoint and lie in the box $(z_i-(m+2)h,z_i+(m+2)h)^d$. By [F4], each has measure at least $(2\theta h/(\sigma\sqrt d))^d$ and the outer box has measure $(2(m+2)h)^d$, so additivity and monotonicity bound the number of such cells by $C(m+1)^d$. In $d=1$, the intervals lie in an interval of length $2(m+1)h$ and have lengths at least $\theta h$, giving the same cell bound. Each cell contains a fixed number $N(d,k)$ of nodes, hence $$\#\{j:\delta_h(i,j)\le m\}\le C(d,k)(m+1)^d.$$ The same packing bound shows that the number of cells incident to any fixed node is uniformly bounded, since all such cells lie in $B(z_i,h)$. [F1, F2, F4, given, algebra]

2.1 On each reference cell, [F2] bounds the $L^r$ norm above and below by the $\ell^r$ norm of the finitely many nodal coefficients; it also bounds the reference gradient norm above by that coefficient norm. Affine scaling then gives, for $1\le r<\infty$, $$ \Big\|\sum_{i\in I(K)}c_i\phi_i\Big\|_{L^r(K)}^r\asymp h_K^d\sum_{i\in I(K)}|c_i|^r, \qquad \Big\|\nabla\sum_{i\in I(K)}c_i\phi_i\Big\|_{L^r(K)} \le C h_K^{d/r-1}\|c\|_{\ell^r(I(K))}. $$ For $r=\infty$ replace the first factor $h_K^{d/r}$ by $1$. The same statements follow on an interval from $x=a+h_K t$ and the fixed one-dimensional nodal basis. Since $\theta h\le h_K\le h$, all cell scales are uniform in $h$. [A1, F2, step 1.1, given, algebra]

3.1 For finite $r$, sum the local $L^r$ equivalence in step 2.1 over all cells. Each cell contains a fixed number $N(d,k)$ of nodes, and each global node is incident to uniformly many cells by the packing bound in step 1.2 (in $d=1$ at most two intervals meet at a node). Thus each global coefficient occurs between one and a uniformly bounded number of times, giving the asserted global lower and upper $\ell^r$ scaling. Taking maxima of local polynomial norm equivalences gives the $r=\infty$ scaling. [step 1.2, step 2.1, given, algebra]

4.1 The interior-node mass matrix is symmetric positive definite because $c^TMc=\|\sum_i c_i\phi_i\|_{L^2(\Omega)}^2$, which is positive for every nonzero coefficient vector by the lower scaling in step 3.1. Taking $r=2$ there shows $a\|c\|_2^2\le c^TA_hc\le b\|c\|_2^2$ for positive constants independent of the mesh. [step 3.1, given, algebra]

5.1 Put $\beta=2b$ and $B=I-A_h/\beta$. By step 4.1 and [F3], $\|B\|_{2\to2}\le q:=1-a/(2b)<1$. The matrix $A_h$ has zero $ij$ entry unless $i=j$ or $i,j$ occur in a common cell. Consequently $(B^n)_{ij}=0$ for $n<\delta_h(i,j)$, since a nonzero product of $n$ entries would give a graph path of length at most $n$. The norm-convergent Neumann series gives $$ A_h^{-1}=\beta^{-1}\sum_{n=0}^\infty B^n, \qquad |(A_h^{-1})_{ij}|\le\beta^{-1}\sum_{n\ge\delta_h(i,j)}q^n =\frac{q^{\delta_h(i,j)}}{\beta(1-q)}. $$ If $\delta_h(i,j)=\infty$, every summand is zero and the inverse entry is zero. [F3, step 4.1, given, algebra]

6.1 Grouping the entry bound of step 5.1 by graph distance and applying the ball count of step 1.2 gives each absolute row sum at most $C\sum_{m\ge0}(m+1)^d q^m<\infty$; the series converges by the ratio test because its term ratio tends to $q<1$. Symmetry of $A_h^{-1}$ gives the same column bound. These constants do not depend on the number of cells. [step 1.2, step 5.1, algebra] ∎
