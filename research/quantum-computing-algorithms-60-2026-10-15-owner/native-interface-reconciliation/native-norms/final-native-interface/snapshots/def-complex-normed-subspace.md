---
id: def-complex-normed-subspace
kind: definition
title: "A complex normed linear subspace"
status: draft
origin: pipeline
pipeline_run: quantum-prerequisites-4-2026-10-15
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-complex-norm-and-complex-normed-space, def-linear-subspace]
justified_by: []
dependency_level: 1
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Tomasz Kochanek, Functional analysis, Lecture 1 (complete five-page lecture notes)"
      url: "https://www.impan.pl/~tkoch/FA_lecturenotes/lecture1.pdf"
    - title: "M. Winklmeier, Functional Analysis lecture notes (complete 140-page lecture notes)"
      url: "https://math.uniandes.edu.co/~mwinklme/teaching/FuncAna/FA-lecture_notes.pdf"
---

## Definition

Let $(V,N)$ be a complex normed space ([[def-complex-norm-and-complex-normed-space]]) and let $W\subseteq V$ be a complex-linear subspace ([[def-linear-subspace]] over $\mathbb C$). Define the restricted norm $N_W:W\to\mathbb R$ by $N_W(w):=N(w)$. The pair $(W,N_W)$ is the **complex normed subspace** determined by $W$.

## Facts & Assumptions

**Given:** A complex normed space $(V,N)$ and a complex-linear subspace $W\subseteq V$.

[F1] $N$ separates zero, satisfies $N(\lambda v)=|\lambda|_{\mathbb C}N(v)$ for every $\lambda\in\mathbb C$, and satisfies the triangle inequality ([[def-complex-norm-and-complex-normed-space]]).

[F2] A linear subspace contains zero, is closed under addition, and is closed under multiplication by every scalar in its field; here that field is $\mathbb C$ ([[def-linear-subspace]]).

## Proof

1.1 For $w\in W$, $N_W(w)=0$ iff $N(w)=0$ iff $w=0$ by [F1], so the restriction separates zero. [F1]

2.1 If $w\in W$ and $\lambda\in\mathbb C$, then $\lambda w\in W$ by [F2] and $N_W(\lambda w)=N(\lambda w)=|\lambda|_{\mathbb C}N(w)=|\lambda|_{\mathbb C}N_W(w)$ by [F1]. If $u,w\in W$, then $u+w\in W$ and $N_W(u+w)=N(u+w)\le N(u)+N(w)=N_W(u)+N_W(w)$, again by [F1]. Thus the restricted function has the full complex homogeneity and triangle properties as well. [F1, F2, step 1.1] ∎
