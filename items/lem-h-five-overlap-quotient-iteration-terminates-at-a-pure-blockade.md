---
id: lem-h-five-overlap-quotient-iteration-terminates-at-a-pure-blockade
kind: lemma
title: "Iterated mixed quotients of an $H_5$-overlap blockade terminate at a pure blockade"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-h-five-overlap-blockade-and-iterated-mixed-quotients, def-blockade-length-and-width, def-quotient-blockade-by-mixed-block-reachability, lem-mixed-block-reachability-is-an-equivalence-relation, thm-well-ordering-principle]
proof_strategy: contradiction
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Huang, Ju, and Zhou, Erdős-Hajnal beyond the five-vertex path, proof of Lemma 6.4"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Statement

For a nonempty $H_5$-overlap blockade, some iterated mixed quotient is a pure
blockade.

## Facts & Assumptions

**Given:** A nonempty initial overlap blockade $\mathcal L^1$.

[F1] Its blocks form a finite nonempty sequence of nonempty sets ([[def-blockade-length-and-width]]).

[F2] The quotient blocks are the equivalence-class unions of mixed-block reachability ([[def-quotient-blockade-by-mixed-block-reachability]]).

## Proof

**Proof technique:** contradiction.

1.1 If $\mathcal L^s$ is not pure, two distinct blocks are mixed. They lie in one mixed-reachability class, so [F2] merges at least two blocks and strictly decreases the positive integer number of blocks. [F1, F2]

2.1 Suppose no iterate were pure. Step 1.1 would give an infinite strictly decreasing sequence of positive integers, the successive numbers of blocks. [step 1.1, assume-contra]

3.1 The set of values of that sequence has a least element by well-ordering, but its successor in the sequence is smaller, a contradiction. Therefore a first pure iterate exists. [step 2.1, discharge-contradiction] ∎
