---
id: lem-em-retarded-wave-kernel
kind: lemma
title: "The retarded wave kernel is a distribution supported on the cone, solves the point-wave equation, and convolves to the retarded solution"
status: published
origin: pipeline
domain: mathematics
deps: [thm-em-wave-cauchy-kirchhoff, def-countable-choice, def-distribution, def-test-function-space-d-of-an-open-set, def-test-function-topology, def-fixed-support-test-function-frechet-space, def-distributional-derivative, thm-distributional-differentiation-is-continuous-and-commutes, def-dirac-delta-and-its-derivatives, def-wave-equation-cauchy-data-and-wave-speed, def-laplacian-of-a-c2-function, def-polar-surface-measure-on-the-unit-sphere, thm-polar-coordinates-formula-for-lebesgue-measure, lem-euclidean-chart-measure-agrees-with-polar-surface-measure, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, cor-one-dimensional-change-of-variables-with-absolute-derivative, thm-dominated-convergence, thm-integral-triangle-inequality, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, lem-euclidean-balls-have-positive-finite-lebesgue-measure, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-extreme-value-metric, thm-heine-borel-rn, cor-euclidean-closed-balls-and-spheres-are-compact, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, def-l-one-approximate-identity-on-rn, cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions, def-ck-euclidean-maps-and-diffeomorphisms, thm-linearity-of-the-lebesgue-integral-on-l-one, def-support-of-a-distribution, def-regular-distribution-from-a-locally-integrable-function, def-weak-and-strong-topologies-on-distributions, prop-mollifier-families-are-l-one-approximate-identities, lem-test-function-cutoffs-and-euclidean-localization, lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness, cor-c-one-change-of-variables-for-l-one-functions]
dependency_roles:
  thm-em-wave-cauchy-kirchhoff: mathematical-premise
  def-countable-choice: mathematical-premise
  def-distribution: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-test-function-topology: mathematical-premise
  def-fixed-support-test-function-frechet-space: mathematical-premise
  def-distributional-derivative: mathematical-premise
  thm-distributional-differentiation-is-continuous-and-commutes: mathematical-premise
  def-dirac-delta-and-its-derivatives: mathematical-premise
  def-wave-equation-cauchy-data-and-wave-speed: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  cor-one-dimensional-change-of-variables-with-absolute-derivative: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  thm-nonnegative-integral-zero-iff-zero-almost-everywhere: mathematical-premise
  lem-euclidean-balls-have-positive-finite-lebesgue-measure: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-lebesgue-outer-measure-and-measurability-are-translation-invariant: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  cor-euclidean-closed-balls-and-spheres-are-compact: mathematical-premise
  def-mollifier-family-generated-by-a-unit-mass-smooth-bump: mathematical-premise
  def-l-one-approximate-identity-on-rn: mathematical-premise
  cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-support-of-a-distribution: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  def-weak-and-strong-topologies-on-distributions: mathematical-premise
  prop-mollifier-families-are-l-one-approximate-identities: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing)"
      url: "https://www.damtp.cam.ac.uk/user/tong/em/electro.pdf"
      locator: "section 6.1.2, printed pp. 140-142: the retarded Green function, its support on the cone and the retarded time; section 6.4.1, printed pp. 157-159: the point-source delta substitution"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "section 7.1, printed pp. 167-172, Corollary 7.3 with (7.11)-(7.12) and the retarded potential (7.13) following it: the Duhamel solution whose substitution produces the retarded convolution"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto lecture-note textbook, 2026 printing, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "section 9.1.1-9.1.2, printed pp. 281-284, (9.1.4) and (9.1.13): the c-normalized fundamental solution 1/(4 pi c^2 t) and the retarded potential; chapter 11, printed pp. 330-339: distributions, differentiation and convolution"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$), used through the sphere and polar integrations below ([[def-countable-choice]], [[def-polar-surface-measure-on-the-unit-sphere]], [[thm-polar-coordinates-formula-for-lebesgue-measure]]). Let $c>0$, write $Q:=\mathbb R^3\times\mathbb R$, $\mathcal D:=\mathcal D(Q)$ for the test-function space of [[def-test-function-space-d-of-an-open-set]], and $C:=\{(y,t)\in Q:t=|y|/c\}$ for the retarded cone. Define the functional $K$ on test functions by

