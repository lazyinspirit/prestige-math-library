---
id: lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel
kind: lemma
title: "Essential surfaces in a solid torus are meridian disks"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
  - thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds
  - thm-seifert-van-kampen
  - thm-normal-form-for-free-products-with-amalgamation
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assumes full AC through finite triangulation and its implication of countable choice for smooth Schoenflies."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Example preceding Lemma 1.10, printed pp.14–15"
    - title: "Walter Neumann and Gadde Swarup, Canonical decompositions of 3-manifolds"
      url: "https://arxiv.org/pdf/math/9712227"
      locator: "§2, cut-and-paste of incompressible annuli and tori"
---

## Statement

Assume full AC. Let $V=S^1\times D^2$ be a solid torus. Every connected, two-sided, properly embedded incompressible and boundary-incompressible surface $F\subset V$ with nonempty boundary is a meridian disk. Any two meridian disks with the same boundary are isotopic relative to that boundary. In addition, every two-sided embedded torus $T\subset\operatorname{int}V$ has a compressing disk in $V$.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Example preceding Lemma 1.10](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Walter Neumann and Gadde Swarup, *Canonical decompositions of 3-manifolds*](https://arxiv.org/pdf/math/9712227)

## Facts & Assumptions

**Given:** Full AC, a solid torus $V$, a connected two-sided proper surface $F$ with nonempty boundary and the incompressibility and boundary-incompressibility hypotheses, and, for the final claim, a two-sided embedded torus $T\subset\operatorname{int}V$.

[A1] Full AC is the assertion that every set-indexed family of nonempty sets has a choice function ([[def-axiom-of-choice]], Definition).

[L1] Full AC implies countable choice, the hypothesis of smooth Schoenflies ([[thm-choice-implies-dependent-implies-countable-choice]], Statement; [[def-countable-choice]], Definition).

[F5] Every smoothly embedded $2$-sphere in $S^3$ bounds a smooth $3$-ball ([[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]], Statement).

[F1] [[def-incompressibility-seifert-fibration-and-jsj-system]] defines the two disk obstructions and boundary-parallelity.

[F2] Every compact smooth manifold with corners has a finite compatible triangulation ([[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]], Statement).

[F3] For a compact orientable triangulated $3$-manifold and a boundary subsurface, a nontrivial kernel of the inclusion on fundamental groups yields a properly embedded compressing disk ([[thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds]], Statement).

[F4] Van Kampen identifies the fundamental group of a union along a connected common boundary with the amalgamated product of the side groups ([[thm-seifert-van-kampen]], Statement), and the normal form theorem embeds each side group when both maps of the amalgamated subgroup are injective ([[thm-normal-form-for-free-products-with-amalgamation]], Statement).

## Proof

1.1 Choose a meridian disk $D_0$ and put $F$ transverse to it. Every circle of $F\cap D_0$ bounds a disk in $D_0$. An essential circle gives a compressing disk for $F$; for an inessential circle, an innermost disk in $D_0$ and the disk it bounds in $F$ form a sphere. Since the standard solid torus is embedded in $S^3$ and its complement is connected, [F5] implies this sphere bounds a ball in $V$. Isotopy across that ball removes the circle. Repeating this finite reduction leaves only arcs. [A1, L1, F1, F5, given, construct]

1.2 An outermost arc of $F\cap D_0$ cuts off a boundary-compressing disk. Boundary-incompressibility implies that its arc on $F$ cuts off a disk in $F$. The other boundary arc must then have both endpoints on the same side of the corresponding meridian arc in $\partial V$. But an arc transverse to the meridian circles runs monotonically through them, so it cannot have both endpoints on that same side. Thus the intersection arcs can be removed, and $F$ is isotoped disjoint from $D_0$. [given, F1, step 1.1, construct]

2.1 Cutting $V$ along $D_0$ gives a ball. Every boundary circle of $F$ on the ball's boundary sphere bounds a disk there; choose an innermost one. If $F$ were not a disk, that pushed-in disk would have essential boundary on $F$ and would compress it. Therefore $F$ is a disk, and regluing $D_0$ shows that its boundary is a meridian of $V$. [F1, step 1.2, construct]

2.2 Two meridian disks with the same boundary cut the solid torus to disks in a ball with the same boundary. The disk isotopy in the ball, fixed on that boundary, descends after regluing $D_0$ to an isotopy of the meridian disks relative to their boundary. [step 2.1, construct]

3.1 Let $T\subset\operatorname{int}V$ be a two-sided embedded torus. If $T$ did not separate $V$, a path in the connected complement joining its two local sides, closed by a short transverse arc, would give a loop meeting $T$ once modulo $2$. This contradicts $H_2(V;\mathbb Z_2)=0$, since mod-two intersection with a closed surface depends only on its homology class. Hence $T$ separates $V$ into compact orientable pieces $W_1,W_2$. [given, F1, algebra]

3.2 Give $V,W_1,W_2$ finite compatible triangulations by [F2]. Collar neighbourhoods of $W_1,W_2$ form an open cover with overlap retracting to $T$. If both inclusions $\pi_1(T)\to\pi_1(W_i)$ were injective, [F4] and van Kampen would identify $\pi_1(V)$ with the amalgamated product $\pi_1(W_1)*_{\pi_1(T)}\pi_1(W_2)$, and the normal form theorem would embed $\pi_1(T)\cong\mathbb Z^2$ in $\pi_1(V)\cong\mathbb Z$. Since no injective homomorphism $\mathbb Z^2\to\mathbb Z$ exists, one side inclusion has nontrivial kernel. [A1, F2, F4, step 3.1, algebra]

3.3 Apply [F3] to that side with boundary subsurface the copy of $T$. It is compact, orientable, and finitely triangulated, and the inclusion kernel is nontrivial. The Loop Theorem gives a properly embedded disk whose boundary is essential on $T$ and whose interior misses $T$; this is a compressing disk for $T$ in $V$. [F2, F3, step 3.2, construct] ∎
