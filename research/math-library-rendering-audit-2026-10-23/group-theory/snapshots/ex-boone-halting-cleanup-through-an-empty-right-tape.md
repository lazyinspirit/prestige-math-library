---
id: ex-boone-halting-cleanup-through-an-empty-right-tape
kind: example
title: "Boone halting cleanup through an empty right tape"
status: published
origin: pipeline
deps: ["def-boone-machine-semigroup-and-augmented-configurations"]
justified_by: []
landmark: false
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Rotman, Chapter 12, p.427, cleanup relations"
      url: "https://math.uchicago.edu/~shmuel/lg-readings/Joseph%20J.%20Rotman%2C%20The%20Word%20Problem%20.pdf"
---

## Example

For any tape symbols $a,b\in S$, including $a=b=s_0$, the augmented stopping configuration $h a q_0 b h$ has the cleanup
$$h a q_0 b h\longrightarrow h a q_0 h\longrightarrow h q_0 h\longrightarrow q.$$
The middle two words have empty right tape.

## Facts & Assumptions

**Given:** Tape symbols $a,b\in S$ and the displayed stopping configuration. No reachability from a particular input is claimed.

[F1] Cleanup relations are $q_0s=q_0$, $s q_0h=q_0h$ for $s\in S$, and $hq_0h=q$. Stopping configurations may have empty right tape. ([[def-boone-machine-semigroup-and-augmented-configurations]])

## Verification

1.1 Substitute $q_0b=q_0$ with prefix $ha$ and suffix $h$. The result is $haq_0h$, whose left tape is the one-letter word $a$ and whose right tape is empty. It is augmented because its state is $q_0$. [F1, given]

2.1 Substitute $a q_0h=q_0h$ with prefix $h$. The result is $hq_0h$, with both tape contexts empty and the same stopping state. [F1, step 1.1]

3.1 Substitute $hq_0h=q$ with both contexts empty. This produces the terminal augmented word $q$. Each preceding word had one state and the two outer markers; this last rule removes the markers. The three substitutions remain valid for $a=b=s_0$, giving a concrete all-blank instance. Thus requiring nonempty right tape throughout cleanup would exclude the explicitly reached middle words. [F1, step 2.1] ∎ 
