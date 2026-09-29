---
id: def-direct-integral-of-a-measurable-hilbert-field
kind: definition
title: Direct integral of a measurable Hilbert field
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - cor-cauchy-schwarz-inequality-for-l-two
  - def-calligraphic-l-p-on-a-measure-space
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-measurable-function-between-measurable-spaces
  - def-measurable-hilbert-field-from-a-countable-fundamental-family
  - def-measure-null-set-and-almost-everywhere
  - def-nonnegative-lebesgue-integral
  - def-real-and-complex-inner-product-space
  - lem-measurable-sections-have-measurable-pointwise-inner-products
  - lem-complex-conjugation-and-modulus-laws
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - thm-the-lebesgue-integral-respects-almost-everywhere-equality
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "B. Bekka and P. de la Harpe, Unitary Representations of Groups, Duals, and Characters"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1 §1.G, printed pp. 59–60: fundamental families, measurable sections, almost-everywhere classes, square-integrability, and the direct-integral inner product"
    - title: "F. Bruhat, Lectures on Lie Groups and Representations of Locally Compact Groups, Ch. 10"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr14.pdf"
      locator: "Part III, Chapter 10 §§1.3–1.4, printed pp. 94–96: L² quotient and Riesz–Fischer completeness discussion on p. 95; measurable-field and square-integrability criteria on p. 96"
verification:
  precheck: n/a
  audited: 2026-09-30
---

## Definition

Let $(X,\mathcal B,\mu)$ carry a measurable complex Hilbert field
$(H_x,e_n(x))_{x\in X}$ as in
[[def-measurable-hilbert-field-from-a-countable-fundamental-family]], with
inner products linear in the first variable. Write $\mathscr M(H)$ for its
measurable sections. Define the square-integrable section space
$$\mathscr M_2(H):=\left\{\xi\in\mathscr M(H):\int_X\|\xi(x)\|_{H_x}^{2}\,d\mu(x)<\infty\right\}.$$
The integrand is a nonnegative measurable function: the section lemma
[[lem-measurable-sections-have-measurable-pointwise-inner-products]] makes
$x\mapsto\|\xi(x)\|$ measurable, and composition with $t\mapsto t^2$ preserves
measurability by
[[thm-composition-with-borel-functions-preserves-measurability]], whose
measurability convention is inverse-image measurability
[[def-measurable-function-between-measurable-spaces]]. Its integral
is the nonnegative Lebesgue integral
[[def-nonnegative-lebesgue-integral]].

For $\xi,\eta\in\mathscr M(H)$, put $\xi\sim_\mu\eta$ when there is a Borel
$\mu$-null set $N$ such that $\xi(x)=\eta(x)$ for every $x\notin N$, using the
noncomplete-base convention of the field definition. The **direct integral**
is the quotient set
$$
\int_X^{\oplus}H_x\,d\mu(x):=\mathscr M_2(H)/{\sim_\mu}.
$$
Write $[\xi]$ for the class of $\xi$. Addition and scalar multiplication are
induced by pointwise fibre operations, and the inner product is
$$\langle[\xi],[\eta]\rangle:=\int_X\langle\xi(x),\eta(x)\rangle_{H_x}\,d\mu(x).$$

**The admissible sections form a vector space.** Measurability of pointwise
linear combinations follows from the section lemma. If $a=\|\xi(x)\|$ and
$b=\|\eta(x)\|$, fibrewise expansion gives
$$\|\xi(x)+\eta(x)\|^2=a^2+b^2+2\operatorname{Re}\langle\xi(x),\eta(x)\rangle\le a^2+b^2+2ab\le2(a^2+b^2).$$
by Cauchy–Schwarz, $\operatorname{Re}z\le|z|$ for complex $z$, and
$2ab\le a^2+b^2$ (since $(a-b)^2\ge0$). The real-part bound follows from
$|u+iv|=\sqrt{u^2+v^2}$ and $u^2+v^2\ge u^2$ when $u>0$; it is immediate
when $u\le0$, and taking nonnegative square roots gives $u\le|u+iv|$ in the
positive case. The modulus and conjugation laws are recorded in
[[lem-complex-conjugation-and-modulus-laws]].
By monotonicity, positive homogeneity, and additivity of the nonnegative
integral ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]],
[[cor-additivity-of-the-nonnegative-lebesgue-integral]]), the integral of the
squared norm of a sum is finite whenever those of $\xi$ and $\eta$ are finite;
the comparison function $a^2+b^2$ is measurable by Borel composition
[[thm-composition-with-borel-functions-preserves-measurability]] and
measurable arithmetic [[thm-arithmetic-and-lattice-operations-preserve-measurability]].
For $c\ne0$,
$\|c\xi(x)\|^2=|c|^2\|\xi(x)\|^2$ and positive homogeneity keeps its
integral finite; for $c=0$ the zero function has integral zero. Hence
$\mathscr M_2(H)$ is a complex vector space.
The pointwise bound uses
[[thm-cauchy-schwarz-in-an-inner-product-space]] and the norm and scalar
conventions of [[def-real-and-complex-inner-product-space]].

