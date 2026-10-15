---
dependency_level: 4
id: thm-mcmc-clt-sufficient-regimes
kind: theorem
title: Sufficient MCMC CLT regimes
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-axiom-of-choice
  - def-general-state-aperiodic-markov-chain
  - def-general-state-reversibility-by-symmetric-flow-measure
  - def-geometric-and-uniform-ergodicity-for-mcmc-clt
  - def-harris-recurrent-markov-chain
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-long-run-variance-for-stationary-markov-chain
  - def-measure-kernel-and-probability-kernel
  - def-phi-irreducible-chain
  - def-polynomial-ergodicity-with-integrable-rate-envelope
  - def-total-variation-distance-for-probability-laws
  - lem-geometric-reversible-chain-rho-mixing
  - lem-geometric-total-variation-rate-controls-strong-mixing
  - lem-harris-geometric-ergodicity-has-integrable-rate-envelope
  - lem-measurable-observation-does-not-increase-mixing-coefficients
  - lem-uniform-ergodicity-controls-uniform-mixing
  - lem-zero-long-run-variance-gives-degenerate-clt
  - thm-chapman-kolmogorov-equations
  - thm-geometric-series
  - thm-invariant-initial-law-makes-the-chain-stationary
  - thm-markov-property-for-bounded-future-path-functionals
  - thm-rho-mixing-clt-for-square-integrable-sequences
  - thm-strong-mixing-clt-with-moment-conditions
  - thm-taking-out-what-is-known
  - thm-uniform-mixing-clt-for-square-integrable-sequences
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
    - title: Galin L. Jones, On the Markov Chain Central Limit Theorem, Theorem 9 and Corollaries 1–5
      url: https://arxiv.org/pdf/math/0409112
    - title: Charles J. Geyer, Markov Chain Monte Carlo Lecture Notes, §§4.8–4.9
      url: https://www.stat.umn.edu/geyer/f05/8931/n1998.pdf
    - title: Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms, §5
      url: https://www.probability.ca/jeff/ftpdir/probsurv.pdf
axiom_use: AC is explicit in the unchanged Statement and used through the supplied local probability, path-space and martingale interfaces; no stronger principle is introduced.
proof_strategy: direct
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

## Facts & Assumptions

**Given:** AC, the stationary Harris-ergodic chain and centered real function in the Statement, and any one of its six sufficient regimes.

[A1] [[def-axiom-of-choice]] is assumed by the local probability, conditional-expectation and sequence-CLT suppliers. The Statement already includes this hypothesis.

[F1] [[lem-measurable-observation-does-not-increase-mixing-coefficients]] makes $Y_k=f(X_k)$ stationary and bounds each of its mixing coefficients by the corresponding chain coefficient.

[F2] [[def-polynomial-ergodicity-with-integrable-rate-envelope]] gives the pointwise polynomial total-variation bound with $\pi(M)<\infty$. [[def-geometric-and-uniform-ergodicity-for-mcmc-clt]] gives the geometric bound with finite measurable envelope, or with bounded envelope in the uniform case.

[F3] The bounded-future Markov property and iterated-kernel identity are [[thm-markov-property-for-bounded-future-path-functionals]] and [[thm-chapman-kolmogorov-equations]]. The event-supremum convention is [[def-total-variation-distance-for-probability-laws]], and known factors can be taken out using [[thm-taking-out-what-is-known]].

[F4] [[thm-strong-mixing-clt-with-moment-conditions]] proves absolute covariance summability and the normal limit for bounded observations with summable alpha, for the stated $L^{2+\delta}$ alpha-summability condition, or for exponential alpha with the logarithmic moment.

[F5] [[lem-harris-geometric-ergodicity-has-integrable-rate-envelope]] supplies an integrable geometric envelope under the stated Harris, irreducibility and aperiodicity hypotheses. [[lem-geometric-total-variation-rate-controls-strong-mixing]] then bounds alpha by that geometric rate.

[F6] [[lem-geometric-reversible-chain-rho-mixing]] gives exponential rho for a stationary reversible geometrically ergodic chain under the stated recurrence hypotheses. [[thm-rho-mixing-clt-for-square-integrable-sequences]] proves the covariance-summable $L^2$ CLT when rho is summable.

[F7] [[lem-uniform-ergodicity-controls-uniform-mixing]] gives exponential phi under uniform ergodicity. [[thm-uniform-mixing-clt-for-square-integrable-sequences]] proves the covariance-summable $L^2$ CLT when the square roots of phi are summable.

[F8] [[lem-zero-long-run-variance-gives-degenerate-clt]] handles zero covariance long-run variance by a finite covariance expansion. [[def-long-run-variance-for-stationary-markov-chain]] identifies the covariance sum only after absolute convergence and the CLT have been established.

[F9] [[thm-geometric-series]] proves convergence of $\sum_{j\ge0}q^j$ for every real $0\le q<1$.

