---
id: lem-communication-is-an-equivalence-relation
kind: lemma
title: "Communication is an equivalence relation"
status: draft
origin: pipeline
deps:
  - def-accessibility-communication-and-irreducibility
  - lem-matrix-chapman-kolmogorov-equations
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
      locator: "Section 1.7, communicating classes and Exercise 1.13, printed pp. 15-17; that section states the finite-state setting"
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
---

## Statement

For a countable transition matrix on $E$, communication is an equivalence relation on $E$, and its equivalence classes partition $E$.

## Facts & Assumptions

**Given:** A countable state space $E$ and its transition matrix $p$.

[F1] Accessibility means $x\to y$ exactly when $p^{(n)}(x,y)>0$ for some $n\in\mathbb N_0$. [[def-accessibility-communication-and-irreducibility]]

[F2] Communication is mutual accessibility: $x\leftrightarrow y$ means $x\to y$ and $y\to x$. [[def-accessibility-communication-and-irreducibility]]

[F3] The zero-step row satisfies $p^{(0)}(x,y)=\mathbf 1_{\{x=y\}}$, so each state is accessible from itself. [[def-accessibility-communication-and-irreducibility]]

[F4] For $m,n\in\mathbb N_0$, $p^{(m+n)}(x,z)=\sum_{w\in E}p^{(m)}(x,w)p^{(n)}(w,z)$. [[lem-matrix-chapman-kolmogorov-equations]]

## Proof

**Proof technique:** direct.

1.1 By [F3], $p^{(0)}(x,x)=1$, hence $x\to x$ and $x\leftrightarrow x$ for every $x\in E$. The definition in [F2] is symmetric in $x,y$, so communication is symmetric. [F2, F3, given]

1.2 Suppose $x\to y$ and $y\to z$. By [F1], choose $m,n\in\mathbb N_0$ with $p^{(m)}(x,y)>0$ and $p^{(n)}(y,z)>0$. The nonnegative series in [F4] contains the term at $w=y$, so $p^{(m+n)}(x,z)\ge p^{(m)}(x,y)p^{(n)}(y,z)>0$. Thus $x\to z$. The argument permits either witness length to be zero. [F1, F4, given]

2.1 If $x\leftrightarrow y$ and $y\leftrightarrow z$, then $x\to y\to z$ gives $x\to z$ by step 1.2, and $z\to y\to x$ gives $z\to x$ by the same step. Therefore $x\leftrightarrow z$, proving transitivity of communication. [F2, step 1.2, given]

3.1 Define $[x]:=\{y\in E:x\leftrightarrow y\}$. Reflexivity makes each $[x]$ contain $x$, so these classes cover $E$. If $c\in[x]\cap[z]$, symmetry and transitivity give $x\leftrightarrow z$; then every member of either class belongs to the other, so $[x]=[z]$. Thus distinct classes are disjoint and the classes partition $E$. [step 1.1, step 2.1, given]

4.1 If $E=\varnothing$, there are no states or classes and the assertion is vacuous. If $E$ has one state, step 1.1 gives its sole class. Absorbing or otherwise degenerate rows cause no exception: the proof uses only zero-step identity and positive accessibility witnesses. No global choice is made; for each fixed triple in step 1.2, the two existential witnesses are used locally. [F1, F3, step 1.1, step 1.2, step 3.1, given] ∎
