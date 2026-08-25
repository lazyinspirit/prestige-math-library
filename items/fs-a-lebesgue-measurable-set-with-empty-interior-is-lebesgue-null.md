---
id: fs-a-lebesgue-measurable-set-with-empty-interior-is-lebesgue-null
kind: false-statement
title: "A Lebesgue measurable subset of $\\mathbb{R}$ with empty interior has measure zero"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-fat-cantor-set-has-positive-measure,
       def-nowhere-dense-meager,
       thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line,
       def-countable-choice]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Chapter 2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "A. Jin, Cantor sets in topology, analysis, and financial markets"
      url: "https://math.uchicago.edu/~may/REU2021/REUPapers/Jin%2CAlexa.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Every Lebesgue measurable subset of
$\mathbb{R}$ with empty interior has measure zero.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the Smith-Volterra-Cantor set $S$.

[L1] $S$ is nowhere dense and does not have measure zero ([[thm-fat-cantor-set-has-positive-measure]]).

[F1] $A$ is **nowhere dense** when the interior of its closure is empty ([[def-nowhere-dense-meager]]).

[L2] A subset of $\mathbb R$ has Lebesgue outer measure zero if and only if it is null in the sense of countable closed-interval covers ([[thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line]]).

## Refutation

**Proof technique:** direct.

1.1 The Smith-Volterra-Cantor set is nowhere dense by [L1], so [F1] gives that it has empty interior. [L1, F1]

1.2 The same source item [L1] says that $S$ is not null, so [L2] gives $\lambda_1(S) \ne 0$; since Lebesgue measure is nonnegative, this means $\lambda_1(S) > 0$. [L1, L2, algebra]

2.1 So a measurable set can have empty interior and still have positive Lebesgue measure; the Smith-Volterra-Cantor set refutes the statement. [step 1.1, step 1.2] ∎
