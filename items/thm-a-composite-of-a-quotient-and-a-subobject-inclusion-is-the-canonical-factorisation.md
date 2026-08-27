---
id: thm-a-composite-of-a-quotient-and-a-subobject-inclusion-is-the-canonical-factorisation
kind: theorem
title: "The quotient by the kernel followed by the image inclusion is the canonical epi-mono factorization"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism, thm-first-isomorphism-theorem-in-an-abelian-category]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Proposition VIII.3.1"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: frontier-21
---

## Statement

For a morphism $f:A\to B$ in an abelian category, the factorization

$$A\twoheadrightarrow A/\ker(f)\overset{\sim}\longrightarrow\operatorname{im}(f)\rightarrowtail B$$

is the canonical epimorphism-monomorphism factorization of $f$.

## Facts & Assumptions

**Given:** An abelian category and a morphism $f:A\to B$.

[L1] The first isomorphism theorem gives a canonical isomorphism
$A/\ker(f)\cong\operatorname{im}(f)$
([[thm-first-isomorphism-theorem-in-an-abelian-category]]).

[L2] Epic-monic factorizations exist and are unique up to unique isomorphism
([[thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], there is an isomorphism $\phi:A/\ker(f)\to\operatorname{im}(f)$ such that the composite of the quotient map $q:A\to A/\ker(f)$, the isomorphism $\phi$, and the image inclusion $i_f:\operatorname{im}(f)\to B$ equals $f$. [L1]

2.1 The quotient map $q$ is epic and the image inclusion $i_f$ is monic, so step 1.1 is an epic-monic factorization of $f$. By the uniqueness clause in [L2], it is the canonical one. [L2, step 1.1] ∎
