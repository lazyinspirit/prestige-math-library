---
id: "cor-betti-number-is-rank-in-minimal-resolution"
kind: "corollary"
title: "betti number is rank in minimal resolution"
deps: ["def-betti-numbers-of-a-finite-local-module", "lem-minimal-free-resolution-reduces-to-zero-differential", "def-axiom-of-choice"]
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-05-receipts.jsonl (cor-betti-number-is-rank-in-minimal-resolution). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Proposition 12.27, pp.120–121"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

Assume the Axiom of Choice. For every minimal degreewise finite free resolution $F_\bullet\to M$ of a finite module over a nonzero Noetherian local ring, $\beta_i^R(M)=\operatorname{rank}_RF_i$ for all $i\ge0$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[def-betti-numbers-of-a-finite-local-module]]: For a finite module $M$ over a nonzero Noetherian local ring $(R,\mathfrak m,k)$ and an integer $i\ge0$, its **Betti number** is $\beta_i^R(M)=\dim_k\operatorname{Tor}_i^R(k,M)$. The action factors through $k$, and a degreewise finite free resolution makes this dimension finite. Tor is resolution-independent. This extends the Koszul rank notation: whenever a minimal Koszul resolution exists, the rank formula identifies these numbers with its Koszul Betti numbers. For $M=0$ all Betti numbers are zero.

[F2] [[lem-minimal-free-resolution-reduces-to-zero-differential]]: If $F_\bullet\to M$ is a minimal degreewise finite free resolution over $(R,\mathfrak m,k)$, every differential of the unaugmented complex $k\otimes_RF_\bullet$ is zero.

## Proof

1.1 Under the stated AC premise the Betti definition supplies the Tor interpretation, and [F2] makes the residue complex have zero differentials. Thus $\operatorname{Tor}_i^R(k,M)\cong k\otimes_RF_i$. [F1, F2, given]

2.1 Its vector-space dimension equals the finite free rank of $F_i$. By definition this is $\beta_i^R(M)$. This holds in degree zero, in all higher degrees, and for zero terms, including the zero module. [F1, step 1.1, algebra] ∎
