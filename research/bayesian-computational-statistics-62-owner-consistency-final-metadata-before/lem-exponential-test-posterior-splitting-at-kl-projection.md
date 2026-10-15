---
id: lem-exponential-test-posterior-splitting-at-kl-projection
kind: lemma
title: "Exponential tests and KL mass force posterior exclusion"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-kl-projection-set-and-relative-kl-neighborhoods
  - def-likelihood-tilted-measure-at-kl-projection
  - lem-kl-neighborhood-prior-mass-likelihood-denominator-lower-bound
  - lem-product-likelihood-tilt-has-product-density
  - def-axiom-of-choice
  - def-probability-measure
  - def-identically-distributed-and-iid-random-variables
  - thm-independent-random-elements-have-product-joint-law
  - thm-bayes-formula-for-dominated-kernels
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - cor-markov-inequality-for-random-variables
  - cor-first-borel-cantelli-lemma-for-events
proof_strategy: direct
axiom_use: "AC enters through the imported KL and likelihood-density conventions; supplied joint density representatives mean the proof makes no further selections."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "B. J. K. Kleijn and A. W. van der Vaart, The Bernstein-Von-Mises Theorem under Misspecification, Lemma 4.1, pp. 376–377"
      url: "https://pure.uva.nl/ws/files/1850322/114737_376240.pdf"
---

## Statement

Let $V\subseteq\Theta$ be measurable. Suppose a relative KL neighborhood
$B_\epsilon$ has positive prior mass and that, for all sufficiently large
$n$, tests $\phi_n:\mathsf X^n\to[0,1]$ satisfy
$$\phi_n(X_1,\ldots,X_n)\longrightarrow0\quad P_0^\infty\text{-almost surely},\qquad \sup_{\theta\in V}Q_\theta^n(1-\phi_n)\le e^{-n\beta}$$
for a constant $\beta>\epsilon$. Then
$$\Pi(V\mid X_1,\ldots,X_n)\longrightarrow0 \quad P_0^\infty\text{-almost surely}.$$

## Facts & Assumptions

**Given:** A jointly measurable dominated IID model, a proper prior,
$B_\epsilon$ with $\Pi(B_\epsilon)>0$, and tests with almost-surely vanishing type-I statistics and the displayed
exponential type-II bound.

[A1] AC is assumed for the imported KL and likelihood-density conventions
[[def-axiom-of-choice]]. The jointly measurable density family is supplied,
so the proof makes no further selections.

[F1] [[lem-kl-neighborhood-prior-mass-likelihood-denominator-lower-bound]]:
for every $\alpha>\epsilon$, the likelihood denominator is eventually at
least $e^{-n\alpha}$ almost surely.

[F2] [[lem-product-likelihood-tilt-has-product-density]]: the
$P_0^n$-density of $Q_\theta^n$ is
$\prod_{i=1}^n p_\theta(X_i)/p_{\theta^*}(X_i)$.

[F3] [[thm-bayes-formula-for-dominated-kernels]]: on finite positive
evidence fibres, the posterior is the normalized prior-weighted likelihood;
the preceding denominator lemma makes these the relevant $P_0^n$-almost
sure fibres.

[F4] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative
jointly measurable likelihood integrands may be integrated in either order.

[F5] [[cor-markov-inequality-for-random-variables]]: for nonnegative $Y$
and $a>0$, $P(Y>a)\le E[Y]/a$.

[F6] [[cor-first-borel-cantelli-lemma-for-events]]: a sequence of events
with summable probabilities occurs only finitely often almost surely.

[F7] [[def-identically-distributed-and-iid-random-variables]] and
[[thm-independent-random-elements-have-product-joint-law]]: the IID sample
vector has law $P_0^n$ for each $n$, and events with these finite-dimensional
probabilities are measured under the corresponding infinite IID law.

[F8] [[def-probability-measure]]: the prior $\Pi$ has total mass one.

## Proof


**Given:** The hypotheses and conventions in the Statement.

1.1 Choose $\alpha$ with $\epsilon<\alpha<\beta$. By [A1] and [F1], the denominator $D_n$ is at least $e^{-n\alpha}$ eventually almost surely. By the type-I premise, $\phi_n(X_1,\ldots,X_n)\to0$ almost surely under the same infinite IID law. Intersect these two full-probability events. [A1, F1, F7, given, choose]

1.2 Define $N_n:=\int_V\prod_{i=1}^n \frac{p_\theta(X_i)}{p_{\theta^*}(X_i)} (1-\phi_n)\,\Pi(d\theta),\qquad Y_n:=e^{n\alpha}N_n.$ By [F2], [F4], [F8], and the type-II bound, $\mathbb E_{P_0^n}Y_n \le e^{n\alpha}\Pi(V)e^{-n\beta} \le e^{-n(\beta-\alpha)}.$ [F2, F4, F8, given]

2.1 Set $a_n=e^{-n(\beta-\alpha)/2}$. For every sufficiently large $n$, Markov's inequality [F5] gives $P_0^n\{Y_n>a_n\}\le e^{-n(\beta-\alpha)/2}$. The right-hand side is summable, and the finite initial terms do not matter. Thus [F6] and [F7] imply $Y_n\to0$ almost surely. [F5, F6, F7, step 1.2, algebra]

3.1 On the full-probability event from the denominator lemma, the ordinary evidence is $Z_n:=\int_\Theta\prod_i p_\theta(X_i)\,\Pi(d\theta) =\left(\prod_i p_{\theta^*}(X_i)\right)D_n,$ which is finite and positive. Bayes' formula [F3] therefore gives the posterior as the normalized likelihood integral, and division by this positive common factor expresses it using $D_n$. Decompose the tested likelihood integral over $V$ into its $\phi_n$ and $1-\phi_n$ parts. Since $0\le\phi_n\le1$, $\int_V R_n(\theta)\,\Pi(d\theta) =\int_V\phi_nR_n(\theta)\,\Pi(d\theta)+N_n \le\phi_n\int_\Theta R_n(\theta)\,\Pi(d\theta)+N_n =\phi_nD_n+N_n,$ where $R_n(\theta)=\prod_i p_\theta(X_i)/p_{\theta^*}(X_i)$. Therefore $\Pi(V\mid X_1,\ldots,X_n) \le \phi_n+\frac{N_n}{D_n} \le \phi_n+e^{n\alpha}N_n=\phi_n+Y_n.$ Steps 1.1 and 2.1 make the right-hand side tend to zero. [F1, F3, step 1.1, step 2.1, algebra] ∎


## Remarks

An exponentially small type-I expectation, or merely a summable sequence of type-I expectations, implies the a.s. premise by Markov and Borel–Cantelli. Neither summability nor an exponential type-I bound is required here. Merely vanishing type-I and type-II expectations do not suffice for general likelihood tilts; see [[cex-weak-tilted-tests-do-not-imply-almost-sure-consistency]].
