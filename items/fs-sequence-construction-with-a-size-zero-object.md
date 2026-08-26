---
id: fs-sequence-construction-with-a-size-zero-object
kind: false-statement
title: "FALSE: $\\operatorname{SEQ}(\\mathcal{A})$ is a combinatorial class even when $\\mathcal{A}$ has a size-zero object"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sequence-construction-of-a-combinatorial-class, thm-sequence-construction-generating-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics"
      url: "https://ac.cs.princeton.edu/home/AC.pdf"
pipeline_run: null
---

## Statement

**False claim:** $\operatorname{SEQ}(\mathcal{A})$ is always a combinatorial
class, even when $\mathcal{A}$ has an object of size $0$.

The theorem [[thm-sequence-construction-generating-function]] excludes exactly
this case, and the exclusion is necessary.

## Facts & Assumptions

**Given:** The sequence construction ([[def-sequence-construction-of-a-combinatorial-class]]) and its generating function theorem, which assumes that $\mathcal{A}$ has no size-zero objects ([[thm-sequence-construction-generating-function]]).

## Refutation

**Proof technique:** direct.

1.1 Let $\mathcal{A}=\{e\}$ with $|e|=0$. Then for every $r \ge 0$, the length-$r$ sequence $(e,\dots,e)$ lies in $\operatorname{SEQ}(\mathcal{A})$ and has total size $0$. [given]

2.1 These sequences are all distinct because their lengths differ, so the size-$0$ level of $\operatorname{SEQ}(\mathcal{A})$ is infinite. Hence $\operatorname{SEQ}(\mathcal{A})$ is not a combinatorial class. [step 1.1, given]

3.1 The claim is therefore false, and the no-size-zero hypothesis in the sequence theorem is load bearing. [step 2.1, given] ∎
