---
page: rejection-sampling
title: Rejection sampling
status: published
items:
  - alg-rejection-sampling
  - thm-counting-measure-integral-is-nonnegative-series
  - thm-rejection-sampling-has-target-acceptance-law
  - thm-rejection-sampling-expected-proposal-count-under-finite-envelope
examples: []
---

## Scope

Rejection sampling draws proposals from a normalized proposal law and accepts
each proposal according to a target-to-proposal density ratio bounded by a
finite envelope. The algorithm takes ideal independent proposal and uniform
draws as inputs. The local results compute the accepted subdensity, normalize
it to obtain the target law, and determine both the acceptance probability
and expected number of proposals.

The same calculation covers nonnegative unnormalized target and proposal
shapes with positive finite normalizers. A local counting-measure result
identifies the discrete integral with the nonnegative series, supporting the
tail-mismatch example. Rejection sampling gives acceptance probability
$Z_f/(cZ_g)$ and target density $\tilde f/Z_f$. A finite envelope is essential:
a proposal with lighter tails can fail to dominate the target by every finite
constant. The declared prerequisite page
[[iid-monte-carlo-integration-and-error]] remains an ordering dependency; the
algorithm's exact IID draw interface is stated locally.
