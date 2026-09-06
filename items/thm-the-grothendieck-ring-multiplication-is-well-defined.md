---
id: thm-the-grothendieck-ring-multiplication-is-well-defined
kind: theorem
title: "Grothendieck-ring multiplication is well-defined"
status: draft
origin: pipeline
deps: [thm-the-tensor-product-in-a-multitensor-category-is-biexact, def-grothendieck-ring-of-a-tensor-category]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Lemma 4.5.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

The rule $[X][Y]=[X\otimes Y]$ is a well-defined unital associative product on
$K_0(\mathcal C)$.

## Facts & Assumptions

**Given:** A tensor category $\mathcal C$.

[F1] Tensoring is exact in each variable ([[thm-the-tensor-product-in-a-multitensor-category-is-biexact]]).

[F2] $K_0(\mathcal C)$ is the quotient by short-exact-sequence relations ([[def-grothendieck-ring-of-a-tensor-category]]).

## Proof

**Proof technique:** direct.

1.1 If $0\to A\to B\to C\to0$ is exact, then [F1] makes each of its tensors with $X$ exact. Thus $[B\otimes X]=[A\otimes X]+[C\otimes X]$, and similarly in the other variable. [F1, F2, given]

2.1 Hence the bilinear rule on generators descends through the relations of [F2]. The associator and unitors identify $(X\otimes Y)\otimes Z$ with $X\otimes(Y\otimes Z)$ and $\mathbf1\otimes X$ with $X$, so the descended product is associative with unit $[\mathbf1]$. [step 1.1, F2] ∎
