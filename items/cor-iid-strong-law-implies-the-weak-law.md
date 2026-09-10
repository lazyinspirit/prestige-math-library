---
id: cor-iid-strong-law-implies-the-weak-law
kind: corollary
title: Iid strong law implies the weak law
deps: ["thm-kolmogorov-iid-l1-strong-law", "thm-almost-sure-convergence-implies-convergence-in-probability"]
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

For IID integrable real variables, $S_n/n\to\mathbb EX_1$ in probability.

## Facts & Assumptions

[F1] [[thm-kolmogorov-iid-l1-strong-law]]: For IID real $(X_n)_{n\ge1}$ with $\mathbb E|X_1|<\infty$, $S_n/n\to\mu=\mathbb EX_1$ almost surely.

[F2] [[thm-almost-sure-convergence-implies-convergence-in-probability]]: If $X_n\to X$ almost surely, then $X_n\to X$ in probability.

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 F1 applies to the given IID integrable sequence and gives $S_n/n\to\mathbb EX_1$ almost surely. [F1]

2.1 The sample means and the constant limit are real random variables on that same probability space. Thus F2 applies to step 1.1 and gives the claimed probability convergence. [F2, step 1.1] ∎
