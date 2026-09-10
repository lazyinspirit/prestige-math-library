---
id: cor-tightness-extracts-a-weakly-convergent-subsequence
kind: corollary
title: Tightness extracts a weakly convergent subsequence
deps: ["thm-prokhorov-tightness-theorem-on-polish-spaces", "def-axiom-of-choice"]
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

Assume AC. A tight sequence of Borel probability laws on a Polish S has a subsequence converging weakly to a Borel probability on that same S.

## Facts & Assumptions

[F1] [[thm-prokhorov-tightness-theorem-on-polish-spaces]]: Assume AC. A family $\mathcal A$ of Borel probabilities on a Polish space S is tight if and only if it is relatively sequentially compact for weak convergence.

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 Let $\mathcal A=\{\mu_n:n\ge1\}$. The given uniform compact bounds are exactly tightness of this family. The forward implication of F1 makes it relatively sequentially compact. [F1]

2.1 Apply that property to the original sequence itself. It supplies increasing indices $n_j$ and a Borel probability $\mu$ on S with $\mu_{n_j}\Rightarrow\mu$. In particular the limit has mass one and lies on S, as asserted. [given, algebra] ∎
