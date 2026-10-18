---
id: lem-fusion-ring-character-orthogonality
kind: lemma
title: "Distinct fusion-ring characters are orthogonal under duality"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-fusion-rules, def-fusion-and-multifusion-category]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, Lemma 8.14.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Etingof, Nikshych, and Ostrik, On Fusion Categories, §2.1"
      url: "https://arxiv.org/pdf/math/0203060"
---

## Statement

Let $A$ be a fusion ring over $\mathbb Z$ with finite distinguished basis $I$, unit $0$, and duality $i\mapsto i^*$. If $\chi,\psi:A\to\mathbb C$ are distinct unital ring homomorphisms, then $\sum_{i\in I}\chi(i)\psi(i^*)=0$.

## Facts & Assumptions

**Given:** A finite fusion ring $A$ with its distinguished basis, duality, and two distinct unital ring characters $\chi,\psi$.

[F1] Multiplication has structure constants $N_{ab}^c$ in the distinguished basis, and Frobenius reciprocity gives $N_{y,x^*}^z=N_{y^*,z}^{x^*}$ ([[def-fusion-rules]], [[def-fusion-and-multifusion-category]]).

[F2] A unital ring character is additive, multiplicative, and sends the unit basis element to $1$.

## Proof

**Given:** The data in the Statement.

1.1 For a basis element $y$, form $P_\chi=\sum_{x\in I}\chi(x)x^*$ in $A\otimes_{\mathbb Z}\mathbb C$. The coefficient of $z$ in $yP_\chi$ is $\sum_x\chi(x)N_{y,x^*}^z=\sum_u\chi(u^*)N_{y^*,z}^{u}$ by [F1], after setting $u=x^*$. By multiplicativity and the anti-involution identity $(y^*z)^*=z^*y$, this equals $\chi(z^*)\chi(y)$, which is the coefficient of $z$ in $\chi(y)P_\chi$. Hence $yP_\chi=\chi(y)P_\chi$. [given, F1, F2, algebra]

2.1 Applying $\psi$ to the equality in step 1.1 gives $\psi(y)\psi(P_\chi)=\chi(y)\psi(P_\chi)$, where $\psi(P_\chi)=\sum_x\chi(x)\psi(x^*)$. Since $\chi\ne\psi$, some $y\in A$ has $\chi(y)\ne\psi(y)$; subtracting the two sides forces $\psi(P_\chi)=0$. This is the asserted sum. [given, step 1.1, F2, algebra] ∎
