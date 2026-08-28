---
id: thm-laplacian-is-positive-semidefinite-and-annihilates-ones
kind: theorem
title: "The Laplacian is positive semidefinite and sends the all-ones vector to zero"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-laplacian-matrix-of-a-finite-simple-graph, def-oriented-incidence-matrix-of-a-graph, thm-laplacian-is-the-oriented-incidence-product]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, MIT 18.314 handout, Lemma 1.6(a)"
      url: "https://ocw.mit.edu/courses/18-314-combinatorial-analysis-fall-2014/2724112ea36679f82dc04f0b2f4f355e_MIT18_314F14_mt.pdf"
---

## Statement

Let $G$ be a finite simple graph on $n$ vertices, let $L(G)$ be its Laplacian
matrix, and let $\mathbf 1\in\mathbb R^n$ be the all-ones column vector. Then:

1. $x^{\mathsf T}L(G)x\ge0$ for every $x\in\mathbb R^n$;
2. $L(G)\mathbf 1=0$.

In particular, $L(G)$ is positive semidefinite.

## Facts & Assumptions

**Given:** A finite simple graph $G$ with Laplacian $L$ and an oriented incidence matrix $B$.

[L1] The Laplacian satisfies $L=BB^{\mathsf T}$ ([[thm-laplacian-is-the-oriented-incidence-product]]).

[F1] Every column of an oriented incidence matrix has one $1$ and one $-1$ ([[def-oriented-incidence-matrix-of-a-graph]]).

## Proof

**Proof technique:** direct.

1.1 For every $x\in\mathbb R^n$, [L1] gives $x^{\mathsf T}Lx=x^{\mathsf T}BB^{\mathsf T}x=(B^{\mathsf T}x)^{\mathsf T}(B^{\mathsf T}x)$. The right-hand side is a sum of squares of real numbers, so it is nonnegative. [L1, algebra]

1.2 Let $\mathbf 1$ be the all-ones vector. Because each column of $B$ has one $1$ and one $-1$, [F1] implies that every column sum of $B$ is $0$, so $B^{\mathsf T}\mathbf 1=0$. Using [L1] again gives $L\mathbf 1=BB^{\mathsf T}\mathbf 1=B0=0$. [F1, L1, algebra]

2.1 Step 1.1 proves positive semidefiniteness, and step 1.2 proves that the all-ones vector lies in the kernel. [step 1.1, step 1.2] ∎
