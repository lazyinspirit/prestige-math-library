---
id: lem-author-ef1b96c593db-radial-transverse-integral
kind: lemma
domain: mathematics
title: A radial transverse wave-vector integral has the isotropic factor
status: published
origin: session
deps:
  - math:thm-polar-coordinates-formula-for-lebesgue-measure
  - math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - math:thm-linear-change-of-variables-for-lebesgue-measure
  - lem-qec-prereq-transverse-angular-average
  - math:def-countable-choice
  - math:thm-linearity-of-the-lebesgue-integral-on-l-one
  - math:def-nonnegative-lebesgue-integral
  - math:def-integrable-real-and-complex-functions-and-their-integrals
  - math:prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - math:thm-tonelli-theorem-for-sigma-finite-product-spaces
  - math:def-polar-surface-measure-on-the-unit-sphere
  - math:def-borel-sigma-algebra
  - math:def-measurable-function-between-measurable-spaces
  - math:thm-composition-with-borel-functions-preserves-measurability
  - math:thm-continuous-preimages-of-borel-sets-are-borel
  - math:thm-borel-sigma-algebra-of-a-subspace-is-the-trace
  - math:thm-borel-sets-are-lebesgue-measurable
  - math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - math:def-product-sigma-algebra-and-finite-product-sigma-algebras
  - math:thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - math:def-integral-of-a-nonnegative-simple-function
  - math:prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - math:prop-order-and-scalar-rules-for-the-nonnegative-integral
  - math:def-finite-sigma-finite-and-semifinite-measures
  - math:def-product-measure-on-sigma-finite-spaces
dependency_roles:
  math:thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  math:thm-linear-change-of-variables-for-lebesgue-measure: mathematical-premise
  lem-qec-prereq-transverse-angular-average: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  math:def-nonnegative-lebesgue-integral: mathematical-premise
  math:def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  math:prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets: mathematical-premise
  math:thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  math:def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  math:def-borel-sigma-algebra: mathematical-premise
  math:def-measurable-function-between-measurable-spaces: mathematical-premise
  math:thm-composition-with-borel-functions-preserves-measurability: mathematical-premise
  math:thm-continuous-preimages-of-borel-sets-are-borel: mathematical-premise
  math:thm-borel-sigma-algebra-of-a-subspace-is-the-trace: mathematical-premise
  math:thm-borel-sets-are-lebesgue-measurable: mathematical-premise
  math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  math:def-product-sigma-algebra-and-finite-product-sigma-algebras: mathematical-premise
  math:thm-borel-products-of-euclidean-spaces-are-euclidean-borel: mathematical-premise
  math:def-integral-of-a-nonnegative-simple-function: mathematical-premise
  math:prop-the-nonnegative-integral-agrees-with-the-simple-integral: mathematical-premise
  math:prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  math:def-finite-sigma-finite-and-semifinite-measures: mathematical-premise
  math:def-product-measure-on-sigma-finite-spaces: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
formulation_deps:
  - math:def-countable-choice
  - math:def-borel-sigma-algebra
  - math:def-measurable-function-between-measurable-spaces
  - math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - math:def-nonnegative-lebesgue-integral
  - math:def-integrable-real-and-complex-functions-and-their-integrals
argument_deps:
  - math:thm-polar-coordinates-formula-for-lebesgue-measure
  - math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - math:thm-linear-change-of-variables-for-lebesgue-measure
  - lem-qec-prereq-transverse-angular-average
  - math:def-countable-choice
  - math:thm-linearity-of-the-lebesgue-integral-on-l-one
  - math:def-nonnegative-lebesgue-integral
  - math:def-integrable-real-and-complex-functions-and-their-integrals
  - math:prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - math:thm-tonelli-theorem-for-sigma-finite-product-spaces
  - math:def-polar-surface-measure-on-the-unit-sphere
  - math:def-borel-sigma-algebra
  - math:def-measurable-function-between-measurable-spaces
  - math:thm-composition-with-borel-functions-preserves-measurability
  - math:thm-continuous-preimages-of-borel-sets-are-borel
  - math:thm-borel-sigma-algebra-of-a-subspace-is-the-trace
  - math:thm-borel-sets-are-lebesgue-measurable
  - math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - math:def-product-sigma-algebra-and-finite-product-sigma-algebras
  - math:thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - math:def-integral-of-a-nonnegative-simple-function
  - math:prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - math:prop-order-and-scalar-rules-for-the-nonnegative-integral
  - math:def-finite-sigma-finite-and-semifinite-measures
  - math:def-product-measure-on-sigma-finite-spaces
