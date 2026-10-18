---
id: lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages
kind: lemma
title: "Homotopic maps with a common regular value have framed-cobordant preimages"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 2
deps:
  - prop-transverse-preimage-carries-a-pulled-back-normal-structure
  - prop-relative-transversality-preserves-a-map-on-a-closed-good-region
  - def-framed-regular-preimage-of-a-map-to-a-sphere
  - def-framed-cobordism-of-embedded-submanifolds
  - prop-transversality-to-a-point-is-the-regular-value-condition
  - def-homotopy-relative-and-path-homotopy
  - def-disk-bundle-sphere-bundle-and-thom-space
  - def-countable-choice
  - def-the-standard-smooth-step-function
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Theorem 3.9 proof and Lemma 3.12, printed pp.27-28"
    - title: "John Milnor, Topology from the Differentiable Viewpoint"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "Lemma 3, printed p.45"
    - title: "John Milnor and James Munkres, Differential Topology (Prentice-Hall, 1974)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/difftop.pdf"
      locator: "Theorem 3.14, printed pp.25-26"
    - title: "Marco Gualtieri, Topology I, Part 10"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf"
      locator: "Theorem 3.29, relative transversality homotopy"
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $X$ be closed and smooth, and let $f_0,f_1:X\to S^k$, $k\ge0$, be smoothly homotopic. If $y$ is a regular value of both and $b$ is a fixed positive basis of $T_yS^k$, their framed regular preimages are framed cobordant in $X$.

## Facts & Assumptions

**Given:** A smooth homotopy $F:X\times I\to S^k$, a common regular value $y$ of its ends, and a positive basis $b$ with coordinate isomorphism $\beta:T_yS^k\to\mathbb R^k$.

[F1] A smooth time reparametrization, constant near both endpoints, can be built from [[def-the-standard-smooth-step-function]].

[F2] Under countable choice, a smooth map transverse to a closed submanifold near a closed set can be perturbed to a transverse map without changing it on a smaller neighbourhood of that set ([[prop-relative-transversality-preserves-a-map-on-a-closed-good-region]]).

[F3] Transversality to a point is regularity ([[prop-transversality-to-a-point-is-the-regular-value-condition]]). The local fibre-coordinate argument for a transverse preimage, including boundary transversality, gives a neat submanifold and its specified normal quotient isomorphism ([[prop-transverse-preimage-carries-a-pulled-back-normal-structure]], (i)–(iv)). Composing the normal differential with $\beta$ gives the framing of [[def-framed-regular-preimage-of-a-map-to-a-sphere]].

[F4] Literal product ends with framings constant over their collars are precisely the data of [[def-framed-cobordism-of-embedded-submanifolds]].

## Proof

1.1 Reparametrize $F$ by a smooth $\rho:I\to I$ equal to zero on $[0,\delta]$ and one on $[1-\delta,1]$, where $0<\delta<1/2$. Extend the resulting homotopy to a smooth map $\widetilde F:X\times\mathbb R\to S^k$ by $f_0$ for $t<0$ and $f_1$ for $t>1$. Smoothness across the ends follows from the constant collars. On a neighbourhood of the closed set $A=X\times((-\infty,0]\cup[1,\infty))$ this map is transverse to $\{y\}$, since its spatial derivatives there are those of $f_i$, surjective at their $y$-preimages. [F1, F3, given, construct]

2.1 Apply [F2] in the boundaryless manifold $X\times\mathbb R$, with $Z=\{y\}$ and closed set $A$. Obtain a transverse smooth map $G$ equal to $\widetilde F$ near $A$. Compactness of $X$ supplies $0<\varepsilon<\delta$ with $G(x,t)=f_0(x)$ for $0\le t<\varepsilon$ and $G(x,t)=f_1(x)$ for $1-\varepsilon<t\le1$: a finite cover of each compact end slice by product neighbourhoods gives a positive minimum time width. [F2, step 1.1, choose]

3.1 Set $W=(G|_{X\times I})^{-1}(y)$. In a local chart at $y$ with differential $\beta$, [F3] makes $W$ a closed, hence compact, neat codimension-$k$ submanifold, with normal framing $\Psi=\beta\circ\overline{dG}$. The end restriction is transverse because it equals $f_i$. Step 2.1 gives the literal product ends $f_i^{-1}(y)\times\Theta_i$, and there $dG$ is the pullback of $df_i$ and annihilates the time direction. Thus $\Psi$ is the pullback of $f_{i*}b$ throughout each collar. No global diffeomorphism extending the chosen target chart is required. [F3, step 2.1, construct]

4.1 By [F4], $(W,\varepsilon,\Psi)$ is the required framed cobordism. Empty preimages cause no exception; for $k=0$ the preimages are clopen and the normal framings are the unique rank-zero maps. Countable choice is inherited from [F2] and [F3]. [F2, F3, F4, step 3.1] ∎
