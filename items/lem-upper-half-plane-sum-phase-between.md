---
id: lem-upper-half-plane-sum-phase-between
kind: lemma
title: "The phase of a sum lies between upper-half-plane phases"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-finite-acyclic-quiver-stability-data
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tom Bridgeland, Hall algebras and Donaldson–Thomas invariants, §4.4"
      url: "https://arxiv.org/pdf/1611.03696"
    - title: "Markus Reineke, The Harder–Narasimhan system in quantum groups and cohomology of quiver moduli, Lemma 2.2"
      url: "https://arxiv.org/pdf/math/0204059"
verification:
  precheck: pass
---

## Statement

Let $\mathbb H=\{z\in\mathbb C:\operatorname{Im}z>0\}$ and define
$\phi(z)=\arg(z)/\pi\in(0,1)$. For $z,w\in\mathbb H$, the phase of $z+w$
lies between $\phi(z)$ and $\phi(w)$, strictly between them when they are
unequal and equal to their common value when they coincide.

## Facts & Assumptions

**Given:** $z,w\in\mathbb H$.

[F1] The stability convention is $\mathbb H=\{z:\operatorname{Im}z>0\}$ and
$\phi(z)=\arg(z)/\pi\in(0,1)$
([[def-finite-acyclic-quiver-stability-data]]).

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Suppose $\arg z>\arg w$. Then $\operatorname{Im}(\overline w z)=|w||z|\sin(\arg z-\arg w)>0$. Consequently $\operatorname{Im}(\overline w(z+w))>0$, which, by [F1], gives $\arg(z+w)>\arg w$. Also $\operatorname{Im}(\overline{(z+w)}z)=\operatorname{Im}(\overline w z)>0$, so [F1] gives $\arg z>\arg(z+w)$. [F1, algebra]


2.1 If $\arg w>\arg z$, interchange $z,w$ in step 1.1. If the arguments are equal, $z,w$ are positive real multiples of the same ray, so their sum has that same argument. These cases prove the stated between-phase rule. [F1, step 1.1, algebra] ∎
