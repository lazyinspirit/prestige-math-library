---
id: lem-nonaffine-geometric-properness-field-descent
kind: lemma
title: "Properness over a field can be checked after field extension"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-proper-morphism, thm-properness-descent-fpqc]
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
      - "research/frontier-38-owner-30-reader-24.md"
      - "research/frontier-38-owner-30-alpha-batch-24-5a.md"
      - "research/frontier-38-owner-30-step5-hash-24-post-5a.json"
    content_sha256: "e85f306deb9d97f587b70f1a36fe308d006ae08ab533a63620aa11e44b8c5ef3"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Milne, Algebraic Groups (2022), proof of Theorem 8.26 and Appendix A.75, p.154"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "Brion, Some structure theorems for algebraic groups, Sections 4.2-4.3"
      url: https://arxiv.org/pdf/1509.03059
---

## Statement

Assume AC. Let $X$ be a separated finite-type scheme over a field $k$, and let $K/k$ be any field extension. Then $X$ is proper over $k$ if and only if $X_K$ is proper over $K$. In particular this can be checked over an algebraic closure, and applies to completeness of group varieties, where complete means proper. No algebraicity or separability of $K/k$ is required.

## Facts & Assumptions

[F1] Properness is separatedness, finite type and universal closedness, and is preserved and reflected by fpqc base change under AC. ([[def-proper-morphism]], [[thm-properness-descent-fpqc]])

## Proof

**Given:** AC, $X/k$, and a field extension $K/k$ as stated.

1.1 The map $\operatorname{Spec}K\to\operatorname{Spec}k$ is flat, because every vector space over a field is flat; it is surjective because both spectra have one point; and it is quasi-compact because it is affine. Thus it is an fpqc covering morphism. Its pullback of $X\to\operatorname{Spec}k$ is precisely $X_K\to\operatorname{Spec}K$. These facts hold for infinite and inseparable extensions too. [given, construct, algebra]

2.1 Apply the fpqc properness equivalence [F1] to this covering. It gives both implications in the statement. Taking $K$ to be an algebraic closure gives the geometric test, and the same equivalence says complete group varieties descend and ascend, with complete interpreted as proper. AC is used only through [F1]. [F1, step 1.1] ∎
