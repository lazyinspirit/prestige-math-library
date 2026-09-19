---
id: prop-dimension-formula-from-roots
kind: proposition
title: Dimension formula from roots
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional, thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system, thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate, def-root-and-root-space-relative-to-a-cartan-subalgebra, def-regular-element-and-rank-of-a-complex-lie-algebra, lem-regular-semisimple-elements-form-a-dense-open-subset, thm-centralizer-of-a-regular-semisimple-element-is-a-cartan-subalgebra]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §4 (dimension count)"
landmark: false
proof_strategy: direct
---

## Statement

Let $\mathfrak h$ be a Cartan subalgebra of a finite-dimensional complex
semisimple Lie algebra $\mathfrak g$ with root set $\Phi$
([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]). Then
$$\dim\mathfrak g=\dim\mathfrak h+|\Phi| .$$
Moreover all Cartan subalgebras of $\mathfrak g$ have the same dimension, so
the right-hand side is independent of the chosen Cartan subalgebra, and this
common dimension is the quantity $\operatorname{rank}\mathfrak g$ of
[[def-regular-element-and-rank-of-a-complex-lie-algebra]].

## Facts & Assumptions

**Given:** Such $\mathfrak g$ and $\mathfrak h$, with root set $\Phi$.

[L1] $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$ is a direct sum with $\Phi$ finite and $\dim\mathfrak g_\alpha=1$ for every root ([[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]], [[thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system]], [[def-root-and-root-space-relative-to-a-cartan-subalgebra]]).

[L2] Any two Cartan subalgebras of $\mathfrak g$ are conjugate, hence of the same dimension ([[thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate]]).

[L3] Regular semisimple elements exist in $\mathfrak g$, and the centralizer of every regular semisimple element is a Cartan subalgebra ([[lem-regular-semisimple-elements-form-a-dense-open-subset]], [[thm-centralizer-of-a-regular-semisimple-element-is-a-cartan-subalgebra]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the vector space $\mathfrak g$ is the direct sum of $\mathfrak h$ and one one-dimensional space for each of the $|\Phi|$ roots; dimensions are additive over direct sums, so $\dim\mathfrak g=\dim\mathfrak h+|\Phi|$. [L1, algebra]

2.1 By [L3] choose a regular semisimple element $x$. Its centralizer $\mathfrak g^x$ is a Cartan subalgebra, so [L2] gives $\dim\mathfrak g^x=\dim\mathfrak h$. Regularity and the rank definition give $\dim\mathfrak g^x=\operatorname{rank}\mathfrak g$. Thus the common Cartan dimension is $\operatorname{rank}\mathfrak g$, independently of $\mathfrak h$, and step 1.1 becomes $\dim\mathfrak g=\operatorname{rank}\mathfrak g+|\Phi|$. [L2, L3, step 1.1] ∎
