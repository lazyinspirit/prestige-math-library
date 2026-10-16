---
id: cex-qa-24-parity-violation
kind: counterexample
title: Parity violation makes singular-value action basis dependent
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-qa-24-singular-value-transform
  - def-qc-dirac-notation-conversion
proof_strategy: direct
axiom_use: "None; the counterexample is one-dimensional."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond"
      url: https://arxiv.org/pdf/1806.01838
      locator: "Definition 16 and Theorem 17, PDF pp. 18–19; the counterexample checks why the parity restriction is needed."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Chapter 29 §29.3, printed pp. 146–147; PDF pp. 154–155."
---

## Statement

A false extension of the odd singular-value formula that assigns a nonzero coefficient to zero-singular-vector pairs depends on arbitrary basis choices. Take $A=0:\mathbb C\to\mathbb C$ and the scalar function $f(x)=1$. Pair the right zero vector $v=1$ with either left zero vector $u=1$ or $u=-1$. The resulting rank-one sums are respectively $I$ and $-I$, despite the same zero map $A$.

## Facts & Assumptions

**Given:** The zero linear map $A:\mathbb C\to\mathbb C$, the scalar value $f(0)=1$, and the rank-one map convention of [[def-qc-dirac-notation-conversion]].

[F1] [[def-qa-24-singular-value-transform]]: an odd singular-value transform sums only over positive singular pairs, while an even right transform uses $f(0)$ times the canonical projection onto $\ker A$.

[F2] [[def-qc-dirac-notation-conversion]]: $|u\rangle\langle v|$ maps $x$ to $\langle x,v\rangle_{\mathrm{root}}u$.

## Proof

1.1 For $A=0$, the entire domain and codomain are zero-singular spaces; both $u=1$ and $u=-1$ are unit left-kernel vectors, and $v=1$ is a unit right-kernel vector. With the first pairing, $|1\rangle\langle1|$ sends $x$ to $x$, so the false zero-pair sum with coefficient $f(0)=1$ is $I$. [given, F2, algebra]

2.1 With the second equally valid left singular basis, $|-1\rangle\langle1|$ sends $x$ to $-x$, so the same false rule gives $-I$. Since $I\ne-I$ on $\mathbb C$, this rule is not basis independent. The valid odd definition avoids the defect because odd polynomials have $f(0)=0$ and the sum contains only positive singular values; the valid even definition adds $f(0)\Pi_{\ker A}=I$, which is canonical and unchanged by the choice of kernel basis. [F1, F2, step 1.1, algebra] ∎
