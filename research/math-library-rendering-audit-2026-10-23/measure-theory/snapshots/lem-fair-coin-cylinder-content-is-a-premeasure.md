---
id: lem-fair-coin-cylinder-content-is-a-premeasure
kind: lemma
title: Fair-coin cylinder content is a premeasure
deps: ["def-binary-sequence-cylinders-and-fair-coin-content", "lem-binary-sequence-space-is-compact-without-tychonoff", "def-premeasure-on-an-algebra"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: E–W Examples 2.8–2.9; local compactness construction
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

The fair-coin content $p_0$ on the cylinder algebra $\mathcal C$ is a finite premeasure, with $p_0(\Omega)=1$. This assertion is choice-free.

## Facts & Assumptions

[F1] Common refinement proves finite additivity and total mass one. [[def-binary-sequence-cylinders-and-fair-coin-content]].

[F2] Omega is compact and cylinders are clopen. [[lem-binary-sequence-space-is-compact-without-tychonoff]].

[F3] Only disjoint countable unions remaining in the algebra must be additive. [[def-premeasure-on-an-algebra]].

## Proof

**Given:** The fair-coin content $p_0$ on the cylinder algebra $\mathcal C$ is a finite premeasure, with $p_0(\Omega)=1$. This assertion is choice-free.

1.1 Let $A=\bigcup_{n\ge0}A_n$ with disjoint $A_n\in\mathcal C$ and $A\in\mathcal C$. All these sets are clopen, being finite unions of clopen cylinders. The family consisting of $\Omega\setminus A$ and all A_n is an open cover of Omega. Compactness gives finitely many members covering Omega and hence finitely many A_n covering A. Using their least indices if the same member repeats gives a finite index set F with $A=\bigcup_{n\in F}A_n$. This uses ambient compactness only of Omega itself, not an unstated compact-subset criterion. [F1, F2]

2.1 For every n outside F, disjointness gives $A_n\subseteq A\setminus\bigcup_{j\in F}A_j=\varnothing$. Thus all other terms have zero content, and finite additivity gives $p_0(A)=\sum_{n\in F}p_0(A_n)=\sum_{n\ge0}p_0(A_n)$. If A is empty every A_n is empty and the same identity is zero equals zero. Along with $p_0(\varnothing)=0$ and $p_0(\Omega)=1$, this is precisely a finite premeasure. [step 1.1, F1, F3] ∎

