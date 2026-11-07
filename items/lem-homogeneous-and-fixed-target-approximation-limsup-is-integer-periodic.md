---
id: lem-homogeneous-and-fixed-target-approximation-limsup-is-integer-periodic
kind: lemma
title: "Homogeneous and fixed-target linear-form limsup sets are integer-periodic"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-khintchine-groshev-matrix-approximation-set
  - def-inhomogeneous-khintchine-groshev-approximation-set
proof_strategy: direct
verification:
  precheck: n/a
sources:
  references:
    - title: "Beresnevich and Velani, Classical Metric Diophantine Approximation Revisited: the Khintchine–Groshev Theorem, §1"
      url: "https://arxiv.org/pdf/0811.0809v3"
---

## Statement

Let $n,m\ge1$ and let $Z\in\mathbb Z^{n\times m}$. Extend the defining formulas for the homogeneous set $W_{n,m}(\psi)$ and the fixed-target inhomogeneous set $W_{n,m}(\psi;y)$ from the unit cube to all $X\in\mathbb R^{n\times m}$, retaining the same infinitely-many-pairs conditions. Then both extended sets are invariant under translation by $Z$:

$$X\in W_{n,m}(\psi)\iff X+Z\in W_{n,m}(\psi),\qquad X\in W_{n,m}(\psi;y)\iff X+Z\in W_{n,m}(\psi;y).$$

## Facts & Assumptions

**Given:** The homogeneous and fixed-target inequalities use integer row vectors $q$, integer offsets $p$, and ordinary matrix multiplication.

[F1] The homogeneous condition is $\|qX+p\|_\infty<\psi(\|q\|_\infty)$ for infinitely many integer pairs. ([[def-khintchine-groshev-matrix-approximation-set]])

[F2] The fixed-target condition is $\|qX+p-y\|_\infty<\psi(\|q\|_\infty)$ for infinitely many integer pairs. ([[def-inhomogeneous-khintchine-groshev-approximation-set]])

## Proof

1.1 If $X$ satisfies the homogeneous condition for a pair $(q,p)$, then $X+Z$ satisfies it for $(q,p-qZ)$ because $q(X+Z)+(p-qZ)=qX+p$. The map $p\mapsto p-qZ$ is a bijection of $\mathbb Z^m$, so it preserves infinitely many pairs. Applying the same argument with $-Z$ proves the reverse implication. [given, F1, algebra]

1.2 For the fixed-target condition the identical identity gives $q(X+Z)+(p-qZ)-y=qX+p-y$. Again the offset map is a bijection, so infinitely many solutions are preserved in both directions. [given, F2, algebra]

2.1 Steps 1.1 and 1.2 prove both periodicity assertions. [step 1.1, step 1.2] ∎

## Statement references

[Beresnevich and Velani, *Classical Metric Diophantine Approximation Revisited: the Khintchine–Groshev Theorem*, §1](https://arxiv.org/pdf/0811.0809v3)
