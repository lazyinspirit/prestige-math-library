---
id: def-exceptional-curve-and-contraction
kind: definition
title: Exceptional curves of the first kind and their contractions
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
- cor-picard-projective-line-integers
- def-axiom-of-choice
- def-blowup-scheme-along-ideal
- def-cartier-divisor
- def-closed-immersion-schemes
- def-degree-invertible-sheaf-proper-dimension-one
- def-divisor-intersection-number-on-smooth-projective-surface
- def-effective-cartier-divisor
- def-integral-scheme
- def-invertible-sheaf
- def-invertible-sheaf-of-cartier-divisor
- def-projective-morphism-pre-proj
- lem-uniqueness-of-twists-on-the-projective-line
- thm-cohomology-projective-space-twisting-sheaves
- thm-intersection-with-curve-as-degree-of-restriction
- def-proper-morphism
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: The Stacks Project, Resolution of Surfaces, Section 54.16 (Contracting exceptional curves), tag 0C2I
    url: https://stacks.math.columbia.edu/tag/0C2I
  - title: The Stacks Project, Resolution of Surfaces, Lemma 54.3.1 (Blowing up a regular surface at a point), tag
      0AGQ
    url: https://stacks.math.columbia.edu/tag/0AGQ
  - title: Olivier Debarre, Introduction to Mori Theory (M2 course notes, 2016 version)
    url: https://www.math.ens.psl.eu/~debarre/M2.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Assume the Axiom of Choice where it is inherited from the degree and
intersection suppliers below ([[def-axiom-of-choice]]).
Let $X$ be a Noetherian scheme.

**(a) Exceptional curves of the first kind.** A closed subscheme
$E\subseteq X$ ([[def-closed-immersion-schemes]]) is an *exceptional curve of
the first kind* if:

1. $E$ is an effective Cartier divisor on $X$
   ([[def-effective-cartier-divisor]], [[def-cartier-divisor]]);
2. there is a field $\kappa$ and an isomorphism
   $\mathbb P^1_\kappa\to E$ of schemes;
3. the normal sheaf $\mathcal N_{E/X}=\mathcal O_X(E)|_E$ pulls back to
   $\mathcal O_{\mathbb P^1_\kappa}(-1)$. Equivalently, its dual, the
   conormal sheaf $\mathcal O_X(-E)|_E$, pulls back to
   $\mathcal O_{\mathbb P^1_\kappa}(1)$
   ([[def-invertible-sheaf-of-cartier-divisor]], [[def-invertible-sheaf]]).

Condition (3) is independent of the choice of the isomorphism in (2): any two
such isomorphisms differ by an automorphism $\sigma$ of
$\mathbb P^1_\kappa$, precomposition with $\sigma$ changes the pulled-back
normal sheaf by $\sigma^*$, and $\sigma^*\mathcal O(-1)\cong\mathcal O(-1)$
because pullback induces an automorphism of the Picard group $\mathbb Z$,
so it sends $\mathcal O(1)$ to $\mathcal O(1)$ or $\mathcal O(-1)$; the latter
is excluded by preservation of $H^0$, since these have dimensions two and
zero, respectively ([[thm-cohomology-projective-space-twisting-sheaves]]).
Thus it preserves $\mathcal O(-1)$. The twisting sheaves are classified by their twist index
([[cor-picard-projective-line-integers]],
[[lem-uniqueness-of-twists-on-the-projective-line]]). The *degree* of the
normal sheaf is the integer $d$ with
$\mathcal N_{E/X}\cong\mathcal O_{\mathbb P^1_\kappa}(d)$.

**(b) Contractions.** Let $E\subseteq X$ be an exceptional curve of the first
kind. A *contraction of $E$* is a proper morphism $b\colon X\to X'$
([[def-proper-morphism]]) such that:

1. $X'$ is a Noetherian scheme;
2. there is a closed point $x'\in X'$ whose local ring $\mathcal O_{X',x'}$ is
   regular of dimension $2$;
