---
id: thm-measurable-essentially-bounded-operator-fields-act-decomposably
kind: theorem
title: Measurable essentially bounded operator fields act decomposably
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - cor-integral-over-a-null-set-vanishes
  - cor-triangle-inequality-for-inner-product-norm
  - def-axiom-of-choice
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-complex-metric-convergence-and-continuity
  - def-countable-choice
  - def-direct-integral-of-a-measurable-hilbert-field
  - def-essential-supremum-with-respect-to-a-measure
  - def-finite-sigma-finite-and-semifinite-measures
  - def-integral-of-a-nonnegative-simple-function
  - def-integral-over-a-measurable-set
  - def-measurable-and-decomposable-operator-fields
  - def-measurable-function-between-measurable-spaces
  - def-measurable-hilbert-field-from-a-countable-fundamental-family
  - def-operator-norm
  - def-real-and-complex-inner-product-space
  - def-space-of-bounded-linear-operators
  - lem-complex-conjugation-and-modulus-laws
  - lem-composition-operator-norm-inequality
  - lem-measurable-sections-have-measurable-pointwise-inner-products
  - lem-rat-embeds-dense
  - prop-essential-supremum-is-attained-as-the-least-essential-bound
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-hilbert-adjoint-properties
  - thm-n-cross-n-countable
  - thm-rationals-countable
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "B. Bekka and P. de la Harpe, Unitary Representations of Groups, Duals, and Characters"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Ch. 1 §1.G.3, printed p. 60 (field action and norm statement, with the norm proof referred to Dixmier–von Neumann); §1.H.1, printed p. 65 (general-field commutant theorem, not used here)"
    - title: "F. Bruhat, Lectures on Lie Groups and Representations of Locally Compact Groups, Ch. 10"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr14.pdf"
      locator: "Part III, Ch. 10 §§1.7–1.8, printed pp. 99–101 (different locally bounded Lusin-field convention; measurable action and upper bound, with the exact-norm statement in Theorem 2)"
verification:
  precheck: n/a
axiom_use: "Assume AC to invoke the preceding direct-integral Hilbert-space theorem and to obtain the Hilbert adjoints used here. AC implies Countable Choice by def-countable-choice, which is the hypothesis of thm-hilbert-adjoint-properties. The countable rational test family is explicitly coded; the lower-bound step selects one witness from a single countable union and one finite-measure piece, so these constructions use no further choice axiom."
---

## Statement

Assume AC. Let $(X,\mathcal B,\mu)$ and $(H_x,e_n(x))_{x\in X}$ be a
measurable complex Hilbert field with countable fundamental family, over the
sigma-finite standard-Borel base of
[[def-measurable-hilbert-field-from-a-countable-fundamental-family]]. Put
$$\mathcal H=\int_X^\oplus H_x\,d\mu(x),$$
the Hilbert space of [[thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces]].
Every weakly measurable essentially bounded field
$(T_x)_{x\in X}$ from [[def-measurable-and-decomposable-operator-fields]]
induces a well-defined bounded operator
$$T=\int_X^\oplus T_x\,d\mu(x)\in\mathcal B(\mathcal H),$$
given on classes by $T[\xi]=[x\mapsto T_x\xi(x)]$,
and
$$\|T\|=\operatorname*{ess\,sup}_{x\in X}\|T_x\|.$$
For two such fields $T$ and $S$, the adjoint field $(T_x^*)$ and product
field $(T_xS_x)$ are weakly measurable and essentially bounded. Their induced
operators are respectively $T^*$ and $TS$. All inner products are linear in
their first variable.

## Facts & Assumptions

[F1] The fundamental sequence has dense complex span in each fibre, and each fundamental vector is a measurable section ([[def-measurable-hilbert-field-from-a-countable-fundamental-family]]).

[F2] The direct integral is the quotient of square-integrable measurable sections by almost-everywhere equality, and its inner product is the integral of the fibre inner products ([[def-direct-integral-of-a-measurable-hilbert-field]]).

[F3] Under AC, this direct integral is a complete Hilbert space ([[thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces]]).

[F4] Weak measurability means that every fundamental matrix coefficient of the operator field is measurable ([[def-measurable-and-decomposable-operator-fields]]).

[F5] For a weakly measurable field, pairings against every pair of measurable sections are measurable ([[def-measurable-and-decomposable-operator-fields]]).

[F6] Measurable sections have measurable pointwise norms and pairings and are closed under measurable scalar combinations ([[lem-measurable-sections-have-measurable-pointwise-inner-products]]).

[F7] The pointwise operator-norm function of a weakly measurable field is measurable ([[def-measurable-and-decomposable-operator-fields]]).

