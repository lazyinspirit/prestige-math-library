---
id: lem-author-ef1b96c593db-shell-cell-quadrature
kind: lemma
domain: mathematics
title: Finite-cell sums converge on a compact frequency shell
status: published
origin: session
deps:
  - math:thm-dominated-convergence
  - math:def-integrable-real-and-complex-functions-and-their-integrals
  - math:thm-integral-triangle-inequality
  - math:thm-linearity-of-the-lebesgue-integral-on-l-one
  - math:def-integral-over-a-measurable-set
  - math:cor-integral-over-a-null-set-vanishes
  - math:thm-gram-schmidt-orthonormalisation
  - math:prop-orthogonal-projection-formula-and-linearity
  - math:def-real-exponential-function-and-e
  - math:thm-exponential-is-strictly-increasing
  - math:thm-complex-exponential-is-entire-with-derivative-itself
  - math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - math:thm-finite-and-countable-subadditivity-of-measures
  - math:def-borel-sigma-algebra
  - math:def-measurable-function-between-measurable-spaces
  - math:thm-borel-sigma-algebra-of-a-subspace-is-the-trace
  - math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - math:thm-lebesgue-measure-is-a-complete-measure
  - math:thm-borel-sets-are-lebesgue-measurable
  - math:def-countable-choice
  - math:def-measure-null-set-and-almost-everywhere
  - math:def-metric-bounded-diameter
  - math:def-euclidean-inner-product
  - math:thm-cauchy-schwarz-and-the-euclidean-norm
  - math:def-orthogonal-vectors-sets-and-orthonormal-bases
  - math:thm-continuous-preimages-of-borel-sets-are-borel
  - math:thm-composition-with-borel-functions-preserves-measurability
  - math:lem-algebra-of-continuous-real-maps-on-a-space
  - math:thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn
dependency_roles:
  math:thm-dominated-convergence: mathematical-premise
  math:def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  math:thm-integral-triangle-inequality: mathematical-premise
  math:thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  math:def-integral-over-a-measurable-set: mathematical-premise
  math:cor-integral-over-a-null-set-vanishes: mathematical-premise
  math:thm-gram-schmidt-orthonormalisation: mathematical-premise
  math:prop-orthogonal-projection-formula-and-linearity: mathematical-premise
  math:def-real-exponential-function-and-e: mathematical-premise
  math:thm-exponential-is-strictly-increasing: mathematical-premise
  math:thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  math:thm-finite-and-countable-subadditivity-of-measures: mathematical-premise
  math:def-borel-sigma-algebra: mathematical-premise
  math:def-measurable-function-between-measurable-spaces: mathematical-premise
  math:thm-borel-sigma-algebra-of-a-subspace-is-the-trace: mathematical-premise
  math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  math:thm-lebesgue-measure-is-a-complete-measure: mathematical-premise
  math:thm-borel-sets-are-lebesgue-measurable: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-measure-null-set-and-almost-everywhere: mathematical-premise
  math:def-metric-bounded-diameter: mathematical-premise
  math:def-euclidean-inner-product: mathematical-premise
  math:thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  math:def-orthogonal-vectors-sets-and-orthonormal-bases: mathematical-premise
  math:thm-continuous-preimages-of-borel-sets-are-borel: mathematical-premise
  math:thm-composition-with-borel-functions-preserves-measurability: mathematical-premise
  math:lem-algebra-of-continuous-real-maps-on-a-space: mathematical-premise
  math:thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
formulation_deps:
  - math:def-borel-sigma-algebra
  - math:def-measurable-function-between-measurable-spaces
  - math:thm-borel-sigma-algebra-of-a-subspace-is-the-trace
  - math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - math:thm-lebesgue-measure-is-a-complete-measure
  - math:thm-borel-sets-are-lebesgue-measurable
  - math:def-countable-choice
  - math:def-measure-null-set-and-almost-everywhere
  - math:def-metric-bounded-diameter
  - math:def-euclidean-inner-product
  - math:def-orthogonal-vectors-sets-and-orthonormal-bases
  - math:def-integrable-real-and-complex-functions-and-their-integrals
  - math:def-integral-over-a-measurable-set
  - math:def-real-exponential-function-and-e
  - math:thm-complex-exponential-is-entire-with-derivative-itself
