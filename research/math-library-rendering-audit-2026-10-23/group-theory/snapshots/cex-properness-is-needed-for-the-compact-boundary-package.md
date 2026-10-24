---
id: "cex-properness-is-needed-for-the-compact-boundary-package"
kind: "counterexample"
title: "Properness is needed for the compact boundary package"
deps: ["lem-geodesic-triangles-in-trees-are-tripods", "def-hg-toolkit-gromov-sequences-and-boundary-product", "lem-boundary-products-are-independent-of-representative-and-basepoint"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
sources:
  references:
    - title: "Druţu–Kapovich Corollary 9.62, explicit failure without properness"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
verification:
  audited: 2026-09-12
---

## Statement

Attach countably infinitely many copies of $[0,\infty)$ at their zero endpoints, with the path metric. The resulting space is geodesic and $0$-hyperbolic, is not proper, and has a countably infinite discrete noncompact Gromov-sequence boundary. Thus properness cannot be omitted from a general compact-boundary assertion.

## Facts & Assumptions

**Given:** Points are a root $o$ and pairs $(j,r)$ with positive integer $j$ and real $r>0$. Proper means that every closed metric ball is compact.

[F1] Connected acyclic unit-edge realizations are geodesic trees with $0$-slim triangles by [[lem-geodesic-triangles-in-trees-are-tripods]].

[F2] Gromov sequences and joint products are defined in [[def-hg-toolkit-gromov-sequences-and-boundary-product]].

[F3] The boundary product neighbourhoods define its topology by [[lem-boundary-products-are-independent-of-representative-and-basepoint]].

## Counterexample

1.1 Define $d(o,(j,r))=r$ and $d((j,r),(k,s))=|r-s|$ if $j=k$, and $r+s$ otherwise. These are path lengths on the given branches: points on one branch are joined by its interval; points on different branches are joined through the root. Subdivide each branch at positive integers. The resulting unit-edge graph is connected, and has no cycles since removing any open edge separates its outer tail from the root. F1 therefore verifies that this path metric is geodesic with unique geodesics and $0$-slim triangles. [F1, given]

2.1 The closed unit ball has an open cover, in its relative topology, consisting of $B(o,3/4)$ and all $B((j,1),1/2)$. A point of radius below $3/4$ is in the first set; a point on branch $j$ with radius at least $3/4$ and at most $1$ is in the $j$th set. No finite subfamily covers the ball: choose an index $j$ absent from its finitely many outer balls. The point $(j,1)$ is outside $B(o,3/4)$ and has distance $2$ from every other outer centre. Thus the closed unit ball is noncompact and the space is not proper. [step 1.1, given, algebra]

2.2 Direct calculation gives $((j,r)|(k,s))_o=\min\{r,s\}$ for $j=k$, and $0$ for $j\ne k$; products involving $o$ are zero. If $(x_n)$ is Gromov, the threshold $0$ in F2 forces its entire sufficiently late tail onto one fixed branch, and its diagonal products force the radii to tend to infinity. Conversely any sequence eventually on one branch with radii tending to infinity has jointly diverging products. Two such sequences are equivalent exactly when their branches agree. Thus each positive integer $j$ determines exactly one boundary point, represented explicitly by $x_n=(j,n)$, and these are all the boundary points. [step 1.1, F2, algebra]

3.1 For two distinct branch classes, every representative pair eventually has mixed product zero, so their supremal boundary product is zero. A class has infinite product with itself. Hence $U_0(\xi)=\{\xi\}$ for every class $\xi$, and F3 gives the discrete topology. The collection of all singleton classes is an open cover with no finite subcover, since there are infinitely many positive integers. The boundary is therefore countably infinite and noncompact, despite the geodesic and zero-hyperbolicity conclusions of step 1.1. This is the required failed conclusion. [step 1.1, step 2.2, F3] ∎
