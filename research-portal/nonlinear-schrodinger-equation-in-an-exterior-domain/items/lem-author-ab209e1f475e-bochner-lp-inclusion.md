---
id: lem-author-ab209e1f475e-bochner-lp-inclusion
kind: lemma
domain: mathematics
title: Bochner spaces and bounded inclusion of value spaces
status: draft
deps:
  - math:def-countable-choice
  - math:def-banach-space
  - math:def-strongly-measurable-banach-valued-function
  - math:def-l-p-space-as-a-quotient-by-null-functions
  - physics:thm-pe12-bochner-lp-completeness
  - math:lem-complex-norm-realification-is-a-real-norm
  - math:thm-holder-inequality-for-integrals
  - math:def-bounded-linear-operator
  - math:def-operator-norm
  - math:thm-lebesgue-measure-of-a-box-of-every-kind
dependency_roles:
  math:def-countable-choice: mathematical-premise
  math:def-banach-space: mathematical-premise
  math:def-strongly-measurable-banach-valued-function: mathematical-premise
  math:def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  physics:thm-pe12-bochner-lp-completeness: mathematical-premise
  math:lem-complex-norm-realification-is-a-real-norm: mathematical-premise
  math:thm-holder-inequality-for-integrals: mathematical-premise
  math:def-bounded-linear-operator: mathematical-premise
  math:def-operator-norm: mathematical-premise
  math:thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement

Assume Countable Choice ([[math:def-countable-choice]]). For a Banach space $E$ ([[math:def-banach-space]]), $0<T<\infty$ and $1\le p<\infty$, equip $(0,T)$ with Lebesgue measure and define $L^p(0,T;E)$ to be the almost-everywhere equivalence classes of strongly measurable functions ([[math:def-strongly-measurable-banach-valued-function]]) whose norm has finite scalar $L^p$ integral; the equivalence convention is [[math:def-l-p-space-as-a-quotient-by-null-functions]]. Its norm is $\|u\|_{L^p(E)}=(\int_0^T\|u(t)\|_E^p\,dt)^{1/p}$. This is Banach by [[physics:thm-pe12-bochner-lp-completeness|Bochner $L^p$ is complete for a Banach value space]] for real $E$ and by realification [[math:lem-complex-norm-realification-is-a-real-norm]] for complex $E$. If $E,F$ are Banach spaces over the same scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$ and $J:E\to F$ is a bounded injective linear operator ([[math:def-bounded-linear-operator]]), with operator norm as in [[math:def-operator-norm]], then $J_*u(t)=Ju(t)$ defines a bounded injective map $L^p(E)\to L^p(F)$ with $\|J_*u\|_{L^p(F)}\le\|J\|\|u\|_{L^p(E)}$. Finally $\|u\|_{L^1(E)}\le T^{1-1/p}\|u\|_{L^p(E)}$, with $T^0=1$ when $p=1$, by [[math:thm-holder-inequality-for-integrals]].

## Facts & Assumptions

**Given:** Countable Choice, $0<T<\infty$, Lebesgue measure on $(0,T)$, $1\le p<\infty$, Banach spaces $E,F$ over the same scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$, and a bounded injective $\mathbb K$-linear operator $J:E\to F$.

**Goal:** Justify the normed classes, completeness, induced inclusion, and finite-interval estimate.

[F1] Strong measurability is an almost-everywhere limit of measurable simple functions ([[math:def-strongly-measurable-banach-valued-function]]); scalar $L^p$ uses null equivalence classes ([[math:def-l-p-space-as-a-quotient-by-null-functions]]).

[F2] The real Bochner $L^p$ space is complete under Countable Choice ([[physics:thm-pe12-bochner-lp-completeness|Bochner $L^p$ is complete for a Banach value space]], [[math:def-countable-choice]]). Realification preserves the norm and metric ([[math:lem-complex-norm-realification-is-a-real-norm]]).

[F3] Scalar Holder applies to the measurable norm and the constant function $1$ ([[math:thm-holder-inequality-for-integrals]]).

[F4] Bounded linear operators act between normed spaces over the same scalar field ([[math:def-bounded-linear-operator]]). Their operator norm is a finite bound: $\|Jx\|_F\le\|J\|\|x\|_E$ for every $x\in E$, including when $E=\{0\}$ ([[math:def-operator-norm]]).

[F5] Under Countable Choice, the open interval $(0,T)$ is Lebesgue measurable and has measure $T$, by the one-dimensional open-box case of [[math:thm-lebesgue-measure-of-a-box-of-every-kind]].

## Proof

1.1 If $s_n\to u$ almost everywhere are the simple approximants in [F1], the operator-norm bound in [F4] gives $Js_n\to Ju$ almost everywhere. The composed approximants are measurable simple functions, and $\|Ju(t)\|_F\le\|J\|\|u(t)\|_E$. Integrating the $p$th powers proves the asserted norm bound and independence of the representative. If $Ju=0$ as a class, pointwise injectivity outside its null set gives $u=0$ as a class. [F1, F4, given]

1.2 The displayed norm and quotient form a complete real normed space by [F2]. For complex $E$, the same simple functions, measurable classes and norm define the Bochner space over the realification. Completeness of its unchanged metric proves completeness over the complex field as well. Scalar multiplication and addition act on representatives and preserve the equivalence relation and strong measurability; the scalar triangle inequality for the norm is part of the real completeness interface. [F1, F2, given]

2.1 By [F5], $\int_0^T1\,dt=T$. For $p>1$, Holder with conjugate exponent $p/(p-1)$ gives $\int_0^T\|u(t)\|_E\,dt\le(\int_0^T\|u(t)\|_E^p\,dt)^{1/p}(\int_0^T1\,dt)^{1-1/p}=T^{1-1/p}\|u\|_{L^p(E)}$. For $p=1$ the assertion is equality. This proves the final estimate and completes the claims. [F3, F5, given, algebra] ∎
