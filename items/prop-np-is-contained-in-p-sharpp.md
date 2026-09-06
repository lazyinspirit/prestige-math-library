---
id: prop-np-is-contained-in-p-sharpp
kind: proposition
title: "NP is contained in P with a Sharp-P oracle"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-p-with-a-sharpp-oracle, def-sharpp-and-gap-p-functions, thm-number-sat-is-sharpp-complete]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Statement

$\mathrm{NP}\subseteq\mathrm P^{\#\mathrm P}$.

## Facts & Assumptions

**Given:** $L\in\mathrm{NP}$ with polynomial-time verifier $R(x,y)$ and a polynomial witness-length bound $p$.

[L1] A $\#\mathrm P$ oracle returns the exact binary integer value of its counting function, by [[def-p-with-a-sharpp-oracle]].

[L2] $\#\mathrm P$ functions count accepting paths, by [[def-sharpp-and-gap-p-functions]].

## Proof

**Proof technique:** direct.

1.1 Define $h(x)=|\{y\in\{0,1\}^{p(|x|)}:R(x,y)=1\}|$. A nondeterministic machine guesses the $p(|x|)$ bits and accepts exactly when $R$ does, so $h\in\#\mathrm P$ by [L2]. [L2, given, construct]

2.1 A deterministic polynomial-time oracle machine makes the single query $h(x)$ and accepts iff the returned binary integer is nonzero. The answer has at most $p(|x|)+1$ bits, and $h(x)>0$ exactly when an NP witness exists. [L1, step 1.1]

3.1 This oracle machine decides $L$, proving the containment. [step 2.1] ∎
