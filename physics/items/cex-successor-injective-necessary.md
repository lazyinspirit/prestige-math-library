---
id: cex-successor-injective-necessary
kind: counterexample
title: "Injectivity of the successor is independent of the other Peano axioms"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-peano-system]
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Peano axioms (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Peano_axioms"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** (P2) injectivity of $\sigma$ follows from (P1) $0$ is not a
successor together with (P3) induction. The witness is the three-element system
$N = \{0, 1, 2\}$ with $\sigma(0) = 1$, $\sigma(1) = 2$, $\sigma(2) = 2$.

## Facts & Assumptions

**Given:** $N = \{0, 1, 2\}$, base point $0$, $\sigma(0) = 1$, $\sigma(1) = 2$, $\sigma(2) = 2$.

[L1] The Peano axioms ([[def-peano-system]]).

## Counterexample

**Proof technique:** direct.

1.1 P1 holds: the values of $\sigma$ are $\sigma(0) = 1$, $\sigma(1) = 2$, $\sigma(2) = 2$, none of which is $0$, so $\sigma(x) \neq 0$ for all $x$. [given, L1]

1.2 P3 holds: if $S \subseteq N$ with $0 \in S$ and $S$ closed under $\sigma$, then $0 \in S$ forces $1 = \sigma(0) \in S$, then $2 = \sigma(1) \in S$, so $S = \{0, 1, 2\} = N$; thus induction holds. [given, L1]

1.3 P2 fails: $\sigma(1) = 2 = \sigma(2)$ but $1 \neq 2$, so $\sigma$ is not injective. [given, L1]

2.1 So $(N, 0, \sigma)$ satisfies P1 and P3 but not P2, refuting the claim; note the failure permits the pathology $\sigma(2) = 2$ (a number that is its own successor) and a finite model in which distinct numerals collapse. [step 1.1, step 1.2, step 1.3] ∎
