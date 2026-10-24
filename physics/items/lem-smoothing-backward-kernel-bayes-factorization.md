---
id: lem-smoothing-backward-kernel-bayes-factorization
kind: lemma
title: Bayes factorization of the smoothing backward kernel
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-state-space-filtering-laws
  - thm-state-space-filtering-and-smoothing-laws-exist
  - thm-dominated-state-space-filtering-recursion
  - thm-conditional-density-formula
  - def-measure-kernel-and-probability-kernel
  - thm-measurability-of-integration-against-a-kernel
  - thm-dynkin-pi-lambda
  - thm-finite-horizon-state-space-kernel-law-exists-uniquely
proof_strategy: direct
axiom_use: Assume AC through the finite-horizon and standard-Borel conditional-law interfaces and the conditional-density supplier. The local factorization adds no choice.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing, Chapter 11, §11.2"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §2.3.1"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
---

## Statement

Assume AC, a finite-horizon Markov state-space model with standard-Borel
states, dominated observation kernels, and data-indexed filtering and
smoothing kernels as in
[[def-state-space-filtering-laws]]. Fix an observation history
$y_{1:T}$ in the full-measure set where the dominated filtering recursion
[[thm-dominated-state-space-filtering-recursion]] applies. Write $\eta_t$
for the filtering law of $X_t$ given $y_{1:t}$. Suppose the transition kernel
$M_{t+1}$ from time $t$ to $t+1$ has a product-measurable density
$f_{t+1}(x'\mid x)$ with respect to a sigma-finite measure $\lambda_{t+1}$,
meaning
$$M_{t+1}(x,A)=\int_A f_{t+1}(x'\mid x)\,\lambda_{t+1}(dx')$$
for every state $x$ and measurable set $A$.
Put
$$q_{t+1}(x')=\int f_{t+1}(x'\mid x)\,\eta_t(dx),\qquad D_{t+1}=\{x':0<q_{t+1}(x')<\infty\}.$$
The backward conditional kernel is
$$B_t(x',A)=\begin{cases}\displaystyle\frac{\int_A f_{t+1}(x'\mid x)\,\eta_t(dx)}{q_{t+1}(x')},&x'\in D_{t+1},\\\eta_t(A),&x'\notin D_{t+1}.\end{cases}$$
It is a probability-kernel version of the conditional law of $X_t$ given
$X_{t+1}=x'$ and $y_{1:t}$. The finite-horizon smoothing kernel factors as
$$\psi_T(dx_{0:T})=\eta_T(dx_T)\prod_{t=T-1}^{0}B_t(x_{t+1},dx_t)$$
for observation-almost every full history, with the product interpreted as
successive backwards kernel integration. If the transition is supplied only
as a probability kernel, the same factorization uses a supplied regular
conditional kernel of $X_t$ given $(X_{t+1},Y_{1:t})$; no transition density
is asserted in that case. Null-history values remain version-dependent.

## Facts & Assumptions

**Given:** AC; the finite-horizon Markov state-space model; the stated
filtering, predictive, and smoothing kernels; dominated observation laws; and
the transition density or supplied backward conditional kernels.

[A1] AC supports the finite-horizon kernel law and the regular conditional-law interfaces used below. [[def-axiom-of-choice]]

[F1] Filtering and smoothing kernels are data-indexed probability kernels and are regular conditional distributions after composition with the observed histories; conditional versions can differ on null histories. [[def-state-space-filtering-laws]]

[F2] For standard-Borel state and observation spaces the finite-horizon filtering, predictive, and smoothing kernels exist. [[thm-state-space-filtering-and-smoothing-laws-exist]]

[F3] Under dominated observations, the recursive normalized update gives the exact filtering kernels and their predictive laws. [[thm-dominated-state-space-filtering-recursion]]

[F4] A joint probability with a product-measurable density has a conditional-density kernel equal to the normalized density on finite positive marginal-density fibers and a supplied probability filler elsewhere. [[thm-conditional-density-formula]]

[F5] The finite-horizon state-space path law has the ordered Markov-kernel factorization; future transitions and observations depend on the past through the current state. [[thm-finite-horizon-state-space-kernel-law-exists-uniquely]]

[F6] Nonnegative product-measurable functions integrate measurably against probability kernels. [[thm-measurability-of-integration-against-a-kernel]]

[F7] Equality of finite measures on generating measurable rectangles extends to the generated history sigma-algebra. [[thm-dynkin-pi-lambda]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Fix $t<T$ and condition on $Y_{1:t}=y_{1:t}$. The conditional pair law of $(X_t,X_{t+1})$ is the ordered kernel integral $\eta_t(dx)M_{t+1}(x,dx')$ by [F3] and [F5]. In the density case this pair law has density $f_{t+1}(x'\mid x)$ with respect to $\eta_t\times\lambda_{t+1}$, and its second marginal has density $q_{t+1}(x')$. Applying [F4] gives the displayed $B_t$ on $D_{t+1}$ and the supplied filler $\eta_t$ off it. The conditional-density result proves that $B_t$ is an everywhere probability kernel and the conditional law of $X_t$ given $(X_{t+1},y_{1:t})$ on its predictive support. [A1, F3, F4, F5, F6, given]

2.1 In the full path factorization [F5], after fixing $X_{t+1}=x'$ and the observations through time $T$, every factor after time $t+1$ depends only on $x'$ and the future states. Those factors cancel from the conditional distribution of $X_t$; the observation factor at time $t+1$ is also constant in $X_t$. The remaining factors are exactly the conditional pair law in step 1.1, so the conditional distribution of $X_t$ given $(X_{t+1:T},Y_{1:T})$ equals $B_t(X_{t+1},\cdot)$ almost surely. With a general transition kernel the same cancellation leaves the supplied regular conditional kernel, without evaluating a density or particle-point singleton. [F1, F2, F5, step 1.1, given]

3.1 Apply the conditional chain rule successively from $t=T-1$ down to $0$. Step 2.1 identifies each conditional factor with $B_t(X_{t+1},\cdot)$, while the terminal factor is the filtering law $\eta_T$. Integrating first over rectangles in the finite product state space gives the displayed product kernel; [F6] makes each iterated kernel measurable, and [F7] extends the conditional identities to all Borel path events. Thus the product is a version of the finite-horizon smoothing kernel. The argument concerns histories under their actual observation law and makes no pointwise uniqueness claim on null histories. [F1, F2, F6, F7, step 2.1, given] ∎
