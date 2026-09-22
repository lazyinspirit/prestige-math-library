---
id: lem-orthogonal-complement-of-an-eigenspace-is-invariant
kind: lemma
title: Orthogonal complement of an eigenspace is invariant
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-self-adjoint-positive-unitary-and-normal-operator, thm-hilbert-adjoint-properties, def-hilbert-space-adjoint, def-orthogonality-and-orthogonal-complement, lem-orthogonal-complement-is-closed, def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-kernel-and-image-of-a-linear-map, def-linear-subspace, def-real-and-complex-inner-product-space, def-hilbert-space, def-bounded-linear-operator, thm-bounded-linear-operator-equivalences, def-metric-convergence, lem-metric-limits-unique, def-countable-choice]
proof_strategy: direct
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
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.2, reduction of the spectral problem to an invariant complement"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Anthony W. Knapp, Advanced Real Analysis — Chapter II, §2, orthogonality and invariant complements"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
real or complex Hilbert space ([[def-hilbert-space]]), let $T\in\mathcal B(H)$
be self-adjoint ([[def-self-adjoint-positive-unitary-and-normal-operator]]) and
let $\lambda$ be an eigenvalue of $T$
([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]) with eigenspace
$E_\lambda=E_\lambda(T)=\ker(T-\lambda I)$. Then:

1. $E_\lambda$ is a closed linear subspace of $H$ and $T(E_\lambda)\subseteq E_\lambda$;
2. $E_\lambda^\perp$ ([[def-orthogonality-and-orthogonal-complement]]) is a closed linear subspace of $H$ and $T(E_\lambda^\perp)\subseteq E_\lambda^\perp$;
3. the restrictions $T|_{E_\lambda}$ and $T|_{E_\lambda^\perp}$ satisfy the self-adjoint identity $\langle Tu,v\rangle=\langle u,Tv\rangle$ for all $u,v$ in the respective subspace.

## Facts & Assumptions

**Given:** A Hilbert space $H$, a self-adjoint bounded $T$, an eigenvalue $\lambda$, and $E_\lambda=\ker(T-\lambda I)$.

[A1] **Eigenspace and self-adjointness.** $E_\lambda=\ker(T-\lambda I)=\{v:Tv=\lambda v\}$ is a linear subspace of $H$ ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]], [[def-kernel-and-image-of-a-linear-map]], [[def-linear-subspace]]); $T$ is self-adjoint, so $\langle Tx,y\rangle=\langle x,Ty\rangle$ for all $x,y$ ([[def-self-adjoint-positive-unitary-and-normal-operator]], [[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]]).

[A2] **Continuity and limits.** The bounded operator $T-\lambda I$ is continuous, so $x_n\to x$ implies $(T-\lambda I)x_n\to(T-\lambda I)x$, and limits of convergent sequences in a metric space are unique ([[def-bounded-linear-operator]], [[thm-bounded-linear-operator-equivalences]], [[def-metric-convergence]], [[lem-metric-limits-unique]]).

[A3] **Complements and closedness.** For every subset $S$ of an inner-product space the orthogonal complement $S^\perp$ is a closed linear subspace ([[lem-orthogonal-complement-is-closed]], [[def-orthogonality-and-orthogonal-complement]]); $v\in S^\perp$ means $\langle v,s\rangle=0$ for every $s\in S$, and the pairing is linear in the first argument and conjugate-linear in the second ([[def-real-and-complex-inner-product-space]]).

[A4] Countable Choice is the standing hypothesis of this pair's Hilbert-space interface ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice and the data above.

1.1 **$E_\lambda$ is a closed linear subspace.** Let $x_n\in E_\lambda$ with $x_n\to x$; then $(T-\lambda I)x_n=0$ for all $n$, so by continuity [A2] both $(T-\lambda I)x_n\to(T-\lambda I)x$ and $(T-\lambda I)x_n\to0$, and uniqueness of limits gives $(T-\lambda I)x=0$, i.e. $x\in E_\lambda$; with the linear-subspace statement of [A1] this proves closedness. [A1, A2]

1.2 **$E_\lambda$ is $T$-invariant.** If $v\in E_\lambda$ then $Tv=\lambda v\in E_\lambda$ by [A1] and linearity of the subspace. [A1]

1.3 **$E_\lambda^\perp$ is closed.** The general closedness of orthogonal complements [A3] applied to the subset $E_\lambda$ gives that $E_\lambda^\perp$ is a closed linear subspace of $H$. [A3]

1.4 **$E_\lambda^\perp$ is $T$-invariant.** Let $x\in E_\lambda^\perp$ and $y\in E_\lambda$. By self-adjointness and $Ty=\lambda y$, $\langle Tx,y\rangle=\langle x,Ty\rangle=\langle x,\lambda y\rangle=\overline\lambda\,\langle x,y\rangle=0$, since $\langle x,y\rangle=0$ by definition of the orthogonal complement; as $y\in E_\lambda$ was arbitrary, $\langle Tx,y\rangle=0$ for all $y\in E_\lambda$, that is $Tx\in E_\lambda^\perp$. [A1, A3]

2.1 **The restrictions are self-adjoint.** If $u,v$ both lie in $E_\lambda$, or both lie in $E_\lambda^\perp$, then $u,v\in H$ and [A1] gives $\langle Tu,v\rangle=\langle u,Tv\rangle$ in $H$, which is exactly the defining identity of self-adjointness for the restricted operator on that subspace; [step 1.2] and [step 1.4] show that each restriction maps its subspace into itself, and [step 1.1] and [step 1.3] give the closedness statements of claims 1 and 2. [step 1.1, step 1.2, step 1.3, step 1.4, A1, A4] ∎
