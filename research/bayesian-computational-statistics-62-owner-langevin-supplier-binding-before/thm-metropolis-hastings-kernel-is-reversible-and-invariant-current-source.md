---
id: thm-metropolis-hastings-kernel-is-reversible-and-invariant
kind: theorem
title: Metropolis–Hastings flow is reversible and invariant
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-probability-measure
  - def-measure-kernel-and-probability-kernel
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-general-state-reversibility-by-symmetric-flow-measure
  - thm-general-state-reversibility-implies-invariance
  - thm-sections-of-product-measurable-functions-are-measurable
  - thm-measurability-of-integration-against-a-kernel
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-nonnegative-weighted-sums-of-measures
  - lem-prior-and-model-kernel-define-joint-law
  - lem-common-submeasure-and-bounded-radon-nikodym-density
  - alg-metropolis-hastings-kernel
proof_strategy: direct
axiom_use: "AC is used only through the RN-based common-submeasure construction in the algorithm; the kernel and symmetry arguments use measure and kernel properties directly."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Ch. 11 §§11.3–11.4, printed pp. 15–20"
      url: "https://artowen.su.domains/mc/Ch-MCMC.pdf"
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms, §2 and Proposition 2, printed pp. 4–6"
      url: "https://probability.ca/jeff/ftpdir/probsurv.pdf"
---

## Statement

Assume AC and the hypotheses of [[alg-metropolis-hastings-kernel]]. Its output
$P$ is a probability kernel, the joint measure
$J_P(dx,dy)=\pi(dx)P(x,dy)$ is symmetric under $(x,y)\mapsto(y,x)$, and $\pi$
is invariant for $P$. Symmetry of this joint measure is reversibility. No
irreducibility, uniqueness, convergence-rate, or central limit theorem
conclusion is asserted.

## Facts & Assumptions

**Given:** AC, a standard-Borel space, a target probability $\pi$, a proposal
probability kernel $Q$, and the Metropolis–Hastings construction.

[A1] [[def-axiom-of-choice]]: AC states that every family of nonempty sets has
a choice function.

[F1] [[alg-metropolis-hastings-kernel]]: the algorithm defines
$P(x,A)=\int\mathbf1_A(y)\alpha(x,y)Q(x,dy)+\mathbf1_A(x)r(x)$, where
$\alpha$ is a jointly measurable $[0,1]$-valued version of the accepted-flow
density and $r(x)=1-\int\alpha(x,y)Q(x,dy)$.

[F2] [[def-measure-kernel-and-probability-kernel]]: a probability kernel is a
measurable family of measures with mass one at every source point.

[F3] [[lem-prior-and-model-kernel-define-joint-law]]: for a probability
measure $\pi$ and probability kernel $K$, the formula
$J(C)=\int K(x,C_x)\,\pi(dx)$ defines a probability measure and integrates
nonnegative product-measurable functions by iterated integration.

[F4] [[lem-common-submeasure-and-bounded-radon-nikodym-density]]: the accepted
flow $\eta=\mu\wedge\mu^{\mathsf T}$ is the greatest measure dominated
by both flows, and $\alpha\,\mu=\eta$.

[F5] [[thm-measurability-of-integration-against-a-kernel]]: integration of a
nonnegative product-measurable function against a probability kernel is a
measurable function of the source point.

[F6] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]: $\pi$
is invariant for $P$ when $\int P(x,A)\,\pi(dx)=\pi(A)$ for every measurable
$A$.

[F7] [[def-product-sigma-algebra-and-finite-product-sigma-algebras]]: measurable
rectangles generate the product sigma-algebra, so the coordinate-swap map is
measurable.

[F8] [[thm-sections-of-product-measurable-functions-are-measurable]]: each
section of a product-measurable function is measurable.

[F9] [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]: for a
nonnegative measurable $h$, $A\mapsto\int_Ah\,d\nu$ is a measure.

[F10] [[thm-nonnegative-weighted-sums-of-measures]]: a finite sum of measures
with nonnegative coefficients is a measure.

