---
id: ex-ip-zero-evidence-fiber
kind: example
title: A zero-evidence fiber has no normalized fiberwise update
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-misfit-evidence-and-posterior-law
  - thm-ip-function-space-posterior-propriety
  - def-ip-forward-map-and-solution-classes
  - def-ip-prior-on-a-forward-domain
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-measurable-function-between-measurable-spaces
  - def-bayesian-model-as-prior-and-sampling-kernel
  - def-measure-kernel-and-probability-kernel
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
  - def-counting-measure
  - prop-counting-measure-is-a-measure
  - thm-bayes-formula-for-dominated-kernels
  - def-conditional-law-given-a-random-element
  - prop-fiberwise-posterior-propriety-iff-finite-positive-evidence
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the finite parameter and data spaces, prior, and sampling kernel are explicit."
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "M. Dashti and A. M. Stuart, The Bayesian Approach to Inverse Problems (full lecture notes, arXiv:1302.6989)"
      url: "https://arxiv.org/pdf/1302.6989"
      locator: "§3.2, Theorem 3.4 and proof; the formula is only asserted where the evidence is positive."
    - title: "J. Latz, On the Well-posedness of Bayesian Inverse Problems, SIAM/ASA Journal on Uncertainty Quantification 8 (2020)"
      url: "https://arxiv.org/pdf/1902.10257"
      locator: "§2.3, degenerate Bayesian inverse problems with a zero likelihood on the truth set."
---

## Example

Let $X=\mathbb R$ with its usual real Banach norm, let $U=D=\{0,1\}$ with the Borel subspace structure, and let the forward map be the constant map $F(u)=0$. Give the parameter the Borel probability $\mu_0(A)=\tfrac12\mathbf1_{\{0\in A\}}+\tfrac12\mathbf1_{\{1\in A\}}$ for Borel $A\subseteq\mathbb R$. Take data space $\mathsf Y=\{0,1\}$ with the usual subspace metric, its power-set sigma-algebra and counting measure, and deterministic sampling kernel $Q(u,\cdot)=\delta_{F(u)}=\delta_0$. Its density is $L(u;y)=1$ for $y=0$ and $L(u;y)=0$ for $y=1$, with potential $\Phi(u;0)=0$ and $\Phi(u;1)=+\infty$. Thus $Z(0)=1$ but $Z(1)=0$. At $y=1$ no normalized fiberwise update is defined; the data law assigns $\{1\}$ probability zero, so a posterior-kernel version may use the prior filler there or any other probability measure on $D$. The finite-potential propriety theorem does not apply at $y=1$.

## Example references

[[def-ip-misfit-evidence-and-posterior-law|The fixed-data potential update is defined only for positive finite evidence; dominated models use an explicit null-fiber filler.]]

[[thm-ip-function-space-posterior-propriety|The sufficient propriety theorem requires finite continuous potential sections.]]

[[def-ip-forward-map-and-solution-classes|A forward map is a map on an admissible truth set.]]

[[def-ip-prior-on-a-forward-domain|A prior on the forward domain has full measure on that domain.]]

[[def-bayesian-model-as-prior-and-sampling-kernel|A proper model uses a probability prior and sampling kernel.]]

[[def-dirac-measure|A point mass assigns mass one to sets containing its point and zero otherwise.]]

[[thm-bayes-formula-for-dominated-kernels|The dominated formula fills zero-evidence fibers with the prior and gives a conditional law version.]]

[[def-conditional-law-given-a-random-element|A conditional kernel may be changed on a measurable data-marginal-null set.]]

