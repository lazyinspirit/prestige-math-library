---
title: Article scheme conventions
status: draft
research_item: def-article-conventions
dependency_level: 0
---

PDF p. 1: Introduction: vector bundles of rank equal to dimension; PDF p. 3: Notation and conventions

## Prerequisites

- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

## Definition
Fix a base field $k$, assumed algebraically closed unless a statement specifies otherwise: every nonconstant polynomial in $k[t]$ has a root in $k$. A $k$-scheme is a scheme equipped with a morphism to $\operatorname{Spec}k$; a morphism of $k$-schemes commutes with these structure morphisms.

Write $\mathrm{Sch}_k$ for the category whose objects are quasi-compact, quasi-separated $k$-schemes and whose morphisms are $k$-morphisms. Quasi-compact means that every open cover has a finite subcover; quasi-separated means that the intersection of any two affine open subschemes is quasi-compact. The opposite category $\mathrm{Sch}_k^{\mathrm{op}}$ has the same objects and reverses all arrows. Thus a functor with domain $\mathrm{Sch}_k^{\mathrm{op}}$ is contravariant on $\mathrm{Sch}_k$: a $k$-morphism $X\to Y$ induces a map from the value at $Y$ to the value at $X$.

In the article, an affine $k$-scheme $\operatorname{Spec}A$ is assumed to be of finite type over $k$, meaning that its coordinate $k$-algebra $A$ is finitely generated. The dimension of a scheme is the supremum of the lengths of chains of strict inclusions of irreducible closed subsets. A vector bundle is a finite locally free $\mathcal O_X$-module. Its rank is the well-defined locally constant function $x\mapsto\dim_{\kappa(x)}(E\otimes_{\mathcal O_X}\kappa(x))$; it may vary between connected components. Having rank $r$ means this function is constantly $r$, equivalently that the bundle is locally isomorphic everywhere to $\mathcal O_X^r$. For a finite-dimensional scheme, critical rank means rank equal to the dimension of the scheme.

## Justification
The definitions of a scheme over a base and of its morphisms are those of [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base). The two compactness conditions are those of [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme); they select objects of the category and do not require schemes to be separated. Identity maps and composites of $k$-morphisms again commute with the structure maps, so these objects and morphisms form a category. Reversing identities and composition defines its opposite, and the stated direction of a contravariant functor is the direction of its action on the reversed arrow. Finite generation specifies the article’s convention for affine schemes. The well-definedness and local constancy of rank are supplied by [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank). The constant-rank and dimension convention is a comparison of two integers and makes no splitting or classification assertion.
