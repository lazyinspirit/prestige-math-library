---
id: def-garside-interface-artin-tits-prerequisites
kind: definition
title: Categorical Garside structures and simple arrows
status: published
domain: mathematics
origin: pipeline
deps:
  - def-author-18fc5d9b80f3-category-divisibility
  - math:def-category
  - math:def-natural-transformation
  - math:def-lattice-distributive-lattice-and-order-ideal
  - math:def-semigroup-and-monoid
  - math:rem-category-theory-class-and-size-conventions
  - math:def-functor-and-contravariant-functor
dependency_roles:
  def-author-18fc5d9b80f3-category-divisibility: mathematical-premise
  math:def-category: mathematical-premise
  math:def-natural-transformation: mathematical-premise
  math:def-lattice-distributive-lattice-and-order-ideal: mathematical-premise
  math:def-semigroup-and-monoid: mathematical-premise
  math:rem-category-theory-class-and-size-conventions: mathematical-premise
  math:def-functor-and-contravariant-functor: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Garside categories, periodic loops and cyclic sets
      url: https://arxiv.org/pdf/math/0610778v1
      locator: §2, basic triple and Definitions 2.2–2.5, footnote 3; printed pp. 9–10
      statement: A categorical Garside structure has a small cancellative category, an
        automorphism and a natural transformation from the identity to it; atoms
        are simple and the outgoing and incoming divisibility orders are
        lattices. The stated homogeneous condition may be replaced by atomicity.
      hypotheses: The atomic variant of the categorical definition; composition is
        written in traversal order.
      reading_limits: Read extracted text of the basic triple, Definitions 2.2–2.5,
        the intervening atomicity and cancellation definitions, and footnote 3
        on printed pp. 9–10 of arXiv:math/0610778v1. No normal-form or embedding
        theorem, or proof of those theorems, is imported or reconstructed.
dependency_level: 1
formulation_deps:
  - def-author-18fc5d9b80f3-category-divisibility
  - math:def-category
  - math:def-natural-transformation
  - math:def-lattice-distributive-lattice-and-order-ideal
  - math:def-semigroup-and-monoid
  - math:rem-category-theory-class-and-size-conventions
  - math:def-functor-and-contravariant-functor
argument_deps:
  - def-author-18fc5d9b80f3-category-divisibility
  - math:def-category
  - math:def-natural-transformation
  - math:def-lattice-distributive-lattice-and-order-ideal
  - math:def-semigroup-and-monoid
  - math:rem-category-theory-class-and-size-conventions
  - math:def-functor-and-contravariant-functor
---

## Definition

Let $\mathcal C$ be a small category, meaning that its objects and arrows form sets. An automorphism of $\mathcal C$ means a functor $\phi:\mathcal C\to\mathcal C$ admitting a functor $\psi:\mathcal C\to\mathcal C$ with $\psi\circ\phi=\operatorname{id}_{\mathcal C}=\phi\circ\psi$ as equalities on objects and arrows. Let $\phi$ be such an automorphism, and let $\Delta$ be a natural transformation from the identity functor to $\phi$. Thus its component at $x$ is an arrow $\Delta_x:x\to\phi(x)$, and for every $f:x\to y$ one has $f\Delta_y=\Delta_x\phi(f)$ in traversal order. An arrow $f:x\to y$ is simple for this structure if there is an arrow $g:y\to\phi(x)$ with $fg=\Delta_x$.

An atomic categorical Garside structure is such a triple $(\mathcal C,\phi,\Delta)$ in which $\mathcal C$ is atomic and cancellative, every atom is simple, and, for every object $x$, both the outgoing left-divisibility order and the incoming right-divisibility order are lattices. A Garside category means a category equipped with such a structure. In the one-object case its arrows form a Garside monoid in this categorical convention. The structure has finite type if its set of simple arrows is finite.

## Definition references

[[def-author-18fc5d9b80f3-category-divisibility]]

[[math:def-category]]

[[math:rem-category-theory-class-and-size-conventions]]

[[math:def-functor-and-contravariant-functor]]

[[math:def-natural-transformation]]

[[math:def-lattice-distributive-lattice-and-order-ideal]]

[[math:def-semigroup-and-monoid]]

## Justification

The naturality equation has matching source and target on both sides. The condition $fg=\Delta_x$ determines the domain and codomain required of $g$, so simplicity is an unambiguous property of an arrow relative to the specified triple. Atomicity and cancellation make the two divisibility relations partial orders, as established in the divisibility definition; the lattice condition is consequently meaningful. Smallness ensures that the arrow collections used for the divisibility orders and the one-object monoid are sets. In a one-object category, composition and its identity give a monoid. The cited definition records the atomic variant adopted here; finite type is an additional condition, not an implicit assumption.
