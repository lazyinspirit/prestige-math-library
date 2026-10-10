---
id: lem-em-sphere-zonal-moments
kind: lemma
title: "Zonal and quadratic sphere moments for the polar surface measure on $S^2$"
status: draft
origin: pipeline
domain: mathematics
deps: [def-polar-surface-measure-on-the-unit-sphere, thm-polar-coordinates-formula-for-lebesgue-measure, lem-euclidean-chart-measure-agrees-with-polar-surface-measure, def-surface-integral-on-a-compact-c-one-hypersurface, def-admissible-regular-parametrized-surface-patch, def-surface-area-and-scalar-surface-integral-of-a-patch, thm-surface-area-density-is-cross-product-norm, lem-parameter-boundary-exceptions-do-not-affect-surface-integrals, thm-sine-and-cosine-derivatives, thm-quarter-turn-values-and-shift-formulas, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-signs-monotonicity-and-ranges, thm-sine-and-cosine-addition-formulas, thm-sine-cosine-zero-sets-and-fundamental-period, thm-ftc-first-part, thm-ftc-second-part, thm-chain-rule-for-total-derivatives, def-cross-product-in-r3, def-euclidean-inner-product, lem-cross-product-is-bilinear-alternating-and-orthogonal, thm-cross-product-norm-is-the-two-vector-gram-determinant, thm-ck-euclidean-maps-closed-under-algebra-and-composition, def-ck-euclidean-maps-and-diffeomorphisms, thm-linearity-of-the-lebesgue-integral-on-l-one, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-integrable-real-and-complex-functions-and-their-integrals, thm-jordan-fubini-by-sections, lem-first-moment-of-the-unit-sphere-vanishes, cor-volume-of-the-unit-n-ball, thm-real-gamma-functional-equation, cor-real-gamma-one-half-is-root-pi, def-countable-choice, thm-intermediate-value, cor-c-one-change-of-variables-for-l-one-functions, thm-euclidean-inverse-function-theorem, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-lebesgue-measure-of-a-box-of-every-kind, lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals, thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets, thm-extreme-value-metric]
dependency_roles:
  thm-intermediate-value: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals: mathematical-premise
  thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  def-admissible-regular-parametrized-surface-patch: mathematical-premise
  def-surface-area-and-scalar-surface-integral-of-a-patch: mathematical-premise
  thm-surface-area-density-is-cross-product-norm: mathematical-premise
  lem-parameter-boundary-exceptions-do-not-affect-surface-integrals: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  thm-jordan-fubini-by-sections: mathematical-premise
  lem-first-moment-of-the-unit-sphere-vanishes: mathematical-premise
  cor-volume-of-the-unit-n-ball: mathematical-premise
  thm-real-gamma-functional-equation: mathematical-premise
  cor-real-gamma-one-half-is-root-pi: mathematical-premise
  def-countable-choice: mathematical-premise
dependency_level: 0
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§1.10.2–§1.11, printed pp. 15–17: the local spherical chart and its surface density (Example 1.42), open-set change of variables (Theorem 1.44), and polar integration (Proposition 1.45). The global seam/pole argument, reflection substitutions, zonal reduction and second-moment values are proved locally below."
    - title: "Gerald B. Folland, Real Analysis, 2nd ed. (Wiley, 1999), Theorem 2.49 and its surrounding section"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
      locator: "Theorem 2.49 and its surrounding section: polar-coordinate decomposition of Lebesgue measure and the induced surface measure on spheres (the measure $\\sigma$ of [[def-polar-surface-measure-on-the-unit-sphere]]); used for the finite-measure and integration interfaces, not for the chart computation itself."
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.1, printed p. 168, the computation (7.9): the $\\sigma_2$-integral computation on the sphere with the zonal reduction used here."
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$), as carried by the surface-measure interface below ([[def-countable-choice]]). Let $\sigma$ be the polar surface measure on the unit sphere $S^2\subseteq\mathbb R^3$ ([[def-polar-surface-measure-on-the-unit-sphere]]), let $e_3:=(0,0,1)$ and write $n_3=n\cdot e_3$ for $n\in S^2$. Then:

(a) [Zonal identity] for every continuous $f:[-1,1]\to\mathbb R$, $$\int_{S^2}f(n_3)\,d\sigma(n)=2\pi\int_{-1}^{1}f(u)\,du.$$

