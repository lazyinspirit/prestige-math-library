---
id: lem-moore-penrose-products-are-orthogonal-projectors
kind: lemma
title: "The Moore-Penrose products are orthogonal projectors"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
dependency_level: 0
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Per-Gunnar Martinsson and Joel A. Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, §§13.1–13.2"
      url: "https://www.tropp.caltech.edu/books/MT20-Randomized-Numerical-arXiv-v3.pdf"
    - title: "Alex Gittens and Michael W. Mahoney, Revisiting the Nyström Method, §4.1"
      url: "https://www.jmlr.org/papers/volume17/gittens16a/gittens16a.pdf"
---

## Statement

Let $M\in\mathbb F^{p\times q}$ be any finite real or complex matrix, and let $M^\dagger$ be its unique Moore-Penrose inverse. Then $P=MM^\dagger$ and $Q=M^\dagger M$ are self-adjoint idempotents. The range of $P$ is $\operatorname{Ran}(M)$, and the range of $Q$ is $\operatorname{Ran}(M^\dagger)$. Thus both are orthogonal projections. If $M$ has full row rank, then $MM^\dagger=I_p$.

## Facts & Assumptions

**Given:** A finite matrix $M\in\mathbb F^{p\times q}$ over $\mathbb F\in\{\mathbb R,\mathbb C\}$.

[F1] [[def-moore-penrose-pseudoinverse]]: $M^\dagger$ satisfies $MM^\dagger M=M$, $M^\dagger M M^\dagger=M^\dagger$, and both $MM^\dagger$ and $M^\dagger M$ are self-adjoint.

[F2] [[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]: every finite real or complex matrix has a unique matrix satisfying the four Moore-Penrose equations.
 
## Proof

1.1 By [F1], $P^*=P$ and $Q^*=Q$. Also $P^2=MM^\dagger MM^\dagger=M(M^\dagger M M^\dagger)=MM^\dagger=P$, and $Q^2=M^\dagger M M^\dagger M=(M^\dagger M M^\dagger)M=M^\dagger M=Q$. Hence both products are self-adjoint idempotents. [F1, F2, algebra]

2.1 The range of $P$ is contained in $\operatorname{Ran}(M)$ because $P=MM^\dagger$, while $PM=M$ by [F1], so $\operatorname{Ran}(M)\subseteq\operatorname{Ran}(P)$. Thus $\operatorname{Ran}(P)=\operatorname{Ran}(M)$. The range of $Q$ is contained in $\operatorname{Ran}(M^\dagger)$, and $QM^\dagger=M^\dagger$ by [F1], so these ranges are equal. [F1, step 1.1]

3.1 A self-adjoint idempotent is the orthogonal projection onto its range: each vector $x$ decomposes as $Px+(I-P)x$, the first term lies in the range, the second lies in the kernel, and self-adjointness makes the range orthogonal to the kernel. The same argument applies to $Q$. If $M$ has full row rank, $\operatorname{Ran}(M)=\mathbb F^p$, so step 2.1 gives $\operatorname{Ran}(P)=\mathbb F^p$ and therefore $P=I_p$. [step 1.1, step 2.1, algebra] ∎