**The quotient and its operations are well-defined.** The empty set is a Borel
null set by the $m=0$ clause of
[[thm-finite-and-countable-subadditivity-of-measures]], so $\sim_\mu$ is
reflexive; it is symmetric by equality, and it is transitive because two Borel
null witnesses have a null union by the same finite-subadditivity theorem. This
uses the definition of almost-everywhere equality
[[def-measure-null-set-and-almost-everywhere]]. If $\xi\sim_\mu\xi'$
and $\eta\sim_\mu\eta'$, then outside the union of their two witnesses the
pointwise sums agree, and so do the pointwise scalar multiples. The same finite
union argument shows that these operations do not depend on representatives.

**The displayed pairing is finite.** By the section lemma,
$h(x)=\langle\xi(x),\eta(x)\rangle$ is measurable. The modulus $|h|$ is
measurable by Borel composition with the complex modulus. The measurable
real-valued functions $f(x)=\|\xi(x)\|$ and $g(x)=\|\eta(x)\|$ belong to
$\mathcal L^2(\mu)$ by the definition of that space
[[def-calligraphic-l-p-on-a-measure-space]]. Fibrewise Cauchy–Schwarz and then
the scalar $L^2$ Cauchy–Schwarz inequality
[[cor-cauchy-schwarz-inequality-for-l-two]] give
$$\int_X|h(x)|\,d\mu(x)\le\int_X f(x)g(x)\,d\mu(x)\le\|f\|_2\|g\|_2<\infty.$$
Since $f,g\ge0$, the scalar theorem's $|fg|$ is $fg$. Here $fg$ is measurable by
[[thm-arithmetic-and-lattice-operations-preserve-measurability]], and the first
inequality uses monotonicity of the nonnegative integral
[[prop-order-and-scalar-rules-for-the-nonnegative-integral]].
Thus $h$ is an integrable complex function by
[[def-integrable-real-and-complex-functions-and-their-integrals]]. More
explicitly, write $h=u+iv$. The real coordinate projections are Borel, so
$u$ and $v$ are measurable, and $|u|,|v|\le |h|$ makes both real functions
integrable. Their classes, rather than a class of the complex function $h$,
belong to the real space $L^1(\mu)$ of
[[def-l-p-space-as-a-quotient-by-null-functions]]. The complex integral here
means precisely $\int h=\int u+i\int v$.

**The pairing does not depend on representatives.** If $\xi\sim_\mu\xi'$ and
$\eta\sim_\mu\eta'$, their pairings agree outside the union of the two null
witnesses. Both pairings are integrable by the preceding estimate. Their real parts agree almost everywhere, as do their imaginary parts.
Applying [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]
separately to these real $L^1$ classes, with $A=X$, gives equality of both
component integrals and hence of the complex integrals.

**The quotient is an inner-product space.** Fibrewise linearity in the first
variable passes through the integral by real linearity in
[[thm-linearity-of-the-lebesgue-integral-on-l-one]], applied to the integrable
real and imaginary parts. Indeed, if $h=u+iv$ and $c=a+ib$, then
$ch=(au-bv)+i(av+bu)$, so real linearity gives
$\int ch=c\int h$. For two integrable pairings $h=u+iv$ and $k=s+it$,
$h+k=(u+s)+i(v+t)$ gives $\int(h+k)=\int h+\int k$ in the same way;
all these real components are integrable by real linearity. Their complex
combinations are integrable since $|ch|=|c||h|$ and
$|h+k|\le |h|+|k|$, using nonnegative integral monotonicity and additivity.
Fibrewise conjugate
symmetry passes through it as well: for integrable $h=u+iv$, the definition
gives $\int\overline h=\int u-i\int v=\overline{\int h}$; integrability of
$\overline h$ follows from $|\overline h|=|h|$
[[def-complex-conjugate-real-imaginary-part-and-modulus]] and
[[lem-complex-conjugation-and-modulus-laws]]. Conjugate symmetry
and first-variable linearity give conjugate-linearity in the second variable.
For every class,
$$\langle[\xi],[\xi]\rangle=\int_X\|\xi(x)\|^2\,d\mu(x)\ge0.$$
This value is zero exactly when $\|\xi(x)\|^2=0$ almost everywhere, by
[[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]. Fibrewise positive
definiteness says this is exactly when $\xi(x)=0$ off a Borel null set, that is,
when $[\xi]=[0]$. Therefore the pairing is positive definite. These arguments
use the ordinary complex inner-product axioms
[[def-real-and-complex-inner-product-space]] and the integral convention above;
they do not use any form of the axiom of choice.

No completion is part of this definition. The next theorem proves that this
inner-product space is complete under its induced norm.

**Boundary cases.** If $X=\varnothing$, or if every fibre is zero-dimensional,
there is only the zero section and the quotient is the zero inner-product
space. If $\mu(X)=0$, then $X$ itself is a Borel null set, so every two
square-integrable sections are equivalent and the quotient is again zero.
For a one-point base $X=\{x_0\}$ with $\mu(\{x_0\})=m>0$ and
$H_{x_0}=\mathbb C$, take $e_1(x_0)=1$ and $e_n(x_0)=0$ for $n\ge2$.
Every section has the form $\xi_z(x_0)=z$ and
$$\langle[\xi_z],[\xi_w]\rangle=m z\overline w.$$
The direct integral is one-dimensional, with norm $\sqrt m\,|z|$. If instead
$m=0$, the preceding zero-measure calculation applies.
