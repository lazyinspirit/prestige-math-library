---
id: thm-mcmc-clt-sufficient-regimes
kind: theorem
title: Sufficient MCMC CLT regimes
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-axiom-of-choice
  - cor-canonical-markov-chain-on-path-space
  - def-general-state-aperiodic-markov-chain
  - def-geometric-and-uniform-ergodicity-for-mcmc-clt
  - def-harris-recurrent-markov-chain
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-long-run-variance-for-stationary-markov-chain
  - def-ergodic-measure-preserving-system
  - def-measure-preserving-transformation-and-system
  - def-mixing-coefficients-for-stationary-markov-chain
  - def-measure-kernel-and-probability-kernel
  - def-moments-variance-and-covariance
  - def-phi-irreducible-chain
  - def-polynomial-ergodicity-with-integrable-rate-envelope
  - def-general-state-reversibility-by-symmetric-flow-measure
  - def-time-homogeneous-markov-chain-with-transition-kernel
  - thm-invariant-initial-law-makes-the-chain-stationary
  - lem-geometric-reversible-chain-rho-mixing
  - lem-geometric-total-variation-rate-controls-strong-mixing
  - lem-harris-geometric-ergodicity-has-integrable-rate-envelope
  - lem-measurable-observation-does-not-increase-mixing-coefficients
  - lem-stationary-chain-tv-convergence-implies-strong-mixing
  - lem-uniform-ergodicity-controls-uniform-mixing
  - lem-zero-long-run-variance-gives-degenerate-clt
  - thm-general-state-markov-chain-convergence-under-recurrence-conditions
  - thm-rho-mixing-clt-for-square-integrable-sequences
  - thm-strong-mixing-clt-with-moment-conditions
  - thm-uniform-mixing-clt-for-square-integrable-sequences
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Galin L. Jones, On the Markov Chain Central Limit Theorem, Theorem 9 and Corollaries 1–5"
      url: "https://arxiv.org/pdf/math/0409112"
    - title: "Charles J. Geyer, Markov Chain Monte Carlo Lecture Notes, §§4.8–4.9"
      url: "https://www.stat.umn.edu/geyer/f05/8931/n1998.pdf"
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms, §5"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
verification:
  precheck: n/a
axiom_use: "The statement combines results whose local interfaces declare their axiom uses. The missing proof cannot be treated as evidence of an axiom-free derivation."
---

## Statement

Assume AC. Let $(\mathsf X,\mathcal X)$ be countably generated, let $P$ be a
$\phi$-irreducible probability kernel ([[def-phi-irreducible-chain]], [[def-measure-kernel-and-probability-kernel]]), aperiodic
([[def-general-state-aperiodic-markov-chain]]), and Harris recurrent relative
to $\phi$ ([[def-harris-recurrent-markov-chain]]) with invariant probability
$\pi$, and let $(X_k)_{k\ge0}$ be a stationary
$P$-chain whose canonical left shift preserves its path law and whose
shift-invariant measurable events have probability zero or one. We take the
initial law to be $\pi$, which implies stationarity by
[[thm-invariant-initial-law-makes-the-chain-stationary]]. Let
$f:\mathsf X\to\mathbb R$
be Borel with $\pi(f)=0$. Define
$\sigma_f^2=\pi(f^2)+2\sum_{k\ge1}\operatorname{Cov}_{\pi}(f(X_0),f(X_k))$
only when the covariance series is absolutely convergent and the CLT is
established, as in
[[def-long-run-variance-for-stationary-markov-chain]].

Each of the following six conditions is sufficient for absolute convergence
of the covariance series and
$$\frac1{\sqrt n}\sum_{k=0}^{n-1}f(X_k)\Rightarrow N(0,\sigma_f^2):$$

1. $P$ has polynomial total-variation rate of order $m>1$ with an integrable
   envelope ([[def-polynomial-ergodicity-with-integrable-rate-envelope]]),
   and $f$ is essentially bounded under $\pi$ (there is $B<\infty$ with
   $|f|\le B$ $\pi$-almost everywhere).
2. $P$ has polynomial total-variation rate of order $m>0$ with an integrable
   envelope ([[def-polynomial-ergodicity-with-integrable-rate-envelope]]),
   $f\in L^{2+\delta}(\pi)$ for some $\delta>0$
   ([[def-l-p-space-as-a-quotient-by-null-functions]]), and
   $m\delta>2+\delta$.
3. $P$ is geometrically ergodic ([[def-geometric-and-uniform-ergodicity-for-mcmc-clt]]) and $f\in L^{2+\delta}(\pi)$ for some
   $\delta>0$ ([[def-l-p-space-as-a-quotient-by-null-functions]]).
4. $P$ is geometrically ergodic ([[def-geometric-and-uniform-ergodicity-for-mcmc-clt]]) and
   $\pi\bigl(f^2\log^+|f|\bigr)<\infty$, with
   $0\log^+0:=0$.
5. $P$ is geometrically ergodic ([[def-geometric-and-uniform-ergodicity-for-mcmc-clt]]), reversible with respect to $\pi$ in the symmetric-flow sense ([[def-general-state-reversibility-by-symmetric-flow-measure]]), and $f\in L^2(\pi)$ ([[def-l-p-space-as-a-quotient-by-null-functions]]).
6. $P$ is uniformly ergodic ([[def-geometric-and-uniform-ergodicity-for-mcmc-clt]]) and $f\in L^2(\pi)$ ([[def-l-p-space-as-a-quotient-by-null-functions]]).

In case 4, the displayed logarithmic moment implies $f\in L^2(\pi)$: on $\{|f|\le e\}$ one has $f^2\le e^2$, and on $\{|f|>e\}$ one has $f^2\le f^2\log|f|$.

When $\sigma_f^2=0$, the zero-variance lemma
[[lem-zero-long-run-variance-gives-degenerate-clt]] gives the degenerate
normal limit from absolute covariance summability. Finite variance of $f$
alone is not one of the sufficient conditions.

## Proof status

No proof of the six imported CLT criteria is supplied locally. The exact
source regimes are retained, including the polynomial rate-envelope and
moment hypotheses, but their strong-mixing, rho-mixing, uniform-mixing and
spectral-gap limit theorems remain proof escalations. This item also depends
on the batch-35 general-state convergence theorem; its inspected draft has an
undefined [F9] (the Facts list [F1]–[F8] and [A1]) and a dependency mismatch:
its frontmatter lists
`lem-finite-measure-sets-are-approximable-by-a-generating-algebra`, while its
proof's [F7] cites
`lem-finite-measure-sets-are-approximable-by-a-countable-generating-algebra`.
Both supplier items currently exist; the countable version is the one whose
hypotheses match the stated countably generated setting. The theorem body and
batch-35 manifest both currently label `dependency_level: 4`. These
unresolved proof-reference defects prevent claiming readiness for the
Harris-to-mixing reduction.
