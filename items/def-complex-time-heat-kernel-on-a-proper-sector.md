---
id: def-complex-time-heat-kernel-on-a-proper-sector
kind: definition
title: The complex-time heat kernel on a proper sector
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-chain-rule-for-complex-derivatives
  - def-countable-choice
  - def-heat-kernel
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - thm-gaussian-integral
  - thm-dominated-convergence
  - thm-identity-theorem-holomorphic-functions
  - def-complex-exponential
  - def-complex-differentiability-holomorphic-and-entire
  - def-complex-power-from-holomorphic-logarithm-branch
  - cor-principal-logarithm-is-holomorphic-on-the-slit-plane
  - thm-algebra-of-complex-derivatives
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - thm-exponential-beats-every-polynomial
  - def-laplacian-of-a-c2-function
  - def-metric-compactness
  - thm-heine-borel-rn
  - thm-holomorphic-parameter-riemann-integral
  - cor-holomorphic-functions-are-closed-for-local-uniform-convergence
  - thm-tonelli-and-fubini-for-completed-product-measures
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Roland Schnaubelt, Evolution Equations (KIT lecture notes, Chapter 2)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: '§2.3, Definition 2.18 and Example 2.30 (the Laplacian generates a bounded analytic $C_0$-semigroup on $L^p(\mathbb R^m)$, $1<p<\infty$)'
    - title: "Martin Hairer, An Introduction to Stochastic PDEs (lecture notes, Chapter 4)"
      url: "https://www.hairer.org/SPDEs.pdf"
      locator: "§4.3, printed pp. 46–47 (analytic semigroups: sector of analyticity and the semigroup property)"
    - title: "Hendrik Vogt, Lp-analyticity of Schrodinger semigroups on Riemannian manifolds"
      url: "https://user.math.uni-bremen.de/hvogt/papers/vog02.pdf"
      locator: 'Theorem 1 and Corollary 3, printed pp. 3–4 (analyticity of angle $\pi/2$ from complex-time Gaussian bounds)'
---

## Definition

Assume Countable Choice ([[def-countable-choice]]). Fix $n\ge1$ and
$\theta\in(0,\pi/2)$ and put
$S_\theta:=\{z\in\mathbb C\setminus\{0\}:|\arg z|<\theta\}$. For $z\in S_\theta$
and $x\in\mathbb R^n$ define the **complex-time heat kernel**
$$\Gamma_z(x):=(4\pi z)^{-n/2}\exp\Bigl(-\frac{|x|^2}{4z}\Bigr),$$
where $(4\pi z)^{-n/2}:=\exp\bigl(-\frac n2\operatorname{Log}(4\pi z)\bigr)$ with
the principal logarithm. This is legitimate: $z\ne0$ and
$\operatorname{Re}(4\pi z)=4\pi|z|\cos(\arg z)>0$ because $|\arg z|<\theta<\pi/2$,
so $4\pi z$ lies in the slit plane on which the principal logarithm is
holomorphic ([[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]],
[[def-complex-power-from-holomorphic-logarithm-branch]]) and the power is the
complex exponential of [[def-complex-exponential]]. Then:

(i) $\Gamma_z\in C^\infty(\mathbb R^n)\cap L^1(\mathbb R^n)$ and
$\int_{\mathbb R^n}\Gamma_z(x)\,dx=1$;

(ii) for every $\sigma\in(0,\theta)$ and every $z$ with $|\arg z|\le\sigma$,
$\ \|\Gamma_z\|_1\le(\cos\sigma)^{-n/2}$;

(iii) for real $z=t>0$, $\Gamma_t$ is the heat kernel of [[def-heat-kernel]];

(iv) for every fixed $x$ the map $z\mapsto\Gamma_z(x)$ is holomorphic on
$S_\theta$ with
$\partial_z\Gamma_z(x)=\bigl(-\tfrac n{2z}+\tfrac{|x|^2}{4z^2}\bigr)\Gamma_z(x)$;

(v) for every compact $K\Subset S_\theta$ there are constants $c_K,C_K>0$ with
$|\Gamma_z(x)|\le C_Ke^{-c_K|x|^2}$ and
$|\partial_z\Gamma_z(x)|\le C_K(1+|x|^2)e^{-c_K|x|^2}$ for all $z\in K$,
$x\in\mathbb R^n$.

