---
id: thm-posterior-consistency-under-prior-mass-and-tests
kind: theorem
title: "Posterior consistency from KL support and uniformly summable tests"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-hellinger-distance-for-dominated-laws
  - thm-hellinger-tv-comparison-under-library-convention
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - def-kullback-leibler-divergence
  - thm-pinsker
  - def-total-variation-distance-for-probability-laws
  - thm-bayes-formula-for-dominated-kernels
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-kolmogorov-iid-l1-strong-law
  - def-identically-distributed-and-iid-random-variables
  - lem-measurable-functions-preserve-independence
  - thm-independent-random-elements-have-product-joint-law
  - lem-bounded-variable-hoeffding-mgf
  - cor-first-borel-cantelli-lemma-for-events
  - cor-markov-inequality-for-random-variables
  - thm-jensens-integral-inequality
  - thm-exponential-two-point-convexity
  - def-parameter-measurable-statistical-model-as-markov-kernel
  - def-measurable-function-between-measurable-spaces
  - thm-sections-of-product-measurable-functions-are-measurable
  - def-probability-measure
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-threshold-characterisations-of-real-and-extended-real-measurability
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - def-natural-logarithm
  - thm-logarithm-derivative-and-integral
  - def-axiom-of-choice
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - cor-exponential-reciprocal-and-positivity
  - thm-geometric-series
proof_strategy: direct
axiom_use: "Assume AC through the imported KL/Radon–Nikodym and Pinsker conventions. The joint normalized density is supplied explicitly, so the local proof makes no density-selection choice; AC is used for the KL nonnegativity and KL-to-Hellinger consequence, not for the block-test or probability arguments."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "B. J. K. Kleijn, Lectures on Nonparametric Bayesian Statistics, §7.3, Theorem 7.5 and proof; §9.4, Lemma 9.8"
      url: "https://staff.fnwi.uva.nl/b.j.k.kleijn/NPBayes-LecNotes-2015.pdf"
    - title: "B. J. K. Kleijn and A. W. van der Vaart, The Bernstein-Von-Mises Theorem under Misspecification, 2012, §4.1, Lemma 4.1 and Corollaries 4.1–4.2"
      url: "https://pure.uva.nl/ws/files/1850322/114737_376240.pdf"
---

## Statement

Assume AC for the imported general Kullback–Leibler divergence and likelihood-density conventions. Let $(\Theta,\mathcal T)$ be a measurable parameter space with a proper prior probability $\Pi$. Let $(\mathsf X,\mathcal A,\mu)$ be an observation space with sigma-finite positive measure $\mu$. Suppose $\theta\mapsto P_\theta$ is a parameter-measurable probability kernel, every $P_\theta$ is dominated by $\mu$, and the truth is well-specified: $P_0=P_{\theta_0}$ for some $\theta_0\in\Theta$. Assume a specified nonnegative function $p:\Theta\times\mathsf X\to[0,\infty)$ is jointly measurable and, for every $\theta\in\Theta$ and $A\in\mathcal A$, $P_\theta(A)=\int_Ap(\theta,x)\,\mu(dx)$ with $\int p(\theta,x)\,\mu(dx)=1$. Write $p_0(x)=p(\theta_0,x)$.

Assume KL support at $P_0$: for every $\epsilon>0$ there is a measurable $B_\epsilon\subseteq\{\theta:D(P_0\|P_\theta)<\epsilon\}$ with $\Pi(B_\epsilon)>0$. Let $d$ be a metric on the model laws and require $V_\eta:=\{\theta:d(P_\theta,P_0)>\eta\}$ to be measurable for each $\eta>0$. For each $\eta$ with $V_\eta\ne\varnothing$, suppose there are measurable tests $\phi_n:\mathsf X^n\to[0,1]$ such that

$$\sum_{n=1}^{\infty}P_0^n\phi_n<\infty,\qquad \sum_{n=1}^{\infty}\sup_{\theta\in V_\eta}P_\theta^n(1-\phi_n)<\infty.$$

For each $A\in\mathcal T$, define the posterior by

$$\Pi_n(A\mid x_{1:n})=\frac{\int_A\prod_{i=1}^np(\theta,x_i)\,\Pi(d\theta)}{\int_\Theta\prod_{i=1}^np(\theta,x_i)\,\Pi(d\theta)}$$

on fibres with finite positive denominator, and use $\Pi$ as the fixed probability filler otherwise. Then, for any IID sequence with common law $P_0$, $\Pi_n(V_\eta\mid X_{1:n})\to0$ almost surely for every fixed $\eta>0$.

