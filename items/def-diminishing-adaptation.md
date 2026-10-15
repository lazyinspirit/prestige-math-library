---
id: def-diminishing-adaptation
kind: definition
title: Diminishing adaptation
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-measurable-space
  - def-measure-kernel-and-probability-kernel
  - def-total-variation-distance-for-probability-laws
  - thm-measurability-of-integration-against-a-kernel
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, Coupling and Ergodicity of Adaptive MCMC"
      url: "https://www.probability.ca/jeff/ftpdir/adapt.pdf"
      locator: "§2, pp. 2–3; §5, Theorem 5, pp. 7–9."
    - title: "Gersende Fort, Adaptive MCMC: theory and methods, Warwick lecture notes"
      url: "https://www.math.univ-toulouse.fr/~gfort/Slides/Warwick09.pdf"
      locator: "Slides 19–22: formal adaptive process and diminishing adaptation."
axiom_use: "No choice axiom is used in this definition."
---

## Definition

Let $(\mathsf X,\mathcal X)$ and $(\Gamma,\mathcal G)$ be nonempty measurable
spaces ([[def-measurable-space]]). Let $\pi$ be a probability measure on
$(\mathsf X,\mathcal X)$, and let $(P_\gamma)_{\gamma\in\Gamma}$ be a jointly
measurable family of probability kernels on $\mathsf X$: for every
$A\in\mathcal X$, $(\gamma,x)\mapsto P_\gamma(x,A)$ is
$\mathcal G\otimes\mathcal X$-measurable and each $P_\gamma$ is a probability
kernel ([[def-measure-kernel-and-probability-kernel]]). Assume that $\pi$ is
invariant for every fixed kernel, meaning $\pi P_\gamma=\pi$
([[def-invariant-and-stationary-distribution-for-a-markov-kernel]]).

An **adaptive MCMC process** is a pair of measurable processes
$(X_n,\Gamma_n)_{n\ge0}$ with $X_n\in\mathsf X$, $\Gamma_n\in\Gamma$, and
natural filtration $\mathcal F_n=\sigma(X_0,\Gamma_0,\ldots,X_n,\Gamma_n)$,
such that for every $A\in\mathcal X$,
$$\mathbb P(X_{n+1}\in A\mid\mathcal F_n)=P_{\Gamma_n}(X_n,A)\quad\text{a.s.}$$
The update rule for $\Gamma_{n+1}$ may depend on the history through time
$n+1$; it is required only to make $\Gamma_{n+1}$ a measurable random variable.

For $n\ge0$, define the adaptation size
$$D_n:=\sup_{x\in\mathsf X}\lVert P_{\Gamma_{n+1}}(x,\cdot)-P_{\Gamma_n}(x,\cdot)\rVert_{\rm TV},$$
where total variation uses the convention
$\lVert\mu-\nu\rVert_{\rm TV}=\sup_{A\in\mathcal X}|\mu(A)-\nu(A)|$
([[def-total-variation-distance-for-probability-laws]]). Assume each $D_n$
is measurable; it lies in $[0,1]$. The process has **diminishing
adaptation** if $D_n\to0$ in probability as $n\to\infty$. This condition does
not require $\Gamma_n$ to converge.
