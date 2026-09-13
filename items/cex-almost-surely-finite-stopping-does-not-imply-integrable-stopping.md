---
id: cex-almost-surely-finite-stopping-does-not-imply-integrable-stopping
kind: counterexample
title: Almost-surely finite stopping does not imply integrable stopping
status: draft
origin: pipeline
deps: [cex-optional-stopping-fails-for-unbounded-simple-random-walk-hitting-time, thm-optional-stopping-with-integrable-time-and-bounded-increments, def-axiom-of-choice]
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Durrett, Probability: Theory and Examples, 5th ed., optional stopping counterexamples in §4.8", url: "https://web.archive.org/web/20240514054731if_/https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}
---

## Statement

Assume AC. The first time $\tau$ that a simple symmetric random walk started at zero hits $1$ is almost surely finite but satisfies $\mathbb E\tau=\infty$.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[cex-optional-stopping-fails-for-unbounded-simple-random-walk-hitting-time]] proves $\tau<\infty$ almost surely and computes $S_\tau=1$, $S_0=0$.

[F2] [[thm-optional-stopping-with-integrable-time-and-bounded-increments]] would apply if $\tau$ were integrable.

[F3] [[def-axiom-of-choice]] is inherited from the martingale results.

## Proof

1.1 F1 proves that $\tau<\infty$ almost surely. Suppose for contradiction that $\mathbb E\tau<\infty$. [F1, assume-contra]

2.1 The walk is a martingale and $|S_n-S_{n-1}|=1$, so F2 would imply $$\mathbb ES_\tau=\mathbb ES_0.$$ But F1 computes the two sides as $1$ and $0$. This contradiction proves $\mathbb E\tau=\infty$. AC has exactly the inherited role in F3. [F1, F2, F3, step 1.1, discharge-contradiction] ∎
