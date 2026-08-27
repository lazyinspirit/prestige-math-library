---
id: fs-the-group-algebra-of-a-nontrivial-finite-group-is-a-field
kind: false-statement
title: "FALSE: if $|G|>1$, then $k[G]$ is a field"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-field, ex-zero-divisors-in-the-group-algebra-of-a-nontrivial-finite-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Chapter 1 Section 1.1"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Statement

**False claim.** If $G$ is a nontrivial finite group and $k$ is a field, then
$k[G]$ is a field.

## Facts & Assumptions

**Given:** A nontrivial finite group $G$ and a field $k$.

[L1] The group algebra $k[G]$ has nonzero zero divisors ([[ex-zero-divisors-in-the-group-algebra-of-a-nontrivial-finite-group]]).

[L2] In a field every nonzero element is invertible ([[def-field]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], choose nonzero elements $x,y \in k[G]$ with $xy=0$. [L1, given, choose]

2.1 If $k[G]$ were a field, then [L2] would make $x$ invertible, and multiplying $xy=0$ by $x^{-1}$ would give $y=0$, contradicting step 1.1. So the claim is false. [step 1.1, L2, algebra] ∎
