---
id: lem-metropolis-hastings-density-ratio
kind: lemma
title: The common-density Metropolis–Hastings ratio
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-measure
  - def-probability-measure
  - def-measure-kernel-and-probability-kernel
  - def-standard-borel-space
  - def-finite-sigma-finite-and-semifinite-measures
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-extended-real-valued-measurable-function
  - def-radon-nikodym-derivative
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-composition-with-borel-functions-preserves-measurability
  - lem-coordinate-maps-and-permutations-are-measurable-on-finite-products
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - thm-monotone-convergence-for-the-integral
  - thm-integration-against-a-radon-nikodym-derivative
  - lem-prior-and-model-kernel-define-joint-law
  - lem-common-submeasure-and-bounded-radon-nikodym-density
  - lem-common-submeasure-density-is-pointwise-minimum
  - alg-metropolis-hastings-kernel
proof_strategy: direct
axiom_use: "AC is used through the general MH construction and the finite-density common-submeasure lemma to establish the accepted-flow version; the density calculation and product-flow symmetry use no stronger choice principle."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Ch. 11 §11.4, printed pp. 16–20"
      url: "https://artowen.su.domains/mc/Ch-MCMC.pdf"
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms, §2.1 and Proposition 2, printed pp. 4–6"
      url: "https://probability.ca/jeff/ftpdir/probsurv.pdf"
---

## Statement

Assume AC. Let $(\mathsf X,\mathcal X)$ be standard Borel
([[def-standard-borel-space]]) and let $\lambda$ be a sigma-finite positive
measure ([[def-finite-sigma-finite-and-semifinite-measures]]) on it. Let the
target probability have a finite-valued nonnegative measurable density
$p:\mathsf X\to[0,\infty)$, and suppose the proposal kernel has a finite-valued
nonnegative jointly measurable density $q:\mathsf X\times\mathsf X\to[0,\infty)$,
so $\pi(A)=\int_Ap\,d\lambda$ and
$Q(x,A)=\int_Aq(x,y)\,d\lambda(y)$ for every $x$ and $A$. Let
$\mu(dx,dy)=\pi(dx)Q(x,dy)$ be the forward proposal flow and let
$\mu^{\mathsf T}$ be its transpose. Put
$$m(x,y)=p(x)q(x,y),\qquad m^{\mathsf T}(x,y)=p(y)q(y,x).$$
There is a jointly measurable version $\alpha_{\rm cd}$ of
$d(\mu\wedge\mu^{\mathsf T})/d\mu$ given by
$$\alpha_{\rm cd}(x,y)=\begin{cases}\min\left\{1,\dfrac{p(y)q(y,x)}{p(x)q(x,y)}\right\},&m(x,y)>0,\\1,&m(x,y)=0.\end{cases}$$
The version chosen by [[alg-metropolis-hastings-kernel]] agrees with this
common-density version $\mu$-almost everywhere; values on a forward-flow null
set do not alter the accepted flow.

## Facts & Assumptions

**Given:** AC, a standard-Borel space, a sigma-finite $\lambda$, a probability
target $\pi$ with density $p$, and a probability proposal kernel $Q$ with
jointly measurable density $q$ as in the statement.

[A1] [[def-axiom-of-choice]]: AC says every family of nonempty sets has a
choice function.

[F1] [[alg-metropolis-hastings-kernel]]: the forward flow is
$\mu(C)=\int Q(x,C_x)\,\pi(dx)$, and the algorithm chooses a jointly
measurable $[0,1]$-valued version of $d\eta/d\mu$, where
$\eta=\mu\wedge\mu^{\mathsf T}$ is the greatest common submeasure.

[F2] [[lem-prior-and-model-kernel-define-joint-law]]: a probability target and
probability kernel define a probability measure on the product sigma-algebra,
and integration of a nonnegative product-measurable function against it is
iterated integration.

[F3] [[def-product-sigma-algebra-and-finite-product-sigma-algebras]] and
[[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]:
$\Lambda=\lambda\otimes\lambda$ exists, has the rectangle formula, and is
sigma-finite.

[F4] [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]: two measures
agree on the product sigma-algebra if they agree on its generating rectangles
and on an increasing finite-measure exhaustion of rectangles.

[F5] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative
product-measurable functions on $\Lambda$ may be integrated in either order.

[F6] [[thm-arithmetic-and-lattice-operations-preserve-measurability]] and
[[def-extended-real-valued-measurable-function]]: finite products, minima,
finite sums, scalar multiples, and threshold sets of measurable functions are
measurable.

[F7] [[lem-coordinate-maps-and-permutations-are-measurable-on-finite-products]]
and [[thm-composition-with-borel-functions-preserves-measurability]]: the
coordinate swap $\tau(x,y)=(y,x)$ is measurable, as are compositions of
measurable maps.

[F8] [[lem-common-submeasure-density-is-pointwise-minimum]]: if two finite
flows have nonnegative densities $m,m^{\mathsf T}$ with respect to the same
sigma-finite measure $\Lambda$, their greatest common submeasure has density
$h=\min\{m,m^{\mathsf T}\}$ with respect to $\Lambda$.

[F9] [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]]
and [[thm-monotone-convergence-for-the-integral]]: nonnegative measurable
functions are increasing limits of simple functions, and those limits pass
through nonnegative integrals.

[F10] [[thm-integration-against-a-radon-nikodym-derivative]]: for simple $s$
and a measure $\mu$ with density $m$, $\int s\,d\mu=\int sm\,d\Lambda$;
applying [F9] extends this identity to nonnegative measurable integrands.

