---
id: thm-graph-nonisomorphism-is-in-ip
kind: theorem
title: "Graph nonisomorphism is in IP"
status: published
verification:
  audited: 2026-09-07
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

1.1 If $G_0\not\cong G_1$, the isomorphism class of $H$ identifies the unique $b$, so an unbounded prover answers correctly with probability $1$. [given]

1.2 If $G_0\cong G_1$, the distributions of $\pi(G_0)$ and $\pi(G_1)$ are identical; even conditioned on $H$, $b$ is uniform, so every prover succeeds with probability $1/2$. This verifies the protocol [[def-graph-nonisomorphism-protocol]]. [given]

2.1 Run two fresh independent challenges and accept only when both answers are correct. On a no instance, after every first transcript the second challenge is still independent and every response succeeds with conditional probability at most $1/2$; thus the two-copy soundness is at most $(1/2)^2=1/4$, while completeness remains $1$. Hence [[def-ip]] applies. [step 1.1, step 1.2, algebra] ∎