## Proof

**Given:** The hypotheses and any one of the six regimes in the Statement.

1.1 Put $Y_k=f(X_k)$. This is a centered stationary real sequence by [F1]. It is square-integrable in every case: boundedness suffices in case 1, the power moment suffices in cases 2 and 3 on the probability space, and cases 5 and 6 assume $L^2$. In case 4, split at $|f|=e$: on the bounded part $f^2\le e^2$, and on the other part $f^2\le f^2\log|f|$, so the stated logarithmic moment implies $L^2$. All sequence suppliers below therefore have their centering, stationarity and second-moment premises. [A1, F1, given, algebra]

1.2 Suppose a pointwise rate $\|P^n(x,\cdot)-\pi\|_{\mathrm{TV}}\le M(x)a_n$ is available with $\pi(M)<\infty$. For any past event $A\in\sigma(X_0,\ldots,X_j)$ and separated future event $B\in\sigma(X_{j+n},X_{j+n+1},\ldots)$, [F3] supplies $0\le h\le1$ with $E[\mathbf1_B\mid\sigma(X_0,\ldots,X_j)]=P^nh(X_j)$ and $P(B)=\pi(h)$. Approximating $h$ uniformly by dyadic averages of its superlevel indicators gives $|P^nh(x)-\pi(h)|\le\|P^n(x,\cdot)-\pi\|_{\mathrm{TV}}$: each indicator discrepancy is bounded by the defining event supremum. Consequently $|P(A\cap B)-P(A)P(B)|=|E[\mathbf1_A(P^nh(X_j)-\pi(h))]|\le\pi(M)a_n.$ Taking the suprema and then applying [F1] gives $\alpha_Y(n)\le\alpha_X(n)\le\pi(M)a_n$. No measurability of an uncountable total-variation supremum is needed, because its measurable envelope bounds each event discrepancy pointwise. [A1, F1, F2, F3, algebra]

2.1 In case 1, take $a_n=n^{-m}$ in step 1.2. Since $m>1$, grouping $2^j\le n<2^{j+1}$ bounds each block of $\sum_n n^{-m}$ by $2^{-j(m-1)}$; [F9] makes the resulting geometric series finite. Thus $\sum_n\alpha_Y(n)<\infty$. The bounded branch of [F4] gives absolute covariance summability and the asserted normal limit for the normalized sums of $Y$. This uses the whole approved range $m>1$. [F2, F4, F9, step 1.1, step 1.2, given, algebra]

2.2 In case 2, put $\theta=\delta/(2+\delta)$. Step 1.2 gives $\alpha_Y(n)^\theta\le\pi(M)^\theta n^{-m\theta}$. The exact assumption $m\delta>2+\delta$ says $m\theta>1$, so the same dyadic argument and [F9] make these bounds summable. The power-moment branch of [F4] proves the same covariance and distribution conclusions. [F2, F4, F9, step 1.1, step 1.2, given, algebra]

2.3 In cases 3 and 4, [F5] replaces the possibly nonintegrable original envelope by a finite integrable geometric envelope with some rate $a\in(0,1)$. Thus $\alpha_Y(n)\le Ca^n$ by [F1] and [F5]. In case 3, every positive power of this bound is summable, so the $L^{2+\delta}$ branch of [F4] applies. In case 4, its exponential/logarithmic-moment branch applies directly. Each yields absolute covariance summability and the normal limit without strengthening the given moment assumption. [F1, F4, F5, F9, step 1.1, given, algebra]

2.4 In case 5, reversibility and the geometric-rate assumptions allow [F6] to give $\rho_X(n)\le Cr^n$ for some $r<1$. By [F1], $\rho_Y(n)\le\rho_X(n)$, so its series is summable. The $L^2$ rho-mixing theorem in [F6] proves the required covariance-summable CLT. [A1, F1, F6, F9, step 1.1, given, algebra]

2.5 In case 6, [F7] gives $\phi_X(n)\le Cr^n$ for some $r<1$. By [F1], $\sum_n\sqrt{\phi_Y(n)}\le\sqrt C\sum_n r^{n/2}<\infty$. The uniform-mixing $L^2$ theorem in [F7] therefore gives the same conclusions. [A1, F1, F7, F9, step 1.1, given, algebra]

3.1 In all six cases the covariance series is absolutely convergent, its sum is finite and nonnegative, and the normalized sum converges to the centered normal with precisely that covariance sum. If the sum is zero, [F8] also proves the degenerate limit directly in $L^2$, so no division by an asymptotic variance is made. Stationarity makes $\sum_{k=0}^{n-1}Y_k$ and $\sum_{k=1}^{n}Y_k$ equal in law. The established limit is therefore exactly the displayed limit in the Statement, and only now does [F8] identify its variance as $\sigma_f^2$. [F1, F4, F6, F7, F8, step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, algebra] ∎
