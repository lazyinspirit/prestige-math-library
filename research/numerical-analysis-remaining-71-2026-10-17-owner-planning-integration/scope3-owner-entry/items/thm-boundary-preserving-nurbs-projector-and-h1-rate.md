---
id: thm-boundary-preserving-nurbs-projector-and-h1-rate
kind: theorem
title: Boundary-preserving NURBS projection and matching-patch energy approximation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - def-isogeometric-galerkin-patch-space-and-refinement
  - def-nurbs-patch-map-and-rational-spline-space
  - lem-boundary-preserving-tensor-schoenberg-h1-approximation
  - thm-nurbs-quotient-best-approximation-transfer
  - lem-matching-nurbs-patch-traces-give-h1-conformity
  - lem-compactly-supported-h1-belongs-to-h-zero
  - lem-w-one-two-is-a-hilbert-space
  - thm-cea-quasi-optimality-for-conforming-galerkin-approximations
  - thm-isogeometric-poisson-galerkin-quasioptimality
  - thm-isogeometric-elasticity-galerkin-quasioptimality
  - thm-isogeometric-perturbed-geometry-quadrature-strang-bound
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures
  - thm-dominated-convergence
  - def-bounded-piecewise-c-one-euclidean-domain
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-heine-borel-rn
  - def-rationals
  - lem-q-and-irrationals-dense-r
  - thm-rationals-countable
  - thm-product-of-countable
  - prop-the-image-of-a-lower-dimensional-c1-manifold-is-null
  - def-countable-choice
  - thm-cauchy-schwarz-in-an-inner-product-space
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
      locator: "Theorem 8, Greville identities (49)-(50), Theorem 32 and Example 33; the rational, boundary and multipatch arguments are local."
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 26, Basic error analysis
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap26.pdf
---

## Statement

Assume Countable Choice. Let $D\subset\mathbb R^d$, $d\in\{2,3\}$, be a nonempty bounded connected Lipschitz domain with a finite face-to-face admissible NURBS patch partition as in [[def-isogeometric-galerkin-patch-space-and-refinement]]. Let $V_h\subset H^1_0(D)$ be its full finite rational trial space with matching physical traces and homogeneous Dirichlet boundary condition. For any such finite space, including the zero space, there is a linear projector $\Pi_h:H^1_0(D)\to V_h$ specified by
$$\int_D\bigl(\Pi_hu\,v_h+\nabla\Pi_hu\cdot\nabla v_h\bigr)=\int_D\bigl(u v_h+\nabla u\cdot\nabla v_h\bigr)\qquad(v_h\in V_h).$$
It fixes every $v_h\in V_h$, satisfies $\Pi_h^2=\Pi_h$, preserves the homogeneous boundary condition for every $H^1_0$ input, and
$$\|\Pi_hu\|_{H^1(D)}\le\|u\|_{H^1(D)},\qquad \|u-\Pi_hu\|_{H^1(D)}\le\inf_{v_h\in V_h}\|u-v_h\|_{H^1(D)}.$$
This is a global variational projector, defined without point evaluation of $H^1$ inputs.

For the following actual approximation estimate, on patch $a$ let $F_a$ have determinant upper bound $j_{+,a}$ and inverse/forward derivative bound $L_a$, and let its fixed continuous positive geometry denominator satisfy $W_a\ge w_{-,a}>0$ and $\|\nabla W_a\|_{L^\infty(\mathrm{cells})}\le G_a$. Choose any tensor clamped analysis knots of degrees $p_{a,r}\ge1$, maximum spans $h_{a,r}$, interior multiplicities at most $p_{a,r}+1$, whose numerator space contains the geometry numerator/denominator after any exact re-representation. Use $R_a,E_a,B_a$ from [[lem-boundary-preserving-tensor-schoenberg-h1-approximation]] for these actual knots.

