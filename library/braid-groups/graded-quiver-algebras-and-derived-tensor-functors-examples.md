---
page: graded-quiver-algebras-and-derived-tensor-functors-examples
title: "Graded Quiver Algebras and Derived Tensor Functors — Examples"
status: published
items: []
examples: [ex-the-a-two-khovanov-seidel-algebra-and-its-projectives,
           ex-a-simple-module-projective-resolution-for-a-two,
           ex-totalizing-a-two-term-bimodule-action,
           cex-internal-and-homological-shifts-are-not-interchangeable]
---

For $m=2$ the algebra $A_2$ is computed in full: nine basis paths, the complete
multiplication table, and the three vertex projectives $P_0,P_1,P_2$ of ranks
$2,4,3$ with their graded ranks, so that the abstract basis of the A page
becomes an explicit matrix multiplication. The same example carries the grid
resolution one step further and displays
$0\to P_0\to P_1\to P_2\to S_2\to 0$ with right multiplication by the two
arrows as the differentials, including the kernel and image computations that
show exactness at each spot; the quotient $A_2/(\text{arrows})\cong\mathbb Z^3$
identifies the simple modules with the vertex quotients.

A two-term bimodule action is then totalized by hand, listing the four summands
of the total complex and verifying that the Koszul signs make the square
anticommute and the total differential square to zero. The counterexample
separates the two shifts on the nose: $P_i\{1\}$ has the same homological
support as $P_i$ while $P_i[1]$ sits in a single homological degree, so the
shifted objects are not isomorphic in $C_m$, even though the two shifts are
compared on the Grothendieck group where $[P_i[1]]=-[P_i]$. No choice principle
is used by any of these calculations.
