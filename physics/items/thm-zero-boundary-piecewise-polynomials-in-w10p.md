---
id: thm-zero-boundary-piecewise-polynomials-in-w10p
kind: theorem
title: Zero-boundary conforming polynomials lie in W0 1p and satisfy Poincare
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-matching-affine-simplicial-meshes, def-broken-and-conforming-polynomial-spaces, lem-affine-simplex-gauss-green-formula, lem-oriented-facet-cancellation-on-matching-meshes, def-wkp-zero-as-a-sobolev-closure, thm-poincare-inequality-for-w-one-p-zero, lem-test-function-cutoffs-and-euclidean-localization, lem-compact-support-zero-extension-in-wkp, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, def-sobolev-space-wkp-and-its-norm, thm-continuity-from-above-for-measures, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, lem-schwartz-cutoffs-from-the-standard-smooth-step, lem-weak-leibniz-rule-with-a-smooth-factor, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2019, Chapter 32
      url: https://people.tamu.edu/~guermond/M661_FALL_2019/chap32.pdf
      locator: "§32.1, printed pp. 144–145: zero-boundary conforming finite-element functions."
    - title: Luca Heltai, Numerical Methods for Partial Differential Equations, Lecture 2
      url: https://luca-heltai.github.io/nmpde/lectures/lecture-02/
      locator: "§10: conforming piecewise polynomials and homogeneous boundary data."
verification: {}
---

## Statement

Assume Countable Choice. Let $\Omega$ be a bounded polyhedral open set with a finite matching
affine simplicial mesh, let $1\le p<\infty$, and let $v$ be a real-valued
conforming piecewise polynomial whose polynomial trace vanishes on every boundary
facet. Then
$$v\in W^{1,p}_0(\Omega),\qquad \|v\|_{L^p(\Omega)}\le C_\Omega\|\nabla v\|_{L^p(\Omega)}.$$
Here $W^{1,p}_0$ is the norm closure of $C_c^\infty(\Omega)$; no C1
trace characterization is used.

## Facts & Assumptions

**Given:** Countable Choice, the finite matching mesh, the conforming and zero-boundary conditions, bounded $\Omega$, and finite $p$.

[F1] On each simplex, a $C^1$ vector field satisfies the cellwise Gauss–Green formula. ([[lem-affine-simplex-gauss-green-formula]])

[F2] The mesh is the interior of the union of its cells, so each boundary component of a local simplicial link reaches an exterior facet. Equal polynomial traces and opposite facet orientations cancel interior fluxes; the zero-boundary condition makes every exterior facet trace zero. ([[def-matching-affine-simplicial-meshes]], [[def-broken-and-conforming-polynomial-spaces]], [[lem-oriented-facet-cancellation-on-matching-meshes]])

[F3] The zero-boundary space is precisely the norm closure of $C_c^\infty(\Omega)$ in $W^{1,p}(\Omega)$. ([[def-wkp-zero-as-a-sobolev-closure]])

[F4] If $\Omega$ is bounded in one direction, every $w\in W^{1,p}_0(\Omega)$ satisfies $\|w\|_{L^p}\le C(p)(b-a)\|\nabla w\|_{L^p}$ for a slab of width $b-a$ and $1\le p<\infty$. ([[thm-poincare-inequality-for-w-one-p-zero]])

[F5] Compactly supported Sobolev functions extend by zero, and compactly supported $W^{1,p}(\mathbb R^d)$ functions can be approximated by smooth compactly supported functions. Smooth cutoffs and the weak product rule are available. ([[lem-compact-support-zero-extension-in-wkp]], [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]], [[lem-test-function-cutoffs-and-euclidean-localization]], [[lem-weak-leibniz-rule-with-a-smooth-factor]])

[F6] A decreasing sequence of measurable subsets of a finite-measure set has measures tending to the measure of its intersection. ([[thm-continuity-from-above-for-measures]])

[F7] The Sobolev class and its norm use the weak-derivative and $L^p$ conventions of [[def-sobolev-space-wkp-and-its-norm]].

[F8] Standard smooth mollifiers turn a Lipschitz cutoff into a smooth one; convolution with a unit-mass mollifier is smooth, and its Lipschitz bound does not exceed that of the original function. ([[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]], [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]], [[lem-schwartz-cutoffs-from-the-standard-smooth-step]])

[F9] The Sobolev and zero-boundary suppliers used above assume Countable Choice. ([[def-countable-choice]])

## Proof

1.1 If $\Omega=\varnothing$, then $v=0$ and the conclusion is immediate. Assume henceforth $\Omega\ne\varnothing$. Extend $v$ by zero to $\widetilde v$ on $\mathbb R^d$ and define $g_i$ to be its cellwise derivative on mesh cells and zero outside $\overline\Omega$. On each cell apply the simplex Green formula to $v\varphi e_i$ for an arbitrary $\varphi\in C_c^\infty(\mathbb R^d)$. Fact [F1] gives the cell identity. Interior facet terms cancel by [F2]; boundary facet terms vanish by the zero-boundary clause of [F2]. Summing the finitely many cell identities gives $$\int_{\mathbb R^d}\widetilde v\,\partial_i\varphi =-\int_{\mathbb R^d}g_i\varphi.$$ Both functions are in $L^p$, so [F7] gives $\widetilde v\in W^{1,p}(\mathbb R^d)$ with gradient $g$. [F1, F2, F7, given]