$$\langle K,\psi\rangle:=\frac{1}{4\pi}\int_{\mathbb R^3}\frac{\psi(y,|y|/c)}{|y|}\,dy\qquad(\psi\in\mathcal D).$$

Then: (a) the integral converges absolutely for every $\psi\in\mathcal D$, the functional $K$ is a distribution on $Q$ ([[def-distribution]]), $(K,\psi)=0$ for every $\psi$ with $\operatorname{supp}\psi\cap C=\varnothing$, and for every $(y_0,t_0)\in C$ and every neighbourhood $U$ of $(y_0,t_0)$ there is $\psi\in\mathcal D$ with $\operatorname{supp}\psi\subseteq U$ and $\langle K,\psi\rangle\ne0$; consequently $\operatorname{supp}K=C$. (b) For every $h\in C_c^\infty(Q)$ the function

$$(K*h)(x,t):=\int_{\mathbb R^3}\frac{h(y,\,t-|x-y|/c)}{4\pi\,|x-y|}\,dy$$

is well defined (the integral converges absolutely), of class $C^\infty$ on $Q$, and for every $\psi\in\mathcal D$

$$\langle K*h,\psi\rangle=\langle h,\,K\circledast\psi\rangle,\qquad (K\circledast\psi)(y,s):=\langle K,\psi(y+\cdot,s+\cdot)\rangle=\frac{1}{4\pi}\int\frac{\psi(y+z,s+|z|/c)}{|z|}\,dz;$$

moreover $W(K*h)=h$ on $Q$ in the classical pointwise sense, where $W=c^{-2}\partial_t^2-\Delta$ is the wave expression of [[def-wave-equation-cauchy-data-and-wave-speed]] and [[def-laplacian-of-a-c2-function]]. (c) Read $W=c^{-2}\partial_t^2-\Delta$ as the distributional operator built from [[def-distributional-derivative]]; then $WK=\delta_{(0,0)}$ in the sense of [[def-dirac-delta-and-its-derivatives]], that is, $(WK)(\psi)=\psi(0,0)$ for every $\psi\in\mathcal D$. This identifies $K$ as the retarded fundamental solution of $W$; no smoothness of $K$ itself on the cone is asserted, and the advanced fundamental solution is not treated.

## Facts & Assumptions

**Given:** The speed $c>0$, the open set $Q=\mathbb R^3\times\mathbb R$, its test space $\mathcal D$, the retarded cone $C$, the functional $K$ of the Statement, and, for parts (b) and (c), a function $h\in C_c^\infty(Q)$.

[F1] $\mathcal D(Q)=C_c^\infty(Q)$ is the test-function space with the LF topology, $\mathcal D_K$ denotes the tests supported in a compact $K$ with its Fréchet seminorms $p_m$, and a distribution is a continuous complex-linear functional on $\mathcal D(Q)$ ([[def-test-function-space-d-of-an-open-set]], [[def-test-function-topology]], [[def-fixed-support-test-function-frechet-space]], [[def-distribution]]).

[F2] The support of a distribution is $\operatorname{supp}u=Q\setminus Z$, where $Z$ is the largest open set on which $u$ vanishes, and $u$ vanishes on an open $V$ exactly when $u(\varphi)=0$ for every test with support in $V$ ([[def-support-of-a-distribution]]).

[F3] Under $\mathrm{AC}_\omega$ the polar measure $\sigma$ on $S^{n-1}$ is a finite Borel measure with $\int_{\mathbb R^n}f\,d\lambda_n=\int_0^\infty\int_{S^{n-1}}f(r\omega)r^{n-1}\,d\sigma(\omega)\,dr$ for nonnegative Borel $f$; in particular $\int_{B_R}|z|^{-1}dz=\sigma(S^2)R^2/2$ and $\sigma(S^2)=4\pi$ ([[def-polar-surface-measure-on-the-unit-sphere]], [[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F4] The chart surface measure on $S^2$ equals the polar measure $\sigma$ ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]).

[F5] Let $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$ be sigma-finite and $f\in L^1(\mu\times\nu)$; then the iterated integrals in either order exist and equal the product integral ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F6] If $\varphi$ is $C^1$ and injective with $\varphi'\ne0$ on a neighborhood of $[a,b]$ and $f$ is continuous on an interval containing $\varphi([a,b])$, then $\int_{\min}^{\max}f=\int_a^bf(\varphi)|\varphi'|$ ([[cor-one-dimensional-change-of-variables-with-absolute-derivative]]).

