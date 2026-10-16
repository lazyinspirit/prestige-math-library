---
id: def-qa-simon-promise
kind: definition
title: "Simon hidden-XOR-period promise"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - def-qa-binary-field-f2
  - def-qa-standard-bit-query
justified_by: []
proof_strategy: direct
axiom_use: "No Choice is used; the fibers and label assignment are finite, and labels are enumerated lexicographically."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6, 2026)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 3 §§3.1-3.3, PDF pp.35-39: Simon promise, one-sample derivation, uniform s-perp law, rank growth, expected queries and classical lower-bound proof."
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms (updated November 2020)"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
      locator: "§6.1, PDF pp.11-13 and §6.5, PDF pp.27-33: independent Simon sample derivation and finite-abelian HSP context."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 6, PDF pp.33-37: Simon as a finite-abelian hidden-subgroup instance and Fourier sampling context."
---
## Definition

Fix integers $n\ge1$ and $m\ge n-1$. A total function $f:\{0,1\}^n\to\{0,1\}^m$ satisfies the **Simon hidden-XOR-period promise** if there is a unique nonzero string $s\in\{0,1\}^n$ such that for all $x,y\in\{0,1\}^n$,

$$f(x)=f(y)\quad\Longleftrightarrow\quad (y=x\text{ or }y=x\oplus s).$$

For the query algorithms using this promise, the instance is $n,m$ together with black-box access to $f$: the solver receives no function table or other information depending on $f$. Each oracle call uses the standard bit-query interface [[def-qa-standard-bit-query]]. Its witness relation $R(f,s)$ holds exactly when $s$ is the nonzero mask in the displayed iff condition, so the required output is the unique hidden mask. The address operation $\oplus$ is the coordinatewise addition of [[def-qa-binary-field-f2]]. The output width condition lets the $2^{n-1}$ fibers receive distinct labels; it does not promise that the image uses every $m$-bit label. Each fiber is exactly $\{x,x\oplus s\}$.

## Facts & Assumptions
**Given:** Integers $n\ge1$, $m\ge n-1$, and the binary residue operation from [[def-qa-binary-field-f2]].

[F1] [[def-qa-binary-field-f2]]: addition in $\mathbb F_2$ is the residue operation modulo two, represented on bits by XOR.

## Verification

1.1 Set $s=(1,0,\ldots,0)$, which is a nonzero $n$-bit string because $n\ge1$. For every $x$, $x\oplus s\ne x$ and $(x\oplus s)\oplus s=x$, so this involution partitions the $2^n$ addresses into disjoint two-element fibers; there are $2^{n-1}$ fibers. [given, F1, construct, algebra]

2.1 The set of $m$-bit labels has $2^m$ elements: it has one empty word at width zero, and appending either $0$ or $1$ doubles the count at each additional bit. Since $m\ge n-1$, there are at least $2^{n-1}$ labels. Order the fibers by their least address and assign the first $2^{n-1}$ labels in lexicographic order; this constructs a total oracle satisfying the iff condition, so the promised family is nonempty. [given, step 1.1, construct, algebra]

3.1 The displayed iff condition makes the output fiber of $x$ exactly $\{x,x\oplus s\}$. Since $s\ne0$, the two members are distinct. For any other nonzero period $t$, the point $x\oplus t$ is the unique other member of the fiber of $x$, so $x\oplus t=x\oplus s$ and cancellation gives $t=s$. This verifies the uniqueness clause in the Definition. [given, step 1.1, algebra] ∎