dependency_level: 1
---

## Statement

Assume Countable Choice, let $c>0$, let $i,j\in\{1,2,3\}$, and let a Borel function $u:(0,\infty)\to\mathbb C$ satisfy $\int_0^\infty|u(\omega)|\omega^2\,d\omega<\infty$. On $\mathbb R^3$ define $v(k)=u(c|k|)$ for $k\ne0$ and $v(0)=0$. Define $Q_{ij}(k)=\delta_{ij}-k_i k_j/|k|^2$ for $k\ne0$ and $Q_{ij}(0)=0$, where $\delta_{ij}$ is $1$ if $i=j$ and $0$ otherwise. All integrals are Lebesgue integrals.

Then $v$ and $vQ_{ij}$ are integrable on $\mathbb R^3$, and

$$\int_{\mathbb R^3}v(k)Q_{ij}(k)\,d^3k=\frac{8\pi}{3c^3}\delta_{ij}\int_0^\infty u(\omega)\omega^2\,d\omega.$$

The same assertion holds with $u$ replaced by $u\mathbf1_E$ for any Borel frequency set $E\subseteq(0,\infty)$, using the same zero extension; this includes every Borel frequency shell.

## Facts & Assumptions

**Given:** Countable Choice, the positive constant $c$, the indices, Borel function, weighted-integrability hypothesis and zero extensions in the Statement.

[F1] Under Countable Choice, polar surface measure $\sigma$ on $S^2$ is a finite Borel measure, and the polar formula decomposes each nonnegative Borel integral on $\mathbb R^3$ into $r^2\,dr\,d\sigma$. [[math:thm-polar-coordinates-formula-for-lebesgue-measure]]