(b) [Linear weighted moment] for every continuous $f$ and every $a\in\mathbb R^3$, $$\int_{S^2}(n\cdot a)\,f(n_3)\,d\sigma(n)=2\pi\,a_3\int_{-1}^{1}u\,f(u)\,du.$$

(c) [Quadratic weighted moment] for every continuous $f$ and every $a\in\mathbb R^3$, $$\int_{S^2}(n\cdot a)^2f(n_3)\,d\sigma(n)=2\pi\,a_3^{2}\int_{-1}^{1}u^{2}f(u)\,du+\pi\,(a_1^{2}+a_2^{2})\int_{-1}^{1}(1-u^{2})f(u)\,du.$$

(d) [Moments] $\sigma(S^2)=4\pi$, $\int_{S^2}n\,d\sigma=0$, $\int_{S^2}n_in_j\,d\sigma=(4\pi/3)\delta_{ij}$, and for every $a\in\mathbb R^3$ $$\int_{S^2}(n\cdot a)^2d\sigma=\frac{4\pi}{3}|a|^2,\qquad \int_{S^2}|n\times a|^2d\sigma=\frac{8\pi}{3}|a|^2,$$ where $\delta_{ij}$ is the Kronecker symbol and $\times$ the cross product of [[def-cross-product-in-r3]].

(e) [Scope] (a)-(d) are identities for the polar surface measure of the unit sphere with only the stated continuity of $f$; they assert no physical field, flux or radiation statement. The measure is finite, so all displayed integrals are absolutely convergent; $f$ need not be nonnegative. For the uses on this page $f$ is a rational function with denominator bounded below by $1-b>0$, hence continuous on $[-1,1]$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ ([[def-countable-choice]]); the polar surface measure $\sigma$ on $S^2$; a continuous $f:[-1,1]\to\mathbb R$ and $a\in\mathbb R^3$; $e_3=(0,0,1)$ and $n_3=n\cdot e_3$; the chart $X$, the parameter region $D$ and the reflection maps $\eta_1,\eta_2,\eta_3$ introduced in steps 1.1 and 2.1.

[F1] For Borel $E\subseteq S^2$, $\sigma(E)=3\lambda_3\{r\omega:\omega\in E,\ 0<r\le1\}$; under $\mathrm{AC}_\omega$, $\sigma$ is a finite Borel measure on $S^2$. ([[def-polar-surface-measure-on-the-unit-sphere]], [[thm-polar-coordinates-formula-for-lebesgue-measure]])

[F2] The chart surface measure on $S^2$ equals $\sigma$; orthogonal transformations of $\mathbb R^3$ preserve $\sigma$; and $\sigma(S^2)=3|B_1|$. ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]])

[F4] A regular parametrized surface patch is a $C^1$ map $X$ from a compact Jordan parameter region $D$ (the closure of its nonempty connected interior) with $X_u\times X_v\ne0$ on $D^\circ$ and no interior parameter point sharing its image with a distinct point of $D$; seam identifications and rank failures may occur on the boundary. For continuous $q$ on the patch image, $\int_Sq\,dS=\int_D(q\circ X)J_X$ with $J_X=|X_u\times X_v|$, and boundary values may be changed on the content-zero parameter boundary without changing the integral. ([[def-admissible-regular-parametrized-surface-patch]], [[def-surface-area-and-scalar-surface-integral-of-a-patch]], [[thm-surface-area-density-is-cross-product-norm]], [[lem-parameter-boundary-exceptions-do-not-affect-surface-integrals]])

[F5] Sine and cosine are differentiable with $\sin'=\cos$, $\cos'=-\sin$, $\sin0=0$, $\cos0=1$; $\sin(\pi/2)=1$, $\cos(\pi/2)=0$, $\sin\pi=0$, $\cos\pi=-1$; $\sin(-x)=-\sin x$, $\cos(-x)=\cos x$, $\sin^2x+\cos^2x=1$; sine is strictly increasing on $[-\pi/2,\pi/2]$ and strictly decreasing on $[\pi/2,3\pi/2]$, cosine is strictly decreasing on $[0,\pi]$ and strictly increasing on $[\pi,2\pi]$, both have range $[-1,1]$; the addition formulas $\sin(x+y)=\sin x\cos y+\cos x\sin y$, $\cos(x+y)=\cos x\cos y-\sin x\sin y$ hold; and $\sin x=0$ if and only if $x=m\pi$ for some integer $m$. ([[thm-intermediate-value]], [[thm-sine-and-cosine-derivatives]], [[thm-quarter-turn-values-and-shift-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-sine-and-cosine-addition-formulas]], [[thm-sine-cosine-zero-sets-and-fundamental-period]])