3. $X$ together with $b$ is the blowup of $X'$ at $x'$ in the sense of
   [[def-blowup-scheme-along-ideal]], and $E$ is identified with the
   scheme-theoretic exceptional fibre $b^{-1}(x')$.

Thus a contraction is exactly, up to unique isomorphism over $X$, the inverse
of the blowing up of a regular point of a surface. The *contracted curve* is
$E$. Uniqueness with an initially unspecified target is a separate theorem
proved later on this page.

**(c) Contraction notation.** If $f\colon X\to Y$ is a morphism of schemes and
$E\subseteq X$ is an integral curve ([[def-integral-scheme]]), we say that $E$
is *contracted by $f$* if $f(E)$ is a single point of $Y$. This is a condition
on $f$ alone and does not presuppose that $f$ is a blowup or that $E$ is
exceptional.

**(d) Dictionary on a regular projective surface.** Let $k$ be a field, let
$X$ be an integral regular projective surface over $k$, and let $E$ be an
integral effective Cartier divisor on $X$
([[def-divisor-intersection-number-on-smooth-projective-surface]]). Suppose
$E$ is $k$-isomorphic to $\mathbb P^1_\kappa$ for a finite extension
$\kappa/k$, where $\kappa=H^0(E,\mathcal O_E)$ is the constant field of $E$,
not the function field $\kappa(E)$. Then $E$ is exceptional of the first kind
exactly when

$$E\cdot E=-[\kappa:k].$$

In particular, for $E\cong\mathbb P^1_k$ over $k$ the criterion is
$E\cdot E=-1$. Indeed the normal line bundle is $\mathcal O(d)$ for a unique
$d\in\mathbb Z$ by [[cor-picard-projective-line-integers]] and
[[lem-uniqueness-of-twists-on-the-projective-line]], and the
projective-space cohomology calculation
([[thm-cohomology-projective-space-twisting-sheaves]]) gives

$$\chi_k\bigl(\mathbb P^1_\kappa,\mathcal O(d)\bigr)=[\kappa:k](d+1),$$

because restriction of scalars along $\kappa/k$ multiplies the dimensions of
the $k$-vector spaces $H^q(\mathbb P^1_\kappa,\mathcal O(d))$ by $[\kappa:k]$
and $H^0=\kappa[x_0,x_1]_d$, $H^1=\kappa[x_0,x_1]_{-d-2}$ have dimensions
$d+1$ and $-d-1$ for $d\ge0$ and $d\le-2$ respectively, with all other terms
zero. By [[def-degree-invertible-sheaf-proper-dimension-one]] the $k$-degree
of the invertible sheaf $\mathcal O_{\mathbb P^1_\kappa}(d)$ is therefore
$[\kappa:k]d$, and the restriction-degree identity
([[thm-intersection-with-curve-as-degree-of-restriction]]) applied to the
effective Cartier divisors $E$ and $E$ on $X$ gives

$$E\cdot E=\deg_E\bigl(\mathcal N_{E/X}\bigr)=[\kappa:k]d .$$

Hence $E$ is exceptional of the first kind if and only if the normal twist is
$d=-1$, which is equivalent to $E\cdot E=-[\kappa:k]$, and to $E\cdot E=-1$
when $\kappa=k$.

## Remarks

- The dictionary (d) is the reason the notion of exceptional curve of the
  first kind can be checked in practice on a regular projective surface: the
  normal twist $-1$ is an intersection number, and intersection numbers are
  computable without constructing a contraction. It says nothing about
  existence of a contraction of a given exceptional curve; that question is
  taken up by the contraction and factorisation theorems below.
- The scheme-theoretic exceptional fibre $b^{-1}(x')$ in (b) is the
  fibre product $X\times_{X'}\operatorname{Spec}\kappa(x')$; it is a
  $\kappa(x')$-scheme isomorphic to $\mathbb P^1_{\kappa(x')}$
  ([[def-blowup-scheme-along-ideal]]). Condition (3) records the extra
  requirement that the given $E$ is that fibre, not merely a curve lying over
  $x'$.
- The intersection number $E\cdot E$ in (d) is defined on the regular
  projective surface in (d), over an arbitrary field; no embedding in projective
  space and no point of $X$ outside $E$ is used
  ([[def-divisor-intersection-number-on-smooth-projective-surface]]).
- The Axiom of Choice is inherited: the degree of an invertible sheaf on a
  proper curve is defined through Euler characteristics, and the intersection
  product through the degree
  ([[def-degree-invertible-sheaf-proper-dimension-one]]). No other choice
  principle is used, and no choice is made in the definition itself.