[F2] Fubini applies to absolutely integrable functions on a product of sigma-finite measure spaces. [[math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F3] Under Countable Choice, the dilation $r\mapsto cr$ scales one-dimensional Lebesgue measure by $c$. [[math:thm-linear-change-of-variables-for-lebesgue-measure]]

[F4] With $q_{ij}(n)=\delta_{ij}-n_i n_j$ on $S^2$, the angular identity is $\int_{S^2}q_{ij}(n)\,d\sigma(n)=8\pi\delta_{ij}/3$. [[lem-qec-prereq-transverse-angular-average]]

[F5] Countable Choice is assumed for the polar, angular and Lebesgue-measure suppliers. [[math:def-countable-choice]]

[F6] The integral is complex-linear on integrable functions. [[math:thm-linearity-of-the-lebesgue-integral-on-l-one]]

[F7] The nonnegative integral is the supremum of the integrals of nonnegative simple minorants. [[math:def-nonnegative-lebesgue-integral]]

[F8] Complex integrability means finite integral of the modulus; the complex integral combines the real and imaginary integrals, each defined through positive and negative parts. [[math:def-integrable-real-and-complex-functions-and-their-integrals]]

[F9] Under Countable Choice, Euclidean Lebesgue measure is sigma-finite and bounded measurable sets have finite measure. [[math:prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]

[F10] Tonelli identifies a nonnegative product integral with its iterated integrals for sigma-finite factor measures. [[math:thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F11] The polar surface set function used here is $\sigma(E)=3\lambda_3(\{rn:n\in E,\ 0<r\leq1\})$ for Borel $E\subseteq S^2$. Its measure property is supplied by [F1]. [[math:def-polar-surface-measure-on-the-unit-sphere]]

[F12] The Borel sigma-algebra is generated by open sets. A map is measurable when preimages of measurable target sets are measurable; compositions of measurable maps are measurable. Identify $\mathbb C$ with $\mathbb R^2$ with its Borel sigma-algebra. [[math:def-borel-sigma-algebra]] [[math:def-measurable-function-between-measurable-spaces]] [[math:thm-composition-with-borel-functions-preserves-measurability]]

[F13] Continuous maps between topological spaces have Borel preimages of Borel sets, and a subspace has the trace of the ambient Borel sigma-algebra. Under Countable Choice, Euclidean Borel sets are Lebesgue measurable. Here $d^3k$ and $dr$ mean $\lambda_3$ and the restriction of $\lambda_1$ to $(0,\infty)$, respectively, with their Lebesgue sigma-algebras. [[math:thm-continuous-preimages-of-borel-sets-are-borel]] [[math:thm-borel-sigma-algebra-of-a-subspace-is-the-trace]] [[math:thm-borel-sets-are-lebesgue-measurable]] [[math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]

[F14] A product sigma-algebra is generated by measurable rectangles; for Euclidean factors it equals the Borel sigma-algebra of the Euclidean product. [[math:def-product-sigma-algebra-and-finite-product-sigma-algebras]] [[math:thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]

[F15] For a nonnegative simple function $s=\sum_{\ell=1}^m a_\ell\mathbf1_{E_\ell}$ with disjoint measurable sets, its simple integral is $\sum_\ell a_\ell\mu(E_\ell)$, using $0\cdot\infty=0$, and equals its nonnegative Lebesgue integral. In particular $\int\mathbf1_X\,d\mu=\mu(X)$. [[math:def-integral-of-a-nonnegative-simple-function]] [[math:prop-the-nonnegative-integral-agrees-with-the-simple-integral]]

[F16] Nonnegative integrals are monotone and satisfy $\int a f\,d\mu=a\int f\,d\mu$ for every finite $a>0$; the zero function has integral zero. [[math:prop-order-and-scalar-rules-for-the-nonnegative-integral]]

[F17] A measure is finite when its total mass is finite, and sigma-finite when its space is a countable union of measurable sets of finite measure. In particular a finite measure is sigma-finite, using the whole space at every index. [[math:def-finite-sigma-finite-and-semifinite-measures]]

[F18] For sigma-finite measure spaces $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$, their product measure on $\mathcal A\otimes\mathcal B$ is defined by $(\mu\times\nu)(E)=\int_X\nu(E_x)\,d\mu=\int_Y\mu(E^y)\,d\nu$, where $E_x=\{y:(x,y)\in E\}$ and $E^y=\{x:(x,y)\in E\}$. [[math:def-product-measure-on-sigma-finite-spaces]]

## Proof

**Given:** Countable Choice, the positive constant $c$, the indices, Borel function, weighted-integrability hypothesis and zero extensions in the Statement.

[F1] Under Countable Choice, polar surface measure $\sigma$ on $S^2$ is a finite Borel measure, and the polar formula decomposes each nonnegative Borel integral on $\mathbb R^3$ into $r^2\,dr\,d\sigma$. [[math:thm-polar-coordinates-formula-for-lebesgue-measure]]

[F2] Fubini applies to absolutely integrable functions on a product of sigma-finite measure spaces. [[math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F3] Under Countable Choice, the dilation $r\mapsto cr$ scales one-dimensional Lebesgue measure by $c$. [[math:thm-linear-change-of-variables-for-lebesgue-measure]]

[F4] With $q_{ij}(n)=\delta_{ij}-n_i n_j$ on $S^2$, the angular identity is $\int_{S^2}q_{ij}(n)\,d\sigma(n)=8\pi\delta_{ij}/3$. [[lem-qec-prereq-transverse-angular-average]]

[F5] Countable Choice is assumed for the polar, angular and Lebesgue-measure suppliers. [[math:def-countable-choice]]

[F6] The integral is complex-linear on integrable functions. [[math:thm-linearity-of-the-lebesgue-integral-on-l-one]]

[F7] The nonnegative integral is the supremum of the integrals of nonnegative simple minorants. [[math:def-nonnegative-lebesgue-integral]]

[F8] Complex integrability means finite integral of the modulus; the complex integral combines the real and imaginary integrals, each defined through positive and negative parts. [[math:def-integrable-real-and-complex-functions-and-their-integrals]]

[F9] Under Countable Choice, Euclidean Lebesgue measure is sigma-finite and bounded measurable sets have finite measure. [[math:prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]

[F10] Tonelli identifies a nonnegative product integral with its iterated integrals for sigma-finite factor measures. [[math:thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F11] The polar surface set function used here is $\sigma(E)=3\lambda_3(\{rn:n\in E,\ 0<r\leq1\})$ for Borel $E\subseteq S^2$. Its measure property is supplied by [F1]. [[math:def-polar-surface-measure-on-the-unit-sphere]]

[F12] The Borel sigma-algebra is generated by open sets. A map is measurable when preimages of measurable target sets are measurable; compositions of measurable maps are measurable. Identify $\mathbb C$ with $\mathbb R^2$ with its Borel sigma-algebra. [[math:def-borel-sigma-algebra]] [[math:def-measurable-function-between-measurable-spaces]] [[math:thm-composition-with-borel-functions-preserves-measurability]]

[F13] Continuous maps between topological spaces have Borel preimages of Borel sets, and a subspace has the trace of the ambient Borel sigma-algebra. Under Countable Choice, Euclidean Borel sets are Lebesgue measurable. Here $d^3k$ and $dr$ mean $\lambda_3$ and the restriction of $\lambda_1$ to $(0,\infty)$, respectively, with their Lebesgue sigma-algebras. [[math:thm-continuous-preimages-of-borel-sets-are-borel]] [[math:thm-borel-sigma-algebra-of-a-subspace-is-the-trace]] [[math:thm-borel-sets-are-lebesgue-measurable]] [[math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]

[F14] A product sigma-algebra is generated by measurable rectangles; for Euclidean factors it equals the Borel sigma-algebra of the Euclidean product. [[math:def-product-sigma-algebra-and-finite-product-sigma-algebras]] [[math:thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]

[F15] For a nonnegative simple function $s=\sum_{\ell=1}^m a_\ell\mathbf1_{E_\ell}$ with disjoint measurable sets, its simple integral is $\sum_\ell a_\ell\mu(E_\ell)$, using $0\cdot\infty=0$, and equals its nonnegative Lebesgue integral. In particular $\int\mathbf1_X\,d\mu=\mu(X)$. [[math:def-integral-of-a-nonnegative-simple-function]] [[math:prop-the-nonnegative-integral-agrees-with-the-simple-integral]]

[F16] Nonnegative integrals are monotone and satisfy $\int a f\,d\mu=a\int f\,d\mu$ for every finite $a>0$; the zero function has integral zero. [[math:prop-order-and-scalar-rules-for-the-nonnegative-integral]]

[F17] A measure is finite when its total mass is finite, and sigma-finite when its space is a countable union of measurable sets of finite measure. In particular a finite measure is sigma-finite, using the whole space at every index. [[math:def-finite-sigma-finite-and-semifinite-measures]]

[F18] For sigma-finite measure spaces $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$, their product measure on $\mathcal A\otimes\mathcal B$ is defined by $(\mu\times\nu)(E)=\int_X\nu(E_x)\,d\mu=\int_Y\mu(E^y)\,d\nu$, where $E_x=\{y:(x,y)\in E\}$ and $E^y=\{x:(x,y)\in E\}$. [[math:def-product-measure-on-sigma-finite-spaces]]



**Given:** Countable Choice, the positive constant $c$, the indices, Borel function, weighted-integrability hypothesis and zero extensions in the Statement.

**Goal:** Prove absolute integrability, the isotropic factor and the frequency-shell version.

1.1 We first justify the measurability operations used below. If $f:X\to\mathbb R^m$ and $g:X\to\mathbb R^n$ are measurable on the same measurable space, the preimage of a rectangle under $(f,g)$ is the intersection of the two coordinate preimages. The target sets with measurable preimages form a sigma-algebra, so [F14] makes $(f,g)$ measurable into $\mathbb R^{m+n}$ with its Borel sigma-algebra. By [F12] and [F13], composition with continuous multiplication, modulus, real and imaginary parts, or positive and negative parts therefore preserves measurability. The map $k\mapsto c|k|$ is continuous from $\mathbb R^3\setminus\{0\}$ to $(0,\infty)$, and the formula for $Q_{ij}$ is continuous on that punctured space. Thus $v$, $Q_{ij}$ and $vQ_{ij}$ are Borel there. For each Borel target set, the preimage under a zero extension is its punctured preimage, together with $\{0\}$ exactly when the target contains zero. By the trace assertion of [F13], and because the punctured space is open and $\{0\}$ is closed, this is Borel in $\mathbb R^3$. The functions $q_{ij}$ on $S^2$ are continuous, hence Borel. These observations also make all their moduli and real and imaginary parts, and the positive and negative parts of the latter, Borel. Euclidean Borel functions are measurable for the Lebesgue measures in use by [F13]. [given, F12, F13, F14, algebra]

2.1 For $n\in S^2$, $|q_{ij}(n)|\leq1$ and $\sum_{i=1}^3q_{ii}(n)=2$. By [F1] and [F11] the sphere measure is finite. Facts [F15] and [F16] give $\int_{S^2}|q_{ij}|\,d\sigma\leq\int_{S^2}1\,d\sigma=\sigma(S^2)<\infty$, so [F8] makes each $q_{ij}$ integrable. Summing [F4] over the three diagonal indices and using [F6] and [F15] gives $2\sigma(S^2)=8\pi$, hence $\sigma(S^2)=4\pi$. The radial measure $dr$ restricted to $(0,\infty)$ is sigma-finite: the bounded measurable intervals $(0,m]$, for integers $m\geq1$, have finite measure by [F9] and [F13] and cover the half-line. By [F17] this cover makes the radial measure sigma-finite, and the finite sphere measure is sigma-finite using the constant cover $S^2$. Thus both factors required by [F2] and [F10] are sigma-finite. [given, F1, F2, F4, F5, F6, F8, F9, F10, F11, F13, F15, F16, F17, step 1.1, algebra]

3.1 Let $h$ be a nonnegative Lebesgue measurable function on $(0,\infty)$. By [F3] applied to the dilation and its inverse, $\lambda_1(c^{-1}E)=c^{-1}\lambda_1(E)$ for every Lebesgue measurable $E\subseteq(0,\infty)$, and both images and preimages are measurable. For a nonnegative simple $s=\sum_\ell a_\ell\mathbf1_{E_\ell}$ with disjoint measurable sets, [F15] therefore gives $\int_0^\infty s(cr)\,dr=\sum_\ell a_\ell\lambda_1(c^{-1}E_\ell)=c^{-1}\int_0^\infty s(\omega)\,d\omega$. Composition with the invertible dilation bijects the nonnegative simple minorants of $h$ with those of $h(c\,\cdot)$; taking suprema in [F7] proves $\int_0^\infty h(cr)\,dr=c^{-1}\int_0^\infty h(\omega)\,d\omega$. Take $h(\omega)=|u(\omega)|\omega^2$, which is measurable by step 1.1. Fact [F16] factors out $c^{-2}>0$, giving $\int_0^\infty|u(cr)|r^2\,dr=c^{-3}\int_0^\infty|u(\omega)|\omega^2\,d\omega$. Applying [F1] to $|v|$, evaluating the inner constant integral with [F15] and [F16], and using step 2.1 now yields $\int_{\mathbb R^3}|v(k)|\,d^3k=4\pi c^{-3}\int_0^\infty|u(\omega)|\omega^2\,d\omega<\infty$. Since $|vQ_{ij}|\leq|v|$, [F16] and [F8] establish integrability of both asserted functions. [given, F1, F3, F5, F7, F8, F15, F16, step 1.1, step 2.1, algebra]

4.1 On $(0,\infty)\times S^2$, set $H(r,n)=u(cr)r^2q_{ij}(n)$, using the product of the radial Lebesgue sigma-algebra and $\mathcal B(S^2)$. Both factor measures are sigma-finite by step 2.1, so [F18] defines $dr\times\sigma$ on precisely this product sigma-algebra. The coordinate projections are measurable by [F14], since their preimages are rectangles. The factors of $H$ are compositions of these projections with the measurable radial and angular functions of step 1.1. Fact [F12] and the tuple and multiplication argument of step 1.1 therefore make $H$ product-measurable. By [F10], [F15], [F16] and the bounds and sigma-finiteness in steps 2.1 and 3.1, $\int|H|\,d(dr\times\sigma)\leq4\pi\int_0^\infty|u(cr)|r^2\,dr<\infty$. Apply [F1] to the positive and negative parts of the real and imaginary parts of $vQ_{ij}$, and recombine by [F8] and [F6]. Absolute convergence and [F2] justify the product and iterated integrations, giving $\int_{\mathbb R^3}vQ_{ij}\,d^3k=\int_0^\infty u(cr)r^2\bigl(\int_{S^2}q_{ij}\,d\sigma\bigr)dr=(8\pi\delta_{ij}/3)\int_0^\infty u(cr)r^2\,dr$. For the complex substitution, apply step 3.1 to the positive and negative parts of $\operatorname{Re}u$ and $\operatorname{Im}u$, each multiplied by $\omega^2$. Their integrals are finite by the weighted modulus hypothesis and [F16]. Since $r^2=c^{-2}(cr)^2$, [F16] and then [F8] and [F6] give $\int_0^\infty u(cr)r^2\,dr=c^{-3}\int_0^\infty u(\omega)\omega^2\,d\omega$, proving the stated coefficient. [given, F1, F2, F3, F4, F6, F8, F10, F12, F14, F15, F16, F18, step 1.1, step 2.1, step 3.1, algebra]

5.1 For a Borel $E\subseteq(0,\infty)$, $u\mathbf1_E$ is Borel: for every Borel target set its preimage is $E\cap u^{-1}(B)$, together with $E^c$ exactly when $0\in B$. Moreover $|u\mathbf1_E|\omega^2\leq|u|\omega^2$, so its weighted absolute integral is finite by [F16]. Steps 1.1, 2.1, 3.1 and 4.1 apply with this function and its zero extension. This proves the claimed frequency-set identity, in particular the frequency-shell identity. [given, F8, F12, F16, step 1.1, step 2.1, step 3.1, step 4.1] ∎