[Latz, §2.3, full paper](https://arxiv.org/pdf/1902.10257)

[Dashti and Stuart, §3.2, full lecture notes](https://arxiv.org/pdf/1302.6989)

## Facts & Assumptions

**Given:** The finite parameter domain $D=\{0,1\}$, the half-half prior, the constant forward map, the deterministic sampling kernel and its counting-measure density.

[F1] A prior on a forward domain is a Borel probability on $X$ with full mass on $D$. [[def-ip-prior-on-a-forward-domain]]

[F2] Evidence is the integral of the nonnegative likelihood section; the normalized update is defined only when that evidence is positive and finite. [[def-ip-misfit-evidence-and-posterior-law]]

[F3] A proper Bayesian model consists of a probability prior and a parameter-measurable probability kernel. [[def-bayesian-model-as-prior-and-sampling-kernel]]

[F4] The Dirac set function gives mass one to sets containing its point and zero otherwise, and is a probability measure. [[def-dirac-measure]], [[prop-dirac-measure-is-a-probability-measure]]

[F5] Counting measure on $\mathcal P(X)$ assigns finite sets their cardinality and infinite sets $+\infty$. [[def-counting-measure]]

[F6] Counting measure is a measure on the power-set sigma-algebra. [[prop-counting-measure-is-a-measure]]

[F7] A probability kernel has probability sections at every parameter and measurable evaluations. [[def-measure-kernel-and-probability-kernel]]

[F8] In a dominated model, the evidence is the data-marginal density and the kernel with prior fillers on zero and infinite fibers is a conditional law version. [[thm-bayes-formula-for-dominated-kernels]]

[F9] A finite positive scaling of the zero likelihood measure cannot be a probability. [[prop-fiberwise-posterior-propriety-iff-finite-positive-evidence]]

[F10] Changing a data-indexed conditional kernel on a measurable data-marginal-null set preserves its conditional identities. [[def-conditional-law-given-a-random-element]]

[F11] The propriety theorem assumes every potential section in its specified data set is finite and continuous. [[thm-ip-function-space-posterior-propriety]]

[F12] An inverse-problem forward map has metric parameter and data spaces, a nonempty admissible truth set, and a map defined on it. [[def-ip-forward-map-and-solution-classes]]

[F13] The product sigma-algebra is generated by measurable rectangles, and a map is measurable when preimages of target-measurable sets are measurable. [[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[def-measurable-function-between-measurable-spaces]]

## Verification

**Given:** The hypotheses and conventions in the Statement.

1.1 The half-half set function $\mu_0$ is a probability: in any disjoint Borel sequence each of $0$ and $1$ occurs in at most one member, so the mass of the union equals the sum of the masses, and $\mu_0(\mathbb R)=1$. Since $\mu_0(D)=1$, it is a prior on $D$ by [F1]. The constant map $F(u)=0$ is a forward map on the nonempty truth set $U=D$ by [F12], and its restriction is measurable because every preimage is $D$ or $\varnothing$. For each $u\in D$, $Q(u,\cdot)=\delta_0$ is a probability measure by [F4], and every evaluation $u\mapsto Q(u,B)$ is measurable on finite $D$; hence [F7] makes $Q$ a probability kernel. Thus [F3] gives a proper Bayesian model. [given, F1, F3, F4, F7, F12, construct]

2.1 With counting measure on $\mathsf Y$, the density is $L(u,y)=\mathbf1_{\{y=0\}}$ for both parameter values; its sum over $y\in\{0,1\}$ is one, so it represents the stated kernel. The potential and density are jointly measurable: each singleton rectangle $\{u\}\times\{y\}$ is measurable, so every subset of finite $D\times\mathsf Y$ is a finite union of measurable rectangles by [F13]. Integrating the kernel against the half-half prior gives data law concentrated at $0$, and the same density gives $Z(0)=\tfrac12+\tfrac12=1$ and $Z(1)=0$. At $y=1$, [F9] rules out any finite positive scaling of the zero likelihood measure as a probability. The potential equals $+\infty$ on $D$ at this datum, so the finite-section hypothesis in [F11] fails. [F2, F5, F6, F9, F11, F13, step 1.1, given, algebra]

3.1 The explicit dominated kernel from [F8] uses the normalized update at $y=0$ and prior filler $\mu_0$ at $y=1$. The data law gives $\{1\}$ probability zero by step 2.1, so [F10] allows replacing that filler by $\delta_1$ without changing the conditional identities. Both fillers are probability measures on $D$ by [F4], but neither is obtained by normalizing the zero-evidence fiber. [F4, F8, F10, step 2.1, given] ∎
