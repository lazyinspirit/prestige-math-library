---
id: "cex-an-adapted-process-need-not-be-a-martingale"
kind: "counterexample"
title: "An adapted process need not be a martingale"
deps: ["def-martingale-submartingale-and-supermartingale", "thm-basic-algebra-and-order-properties-of-conditional-expectation", "prop-dirac-measure-is-a-probability-measure", "def-axiom-of-choice"]
provenance:
  statement: ai-generated
  proof: ai-altered
proof_strategy: "direct"
generation:
  role: counterexample
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
status: published
origin: "pipeline"
verification:
  audited: 2026-09-12
---

## Statement refuted

Assume AC. The assertion that every adapted integrable real process is a martingale is false. A counterexample is $X_n=n$ on a one-point probability space.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement refuted.

[F1] A Dirac measure at a specified point is a probability measure. [[prop-dirac-measure-is-a-probability-measure]].

[F2] Conditional expectation is linear, order preserving and expectation preserving. [[thm-basic-algebra-and-order-properties-of-conditional-expectation]].

[F3] AC supplies the inherited conditional-expectation existence and any stated choice of versions. [[def-axiom-of-choice]].

## Counterexample

**Proof technique:** direct.

1.1 Let $\Omega=\{\ast\}$ with $P=\delta_\ast$ and $\mathcal F_n=\{\varnothing,\Omega\}$ for all $n$. This is a probability space and a filtration. Define $X_n(\ast)=n$. Each $X_n$ is measurable for $\mathcal F_n$ and $E|X_n|=n<\infty$, so the process is adapted and integrable at every time. [F1]

2.1 Conditional expectation fixes constants, so $E[X_{n+1}\mid\mathcal F_n]=n+1$, while $X_n=n$. The two values differ on $\Omega$, which has probability one, at every $n$, including $0$. Hence the martingale equality [[def-martingale-submartingale-and-supermartingale]] fails. AC is inherited from the CE class convention; the singleton calculation itself is explicit. [F2, F3, step 1.1] ∎