[F7] Under $\mathrm{AC}_\omega$, for a $C^1$ diffeomorphism $T:U\to V$ of open subsets of $\mathbb R^m$ and nonnegative Borel $g:V\to[0,\infty]$, $\int_Vg=\int_Ug(T)|\det DT|$ ([[lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness]]).

[F8] Under $\mathrm{AC}_\omega$, for a $C^1$ diffeomorphism $T:U\to V$ of open subsets of $\mathbb R^m$ and $f\in L^1(V)$, $\int_Vf=\int_Uf(T)|\det DT|$; translations of $\mathbb R^n$ preserve Lebesgue outer measure, measurability and measure ([[cor-c-one-change-of-variables-for-l-one-functions]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[F9] Dominated convergence: if $f_n\to f$ pointwise a.e. and $|f_n|\le g$ a.e. with $\int g<\infty$, then $\int|f_n-f|\to0$ ([[thm-dominated-convergence]]).

[F10] $|\int f|\le\int|f|$ for $f\in L^1$ ([[thm-integral-triangle-inequality]]).

[F11] For measurable $f\ge0$, $\int f=0$ if and only if $f=0$ almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[F12] Euclidean balls have positive finite Lebesgue measure, under $\mathrm{AC}_\omega$ ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

[F13] Nonnegative integrals are monotone and scale, and $0\cdot\infty$ is not formed ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F14] Compact subsets of $\mathbb R^n$ are closed and bounded, closed balls and spheres are compact, and closed boxes are compact ([[thm-heine-borel-rn]], [[cor-euclidean-closed-balls-and-spheres-are-compact]]).

[F15] A continuous real function on a nonempty compact metric space is bounded and attains its maximum and minimum ([[thm-extreme-value-metric]]).

[F16] A unit-mass smooth bump $\eta\in C_c^\infty(\mathbb R^4)$ generates the mollifier family $\eta_\varepsilon(u)=\varepsilon^{-4}\eta(u/\varepsilon)$ ([[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]]).

[F17] Under $\mathrm{AC}_\omega$ a mollifier family generated by a unit-mass smooth bump is an $L^1$ approximate identity ([[def-l-one-approximate-identity-on-rn]], [[prop-mollifier-families-are-l-one-approximate-identities]]).

[F18] If $(K_\varepsilon)$ is an $L^1$ approximate identity and $f$ is bounded and continuous, then $f*K_\varepsilon\to f$ uniformly on compacta ([[cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions]]).

[F19] Let $c>0$, $t_0<T$, $a,b\in C^\infty(\mathbb R^3)$ and let $h$ be of class $C^\infty$ on $\mathbb R^3\times[t_0,T]$ in the extension sense, and put $W=c^{-2}\partial_t^2-\Delta$. The function $u(x,t)=\partial_sH_a(x,t-t_0)+H_b(x,t-t_0)+c^2\int_{t_0}^tH_{h(\cdot,v)}(x,t-v)\,dv$, with $H_\varphi(x,s)=s\,M_{cs}\varphi(x)$ and $M_r\varphi(x)=\frac{1}{4\pi}\int_{S^2}\varphi(x+rn)\,d\Omega(n)$, is of class $C^\infty$ on $\mathbb R^3\times[t_0,T]$ in the extension sense, satisfies $Wu=h$, $u(\cdot,t_0)=a$, $\partial_tu(\cdot,t_0)=b$, and is the unique such $C^2$ function; the theorem assumes $\mathrm{AC}_\omega$ ([[thm-em-wave-cauchy-kirchhoff]]).

[F20] A locally integrable function $f$ defines the regular functional $u_f(\varphi)=\int f\varphi$, well defined with $|u_f(\varphi)|\le\sup_K|\varphi|\int_K|f|$ for $K=\operatorname{supp}\varphi$ ([[def-regular-distribution-from-a-locally-integrable-function]]).

[F21] Distributional derivatives are $\langle\partial^\alpha u,\varphi\rangle=(-1)^{|\alpha|}\langle u,\partial^\alpha\varphi\rangle$, are continuous linear on $\mathcal D'$ for the weak and strong topologies, and satisfy $\partial^\alpha u_f=u_{\partial^\alpha f}$ for $f\in C^k$, $|\alpha|\le k$ (the last clause requires $\mathrm{AC}_\omega$) ([[def-distributional-derivative]], [[thm-distributional-differentiation-is-continuous-and-commutes]]).

[F22] The weak distribution topology is generated by the seminorms $u\mapsto|u(\varphi)|$, so weak convergence means $u_i(\varphi)\to u(\varphi)$ for every test ([[def-weak-and-strong-topologies-on-distributions]]).

[F23] $\delta_a(\varphi)=\varphi(a)$ is the Dirac distribution, continuous on each fixed-support stage ([[def-dirac-delta-and-its-derivatives]]).

[F24] For compact $K\subseteq\Omega$ open there is $\chi\in C_c^\infty(\Omega)$ with $0\le\chi\le1$ and $\chi=1$ on a neighbourhood of $K$, in ZF ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F25] The Lebesgue integral is complex-linear on $L^1$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[A1] The Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 If $\psi=0$, the defining integral is zero; otherwise fix $\psi\in\mathcal D$ with nonempty support. The support of $\psi$ is compact in $Q$, hence closed and bounded; choose $R>0$ with $\operatorname{supp}\psi\subseteq B_R(0)\times[-R,R]$ and put $M:=\sup|\psi|<\infty$, the supremum taken over the nonempty compact support and finite by the extreme value theorem. Since $|\psi(y,|y|/c)|\le M$ for every $y$ and $|y|^{-1}$ is nonnegative, the triangle inequality and the order rules for nonnegative integrals bound $\bigl|\langle K,\psi\rangle\bigr|\le\frac{M}{4\pi}\int_{B_R}\frac{dy}{|y|}$. The polar formula applied to the nonnegative Borel function $y\mapsto|y|^{-1}\mathbf 1_{B_R}(y)$ gives $\int_{B_R}|y|^{-1}dy=\int_0^Rr^{-1}\sigma(S^2)r^2\,dr=\sigma(S^2)R^2/2<\infty$, using $\sigma(S^2)=4\pi$. Hence the defining integral converges absolutely, and the bound is a fixed-support seminorm, so $K$ is continuous for the LF topology and $K\in\mathcal D'$. [given, F1, F3, F10, F13, F14, F15, A1]

