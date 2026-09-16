---
id: ex-normalized-haar-measure-on-a-torus
kind: example
title: Normalized Haar measure on a torus
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-normalized-haar-measure-on-a-compact-lie-group, thm-structure-of-a-compact-connected-abelian-lie-group, def-axiom-of-choice, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, def-lebesgue-measure-and-the-lebesgue-sigma-algebra]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §1 and Chapter VIII §1 (Haar measure on the torus)"
proof_strategy: direct
---

## Example

Assume the Axiom of Choice. Under the identification
$T^r=(\mathbb R/\mathbb Z)^r$, normalized Haar integration on the torus is
integration over the fundamental cube $[0,1)^r$ with Lebesgue measure:
$$\int_{T^r}f\,dt=\int_{[0,1)^r}f(x_1,\dots,x_r)\,dx_1\cdots dx_r .$$

## Facts & Assumptions

**Given:** Assume the Axiom of Choice; the torus $T^r=(\mathbb R/\mathbb Z)^r$ with its quotient Lebesgue measure $\lambda$.

[L1] $T^r=\mathfrak t/\Lambda$ for $\Lambda=\mathbb Z^r$, and every compact connected abelian Lie group is a torus ([[thm-structure-of-a-compact-connected-abelian-lie-group]]).

[L2] Normalized Haar measure is the unique regular Borel probability invariant under all translations ([[cor-normalized-haar-measure-on-a-compact-lie-group]]).

[L3] Lebesgue measure on $\mathbb R^r$ is translation invariant and the cube $[0,1)^r$ is a fundamental domain for $\mathbb Z^r$ ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]).

## Verification

**Proof technique:** direct.

1.1 Let $q:\mathbb R^r\to T^r$ be the quotient map and let $\lambda_{T^r}$ be the pushforward of Lebesgue measure restricted to $[0,1)^r$; it is a Borel probability because $[0,1)^r$ is a fundamental domain. [L1, L3]

2.1 The measure $\lambda_{T^r}$ is translation invariant: translating a Borel set $E\subseteq[0,1)^r$ by $a\in\mathbb R^r$ covers a finite union of translates of $E$, whose intersections with $[0,1)^r$ partition $E$ up to a null set, and Lebesgue measure is translation invariant, so the pushforwards of $E$ and of $E+a$ agree. [L3, step 1.1]

3.1 By [L2] the normalized Haar measure of $T^r$ is the unique translation-invariant Borel probability, so it equals $\lambda_{T^r}$, which is integration over $[0,1)^r$ against Lebesgue measure as displayed. [L2, step 1.1, step 2.1] ∎
