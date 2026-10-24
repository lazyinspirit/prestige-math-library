---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
id: cex-identifiability-alone-does-not-imply-posterior-consistency
kind: counterexample
title: "Identifiability and KL support do not replace testability"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-hellinger-distance-for-dominated-laws
  - thm-hellinger-tv-comparison-under-library-convention
  - def-identifiability-of-an-estimand
  - def-kullback-leibler-divergence
  - def-total-variation-distance-for-probability-laws
  - thm-bayes-formula-for-dominated-kernels
  - def-identically-distributed-and-iid-random-variables
  - thm-independent-random-elements-have-product-joint-law
  - def-parameter-measurable-statistical-model-as-markov-kernel
  - thm-geometric-series
  - thm-logarithm-derivative-and-integral
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - def-probability-measure
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC is inherited from the imported KL and general density conventions. The Bernoulli laws, densities and prior are explicit; the counterexample construction makes no arbitrary selection."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
---

## Statement refuted

Under the library AC convention for KL divergence and density representatives, refute the claim that in every well-specified dominated IID model an injective parameter-to-law mapping and positive prior mass in every KL neighborhood of the truth suffice for posterior consistency in every metric on the model laws, even without a uniform testing condition.

## Facts & Assumptions

**Given:** Refute the universal claim with a well-specified dominated IID model that is identifiable and has KL support at its truth, but has no uniformly consistent tests for a metric-separated complement and has posterior mass one on that complement at every sample size.

[A1] The Axiom of Choice is the premise in the general published definitions of KL divergence and likelihood-density representatives; the Bernoulli densities below are explicitly supplied. [[def-axiom-of-choice]]

[F1] A parametric model is identifiable exactly when its parameter-to-law map is injective. [[def-identifiability-of-an-estimand]]

[F2] KL divergence is directional: $D(P\|Q)=+\infty$ if $P\not\ll Q$, and otherwise it is the $P$-expectation of $\log(dP/dQ)$. [[def-kullback-leibler-divergence]]

[F3] Under the root-L2 Hellinger and library event-supremum conventions, $\|P-Q\|_{\rm TV}\le h(P,Q)$ and $h(P,Q)^2\le2\|P-Q\|_{\rm TV}$. [[thm-hellinger-tv-comparison-under-library-convention]]

[F4] Library total variation is $\sup_A|P(A)-Q(A)|$. [[def-total-variation-distance-for-probability-laws]]

[F5] For a proper prior and a jointly measurable dominated probability kernel, a finite-positive evidence fibre has posterior proportional to its likelihood times the prior. [[thm-bayes-formula-for-dominated-kernels]]

[F6] An IID family is mutually independent and identically distributed. [[def-identically-distributed-and-iid-random-variables]]

[F7] A finite vector of independent random elements has the product of its marginal laws. [[thm-independent-random-elements-have-product-joint-law]]

[F8] A dominated experiment specifies a sigma-finite measure dominating each law, and the likelihood-density convention supplies finite-valued nonnegative density representatives. [[def-dominated-statistical-experiment]], [[def-likelihood-density]]

[F9] A parameter-measurable statistical model is a probability kernel whose event-probability sections are measurable. [[def-parameter-measurable-statistical-model-as-markov-kernel]]

[F10] For $|r|<1$, $\sum_{k=1}^\infty r^k=r/(1-r)$; in particular $\sum_{k=1}^\infty2^{-k}=1$. [[thm-geometric-series]]

[F11] For $x>0$, $\log x=\int_1^x dt/t$. [[thm-logarithm-derivative-and-integral]]

[F12] A probability measure has total mass one. [[def-probability-measure]]

## Counterexample

1.1 Let $\mathsf X=\{0,1\}$ with counting measure, let $\Theta=\{0,1,2,\ldots\}$ with its power-set sigma-algebra, and put $\delta_k=(k+2)^{-2}$ for $k\ge1$. Define $P_0=\operatorname{Bernoulli}(1/2)$ and $P_k=\operatorname{Bernoulli}(1/2+\delta_k)$. Every mass is strictly between zero and one, and the map $k\mapsto P_k$ is injective because the $\delta_k$ are distinct. Thus the model is identifiable by [F1]. The parameter and observation spaces are discrete, so every event-probability section is measurable by [F9] and every function on their countable product, including the pointwise Bernoulli density, is jointly measurable. The counting measure is sigma-finite and the displayed densities are normalized, so this is a dominated model by [F8]. [F1, F8, F9, given, construct]

