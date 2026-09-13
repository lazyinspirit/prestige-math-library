---
page: stopping-times-and-optional-stopping-examples
title: "Stopping Times and Optional Stopping — Examples"
status: draft
items: [ex-first-exit-time-from-an-interval, ex-gamblers-ruin-probability-for-a-biased-walk, ex-expected-duration-of-simple-gamblers-ruin, ex-walds-equation-for-a-bounded-stopping-time, ex-stopping-a-likelihood-ratio-martingale, cex-a-last-exit-time-need-not-be-a-stopping-time, cex-optional-stopping-fails-for-unbounded-simple-random-walk-hitting-time, cex-almost-surely-finite-stopping-does-not-imply-integrable-stopping, cex-integrable-stopping-time-alone-does-not-suffice-for-arbitrary-martingale-increments]
examples: []
---

First exit, biased and symmetric gambler's ruin, a truncated Bernoulli waiting time, and a likelihood-ratio martingale show how the stopping and optional-sampling hypotheses are checked in practice. Every displayed probability or expectation is calculated, including the biased exponential martingale and Wald tail sum.

Three counterexamples isolate distinct failures. A last exit depends on a future toss and is not stopping. The simple-walk time to hit $1$ is almost surely finite but has infinite mean, so its stopped expectation changes. A nested-set martingale has an integrable stopping time of mean $2$ but unbounded increments and again changes expectation. Together they show why an explicit passage-to-the-limit hypothesis is indispensable.
