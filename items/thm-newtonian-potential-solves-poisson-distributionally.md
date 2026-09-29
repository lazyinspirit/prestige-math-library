---
id: thm-newtonian-potential-solves-poisson-distributionally
kind: theorem
title: Newtonian potentials solve the distributional Poisson equation
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - cor-integral-over-a-null-set-vanishes
  - cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure
  - def-borel-sigma-algebra
  - def-calligraphic-l-p-on-a-measure-space
  - def-countable-choice
  - def-distributional-derivative
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-integral-over-a-measurable-set
  - def-laplace-fundamental-solution-with-positive-minus-laplacian-sign
  - def-l-infinity-on-a-measure-space
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-metric-ball
  - def-metric-topology
  - def-measure-null-set-and-almost-everywhere
  - def-measure-preserving-transformation-and-system
  - def-newtonian-potential
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-regular-distribution-from-a-locally-integrable-function
  - def-test-function-space-d-of-an-open-set
  - lem-borel-representatives-make-the-convolution-integrand-borel-measurable
  - lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric
  - lem-laplace-fundamental-kernel-is-locally-integrable
  - lem-laplace-fundamental-solution-is-harmonic-off-its-pole
  - lem-metrics-on-rn
  - lem-newtonian-potential-is-well-defined-for-compactly-supported-bounded-data
  - prop-countable-subsets-of-rn-are-lebesgue-null
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-completion-measurable-functions-have-base-measurable-representatives
  - thm-compact-subset-is-closed-and-bounded
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-differentiation-under-the-integral-sign
  - thm-dominated-convergence
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-holder-inequality-for-integrals
  - thm-integral-triangle-inequality
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-locally-integrable-functions-embed-in-distributions
  - thm-minus-laplacian-of-the-fundamental-solution-is-dirac
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
sources:
  references:
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: "https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf"
      locator: "§2.11 very weak Poisson identity and Fubini, printed pp.70–71"
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.7 Theorem 2.25, printed pp.34–36"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: "https://web.archive.org/web/20250601000000id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§5.3 equations (5.19)–(5.21) and Lemma 5.17, printed pp.117–119"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume Countable Choice and $n\ge2$. Let $f\in L^1(\mathbb R^n)$ be compactly
supported, meaning that it has a representative which vanishes outside a
compact set. Then $Nf$ is finite almost everywhere, belongs to
$L^1_{\mathrm{loc}}(\mathbb R^n)$, and depends only on the $L^1$ equivalence
class of $f$. Its regular distribution satisfies
$$-\Delta T_{Nf}=T_f\quad\text{in }\mathcal D'(\mathbb R^n).$$
The result includes $C_c$ data and compactly supported $L^p$ data for every
$1\le p\le\infty$. If $f=0$ almost everywhere outside a closed compact set
$K$, then $Nf$ is smooth and harmonic on $\mathbb R^n\setminus K$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n\ge2$, a compact set $K\subseteq\mathbb R^n$,
and an $L^1$ equivalence class with a representative vanishing outside $K$.
Write $\lambda_n$ for Lebesgue measure and $\beta_n$ for its restriction to
$\mathcal B(\mathbb R^n)$.

[A1] Countable Choice, written $\mathrm{AC}_\omega$, means every sequence of
nonempty sets has a choice function. ([[def-countable-choice]])

[F1] The kernel has the normalized power formula for $n\ge3$ and logarithmic
formula for $n=2$, with its pole value chosen finitely. Its class is locally
integrable. ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]], [[lem-laplace-fundamental-kernel-is-locally-integrable]])

[F2] Lebesgue measure is the completion of $\beta_n$; under
$\mathrm{AC}_\omega$, a completed-measurable function has a Borel representative
equal to it almost everywhere. ([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]], [[def-borel-sigma-algebra]], [[thm-completion-measurable-functions-have-base-measurable-representatives]])

[F3] For Borel functions $a,b$, $(x,y)\mapsto a(x-y)b(y)$ is Borel on
$\mathbb R^{2n}$; $\mathcal B(\mathbb R^{2n})=\mathcal B(\mathbb R^n)\otimes
\mathcal B(\mathbb R^n)$. ([[lem-borel-representatives-make-the-convolution-integrand-borel-measurable]], [[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]])

[F4] Lebesgue measure is sigma-finite and finite on bounded sets; a compact
set is closed and bounded. ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]], [[thm-compact-subset-is-closed-and-bounded]], [[def-metric-ball]], [[lem-metrics-on-rn]])

[F5] Tonelli gives measurable section integrals for nonnegative product-measurable
functions; Fubini exchanges the iterated integrals of an $L^1$ product function.
([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]])

