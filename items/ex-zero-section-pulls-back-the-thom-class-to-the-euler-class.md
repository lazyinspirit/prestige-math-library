---
id: ex-zero-section-pulls-back-the-thom-class-to-the-euler-class
kind: example
title: "Zero-section pullback is the Euler class"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-thom-class-and-thom-isomorphism-interface", "def-euler-class-by-zero-section-pullback-of-the-thom-class", "def-axiom-of-choice"]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "printed pp.194–196; disk/sphere models, Thom normalization; stabilization on p.196"
---

## Example

Assume AC. For an oriented bundle in the AT Thom scope, its zero-section pullback is $e(E)=s^*j^*u_E$, where $j^*:H^r(D(E),S(E);R)\to H^r(D(E);R)$ is the relative-to-absolute map. This verifies the DT interface with the AT Euler construction.

## Facts & Assumptions

**Given:** The bundle, orientation, and AC as in [[def-axiom-of-choice]].

[F1] [[def-thom-class-and-thom-isomorphism-interface]] uses the uniquely normalized AT Thom class.

[F2] [[def-euler-class-by-zero-section-pullback-of-the-thom-class]] defines its Euler class by that composite.

## Verification

1.1 Both [F1] and [F2] use the same disk/sphere pair and the same fiber generators, so Thom uniqueness identifies their classes: the interface class of [F1] is the normalized class fixed by [F2]. Applying the relative-to-absolute map $j^*$ and then the zero-section map $s^*$ gives exactly $e(E)$, rather than an ill-typed direct pullback of a relative class. [F1, F2]

2.1 For rank zero with standard unit orientation $u_E=1$ and $j^*,s^*$ are identities, so $e(0_B)=1$; a different supplied orientation $o$ gives $e(0_B,o)=o$, the componentwise unit. For a positive-rank trivial bundle, choose a continuous unit-length section $s_1$ of the disk bundle (normalize a nowhere-zero section given by the supplied trivialization). The sections $s_t=t\,s_1$, $0\le t\le1$, are homotopic in the disk bundle, so they pull $j^*u_E$ back to the same class; at $t=1$ the section factors through $S(E)$, where $i^*j^*u_E=0$ by exactness of the pair sequence. Hence the Euler class of a positive-rank trivial bundle is zero. Mod two the same definition requires no chosen orientation, and AC is inherited from the general AT suppliers. [F1, F2, step 1.1] ∎