1.2 Fix $h\in C_c^\infty(Q)$ and $(x,t)\in Q$. Since $\operatorname{supp}h$ is compact, there is $\rho>0$ with $\operatorname{supp}h\subseteq\overline B_\rho(0)\times[-\rho,\rho]$, and $\|h\|_\infty<\infty$ by the extreme value theorem. If $h(y,t-|x-y|/c)\ne0$, then $y\in\overline B_\rho(0)$ and $|t-|x-y|/c|\le\rho$, so $|x-y|\le c(|t|+\rho)$; therefore the absolute integral is at most $\frac{\|h\|_\infty}{4\pi}\int_{B(x,c(|t|+\rho))}|x-y|^{-1}dy=\frac{\|h\|_\infty}{4\pi}\cdot\frac{\sigma(S^2)c^2(|t|+\rho)^2}{2}=\frac{\|h\|_\infty c^2(|t|+\rho)^2}{2}<\infty$ by the polar formula and the order rules. Hence $(K*h)(x,t)$ is well defined by an absolutely convergent integral for every $(x,t)\in Q$. [given, F3, F10, F13, F14, F15]

1.3 Fix $\psi\in\mathcal D$ and put $F:=K\circledast\psi$, that is, $F(y,s)=\frac{1}{4\pi}\int\psi(y+z,s+|z|/c)|z|^{-1}dz$. Choose $M>0$ with $\operatorname{supp}\psi\subseteq\overline B_M(0)\times[-M,M]$ and let $A:=\|\psi\|_\infty<\infty$. If $|y|\le2M$, every nonzero contribution has $|z|\le M+|y|\le3M$, so $|F(y,s)|\le\frac{A}{4\pi}\int_{B_{3M}}|z|^{-1}dz=\frac{9}{2}M^2A$; if $|y|>2M$, then $z\in B(-y,M)$ forces $|z|\ge|y|-M>M$, so $|F(y,s)|\le\frac{A}{4\pi}\int_{B(-y,M)}|z|^{-1}dz\le\frac{A}{4\pi}\cdot\frac{1}{M}\cdot\frac{4\pi}{3}M^3=\frac{M^2A}{3}$. Hence $F$ is bounded on all of $Q$ by $\frac{9}{2}M^2A$. [given, F3, F13, F14]

