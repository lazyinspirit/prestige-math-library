---
id: thm-parenthesised-words-of-a-given-length-are-counted-by-the-catalan-numbers
kind: theorem
title: "Parenthesised tensor words of a fixed length are counted by the Catalan numbers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-parenthesised-tensor-word]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Exercise 2.9.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Statement

For $n\ge1$, let $a_n$ be the number of parenthesised tensor words on the
letters $x_1,\dots,x_n$ with no inserted unit symbol. Then $a_1=1$ and

$$a_n=\sum_{k=1}^{n-1}a_k a_{n-k}\qquad(n\ge2).$$

Equivalently, $a_n=C_{n-1}$, where the Catalan numbers are defined by
$C_0=1$ and

$$C_m=\sum_{k=0}^{m-1}C_kC_{m-1-k}\qquad(m\ge1).$$

## Facts & Assumptions

**Given:** The recursive formation rule for parenthesised tensor words.

[L1] A parenthesised tensor word is either one letter or a composite $(u\otimes v)$ built recursively, with the letters kept in order ([[def-parenthesised-tensor-word]]).

## Proof

**Proof technique:** direct.

1.1 For $n=1$ there is only the word $x_1$, so $a_1=1$. [given, L1]

1.2 If $n\ge2$, every word has a unique outermost decomposition $(u\otimes v)$, where $u$ uses the first $k$ letters and $v$ uses the remaining $n-k$ letters for a unique $k$ with $1\le k\le n-1$. Conversely, every such pair $(u,v)$ produces a word on $n$ letters. [L1]

2.1 Therefore the words on $n$ letters are partitioned by the value of $k$, and for fixed $k$ there are $a_k a_{n-k}$ choices. Summing over $k$ gives $a_n=\sum_{k=1}^{n-1}a_k a_{n-k}$. [step 1.2, algebra]

3.1 The recurrence in step 2.1 is exactly the Catalan recurrence after the index shift $a_n=C_{n-1}$, and step 1.1 matches the initial value $C_0=1$. Hence $a_n=C_{n-1}$ for all $n\ge1$. [step 1.1, step 2.1, algebra] ∎
