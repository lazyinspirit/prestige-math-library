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
  - lem-matching-nurbs-patch-traces-give-h1-conformity
  - cor-mean-value-theorem
  - def-sobolev-space-wkp-and-its-norm
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Tom Lyche, Carla Manni, and Hendrik Speleers, B-Splines and Spline Approximation
      url: https://www.mat.uniroma2.it/~speleers/cime2017/material/notes_lyche.pdf
      locator: "Theorem 8 and equations (49)-(50); derivative, local Taylor, tensor, and boundary estimates proved locally."
---

## Statement

On $[0,1]^d$, $d\in\{2,3\}$, choose in coordinate $r$ any finite clamped knot vector $\Xi_r=(\xi^{(r)}_i)$ of degree $p_r\ge1$, with interior multiplicity at most $p_r+1$. Let $h_r$ be its maximum positive span length, $B^{(r)}_i$ its canonical degree-$p_r$ basis, and $t^{(r)}_i=p_r^{-1}\sum_{k=1}^{p_r}\xi^{(r)}_{i+k}$ its Greville points. For $g\in C^1([0,1]^d)$ with $M_g$-Lipschitz gradient, define the actual tensor comparison spline
$$\mathcal Sg(x)=\sum_{i_1,\ldots,i_d}g(t^{(1)}_{i_1},\ldots,t^{(d)}_{i_d})\prod_{r=1}^d B^{(r)}_{i_r}(x_r).$$
Put
$$R=\left(\sum_{r=1}^d(p_r+1)^2h_r^2\right)^{1/2},\qquad E=2\sum_{r=1}^d(2p_r+3)^2h_r^2,\qquad B=E+\sqrt d\,R.$$
Then $\mathcal Sg$ is a continuous tensor spline in $H^1((0,1)^d)$, including at fully repeated knots, and
$$\|g-\mathcal Sg\|_{L^\infty}\le M_gE,\quad \|\nabla(g-\mathcal Sg)\|_{L^\infty(\mathrm{cells})}\le\sqrt d\,M_gR,\quad \|g-\mathcal Sg\|_{H^1}\le M_gB.$$
The operator restricts on a coordinate face to the same construction in the tangential coordinates applied to the face data. Thus it preserves zero face data. If two face grids/degrees agree after coordinate permutation and coordinate reflections $t\mapsto1-t$, their face operators agree under that identification and commute with multiplication of the face data by a constant. No knot-ratio bound is needed. All degree and continuity dependence is retained through the actual knots and the displayed degree factors. This comparison operator need not be idempotent.

## Facts & Assumptions

**Given:** The knots, degrees, positive span maxima, tensor box, $C^{1,1}$ numerator, and explicit finite formula in the Statement.

[F1] [[def-b-spline-space-and-basis]] and [[thm-spline-polynomial-reproduction]] supply B-spline support, nonnegativity, partition of unity, the Greville coefficient identity, and the cell derivative formula.

[F2] [[cor-mean-value-theorem]]: a function continuous on a closed interval and differentiable on its interior has an interior point where its derivative equals the endpoint difference quotient.

[F3] [[lem-matching-nurbs-patch-traces-give-h1-conformity]] gives weak H1 membership from piecewise C1 functions with matching values and square-integrable cell gradients, in particular for the finite Cartesian cell partition of the unit box.

[F4] [[def-sobolev-space-wkp-and-its-norm]] defines the full $H^1$ norm by the $L^2$ norm of the function and its first weak derivatives.

## Proof

1.1 The $k=1$ polynomial coefficient formula in [F1] is $x=\sum_i t_iB_i(x)$, while $\sum_iB_i=1$, so $S_rf:=\sum_if(t_i)B_i$ reproduces every affine function. On a cell $(\xi_m,\xi_{m+1})$, all active Greville points lie in $J_m=[\xi_{m-p},\xi_{m+p+1}]\cap[0,1]$, made from at most $2p+1$ nonempty adjacent spans. Nonnegativity and partition of unity give $|S_rf(x)|\le\|f\|_{L^\infty(J_m)}$ for $x$ in that cell. For a $C^1$ section $f$ with $M_g$-Lipschitz derivative, set $T(x)=f(c)+f'(c)(x-c)$ at the left endpoint $c$ of $J_m$. If $y=c$, then $(f-T)(y)=0$; if $y\ne c$, apply [F2] to $f-T$ on the interval with endpoints $c,y$. At the resulting interior point $\zeta$, $|(f-T)(y)|=|f'(\zeta)-f'(c)|\,|y-c|\le M_g|J_m|^2$. At $x\in(\xi_m,\xi_{m+1})$, nonnegativity and partition of unity give $|S_r(f-T)(x)|\le M_g|J_m|^2$. Since $S_rT=T$, $|f(x)-S_rf(x)|\le2M_g|J_m|^2\le2(2p_r+3)^2h_r^2M_g$. Thus each coordinate operator is a sup-norm contraction; the finite operators commute, so the telescoping identity for $I-S_d\cdots S_1$, commutation of different-coordinate operators, and contraction of each $S_r$ let us sum these bounds on the original $g$ and prove the function estimate with $E$. [F1, F2, given, algebra]