[F8] A finite essential supremum is an almost-everywhere bound and is the least such bound ([[def-essential-supremum-with-respect-to-a-measure]], [[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

[F9] The nonnegative integral is monotone, homogeneous, and additive ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

[F10] A nonnegative function has zero integral over a measurable null set, and integration over a measurable set is multiplication by its indicator ([[cor-integral-over-a-null-set-vanishes]], [[def-integral-over-a-measurable-set]]).

[F11] For an indicator function, the nonnegative integral equals the measure of its set ([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]], [[def-integral-of-a-nonnegative-simple-function]]).

[F12] A sigma-finite measure space has a countable cover by measurable sets of finite measure ([[def-finite-sigma-finite-and-semifinite-measures]]).

[F13] $\mathcal B(X,Y)$ is the set of bounded linear operators from $X$ to $Y$ ([[def-space-of-bounded-linear-operators]]).

[F14] The operator norm satisfies $\|Au\|\le\|A\|\|u\|$ and on a nonzero domain is the supremum over the unit sphere ([[def-operator-norm]]).

[F15] Composition of bounded operators satisfies $\|AB\|\le\|A\|\|B\|$ ([[lem-composition-operator-norm-inequality]]).

[F16] AC implies Countable Choice; under Countable Choice bounded operators between Hilbert spaces have unique adjoints satisfying $\langle Au,v\rangle=\langle u,A^*v\rangle$, $\|A^*\|=\|A\|$ ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-hilbert-adjoint-properties]]).

[F17] In real coordinates complex conjugation is the reflection $(a,b)\mapsto(a,-b)$, which preserves the Euclidean complex metric; every continuous map has Borel preimages ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[def-complex-metric-convergence-and-continuity]], [[thm-continuous-preimages-of-borel-sets-are-borel]]).

[F18] Composing a measurable map with a Borel map preserves measurability, with measurability understood through inverse images ([[thm-composition-with-borel-functions-preserves-measurability]], [[def-measurable-function-between-measurable-spaces]]).

[F19] The complex modulus is $1$-Lipschitz for the Euclidean metric, since modulus subadditivity gives $\bigl||z|-|w|\bigr|\le|z-w|$ ([[def-complex-metric-convergence-and-continuity]], [[lem-complex-conjugation-and-modulus-laws]]).

[F20] Cauchy--Schwarz holds in each fibre: $|\langle u,v\rangle|\le\|u\|\|v\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F21] $\mathbb Q$ is in bijection with $\mathbb N$ and $\mathbb N^2$ is in bijection with $\mathbb N$ ([[thm-rationals-countable]], [[thm-n-cross-n-countable]]). Given a fixed bijection $\beta:\mathbb N^2\to \mathbb N$, define $c_0(())=0$ and $c_{k+1}(a_0,\ldots,a_k)=\beta(a_0,c_k(a_1,\ldots,a_k))$; the code $c(a_0,\ldots,a_{k-1})=\beta(k,c_k(a_0,\ldots,a_{k-1}))$ injects all finite sequences of naturals into $\mathbb N$.

[F22] Rational numbers are dense in the real numbers ([[lem-rat-embeds-dense]]).

[F23] Fibre norms are absolutely homogeneous and satisfy the triangle inequality ([[cor-triangle-inequality-for-inner-product-norm]]).

[F24] Complex modulus is subadditive ([[lem-complex-conjugation-and-modulus-laws]]).

[F25] Inner products are linear in their first variable and conjugate-linear in the second ([[def-real-and-complex-inner-product-space]]).

[F26] Finite and countable unions satisfy measure subadditivity ([[thm-finite-and-countable-subadditivity-of-measures]]).

[F27] Each fundamental vector $e_n$ is a measurable section ([[def-measurable-hilbert-field-from-a-countable-fundamental-family]]).

## Proof

**Proof technique:** direct, using pointwise localization and a countable dense family in each fibre.

**Given:** AC, the measurable Hilbert field, and one or two weakly measurable essentially bounded operator fields on it.

1.1 Let $\xi$ be a measurable section. For each fundamental vector $e_m$, the function $x\mapsto\langle T_x\xi(x),e_m(x)\rangle$ is measurable by the all-sections coefficient criterion in [F5]. Thus all fundamental coefficients of $x\mapsto T_x\xi(x)$ are measurable, so this pointwise image is a measurable section. [F5, F27]

1.2 Enumerate all finite rational-complex linear combinations of the fundamental sections as $(q_j)_{j\in\mathbb N}$. Such an enumeration exists by [F21]; each $q_j$ is a measurable section by [F6] and [F27]. The family is pointwise dense: first approximate a given vector by a finite complex combination using [F1], then approximate each of its finitely many complex coefficients by an element of $\mathbb Q+i\mathbb Q$ using [F22]. If $u=\sum_{r=1}^N z_re_{n_r}(x)$ is such a combination and $a_r+ib_r$ are the rational approximants, [F23] and [F24] bound the replacement error by $\sum_{r=1}^N|z_r-(a_r+ib_r)|\|e_{n_r}(x)\|$, which can be made arbitrarily small. [F1, F6, F21, F22, F23, F24, F27, construct]

