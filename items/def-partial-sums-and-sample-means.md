---
id: def-partial-sums-and-sample-means
title: "Partial sums, row sums and sample means"
kind: definition
status: draft
origin: pipeline
deps: ["def-random-element-and-real-random-variable", "thm-arithmetic-and-lattice-operations-preserve-measurability", "def-finite-sum"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Section 2.2.2, p. 59, opening row-sum notation"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Definition

For real random variables $X_1,X_2,\ldots$ on one probability space, define
$$S_0=0,\qquad S_n=\sum_{k=1}^nX_k,\qquad \overline X_n=S_n/n\quad(n\ge1).$$
For a triangular array with finite row length $r_n\ge0$, write $S_n=\sum_{k=1}^{r_n}X_{n,k}$. An empty row has sum zero. These are finite sums in [[def-finite-sum]], with its index shifted by one. Each sum and each sample mean is a real random variable by [[thm-arithmetic-and-lattice-operations-preserve-measurability]] and [[def-random-element-and-real-random-variable]]. No independence, common law, or integrability is implicit.