For each shared face, require its parameter identification to be a permutation and reflections of tangential coordinates, its tangential degrees and knot vectors to agree under that identification, and
$$W_a|_f=c_{ab}\,W_b|_{f'}\circ T_{ab}\quad\text{for a specified constant }c_{ab}>0.$$
These are explicit sufficient compatibility data for the approximation branch, checked on finite face representations; a single patch needs none. For $u\in H^1_0(D)$ require $g_a:=W_a(u\circ F_a)$ to have a $C^1$ representative on the closed reference box with $M_a$-Lipschitz gradient, to vanish on every exterior face, and to satisfy $g_a|_f=c_{ab}g_b|_{f'}\circ T_{ab}$ on each shared face. These pointwise conditions concern only this smooth approximation class. Define
$$C_a=\sqrt{j_{+,a}}\sqrt{1+L_a^2}\left(\frac2{w_{-,a}}+\frac{G_a}{w_{-,a}^2}\right),\qquad \varepsilon_h=\left(\sum_a C_a^2 M_a^2B_a^2\right)^{1/2}.$$
Then the explicitly constructed $v_h|_{F_a((0,1)^d)}=(\mathcal S_ag_a/W_a)\circ F_a^{-1}$ belongs to $V_h$ and
$$\|u-\Pi_hu\|_{H^1(D)}\le\|u-v_h\|_{H^1(D)}\le\varepsilon_h.$$
For fixed bounded degrees and uniform map/weight/numerator bounds this is an $O(\max_{a,r}h_{a,r})$ H1 estimate on arbitrary graded meshes, including simple-knot maximal-continuity families. If degrees vary with refinement, retain the actual $B_a$; convergence follows whenever the displayed $\varepsilon_h$ tends to zero. This does not assert an optimal $h^{p}$ rate or a degree-independent constant.

Under the exact scalar elliptic data of [[thm-isogeometric-poisson-galerkin-quasioptimality]], its Galerkin solution obeys $\|u-u_h\|_{\nabla}\le(\beta/\alpha)\varepsilon_h$. Componentwise the same construction applies to finite-Lamé elasticity: if $M_{a,q}$ bounds the gradient Lipschitz constant of component numerator $q$, replace $M_a^2$ by $\sum_qM_{a,q}^2$ in $\varepsilon_h^2$ and obtain $\|u-u_h\|_{\nabla}\le(2\mu_1+d\lambda)\mu_0^{-1}\varepsilon_h$ under that supplier's full data.

For the single-patch reference-domain problem in [[thm-isogeometric-perturbed-geometry-quadrature-strang-bound]], assume $g=Wu$ satisfies the same $C^{1,1}$ and zero-boundary conditions above. Apply the construction with the reference-domain projector $\Pi_h$ and put $\widehat\varepsilon_h=(2/w_-+G/w_-^2)M_gB$. Then its original defects and constants give
$$\|u-u_h\|_{\nabla}\le(1+M_F/\alpha_h)\widehat\varepsilon_h+\alpha_h^{-1}\bigl(\delta_{\rm geom}(\Pi_hu)+\delta_{\rm quad}(\Pi_hu)+\delta_{\rm load}\bigr).$$
In particular its existing geometry bound gives $\delta_{\rm geom}(\Pi_hu)\le(dM^{d+1}+2M^{d+3})\|DF-DG\|_\infty\|u\|_{H^1}$; discrete coercivity, load error and quadrature error remain separate hypotheses/terms.

## Facts & Assumptions

**Given:** The precise finite patch geometry, positive denominator bounds, rational trial space and, for approximation, the clamped knots, face compatibility and $C^{1,1}$ numerators in the Statement.

[A1] [[def-countable-choice]] is the exact choice hypothesis used by the Hilbert, Céa, pullback, integration, PE19, Strang and null-face suppliers below. The local Greville construction uses only finite sums and the mean-value theorem; no stronger choice principle is assumed.

[F1] [[def-isogeometric-galerkin-patch-space-and-refinement]] gives the finite conforming rational trial space. [[lem-w-one-two-is-a-hilbert-space]] gives the Hilbert structure of $H^1_0(D)$ in its full H1 norm.

[F2] [[thm-cea-quasi-optimality-for-conforming-galerkin-approximations]] gives continuous/discrete solvability and the $M/\alpha$ error bound for every finite conforming subspace of a Hilbert space.

[F3] [[lem-boundary-preserving-tensor-schoenberg-h1-approximation]] constructs $\mathcal S_a$ and proves its actual H1 error $M_aB_a$, zero-face preservation and compatibility under the specified face identifications.

[F4] [[thm-nurbs-quotient-best-approximation-transfer]], under Countable Choice and a continuous positive denominator, gives $\|u-v_h\|_{H^1(D_a)}\le C_a\|g_a-s_a\|_{H^1((0,1)^d)}$ for any specified continuous, cellwise C1 numerator comparison. Its proof also gives the reference quotient bound $2/w_-+G/w_-^2$ before mapping.

[F5] [[lem-matching-nurbs-patch-traces-give-h1-conformity]] supplies global H1 membership for matching cell/patch values. [[lem-compactly-supported-h1-belongs-to-h-zero]] gives H1_0 membership for a compactly supported H1 function on any open set. [[def-bounded-piecewise-c-one-euclidean-domain]] and [[def-nurbs-patch-map-and-rational-spline-space]] specify the finite cell/facet presentation and the cellwise C1 NURBS maps.

[F6] [[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]] identifies the Euclidean measure with the completed product; [[thm-tonelli-and-fubini-for-completed-product-measures]] applies to nonnegative measurable functions on the completed product; [[thm-dominated-convergence]] applies to measurable functions with an integrable majorant.

[F7] [[thm-isogeometric-poisson-galerkin-quasioptimality]] gives $\beta/\alpha$ times best gradient approximation under its scalar elliptic data. [[thm-isogeometric-elasticity-galerkin-quasioptimality]] gives $(2\mu_1+d\lambda)/\mu_0$ under its finite-Lamé displacement data.

[F8] [[thm-isogeometric-perturbed-geometry-quadrature-strang-bound]] supplies its exact reference-domain infimum estimate and the geometry-defect bound in the Statement, under all of its map, load, boundedness and discrete-coercivity hypotheses.

[F9] [[thm-heine-borel-rn]] makes the closed bounded set $\overline D$ compact. [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]] gives $|D|<\infty$, as needed for the $L^2$ truncation limit.

[F10] [[def-rationals]] and [[lem-q-and-irrationals-dense-r]] give rational endpoints in every open interval. [[thm-rationals-countable]] and [[thm-product-of-countable]] make the rational intervals and boxes used below countable.

[F11] [[prop-the-image-of-a-lower-dimensional-c1-manifold-is-null]]: under Countable Choice, the image in $\mathbb R^d$ of a $C^1$ map from a lower-dimensional manifold is Lebesgue null.

[F12] [[thm-cauchy-schwarz-in-an-inner-product-space]] gives $|(x,y)_{H^1}|\le\|x\|_{H^1}\|y\|_{H^1}$ for the real H1 inner product.

## Proof

1.1 On $H=H^1_0(D)$ use its full H1 inner product from [F1] as the coercive form $a_0$, and use the functional $v\mapsto(u,v)_{H^1}$. By [F12], this functional is bounded by $\|u\|_{H^1}\|v\|_{H^1}$; the form $a_0$ has boundedness and coercivity constants both one. Under [A1], [F2] applies; its continuous solution is $u$ itself and its unique discrete solution is precisely the specified $\Pi_hu$. The $M/\alpha=1$ estimate proves the asserted best-approximation bound. The variational equations and uniqueness imply real linearity. If $u\in V_h$, $u$ satisfies the discrete equations, so $\Pi_hu=u$; this proves both surjectivity onto $V_h$ and idempotence, including the zero-space case. Testing with $v_h=\Pi_hu$ and [F12] gives $\|\Pi_hu\|_{H^1}^2\le\|u\|_{H^1}\|\Pi_hu\|_{H^1}$, hence contraction after division when nonzero. All images lie in $V_h\subset H^1_0(D)$. [A1, F1, F2, F12, given, algebra]

1.2 Put $s_a=\mathcal S_ag_a$. By [F3], it belongs to the actual numerator space, is continuous and cellwise polynomial, and vanishes on exterior faces. On a shared face its two traces obey $s_a=c_{ab}s_b\circ T_{ab}$, because [F3] restricts to the identical tangential construction and respects multiplication by $c_{ab}$. Dividing by the stated denominator relation gives equality of the rational traces. Therefore the piecewise physical $v_h$ has matching values everywhere and continuous value zero on $\partial D$; positivity of the denominator and admissibility of the finite maps make it continuous on $\overline D$, cellwise C1, and give square-integrable gradients. By [F5], $v_h\in H^1(D)$. [F1, F3, F5, given, algebra]

1.3 We verify the coordinate-line part of the zero-boundary closure without invoking a C1-domain trace theorem on a Lipschitz domain. Let $z\in H^1(D)$ be real, continuous on $\overline D$, cellwise $C^1$ on the finite partition, and zero on $\partial D$. In one open cell, fix a coordinate $j$ and cover the cell by all open rational boxes whose closures lie in the cell; [F10] makes this a countable cover. On any such box, for each fixed choice of the other coordinates the function of $x_j$ is differentiable. If $z=0$ and $\partial_jz\ne0$ at $x_j=t_0$, the derivative definition gives $|z(t)-z(t_0)|\ge \tfrac12|\partial_jz(t_0)|\cdot|t-t_0|$ for all sufficiently close $t\ne t_0$, so zero is isolated among the zeros on that line. Fix an injection of rational intervals into $\mathbb N$ using [F10]; assigning to each such zero the interval with least code that contains it and no other zero gives an injection into a countable family. Therefore every coordinate-line section of $Z_j:=\{z=0,\partial_jz\ne0\}$ is null. The set is measurable on the box because $z$ and $\partial_jz$ are continuous; Fubini [F6] makes $Z_j$ null there. [A1, F5, F6, F10, given, algebra]

1.4 In the single reference box, write $q:=g-\mathcal Sg$. Directly, $\|q/W\|_{L^2}\le w_-^{-1}\|q\|_{L^2}$ and $\|\nabla(q/W)\|_{L^2}\le w_-^{-1}\|\nabla q\|_{L^2}+G w_-^{-2}\|q\|_{L^2}$ by the quotient rule and the stated lower and derivative bounds for $W$. Thus $\|q/W\|_{H^1}\le(2/w_-+G/w_-^2)\|q\|_{H^1}\le\widehat\varepsilon_h$ by [F3]. This is the direct reference-domain quotient bound. [F3, given, algebra]

2.1 Each partition face is contained in the image of an incident reference-cell face under its cell expression. The full cell derivative is nonsingular by admissibility, so its restriction to the $(d-1)$-dimensional face tangent space has rank $d-1$; since the rational cell expression extends $C^1$ across that closed face, the face is contained in the image of a $C^1$ map from an open subset of $\mathbb R^{d-1}$. By [F11] each such image, and hence each face, is Lebesgue null. Countably many boxes, finitely many cells, and these null faces show that $\nabla z=0$ almost everywhere on $\{z=0\}$. [A1, F5, F10, F11, step 1.3, given, algebra]

3.1 Choose a fixed $C^1$ function as follows: let $\chi(t)=0$ for $t\le1$, $\chi(t)=3(t-1)^2-2(t-1)^3$ for $1<t<2$, and $\chi(t)=1$ for $t\ge2$, and set $\theta(s)=s\chi(|s|)$. Then $\theta=0$ on $[-1,1]$, $\theta(s)=s$ for $|s|\ge2$, and $\|\theta'\|_\infty<\infty$. Put $z_\epsilon=\epsilon\theta(z/\epsilon)$. Its cellwise chain rule and matching values give $z_\epsilon\in H^1(D)$ by [F5], with gradient $\theta'(z/\epsilon)\nabla z$. Its support lies in $K_\epsilon:=\{x\in\overline D:|z(x)|\ge\epsilon\}$, which is compact by [F9] and disjoint from $\partial D$; hence $K_\epsilon\Subset D$ and [F5] gives $z_\epsilon\in H^1_0(D)$. The function error is bounded by $C_\theta\epsilon$ for $C_\theta:=\max_{|s|\le2}|\theta(s)-s|$, so its $L^2$ norm tends to zero because $|D|<\infty$ by [F9]. The gradient error tends pointwise to zero off $\{z=0\}$, is zero almost everywhere on that set by step 2.1, and is bounded in squared magnitude by $(1+\|\theta'\|_\infty)^2|\nabla z|^2\in L^1(D)$. Dominated convergence [F6] proves $z_\epsilon\to z$ in $H^1(D)$. Since $H^1_0(D)$ is closed by [F1], $z\in H^1_0(D)$. Applying this result to $v_h$ from step 1.2 gives $v_h\in V_h$. [A1, F1, F5, F6, F9, step 1.2, step 2.1, algebra, construct]

4.1 Apply [F4] on each patch with numerator target $g_a$ and comparison $s_a$, whose required trace and cell regularity were checked in step 1.2. The denominator is continuous by the Statement; its positive cellwise polynomial expression and the closed-box C1 target $g_a$ make $g_a/W_a$ C1 up to every cell boundary, and [A1] supplies Countable Choice. Then [F3] gives $\|u-v_h\|_{H^1(D_a)}\le C_aM_aB_a$. The disjoint patch interiors cover $D$ up to their null faces; the global weak derivatives agree with the local derivatives by [F5]. Sum the squares of these H1 bounds to obtain $\|u-v_h\|_{H^1(D)}\le\varepsilon_h$. Step 1.1 then gives the projector error. Since $h_{a,r}\le1$, the formula for $B_a$ is of order maximum span for fixed degrees; no neighboring-span ratio was used. Varying-degree convergence follows exactly when the displayed upper bound tends to zero. [A1, F3, F4, F5, step 1.1, step 1.2, step 3.1, algebra]

5.1 Use $v_h\in V_h$ from step 3.1 in the best-gradient infimum of [F7] and bound its gradient error by its H1 error from step 4.1. This yields $(\beta/\alpha)\varepsilon_h$ for scalar elliptic data. Apply the same scalar construction to each displacement component; summing the component squared errors replaces $M_a^2$ by $\sum_qM_{a,q}^2$ and gives a conforming vector comparison. The elasticity branch of [F7] then yields the displayed finite-Lamé bound with its existing factor. [F7, step 3.1, step 4.1, algebra]

6.1 On the reference box let $w_h:=\mathcal Sg/W$. The same continuity, quotient and zero-boundary arguments of steps 1.2 and 3.1, with the identity as physical map, put $w_h$ in the reference rational space $V_h\subset H^1_0(\widehat\Omega)$. Step 1.4 proves $\|u-w_h\|_{H^1}\le\widehat\varepsilon_h$. Apply step 1.1 to the reference-domain projector: its best-approximation property gives $\|u-\Pi_hu\|_{H^1}\le\|u-w_h\|_{H^1}\le\widehat\varepsilon_h$. In [F8] choose the admissible comparison $\Pi_hu$ instead of taking the infimum; its gradient error is bounded by this H1 error. This proves the displayed Strang estimate without suppressing any defect. Finally [F8] bounds the geometry defect by the existing tensor constant times $\|DF-DG\|_\infty\|\Pi_hu\|_\nabla$, and step 1.1 gives $\|\Pi_hu\|_\nabla\le\|\Pi_hu\|_{H^1}\le\|u\|_{H^1}$. All original hypotheses of [F8] are retained. [F8, step 1.1, step 1.2, step 1.4, step 3.1, algebra] ∎

