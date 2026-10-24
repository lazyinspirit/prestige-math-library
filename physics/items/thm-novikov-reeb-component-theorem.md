---
id: thm-novikov-reeb-component-theorem
kind: theorem
title: "Novikov's Reeb component theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-a-compressible-leaf-yields-a-vanishing-cycle, lem-a-nullhomotopic-closed-transversal-yields-a-vanishing-cycle, lem-a-simple-vanishing-cycle-produces-a-compact-leaf, lem-the-compact-leaf-produced-by-a-vanishing-cycle-bounds-a-reeb-component, def-reeb-component-in-a-cooriented-three-manifold-foliation, def-vanishing-cycle-of-a-codimension-one-foliation, def-induced-homomorphism-on-fundamental-groups, def-countable-choice-principle-for-foliation-pair]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
dependency_level: 21
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber; complete PDF of the translation)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a76, printed pp. 16-19 (Theorem 6.1); \u00a77, Theorem 7.1 printed p. 19 and Lemmas 7.1-7.9 printed pp. 20-25; \u00a78, printed pp. 26-28 (Theorems 8.1-8.2)"
    - title: "Samuel Ranz, Approximately Holomorphic Techniques in Foliations: A Simple Proof of Novikov's Theorem (PhD thesis, Universidad Autonoma de Madrid, 2024; complete PDF)"
      url: "https://www.icmat.es/Thesis/2024/Tesis_Samuel_Ranz.pdf"
      locator: "\u00a73.2, printed pp. 49-53 (Propositions 3.4 and 3.6)"
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "\u00a74.6, printed p. 167 (Theorem 4.37)"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a $C^2$ transversely oriented codimension-one foliation of a closed oriented $3$-manifold $M$. If either (a) some leaf $L$ of $F$ has non-injective inclusion-induced homomorphism $\pi_1(L)\to\pi_1(M)$, or (b) some closed transversal $\gamma:S^1\to M$ is null-homotopic in $M$, then $F$ contains a Reeb component ([[def-reeb-component-in-a-cooriented-three-manifold-foliation]]). Equivalently, a Reebless $C^2$ transversely oriented foliation of a closed oriented $3$-manifold has all leaves $\pi_1$-injective and all closed transversals essential (cor-reebless-leaves-are-pi-one-injective-under-novikov-hypotheses).

## Facts & Assumptions

**Given:** A $C^2$ transversely oriented codimension-one foliation $F$ of a closed oriented three-manifold $M$, and either alternative (a) or (b) of the statement.

[F1] A compressible leaf, that is one whose inclusion-induced homomorphism $\pi_1(L)\to\pi_1(M)$ is not injective, yields a vanishing cycle ([[lem-a-compressible-leaf-yields-a-vanishing-cycle]], [[def-induced-homomorphism-on-fundamental-groups]], [[def-vanishing-cycle-of-a-codimension-one-foliation]]).

[F2] A closed transversal that is null-homotopic in $M$ yields a vanishing cycle ([[lem-a-nullhomotopic-closed-transversal-yields-a-vanishing-cycle]]).

[F3] A vanishing cycle produces a compact leaf $L_1$ which bounds a Reeb component: there is a compact saturated submanifold $R$ diffeomorphic to $D^2\times S^1$ with $\partial R=L_1$, every interior leaf a plane, foliated-homeomorphic to the standard Reeb component ([[lem-a-simple-vanishing-cycle-produces-a-compact-leaf]], [[lem-the-compact-leaf-produced-by-a-vanishing-cycle-bounds-a-reeb-component]], [[def-reeb-component-in-a-cooriented-three-manifold-foliation]]).

[F4] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).

## Proof

**Proof technique:** direct.

1.1 In branch (a) [F1] supplies a vanishing cycle from the non-injective leaf inclusion; in branch (b) [F2] supplies a vanishing cycle from the null-homotopic closed transversal. The two branches are independent and cover the two hypotheses of the theorem. [F1, F2, given]

2.1 Either vanishing cycle, together with its leafwise family and characteristic structure, satisfies the hypotheses of the compact-leaf-and-Reeb-component result [F3]: applying [[lem-a-simple-vanishing-cycle-produces-a-compact-leaf]] produces a compact boundary leaf $L_1$, and applying [[lem-the-compact-leaf-produced-by-a-vanishing-cycle-bounds-a-reeb-component]] produces a compact saturated solid torus $R$ with $\partial R=L_1$ whose foliation is foliated-homeomorphic to the standard Reeb model, so $R$ is a Reeb component of $F$ in the sense of the definition. [F3, step 1.1]

3.1 Therefore both alternatives (a) and (b) force the existence of a Reeb component; equivalently, a Reebless $C^2$ transversely oriented foliation of a closed oriented three-manifold has all leaf inclusions $\pi_1$-injective and all closed transversals essential, the equivalence being the contrapositive of the two alternatives. The extra $\Pi$-side limit-set clause of the Reeb-component construction is unnecessary for this existence conclusion, and the proof consumes only the two branch suppliers, one vanishing-cycle chain and the standing countable choice from [F4]. [F3, F4, step 2.1] ∎
