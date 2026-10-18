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
  - def-axiom-of-choice
  - lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
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
      locator: "Theorem 8, Greville identities (49)-(50), Theorem 32 and Example 33; the rational, boundary and multipatch arguments are local."
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 26, Basic error analysis
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap26.pdf
---

## Statement

Assume the Axiom of Choice. Let $D\subset\mathbb R^d$, $d\in\{2,3\}$, be bounded, connected and Lipschitz, with a finite face-to-face admissible NURBS patch partition as in [[def-isogeometric-galerkin-patch-space-and-refinement]]. Let $V_h\subset H^1_0(D)$ be its full finite rational trial space with matching physical traces and homogeneous Dirichlet boundary condition. For any such finite space, including the zero space, there is a linear projector $\Pi_h:H^1_0(D)\to V_h$ specified by
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

For the single-patch reference-domain problem in [[thm-isogeometric-perturbed-geometry-quadrature-strang-bound]], apply the construction to $g=Wu$ with reference-domain projector $\Pi_h$ and put $\widehat\varepsilon_h=(2/w_-+G/w_-^2)M_gB$. Then its original defects and constants give
$$\|u-u_h\|_{\nabla}\le(1+M_F/\alpha_h)\widehat\varepsilon_h+\alpha_h^{-1}\bigl(\delta_{\rm geom}(\Pi_hu)+\delta_{\rm quad}(\Pi_hu)+\delta_{\rm load}\bigr).$$
In particular its existing geometry bound gives $\delta_{\rm geom}(\Pi_hu)\le(dM^{d+1}+2M^{d+3})\|DF-DG\|_\infty\|u\|_{H^1}$; discrete coercivity, load error and quadrature error remain separate hypotheses/terms.

## Facts & Assumptions

**Given:** The precise finite patch geometry, positive denominator bounds, rational trial space and, for approximation, the clamped knots, face compatibility and $C^{1,1}$ numerators in the Statement.

[A1] [[def-axiom-of-choice]] supplies the AC premise of the univariate spline supplier; [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]] supplies the Countable Choice assumptions of all Hilbert/pullback/Galerkin/integration suppliers below.

[F1] [[def-isogeometric-galerkin-patch-space-and-refinement]] gives the finite conforming rational trial space. [[lem-w-one-two-is-a-hilbert-space]] gives the Hilbert structure of $H^1_0(D)$ in its full H1 norm.

[F2] [[thm-cea-quasi-optimality-for-conforming-galerkin-approximations]] gives continuous/discrete solvability and the $M/\alpha$ error bound for every finite conforming subspace of a Hilbert space.

[F3] [[lem-boundary-preserving-tensor-schoenberg-h1-approximation]] constructs $\mathcal S_a$ and proves its actual H1 error $M_aB_a$, zero-face preservation and compatibility under the specified face identifications.

[F4] [[thm-nurbs-quotient-best-approximation-transfer]] gives $\|u-v_h\|_{H^1(D_a)}\le C_a\|g_a-s_a\|_{H^1((0,1)^d)}$ for any specified continuous, cellwise C1 numerator comparison. Its proof also gives the reference quotient bound $2/w_-+G/w_-^2$ before mapping.

[F5] [[lem-matching-nurbs-patch-traces-give-h1-conformity]] supplies global H1 membership for matching cell/patch values. [[lem-compactly-supported-h1-belongs-to-h-zero]] gives H1_0 membership for a compactly supported H1 function on any open set.

[F6] [[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]] identifies the Euclidean measure with the completed product; [[thm-tonelli-and-fubini-for-completed-product-measures]] applies to nonnegative measurable functions on the completed product; [[thm-dominated-convergence]] applies to measurable functions with an integrable majorant.

[F7] [[thm-isogeometric-poisson-galerkin-quasioptimality]] gives $\beta/\alpha$ times best gradient approximation under its scalar elliptic data. [[thm-isogeometric-elasticity-galerkin-quasioptimality]] gives $(2\mu_1+d\lambda)/\mu_0$ under its finite-Lamé displacement data.

[F8] [[thm-isogeometric-perturbed-geometry-quadrature-strang-bound]] supplies its exact reference-domain infimum estimate and the geometry-defect bound in the Statement, under all of its map, load, boundedness and discrete-coercivity hypotheses.

## Proof

1.1 On $H=H^1_0(D)$ use its full H1 inner product from [F1] as the coercive form $a_0$, and use the bounded functional $v\mapsto(u,v)_{H^1}$. Its boundedness and coercivity constants are both one. Under [A1], [F2] applies; its continuous solution is $u$ itself and its unique discrete solution is precisely the specified $\Pi_hu$. The $M/\alpha=1$ estimate proves the asserted best-approximation bound. The variational equations and uniqueness imply real linearity. If $u\in V_h$, $u$ satisfies the discrete equations, so $\Pi_hu=u$; this proves both surjectivity onto $V_h$ and idempotence, including the zero-space case. Testing with $v_h=\Pi_hu$ and Cauchy–Schwarz gives $\|\Pi_hu\|_{H^1}^2\le\|u\|_{H^1}\|\Pi_hu\|_{H^1}$, hence contraction after division when nonzero. All images lie in $V_h\subset H^1_0(D)$. [A1, F1, F2, given, algebra]