[F6] If $T$ preserves a measure, composition by $T$ preserves integrals; the
Lebesgue translation is measure preserving. ([[def-measure-preserving-transformation-and-system]], [[thm-integrals-are-invariant-under-measure-preserving-maps]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]])

[F7] A test function is smooth with compact support; locally integrable
functions define regular distributions, and Countable Choice gives the
$L^1_{\rm loc}$-to-distribution embedding. Distributional derivatives act on
tests by the signed test derivative. ([[def-test-function-space-d-of-an-open-set]], [[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]], [[def-distributional-derivative]])

[F8] The integral is monotone and obeys the integral triangle inequality; a
compactly supported $L^p$ function is in $L^1$ by Hölder on its finite-measure
support, including $p=\infty$. ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-integral-triangle-inequality]], [[thm-holder-inequality-for-integrals]], [[def-calligraphic-l-p-on-a-measure-space]], [[def-l-infinity-on-a-measure-space]], [[def-l-p-space-as-a-quotient-by-null-functions]])

[F9] Nonnegative integrals split over a measurable partition and vanish on a
null set, singletons in $\mathbb R^n$ are null, and the integral is linear on
$L^1$. ([[def-measure-null-set-and-almost-everywhere]], [[def-integral-over-a-measurable-set]], [[cor-additivity-of-the-nonnegative-lebesgue-integral]], [[cor-integral-over-a-null-set-vanishes]], [[def-integrable-real-and-complex-functions-and-their-integrals]], [[prop-countable-subsets-of-rn-are-lebesgue-null]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]])

[F10] The kernel is smooth and harmonic away from its pole. Differentiation may
be passed under an integral with a common integrable derivative bound, and
dominated convergence gives continuity of the resulting derivative integrals.
([[lem-laplace-fundamental-solution-is-harmonic-off-its-pole]], [[thm-differentiation-under-the-integral-sign]], [[thm-dominated-convergence]])

[F11] In Euclidean space, compactness is equivalent to being closed and bounded,
and a continuous real-valued function on a nonempty closed bounded set attains
its extrema. The Euclidean norm is continuous. ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], [[def-metric-topology]])

[F12] The point-source identity is $-\Delta_xT_{\Phi(\cdot-y)}=\delta_y$ for
every $y$. ([[thm-minus-laplacian-of-the-fundamental-solution-is-dirac]])

[F13] The Newton potential is the integral convolution at every point where
the absolute integral is finite. ([[def-newtonian-potential]])

[F14] Bounded compactly supported data have an everywhere-finite potential,
independent of their finite-valued representative. ([[lem-newtonian-potential-is-well-defined-for-compactly-supported-bounded-data]])

[F15] For any measure $\mu$ and measurable sets $E_k$, $\mu(\bigcup_k E_k)\le\sum_k\mu(E_k)$. In particular a countable union of measurable $\lambda_n$-null sets is null, since the right side is zero. ([[thm-finite-and-countable-subadditivity-of-measures]])

[F16] Arithmetic operations on measurable functions preserve measurability;
continuous maps have Borel preimages. ([[thm-arithmetic-and-lattice-operations-preserve-measurability]], [[thm-continuous-preimages-of-borel-sets-are-borel]])

## Proof

**Proof technique:** direct.

1.1 Choose a finite-valued representative $f_0$ vanishing outside $K$. By [F2] and [A1], apply the completed-measurable representative theorem separately to the real and imaginary parts of $f_0$, reset any nonfinite exceptional values to zero, and combine them using [F16] to obtain a finite Borel representative equal to $f_0$ almost everywhere. Reset it to zero off $K$ and call it $\widetilde f$. Set $\Phi(0)=0$; its displayed radial formula is continuous away from the singleton pole, so it is Borel. By [F3], $H(x,y)=\Phi(x-y)\widetilde f(y)$ is Borel, hence product-measurable for $\beta_n\otimes\beta_n$. The open balls $B(0,m)$ are Borel and exhaust $\mathbb R^n$; they have finite $\beta_n$-measure by [F4], so $\beta_n$ is sigma-finite. [A1, F1, F2, F3, F4, F16, construct]