For the root-L2 Hellinger distance of [[def-hellinger-distance-for-dominated-laws]], every Hellinger ball about $P_0$ is measurable as a parameter set and has positive prior mass. Moreover, $h(P_0,P_\theta)^4\le2D(P_0\|P_\theta)$ under the library event-supremum total-variation convention; thus $D(P_0\|P_\theta)<\eta^4/2$ implies $h(P_0,P_\theta)<\eta$.

## Facts & Assumptions

**Given:** A proper prior probability, a parameter-measurable dominated sampling kernel, its specified jointly measurable normalized density, the well-specified truth, KL support, measurable metric complements, and tests with the two stated summable error series.

[A1] Assume AC for the imported KL/Radon–Nikodym and Pinsker conventions. The density $p$ in the Statement is supplied as part of the model data, so the local proof does not select a density representative. [[def-axiom-of-choice]]

[F1] A probability measure has total mass one, and a parameter-measurable model is a probability kernel whose event-probability sections are measurable. [[def-probability-measure]], [[def-parameter-measurable-statistical-model-as-markov-kernel]]

[F2] Measurability is defined by measurable preimages, and sections of a product-measurable function are measurable. [[def-measurable-function-between-measurable-spaces]], [[thm-sections-of-product-measurable-functions-are-measurable]]

[F3] A dominated experiment has a specified sigma-finite measure $\mu$ with $P_\theta\ll\mu$ for every parameter; this alone supplies neither a parameter sigma-algebra nor joint measurability. [[def-dominated-statistical-experiment]]

[F4] Under AC, separate likelihood densities can be selected as finite-valued nonnegative representatives, but their separate existence does not assert joint measurability. [[def-likelihood-density]]

[F5] KL is directional: if $P\not\ll Q$ then $D(P\|Q)=+\infty$; when $P\ll Q$, it is the $P$-integral of the log Radon–Nikodym derivative, with finite negative part. [[def-kullback-leibler-divergence]]

[F6] For a nonnegative product-measurable function on sigma-finite factors, Tonelli makes section integrals measurable and equates product and iterated integrals. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F7] With a proper prior, a probability sampling kernel, a sigma-finite data measure and one specified nonnegative jointly measurable density, the normalized likelihood is a posterior kernel on finite-positive evidence fibres; the prior fills the other fibres, which are prior-predictive null. [[thm-bayes-formula-for-dominated-kernels]]

[F8] An IID family is mutually independent and identically distributed; the definition itself imposes no moment condition. [[def-identically-distributed-and-iid-random-variables]]

[F9] Measurable coordinatewise maps preserve independence. [[lem-measurable-functions-preserve-independence]]

[F10] A finite vector of independent random elements has the product of its marginal laws. [[thm-independent-random-elements-have-product-joint-law]]

[F11] IID integrable real random variables obey the strong law of large numbers. [[thm-kolmogorov-iid-l1-strong-law]]

[F12] If $0\le Y\le1$, then $\mathbb E\exp\{\lambda(Y-\mathbb EY)\}\le\exp(\lambda^2/8)$ for every real $\lambda$. [[lem-bounded-variable-hoeffding-mgf]]

[F13] The exponential is convex: $\exp((1-t)x+ty)\le(1-t)\exp(x)+t\exp(y)$ for $0\le t\le1$. [[thm-exponential-two-point-convexity]]

[F14] Jensen's integral inequality gives $\varphi(\int f)\le\int\varphi(f)$ for integrable $f$ and convex $\varphi$ when $\varphi\circ f$ is integrable. [[thm-jensens-integral-inequality]]

[F15] For nonnegative $Z$ and $a>0$, $\mathbb P(Z\ge a)\le\mathbb EZ/a$. [[cor-markov-inequality-for-random-variables]]

[F16] If event probabilities are summable, the limsup event has probability zero; independence is not required. [[cor-first-borel-cantelli-lemma-for-events]]

[F17] With $\|P-Q\|_{\rm TV}=\sup_A|P(A)-Q(A)|$ and under AC, Pinsker gives $\|P-Q\|_{\rm TV}\le\sqrt{D(P\|Q)/2}$. [[def-total-variation-distance-for-probability-laws]], [[thm-pinsker]]

[F18] Under the same event-supremum convention, $h(P,Q)^2\le2\|P-Q\|_{\rm TV}$. [[thm-hellinger-tv-comparison-under-library-convention]]

[F19] For $u\ge1$, $\log u=\int_1^u t^{-1}\,dt\le u-1\le u$. [[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]]

