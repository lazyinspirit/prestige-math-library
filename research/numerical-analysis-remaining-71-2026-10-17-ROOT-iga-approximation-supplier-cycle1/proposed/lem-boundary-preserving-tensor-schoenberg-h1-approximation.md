---
id: lem-boundary-preserving-tensor-schoenberg-h1-approximation
kind: lemma
title: Greville comparison splines preserve faces and give an explicit H1 estimate
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-b-spline-space-and-basis
  - thm-spline-polynomial-reproduction
  - def-local-spline-quasi-interpolant
  - thm-sobolev-spline-quasi-interpolant-rate
  - lem-matching-nurbs-patch-traces-give-h1-conformity
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Tom Lyche, Carla Manni, and Hendrik Speleers, B-Splines and Spline Approximation
      url: https://www.mat.uniroma2.it/~speleers/cime2017/material/notes_lyche.pdf
      locator: "Theorem 8, equations (49)-(50), Theorem 32 and Example 33; derivative and tensor estimates proved locally."
---

## Statement

Assume the Axiom of Choice. On $[0,1]^d$, $d\in\{2,3\}$, choose in coordinate $r$ any finite clamped knot vector $\Xi_r=(\xi^{(r)}_i)$ of degree $p_r\ge1$, with interior multiplicity at most $p_r+1$. Let $h_r$ be its maximum positive span length, $B^{(r)}_i$ its canonical degree-$p_r$ basis, and $t^{(r)}_i=p_r^{-1}\sum_{k=1}^{p_r}\xi^{(r)}_{i+k}$ its Greville points. For $g\in C^1([0,1]^d)$ with $M_g$-Lipschitz gradient, define the actual tensor comparison spline
$$\mathcal Sg(x)=\sum_{i_1,\ldots,i_d}g(t^{(1)}_{i_1},\ldots,t^{(d)}_{i_d})\prod_{r=1}^d B^{(r)}_{i_r}(x_r).$$
Put
$$R=\left(\sum_{r=1}^d(p_r+1)^2h_r^2\right)^{1/2},\qquad E=2\sum_{r=1}^d(2p_r+3)^2h_r^2,\qquad B=E+\sqrt d\,R.$$
Then $\mathcal Sg$ is a continuous tensor spline in $H^1((0,1)^d)$, including at fully repeated knots, and
$$\|g-\mathcal Sg\|_{L^\infty}\le M_gE,\quad \|\nabla(g-\mathcal Sg)\|_{L^\infty(\mathrm{cells})}\le\sqrt d\,M_gR,\quad \|g-\mathcal Sg\|_{H^1}\le M_gB.$$
The operator restricts on a coordinate face to the same construction in the tangential coordinates applied to the face data. Thus it preserves zero face data. If two face grids/degrees agree after coordinate permutation and coordinate reflections $t\mapsto1-t$, their face operators agree under that identification and commute with multiplication of the face data by a constant. No knot-ratio bound is needed. All degree and continuity dependence is retained through the actual knots and the displayed degree factors. This comparison operator need not be idempotent.

## Facts & Assumptions

**Given:** The knots, degrees, positive span maxima, tensor box, $C^{1,1}$ numerator, and explicit finite formula in the Statement.

[A1] [[def-axiom-of-choice]] is used by the imported one-dimensional Sobolev approximation theorem; its weaker Countable Choice consequences also suffice for the conformity supplier.

[F1] [[def-b-spline-space-and-basis]] and [[thm-spline-polynomial-reproduction]] supply support, positivity, partition, the polynomial representation and the cell derivative formula proved in that theorem's steps 3.1–3.2.

[F2] [[def-local-spline-quasi-interpolant]] and [[thm-sobolev-spline-quasi-interpolant-rate]] give, under AC, the univariate $q=\infty$, $l=1$ bound $2M^2h^2\|f''\|_\infty$ when the local stability constant is one and the neighborhood/overlap bound is $M$.

[F3] [[lem-matching-nurbs-patch-traces-give-h1-conformity]] gives weak H1 membership from piecewise C1 functions with matching values and square-integrable cell gradients, in particular for the finite Cartesian cell partition of the unit box.

## Proof

