---
id: thm-separable-degree-is-independent-of-the-algebraic-closure
kind: theorem
title: "The separable degree is independent of the chosen algebraic closure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separable-degree, def-extension-degree-and-finite-extension, thm-evaluation-kernel-and-minimal-polynomial, def-polynomials-that-split-and-splitting-fields, cor-splitting-fields-are-unique-up-to-base-isomorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

For a finite extension $K/F$, the number of $F$-embeddings of $K$ into an
algebraic closure of $F$ is independent of the chosen algebraic closure.

## Facts & Assumptions

**Given:** A finite extension $K/F$ and algebraic closures $\Omega_1/F$ and $\Omega_2/F$.

[L1] Separable degree is the finite cardinality of the set of base-field embeddings into a chosen algebraic closure ([[def-separable-degree]]).

[L2] A finite extension has a finite basis over its base ([[def-extension-degree-and-finite-extension]]).

[L3] Every algebraic element has a unique monic irreducible minimal polynomial over the base ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[L4] A splitting field of a polynomial is generated over the base by all of its roots ([[def-polynomials-that-split-and-splitting-fields]]).

[L5] Any two splitting fields of the same nonzero polynomial are isomorphic over the base ([[cor-splitting-fields-are-unique-up-to-base-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Choose a finite $F$-basis $\alpha_1,\ldots,\alpha_r$ of $K$ by [L2], and let $f$ be the product of their minimal polynomials over $F$ from [L3]. For $j=1,2$, let $E_j\subseteq\Omega_j$ be generated over $F$ by all roots of $f$ in $\Omega_j$. Since $\Omega_j$ is algebraically closed, $f$ splits there, and [L4] makes $E_j/F$ a splitting field of $f$. [L2, L3, L4, choose]

1.2 By [L5], choose an $F$-isomorphism $\theta:E_1\to E_2$. Postcomposition with $\theta$ gives a bijection $\operatorname{Hom}_F(K,E_1)\to\operatorname{Hom}_F(K,E_2)$, with inverse given by postcomposition with $\theta^{-1}$. [L5, construct]

2.1 Every $F$-embedding $\sigma:K\to\Omega_j$ sends each $\alpha_i$ to a root of its minimal polynomial, so $\sigma(K)=F(\sigma(\alpha_1),\ldots,\sigma(\alpha_r))\subseteq E_j$. Hence $\operatorname{Hom}_F(K,\Omega_j)=\operatorname{Hom}_F(K,E_j)$. [step 1.1, L3, algebra]

3.1 Steps 2.1 and 1.2 give a bijection between the embedding sets into $\Omega_1$ and $\Omega_2$. Their finite cardinalities are equal, so the value in [L1] is independent of the closure. [step 2.1, step 1.2, L1] ∎
