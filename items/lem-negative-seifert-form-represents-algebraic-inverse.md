---
id: lem-negative-seifert-form-represents-algebraic-inverse
kind: lemma
title: "The negative Seifert form represents the algebraic inverse"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 9
deps:
  - def-metabolic-seifert-form-and-algebraic-knot-concordance
  - def-axiom-of-choice
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
    date: 2026-10-22
sources:
  references:
    - title: "Charles Livingston, A Survey of Classical Knot Concordance"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.2, Theorem 2.8, printed p. 323"
---

## Statement

Assume full AC when the form is obtained from a knot. For every integral Seifert lattice $(H,V)$, the class represented by $(H,-V)$ is the additive inverse of the class represented by $(H,V)$ in $G_{\mathbb Z}$.

## Statement references

[[def-metabolic-seifert-form-and-algebraic-knot-concordance|The group presentation of algebraic concordance and the definition of a metabolic lattice]]

## Facts & Assumptions

**Given:** An integral Seifert lattice $(H,V)$ and the defining relations of $G_{\mathbb Z}$.

[A1] Full AC is inherited only when the abstract lattice is instantiated as a knot's Seifert pairing; the diagonal calculation below is choice-free. [[def-axiom-of-choice]]

[F1] In $G_{\mathbb Z}$, direct sum is addition and every metabolic lattice represents zero. [[def-metabolic-seifert-form-and-algebraic-knot-concordance]]

## Proof

1.1 In $(H,V)\oplus(H,-V)$, the diagonal subgroup $\Delta H=\{(x,x):x\in H\}$ is a direct summand: it is the kernel of the surjection $(x,y)\mapsto x-y$ and that surjection has section $z\mapsto(z,0)$. Its rank is $\operatorname{rank}H$, half the rank of $H\oplus H$. For $x,y\in H$, $(V\oplus(-V))((x,x),(y,y))=V(x,y)-V(x,y)=0$, so $\Delta H$ is a metabolizer. [A1, F1, given, algebra]

2.1 By [F1], the metabolic direct sum in step 1.1 represents zero, while the direct-sum relation identifies its class with $[V]+[-V]$. Hence $[-V]=-[V]$. [F1, step 1.1, algebra] ∎

