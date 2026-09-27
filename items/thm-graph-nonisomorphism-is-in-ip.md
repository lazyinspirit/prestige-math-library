---
id: thm-graph-nonisomorphism-is-in-ip
kind: theorem
title: "Graph nonisomorphism is in IP"
status: published
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
origin: session
deps: [def-graph-nonisomorphism-protocol, def-ip, lem-sequential-repetition-amplifies-error]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Arora and Barak, §8.3"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

$\mathrm{GNI}=\{(G_0,G_1):G_0\not\cong G_1\}$ lies in $\mathrm{IP}$.

## Proof

**Given:** the graph-nonisomorphism protocol.

1.1 Using adjacency-matrix graph encodings, the verifier first checks the two encoded inputs are graphs, rejecting malformed inputs. If their vertex counts differ, it accepts: such graphs cannot be isomorphic. Both checks are deterministic polynomial-time. In the remaining case relabel both vertex sets as $\{1,\ldots,n\}$ and use the bounded-rejection protocol [[def-graph-nonisomorphism-protocol]]. Its factorial arithmetic and four bounded draws meet the verifier's worst-case polynomial time and random-bit budget. If $G_0\not\cong G_1$, every permutation, including the fallback identity, leaves $H$ in exactly one of the two isomorphism classes, so an unbounded prover answers correctly with probability $1$. [given]

2.1 If $G_0\cong G_1$, the successful-draw branch gives the same uniform distribution $U$ of $H$ for both values of $b$. The fallback has probability $\varepsilon<1/16$ and gives $H=G_b$, so the two challenge distributions are $(1-\varepsilon)U+\varepsilon\delta_{G_0}$ and $(1-\varepsilon)U+\varepsilon\delta_{G_1}$. Their total-variation distance is at most $\varepsilon$. With a uniform hidden bit $b$, any prover's best guess from $H$ has success probability at most $(1+\varepsilon)/2<17/32$; this follows directly by summing, for each possible $H$, the larger of its two joint probabilities. [given, step 1.1, algebra]

3.1 Run two fresh independent challenges and accept only when both answers are correct. On a no instance, after every first transcript the second challenge still has fresh private coins, so even an adaptive prover has conditional success probability below $17/32$. Thus two-copy soundness is below $(17/32)^2=289/1024<1/3$, while completeness remains $1$. The two copies retain a fixed polynomial worst-case budget, so [[def-ip]] applies. [step 1.1, step 2.1, algebra] ∎
