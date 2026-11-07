---
id: def-neron-tate-canonical-height
kind: definition
title: Néron–Tate canonical height attached to a symmetric line bundle
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field
  - def-abelian-variety-over-a-field
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-weil-height-machine-functoriality-and-additivity
  - lem-neron-tate-height-limit-exists
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Brian Conrad, Abelian Varieties"
      url: "https://math.stanford.edu/~conrad/249CS15Page/handouts/abvarnotes.pdf"
      locator: "§10.2, definition by the quadratic limit, pp. 93–99."
    - title: "Bjorn Poonen, Rational Points on Varieties"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "§8.4.4–8.4.5, canonical height in the Mordell–Weil argument."
---

## Definition

Let $K/\mathbb Q$ be a finite extension, let $A/K$ be a proper, smooth, geometrically connected group variety, and let $L$ be an invertible sheaf on $A$ satisfying $[-1]^*L\cong L$, where $[-1]$ is inversion in the group law. Let $h_L:A(K)\to\mathbb R$ be any representative of the height-machine class assigned to $L$, meaning its class modulo bounded functions is the Weil height of $L$. For $P\in A(K)$, define the canonical height


$$
\widehat h_L(P):=\lim_{j\to\infty}4^{-j}h_L([2]^jP).
$$


The limit is independent of the representative $h_L$. When $L$ is ample, this is the Néron–Tate height attached to $L$.

## Definition references

[[def-number-field|number field]]

[[def-abelian-variety-over-a-field|abelian variety]]

[[thm-weil-height-machine-functoriality-and-additivity|height-machine class modulo bounded functions]]

## Facts & Assumptions

**Given:** AC and DC; a finite extension $K/\mathbb Q$; an abelian variety $A/K$; a symmetric invertible sheaf $L$; and $P\in A(K)$.

[A1] AC and DC are the stated axioms ([[def-axiom-of-choice]], [[def-dependent-choice]]).

[F1] The canonical limit exists for every $P$, is independent of the representative of the height-machine class, and differs from $h_L$ by a bounded function ([[lem-neron-tate-height-limit-exists]]).

[L1] The height machine assigns each invertible sheaf a well-defined class of functions modulo bounded functions, with pullback functoriality and tensor-product additivity ([[thm-weil-height-machine-functoriality-and-additivity]]).

## Proof

**Proof technique:** use the independent convergence lemma to check that the formula assigns one real number to each rational point.

1.1 By [F1], under AC and DC from [A1], for each $P\in A(K)$ the displayed sequence converges, and replacing $h_L$ by another representative changes its $j$-th term by a quantity tending to zero. Thus the formula is independent of the height representative and defines a real-valued function on $A(K)$. [A1, F1, given]

2.1 The stated name for this function when $L$ is ample is the standard Néron–Tate convention. The height class used here is the one supplied by [L1], and step 1.1 proves independence of the representative in its defining limit. [L1, step 1.1] ∎
