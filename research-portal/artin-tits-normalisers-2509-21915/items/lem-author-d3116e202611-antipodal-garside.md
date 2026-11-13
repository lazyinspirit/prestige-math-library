---
id: lem-author-d3116e202611-antipodal-garside
kind: lemma
title: Antipodal transformation and finite-type Garside structure
status: published
domain: mathematics
origin: pipeline
deps:
  - lem-author-d3116e202611-gallery-category
  - lem-author-d3116e202611-gallery-lattices
  - def-garside-interface-artin-tits-prerequisites
dependency_roles:
  lem-author-d3116e202611-gallery-category: mathematical-premise
  lem-author-d3116e202611-gallery-lattices: mathematical-premise
  def-garside-interface-artin-tits-prerequisites: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Pierre Deligne, Les immeubles des groupes de tresses généralisés,
        Inventiones mathematicae 17 (1972), 273–302
      url: https://publications.ias.edu/sites/default/files/Number18.pdf
      locator: §1, (1.3), (1.12)–(1.13), (1.26)(i),(ii); printed pp. 275, 277–278, 283
      statement: The class Δ at A is u(A,−A). For any g:A→B, gΔ_B=Δ_A(−g). For g,h
        with source A, some gΔ^n begins with h; n may be chosen as the number of
        minimal-gallery factors of h. Minimal galleries cross each separating
        hyperplane exactly once.
      hypotheses: A finite arrangement of homogeneous real hyperplanes in a
        finite-dimensional real vector space, with every chamber an open
        simplicial cone. Products are in traversal order. In nonessential cases
        first pass to the quotient by the common intersection and split off its
        complex vector-space factor.
      reading_limits: Read extracted full-text statements and surrounding arguments at
        the cited locators; inspected rendered printed pp. 278, 280, 282, 283
        and 293 for formulas. The inputs are imported, not reconstructed proofs.
        No complete reading of the proofs of the contractible-cover theorem or
        the whole paper is claimed.
dependency_level: 5
formulation_deps:
  - lem-author-d3116e202611-gallery-category
  - def-garside-interface-artin-tits-prerequisites
argument_deps:
  - lem-author-d3116e202611-gallery-category
  - lem-author-d3116e202611-gallery-lattices
  - def-garside-interface-artin-tits-prerequisites
---

## Statement

The gallery category $P$ of a finite central simplicial arrangement has a finite-type atomic categorical Garside structure with $\phi(A)=-A$, $\phi(g)=-g$ and $\Delta_A=u(A,-A)$. Its simple arrows are exactly the minimal gallery classes.

## Statement references

[[lem-author-d3116e202611-gallery-category]]

[[lem-author-d3116e202611-gallery-lattices]]

[[def-garside-interface-artin-tits-prerequisites]]

## External input

[E1] Import the distance/minimality description of Deligne (1.3), uniqueness (1.12), the notation (1.13), and the two identities of Lemma 1.26. Their source hypotheses are finite central simplicial arrangements. Only the listed facts are imported; the Garside assembly is the local argument below.

## Facts & Assumptions

[F99] Import the distance/minimality description of Deligne (1.3), uniqueness (1.12), the notation (1.13), and the two identities of Lemma 1.26. Their source hypotheses are finite central simplicial arrangements. Only the listed facts are imported; the Garside assembly is the local argument below.

[F1] Use [[lem-author-d3116e202611-gallery-category]] for length and symmetries, [[lem-author-d3116e202611-gallery-lattices]] for the lattice implication, and [[def-garside-interface-artin-tits-prerequisites]] for the categorical definition. The independent metric and antipodal identities in the External input below are used only under the finite simplicial hypotheses.



[E1] Import the distance/minimality description of Deligne (1.3), uniqueness (1.12), the notation (1.13), and the two identities of Lemma 1.26. Their source hypotheses are finite central simplicial arrangements. Only the listed facts are imported; the Garside assembly is the local argument below.

## Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the Statement.

1.1 The antipodal map is an involutive category automorphism by F1. Deligne (1.26)(i) is precisely the naturality identity $g\Delta_B=\Delta_A\phi(g)$ for $g:A\to B$. Given $a,b$ starting at $A$, (1.26)(ii) applied with $g=1_A$ makes each divide a power of $\Delta$ starting at $A$; a sufficiently large power is a common right multiple. Here powers mean successive components, whose sources alternate under $\phi$. Thus [[lem-author-d3116e202611-gallery-lattices]] applies and supplies both lattices. [F1, given, F99]

1.2 Every minimal class $u(A,B)$ divides $\Delta_A$: the hyperplanes separating $A$ from $B$ and those separating $B$ from $-A$ partition all hyperplanes, so concatenating corresponding minimal paths is minimal from $A$ to $-A$. Conversely any prefix of $\Delta_A$ crosses no hyperplane twice, since the complete gallery crosses each once and the congruence preserves length. It is therefore minimal. In particular each atom is simple. [F1, given, F99]

2.1 Smallness, cancellation and atomicity were proved in F1. Combined with naturality, the atom condition and both lattices, these are all conditions of the categorical Garside definition. There is at most one simple per ordered pair of chambers, and there are finitely many chambers; the structure is finite type. [F1, step 1.1, step 1.2] ∎
