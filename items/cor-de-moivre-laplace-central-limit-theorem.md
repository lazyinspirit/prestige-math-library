---
id: cor-de-moivre-laplace-central-limit-theorem
kind: corollary
title: De Moivre-Laplace central limit theorem
deps: ["cor-countable-independent-copies-exist", "lem-ac-supplies-sequential-choices-for-probability-constructions", "lem-bernoulli-and-binomial-mean-and-variance", "thm-lindeberg-levy-iid-central-limit-theorem", "def-bernoulli-and-binomial-random-variables", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: 'Durrett, Probability: Theory and Examples, Section 3.1'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: Aldous and Chewi, Probability Theory notes, Corollary 6.1
      url: https://www.stat.berkeley.edu/users/aldous/205B/chewi_notes.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assume AC and fix $0<p<1$. If $B_n$ has law $\operatorname{Bin}(n,p)$ for every $n\ge1$, then $$(B_n-np)/\sqrt{np(1-p)}\Rightarrow N(0,1).$$ No relationship between the probability spaces of the $B_n$ is required.

## Facts & Assumptions

[F1] Under dependent and countable choice a prescribed Bernoulli law has independent copies. [[cor-countable-independent-copies-exist]].

[F2] AC implies dependent choice and countable choice. [[lem-ac-supplies-sequential-choices-for-probability-constructions]].

[F3] Bernoulli(p) has mean p and variance p(1-p). [[lem-bernoulli-and-binomial-mean-and-variance]].

[F4] The iid finite-positive-variance CLT applies under AC. [[thm-lindeberg-levy-iid-central-limit-theorem]].

[F5] A binomial law is the law of a finite independent Bernoulli sum. [[def-bernoulli-and-binomial-random-variables]].

## Proof

**Given:** Assume AC and fix $0<p<1$. If $B_n$ has law $\operatorname{Bin}(n,p)$ for every $n\ge1$, then $$(B_n-np)/\sqrt{np(1-p)}\Rightarrow N(0,1).$$ No relationship between the probability spaces of the $B_n$ is required.

1.1 By [F2], AC supplies the countable and dependent choice required in [F1]. Apply that result to the two-point probability with masses 1-p and p to obtain iid Bernoulli variables $I_k$. The law of $C_n=\sum_{k=1}^n I_k$ is Bin(n,p) by [F5]. In particular it agrees with the specified law of B_n for each n; equality persists under the displayed affine standardization. [F1, F2, F5]

2.1 By [F3], $\mathbb EI_k=p$ and $\operatorname{Var}(I_k)=p(1-p)>0$. The variables are bounded, hence their second moments are finite. [F4] gives $(C_n-np)/\sqrt{np(1-p)}\Rightarrow N(0,1)$. Equality of laws in step 1.1 transfers the conclusion to B_n. The excluded p=0,1 and n=0 would make the denominator zero; no claim using that denominator is made there. Neither a finite-n error estimate nor continuity correction follows from this limit theorem. [step 1.1, F3, F4] ∎

