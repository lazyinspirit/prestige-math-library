---
id: lem-se-real-hilbert-dualization
kind: lemma
domain: mathematics
title: Realification of Hilbert pairings and conjugate-linear coefficients
status: draft
deps:
  - math:def-realification-of-a-complex-vector-space
  - math:lem-complex-norm-realification-is-a-real-norm
  - math:def-inner-product-space
  - math:def-inner-product-norm
  - math:def-hilbert-space
  - math:def-countable-choice
  - math:thm-riesz-representation-for-hilbert-space
  - math:lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - math:def-hilbert-space-adjoint
  - math:prop-essential-supremum-is-attained-as-the-least-essential-bound
  - math:def-dual-space-of-a-normed-space
  - math:def-bounded-linear-operator
  - math:def-measure-space
  - math:def-essential-supremum-with-respect-to-a-measure
  - math:def-complex-lp-and-euclidean-test-function-conventions
  - math:prop-order-and-scalar-rules-for-the-nonnegative-integral
  - math:cor-additivity-of-the-nonnegative-lebesgue-integral
  - math:thm-nonnegative-integral-zero-iff-zero-almost-everywhere
dependency_roles:
  math:def-realification-of-a-complex-vector-space: mathematical-premise
  math:lem-complex-norm-realification-is-a-real-norm: mathematical-premise
  math:def-inner-product-space: mathematical-premise
  math:def-inner-product-norm: mathematical-premise
  math:def-hilbert-space: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:thm-riesz-representation-for-hilbert-space: mathematical-premise
  math:lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  math:def-hilbert-space-adjoint: mathematical-premise
  math:prop-essential-supremum-is-attained-as-the-least-essential-bound: mathematical-premise
  math:def-dual-space-of-a-normed-space: mathematical-premise
  math:def-bounded-linear-operator: mathematical-premise
  math:def-measure-space: mathematical-premise
  math:def-essential-supremum-with-respect-to-a-measure: mathematical-premise
  math:def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  math:prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  math:cor-additivity-of-the-nonnegative-lebesgue-integral: mathematical-premise
  math:thm-nonnegative-integral-zero-iff-zero-almost-everywhere: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement

Assume the Axiom of Countable Choice. Let $H$ be a complex Hilbert space with inner product linear in the first variable. Its realification $H_{\mathbb R}$ is the same additive group with scalar multiplication restricted to real scalars. With $(u,v)_{\mathbb R}=\operatorname{Re}\langle u,v\rangle_H$, it is a real Hilbert space with the same norm and metric as $H$. Every bounded real-linear functional $f:H_{\mathbb R}\to\mathbb R$ has a unique representative $y\in H$ such that $f(u)=(u,y)_{\mathbb R}$ for all $u$, and $\|f\|=\|y\|$. Here $\|f\|:=\sup\{|f(u)|:\|u\|\le1\}$ is the norm in the real normed dual of $H_{\mathbb R}$.

In particular, let $(X,\mathcal A,\mu)$ be a measure space and $H=L^2(\mu;\mathbb C)$, the space of square-integrable measurable complex functions modulo equality almost everywhere, with $\langle z,v\rangle=\int_X z\overline v\,d\mu$. Let $a,b$ be measurable essentially bounded complex functions, with $a$ real almost everywhere. Write $\|c\|_\infty:=\||c|\|_{\infty,\mu}$ for $c\in\{a,b\}$, where the right-hand side is the essential supremum norm of the real-valued measurable function $|c|$. Define the bounded real-linear operator $L$ by $Lz=i(az+b\overline z)$. Its real Hilbert adjoint, defined by $(Lz,v)_{\mathbb R}=(z,L_{\mathbb R}^*v)_{\mathbb R}$ for every $z,v$, is $L_{\mathbb R}^*v=-iav+ib\overline v$. Consequently $(Lz,v)_{\mathbb R}+(z,-L_{\mathbb R}^*v)_{\mathbb R}=0$ for every $z,v\in H$.

## Statement references

[[math:def-realification-of-a-complex-vector-space]]

[[math:def-inner-product-space]]

[[math:def-inner-product-norm]]

[[math:def-hilbert-space]]

[[math:def-countable-choice]]

