---
id: thm-members-modulo-equivalence-correspond-to-subobjects
kind: theorem
title: "Members modulo equivalence correspond to subobjects"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-member-equivalence-is-transitive,
       thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism,
       thm-the-image-is-the-least-subobject-through-which-a-morphism-factors,
       def-subobject-and-quotient-object,
       thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence,
       def-equivalence-of-members]
justified_by: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Statement

Let $A$ be an object of an abelian category. Sending a member
$$x:X\to A$$
to the subobject of $A$ represented by its image inclusion induces a bijection
between equivalence classes of members of $A$ and subobjects of $A$.

## Facts & Assumptions

**Given:** A member $x:X \to A$ and, when needed, a second member $y:Y \to A$.

[L1] Every morphism factors as an epimorphism followed by a monomorphism
([[thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism]]).

[L2] Subobjects are mutual-factorization classes of monomorphisms
([[def-subobject-and-quotient-object]],
[[thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence]]).

[L4] Member equivalence is transitive
([[def-equivalence-of-members]],
[[thm-member-equivalence-is-transitive]]).

## Proof

**Proof technique:** direct.

1.1 Factor $x$ as $X \xrightarrow{e_x} I_x \xrightarrow{m_x} A$ with $e_x$ epic and $m_x$ monic, using [L1], and assign to the class of $x$ the subobject $[\!m_x\!]$ of $A$. [L1, L2, construct]

1.2 Every subobject is represented. If $m:S \rightarrowtail A$ is monic, then $m$ itself is a member of $A$, and the factorization $S \xrightarrow{1_S} S \xrightarrow{m} A$ shows that its image class is $[\!m\!]$. [L1, L2]

2.1 This assignment is well defined on equivalence classes. The equality $x 1_X = m_x e_x$ with epic maps on the right shows $x \equiv m_x$, and similarly $y \equiv m_y$. If $x \equiv y$, then transitivity from [L4] gives $m_x \equiv m_y$, which for monomorphisms into $A$ is exactly equality of subobject classes by [L2]. [L1, L2, L4, step 1.1]

3.1 The assignment is injective. If $x$ and $y$ determine the same subobject, then $[\!m_x\!] = [\!m_y\!]$ by [L2]. Step 2.1 gives $x \equiv m_x$ and $y \equiv m_y$, while equality of subobjects makes $m_x$ and $m_y$ equivalent as members. Another use of [L4] yields $x \equiv y$. [L2, L4, step 2.1]

4.1 Therefore the assignment of step 1.1 is a bijection from member-equivalence classes to subobjects of $A$. [step 1.2, step 3.1] ∎
