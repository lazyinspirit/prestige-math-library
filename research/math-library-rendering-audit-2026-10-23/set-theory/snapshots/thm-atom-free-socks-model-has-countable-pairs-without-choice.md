---
id: thm-atom-free-socks-model-has-countable-pairs-without-choice
kind: theorem
title: An atom-free symmetric model has countable pairs without choice
status: published
origin: pipeline
deps: [def-atom-free-socks-symmetric-system, lem-symmetry-lemma-for-forcing-automorphisms, def-choice-for-pairs-and-countable-finite-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Jech, The Axiom of Choice, Lemmas 5.17–5.19 and Theorem 5.20, pp. 69–71", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement

The atom-free socks symmetric extension is a ZF model containing the countable family $(P_n)$ of pairs of sets of reals but no choice function; $\mathrm{AC}_{\omega,2}$ fails directly in pure ZF.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[def-atom-free-socks-symmetric-system]] gives the pair sequence and coordinate group.

[F2] [[lem-symmetry-lemma-for-forcing-automorphisms]] transports a choice decision under a swap.

[F3] [[def-choice-for-pairs-and-countable-finite-choice]] identifies the failed principle.

## Proof

1.1 F1 makes every $P_n$ and the indexed sequence HS, so the symmetric ZF model regards its range as countable pairs. Distinct-coordinate dense sets ensure $R_{n,0}\ne R_{n,1}$. [F1]

1.2 Suppose $p\Vdash\dot c(n)\in\dot P_n$ for a supported choice name $\dot c$. Choose $n$ outside the finitely many supported pair indices and strengthen to $q\le p$ deciding, say, $\dot c(n)=\dot R_{n,0}$. Choose a block swap at $n$ that fixes the support. By additionally permuting unused $j$-coordinates in that block, arrange that $q$ and its image have disjoint moved domains and hence are compatible. [F1]

2.1 F2 says the image condition forces the same $\dot c(n)$ to equal $\dot R_{n,1}$. A common extension then forces the two distinct mates equal, contradiction. Therefore no choice function exists and F3 fails. The construction is in pure ZF and uses neither the Recorded transfer result nor AC. [F2, F3, step 1.2] ∎