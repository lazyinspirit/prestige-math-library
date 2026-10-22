---
id: thm-gordon-luecke-knot-complement-determines-knot
kind: theorem
title: "The Gordon-Luecke knot-complement theorem"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-oriented-slope-and-knot-dehn-filling
  - lem-nontrivial-knot-exterior-boundary-incompressible
  - lem-meridian-preserving-torus-homeomorphism-extends-over-solid-torus
  - lem-s-three-filling-detects-the-meridian-slope
  - cor-tubular-neighbourhoods-are-unique-up-to-ambient-isotopy
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assumes full AC through the exterior boundary-incompressibility and Property P suppliers. The unknot case is independent of that branch."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, §4.1.1"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
    - title: "Kimihiko Motegi, Dehn surgery on knots: survey, pp. 19–21"
      url: "https://www.math.tsukuba.ac.jp/~tange/diftop22/Dehn_surgery_survey.pdf"
    - title: "P. B. Kronheimer and T. S. Mrowka, Dehn surgery, the fundamental group and SU(2), Theorem 1"
      url: "https://people.math.harvard.edu/~kronheim/hrpthree.pdf"
---

## Statement

Assume the Axiom of Choice. Let $K,K'\subset S^3$ be smooth knots with chosen compact exteriors $E_K,E_{K'}$, and let $h:E_K\to E_{K'}$ be a homeomorphism. Exactly one of $K,K'$ cannot be the unknot. If both are unknotted, they are ambiently equivalent, but this particular $h$ need not preserve their knot-meridian slopes. If both are nontrivial, $h(\mu_K)$ is carried to $\mu_{K'}$ by an isotopy through homeomorphisms of the boundary torus, and $h$ extends across their tubular solid tori to a homeomorphism of pairs $(S^3,K)\to(S^3,K')$; that extension preserves ambient orientation when $h$ preserves orientation and reverses it when $h$ reverses orientation.

## Statement references

[[def-knot-exterior|Compact knot exterior]]

[[def-knot-meridian-and-preferred-longitude|Meridian slope convention]]

[[def-oriented-link-in-s-three-and-ambient-isotopy|Ambient equivalence of knots and standard unknot]]

[[lem-s-three-filling-detects-the-meridian-slope|S3 filling detects the meridian for a nontrivial knot]]

[[lem-meridian-preserving-torus-homeomorphism-extends-over-solid-torus|Extension over a solid torus]]

[Cattabriga and Francaviglia, *Knot Theory and Applications: Lecture Notes*, §4.1.1](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf)

[Motegi, *Dehn surgery on knots: survey*, pp. 19–21](https://www.math.tsukuba.ac.jp/~tange/diftop22/Dehn_surgery_survey.pdf)

[Kronheimer–Mrowka, *Dehn surgery, the fundamental group and SU(2)*, Theorem 1](https://people.math.harvard.edu/~kronheim/hrpthree.pdf)

## Facts & Assumptions

**Given:** Full AC, two smooth knots in $S^3$, chosen compact exteriors, and a homeomorphism between those exteriors.

[F1] For a nontrivial knot, a filling of its exterior is homeomorphic to $S^3$ only at the meridional slope. [[lem-s-three-filling-detects-the-meridian-slope]]

[F2] The boundary of a nontrivial knot exterior has no properly embedded compressing disk. [[lem-nontrivial-knot-exterior-boundary-incompressible]]

[F3] A boundary homeomorphism of solid tori whose image meridian is ambiently isotopic to the target meridian extends over the solid tori with the same orientation sign. [[lem-meridian-preserving-torus-homeomorphism-extends-over-solid-torus]]

[F4] In the standard model $U=\{(z,0):|z|=1\}$ in the unit sphere $S^3\subset\mathbb C^2$, the exterior of the radius-$\epsilon$ tube $|w|\le\epsilon$ is homeomorphic to $D^2_{\sqrt{1-\epsilon^2}}\times S^1$ by $(z,e^{it})\mapsto(z,\sqrt{1-|z|^2}e^{it})$. Its inverse is $(z,w)\mapsto(z,w/|w|)$, and $D^2_{\sqrt{1-\epsilon^2}}\times\{1\}$ is a proper meridian disk with essential boundary. The standard circle and exterior convention are those of the knot definitions. [[def-oriented-link-in-s-three-and-ambient-isotopy]] [[def-knot-exterior]]

[F5] If two normalized tubular-neighbourhood embeddings of the same compact core use the same normal bundle and induce the same normal identification, they are ambiently isotopic after shrinking near the core. [[cor-tubular-neighbourhoods-are-unique-up-to-ambient-isotopy]]

[F6] The exterior is the complement of the interior of its chosen closed tubular neighbourhood; in normal-disk coordinates, the region between nested radii is a product boundary collar. [[def-knot-exterior]]

[F7] A slope is an unoriented isotopy class of an essential simple closed curve on the boundary torus, and the oriented filling type is independent of the gluing map once its meridian image is fixed. [[def-oriented-slope-and-knot-dehn-filling]]

[F8] Here “unknotted” means ambiently equivalent, after forgetting component orientation, to the standard one-component circle; ambient equivalence uses the smooth orientation-preserving ambient-isotopy convention. [[def-oriented-link-in-s-three-and-ambient-isotopy]]

[A1] Full AC is the assertion that every set-indexed family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[L1] Full AC implies countable choice by applying its choice function to any countable family of nonempty sets. [[def-axiom-of-choice]]

## Proof

1.1 Suppose one knot is unknotted. By [F4] its standard radius-tube exterior is a solid torus with the displayed proper meridian disk. Use the ambient isotopy in the definition of unknotted to transport its chosen tube to a tube around the standard core $U$. Identify the transported and standard tube domains with the same normal bundle $\nu(U)$. For each tubular embedding $\Phi_j$, its differential along the zero section induces an invertible smooth bundle map $L_j:\nu(U)\to\nu(U)$ on the normal quotient: invertibility follows because $\Phi_j$ is an embedding and is the identity on the zero section. Precompose $\Phi_j$ with the fibrewise map $L_j^{-1}$. After restricting to a common neighbourhood of the zero section, both induced normal maps are the identity; compactness of $U$ lets us choose one such neighbourhood for the whole core. Thus the hypotheses of [F5] hold. Under [A1], [L1] supplies its countable-choice premise, so an ambient isotopy identifies the tubes after shrinking. The standard disk transfers to the smaller chosen exterior. By [F6], the region between the smaller and original tube is a product boundary collar; trim or extend the disk across the product annulus so its boundary lies on the chosen exterior torus. The resulting proper disk still has essential boundary. Pulling that disk across $h$ or $h^{-1}$ preserves proper embedding and essential boundary, giving a compressing disk in the other exterior, contrary to [F2]. Thus either both are unknotted or both are nontrivial. [given, A1, L1, F2, F4, F5, F6, construct]


1.2 Suppose both knots are nontrivial and let $\gamma$ be the slope represented by $h(\mu_K)$. Let $W,W'$ be the source and target filling solid tori with product coordinates. If $h$ preserves orientation, set $g(z,w)=(z,w)$; if $h$ reverses orientation, set $g(z,w)=(z,\overline w)$. In either case $g$ has the same orientation sign as $h$ and sends the source meridian to the target meridian. If $\phi:\partial W\to\partial E_K$ is the source gluing map, define the target gluing map by $\phi'=h\circ\phi\circ g^{-1}$. It is orientation-reversing because $\phi$ is and $g,h$ have the same sign; its meridian image is $h(\mu_K)$, so it defines the filling along $\gamma$. The maps $h$ and $g$ glue to a homeomorphism of the filled manifolds. The source filling is $S^3$, hence the target filling along $\gamma$ is homeomorphic to $S^3$. By [F1], $\gamma$ is the target meridian slope; [F7] then gives the boundary isotopy in the Statement. [given, A1, F1, F7, construct, algebra]

2.1 If both are unknotted, [F8] gives ambient equivalences from each knot to the standard unknot; composing them gives an ambient equivalence between the knots. This conclusion is independent of whether the given $h$ preserves the knot-meridian slope. [given, F8, step 1.1, construct]

3.1 Apply [F3] to the actual boundary restriction of $h$ and the two tubular solid tori. The extensions agree with $h$ on the common boundary and therefore glue to a homeomorphism of pairs $(S^3,K)\to(S^3,K')$. By [F3] the ambient orientation sign is the same as that of $h$. Together with steps 1.1, 1.2, and 2.1 this proves every case. [given, F3, step 1.1, step 1.2, step 2.1, construct] ∎

## Diagram

For nontrivial knots, the exterior map $h$ carries the source meridian filling to the target filling along $\gamma$. The unique-S3-filling lemma forces $\gamma$ to be the target meridian, after which the meridian-preserving boundary map extends over the solid tori. The commutative square records the maps; the proof above justifies each extension without relying on the diagram.

```tikz
\begin{tikzpicture}[>=stealth]
  \node[draw,rounded corners,minimum width=2.2cm,minimum height=0.9cm] (e1) at (0,0) {$E_K$};
  \node[draw,rounded corners,minimum width=2.2cm,minimum height=0.9cm] (e2) at (4,0) {$E_{K'}$};
  \node[draw,rounded corners,minimum width=2.2cm,minimum height=0.9cm] (s1) at (0,-2) {$S^3$};
  \node[draw,rounded corners,minimum width=2.2cm,minimum height=0.9cm] (s2) at (4,-2) {$S^3$};
  \draw[->,thick] (e1) -- node[above] {$h$} (e2);
  \draw[->,thick] (e1) -- node[left] {fill on $\mu_K$} (s1);
  \draw[->,thick] (e2) -- node[right] {fill on $\gamma=h(\mu_K)$} (s2);
  \draw[->,thick] (s1) -- node[below] {$h\cup g$} (s2);
\end{tikzpicture}
```
