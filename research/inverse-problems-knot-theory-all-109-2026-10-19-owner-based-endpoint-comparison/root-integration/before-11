---
id: def-rasmussen-s-invariant
kind: definition
title: "Rasmussen’s s-invariant"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-lee-filtered-spectral-sequence-and-two-orientation-classes
  - thm-lee-homology-of-a-knot-has-two-generators
  - thm-lee-filtered-homology-is-an-oriented-link-invariant
  - def-countable-choice
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC_omega enters through diagram independence of the Lee filtered homology."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Jacob Rasmussen, Khovanov homology and the slice genus, arXiv:math/0402131v1"
      url: https://arxiv.org/pdf/math/0402131v1
      locator: "§3.1, printed pp. 5–7"
    - title: "Curtis T. McMullen, 4-Manifolds, Stanford lecture notes"
      url: https://web.stanford.edu/~cm5/4Mnotes.pdf
      locator: "§5.6, printed pp. 97–99"
---

## Definition

Assume the Axiom of Countable Choice. For an oriented knot $K$, let $V_K$ be its two-dimensional rational Lee homology with the diagram-independent induced decreasing quantum filtration $F^pV_K$. For a nonzero class $x\in V_K$, define its filtration level by
$$ \ell(x)=\max\{p\in\mathbb Z:x\in F^pV_K\}. $$
Set
$$ s_{\min}(K)=\min_{x\ne0}\ell(x),\qquad s_{\max}(K)=\max_{x\ne0}\ell(x), \qquad s(K)=s_{\max}(K)-1=s_{\min}(K)+1. $$
The equality of the two formulas is part of the definition’s well-definedness, supplied by the rank-two Lee filtration theorem.

## Definition references

[[thm-lee-homology-of-a-knot-has-two-generators|Two-dimensional Lee homology and the two orientation classes]]

[[thm-lee-filtered-homology-is-an-oriented-link-invariant|Diagram-independent induced filtration]]

[Rasmussen, *Khovanov homology and the slice genus* (2004), §3.1](https://arxiv.org/pdf/math/0402131v1)

[McMullen, *4-Manifolds*, §5.6](https://web.stanford.edu/~cm5/4Mnotes.pdf)

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and the filtered Lee homology of an oriented knot.

[F1] Lee homology of a knot is two-dimensional, and the two canonical orientation classes form a basis ([[thm-lee-homology-of-a-knot-has-two-generators]]).

[F2] The induced filtration on Lee homology is independent of the diagram ([[thm-lee-filtered-homology-is-an-oriented-link-invariant]]).

[F3] The two knot filtration levels differ by exactly two, by the marked-circle involution on the two quantum congruence lines ([[lem-lee-filtered-spectral-sequence-and-two-orientation-classes]]).

[A1] $\mathrm{AC}_\omega$ is the axiom branch used by the finite diagram-move proof of [F2] ([[def-countable-choice]]).

## Proof

**Given:** The hypotheses of the Definition.

1.1 The filtration on the finite Lee complex is finite, so its induced filtration on the two-dimensional homology is finite. By [F1] the vector space is nonzero, and therefore every nonzero class has a finite integer level $\ell(x)$. The set of levels is a nonempty subset of the finite set of filtration indices; hence its minimum and maximum exist. This uses no choice principle. [F1, algebra]

2.1 The two extremal filtration levels are the two surviving quantum degrees on the limiting page of the bounded spectral sequence. By [F3], their difference is exactly $2$, so $s_{\max}-1=s_{\min}+1$. The diagram-independence conclusion from [F2] uses the stated axiom branch [A1]. Thus the displayed formula defines an invariant of the oriented knot under AC$_\omega$. [A1, F1, F2, F3, step 1.1, algebra] ∎