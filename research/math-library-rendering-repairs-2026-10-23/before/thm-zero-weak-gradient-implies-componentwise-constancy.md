---
id: thm-zero-weak-gradient-implies-componentwise-constancy
kind: theorem
title: Zero weak gradient gives componentwise constants
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-sobolev-space-wkp-and-its-norm
  - def-weak-derivative-of-a-locally-integrable-function
  - def-complex-lp-and-euclidean-test-function-conventions
  - lem-weak-derivative-is-independent-of-lp-representatives
  - lem-weak-derivative-linearity-locality-and-commutation
  - thm-complex-holder-minkowski-and-the-quotient-norm
  - lem-test-function-cutoffs-and-euclidean-localization
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - def-mollifier-family-generated-by-a-unit-mass-smooth-bump
  - prop-mollifier-families-are-l-one-approximate-identities
  - thm-l-one-approximate-identities-converge-in-l-p
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - thm-zero-derivative-on-connected-open-euclidean-set-iff-constant
  - thm-integral-triangle-inequality
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - thm-heine-borel-rn
  - def-connected-space
  - def-connected-component-and-quasicomponent
  - cor-components-of-open-subsets-of-rn-are-polygonally-connected
  - thm-rational-points-and-boxes-in-rn
  - cor-archimedean-reciprocal
  - thm-finite-and-countable-subadditivity-of-measures
  - def-metric-ball
  - def-norm-and-normed-space
  - lem-euclidean-polygonal-paths-are-continuous
  - thm-path-connected-implies-connected
  - thm-metric-open-set-algebra
  - thm-cauchy-schwarz-and-the-euclidean-norm
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (Aalto University, 2026)
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 2 §2.6, Remark 2.38(4), printed p. 59; the claim is assigned as an exercise via the ACL characterization.
    - title: MATH 712 Real Analysis Solutions to Take-home Midterm, Spring 2016, Part B
      url: https://bpb-us-w2.wpmucdn.com/sites.uwm.edu/dist/a/108/files/2016/04/712thm_sols_spr16-1g0k71x.pdf
      locator: Exercises 1–2, PDF pp. 3–4, and Exercise 7, PDF p. 8; the exercise is attributed there to Gilbarg–Trudinger, Chapter 7.
---

## Statement

Assume the Axiom of Choice. Let $Ω\subseteq\mathbb R^n$ be open, $n\ge1$,
$1\le p\le\infty$, and $\mathbb K\in\{\mathbb R,\mathbb C\}$. If
$u\in W^{1,p}_{\mathrm{loc}}(\Omega;\mathbb K)$ and
$$D_i u=0\quad\text{almost everywhere on }\Omega\qquad(1\le i\le n),$$
then for every connected component $C$ of $\Omega$ there is a constant
$c_C\in\mathbb K$ such that $u=c_C$ almost everywhere on $C$. The empty
domain has no components, so its conclusion is vacuous.

The proof assumes full AC as stated, but uses it only through Countable Choice
for the Sobolev representative, Lebesgue, and mollification interfaces cited
below. No full-AC selection is made in the ball propagation argument.

## Sources

- Juha Kinnunen, *Sobolev Spaces*, Chapter 2 §2.6, Remark 2.38(4), printed
  p. 59. The result is stated as an exercise using the ACL characterization;
  no proof is supplied at that locator.
- *MATH 712 Real Analysis Solutions to Take-home Midterm*, Spring 2016,
  Part B, Exercises 1–2 (PDF pp. 3–4) and Exercise 7 (PDF p. 8). Exercise 1
  gives the weak-derivative/mollification identity, and Exercise 7 proves the
  one-dimensional zero-derivative case before noting the higher-dimensional
  adaptation. Its local mollification passage is useful, but its final
  countable-union sentence does not spell out why the constants on the local
  sets agree. The proof below supplies that compatibility through overlap and
  connectedness, then combines exceptional sets over an explicit countable
  rational-ball cover.

## Facts & Assumptions

**Given:** AC; an open $\Omega\subseteq\mathbb R^n$ with $n\ge1$; an exponent $1\le p\le\infty$; a scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$; and $u\in W^{1,p}_{\mathrm{loc}}(\Omega;\mathbb K)$ with every weak first partial derivative zero almost everywhere.

[F1] AC immediately implies Countable Choice, which is the choice principle required by the Sobolev, Lebesgue, and mollifier interfaces ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F2] Local Sobolev membership means restriction to every open set with compact closure in $\Omega$ lies in $W^{1,p}$; that definition supplies the $L^p$ classes and their weak-derivative identities ([[def-sobolev-space-wkp-and-its-norm]], [[def-weak-derivative-of-a-locally-integrable-function]]). Closed bounded Euclidean sets are compact, so the closure of each bounded ball used below is compact ([[thm-heine-borel-rn]]).

