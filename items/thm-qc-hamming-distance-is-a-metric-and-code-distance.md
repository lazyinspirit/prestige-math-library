---
id: thm-qc-hamming-distance-is-a-metric-and-code-distance
kind: theorem
title: Hamming distance is a metric and linear-code distance is minimum nonzero weight
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps: [def-qc-classical-linear-code-over-finite-field, def-qc-hamming-weight-distance-and-linear-code-distance]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Richard Cleve, Quantum Information Processing course notes, §§37.1–37.1.3
      url: https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf
    - title: John Preskill, Quantum Computation, Chapter 7, §7.6
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Statement

For every finite field $F$ and $n\in\mathbb N$, $d_H(x,y)=\operatorname{wt}(x-y)$ is a metric on $F^n$. If $n\ge1$ and $C\le F^n$ is the codeword subspace of a classical linear code, then for nonzero $C$, $\min_{x\ne y\in C}d_H(x,y)=\min_{0\ne c\in C}\operatorname{wt}(c)=d(C)$. For $C=\{0\}$ there are no distinct codewords, and the distance parameter is the stated convention $n+1$.

## Facts & Assumptions

**Given:** A finite field $F$ and $n\in\mathbb N$ for the metric claim. For the code-distance claim, assume $n\ge1$, let $C\le F^n$ be a classical linear code, and use the weight and distance functions of [[def-qc-hamming-weight-distance-and-linear-code-distance]].

[L1] [[def-qc-classical-linear-code-over-finite-field]]: A code $C$ is a linear subspace of $F^n$, so it contains $0$ and is closed under subtraction.

[L2] [[def-qc-hamming-weight-distance-and-linear-code-distance]]: $\operatorname{wt}(x)$ counts nonzero coordinates, $d_H(x,y)=\operatorname{wt}(x-y)$, and $d(C)$ is the minimum nonzero weight or $n+1$ for the zero code.

## Proof

1.1 Weight is nonnegative and vanishes exactly on the zero vector. Also $\operatorname{wt}(-z)=\operatorname{wt}(z)$ because $z_j=0$ exactly when $-z_j=0$. Hence $d_H(x,y)\ge0$, $d_H(x,y)=0$ exactly when $x=y$, and $d_H(x,y)=d_H(y,x)$. [L2, algebra]

1.2 If $(x-z)_j\ne0$, then at least one of $(x-y)_j$ or $(y-z)_j$ is nonzero, since their sum is $(x-z)_j$. Therefore the support of $x-z$ is contained in the union of the supports of $x-y$ and $y-z$, so $d_H(x,z)\le d_H(x,y)+d_H(y,z)$. [L2, algebra]

2.1 If $C\ne\{0\}$ and $x,y\in C$ are distinct, then [L1] gives $x-y\in C\setminus\{0\}$, so $d_H(x,y)\ge d(C)$. Conversely every $c\in C\setminus\{0\}$ occurs as the difference of the pair $(c,0)$, and $d_H(c,0)=\operatorname{wt}(c)$. Thus the two nonempty sets of distances have the same minimum. When $C=\{0\}$ no distinct pair exists, and [L2] supplies the separate convention. [L1, L2] ∎

## Remarks

This proof is independent of the field characteristic and uses no choice principle.
