---
id: ex-schur-orthogonality-for-a-finite-group-as-a-zero-dimensional-compact-case
kind: example
title: Finite-group Schur orthogonality
status: published
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
verification:
  audited: 2026-09-22
---

## Example

Assume the Axiom of Choice. Let $G$ be a finite group, regarded as a
zero-dimensional compact Lie group. Then normalized Haar measure is counting
measure divided by $|G|$. If $\pi,\sigma$ range through a fixed set of unitary
representatives of the finite-dimensional complex irreducible isomorphism classes, with one fixed orthonormal basis for each representative, compact Schur
orthogonality becomes the classical finite-group matrix-coefficient formula
$$\frac1{|G|}\sum_{g\in G}\pi_{ij}(g)\overline{\sigma_{kl}(g)}=\begin{cases}0,&\pi\not\cong\sigma,\\ \delta_{ik}\delta_{jl}/d_\pi,&\pi=\sigma.\end{cases}$$

## Facts & Assumptions

**Given:** Assume the Axiom of Choice; a finite group $G$ with normalized counting measure $\mu(E)=|E|/|G|$, and one finite-dimensional complex unitary representative of each irreducible isomorphism class, with one fixed orthonormal basis for each representative. Both occurrences of a representative use that same basis.

[A1] AC is assumed ([[def-axiom-of-choice]]) and covers the chosen representation/basis family and the Haar and Schur suppliers.

[L1] Every compact Lie group has a unique regular Borel probability invariant under left and right translations and inversion ([[cor-normalized-haar-measure-on-a-compact-lie-group]]).

[L2] Schur orthogonality on a compact Lie group reads $\int_G\pi_{ij}\overline{\sigma_{kl}}\,dg=0$ for inequivalent irreducible unitary $\pi,\sigma$ and $\delta_{ik}\delta_{jl}/d_\pi$ when the two chosen representatives and their orthonormal bases are equal ([[thm-schur-orthogonality-for-compact-lie-groups]]).

## Verification

**Proof technique:** direct.

1.1 Give $G$ the discrete topology and singleton charts to $\mathbb R^0$. It is Hausdorff and second countable, its finite underlying space is compact, and multiplication and inversion are smooth in these zero-dimensional charts. Thus it is a compact Lie group. Since $G$ contains its identity, $|G|>0$ and $\mu(E)=|E|/|G|$ is a probability. Every subset is open and compact, so this Borel measure is regular. Left translations, right translations and inversion permute $G$ and hence preserve cardinality and $\mu$. All hypotheses of [L1] hold, proving that $\mu$ is normalized Haar measure. [A1, L1, algebra]

2.1 For a function $f$ on the finite group the Haar integral is therefore $\int_Gf\,d\mu=\frac1{|G|}\sum_{g\in G}f(g)$, and substituting this into the compact orthogonality relations of [L2] gives the displayed finite-group formula. If $\pi$ and $\sigma$ are equivalent they are the same chosen representative and use the same fixed orthonormal basis, so the delta case is licensed exactly. Otherwise the inequivalent case applies. For the trivial group the sole irreducible is one-dimensional and the formula is $1=1$. [A1, L1, L2, step 1.1] ∎
