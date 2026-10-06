---
id: def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy
kind: definition
title: "Smooth isotopies, diffeotopies and ambient isotopies"
status: draft
origin: session
dependency_level: 4
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-smooth-embedding,
       def-diffeomorphism-and-local-diffeomorphism-of-manifolds,
       def-smooth-map-between-manifolds-with-boundary,
       def-smooth-family-of-maps-and-evaluation-map,
       def-compact-space,
       def-regular-homotopy-of-immersions]
justified_by: []
aliases: []
landmark: false
sources:
  references:
    - title: "Morris W. Hirsch, Differential Topology (Graduate Texts in Mathematics 33, Springer 1976; full text retrieved from the Internet Archive Wayback Machine snapshot of the luis.impa.br course copy), Chapter 8 “Isotopy”, §1, printed pp. 177–183 (Theorems 1.1–1.8 and Exercises 3, 7, 9, 10, 11, 16, printed pp. 182–184)"
      url: "https://web.archive.org/web/20230823153633/https://luis.impa.br/aulas/anvar/Hirsch_DifferentialTopology.pdf"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University Press 2016; full text retrieved from the Internet Archive Wayback Machine snapshot of the ETH Zürich course copy), Chapter 6 §§6.2–6.4, printed pp. 169–192 (Theorem 6.2.1; Propositions 6.3.1 and 6.3.3; Theorems 6.3.2, 6.3.4, 6.3.6, 6.4.5, 6.4.8 and 6.4.9; Lemma 6.3.5)"
      url: "https://web.archive.org/web/20241113132819/https://people.math.ethz.ch/~dkosanovic/24-FS/Wall-Differential-Topology.pdf"
---

## Definition

Let $M$ and $N$ be smooth manifolds (possibly with boundary, [[def-smooth-map-between-manifolds-with-boundary]]) and let $I=[0,1]$. A **smooth isotopy of $M$ in $N$** is a smooth map $F:M\times I\to N$ such that every slice $F_t:=F(\cdot,t)$ is a smooth embedding ([[def-smooth-embedding]]); if in addition $F_0=f_0$ and $F_1=f_1$, then $F$ is a smooth isotopy from $f_0$ to $f_1$, and $f_0,f_1$ are **isotopic**. A **smooth diffeotopy** of $N$, also called an **ambient isotopy**, is a smooth map $H:N\times I\to N$ with $H_0=\mathrm{id}_N$ and every $H_t$ a diffeomorphism ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]); it **extends** an isotopy $F$ of $M$ when $H_t\circ F_0=F_t$ for all $t\in I$. A diffeotopy is **compactly supported** if there is a compact $K\subseteq N$ with $H_t=\mathrm{id}_N$ outside $K$ for every $t$ ([[def-compact-space]]), and is **stationary near the ends** if $H_t$ is independent of $t$ near $t=0$ and near $t=1$; the same terms apply to isotopies.

The **track** of $F$ is the level-preserving map
$$\overline F:M\times I\longrightarrow N\times I,\qquad \overline F(x,t)=(F(x,t),t),$$
and the **support** of $F$ is the closure of the set $\{x\in M:F(x,t)\neq F(x,0)\ \text{for some}\ t\in I\}$. Equivalently, $F$ is a smooth family of embeddings parametrised by $I$ in the sense of [[def-smooth-family-of-maps-and-evaluation-map]]. Here smoothness is tested in product charts by local extension of the coordinate functions to Euclidean open sets; when both $M$ and $I$ have boundary this is the explicit product-corner convention. For boundaryless parameter manifolds it is exactly the cited smooth-family definition; the same evaluation convention is used for $I$. The track is a map of this kind, retaining the time coordinate: it is not the parametrised image surface $F(M\times I)$ alone, and every statement on this page about the track refers to the map $\overline F$ and to its image $\overline F(M\times I)\subseteq N\times I$.

On this page an *isotopy* is always a family of embeddings, as above. A family of immersions that need not be injective is a **regular homotopy** ([[def-regular-homotopy-of-immersions]]); the sources' occasional use of the word "isotopy" for a family of immersions is never imported here, and where a source means a regular homotopy the term *regular homotopy* is used. Smoothness of a time reparametrisation, compactness of $M$ or $N$, properness, orientability and any choice principle are not part of the definition: they are hypotheses of the theorems that use it, and each of those states its own hypotheses.
