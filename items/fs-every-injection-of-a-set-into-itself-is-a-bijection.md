---
id: fs-every-injection-of-a-set-into-itself-is-a-bijection
kind: false-statement
title: "FALSE: every injection of a set into itself is a bijection"
status: published
origin: session
deps: [thm-subset-of-a-finite-set, lem-pigeonhole, thm-omega-is-peano-system,
       lem-nat-nonzero-is-successor, def-countable, def-injection-surjection-bijection,
       def-equinumerous, def-finite-cardinality, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Dedekind-infinite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dedekind-infinite_set"
    - title: "Surjective function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Surjective_function"
    - title: "Pigeonhole principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pigeonhole_principle"
pipeline_run: null
---

## Statement

**FALSE.** The statement

> every injective function $f : A \to A$ from a set to itself is a bijection

for all sets $A$.

The claim is plausible because it is **true for finite $A$**: that is clause 4 of
[[thm-subset-of-a-finite-set]]. What is easy to miss is that the proof of that
clause uses finiteness twice, at the transport
$\lvert f[A]\rvert = \lvert A\rvert$ and at the step "a subset of the same
cardinality as the whole is the whole", and neither survives without it.

## Facts & Assumptions

**Given:** The von Neumann naturals $\mathbb{N}$ with $0 = \varnothing$ and successor $\sigma$ ([[def-natural-numbers]]), and $A := \mathbb{N}$, $f := \sigma$.

[L1] $(\mathbb{N},0,\sigma)$ satisfies the Peano axioms: $\sigma(n) \ne 0$ for every $n$, and $\sigma$ is injective ([[thm-omega-is-peano-system]]).

[L2] Every nonzero natural is a successor ([[lem-nat-nonzero-is-successor]]), so the image of $\sigma$ is exactly $\mathbb{N}\setminus\{0\}$.

[L3] Injection, surjection, bijection ([[def-injection-surjection-bijection]]): $f$ is surjective when its image is the whole codomain, and bijective when injective and surjective.

[L4] For **finite** $A$, every injection $A \to A$ is a bijection ([[thm-subset-of-a-finite-set]], clause 4), the proof going through $\lvert f[A]\rvert = \lvert A\rvert$ and clause 3 of the same theorem ([[def-finite-cardinality]]).

[L5] $\mathbb{N}$ is not finite: $\mathbb{N} \not\approx n$ for every natural $n$ ([[lem-pigeonhole]], claim 4, [[def-countable]], [[def-equinumerous]]).

## Refutation

**Proof technique:** direct.

1.1 The witness is the successor map $\sigma : \mathbb{N} \to \mathbb{N}$. It is injective by [L1]. [given, L1, L3]

2.1 It is not surjective: $0$ is not in its image, since $\sigma(n) \ne 0$ for every $n$ by [L1]. Equivalently, its image is $\mathbb{N}\setminus\{0\}$ by [L2], a proper subset of $\mathbb{N}$. [step 1.1, L1, L2, L3]

3.1 So $\sigma$ is an injection of $\mathbb{N}$ into itself that is not a bijection, and the displayed statement is false. [step 1.1, step 2.1, L3]

4.1 Finiteness is exactly the missing hypothesis. By [L4] the statement is true whenever $A$ is finite, and $\mathbb{N}$ is not finite by [L5]. In the proof of [L4] the hypothesis is spent at the transport of cardinality along the bijection $A \to f[A]$, which presupposes $A$ finite, and then at the conclusion $f[A] = A$ from $\lvert f[A]\rvert = \lvert A\rvert$, which is the clause of [[thm-subset-of-a-finite-set]] that fails here: $\sigma[\mathbb{N}]$ is a proper subset of $\mathbb{N}$ equinumerous with it. [step 3.1, L4, L5] ∎

## Remarks

- **A set for which the statement fails is called Dedekind-infinite**, and the
  refutation above exhibits $\mathbb{N}$ as one. Claim 5 of [[lem-pigeonhole]] says that no
  natural number is Dedekind-infinite, which is the finite half of the same
  picture.

- **The relation between the two notions of infinity** — "not finite" and
  "Dedekind-infinite" — is a genuine question of set theory without choice, and
  it is treated on the countability page rather than here.

- **The surjective half fails too.** The map $\mathbb{N} \to \mathbb{N}$ sending
  $0$ and $1$ to $0$ and $n \ge 2$ to $n-1$ is surjective and not injective, so
  neither half of clause 4 of [[thm-subset-of-a-finite-set]] survives the loss of
  finiteness.