2.1 Give the true parameter $0$ prior mass zero and set $\Pi(\{k\})=2^{-k}$ for $k\ge1$. By [F10] these masses sum to one, so [F12] makes $\Pi$ a probability. For $\delta=\delta_k$, the explicit densities and [F2] give $D(P_0\|P_k)=\tfrac12\log\frac{1/2}{1/2+\delta}+\tfrac12\log\frac{1/2}{1/2-\delta}=-\tfrac12\log(1-4\delta^2)$. For $0<x<1$, [F11] gives $0\le-\log(1-x)=\int_{1-x}^1dt/t\le x/(1-x)$; hence $0\le D(P_0\|P_k)\le2\delta_k^2/(1-4\delta_k^2)\to0$. Every KL neighborhood of $P_0$ therefore contains some $P_k$ with prior mass $2^{-k}>0$. [A1, F2, F10, F11, F12, step 1.1, algebra]

2.2 Put $d(P_j,P_k)=1$ for distinct model laws and $d(P_j,P_j)=0$. This is a metric: if the endpoints in a triangle inequality differ, at least one adjacent pair differs and the sum of its two distances is at least one; if they agree, the left side is zero. Thus the parameter complement is $V_{1/2}=\{k\ge1\}$. For every finite data vector, all $P_k^n(x_{1:n})>0$ and are at most one, so the evidence $\sum_{k\ge1}2^{-k}P_k^n(x_{1:n})$ is finite and positive. By [F5], the posterior is supported on $\{k\ge1\}$; consequently $\Pi_n(V_{1/2}\mid x_{1:n})=1$ for every data vector and every $n$. [F4, F5, F10, step 1.1, algebra, given]

2.3 Let $\rho_k=\sum_{x\in\{0,1\}}\sqrt{P_0(\{x\})P_k(\{x\})}$. Then $0\le\rho_k\le1$, since $h(P_0,P_k)^2=2-2\rho_k$ is an integral of a square. The IID product law [F6, F7] and distributivity give product affinity $\rho_k^n$, so $h(P_0^n,P_k^n)^2=2(1-\rho_k^n)\le n\,2(1-\rho_k)=n h(P_0,P_k)^2$, since $1-r^n=(1-r)\sum_{j=0}^{n-1}r^j\le n(1-r)$ for $0\le r\le1$. Also $\|P_0-P_k\|_{\rm TV}=\delta_k$: the four events in $\{0,1\}$ have probability differences $0,\delta_k,-\delta_k,0$. Thus [F3] gives $\|P_0^n-P_n^n\|_{\rm TV}\le h(P_0^n,P_n^n)\le\sqrt{2n\delta_n}\to0$. [A1, F3, F4, F6, F7, step 1.1, algebra]

3.1 Write $\Delta_n(x)=P_0^n(\{x\})-P_n^n(\{x\})$ on the finite sample space. Since $\sum_x\Delta_n(x)=0$, the positive and negative sums each have magnitude $\|P_0^n-P_n^n\|_{\rm TV}$: the event $\{x:\Delta_n(x)>0\}$ attains the positive sum, and every event sum lies between the negative and positive sums. For any randomized test $0\le\phi_n\le1$, it follows term-by-term that $|P_0^n\phi_n-P_n^n\phi_n|=|\sum_x\phi_n(x)\Delta_n(x)|\le\|P_0^n-P_n^n\|_{\rm TV}$. Hence $\sup_{k\ge1}P_k^n(1-\phi_n)\ge P_n^n(1-\phi_n)\ge1-P_0^n\phi_n-\|P_0^n-P_n^n\|_{\rm TV}$. If the type-I error tends to zero, step 2.3 makes this uniform type-II lower bound tend to one. No tests with both errors tending to zero exist for this complement, although the model is identifiable and the prior has KL support. [F4, step 2.3, algebra]

4.1 Steps 1.1 and 2.1 establish identifiability and KL support, while steps 2.2, 2.3, and 3.1 establish posterior inconsistency and absence of uniformly consistent tests. This refutes the statement. [step 1.1, step 2.1, step 2.2, step 2.3, step 3.1] ∎
