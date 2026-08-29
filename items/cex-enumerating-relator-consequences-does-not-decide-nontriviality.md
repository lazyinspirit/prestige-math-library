---
id: cex-enumerating-relator-consequences-does-not-decide-nontriviality
kind: counterexample
title: "Enumerating relator consequences does not decide nontriviality"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable, thm-word-problem-for-free-groups]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles F. Miller III, Decision Problems for Groups - Survey and Reflections"
      url: "https://web.archive.org/web/20240413212033/https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=fcda888d3e64f281e85977c474764527421ce852"
pipeline_run: null
---

## Statement refuted

Enumerating all relator consequences of a recursive presentation decides
nontriviality of words in that presentation.

## Facts & Assumptions

**Given:** The recursive presentation $\langle a\mid\varnothing\rangle$ and the word $a$.

[L1] The trivial words of a recursively presented group form a recursively enumerable language. ([[lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable]])

[L2] A reduced nonempty word in a free group is nonidentity. ([[thm-word-problem-for-free-groups]])

## Counterexample

**Proof technique:** direct.

1.1 The presentation $\langle a\mid\varnothing\rangle$ presents the free group on $a$. The word $a$ is reduced and nonempty, so [L2] says that it is nontrivial. [L2, given]

2.1 By [L1], enumerating relator consequences lists precisely the trivial words. Since $a$ is nontrivial by step 1.1, it never appears, and waiting for it gives no halting certificate of nontriviality. [L1, step 1.1]

3.1 Hence the asserted decision procedure is false, and the claimed principle is refuted. [step 2.1] ∎
