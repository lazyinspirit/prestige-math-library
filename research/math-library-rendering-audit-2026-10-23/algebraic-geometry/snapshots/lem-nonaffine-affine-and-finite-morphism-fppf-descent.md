---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading, followed by recorded Step 7 current repair argument acceptance. The repair receipt records local author review; no independent repair audit is claimed. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-24.md"
      - "research/frontier-38-owner-30-alpha-batch-24-5a.md"
      - "research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u24.json"
    content_sha256: "9223359821f3f481398a0cbdcc9392a1522b2368497485f05fcc491719ff739b"
id: lem-nonaffine-affine-and-finite-morphism-fppf-descent
kind: lemma
title: "Affineness and finiteness of morphisms descend under fppf base change"
status: published
origin: pipeline
deps: [def-axiom-of-choice, lem-nonaffine-effective-affine-algebra-descent, lem-nonaffine-fppf-descent-of-scheme-morphisms, cor-faithfully-flat-descent-of-finite-generation, thm-affine-scheme-ring-anti-equivalence]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "SGA1, Expose VIII, affine morphism and finite morphism descent"
      url: https://arxiv.org/pdf/math/0206203
    - title: "Milne, Algebraic Groups (2022), Appendix A.80 and Proposition 8.1"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
---

## Statement

Assume the Axiom of Choice. Let $p:S'\to S$ be faithfully flat, quasi-compact, and locally of finite presentation, and $f:X\to S$ a finite-type separated morphism of Noetherian schemes. If $X_{S'}\to S'$ is affine, then $f$ is affine. If that base change is finite, then $f$ is finite.

## Facts & Assumptions

[F1] Affine algebra descent is effective under faithful flat extension, including its maps and cocycle compatibility. Scheme morphisms descend under quasi-compact fppf covers. ([[lem-nonaffine-effective-affine-algebra-descent]], [[lem-nonaffine-fppf-descent-of-scheme-morphisms]])

[F2] Finite generation of modules descends under faithful flat extension; spectra turn algebra isomorphisms into affine scheme isomorphisms. ([[cor-faithfully-flat-descent-of-finite-generation]], [[thm-affine-scheme-ring-anti-equivalence]])

## Proof

**Given:** AC, $p$, $f$, and the stated affine or finite base change.

1.1 Work over an affine open $U=\operatorname{Spec}A\subset S$. Choose finitely many affine opens covering $S'_U$; their disjoint union is affine, $V=\operatorname{Spec}B$, and is a faithfully flat affine cover of $U$. The pullback $X_V$ is affine over $V$, say $\operatorname{Spec}C$. Its two pullbacks to $V\times_UV$ have the canonical isomorphism coming from the scheme $X_U$, and satisfy the cocycle. By [F1], $C$ descends to an $A$-algebra $D$, with $D\otimes_AB\cong C$ as algebras with datum. [F1, F2, given, construct]

2.1 This algebra isomorphism gives a compatible isomorphism $X_V\cong(\operatorname{Spec}D)_V$. The map from $X_V$ to $\operatorname{Spec}D$ descends along $X_V\to X_U$ by the morphism part of [F1], and the inverse map descends along $(\operatorname{Spec}D)_V\to\operatorname{Spec}D$. The resulting two maps are inverse because their composites become identities after the faithful cover and uniqueness in [F1] detects equality. Thus $X_U\cong\operatorname{Spec}D$, proving affineness of $f$ locally on its target and hence globally. [F1, F2, step 1.1, construct]

3.1 If $f_{S'}$ is finite, $C$ is a finite $B$-module. By [F2], $D$ is a finite $A$-module: equivalently express finitely many generators of $D\otimes_AB$ using finitely many tensor coefficients in $D$, let $D_0$ be their $A$-span, and use faithfulness to deduce $D/D_0=0$. Hence $X_U\to U$ is finite. Finiteness is affine local on the target by this module description, so $f$ is finite. AC is inherited from [F1]–[F2]; quasi-compactness supplies the finite affine subcover used in step 1.1. [F1, F2, step 1.1, step 2.1, algebra] ∎
