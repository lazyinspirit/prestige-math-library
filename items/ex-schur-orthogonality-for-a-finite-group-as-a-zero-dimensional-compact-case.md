---
id: ex-schur-orthogonality-for-a-finite-group-as-a-zero-dimensional-compact-case
kind: example
title: Finite-group Schur orthogonality
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-normalized-haar-measure-on-a-compact-lie-group, thm-schur-orthogonality-for-compact-lie-groups, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §2 (finite groups as zero-dimensional compact groups)"
proof_strategy: direct
---

## Example

Assume the Axiom of Choice. Let $G$ be a finite group, regarded as a
zero-dimensional compact Lie group. Then normalized Haar measure is counting
measure divided by $|G|$, and compact Schur orthogonality becomes the classical
finite-group matrix-coefficient formula
$$\frac1{|G|}\sum_{g\in G}\pi_{ij}(g)\overline{\sigma_{kl}(g)}=\begin{cases}0,&\pi\not\cong\sigma,\\ \delta_{ik}\delta_{jl}/d_\pi,&\pi=\sigma.\end{cases}$$

## Facts & Assumptions

**Given:** Assume the Axiom of Choice; a finite group $G$ with normalized counting measure $\mu(E)=|E|/|G|$.

[L1] A finite group with the discrete topology is a compact zero-dimensional Lie group, and the normalized counting measure is a regular Borel probability invariant under all translations, hence is its normalized Haar measure ([[cor-normalized-haar-measure-on-a-compact-lie-group]]).

[L2] Schur orthogonality on a compact Lie group reads $\int_G\pi_{ij}\overline{\sigma_{kl}}\,dg=0$ for inequivalent irreducible unitary $\pi,\sigma$ and $\delta_{ik}\delta_{jl}/d_\pi$ for $\pi=\sigma$ ([[thm-schur-orthogonality-for-compact-lie-groups]]).

## Verification

**Proof technique:** direct.

1.1 A finite group is a compact Lie group of dimension zero, and the normalized counting measure is a translation-invariant regular Borel probability, so by uniqueness it is the normalized Haar measure of $G$. [L1]

2.1 For a function $f$ on the finite group the Haar integral is therefore $\int_Gf\,d\mu=\frac1{|G|}\sum_{g\in G}f(g)$, and substituting this into the compact orthogonality relations of [L2] gives the displayed finite-group formula. [L1, L2, step 1.1] ∎
