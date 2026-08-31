---
id: thm-currying-and-uncurrying-are-mutually-inverse
kind: theorem
title: "Currying and uncurrying are mutually inverse"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cartesian-closed-category, def-the-internal-hom-and-its-evaluation-morphism, thm-the-internal-hom-composition-morphism, thm-a-category-with-finite-products-is-monoidal]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., IV.6"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "Emily Riehl, Category Theory in Context, 2nd ed., Section 4.4"
      url: "https://emilyriehl.github.io/files/context.pdf"
---

## Statement

In a cartesian closed category, currying and uncurrying for the adjunction $-\times B\dashv(-)^B$ are mutually inverse. Equivalently, for every $f:A\times B\to C$ and $g:A\to C^B$,

$$\operatorname{uncurry}(\operatorname{curry}(f))=f,\qquad \operatorname{curry}(\operatorname{uncurry}(g))=g.$$

Repeated currying is associative after the canonical reassociation of products.

## Facts & Assumptions

**Given:** A cartesian closed category and objects $A,B,C,D$.

[L1] Cartesian closed means that the cartesian product is a closed monoidal tensor, so $-\times B$ has right adjoint $(-)^B$ ([[def-cartesian-closed-category]], [[thm-a-category-with-finite-products-is-monoidal]]).

[L2] The internal-hom adjunction comes with evaluation and inverse transposition operations ([[def-the-internal-hom-and-its-evaluation-morphism]]).

[L3] Internal hom composition is obtained by transposing iterated evaluation and is compatible with reassociation ([[thm-the-internal-hom-composition-morphism]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], currying is the transpose map $\mathcal C(A\times B,C)\to\mathcal C(A,C^B)$, and uncurrying is its inverse transpose. For any adjunction, transpose followed by inverse transpose and inverse transpose followed by transpose are the identity. [given, L1, L2]

2.1 Therefore $\operatorname{uncurry}(\operatorname{curry}(f))=f$ and $\operatorname{curry}(\operatorname{uncurry}(g))=g$. [step 1.1, algebra]

2.2 For a morphism $h:A\times B\times C\to D$, first curry in the $C$-variable and then in the $B$-variable. The resulting map $A\to(D^C)^B$ is the transpose of the same iterated evaluation map that produces $A\to D^{B\times C}$ after reassociating products. By [L3], these coincide under the canonical internal-hom composition isomorphism. [step 1.1, L3, algebra]

3.1 So currying and uncurrying are mutually inverse, and repeated currying is associative up to the canonical reassociation. [step 2.1, step 2.2] ∎
