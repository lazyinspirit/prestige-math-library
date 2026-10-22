---
id: lem-ribbon-singularity-local-resolution
kind: lemma
title: "Local resolution of ribbon singularities"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-smooth-knot-concordance
  - def-locally-flat-topological-knot-concordance
  - def-smooth-and-topological-slice-genus
  - thm-knot-concordance-is-an-abelian-group
  - def-ribbon-disk-and-ribbon-knot
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The finite local construction is choice-free; the declared ACω dependency is retained from the approved slice-genus interface."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brendan Owens, Knots and 4-Manifolds, Winter Braids IX lecture notes"
      url: "https://www.maths.gla.ac.uk/~bowens/papers/WB.pdf"
      locator: "Lecture 1, PDF p.2: the interior preimage interval is pushed deeper than the proper interval"
    - title: "Arunima Ray, Slice Knots and Knot Concordance, Winter Braids Lecture Notes 8"
      url: "https://aru-ray.github.io/documents/slicenotes.pdf"
      locator: "§1.1, Proposition 1.5 and Figure 6, printed pp.4–5"
    - title: "Charles Livingston, A Survey of Classical Knot Concordance, Handbook of Knot Theory, Chapter 7"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.1, Definition 2.3 and ribbon-disk discussion, printed pp.322–323"
---

## Statement

Let $f:D^2\to S^3$ be a smooth immersion of an oriented disk whose boundary is an embedded oriented knot $K$. Suppose that its only self-intersections are finitely many pairwise disjoint transverse double arcs, and that the two preimage arcs of each double arc are one properly embedded arc in $D^2$ and one compact arc contained in $\operatorname{Int}D^2$. Then there is a smooth proper embedding $\widetilde f:(D^2,\partial D^2)\to(B^4,S^3)$ with $\widetilde f|_{\partial D^2}=f|_{\partial D^2}$.

## Statement references

[[def-ribbon-disk-and-ribbon-knot|The local preimage convention for ribbon double arcs]]

[[def-locally-flat-proper-surface-and-concordance-collars|Properness and smooth boundary collars]]

[Owens, *Knots and 4-Manifolds*, Lecture 1, PDF p.2](https://www.maths.gla.ac.uk/~bowens/papers/WB.pdf)

[Ray, *Slice Knots and Knot Concordance*, §1.1](https://aru-ray.github.io/documents/slicenotes.pdf)

## Facts & Assumptions

**Given:** A smooth immersion $f:D^2\to S^3$ satisfying the ribbon-double-arc hypotheses in the Statement.

[F1] For each self-intersection arc, its two preimages are disjoint embedded arcs, one proper with endpoints on $\partial D^2$ and one compact in $\operatorname{Int}D^2$, and these are all the multiple points. ([[def-ribbon-disk-and-ribbon-knot]])

[F2] An embedding of a surface into a manifold with boundary is proper when the preimage of the ambient boundary is exactly the surface boundary; smooth proper surfaces have smooth boundary collars. ([[def-locally-flat-proper-surface-and-concordance-collars]])

## Proof

1.1 Identify $B^4$ with the unit ball in $\mathbb R^4$ and use the explicit boundary collar $c:S^3\times[0,\varepsilon)\to B^4$, $c(y,s)=(1-s)y$, with $0<\varepsilon<1$. On the unit disk set $r(x)=1-\lVert x\rVert^2$, so $r=0$ on $\partial D^2$, $r>0$ in the interior, and $dr$ is nonzero in the inward normal direction at the boundary. By [F1], the finitely many preimage arcs form disjoint compact subsets of $D^2$. Choose pairwise disjoint neighborhoods of the interior arcs $\beta_i$, all disjoint from every proper arc $\alpha_j$ and from $\partial D^2$, and choose smooth bump functions $\phi_i$ supported in those neighborhoods with $\phi_i=1$ on $\beta_i$ and $0\le\phi_i\le1$. This is a finite choice of smooth functions on a disk. [given, F1, construct, choose]

1.2 Let $M=\max\{0,\max_{i,s}(r(\alpha_i(s))-r(\beta_i(s)))\}$ when there is at least one double arc, and let $M=0$ otherwise. Choose $\delta>0$ so that $\delta(2M+3)<\varepsilon$, set $a=2\delta(M+1)$, and define $h=\delta r+a\sum_i\phi_i$. The supports are disjoint, so $0<h<\varepsilon$ on $\operatorname{Int}D^2$ and $h=0$ exactly on $\partial D^2$. For every double arc and every parameter $s$, $h(\beta_i(s))-h(\alpha_i(s))=a+\delta(r(\beta_i(s))-r(\alpha_i(s)))\ge\delta(M+2)>0$. Near $\partial D^2$ all bumps vanish, so $h=\delta r$ there and has positive inward derivative. [given, step 1.1, construct, algebra]

2.1 Define $\widetilde f(x)=c(f(x),h(x))$. If $\widetilde f(x)=\widetilde f(y)$, injectivity of the collar coordinates gives $f(x)=f(y)$ and $h(x)=h(y)$. By [F1], either $x=y$ or $x,y$ are the two preimages of one of the double arcs; the strict height inequality in step 1.2 excludes the latter. Thus $\widetilde f$ is injective. [given, F1, step 1.1, step 1.2, construct]

2.2 The map $f$ is an immersion, so its derivative is injective; adjoining the height coordinate preserves injectivity of the derivative, and the collar map $c$ is a local diffeomorphism. Hence $\widetilde f$ is an immersion. A continuous injection from compact $D^2$ to the Hausdorff space $B^4$ is a homeomorphism onto its image, so this injective immersion is a smooth embedding. Since $h^{-1}(0)=\partial D^2$, its preimage of $S^3=\partial B^4$ is exactly $\partial D^2$; the nonzero inward derivative established in step 1.2 gives the proper boundary collar condition in [F2]. The disk orientation transports through the embedding and its boundary remains the original oriented knot $K$. [given, F2, step 1.1, step 1.2, step 2.1, construct] ∎

## Remarks

The height separation is choice-free: there are finitely many disjoint compact arcs, finitely many bump functions, and a single positive scale $\delta$ satisfying the displayed bound. The approved dependency map also names $\mathrm{AC}_\omega$ and the knot-concordance group theorem; neither is used by these four geometric steps, so that declared supplier interface remains an explicit reconciliation item.
