---
id: def-qa-binary-dot-product
kind: definition
title: "Binary dot product as parity"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - def-qa-input-encoding-and-size
  - def-qa-binary-field-f2
  - def-integers-modulo-n
  - def-addition-and-multiplication-modulo-n
justified_by: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 2, §2.4, PDF pp. 25–33: Boolean inner products modulo two; Chapter 3, §§3.1–3.3, PDF pp. 35–39: binary linear algebra."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 6, PDF pp. 33–37: Simon's algorithm and linear constraints over binary strings."
---

## Definition

For $n\ge0$ and $a,x\in\{0,1\}^{n}$, define the one-bit **binary dot product**
$$
a\cdot x:=\bigoplus_{i=0}^{n-1}(a_i\land x_i),
$$
where $\land$ is Boolean conjunction and $\bigoplus$ is the left-to-right fold of XOR, with empty fold $0$. It is the parity of the number of coordinates where both bits are $1$. Under the quotient operations of [[def-qa-binary-field-f2]], this bit represents the sum $\sum_{i=0}^{n-1}[a_i]_2[x_i]_2$ in $\mathbb Z/2\mathbb Z$; the equality uses only the operation definitions, not the field axioms.

## Facts & Assumptions

**Given:** A length-$n$ pair of binary strings $a,x$, where $n$ may be zero.

[F1] [[def-qa-input-encoding-and-size]]: bit strings are the specified finite binary encodings, and their length fixes the width $n$.

[F2] [[def-qa-binary-field-f2]]: the two classes $[0]_2,[1]_2$ have quotient addition and multiplication; their addition table is XOR and their multiplication table is Boolean conjunction.

[F3] [[def-integers-modulo-n]]: the carrier $\mathbb Z/2\mathbb Z$ consists of the residue classes modulo $2$.

[F4] [[def-addition-and-multiplication-modulo-n]]: the quotient operations are induced by integer addition and multiplication on representatives.

## Verification

**Proof technique:** induction on the number of processed coordinates.

1.1 For bits $u,v\in\{0,1\}$, the four cases give $u\land v=uv$. Thus $[a_i\land x_i]_2=[a_i]_2[x_i]_2$ for each coordinate by [F2] and [F4]. [given, F1, F2, F3, F4, algebra]

2.1 Let $p_0=0$ and $p_{k+1}=p_k\oplus(a_k\land x_k)$ for $0\le k<n$. The base case has $[p_0]_2=[0]_2$, the empty sum. If $[p_k]_2$ is the left-to-right sum of the first $k$ coordinate products, the addition table in [F2] and the coordinate identity in step 1.1 give $[p_{k+1}]_2=[p_k]_2+[a_k]_2[x_k]_2$. Hence the identity holds at every $k\le n$ by finite induction, including $n=0$. [given, F2, F4, step 1.1, base, ih, algebra]

3.1 At $k=n$, $p_n$ is the defined XOR fold $a\cdot x$, so step 2.1 proves that its residue class is the sum of the coordinate products in the quotient operations. No field axiom is used. [given, F2, step 2.1, discharge-induction] ∎
