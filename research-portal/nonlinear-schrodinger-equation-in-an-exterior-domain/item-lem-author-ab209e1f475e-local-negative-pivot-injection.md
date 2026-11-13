---
title: The L2 pivot injects into the local negative Sobolev space
status: draft
research_item: lem-author-ab209e1f475e-local-negative-pivot-injection
dependency_level: 0
---

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)
- [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure)
- [math:thm-sobolev-spaces-are-banach-spaces](https://alphabetamath.cc/item/thm-sobolev-spaces-are-banach-spaces)
- [math:lem-closed-subspace-of-a-banach-space-is-banach](https://alphabetamath.cc/item/lem-closed-subspace-of-a-banach-space-is-banach)
- [math:def-dual-space-of-a-normed-space](https://alphabetamath.cc/item/def-dual-space-of-a-normed-space)
- [math:thm-bounded-operator-space-is-banach](https://alphabetamath.cc/item/thm-bounded-operator-space-is-banach)
- [physics:lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set](https://alphabetamath.cc/physics/item/lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set)
- [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals)
- [math:lem-l-two-with-the-integral-pairing-is-a-hilbert-space](https://alphabetamath.cc/item/lem-l-two-with-the-integral-pairing-is-a-hilbert-space)


## Statement

Assume the Axiom of Choice ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)), in particular the Countable Choice used by the cited Sobolev completeness and test-function density theorems. Let $G\subset\mathbb R^n$ be open, $n\ge1$, and let $\mathbb K=\mathbb R$ or $\mathbb C$. Set $V=H_0^2(G)=\overline{C_c^\infty(G)}^{H^2(G)}$ with the full Sobolev norm of [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm) and closure convention [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure). Let $Y$ be its continuous dual in the real case, or its continuous conjugate dual in the complex case: $F(\alpha\varphi)=\overline\alpha F(\varphi)$ and $\|F\|_Y=\sup_{\|\varphi\|_V\le1}|F(\varphi)|$. The ordinary linear dual is [math:def-dual-space-of-a-normed-space](https://alphabetamath.cc/item/def-dual-space-of-a-normed-space). Then $V,Y$ are Banach by [math:thm-sobolev-spaces-are-banach-spaces](https://alphabetamath.cc/item/thm-sobolev-spaces-are-banach-spaces), [math:lem-closed-subspace-of-a-banach-space-is-banach](https://alphabetamath.cc/item/lem-closed-subspace-of-a-banach-space-is-banach) and [math:thm-bounded-operator-space-is-banach](https://alphabetamath.cc/item/thm-bounded-operator-space-is-banach). The map $J:L^2(G)\to Y$, $(Jf)(\varphi)=\int_G f\overline\varphi$, is linear, bounded and injective, with $\|Jf\|_Y\le\|f\|_{L^2(G)}$. Here [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals) provides the bound and [physics:lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set](https://alphabetamath.cc/physics/item/lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set) provides injectivity. No compactness of $L^2(G)\to Y$ is claimed.

## Facts & Assumptions

**Given:** The open set $G$, the full $H^2$ norm including its zero-order $L^2$ term, and the declared scalar field.

**Goal:** Prove Banachness of the negative value space and justify its pivot embedding, including injectivity.

[F1] $H^2(G)$ is Banach under the stated choice assumption ([math:thm-sobolev-spaces-are-banach-spaces](https://alphabetamath.cc/item/thm-sobolev-spaces-are-banach-spaces), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)). The definition [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure) places every test function in $H^2(G)$ and defines $V$ as its metric closure there. The full norm satisfies $\|\varphi\|_2\le\|\varphi\|_V$ ([math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)). Once linearity of $V$ has been established, [math:lem-closed-subspace-of-a-banach-space-is-banach](https://alphabetamath.cc/item/lem-closed-subspace-of-a-banach-space-is-banach) applies to this closed subspace.

[F2] The bounded linear operator space into a Banach scalar field is Banach ([math:thm-bounded-operator-space-is-banach](https://alphabetamath.cc/item/thm-bounded-operator-space-is-banach)); its norm on functionals is the dual norm ([math:def-dual-space-of-a-normed-space](https://alphabetamath.cc/item/def-dual-space-of-a-normed-space)).

[F3] Holder at exponent $2$, applied to the real-valued absolute values of representatives, bounds the absolute pairing ([math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals)). Smooth compactly supported functions are dense in $L^2(G)$ under Countable Choice ([physics:lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set](https://alphabetamath.cc/physics/item/lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set)).

[F4] Under Countable Choice, on real or complex $L^2(G)$ the formula $\langle f,g\rangle=\int_G f\overline g$ is a well-defined pairing of almost-everywhere classes. It is linear in its first variable, additive in its second variable and conjugate-linear there in the complex case, with $\langle f,f\rangle=\|f\|_2^2$ ([math:lem-l-two-with-the-integral-pairing-is-a-hilbert-space](https://alphabetamath.cc/item/lem-l-two-with-the-integral-pairing-is-a-hilbert-space)). The assumed Axiom of Choice supplies this Countable Choice, as it does for the other cited interfaces.

## Proof

1.1 The test functions form a linear subspace of $H^2(G)$: $0$ is a test function, and $a\varphi+b\psi$ is smooth with support contained in the compact union $\operatorname{supp}\varphi\cup\operatorname{supp}\psi\subset G$ for scalars $a,b$ and test functions $\varphi,\psi$. Let $u,v\in V$, $a,b\in\mathbb K$ and $\varepsilon>0$. By the closure criterion in [F1], choose test functions $\varphi,\psi$ such that $\|u-\varphi\|_{H^2},\|v-\psi\|_{H^2}<\varepsilon/(1+|a|+|b|)$. The norm axioms give $\|au+bv-(a\varphi+b\psi)\|_{H^2}\le |a|\|u-\varphi\|_{H^2}+|b|\|v-\psi\|_{H^2}<\varepsilon$. Thus $au+bv\in V$. Also $0\in V$, so $V$ is a linear subspace; it is closed because it is the metric closure of the test functions. [F1, given, algebra]

1.2 By [F4], $(Jf)(\varphi)=\langle f,\varphi\rangle$ is independent of the representatives of $f$ and $\varphi$, is additive in $\varphi$, and has the asserted linear or conjugate-linear scalar dependence. By [F3] and [F1], $|(Jf)(\varphi)|\le\|f\|_2\|\varphi\|_2\le\|f\|_2\|\varphi\|_V$. Thus it belongs to $Y$. Its dependence on $f$ is linear by [F4], and taking the supremum over the unit ball of $V$ proves $\|Jf\|_Y\le\|f\|_2$. [F1, F2, F3, F4, given]

2.1 By [F1] and step 1.1, $V$ is a closed linear subspace of the Banach space $H^2(G)$, so the closed-subspace theorem proves $V$ Banach. In the real case [F2] proves $Y$ Banach. In the complex case the map $F\mapsto\overline F$, with $(\overline F)(\varphi)=\overline{F(\varphi)}$, is a distance-preserving bijection from the conjugate dual to the ordinary linear dual. A Cauchy sequence in $Y$ therefore has a limit there, since its conjugates converge in the ordinary dual and the inverse conjugation preserves distances. [F1, F2, step 1.1, given]

3.1 If $Jf=0$, choose $\varphi_m\in C_c^\infty(G)\subset V$ with $\|f-\varphi_m\|_2<1/m$ for $m\ge1$, using [F3] and Countable Choice from the assumed Axiom of Choice. Each $\langle f,\varphi_m\rangle=(Jf)(\varphi_m)$ vanishes. By additivity and the diagonal identity in [F4], $\|f\|_2^2=\langle f,f\rangle=\langle f,f-\varphi_m\rangle$. The bound in [F3] gives $|\langle f,f-\varphi_m\rangle|\le\|f\|_2\|f-\varphi_m\|_2\to0$. Hence $\|f\|_2^2=0$, so $f=0$ as an $L^2$ class and $J$ is injective. [F1, F3, F4, step 1.2, given] ∎
