---
id: lem-number-ring-is-regular-projective-arithmetic-curve
kind: lemma
title: "The spectrum of a number ring is a regular projective arithmetic curve"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - cor-ring-of-integers-is-a-dedekind-domain
  - def-axiom-of-choice
  - def-arithmetic-variety-over-the-integers
  - def-dedekind-domain
  - def-embedding-dimension-and-regular-local-ring
  - def-number-field
  - def-projective-morphism-pre-proj
  - def-regular-local-ring-geometric-point
  - def-ring-of-integers-of-a-number-field
  - thm-equivalent-characterisations-of-a-dvr
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Henri Gillet and Christophe Soulé, Arithmetic intersection theory"
      url: "https://www.numdam.org/article/PMIHES_1990__72__93_0.pdf"
      locator: "§§3.1–3.2, printed pp. 124–126"
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Chapter 3, Theorem 3.1, ring of integers is Dedekind"
verification:
  precheck: n/a
---

## Statement

Assume the Axiom of Choice. For every number field $K$ with ring of integers $\mathcal O_K$, the scheme $\operatorname{Spec}\mathcal O_K$ is a regular projective arithmetic variety of total dimension one and relative dimension zero over $\operatorname{Spec}\mathcal O_K$.

## Statement references

[Gillet–Soulé, §§3.1–3.2](https://www.numdam.org/article/PMIHES_1990__72__93_0.pdf)

[Milne, Algebraic Number Theory, Theorem 3.1](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$, and its ring of integers $R=\mathcal O_K$.

[A1] Under the Axiom of Choice, the ring of integers is the integral closure of $\mathbb Z$ in $K$ and is Dedekind ([[def-axiom-of-choice]], [[def-ring-of-integers-of-a-number-field]], [[cor-ring-of-integers-is-a-dedekind-domain]]).

[F1] A Dedekind domain is a one-dimensional Noetherian integrally closed domain ([[def-dedekind-domain]]).

[F2] A one-dimensional Noetherian local integrally closed domain is a discrete valuation ring; equivalently it is a local principal ideal domain with nonzero maximal ideal ([[thm-equivalent-characterisations-of-a-dvr]]).

[F3] A point of a locally Noetherian scheme is regular exactly when its local ring is a regular local ring, whose embedding dimension equals its Krull dimension ([[def-regular-local-ring-geometric-point]], [[def-embedding-dimension-and-regular-local-ring]]).

[F4] A morphism is projective if it factors as a closed immersion into $\mathbb P^n$ followed by projection, with $n=0$ allowed and $\mathbb P^0_S\cong S$ ([[def-projective-morphism-pre-proj]]).

[F5] An arithmetic variety is flat and finite type over the number ring with smooth quasi-projective generic fibre; regularity is regularity of the total scheme, and projectivity means the structural morphism is projective ([[def-arithmetic-variety-over-the-integers]]).

## Proof

**Given:** The Axiom of Choice, a number field $K$, and $R=\mathcal O_K$.

1.1 By [A1] and [F1], $R$ is a one-dimensional Noetherian integrally closed domain. Its prime ideals are $(0)$ and its nonzero prime ideals. At $(0)$, the local ring is the field $K$, which has dimension and embedding dimension zero. For every nonzero prime $\mathfrak p$, $R_{\mathfrak p}$ is a one-dimensional Noetherian local integrally closed domain, so [F2] makes it a discrete valuation ring and a local principal ideal domain with nonzero maximal ideal. Write its maximal ideal as $(\pi)$. The class of $\pi$ in $(\pi)/(\pi^2)$ is nonzero, since $\pi=\pi^2a$ would imply $1=\pi a$ in the domain, contradicting that $\pi$ is a nonunit. Hence its embedding dimension is one; its dimension is one, so it is regular local by [F3]. Thus every point of $\operatorname{Spec}R$ is regular by [F3]. [A1, F1, F2, F3, given, algebra]

2.1 The structure morphism $\operatorname{Spec}R\to\operatorname{Spec}R$ is the identity, hence flat and finite type. It factors as the identity closed immersion into $\mathbb P^0_R\cong\operatorname{Spec}R$, so is projective by [F4]. Its generic fibre is $\operatorname{Spec}K$, a smooth zero-dimensional quasi-projective $K$-scheme. Therefore [F5] makes $\operatorname{Spec}R$ an arithmetic variety of relative dimension zero and total dimension one; step 1.1 proves it regular. [F4, F5, step 1.1, given, algebra] ∎
