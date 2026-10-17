---
id: ex-parabolic-semidiscrete-ritz-error-identity
kind: example
title: Direct derivation of the semidiscrete Ritz residual
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - lem-parabolic-zero-boundary-sobolev-space-is-separable
  - thm-parabolic-semidiscrete-ritz-error-splitting-and-energy-bound
  - thm-parabolic-fem-semidiscrete-existence-energy
  - def-parabolic-ritz-projection
  - lem-parabolic-ritz-projection-well-defined
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
  - def-sobolev-space-wkp-and-its-norm
  - thm-poincare-inequality-for-w-one-p-zero
  - def-matching-affine-simplicial-meshes
  - def-broken-and-conforming-polynomial-spaces
  - thm-zero-boundary-piecewise-polynomials-in-w10p
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {}
---

## Example

On the four-triangle unit-square fan mesh, take $V=H^1_0((0,1)^2)$ with
its usual $H^1$ norm and $H=L^2((0,1)^2)$. Let $\phi$
be the center hat and use the Dirichlet form
$a(v,w)=\int_\Omega\nabla v\cdot\nabla w$. Poincare's inequality and
[[lem-parabolic-zero-boundary-sobolev-space-is-separable]] give the stated
separable evolution triple; on its $H^1$ norm the form has $M=1$ and
$\alpha=1/2$. Set
$q(t)=e^{-t}$, $u(t)=q(t)\phi^2$, and define the forcing by
$\langle f(t),v\rangle=(u'(t),v)_{L^2}+a(u(t),v)$. Then $u$ is the exact
forced solution. Initialize the semidiscrete solution at
$u_h(0)=R_hu(0)$ and write $u_h(t)=c(t)\phi$. This finite-dimensional
example verifies the Ritz error identity by direct integration.

## Facts & Assumptions

**Given:** Countable Choice; the unit-square fan mesh, its zero-boundary
continuous P1 space, and center hat $\phi$; the stated $H^1$-norm evolution
triple and Dirichlet form; and the manufactured forcing above.

[F1] The conforming polynomial space is defined by matching polynomial
traces on every interior facet and imposing zero traces on boundary facets
([[def-matching-affine-simplicial-meshes]],
[[def-broken-and-conforming-polynomial-spaces]]).

[F2] A real zero-boundary conforming piecewise polynomial on a finite
matching affine mesh belongs to $H^1_0(\Omega)$ under Countable Choice
([[thm-zero-boundary-piecewise-polynomials-in-w10p]]).

[F3] Poincare's inequality on the unit square gives
$\|v\|_{L^2}\le\|\nabla v\|_{L^2}\le\|v\|_{H^1}$, so the usual $H^1$
norm makes $V$ Hilbert and the embedding into $H$ continuous. The Dirichlet
form is bounded by $M=1$ and coercive by $\alpha=1/2$ because
$\|v\|_{H^1}^2=\|v\|_{L^2}^2+\|\nabla v\|_{L^2}^2\le2\|\nabla v\|_{L^2}^2$
([[def-sobolev-space-wkp-and-its-norm]],
[[thm-poincare-inequality-for-w-one-p-zero]],
[[def-bounded-coercive-and-symmetric-sesquilinear-forms]],
[[lem-parabolic-zero-boundary-sobolev-space-is-separable]]).

[F4] The finite-element semidiscretization has a unique solution for
measurable bounded coercive forms and loads
([[thm-parabolic-fem-semidiscrete-existence-energy]]).

[F5] The Ritz equation has a unique solution characterized by
$a(R_hw,v_h)=a(w,v_h)$ for every $v_h\in V_h$
([[def-parabolic-ritz-projection]],
[[lem-parabolic-ritz-projection-well-defined]]).

[F6] With $\rho=R_hu-u$ and $\theta=u_h-R_hu$, the semidiscrete equations
give $(\theta',v_h)_H+a(\theta,v_h)=-(\rho',v_h)_H$ for a fixed Ritz map
and a time-independent form
([[thm-parabolic-semidiscrete-ritz-error-splitting-and-energy-bound]]).

[A1] Countable Choice is retained by the finite-element inclusion and
semidiscrete existence suppliers ([[def-countable-choice]]).

## Verification

1.1 The four triangles meet along whole edges and vertices and cover the closed square. On each triangle the center barycentric coordinate defines $\phi$; these traces match, and its boundary trace is zero. An affine P1 function is determined by its three vertex values on each triangle, so the global zero-boundary P1 space has only the center value free and equals $\operatorname{span}\{\phi\}$. Thus [F2] puts this trial space in $H^1_0(\Omega)$; [F3] supplies the Hilbert and form hypotheses. The function $u=q\phi^2$ is also a zero-boundary conforming piecewise polynomial and is in the energy space. Since $q$ is smooth, $u'=q'\phi^2\in V$; therefore $v\mapsto(u',v)_{L^2}$ and $v\mapsto a(u,v)$ are continuous functionals on $V$, and the defined load is square-integrable. By [F5] the initial Ritz value is defined. [F1, F2, F3, F5, A1, given]

1.2 On each triangle $K$, $|K|=1/4$, the center barycentric coordinate $\lambda$ satisfies $\int_K\lambda^m=2|K|\int_0^1\int_0^{1-x}(1-x-y)^m dy\,dx =2|K|/((m+1)(m+2))$ for $m=1,2,3$ by affine change of variables and iterated integration. Hence $\int_\Omega\phi=1/3$, $\int_\Omega\phi^2=1/6$, and $\int_\Omega\phi^3=1/10$. The altitude from the center to every boundary edge is $1/2$, so $|\nabla\phi|^2=4$ on each triangle. Thus $a(\phi,\phi)=4$ and $a(\phi^2,\phi)=2\sum_K\int_K\phi|\nabla\phi|^2=8/3$. Also $(\phi^2,\phi)_{L^2}=1/10$. [given, algebra]

2.1 By [F5], $R_hu(t)=(2/3)q(t)\phi$, since $a((2/3)q\phi,\phi)=q(8/3)=a(q\phi^2,\phi)$. Therefore $\rho=q((2/3)\phi-\phi^2)$ and $(\rho',\phi)_{L^2}=q'((2/3)(1/6)-1/10)=q'/90$. [F5, step 1.2, algebra]

3.1 Testing the semidiscrete equation with $\phi$ and using step 1.2 gives $c'/6+4c=q'/10+8q/3.$ For $\theta=(c-2q/3)\phi$, direct substitution yields $(\theta',\phi)_{L^2}+a(\theta,\phi) =c'/6-q'/9+4c-8q/3=-q'/90=-(\rho',\phi)_{L^2}.$ This is [F6] for the sole basis vector, hence for every $v_h\in V_h$ by linearity. The calculation uses the initial Ritz projection, so $\theta(0)=0$. [F3, F4, F6, A1, step 1.2, step 2.1, algebra] ∎