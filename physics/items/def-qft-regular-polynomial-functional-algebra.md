---
id: def-qft-regular-polynomial-functional-algebra
kind: definition
title: Regular polynomial field functional algebra
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - def-test-function-space-d-of-an-open-set
  - def-test-function-topology
  - def-ck-and-multi-index-notation-in-several-variables
  - thm-sequential-convergence-in-test-function-space
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-riemann-fubini-on-product-rectangles
  - thm-differentiation-under-the-integral-sign-on-a-compact-rectangle
dependency_roles:
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-test-function-topology: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  thm-sequential-convergence-in-test-function-space: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, complete lecture notes, section 4
      url: https://arxiv.org/html/1208.1428
      locator: Complete 42-page notes, section 4, equation (23) and the discussion of regular polynomial and local functionals.
---

## Definition

For a continuous compactly supported $u:\mathbb R^m\to\mathbb C$, write
$u=u_{\mathrm R}+iu_{\mathrm I}$ for its real-coordinate decomposition and
define its complex Riemann integral by
$$\int u:=\int u_{\mathrm R}+i\int u_{\mathrm I},$$
where the real integrals are over a closed rectangle containing the support.
Equivalently, use any sufficiently large cube $[-R,R]^m$; the value stabilizes
as $R$ increases because $u$ vanishes outside its compact support. Each real
component integral exists by
[[thm-continuous-on-a-rectangle-is-riemann-integrable]]. The complex modulus is
$|a+ib|=(a^2+b^2)^{1/2}$; the triangle inequality for Riemann sums gives
$|\int u|\le\int|u|$. Complex linearity and product-rectangle Fubini follow by
applying the real integral rules to the real and imaginary components; in
particular, use [[thm-riemann-fubini-on-product-rectangles]] componentwise.
Differentiation under a compact parameter integral likewise means applying
[[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]] to both
real components. These conventions apply to every integral below.

Let $d\ge1$, $X=\mathbb R^d$, and $n\ge1$. Write
$\mathcal D(X^n)=C_c^\infty(X^n;\mathbb C)$ for the complex test-function
space of smooth compactly supported functions
([[def-test-function-space-d-of-an-open-set]]), with its LF topology
([[def-test-function-topology]]). The convergence criterion used below is
that convergent test sequences have one common compact support and converge
uniformly with every derivative
([[thm-sequential-convergence-in-test-function-space]]). Here $C^\infty$
means every coordinate derivative exists and is continuous
([[def-ck-and-multi-index-notation-in-several-variables]]). All integrals are
compact Riemann integrals: each integrand is continuous with compact support,
so restrict it to a compact rectangle and apply
[[thm-continuous-on-a-rectangle-is-riemann-integrable]]. Let
$\mathcal D_{\mathrm{sym}}(X^n)$ be the subspace of kernels invariant under
every permutation of their $n$ $X$-variables. Fields are real smooth
configurations $\phi\in C^\infty(X;\mathbb R)$. For an integer $N\ge0$
and a finite family
$f_0\in\mathbb C$, $f_n\in\mathcal D_{\mathrm{sym}}(X^n)$ for
$1\le n\le N$, define
$$ F_f(\phi)=f_0+\sum_{n=1}^{N}\int_{X^n}f_n(x_1,\ldots,x_n)\prod_{j=1}^{n}\phi(x_j)\,dx_1\cdots dx_n. $$
The pairing is complex-bilinear, with no conjugation on the kernel or field.
An element of $\mathcal P_{\mathrm{reg}}(X)$ is this finite symmetric
coefficient family, evaluated on fields by $F_f$. Pointwise sums, scalar
multiples, and products again have finite symmetric compactly supported
coefficient families: for products, expand the two finite sums and
symmetrize each tensor product $f_m\otimes g_n$. Thus these elements form
an algebra; the product-integral identity follows from Riemann Fubini on a
rectangle containing the compact supports
([[thm-riemann-fubini-on-product-rectangles]]).

For $k=0$, set $F_f^{(0)}(\phi)=F_f(\phi)$. For $1\le k\le N$,
the $k$-th functional derivative kernel assigned to this coefficient
family is
$$ F_f^{(k)}(\phi)(x_1,\ldots,x_k)=\sum_{n=k}^{N}\frac{n!}{(n-k)!}\int_{X^{n-k}}f_n(x_1,\ldots,x_n)\prod_{j=k+1}^{n}\phi(x_j)\,dx_{k+1}\cdots dx_n. $$
For $k>N$ it is zero. Each displayed kernel is smooth, symmetric and compactly supported in its $k$ remaining variables: compactness follows by projection of the finite union of coefficient-kernel supports, and derivatives pass through the finite-compact integrals by [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]].
In the term $n=k$, the empty integral and empty product mean simply
$f_k(x_1,\ldots,x_k)$.

For real smooth directions $h_1,\ldots,h_k$, the pairing of
$F_f^{(k)}(\phi)$ with $h_1\otimes\cdots\otimes h_k$ is the coefficient of
$t_1\cdots t_k$ in $F_f(\phi+\sum_{j=1}^k t_jh_j)$. For each degree-$n$
term, expanding the finite product assigns the $k$ distinct directions to
the $n$ factors in $n!/(n-k)!$ ways; symmetry of $f_n$ makes the corresponding
integrals equal. This verifies the displayed kernel's functional-derivative
meaning by a finite polynomial calculation.

The scope is exactly smooth compact coefficient kernels. A local functional
whose higher derivative kernels are distributions on a thin diagonal is not
included merely because its field expression is polynomial.
