---
id: lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal
kind: lemma
title: Eigenspaces of a self adjoint operator are orthogonal
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-self-adjoint-positive-unitary-and-normal-operator, thm-hilbert-adjoint-properties, def-hilbert-space-adjoint, def-orthogonality-and-orthogonal-complement, def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-real-and-complex-inner-product-space, def-hilbert-space, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.2, self-adjointness and orthogonality of eigenspaces"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Anthony W. Knapp, Advanced Real Analysis — Chapter II, §2"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
real or complex Hilbert space ([[def-hilbert-space]]) and let
$T\in\mathcal B(H)$ be self-adjoint
([[def-self-adjoint-positive-unitary-and-normal-operator]]). Then:

1. every eigenvalue of $T$
   ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]) is a real number:
   if $Tx=\lambda x$ with $x\ne0$, then $\lambda\in\mathbb R$;
2. eigenspaces belonging to distinct eigenvalues are orthogonal: if
   $\lambda\ne\mu$ and $x\in E_\lambda(T)$, $y\in E_\mu(T)$, then
   $\langle x,y\rangle=0$ ([[def-orthogonality-and-orthogonal-complement]]).

## Facts & Assumptions

**Given:** A real or complex Hilbert space $H$ and a self-adjoint bounded operator $T$ on $H$.

[A1] **Self-adjointness.** $T^*=T$, so $\langle Tx,y\rangle=\langle x,Ty\rangle=\overline{\langle Ty,x\rangle}$ for all $x,y$ ([[def-self-adjoint-positive-unitary-and-normal-operator]], [[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]]).

[A2] **Inner-product algebra.** The pairing is linear in the first argument, conjugate-linear in the second, conjugate symmetric and positive definite, and $\|x\|^{2}=\langle x,x\rangle$ ([[def-real-and-complex-inner-product-space]]); in particular $\langle Tx,x\rangle=\langle x,Tx\rangle$, so this number is its own conjugate and lies in $\mathbb R$.

[A3] **Eigen-data.** $x\in E_\lambda(T)=\ker(T-\lambda I)$ means $Tx=\lambda x$, so $\lambda$ is an eigenvalue with eigenvector $x\ne0$ for the nonzero members of that kernel, that is $Tx=\lambda x$, and then $\|x\|^{2}>0$ by positive definiteness ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]], [[def-real-and-complex-inner-product-space]]).

[A4] **Scalars.** For $\lambda\in\mathbb F$ one has $\overline\lambda=\lambda$ only for $\lambda\in\mathbb R$, and conjugation fixes every real scalar; if $\langle x,x\rangle\ne0$ is real and $\lambda\langle x,x\rangle=\overline\lambda\langle x,x\rangle$, then $\lambda=\overline\lambda$ ([[def-real-and-complex-inner-product-space]]).

[A5] Countable Choice is the standing hypothesis of this pair's Hilbert-space interface ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, a self-adjoint $T$, and eigen-data as in the statement.

1.1 **Eigenvalues are real.** Let $Tx=\lambda x$ with $x\ne0$. By conjugate symmetry, [A1] applied to the pair $(Tx,x)$ and conjugate-linearity in the second argument, $\lambda\langle x,x\rangle=\langle Tx,x\rangle=\langle x,Tx\rangle=\overline{\langle Tx,x\rangle}=\overline\lambda\,\langle x,x\rangle$; since $\langle x,x\rangle=\|x\|^{2}>0$ is a nonzero real number, [A4] gives $\lambda=\overline\lambda$, that is $\lambda\in\mathbb R$. [A1, A2, A3, algebra]

2.1 **Distinct eigenvalues force orthogonality.** Let $Tx=\lambda x$ and $Ty=\mu y$ with $x,y\ne0$ and $\lambda\ne\mu$. By [A1] and conjugate-linearity in the second argument, $\lambda\langle x,y\rangle=\langle Tx,y\rangle=\langle x,Ty\rangle=\overline\mu\,\langle x,y\rangle$; by [step 1.1] both $\lambda$ and $\mu$ are real, so $\overline\mu=\mu$ and hence $(\lambda-\mu)\langle x,y\rangle=0$; since $\lambda-\mu\ne0$, it follows that $\langle x,y\rangle=0$. [step 1.1, A1, A2, algebra]

3.1 **Conclusion.** Claim 1 is [step 1.1]. For claim 2 let $x\in E_\lambda(T)$ and $y\in E_\mu(T)$ with $\lambda\ne\mu$: if both are nonzero then [step 2.1] gives $\langle x,y\rangle=0$, while if $x=0$ or $y=0$ then $\langle x,y\rangle=0$ as well because the pairing is additive and homogeneous in the first argument and conjugate-linear in the second ([[def-real-and-complex-inner-product-space]]). [step 1.1, step 2.1, A3, A5] ∎