argument_deps:
  - math:thm-dominated-convergence
  - math:def-integrable-real-and-complex-functions-and-their-integrals
  - math:thm-integral-triangle-inequality
  - math:thm-linearity-of-the-lebesgue-integral-on-l-one
  - math:def-integral-over-a-measurable-set
  - math:cor-integral-over-a-null-set-vanishes
  - math:thm-gram-schmidt-orthonormalisation
  - math:prop-orthogonal-projection-formula-and-linearity
  - math:def-real-exponential-function-and-e
  - math:thm-exponential-is-strictly-increasing
  - math:thm-complex-exponential-is-entire-with-derivative-itself
  - math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - math:thm-finite-and-countable-subadditivity-of-measures
  - math:def-borel-sigma-algebra
  - math:def-measurable-function-between-measurable-spaces
  - math:thm-borel-sigma-algebra-of-a-subspace-is-the-trace
  - math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - math:thm-lebesgue-measure-is-a-complete-measure
  - math:thm-borel-sets-are-lebesgue-measurable
  - math:def-countable-choice
  - math:def-measure-null-set-and-almost-everywhere
  - math:def-metric-bounded-diameter
  - math:def-euclidean-inner-product
  - math:thm-cauchy-schwarz-and-the-euclidean-norm
  - math:def-orthogonal-vectors-sets-and-orthonormal-bases
  - math:thm-continuous-preimages-of-borel-sets-are-borel
  - math:thm-composition-with-borel-functions-preserves-measurability
  - math:lem-algebra-of-continuous-real-maps-on-a-space
  - math:thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn
---

## Statement

Assume the Axiom of Countable Choice for the Lebesgue-measure results used below. Use the usual Euclidean metric $d(k,\ell)=|k-\ell|$ and inner product on $\mathbb R^3$. Borel measurability means measurability for the Borel sigma-algebras of domain and codomain, using subspace topologies on subsets and identifying $\mathbb C$ with $\mathbb R^2$; transverse means orthogonal to the corresponding nonzero wavevector.

Fix $0<a<b<\infty$, $c,\beta>0$, and a Borel function $\kappa:(0,\infty)\to\mathbb C$ for which $h(k)=|\kappa(c|k|)|^2$ is integrable on $A_{a,b}=\{k\in\mathbb R^3:a\leq c|k|\leq b\}$. Here $d^3k$ is three-dimensional Lebesgue measure, and integration over a Borel subset means integration after multiplication by its indicator. Define $N_\beta(\omega)=(e^{\beta\omega}-1)^{-1}$ for $\omega>0$, and fix $i,j\in\{1,2,3\}$; $\delta_{ij}$ denotes the Kronecker symbol and $\mathrm i$ the imaginary unit.

For each $n$, partition this shell, up to a null set, into finitely many Borel cells $C$ of positive volume and diameters at most $\delta_n\to0$. Choose $k_C\in C$, put $w_C=\int_C h(k)\,d^3k$, $\omega_C=c|k_C|$, and $Q_{ij}(k)=\delta_{ij}-k_i k_j/|k|^2$. For each fixed real $t$, the finite sum $\sum_C w_C Q_{ij}(k_C)[N_\beta(\omega_C)e^{\mathrm i\omega_Ct}+(N_\beta(\omega_C)+1)e^{-\mathrm i\omega_Ct}]$ converges to $\int_{A_{a,b}}h(k)Q_{ij}(k)[N_\beta(c|k|)e^{\mathrm i c|k|t}+(N_\beta(c|k|)+1)e^{-\mathrm i c|k|t}]\,d^3k$. Two real orthonormal transverse polarizations at each tag may replace $Q$ by their component sum. Here $w_C$ is a squared field-coupling weight; no factor $\gamma$ has been inserted into it.

## Facts & Assumptions

