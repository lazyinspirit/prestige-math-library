---
id: cor-regular-elements-form-a-dense-zariski-open-subset-of-a-cartan-subalgebra
kind: corollary
title: Regular elements form a dense Zariski-open subset of a Cartan subalgebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-centralizer-dimension-from-vanishing-roots, def-regular-root-hyperplanes, def-root-and-root-space-relative-to-a-cartan-subalgebra]
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

## Proof

**Proof technique:** direct.

1.1 Each $\alpha$ is a nonzero functional, so each $\ker\alpha$ is a proper subspace, and by [L1] $\mathfrak h_{\mathrm{reg}}$ is the complement of finitely many proper subspaces. Induct on the number $k$ of proper subspaces $H_1,\dots,H_k$. For $k=0$ the assertion is immediate. For $k>0$, choose by induction $u\notin\bigcup_{i<k}H_i$ and choose $v\notin H_k$. For each $i<k$ the line $u+tv$ meets $H_i$ for at most one scalar $t$, since two such parameters would imply first $v\in H_i$ and then $u\in H_i$; the same line meets $H_k$ for at most one $t$, since two parameters would imply $v\in H_k$. Because $\mathbb C$ is infinite, some $t$ avoids all $k$ exceptional values. Thus a finite union of proper subspaces cannot cover $\mathfrak h$, and $\mathfrak h_{\mathrm{reg}}\ne\emptyset$. [L1, algebra]

2.1 Being the complement of a finite union of zero sets of nonzero linear functionals, $\mathfrak h_{\mathrm{reg}}$ is Zariski-open. It is the principal open set defined by the nonzero polynomial $\prod_{\alpha\in\Phi}\alpha$ (with empty product $1$); a nonempty principal open subset of an affine space is dense because its coordinate ring is an integral domain. [L1, step 1.1, algebra]

3.1 By [L1] an element $H$ has $\mathfrak g^H=\mathfrak h$ exactly when no root vanishes at $H$, that is, exactly for $H\in\mathfrak h_{\mathrm{reg}}$; all other elements have strictly larger centralizer dimension. Hence the regular set is the set of elements of $\mathfrak h$ with minimal centralizer dimension, and it is nonempty, Zariski-open and dense. [L1, step 1.1, step 2.1, algebra] ∎
