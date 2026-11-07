---
id: lem-balanced-hermitian-period-domain-is-connected
kind: lemma
title: "Balanced Hermitian period domains are connected matrix balls"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Deligne, Hodge Cycles on Abelian Varieties, notes by J. S. Milne"
      url: "https://www.jmilne.org/math/Documents/Deligne82.pdf"
      locator: "Section 4, proof of Theorem 4.8, printed pages 32–34: the balanced Hermitian period domain; only the linear-algebra and connectedness portions are reconstructed here."
verification: {}
---

## Statement

Let $H_1,\ldots,H_r$ be finite-dimensional complex vector spaces with nondegenerate Hermitian forms $h_j$, linear in the second variable, each of signature $(m_j,m_j)$. Set $\psi_j=2\operatorname{Im}h_j$ on the underlying real vector space. For each $j$, let $\mathcal D_j$ be the set of complex-linear maps $J:H_j\to H_j$ satisfying $J^2=-1$, $\psi_j(Jx,Jy)=\psi_j(x,y)$, and $\psi_j(x,Jx)>0$ for every nonzero $x$.

After choosing an $h_j$-orthogonal decomposition $H_j=H_j^+\oplus H_j^-$ into positive and negative definite $m_j$-planes, $\mathcal D_j$ is identified with the open matrix ball
$$\{Z\in\operatorname{Hom}_{\mathbb C}(H_j^+,H_j^-): I-Z^*Z>0\}$$
by taking the $+i$ eigenspace of $J$ to be the graph of $Z$. Thus $\mathcal D=\prod_j\mathcal D_j$ is a nonempty connected complex manifold; indeed each matrix ball is convex. Both eigenspaces of every $J\in\mathcal D_j$ have complex dimension $m_j$, and the positive real form $\psi_j(x,Jy)$ varies continuously with $J$. The same statements include $m_j=0$ and the empty product.

This is a finite-dimensional linear-algebra statement. It does not assert that an analytic family over $\mathcal D$, its quotient, or a connecting family is algebraic.

## Facts & Assumptions

**Given:** The finite collection of Hermitian spaces and the sign convention in the Statement.

## Proof

**Proof technique:** describe positive planes as graphs of strict contractions and recover the complex structure from orthogonal eigenspaces.

1.1 Hermitian Gram–Schmidt and the signature hypothesis give $h_j$-orthogonal positive and negative $m_j$-planes. Choose orthonormal bases so the form is $h((u,v),(u',v'))=u^*u'-v^*v'$. A positive $m_j$-plane $P$ projects injectively to $H_j^+$, since a nonzero vector in the kernel lies in the negative space. Equality of dimensions makes the projection an isomorphism, so $P$ is uniquely the graph of a map $Z:H_j^+\to H_j^-$. It is positive exactly when $u^*(I-Z^*Z)u>0$ for every nonzero $u$, equivalently $I-Z^*Z>0$. Conversely every such graph is a positive $m_j$-plane. [given, construct, algebra]

1.2 Let $J$ satisfy the conditions in the Statement. Since $J$ is complex-linear and $J^2=-1$, the distinct-root decomposition gives $H=P\oplus N$ for its $+i$ and $-i$ eigenspaces. The equality $\psi(Jx,Jy)=\psi(x,y)$ also preserves $h$: because $J$ commutes with multiplication by $i$, the real part of $h(x,y)$ is $\tfrac12\psi(x,iy)$ and is preserved as well. For $x\in P$ the positivity condition reads $2h(x,x)>0$, while for $x\in N$ it reads $-2h(x,x)>0$. Moreover $P$ and $N$ are $h$-orthogonal: invariance gives $h(x,y)=h(ix,-iy)=-h(x,y)$. Therefore their dimensions are at most $m_j$ each, and since their sum is $2m_j$ both dimensions equal $m_j$. [given, algebra]

2.1 For $m_j=0$ the unique map has operator norm zero and the stated inequality holds vacuously. Otherwise, the inequality is equivalent to the operator norm bound $\|Z\|<1$: compactness of the finite-dimensional unit sphere supplies the maximum of $\|Zu\|$. For $Z_0,Z_1$ in this ball and $0\le t\le1$, the triangle inequality gives $\|(1-t)Z_0+tZ_1\|\le(1-t)\|Z_0\|+t\|Z_1\|<1$. Hence the ball is open and convex, contains $0$, and is a connected complex manifold in its matrix entries. [given, step 1.1, algebra]

3.1 Conversely, for a positive $m_j$-plane $P$, its $h$-orthogonal complement $P^\perp$ is a negative $m_j$-plane by nondegeneracy and the signature. Define $J$ as $+i$ on $P$ and $-i$ on $P^\perp$. It is complex-linear, squares to $-1$, preserves $h$ and hence $\psi$, and for $x=p+n$ satisfies $\psi(x,Jx)=2h(p,p)-2h(n,n)>0$ when $x\ne0$. It is the unique such map with $+i$ eigenspace $P$. The graph and orthogonal-complement formulas depend continuously on $Z$, and therefore so do $J$ and the positive bilinear form $(x,y)\mapsto\psi(x,Jy)$. Symmetry follows from $\psi(Jx,Jy)=\psi(x,y)$ and $J^{-1}=-J$. Combining with steps 1.1, 1.2, and 2.1 identifies $\mathcal D_j$ with the matrix ball; use these charts to give it the asserted complex-manifold structure. Finite products of nonempty convex sets are nonempty and connected. If $m_j=0$ the ball and domain each consist of the unique zero-dimensional structure; the empty product is a point. [given, step 1.1, step 1.2, step 2.1, construct, algebra] ∎

## Source-reading boundary

Only the finite-dimensional period-domain calculation from the cited proof is used. No Baily–Borel theorem, algebraic moduli construction, absolute-Hodge propagation, or relative comparison is imported.
