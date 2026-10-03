---
id: def-contact-order-regular-components
kind: definition
title: "Contact order of two regular components at a point"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - lem-regular-local-quotient-by-parameter-is-regular
  - thm-one-dimensional-regular-local-rings-are-dvrs
  - cor-nakayama-generators-modulo-an-ideal
  - def-cartier-divisor
  - def-composition-series-and-length-of-a-module
  - def-dimension-noetherian-topological-space
  - def-effective-cartier-divisor
  - def-embedding-dimension-and-regular-local-ring
  - def-noetherian-ring
  - def-reduction-of-scheme
  - lem-cartier-divisor-local-equation-equivalence
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "19.4.12 blowups of local complete intersections and the normal-crossing computations, pp. 393-394"
    - title: "The Stacks Project, Resolution of Surfaces, Section 54.15 (Embedded resolution)"
      url: "https://stacks.math.columbia.edu/tag/0BI3"
      locator: "Section 54.15, equation 54.15.2.1 and Lemma 54.15.3: finite intersection length and its behavior under blowup"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited from the regular-local prerequisites.
Let $S$ be a regular Noetherian scheme of pure dimension two over a field
$k$ ([[def-embedding-dimension-and-regular-local-ring]],
[[def-noetherian-ring]], [[def-dimension-noetherian-topological-space]]).
Let $Y,Z\subseteq S$ be reduced closed subschemes of pure dimension one,
with no common irreducible component, and suppose every branch of either
curve through the chosen closed point $p$ is regular at $p$. Write
$A=\mathcal O_{S,p}$ and $I_Y,I_Z\subseteq A$ for their germ ideals. If
$p$ misses either curve, set $n_p(Y,Z)=0$. Otherwise the **contact order** is
$$n_p(Y,Z)=\operatorname{length}_{A/I_Y}\bigl(A/(I_Y+I_Z)\bigr).$$
Length means composition-series length
([[def-composition-series-and-length-of-a-module]]).

Here the required local dimension follows from the geometry, rather than
from the global dimension alone. A closed point of a pure one-dimensional
Noetherian curve has local dimension one: a zero-dimensional local ring
would make it the generic point of a zero-dimensional component, since the
point is closed. At a closed point on $Y$, the ambient regular local ring
cannot have dimension zero. If it had dimension one, it would be a DVR
([[thm-one-dimensional-regular-local-rings-are-dvrs]]), and a branch prime
with one-dimensional quotient would be zero. The closed curve would then
contain the generic point, hence the whole two-dimensional ambient component,
contradicting its pure dimension one. Thus $\dim A=2$ at every actual contact
point. Generic local rings of $S$ need not have dimension two.

The displayed length is finite. The minimal primes of $A/I_Y$ are the branch
primes of $Y$ through $p$. No common component means that $I_Z$ is contained
in none of these primes: an inclusion would make a one-dimensional branch of
$Y$ a component of $Z$. Thus the quotient has no generic point of a curve
branch in its support, and its support is only the closed point. A finite
module over a Noetherian local ring with this support has finite length. This
uses noncontainment in every branch prime, not the weaker assertion that the
image ideal is merely nonzero.

**Local equations.** A regular branch prime $P\subset A$ is principal.
Indeed, its regular quotient $A/P$ has cotangent dimension one, so choose
$f\in P$ with nonzero class in $\mathfrak m/\mathfrak m^2$. Then $A/(f)$ is
regular of dimension one
([[lem-regular-local-quotient-by-parameter-is-regular]]) and hence a DVR.
The prime $P/(f)$ must be zero since its quotient still has dimension one.
Therefore $P=(f)$, with $f$ a prime element of the regular local domain $A$
([[thm-regular-local-rings-are-domains-and-cohen-macaulay]]).
The reduced curve ideal is the intersection of its finitely many distinct
branch primes, so it is their product: if an element divisible by a product
of some distinct prime elements is also divisible by a new prime element,
primality forces divisibility of its remaining factor by that new element.
Induction gives the intersection/product equality. Consequently
$I_Y=(y)$ and $I_Z=(z)$, with $y,z$ products of the respective branch equations,
and
$$n_p(Y,Z)=\operatorname{length}_{A/(y)}\bigl(A/(y,z)\bigr).$$
These nonzero equations are regular sections; they define effective Cartier
data. Changing an equation by a unit does not change the quotient or its
length ([[def-effective-cartier-divisor]], [[def-cartier-divisor]],
[[lem-cartier-divisor-local-equation-equivalence]]).

**Symmetry and transversality.** The length equals the length of
$A/(I_Y+I_Z)$ as an $A$-module, and similarly as an $A/I_Z$-module, since all
composition factors are the same residue field. Thus contact is symmetric.
It equals one precisely when $(y,z)=\mathfrak m$: a nonzero local quotient
has length one precisely when it is the residue field. In that case the
classes of $y,z$ form a basis of the two-dimensional cotangent space. Their
regular parameter quotients are one-dimensional regular local rings, and
their tangent lines are distinct. Conversely, if both curve germs are regular
and their tangent lines are distinct, their equations have independent
cotangent classes and generate $\mathfrak m$ by Nakayama
([[cor-nakayama-generators-modulo-an-ideal]]). Hence their contact is one.
This is exactly **transversal meeting at $p$**. If either curve has at least
two branches through $p$, its product equation lies in $\mathfrak m^2$; its
cotangent class cannot be part of a parameter basis, so the positive contact
length is at least two, even if individual pairs of branches have distinct
tangents.

The **total contact order** is
$$n(Y,Z)=\sum_{p\in Y\cap Z}n_p(Y,Z).$$
The intersection is a zero-dimensional closed subscheme of a Noetherian
scheme because there is no common component, so it has finitely many closed
points. The sum is therefore a finite nonnegative integer. This definition
includes all regular finite-type surface cases and uses no perfectness or
rationality assumption on the residue fields.