[F11] [[def-general-state-reversibility-by-symmetric-flow-measure]]:
reversibility means that the joint flow measure $J_P(dx,dy)=\pi(dx)P(x,dy)$
is symmetric under coordinate swap.

[F12] [[thm-general-state-reversibility-implies-invariance]]: on any measurable
state space, a probability kernel reversible with respect to a probability
measure leaves that measure invariant.

## Proof

**Given:** AC, $\pi$, $Q$, and the procedure in [F1].

1.1 The acceptance function satisfies $0\le\alpha\le1$. For each $x$, $0\le a(x):=\int\alpha(x,y)Q(x,dy)\le1$ because $Q(x,\cdot)$ is a probability measure. The function $a$ is measurable by [F5], so $r(x)=1-a(x)$ is measurable and takes values in $[0,1]$. [F1, F5, given]

1.2 Let $J_P$ be the joint measure of $\pi$ and $P$ supplied by [F3]. Splitting its defining integral into accepted and rejected terms gives, for every product measurable $C$, $$J_P(C)=\int\!\int\mathbf1_C(x,y)\alpha(x,y)Q(x,dy)\,\pi(dx) +\int\mathbf1_C(x,x)r(x)\,\pi(dx)=\eta(C)+R(C).$$ The accepted term is $\eta(C)$ by the iterated-integral identity in [F3] for the proposal flow $\mu$ and the density identity $\alpha\,\mu=\eta$ in [F4]. Define $R(C)=\int\mathbf1_C(x,x)r(x)\,\pi(dx)$. [A1, F1, F3, F4, given]

2.1 For fixed $x$, the accepted term $A\mapsto\int\mathbf1_A(y)\alpha(x,y)Q(x,dy)$ is a measure by [F9], since the section $y\mapsto\alpha(x,y)$ is measurable by [F8]. The rejection term $A\mapsto r(x)\mathbf1_A(x)$ is a measure: for disjoint sets at most one can contain $x$. Their sum is a measure by [F10], and its total mass is $a(x)+r(x)=1$. For each fixed $A$, the accepted term is measurable in $x$ by [F5], and the rejection term is measurable since $r$ and $\mathbf1_A$ are measurable. Thus [F2] applies pointwise and $P$ is a probability kernel. [F1, F2, F5, F8, F9, F10, step 1.1, algebra]

2.2 The coordinate swap $\tau(x,y)=(y,x)$ is measurable by [F7] and is an involution. Since $\eta$ is the greatest measure dominated by both $\mu$ and $\mu^{\mathsf T}$, its transpose $\eta^{\mathsf T}$ is also dominated by both: for every $C$, $\eta^{\mathsf T}(C)=\eta(\tau^{-1}C)\le\mu^{\mathsf T}(C)$ and $\eta^{\mathsf T}(C)\le\mu(C)$. Maximality gives $\eta^{\mathsf T}\le\eta$; transposing this inequality and using $\tau^2=\mathrm{id}$ gives $\eta\le\eta^{\mathsf T}$. Hence $\eta^{\mathsf T}=\eta$. [F4, F7, step 1.2, construct]

3.1 On the diagonal, $\tau(x,x)=(x,x)$, so $\mathbf1_C(x,x)=\mathbf1_{\tau^{-1}C}(x,x)$ for every $x$. Therefore $R(C)=R(\tau^{-1}C)$. Step 2.2 gives the same identity for $\eta$. Combining this with the decomposition in step 1.2 gives $J_P(C)=J_P(\tau^{-1}C)$ for every $C$. Thus the joint flow is symmetric, so $P$ is reversible by [F11]. [F4, F7, F11, step 1.2, step 2.2, algebra]

4.1 Steps 2.1 and 3.1 prove that $P$ is a probability kernel reversible with respect to $\pi$. The general-state result [F12] applies on this measurable space and gives $\int P(x,A)\,\pi(dx)=\pi(A)$ for every $A\in\mathcal X$. Thus $\pi$ is invariant in the sense of [F6]. [F2, F6, F12, step 2.1, step 3.1] ∎
