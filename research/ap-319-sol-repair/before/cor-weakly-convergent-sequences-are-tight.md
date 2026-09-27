---
id: cor-weakly-convergent-sequences-are-tight
kind: corollary
title: Weakly convergent sequences are tight
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

Assume AC. If $\mu_n\Rightarrow\mu$ on a Polish space, then $\{\mu,\mu_1,\mu_2,\ldots\}$ is tight.

## Facts & Assumptions

[F1] [[thm-prokhorov-tightness-theorem-on-polish-spaces]]: Assume AC. A family $\mathcal A$ of Borel probabilities on a Polish space S is tight if and only if it is relatively sequentially compact for weak convergence.

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 Consider any sequence of laws from the displayed family. If some law occurs infinitely often, it has a constant subsequence. Otherwise each law occurs only finitely often. Assign every law unequal to $\mu$ its least index in the original sequence. Removing finitely many selected terms for each bounded set of such indices leaves a subsequence whose assigned indices increase to infinity; its weak limit is $\mu$ by the given convergence. [given, algebra]

2.1 Thus every sequence in the family has a weakly convergent subsequence with a probability limit on S. The reverse implication of F1, with the stated AC and Polish hypotheses, yields tightness. [F1] ∎
