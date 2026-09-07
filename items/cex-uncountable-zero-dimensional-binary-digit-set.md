---
id: "cex-uncountable-zero-dimensional-binary-digit-set"
kind: "counterexample"
title: "An uncountable compact set can have dimension zero"
deps: ["prop-binary-digit-restriction-hausdorff-dimension", "thm-hausdorff-dimension-critical-exponent"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Bishop–Peres Example 1.4.2, square-position specialisation
      url: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement refuted

Assume the Axiom of Countable Choice. The implication “Hausdorff dimension zero forces countability” is false. For $S=\{k^2:k\ge1\}$, $A_S$ is compact and uncountable, yet $\dim_H A_S=0$ and $\mathcal H^t(A_S)=0$ for every finite $t>0$.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Under the standing Countable Choice hypothesis, the binary digit set is compact with dimension equal to the lower density of allowed positions; if the positions and their complement are infinite it is uncountable. [[prop-binary-digit-restriction-hausdorff-dimension]]

[F2] Every finite exponent strictly above Hausdorff dimension has zero Hausdorff measure. [[thm-hausdorff-dimension-critical-exponent]]

## Counterexample

1.1 Here $a_S(n)=\lfloor\sqrt n\rfloor$, so $a_S(n)/n\to0$. The digit theorem gives compactness and dimension zero. Both the square positions and the nonsquare positions are infinite, so its uncountability conclusion applies. [F1]

2.1 Every $t>0$ lies strictly above this dimension. Hence $\mathcal H^t(A_S)=0$ for every such finite exponent. The conclusion concerns positive exponents only; at exponent zero the uncountable set is not null. [F2, step 1.1] ∎