1.2 Put $d_\Omega(x)=\operatorname{dist}(x,\mathbb R^d\setminus\Omega)$, which is $1$-Lipschitz. Choose a smooth scalar step $\theta$ with $\theta(s)=0$ for $s\le1$, $\theta(s)=1$ for $s\ge2$, and $0\le\theta\le1$. For $\epsilon>0$ set $\zeta_\epsilon(x)=\theta(d_\Omega(x)/\epsilon)$ and convolve it with a nonnegative smooth mollifier of integral one supported in the ball of radius $\epsilon/4$, obtaining $\eta_\epsilon$. Then $\eta_\epsilon$ is smooth, supported in $\Omega$, equals zero where $d_\Omega\le3\epsilon/4$, equals one where $d_\Omega\ge9\epsilon/4$, and $\|\nabla\eta_\epsilon\|_\infty\le\|\theta'\|_\infty/\epsilon$. Since $\Omega$ is bounded, its support is compact in $\Omega$. [F5, F8, given, algebra]

2.1 Let $M$ be the maximum of the cellwise suprema of $|\nabla v|$. Across every interior facet the polynomial traces agree; on every boundary facet they agree with zero. For a point $x$ in the mesh skeleton, its minimal mesh face is the unique mesh face whose relative interior contains $x$; the local star of that face means the union of the cells containing it. If the minimal face is a facet, there are exactly two incident cells at an interior facet and exactly one at a boundary facet. In the interior case their values at $x$ agree by the matching polynomial traces; in the boundary case the single cell value agrees with exterior zero by the zero boundary trace. For the remaining faces, let $c\ge2$ be their codimension. The incident simplicial cones in their local star cut a small sphere in the normal space of the face, of dimension $c-1$, into a finite face-to-face triangulation of the local directions in $\Omega$. Within each connected component, top-dimensional pieces are connected by facet adjacency: perturb a path in that open component to avoid the finite union of codimension-two faces. At an interior point the direction set is the whole sphere, which is connected because $c\ge2$, so matching traces make all incident polynomial values agree. At a boundary point every component has a boundary direction; following facet adjacencies reaches a boundary facet, where the polynomial value is zero, so all cell limits in that component are zero. Thus in all cases the cellwise continuous representatives and the exterior zero fit continuously on the whole finite polyhedral partition. Restrict this continuous function to any line segment. The segment is divided by the finitely many cell facets into finitely many intervals; on each cell interval its derivative along the segment has magnitude at most $M$, and on exterior intervals it is zero. Continuity at the interval endpoints then gives $|\widetilde v(x)-\widetilde v(y)|\le M|x-y|$ for all $x,y$. Thus $|v(x)|\le M\operatorname{dist}(x,\mathbb R^d\setminus\Omega)$. [F2, step 1.1, given]

3.1 The difference $v-\eta_\epsilon v$ and its weak gradient are supported in $E_\epsilon=\{x\in\Omega:d_\Omega(x)<9\epsilon/4\}$. On this layer, step 2.1 gives $|v|\le(9/4)M\epsilon$, and step 1.2 gives $|v\nabla\eta_\epsilon|\le(9/4)M\|\theta'\|_\infty$. Also $|\nabla v|\le M$. For $n\in\mathbb N_0$, the sets $E_{1/(n+1)}$ decrease to the empty set and $|E_1|\le|\Omega|<\infty$, so [F6] gives $|E_{1/(n+1)}|\to0$. These bounds show $\|v-\eta_{1/(n+1)}v\|_{W^{1,p}(\Omega)}\to0$ for finite $p$. [F5, F6, step 2.1, step 1.2]

4.1 Each $\eta_{1/(n+1)}v$ has compact support in $\Omega$. By [F5] extend it by zero to $W^{1,p}(\mathbb R^d)$ and approximate there by $\phi_j\in C_c^\infty(\mathbb R^d)$. Choose a smooth cutoff $\chi\in C_c^\infty(\Omega)$ equal to one near the compact support of $\eta_{1/(n+1)}v$. Then $\chi\phi_j\in C_c^\infty(\Omega)$ and, by the weak product rule, $\chi\phi_j\to\eta_{1/(n+1)}v$ in $W^{1,p}(\Omega)$. A diagonal choice with step 3.1 proves $v\in W^{1,p}_0(\Omega)$ by [F3]. [F3, F5, F9, step 3.1]

5.1 A bounded set lies in a slab of finite width $b-a$. Apply [F4] to the membership from step 4.1, obtaining the displayed inequality with $C_\Omega=C(p)(b-a)$ for the fixed exponent $p$. [F4, F9, step 4.1] ∎
