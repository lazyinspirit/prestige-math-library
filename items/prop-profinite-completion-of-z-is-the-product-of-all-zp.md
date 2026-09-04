---
id: prop-profinite-completion-of-z-is-the-product-of-all-zp
kind: proposition
title: "The profinite completion of the integers is the direct product of the p-adic integer groups over all primes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-zp-is-the-pro-p-completion-of-the-integers, def-external-direct-product-of-groups, thm-concrete-inverse-limit-universal-property-in-groups]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jordan Bell, The profinite completion of the integers, the p-adic integers, and Prufer p-groups"
      url: "https://jordanbell.info/LaTeX/mathematics/profinite/"
    - title: "Gareth Wilkes, Profinite Groups and Group Cohomology lecture notes"
      url: "https://www.dpmms.cam.ac.uk/~grw46/LectureNotes.pdf"
---

## Statement

There is a canonical topological group isomorphism

$$ \widehat{\mathbb Z}\cong\prod_{p\ \mathrm{prime}}\mathbb Z_p, $$

where the right-hand side is the external direct product equipped with the
product topology.

## Facts & Assumptions

**Given:** The profinite completion $\widehat{\mathbb Z}$ and the family $(\mathbb Z_p)_p$.

[L1] For each prime $p$, the inverse limit of the $p$-power quotients of
$\mathbb Z$ is $\mathbb Z_p$ ([[thm-zp-is-the-pro-p-completion-of-the-integers]]).

[F1] The external direct product is formed componentwise
([[def-external-direct-product-of-groups]]).

[L2] Compatible tuples satisfy the inverse-limit universal property
([[thm-concrete-inverse-limit-universal-property-in-groups]]).

## Proof

**Proof technique:** direct.

1.1 For each positive integer $n=\prod_p p^{v_p(n)}$, the Chinese remainder theorem gives $\mathbb Z/n\mathbb Z\cong\prod_{p\mid n}\mathbb Z/p^{v_p(n)}\mathbb Z$. These decompositions are compatible with the reduction maps as $n$ varies by divisibility. [given, F1, algebra]

2.1 Passing to the inverse limit over all $n$ therefore separates the finite quotients prime by prime: $\widehat{\mathbb Z}=\varprojlim_n \mathbb Z/n\mathbb Z \cong \prod_p \varprojlim_r \mathbb Z/p^r\mathbb Z$. The right-hand inverse limit is $\mathbb Z_p$ by [L1], and [L2] identifies the induced map as the unique compatible morphism. Hence $\widehat{\mathbb Z}\cong\prod_p\mathbb Z_p$. [L1, L2, step 1.1, algebra] ∎
