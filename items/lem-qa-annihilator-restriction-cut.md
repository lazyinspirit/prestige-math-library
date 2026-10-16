---
id: lem-qa-annihilator-restriction-cut
kind: lemma
title: A Fourier sample cuts a larger common kernel
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 6
deps:
  - def-qa-finite-abelian-subgroup-annihilator
  - thm-qa-finite-abelian-evaluation-map-isomorphism
  - thm-qa-finite-abelian-double-annihilator
  - thm-qa-finite-abelian-character-dual-is-finite-abelian-group
  - lem-qa-finite-abelian-annihilators-are-subgroups
  - def-additive-character-of-a-finite-abelian-group
  - def-subgroup
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $G$ be a finite abelian group, and let $H\subsetneq K\le G$. Choose a character $\chi$ uniformly from $H^\perp$. Then
$$\mathbb P(\chi|_K\ne 1)\ge \frac12.$$
For every outcome with $\chi|_K\ne1$, the updated common kernel $K\cap\ker\chi$, where $\ker\chi=\{g\in G:\chi(g)=1\}$, contains $H$ and has index at least two in $K$.

## Facts & Assumptions

**Given:** A finite abelian group $G$ and subgroups $H\subsetneq K\le G$.

[F1] $H^\perp=\{\chi\in\widehat G:\chi(h)=1\text{ for every }h\in H\}$, and $(H^\perp)^\perp=H$ under evaluation. ([[def-qa-finite-abelian-subgroup-annihilator]], [[thm-qa-finite-abelian-double-annihilator]])

[F2] $\widehat G$ is a finite abelian group under pointwise multiplication, so $H^\perp$ is finite. ([[thm-qa-finite-abelian-character-dual-is-finite-abelian-group]])

[F3] A character is a homomorphism $G\to\mathbb C^\times$, so $\chi(x+y)=\chi(x)\chi(y)$ and $\chi(0)=1$. ([[def-additive-character-of-a-finite-abelian-group]])

[F4] A subgroup contains the identity and is closed under addition and inverses. ([[def-subgroup]])

[F5] The canonical evaluation map $g\mapsto(\chi\mapsto\chi(g))$ identifies $G$ with its double dual. ([[thm-qa-finite-abelian-evaluation-map-isomorphism]])

[F6] $H^\perp$ is a subgroup of $\widehat G$ under pointwise multiplication. ([[lem-qa-finite-abelian-annihilators-are-subgroups]])

## Proof

1.1 Choose $g\in K\setminus H$. Under the canonical evaluation identification [F5], [F1] gives $(H^\perp)^\perp=H$, so there is $\chi_0\in H^\perp$ with $\chi_0(g)\ne1$. By [F6], $H^\perp$ is a group; the evaluation map $\epsilon_g:H^\perp\to\mathbb C^\times$, $\epsilon_g(\chi)=\chi(g)$, is a homomorphism because pointwise multiplication gives $\epsilon_g(\chi\psi)=\chi(g)\psi(g)$. Its image is finite by [F2] and is a subgroup because it is the image of a group homomorphism. It contains $1$ and the nonidentity value $\chi_0(g)$, so it has at least two elements. [given, F1, F2, F3, F5, F6, choose, construct]

2.1 Every nonempty fiber of $\epsilon_g$ is a coset of its kernel: $\epsilon_g(\chi)=\epsilon_g(\psi)$ exactly when $\epsilon_g(\chi\psi^{-1})=1$. Therefore at most half of $H^\perp$ maps to $1$. A uniform $\chi\in H^\perp$ has $\chi(g)\ne1$ with probability at least $1/2$, and each such character is nontrivial on $K$ because $g\in K$. [step 1.1, F2, F3, F6, algebra]

3.1 For any $\chi\in H^\perp$, every $h\in H$ satisfies $\chi(h)=1$, so $H\subseteq K\cap\ker\chi$. The set $\ker\chi$ is a subgroup: it contains $0$ by [F3], and the homomorphism law gives closure under addition and inverses. Its intersection with $K$ is a subgroup by [F4]. If $\chi|_K\ne1$, the homomorphism $\chi|_K$ has at least two values; its fibers are cosets of $K\cap\ker\chi$, so $[K:K\cap\ker\chi]=|\chi(K)|\ge2$. [F3, F4, step 2.1] ∎

## Remarks

The current QA-05 double-annihilator and evaluation-map carriers are draft suppliers. Their actual statements and proofs were inspected for this argument; draft status is not independent acceptance.
