---
id: def-elliptic-hyperbolic-and-parabolic-principal-symbols
kind: definition
title: "Elliptic, hyperbolic, and parabolic principal symbols"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-principal-part-and-principal-symbol-of-a-scalar-pde,
       def-characteristic-covector-hypersurface-and-noncharacteristic-data]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-05
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Victor Ivrii, Partial Differential Equations"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
---

## Definition

For a real scalar second-order principal symbol

$$p_2(x,\xi)=\sum_{i,j=1}^n a_{ij}(x)\xi_i\xi_j,$$

assume $a_{ij}=a_{ji}$.

The symbol is **elliptic at $x$** when $p_2(x,\xi)\neq0$ for every
$\xi\neq0$; equivalently, the quadratic form has one definite sign.

Fix a nonzero covector $\tau$. The symbol is **strictly hyperbolic at $x$
relative to $\tau$** when $p_2(x,\tau)\neq0$ and, for every $\zeta$ not
proportional to $\tau$, the polynomial
$\lambda\mapsto p_2(x,\zeta+\lambda\tau)$ has two distinct real roots. The
first condition says that $\tau$ is noncharacteristic and prevents the root
condition from becoming vacuous in one dimension.

A space-time operator of the form

$$u_t-\sum_{i,j=1}^n a_{ij}(x,t)u_{x_i x_j}+\text{lower-order terms}$$

is **parabolic at $(x,t)$** when the spatial quadratic form
$\sum a_{ij}(x,t)\xi_i\xi_j$ is positive semidefinite and nonzero, and, in the
standard time covector, the equation contains a first-order time derivative
rather than a second-order one. The nonzero condition ensures that the operator
still has a second-order spatial principal part at the point.
