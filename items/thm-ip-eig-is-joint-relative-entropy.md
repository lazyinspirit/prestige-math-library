---
id: thm-ip-eig-is-joint-relative-entropy
kind: theorem
title: Expected information gain is joint relative entropy
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-design-indexed-inverse-experiment
  - def-ip-expected-information-gain
  - def-kullback-leibler-divergence
  - thm-kullback-leibler-is-nonnegative
  - thm-bayes-formula-for-dominated-kernels
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - def-finite-sigma-finite-and-semifinite-measures
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-integration-against-a-density
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-axiom-of-choice
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: >-
  Assume AC only through the library's KL definition of a Radon–Nikodym
  derivative. The posterior density and all Tonelli, null-fiber, and integral
  exchanges in the proof use the supplied dominated densities and are
  choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Kathryn Chaloner and Isabella Verdinelli, Bayesian Experimental Design: A Review, Statistical Science 10(3) (1995), 273–304"
      url: "https://www.stat.cmu.edu/tr/tr599/tr599.ps"
      locator: "§2.2, equation (3), expected posterior-to-prior KL criterion."
    - title: "David J. C. MacKay, Information-Based Objective Functions for Active Data Selection, Neural Computation 4(4) (1992), 590–604"
      url: "https://gwern.net/doc/reinforcement-learning/exploration/active-learning/1992-mackay.pdf"
      locator: "§2, complete expectation argument for information criteria under the prior-predictive law."
---

## Statement

Assume the Axiom of Choice. Fix a design $d$ in a design-indexed dominated inverse experiment, with prior $\mu_0$, likelihood density $p_d(y\mid\theta)$ relative to the common sigma-finite measure $\nu$, predictive density $p_d(y)$, and posterior $\mu_d^y$ on $G_d=\{y:0<p_d(y)<\infty\}$. Let $P_d$ be the joint law of $(\theta,Y)$, so on measurable rectangles
$$P_d(A\times B)=\int_B\int_Ap_d(y\mid\theta)\,\mu_0(d\theta)\,\nu(dy),$$
let $P_{Y\mid d}(B)=\int_Bp_d(y)\,\nu(dy)$, and let $Q_d=\mu_0\otimes P_{Y\mid d}$. Then
$$\operatorname{EIG}(d)=D(P_d\|Q_d)\in[0,+\infty].$$
On $G_d$, the Radon–Nikodym density $dP_d/dQ_d$ is $p_d(y\mid\theta)/p_d(y)$ almost everywhere. The identity is valid as an extended integral: its negative part is finite, its positive part may be infinite, and no subtraction of two infinite entropies occurs.

## Statement references

[[def-ip-design-indexed-inverse-experiment|The common proper prior, dominated likelihood, predictive density, and posterior on positive finite evidence fibers.]]

[[def-ip-expected-information-gain|EIG is the prior-predictive expectation of posterior-to-prior KL divergence.]]

[[def-kullback-leibler-divergence|KL is the directional RN log-density integral with a finite negative part.]]

[[thm-bayes-formula-for-dominated-kernels|The predictive density and posterior kernel identities hold on positive finite evidence fibers, and exceptional fibers have zero predictive mass.]]

