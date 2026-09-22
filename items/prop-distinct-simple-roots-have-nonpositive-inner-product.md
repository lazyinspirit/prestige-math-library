---
id: prop-distinct-simple-roots-have-nonpositive-inner-product
kind: proposition
title: Distinct simple roots have nonpositive inner product
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-positive-system-and-base-of-simple-roots, thm-rank-two-root-system-classification]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, Lemma 2.51, printed p. 156"
landmark: false
proof_strategy: direct
---

## Statement

Let $\Phi\subseteq E$ be a reduced crystallographic root system with positive
system $\Phi^{+}$ and simple roots $\Delta$
([[def-positive-system-and-base-of-simple-roots]]). If $\alpha,\beta\in\Delta$
are distinct, then $(\alpha,\beta)\le0$; moreover $\alpha-\beta$ is not a root.

## Facts & Assumptions

**Given:** Distinct simple roots $\alpha,\beta\in\Delta$ of a reduced crystallographic root system $\Phi$ with positive system $\Phi^{+}$.

[L1] A simple root is a positive root that is not a sum of two positive roots; $\Phi^{+}$ and $\Phi^{-}=-\Phi^{+}$ partition $\Phi$ ([[def-positive-system-and-base-of-simple-roots]]).

[L2] If $\gamma,\delta\in\Phi$ are nonproportional with $(\gamma,\delta)>0$ then $\gamma-\delta\in\Phi$ ([[thm-rank-two-root-system-classification]]).

## Proof

**Proof technique:** direct.

1.1 Assume $(\alpha,\beta)>0$. Then $\alpha-\beta\in\Phi$ by [L2], and since $\Phi$ is the disjoint union of its positive and negative roots, $\alpha-\beta$ is either positive or negative. [L1, L2, algebra]

2.1 The two alternatives of step 1.1 are impossible: if $\alpha-\beta$ is positive, then $\alpha=(\alpha-\beta)+\beta$ exhibits the simple root $\alpha$ as a sum of two positive roots; if $\alpha-\beta$ is negative, then $\beta=(\beta-\alpha)+\alpha$ exhibits the simple root $\beta$ as a sum of two positive roots. [L1, step 1.1, algebra]

3.1 Hence $(\alpha,\beta)\le0$. If $\alpha-\beta$ were a root, the same dichotomy would apply verbatim and contradict simplicity, so $\alpha-\beta\notin\Phi$. [L1, step 1.1, step 2.1, algebra] ∎
