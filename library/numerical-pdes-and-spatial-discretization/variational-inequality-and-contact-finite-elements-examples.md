---
page: variational-inequality-and-contact-finite-elements-examples
title: "Variational inequalities and spatial contact discretization — Examples"
status: published
items: []
examples:
  - ex-signorini-one-dimensional-obstacle-free-boundary
  - cex-signorini-nodal-contact-feasibility-needs-convex-obstacle
  - ex-signorini-contact-patch-test
  - ex-signorini-mortar-active-set-change
---

These examples make the contact conventions concrete and mark the limits of the discretization claims.

- [[ex-signorini-one-dimensional-obstacle-free-boundary]] verifies a scalar obstacle solution, its free boundary, and its nonnegative reaction density directly.
- [[cex-signorini-nodal-contact-feasibility-needs-convex-obstacle]] shows how nodal constraints can miss a concave obstacle between contact vertices.
- [[ex-signorini-contact-patch-test]] gives an exactly represented affine shear with zero contact gap and a manufactured load whose continuous and nodal solutions coincide.
- [[ex-signorini-mortar-active-set-change]] solves two reduced complementarity systems and tracks the load-dependent active constraint. The chosen matrix is an algebraic example, not a claimed geometric finite element stiffness matrix.