[F6] Let $a<b$. If $f:[a,b]\to\mathbb R$ is continuous and $P(u)=\int_a^u f(v)\,dv$ for $u\in[a,b]$, then $P'=f$ there, with one-sided derivatives at $a,b$; if $G:[a,b]\to\mathbb R$ is differentiable there with integrable derivative (using the same endpoint convention), then $\int_a^bG'=G(b)-G(a)$; and the chain rule holds for composites of totally differentiable maps. ([[thm-ftc-first-part]], [[thm-ftc-second-part]], [[thm-chain-rule-for-total-derivatives]])

[F7] In $\mathbb R^3$ with the Euclidean inner product and norm, the cross product is bilinear and alternating, $\langle u\times v,w\rangle=\det[u\ v\ w]$, and $\|u\times v\|_2^2=\|u\|_2^2\|v\|_2^2-\langle u,v\rangle^2$. ([[def-cross-product-in-r3]], [[def-euclidean-inner-product]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[thm-cross-product-norm-is-the-two-vector-gram-determinant]])

[F8] Finite componentwise sums and products of $C^k$ Euclidean maps are $C^k$, and composites of composable $C^k$ maps are $C^k$; $C^k$ means continuous partial derivatives up to order $k$. ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[def-ck-euclidean-maps-and-diffeomorphisms]])

[F9] On the finite measure space $(S^2,\sigma)$ a bounded Borel function $g$ with $|g|\le M$ is integrable, since $\int|g|\,d\sigma\le M\sigma(S^2)<\infty$; the integral is linear in the integrand. ([[def-integrable-real-and-complex-functions-and-their-integrals]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]])

[F10] For a bounded Jordan set $E\subseteq\mathbb R^2$ and a Riemann integrable $g$ whose sections outside a content-zero exceptional set are Jordan measurable with integrable section functions, the iterated integral over either coordinate block equals $\int_Eg$. ([[thm-jordan-fubini-by-sections]])

[F11] $\sigma$ is invariant under the reflection $\omega\mapsto-\omega$, and the substitution identity $\int g\,d\sigma=\int g\circ\eta\,d\sigma$ for a $\sigma$-preserving bijection $\eta$ holds for indicators by definition, extends to simple functions by linearity and to bounded Borel functions by the approximation used in that proof; the first moment satisfies $\int_{S^2}\omega\,d\sigma=0$. ([[lem-first-moment-of-the-unit-sphere-vanishes]])

[F12] $V_3(1)=\pi^{3/2}/\Gamma(5/2)$; $\Gamma(s+1)=s\Gamma(s)$ for $s>0$ and $\Gamma(1/2)=\sqrt\pi$, so $\Gamma(5/2)=3\sqrt\pi/4$ and $V_3(1)=4\pi/3$. ([[cor-volume-of-the-unit-n-ball]], [[thm-real-gamma-functional-equation]], [[cor-real-gamma-one-half-is-root-pi]])

[F13] Under $\mathrm{AC}_\omega$, the $L^1$ change-of-variables formula holds for $C^1$ diffeomorphisms of open Euclidean sets; a $C^1$ map with invertible derivative has a $C^1$ local inverse; product Lebesgue measure agrees with Euclidean Lebesgue measure on Borel sets, and Fubini holds for integrable functions. Degenerate bounded boxes have Lebesgue measure zero, continuous functions on compact sets are bounded, and bounded Borel Riemann-integrable functions on boxes have the same Riemann and Lebesgue integrals. ([[cor-c-one-change-of-variables-for-l-one-functions]], [[thm-euclidean-inverse-function-theorem]], [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[thm-extreme-value-metric]], [[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]])

## Proof

**Proof technique:** direct; the sphere integral is reduced to the standard rectangular chart, evaluated by Fubini and the fundamental theorem, and the weighted moments are obtained by reflection substitution.