[F20] The finite product sigma-algebra is generated by measurable rectangles. [[def-product-sigma-algebra-and-finite-product-sigma-algebras]]

[F21] Products of sigma-finite measures exist, satisfy the rectangle formula and remain sigma-finite. [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

[F22] Measures agreeing on a generating pi-system with an increasing finite-measure exhaustion from that system are equal. [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]

[F23] Products and lattice operations of measurable extended-real functions are measurable under the library's zero-times-infinity convention. [[thm-arithmetic-and-lattice-operations-preserve-measurability]]

[F24] If $f\ge0$ is measurable, then $A\mapsto\int_Af\,d\mu$ is a measure. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]

[F25] A real-valued function is measurable if its strict threshold preimages are measurable; in particular, for $f\ge0$, $\{\sqrt f>r\}=\{f>r^2\}$ when $r\ge0$, and $\{\sqrt f>r\}$ is the whole space when $r<0$. [[thm-threshold-characterisations-of-real-and-extended-real-measurability]]

[F26] The exponential satisfies $\exp(x+y)=\exp(x)\exp(y)$. [[thm-exponential-addition-formula]]

[F27] The exponential is positive and strictly increasing, $\exp(0)=1$, and $\exp(-x)=1/\exp(x)$. [[thm-exponential-is-strictly-increasing]], [[cor-exponential-reciprocal-and-positivity]]

[F28] If $0<r<1$, then the geometric series $\sum_{n\ge0}r^n$ converges. [[thm-geometric-series]]

[F29] Since the exponential is strictly increasing and $\log$ is its inverse, for $u>0$ and real $s$, $\log u>s$ exactly when $u>\exp(s)$. [[def-natural-logarithm]], [[thm-exponential-is-strictly-increasing]]

## Proof

**Given:** The hypotheses and conventions in the Statement.

1.1 For $n\ge1$ put $L_n(\theta,x_{1:n})=\prod_{i=1}^np(\theta,x_i)$ and $Z_n(x_{1:n})=\int_\Theta L_n(\theta,x_{1:n})\,\Pi(d\theta)$. The coordinate maps into $\Theta\times\mathsf X$ are measurable by the product sigma-algebra definition [F20]; joint measurability of $p$ and closure under finite products [F23] make $L_n$ product-measurable. For each fixed $\theta$, repeated Tonelli [F6, F21] and $\int p(\theta,x)\,d\mu=1$ give $\int L_n(\theta,\cdot)\,d\mu^n=1$. By [F24], $L_n(\theta,\cdot)d\mu^n$ is a measure. On every measurable rectangle $\prod_{i=1}^n A_i$, repeated Tonelli and the density identity give mass $\prod_iP_\theta(A_i)$; this is also the rectangle mass of $P_\theta^n$ by [F8, F10]. Rectangles generate the product sigma-algebra [F20], and both are probability measures, so [F22], using the whole sample space as a finite-measure exhaustion, identifies these measures. Tonelli over $\Pi$ and $\mu^n$ now gives $\int Z_n\,d\mu^n=1$, hence $Z_n<\infty$ $\mu^n$-almost everywhere and $P_0^n$-almost surely. [F1, F6, F8, F10, F20, F21, F22, F23, F24, given]

1.2 Fix $0<a<b$, choose measurable $B_a\subseteq\{\theta:D(P_0\|P_\theta)<a\}$ with $\Pi(B_a)>0$, and let $\Pi_a$ be the normalized restriction of $\Pi$ to $B_a$. For each $\theta\in B_a$, finite KL gives $P_0\ll P_\theta$. Define $r_\theta=p_0/p(\theta,\cdot)$ where $p(\theta,\cdot)>0$ and zero elsewhere. Since $P_0(\{p(\theta,\cdot)=0\})=0$, direct integration of the two supplied densities gives $\int_A r_\theta\,dP_\theta=P_0(A)$ for every measurable $A$, so $r_\theta$ is a Radon–Nikodym derivative. Define $Z_\theta=\log(p(\theta,\cdot)/p_0)$ where both densities are positive and zero elsewhere; then $Z_\theta=-\log r_\theta$ $P_0$-almost surely. For $u\ge1$, [F19] gives $\log u\le u$, so $\mathbb E_0Z_\theta^+\le\int_{\{p(\theta,x)>p_0(x)\}}p(\theta,x)\,d\mu\le1$. Pinsker [F17] gives $D(P_0\|P_\theta)\ge0$, and [F5] yields $\mathbb E_0Z_\theta^-=D(P_0\|P_\theta)+\mathbb E_0Z_\theta^+\le a+1$. Thus $\mathbb E_0|Z_\theta|\le a+2$. [A1, F3, F4, F5, F17, F19, given]

