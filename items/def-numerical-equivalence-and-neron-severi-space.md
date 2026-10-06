---
id: def-numerical-equivalence-and-neron-severi-space
kind: definition
title: "Numerical equivalence and the Neron-Severi space of a surface"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-cartier-divisor
  - def-divisor-intersection-number-on-smooth-projective-surface
  - def-invertible-sheaf
  - def-picard-group-scheme
  - def-restriction-and-extension-of-scalars
  - lem-invertible-sheaf-dual-tensor-inverse
  - thm-cartier-divisors-mod-principal-to-picard
  - thm-intersection-with-curve-as-degree-of-restriction
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-surface-intersection-product-bilinear-and-symmetric
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "A. Kumar and K. Venkatram, MIT 18.727 Topics in Algebraic Geometry: Algebraic Surfaces, Spring 2008, Lecture 2"
      url: "https://ocw.mit.edu/courses/18-727-topics-in-algebraic-geometry-algebraic-surfaces-spring-2008/198274c0c471d31fc05d600e28e403db_lect2.pdf"
    - title: "The Stacks Project, Varieties, Section 33.45 (Numerical intersections)"
      url: "https://stacks.math.columbia.edu/tag/0BEL"
---

## Definition

Assume the Axiom of Choice, inherited from the intersection product and the
Euler-characteristic suppliers ([[def-axiom-of-choice]]). Let $k$ be a field
and let $X$ be an integral regular projective surface over $k$
([[def-divisor-intersection-number-on-smooth-projective-surface]]).

**Numerical equivalence.** Two invertible $\mathcal O_X$-modules
$\mathcal L,\mathcal M$ ([[def-invertible-sheaf]]) are **numerically
equivalent**, written $\mathcal L\equiv\mathcal M$, if
$$\mathcal L\cdot\mathcal N=\mathcal M\cdot\mathcal N \qquad\text{for every invertible }\mathcal O_X\text{-module }\mathcal N.$$
By $\mathbb Z$-bilinearity and symmetry of the intersection product
([[thm-surface-intersection-product-bilinear-and-symmetric]]) this is
equivalent to $(\mathcal L\otimes\mathcal M^{\vee})\cdot\mathcal N=0$ for every
invertible $\mathcal N$. An invertible sheaf is **numerically trivial** if it
is numerically equivalent to $\mathcal O_X$.

For Cartier divisors $C,D$ on $X$ ([[def-cartier-divisor]]) write
$C\equiv D$ when $\mathcal O_X(C)\equiv\mathcal O_X(D)$. Because
$D\mapsto[\mathcal O_X(D)]$ induces an isomorphism
$\operatorname{CaDiv}(X)/\operatorname{Prin}_C(X)\xrightarrow{\sim}
\operatorname{Pic}(X)$ and every invertible sheaf is
$\mathcal O_X(C)$ for a Cartier divisor $C$
([[thm-cartier-divisors-mod-principal-to-picard]],
[[thm-line-bundle-rational-section-cartier-divisor]]), this is equivalent to
$C\cdot E=D\cdot E$ for every Cartier divisor $E$; by linear-equivalence
invariance and the fact that every Cartier divisor is linearly equivalent to a
difference of effective Cartier divisors
([[def-divisor-intersection-number-on-smooth-projective-surface]],
[[thm-surface-intersection-product-bilinear-and-symmetric]]), it suffices to
test $E$ running over effective Cartier divisors. For an effective Cartier
divisor $E$ the number $C\cdot E$ is the degree of $\mathcal O_X(C)|_E$
([[thm-intersection-with-curve-as-degree-of-restriction]]), which is the
formulation used in the sources.

**Basic facts.**

1. Numerical equivalence is an equivalence relation: the defining equalities
   of integers are reflexive, symmetric and transitive. It is compatible with
   tensor products and duality, and the numerically trivial classes form a
   subgroup of the Picard group $\operatorname{Pic}(X)$
   ([[def-picard-group-scheme]]): if $\mathcal L\equiv\mathcal L'$ and
   $\mathcal M\equiv\mathcal M'$ then
   $\mathcal L\otimes\mathcal M\equiv\mathcal L'\otimes\mathcal M'$ because
   $\cdot$ is bilinear, and $\mathcal L^{\vee}\equiv\mathcal L'^{\vee}$
   because bilinearity gives
   $\mathcal L^{\vee}\cdot\mathcal N=\mathcal L'^{\vee}\cdot\mathcal N$
   ([[lem-invertible-sheaf-dual-tensor-inverse]]).
2. Linearly equivalent Cartier divisors are numerically equivalent
   ([[def-divisor-intersection-number-on-smooth-projective-surface]]): the
   intersection product depends only on the isomorphism classes of the
   associated invertible sheaves.
3. Consequently the intersection pairing descends to a well-defined symmetric
   $\mathbb Z$-bilinear pairing on the quotient
   $$\operatorname{N}^1(X):=\operatorname{Pic}(X)/\{\text{numerically trivial classes}\},$$
   and $\mathcal L\cdot\mathcal M$ depends only on the classes of $\mathcal L$
   and $\mathcal M$: if $\mathcal L\equiv\mathcal L'$ and
   $\mathcal M\equiv\mathcal M'$ then $\mathcal L\cdot\mathcal M
   =\mathcal L'\cdot\mathcal M'$ by testing $\mathcal L\equiv\mathcal L'$
   against $\mathcal M$ and $\mathcal M\equiv\mathcal M'$ against
   $\mathcal L'$.

**Real Neron-Severi space.** Set
$\operatorname{N}^1_{\mathbb R}(X):=\operatorname{N}^1(X)\otimes_{\mathbb Z}
\mathbb R$, the extension of scalars along $\mathbb Z\to\mathbb R$
([[def-restriction-and-extension-of-scalars]]). It is a real vector space; no finiteness theorem is used in this definition.
The pairing extends uniquely to a symmetric
$\mathbb R$-bilinear form
$$\operatorname{N}^1_{\mathbb R}(X)\times\operatorname{N}^1_{\mathbb R}(X) \longrightarrow\mathbb R,\qquad (x,y)\longmapsto x\cdot y,$$
the **intersection form**. For an invertible sheaf $H$ we write
$[H]\in\operatorname{N}^1_{\mathbb R}(X)$ for its class.

The form remains nondegenerate after extending scalars. Indeed,
$\operatorname{N}^1(X)$ is torsion-free: if $n v=0$ with $n\ne0$, then
$n(v\cdot w)=0$ for every integral class $w$, so $v$ is numerically trivial
and $v=0$. Put $V_{\mathbb Q}=\operatorname{N}^1(X)\otimes\mathbb Q$.
Every rational class has an integral multiple, so the pairing on
$V_{\mathbb Q}$ is nondegenerate by the same vanishing criterion.
For any finite-dimensional rational subspace $W\subseteq V_{\mathbb Q}$,
the functionals $v\mapsto v\cdot w$, with $w\in V_{\mathbb Q}$, span
$W^*$: otherwise their common kernel in $W$ would contain a nonzero vector,
contradicting nondegeneracy. Choose a basis of these functionals. Its
evaluation matrix on a rational basis of $W$ is invertible over $\mathbb Q$,
hence over $\mathbb R$. Every real class is a finite real combination of
vectors in a rational basis of some such $W$. If it pairs to zero with every
class, this invertible evaluation matrix forces all its coefficients to be
zero. In particular $[H]=0$ exactly when $H$ is
numerically trivial.
