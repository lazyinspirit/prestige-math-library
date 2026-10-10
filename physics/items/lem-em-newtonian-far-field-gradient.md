---
id: lem-em-newtonian-far-field-gradient
kind: lemma
title: The far-field gradient of a compactly supported Newtonian potential
domain: mathematics
status: draft
origin: pipeline
proof_strategy: direct
deps: ["def-laplace-fundamental-solution-with-positive-minus-laplacian-sign", "def-newtonian-potential", "thm-differentiation-under-the-integral-sign", "def-directional-and-partial-derivatives", "def-jacobian-matrix-and-gradient", "def-metric-ball", "def-euclidean-inner-product", "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric", "def-integral-over-a-measurable-set", "def-integrable-real-and-complex-functions-and-their-integrals", "prop-order-and-scalar-rules-for-the-nonnegative-integral", "cor-continuous-functions-are-borel-measurable", "def-measure-null-set-and-almost-everywhere", "def-ck-euclidean-maps-and-diffeomorphisms", "thm-real-power-continuity-and-derivatives", "thm-algebra-of-derivatives", "thm-chain-rule-for-total-derivatives", "def-countable-choice", "thm-dominated-convergence", "thm-continuous-partial-derivatives-imply-total-differentiability", "thm-the-lebesgue-integral-respects-almost-everywhere-equality", "thm-metric-continuity-characterisations", "prop-closure-properties-of-measurable-functions-used-by-the-integral"]
dependency_roles:
  prop-closure-properties-of-measurable-functions-used-by-the-integral: mathematical-premise
  thm-metric-continuity-characterisations: mathematical-premise
  def-laplace-fundamental-solution-with-positive-minus-laplacian-sign: mathematical-premise
  def-newtonian-potential: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-metric-ball: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  def-measure-null-set-and-almost-everywhere: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  thm-the-lebesgue-integral-respects-almost-everywhere-equality: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: Section 1.5.3 printed pp. 50-52 (the three-dimensional delta function and the Newtonian kernel 1/r; the graded decay of derivatives is the standard behaviour verified here) and Section 2.3.4 printed pp. 83-87.
    - title: David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: Section 2.2 printed pp. 16-17 (E = -grad phi, the Poisson equation (2.12), uniqueness up to a constant and the phi -> 0 normalization at infinity) and Section 2.2.1 printed pp. 17-19 (the point charge, rho = Q delta_3(x) and its potential). Read in the stamped full text.
    - title: L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, 3rd revised English edition (Pergamon 1971, 387 pp.; full text)
      url: http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf
      locator: Section 36 printed pp. 88-89 (static Maxwell equations (36.1)-(36.2), E = -grad phi, the Poisson equation (36.4), the Coulomb law (36.6)-(36.7), superposition (36.8) and the point-source relation (36.9)); Gaussian units re-expressed in SI. Read in the stamped full text.
    - title: Weng Cho Chew, Lectures on Electromagnetic Field Theory (Purdue University, Fall 2020, 497 pp.)
      url: https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf
      locator: Sections 3.3.2-3.3.3 printed pp. 35-36 (Poisson's equation (3.3.9), the point-charge solution (3.3.14), the static Green's function (3.3.16) and the convolution solution for general sources). Read in the stamped full text.
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$), the convention of the Lebesgue interface used below ([[def-countable-choice]]).
Let $n\ge3$, let $\Phi$ be the fundamental solution of $-\Delta$ on $\mathbb R^n$ normalised by $-\Delta T_\Phi=\delta_0$ ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]), so that for $z\ne0$
$$\Phi(z)=\frac{|z|^{2-n}}{(n-2)\omega_{n-1}},\qquad \nabla\Phi(z)=-\frac{z}{\omega_{n-1}|z|^n},\qquad |\nabla\Phi(z)|=\frac{1}{\omega_{n-1}|z|^{n-1}},$$
let $f\in L^1(\mathbb R^n)$ be real, measurable and zero $\lambda_n$-almost everywhere outside a closed ball $\overline B_R(0)=\{x:|x|\le R\}$ of finite radius $R>0$ ([[def-metric-ball]]), and let
$$Nf(x)=\int_{\mathbb R^n}\Phi(x-y)f(y)\,d\lambda_n(y)$$
be the Newtonian potential ([[def-newtonian-potential]]). Then:

(a) [Representation and differentiability off the far field] for every $x\in\mathbb R^n$ with $|x|>2R$ the integral $\int_{\mathbb R^n}\nabla\Phi(x-y)f(y)\,d\lambda_n(y)$ is absolutely convergent, the function $Nf$ is differentiable at $x$ with
$$\nabla(Nf)(x)=\int_{\mathbb R^n}\nabla\Phi(x-y)f(y)\,d\lambda_n(y),$$
and $x\mapsto\nabla(Nf)(x)$ is continuous on the open set $\{x:|x|>2R\}$;

