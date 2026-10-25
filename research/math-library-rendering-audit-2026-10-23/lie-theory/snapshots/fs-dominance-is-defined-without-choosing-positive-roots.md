---
id: fs-dominance-is-defined-without-choosing-positive-roots
kind: false-statement
title: Dominance depends on a positive system
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-integral-dominant-and-strictly-dominant-weights, def-positive-system-and-base-of-simple-roots, def-coroot-of-a-lie-algebra-root, def-reduced-crystallographic-euclidean-root-system, def-special-linear-lie-algebra-sl-two, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter V §§1–3"
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Dominance of weights is defined canonically,
without choosing positive roots.

## Facts & Assumptions

**Given:** The Axiom of Choice, the root system $\Phi=\{\alpha,-\alpha\}$ of $\mathfrak{sl}_2(\mathbb C)$ with respect to $\mathfrak h=\mathbb Ch$, where $\alpha(h)=2$ ([[def-special-linear-lie-algebra-sl-two]], [[def-reduced-crystallographic-euclidean-root-system]]), the two opposite positive systems $\Phi^+_1=\{\alpha\}$ and $\Phi^+_2=\{-\alpha\}$ ([[def-positive-system-and-base-of-simple-roots]]), the coroots $h_\alpha=h$ and $h_{-\alpha}=-h$ of [[def-coroot-of-a-lie-algebra-root]], and the functional $\lambda\in\mathfrak h^*$ with $\lambda(h)=1$.

[A1] The Axiom of Choice is assumed; it enters through the root-space theory used below ([[def-axiom-of-choice]]).

[L1] $\lambda$ is dominant integral with respect to a positive system with base $\{\beta\}$ exactly when $\langle\lambda,\beta^\vee\rangle=\lambda(h_\beta)\in\mathbb Z_{\ge0}$ ([[def-integral-dominant-and-strictly-dominant-weights]]).

[L2] For the root $-\alpha$ the coroot is $h_{-\alpha}=-h_\alpha=-h$, since the coroot is the normalised Killing dual and the dual vector changes sign with the functional ([[def-coroot-of-a-lie-algebra-root]]).

## Refutation

**Proof technique:** direct.

1.1 With respect to the positive system $\{\alpha\}$ the functional $\lambda$ is dominant integral: its only simple root is $\alpha$ and $\langle\lambda,\alpha^\vee\rangle=\lambda(h)=1\in\mathbb Z_{\ge0}$ by [L1]. [L1, A1]

1.2 With respect to the positive system $\{-\alpha\}$ the functional $\lambda$ is not dominant: its simple root is $-\alpha$ and $\langle\lambda,(-\alpha)^\vee\rangle=\lambda(-h)=-1\notin\mathbb Z_{\ge0}$ by [L1] and [L2]. [L1, L2]

2.1 The same functional is thus dominant for one choice of positive roots and non-dominant for the opposite choice, so there is no choice-free notion of dominance; the failed conclusion is that dominance could be decided without fixing positive roots. [step 1.1, step 1.2] ∎
