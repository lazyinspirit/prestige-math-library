---
page: adaptive-mcmc-convergence-and-limitations-examples
title: Adaptive MCMC convergence limits — Examples
status: published
items: []
examples:
  - cex-diminishing-adaptation-alone-does-not-imply-strong-law
  - ex-adaptive-mcmc-loss-of-containment
  - ex-uniformly-ergodic-adaptive-mcmc-family
---

## Summary

The refresh-kernel family on two states gives an explicit simultaneously
uniformly ergodic adaptive chain with diminishing adaptation. A second
deterministic schedule keeps every fixed kernel ergodic and has diminishing
adaptation, while the adaptation parameter approaches a zero refresh rate;
the adaptive marginal then remains separated from its target and containment
fails. The final construction uses a finite family of simultaneously uniformly
ergodic kernels. Rare active blocks make the state-dependent transition rule
favor state 0; the gate probability tends to zero, so diminishing adaptation
holds in probability. Almost surely infinitely many superlong active blocks
keep the running averages above the target along a subsequence, so a strong
law fails even under the two marginal-convergence hypotheses.