[F11] [[def-radon-nikodym-derivative]] and
[[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]:
a Radon–Nikodym derivative is an almost-everywhere class, and two measurable
densities for the same measure agree almost everywhere.

## Proof

**Given:** The hypotheses in the statement and the accepted-flow construction.

1.1 Put $\Lambda=\lambda\otimes\lambda$. The lift $(x,y)\mapsto p(x)$ is product-measurable because the preimage of each Borel set $B$ is the rectangle $p^{-1}(B)\times\mathsf X$. Each section $C_x$ is measurable: for fixed $x$, the class of all $D\subseteq\mathsf X^2$ with $D_x\in\mathcal X$ is a sigma-algebra containing every measurable rectangle, so it contains $\mathcal X\otimes\mathcal X$. Since $q$ and $\mathbf1_C$ are product-measurable, [F6] makes their product measurable, and [F5] makes $$H(x):=\int_{\mathsf X}\mathbf1_C(x,y)q(x,y)\,\lambda(dy)=Q(x,C_x)$$ measurable, where the equality is the given density identity for $Q(x,\cdot)$. The density identity for $\pi$ and [F10], first for simple functions and then for $H$ by [F9] and monotone convergence, give $$\mu(C)=\int_{\mathsf X}H(x)\,\pi(dx)=\int_{\mathsf X}H(x)p(x)\,\lambda(dx).$$ Substituting the expression for $H$ and applying Tonelli [F5] yields $$\mu(C)=\int_{\mathsf X}\!\int_{\mathsf X} \mathbf1_C(x,y)p(x)q(x,y)\,\lambda(dy)\lambda(dx)=\int_Cm\,d\Lambda.$$ Thus $m$ is a density of the forward probability flow with respect to $\Lambda$. [F2, F3, F5, F6, F9, F10, given]

2.1 Let $\tau(x,y)=(y,x)$ and define $\Lambda^{\mathsf T}(C)=\Lambda(\tau^{-1}C)$. By [F7], $\tau$ is measurable, so $\Lambda^{\mathsf T}$ is a measure. On a rectangle $A\times B$, $$\Lambda^{\mathsf T}(A\times B)=\lambda(B)\lambda(A) =\lambda(A)\lambda(B)=\Lambda(A\times B),$$ using the product-measure convention $0\cdot\infty=0$. Choose increasing measurable $X_n\uparrow\mathsf X$ with $\lambda(X_n)<\infty$. The rectangles $X_n\times X_n$ increase to $\mathsf X^2$ and have equal finite measure for $\Lambda^{\mathsf T}$ and $\Lambda$. Measurable rectangles form a generating pi-system, so [F3]–[F4] give $\Lambda^{\mathsf T}=\Lambda$. For every nonnegative product-measurable $u$, the identity $$\int_{\tau^{-1}C}u\,d\Lambda=\int_Cu\circ\tau\,d\Lambda$$ holds first for indicators from $\Lambda^{\mathsf T}=\Lambda$, then for simple functions by finite addition, and for all such $u$ by [F9]. Applying it to $u=m$ yields $$\mu^{\mathsf T}(C)=\mu(\tau^{-1}C)=\int_Cm(y,x)\,d\Lambda.$$ Hence $m^{\mathsf T}(x,y)=p(y)q(y,x)$ is the reverse-flow density. [F3, F4, F7, F9, step 1.1]

3.1 Apply [F8] to the finite probability measures $\mu,\mu^{\mathsf T}$ and the sigma-finite reference measure $\Lambda$. Their greatest common submeasure $\eta=\mu\wedge\mu^{\mathsf T}$ has density $h=\min\{m,m^{\mathsf T}\}$, so $$\eta(C)=\int_Ch\,d\Lambda\qquad(C\in\mathcal X\otimes\mathcal X).$$ [A1, F2, F3, F8, step 1.1, step 2.1]

4.1 Define $\alpha_{\rm cd}=h/m$ on $\{m>0\}$ and $\alpha_{\rm cd}=1$ on $\{m=0\}$. It takes values in $[0,1]$. For a real $c<0$, $\{\alpha_{\rm cd}>c\}=\mathsf X^2$; for $0\le c<1$, $$\{\alpha_{\rm cd}>c\}=\{m=0\}\cup \bigl(\{m>0\}\cap\{h-cm>0\}\bigr);$$ for $c\ge1$ the set is empty. Each set is measurable by [F6], so $\alpha_{\rm cd}$ is jointly measurable. By its definition, $\alpha_{\rm cd}m=h$ everywhere. For any $C$, choose nonnegative simple $s_n\uparrow\alpha_{\rm cd}\mathbf1_C$. The simple density identity [F10] gives $\int s_n\,d\mu=\int s_nm\,d\Lambda$; monotone convergence on both sides then gives $$\int_C\alpha_{\rm cd}\,d\mu=\int_C\alpha_{\rm cd}m\,d\Lambda =\int_Ch\,d\Lambda=\eta(C).$$ Thus $\alpha_{\rm cd}$ is a version of $d\eta/d\mu$. [F6, F8, F9, F10, given, step 3.1]

5.1 On $\{m>0\}$, algebra gives $$\alpha_{\rm cd}=\frac{\min\{m,m^{\mathsf T}\}}m =\min\left\{1,\frac{p(y)q(y,x)}{p(x)q(x,y)}\right\}.$$ On $\{m=0\}$ its specified value is $1$, which is permissible because $\mu(\{m=0\})=\int_{\{m=0\}}m\,d\Lambda=0$. The algorithm's chosen derivative and $\alpha_{\rm cd}$ are two versions of the same Radon–Nikodym derivative, so [F11] makes them equal $\mu$-almost everywhere. This proves the common-density ratio and the forward-zero convention without asserting pointwise uniqueness on null sets. [F1, F8, F11, step 4.1] ∎