(b) [Decay bound] for every $x$ with $|x|>2R$,
$$|\nabla(Nf)(x)|\le\frac{2^{n-1}\|f\|_1}{\omega_{n-1}|x|^{n-1}},\qquad \|f\|_1:=\int_{\mathbb R^n}|f|\,d\lambda_n;$$

(c) [Scope] the hypothesis is compact support together with $L^1$-integrability; no boundedness of $f$ is assumed, and nothing is asserted at points with $|x|\le2R$ (where the kernel singularity may meet the support of $f$).

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, $n\ge3$, the fundamental solution $\Phi$ of $-\Delta$ with the displayed form off the origin, and a real $f\in L^1(\mathbb R^n)$ vanishing $\lambda_n$-almost everywhere outside $\overline B_R(0)$, $R>0$.

[F1] The fundamental solution is $\Phi(z)=|z|^{2-n}/((n-2)\omega_{n-1})$ for $z\ne0$ ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]), and the Newtonian potential is $Nf(x)=\int\Phi(x-y)f(y)\,d\lambda_n(y)$, defined where the integral is absolutely finite and agreeing with its almost-everywhere class wherever that holds ([[def-newtonian-potential]]).

[F2] Real powers are smooth where defined; the chain, product and algebra rules hold for derivatives, and a map with continuous partial derivatives is totally differentiable with the gradient as derivative ([[thm-real-power-continuity-and-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-continuous-partial-derivatives-imply-total-differentiability]], [[def-directional-and-partial-derivatives]], [[def-jacobian-matrix-and-gradient]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F3] The Euclidean norm satisfies the triangle inequality and the reverse triangle inequality, and is continuous and nonnegative ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], [[def-euclidean-inner-product]], [[def-metric-ball]]).

[F4] Differentiation under the integral sign: if $f(x,t)$ is integrable in $x$ for every $t$, differentiable in $t$ for almost every $x$, with measurable $t$-derivative dominated by one integrable $g$ uniformly in $t$, then $t\mapsto\int f(x,t)\,d\mu(x)$ is differentiable with the derivative integrated ([[thm-differentiation-under-the-integral-sign]]).

[F5] Dominated convergence: pointwise almost-everywhere convergence under one integrable majorant passes to the integrals ([[thm-dominated-convergence]]).

[F6] Continuous maps on Euclidean spaces are Borel measurable; integrals are unchanged by almost-everywhere modification, and the nonnegative integral is monotone and homogeneous ([[cor-continuous-functions-are-borel-measurable]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[def-integral-over-a-measurable-set]], [[def-integrable-real-and-complex-functions-and-their-integrals]], [[def-measure-null-set-and-almost-everywhere]], [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]). Sums, scalar multiples and absolute values of measurable real functions are measurable ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]]); product measurability used here is justified in step 1.1.

## Proof

**Proof technique:** direct.

1.1 Fix $x_0$ with $|x_0|>2R$, choose $0<\delta<|x_0|-2R$, put $U:=B_\delta(x_0)$ and $c:=|x_0|-\delta-R>0$. For measurable real $a$, the function $a^2$ is measurable because $\{a^2>b\}$ is the whole space for $b<0$ and $\{|a|>\sqrt b\}$ for $b\ge0$; for measurable real $a,b$, the identity $ab=((a+b)^2-(a-b)^2)/4$ therefore gives measurable products by [F6]. Since $f$ vanishes almost everywhere on the complement of $\overline B_R$, the function $f_0:=f\,\mathbf 1_{\overline B_R}$ is measurable, integrable, agrees with $f$ almost everywhere and is pointwise zero outside $\overline B_R$; replacing $f$ by $f_0$ changes no integral of the form $\int\Phi(x-y)f(y)\,dy$ or $\int\partial_i\Phi(x-y)f(y)\,dy$ ([F6]), so we may assume $f$ vanishes pointwise off $\overline B_R$. Differentiating the displayed formula of [F1] with the chain and algebra rules gives, for every $z\ne0$, $\nabla\Phi(z)=\frac{1}{(n-2)\omega_{n-1}}(2-n)|z|^{-n}z=-\frac{z}{\omega_{n-1}|z|^n}$ and hence $|\nabla\Phi(z)|=\frac{1}{\omega_{n-1}|z|^{n-1}}$ ([F2]). [given, F1, F2, F6]

