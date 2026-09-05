---
id: lem-independent-events-remain-independent-under-complements
kind: lemma
title: "Independent events remain independent under complements"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-independent-sigma-algebras-and-events, lem-probability-measure-basic-identities]
proof_strategy: direct
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 2.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "S. R. S. Varadhan, Probability Theory, Section 3.1"
      url: "https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $(A_i)_{i\in I}$ be an independent family of events, and for each $i\in I$
choose either $B_i=A_i$ or $B_i=A_i^c$. Then the family $(B_i)_{i\in I}$ is
independent.

## Facts & Assumptions

**Given:** An independent family of events $(A_i)_{i\in I}$ and, for each
$i\in I$, an event $B_i$ equal to either $A_i$ or $A_i^c$.

[L1] Independence of events is the finite-intersection product identity
([[def-independent-sigma-algebras-and-events]]).

[L2] Probabilities respect complements and set differences:
$\mathbb P(E^c)=1-\mathbb P(E)$ and, for $E\subseteq F$,
$\mathbb P(F\setminus E)=\mathbb P(F)-\mathbb P(E)$
([[lem-probability-measure-basic-identities]]).

## Proof

**Proof technique:** direct.

1.1 It is enough to prove the claim for a fixed finite subfamily $A_{i_0},\dots,A_{i_{n-1}}$. We argue by induction on the number of complemented coordinates among $B_{i_0},\dots,B_{i_{n-1}}$. [given, L1]

1.2 If no coordinate is complemented, the required factorization is exactly [L1]. [L1]

2.1 Assume the factorization is known whenever at most $m$ coordinates are complemented, and suppose exactly $m+1$ are. Reindex so that $B_{i_{n-1}}=A_{i_{n-1}}^c$, and put $C:=\bigcap_{k<n-1}B_{i_k}$. Then $C\cap A_{i_{n-1}}\subseteq C$, so [L2] gives $$\mathbb P(C\cap A_{i_{n-1}}^c)=\mathbb P(C)-\mathbb P(C\cap A_{i_{n-1}}).$$ By the induction hypothesis, both terms on the right factor: $\mathbb P(C)=\prod_{k<n-1}\mathbb P(B_{i_k})$ and $\mathbb P(C\cap A_{i_{n-1}})=\left(\prod_{k<n-1}\mathbb P(B_{i_k})\right)\mathbb P(A_{i_{n-1}})$. Therefore $$\mathbb P(C\cap A_{i_{n-1}}^c)=\left(\prod_{k<n-1}\mathbb P(B_{i_k})\right)(1-\mathbb P(A_{i_{n-1}}))=\left(\prod_{k<n-1}\mathbb P(B_{i_k})\right)\mathbb P(A_{i_{n-1}}^c).$$ This is the desired factorization for the current finite family. [step 1.1, step 1.2, L2, algebra]

3.1 Steps 1.2 and 2.1 prove the inductive claim for every finite subfamily, so the family $(B_i)_{i\in I}$ is independent. [step 1.1, step 1.2, step 2.1, L1] ∎