**Given:** Countable Choice and the shell, Borel function, integrability hypothesis, finite partitions and tags in the Statement, with the usual Euclidean inner product on $\mathbb R^3$.

[F1] Dominated convergence applies to measurable complex functions converging almost everywhere under a single integrable nonnegative majorant, on an arbitrary measure space. [[math:thm-dominated-convergence]]

[F2] Complex integrability means absolute integrability; its integral is defined through real and imaginary parts. [[math:def-integrable-real-and-complex-functions-and-their-integrals]]

[F3] For an integrable complex function, the modulus of its integral is at most the integral of its modulus. [[math:thm-integral-triangle-inequality]]

[F4] Integrable complex functions form a vector space and their integral is complex-linear. [[math:thm-linearity-of-the-lebesgue-integral-on-l-one]]

[F5] For nonnegative measurable $f$, integration over a measurable set $E$ means integrating $f\mathbf1_E$. For integrable complex $f$, use the same convention through its real and imaginary parts as in [F2]. [[math:def-integral-over-a-measurable-set]]

[F6] Every nonnegative measurable function has integral zero over a measurable null set. [[math:cor-integral-over-a-null-set-vanishes]]

[F7] Gram–Schmidt applied to a finite independent list in a real inner product space yields an orthonormal list with the same successive spans. [[math:thm-gram-schmidt-orthonormalisation]]

[F8] For an orthonormal basis of a finite-dimensional subspace, orthogonal projection is the sum of its basis-vector outer products, and projection onto its orthogonal complement is the identity minus that projection. [[math:prop-orthogonal-projection-formula-and-linearity]]

[F9] The real exponential is defined by its power series, so $e^0=1$; it is continuous and strictly increasing. [[math:def-real-exponential-function-and-e]] [[math:thm-exponential-is-strictly-increasing]]