1.3 For each $x$, the fibre adjoint $T_x^*$ exists by [F16]. With inner products linear in the first variable [F25], its matrix coefficients satisfy $\langle T_x^*e_n(x),e_m(x)\rangle=\overline{\langle T_xe_m(x),e_n(x)\rangle}$. Conjugation is an isometry because if $z=a+bi$ and $w=c+di$ then $d_{\mathbb C}(\overline z,\overline w)^2=(a-c)^2+(b-d)^2=d_{\mathbb C}(z,w)^2$. Thus it is continuous and Borel by [F17]; [F4] and [F18] then make the right side measurable. Hence $T_x^*$ is weakly measurable. Also $\|T_x^*\|=\|T_x\|$ by [F16], so it is essentially bounded with the same essential bound. [F4, F16, F17, F18, F25, algebra]

2.1 Put $s=\operatorname*{ess\,sup}_x\|T_x\|<\infty$, and choose a measurable null set $N$ outside which $\|T_x\|\le s$ by [F8]. For $f(x)=\|T_x\xi(x)\|^2$, step 1.1 and [F6] give nonnegative measurability. The pointwise operator bound in [F14] gives $f\mathbf1_{X\setminus N}\le s^2\|\xi\|^2$. By [F9] and [F10], $\int_X f\,d\mu=\int_X f\mathbf1_{X\setminus N}\,d\mu+\int_X f\mathbf1_N\,d\mu\le s^2\int_X\|\xi\|^2\,d\mu<\infty$, where the second integral is zero because $N$ is null. Hence the pointwise image is square-integrable. If $\xi=\xi'$ outside a measurable null set, then $T_x\xi(x)=T_x\xi'(x)$ there. If two field representatives agree outside a measurable null set, their pointwise images also agree there. Pointwise linearity and the same estimate show that $[\xi]\mapsto[T\xi]$ is a well-defined bounded linear operator on $\mathcal H$, independent of both section and field representatives, with $\|T\|\le s$. [F2, F6, F7, F8, F9, F10, F13, F14, step 1.1]

2.2 Define $u_j(x)=q_j(x)/\|q_j(x)\|$ when $q_j(x)\ne0$ and $u_j(x)=0$ otherwise. The norm is measurable by [F6]. The function $g(0)=0$ and $g(t)=1/t$ for $t>0$ is Borel, by splitting each preimage into its possible zero part and the preimage under the continuous reciprocal on $(0,\infty)$ using [F17]. Thus $u_j=(g\circ\|q_j\|)q_j$ is measurable by [F6] and [F18]. It has norm at most one, and the nonzero $u_j(x)$ are dense in the unit sphere of each nonzero fibre: given a unit $v$ and $\varepsilon>0$, choose $q_j(x)$ with $\|q_j(x)-v\|<\min(\varepsilon/2,1/2)$ by step 1.2. Then $q_j(x)\ne0$ and $\|q_j(x)/\|q_j(x)\|-v\|\le2\|q_j(x)-v\|<\varepsilon$. Consequently, for every fibre, $\|T_x\|=\sup_{j,k\in\mathbb N}|\langle T_xu_j(x),u_k(x)\rangle|$. On a nonzero fibre, the operator norm is the supremum of $\|T_xu\|$ over unit $u$ by [F14], and $\|T_xu\|=\sup_{\|v\|=1}|\langle T_xu,v\rangle|$ by [F20] and the choice $v=T_xu/\|T_xu\|$ when $T_xu\ne0$. The pairing is continuous in both unit vectors: its change is at most $\|T_x\|(\|u-u'\|+\|v-v'\|)$ by [F14] and [F20]. Density of both normalized families therefore gives the displayed supremum. On a zero fibre every term and $\|T_x\|$ are zero. Each displayed coefficient is measurable by [F5] and [F18], and its modulus is measurable because [F19] makes the modulus continuous and [F18] preserves measurability under composition. Thus the norm is a countable measurable supremum. [F5, F6, F14, F17, F18, F19, F20, F21, F23, step 1.2, construct]

2.3 Let $S$ be another weakly measurable essentially bounded field. By step 1.1, $x\mapsto S_xe_n(x)$ is a measurable section. The all-sections criterion [F5], applied to $T$ and that section, shows that every fundamental coefficient $\langle T_xS_xe_n(x),e_m(x)\rangle$ is measurable. Hence $(T_xS_x)$ is weakly measurable. The pointwise composition bound [F15] and the two essential bounds [F8] show that $\|T_xS_x\|$ is bounded almost everywhere by the product of the two essential suprema: remove the union of their two null exceptional sets, which is null by [F26]. Thus the product field is essentially bounded. [F5, F8, F15, F26, step 1.1]

