---
id: lem-author-3a003d7b5208-triangle-presentation
kind: lemma
title: Cofiber and triangle presentations of K zero
status: published
domain: mathematics
deps:
  - math:def-simplicial-set-homotopy-and-trivial-kan-fibration
  - math:def-triangulated-grothendieck-group
  - math:def-free-abelian-group
  - math:def-quotient-group
dependency_roles:
  math:def-simplicial-set-homotopy-and-trivial-kan-fibration: mathematical-premise
  math:def-triangulated-grothendieck-group: mathematical-premise
  math:def-free-abelian-group: mathematical-premise
  math:def-quotient-group: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
sources:
  references:
    - title: "Jacob Lurie, Higher Algebra (September 18, 2017): stability and
        cofibers"
      url: https://people.math.harvard.edu/~lurie/papers/HA.pdf
      locator: Definition 0.0.0.1, printed p. 11; Definitions 1.1.1.1, 1.1.1.4 and
        1.1.1.6, Remarks 1.1.1.5 and 1.1.1.7, Definition 1.1.1.9, printed pp.
        17–20; Proposition 1.1.3.4, printed p. 31.
      statement: Use the inner-horn definition of infinity-category. A zero object is
        both initial and final; a cofiber sequence is a pushout square with a
        zero lower-left vertex. Cofibers, when they exist, are unique up to
        equivalence. Stability is equivalent to being pointed, admitting finite
        limits and colimits, and having exactly the same pushout and pullback
        squares.
      hypotheses: For cofibers, a pointed infinity-category and the indicated pushout;
        for the stability characterization, a pointed infinity-category. The
        item assumes a small stable infinity-category, so the required finite
        colimits exist.
      reading_limits: Inspected the listed definitions, the cofiber uniqueness
        passage, and the statement of Proposition 1.1.3.4 for this application.
        The general foundations of infinity-categorical limits and the full
        proof of the characterization were not independently reconstructed.
    - title: "Jacob Lurie, Higher Algebra (September 18, 2017): induced triangulation"
      url: https://people.math.harvard.edu/~lurie/papers/HA.pdf
      locator: Suspension construction preceding Notation 1.1.2.7, printed pp. 23–24;
        Definition 1.1.2.11, printed p. 26; Theorem 1.1.2.14 and Remark
        1.1.2.15, printed p. 27.
      statement: Suspension is the pushout of the two zero maps from X, is invertible
        in a stable infinity-category, and induces translation on the homotopy
        category. Distinguished triangles are the diagrams obtained from two
        coherent adjacent pushout squares with zero objects at the lower-left
        and upper-right corners. A pointed infinity-category with cofibers and
        invertible suspension has the resulting triangulated homotopy category;
        every stable infinity-category meets these hypotheses.
      hypotheses: The theorem assumes pointedness, existence of cofibers, and
        equivalence of the suspension functor. Remark 1.1.2.15 applies it to
        every stable infinity-category. Smallness is needed only for the present
        group presentations, not for this theorem.
      reading_limits: Inspected the suspension construction and the exact definition,
        theorem statement and applicability remark, including the two-square
        definition of the connecting map. The full Verdier-axiom proof on
        subsequent pages and its HTT inputs are imported, not locally reproduced
        or independently audited.
    - title: "Jacob Lurie, Higher Topos Theory: homotopy categories, equivalences and
        limits"
      url: https://people.math.harvard.edu/~lurie/papers/HTT.pdf
      locator: Definition 1.1.5.14, printed p. 25; Definition 1.2.2.1 and Proposition
        1.2.2.3, printed pp. 26–27; Section 1.2.3, Propositions 1.2.3.5 and
        1.2.3.9, printed pp. 30–33; Section 1.2.4, opening paragraphs, printed
        p. 33; Definition 1.2.13.4 and Remark 1.2.13.5, printed p. 47.
      statement: Mapping spaces are the homotopy types of morphisms in the enriched
        homotopy category, as in Definition 1.2.2.1. The homotopy category has
        the same objects and homotopy classes of edges as morphisms; every
        morphism is represented by an edge. An edge is an equivalence precisely
        when its image is an isomorphism in the homotopy category. Limits and
        colimits are final and initial coherent cones respectively, with
        colimits determined up to a contractible space of choices.
      hypotheses: An infinity-category (a quasicategory), two objects for the
        mapping-space assertion, and a specified simplicial diagram for the
        limit/colimit definition. No stability hypothesis is needed for these
        facts.
      reading_limits: Inspected the indicated mapping-space definition and Kan-complex
        statement, the homotopy-class presentation and Proposition 1.2.3.9 with
        its edge-representability argument, the equivalence definition in the
        opening of Section 1.2.4, and the displayed limit/colimit definition and
        uniqueness remark. No complete audit of HTT or reconstruction of its
        higher-category foundations is claimed.
---

## Statement
Let $\mathcal C$ be a small stable infinity-category. Its cofiber Grothendieck group, generated by equivalence classes of objects with $[Y]=[X]+[Z]$ for every cofiber sequence $X\to Y\to Z$, is canonically the triangle Grothendieck group of its homotopy category $h\mathcal C$, generated by isomorphism classes with the same relation for every distinguished triangle. The identification sends each object class to the class of that same object.

We use the quasicategory model: an infinity-category is a simplicial set in which every map $\Lambda_i[n]\to\mathcal C$ extends over $\Delta[n]$ for $0<i<n$, where the inner horn $\Lambda_i[n]$ is the union of all faces except the $i$th. Small means that the simplices form sets in the fixed universe. A pointed infinity-category has a zero object $0$, both initial and final. Stability means that it admits finite limits and colimits and that a square is a pushout if and only if it is a pullback. Here limits and colimits use coherent cones in the infinity-category, rather than limits or colimits in its homotopy category.

