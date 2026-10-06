---
id: def-the-laurent-polynomial-ring
kind: definition
title: "The Laurent polynomial ring as the principal localisation of Z[t] at t"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
  - def-principal-localisation
  - def-multiplicative-subset-and-localisation
  - thm-universal-property-of-localisation
  - prop-units-in-a-localisation
  - prop-localisation-zero-equality-and-kernel-criteria
  - def-polynomial-ring-over-a-commutative-ring
  - thm-polynomial-ring-is-a-commutative-ring
  - cor-polynomial-ring-over-a-domain-is-a-domain
  - def-ring-homomorphism
  - def-commutative-ring
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Section 10.9 (Localization, Tag 00CM): the localisation of a ring, its universal property and the localisation of a polynomial ring at a monomial"
      url: "https://stacks.math.columbia.edu/tag/00CM"
      locator: "Definitions 10.9.1-10.9.2 and Proposition 10.9.3 in Section 10.9 (00CM); the noncommutative Laurent evaluation is proved locally"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey (background on Burau matrices, the cyclic cover and absolute homology)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
      locator: "Section 4.2, printed pp. 46-47; section 4.4, printed p. 52. Relative-module, basis and specialization calculations are supplied locally."
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $\mathbb Z[t]$ be the polynomial ring over the integers
([[def-polynomial-ring-over-a-commutative-ring]],
[[thm-polynomial-ring-is-a-commutative-ring]]) and let
$$S=\{t^k:k\ge0\}.$$
The set $S$ is multiplicative, and the **Laurent polynomial ring** is the
principal localisation
$$\Lambda_1:=\mathbb Z[t]_S=S^{-1}\mathbb Z[t]$$
([[def-principal-localisation]], [[def-multiplicative-subset-and-localisation]]).
It is a commutative ring with unit $1=t^0$ ([[def-commutative-ring]]). Write
again $t$ for the image of the indeterminate under the localisation map; then
$t$ is a unit with inverse $t^{-1}$
([[prop-units-in-a-localisation]]). Every element of $\Lambda_1$ has a
representative
$$\sum_{k\in\mathbb Z}a_kt^k,\qquad a_k\in\mathbb Z,$$
with only finitely many nonzero coefficients, obtained by writing a fraction
$p/t^N$ as a finite $\mathbb Z$-linear combination of the powers
$t^{k-N}$; the finite coefficient sequence is unique: after multiplying two such sums
by a common sufficiently large power of $t$, equality becomes equality of
ordinary polynomials. The localisation map $\mathbb Z[t]\to\Lambda_1$ is
injective because $\mathbb Z[t]$ is a domain; hence their coefficients agree
([[cor-polynomial-ring-over-a-domain-is-a-domain]]). Equivalently, two such
sums are equal exactly when their coefficient sequences agree
([[prop-localisation-zero-equality-and-kernel-criteria]]).

**Universal property.** Let $A$ be a ring with unit and let
$\varphi\colon\mathbb Z[t]\to A$ be a unital ring homomorphism with
$\varphi(t)$ a unit of $A$. Then there is a unique unital ring homomorphism
$\widetilde\varphi\colon\Lambda_1\to A$ with
$\widetilde\varphi(t)=\varphi(t)$. Equivalently, for every unital ring $A$ and
every unit $u\in A$ there is a unique unital ring homomorphism
$\Lambda_1\to A$ with $t\mapsto u$ ([[thm-universal-property-of-localisation]],
[[def-ring-homomorphism]]).

The cited localisation theorem treats commutative target rings. For the
possibly noncommutative target used here, define
$\sum_k a_kt^k\mapsto\sum_k(a_k1_A)u^k$. Unique Laurent coefficients make
this well defined. Integer multiples of $1_A$ are central, and
$u^ku^l=u^{k+l}$ for all integers $k,l$, so finite distributivity proves
additivity, multiplicativity and preservation of $1$. Every unital
homomorphism must send $a_k$ to $a_k1_A$ and $t^k$ to $u^k$, proving
uniqueness. Taking $u=\varphi(t)$ gives the asserted extension of $\varphi$.

**Augmentation.** There is a unique unital ring homomorphism
$$\varepsilon\colon\Lambda_1\longrightarrow\mathbb Z,\qquad \varepsilon\Bigl(\sum_{k\in\mathbb Z}a_kt^k\Bigr)=\sum_{k\in\mathbb Z}a_k,$$
the **sum-of-coefficients map** ([[thm-universal-property-of-localisation]]); it
is well defined because the coefficients are summable and their total sum is
unchanged along the relation of
[[prop-localisation-zero-equality-and-kernel-criteria]]. Its kernel is the
principal ideal $(t-1)$: indeed $\varepsilon(t-1)=0$, and if
$\varepsilon(x)=0$ then, writing $x=\sum_{k\in\mathbb Z}a_kt^k$ with finite
support and using that $\sum_{k\in\mathbb Z}a_k=0$, one has
$$x=\sum_{k\in\mathbb Z}a_k(t^k-1)=(t-1)\sum_{k\in\mathbb Z}a_k\,(1+t+\cdots+t^{k-1}),$$
where $1+t+\cdots+t^{k-1}$ denotes the empty sum $0$ for $k=0$ and, for
$k=-j<0$, the negative sum
$-(t^{-1}+t^{-2}+\cdots+t^{-j})$, so that
$t^{-j}-1=-(t-1)(t^{-1}+\cdots+t^{-j})$; hence $x\in(t-1)$, and the reverse
inclusion is $\varepsilon(t-1)=0$.

**Caveats.** This item realises $\Lambda_1$ by localisation and does **not**
identify it with an integral group ring: the additive group underlying
$\Lambda_1$ is $\bigoplus_{k\in\mathbb Z}\mathbb Z\,t^k$ and its multiplication
is the polynomial one ([[cor-polynomial-ring-over-a-domain-is-a-domain]] is not
needed for the ring laws but records that $\mathbb Z[t]$ is a domain). The
deck-module structures on homology introduced later on this page are defined
separately, by the universal property above.