1.2 For compactly supported $L^p$ data with $1<p<\infty$, Hölder [F8] on the finite-measure set $K$ gives $\int_K|f|\le\|f\|_p\|\mathbf1_K\|_q=\|f\|_p\lambda_n(K)^{1/q}<\infty,$ where $1/p+1/q=1$. The case $p=1$ is immediate, and the endpoint $p=\infty$ uses the endpoint clause of [F8]; moreover the bounded-data result [F14] gives everywhere absolute convergence there. A continuous compactly supported $g\in C_c$ is bounded on its compact support by [F11], whose measure is finite by [F4], so it too belongs to $L^1$. This verifies the stated $C_c$ and full $1\le p\le\infty$ inclusions. [F4, F8, F11, F14, cases]

2.1 The compact set $K$ is closed and bounded, hence Borel, and has finite $\lambda_n$-measure by [F4]. If $K=\varnothing$ or $\lambda_n(K)=0$, then $\widetilde f$ vanishes off a null set, so [F9] gives $Nf(x)=0$ with absolute convergence for every $x$; the $L^1$ class is zero. Assume henceforth $K\ne\varnothing$ and choose $R>0$ with $K\subset B(0,R)$. [F4, F9, F13, cases, step 1.1]

2.2 If $g$ is any other finite-valued measurable representative of the same $L^1$ class, then for each fixed $x$ the functions $y\mapsto\Phi(x-y)g(y)$ and $y\mapsto\Phi(x-y)\widetilde f(y)$ agree outside a null set; their absolute values are measurable by [F16]. For nonnegative measurable functions agreeing off a null set, split each integral over that set and its complement; [F9] shows the two extended absolute integrals agree. Thus absolute finiteness is equivalent for the two representatives. When finite, their difference is integrable with integral zero by [F9], so linearity gives equal potential values. The pole assignment also changes the integrand only on the null singleton $\{x\}$. Therefore $Nf$ depends only on the $L^1$ class, with equality at every point where the integrals are defined. [F1, F9, F13, F16, algebra, step 1.1]

3.1 Fix an integer $m\ge1$ and $y\in K$. For $x\in B(0,m)$, the Euclidean triangle inequality gives $x-y\in B(0,m+R)$. Translation by $-y$ preserves Lebesgue integrals by [F6], so $\int_{B(0,m)}|\Phi(x-y)|\,dx=\int_{B(0,m)-y}|\Phi(z)|\,dz\le\int_{B(0,m+R)}|\Phi(z)|\,dz=:C_{m,R}<\infty,$ where finiteness follows from [F1] and the last inequality from [F8]. [F1, F4, F6, F8, algebra, step 2.1]

3.2 Let $x_0\notin K$. If $K=\varnothing$, then $Nf=0$ and the claim holds. Otherwise, since $K$ is closed, choose $r>0$ such that $B(x_0,2r)\cap K=\varnothing$. For $x\in\overline B(x_0,r)$ and $y\in K$, the triangle inequality and boundedness of $K$ give $r\le|x-y|\le M$ for some finite $M$. Choose $y_0\in K$. Since $B(x_0,2r)\cap K=\varnothing$, $|x_0-y_0|\ge2r>r$ and the upper bound gives $|x_0-y_0|\le M$, so $x_0-y_0\in A:=\{z:r\le|z|\le M\}$ and $A$ is nonempty. The annulus $A$ is closed because the norm is continuous [F11] and $[r,M]$ is closed; it is bounded by $M$, hence compact. Every continuous derivative $D^\alpha\Phi$ is therefore bounded on $A$ [F11]. Thus for each multi-index $\alpha$ there is $C_\alpha<\infty$ with $|D^\alpha\Phi(x-y)\widetilde f(y)|\le C_\alpha|\widetilde f(y)|\mathbf1_K(y).$ The majorant is integrable since $\widetilde f=f$ almost everywhere and $\int_K|\widetilde f|=\|f\|_1<\infty$ by [F2, F9]. Applying differentiation under the integral sign coordinate by coordinate on a small box about $x_0$, and dominated convergence for continuity of each derivative, proves $Nf\in C^\infty$ near $x_0$. Since $\Delta_x\Phi(x-y)=0$ for $x\ne y$ by [F10], differentiating twice yields $\Delta Nf(x)=0$ there. Therefore $Nf$ is smooth and harmonic on $\mathbb R^n\setminus K$. [F2, F4, F9, F10, F11, F13, step 1.1, step 2.1, algebra]

4.1 Apply Tonelli [F5] to the nonnegative Borel function $|H(x,y)|\mathbf1_{B(0,m)}(x)\mathbf1_K(y)$. Using step 3.1 gives $\int_{B(0,m)}\int_K|\Phi(x-y)\widetilde f(y)|\,dy\,dx\le C_{m,R}\int_K|\widetilde f(y)|\,dy=C_{m,R}\|f\|_{L^1}<\infty,$ where the last equality uses [F2, F9] because $\widetilde f=f$ almost everywhere and $\beta_n$ completes to $\lambda_n$. Thus the complex function $H$ is in $L^1(B(0,m)\times K)$ for every $m$. [step 3.1, F2, F4, F5, F9, F16, algebra, step 1.1]