A cofiber sequence includes a coherent pushout square with top row $X\to Y$ and bottom row $0\to Z$; thus $Z\simeq Y\sqcup_X0$, with its indicated maps and nullhomotopy. Write $X[1]=\Sigma X\simeq0\sqcup_X0$. Extend the cofiber square by a second pushout square with top row $Y\to0$ and bottom row $Z\to W$. The outer rectangle identifies $W\simeq X[1]$, and the connecting morphism is the homotopy class of $Z\to W\simeq X[1]$. The imported triangulation theorem gives $h\mathcal C$ its induced triangulated structure: its distinguished triangles are exactly the diagrams isomorphic to these cofiber triangles $X\to Y\to Z\to X[1]$. These constructions are interpreted up to equivalence, so no presentation depends on a particular pushout representative.

The homotopy category has the same objects and morphisms $\pi_0\operatorname{Map}_{\mathcal C}(X,Y)$, equivalently homotopy classes of edges, with composition induced by composition in $\mathcal C$. An edge is an equivalence precisely when its image in $h\mathcal C$ is an isomorphism. For a set $S$, write $\mathbb Z[S]$ for the free abelian group on $S$. Each group above is the quotient of the corresponding free group by the subgroup generated by $[Y]-[X]-[Z]$ for its specified sequences or triangles. Smallness ensures that both presentations use sets.

## Statement references
[[math:def-simplicial-set-homotopy-and-trivial-kan-fibration]]

[[math:def-triangulated-grothendieck-group]]

[[math:def-free-abelian-group]]

[[math:def-quotient-group]]

## External input
Only the higher-categorical premises below are imported. The comparison of the two group presentations is proved locally.

Source 0: [Lurie, Higher Algebra](https://people.math.harvard.edu/~lurie/papers/HA.pdf), Definition 0.0.0.1; Definitions 1.1.1.1, 1.1.1.4 and 1.1.1.6, Remark 1.1.1.7 and Proposition 1.1.3.4 supply the quasicategory, pointedness, cofiber and stability conventions above, including independence of cofiber representatives. The exact statements, hypotheses and reading limits are recorded in reference 0.

Source 1: [Lurie, Higher Algebra](https://people.math.harvard.edu/~lurie/papers/HA.pdf), the suspension construction before Notation 1.1.2.7, Definition 1.1.2.11, Theorem 1.1.2.14 and Remark 1.1.2.15 supply suspension, the two-pushout connecting map and the induced triangulation. The theorem assumes a pointed infinity-category with cofibers and invertible suspension; the remark states that every stable infinity-category satisfies those hypotheses. This substantial theorem is used as an external premise, not proved here. The exact scope and reading limits are recorded in reference 1.

Source 2: [Lurie, Higher Topos Theory](https://people.math.harvard.edu/~lurie/papers/HTT.pdf), Section 1.2.2, Propositions 1.2.3.5 and 1.2.3.9, the opening of Section 1.2.4, and Definition 1.2.13.4 with Remark 1.2.13.5 supply the mapping-space/homotopy-category conventions, edge representability, the equivalence criterion, and coherent limits and colimits. The exact hypotheses and reading limits are recorded in reference 2.

## Facts & Assumptions
**Given:** A small stable infinity-category $\mathcal C$ with the induced triangulated structure supplied by Source 1.

**Goal:** Identify the two presented groups canonically without changing their object-class maps.

[F1] Source 2 gives the same objects in $\mathcal C$ and $h\mathcal C$, and every morphism in $h\mathcal C$ is represented by an edge of $\mathcal C$. Such an edge is an equivalence exactly when its image is an isomorphism.

[F2] Sources 0 and 1 give cofibers, suspension and the induced triangulation. In particular, every cofiber sequence extends to a distinguished triangle, and every distinguished triangle is isomorphic to one so obtained. Stability of the given category discharges the theorem's pointedness, cofiber and invertible-suspension hypotheses.

[F3] The triangle presentation is [[math:def-triangulated-grothendieck-group]]. The free groups and quotient groups have the meanings in [[math:def-free-abelian-group]] and [[math:def-quotient-group]]. The simplicial sets and standard simplices in the formulation have the meanings in [[math:def-simplicial-set-homotopy-and-trivial-kan-fibration]]; the inner horn is defined inline. Smallness makes the object and relation collections sets.

## Proof
**Proof technique:** Compare generators and relations.

1.1 By [F1], equivalent objects of $\mathcal C$ give isomorphic objects of $h\mathcal C$. Conversely an isomorphism in $h\mathcal C$ is represented by an edge, which is an equivalence by the same criterion. The identity on objects therefore gives a bijection of the two class sets, and hence identifies their free abelian groups by [F3]. Denote this common group by $A$. [F1, F3, construct]

2.1 Under this identification, [F2] makes every cofiber relation a distinguished-triangle relation. Conversely a distinguished triangle is isomorphic to a cofiber triangle, so the two triples give the same element $[Y]-[X]-[Z]$ of $A$. The generated relation subgroups are therefore equal, say $R$. Both presented groups are $A/R$ by [F3]. The identity of $A$ induces the mutually inverse maps given by sending each coset to the same coset. They take each object class to itself, which also uniquely determines the identification because object classes generate. [F2, F3, step 1.1] ∎
