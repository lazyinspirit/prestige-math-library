---
id: lem-classifying-maps-are-natural-under-group-homomorphisms
kind: lemma
title: "Classifying maps are natural up to based homotopy"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-axiom-of-choice
  - cor-classifying-space-of-a-discrete-group-is-a-k-g-one
  - thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces
  - cor-homotopic-maps-induce-the-same-map-on-singular-homology
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Davis and Kirk, Lecture Notes in Algebraic Topology"
      url: "https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf"
      locator: "Theorem 7.20 and Corollary 7.24, printed pp. 178 and 182"
    - title: "Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes"
      url: "https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "Lectures 13–14, Eilenberg–Mac Lane spaces and maps, printed pp. 42–44"
---

## Statement

Assume AC. Let $f:(X,x_0)\to(Y,y_0)$ be a based map of path-connected CW
complexes, let $G=\pi_1(X,x_0)$ and $H=\pi_1(Y,y_0)$, and put
$\phi=f_*:G\to H$. Let $c_X:X\to BG$ and $c_Y:Y\to BH$ be based classifying
maps inducing the identity on the identified fundamental groups. There is a
based map $B\phi:BG\to BH$ inducing $\phi$, and
$$
B\phi\circ c_X\simeq c_Y\circ f
$$
by a based homotopy. Consequently the induced maps on singular homology commute.

## Statement references

[Davis and Kirk, Theorem 7.20 and Corollary 7.24](https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf)

[Miller, Lectures 13–14](https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf)

## Facts & Assumptions

**Given:** Full AC, the based map $f$, the classifying maps $c_X,c_Y$, and the CW models in the statement.

[A1] Full AC, written AC, is [[def-axiom-of-choice]].

[F1] A classifying CW model is connected, has its specified fundamental group, and has zero higher homotopy groups. [[cor-classifying-space-of-a-discrete-group-is-a-k-g-one]]

[F2] Under AC, connected CW models $K(G,1)$ exist for every group and the classifying-space construction is available for the stated groups. [[thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces]]

[F3] Homotopic maps induce the same homomorphism on singular homology. [[cor-homotopic-maps-induce-the-same-map-on-singular-homology]]

## Proof

**Given:** The data above and [A1].

1.1 Construct $B\phi$ on the one-skeleton of $BG$ by sending each based loop representing $g\in G$ to a based loop representing $\phi(g)\in H$. Every two-cell attaching loop represents the identity in $G$, so its image represents the identity in $H$ and extends over the two-cell. For a cell of dimension $k\geq3$, the attaching map is a sphere map into $BH$ and extends over the disk because $\pi_{k-1}(BH)=0$ by [F1]. AC chooses the extensions over the set of cells. This gives a based map inducing $\phi$. [A1, F1, F2, given, construct]

2.1 The maps $B\phi\circ c_X$ and $c_Y\circ f$ induce the same homomorphism $\phi$ on fundamental groups. On the vertices choose based paths joining their values, and on each one-cell fill the resulting boundary loop; that loop is null because the two induced fundamental-group maps agree. Inductively, the obstruction to extending the homotopy across each $k$-cell is a map $S^k\to BH$, and it is null for $k\geq2$ by [F1]. AC supplies the cell extensions. Hence the maps are based homotopic. [A1, F1, step 1.1, given, construct]

3.1 By [F3], the homotopy of step 2.1 gives $(B\phi)_*\circ(c_X)_*=(c_Y)_*\circ f_*$. This is the asserted naturality, including degree two. [F3, step 2.1] ∎

