---
id: thm-qc-tqc-fusion-multiplicity-space-is-hilbert
kind: theorem
title: Fusion multiplicity spaces are finite-dimensional inner-product spaces
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-qc-tqc-fusion-multiplicity-space, def-qc-tqc-unitary-fusion-category, def-absolutely-simple-object]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§§3.2 and 3.5, PDF pp. 4 and 14–15: dagger structure, simple endomorphism algebras, and inner products on multiplicity spaces."
---

## Statement

Let $a,b,c$ be simple objects in a unitary fusion category. The pairing on
$V_{ab}^c=\operatorname{Hom}(a\otimes b,c)$ defined by
$f\circ g^\dagger=\langle f,g\rangle\operatorname{id}_c$ is a
finite-dimensional positive-definite Hermitian inner product, linear in the
first variable and conjugate-linear in the second.

## Facts & Assumptions

**Given:** a unitary fusion category $\mathcal C$ and simple objects $a,b,c$.

[F1] [[def-qc-tqc-unitary-fusion-category]]: morphism adjoints are conjugate-linear, reverse composition, and are involutive; each $f^\dagger f$ is $C^*$-positive; a positive scalar endomorphism of a simple object is a nonnegative real multiple of its identity; $f^\dagger f=0$ implies $f=0$; and morphism spaces are finite-dimensional.

[F2] [[def-absolutely-simple-object]]: for a simple charge $c$ in this complex fusion category, $\operatorname{End}(c)=\mathbb C\operatorname{id}_c$ and $\operatorname{id}_c\ne0$.

[F3] [[def-qc-tqc-fusion-multiplicity-space]]: $V_{ab}^c=\operatorname{Hom}(a\otimes b,c)$ and $\langle f,g\rangle$ is defined by $f\circ g^\dagger=\langle f,g\rangle\operatorname{id}_c$.

## Proof

**Given:** $\mathcal C,a,b,c$ as above.

1.1 The category is finite and semisimple, so $V_{ab}^c$ is a finite-dimensional complex vector space by [F1]. By [F2], every $f\circ g^\dagger\in\operatorname{End}(c)$ is a unique scalar multiple of the nonzero identity; hence the scalar pairing in [F3] exists and is unique. [F1, F2, F3, given]

1.2 For scalars $\lambda,\mu\in\mathbb C$ and $f,h,g\in V_{ab}^c$, linearity of composition gives $(\lambda f+\mu h)g^\dagger=\lambda fg^\dagger+\mu hg^\dagger$, while conjugate-linearity of dagger gives $f(\lambda g+\mu h)^\dagger=\bar\lambda fg^\dagger+\bar\mu fh^\dagger$. Taking the unique scalar coefficients from [F2] proves linearity in the first argument and conjugate-linearity in the second. Taking daggers of $fg^\dagger=\langle f,g\rangle\operatorname{id}_c$ gives $gf^\dagger=\overline{\langle f,g\rangle}\operatorname{id}_c$, so $\langle g,f\rangle=\overline{\langle f,g\rangle}$. [F1, F2, F3, algebra]

1.3 For each $f\in V_{ab}^c$, $ff^\dagger=(f^\dagger)^\dagger\circ f^\dagger$ is positive in $\operatorname{End}(c)$ by [F1], so its scalar coefficient $\langle f,f\rangle$ is real and nonnegative. If $\langle f,f\rangle=0$, then $(f^\dagger)^\dagger\circ f^\dagger=0$; the nondegeneracy clause of [F1], applied to the morphism $f^\dagger$, gives $f^\dagger=0$ and then $f=0$. Thus $\langle f,f\rangle>0$ whenever $f\ne0$. [F1, F2, F3, algebra]

2.1 The pairing is finite-dimensional by step 1.1, sesquilinear and Hermitian by step 1.2, and positive definite by step 1.3. If $V_{ab}^c=0$, scalar uniqueness in step 1.1 still holds and positive definiteness is vacuous because there are no nonzero vectors. These are exactly the inner-product axioms, with the stated linear-first convention. [step 1.1, step 1.2, step 1.3] ∎