3.1 If $s=0$, step 2.1 gives $T=0$ and hence $\|T\|=s$. Suppose $s>0$, and fix $0<c<s$. The set $A_c=\{x:\|T_x\|>c\}$ has positive measure, since otherwise $c$ would be an almost-everywhere bound contradicting the leastness of $s$ in [F8]. By the countable supremum in step 2.2, $A_c=\bigcup_{j,k\in\mathbb N,\ n\in\mathbb N_{>0}}\{x:|\langle T_xu_j(x),u_k(x)\rangle|>c+1/n\}$. Countable subadditivity [F26] gives one such set positive measure. Intersect it with a set of a sigma-finite cover from [F12] so the resulting measurable set $E$ has finite positive measure. On $E$ both test vectors have norm one; by Cauchy--Schwarz in [F20], $\|T_xu_j(x)\|>c+1/n$. For $\zeta=\mathbf1_Eu_j$, the section lemma [F6] gives measurability, and it is square-integrable because $\|\zeta(x)\|^2=\mathbf1_E(x)$. Hence $\|\zeta\|^2=\mu(E)>0$ and $\|T\zeta\|^2=\int_E\|T_xu_j(x)\|^2\,d\mu(x)\ge(c+1/n)^2\mu(E)$. The indicator integral is [F11], [F10] identifies it as an integral over $E$, and [F9] gives the comparison. Since $\mu(E)>0$, its defining unit-vector supremum [F14] gives $\|T\|\ge\|T\zeta\|/\|\zeta\|\ge c+1/n>c$. If $\|T\|<s$, rational density [F22] gives a $c$ strictly between $\|T\|$ and $s$, contradicting the established inequality; hence $\|T\|\ge s$, and step 2.1 proves equality. [F2, F6, F8, F9, F10, F11, F12, F14, F20, F22, F26, step 2.1, step 2.2, algebra]

4.1 Let $\widetilde T=\int^\oplus T_x^*\,d\mu$ be the induced operator from step 2.1 applied to the adjoint field. For direct-integral vectors $\xi,\eta$, the fibre adjoint identity gives $\langle T\xi,\eta\rangle_{\mathcal H}=\int_X\langle T_x\xi(x),\eta(x)\rangle\,d\mu(x)=\int_X\langle\xi(x),T_x^*\eta(x)\rangle\,d\mu(x)=\langle\xi,\widetilde T\eta\rangle_{\mathcal H}$. Uniqueness of Hilbert adjoints in [F16] therefore gives $\widetilde T=T^*$. For the product field, step 2.1 and the definition of induced action yield, for every $\xi\in\mathcal H$, $(\int^\oplus T_xS_x\,d\mu)\xi=[x\mapsto T_x(S_x\xi(x))]=T(S\xi)$, so its induced operator is $TS$. This proves adjoint and multiplication compatibility. [F2, F3, F16, step 1.1, step 1.3, step 2.1, step 2.3] ∎

## Boundary cases

If $X=\varnothing$, the direct integral and its only induced operator are zero, and the essential supremum of the empty norm field is zero. If every fibre is zero, all fields and induced operators are zero. For a one-point base of mass $m>0$ with fibre $\mathbb C$ and $T_{x_0}z=az$, the induced operator is the same scalar map and has norm $|a|=\|T_{x_0}\|$. A zero field on a nonzero direct integral has $s=0$ and is covered by step 3.1. Zero test vectors are assigned the zero normalized section, so no division by zero occurs. The exact-norm argument has no interval endpoint parameter. AC is used through the Hilbert-space and adjoint suppliers in [F3] and [F16]; the countable test family and countable-union localization use no further choice. The theorem has no iff assertion, so the two iff boundary axes do not apply.

## Source qualifications

Bekka--de la Harpe, §1.G.3, printed p. 60, states the pointwise field action and essential-supremum norm formula, but cites Dixmier--von Neumann for the norm equality; §1.H.1 states the general commutant theorem and refers its proof to Dixmier. Neither cited passage supplies the varying-fibre proof written here. Bruhat, Part III Chapter 10 §§1.7–1.8, printed pp. 99–101, works with a locally bounded operator field and a Lusin/topological measurability convention. It gives the measurable action and upper norm bound, and states an exact norm formula in Theorem 2; its printed argument does not supply the countable localization used here for the lower bound. Those conventions and source statements are context only; the proof above derives the result for the standard-Borel countable-fundamental-family convention of this pair.
