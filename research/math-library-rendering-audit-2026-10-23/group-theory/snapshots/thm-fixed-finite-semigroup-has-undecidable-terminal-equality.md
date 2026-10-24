---
id: thm-fixed-finite-semigroup-has-undecidable-terminal-equality
kind: theorem
title: "Fixed finite semigroup has undecidable terminal equality"
status: published
origin: pipeline
deps: ["lem-normalized-fixed-halting-machine-for-boone-simulation", "def-boone-machine-semigroup-and-augmented-configurations", "lem-boone-semigroup-histories-detect-halting"]
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Joseph J. Rotman, An Introduction to the Theory of Groups, Chapter 12, pp.428\u2013430, Theorem 12.5 and Corollary 12.6"
      url: "https://math.uchicago.edu/~shmuel/lg-readings/Joseph%20J.%20Rotman%2C%20The%20Word%20Problem%20.pdf"
---

## Statement

There is one fixed finite positive semigroup presentation, with one state letter on each side of every relation, for which deciding $C(w)=q$ on encoded initial words is impossible. In particular both unrestricted equality to $q$ and unrestricted word equality in this same semigroup are undecidable.

## Facts & Assumptions

**Given:** The fixed machine and semigroup already constructed; all inputs $w$ are binary finite words.

[F1] The fixed $T$ stops on $v(w)$ exactly for $w\in HALT_{TM}$, an undecidable language. ([[lem-normalized-fixed-halting-machine-for-boone-simulation]])

[F2] For this fixed $T$, the construction gives one finite positive semigroup presentation $\Gamma$, its fixed terminal letter $q$, and the computable initial words $C(w)=hq_{\rm start}v(w)h$. Every defining relation has exactly one state letter on each side. ([[def-boone-machine-semigroup-and-augmented-configurations]])

[F3] $C(w)=q$ in $\Gamma$ exactly when $T$ stops on $v(w)$. ([[lem-boone-semigroup-histories-detect-halting]])

## Proof

1.1 Fix the table of $T$ and hence the finite relation list of $\Gamma$ once. On input $w$, test emptiness, write the encoding of $s_0$ in the empty case and otherwise copy $w$, and prefix $h q_{\rm start}$ and suffix $h$. This computes $C(w)$ by finite-symbol scans; no part of the presentation depends on $w$. [F1, F2, construct]

2.1 A decider answering whether this $C(w)$ equals $q$ would answer yes exactly when $T$ stops on $v(w)$, hence exactly when $w\in HALT_{TM}$. Running it after the terminating encoding in step 1.1 would be a total decider of that language, contradicting [F1]. [F1, F3, step 1.1]

3.1 An unrestricted terminal-equality decider could be run on these initial words; an unrestricted two-word equality decider could be run on $(C(w),q)$. Each would give the impossible decider in step 2.1. The reductions include $C(\varepsilon)=h q_{\rm start}s_0h$. [step 1.1, step 2.1] ∎

## Source locator

Rotman, printed pp.428–430, Theorem 12.5 and Corollary 12.6. The direct composition above fixes the presentation before varying the input.
