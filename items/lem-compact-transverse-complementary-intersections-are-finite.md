---
id: lem-compact-transverse-complementary-intersections-are-finite
kind: lemma
title: "Compact transverse complementary intersections are finite"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-transverse-complementary-dimensional-intersection-set, thm-continuity-characterisations-top, thm-closed-subspace-of-a-compact-space-is-compact, def-compact-space, def-subspace-topology-top, def-embedded-submanifold-and-slice-chart, thm-transverse-preimage-theorem]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 2 §4, printed pp. 77–78 (a compact source has a finite transverse fibre)"
    - title: "John Milnor, Topology from the Differentiable Viewpoint (Princeton University Press; complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
      locator: "§1, printed pp. 7–8 (a regular preimage of a compact source is finite); §4, printed p. 20"
---

## Statement

Let $f:X^x\to M^n$ be smooth with $X$ compact, let $Z\subseteq M$ be a closed embedded submanifold, and suppose $f$ is transverse to $Z$ with $x+\dim Z=n$. Then $f^{-1}(Z)$ is finite (possibly empty), so $\#f^{-1}(Z)$ is a well-defined nonnegative integer. Likewise, if $A^a,B^b\subseteq M$ are transverse embedded submanifolds of $M$ with $a+b=n$ and one of $A,B$ is compact while the other is closed, then $A\cap B$ is finite. Both compactness of the relevant source and closedness of the other factor are used: a zero-dimensional manifold is discrete, and a compact discrete space is finite.

## Facts & Assumptions

**Given:** A smooth map $f:X^x\to M^n$ with $X$ compact, $Z\subseteq M$ a closed embedded submanifold, $f\pitchfork Z$ and $x+\dim Z=n$; and the corresponding submanifold situation.

[F1] Under these hypotheses $f^{-1}(Z)$ is identified with $X\times_MZ$ by $p\mapsto(p,f(p))$; projection to $X$ is its inverse. It is a $0$-dimensional embedded submanifold of $X$ by [[thm-transverse-preimage-theorem]]; in a slice chart with $k=0$ each point is an isolated point of $f^{-1}(Z)$, with the subspace topology ([[def-transverse-complementary-dimensional-intersection-set]], [[def-embedded-submanifold-and-slice-chart]], [[def-subspace-topology-top]]).

[F2] Preimages of closed sets under continuous maps are closed; the points of $X$ with $f(x)\in Z$ form the preimage of the closed set $Z$ ([[thm-continuity-characterisations-top]]).

[F3] A closed subspace of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]).

[F4] A compact discrete topological space is finite: its singleton open cover has a finite subcover, whose union is a finite set equal to the whole space; the discrete topology on an infinite set is not compact ([[def-compact-space]]).

## Proof

**Proof technique:** direct, from discreteness and compactness.

1.1 By [F1] the set $f^{-1}(Z)$ is a $0$-dimensional embedded submanifold of $X$, hence discrete in its subspace topology: each of its points has a slice chart in which it is the only point of the set in that chart. [F1, given]

2.1 The set $f^{-1}(Z)$ is the preimage of the closed set $Z$ under the continuous map $f$, since smooth maps are continuous, hence closed in $X$ by [F2], hence compact by compactness of $X$ and [F3]. A compact discrete space is finite by [F4], so $\#f^{-1}(Z)$ is a well-defined nonnegative integer; the empty case is included. [F2, F3, F4, step 1.1, given]

3.1 For the submanifold case, apply the map case to the inclusion of the compact factor: if $A$ is compact and $B$ is closed in $M$, then the inclusion $i_A:A\to M$ is smooth with $A$ compact, $i_A\pitchfork B$ because $A\pitchfork B$, and $i_A^{-1}(B)=A\cap B$, so 2.1 gives that $A\cap B$ is finite; the roles of $A$ and $B$ may be exchanged. No choice axiom is used. [step 2.1, given, algebra] ∎