1.2 For one coordinate write $c_i$ for its coefficient, keeping all other Greville samples fixed. Summation of the derivative formula from [F1] gives, on open cells,
$$\left(\sum_ic_iB_{i,p}\right)'=\sum_{\substack{2\le i\le n\\\xi_{i+p}>\xi_i}}\frac{p(c_i-c_{i-1})}{\xi_{i+p}-\xi_i}B_{i,p-1}.$$
Here the nonempty-support lower-degree functions $B_{i,p-1}$, $2\le i\le n$, form a nonnegative partition on each open cell; the two omitted boundary functions vanish there. Terms with $\xi_{i+p}=\xi_i$ are omitted because their lower-degree splines have empty support, so no undefined $0/0$ coefficient is used. Put $\Delta_i=t_i-t_{i-1}=(\xi_{i+p}-\xi_i)/p$. For every included term $\Delta_i>0$, apply [F2] to the coordinate section of $g$ on $[t_{i-1},t_i]$: its derivative quotient $(c_i-c_{i-1})/\Delta_i$ equals $\partial_rg$ at some point between the two Greville samples, with all other coordinates fixed at their samples. If $\Delta_i=0$, then $c_i=c_{i-1}$ and the corresponding lower-degree spline has empty support, so its contribution to the derivative is absent. At a cell point $x$ in the support of an included lower-degree factor, both Greville endpoints lie in $[\xi_i,\xi_{i+p}]$, within $p_rh_r$ of $x_r$; the intermediate point lies there as well. In every other active coordinate, the sample and $x_s$ lie in a common degree-$p_s$ support of length at most $(p_s+1)h_s$. Therefore each gradient value in the nonnegative partition sum is evaluated within distance $R$ of $x$. The $M_g$-Lipschitz gradient yields $|\partial_r\mathcal Sg(x)-\partial_rg(x)|\le M_gR$. Summing squared component bounds proves the gradient estimate. [F1, F2, given, algebra]

2.1 At an interior knot of multiplicity at most $p$, continuity follows from [F1]. At a knot of multiplicity $p+1$, the left and right pieces are clamped there; the only nonzero endpoint coefficient from each side has Greville point equal to that knot. Their face restrictions are therefore the same tangential sampled sum, so they agree; repeating this argument in each coordinate also gives agreement at intersections of repeated-knot faces. Thus the tensor construction is continuous on the closed box. Its piecewise polynomial gradients are bounded on the finite Cartesian grid, whose rectangular cells form a matching cell partition under the identity map. Applying [F3] proves H1 membership and identifies the cell gradients as weak derivatives. The unit box has volume one, so the $L^2$ errors are bounded by the displayed sup bounds. By [F4], $\|g-\mathcal Sg\|_{H^1}=\sqrt{\|g-\mathcal Sg\|_2^2+\|\nabla(g-\mathcal Sg)\|_2^2}\le M_g\sqrt{E^2+dR^2}\le M_g(E+\sqrt d R)$. [F1, F3, F4, step 1.1, step 1.2, algebra]

3.1 At an exterior endpoint of a clamped vector, only its first, respectively last, basis function has value one; the rest are zero. The corresponding Greville point is that endpoint. Substitution into the tensor formula gives exactly the asserted tangential face formula and zero-face preservation. Reflection reverses the knot list and sends each Greville point to $1-t_i$. On open knot cells it reverses the indexed basis functions by the Cox–de Boor recurrence in [F1], starting with the interval indicators. At a fully repeated knot the individual right-cell conventions need not commute with reflection, but the constructed sampled sum is continuous by step 2.1, so equality of the reflected sums on open cells extends to every knot and endpoint. Permuting coordinates merely permutes finite product factors. Consequently aligned face formulas agree under all declared identifications. Constant multiplication commutes with their finite linear sums. [F1, step 2.1, given, algebra] ∎

