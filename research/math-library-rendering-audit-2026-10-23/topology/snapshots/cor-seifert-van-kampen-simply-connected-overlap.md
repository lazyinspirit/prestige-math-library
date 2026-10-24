---
id: cor-seifert-van-kampen-simply-connected-overlap
kind: corollary
title: "A simply connected overlap turns the van Kampen pushout into a free product"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-seifert-van-kampen, def-simply-connected,
       cor-trivial-amalgamation-is-the-free-product]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Theorem 1.20 and Example 1.21"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 2, Section 8"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

Under the hypotheses of [[thm-seifert-van-kampen]], if $U\cap V$ is simply connected, then the inclusion-induced homomorphisms give an isomorphism

$$\pi_1(U,x_0)*\pi_1(V,x_0)\cong\pi_1(X,x_0).$$

## Facts & Assumptions

**Given:** A two-set van Kampen cover $X=U\cup V$ with simply connected overlap.

[L1] The fundamental group of $X$ is the group pushout of the two inclusion-induced maps from $\pi_1(U\cap V,x_0)$ ([[thm-seifert-van-kampen]]).

[F1] The free product with amalgamation over the trivial group is canonically isomorphic to the ordinary free product ([[cor-trivial-amalgamation-is-the-free-product]]).

[F2] A simply connected space has a one-element fundamental group at every basepoint ([[def-simply-connected]]).

## Proof

**Proof technique:** direct.

1.1 By [F2], $\pi_1(U\cap V,x_0)$ is the trivial group, so the two maps in the pushout of [L1] are the unique homomorphisms from the trivial group. [L1, F2]

2.1 The two maps from the trivial group are injective, so [F1] identifies their pushout with $\pi_1(U,x_0)*\pi_1(V,x_0)$. Combining this with [L1] gives the displayed isomorphism. [step 1.1, L1, F1] ∎

