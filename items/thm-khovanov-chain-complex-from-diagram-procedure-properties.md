---
id: thm-khovanov-chain-complex-from-diagram-procedure-properties
kind: theorem
title: "The Khovanov diagram procedure terminates and returns a finite cochain complex"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - alg-khovanov-chain-complex-from-diagram
  - lem-khovanov-cube-differential-squares-to-zero
  - def-cochain-complex-in-an-abelian-category
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov, A categorification of the Jones polynomial, arXiv:math/9908171v2, §§3.3–4.2"
      url: "https://arxiv.org/pdf/math/9908171v2"
    - title: "Dror Bar-Natan, On Khovanov's categorification of the Jones polynomial, Algebraic & Geometric Topology 2 (2002), §3"
      url: "https://arxiv.org/pdf/math/0201043"
    - title: "Louis H. Kauffman, An Introduction to Khovanov Homology, arXiv:1107.1524v2 (2022), §4"
      url: "https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf"
    - title: "Melissa Zhang, Notes on Khovanov homology, arXiv:2501.03115v1, §§3.5–3.7"
      url: "https://arxiv.org/pdf/2501.03115v1"
---

## Statement

For a finite regular oriented link diagram $D$ with $n$ ordered crossings, the procedure that enumerates all $2^n$ smoothing states, assigns one copy of $\mathcal A=\mathbb Z[X]/(X^2)$ per resolution circle, places a generator in degrees $i=|v|-n_-$ and $j=|v|+n_+-2n_-+\sum\deg(a)$, and sums the signed merge or split edge maps terminates after finitely many operations. Its output is a finite direct sum of finite-rank free abelian groups with a differential of bidegree $(1,0)$ satisfying $d^2=0$; hence it is a bounded bigraded cochain complex.

## Statement references

[[alg-khovanov-chain-complex-from-diagram|State enumeration and edge-map procedure]]

[[lem-khovanov-cube-differential-squares-to-zero|Square-zero property of the signed differential]]

[Khovanov, *A categorification of the Jones polynomial* (1999), §§3.3–4.2](https://arxiv.org/pdf/math/9908171v2)

[Bar-Natan, *On Khovanov's categorification of the Jones polynomial* (2002), §3](https://arxiv.org/pdf/math/0201043)

[Kauffman, *An Introduction to Khovanov Homology* (2022), §4](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf)

[Zhang, *Notes on Khovanov homology* (2025), §§3.5–3.7](https://arxiv.org/pdf/2501.03115v1)

## Facts & Assumptions
**Given:** A finite regular oriented link diagram $D$ with an ordered crossing set of cardinality $n$ and the finite state procedure in the Theorem.

[F1] The procedure traverses each function $v:C(D)\to\{0,1\}$ once, uses a finite number of edge maps per state, and assigns $\mathcal A^{\otimes k(v)}$ with the stated gradings ([[alg-khovanov-chain-complex-from-diagram]]).

[F2] The signed edge sum has square zero for every such finite ordered diagram ([[lem-khovanov-cube-differential-squares-to-zero]]).

## Proof

1.1 If $n=|C(D)|$, there are exactly $2^n$ states; each complete smoothing of a finite closed diagram has finitely many circles. Since $\mathcal A$ is free of rank two with basis $1,X$, each state module is finite-rank free, and the finite sum of these modules is finite-rank free. The procedure visits each of finitely many states and at most $n$ outgoing edges per state, so it terminates. [F1, given, algebra]

2.1 Each edge changes $|v|$ and $i$ by $+1$ and changes the algebraic degree by $-1$ through $m$ or $\Delta$, so its total quantum-degree change is $+1-1=0$. By [F2] the returned differential squares to zero. The state set is finite, so only finitely many homological degrees occur; this is a bounded bigraded cochain complex. [F1, F2, step 1.1, algebra] ∎
