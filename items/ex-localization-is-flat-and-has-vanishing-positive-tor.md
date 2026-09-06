---
id: ex-localization-is-flat-and-has-vanishing-positive-tor
title: "Localization is flat and has vanishing positive Tor"
kind: example
status: published
origin: pipeline
deps: ["thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes", "def-left-and-right-flat-modules-over-an-arbitrary-ring"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Example

For $S=\{2^k:k\ge0\}$, the localization
$S^{-1}\mathbb Z=\mathbb Z[1/2]$ is flat and, for every abelian group $N$,
$\operatorname{Tor}^{\mathbb Z}_i(N,\mathbb Z[1/2])=0$ for every $i>0$.

## Verification

**Given:** a short exact sequence of abelian groups and the localization functor $S^{-1}(-)$.

1.1 Localization is exact because an equality $x/1=0$ is witnessed by some $2^k x=0$, and the same witness lifts exactness through a short exact sequence. [given]

2.1 The natural map $N\otimes_{\mathbb Z}\mathbb Z[1/2]\to S^{-1}N$, $n\otimes a/2^k\mapsto an/2^k$, is an isomorphism. [step 1.1, algebra]

3.1 Thus $-\otimes\mathbb Z[1/2]$ is exact, so the module is flat and its positive Tor groups vanish. [step 2.1, algebra] ∎