[F10] The complex exponential is entire, hence continuous, and $|\exp(x+iy)|=e^x$ for real $x,y$. [[math:thm-complex-exponential-is-entire-with-derivative-itself]] [[math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]

[F11] For a measure and a sequence of measurable sets, the measure of their union is at most the sum of their measures; in particular a countable union of measurable null sets is null. [[math:thm-finite-and-countable-subadditivity-of-measures]]

[F12] The Borel sigma-algebra is generated by open sets, and a measurable map pulls back measurable sets to measurable sets. For a subspace $Y$ of $X$, $\mathcal B(Y)=\{B\cap Y:B\in\mathcal B(X)\}$. [[math:def-borel-sigma-algebra]] [[math:def-measurable-function-between-measurable-spaces]] [[math:thm-borel-sigma-algebra-of-a-subspace-is-the-trace]]

[F13] Countable Choice is assumed. Under it, the Lebesgue set function $\lambda_3$ is a complete measure on the Lebesgue sigma-algebra and every Borel subset of $\mathbb R^3$ is Lebesgue measurable. A measurable set is null when its measure is zero, and almost everywhere means outside a measurable null set. [[math:def-countable-choice]] [[math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra]] [[math:thm-lebesgue-measure-is-a-complete-measure]] [[math:thm-borel-sets-are-lebesgue-measurable]] [[math:def-measure-null-set-and-almost-everywhere]]

[F14] Use the Euclidean inner product and its norm, which is a norm with induced Euclidean metric. The diameter of a nonempty bounded set is the supremum of its pairwise distances. Orthogonality means vanishing inner product; an orthonormal list consists of pairwise orthogonal unit vectors. [[math:def-euclidean-inner-product]] [[math:thm-cauchy-schwarz-and-the-euclidean-norm]] [[math:def-metric-bounded-diameter]] [[math:def-orthogonal-vectors-sets-and-orthonormal-bases]]

[F15] Continuous maps between topological spaces have Borel preimages of Borel sets. Composing measurable maps between matching measurable spaces preserves measurability. Finite sums and products of continuous real functions are continuous, as are their quotients wherever the denominator is nonzero. [[math:thm-continuous-preimages-of-borel-sets-are-borel]] [[math:thm-composition-with-borel-functions-preserves-measurability]] [[math:lem-algebra-of-continuous-real-maps-on-a-space]]

[F16] For each finite dimension $m\geq1$, rational open boxes generate the Borel sigma-algebra of $\mathbb R^m$ with its usual product topology. [[math:thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn]]

## Proof

**Given:** Countable Choice and the shell, Borel function, integrability hypothesis, finite partitions and tags in the Statement, with the usual Euclidean inner product on $\mathbb R^3$.

[F1] Dominated convergence applies to measurable complex functions converging almost everywhere under a single integrable nonnegative majorant, on an arbitrary measure space. [[math:thm-dominated-convergence]]

[F2] Complex integrability means absolute integrability; its integral is defined through real and imaginary parts. [[math:def-integrable-real-and-complex-functions-and-their-integrals]]

[F3] For an integrable complex function, the modulus of its integral is at most the integral of its modulus. [[math:thm-integral-triangle-inequality]]

[F4] Integrable complex functions form a vector space and their integral is complex-linear. [[math:thm-linearity-of-the-lebesgue-integral-on-l-one]]

[F5] For nonnegative measurable $f$, integration over a measurable set $E$ means integrating $f\mathbf1_E$. For integrable complex $f$, use the same convention through its real and imaginary parts as in [F2]. [[math:def-integral-over-a-measurable-set]]

[F6] Every nonnegative measurable function has integral zero over a measurable null set. [[math:cor-integral-over-a-null-set-vanishes]]

[F7] Gram–Schmidt applied to a finite independent list in a real inner product space yields an orthonormal list with the same successive spans. [[math:thm-gram-schmidt-orthonormalisation]]

[F8] For an orthonormal basis of a finite-dimensional subspace, orthogonal projection is the sum of its basis-vector outer products, and projection onto its orthogonal complement is the identity minus that projection. [[math:prop-orthogonal-projection-formula-and-linearity]]

[F9] The real exponential is defined by its power series, so $e^0=1$; it is continuous and strictly increasing. [[math:def-real-exponential-function-and-e]] [[math:thm-exponential-is-strictly-increasing]]

[F10] The complex exponential is entire, hence continuous, and $|\exp(x+iy)|=e^x$ for real $x,y$. [[math:thm-complex-exponential-is-entire-with-derivative-itself]] [[math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]

[F11] For a measure and a sequence of measurable sets, the measure of their union is at most the sum of their measures; in particular a countable union of measurable null sets is null. [[math:thm-finite-and-countable-subadditivity-of-measures]]

[F12] The Borel sigma-algebra is generated by open sets, and a measurable map pulls back measurable sets to measurable sets. For a subspace $Y$ of $X$, $\mathcal B(Y)=\{B\cap Y:B\in\mathcal B(X)\}$. [[math:def-borel-sigma-algebra]] [[math:def-measurable-function-between-measurable-spaces]] [[math:thm-borel-sigma-algebra-of-a-subspace-is-the-trace]]

[F13] Countable Choice is assumed. Under it, the Lebesgue set function $\lambda_3$ is a complete measure on the Lebesgue sigma-algebra and every Borel subset of $\mathbb R^3$ is Lebesgue measurable. A measurable set is null when its measure is zero, and almost everywhere means outside a measurable null set. [[math:def-countable-choice]] [[math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra]] [[math:thm-lebesgue-measure-is-a-complete-measure]] [[math:thm-borel-sets-are-lebesgue-measurable]] [[math:def-measure-null-set-and-almost-everywhere]]

[F14] Use the Euclidean inner product and its norm, which is a norm with induced Euclidean metric. The diameter of a nonempty bounded set is the supremum of its pairwise distances. Orthogonality means vanishing inner product; an orthonormal list consists of pairwise orthogonal unit vectors. [[math:def-euclidean-inner-product]] [[math:thm-cauchy-schwarz-and-the-euclidean-norm]] [[math:def-metric-bounded-diameter]] [[math:def-orthogonal-vectors-sets-and-orthonormal-bases]]

[F15] Continuous maps between topological spaces have Borel preimages of Borel sets. Composing measurable maps between matching measurable spaces preserves measurability. Finite sums and products of continuous real functions are continuous, as are their quotients wherever the denominator is nonzero. [[math:thm-continuous-preimages-of-borel-sets-are-borel]] [[math:thm-composition-with-borel-functions-preserves-measurability]] [[math:lem-algebra-of-continuous-real-maps-on-a-space]]

[F16] For each finite dimension $m\geq1$, rational open boxes generate the Borel sigma-algebra of $\mathbb R^m$ with its usual product topology. [[math:thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn]]



**Given:** Countable Choice and the shell, Borel function, integrability hypothesis, finite partitions and tags in the Statement, with the usual Euclidean inner product on $\mathbb R^3$.

**Goal:** Prove convergence for all the stated partitions and tags, and the finite polarization replacement with the specified weight.

1.1 The norm inequality in [F14] gives $\big||k|-|\ell|\big|\leq|k-\ell|$, so the norm is continuous; each coordinate is continuous because $|k_i-\ell_i|\leq|k-\ell|$. Since $\beta\omega>0$, [F9] gives $e^{\beta\omega}>e^0=1$. Thus the inline definition makes $N_\beta$ positive and continuous on $(0,\infty)$, and strict increase of the denominator makes $N_\beta$ decreasing. In particular $N_\beta(c|k|)\leq N_\beta(a)$ on the shell. Its points have $|k|\geq a/c>0$, so $Q_{ij}$ is continuous there. Also $|Q_{ii}|\leq1$ and, when $i\ne j$, $|Q_{ij}|=|k_i k_j|/|k|^2\leq1$. By [F10] the phase factors are continuous and have modulus one. Consequently $G_t(k)=Q_{ij}(k)[N_\beta(c|k|)e^{\mathrm i c|k|t}+(N_\beta(c|k|)+1)e^{-\mathrm i c|k|t}]$ is continuous on the shell and satisfies $|G_t(k)|\leq M_\beta:=2N_\beta(a)+1$. [given, F9, F10, F14, F15, algebra]

1.2 At a fixed tag put $u=k_C/|k_C|$. Complete $u$ to an independent list of three vectors by successively taking a standard coordinate vector outside the span already obtained; this is possible because the three coordinate vectors span $\mathbb R^3$. Apply [F7] to this finite list. Its first orthonormal vector is $u$ and its remaining two vectors $\varepsilon_1,\varepsilon_2$ form an orthonormal basis of $u^\perp$. Applying [F8] first to $\operatorname{span}(u)$ and then to its complement gives $\varepsilon_1\varepsilon_1^{\mathsf T}+\varepsilon_2\varepsilon_2^{\mathsf T}=I-uu^{\mathsf T}$. Thus $\sum_{\lambda=1}^2\varepsilon_{\lambda,i}\varepsilon_{\lambda,j}=Q_{ij}(k_C)$, independently of the transverse basis chosen. [given, F7, F8, F14, construct, algebra]

2.1 The norm continuity in step 1.1 makes $A=A_{a,b}$ closed, hence Borel by [F12] and Lebesgue measurable by [F13]. Set $\mathcal A=\{E\cap A:E\in\mathcal L(\mathbb R^3)\}$ and $\mu(D)=\lambda_3(D)$ for $D\in\mathcal A$. Since $A$ is Lebesgue measurable, every such $D$ is Lebesgue measurable; the sigma-algebra axioms on $A$, disjoint countable additivity and the empty-set value are inherited from [F13]. Thus $(A,\mathcal A,\mu)$ is the restricted Lebesgue measure space. By the subspace identity in [F12] and the Borel inclusion in [F13], $\mathcal B(A)\subseteq\mathcal A$, so every Borel function on the shell is measurable on this measure space. Countable Choice is used here to apply the measure and Borel-inclusion results in [F13]. [F12, F13, step 1.1, construct]

2.2 If $f_1,\ldots,f_m$ are measurable finite real functions on a measurable space, the tuple $(f_1,\ldots,f_m)$ is Borel measurable: preimages of rational open boxes are finite intersections of measurable coordinate preimages, and the family of sets with measurable preimage is a sigma-algebra, so [F16] and [F12] apply. Continuous real and imaginary coordinate projections give the same assertion for tuples of complex functions after identification with real coordinates. By [F15], composing such tuples with the ordinary continuous finite sums, products, or squared-modulus map preserves measurability. In particular, the continuous map $k\mapsto c|k|$ from the shell into $(0,\infty)$ is Borel measurable; composition with the given Borel $\kappa$ and with $z\mapsto|z|^2$ makes $h$ Borel measurable. The continuous $G_t$ in step 1.1 is Borel measurable as well. [given, F12, F15, F16, step 1.1, algebra]

3.1 Such partitions exist: intersect the bounded Borel shell with disjoint half-open grid cubes of side $1/(n+1)$, each of diameter at most $\sqrt3/(n+1)$, retaining the finitely many positive-volume intersections and omitting the zero-volume ones. For any partitions and tags in the Statement, let $E_n$ be the omitted Borel null part and define the Borel simple function $\phi_n(k)=\sum_C\mathbf1_C(k)G_t(k_C)$ on the shell, equal to zero on $E_n$. The grid cubes are Borel since their coordinate intervals are Borel and coordinate maps are continuous. The positive-volume cells are nonempty and bounded, so their diameters in [F14] are defined. For any open subset of $\mathbb C$, its preimage under $\phi_n$ is the union of the cells whose constant values lie in that open set, together with $E_n$ if the open set contains zero; this proves the asserted Borel measurability by [F12]. By [F11], the measurable set $E=\bigcup_nE_n$ has measure at most $\sum_n0=0$. For every $k\notin E$, its cell tag satisfies $|k_C-k|\leq\delta_n\to0$, so continuity in step 1.1 gives $\phi_n(k)\to G_t(k)$. Everywhere $|\phi_n|\leq M_\beta$. No tags on omitted null cells are needed. [given, F11, F12, F14, F15, step 1.1, step 2.1, construct]

4.1 By step 2.2 and the measurability of $\phi_n$ in step 3.1, the functions $h\phi_n$ and $hG_t$ are Borel measurable and $|h\phi_n|\leq M_\beta h$, where the nonnegative majorant is integrable by the hypothesis and [F4]. Step 3.1 gives almost-everywhere convergence to $hG_t$. On the shell with its restricted Lebesgue measure from step 2.1, [F1] therefore gives $\int_{A_{a,b}}h\phi_n\,d^3k\to\int_{A_{a,b}}hG_t\,d^3k$, with all these complex integrals well-defined. Each cell weight is finite and nonnegative: $h\mathbf1_C$ is measurable and bounded in modulus by $h$, so the same integrability conclusion of [F1], applied to the constant sequence $h\mathbf1_C$, applies. [given, F1, F2, F4, F5, step 2.1, step 2.2, step 3.1]

5.1 By [F5] and finite linearity [F4], $\int_{A_{a,b}}h\phi_n\,d^3k=\sum_CG_t(k_C)\int_C h\,d^3k=\sum_Cw_CG_t(k_C)$. The omitted cells have no integral contribution: [F6] gives zero integral over $E_n$ for the nonnegative majorant $M_\beta h$, for $h$, and for $|hG_t|$; then [F3] gives $\int_{E_n}hG_t\,d^3k=0$. Combining this identity with step 4.1 proves the stated convergence. [F2, F3, F4, F5, F6, step 4.1, algebra]

6.1 Since $w_C\geq0$, multiplying each polarization's coefficient by $\sqrt{w_C}$ makes its quadratic contribution $w_C\varepsilon_{\lambda,i}\varepsilon_{\lambda,j}$. Step 1.2 sums these to $w_CQ_{ij}(k_C)$, exactly the weight used in step 5.1. Only finitely many basis choices are required for each partition; no measurable transverse frame over the continuum is assumed. The weight is the specified integral of $|\kappa(c|k|)|^2$, with no factor $\gamma$ inserted. [given, step 4.1, step 5.1, step 1.2, algebra] ∎
