---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
id: ex-identifiable-finite-model
kind: example
title: "A finite identifiable model with posterior consistency"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - thm-posterior-consistency-under-prior-mass-and-tests
  - def-identifiability-of-an-estimand
  - def-kullback-leibler-divergence
  - def-total-variation-distance-for-probability-laws
  - def-identically-distributed-and-iid-random-variables
  - thm-independent-random-elements-have-product-joint-law
  - lem-bounded-variable-hoeffding-mgf
  - cor-markov-inequality-for-random-variables
  - thm-geometric-series
  - def-axiom-of-choice
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - cor-exponential-reciprocal-and-positivity
  - def-probability-measure
  - def-parameter-measurable-statistical-model-as-markov-kernel
  - def-dominated-statistical-experiment
  - def-likelihood-density
proof_strategy: direct
axiom_use: "AC is inherited from the imported KL and posterior-consistency conventions. The finite parameter, prior, densities and test are explicit, so the local calculation uses no arbitrary selection."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Under the library AC convention for KL divergence and posterior laws, take $\Theta=\{0,1\}$, data space $\{0,1\}$, and laws $P_0=\operatorname{Bernoulli}(1/4)$ and $P_1=\operatorname{Bernoulli}(3/4)$, with prior mass $1/2$ at each parameter. This finite dominated model is identifiable, has KL support at its true law $P_0$, and admits exponentially consistent tests. Hence the posterior mass at parameter $1$ tends to zero almost surely when the data are IID from $P_0$.

## Facts & Assumptions

**Given:** The finite model, proper prior, IID observations from $P_0$, and the test constructed in the Verification.

[A1] AC is included through the imported library KL definition and the posterior-consistency theorem. [[def-axiom-of-choice]]

[F1] A parametric model is identifiable exactly when its parameter-to-law map is injective. [[def-identifiability-of-an-estimand]]

[F2] KL divergence is directional and $D(P\|P)=0$ for a probability law with itself, by its density-ratio definition. [[def-kullback-leibler-divergence]]

[F3] The library total variation distance is $\sup_A|P(A)-Q(A)|$. [[def-total-variation-distance-for-probability-laws]]

[F4] A finite vector of independent random elements has the product of its marginal laws. [[thm-independent-random-elements-have-product-joint-law]]

[F5] If $0\le Y\le1$, then $\mathbb E\exp\{\lambda(Y-\mathbb EY)\}\le\exp(\lambda^2/8)$ for every real $\lambda$. [[lem-bounded-variable-hoeffding-mgf]]

[F6] In a well-specified dominated IID model, prior KL support and summable type-I plus uniform type-II testing errors imply almost-sure posterior consistency on every measurable metric-separated complement. [[thm-posterior-consistency-under-prior-mass-and-tests]]

[F7] For nonnegative $Z$ and $a>0$, $\mathbb P(Z\ge a)\le\mathbb E Z/a$. [[cor-markov-inequality-for-random-variables]]

[F8] The series $\sum_{n\ge1}r^n$ converges for $0<r<1$. [[thm-geometric-series]]

[F9] The exponential is positive and strictly increasing, satisfies $\exp(0)=1$ and $\exp(-x)=1/\exp(x)$, and obeys $\exp(x+y)=\exp(x)\exp(y)$. [[thm-exponential-addition-formula]], [[thm-exponential-is-strictly-increasing]], [[cor-exponential-reciprocal-and-positivity]]

[F10] A parameter-measurable model is a probability kernel, domination supplies a sigma-finite common measure, and a likelihood density is a supplied measurable representative. [[def-parameter-measurable-statistical-model-as-markov-kernel]], [[def-dominated-statistical-experiment]], [[def-likelihood-density]]

[F11] A probability measure has total mass one. [[def-probability-measure]]

## Verification

**Given:** The definitions and hypotheses in the Example.

1.1 The parameter and observation spaces have their full finite sigma-algebras. Counting measure is finite and hence sigma-finite. Its densities are $p_0(0)=3/4$, $p_0(1)=1/4$, $p_1(0)=1/4$, and $p_1(1)=3/4$; they normalize, are jointly measurable, and define a parameter-measurable kernel. The two prior masses sum to one, so [F10,F11] verify the dominated kernel and proper prior hypotheses. The parameter-to-law map is injective because $P_0(\{1\})=1/4\ne3/4=P_1(\{1\})$, so [F1] makes the model identifiable. For every $\epsilon>0$, the KL neighborhood contains $\theta=0$ because $dP_0/dP_0=1$ and [F2] gives $D(P_0\|P_0)=\int\log1\,dP_0=0$; its prior mass is therefore at least $1/2$. [A1, F1, F2, F10, F11, given]

1.2 Let $d$ be library total variation and put $\phi_n=\mathbf1\{n^{-1}\sum_{i=1}^nX_i>1/2\}$. Since $d(P_0,P_1)=1/2$ by [F3], the parameter complement is $V_{1/4}=\{1\}$, whose law is $P_1$. Under either law, [F9] rewrites the exponential of the centered sum as a product, and independence [F4] factors its MGF into at most $e^{n\lambda^2/8}$ by [F5]. Under $P_0$, rejection implies $\sum_i(X_i-1/4)>n/4$; Markov [F7] applied to the exponential with $\lambda=1$ gives $P_0^n\phi_n\le e^{-n/8}$. Under $P_1$, nonrejection implies $\sum_i(X_i-3/4)\le-n/4$; Markov [F7] with $\lambda=-1$ gives $P_1^n(1-\phi_n)\le e^{-n/8}$. [F3, F4, F5, F7, F9, given, algebra]

2.1 By [F9], $r=e^{-1/8}$ lies in $(0,1)$, so [F8] makes both test-error series converge. For every $0<\eta<1/2$, the parameter complement is $V_\eta=\{1\}$ (whose law is $P_1$); for $\eta\ge1/2$ it is empty, so the same tests verify every required nonempty complement. The theorem [F6] therefore gives $\Pi_n(\{1\}\mid X_{1:n})=\Pi_n(V_{1/4}\mid X_{1:n})\to0$ almost surely for any IID sequence with common law $P_0$. [A1, F6, F8, F9, F10, F11, step 1.1, step 1.2, algebra] ∎
