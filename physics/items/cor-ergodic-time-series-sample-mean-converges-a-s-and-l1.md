---
id: cor-ergodic-time-series-sample-mean-converges-a-s-and-l1
kind: corollary
title: "Ergodic time-series sample means converge almost surely and in L1"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-strict-and-weak-stationarity-for-time-series
  - def-stationary-process-and-canonical-shift
  - def-ergodic-measure-preserving-system
  - def-axiom-of-choice
  - thm-stationary-process-birkhoff-ergodic-limit
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, complete 57-page lecture notes"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
    - title: "STAT 720 Time Series Analysis, South Carolina course notes by Wang, focused Sections 2.1–2.2"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Assume the Axiom of Choice. Let $X=(X_t)_{t\in\mathbb Z}$ be a real strictly
stationary process with $\mathbb E|X_0|<\infty$. Put
$Y_k:=X_{k+1}$ for $k\ge0$. If the canonical shift of the one-sided path law
of $Y$ is ergodic, then
$$\bar X_n:=\frac1n\sum_{t=1}^nX_t\longrightarrow\mathbb E[X_0]$$
almost surely and in $L^1$. Here strict stationarity on $\mathbb Z$ means
invariance of every finite-dimensional law under every common integer shift;
the one-sided ergodicity convention is that of
[[def-stationary-process-and-canonical-shift]] and
[[def-ergodic-measure-preserving-system]].

## Facts & Assumptions

**Given:** AC, a real process $X=(X_t)_{t\in\mathbb Z}$ whose finite-dimensional
laws are invariant under all common integer shifts, $\mathbb E|X_0|<\infty$,
and ergodicity of the canonical shift on the path law of
$Y_k=X_{k+1}$, $k\ge0$.

[A1] The Axiom of Choice (AC) asserts that every family of nonempty sets has
a choice function ([[def-axiom-of-choice]]).

[F1] [[def-strict-and-weak-stationarity-for-time-series]]: strict stationarity
on $\mathbb Z$ is invariance of all finite-dimensional laws under common
integer shifts.

[F2] [[def-stationary-process-and-canonical-shift]]: a one-sided strictly
stationary process has a canonical path law and left shift.

[F3] [[def-ergodic-measure-preserving-system]]: ergodicity means every strictly
invariant event is null or conull for the invariant path law.

[F4] [[thm-stationary-process-birkhoff-ergodic-limit]]: assuming AC, a real
strictly stationary integrable process has almost-sure and $L^1$ convergence
of its averages to the conditional-expectation limit; if its canonical shift
is ergodic, that limit is its mean.

## Proof

**Proof technique:** restrict the integer-indexed process to positive times
and apply the established one-sided Birkhoff result.

1.1 Define $Y_k=X_{k+1}$ for $k\ge0$. For any finite indices $0\le k_1<\cdots<k_r$ and shift $m\ge0$, [F1] applied to the times $k_1+1,\ldots,k_r+1$ gives $\mathcal L(Y_{k_1+m},\ldots,Y_{k_r+m})=\mathcal L(Y_{k_1},\ldots,Y_{k_r})$. Thus $Y$ is strictly stationary in the one-sided convention of [F2]. Taking $r=1$ shows $Y_0=X_1$ has the same law as $X_0$, so it is integrable; the canonical shift is ergodic by the given assumption. [F1, F2, given]

2.1 By [F3] the assumed ergodicity is exactly ergodicity of the canonical path shift required by [F4]. AC [A1], integrability from step 1.1, strict stationarity from step 1.1, and that ergodic shift satisfy the hypotheses of [F4]. Hence $n^{-1}\sum_{k=0}^{n-1}Y_k$ converges almost surely and in $L^1$ to $\mathbb E[Y_0]=\mathbb E[X_0]$. Since this average is exactly $n^{-1}\sum_{t=1}^nX_t=\bar X_n$, the asserted convergence follows. The choice assumption is inherited through [F4]'s conditional-expectation identification; this proof adds no other choice use. [A1, F3, F4, step 1.1, given] ∎