2.1 Put $s_a=\mathcal S_ag_a$. By [F3], it belongs to the actual numerator space, is continuous and cellwise polynomial, and vanishes on exterior faces. On a shared face its two traces obey $s_a=c_{ab}s_b\circ T_{ab}$, because [F3] restricts to the identical tangential construction and respects multiplication by $c_{ab}$. Dividing by the stated denominator relation gives equality of the rational traces. Therefore the piecewise physical $v_h$ has matching values everywhere and continuous value zero on $\partial D$; positivity of the denominator and admissibility of the finite maps make it continuous on $\overline D$, cellwise C1, and give square-integrable gradients. By [F5], $v_h\in H^1(D)$. [F1, F3, F5, given, algebra]

2.2 We verify the zero-boundary closure without invoking a C1-domain trace theorem on a Lipschitz domain. For any real continuous cellwise C1 function $z\in H^1(D)$ on this finite partition that is zero on $\partial D$, its cell gradient vanishes almost everywhere on $\{z=0\}$. Indeed restrict a fixed partial derivative to coordinate lines inside each open cell, exhausted by countably many boxes. A differentiable one-variable function has an isolated zero at every zero where its derivative is nonzero: the derivative definition gives a nonzero sign of $(z(t)-z(t_0))/(t-t_0)$ near $t_0$. Such isolated zeros are countable by assigning distinct rational intervals. Their sections have measure zero, and [F6] makes the corresponding measurable set null in each box; finitely many cells and their null faces prove the claim. Choose a fixed C1 scalar function $\theta$ that is zero on $[-1,1]$, equals the identity on $(-\infty,-2]\cup[2,\infty)$, and has bounded derivative. Put $z_\epsilon=\epsilon\theta(z/\epsilon)$. Its cellwise chain rule and matching values give $z_\epsilon\in H^1(D)$ by [F5], with gradient $\theta'(z/\epsilon)\nabla z$. Its support is contained in the compact subset $\{|z|\ge\epsilon\}\subset D$, since $\overline D$ is compact and $z$ vanishes on its boundary; hence $z_\epsilon\in H^1_0(D)$ by [F5]. The function error is bounded uniformly by a constant times $\epsilon$. The gradient error tends to zero pointwise off $\{z=0\}$, is zero almost everywhere on that set by the proved claim, and is bounded in squared magnitude by $(1+\|\theta'\|_\infty)^2|\nabla z|^2\in L^1(D)$. Dominated convergence [F6] proves $z_\epsilon\to z$ in H1. The closedness in [F1] gives $z\in H^1_0(D)$. Apply this with the $v_h$ from step 2.1 to conclude $v_h\in V_h$. [A1, F1, F5, F6, step 2.1, algebra, construct]

3.1 Apply [F4] on each patch with numerator target $g_a$ and comparison $s_a$, whose required trace and cell regularity were checked in step 2.1. Then [F3] gives $\|u-v_h\|_{H^1(D_a)}\le C_aM_aB_a$. The disjoint patch interiors cover $D$ up to their null faces; the global weak derivatives agree with the local derivatives by [F5]. Sum the squares of these H1 bounds to obtain $\|u-v_h\|_{H^1(D)}\le\varepsilon_h$. Step 1.1 then gives the projector error. Since $h_{a,r}\le1$, the formula for $B_a$ is of order maximum span for fixed degrees; no neighboring-span ratio was used. Varying-degree convergence follows exactly when the displayed upper bound tends to zero. [F3, F4, F5, step 1.1, step 2.1, step 2.2, algebra]

4.1 Use $v_h$ in the best-gradient infimum of [F7] and bound its gradient error by its H1 error from step 3.1. This yields $(\beta/\alpha)\varepsilon_h$ for scalar elliptic data. Apply the same scalar construction to each displacement component; summing the component squared errors replaces $M_a^2$ by $\sum_qM_{a,q}^2$ and gives a conforming vector comparison. The elasticity branch of [F7] then yields the displayed finite-Lamé bound with its existing factor. [F7, step 2.2, step 3.1, algebra]

5.1 In the single reference box, the same projector construction uses $D=(0,1)^d$ and the rational space before physical mapping. By [F4] and [F3] its error is at most $\widehat\varepsilon_h$. In [F8] choose the particular admissible comparison $\Pi_hu$ in place of taking the infimum; its gradient error is at most this H1 error. This proves the displayed Strang estimate without suppressing any defect. Finally [F8] bounds its geometry defect by the existing tensor constant times $\|DF-DG\|_\infty\|\Pi_hu\|_\nabla$, and step 1.1 bounds this last norm by $\|u\|_{H^1}$. All original hypotheses of [F8] are retained. [F3, F4, F8, step 1.1, algebra] ∎