1.3 Fix $\eta>0$ with $V_\eta\ne\varnothing$, and let $\alpha_n=P_0^n\phi_n$ and $\beta_n=\sup_{\theta\in V_\eta}P_\theta^n(1-\phi_n)$. The two summable series imply $\alpha_n,\beta_n\to0$. Choose $m\ge1$ with $\alpha_m<1/4$ and $\beta_m<1/4$. For $\ell=\lfloor n/m\rfloor$, group the first $\ell m$ observations into disjoint consecutive blocks of length $m$. By [F8, F10] the block vectors are independent and identically distributed under each fixed IID law; [F9] makes $Y_j:=\phi_m(\text{block }j)$ independent $[0,1]$ random variables. Their means are at most $1/4$ under $P_0$ and at least $3/4$ under every $P_\theta$ with $\theta\in V_\eta$. Let $\widetilde\phi_n=\mathbf1\{\ell^{-1}\sum_{j=1}^\ell Y_j>1/2\}$ for $\ell\ge1$, and $0$ otherwise. [F8, F9, F10, given]

2.1 Since $P_0=P_{\theta_0}\ll\mu$, $p_0(X_i)>0$ for every sampled coordinate almost surely. On this event define the relative evidence $D_n=Z_n(X_{1:n})/\prod_{i=1}^np_0(X_i)$; it is finite $P_0^n$-almost surely by step 1.1. [F3, step 1.1, given]

2.2 Let $u(\theta,x)=p(\theta,x)/p_0(x)$ when both densities are positive and $0$ otherwise; the lift of $p_0$ to $\Theta\times\mathsf X$ is measurable by [F2,F20], and the piecewise quotient is measurable by [F23,F25]. Extend $Z(\theta,x)=\log u(\theta,x)$ on $u>0$ by $0$ on $u=0$. For every real $s$, its upper threshold is $\{u>\exp(s)\}$ if $s\ge0$ and $\{u=0\}\cup\{u>\exp(s)\}$ if $s<0$; [F27,F29] and [F25] therefore make $Z$ product-measurable. For each $\theta\in B_a$, [F5] identifies $D(P_0\|P_\theta)=-\mathbb E_0Z_\theta$; applying [F6] to the positive and negative parts shows that these section integrals, and hence $\theta\mapsto D(P_0\|P_\theta)$ on $B_a$, are measurable. Tonelli [F6] and the uniform bound in step 1.2 show $G(x):=\int Z(\theta,x)\,\Pi_a(d\theta)$ is finite for $P_0$-almost every $x$ and integrable, with $\mathbb E_0G=-\kappa$ where $\kappa:=\int D(P_0\|P_\theta)\,\Pi_a(d\theta)\le a$. For each $\theta\in B_a$, $P_0\{x:p(\theta,x)=0\}=0$; Tonelli [F6] applied to the measurable indicator of this set implies $\Pi_a\{\theta:p(\theta,X_i)=0\}=0$ almost surely for each coordinate $i$. Intersecting these probability-one events over all $i$, $\exp(\sum_{i=1}^nZ(\theta,X_i))=\prod_{i=1}^np(\theta,X_i)/p_0(X_i)$ for $\Pi_a$-almost every $\theta$ and every $n$. Set $G=0$ on the measurable $P_0$-null set where the integral is not finite. [F2, F5, F6, F20, F23, F25, F27, F29, step 1.2]

2.3 For $\ell\ge1$, [F26] writes the exponential of the centered sum as a product; the finite product law [F10] and Tonelli [F6] factor its expectation, and [F12] bounds each factor by $e^{\lambda^2/8}$. Thus $\mathbb E\exp\{\lambda\sum_{j=1}^\ell(Y_j-\mathbb EY_j)\}\le e^{\ell\lambda^2/8}$. Under $P_0$, rejection requires an upward deviation greater than $\ell/4$; Markov [F15] with $\lambda=1$ gives $P_0^n\widetilde\phi_n\le e^{-\ell/8}$. Under every $P_\theta$ in $V_\eta$, nonrejection requires a downward deviation at least $\ell/4$; Markov with $\lambda=-1$ gives $P_\theta^n(1-\widetilde\phi_n)\le e^{-\ell/8}$. Since $\ell\ge n/m-1$, both errors are at most $e^{1/8}e^{-cn}$ for $c:=1/(8m)$ and all $n\ge m$. [F6, F10, F12, F15, F26, step 1.3, algebra]

