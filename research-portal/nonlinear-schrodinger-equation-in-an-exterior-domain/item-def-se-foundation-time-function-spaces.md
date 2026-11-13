---
title: Continuous and mixed time-space function spaces
status: published
research_item: def-se-foundation-time-function-spaces
dependency_level: 0
---

## Prerequisites

- [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)
- [math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)
- [math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function)
- [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion)
- [math:def-complex-lp-and-euclidean-test-function-conventions](https://alphabetamath.cc/item/def-complex-lp-and-euclidean-test-function-conventions)
- [math:thm-complex-holder-minkowski-and-the-quotient-norm](https://alphabetamath.cc/item/thm-complex-holder-minkowski-and-the-quotient-norm)
- [math:thm-minkowski-inequality-for-integrals](https://alphabetamath.cc/item/thm-minkowski-inequality-for-integrals)
- [math:thm-tonelli-and-fubini-for-completed-product-measures](https://alphabetamath.cc/item/thm-tonelli-and-fubini-for-completed-product-measures)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:thm-complex-lp-completeness-and-almost-everywhere-subsequences](https://alphabetamath.cc/item/thm-complex-lp-completeness-and-almost-everywhere-subsequences)
- [math:thm-heine-borel-r](https://alphabetamath.cc/item/thm-heine-borel-r)
- [math:cor-boundedness-theorem-r](https://alphabetamath.cc/item/cor-boundedness-theorem-r)
- [math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra](https://alphabetamath.cc/item/def-lebesgue-measure-and-the-lebesgue-sigma-algebra)
- [math:thm-lebesgue-measure-is-a-complete-measure](https://alphabetamath.cc/item/thm-lebesgue-measure-is-a-complete-measure)
- [math:thm-lebesgue-measure-of-a-box-of-every-kind](https://alphabetamath.cc/item/thm-lebesgue-measure-of-a-box-of-every-kind)
- [math:prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets](https://alphabetamath.cc/item/prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets)
- [math:def-completed-product-measure](https://alphabetamath.cc/item/def-completed-product-measure)
- [math:thm-rationals-countable](https://alphabetamath.cc/item/thm-rationals-countable)
- [math:lem-q-and-irrationals-dense-r](https://alphabetamath.cc/item/lem-q-and-irrationals-dense-r)
- [math:thm-finite-and-countable-subadditivity-of-measures](https://alphabetamath.cc/item/thm-finite-and-countable-subadditivity-of-measures)
- [math:thm-arithmetic-and-lattice-operations-preserve-measurability](https://alphabetamath.cc/item/thm-arithmetic-and-lattice-operations-preserve-measurability)


## Definition

Assume countable choice. Let $0<T\le\infty$ and let $X$ be a real or complex Banach space. When $T=\infty$, the interval $(0,T)$ means $(0,\infty)$. For finite $T$, write $C([0,T];X)$ for the functions $u:[0,T]\to X$ continuous in the norm metric, with $\|u\|_{C([0,T];X)}=\sup_{0\le t\le T}\|u(t)\|_X$.

For $1\le p\le\infty$, $L^p(0,T;X)$ is the set of almost-everywhere equivalence classes of strongly measurable maps $u:(0,T)\to X$ for which $\|u\|_{L^p(0,T;X)}$ is finite. Strong measurability means almost-everywhere norm convergence of measurable finite-range $X$-valued simple functions. For $p<\infty$ the norm is $(\int_0^T\|u(t)\|_X^p\,dt)^{1/p}$; for $p=\infty$ it is the essential supremum of $\|u(t)\|_X$. Time measure is restricted Lebesgue measure on $(0,T)$, including on $(0,\infty)$ when $T=\infty$. When $p=1$, integration of such a map over time means its Bochner integral.

Let $D\subset\mathbb R^n$ be Lebesgue measurable, with restricted Lebesgue measure, and let $1\le p,q\le\infty$. The spatial space $L^q(D;\mathbb C)$ is the usual quotient of measurable complex functions with finite $L^q$ norm by equality almost everywhere. For a jointly measurable complex function $u$ on the completed product $(0,T)\times D$, set $N_q(t)=\|u(t,\cdot)\|_{L^q(D)}$ for almost every $t$ for which the section is measurable, allowing $N_q(t)=\infty$, and put $N_q(t)=0$ on an exceptional null set. Define $L^p_tL^q_x=L^p(0,T;L^q(D))_{\mathrm{mixed}}$ as the product-almost-everywhere classes of such functions for which $\|N_q\|_{L^p(0,T)}<\infty$, with that quantity as norm. At either infinite exponent the corresponding norm is an essential supremum. This mixed notation alone does not require $t\mapsto u(t,\cdot)$ to be strongly measurable as an $L^q(D)$-valued map. The Bochner space $L^p(0,T;L^q(D))$ is used only when that additional requirement holds.

## Definition references

[math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)

[math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)

[math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function)

[math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion)

[math:def-complex-lp-and-euclidean-test-function-conventions](https://alphabetamath.cc/item/def-complex-lp-and-euclidean-test-function-conventions)

[math:thm-complex-holder-minkowski-and-the-quotient-norm](https://alphabetamath.cc/item/thm-complex-holder-minkowski-and-the-quotient-norm)

[math:thm-tonelli-and-fubini-for-completed-product-measures](https://alphabetamath.cc/item/thm-tonelli-and-fubini-for-completed-product-measures)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[math:thm-complex-lp-completeness-and-almost-everywhere-subsequences](https://alphabetamath.cc/item/thm-complex-lp-completeness-and-almost-everywhere-subsequences)

[math:thm-heine-borel-r](https://alphabetamath.cc/item/thm-heine-borel-r)

[math:cor-boundedness-theorem-r](https://alphabetamath.cc/item/cor-boundedness-theorem-r)

[math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra](https://alphabetamath.cc/item/def-lebesgue-measure-and-the-lebesgue-sigma-algebra)

[math:thm-lebesgue-measure-is-a-complete-measure](https://alphabetamath.cc/item/thm-lebesgue-measure-is-a-complete-measure)

[math:thm-lebesgue-measure-of-a-box-of-every-kind](https://alphabetamath.cc/item/thm-lebesgue-measure-of-a-box-of-every-kind)

[math:prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets](https://alphabetamath.cc/item/prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets)

[math:def-completed-product-measure](https://alphabetamath.cc/item/def-completed-product-measure)

## Facts & Assumptions

[F1] A Banach space is a complete normed space over the stated scalar field; strong measurability is almost-everywhere norm approximation by measurable finite-range simple functions. [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space) [math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)

[F2] A strongly measurable map is Bochner integrable exactly when its norm is integrable, and its integral is independent of the approximating sequence. [math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function) [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion)

[F3] Scalar complex $L^q$ is the almost-everywhere quotient, and its displayed functional is a norm, including at $q=\infty$. Real scalar Minkowski holds for every exponent in $[1,\infty]$. [math:def-complex-lp-and-euclidean-test-function-conventions](https://alphabetamath.cc/item/def-complex-lp-and-euclidean-test-function-conventions) [math:thm-complex-holder-minkowski-and-the-quotient-norm](https://alphabetamath.cc/item/thm-complex-holder-minkowski-and-the-quotient-norm) [math:thm-minkowski-inequality-for-integrals](https://alphabetamath.cc/item/thm-minkowski-inequality-for-integrals)

[F4] For sigma-finite factors, completed-product Tonelli gives almost-everywhere measurable sections and measurable section integrals, and takes product-null sets to null sections almost everywhere. It assumes countable choice. [math:thm-tonelli-and-fubini-for-completed-product-measures](https://alphabetamath.cc/item/thm-tonelli-and-fubini-for-completed-product-measures) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[F5] Under countable choice, complex $L^q$ is complete on every measure space for $1\le q\le\infty$; together with its quotient norm, it is therefore a complex Banach space. [math:thm-complex-lp-completeness-and-almost-everywhere-subsequences](https://alphabetamath.cc/item/thm-complex-lp-completeness-and-almost-everywhere-subsequences) [math:thm-complex-holder-minkowski-and-the-quotient-norm](https://alphabetamath.cc/item/thm-complex-holder-minkowski-and-the-quotient-norm) [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[F6] Every closed bounded real interval $[a,b]$ with $a\le b$ is compact. A continuous real-valued function on a compact subset of its real domain is bounded there. [math:thm-heine-borel-r](https://alphabetamath.cc/item/thm-heine-borel-r) [math:cor-boundedness-theorem-r](https://alphabetamath.cc/item/cor-boundedness-theorem-r)

[F7] Under countable choice, Lebesgue measure $\lambda_d$ is a complete measure on the Lebesgue sigma-algebra of $\mathbb R^d$. For finite $T$, the interval $(0,T)$ is Lebesgue measurable with $\lambda_1((0,T))=T$. The half-line $(0,\infty)=\bigcup_{k\ge1}(0,k)$ is also Lebesgue measurable. [math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra](https://alphabetamath.cc/item/def-lebesgue-measure-and-the-lebesgue-sigma-algebra) [math:thm-lebesgue-measure-is-a-complete-measure](https://alphabetamath.cc/item/thm-lebesgue-measure-is-a-complete-measure) [math:thm-lebesgue-measure-of-a-box-of-every-kind](https://alphabetamath.cc/item/thm-lebesgue-measure-of-a-box-of-every-kind) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[F8] Under countable choice, the measurable cubes $(-k,k]^d$, $k\ge1$, cover $\mathbb R^d$ and have finite Lebesgue measure. Every bounded Lebesgue measurable subset of $\mathbb R^d$ has finite measure. [math:prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets](https://alphabetamath.cc/item/prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[F9] For two sigma-finite measure spaces under countable choice, the completed product is the completion of their product measure. [math:def-completed-product-measure](https://alphabetamath.cc/item/def-completed-product-measure) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[F10] The rationals are countably infinite; their canonical image in $\mathbb R$ is countable and dense. [math:thm-rationals-countable](https://alphabetamath.cc/item/thm-rationals-countable) [math:lem-q-and-irrationals-dense-r](https://alphabetamath.cc/item/lem-q-and-irrationals-dense-r)

[F11] A countable union of measurable null sets is measurable and null by countable subadditivity. [math:thm-finite-and-countable-subadditivity-of-measures](https://alphabetamath.cc/item/thm-finite-and-countable-subadditivity-of-measures)

[F12] A finite-valued complex function is measurable exactly when its real and imaginary parts are measurable. Real measurable functions have measurable positive and negative parts, and differences of finite real measurable functions are measurable. [math:def-complex-lp-and-euclidean-test-function-conventions](https://alphabetamath.cc/item/def-complex-lp-and-euclidean-test-function-conventions) [math:thm-arithmetic-and-lattice-operations-preserve-measurability](https://alphabetamath.cc/item/thm-arithmetic-and-lattice-operations-preserve-measurability)

## Justification

**Given:** The measures, spaces, exponents and maps in the definition.

**Goal:** The displayed quantities are finite norms on the stated classes and the mixed norm is independent of representatives.

1.1 For a continuous path $u$, the norm triangle inequality gives $\|u(t)\|_X-\|u(s)\|_X\le\|u(t)-u(s)\|_X$; interchanging $s,t$ yields $|\|u(t)\|_X-\|u(s)\|_X|\le\|u(t)-u(s)\|_X$. Thus $t\mapsto\|u(t)\|_X$ is continuous. For finite $T>0$, F6 makes $[0,T]$ compact and this real function bounded there; the norm axioms and pointwise operations give the finite supremum norm. For strongly measurable maps, norms are measurable as limits of norms of simple approximants. Sums and scalar multiples are strongly measurable by adding and scaling approximants, and the pointwise norm inequality followed by scalar Minkowski gives the triangle inequality. Homogeneity is pointwise, and zero norm means the map is zero almost everywhere. For $p=1$, integrability and independence of the Bochner integral follow from F2. Applied to restricted Lebesgue measure on $D$, F5 shows that $L^q(D;\mathbb C)$ is Banach for every allowed $q$, including $q=\infty$, so it is an admissible target for the Bochner-space definition when the required strong measurability holds. [given, F1, F2, F3, F5, F6]

1.2 For a Lebesgue measurable set $E\subseteq\mathbb R^d$, the Lebesgue measurable subsets of $E$ form a sigma-algebra on $E$: relative complements are differences of Lebesgue measurable sets and countable unions remain Lebesgue measurable. Assign each such subset $A$ the value $\lambda_d(A)$. The empty-set and countable-additivity axioms follow directly from those of $\lambda_d$ in F7. If such an $A$ is null, every subset of $A$ is Lebesgue measurable by F7 and remains inside $E$, so this measure on $E$ is complete. This is the restricted Lebesgue measure used in the definition. For $E=D$ and $d=n$, the sets $D\cap(-k,k]^n$, $k\ge1$, are bounded Lebesgue measurable subsets, so F8 makes their measures finite; their union is $D$. For $E=(0,T)$ and $d=1$, F7 gives measurability for both finite $T$ and $T=\infty$. The sets $E\cap(-k,k]$, $k\ge1$, are bounded Lebesgue measurable sets of finite measure by F8 and cover $E$, so the time factor is sigma-finite even when $T=\infty$. Thus both restricted factors are complete and sigma-finite. F9 therefore supplies their completed product, and F4 applies with the existing countable-choice assumption. [given, F4, F7, F8, F9]

2.1 Since $u$ is finite-valued and complex measurable, F12 makes $(\operatorname{Re}u)^+$, $(\operatorname{Re}u)^-$, $(\operatorname{Im}u)^+$ and $(\operatorname{Im}u)^-$ nonnegative jointly measurable functions. Apply the nonnegative branch of F4 separately to these four functions and let $A_0$ be the union of their measurable null exceptional time sets. By F11, $A_0$ is measurable and null. Outside $A_0$, all four sections are measurable for the completed spatial factor, which is the restricted Lebesgue factor itself by step 1.2. Their values are finite, so their differences reconstruct measurable real and imaginary sections by F12; hence $u(t,\cdot)$ is complex measurable there. For finite $q$, apply F4 to $|u|^q$, enlarge its measurable null exceptional set by $A_0$, and set $N_q$ to zero there; taking the $q$th root of the resulting measurable section integral makes $N_q$ measurable. For $q=\infty$, identify rational thresholds with their canonical real images, as in F10. For each rational $r>0$, apply F4 to $\mathbf1_{\{|u|>r\}}$ to obtain a measurable section-integral function $I_r$ and a measurable null exceptional set $A_r$, with $I_r(t)=\lambda_n(\{x\in D:|u(t,x)|>r\})$ outside $A_r$. F10 and the assumed countable choice allow these exceptions to be chosen for all such $r$. By F11, $A=A_0\cup\bigcup_{r\in\mathbb Q,\ r>0}A_r$ is measurable and null. Set every $I_r$ and $N_\infty$ to zero on $A$; each $I_r$ remains measurable. Outside $A$, $N_\infty$ is the section essential supremum. [given, F4, F10, F11, F12, step 1.2]

3.1 For each real $a\ge0$, one has $\{t:N_\infty(t)>a\}=\bigcup_{r\in\mathbb Q,\ r>a}\{t:I_r(t)>0\}$. Indeed, outside $A$, if $N_\infty(t)>a$, density in F10 gives a rational $r$ with $a<r<N_\infty(t)$, also when $N_\infty(t)=\infty$; the section measure $I_r(t)$ must be positive, since otherwise $r$ would be an essential bound. Conversely, $I_r(t)>0$ means that no number below $r$ is an essential bound, so $N_\infty(t)\ge r>a$ by the infimum convention in F3. Both sides exclude $A$. The union is countable by F10 and consists of measurable sets by step 2.1. Negative superlevels are the whole time interval because $N_\infty\ge0$. Hence $N_\infty$ is measurable. If two representatives agree product-almost everywhere, F4 applied to their disagreement set makes their sections equal almost everywhere for almost every time, so F3 gives the same $N_q$ almost everywhere. [given, F3, F4, F10, step 1.2, step 2.1]

4.1 F3 gives the sectionwise triangle inequality, homogeneity and definiteness. Applying the scalar $L^p$ norm to the sectionwise bounds gives the mixed triangle inequality and homogeneity. If the mixed norm is zero, $N_q=0$ almost everywhere, so the sections vanish almost everywhere there; F4 then makes $u=0$ product-almost everywhere. The converse is immediate. Hence the mixed norm is well defined and definite on product-almost-everywhere classes. These arguments do not assert completeness or strong measurability into $L^\infty(D)$. [given, F3, F4, step 1.2, step 2.1, step 3.1] ∎
