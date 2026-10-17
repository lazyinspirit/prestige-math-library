---
id: ex-parabolic-heat-initial-projection-error
kind: example
title: The L2 projection and Ritz projection give different initial data
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-parabolic-ritz-projection
  - lem-parabolic-ritz-projection-well-defined
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
  - def-matching-affine-simplicial-meshes
  - def-broken-and-conforming-polynomial-spaces
  - def-sobolev-space-wkp-and-its-norm
  - thm-poincare-inequality-for-w-one-p-zero
  - thm-zero-boundary-piecewise-polynomials-in-w10p
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Example

Let $\Omega=(0,1)^2$ and partition its closure into four triangles by joining
the center $c=(1/2,1/2)$ to the four corners. Let $V_h$ be the continuous
piecewise-linear functions on this mesh with zero boundary values. Its
standard nodal basis consists of the center hat $\phi$, equal on each
triangle to the barycentric coordinate of $c$. For $u_0=\phi^2$, the $L^2$ projection into
$V_h$ and the Dirichlet Ritz projection differ. This gives a nonzero initial
error term when the semidiscrete heat equation is initialized by the $L^2$
projection instead of the Ritz projection.

Use $V=H^1_0(\Omega)$ with energy norm
$\|v\|_V=\|\nabla v\|_{L^2(\Omega)}$ and $H=L^2(\Omega)$. Poincare's
inequality on the unit square makes this an evolution triple and makes the
Dirichlet form bounded and coercive in the stated norm.

## Facts & Assumptions

**Given:** Countable Choice; the four-triangle fan mesh and its continuous
zero-boundary P1 space; the energy-norm evolution triple; $u_0=\phi^2$; and
the Dirichlet form.

[F1] A matching affine simplicial mesh consists of finitely many
nondegenerate simplices meeting along whole faces, with the open domain the
interior of their union ([[def-matching-affine-simplicial-meshes]]).

[F2] The continuous matching piecewise-polynomial space and its zero-boundary
subspace are defined by facet matching and zero boundary-facet polynomial
traces ([[def-broken-and-conforming-polynomial-spaces]]).

[F3] A real zero-boundary conforming piecewise-polynomial function on a
matching affine mesh lies in $W^{1,2}_0(\Omega)$ under Countable Choice
([[thm-zero-boundary-piecewise-polynomials-in-w10p]]).

[F4] Poincare's inequality on the unit square gives
$\|v\|_{L^2}\le\|\nabla v\|_{L^2}$ for $v\in H^1_0(\Omega)$; hence the
energy norm is Hilbert, $V\hookrightarrow H$ is continuous, and the
Dirichlet form has $M=\alpha=1$
([[def-sobolev-space-wkp-and-its-norm]],
[[thm-poincare-inequality-for-w-one-p-zero]],
[[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

[F5] The Ritz equation has a unique solution characterized by
$a(R_hu,v_h)=a(u,v_h)$ for every $v_h\in V_h$
([[def-parabolic-ritz-projection]],
[[lem-parabolic-ritz-projection-well-defined]]).

[A1] Countable Choice is required by the zero-boundary membership supplier
([[def-countable-choice]]).

## Verification

1.1 The four triangles each have area $1/4$, have disjoint interiors, and meet in whole edges or vertices; their union is the closed unit square. The piecewise barycentric coordinate $\phi$ is zero on the boundary and agrees on shared edges. An affine polynomial on each triangle is determined by its three vertex values; matching traces make shared vertex values agree. Thus a global continuous P1 function is determined by the five mesh vertex values. The four boundary values vanish, leaving only the center value, so $V_h=\operatorname{span}\{\phi\}$. By [F3], $\phi\in H^1_0(\Omega)$; $u_0=\phi^2$ is also a continuous zero-boundary piecewise polynomial and lies in $H^1_0(\Omega)$. The norm and form hypotheses follow from [F4]. [A1, F1, F2, F3, F4, given]

1.2 On a triangle $K$ of area $A=1/4$, the affine map from the reference triangle has determinant magnitude $2A$. If $\lambda$ is the barycentric coordinate of the center vertex, direct integration gives $\int_K\lambda^m dx=2A\int_0^1\int_0^{1-x}(1-x-y)^m dy\,dx =2A/((m+1)(m+2))$ for $m=1,2,3$. Summing over the four triangles yields $\int_\Omega\phi=1/3$, $\int_\Omega\phi^2=1/6$, and $\int_\Omega\phi^3=1/10$. The altitude from the center to each opposite boundary edge is $1/2$, so the barycentric coordinate has gradient magnitude $2$ and $|\nabla\phi|^2=4$ on each triangle. Hence $a(\phi,\phi)=4$ and $a(\phi^2,\phi)=2\int_\Omega\phi|\nabla\phi|^2=8/3$. [F1, given, algebra]

2.1 Write the orthogonal projection as $P_hu_0=p\phi$. Its defining equation $(u_0-p\phi,\phi)_{L^2}=0$ gives $p=(1/10)/(1/6)=3/5$. By [F5], the Ritz projection is $R_hu_0=r\phi$ with $a(u_0-r\phi,\phi)=0$, hence $r=(8/3)/4=2/3$. [F5, step 1.2, given, algebra]

3.1 Therefore $P_hu_0-R_hu_0=(3/5-2/3)\phi=-\phi/15\ne0$, since $\phi(c)=1$. If $u_h(0)=P_hu_0$, the error-splitting variable $\theta(0)=u_h(0)-R_hu_0$ is exactly this nonzero function. [step 2.1, given, algebra] ∎