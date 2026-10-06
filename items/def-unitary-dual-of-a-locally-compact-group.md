---
id: def-unitary-dual-of-a-locally-compact-group
kind: definition
title: The unitary dual of a locally compact group
deps:
  - def-strongly-continuous-unitary-representation
  - def-cyclic-vector-and-cyclic-unitary-representation
  - thm-schurs-lemma-for-unitary-representations
  - def-axiom-of-choice
  - thm-gns-construction-for-topological-groups
  - cor-normalized-positive-type-functions-correspond-to-pointed-cyclic-representations
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the GNS construction and Schur suppliers used to build the dual as a set of classes; no further choice is used in the definition itself."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1, §1.A: Definitions 1.A.9 and 1.A.14, Proposition 1.A.12"
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.2: the description of the family of equivalence classes of irreducible representations"
status: draft
origin: pipeline
---
## Definition

Assume the Axiom of Choice. Let $G$ be a topological group. Two strongly
continuous unitary representations $\pi$ on $H$ and $\rho$ on $K$ are
**unitarily equivalent** when there is a unitary intertwiner $U:H\to K$ with
$U\pi(g)=\rho(g)U$ for every $g\in G$
([[def-strongly-continuous-unitary-representation]]). Irreducibility has the
invariant-subspace meaning recalled there, so an irreducible representation
acts on a nonzero Hilbert space. The **unitary dual** $\widehat G$ is the set
of unitary equivalence classes of irreducible strongly continuous unitary
representations of $G$. The zero representation is not an element of
$\widehat G$, since it is not irreducible.

## Remarks

- **Equivalence is an equivalence relation.** Identity intertwiners give
  reflexivity, inverses of unitary intertwiners give symmetry, and compositions
  of unitary intertwiners give transitivity; irreducibility is a class
  property, so the phrase "classes of irreducible representations" is
  unambiguous.
- **Why the dual is a set.** Hilbert spaces form no set, so the classes are
  not taken over all carriers. Instead, let $P_1(G)\subseteq\mathbb C^G$ be
  the set of normalized continuous functions of positive type. If $\pi$ is
  irreducible and $\xi\ne0$, the closed linear span of
  $\{\pi(g)\xi:g\in G\}$ is a nonzero closed invariant subspace
  ([[def-cyclic-vector-and-cyclic-unitary-representation]]), hence all of $H$;
  so $\xi$ is cyclic, and its normalized diagonal coefficient lies in
  $P_1(G)$. By [[cor-normalized-positive-type-functions-correspond-to-pointed-cyclic-representations]]
  the map from equivalence classes of pointed cyclic triples to $P_1(G)$ is a
  bijection, with inverse given by the GNS construction
  ([[thm-gns-construction-for-topological-groups]]). The subset $I\subseteq
  P_1(G)$ of those $\varphi$ whose GNS representation is irreducible is then a
  set, and $\widehat G$ is, equivalently, the image of $I$ under the
  assignment $\varphi\mapsto\pi_\varphi$ followed by passage to unitary
  equivalence: the quotient identifies two functions when their GNS representations are unitarily equivalent after forgetting the distinguished vectors. An intertwiner gives matching unit vectors by transporting one chosen vector to the other carrier, and every irreducible class contains a normalized cyclic pointed representative. This
  realizes $\widehat G$ as a quotient of the set $I$, with no dimension bound
  assumed.
- **Compact groups.** When $G$ is compact the same construction applies
  verbatim and gives the usual dual of a compact group; no separability is
  assumed.
- **Choice.** The Axiom of Choice is inherited from the GNS construction and
  from Schur's lemma, which are the only steps of the construction that use
  it ([[def-axiom-of-choice]]).
