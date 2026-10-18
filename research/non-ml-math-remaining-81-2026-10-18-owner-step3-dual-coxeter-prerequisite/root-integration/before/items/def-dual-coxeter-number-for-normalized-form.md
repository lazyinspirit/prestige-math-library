---
id: def-dual-coxeter-number-for-normalized-form
kind: definition
title: Dual Coxeter number for the normalized invariant form
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - lem-adjoint-casimir-is-positive-scalar
  - def-casimir-operator-relative-to-an-invariant-form
  - def-residue-two-cocycle-on-a-loop-algebra
  - def-compact-real-form-of-a-complex-semisimple-lie-algebra
  - def-loop-algebra-of-a-simple-lie-algebra
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: David Ben-Zvi and Edward Frenkel, Geometric Realization of the Segal–Sugawara Construction, §3.1
      url: https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BenZviFrenkel.pdf
    - title: Antony Wassermann, Kac–Moody and Virasoro Algebras, Chapter I §13
      url: https://arxiv.org/pdf/1004.1287
---

## Definition

For a finite-dimensional complex simple Lie algebra $\mathfrak g$ as in [[def-loop-algebra-of-a-simple-lie-algebra]], use the invariant form $B$ normalized by long roots of square $2$ in [[def-residue-two-cocycle-on-a-loop-algebra]]. By [[lem-adjoint-casimir-is-positive-scalar]], the Casimir $\Omega_B$ from [[def-casimir-operator-relative-to-an-invariant-form]] acts in the adjoint representation as $\gamma_B I$ for a unique positive real scalar $\gamma_B$. Define the **dual Coxeter number** by $h^\vee=\gamma_B/2$. Thus, for a $Q=-B|_{\mathfrak k}$-orthonormal basis of a compact real form from [[def-compact-real-form-of-a-complex-semisimple-lie-algebra]], $-\sum_i\operatorname{ad}(X_i)^2=2h^\vee I$; this is the normalization used in the affine central term and every Sugawara denominator below.

## Facts & Assumptions

**Given:** The normalized invariant form on a finite-dimensional complex simple Lie algebra and its compact real form.

[F1] [[def-compact-real-form-of-a-complex-semisimple-lie-algebra]]: the Killing form is negative definite on the compact real form.

[F2] [[def-residue-two-cocycle-on-a-loop-algebra]]: $B$ is a positive-real rescaling of the Killing form, is invariant, and has long-root-square-$2$ normalization.

[F3] [[def-casimir-operator-relative-to-an-invariant-form]]: for $B$-dual bases, $\Omega_B=\sum_i x_ix^i$.

[F4] [[lem-adjoint-casimir-is-positive-scalar]]: the adjoint action of $\Omega_B$ is $\gamma_B I$ for a unique positive real scalar $\gamma_B$.

## Proof

1.1 Set $Q=-B|_{\mathfrak k}$. By [F1] and [F2], $Q$ is positive definite. Choose a $Q$-orthonormal basis $(X_i)$ of $\mathfrak k$. Since $B=-Q$ on $\mathfrak k$, its $B$-dual basis is $(-X_i)$, and [F3] gives $\Omega_B=-\sum_iX_i^2$. [F1, F2, F3, choose]

2.1 Applying the adjoint representation to step 1.1 gives $\operatorname{ad}(\Omega_B)=-\sum_i\operatorname{ad}(X_i)^2=\gamma_B I$ by [F4]. The definition $h^\vee=\gamma_B/2$ therefore yields $-\sum_i\operatorname{ad}(X_i)^2=2h^\vee I$, as stated. [F3, F4, step 1.1, given, algebra] ∎