5.1 Fubini [F5] on each such product shows that for almost every $x\in B(0,m)$ the section $y\mapsto H(x,y)\mathbf1_K(y)$ is absolutely integrable, and its integral is an $L^1(B(0,m))$ function with integral of its absolute value at most the finite bound in step 4.1, by the integral triangle inequality [F8]. These section integrals agree with $Nf(x)$ wherever absolutely finite by [F13]. The balls $B(0,m)$ exhaust $\mathbb R^n$, so, writing $E_m$ for the measurable exceptional set in $B(0,m)$, [F15] gives $\lambda_n(\bigcup_{m\ge1}E_m)\le\sum_{m\ge1}\lambda_n(E_m)=0$. Thus $Nf$ is finite almost everywhere on all of $\mathbb R^n$; assign it value zero on this null set. Each compact set lies in some $B(0,m)$ by [F4], proving $Nf\in L^1_{\rm loc}(\mathbb R^n)$. [step 4.1, F2, F4, F5, F8, F13, F15]

6.1 Let $\varphi\in\mathcal D(\mathbb R^n)$ and choose $m$ with $\operatorname{supp}\varphi\subset B(0,m)$. The function $H(x,y)=\Phi(x-y)\widetilde f(y)$ is Borel by [F3]. The pullback of the Borel function $-\Delta\varphi$ by the first-coordinate projection is Borel: the preimage of a Borel set $E$ is $E\times\mathbb R^n$, which belongs to the product sigma-algebra and hence to the Euclidean Borel sigma-algebra by [F3]. The test function is smooth, so $\Delta\varphi$ is continuous; [F16] gives its Borel measurability. Thus $G(x,y)=H(x,y)(-\Delta\varphi(x))$ is Borel by [F16]. Since $\Delta\varphi$ is bounded and compactly supported, step 4.1 shows $G$ is integrable on the product. Fubini therefore gives $\int_{\mathbb R^n}Nf(x)(-\Delta\varphi(x))\,dx=\int_K\widetilde f(y)\left(\int_{\mathbb R^n}\Phi(x-y)(-\Delta\varphi(x))\,dx\right)dy.$ The inner integral is $\varphi(y)$ by the translated point-source identity [F12]. Hence the right side is $\int_K\widetilde f(y)\varphi(y)\,dy$. [F2, F3, F5, F7, F9, F11, F12, F13, F16, step 4.1, step 1.1, step 5.1]

7.1 By [F7], step 6.1 is exactly $\langle-\Delta T_{Nf},\varphi\rangle=\langle T_f,\varphi\rangle$ for every test $\varphi$. The locally integrable embedding makes both sides distributions, so they are equal in $\mathcal D'$. [F7, step 5.1, step 6.1]

8.1 The logarithmic kernel at $n=2$ and power kernel at $n\ge3$ are both covered by [F1], [F2] and [F12]; the distinct $n=1$ case is excluded by the statement. The zero source and empty or null support were handled in step 2.1; the Hölder endpoint cases $p=1,\infty$ are explicit in step 1.2. Countable Choice is used to obtain a Borel representative, and is inherited by the published kernel identity and distribution embedding [F2, F7, F12]. No full Axiom of Choice or later result is used; the statement is not an iff. [A1, F1, F2, F7, F12, step 2.1, step 1.2, cases] ∎
## Source notes

Schmidt §2.11, Remark (3), printed pp.70–71, proves the very weak pairing
identity for compactly supported $L^\infty$ data by Fubini and the point-source
calculation. Schmidt uses the opposite kernel sign, so $F_{Schmidt}=-\Phi$;
the formula becomes $-\Delta(Nf)=f$ in the convention here. The argument above
extends the source class to compactly supported $L^1$ by the local uniform
kernel bound, Tonelli and Fubini.

Hunter §2.7, Theorem 2.25 and proof, printed pp.34–36 (PDF pp.39–41), proves
the pointwise equation for smooth compactly supported data. It does not state
the present $L^1$ theorem; its smooth-data proof is contextual only.

Teschl §5.3, equations (5.19)–(5.21) and Lemma 5.17, archived author
manuscript printed pp.117–118, gives the convolution formula and proves
harmonicity of integrals of harmonic kernels by Fubini and the mean-value
property. The present off-support smoothness is derived from the local uniform
derivative bound instead.