1.1 The $k=1$ polynomial coefficient formula in [F1] is $x=\sum_i t_iB_i(x)$, while $\sum_iB_i=1$. A univariate Greville operator $S_rf=\sum_if(t_i)B_i$ therefore reproduces affine functions and is a sup-norm contraction. On cell $(\xi_m,\xi_{m+1})$, its sampled points belong to $J_m=[\xi_{m-p},\xi_{m+p+1}]\cap[0,1]$. This is made from at most $2p+1$ indexed spans, and each point is in at most $2p+3$ such nonempty-cell neighborhoods, even counting endpoints. Local sup stability is one; agreement almost everywhere of continuous inputs on $J_m$ implies equality at all its sampled points by continuity. Thus [F2] applies with $M=2p+3$. A $C^{1,1}$ section has absolutely continuous first derivative with second derivative bounded by $M_g$, and hence $\|(I-S_r)g\|_\infty\le2(2p_r+3)^2h_r^2M_g$ sectionwise. Finite sums in distinct coordinates commute, and each is a sup contraction; telescoping $I-S_d\cdots S_1$ and summing these bounds proves the function estimate with $E$. [A1, F1, F2, given, algebra]

2.1 For one coordinate write $c_i$ for its coefficient, keeping all other Greville samples fixed. Summation of the derivative formula from [F1] gives, on open cells,
$$\left(\sum_ic_iB_{i,p}\right)'=\sum_{i=2}^{n}\frac{p(c_i-c_{i-1})}{\xi_{i+p}-\xi_i}B_{i,p-1}.$$
Here the nonempty-support lower-degree functions $B_{i,p-1}$, $2\le i\le n$, form a nonnegative partition on each open cell; the two omitted boundary functions vanish there. Put $\Delta_i=t_i-t_{i-1}=(\xi_{i+p}-\xi_i)/p$. If $\Delta_i>0$, the coefficient in this display is the average of $\partial_rg$ over the segment between the two adjacent Greville points, with all other coordinates fixed at their Greville samples. If $\Delta_i=0$, $c_i=c_{i-1}$, and the corresponding lower-degree spline has empty support; its term is zero. At a cell point $x$ in the support of this lower-degree factor, both ends of that segment lie in $[\xi_i,\xi_{i+p}]$, within $p_rh_r$ of $x_r$. In every other active coordinate, the sample and $x_s$ lie in a common degree-$p_s$ support of length at most $(p_s+1)h_s$. Therefore every gradient value in this convex average is evaluated within distance $R$ of $x$. The $M_g$-Lipschitz gradient yields $|\partial_r\mathcal Sg(x)-\partial_rg(x)|\le M_gR$. Summing squared component bounds proves the gradient estimate. [F1, given, algebra]

3.1 At an interior knot of multiplicity at most $p$, continuity follows from [F1]. At a knot of multiplicity $p+1$, the left and right pieces are clamped there; the only nonzero endpoint coefficient from each side has Greville point equal to that knot. The corresponding sampled values are equal. Thus the univariate construction is continuous even there, and finite tensor sums retain continuity. Its piecewise polynomial gradients are bounded on the finite grid, so [F3] proves H1 membership and identifies these as its weak derivatives. The unit box has volume one; its L2 function and gradient errors are bounded by their sup bounds. The triangle inequality for the full H1 norm gives $M_g(E+\sqrt d R)$. [F1, F3, step 1.1, step 2.1, algebra]

4.1 At an exterior endpoint of a clamped vector, only its first, respectively last, basis function has value one; the rest are zero. The corresponding Greville point is that endpoint. Substitution into the tensor formula gives exactly the asserted tangential face formula and zero-face preservation. Reflection reverses the knot list and sends each Greville point to $1-t_i$. On open knot cells it reverses the indexed basis functions by the Cox–de Boor recurrence in [F1], starting with the interval indicators. At a fully repeated knot the individual right-cell conventions need not commute with reflection, but the constructed sampled sum is continuous by step 3.1, so equality of the reflected sums on open cells extends to every knot and endpoint. Permuting coordinates merely permutes finite product factors. Consequently aligned face formulas agree under all declared identifications. Constant multiplication commutes with their finite linear sums. [F1, step 3.1, given, algebra] ∎