1.1 Define $X(\theta,\varphi):=(\sin\theta\cos\varphi,\ \sin\theta\sin\varphi,\ \cos\theta)$ and $D:=[0,\pi]\times[0,2\pi]$. Then $D$ is a compact Jordan parameter region, being a closed bounded rectangle and the closure of its nonempty connected interior $D^\circ=(0,\pi)\times(0,2\pi)$, and $X$ is $C^1$ on the open neighbourhood $\mathbb R^2$ of $D$ because its components are finite sums and products of the $C^1$ functions $\sin$ and $\cos$ [F5, F8]. Its partial derivatives are $X_\theta=(\cos\theta\cos\varphi,\cos\theta\sin\varphi,-\sin\theta)$ and $X_\varphi=(-\sin\theta\sin\varphi,\sin\theta\cos\varphi,0)$, and the coordinate formula for the cross product gives $$X_\theta\times X_\varphi=(\sin^{2}\theta\cos\varphi,\ \sin^{2}\theta\sin\varphi,\ \sin\theta\cos\theta)=\sin\theta\,X(\theta,\varphi),$$ since $\cos^{2}\varphi+\sin^{2}\varphi=1$; also $|X(\theta,\varphi)|^{2}=\sin^{2}\theta+\cos^{2}\theta=1$ [F5, F7]. Hence $X_\theta\times X_\varphi=0$ exactly when $\sin\theta=0$; on the interior $\theta\in(0,\pi)$ one has $\sin\theta>0$ by strict monotonicity and the values $\sin0=\sin\pi=0$ [F5], so the parameter cross product is nonzero on $D^\circ$. [F4, F5, F7, F8, algebra]