[[math:lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]

[[math:def-hilbert-space-adjoint]]

[[math:def-dual-space-of-a-normed-space]]

[[math:def-bounded-linear-operator]]

[[math:def-measure-space]]

[[math:def-essential-supremum-with-respect-to-a-measure]]

[[math:def-complex-lp-and-euclidean-test-function-conventions]]

## Facts & Assumptions

[F1] Realification preserves the underlying set and addition and restricts scalar multiplication to real scalars; it preserves the original norm and induced metric ([[math:def-realification-of-a-complex-vector-space]], [[math:lem-complex-norm-realification-is-a-real-norm]]).

[F2] The complex inner product is linear in its first variable, conjugate symmetric and positive definite, and its norm is the square root of its diagonal value. A Hilbert space is complete for the metric induced by this norm ([[math:def-inner-product-space]], [[math:def-inner-product-norm]], [[math:def-hilbert-space]]).

[F3] Under Countable Choice, every bounded linear functional on a real Hilbert space has a unique representing vector with equal norm ([[math:def-countable-choice]], [[math:thm-riesz-representation-for-hilbert-space]]).

[F4] Under Countable Choice, complex $L^2(\mu)$ is a Hilbert space with the stated integral pairing; products of two $L^2$ functions are integrable and the pairing is independent of representatives ([[math:lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F5] For a real-valued measurable function $r$ with finite essential supremum norm, $|r|\le\|r\|_{\infty,\mu}$ almost everywhere ([[math:def-essential-supremum-with-respect-to-a-measure]], [[math:prop-essential-supremum-is-attained-as-the-least-essential-bound]]). Applying this to $r=|a|$ and $r=|b|$ gives $|a|\le\|a\|_\infty$ and $|b|\le\|b\|_\infty$ almost everywhere, with the coefficient norms specified in the Statement.

[F6] The real Hilbert adjoint of a bounded real-linear operator is uniquely characterized by its pairing identity ([[math:def-hilbert-space-adjoint]]).

[F7] Bounded real-linear functionals on $H_{\mathbb R}$ form its real normed dual, with norm $\|f\|=\sup_{\|u\|\le1}|f(u)|$ ([[math:def-dual-space-of-a-normed-space]]). A real-linear operator $T$ is bounded when $\|Tu\|\le C\|u\|$ for all $u$ and some real $C\ge0$ ([[math:def-bounded-linear-operator]]).

[F8] On a measure space, complex measurability is componentwise; moduli, conjugates and products of measurable complex functions are measurable. Complex $L^2$ consists of square-integrable such functions modulo equality almost everywhere, with norm determined by the integral of the squared modulus ([[math:def-complex-lp-and-euclidean-test-function-conventions]]).

[F9] On an arbitrary measure space the nonnegative integral is monotone, is homogeneous for positive finite scalars and has value zero on the zero function, and is additive on nonnegative measurable functions ([[math:prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[math:cor-additivity-of-the-nonnegative-lebesgue-integral]]).

[F10] A nonnegative measurable function has integral zero if and only if it vanishes almost everywhere, without any finiteness assumption on its integral beforehand ([[math:thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

## Proof

[F1] Realification preserves the underlying set and addition and restricts scalar multiplication to real scalars; it preserves the original norm and induced metric ([[math:def-realification-of-a-complex-vector-space]], [[math:lem-complex-norm-realification-is-a-real-norm]]).

[F2] The complex inner product is linear in its first variable, conjugate symmetric and positive definite, and its norm is the square root of its diagonal value. A Hilbert space is complete for the metric induced by this norm ([[math:def-inner-product-space]], [[math:def-inner-product-norm]], [[math:def-hilbert-space]]).

[F3] Under Countable Choice, every bounded linear functional on a real Hilbert space has a unique representing vector with equal norm ([[math:def-countable-choice]], [[math:thm-riesz-representation-for-hilbert-space]]).

[F4] Under Countable Choice, complex $L^2(\mu)$ is a Hilbert space with the stated integral pairing; products of two $L^2$ functions are integrable and the pairing is independent of representatives ([[math:lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F5] For a real-valued measurable function $r$ with finite essential supremum norm, $|r|\le\|r\|_{\infty,\mu}$ almost everywhere ([[math:def-essential-supremum-with-respect-to-a-measure]], [[math:prop-essential-supremum-is-attained-as-the-least-essential-bound]]). Applying this to $r=|a|$ and $r=|b|$ gives $|a|\le\|a\|_\infty$ and $|b|\le\|b\|_\infty$ almost everywhere, with the coefficient norms specified in the Statement.

[F6] The real Hilbert adjoint of a bounded real-linear operator is uniquely characterized by its pairing identity ([[math:def-hilbert-space-adjoint]]).

[F7] Bounded real-linear functionals on $H_{\mathbb R}$ form its real normed dual, with norm $\|f\|=\sup_{\|u\|\le1}|f(u)|$ ([[math:def-dual-space-of-a-normed-space]]). A real-linear operator $T$ is bounded when $\|Tu\|\le C\|u\|$ for all $u$ and some real $C\ge0$ ([[math:def-bounded-linear-operator]]).

[F8] On a measure space, complex measurability is componentwise; moduli, conjugates and products of measurable complex functions are measurable. Complex $L^2$ consists of square-integrable such functions modulo equality almost everywhere, with norm determined by the integral of the squared modulus ([[math:def-complex-lp-and-euclidean-test-function-conventions]]).

[F9] On an arbitrary measure space the nonnegative integral is monotone, is homogeneous for positive finite scalars and has value zero on the zero function, and is additive on nonnegative measurable functions ([[math:prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[math:cor-additivity-of-the-nonnegative-lebesgue-integral]]).

[F10] A nonnegative measurable function has integral zero if and only if it vanishes almost everywhere, without any finiteness assumption on its integral beforehand ([[math:thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

**Given:** Countable Choice, a complex Hilbert space $H$ with first-variable-linear inner product, and, for the coefficient assertion, the measure space and functions $a,b$ in the statement.

**Goal:** Establish the real Hilbert and representation assertions and compute the real adjoint on $L^2(\mu;\mathbb C)$.

1.1 Restriction of scalars gives a real vector space. Taking real parts of the complex inner-product identities gives real linearity in the first variable and symmetry; symmetry then gives linearity in the second. Moreover $(u,u)_{\mathbb R}=\langle u,u\rangle_H\ge0$, with equality only for $u=0$. Thus this is a real inner product and its induced norm is the original norm. [F1, F2]

1.2 On complex $L^2$, conjugation preserves measurability and the $L^2$ norm. For $c\in\{a,b\}$, put $M=\|c\|_\infty$ and let $u\in L^2$ have a finite-valued measurable representative. The function $q=\max\{|cu|^2-M^2|u|^2,0\}$ is nonnegative measurable and vanishes almost everywhere by the essential bound. Thus $\int q\,d\mu=0$ by F10, before assuming integrability of $|cu|^2$. The pointwise inequality $|cu|^2\le M^2|u|^2+q$, followed by monotonicity, additivity and homogeneity, gives $\int|cu|^2\,d\mu\le M^2\int|u|^2\,d\mu<\infty$; when $M=0$, the zero-function clause gives the same inequality, and $\int|u|^2$ is finite. Hence $\|cu\|_2\le M\|u\|_2$. Taking $u=z,\overline z,v,\overline v$ as needed shows that $az$, $b\overline z$, $av$ and $b\overline v$ belong to $L^2$. The triangle inequality now gives $\|Lz\|_2\le(\|a\|_\infty+\|b\|_\infty)\|z\|_2$, and the same bound holds for the proposed adjoint applied to $v$. These operations respect equality almost everywhere; $L$ and the proposed adjoint are bounded and real-linear. [F4, F5, F7, F8, F9, F10, algebra]

2.1 The induced metric is therefore the original metric, so every realified Cauchy sequence converges because $H$ is complete. The realification is a real Hilbert space. Applying real Riesz representation gives the unique vector $y$ and the norm equality for every bounded real-linear $f$. [F1, F2, F3, F7, step 1.1]

2.2 For arbitrary $z,v\in L^2$, the integrands below are integrable. Since $a=\overline a$ almost everywhere and a complex number and its conjugate have the same real part, $\operatorname{Re}\int iaz\overline v=\operatorname{Re}\int z\overline{(-iav)}$ and $\operatorname{Re}\int ib\overline z\,\overline v=\operatorname{Re}\int z\overline{(ib\overline v)}$. Adding the identities gives $(Lz,v)_{\mathbb R}=(z,-iav+ib\overline v)_{\mathbb R}$. [F4, step 1.2, algebra]

3.1 By the defining uniqueness of the real adjoint, the vector on the right in step 2.2 is $L_{\mathbb R}^*v$. Moving that pairing to the other side gives the cancellation identity. [F6, step 1.2, step 2.2, algebra] ∎

## Remarks

The coefficient calculation is an identity for bounded operators on $L^2$; it makes no assertion about the domain of a Laplacian, evolution, or extensions of pairings to other spaces.
