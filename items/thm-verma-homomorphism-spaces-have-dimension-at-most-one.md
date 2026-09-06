---
id: thm-verma-homomorphism-spaces-have-dimension-at-most-one
kind: theorem
title: "Homomorphism spaces between Verma modules have dimension at most one"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-every-verma-module-contains-a-simple-verma-submodule, lem-homomorphisms-from-a-simple-verma-module-have-dimension-at-most-one, lem-a-nonzero-verma-homomorphism-is-injective]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Exercise 8.14(iv)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement

For all weights $\lambda,\mu$, $\dim\operatorname{Hom}_{\mathfrak g}(M(\mu),M(\lambda))\leq1$.

## Facts & Assumptions

**Given:** A simple Verma submodule exists by [[lem-every-verma-module-contains-a-simple-verma-submodule]], and maps from one are unique up to scalar by [[lem-homomorphisms-from-a-simple-verma-module-have-dimension-at-most-one]].

[L1] Every nonzero homomorphism between Verma modules is injective ([[lem-a-nonzero-verma-homomorphism-is-injective]]).

## Proof

**Proof technique:** direct.

1.1 Choose a simple Verma submodule $S\subset M(\mu)$. The restrictions of any two maps $f,g:M(\mu)\to M(\lambda)$ are proportional, say $f|_S=cg|_S$. [given, choose]

2.1 Then $(f-cg)|_S=0$. If $f-cg$ were nonzero, [L1] would make it injective, so it could not vanish on nonzero $S$.  Hence $f=cg$, proving the bound. [L1, step 1.1, contradiction] ∎
