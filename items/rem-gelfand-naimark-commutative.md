---
id: rem-gelfand-naimark-commutative
kind: remark
title: "Commutative Gelfand-Naimark theorem"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "commutative C*-algebras are the C(X)"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Gelfand-Naimark theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Gelfand%E2%80%93Naimark_theorem"
    - title: "Gelfand representation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Gelfand_representation"
    - title: "Gelfand duality (nLab)"
      url: "https://ncatlab.org/nlab/show/Gelfand+duality"
    - title: "C*-algebra (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/C*-algebra"
pipeline_run: null
---

## Statement

Let $A$ be a commutative unital $C^{*}$-algebra and let $\Delta(A)$ be its set of characters, the
nonzero multiplicative linear functionals $A \to \mathbb{C}$, topologised as a subspace of the dual
with the weak-star topology. Then $\Delta(A)$ is a compact Hausdorff space, it is in natural
bijection with the maximal ideals of $A$, and the Gelfand transform
$$a \longmapsto \hat{a}, \qquad \hat{a}(\chi) = \chi(a),$$
is an isometric $*$-isomorphism of $A$ onto $C(\Delta(A))$.

Consequently $A \mapsto \Delta(A)$ and $X \mapsto C(X)$ are mutually inverse contravariant
equivalences between the category of commutative unital $C^{*}$-algebras with unital
$*$-homomorphisms and the category of compact Hausdorff spaces with continuous maps: **commutative
$C^{*}$-algebra theory and compact Hausdorff topology are the same subject, read in opposite
directions**.

## Remarks

**Not proved in this library.** Recorded with a citation. It is the single result this library's
topology track is aimed at, and it is the furthest from being provable here.

**What would prove it.** Banach algebra theory: the spectrum of an element is nonempty and compact;
Gelfand and Mazur, that a complex unital Banach division algebra is $\mathbb{C}$, which makes every
maximal ideal the kernel of a character; the spectral radius formula, which makes the Gelfand
transform contractive; compactness of $\Delta(A)$ in the weak-star topology, which is
[[rem-banach-alaoglu]]; and finally the $C^{*}$ identity $\lVert a^{*}a \rVert = \lVert a \rVert^2$
plus the Stone-Weierstrass theorem, which upgrade the transform from contractive with dense range to
isometric and onto.

**Why it matters here.** This is the "algebra equals topology" dictionary in its sharpest form. Every
topological property of $X$ has an algebraic translation and conversely, which is why the library
invests in compact Hausdorff spaces, in the Stone-Cech compactification and in Stone-Weierstrass.
Read together with [[rem-gelfand-kolmogorov]] it also explains the role of the Stone-Cech
compactification: the compact Hausdorff space that an algebra of functions sees is never the
original space unless the original space was already compact.
