---
page: stopping-times-and-optional-stopping
title: "Stopping Times and Optional Stopping"
status: draft
items: [def-discrete-stopping-time, lem-equivalent-event-tests-for-a-discrete-stopping-time, lem-first-hitting-time-of-an-adapted-process-is-a-stopping-time, lem-minimum-maximum-and-bounded-shifts-of-stopping-times, def-sigma-algebra-at-a-stopping-time, lem-stopping-time-sigma-algebra-is-a-sigma-algebra, def-stopped-random-variable-and-stopped-process, lem-stopped-random-variable-is-measurable-at-the-stopping-time, thm-a-stopped-martingale-is-a-martingale, thm-optional-sampling-for-bounded-stopping-times, thm-optional-stopping-under-uniform-integrability, thm-optional-stopping-with-integrable-time-and-bounded-increments, thm-optional-stopping-with-a-dominating-integrable-variable, cor-wald-first-equation-under-integrable-stopping, cor-gamblers-ruin-hitting-probability-from-optional-stopping, cor-gamblers-ruin-expected-duration, rem-optional-stopping-requires-a-passage-to-the-limit-hypothesis]
examples: []
---

Stopping times are defined by literal finite-horizon events, with boundedness kept distinct from almost-sure finiteness. Minimum, maximum, and shift formulas record the exact filtration in which each shifted time is stopping. A stopped random variable has an explicit cemetery value on $\{\tau=\infty\}$, while the finite stopped process never evaluates that value.

The sigma-algebra at a stopping time is verified directly, including $\mathcal F_\sigma\subseteq\mathcal F_\tau$ under pointwise order. Bounded optional sampling is proved through the finite predictable-transform identity and includes martingale equality plus both submartingale/supermartingale directions.

Each unbounded extension supplies its own valid limit mechanism: uniform integrability and a terminal conditional representation, bounded increments together with integrable time, or a direct integrable dominator. Wald's equation instead uses an absolute tail-series/Tonelli calculation and remains choice-free. Gambler's ruin derives both hitting probability and expected duration without assuming duration integrability in advance.
