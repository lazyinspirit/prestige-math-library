---
id: cor-regular-elements-form-a-dense-zariski-open-subset-of-a-cartan-subalgebra
kind: corollary
title: Regular elements form a dense Zariski-open subset of a Cartan subalgebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-centralizer-dimension-from-vanishing-roots, def-regular-root-hyperplanes, prop-the-center-is-the-common-kernel-of-all-roots-inside-the-cartan-subalgebra, def-root-and-root-space-relative-to-a-cartan-subalgebra]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §3 (density of regular elements)"
landmark: false
proof_strategy: direct
---

## Statement

Let $\mathfrak h$ be a Cartan subalgebra of a finite-dimensional complex
semisimple Lie algebra $\mathfrak g$ with root set $\Phi$
([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]). Then the
regular set $\mathfrak h_{\mathrm{reg}}$ of [[def-regular-root-hyperplanes]]
is nonempty and is a dense Zariski-open subset of $\mathfrak h$; it consists
exactly of the elements $H\in\mathfrak h$ whose centralizer in $\mathfrak g$
equals $\mathfrak h$, and these are the elements of $\mathfrak h$ whose
centralizer has minimal dimension among elements of $\mathfrak h$.

## Facts & Assumptions

**Given:** Such $\mathfrak g,\mathfrak h$ and its finite root set $\Phi$.

[L1] $\mathfrak h_{\mathrm{reg}}$ is the complement in $\mathfrak h$ of the finite union of the root hyperplanes $\ker\alpha$, and $\dim\mathfrak g^H=\dim\mathfrak h+\#\{\alpha:\alpha(H)=0\}$ for $H\in\mathfrak h$ ([[def-regular-root-hyperplanes]], [[prop-centralizer-dimension-from-vanishing-roots]]).

[L2] The roots span $\mathfrak h^*$; equivalently, no nonzero $H\in\mathfrak h$ is annihilated by all roots ([[prop-the-center-is-the-common-kernel-of-all-roots-inside-the-cartan-subalgebra]]).

## Proof

**Proof technique:** direct.

1.1 Each $\alpha$ is a nonzero functional, so each $\ker\alpha$ is a proper subspace, and by [L1] $\mathfrak h_{\mathrm{reg}}$ is the complement of finitely many proper subspaces. A finite union of proper subspaces of a vector space over an infinite field is proper: if $\mathfrak h=\bigcup_{i=1}^kH_i$ with all $H_i$ proper, pick $u\in H_1$ and $v\notin H_1$; the line $u+tv$ meets $H_1$ only at $t=0$ and each $H_i$, $i\ge2$, in at most one point, so some point of the line escapes the union, a contradiction. Hence $\mathfrak h_{\mathrm{reg}}\ne\emptyset$. [L1, L2, algebra]

2.1 Being the complement of a finite union of zero sets of nonzero linear functionals, $\mathfrak h_{\mathrm{reg}}$ is Zariski-open; a nonempty Zariski-open subset of a complex vector space is dense because a nonzero polynomial cannot vanish on a nonempty open set, and the product of the finitely many $\alpha$ is such a polynomial. [L1, step 1.1, algebra]

3.1 By [L1] an element $H$ has $\mathfrak g^H=\mathfrak h$ exactly when no root vanishes at $H$, that is, exactly for $H\in\mathfrak h_{\mathrm{reg}}$; all other elements have strictly larger centralizer dimension. Hence the regular set is the set of elements of $\mathfrak h$ with minimal centralizer dimension, and it is nonempty, Zariski-open and dense. [L1, step 1.1, step 2.1, algebra] ∎
