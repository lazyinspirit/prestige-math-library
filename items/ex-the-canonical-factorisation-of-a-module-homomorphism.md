---
id: ex-the-canonical-factorisation-of-a-module-homomorphism
kind: example
title: "A module homomorphism factors as quotient by its kernel followed by inclusion of its image"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-modules-over-a-ring-form-an-abelian-category, thm-first-isomorphism-theorem-modules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Gautam Tamme, Algebra II Lecture 9"
      url: "https://people.math.osu.edu/gautam.42/S21/AII/Notes/Lecture09.pdf"
pipeline_run: frontier-21
---

## Example

For a module homomorphism $f:M\to N$, the quotient map
$M\twoheadrightarrow M/\ker(f)$, the first-isomorphism isomorphism
$M/\ker(f)\cong\operatorname{im}(f)$, and the inclusion
$\operatorname{im}(f)\rightarrowtail N$ together form the canonical
epimorphism-monomorphism factorization of $f$.

## Facts & Assumptions

**Given:** A module homomorphism $f:M\to N$.

[L1] Modules over a ring form an abelian category
([[thm-modules-over-a-ring-form-an-abelian-category]]).

[L2] The first isomorphism theorem for modules identifies $M/\ker(f)$ with
$\operatorname{im}(f)$
([[thm-first-isomorphism-theorem-modules]]).

## Verification

**Proof technique:** direct.

1.1 The quotient map $q:M\to M/\ker(f)$ is the coimage projection of $f$, and the inclusion $\operatorname{im}(f)\to N$ is its image inclusion. [L1]

2.1 The isomorphism from [L2] identifies those two middle objects, and its composite with $q$ and the inclusion is exactly $f$. So the usual module factorization is the categorical coimage-image factorization. [L1, L2, step 1.1] ∎