2.1 Fix $(y_0,t_0)\in C$ and a neighbourhood $U$ of it. Since $C\subseteq Q$ is closed, take an open ball $W$ with $(y_0,t_0)\in W\subseteq U$. If $y_0\ne0$: choose $0\le\psi\le1$ in $\mathcal D(Q)$ with $\psi=1$ on a neighbourhood of $(y_0,t_0)$ and $\operatorname{supp}\psi\subseteq W$. Then $\psi(y,|y|/c)=1$ for all $y$ in a neighbourhood $V$ of $y_0$ (the map $y\mapsto(y,|y|/c)$ is continuous at $y_0\ne0$), and $y\mapsto\psi(y,|y|/c)/|y|$ is nonnegative, continuous on $V$, and bounded below by $1/(2|y_0|)$ on a smaller ball around $y_0$ of positive measure; hence $\langle K,\psi\rangle>0$ by the criterion that a nonnegative measurable function with positive values on a set of positive measure has positive integral, together with the finiteness of step 1.1 and the positivity of ball measure. If $y_0=0$, then $t_0=0$; choose $0\le\psi\le1$ in $\mathcal D(Q)$ with $\psi=1$ on a neighbourhood of the origin contained in $W$. Then $\psi(y,|y|/c)=1$ for $|y|$ small, and the same argument, using the finiteness of step 1.1 again, gives $\langle K,\psi\rangle\ge\frac{1}{4\pi}\int_{0<|y|<\delta}|y|^{-1}dy>0$ for some $\delta>0$. In both cases $\operatorname{supp}\psi\subseteq U$ and $\langle K,\psi\rangle\ne0$. [given, step 1.1, F3, F11, F12, F13, F24]

2.2 With $F=K\circledast\psi$ as in step 1.3, $F$ is continuous at the origin and $F(0,0)=\langle K,\psi\rangle$. Indeed, for a sequence $(y_n,s_n)\to(0,0)$ with $|y_n|\le M$ eventually, every nonzero contribution has $z\in B_{2M}$, and $\psi(y_n+z,s_n+|z|/c)|z|^{-1}\to\psi(z,|z|/c)|z|^{-1}$ for every $z\ne0$ by continuity of $\psi$; the dominating function $A|z|^{-1}\mathbf 1_{B_{2M}}(z)$ is integrable by the polar formula, so dominated convergence gives $F(y_n,s_n)\to\frac{1}{4\pi}\int\psi(z,|z|/c)|z|^{-1}dz=\langle K,\psi\rangle$; a sequence criterion for continuity at a point gives the claim. [step 1.3, F3, F9, F13, F14]

2.3 Let $\psi\in\mathcal D$ satisfy $\operatorname{supp}\psi\cap C=\varnothing$. For every $y\ne0$ the point $(y,|y|/c)$ lies in $C$, so $\psi(y,|y|/c)=0$; the exceptional set $\{0\}$ has Lebesgue measure zero. Hence the nonnegative measurable function $y\mapsto|\psi(y,|y|/c)|\,|y|^{-1}$ vanishes almost everywhere, and its integral is zero by the almost-everywhere criterion; the triangle inequality with the absolute convergence of step 1.1 then gives $\langle K,\psi\rangle=0$. [step 1.1, F10, F11]

