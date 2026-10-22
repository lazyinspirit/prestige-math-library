---
id: lem-essential-curves-on-torus-with-same-primitive-class-are-isotopic
kind: lemma
title: "Essential torus curves with the same primitive class are isotopic"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
proof_strategy: direct
axiom_use: "The proof uses only finite surface topology and is choice-free."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, §4.4 and §5.1.1"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "§4.4, Lemma 4.4.1 and Exercise 4.4.2; §5.1.1, printed p. 27, uniqueness up to isotopy of a simple closed curve of fixed primitive coordinates on a torus."
---

## Statement

Let $T=\mathbb R^2/\mathbb Z^2$ be oriented by $dx\wedge dy$, and identify $H_1(T;\mathbb Z)$ with $\mathbb Z^2$ in the standard basis, so the algebraic intersection of classes $v,w$ is $\det(v,w)$. Let $\gamma_0,\gamma_1\subset T$ be smooth embedded circles that are not null-homotopic. Orient them so that their homology classes agree, and suppose their common class $v\in H_1(T;\mathbb Z)$ is primitive, meaning it is not an integer multiple $m u$ with $|m|>1$. Then $\gamma_0$ and $\gamma_1$ are isotopic through embedded circles in $T$.

## Statement references

[Cattabriga–Francaviglia, *Knot Theory and Applications: Lecture Notes*, §4.4 and §5.1.1](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf)

## Facts & Assumptions

**Given:** The torus and two oriented essential smooth embedded circles with common primitive class $v$.

## Proof

1.1 Since $v$ is primitive, Bezout's identity gives $w\in H_1(T;\mathbb Z)$ with $\det(v,w)=1$. The linear torus diffeomorphism taking the basis $(v,w)$ to the standard basis takes both curves to curves of class $(1,0)$. It is enough to prove the claim for that class. [given, algebra, construct]

1.2 Put the two curves in transverse position. If they intersect, lift them to the annular cover $A=\mathbb R^2/\langle(1,0)\rangle$. Each lift is an essential embedded circle, and the deck translates of each one are disjoint. In the universal cover of $A$, a lift of either circle is a proper line invariant under horizontal unit translation and contained in a bounded horizontal strip; all such lines have the same two ends. The signed intersection sum in a fundamental period is zero because both curves have class $(1,0)$. Thus intersections have both signs. Two successive intersections of opposite sign cut off a bounded region between subarcs of the two lines. Choose among such regions one with the least number of interior intersections and, among those, least horizontal width modulo deck translation. If a lifted arc entered the region, its first entry and exit would cut off a region with fewer interior intersections; if a nontrivial deck translate met it, the overlap would yield a region of smaller horizontal width. Hence its interior is disjoint from all lifted arcs and translates, and its projection is an embedded bigon in $T$. Isotoping one arc across the bigon removes two intersections and creates none. Compactness and transversality give finitely many intersections, so finitely many such isotopies make the curves disjoint. [given, step 1.1, construct, algebra]

2.1 The disjoint curves still have primitive class $(1,0)$, so neither bounds a disk. Cutting the torus along the second curve gives a connected orientable surface with two boundary circles and Euler characteristic zero, hence an annulus. The first curve remains essential in that annulus. Cutting the annulus along it gives two annuli, so it is parallel to the second curve and isotopic to it. Composing this isotopy with the finite bigon-removal isotopies in step 1.2 proves the assertion for the original pair; undoing the linear diffeomorphism proves it for $v$. [given, step 1.1, step 1.2, algebra] ∎
