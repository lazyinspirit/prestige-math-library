---
id: lem-classifying-maps-are-natural-under-group-homomorphisms
kind: lemma
title: "Classifying maps are natural up to based homotopy"
status: published
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
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
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

1.1 Take CW structures with the basepoints as vertices and choose a maximal tree $T$ in the connected one-skeleton of $BG$, using [A1]. Send all vertices and $T$ to the basepoint of $BH$. For each oriented edge $e$ outside $T$, the tree paths to its endpoints turn $e$ into a based loop; send $e$ to a loop representing its image under $\phi$. These loops generate $\pi_1(BG)$, and each two-cell attaching loop maps to the identity because $\phi$ is a homomorphism on $G$. Thus the map extends over the two-cells. For a cell of dimension $k\geq3$, its attaching sphere extends because $\pi_{k-1}(BH)=0$ by [F1]. AC chooses the tree, loop representatives, and cell extensions. The weak topology of the CW structure makes these compatible cellwise maps continuous, giving the required based map $B\phi$. [A1, F1, F2, given, construct]

2.1 Write $a=B\phi\circ c_X$ and $b=c_Y\circ f$, so $a_*=b_*=\phi$. Choose a maximal tree in $X^{(1)}$ rooted at $x_0$, and let $\alpha_v$ be its path from $x_0$ to each vertex $v$. Choose the vertex track from $a(v)$ to $b(v)$ to be $a(\alpha_v)^{-1}b(\alpha_v)$, with the track at $x_0$ constant. For an edge $e:v\to w$, the boundary of its homotopy square, conjugated by $a(\alpha_v)$, represents $a_*[\alpha_ve\alpha_w^{-1}]\,b_*[\alpha_ve\alpha_w^{-1}]^{-1}=1$. Hence every such square fills. For each $k$-cell with $k\geq2$, the boundary of its homotopy prism is a sphere $S^k\to BH$, which fills because $\pi_k(BH)=0$ by [F1]. AC chooses the fillings and the CW weak topology assembles them into a continuous homotopy fixed at $x_0$. Thus $a\simeq b$ by a based homotopy. [A1, F1, step 1.1, given, construct]

3.1 By [F3], the homotopy of step 2.1 gives $(B\phi)_*\circ(c_X)_*=(c_Y)_*\circ f_*$. This is the asserted naturality, including degree two. [F3, step 2.1] ∎

