---
id: lem-bootstrap-particle-filter-weak-consistency
kind: lemma
title: Finite-horizon bootstrap particle filters are weakly consistent
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-feynman-kac-path-targets-and-normalizers
  - alg-sequential-importance-resampling
  - alg-multinomial-and-residual-offspring-resampling
  - lem-feynman-kac-path-measures-satisfy-forward-recursion
  - def-weak-convergence-of-borel-probability-measures
  - thm-chebyshev-markov-inequality-for-the-integral
proof_strategy: direct
axiom_use: AC is inherited through the finite Feynman–Kac and particle-kernel interfaces. The bounded finite-time concentration argument adds no choice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing, Chapter 7, §§7.3–7.4"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §§3.4–3.5"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
---

## Statement

Assume AC. Let $E_0,\ldots,E_T$ be compact metric spaces, let $\mu_0$ be a probability
on $E_0$, and let $M_t$ be a Feller probability kernel from $E_{t-1}$ to
$E_t$. Here **Feller** means that $x\mapsto M_t h(x):=\int h(x')M_t(x,dx')$
is continuous for every bounded continuous real $h$ on $E_t$. Let each
potential $G_t:E_t\to\mathbb R$ be continuous and satisfy fixed bounds
$0<c\le G_t(x)\le C<\infty$. Let $P_t^M$ be the Markov path law and
$Z_t=\int\prod_{s=0}^tG_s(x_s)\,P_t^M(dx_{0:t})$ the Feynman–Kac normalizer
from [[def-feynman-kac-path-targets-and-normalizers]]. Since $P_t^M$ is a
probability, $c^{t+1}\le Z_t\le C^{t+1}$, so the normalized path target exists.
For the initial law and transitions use the
bootstrap proposals $\nu_0=\mu_0$, $R_t=M_t$, initial potential $G_0$, and
multinomial resampling in
[[alg-sequential-importance-resampling]]. Write $\eta_t$ for the last-state
marginal of $\gamma_t/Z_t$ and
$\eta_t^N=\sum_iw_t^i\delta_{X_t^i}$ for the particle filter's current
weighted empirical measure. For every fixed $t\le T$,
$$\eta_t^N\Rightarrow\eta_t\quad\hbox{in probability as }N\to\infty,$$
where convergence in probability means that for every bounded continuous
$h:E_t\to\mathbb R$, $\int h\,d\eta_t^N\to\int h\,d\eta_t$ in probability.
This is a fixed-horizon, positive-bounded-potential result; it asserts no
time-uniform bound and no particle central limit theorem.

## Facts & Assumptions

**Given:** The hypotheses in the Statement, a finite horizon, and the
multinomial bootstrap particle system.

[A1] AC is assumed by the finite-horizon Feynman–Kac path-law convention used to define the target. [[def-axiom-of-choice]]

[F1] The bootstrap specialization of the sequential importance-resampling algorithm uses IID initial particles, multinomial parent indices, conditionally independent propagation through $M_t$, and incremental weights $G_t(X_t^i)$. [[alg-sequential-importance-resampling]]

[F2] Multinomial parent indices are conditionally IID with the normalized input weights. [[alg-multinomial-and-residual-offspring-resampling]]

[F3] The normalized current-state marginals of the Feynman–Kac path measures obey $\eta_0(h)=\mu_0(G_0h)/\mu_0(G_0)$ and $\eta_t(h)=\eta_{t-1}(M_t(G_th))/\eta_{t-1}(M_tG_t)$. [[def-feynman-kac-path-targets-and-normalizers]] [[lem-feynman-kac-path-measures-satisfy-forward-recursion]]

[F4] Weak convergence of probability measures is convergence of integrals against every bounded continuous function. [[def-weak-convergence-of-borel-probability-measures]]

[F5] For nonnegative measurable $F$ and $a>0$, $\mu(F\ge a)\le a^{-1}\int F\,d\mu$ on any measure space. [[thm-chebyshev-markov-inequality-for-the-integral]]

## Proof

**Given:** The hypotheses in the Statement. The empirical measure before potential weighting at time $t$ is denoted $\nu_t^N=N^{-1}\sum_i\delta_{X_t^i}$.

1.1 At time zero, for any bounded continuous $h$, put $V_i=G_0(X_0^i)h(X_0^i)$. Expanding the squared centered sample average, the cross terms vanish by independence and the diagonal terms give $\mathbb E[(\nu_0^N(G_0h)-\mu_0(G_0h))^2]\le C^2\|h\|_\infty^2/N$. The same calculation with $V_i=G_0(X_0^i)$ gives the denominator bound $C^2/N$. Applying [F5] to each squared error shows both averages converge in probability to their $\mu_0$ integrals. The denominator limit is at least $c$, so the ratio $\eta_0^N(h)=\nu_0^N(G_0h)/\nu_0^N(G_0)$ converges in probability to $\mu_0(G_0h)/\mu_0(G_0)=\eta_0(h)$. [A1, F1, F3, F5, given]

1.2 Suppose $\eta_{t-1}^N(g)\to\eta_{t-1}(g)$ in probability for every bounded continuous $g$. Conditional on the previous particles, [F1]–[F2] make $X_t^1,\ldots,X_t^N$ IID with common law $\eta_{t-1}^N M_t$. For bounded continuous $h$, the squared error of their empirical average under this product law is the sum of $N$ diagonal centered terms divided by $N^2$; the cross terms vanish by independence, and each diagonal term is at most $\|h\|_\infty^2$. Thus its integral is at most $\|h\|_\infty^2/N$. Applying [F5] under the conditional product law and then integrating over the previous particles gives $\nu_t^N(h)-\eta_{t-1}^N(M_th)\to0$ in probability. The Feller hypothesis makes $M_th$ bounded continuous, so the induction hypothesis gives $\eta_{t-1}^N(M_th)\to\eta_{t-1}(M_th)$. [F1, F2, F4, F5, given]

2.1 Apply step 1.2 to $h$ and $G_th$, both bounded continuous. Then $\eta_t^N(h)=\nu_t^N(G_th)/\nu_t^N(G_t)$; the denominator converges to $\eta_{t-1}(M_tG_t)\ge c$. The ratio therefore converges in probability to $\eta_{t-1}(M_t(G_th))/\eta_{t-1}(M_tG_t)=\eta_t(h)$ by [F3]. Induction from step 1.1 proves the assertion for each fixed $t\le T$. The lower bound $c$ rules out zero normalizers, while the upper bound $C$ gives the finite variance bounds used above. [A1, F1, F3, step 1.1, step 1.2, given, algebra] ∎