[Chaloner and Verdinelli, §2.2](https://www.stat.cmu.edu/tr/tr599/tr599.ps)

[MacKay, §2](https://gwern.net/doc/reinforcement-learning/exploration/active-learning/1992-mackay.pdf)

## Facts & Assumptions

**Given:** The hypotheses and notation in the Statement, including AC and the finite design-indexed dominated experiment.

[A1] The Axiom of Choice supplies the Radon–Nikodym convention used by the library KL definition. [[def-axiom-of-choice]]

[F1] A design-indexed experiment has a proper prior, a jointly measurable probability-kernel density, predictive density $p_d(y)=\int p_d(y\mid\theta)\,\mu_0(d\theta)$, and posterior $\mu_d^y(d\theta)=p_d(y\mid\theta)\mu_0(d\theta)/p_d(y)$ on positive finite evidence fibers. [[def-ip-design-indexed-inverse-experiment]]

[F2] The joint law has density $p_d(y\mid\theta)$ relative to $\mu_0\otimes\nu$, the observation marginal has density $p_d$, and the posterior formula is a conditional-law version on $0<p_d<\infty$; the zero and infinite normalizer fibers have zero marginal mass. [[thm-bayes-formula-for-dominated-kernels]]

[F3] Tonelli's theorem makes section integrals measurable and equates a nonnegative product integral with either iterated integral on sigma-finite measure spaces. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F4] Two measures agreeing on a generating pi-system are equal when it contains an increasing exhaustion on which their common masses are finite. [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]

[F5] A nonnegative measurable function with integral zero vanishes almost everywhere. [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]

[F6] For $P\ll Q$ with RN derivative $r$, $D(P\|Q)=\int r\log r\,dQ$ with $0\log0=0$ and finite negative part; on a probability space, $\int (r\log r)^-\,dQ\le1/e$. [[def-kullback-leibler-divergence]]

[F7] KL divergence between probability measures is nonnegative. [[thm-kullback-leibler-is-nonnegative]]

[F8] For a nonnegative measurable function $f$, the set function $C\mapsto\int_C f\,d\mu$ is a measure. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]

[F9] For nonnegative measurable $f,g$, integration against the density measure satisfies $\int g\,d(f\,d\mu)=\int gf\,d\mu$. [[thm-integration-against-a-density]]

[F10] Sigma-finiteness gives a countable cover by finite-measure sets; taking finite unions yields an increasing finite-measure exhaustion. [[def-finite-sigma-finite-and-semifinite-measures]]

[F11] Sigma-finite factors have a product measure with the rectangle formula, and that product measure is sigma-finite. [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

## Proof

**Given:** The hypotheses and notation in the Statement.

1.1 By [F1] and [F3], Tonelli makes $p_d$ measurable and gives $\int_{\mathsf Y}p_d(y)\,\nu(dy)=\int_\Theta\int_{\mathsf Y}p_d(y\mid\theta)\,\nu(dy)\,\mu_0(d\theta)=1$. Thus $P_{Y\mid d}$ is a probability measure and $p_d(y)<\infty$ for $\nu$-almost every $y$. By [F2], its mass on $\{p_d=0\}\cup\{p_d=\infty\}$ is zero, and the posterior formula in [F1] is the conditional-law version on $G_d$. [given, F1, F2, F3, algebra]

2.1 By [F2], the joint law $P_d$ has density $p_d(y\mid\theta)$ relative to $\mu_0\otimes\nu$. By step 1.1, $p_d$ is measurable and its lift to the product is product-measurable. Define $M_d(C):=\int_Cp_d(y)\,d(\mu_0\otimes\nu)$; [F8] makes $M_d$ a measure. By [F11], the product measures $\mu_0\otimes\nu$ and $Q_d=\mu_0\otimes P_{Y\mid d}$ exist. For each measurable rectangle $A\times B$, Tonelli [F3] gives $M_d(A\times B)=\mu_0(A)\int_Bp_d(y)\,\nu(dy)=Q_d(A\times B)$. By [F10], choose $B_k\uparrow\mathsf Y$ with $\nu(B_k)<\infty$. The measurable rectangles form a generating pi-system, and $\Theta\times B_k$ is an increasing exhaustion in it; both $M_d$ and $Q_d$ assign it the same finite mass $P_{Y\mid d}(B_k)\le1$. Thus [F4] gives $M_d=Q_d$ on the full product sigma-algebra. By [F9], for every nonnegative product-measurable $g$, $\int g\,dQ_d=\int g p_d(y)\,d(\mu_0\otimes\nu)$. Since $G_d$ is measurable, define $r_d(\theta,y)=p_d(y\mid\theta)/p_d(y)$ on $G_d$ where $p_d(y\mid\theta)<\infty$, and set it to zero elsewhere. The numerator and lifted denominator are product-measurable, and division is Borel on this region, so $r_d$ is finite-valued and product-measurable. For each $y\in G_d$, the omitted set where $p_d(y\mid\theta)=\infty$ is $\mu_0$-null because its integral is the finite number $p_d(y)$; hence $r_d(\cdot,y)$ is a density of $\mu_d^y$. The set where $p_d(y\mid\theta)=\infty$ is product-null because the joint density has total integral one. On $\{p_d=0\}$, [F1] gives $\int_\Theta p_d(y\mid\theta)\,\mu_0(d\theta)=0$, so [F5] and Tonelli show that this region has zero joint mass; the $\{p_d=\infty\}$ fibers are $\nu$-null by step 1.1. Thus $P_d(G_d^c)=0$. Since $Q_d=M_d$ has density $p_d$ relative to $\mu_0\otimes\nu$, it also gives the product-null set where the likelihood is infinite zero mass, and step 1.1 gives $Q_d(G_d^c)=0$. On $G_d$ outside that product-null set, $r_dp_d=p_d(y\mid\theta)$. Applying [F9] to $g=\mathbf1_Cr_d$ therefore gives $\int_Cr_d\,dQ_d=\int_Cp_d(y\mid\theta)\,d(\mu_0\otimes\nu)=P_d(C)$ for every product-measurable $C$, so $r_d=dP_d/dQ_d$. [A1, F1, F2, F3, F4, F5, F8, F9, F10, F11, step 1.1, construct, algebra]

3.1 For each $y\in G_d$, [F1] makes $r_d(\cdot,y)$ a probability density relative to $\mu_0$, so [F6] gives $D(\mu_d^y\|\mu_0)=\int r_d(\theta,y)\log r_d(\theta,y)\,\mu_0(d\theta)$ and bounds the fiber's negative part by $1/e$. Weighting by $p_d(y)$ and using step 1.1 bounds the full negative part by $\frac1e\int_{G_d}p_d(y)\,\nu(dy)=1/e$. Tonelli [F3] on the positive and negative parts separately, together with the product density in step 2.1, therefore gives $\operatorname{EIG}(d)=\int r_d\log r_d\,dQ_d$ with finite negative part and possibly infinite positive part. [F1, F3, F6, step 1.1, step 2.1, algebra]

4.1 Substituting the fiber identity from step 3.1 into the definition of EIG and using the separate Tonelli exchanges from that step gives $\operatorname{EIG}(d)=\int r_d\log r_d\,dQ_d$. By [F6] and step 2.1, this is $D(P_d\|Q_d)$; [F7] gives nonnegativity. The finite negative part from step 3.1 rules out an $\infty-\infty$ subtraction, proving the stated extended identity. [A1, F6, F7, step 2.1, step 3.1, algebra] ∎
