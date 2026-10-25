---
id: thm-particle-smoothing-consistency-under-stated-conditions
kind: theorem
title: Fixed-horizon particle backward smoothing is consistent under stated conditions
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-axiom-of-choice
  - lem-smoothing-backward-kernel-bayes-factorization
  - alg-particle-backward-simulator
  - lem-bootstrap-particle-filter-weak-consistency
  - thm-dominated-state-space-filtering-recursion
  - def-weak-convergence-of-borel-probability-measures
  - thm-chebyshev-markov-inequality-for-the-integral
proof_strategy: direct
axiom_use: AC is inherited from the finite-horizon conditional-law suppliers. Compactness and the finite-net arguments use no additional choice.
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
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §5.2"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
    - title: "Fredrik Lindsten, Pete Bunch, Simo Särkkä, Thomas B. Schön, and Simon J. Godsill, Rao-Blackwellized particle smoothers for conditionally linear Gaussian models, §3.1"
      url: "https://arxiv.org/pdf/1505.06357"
---

## Statement

Assume AC and a finite-horizon state-space model with compact metric state
spaces $E_0,\ldots,E_T$, dominated observation kernels, and an observation
history
$y_{1:T}$ in the full-measure finite-positive set where
[[lem-smoothing-backward-kernel-bayes-factorization]] applies. Let $g_t(x,y)$
be the specified product-measurable observation density relative to its
sigma-finite observation measure, as in
[[thm-dominated-state-space-filtering-recursion]], and set
$G_t(x)=g_t(x,y_t)$ for $1\le t\le T$ and $G_0\equiv1$. Suppose each $G_t$
is continuous and there are constants $0<c\le1\le C<\infty$ such that
$c\le G_t(x)\le C$ for every state and time. For each $0\le t<T$, let
$M_{t+1}$ be the state transition from time $t$ to time $t+1$ and suppose it has a jointly continuous
density $f_{t+1}(x'\mid x)$ relative to a Borel probability measure
$\lambda_{t+1}$, meaning
$$M_{t+1}(x,A)=\int_A f_{t+1}(x'\mid x)\,\lambda_{t+1}(dx')$$
for measurable $A$, with uniform bounds
$$0<a\le f_{t+1}(x'\mid x)\le b<\infty$$
for all $x,x'$. Write $\eta_t$ for the exact filtering-kernel value at
$y_{1:t}$ and $\psi_T$ for the exact smoothing-kernel value at $y_{1:T}$.
Use the model initial law as the initial proposal, these same
$M_t$ as transition proposals, and these $G_t$ as potentials in the
multinomial bootstrap particle filter. With $N\ge1$ particles, independently
draw $S_N\ge1$ backward paths conditional on the resulting clouds, where
$S_N\to\infty$ as $N\to\infty$. Let $\widehat\psi_T^N$ be the conditional
law of one backward-simulated path given the clouds. For every continuous
$\Phi:E_0\times\cdots\times E_T\to\mathbb R$,
$$\widehat\psi_T^N(\Phi)\to\psi_T(\Phi)\quad\hbox{in probability},\qquad \frac1{S_N}\sum_{s=1}^{S_N}\Phi(\widetilde X_{0:T}^s)\to\psi_T(\Phi)\quad\hbox{in probability}.$$
For a fixed number of simulated paths, their conditional path law is
consistent but the empirical path average retains its Monte Carlo error.
No time-uniform-in-$T$ convergence claim is made.

## Facts & Assumptions

**Given:** The assumptions above, fixed observations with finite positive
evidence, and a bounded continuous test function $\Phi$ on the compact path
space.

[A1] AC is used through the finite-horizon Feynman–Kac and conditional smoothing-law constructions. [[def-axiom-of-choice]]

[F1] The filtering empirical measures converge weakly in probability under the bounded positive-potential, Feller, multinomial bootstrap assumptions. [[lem-bootstrap-particle-filter-weak-consistency]]

[F2] The exact smoother factors into its terminal filtering law and the exact backward conditional kernels. [[lem-smoothing-backward-kernel-bayes-factorization]]

[F3] Given filtering particles, the particle backward kernel weights each candidate state by its filter weight times the transition density and normalizes by the predictive density. [[alg-particle-backward-simulator]]

[F4] Weak convergence tests against bounded continuous functions. [[def-weak-convergence-of-borel-probability-measures]]

[F5] The nonnegative integral inequality bounds probabilities of squared deviations. [[thm-chebyshev-markov-inequality-for-the-integral]]

[F6] The observation-density recursion identifies each filtering kernel with the normalized Feynman–Kac update using $G_t(x)=g_t(x,y_t)$ on finite-positive evidence histories. [[thm-dominated-state-space-filtering-recursion]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 For each $0\le t<T$, let $h$ be bounded continuous and let $x_n\to x$. Uniform continuity of $f_{t+1}$ on the compact product gives $\sup_{x'}|f_{t+1}(x'\mid x_n)-f_{t+1}(x'\mid x)|\to0$. Since $\lambda_{t+1}$ is a probability measure, $|M_{t+1}h(x_n)-M_{t+1}h(x)|\le\|h\|_\infty\sup_{x'}|f_{t+1}(x'\mid x_n)-f_{t+1}(x'\mid x)|\to0.$ Thus each transition is Feller. [given, algebra]

2.1 By [F1] and [F6], for every $0\le t\le T$ the random filtering measure $\eta_t^N$ converges weakly in probability to the exact filtering law $\eta_t$ at the fixed observation history. For each $0\le t<T$, put $q_{t+1}(x')=\int f_{t+1}(x'\mid x)\eta_t(dx)$ and $q_{t+1}^N(x')=\int f_{t+1}(x'\mid x)\eta_t^N(dx)$. The density bounds imply $a\le q_{t+1}(x'),q_{t+1}^N(x')\le b$ for every $x'$, so every backward denominator used by the algorithm is finite positive. [A1, F1, F2, F3, F6, step 1.1, given]

3.1 Fix $0\le t<T$ and a continuous $h$ on $E_t$. The families $x\mapsto f_{t+1}(x'\mid x)$ and $x\mapsto h(x)f_{t+1}(x'\mid x)$ indexed by $x'\in E_{t+1}$ are uniformly bounded and equicontinuous: joint continuity on the compact product is uniformly continuous. For any $\epsilon>0$, a finite $\epsilon$-net of the compact parameter space gives a finite sup-norm net for each family. Weak convergence in probability from step 2.1 gives convergence of the integrals for every function in each finite net; since all measures have mass one, replacing a family member by a net function changes either integral by at most $\epsilon$. Letting $\epsilon\downarrow0$ proves uniform-in-$x'$ convergence of both numerators and denominators. Division is stable because all denominators are at least $a$, so $\sup_{x'}|B_t^N h(x')-B_th(x')|\to0$ in probability for the empirical and exact backward kernels. The exact function $B_th$ is continuous by dominated convergence. [F1, F2, F3, step 2.1, given]

3.2 For each $0\le t<T$, set $\omega_f(\delta)=\sup_{x,x',x'' : d(x',x'')\le\delta}|f_{t+1}(x'\mid x)-f_{t+1}(x''\mid x)|$, which tends to zero by uniform continuity. The exact and empirical backward kernels have densities $f_{t+1}(x'\mid x)/q_{t+1}(x')$ relative to $\eta_t$ and $f_{t+1}(x'\mid x)/q_{t+1}^N(x')$ relative to $\eta_t^N$, respectively. Using [F2]–[F3], $q,q^N\in[a,b]$ from step 2.1, and that both filtering measures have mass one, their total-variation distance at $x',x''$ is at most $\omega_f(\delta)(a^{-1}+ba^{-2})$. Indeed, if $H(u,x)$ is a continuous integrand indexed by remaining coordinates $u$, and $x'_u$ denotes the next-state coordinate in $u$, then the difference of its integrals at $u,u'$ is bounded by $\sup_x|H(u,x)-H(u',x)|+\|H\|_\infty\|B(\cdot\mid x'_u)-B(\cdot\mid x'_{u'})\|_{\rm TV}$; uniform continuity of $H$ and the displayed kernel bound make this tend uniformly to zero as $u'\to u$. Thus each backward integration preserves a common bound and modulus of equicontinuity over the remaining compact coordinates, uniformly over all particle clouds. Since $T$ is finite, iterating this estimate yields one such class for every section in the finite telescoping sum. [F2, F3, step 2.1, given, algebra]

4.1 Telescope the finite backward product by replacing one empirical kernel at a time with its exact counterpart. The uniform moduli from step 3.2 put every possible section, over all clouds and remaining coordinates, in a uniformly bounded equicontinuous class on a compact metric space. Such a class has a finite sup-norm net: choose a finite $\delta$-net of the domain at a scale given by equicontinuity, quantize the bounded function values on those finitely many points, and retain one representative for each nonempty quantized pattern. Step 3.1 gives convergence for each fixed test in this finite net; since kernels are probabilities, the sup-norm approximation changes an integral difference by at most twice the net radius. The same finite-net argument and [F1] give convergence of the terminal empirical integrals uniformly over the resulting class. Thus every term in the finite telescoping sum tends to zero in probability, and the conditional path law $\widehat\psi_T^N$ converges weakly in the sense of [F4] to the exact product law $\psi_T$ in [F2]. [A1, F1, F2, F3, F4, step 2.1, step 3.1, step 3.2, given]

5.1 Conditional on the particle clouds, the $S_N$ backward paths are IID with law $\widehat\psi_T^N$. Their conditional sample mean has variance at most $\|\Phi\|_\infty^2/S_N$. Applying [F5] to its squared centered deviation shows that its difference from $\widehat\psi_T^N(\Phi)$ converges to zero in probability because $S_N\to\infty$. Combining this with step 4.1 proves the second limit. If $S_N$ is fixed, this variance bound need not vanish, so no convergence of the path average is asserted. [F3, F5, step 4.1, given] ∎
