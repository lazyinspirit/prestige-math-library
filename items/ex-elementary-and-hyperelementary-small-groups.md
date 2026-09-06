---
id: ex-elementary-and-hyperelementary-small-groups
kind: example
title: Small elementary and hyperelementary groups
status: draft
origin: pipeline
deps: [def-p-elementary-and-p-hyperelementary-finite-groups, def-external-semidirect-product]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Wen-Wei Li, Yanqi Lake Lectures on Algebra I, Definition 14.1.1
      url: https://www.wwli.asia/downloads/YAlg1.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Example

For distinct primes $p,q$, $C_{pq}\cong C_q\times C_p$ is $p$-elementary. For odd $p$, $D_{2p}=C_p\rtimes C_2$ is $2$-hyperelementary and is $2$-elementary exactly when the action is trivial. Thus $S_3=C_3\rtimes C_2$ is $2$-hyperelementary but not $2$-elementary. Likewise, the nontrivial $C_7\rtimes C_3$ is $3$-hyperelementary but not $3$-elementary.

## Facts & Assumptions

[F1] The cited prerequisite is [[def-p-elementary-and-p-hyperelementary-finite-groups]].

## Verification

**Given:** the displayed semidirect products use their indicated conjugation actions.

1.1 In each case the first factor is cyclic of order prime to the displayed prime and the second is a $p$-group. [F1, given]

2.1 Directness is equivalent to trivial conjugation; the reflections in $S_3$ invert $C_3$, and the chosen action of $C_3$ on $C_7$ is nontrivial, establishing the two non-elementary assertions. $\square$ [step 1.1]
