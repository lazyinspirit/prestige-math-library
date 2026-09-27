---
id: cor-separable-reflexive-space-has-separable-dual
kind: corollary
title: Separable reflexive space has separable dual
status: published
origin: pipeline
deps: [thm-separable-dual-implies-separable-primal, def-reflexive-banach-space, cor-relative-hahn-banach-bidual-isometry, def-separable-space, def-countable-choice, def-hahn-banach-extension-principle-relative]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, Corollary 3.27"
      url: "https://web.archive.org/web/20210425204615if_/https://math.jhu.edu/~sire/brezis.pdf"
      locator: "Section 3.6, printed pp. 73–74: complete statement and proof of Corollary 3.27"
    - title: "Bühler–Salamon, Functional Analysis, Theorem 2.73(ii)"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Section 2.4.3, printed p. 93"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-08-outside-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ and the relative
Hahn–Banach principle HB.  If a real or complex Banach space $X$ is reflexive
and norm separable, then its continuous dual $X^*$ is norm separable.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, HB, and a real or complex separable reflexive Banach space $X$.

[F1] A space is separable precisely when it has an at most countable dense subset ([[def-separable-space]]).

[F2] Reflexivity says that the canonical map $J_X:X\to X^{**}$ is surjective ([[def-reflexive-banach-space]]); under the assumed relative HB principle it is also an isometric embedding ([[cor-relative-hahn-banach-bidual-isometry]]).

[F3] Under $\mathrm{AC}_\omega$ and HB, a real or complex normed space whose continuous dual is norm separable is itself norm separable ([[thm-separable-dual-implies-separable-primal]]).

## Proof

**Proof technique:** transport a dense set through the canonical isometry and apply the preceding theorem to $X^*$.

1.1 By [F1], fix an at most countable norm-dense set $D\subseteq X$.  Its image $J_X[D]$ is at most countable: the restriction of the injective map $J_X$ is a bijection from $D$ onto that image. [given, F1, F2]

2.1 The image $J_X[D]$ is norm dense in $X^{**}$.  Indeed, for $\Phi\in X^{**}$ and $\varepsilon>0$, surjectivity in [F2] gives $x\in X$ with $\Phi=J_Xx$, and density of $D$ gives $d\in D$ with $\|x-d\|<\varepsilon$; the isometry in [F2] then gives $\|\Phi-J_Xd\|=\|J_X(x-d)\|=\|x-d\|<\varepsilon$.  Thus $X^{**}$ is norm separable by [F1]. [step 1.1, F1, F2]

3.1 Apply [F3] to the normed space $Y=X^*$.  Its continuous dual is $Y^*=X^{**}$, which is separable by step 2.1, so $X^*$ is norm separable.  No new selection or separation is made here: $\mathrm{AC}_\omega$ and HB are used exactly through [F3]. [given, step 2.1, F3] ∎

## Source notes

Brezis proves the same implication by identifying $X$ with $X^{**}$ and applying the separable-dual theorem to $X^*$.  Reflexivity is essential: Brezis's Remark 19 records $L^1$ as separable with nonseparable dual $L^\infty$; that warning is source context and is not used as a supplier in the proof above.