2.1 The chart covers the sphere and is injective in its interior. If $n\in S^2$, the intermediate value theorem between the endpoint values $\cos0=1$, $\cos\pi=-1$, and strict monotonicity of cosine on $[0,\pi]$ gives a unique $\theta\in[0,\pi]$ with $\cos\theta=n_3$, so $\sin\theta=\bigl(n_1^{2}+n_2^{2}\bigr)^{1/2}$ because $\sin\theta\ge0$ on $[0,\pi]$ and $\sin^{2}\theta=1-\cos^{2}\theta$ [F5]. If $\sin\theta=0$ then $n=\pm e_3=X(0,0)$ or $X(\pi,0)$; otherwise put $c:=n_1/\sin\theta$ and $s:=n_2/\sin\theta$, so $c^{2}+s^{2}=1$, and choose $\varphi\in[0,\pi]$ with $\cos\varphi=c$ when $s\ge0$ and $\varphi\in[\pi,2\pi]$ with $\cos\varphi=c$ when $s<0$, possible because cosine has range $[-1,1]$ and is strictly monotone on each interval; then $\sin\varphi$ has the sign of $s$ there and $\sin^{2}\varphi=1-c^{2}=s^{2}$, so $\sin\varphi=s$ and $n=X(\theta,\varphi)$. Thus $X[D]=S^2$. Conversely, if $X(\theta,\varphi)=X(\theta',\varphi')$ with $(\theta,\varphi)\in D^\circ$ and $(\theta',\varphi')\in D$, then $\cos\theta=\cos\theta'$ with both angles in $[0,\pi]$, so $\theta=\theta'$ by strict monotonicity; then $\sin\theta>0$ and the first two coordinates give $\cos\varphi=\cos\varphi'$ and $\sin\varphi=\sin\varphi'$, hence $\cos(\varphi-\varphi')=\cos\varphi\cos\varphi'+\sin\varphi\sin\varphi'=\cos^{2}\varphi+\sin^{2}\varphi=1$ [F5]. Writing $x:=\varphi-\varphi'\in(-2\pi,2\pi)$ and using $\cos x=1-2\sin^{2}(x/2)$, we get $\sin(x/2)=0$, so $x/2=m\pi$ for some integer $m$ and $x=2m\pi$; since $|x|<2\pi$ this forces $x=0$, that is $\varphi=\varphi'$ [F5]. Therefore no interior parameter point shares its image with a distinct point of $D$, and $(D,X)$ is a regular parametrized surface patch with image $S^2$. [step 1.1, F4, F5, algebra]

3.1 Reduction to the chart, including its seam and poles. Let $q:S^2\to\mathbb R$ be continuous. Put $H:=\{y\in\mathbb R^3:y_2=0,\ y_1\ge0\}$ and $Y(r,\theta,\varphi):=rX(\theta,\varphi)$ on $U:=(0,1)\times D^\circ$. By step 2.1, $Y$ is a bijection from $U$ onto the open set $V:=B_1(0)\setminus H$. Its derivative has columns $X,rX_\theta,rX_\varphi$, so $\det DY=r^2X\cdot(X_\theta\times X_\varphi)=r^2\sin\theta>0$ by step 1.1. The local inverse theorem [F13] makes its bijective inverse $C^1$ locally at every point, hence $Y$ is a $C^1$ diffeomorphism. The omitted set $H\cap B_1$ is contained in the degenerate box $[-1,1]\times\{0\}\times[-1,1]$ and is Lebesgue null by [F13]. The bounded Borel function $q(y/|y|)$ on $B_1\setminus\{0\}$, assigned zero at $0$, is integrable by [F13]. Applying the polar formula of [[thm-polar-coordinates-formula-for-lebesgue-measure]] to its positive and negative parts gives $\int_{B_1}q(y/|y|)dy=\tfrac13\int_{S^2}q\,d\sigma$. Change of variables by $Y$ and Fubini [F13] give the same integral as $\int_0^1r^2dr\int_{D^\circ}q(X(\theta,\varphi))\sin\theta\,d\theta d\varphi$. The parameter boundary is a finite union of degenerate boxes and therefore null; the integrand extends continuously to $D$, and its Lebesgue integral equals its Riemann integral by [F13]. Cancelling $\int_0^1r^2dr=1/3$ therefore proves $$\int_{S^2}q\,d\sigma=\int_0^{2\pi}\int_0^\pi q(X(\theta,\varphi))\sin\theta\,d\theta d\varphi.$$ This supplies the measure identification despite the seam and pole degeneracies; it does not apply an injective regular atlas chart across those degeneracies. In particular, for $q=f\circ n_3$, $n_3\circ X=\cos\theta$ gives $I:=\int_{S^2}f(n_3)d\sigma=\int_0^{2\pi}\int_0^\pi f(\cos\theta)\sin\theta\,d\theta d\varphi$. [step 1.1, step 2.1, F1, F5, F9, F10, F13, algebra]

4.1 Conclusion of (a). The function $g(\theta,\varphi):=f(\cos\theta)\sin\theta$ is continuous on the rectangle $D$ [F5, F8], hence Riemann integrable, and its sections in $\varphi$ are continuous; [F10] therefore gives $I=\int_0^{\pi}\bigl(\int_0^{2\pi}f(\cos\theta)\sin\theta\,d\varphi\bigr)d\theta=2\pi\int_0^{\pi}f(\cos\theta)\sin\theta\,d\theta$. Let $P(u):=\int_{-1}^{u}f(v)\,dv$ on $[-1,1]$; by [F6] $P'=f$, and the chain rule [F6] with $\cos'=-\sin$ [F5] gives $(P\circ\cos)'(\theta)=-f(\cos\theta)\sin\theta$ on $[0,\pi]$. Since this derivative is continuous, the second fundamental theorem [F6] applies and $$\int_0^{\pi}f(\cos\theta)\sin\theta\,d\theta=-\bigl[P(\cos\theta)\bigr]_0^{\pi}=P(1)-P(-1)=\int_{-1}^{1}f(u)\,du,$$ because $\cos0=1$ and $\cos\pi=-1$ [F5]. Combining with step 3.1 gives $\int_{S^2}f(n_3)\,d\sigma=2\pi\int_{-1}^{1}f(u)\,du$, which is (a); all integrands here are continuous on the compact sets in question, so the displayed integrals are finite. [step 3.1, F5, F6, F10, algebra]

5.1 Conclusion of (b). Let $\eta_1(n_1,n_2,n_3):=(-n_1,n_2,n_3)$ and $\eta_2(n_1,n_2,n_3):=(n_1,-n_2,n_3)$. Each is an orthogonal bijection of $\mathbb R^3$ with $\eta_i[S^2]=S^2$, so each preserves $\sigma$ [F2]; by the substitution identity of [F11], applied to the bounded Borel function $g_i(n):=n_if(n_3)$ and the fact that $g_i\circ\eta_i=-g_i$, we get $\int_{S^2}n_if(n_3)\,d\sigma=-\int_{S^2}n_if(n_3)\,d\sigma$, whence $\int_{S^2}n_if(n_3)\,d\sigma=0$ for $i=1,2$ (finiteness of both integrals is [F9]). For the third component, (a) applied to the continuous function $u\mapsto uf(u)$ gives $\int_{S^2}n_3f(n_3)\,d\sigma=2\pi\int_{-1}^{1}uf(u)\,du$. Since $n\cdot a=a_1n_1+a_2n_2+a_3n_3$, linearity of the $\sigma$-integral [F9] gives $$\int_{S^2}(n\cdot a)f(n_3)\,d\sigma=2\pi\,a_3\int_{-1}^{1}uf(u)\,du,$$ which is (b). [step 4.1, F2, F5, F9, F11, algebra]

5.2 Conclusion of (c). Expanding the square, $(n\cdot a)^{2}=\sum_{i,j=1}^{3}a_ia_jn_in_j$, and by linearity [F9] the integral is the finite sum $\sum_{i,j}a_ia_j\int_{S^2}n_in_jf(n_3)\,d\sigma$. For $i\ne j$ the function $n_in_jf(n_3)$ changes sign under $\eta_i$ (or $\eta_j$), so the substitution identity of [F11] gives $\int_{S^2}n_in_jf(n_3)\,d\sigma=0$. For the diagonal terms, the swap $\eta_3(n_1,n_2,n_3):=(n_2,n_1,n_3)$ is orthogonal and preserves $\sigma$ [F2], so the substitution identity gives $\int_{S^2}n_1^{2}f(n_3)\,d\sigma=\int_{S^2}n_2^{2}f(n_3)\,d\sigma$; with $n_1^{2}+n_2^{2}=1-n_3^{2}$ [F5] and linearity, $$2\int_{S^2}n_1^{2}f(n_3)\,d\sigma=\int_{S^2}\bigl(1-n_3^{2}\bigr)f(n_3)\,d\sigma=2\pi\int_{-1}^{1}(1-u^{2})f(u)\,du$$ by (a) applied to the continuous function $u\mapsto(1-u^{2})f(u)$; and (a) applied to $u\mapsto u^{2}f(u)$ gives $\int_{S^2}n_3^{2}f(n_3)\,d\sigma=2\pi\int_{-1}^{1}u^{2}f(u)\,du$. Substituting into the expansion yields $$\int_{S^2}(n\cdot a)^{2}f(n_3)\,d\sigma=2\pi\,a_3^{2}\int_{-1}^{1}u^{2}f(u)\,du+\pi\,(a_1^{2}+a_2^{2})\int_{-1}^{1}(1-u^{2})f(u)\,du,$$ which is (c). [step 4.1, F2, F5, F9, F11, algebra]

6.1 Conclusion of (d) and scope (e). Taking $f=1$ in (a) gives $\sigma(S^2)=2\pi\int_{-1}^{1}du=4\pi$; independently [F2] gives $\sigma(S^2)=3|B_1|=3V_3(1)$, and [F12] evaluates $V_3(1)=\pi^{3/2}/\Gamma(5/2)$ with $\Gamma(5/2)=(3/2)(1/2)\Gamma(1/2)=3\sqrt\pi/4$, so $V_3(1)=4\pi/3$ and the two routes agree. Taking $f=1$ in (b) gives $\int_{S^2}(n\cdot a)\,d\sigma=0$ for every $a$, hence $\int_{S^2}n\,d\sigma=0$, and taking $f=1$ in (c) gives $\int_{S^2}(n\cdot a)^{2}d\sigma=2\pi a_3^{2}\cdot\tfrac{2}{3}+\pi(a_1^{2}+a_2^{2})\cdot\tfrac{4}{3}=\tfrac{4\pi}{3}|a|^{2}$; choosing $a=e_i$ and $a=e_i+e_j$ for $i\ne j$ reads off $\int_{S^2}n_i^{2}\,d\sigma=4\pi/3$ and $\int_{S^2}n_in_j\,d\sigma=0$ for $i\ne j$, that is $\int_{S^2}n_in_j\,d\sigma=(4\pi/3)\delta_{ij}$. Finally the norm identity of [F7] gives $|n\times a|^{2}=|n|^{2}|a|^{2}-(n\cdot a)^{2}=|a|^{2}-(n\cdot a)^{2}$ for $n\in S^2$, so by linearity [F9] and the value just computed $\int_{S^2}|n\times a|^{2}\,d\sigma=4\pi|a|^{2}-\tfrac{4\pi}{3}|a|^{2}=\tfrac{8\pi}{3}|a|^{2}$. This proves all identities of (d); every integrand is continuous on the compact $S^2$ and $\sigma$ is a finite Borel measure by [F1], so the integrals are absolutely convergent, $f$ need not be nonnegative, and no physical interpretation is asserted, which is (e). [step 4.1, step 5.1, step 5.2, F1, F2, F5, F7, F9, F11, F12, algebra] ∎
