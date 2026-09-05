---
id: fs-pseudopolynomial-is-polynomial-in-bit-length
kind: false-statement
title: "A pseudopolynomial algorithm is polynomial in the binary input length"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-subset-sum-and-partition, def-worst-case-time-and-space-complexity]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Fabrizio Iozzi and Luca Trevisan, Handout NP2"
      url: "https://lucatrevisan.github.io/30540/notes-np2.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

A pseudopolynomial algorithm is polynomial in the binary input length.

## Facts & Assumptions

**Given:** The standard dynamic program for SUBSET SUM that fills an
$n\times T$ table for an instance with $n$ input numbers and target $T$.

[F1] A SUBSET SUM instance writes its target integer in binary, by [[def-subset-sum-and-partition]].

[L1] Worst-case running time is measured as a function of the input length, not of the numeric value of a parameter written inside that input, by [[def-worst-case-time-and-space-complexity]].

## Refutation

**Proof technique:** direct.

1.1 Consider the one-number SUBSET SUM instances
$$ ([2^m],2^m) $$
for $m\ge 1$. By [F1], the binary input length is $O(m)$. [F1, given]

2.1 The standard table-filling algorithm uses $\Theta(nT)=\Theta(2^m)$ time on this family because here $n=1$ and $T=2^m$. [step 1.1, given, algebra]

3.1 Since $2^m$ is exponential in the binary length $m$, the running time in step 2.1 is not polynomial in the input length. By [L1], polynomial-time complexity is measured against that binary length. Therefore pseudopolynomial dependence on $T$ does not imply polynomial dependence on the bit-length of $T$. [L1, step 1.1, step 2.1]

4.1 The statement is false. [step 3.1] ∎
