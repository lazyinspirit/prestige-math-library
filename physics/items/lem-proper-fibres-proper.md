---
id: lem-proper-fibres-proper
kind: lemma
title: Fibres of proper morphisms are proper
status: published
origin: pipeline
deps:
  - def-scheme-theoretic-fibre
  - lem-proper-stable-base-change
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 29.42.5 and the fibre definition of Section 29.20"
      url: https://stacks.math.columbia.edu/tag/01W4
    - title: "Vakil, The Rising Sea, §11.3.4"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf
---

## Statement

Assume the Axiom of Choice. Let $f:X\to S$ be a proper morphism of schemes and
let $s\in S$ be a point, not necessarily closed. Then the scheme-theoretic
fibre $X_s=X\times_S\operatorname{Spec}\kappa(s)$ is proper over
$\operatorname{Spec}\kappa(s)$. In particular every fibre of a proper morphism,
including a generic fibre and the empty fibre over a point not in the image, is
a proper $\kappa(s)$-scheme.

## Facts & Assumptions

**Given:** A proper morphism $f:X\to S$, a point $s\in S$, and the canonical morphism $\operatorname{Spec}\kappa(s)\to S$.

[F1] The **scheme-theoretic fibre** is $X_s=X\times_S\operatorname{Spec}\kappa(s)$, viewed as a $\kappa(s)$-scheme; empty fibres are allowed and $s$ need not be closed. ([[def-scheme-theoretic-fibre]])

[F2] Assume AC. For every proper morphism $f:X\to S$ and every morphism $S'\to S$, the base-changed morphism $f_{S'}:X\times_SS'\to S'$ is proper. ([[lem-proper-stable-base-change]])

[F3] The Axiom of Choice: every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct: read the fibre as a base change.

1.1 By [F1] the scheme-theoretic fibre is the fibre product $X\times_S\operatorname{Spec}\kappa(s)$, with structure morphism the second projection, and this is exactly the base change of $f$ along the canonical morphism $\operatorname{Spec}\kappa(s)\to S$. Its source is $X_s$ and its target is $\operatorname{Spec}\kappa(s)$. [F1]

2.1 The base-changed morphism $f_{\operatorname{Spec}\kappa(s)}$ is proper by [F2], applied to the proper morphism $f$ and the morphism $\operatorname{Spec}\kappa(s)\to S$. Combining with the identification of step 1.1, the fibre $X_s\to\operatorname{Spec}\kappa(s)$ is proper. [F2, step 1.1]

3.1 The argument uses the Axiom of Choice exactly through [F2], which assumes it; nothing else in the proof selects from a family of nonempty sets. If $s\notin f(X)$, then $X_s$ is empty, which is the empty affine scheme $\operatorname{Spec}0$ and is proper over $\operatorname{Spec}\kappa(s)$ by the base-change statement applied to the empty source; if $\kappa(s)$-fibres are taken over a generic point, the same computation applies, since [F1] does not require $s$ to be closed. The statement has no endpoint or infinite-length cases. [F1, F2, F3] ∎
