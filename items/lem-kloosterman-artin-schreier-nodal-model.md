---
id: lem-kloosterman-artin-schreier-nodal-model
kind: lemma
title: "An explicit nodal model for the rank-two Kloosterman family"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement

Let $k$ be a field of characteristic $p>0$ containing $\mathbb F_p$, and let $\mathcal C$ be the closed subscheme of $\mathbb P^1_{z}\times\mathbb P^1_x\times\mathbb A^1_t$ defined by
$$(Z_1^p-Z_1Z_0^{p-1})X_1X_0=(X_1^2+tX_0^2)Z_0^p.$$
The projection $\mathcal C\to\mathbb A^1_t$ is projective. Over $t\ne0$, every point has a relative hypersurface chart with a unit partial derivative, and every geometric fibre is irreducible. The special fibre at $t=0$ is the union of two copies of $\mathbb P^1$, meeting transversely at exactly $p$ points and nowhere else; at each intersection the completed local equation of the family is $uv=t$. Translation $z\mapsto z+c$, $c\in\mathbb F_p$, acts on the family, preserves each component, and acts regularly on the set of intersection points. The special-fibre dual graph has two vertices and $p$ edges; its integral first homology is the augmentation representation of $\mathbb F_p$ on those edges.

## Facts & Assumptions

**Given:** The field $k$, its characteristic $p$, and the displayed projective family.

## Proof

1.1 The equation is bihomogeneous of degrees $p$ in $Z$ and $2$ in $X$, so it defines a closed subscheme of the product of projective lines over $\mathbb A^1$. The Segre embedding realizes that product as a closed subscheme of $\mathbb P^3$ over the base; hence the projection is projective. The translations $Z_1\mapsto Z_1+cZ_0$ preserve $Z_1^p-Z_1Z_0^{p-1}$ because $c^p=c$, and therefore act on the whole family. [given, construct, algebra]

2.1 On the chart where $x=X_1/X_0$ and $z=Z_1/Z_0$ are finite, the equation is $t=x(z^p-z-x)$. When $x\ne0$, its derivative with respect to $z$ is $-x$, a unit. When $t\ne0$ the equation excludes $x=0$, so this covers all finite-$x$, finite-$z$ points over the punctured base. At $x=0$ or $x=\infty$ with $t\ne0$, the projective equation forces $z=\infty$. [step 1.1, algebra]

3.1 At $x=0,z=\infty$ use $v=1/z$; the equation is $x(1-v^{p-1})=(x^2+t)v^p$, whose $x$-derivative is $1$ at $x=v=0$. At $x=\infty,z=\infty$ use $u=1/x$ and $v=1/z$; the equation is $u(1-v^{p-1})=(1+tu^2)v^p$, whose $u$-derivative is $1$ at $u=v=0$. These charts prove the unit-partial assertion for every $p$, including $p=2$. [step 2.1, algebra]

4.1 For $t\ne0$ over any algebraically closed extension field, the open fibre has function field given by $z^p-z=x+t/x$. A rational function $h$ with a pole has $h^p-h$ of pole order divisible by $p$, whereas $x+t/x$ has poles of order one at $0$ and $\infty$. Hence it is not of the form $h^p-h$. The Artin–Schreier polynomial has either one root in the base field or irreducible degree $p$: its splitting group is a subgroup of the additive group $\mathbb F_p$ of prime order. Thus the open fibre is integral. The projective equation has only one point above each of $x=0$ and $x=\infty$, so no further fibre component is supported in the finite boundary; the whole geometric fibre is irreducible. [step 3.1, algebra]

5.1 At $t=0$, the finite chart factors as $x(z^p-z-x)=0$. The first component is the closure of $x=0$, a projective line in $z$; the second is the graph of $x=z^p-z$ and is another projective line. They meet only at $x=0,z=c$ for $c\in\mathbb F_p$: the point $z=\infty$ of the graph maps to $x=\infty$, not $x=0$. At such a point put $u=x$ and $v=z^p-z-x$. Their Jacobian determinant with respect to $(x,z)$ is $-1$, so they are formal local coordinates and the family equation is $uv=t$. This proves transverse intersection at exactly the stated $p$ points. [step 4.1, algebra]

6.1 The translation $z\mapsto z+c$ preserves both components and carries the node labelled $a$ to the node labelled $a+c$, so the action on the $p$ edges of the dual graph is regular. Orient every edge from the first component to the second. The cellular boundary sends an edge to the difference of the two vertices, so its kernel consists of edge coefficients summing to zero: the augmentation representation. This also shows that its rank is $p-1$. [step 1.1, step 5.1, algebra] ∎
