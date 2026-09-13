---
id: cor-classifying-space-of-a-discrete-group-is-a-k-g-one
kind: corollary
title: The classifying space of a discrete group is a K(G,1)
status: draft
origin: pipeline
deps: ["prop-loop-space-of-bg-recovers-g-up-to-homotopy", "thm-milnor-join-model-is-a-contractible-free-g-space", "def-eilenberg-maclane-space", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: James Davis and Paul Kirk, Lecture Notes in Algebraic Topology
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: Section 8.6, Theorem 8.22 and the following long-exact-sequence calculation, printed pages 217--218
    - title: Dale Husemoller, Fibre Bundles, Third Edition
      url: https://link.springer.com/book/10.1007/978-1-4757-2261-1
      locator: Chapter 4, Section 11.3, the discrete example and finite-join filtration, printed pages 55--56
---

## Statement

Assume AC. For a discrete group $G$, Milnor's $BG$ is connected and

$$ \pi_1(BG)\cong G,\qquad \pi_n(BG)=0\quad(n>1). $$

Consequently any connected CW model of $BG$ is an Eilenberg--Mac Lane space $K(G,1)$.

## Facts & Assumptions

[F1] The loop comparison gives $\pi_n(BG)\cong\pi_{n-1}(G)$ for $n\geq2$ and identifies $\pi_1(BG)$ with $\pi_0(G)$ ([[prop-loop-space-of-bg-recovers-g-up-to-homotopy]]).

[F2] A discrete group has components indexed by its elements and has zero positive homotopy groups.

[F3] $EG$ is contractible and its orbit map is surjective ([[thm-milnor-join-model-is-a-contractible-free-g-space]]).

[A1] AC is inherited exactly from the loop comparison and its numerable-bundle lifting construction ([[def-axiom-of-choice]]).

## Proof

**Given:** A discrete group $G$ and [A1].

1.1 Assume AC, exactly as required by the loop comparison [F1]. By [F3], $EG$ is path connected. Its continuous surjective image $BG$ is therefore path connected. By [F1, F2], for $n>1$ we have $\pi_n(BG)\cong\pi_{n-1}(G)=0$, and the component part of the same fiber sequence gives $\pi_1(BG)\cong\pi_0(G)=G$. With right-action conventions this identification may differ from the chosen concatenation convention by inversion, which is the canonical isomorphism $G^{\mathrm{op}}\cong G$. [F1, F2, F3]

2.1 A connected CW model preserves all these homotopy groups. It therefore has fundamental group $G$ and no higher positive homotopy groups, exactly the definition of $K(G,1)$. The trivial group gives a contractible connected model and is included. $\square$ [A1, F1, step 1.1]
