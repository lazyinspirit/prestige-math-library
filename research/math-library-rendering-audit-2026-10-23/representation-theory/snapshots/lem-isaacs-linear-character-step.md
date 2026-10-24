---
id: lem-isaacs-linear-character-step
kind: lemma
title: Isaacs' linear-character step
status: published
origin: pipeline
deps: [def-p-elementary-and-p-hyperelementary-finite-groups, thm-p-group-fixed-point-congruence, def-external-semidirect-product]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Wen-Wei Li, Yanqi Lake Lectures on Algebra I, Lemma 14.3.6
      url: https://www.wwli.asia/downloads/YAlg1.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

Suppose $G=N\rtimes P$, where $N$ has order prime to $p$ and $P$ is a $p$-group. If a linear character $\lambda:N\to\mathbb C^\times$ is $P$-invariant and $C_N(P)\subseteq\ker\lambda$, then $\lambda=1_N$.

## Facts & Assumptions

[F1] The cited prerequisite is [[thm-p-group-fixed-point-congruence]].

## Proof

**Given:** $\nu\in N$ and $P$ acts on the fibre $\lambda^{-1}(\lambda(\nu))$ by conjugation.

1.1 The fibre is $P$-stable by invariance and has cardinality $|\ker\lambda|$, a divisor of $|N|$ and hence prime to $p$. The fixed-point congruence supplies a $P$-fixed element in that fibre. [F1, given]

2.1 A fixed element lies in $C_N(P)\subseteq\ker\lambda$, so its character value is $1$. Since the fibre has that same value, $\lambda(\nu)=1$; as $\nu$ was arbitrary, $\lambda$ is trivial. ∎ [step 1.1]