The complex exponential is entire with derivative itself ([[thm-complex-exponential-is-entire-with-derivative-itself]]), and the complex chain rule is [[thm-chain-rule-for-complex-derivatives]]. Its modulus is $|e^w|=e^{\operatorname{Re}w}$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]). Smoothness in (i) follows by repeated coordinate differentiation of the exponential and
power on $\mathbb R^n$ ([[thm-algebra-of-complex-derivatives]],
[[thm-algebra-of-derivatives]], [[thm-chain-rule]],
[[def-complex-differentiability-holomorphic-and-entire]]); square-integrability
and the exponential bound in (v) follow from
$\operatorname{Re}(1/z)=\cos(\arg z)/|z|>0$ together with the compactness of
$K$ and the growth of the exponential against polynomials
([[thm-exponential-beats-every-polynomial]], [[thm-heine-borel-rn]],
[[def-metric-compactness]]). The remaining assertions are justified in the
reminders below.

## Remarks

- **The complex Gaussian and the total mass (i).** The complex Gaussian identity
  $\int_{\mathbb R^n}e^{-a|x|^2}\,dx=(\pi/a)^{n/2}$ for $\operatorname{Re}a>0$
  follows from the real Gaussian integral [[thm-gaussian-integral]] by the scalar identity theorem in $a$: truncating to $[-R,R]$, the finite-interval
  holomorphic parameter-integral theorem
  [[thm-holomorphic-parameter-riemann-integral]] makes
  $F_R(a)=\int_{-R}^{R}e^{-ax^2}dx$ holomorphic on $\operatorname{Re}a>0$; on a
  compact parameter set $\operatorname{Re}a\ge c>0$ the tails
  $\int_{|x|>R}e^{-c|x|^2}dx$ tend to $0$ uniformly, so $F_R\to F$ locally
  uniformly and [[cor-holomorphic-functions-are-closed-for-local-uniform-convergence]]
  makes $F$ holomorphic; on $(0,\infty)$ the real Gaussian identity and the
  substitution $x\mapsto x/\sqrt a$ give $F(a)=\sqrt\pi\,\exp(-\tfrac12\operatorname{Log}a)$,
  so [[thm-identity-theorem-holomorphic-functions]] extends this formula to all
  of $\operatorname{Re}a>0$. Fubini for the absolutely convergent
  $n$-dimensional product integral [[thm-tonelli-and-fubini-for-completed-product-measures]]
  gives $\int_{\mathbb R^n}e^{-a|x|^2}dx=F(a)^n=(\pi/a)^{n/2}$; substituting
  $a=1/(4z)$, and comparing principal branches on the right half-plane, yields
  $\int\Gamma_z=1$. This route uses the published holomorphy inputs listed in
  the dependencies and not the later semigroup law.

- **The $L^1$ bound (ii) and the derivative formula (iv).** Writing
  $\operatorname{Re}(1/z)=\cos(\arg z)/|z|$ gives
  $|\Gamma_z(x)|=(4\pi|z|)^{-n/2}e^{-\cos(\arg z)|x|^2/(4|z|)}$, and integrating
  the Gaussian yields exactly $(\cos\arg z)^{-n/2}$, which is at most
  $(\cos\sigma)^{-n/2}$ when $|\arg z|\le\sigma$. The formula in (iv) is the
  product, chain and quotient rule for the holomorphic factors
  $z\mapsto\exp\bigl(-\tfrac n2\operatorname{Log}(4\pi z)\bigr)$ and
  $z\mapsto e^{-|x|^2/(4z)}$ on the slit plane, where $d\log(4\pi z)/dz=1/z$.

- **Relation to the real kernel (iii).** For real $z=t>0$ the principal
  logarithm is the real logarithm, $(4\pi t)^{-n/2}$ is the usual positive
  power and $\Gamma_t(x)=(4\pi t)^{-n/2}e^{-|x|^2/(4t)}$ is exactly the heat
  kernel of [[def-heat-kernel]]; the compatibility of the real normalisation
  with [[lem-heat-kernel-normalisation-scaling-and-derivatives]] is what makes
  (iii) a consistency statement rather than a new definition.