[F3] A weak derivative restricts to an open subdomain, and its identity is independent of the chosen locally integrable representatives under Countable Choice ([[lem-weak-derivative-linearity-locality-and-commutation]], [[lem-weak-derivative-is-independent-of-lp-representatives]]).

[F4] Complex $L^p$ classes have measurable real and imaginary components; the integrability of both components is equivalent to integrability of the complex modulus ([[def-complex-lp-and-euclidean-test-function-conventions]]).

[F5] On a finite-measure ball, Hölder with its indicator gives local $L^1$ integrability for every $1\le p\le\infty$, including the conjugate endpoint pairs ([[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[F6] For compact $K\subseteq\Omega$ with $\Omega$ open, a smooth cutoff $\chi\in C_c^\infty(\Omega)$ exists with $0\le\chi\le1$ and $\chi=1$ near $K$ ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F7] Every Euclidean ball has positive finite Lebesgue measure ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

[F8] A unit-mass smooth bump defines the dilated family $\rho_\varepsilon(x)=\varepsilon^{-n}\rho(x/\varepsilon)$ ([[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]]).

[F9] Under Countable Choice, the dilates of a unit-mass smooth bump form an $L^1$ approximate identity ([[prop-mollifier-families-are-l-one-approximate-identities]]).

[F10] Convolution of an $L^1(\mathbb R^n)$ function with an $L^1$ approximate identity converges in $L^1$ ([[thm-l-one-approximate-identities-converge-in-l-p]]).

[F11] Convolution with a real mollifier is smooth and its derivatives pass under the integral sign ([[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]).

[F12] A smooth map with continuous first partial derivatives is totally differentiable, and a totally differentiable map with zero derivative on a connected open Euclidean set is constant ([[thm-continuous-partial-derivatives-imply-total-differentiability]], [[thm-zero-derivative-on-connected-open-euclidean-set-iff-constant]]).

[F13] For an integrable function, the modulus of its integral is at most the integral of its modulus; the integral is linear, and a nonnegative integral is zero exactly when its integrand vanishes almost everywhere ([[thm-integral-triangle-inequality]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[F14] In Euclidean space, each metric ball is open and convex: for $x,y\in B(q,r)$ and $0\le t\le1$, norm homogeneity and the triangle inequality give $\lVert(1-t)(x-q)+t(y-q)\rVert_2\le(1-t)\lVert x-q\rVert_2+t\lVert y-q\rVert_2<r$. The affine segment is continuous, so the ball is path connected and therefore connected ([[def-metric-ball]], [[thm-metric-open-set-algebra]], [[thm-cauchy-schwarz-and-the-euclidean-norm]], [[def-norm-and-normed-space]], [[lem-euclidean-polygonal-paths-are-continuous]], [[thm-path-connected-implies-connected]]).

[F15] Each connected component of an open Euclidean set is open ([[cor-components-of-open-subsets-of-rn-are-polygonally-connected]]).

[F16] A component is connected; a connected space has no nonempty proper clopen subset ([[def-connected-component-and-quasicomponent]], [[def-connected-space]]).

[F17] The set $\mathbb Q^n$ is countable and dense in $\mathbb R^n$, and for every $\delta>0$ there is $m\ge1$ with $3/m<\delta$ ([[thm-rational-points-and-boxes-in-rn]], [[cor-archimedean-reciprocal]]).

[F18] A finite union of measurable null sets is null by finite subadditivity ([[thm-finite-and-countable-subadditivity-of-measures]]).

[F19] A countable union of measurable null sets is null by countable subadditivity ([[thm-finite-and-countable-subadditivity-of-measures]]).

## Proof

**Proof technique:** mollify on nested balls, identify compatible local constants, and combine a countable exceptional family.

1.1 Apply the cutoff lemma to $K=\{0\}$ inside $B(0,1)$ to obtain $\chi\in C_c^\infty(B(0,1))$ with $0\le\chi\le1$ and $\chi=1$ on a neighborhood of $0$. The ball-measure bound gives $0<a:=\int\chi<\infty$; set $\rho=\chi/a$. Then $\rho$ is real, has mass one, and is supported in $B(0,1)$. Under AC, Countable Choice is available for the cited approximation and integration interfaces. [F1, F6, F7, algebra]

1.2 Fix $q\in\mathbb R^n$ and $r>0$ with $\overline{B(q,2r)}\subset\Omega$, and write $B=B(q,r)$ and $B_0=B(q,2r)$. The closure of $B_0$ is compact by Heine–Borel, so [F2] places $u|_{B_0}$ in $W^{1,p}(B_0;\mathbb K)$. The ball $B_0$ has finite measure by [F7]; Hölder in [F5] shows that each real component of $u$ has an $L^1(B_0)$ representative, including $p=1$ and $p=\infty$. Extend that representative by zero to $F\in L^1(\mathbb R^n;\mathbb R)$. The weak derivative of each component on $B_0$ is zero: restrict the global identity using [F3], and replace its a.e.-zero value by the zero representative. [F2, F3, F4, F5, F7]

2.1 For $0<\varepsilon<r$ define $F_\varepsilon=F*\rho_\varepsilon$. By [F11] this convolution is smooth. If $x\in B$, then the test $y\mapsto\rho_\varepsilon(x-y)$ is supported in $B_0$. Differentiating under the integral and using $\partial_{x_i}\rho_\varepsilon(x-y)=-\partial_{y_i}\rho_\varepsilon(x-y)$, the weak identity on $B_0$ gives $$\partial_iF_\varepsilon(x) =-\int_{B_0}F(y)\,\partial_{y_i}\rho_\varepsilon(x-y)\,dy =\int_{B_0}D_iF(y)\,\rho_\varepsilon(x-y)\,dy=0.$$ This applies separately to the real and imaginary components. [F3, F4, F8, F11, step 1.2]

3.1 The first partials of each smooth real component of $F_\varepsilon|_B$ are continuous and zero. By [F12] it is totally differentiable on $B$ with zero derivative, and therefore constant there because $B$ is connected and open. Hence each real mollified component is a constant on $B$. [F12, F14, step 2.1]

4.1 For either real component $f$ of $u$, its zero extension $F$ lies in $L^1(\mathbb R^n)$. By [F9]–[F10], $\|F*\rho_\varepsilon-F\|_{L^1(\mathbb R^n)}\to0$ as $\varepsilon\downarrow0$. On $B$, the convolution uses only values in $B_0$, so this is convergence to $f$ in $L^1(B)$. Take $\varepsilon_m=r/(m+1)$; write the constant value on $B$ as $a_m$ and set $a=\lambda(B)^{-1}\int_B f$. Since $0<\lambda(B)<\infty$, [F7, F13] and linearity give $$\lambda(B)|a_m-a|= \left|\int_B(F*\rho_{\varepsilon_m}-f)\right| \le\int_B|F*\rho_{\varepsilon_m}-f|.$$ Therefore $$\int_B|f-a|\le2\int_B|F*\rho_{\varepsilon_m}-f|\longrightarrow0,$$ so [F10] gives $f=a$ almost everywhere on $B$. Applying this to both components proves that $u$ has one constant value almost everywhere on every such inner ball $B$. [F4, F7, F9, F10, F13, step 3.1]

5.1 For each $x\in\Omega$, choose an inner ball $B(q,r)$ containing $x$ with $\overline{B(q,2r)}\subset\Omega$; openness supplies one. Let $\kappa(x)$ be the a.e.-constant value of $u$ on that ball, which is unique because the ball has positive measure. If two admissible inner balls contain $x$, their intersection is a nonempty open set and contains a positive-measure ball. On that intersection both constants equal $u$ almost everywhere. A finite union of null sets is null, so the positive-measure intersection forces the constants to agree. Thus $\kappa$ is well defined, and it is constant on each admissible inner ball. In particular $\kappa$ is locally constant on $\Omega$. [F7, F18, step 4.1]

6.1 Let $C$ be a connected component of $\Omega$. By [F15], $C$ is open and connected. For a fixed $x_0\in C$, the set $\{x\in C:\kappa(x)=\kappa(x_0)\}$ and its complement are both open in $C$ because $\kappa$ is locally constant. The first set is nonempty, so connectedness gives $\kappa(x)=\kappa(x_0)$ for every $x\in C$; call this value $c_C$. [F15, F16, step 5.1]

7.1 Consider the countable family of all balls $B(q,1/m)$ with $q\in\mathbb Q^n$, $m\ge1$, and $\overline{B(q,2/m)}\subset C$. It covers $C$: around any $x\in C$ take $B(x,\delta)\subset C$. By [F17], choose $m\ge1$ with $3/m<\delta$ and then $q\in\mathbb Q^n$ with $|q-x|<1/m$. Thus $x\in B(q,1/m)$ and $\overline{B(q,2/m)}\subset B(x,\delta)\subset C$. By steps 4.1 and 6.1, $u=c_C$ almost everywhere on each such inner ball. The exceptional sets are measurable and null; by [F19] their countable union is null. Hence $u=c_C$ almost everywhere on all of $C$. If $\Omega=\varnothing$, there is no component to consider. [F4, F15, F17, F19, step 4.1, step 6.1] \square
