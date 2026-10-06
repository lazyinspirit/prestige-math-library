---
id: def-intersection-with-a-cartier-divisor-and-first-chern-class
kind: definition
title: "Intersection with an invertible sheaf and the first Chern class"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-chow-group-of-cycles-mod-rational-equivalence
  - def-effective-cartier-divisor
  - def-field-of-fractions
  - def-invertible-sheaf
  - def-rational-section-line-bundle
  - def-sheaf-total-quotient-rings
  - lem-cycle-of-a-closed-subscheme
  - lem-flat-pullback-chow-groups
  - lem-order-function-one-dimensional-local-domain
  - lem-proper-pushforward-of-cycles-well-defined
  - lem-two-dimensional-tame-symbol-reciprocity
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "The Stacks Project, Chow Homology and Chern Classes, Sections 42.24-42.30 (divisor of an invertible sheaf and Gysin homomorphisms for divisors)"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Sections 42.24-42.30: the divisor of a rational section of an invertible sheaf and the associated Gysin map, including the well-definedness via the Key Lemma"
    - title: "Ravi Vakil, Math 245 Topics in Algebraic Geometry: Introduction to Intersection Theory, Class 11"
      url: "https://math.stanford.edu/~vakil/245/245class11.pdf"
      locator: "Class 11: first Chern classes of invertible sheaves and intersection with Cartier divisors"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the
proper/quasi-finite and scheme base-change suppliers. Let $k$ be a field and
let $X$ be a scheme locally of finite type over $k$. Let $L$ be an invertible
$\mathcal O_X$-module ([[def-invertible-sheaf]]).

1. **Integral case.** Let $W\subseteq X$ be integral of dimension $n$, with
   function field $k(W)$ ([[def-sheaf-total-quotient-rings]],
   [[def-field-of-fractions]]), and let $s$ be a nonzero rational section of
   $L|_W$ ([[def-rational-section-line-bundle]]). The **Weil divisor of $s$** is
   $$\operatorname{div}_L(s)=\sum_{Z\subseteq W}\operatorname{ord}_{\mathcal O_{W,Z}}(s)[Z]\in Z_{n-1}(W),$$
   the sum over the codimension-one integral closed subschemes $Z\subseteq W$,
   with the order function of [[lem-order-function-one-dimensional-local-domain]]
   read on a local generator of $L$ at the generic point of $Z$; the sum is
   locally finite, and finite if $W$ is of finite type. The **first Chern class** $c_1(L)\cap[W]:=[\operatorname{div}_L(s)]\in A_{n-1}(W)$
   is independent of the chosen nonzero rational section (two such differ by a
   rational function, whose divisor is rationally equivalent to zero), and
   therefore defines a codimension-one Chow class; on a smooth $W$ this is the
   first Chern class in its Chow ring.
2. **General case.** For an integral closed subscheme $i:W\hookrightarrow X$ of
   dimension $d+1$ set
   $c_1(L)\cap[W]:=i_*\bigl(c_1(i^*L)\cap[W]\bigr)\in A_d(X)$, where $i_*$ is
   the proper pushforward ([[lem-proper-pushforward-of-cycles-well-defined]]);
   extend $\mathbb Z$-linearly. The resulting operation
   $c_1(L)\cap-:A_{d+1}(X)\to A_d(X)$ is well defined on Chow groups (this is
   the content of the next two references) and graded.

**Basic properties.** (i)
$c_1(L\otimes_{\mathcal O_X}N)\cap\alpha=(c_1(L)+c_1(N))\cap\alpha$ and
$c_1(\mathcal O_X)\cap\alpha=0$ for all $\alpha$. (ii) If $X$ is pure of
dimension $d+1$ and a global section $s$ of $L$ is a nonzerodivisor on
$\mathcal O_X$, its zero scheme $D$ is an effective Cartier divisor and
$c_1(L)\cap[X]=[D]$ in $A_d(X)$. More generally the same formula on a
pure-dimensional closed subscheme $Y$ requires $s|_Y$ to be a nonzerodivisor on
$\mathcal O_Y$. (iii) $c_1(L)\cap-$ commutes with proper pushforward and flat
pullback: for $f:X\to Y$ proper,
$f_*(c_1(f^*L)\cap\alpha)=c_1(L)\cap f_*\alpha$, and for $f$ flat of relative
dimension $n$, $f^*(c_1(L)\cap\alpha)=c_1(f^*L)\cap f^*\alpha$. (iv) $c_1(L)$
depends only on the isomorphism class of $L$.

**Cartier Gysin.** For a section $s$ of $L$ with zero scheme
$j:D\hookrightarrow X$, after any base change define
$j^!:A_m(X')\to A_{m-1}(D')$ on integral $V\subset X'$ by the Cartier divisor
of $s|_V$ if $V$ is not contained in $D'$, and by $c_1(L|_V)\cap[V]$ if it is;
push this class from $D'\cap V$ to $D'$. This works even when the pulled-back
zero divisor is not Cartier. It commutes with proper pushforward and flat
pullback, two Cartier Gysins commute, and
$j^!j_*\beta=c_1(L|_D)\cap\beta$.

**Well-definedness.** All the constructions above are local in the integral
cycle, so they are defined for locally finite cycles as well. In the integral
case, a nonzero rational section $s$ of $L|_W$ is a rational multiple of a local
generator, so the order function of
[[lem-order-function-one-dimensional-local-domain]] is defined at the generic
point of every codimension-one integral closed subscheme $Z\subseteq W$, and
only finitely many $Z$ meeting any fixed affine chart receive a nonzero order: on that chart $W$ is a
Noetherian domain and $s$ is represented by a fraction whose numerator and
denominator vanish on only finitely many height-one primes, exactly as in the
finiteness discussion of [[def-chow-group-of-cycles-mod-rational-equivalence]].
The class $[\operatorname{div}_L(s)]$ is independent of $s$ because the ratio of
two rational sections is a rational function of $k(W)^*$ and principal divisors
lie in $\operatorname{Rat}_{n-1}(W)$; this is the definition of rational
equivalence. In the general case the operation is extended by proper pushforward
along $i$ and by linearity; that it descends through rational equivalence on $X$
is the content of [[lem-two-dimensional-tame-symbol-reciprocity]] (the tame
symbol reciprocity that controls the difference of two iterated Cartier
intersections) together with the facts that proper pushforward and flat
pullback each descend to Chow groups
([[lem-flat-pullback-chow-groups]],
[[lem-proper-pushforward-of-cycles-well-defined]]). Property (ii) is the cycle
computation of [[lem-cycle-of-a-closed-subscheme]]. For (iii), the flat-pullback
identity is the generic-length calculation in [[lem-flat-pullback-chow-groups]]
applied to the divisor cycle; for proper pushforward, trivializing the line
bundle at codimension-one generic points reduces the identity to the norm-order
formula in [[lem-proper-pushforward-of-cycles-well-defined]]. Both identities
are checked on integral cycles and extend linearly. Property (iv) follows
because an isomorphism of invertible sheaves identifies their local generators
and hence the resulting divisor coefficients.
