---
id: def-associated-graded-variety-of-a-two-sided-ideal
kind: definition
title: "The associated graded variety of a two-sided ideal"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-pbw-filtration-by-tensor-degree-on-the-enveloping-algebra, thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra, prop-associated-graded-of-the-pbw-filtration-is-commutative, def-left-right-and-two-sided-ideal, def-classical-affine-algebraic-set-with-empty-boundaries, def-classical-vanishing-ideal, thm-classical-affine-zero-loci-form-zariski-closed-sets, def-classical-affine-coordinate-ring]
provenance:
  statement: literature-derived
  proof: not-applicable
justified_by: []
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "D. Barbasch, Cells in Weyl groups and primitive ideals (AIM workshop notes, 2006)"
      url: "http://www.liegroups.org/papers/summer06/cells.pdf"
      locator: "Section 3.3, printed pp.10-11 (associated variety of a primitive ideal)"
    - title: "A. Fadeev, Classification of primitive ideals of U(o(infinity)) and U(sp(infinity)), PhD thesis (Jacobs University)"
      url: "https://math.constructor.university/penkov/papers/PhD_Fadeev.pdf"
      locator: "Definitions 2.16-2.18, printed pp.22-24 (gr U(g) = S(g), gr I, Var(I))"
    - title: "D. A. Vogan, The orbit method and primitive ideals for semisimple Lie algebras (CMS Conf. Proc. 1986)"
      url: "https://math.mit.edu/~dav/vogan86CMS.pdf"
      locator: "Section 3 (associated varieties of primitive ideals)"
---

## Definition

Let $\mathfrak g$ be a finite-dimensional complex Lie algebra, with PBW
filtration $F_nU(\mathfrak g)$ and associated graded algebra
$\operatorname{gr}U(\mathfrak g)$
([[def-pbw-filtration-by-tensor-degree-on-the-enveloping-algebra]]), and let
$I\mathrel{\trianglelefteq}U(\mathfrak g)$ be a two-sided ideal
([[def-left-right-and-two-sided-ideal]]). For each $n\ge0$ put
$F_nI:=I\cap F_nU(\mathfrak g)$ with $F_{-1}I=0$, and define the **associated
graded ideal**

$$\operatorname{gr}I:=\bigoplus_{n\ge0}F_nI\big/F_{n-1}I\subseteq\operatorname{gr}U(\mathfrak g).$$

Fix an ordered basis $x_1,\dots,x_n$ of $\mathfrak g$. By
[[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]], its ordered
monomials form a basis of $U(\mathfrak g)$ and multiplication identifies
$\operatorname{gr}U(\mathfrak g)$ with the symmetric algebra $S(\mathfrak g)$,
which under this basis is the polynomial algebra $\mathbb C[x_1,\dots,x_n]$ on
the symbols; by [[prop-associated-graded-of-the-pbw-filtration-is-commutative]]
this algebra is commutative, so $\operatorname{gr}I$ is an ideal of it. The
dual basis of $x_1,\dots,x_n$ identifies $\mathfrak g^*$ with $\mathbb C^n$, so
elements of $S(\mathfrak g)$ are polynomial functions on $\mathfrak g^*$. The
**associated variety** of $I$ is the classical affine algebraic set
([[def-classical-affine-algebraic-set-with-empty-boundaries]])

$$\mathcal V(I):=\{f\in\mathfrak g^*:p(f)=0\text{ for every }p\in\operatorname{gr}I\}.$$

It is the zero locus of the family $\operatorname{gr}I$ in the polynomial ring
on $\mathfrak g^*$; equivalently $\mathcal V(I)=V(\operatorname{gr}I)$ in the
notation of the classical zero loci, a Zariski closed subset of $\mathfrak g^*$
([[thm-classical-affine-zero-loci-form-zariski-closed-sets]]).

## Remarks

- **$\operatorname{gr}I$ is a graded ideal, not merely a graded subspace.**
  If $u\in F_mU(\mathfrak g)$ and $v\in F_nI$, then $uv\in I\cap F_{m+n}U(\mathfrak g)$,
  and the symbol of $uv$ is the product of the symbols of $u$ and $v$; hence
  $\operatorname{gr}I$ is closed under multiplication by the whole of
  $\operatorname{gr}U(\mathfrak g)$.
- **The definition does not depend on the ordered basis.** The subspaces
  $F_nU(\mathfrak g)$ are defined by tensor degree with no reference to a basis,
  so $\operatorname{gr}I$ is intrinsic; changing the ordered basis changes the
  identification of $S(\mathfrak g)$ with a polynomial ring by an invertible
  linear change of variables, whose induced map on $\mathbb C^n$ is a linear
  isomorphism carrying one zero locus onto the other. The associated variety
  $\mathcal V(I)$ as a subset of $\mathfrak g^*$ is therefore well defined
  ([[def-classical-vanishing-ideal]], [[def-classical-affine-coordinate-ring]]).
- **Proper ideals and the empty case.** If $I=U(\mathfrak g)$ then
  $F_nI=F_nU(\mathfrak g)$ for all $n$, so $\operatorname{gr}I=\operatorname{gr}U(\mathfrak g)$
  and $\mathcal V(I)=\varnothing$; if $I=0$ then $\operatorname{gr}I=0$ and
  $\mathcal V(I)=\mathfrak g^*$. Both boundary cases are allowed by the
  definition. Primitive ideals are proper, but may be zero; for example,
  when $\mathfrak g=0$, the simple $U(0)=\mathbb C$-module $\mathbb C$ has
  annihilator $I=0$.
