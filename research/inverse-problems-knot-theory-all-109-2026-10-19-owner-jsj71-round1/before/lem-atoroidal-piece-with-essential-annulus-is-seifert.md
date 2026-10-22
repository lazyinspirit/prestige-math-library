---
id: lem-atoroidal-piece-with-essential-annulus-is-seifert
kind: lemma
title: "An atoroidal piece containing an essential annulus is Seifert-fibered"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-boundary-tori-circle-bundle-pants-punctured-mobius-pi1-injective
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Lemma 1.16 and its proof, printed pp.20–21"
    - title: "Walter Neumann and Gadde Swarup, Canonical decompositions of 3-manifolds"
      url: "https://arxiv.org/pdf/math/9712227"
      locator: "§3, classification of pieces containing essential annuli"
---

## Statement

Let $M$ be a compact connected orientable irreducible atoroidal $3$-manifold whose boundary components are tori. If $M$ contains an incompressible, boundary-incompressible annulus $A$ whose boundary lies in $\partial M$, then $M$ is Seifert-fibered.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Lemma 1.16](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Walter Neumann and Gadde Swarup, *Canonical decompositions of 3-manifolds*](https://arxiv.org/pdf/math/9712227)

## Facts & Assumptions

**Given:** A compact connected orientable irreducible atoroidal $3$-manifold $M$ with torus boundary and an incompressible, boundary-incompressible annulus $A$.

[F1] [[def-incompressibility-seifert-fibration-and-jsj-system]] defines irreducibility, atoroidality, incompressibility, and boundary-incompressibility.

[F2] Boundary tori inject on fundamental groups for a circle bundle over a pair of pants or once-punctured Möbius band ([[lem-boundary-tori-circle-bundle-pants-punctured-mobius-pi1-injective]], Statement).

## Proof

1.1 Let $N$ be a closed regular neighbourhood of $A$ together with collars of the boundary torus or tori incident to $\partial A$. There are three cases, according to whether the two boundary circles lie on distinct tori, or on one torus and close up with one of its complementary annuli to a torus or a Klein bottle. In the first two cases the base is a pair of pants; in the last it is a once-punctured Möbius band. The product neighbourhood $A\times[-1,1]$ and the incident torus collars give a circle fibration of $N$ over that base with $A$ vertical. Its remaining boundary consists of one or two tori $T_1,\ldots,T_r$ in the interior of $M$. [F1, given, construct]

1.2 Fix an internal torus $T_j$. By [F2], $\pi_1(T_j)\to\pi_1(N)$ is injective, so a compressing disk for $T_j$ cannot lie in $N$. If $T_j$ is incompressible in $M$, atoroidality makes it boundary-parallel. The product it cobounds cannot be all of $N$, because $\pi_1(N)$ surjects onto the nonabelian free group $\pi_1(B)$, whereas $\pi_1(T^2\times I)\cong\mathbb Z^2$ is abelian. Thus the product is an external collar and can be absorbed into $N$. If $T_j$ is compressible, its compressing disk lies on the side outside $N$. Compressing $T_j$ along that disk gives a sphere; irreducibility bounds it by a ball on the side outside $N$, since the other side contains the boundary tori of $M$ incident to $A$. Reversing the compression shows that the outside region bounded by $T_j$ is a solid torus. Repeating for the at most two internal tori expresses $M$ as $N$ with zero, one, or two solid tori attached along these tori. [F1, F2, step 1.1, construct]

2.1 The meridian slope of an attached solid torus cannot equal the regular-fiber slope of $N$ on its attaching torus: if it did, that fiber would bound a meridian disk in the attached solid torus, and adjoining the vertical annulus in $N$ would give a compressing disk for $A$. Write the meridian as $u f+v s$ in a basis of primitive slopes consisting of the fiber $f$ and a transverse slope $s$. The coefficient $v$ is nonzero by this argument. The standard fibered-solid-torus model with multiplicity $|v|$ has boundary fiber slope $f$ and meridian slope $u f+v s$; gluing that model to $N$ extends its circle fibration. Extending across every attached solid torus gives a Seifert fibration of $M$. [F1, step 1.2, construct] ∎