2.1 For $x\in U$ and $y\in\overline B_R$ the triangle inequality of [F3] gives $$|x-y|\ge|x_0-y|-|x-x_0|\ge|x_0|-R-\delta=c,$$ so with $f$ vanishing off $\overline B_R$ the bounds $$|\Phi(x-y)f(y)|\le\frac{c^{2-n}|f(y)|}{(n-2)\omega_{n-1}},\qquad|\partial_i\Phi(x-y)f(y)|\le\frac{c^{1-n}|f(y)|}{\omega_{n-1}}$$ hold for all $x\in U$ and $y\in\mathbb R^n$, the exponents being nonpositive because $n\ge3$ and $c>0$ ([F3]). Both majorants are integrable: $f\in L^1$ and the constants are finite. Hence $Nf(x)$ and each integral $\int\partial_i\Phi(x-y)f(y)\,d\lambda_n(y)$ exist absolutely for every $x\in U$, and $g:=c^{1-n}|f|/\omega_{n-1}$ is a single integrable majorant for all partial-derivative integrands on $U$. Moreover each integrand $y\mapsto\partial_i\Phi(x-y)f(y)$ is measurable, as follows: the kernel restricted to $\overline B_R$ is continuous and hence Borel measurable there; its extension by zero outside that closed ball is Borel (preimages of open sets are a relative Borel preimage, possibly with the complement of the ball added). Its product with $f$ is measurable by step 1.1. The same reasoning applies to the potential integrand. [step 1.1, F3, F6]

3.1 Fix $i\in\{0,\dots,n-1\}$ and $x\in U$; since $U$ is open there is $\varepsilon>0$ with $x+te_i\in U$ for $|t|<\varepsilon$. Put $J:=(-\varepsilon,\varepsilon)$ and $h(y,t):=\Phi(x+te_i-y)f(y)$ on $\mathbb R^n\times J$. For every $t\in J$ the section $y\mapsto h(y,t)$ is integrable by step 2.1; for $y\in\overline B_R$ the map $t\mapsto h(y,t)$ is differentiable on $J$ because $|x+te_i-y|\ge c$ there, with derivative $\partial_i\Phi(x+te_i-y)f(y)$; outside $\overline B_R$ set $h(y,t)=0$, whose derivative is zero; this derivative is measurable in $y$ by step 2.1; and it is dominated uniformly on $J$ by the integrable $g$ of step 2.1. The differentiation-under-the-integral-sign theorem [F4] therefore gives that $t\mapsto Nf(x+te_i)$ is differentiable at $t=0$ with derivative $\int\partial_i\Phi(x-y)f(y)\,d\lambda_n(y)$; by the definition of the partial derivative [F2] this says that $\partial_iNf(x)$ exists and equals that integral. [step 2.1, F2, F4]

4.1 Let $x_m\to x$ be a sequence in $U$. For every $y$ with $f(y)\ne0$ (so $y\in\overline B_R$) the points $x_m-y$ stay at distance at least $c$ from the origin by step 2.1, so $\partial_i\Phi(x_m-y)f(y)\to\partial_i\Phi(x-y)f(y)$ by continuity of the kernel off the origin ([F1], [F2]); the convergence also holds where $f(y)=0$, both sides being $0$. All these integrands are dominated by the integrable $g$ of step 2.1, so dominated convergence [F5] gives $$\int\partial_i\Phi(x_m-y)f(y)\,d\lambda_n(y)\to\int\partial_i\Phi(x-y)f(y)\,d\lambda_n(y).$$ By step 3.1 the left-hand side is $\partial_iNf(x_m)$, so each partial derivative of $Nf$ is sequentially continuous on $U$, hence continuous by [[thm-metric-continuity-characterisations]] under the assumed $\mathrm{AC}_\omega$. [step 2.1, step 3.1, F1, F2, F5]

5.1 By steps 3.1 and 4.1 the function $Nf$ has all first partial derivatives at every point of $U$ and each of them is continuous on $U$; the characterization of total differentiability by continuous partial derivatives [F2] therefore makes $Nf$ differentiable at every $x\in U$, with $\nabla(Nf)(x)$ the vector of the partial derivatives, namely $$\nabla(Nf)(x)=\int_{\mathbb R^n}\nabla\Phi(x-y)f(y)\,d\lambda_n(y),$$ the vector integral being absolutely convergent by step 2.1. As $x_0$ with $|x_0|>2R$ was arbitrary, this proves (a) throughout the open far field $\{|x|>2R\}$. [step 4.1, F2]

6.1 For (b), let $|x|>2R$ and let $y$ satisfy $f(y)\ne0$, so $|y|\le R$; the reverse triangle inequality gives $|x-y|\ge|x|-R>|x|/2$ ([F3]), hence by step 1.1 $$|\nabla\Phi(x-y)|=\frac{1}{\omega_{n-1}|x-y|^{n-1}}\le\frac{2^{n-1}}{\omega_{n-1}|x|^{n-1}}.$$ Integrating against $|f|$ and using the estimate of step 5.1 gives $|\nabla(Nf)(x)|\le\int|\nabla\Phi(x-y)f(y)|\,d\lambda_n(y)\le\frac{2^{n-1}\|f\|_1}{\omega_{n-1}|x|^{n-1}}$, which is (b). The argument used only the $L^1$ hypothesis and the a.e. compact support, never boundedness of $f$, and it makes no assertion at points with $|x|\le2R$, where the singularity of $\Phi$ can meet the support of $f$; this is exactly the scope recorded in (c). [step 1.1, step 5.1, F3, F6] ∎
