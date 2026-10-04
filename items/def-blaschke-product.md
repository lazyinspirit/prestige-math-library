---
id: def-blaschke-product
kind: definition
title: "Blaschke factors and Blaschke products"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-unit-disc-upper-half-plane-and-blaschke-factor, thm-blaschke-factor-is-a-disc-automorphism, def-normal-convergence-of-holomorphic-products, thm-normal-convergence-of-holomorphic-products, thm-hardy-zero-set-blaschke-condition, def-complex-conjugate-real-imaginary-part-and-modulus, lem-complex-conjugation-and-modulus-laws]
justified_by: [thm-blaschke-product-boundary-values-and-zeros]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §2"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "Blaschke products, printed pp. 51-53: the estimate $|1-b_n(z)|\\le(1-|z_n|)(1+|z|)/(1-|z|)$, normal convergence, $|B|\\le1$ and the zeros of B."
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §5.8"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "Blaschke Product, printed pp. 35-37: the normalized factor $b_\\lambda$, the convergence of the product and the zero set."
---

## Definition

For $a\in\mathbb D$, let
$$\varphi_a(z)=\frac{a-z}{1-\overline a z}$$
be the published Blaschke factor of
[[def-unit-disc-upper-half-plane-and-blaschke-factor]], a biholomorphic
self-map of $\mathbb D$ by [[thm-blaschke-factor-is-a-disc-automorphism]].
Define the **normalized Blaschke factor**
$$b_a(z):=\frac{\overline a}{|a|}\,\varphi_a(z)\ \ (a\ne0),\qquad b_0(z):=z .$$
Since $|\overline a/|a||=1$, each $b_a$ is holomorphic on an open neighbourhood
of the closed disc (the denominator $1-\overline a z$ does not vanish there),
$b_a$ is zero-free on $\mathbb D$ except for the simple zero at $a$ (the zero of
$\varphi_a$), and
$$b_a(0)=\frac{\overline a}{|a|}\,a=|a|\ge0,\qquad |b_a(z)|\le1\quad(z\in\mathbb D),$$
the last inequality because $\varphi_a$ maps $\mathbb D$ into itself. On the
unit circle one has $|b_a(\zeta)|=1$ for every $\zeta\in\mathbb T$ (identified
with the unit circle): for $|\zeta|=1$, $|1-\overline a\zeta|=|\zeta|\cdot|\overline\zeta-\overline a|=|a-\zeta|$
by [[lem-complex-conjugation-and-modulus-laws]] and
[[def-complex-conjugate-real-imaginary-part-and-modulus]], so
$|\varphi_a(\zeta)|=1$.

**Blaschke sequences and products.** A sequence $(a_n)_{n\ge1}$ in $\mathbb D$
is a **Blaschke sequence** if $\sum_n(1-|a_n|)<+\infty$; its **Blaschke
product** is the holomorphic product
$$B(z):=\prod_{n\ge1}b_{a_n}(z),$$
defined as the locally uniform limit of the partial products
$B_N:=\prod_{n\le N}b_{a_n}$; for the empty sequence set $B:=1$. This
definition is meaningful because the product converges normally on $\mathbb D$
in the sense of [[def-normal-convergence-of-holomorphic-products]]: a
Blaschke sequence satisfies $|a_n|\to1$, so for every compact $K\subseteq\mathbb D$
only finitely many $a_n$ lie in $K$, and for every $a\in\mathbb D\setminus\{0\}$ and
$|z|\le r<1$ the identity
$$1-b_a(z)=(1-|a|)\,\frac{1+\frac{\overline a}{|a|}z}{1-\overline a z},\qquad |1-b_a(z)|\le(1-|a|)\frac{1+r}{1-r}$$
holds: the identity is a direct computation from $b_a=\frac{\overline a}{|a|}\frac{a-z}{1-\overline a z}$ using $|a|^2=a\overline a$, and the estimate uses $|1+\frac{\overline a}{|a|}z|\le1+r$ and $|1-\overline az|\ge1-r$. For $a=0$, $b_0(z)=z$ and $|1-b_0(z)|\le1+r=(1-|0|)(1+r)\le(1-|0|)(1+r)/(1-r)$, so the same estimate holds without dividing by $|a|$. Hence
$$\sum_n\sup_{|z|\le r}|1-b_{a_n}(z)|\le\frac{1+r}{1-r}\sum_n(1-|a_n|)<+\infty .$$
The published normal-convergence theorem therefore applies: the partial
products converge locally uniformly to a holomorphic $B$ that has exactly the
zeros $a_n$ with the multiplicity with which they occur, and satisfies
$|B(z)|\le1$ on $\mathbb D$ ([[thm-normal-convergence-of-holomorphic-products]]).
The limit does not depend on the enumeration of the sequence: the
normal-convergence criterion is a condition on the set of factors, and for two
enumerations and finite initial segments $A,B$ containing a common block
$\{1,\dots,N\}$ the quotient $\prod_{n\in A}b_{a_n}/\prod_{n\in B}b_{a_n}$
deviates from $1$ by at most a constant times the tail sum
$\sum_{n>N}\sup_{|z|\le r}|1-b_{a_n}(z)|$, which tends to $0$; hence the two
partial-product sequences have the same locally uniform limit. The
Blaschke sequence is reproduced by
[[thm-hardy-zero-set-blaschke-condition]] from the zero set of a Hardy
function. The boundary-modulus property $|B^*|=1$ almost everywhere is not
part of this definition; it is proved in
[[thm-blaschke-product-boundary-values-and-zeros]].
