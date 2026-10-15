---
id: thm-discrete-ville-inequality
kind: theorem
title: Discrete Ville inequality and anytime threshold validity
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-discrete-stopping-time
  - def-nonnegative-test-supermartingale
  - lem-finite-horizon-test-supermartingale-crossing-bound
  - thm-continuity-from-below-for-measures
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Steven R. Howard, Aaditya Ramdas, Jon McAuliffe, and Jasjeet Sekhon, Time-uniform Chernoff bounds via nonnegative supermartingales, Probability Surveys 17 (2020), 257–317"
      url: https://arxiv.org/pdf/1808.03204
      locator: "§2.3, Lemma 1 (printed p. 14); §6.1, proof of Lemma 1 (printed pp. 44–45). The source proves a first-crossing probability bound by bounded optional stopping and a finite-horizon limit."
    - title: "R. L. Wolpert, STA 205: Martingales, Duke University lecture notes (2010)"
      url: https://www2.stat.duke.edu/courses/Fall10/sta205/lec/topics/mg.pdf
      locator: "§1, discrete optional stopping (PDF p. 1); §5, Theorem 4 and proof (PDF pp. 11–13), stated for martingales. The local theorem handles supermartingales using the published optional-sampling supplier."
---

## Statement

Assume AC. Let $\mathcal P_0$ be a family of probability laws and let
$M=(M_t)_{t\in\mathbb N_0}$ be a nonnegative test supermartingale for
$\mathcal P_0$. For every $P\in\mathcal P_0$ and $\alpha\in(0,1)$, define
$$\tau_\alpha=\inf\{t\ge0:M_t\ge1/\alpha\},\qquad\inf\varnothing=\infty.$$
Then
$$P\!\left(\sup_{t\ge0}M_t\ge\frac1\alpha\right)\le\alpha,\qquad P(\tau_\alpha<\infty)\le\alpha.$$
Moreover, for every discrete stopping time $\sigma$,
$$P(\sigma<\infty,\ M_\sigma\ge1/\alpha)\le\alpha,$$
where the event involving $M_\sigma$ is restricted to $\{\sigma<\infty\}$.

## Facts & Assumptions

**Given:** Assume AC. Let $\mathcal P_0$ be a null family, let $M$ be a
nonnegative test supermartingale for it, and fix $P\in\mathcal P_0$ and
$\alpha\in(0,1)$.

[F1] [[lem-finite-horizon-test-supermartingale-crossing-bound]]: for every $a>0$ and finite $N$, $P(\max_{0\le t\le N}M_t\ge a)\le1/a$.

[F2] [[thm-continuity-from-below-for-measures]]: if measurable events $A_N$ increase, then $P(\bigcup_NA_N)=\lim_NP(A_N)$.

[F3] [[def-nonnegative-test-supermartingale]]: under every null law, $M$ is adapted, integrable, nonnegative almost surely at every time, a supermartingale, and has $\mathbb E_PM_0\le1$.

[F4] [[def-discrete-stopping-time]]: for each $n$, $\{\sigma\le n\}\in\mathcal F_n$; a stopping time takes values in $\mathbb N_0\cup\{\infty\}$.

[A1] AC is the axiom used in [F1] through the test-supermartingale definition and bounded optional sampling ([[def-axiom-of-choice]]).

## Proof

1.1 For any $\gamma\in(0,1)$, set $\tau_\gamma=\inf\{t\ge0:M_t\ge1/\gamma\}$ and $A_N=\{\tau_\gamma\le N\}=\{\max_{0\le t\le N}M_t\ge1/\gamma\}$. The events $A_N$ increase and their union is $\{\tau_\gamma<\infty\}=\{\exists t\ge0:M_t\ge1/\gamma\}$. [given, F1, F3, A1, choose]

2.1 By [F1], $P(A_N)\le\gamma$ for each $N$; [F2] gives $P(\tau_\gamma<\infty)=\lim_NP(A_N)\le\gamma$. [F1, F2, step 1.1]

3.1 Put $\gamma_n=\alpha+(1-\alpha)/(n+1)$ for $n\ge1$. Then $\gamma_n\downarrow\alpha$ and $1/\gamma_n<1/\alpha$. The countable-supremum event $H=\{\sup_{t\ge0}M_t\ge1/\alpha\}$ equals $\bigcap_{n\ge1}\{\tau_{\gamma_n}<\infty\}$: if the supremum is at least $1/\alpha$, each strictly lower threshold $1/\gamma_n$ is exceeded by some process value; conversely, crossing every such threshold forces the supremum to be at least their limit $1/\alpha$. Thus $H$ is measurable and, by step 2.1, $P(H)\le\gamma_n$ for every $n$. [given, F3, step 2.1, choose, algebra]

4.1 Letting $n\to\infty$ in step 3.1 gives $P(H)\le\alpha$. Taking $\gamma=\alpha$ in step 2.1 also gives $P(\tau_\alpha<\infty)\le\alpha$. [step 2.1, step 3.1, algebra]

5.1 For a discrete stopping time $\sigma$, $\{\sigma<\infty,M_\sigma\ge1/\alpha\}=\bigcup_{t\ge0}(\{\sigma=t\}\cap\{M_t\ge1/\alpha\})\subseteq\{\tau_\alpha<\infty\}$. The event is measurable by [F3]–[F4], and step 4.1 bounds its probability by $\alpha$. [F3, F4, step 4.1, algebra] ∎

## Remarks

The all-time crossing event $\{\tau_\alpha<\infty\}$ and the supremum event
$\{\sup_tM_t\ge1/\alpha\}$ are not identified here. The proof uses lower
thresholds for the supremum event because a supremum need not be attained.
