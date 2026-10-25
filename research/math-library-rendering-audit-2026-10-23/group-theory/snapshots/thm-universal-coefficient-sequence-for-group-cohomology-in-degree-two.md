---
id: thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two
kind: theorem
title: "Universal coefficients in degree two"
status: published
origin: pipeline
deps: [def-schur-multiplier-of-a-group, def-group-cohomology-as-a-derived-functor, thm-universal-coefficient-theorem-for-cohomology-over-a-pid, thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally, thm-the-bar-cochain-complex-computes-derived-group-cohomology, def-axiom-of-choice, def-supplied-projective-resolution-datum, def-supplied-injective-resolution-datum]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Clara Löh, Group Cohomology"
      url: https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-05-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice and supplied projective and injective resolution
data for group (co)homology. For a trivial $G$-module $A$, there is a natural
exact sequence

$$0\to\operatorname{Ext}^1_{\mathbb Z}(G_{\mathrm{ab}},A)\to H^2(G;A)\to\operatorname{Hom}(M(G),A)\to0.$$

It admits a splitting after choices; no natural splitting is asserted.

## Facts & Assumptions

**Given:** The choice and resolution hypotheses above. Use the explicit free
bar resolution $P_\bullet\to\mathbb Z$ over $\mathbb ZG$, and put
$C_\bullet=\mathbb Z\otimes_{\mathbb ZG}P_\bullet$. The bar-comparison
theorem identifies $\operatorname{Hom}_{\mathbb ZG}(P_\bullet,A)$ with the
derived cohomology computed from the supplied injective resolution.

[L1] The cohomological universal-coefficient theorem gives the natural degree-two short exact sequence for a degreewise free integral chain complex ([[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]).

[L2] This sequence splits after choices of complements, with no natural splitting asserted ([[thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally]]).

## Proof

**Proof technique:** direct.

1.1 Each $C_n$ is free abelian on $G^n$. Because $A$ has trivial $G$-action, the tensor-Hom adjunction gives a natural isomorphism $\operatorname{Hom}_{\mathbb Z}(C_\bullet,A) \cong\operatorname{Hom}_{\mathbb ZG}(P_\bullet,A)$. The latter cochain complex computes $H^*(G;A)$ by [[thm-the-bar-cochain-complex-computes-derived-group-cohomology]], while $H_*(C_\bullet)$ computes integral group homology under the supplied resolution data. Choice permits [L1] to be applied to the free integral complex $C_\bullet$. In degree two it gives $0\to\operatorname{Ext}^1_{\mathbb Z}(H_1(G;\mathbb Z),A) \to H^2(G;A)\to \operatorname{Hom}_{\mathbb Z}(H_2(G;\mathbb Z),A)\to0$. [L1, given, algebra]

2.1 Since $H_1(G;\mathbb Z)=G_{\mathrm{ab}}$ and $H_2(G;\mathbb Z)=M(G)$, this is the displayed sequence. The splitting qualification follows from [L2]. [L2, step 1.1, algebra] ∎
