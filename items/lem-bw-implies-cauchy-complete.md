---
id: lem-bw-implies-cauchy-complete
kind: lemma
title: "Bolzano-Weierstrass implies Cauchy completeness in any ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completeness-properties, def-sequences-in-an-ordered-field, lem-of-sequence-basics]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field with the Bolzano-Weierstrass property (BW) of
[[def-completeness-properties]]. Then $F$ has Cauchy completeness (CC): every
Cauchy sequence in $F$ converges in $F$.

No Archimedean hypothesis is needed here, and none is hidden: (BW) already
carries the Archimedean property on its own
([[lem-bw-implies-archimedean]]), but that fact is not used below.

## Facts & Assumptions

**Given:** An ordered field $F$ with (BW), and a Cauchy sequence $(x_k)$ in $F$.

[L1] The properties (BW) and (CC) of [[def-completeness-properties]].

[L2] Sequences in an ordered field: boundedness, subsequences, convergence in $F$ and Cauchyness in $F$ ([[def-sequences-in-an-ordered-field]]).

[L3] In any ordered field, a Cauchy sequence is bounded (clause 4 of [[lem-of-sequence-basics]]), and a Cauchy sequence with a subsequence converging to $L$ converges to $L$ (clause 5 of the same lemma).

## Proof

**Proof technique:** direct.

1.1 Being Cauchy in $F$, the sequence $(x_k)$ is bounded. [L2, L3]

2.1 By (BW) there is a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ and an $L \in F$ with $x_{n_j} \to L$ in $F$. [step 1.1, L1, L2]

3.1 A Cauchy sequence with a convergent subsequence converges to the same limit, so $x_k \to L$ in $F$. [step 2.1, L2, L3]

4.1 An arbitrary Cauchy sequence in $F$ therefore converges in $F$, which is (CC). [step 3.1, L1] ∎

## Remarks

- **This is the only implication on the page that is pure bookkeeping**, and
  that is precisely because both of its ingredients were extracted into
  [[lem-of-sequence-basics]] and proved there for an arbitrary ordered field.
  Written out inline it would repeat the boundedness induction and the
  three-term triangle estimate of that lemma.

- The converse fails: $\mathbb{R}((t^{-1}))$ has (CC)
  ([[thm-laurent-cauchy-complete]]) and, being non-Archimedean
  ([[lem-laurent-non-archimedean]]), fails (BW) by
  [[lem-bw-implies-archimedean]].
