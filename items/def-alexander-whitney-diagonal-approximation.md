---
id: def-alexander-whitney-diagonal-approximation
kind: definition
title: Alexander–Whitney map and diagonal approximation
status: published
origin: pipeline
pipeline_run: phase-2-next-17
deps: [def-singular-cochain-complex-with-coefficients, def-induced-singular-chain-map, def-product-topology]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, section 3.2, pages 206–207
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

Let $X,Y$ be spaces and $R$ a commutative unital ring, allowing $R=0$.
Use ordinary, unnormalized singular chains, with the coefficient convention in
[[def-singular-cochain-complex-with-coefficients]]. Put
$$F_n(X,Y;R)=\bigoplus_{p+q=n}C_p(X;R)\otimes_R C_q(Y;R),\qquad d(a\otimes b)=\partial a\otimes b+(-1)^p a\otimes\partial b\quad(a\in C_p(X;R)).$$
Negative chain degrees and the boundary of a vertex are zero. For a simplex
$\sigma:\Delta^n\to X\times Y$, write $x=\operatorname{pr}_X\sigma$ and
$y=\operatorname{pr}_Y\sigma$. The **Alexander–Whitney map** is the linear map
$$\operatorname{AW}_n:C_n(X\times Y;R)\longrightarrow F_n(X,Y;R),\qquad \operatorname{AW}_n(\sigma)=\sum_{p=0}^n x[0,\ldots,p]\otimes y[p,\ldots,n].$$
Here $x[i_0,\ldots,i_k]$ means restriction along the affine face with that
ordered vertex list. The formula gives a finite chain for each generator and
extends uniquely linearly; it does not require choosing representatives or
fillings. Projections and the diagonal are continuous in the binary
[[def-product-topology|product topology]]. With the postcomposition maps of
[[def-induced-singular-chain-map]], the **diagonal approximation** is
$$D_X=\operatorname{AW}\circ\Delta_\#:C_*(X;R)\longrightarrow F_*(X,X;R),\qquad \Delta(x)=(x,x).$$

For completeness, the formula is a chain map. In $d\operatorname{AW}(\sigma)$,
the first-factor faces at cut $p\ge1$ have signs $(-1)^i$, $0\le i\le p$;
the second-factor faces at cut $p\le n-1$ have signs $(-1)^j$, $p\le j\le n$.
The first-factor term deleting its last vertex at cut $p$ is
$(-1)^p x[0,\ldots,p-1]\otimes y[p,\ldots,n]$.
It cancels the second-factor term deleting its first vertex at cut $p-1$,
whose sign is $(-1)^{p-1}$. All remaining first-factor terms have $i<p$;
they are precisely the cuts of the face of $\sigma$ omitting $i$ in which
the omitted vertex lies before the cut. All remaining second-factor terms
have $j>p$ and are precisely those with the omitted vertex after the cut.
Each has the sign of that face in $\partial\sigma$. This exhausts
$\operatorname{AW}(\partial\sigma)$ and proves
$d\operatorname{AW}=\operatorname{AW}\partial$. In degree zero both sides
are zero, as required. The same face calculation shows that postcomposition
commutes with $\partial$; hence $D_X$ is also a chain map.

For continuous $f:X\to X'$ and $g:Y\to Y'$, face restriction commutes with
postcomposition, term by term, giving
$$\operatorname{AW}(f\times g)_\#=(f_\#\otimes g_\#)\operatorname{AW},\qquad D_{X'}f_\#=(f_\#\otimes f_\#)D_X.$$
In degree zero AW sends $(x,y)$ to $x\otimes y$, preserving the augmentation
that assigns $1$ to each vertex. If a factor is empty, both complexes are zero;
the same holds over the zero ring. For one-point factors the formula still
uses all higher singular simplices: degenerate simplices have not been
discarded. The cancellation also applies to these simplices because it is an
identity of face maps. Only finite sums and specified maps were used. No AC
is assumed, and the arbitrary-product nonemptiness clause of the product
definition is not used.
