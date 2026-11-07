---
id: thm-canonical-height-northcott-property
kind: theorem
title: Northcott finiteness for bounded canonical height over a number field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field
  - def-axiom-of-choice
  - def-dependent-choice
  - def-neron-tate-canonical-height
  - thm-weil-height-machine-functoriality-and-additivity
  - thm-northcott-finiteness-for-projective-points
  - thm-canonical-height-is-quadratic-and-functorial
  - lem-neron-tate-height-limit-exists
  - thm-abelian-variety-is-projective
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Brian Conrad, Abelian Varieties"
      url: "https://math.stanford.edu/~conrad/249CS15Page/handouts/abvarnotes.pdf"
      locator: "§§10.1–10.3, canonical height differing from a Weil height by a bounded amount, pp. 93–103."
    - title: "Bjorn Poonen, Rational Points on Varieties"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "§2.6 and §8.4.4–8.4.5, Northcott and canonical-height descent."
---

## Statement

Assume the Axiom of Choice and Dependent Choice. Let $K/\mathbb Q$ be a finite extension, let $A/K$ be a proper, smooth, geometrically connected group variety, and let $L$ be an invertible sheaf satisfying $[-1]^*L\cong L$ and having a positive tensor power that defines a closed immersion into projective space. For every real $C\ge0$, the set $\{P\in A(K):\widehat h_L(P)\le C\}$ is finite, where $\widehat h_L(P)=\lim_{j\to\infty}4^{-j}h_L([2]^jP)$ for a Weil height $h_L$ of $L$.

## Statement references

[[def-axiom-of-choice|Axiom of Choice]]

[[def-dependent-choice|Dependent Choice]]

[[def-neron-tate-canonical-height|canonical height]]

[[def-abelian-variety-over-a-field|abelian variety]]

## Facts & Assumptions

**Given:** AC and DC; a finite extension $K/\mathbb Q$; an abelian variety $A/K$; a symmetric ample line bundle $L$; and $C\ge0$.

[A1] AC and DC are the stated axioms ([[def-axiom-of-choice]], [[def-dependent-choice]]).

[F1] The canonical-height limit differs from the chosen representative Weil height by a bounded function ([[lem-neron-tate-height-limit-exists]]).

[F2] The height machine identifies the height of a tensor power with the corresponding multiple modulo bounded functions ([[thm-weil-height-machine-functoriality-and-additivity]]).

[F3] For a fixed number field and projective dimension, points of bounded absolute logarithmic projective height form a finite set ([[thm-northcott-finiteness-for-projective-points]]).

[F4] Every abelian variety over a field is projective under AC ([[thm-abelian-variety-is-projective]]).

## Proof

**Proof technique:** compare the canonical height with the projective height induced by a very ample power of $L$, then apply projective Northcott finiteness.

1.1 By [F4], $A$ is projective; since $L$ is ample, choose $r\ge1$ and a closed immersion $i:A\hookrightarrow\mathbb P^N_K$ with $i^*\mathcal O(1)\cong L^{\otimes r}$. The Weil height machine [F2] gives $h_{\mathbb P^N}(i(P))=r h_L(P)+O(1)$ uniformly for $P\in A(K)$. By [F1], $\widehat h_L(P)-h_L(P)$ is also uniformly bounded. Hence $\widehat h_L(P)\le C$ implies $h_{\mathbb P^N}(i(P))\le r(C+D)+E$ for fixed constants $D,E$. [A1, F1, F2, F4, given, construct]

2.1 Choose $B\ge1$ with $\log B\ge r(C+D)+E$. By [F3], only finitely many points of $\mathbb P^N(K)$ have height at most $\log B$; the closed immersion $i$ is injective on $K$-points, so only finitely many $P\in A(K)$ satisfy the canonical-height bound. AC and DC enter through the cited height and projectivity suppliers. [A1, F3, F4, step 1.1] ∎
