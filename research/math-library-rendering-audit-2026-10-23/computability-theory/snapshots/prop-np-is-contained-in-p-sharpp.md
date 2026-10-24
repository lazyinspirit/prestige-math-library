---
id: prop-np-is-contained-in-p-sharpp
kind: proposition
title: "NP is contained in P with a Sharp-P oracle"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-np-by-verifiers, def-p-with-a-sharpp-oracle, def-sharpp-and-gap-p-functions, thm-number-sat-is-sharpp-complete]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
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

**Given:** $L\in\mathrm{NP}$ with polynomial-time verifier $R(x,u)$ and a polynomial witness-length bound $p$, so witnesses may have any length at most $p(|x|)$ ([[def-np-by-verifiers]]).

[L1] $\mathrm P^{\#\mathrm P}$ uses a fixed $\mathrm{NumberSAT}$ oracle returning its exact binary integer value, by [[def-p-with-a-sharpp-oracle]].

[L2] $\#\mathrm P$ functions count accepting paths, by [[def-sharpp-and-gap-p-functions]].

[L3] Every $\#\mathrm P$ function has a polynomial-time parsimonious reduction to $\mathrm{NumberSAT}$, by [[thm-number-sat-is-sharpp-complete]].

## Proof

**Proof technique:** direct.

1.1 Enlarge $p$ if needed to a nonnegative integer-valued polynomial bound, and put $m=p(|x|)$. Define $h(x)=|\{u\in\{0,1\}^*:|u|\le m,\ R(x,u)=1\}|$. A binary-branching polynomial-time machine guesses a word $y$ of length $m+1$. It rejects if $y$ has no zero; otherwise it writes $y=1^{m-|u|}0u$ using the first zero, and accepts exactly when $R(x,u)=1$. This encoding is a bijection between words $u$ of length at most $m$ and guessed words $y$ with a zero. Thus the accepting-path count is exactly $h(x)$, so $h\in\#\mathrm P$. [L2, given, construct]

2.1 By [L3], compute in polynomial time a formula $r(x)$ with $h(x)=\mathrm{NumberSAT}(r(x))$. A deterministic oracle machine queries $r(x)$ and accepts iff the returned binary integer is nonzero. Since $h(x)\le2^{m+1}-1$, the answer has at most $m+1$ bits. By the verifier definition, $h(x)>0$ exactly when $x\in L$. [L1, L3, step 1.1]

3.1 This oracle machine decides $L$, proving the containment. [step 2.1] ∎