2.4 Let $t_0$ lie below and $T$ above the time support of $h$, so that $h$ vanishes on $\mathbb R^3\times(-\infty,t_0]$ and on $\mathbb R^3\times[T,\infty)$ and its restriction to $\mathbb R^3\times[t_0,T]$ is of class $C^\infty$ in the extension sense. Apply the wave theorem with $a=b=0$ and source $h$: the function $u(x,t)=c^2\int_{t_0}^t(t-v)M_{c(t-v)}h(\cdot,v)(x)\,dv$ is $C^\infty$ on the slab in the extension sense and $Wu=h$ on $\mathbb R^3\times(t_0,T)$. Writing the spherical mean as an integral over $S^2$, using Fubini on the compact rectangle $[t_0,t]\times S^2$, and substituting $r=c(t-v)$, with the absolute-derivative one-dimensional change of variables, gives $u(x,t)=\int_0^{c(t-t_0)}r\,\frac{1}{4\pi}\int_{S^2}h(x+rn,t-r/c)\,d\Omega(n)\,dr$. Since the chart measure on $S^2$ is $\sigma$, the polar formula applied to the nonnegative Borel function $z\mapsto|h(x+z,t-|z|/c)|(4\pi|z|)^{-1}\mathbf 1_{|z|\le c(t-t_0)}$, followed by linearity for the signed integrand, gives $u(x,t)=\int_{|z|\le c(t-t_0)}\frac{h(x+z,\,t-|z|/c)}{4\pi|z|}\,dz$; the omitted range $|z|>c(t-t_0)$ has $t-|z|/c<t_0$, where $h=0$, so the integration extends to all $z$. Finally the translation $y=x+z$, a $C^1$ diffeomorphism of Jacobian determinant one, changes this into $(K*h)(x,t)$ as defined in step 1.2. Thus $u=K*h$ on the slab, and consequently $K*h$ agrees, near each of its points, with a function of class $C^\infty$ in the extension sense. [step 1.2, F3, F4, F5, F6, F7, F8, F13, F19, F25]

3.1 Since every point $(x_*,t_*)\in Q$ lies in the interior of a slab $\mathbb R^3\times[t_0,T]$ with $t_0$ below and $T$ above the time support of $h$, step 2.4 shows that $K*h$ agrees with a $C^\infty$ function on a neighbourhood of each point; hence $K*h$ is of class $C^\infty$ on $Q$. For such a point, $W(K*h)(x_*,t_*)=Wu(x_*,t_*)=h(x_*,t_*)$ by the wave theorem applied on that slab, where $W=c^{-2}\partial_t^2-\Delta$ is evaluated classically; hence $W(K*h)=h$ on all of $Q$. [step 2.4, F19]

3.2 The cone $C=\{(y,t):t=|y|/c\}$ is closed in $Q$, since $|y|$ is continuous, so $Q\setminus C$ is open, and every test supported there has $\operatorname{supp}\psi\cap C=\varnothing$ and pairs to zero with $K$ by step 2.3; thus $K$ vanishes on $Q\setminus C$ in the sense of the support definition, and $\operatorname{supp}K\subseteq C$. Conversely let $(y_0,t_0)\in C$ and suppose it were outside $\operatorname{supp}K$; then $Q\setminus\operatorname{supp}K$ would be an open neighbourhood of $(y_0,t_0)$ on which $K$ vanishes, and step 2.1 would produce a test supported there with $\langle K,\psi\rangle\ne0$, contradicting the vanishing. Hence $C\subseteq\operatorname{supp}K$, and $\operatorname{supp}K=C$. [step 1.1, step 2.1, step 2.3, F2]

4.1 Let $\psi\in\mathcal D(Q)$. By step 3.1, $K*h$ is continuous, hence locally integrable, so $\langle K*h,\psi\rangle$ is the regular-functional pairing $\int_{(x,t)}(K*h)\psi$ of the formula in step 1.2. For fixed $(x,t)$ the inner integral defining $K*h$ is absolutely convergent by step 1.2, and inserting it gives a triple integral of $h(y,t-|x-y|/c)\psi(x,t)(4\pi|x-y|)^{-1}$ over $(y,x,t)$. This triple integral is absolutely convergent: with $\operatorname{supp}h\subseteq\overline B_\rho(0)\times[-\rho,\rho]$ and $\operatorname{supp}\psi\subseteq\overline B_M(0)\times[-M,M]$ it is bounded by $\frac{\|h\|_\infty\|\psi\|_\infty}{4\pi}\int_{[-M,M]}\int_{\overline B_\rho}\int_{B_M}|x-y|^{-1}dx\,dy\,dt<\infty$, the inner double integral being finite by the polar formula. Fubini therefore lets us integrate first in $(x,t)$ for fixed $y$; the substitution $(x,t)\mapsto(z,s)=(x-y,t-|x-y|/c)$ is a $C^1$ diffeomorphism from $\{(x,t):x\ne y\}$ onto $(\mathbb R^3\setminus\{0\})\times\mathbb R$ with determinant one, the omitted set $\{x=y\}$ being null, so the $L^1$ change-of-variables identity gives $\int_{(x,t)}\frac{h(y,t-|x-y|/c)\psi(x,t)}{4\pi|x-y|}dx\,dt=\int_{(z,s)}\frac{h(y,s)\psi(y+z,s+|z|/c)}{4\pi|z|}dz\,ds$. Fubini once more and the definition of $K\circledast\psi$ yield $\langle K*h,\psi\rangle=\int_{(y,s)}h(y,s)(K\circledast\psi)(y,s)\,dy\,ds=\langle h,K\circledast\psi\rangle$. [step 1.2, step 3.1, F5, F7, F8, F13, F20, F25]

