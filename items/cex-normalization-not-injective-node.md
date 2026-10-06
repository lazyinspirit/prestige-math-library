---
id: cex-normalization-not-injective-node
kind: counterexample
title: Normalization of the node is two-to-one over the node
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 6
proof_strategy: direct
justified_by: []
aliases: []
deps: [def-axiom-of-choice, ex-normalization-node, def-normalization-affine-variety, thm-normalization-finite-birational-surjective, def-regular-map-image-and-fibre-classical]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-1.md"
      - "research/frontier-38-owner-30-alpha-batch-1-5a.md"
      - "research/frontier-38-owner-30-step5-hash-1-post-5a.json"
    content_sha256: "00bcf14f5ae7385ec1ce232e04e24fccdc39a2b1422008338e358b845e468b28"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 Example 8.6(b): the node has two branches"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement refuted

False claim: the normalization morphism of a classical variety is injective.

## Facts & Assumptions

Assume the Axiom of Choice.

**Given:** AC, an algebraically closed field $k$ of characteristic not two, the nodal curve $X=V(y^2-x^2(x+1))\subseteq\mathbf A^2$, and its normalization $\nu\colon\mathbf A^1\to X$.

[F1] The normalization of the node is $\nu\colon\mathbf A^1\to X$, $t\mapsto(t^{2}-1,t(t^{2}-1))$, a finite birational morphism, and the fibre of $\nu$ over the node $(0,0)$ consists exactly of the two distinct points $t=1$ and $t=-1$ ([[ex-normalization-node]], [[def-normalization-affine-variety]], [[thm-normalization-finite-birational-surjective]]).

[F2] The fibre $\nu^{-1}(x)$ is the set-theoretic preimage of the point $x$ under $\nu$ ([[def-regular-map-image-and-fibre-classical]]).

[F7] AC is inherited through the classical localization, normalization, or finite-morphism suppliers cited above ([[def-axiom-of-choice]]).

## Counterexample

1.1 By [F1] the fibre of the normalization over the node has the two distinct elements $1$ and $-1$, so by [F2] the set-theoretic preimage $\nu^{-1}((0,0))=\{1,-1\}$ has two elements. [F1, F2, given, F7]

2.1 The map $\nu$ therefore sends two distinct points of $\mathbf A^1$ to the same point of $X$, so it is not injective; the claim is refuted. In dimension one a normalization need not be injective; in contrast, when the target is normal the normalization is an isomorphism and hence injective. [F1, step 1.1] ∎
