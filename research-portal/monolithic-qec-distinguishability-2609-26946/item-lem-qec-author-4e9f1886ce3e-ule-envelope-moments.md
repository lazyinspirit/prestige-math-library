---
title: Mass and first moment of the ULE scalar envelope
status: published
research_item: lem-qec-author-4e9f1886ce3e-ule-envelope-moments
dependency_level: 2
---

## Prerequisites

- [lem-qec-author-42f4c98e5e20-ule-normalization](item-lem-qec-author-42f4c98e5e20-ule-normalization)
- [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)
- [math:thm-tonelli-theorem-for-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-tonelli-theorem-for-sigma-finite-product-spaces)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions](https://alphabetamath.cc/item/thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions)
- [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral)
- [math:prop-countable-subsets-of-rn-are-lebesgue-null](https://alphabetamath.cc/item/prop-countable-subsets-of-rn-are-lebesgue-null)
- [math:cor-integral-over-a-null-set-vanishes](https://alphabetamath.cc/item/cor-integral-over-a-null-set-vanishes)
- [math:cor-additivity-of-the-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/cor-additivity-of-the-nonnegative-lebesgue-integral)
- [math:def-product-sigma-algebra-and-finite-product-sigma-algebras](https://alphabetamath.cc/item/def-product-sigma-algebra-and-finite-product-sigma-algebras)
- [math:def-measurable-function-between-measurable-spaces](https://alphabetamath.cc/item/def-measurable-function-between-measurable-spaces)
- [math:thm-arithmetic-and-lattice-operations-preserve-measurability](https://alphabetamath.cc/item/thm-arithmetic-and-lattice-operations-preserve-measurability)
- [math:thm-borel-products-of-euclidean-spaces-are-euclidean-borel](https://alphabetamath.cc/item/thm-borel-products-of-euclidean-spaces-are-euclidean-borel)


## Statement

Assume the Axiom of Countable Choice and let $\gamma>0$. Use the kernel $g$ and rate identities, put $k(u)=\|g(u)\|_{2,1}$, $K=\int k(u)du$, $H=\int|u|k(u)du$, $\Gamma=4\gamma K^2$ and $\tau=H/K$. Define the nonnegative envelope $q(u)=4\gamma k(-u)\int_{-\infty}^u k(-v)dv$. Then $\int q(u)du=\Gamma/2$ and $\int|u|q(u)du\leq\Gamma\tau$.

## Facts & Assumptions

[F1] Kernel regularity gives $0<K<\infty$, $H<\infty$ and $\Gamma\tau=4\gamma KH$. [lem-qec-author-42f4c98e5e20-ule-normalization](item-lem-qec-author-42f4c98e5e20-ule-normalization)

[F2] The kernel contract defines $g$, the mixed norm $\|A\|_{2,1}=\sum_b(\sum_a|A_{ab}|^2)^{1/2}$ and the Lebesgue integration convention, with measurable nonnegative $k(u)=\|g(u)\|_{2,1}$ and finite zeroth and first moments. [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)

[F3] Tonelli applies to every nonnegative product-measurable function on a product of sigma-finite measure spaces, equates its product integral with either iterated integral, and gives measurability of the marginal integrals; finiteness need not be known in advance. [math:thm-tonelli-theorem-for-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-tonelli-theorem-for-sigma-finite-product-spaces)

[A1] Assume the Axiom of Countable Choice: every sequence of nonempty sets admits a choice function. It is used for the change-of-variables theorem in [F4] and singleton nullity in [F6], and is already assumed by the kernel contract for its Lebesgue-null inputs. [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[F4] Under [A1], the nonnegative Lebesgue change-of-variables theorem applies to a $C^1$ diffeomorphism $T:U\to V$ of open subsets of $\mathbb R^n$: $\int_V f(y)dy=\int_U f(T(x))|\det DT(x)|dx$ for nonnegative Lebesgue-measurable $f$. For reflection $T(u)=-u$ on $\mathbb R$, $T^{-1}=T$ and $|T'(u)|=1$, so reflected functions are Lebesgue measurable and their nonnegative integrals are preserved. [math:thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions](https://alphabetamath.cc/item/thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions)

[F5] On any measure space, if $0\leq f\leq h$ are measurable, then $\int f\leq\int h$; for a positive finite scalar $c$, $\int cf=c\int f$, and the integral of the zero function is zero. [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral)

[F6] Under [A1], every singleton in $\mathbb R$ is Lebesgue measurable with Lebesgue measure zero. [math:prop-countable-subsets-of-rn-are-lebesgue-null](https://alphabetamath.cc/item/prop-countable-subsets-of-rn-are-lebesgue-null)

[F7] On any measure space $(X,\mathcal A,\mu)$, if $f:X\to[0,\infty]$ is measurable and $E$ is measurable with $\mu(E)=0$, then $\int_E f\,d\mu=0$. [math:cor-integral-over-a-null-set-vanishes](https://alphabetamath.cc/item/cor-integral-over-a-null-set-vanishes)

[F8] On any measure space, nonnegative measurable functions $f,h$ satisfy $\int(f+h)=\int f+\int h$, including infinite values. Applying this twice gives additivity for three such functions. [math:cor-additivity-of-the-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/cor-additivity-of-the-nonnegative-lebesgue-integral)

[F9] A product sigma-algebra is generated by measurable rectangles, and a map between measurable spaces is measurable when the preimage of every measurable target set is measurable. [math:def-product-sigma-algebra-and-finite-product-sigma-algebras](https://alphabetamath.cc/item/def-product-sigma-algebra-and-finite-product-sigma-algebras) [math:def-measurable-function-between-measurable-spaces](https://alphabetamath.cc/item/def-measurable-function-between-measurable-spaces)

[F10] On any measurable space, the pointwise product of two measurable extended-real functions is measurable, with the total function-product convention assigning zero if either factor is zero. On finite-valued functions this is ordinary multiplication. Real scalar multiples are measurable as well. [math:thm-arithmetic-and-lattice-operations-preserve-measurability](https://alphabetamath.cc/item/thm-arithmetic-and-lattice-operations-preserve-measurability)

[F11] For positive integers $m,n$, $\mathcal B(\mathbb R^m)\otimes\mathcal B(\mathbb R^n)=\mathcal B(\mathbb R^{m+n})$. We use $m=n=1$. [math:thm-borel-products-of-euclidean-spaces-are-euclidean-borel](https://alphabetamath.cc/item/thm-borel-products-of-euclidean-spaces-are-euclidean-borel)

## Proof

**Given:** Countable choice [A1], the kernel and rate conventions, $\gamma>0$, the nonnegative measurable $k$ with the moments in [F1], and the displayed definition of $q$. **Goal:** Prove measurability, finiteness and the asserted mass and first-moment bounds for $q$.

1.1 Put $a(u)=k(-u)$. Apply [F4] with $U=V=\mathbb R$, $T(u)=-u$, first to $f(u)=k(u)$ and then to $f(u)=|u|k(u)$. Since $|T(u)|=|u|$ and $|T'(u)|=1$, $a$ is nonnegative Lebesgue measurable, $\int a=K$ and $\int|u|a(u)du=H$. [given, A1, F1, F2, F4]

2.1 Write $\mathcal L$ for the Lebesgue sigma-algebra on $\mathbb R$. For every Borel target set $B\subseteq\overline{\mathbb R}$, the preimages under $(u,v)\mapsto a(u)$ and $(u,v)\mapsto a(v)$ are respectively $a^{-1}(B)\times\mathbb R$ and $\mathbb R\times a^{-1}(B)$. These are measurable rectangles because $a$ is measurable; [F9] therefore proves that both coordinate pullbacks are $\mathcal L\otimes\mathcal L$-measurable. Their nonnegative product $p(u,v)=a(u)a(v)$ is measurable by [F10]. Also, $\mathcal B(\mathbb R)\subseteq\mathcal L$, so the rectangle-generated definition in [F9] gives $\mathcal B(\mathbb R)\otimes\mathcal B(\mathbb R)\subseteq\mathcal L\otimes\mathcal L$. By [F11], every Borel subset of $\mathbb R^2$ is consequently product-measurable. In particular the closed half-plane $\{v\leq u\}$, the two open strict half-planes and the closed diagonal $D=\{u=v\}$ are product-measurable. The indicator of each such set $E$ is measurable, since every target preimage of its two-valued indicator is one of $\varnothing,E,E^c,\mathbb R^2$. Applying [F10] to $p$ and each indicator proves measurability of every restricted integrand used below, and also of $\mathbf1_D$. [F9, F10, F11, step 1.1]

3.1 The real line is sigma-finite: the intervals $[-m,m]$ have finite measure and cover it. Apply [F3] to the nonnegative product-measurable function $p(u,v)\mathbf1_{\{v\leq u\}}$ from step 2.1. Since $a(u)$ is finite and $\int a=K<\infty$, [F5] identifies its $v$-section integral with $a(u)\int_{-\infty}^u a(v)dv$, including when $a(u)=0$. Tonelli makes this marginal measurable and identifies its integral with the product integral, without presupposing integrability of $q$. Multiplication by $4\gamma>0$ preserves measurability by [F10], so $q$ is measurable. [given, F2, F3, F5, F10, step 1.1, step 2.1]

4.1 Write $\lambda$ for Lebesgue measure on $\mathbb R$ and $\mu=\lambda\otimes\lambda$ for its product measure. Tonelli gives $\int_{\mathbb R^2}a(u)a(v)\,d\mu(u,v)=K^2$. The diagonal $D=\{u=v\}$ is product-measurable by step 2.1; its sections are singletons, which are null by [F6] under [A1]. Tonelli applied to $\mathbf1_D$ therefore gives $\mu(D)=0$, and [F7] applied to the nonnegative product-measurable function $a(u)a(v)$ gives $\int_D a(u)a(v)\,d\mu=0$. Let $I_{<}$ and $I_{>}$ denote the integrals of $a(u)a(v)$ over $\{v<u\}$ and $\{u<v\}$, respectively. Tonelli applied to $a(u)a(v)\mathbf1_{\{v<u\}}$, exchanging the order of integration and relabelling the two variables, gives $I_{<}=I_{>}$ because the factors commute. The two strict half-planes and $D$ form a measurable partition of $\mathbb R^2$. Apply [F8] twice to the pointwise decomposition of $a(u)a(v)$ into its restrictions to those three sets: $K^2=I_{<}+I_{>}+0$. Thus $I_{<}=I_{>}=K^2/2$; applying [F8] once more shows that including $D$ changes neither value. Consequently $\int q=4\gamma K^2/2=\Gamma/2$. [A1, F1, F2, F3, F5, F6, F7, F8, step 1.1, step 2.1, step 3.1]

5.1 For every $u$, the inner integral in $q(u)$ is at most $\int a=K$. The product $|u|q(u)$ is measurable by [F10]. Hence $0\leq q(u)\leq4\gamma K a(u)$, and monotonicity and positive homogeneity from [F5] give $\int |u|q(u)du\leq4\gamma K\int|u|a(u)du=4\gamma KH=\Gamma\tau$. The mass from step 4.1 and this first-moment bound are finite. [F1, F5, F10, step 1.1, step 3.1, step 4.1] ∎
