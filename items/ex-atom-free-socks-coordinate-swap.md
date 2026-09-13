---
id: ex-atom-free-socks-coordinate-swap
kind: example
title: A coordinate swap defeats an atom-free sock choice
status: draft
origin: pipeline
deps: [def-atom-free-socks-symmetric-system, lem-symmetry-lemma-for-forcing-automorphisms, thm-atom-free-socks-model-has-countable-pairs-without-choice]
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Jech, The Axiom of Choice, proof of Lemma 5.19, pp. 70–71", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement

In the corrected atom-free socks construction, a fresh pair-coordinate swap has a compatible image condition and reverses a proposed decided choice.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[def-atom-free-socks-symmetric-system]] supplies the forcing order, the names $R_{n,i}$ and $P_n$, the block automorphisms, and the finite-support filter.

[F2] [[lem-symmetry-lemma-for-forcing-automorphisms]] transports a forcing decision under the displayed automorphism.

[F3] [[thm-atom-free-socks-model-has-countable-pairs-without-choice]] proves that $P_n=\{R_{n,0},R_{n,1}\}$ is a two-element set in the symmetric model, including the dense-set distinctness argument.

## Proof

1.1 Suppose $p$ forces that a supported name $c$ is a choice function. Let $E$ support both $p$ and $c$. Pick $n$ outside the finitely many pair indices occurring in $E$, and strengthen to $q\le p$ deciding, after relabelling the two mates if necessary, $$q\Vdash c(P_n)=R_{n,0}.$$ This is a single forcing decision, not a sequence of choices. [F1, assume-contra]

1.2 Because $q$ has finite domain, choose a natural-number coordinate cutoff beyond all coordinates of $q$ in the $n$th blocks. Define an automorphism $\pi$ which swaps the two $n$-blocks while translating the finitely used internal coordinates to unused coordinates, and fixes $E$. Then $q$ and $\pi q$ agree wherever both are defined, hence $q\cup\pi q$ is a condition. [F1]

2.1 The support of $c$ is fixed, so $\pi c=c$, while $\pi R_{n,0}=R_{n,1}$ and $\pi P_n=P_n$. By F2, equivariance transforms the decision in step 1.1 into $$\pi q\Vdash c(P_n)=R_{n,1}.$$ Their common extension forces $R_{n,0}=R_{n,1}$, contradicting F3. Thus the fresh coordinate swap defeats the proposed choice. [F1, F2, F3, step 1.1, step 1.2, discharge-contradiction] ∎
