---
id: lem-hilbert-families-fpqc-descent
kind: lemma
title: "Effective descent and base change of embedded Hilbert families"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - lem-hilbert-euler-polynomial-for-ample-polarization
  - def-hilbert-functor-of-flat-projective-subschemes
  - thm-faithfully-flat-descent-of-flatness
  - cor-faithfully-flat-descent-of-finite-generation
  - cor-euler-characteristic-locally-constant-flat-proper-family
  - lem-proper-cohomology-field-extension
  - def-dependent-choice
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-29.md"
      - "research/frontier-38-owner-30-alpha-batch-29-5a.md"
      - "research/frontier-38-owner-30-step5-hash-29-post-5a.json"
    content_sha256: "4df5297c4577f53a90ecfc276d1bdf78dd222f40c38ecf96ab59d1f13a327600"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Nitin Nitsure, Construction of Hilbert and Quot Schemes, Sections 2–5"
      url: "https://arxiv.org/pdf/math/0504590"
    - title: "Alexander Grothendieck, Les schémas de Hilbert, Bourbaki 221, Sections 2–3"
      url: "https://www.numdam.org/item/SB_1960-1961__6__249_0.pdf"
---

## Statement

Under the conventions of [[def-hilbert-functor-of-flat-projective-subschemes]], the Hilbert functor and every fixed-polynomial subfunctor are fpqc sheaves. Compatible closed families on an fpqc cover descend to a unique closed finitely presented flat family on the base. Arbitrary base change preserves membership and the polynomial. The polynomial of a family is locally constant, and its polynomial loci are open and closed.

## Facts & Assumptions

**Given:** The hypotheses in the statement and AC and DC, inherited from the scheme, cohomology, and finite-module suppliers ([[def-axiom-of-choice]], [[def-dependent-choice]]).

[F1] Flatness descends faithfully flatly ([[thm-faithfully-flat-descent-of-flatness]]). Finite generation descends faithfully flatly ([[cor-faithfully-flat-descent-of-finite-generation]]).

[F2] Fibre Euler characteristics are values of the ample-polarization polynomial, and eventual equality determines that polynomial uniquely ([[lem-hilbert-euler-polynomial-for-ample-polarization]]). The Euler characteristic of each twist in a flat proper finitely presented family is locally constant ([[cor-euler-characteristic-locally-constant-flat-proper-family]]). Extension of a residue field preserves the Hilbert polynomial ([[lem-proper-cohomology-field-extension]]).

## Proof

1.1 For a faithfully flat ring map $A\to B$, write a module descent datum as an overlap isomorphism $\theta:N\otimes_AB\to B\otimes_AN$ satisfying its cocycle identity. Set $\rho(n)=\theta(n\otimes1)$. The diagonal identity and cocycle identity give $\mu\rho=\operatorname{id}_N$ and $(\operatorname{id}_B\otimes\rho)\rho(n)=\sum b_j\otimes1\otimes n_j$ when $\rho(n)=\sum b_j\otimes n_j$; also $\rho(bn)=b\rho(n)$, with $b$ acting in the first factor. Put $M=\{n\in N:\rho(n)=1\otimes n\}$. Since $B$ is flat over $A$, tensoring the equalizer defining $M$ identifies $B\otimes_AM$ with the equalizer of $\operatorname{id}_B\otimes\rho$ and insertion of $1$ in the middle factor. The cocycle formula therefore makes $\rho$ land in $B\otimes_AM$. Multiplication $\mu:B\otimes_AM\to N$ is inverse to that map: $\mu\rho=\operatorname{id}$ by the diagonal identity, and $\rho(bm)=b\otimes m$ for $m\in M$. This proves effectivity. The same equalizer identifies compatible module maps with maps on $M$, giving uniqueness and descent of maps. [algebra]

2.1 Apply step 1.1 on affine pieces of an fpqc cover to the ideal of the compatible embedded subschemes, viewed as a submodule of the structure algebra of $X_T$. Descent of its inclusion and multiplication stability yields an ideal in that structure algebra; the descended quotient algebra defines the unique closed subscheme. Equalizers commute with restriction to affine opens, so these ideals glue. Finite presentation descends as well: descend finitely many generators by [F1], obtain a finite free surjection onto the descended module, and descend finite generation of its relation kernel by [F1]. For the ideal defining a closed immersion, finite generation alone gives finite presentation of the quotient algebra. Flatness of the quotient descends by [F1]. The fpqc cover on $X_T$ is the base change of that on $T$, so these conclusions apply to the embedded families in question. [F1, step 1.1, algebra]

3.1 Pulling a quotient structure algebra back gives its scheme theoretic inverse image, still finitely presented and flat, since finite presentations tensor and flatness is stable under base change. On a geometric fibre the new fibre is a field extension of the old one, so [F2] preserves its polynomial. This also shows that fixed-polynomial membership can be checked on a surjective fpqc cover. Finally finitely many values of the polynomial determine it: its degree is bounded locally by an ambient projective-space dimension. Each such value is locally constant by [F2], so near each point the entire polynomial is constant. Its loci are therefore open and, since their complements are unions of the other loci, closed. This proves the sheaf and stratum assertions. [F2, step 2.1, algebra] ∎
