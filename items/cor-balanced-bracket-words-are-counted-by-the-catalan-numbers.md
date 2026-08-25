---
id: cor-balanced-bracket-words-are-counted-by-the-catalan-numbers
kind: corollary
title: "$\\lvert\\mathcal{B}_n\\rvert=C_n$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-balanced-bracket-words-are-exactly-the-nonnegative-prefix-words, def-catalan-number, def-dyck-path-and-semilength, def-finite-cardinality, def-balanced-bracket-word]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, §3.5"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
pipeline_run: null
---

## Statement

For every $n\in\mathbb{N}$ the set $\mathcal{B}_n$ of balanced bracket words with
$n$ pairs of brackets ([[def-balanced-bracket-word]]) is finite with

$$\lvert\mathcal{B}_n\rvert=C_n,$$

the Catalan number ([[def-catalan-number]]).

## Facts & Assumptions

**Given:** a natural number $n$.

[F1] The alphabet bijection $\texttt{(}\mapsto U$, $\texttt{)}\mapsto D$ carries $\mathcal{B}_n$ onto the set of ballot words of length $2n$ ([[thm-balanced-bracket-words-are-exactly-the-nonnegative-prefix-words]]).

[F2] $\mathcal{B}_n$ is finite ([[def-balanced-bracket-word]]).

[L1] $\mathcal{D}_n$ corresponds bijectively, through step words, to the set of ballot words of length $2n$ ([[def-dyck-path-and-semilength]]).

[L2] $C_n=\lvert\mathcal{D}_n\rvert$ ([[def-catalan-number]]).

[L3] If $A$ is finite and $f:A\to B$ is a bijection then $B$ is finite and $\lvert B\rvert=\lvert A\rvert$ ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] and [L1] the composite of the alphabet bijection with the inverse of the step-word bijection is a bijection $\mathcal{B}_n\to\mathcal{D}_n$, a composite of two bijections being one. [F1, L1]

2.1 By [F2] the set $\mathcal{B}_n$ is finite, so [L3] transports its cardinality along the bijection of step 1.1 and gives $\lvert\mathcal{B}_n\rvert=\lvert\mathcal{D}_n\rvert$, which is $C_n$ by [L2]. At $n=0$ both sides are $1$ and at $n=1$ both are $1$. [F2, L2, L3, step 1.1] ∎

## Remarks

- **The content is in the theorem above, not here.** Once the grammar and the
  prefix condition are known to describe the same words, the count is a transport
  along a bijection of alphabets. What makes the corollary worth stating is that it
  is the first of the three Catalan families whose members are not paths.
