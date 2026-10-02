---
id: rem-aperiodicity-is-needed-for-ordinary-time-convergence-not-ergodic-averages
kind: remark
title: "Aperiodicity separates ordinary convergence from ergodic averages"
status: published
origin: pipeline
landmark: false
deps:
  - thm-convergence-to-stationarity-for-irreducible-aperiodic-positive-recurrent-chains
  - thm-cesaro-convergence-for-irreducible-positive-recurrent-chains
  - thm-markov-chain-ergodic-theorem
  - thm-invariant-initial-law-makes-the-chain-stationary
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-10-02
  precheck: n/a
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition, §5.6"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition, §21.3 and Appendix C.1"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
---

## Remark

The three convergence results of this page do not assume the same hypotheses,
and the difference is exactly aperiodicity. This remark records the comparison;
it proves nothing new and asserts no convergence statement beyond the three
results it compares. The AC assumptions of those results are retained.

- [[thm-convergence-to-stationarity-for-irreducible-aperiodic-positive-recurrent-chains]]
  assumes, besides countability and the existence of an invariant probability
  $\pi$, that $p$ is **irreducible and aperiodic**, and concludes that the
  ordinary-time laws converge, $\lVert p^{(n)}(x,\cdot)-\pi\rVert_{\mathrm{TV}}\to0$
  for every starting state $x$.
- [[thm-cesaro-convergence-for-irreducible-positive-recurrent-chains]] assumes
  only **irreducibility and positive recurrence**, with no aperiodicity
  hypothesis, and concludes the weaker Cesàro statement
  $\frac1n\sum_{k=0}^{n-1}p^{(k)}(x,y)\to\pi(y)$ for every pair $x,y$.
- [[thm-markov-chain-ergodic-theorem]] makes the same
  irreducibility-and-positive-recurrence assumption on the process rather than
  on the $n$-step laws, and concludes the almost-sure pathwise statement
  $\frac1n\sum_{k=0}^{n-1}f(X_k)\to\sum_y\pi(y)f(y)$ for every $\pi$-integrable
  $f$ and every deterministic start.

## Why aperiodicity cannot simply be dropped

The ordinary-time conclusion of the first result is genuinely false without its
aperiodicity hypothesis, and the companion page computes two obstructions with
no aperiodicity and no randomness:

- the deterministic two-state alternation with $P(0,1)=P(1,0)=1$ is
  irreducible on a finite state space, hence positive recurrent, with
  $\pi=(1/2,1/2)$; from state $0$ its law is $\delta_0$ at even times and
  $\delta_1$ at odd times, so $\lVert p^{(n)}(0,\cdot)-\pi\rVert_{\mathrm{TV}}=1/2$
  for every $n$ and the sequence of laws does not converge at all;
- the deterministic directed three-cycle is irreducible with uniform
  $\pi=(1/3,1/3,1/3)$ and $\lVert p^{(n)}(0,\cdot)-\pi\rVert_{\mathrm{TV}}=2/3$
  for every $n$.

In both cases the failure has the same cause: the positive return times of a
state are contained in a proper arithmetic progression $d\mathbb N$ with
$d\ge2$, so the $n$-step law keeps cycling through the residue classes of $n$
modulo $d$ instead of settling. The two ergodic-average results are unaffected,
because averaging over all $0\le k<n$ samples every residue class with
asymptotic frequency $1/d$; for the two examples just named the Cesàro averages
equal $\pi$ for every $n$ divisible by the period and converge to $\pi$ in
general, and the empirical frequencies of the visited states converge to
$1/d$, which is the stationary mass of each state.

Aperiodicity is needed for the ordinary-time convergence theorem from every
deterministic start; it is not needed for the Cesàro or almost-sure ergodic
averages. A stationary start is a different assertion: if the initial law is
$\pi$, then $\mathcal L(X_n)=\pi$, equivalently $\pi p^{(n)}=\pi$, for every
$n\ge0$, even for a periodic chain
([[thm-invariant-initial-law-makes-the-chain-stationary]]). This marginal
identity does not assert $p^{(n)}(x,\cdot)=\pi$ for a deterministic start $x$.