3.1 The variables $G(X_i)$ are IID by [F8, F9] and integrable by step 2.2. The strong law [F11] gives $n^{-1}\sum_{i=1}^nG(X_i)\to-\kappa$; because $\kappa\le a<b$, eventually $\sum_iG(X_i)>-nb$. Tonelli and the bound in step 1.2 also give $\int\sum_i|Z_\theta(X_i)|\,\Pi_a(d\theta)<\infty$ for $P_0^n$-almost every sample; the exponential is integrable by step 1.1. By step 2.2, the likelihood ratio in $D_n$ agrees with $\exp(\sum_iZ_\theta(X_i))$ for $\Pi_a$-almost every $\theta$, so $D_n\ge\Pi(B_a)\int\exp(\sum_iZ_\theta(X_i))\,\Pi_a(d\theta)$. Jensen [F13, F14] bounds this integral below by $\exp(\sum_iG(X_i))$, giving $D_n\ge\Pi(B_a)e^{-nb}$ eventually. [F6, F8, F9, F11, F13, F14, step 1.1, step 1.2, step 2.2, given]

3.2 On $\{p_0(X_i)>0\text{ for }1\le i\le n\}$, define $A_n:=(1-\widetilde\phi_n)\int_{V_\eta}\prod_{i=1}^n[p(\theta,X_i)/p_0(X_i)]\,\Pi(d\theta)$, and set $A_n=0$ otherwise. The product-density identity in step 1.1 and Tonelli [F6] imply $\mathbb E_{P_0^n}A_n=\int_{V_\eta}P_\theta^n((1-\widetilde\phi_n)\mathbf1_{\{p_0(X_i)>0\,\forall i\}})\,\Pi(d\theta)\le e^{1/8}e^{-cn}$ for $n\ge m$, by step 2.3 and $\Pi(V_\eta)\le1$. [F6, step 1.1, step 2.2, step 2.3]

4.1 On valid posterior fibres, split the likelihood numerator over the test and its complement. The posterior formula [F7] gives $\Pi_n(V_\eta\mid X_{1:n})\le\widetilde\phi_n+A_n/D_n$. Step 3.1 ensures the denominator is finite and positive for all sufficiently large $n$ almost surely. [F7, step 3.1, step 3.2, given]

5.1 Choose $0<a<b<c$ and use step 3.1 with these radii. Since $c>0$ and $c-b>0$, [F27] gives $e^{-c},e^{-(c-b)}\in(0,1)$; [F28] makes the corresponding geometric series finite. For each $r>0$, Markov [F15] gives $\sum_{n\ge m}P_0^n(e^{nb}A_n>r)\le r^{-1}e^{1/8}\sum_{n\ge m}e^{-n(c-b)}<\infty$. Borel–Cantelli [F16], first for $r=1/k$ and then by countability, gives $e^{nb}A_n\to0$ almost surely. The type-I bound from step 2.3 is also summable, so [F16] gives $\widetilde\phi_n\to0$ almost surely. Combining these limits with $D_n\ge\Pi(B_a)e^{-nb}$ from step 3.1 and step 4.1 proves $\Pi_n(V_\eta\mid X_{1:n})\to0$ almost surely. [F15, F16, F27, F28, step 3.1, step 2.3, step 4.1, step 3.2]

6.1 The consistency conclusion holds simultaneously for all $\eta>0$: intersect the probability-one events for positive rational $q$; for any $\eta>0$ choose rational $q<\eta$, so $V_\eta\subseteq V_q$. [step 5.1, algebra]

7.1 For each $\theta$ with finite KL, Pinsker [F17] and the local comparison [F18] give $h(P_0,P_\theta)^2\le2\sqrt{D(P_0\|P_\theta)/2}$, hence $h(P_0,P_\theta)^4\le2D(P_0\|P_\theta)$. The parameter map $\theta\mapsto h(P_0,P_\theta)^2$ is measurable: [F25] makes both square-root sections measurable, [F23] makes their squared difference product-measurable, and Tonelli [F6] makes its $\mu$-integral measurable in $\theta$. Thus every Hellinger ball is measurable. Taking a positive-measure KL subset $B_{\eta^4/2}$ places it inside $\{\theta:h(P_0,P_\theta)<\eta\}$, proving positive prior mass. [A1, F2, F6, F17, F18, F23, F25, algebra] ∎
