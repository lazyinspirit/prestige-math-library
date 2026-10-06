---
id: lem-hilbert-family-vanishing-locus
kind: lemma
title: "Universal vanishing locus for a map into a flat projective family"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - lem-proper-flat-fp-cohomology-perfect-complex
  - lem-eventual-global-generation-coherent-twists
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
    content_sha256: "fcaa624c5107e94425ea273481ad52b037d8015831004345637d948b1defbf32"
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

Assume AC and DC. Let $f:X\to S$ be projective of finite presentation with $S$ Noetherian, $E$ coherent, and $F$ coherent and flat over $S$. For a homomorphism $u:E\to F$ there is a closed subscheme $V(u)\subseteq S$ such that, for every $T\to S$, $u_T=0$ exactly when $T\to S$ factors through $V(u)$. This condition concerns the entire homomorphism and includes nonreduced test schemes.

## Facts & Assumptions

**Given:** The hypotheses in the statement and AC and DC, inherited from the scheme, cohomology, and finite-module suppliers ([[def-axiom-of-choice]], [[def-dependent-choice]]).

[F1] A flat finitely presented sheaf on a proper finitely presented scheme has a bounded nonnegative finite projective complex computing cohomology after every base change ([[lem-proper-flat-fp-cohomology-perfect-complex]]). Coherent sheaves on a projective scheme over a Noetherian affine base admit presentations by finite sums of powers of a relatively very ample bundle ([[lem-eventual-global-generation-coherent-twists]]).

## Proof

1.1 Work over an affine open of $S$, and present $E$ by vector bundles $E_1\to E_0\to E\to0$ that are sums of invertible twists. For $j=0,1$, the sheaf $E_j^\vee\otimes F$ is still base-flat. Let $K_j^\bullet$ be its complex from [F1], and define $Q_j=\operatorname{coker}((K_j^1)^\vee\to(K_j^0)^\vee)$. Since finite projectives commute with dual tensor comparison, $\operatorname{Hom}(Q_j,B)=\ker(K_j^0\otimes B\to K_j^1\otimes B)=\operatorname{Hom}_{X_B}(E_{j,B},F_B)$ naturally for every base algebra $B$. [F1, algebra]

2.1 The presentation induces a natural transformation between these Hom functors, hence a map $Q_1\to Q_0$; let $Q$ be its cokernel. Left exactness of Hom, also after every pullback of the presentation, identifies $\operatorname{Hom}_{X_B}(E_B,F_B)$ with $\operatorname{Hom}(Q,B)$. Thus the Hom functor is the affine linear scheme $\operatorname{Spec}\operatorname{Sym}Q$. The map $u$ defines a section of this scheme, and the inverse image of its zero section is cut out by the image of $Q\to\mathcal O_S$ associated to $u$. This is a closed subscheme with the claimed property. The local constructions agree by that property and glue over $S$. [step 1.1, algebra] ∎
