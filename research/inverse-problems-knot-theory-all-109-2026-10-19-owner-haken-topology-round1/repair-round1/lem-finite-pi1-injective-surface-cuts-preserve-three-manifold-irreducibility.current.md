---
id: lem-finite-pi1-injective-surface-cuts-preserve-three-manifold-irreducibility
kind: lemma
title: "Finite injective surface cuts preserve irreducibility and piece groups"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-seifert-van-kampen
  - cor-factors-embed-in-a-free-product-with-amalgamation
  - thm-covering-maps-inject-fundamental-groups
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bruno Martelli, An Introduction to Geometric Topology, Version 4, September 2025"
      url: https://people.dm.unipi.it/martelli/Geometric_topology.pdf
      locator: "Proposition 9.4.9, printed p.298; the injective-group and finite-cut details are supplied below."
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: https://pi.math.cornell.edu/~hatcher/3M/3M.pdf
      locator: "Section 1.2, preliminary facts (2) and (5), printed pp.10–11."
axiom_use: "Full AC is retained for the used amalgamated-product normal-form supplier; no smooth or TOP-to-PL conversion is inferred."
---

## Statement

Assume full AC. Let $M$ be a compact connected orientable irreducible PL three-manifold, with a given finite triangulation. Here irreducible means that every locally flat PL sphere in the interior bounds a PL ball in the interior. Let $S$ be a finite union of disjoint compact connected, two-sided, properly embedded locally flat PL surfaces with given product collars and finite compatible triangulations. Suppose every inclusion of a component into $M$ is injective on fundamental groups, and every closed component has nontrivial fundamental group. Let $M\mathbin{\|}S$ denote cutting open along those collars, retaining two labeled faces for each component of $S$. Every connected cut piece is irreducible and its inclusion into $M$, after the collar identifications, is injective on fundamental groups. Both face inclusions of each cutting surface are injective into their incident pieces. The assertion applies at every finite stage of a hierarchy satisfying these hypotheses, regardless of genera, number of boundary components, or separating behavior. It does not assert existence or termination of a hierarchy, boundary-incompressibility, or superincompressibility.

## Statement references

[[thm-seifert-van-kampen]]

[[cor-factors-embed-in-a-free-product-with-amalgamation]]

[[thm-covering-maps-inject-fundamental-groups]]

## Facts & Assumptions

**Given:** The finitely triangulated PL manifold and collared surface family in the Statement.

[A1] Full AC supplies the transversal choices used in the amalgamated-product normal-form supplier. [[def-axiom-of-choice]]

[F1] A connected-overlap open cover gives the fundamental-group pushout. If both overlap-group maps are injective, the two factor groups embed in that pushout. [[thm-seifert-van-kampen]] [[cor-factors-embed-in-a-free-product-with-amalgamation]]

[F2] A covering map induces an injection on fundamental groups. [[thm-covering-maps-inject-fundamental-groups]]

## Proof

**Given:** The data in the Statement; base paths affect the maps only by conjugacy.

1.1 Let $C$ be a cut piece and let $Q\subset\operatorname{int}C$ be a locally flat PL sphere. Its image is a sphere disjoint from $S$ in $\operatorname{int}M$, so it bounds a PL ball $B\subset\operatorname{int}M$. A connected component $T$ of $S$ is disjoint from $\partial B$ and hence lies entirely inside or outside $B$. If $\partial T\ne\varnothing$, properness puts its boundary on $\partial M$, disjoint from $B$, so it cannot lie inside. If $T$ is closed and inside $B$, every loop of $T$ is nullhomotopic in $M$ because $B$ is simply connected. This contradicts injectivity and the assumed nontrivial $\pi_1(T)$. Thus $B$ misses $S$. Its connected interior is in the component corresponding to $C$, and the ball lifts unchanged through the cut collar identification. Therefore $Q$ bounds a PL ball in $C$, proving irreducibility. [given, algebra]

1.2 Each labeled face maps into its incident piece and then into $M$ by a map homotopic to its original inclusion, using its product collar. This composite is injective by hypothesis, so the map into the incident piece is injective. This argument already applies to the whole finite cut family; it does not assume piece-group injectivity. [given, algebra]

2.1 Consider first one connected cutting surface $T$. If its complement has two components $C_0,C_1$, reattach its product collar and use an open cover consisting of the two pieces thickened slightly into that collar. The overlap deformation retracts onto $T$ and is connected. The maps from its group into the piece groups are injective by step 1.2. By [F1], $\pi_1(M)$ is their amalgamated free product and both piece groups inject. [F1, step 1.2, construct]

2.2 If cutting along $T$ leaves one connected piece $C$, take copies $C_j$ for all $j\in\mathbb Z$ and glue the positive $T$ face of $C_j$ to the negative face of $C_{j+1}$ using the original collar identification. The resulting space $\widehat M$ maps to $M$ by the original identification on each copy. Interior points of pieces have ordinary evenly covered neighborhoods, and a collar of $T$ is covered by the paired half-collars in consecutive copies. The same collar description holds at $\partial T$, in half-space charts. Thus this is a covering of manifolds with boundary. Each finite consecutive chain $C_a\cup\cdots\cup C_b$ has injective maps of its vertex groups by induction using [F1]; the next overlap is one copy of $T$, whose inclusion in the preceding chain is injective by step 1.2 and the preceding inductive injection. [F1, step 1.2, construct]

3.1 A loop in $C_0$ nullhomotopic in $\widehat M$ has a compact nullhomotopy image lying in some finite consecutive chain. Indeed the collared copies form a locally finite family: each point meets at most two adjacent copies, so a compact set meets only finitely many, by a finite subcover. Step 2.2 then makes that loop nullhomotopic already in $C_0$. Hence $\pi_1(C_0)\to\pi_1(\widehat M)$ is injective; composing with [F2] proves injection into $\pi_1(M)$. This proves the one-surface assertion in both separating cases. [F2, step 2.1, step 2.2, algebra]

4.1 Cut the finitely many components of $S$ successively. At any stage the next surface is still injective into its current component: its composite into $M$ is the original injection, so its intermediate map is injective. The one-surface argument therefore makes every successive piece-group map injective. Their finite composites are the final piece-group maps into $M$. Step 1.1 gives irreducibility of every final piece and step 1.2 gives the face injections. No assumption about the existence of another cut has been used. [step 1.1, step 1.2, step 3.1, construct] ∎
