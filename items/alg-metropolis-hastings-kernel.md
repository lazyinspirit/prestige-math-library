---
id: alg-metropolis-hastings-kernel
kind: algorithm
title: Metropolis–Hastings kernel
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-measure
  - def-standard-borel-space
  - def-probability-measure
  - def-measure-kernel-and-probability-kernel
  - thm-nonnegative-weighted-sums-of-measures
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-radon-nikodym-derivative
  - thm-measurability-of-integration-against-a-kernel
  - lem-prior-and-model-kernel-define-joint-law
  - lem-common-submeasure-and-bounded-radon-nikodym-density
justified_by:
  - thm-metropolis-hastings-kernel-is-reversible-and-invariant
axiom_use: "AC is used only through the local Radon–Nikodym suppliers to obtain a jointly measurable accepted-flow density; the resulting kernel is then explicitly defined from the chosen version."
provenance:
  statement: literature-derived
  proof: not-applicable
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

## Definition

Assume AC. The **Metropolis–Hastings procedure** takes as input a standard-Borel
space $(\mathsf X,\mathcal X)$ ([[def-standard-borel-space]]), a target
probability measure $\pi$ ([[def-probability-measure]]), and a probability
kernel $Q$ from $(\mathsf X,\mathcal X)$ to itself
([[def-measure-kernel-and-probability-kernel]]).

1. On the product sigma-algebra ([[def-product-sigma-algebra-and-finite-product-sigma-algebras]]),
form the proposal-flow measure $\mu$ ([[def-measure]]) on
$\mathsf X\times\mathsf X$ by
$$\mu(C)=\int_{\mathsf X}Q(x,C_x)\,\pi(dx),\qquad C_x=\{y:(x,y)\in C\}.$$
This is a probability measure by [[lem-prior-and-model-kernel-define-joint-law]].
Let $\tau(x,y)=(y,x)$ and set $\mu^{\mathsf T}(C)=\mu(\tau^{-1}C)$.

2. Set $\eta=\mu\wedge\mu^{\mathsf T}$, the greatest measure dominated by both
flows. Put $\lambda_0=\mu+\mu^{\mathsf T}$, which is a finite measure by
[[thm-nonnegative-weighted-sums-of-measures]], and choose nonnegative measurable
representatives $f=d\mu/d\lambda_0$ and $g=d\mu^{\mathsf T}/d\lambda_0$
with $f+g=1$ everywhere after modification on a $\lambda_0$-null set. Define
$$\alpha(x,y)=\begin{cases}\min\{1,g(x,y)/f(x,y)\},&f(x,y)>0,\\1,&f(x,y)=0.\end{cases}$$
This is a jointly measurable version of $d\eta/d\mu$ taking values in $[0,1]$.

3. For $x\in\mathsf X$, compute the integrated acceptance probability
$$a(x)=\int_{\mathsf X}\alpha(x,y)\,Q(x,dy)$$
and rejection probability $r(x)=1-a(x)$.

4. Return the transition rule
$$P(x,A)=\int_{\mathsf X}\mathbf1_A(y)\alpha(x,y)\,Q(x,dy)+\mathbf1_A(x)r(x),\qquad A\in\mathcal X.$$
The second term retains every rejected proposal as a self-transition.

The item [[lem-common-submeasure-and-bounded-radon-nikodym-density]] proves the
common-submeasure construction and density-version claims in step 2.

## Remarks

An RN derivative is an almost-everywhere equivalence class, not a distinguished
pointwise function ([[def-radon-nikodym-derivative]]). The explicit convention
in step 2 selects a measurable version. Changing that version on a $\mu$-null
set leaves the accepted joint flow unchanged, though it can change $P(x,\cdot)$
for a $\pi$-null set of starting states. The theorem
[[thm-metropolis-hastings-kernel-is-reversible-and-invariant]] proves that $P$
is a probability kernel and that $\pi$ is invariant; the procedure alone does
not assert irreducibility, uniqueness, convergence, a rate, or a CLT.