5.1 Let $\eta\in C_c^\infty(Q)$ satisfy $\eta\ge0$, $\int\eta=1$ and $\operatorname{supp}\eta\subseteq\overline B_1(0)$: start from [F24] with compact set $\{0\}$ inside $B_1(0)$, giving a cutoff equal to one on a neighbourhood of the origin and supported in $B_1(0)$, which is nonnegative with positive integral over a ball of positive measure, and normalize it. Let $\eta_\varepsilon(u)=\varepsilon^{-4}\eta(u/\varepsilon)$ be the mollifier family, an $L^1$ approximate identity under [A1]. Fix $\psi\in\mathcal D$. Since $W(K*\eta_\varepsilon)=\eta_\varepsilon$ pointwise on $Q$ by step 3.1 and $K*\eta_\varepsilon$ is $C^\infty$, the classical-compatibility clause of the distributional calculus identifies the distributional $W$ of the regular functional $u_{K*\eta_\varepsilon}$ with $u_{W(K*\eta_\varepsilon)}=u_{\eta_\varepsilon}$; and the pairing identity of step 4.1 gives $\langle K*\eta_\varepsilon,\psi\rangle=\langle\eta_\varepsilon,K\circledast\psi\rangle$. With $F=K\circledast\psi$, bounded and continuous at the origin with $F(0,0)=\langle K,\psi\rangle$ by steps 1.3 and 2.2, the unit mass and support $\operatorname{supp}\eta_\varepsilon\subseteq\overline B_\varepsilon$ give $|\langle\eta_\varepsilon,F\rangle-F(0,0)|\le\sup_{|u|\le\varepsilon}|F(u)-F(0,0)|\to0$ by continuity at the origin; thus $\langle K*\eta_\varepsilon,\psi\rangle\to F(0,0)=\langle K,\psi\rangle$ without requiring global continuity of $F$. Thus $K*\eta_\varepsilon\to K$ in the weak distribution topology; since $W$ is continuous linear for that topology and $\langle\eta_\varepsilon,\psi\rangle\to\psi(0,0)=\langle\delta_{(0,0)},\psi\rangle$ by the same approximate-identity argument applied to the bounded continuous $\psi$, we obtain $\langle WK,\psi\rangle=\lim_\varepsilon\langle W(K*\eta_\varepsilon),\psi\rangle=\lim_\varepsilon\langle\eta_\varepsilon,\psi\rangle=\psi(0,0)$. As $\psi$ was arbitrary, $WK=\delta_{(0,0)}$. [step 2.2, step 3.1, step 4.1, F16, F17, F18, F20, F21, F22, F23, F24, A1] ∎

## Remarks

- **What is and is not asserted about $K$.** The support computation says exactly that $\operatorname{supp}K=C$; it asserts no regularity of $K$ as a function on the cone and gives no values there. Only the identity $WK=\delta_{(0,0)}$ and the convolution formula are used later on this page; the advanced kernel is not treated.

- **Choice accounting.** $\mathrm{AC}_\omega$ enters through the polar measure and polar formula, through the two $C^1$ change-of-variables theorems, and through the classical-compatibility and injectivity clauses of the distributional calculus. The algebraic identities are choice-free, and no arbitrary-index choice or dependent choice is used.

- **No distribution product.** The notation $K*h$ is defined by the explicit absolutely convergent integral of the Statement; nothing of the form $WK\cdot h$ or a product of two singular distributions is formed. The expression $K=\delta(t-|y|/c)/(4\pi|y|)$, if used elsewhere, abbreviates the pairing of the Statement.
