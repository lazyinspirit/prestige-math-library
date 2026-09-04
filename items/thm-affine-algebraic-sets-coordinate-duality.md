---
id: thm-affine-algebraic-sets-coordinate-duality
kind: theorem
title: "Affine algebraic sets and reduced affine k-algebras at the object level"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-coordinate-ring-affine-algebraic-set, def-reduced-affine-algebra, def-finite-type-and-module-finite-algebras, thm-affine-nullstellensatz-correspondence]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Proposition 3.25"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, Chapter 1 affine-variety dictionary"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
---

## Statement

Let $k$ be an algebraically closed field.

1. If $X\subseteq \mathbf A_k^n$ is an affine algebraic set, then its coordinate
ring $k[X]$ is a reduced affine $k$-algebra.

2. If $A$ is a reduced affine $k$-algebra, then there exist $n\ge0$ and an
affine algebraic set $X\subseteq \mathbf A_k^n$ such that
$$ A\cong k[X] $$
as $k$-algebras.

Thus affine algebraic sets correspond to reduced affine $k$-algebras at the
object level, with the morphism half deferred to the next page.

## Facts & Assumptions

**Given:** An algebraically closed field $k$.

[L1] For an affine algebraic set $X\subseteq \mathbf A_k^n$, $$ k[X]=k[x_1,\ldots,x_n]/I(X) $$ ([[def-coordinate-ring-affine-algebraic-set]]).

[L2] A reduced affine $k$-algebra is a reduced commutative $k$-algebra of finite type over $k$ ([[def-reduced-affine-algebra]]).

[L3] A commutative $k$-algebra is of finite type exactly when it is isomorphic to a quotient $k[x_1,\ldots,x_n]/I$ for some $n$ and some ideal $I$ ([[def-finite-type-and-module-finite-algebras]]).

[L4] Over an algebraically closed field, algebraic sets correspond exactly to radical ideals ([[thm-affine-nullstellensatz-correspondence]]).

## Proof

**Proof technique:** direct.

1.1 Let $X\subseteq \mathbf A_k^n$ be an affine algebraic set. By [L1], the ring $k[X]$ is a quotient of the polynomial ring $k[x_1,\ldots,x_n]$, so [L3] shows that $k[X]$ is of finite type over $k$. [L1, L3, given]

1.2 Let $A$ be a reduced affine $k$-algebra. By [L2] and [L3], there exist $n\ge0$ and an ideal $I\subseteq k[x_1,\ldots,x_n]$ with $A\cong k[x_1,\ldots,x_n]/I$. Because $A$ is reduced, if $f^m\in I$ then the class of $f$ in $A$ is nilpotent, hence zero; therefore $f\in I$. So $I$ is a radical ideal. [L2, L3, given, algebra]

2.1 To see that $k[X]$ is reduced, let $\overline f\in k[X]$ satisfy $\overline f^{\,m}=0$ for some $m\ge1$. Choosing a representative $f$ in the polynomial ring, this means $f^m\in I(X)$. Since $I(X)$ is radical by [L4], we have $f\in I(X)$, so $\overline f=0$. Thus $k[X]$ is reduced. Together with step 1.1 and [L2], this proves part (1). [L2, L4, step 1.1, algebra]

2.2 By [L4], the radical ideal $I$ is the vanishing ideal of the algebraic set $X:=V(I)\subseteq \mathbf A_k^n$. Then [L1] gives $k[X]=k[x_1,\ldots,x_n]/I(X)=k[x_1,\ldots,x_n]/I$, so $A\cong k[X]$. [L1, L4, step 1.2]

3.1 Steps 2.1 and 2.2 establish the stated object-level correspondence between affine algebraic sets and reduced affine $k$-algebras. [step 2.1, step 2.2] ∎
