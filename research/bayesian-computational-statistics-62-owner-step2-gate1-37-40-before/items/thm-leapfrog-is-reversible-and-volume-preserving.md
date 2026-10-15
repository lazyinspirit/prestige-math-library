---
id: thm-leapfrog-is-reversible-and-volume-preserving
kind: theorem
title: Leapfrog is reversible and volume-preserving
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-countable-choice
  - def-leapfrog-step-map
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-borel-sets-are-lebesgue-measurable
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-lebesgue-measure-under-dilations-and-reflections
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-sections-of-product-measurable-functions-are-measurable
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-determinant-of-a-triangular-matrix
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "Countable Choice is used through the library's Lebesgue measure and reflection supplier. The force/drift shear and involution calculations use no arbitrary-choice principle."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Radford M. Neal, MCMC Using Hamiltonian Dynamics, Handbook of Markov Chain Monte Carlo, Chapter 5"
      url: "https://sites.stat.columbia.edu/gelman/bayescomputation/Neal2011.pdf"
    - title: "Michael Betancourt, A Conceptual Introduction to Hamiltonian Monte Carlo"
      url: "https://arxiv.org/pdf/1701.02434"
---

## Statement

Assume Countable Choice. Use the notation of [[def-leapfrog-step-map]] on $\mathbb R^d\times\mathbb R^d$ with its product Lebesgue measure. Every kick $K_a$ and drift $D_b$ preserves that measure. Consequently $\Phi_\epsilon^L$ and $T_{\epsilon,L}=R\circ\Phi_\epsilon^L$ preserve phase volume, and
$$T_{\epsilon,L}^2=I.$$
For $U\in C^2$, the classical Jacobian matrices of the kick and drift are block triangular with determinant one; under only $U\in C^1$, the volume conclusion means measure preservation and does not presume a classical Jacobian exists.

## Facts & Assumptions

**Given:** The inputs and maps in [[def-leapfrog-step-map]], finite $L\ge1$, and Countable Choice for the stated Lebesgue-measure supplier.

[A1] Countable Choice supplies the measure construction used by the cited reflection result. [[def-countable-choice]]

[F1] For $U\in C^1$, the kick and drift have the formulas in [[def-leapfrog-step-map]]; $\nabla U$ is continuous, and their inverses are $K_{-a}$ and $D_{-b}$.

[F2] Translating a Lebesgue-measurable set preserves its Lebesgue measure. [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]

[F3] Sections of product-measurable sets are measurable; a continuous map pulls Borel sets back to Borel sets. [[thm-sections-of-product-measurable-functions-are-measurable]], [[thm-continuous-preimages-of-borel-sets-are-borel]]

[F4] Lebesgue measure is sigma-finite: the increasing finite boxes $(-n,n]^d$ cover $\mathbb R^d$. Borel sets are Lebesgue measurable. [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[thm-borel-sets-are-lebesgue-measurable]]

[F5] The product of sigma-finite Lebesgue measures exists with the rectangle formula, and Tonelli applies to nonnegative product-measurable functions. [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F6] Reflection $p\mapsto-p$ preserves Lebesgue measure on $\mathbb R^d$ under Countable Choice. [[thm-lebesgue-measure-under-dilations-and-reflections]]

[F7] The determinant of a triangular matrix is the product of its diagonal entries. [[thm-determinant-of-a-triangular-matrix]]

## Proof
**Proof technique:** slice the shears and use the symmetric composition.

1.1 Fix $a\in\mathbb R$ and a Borel set $E\subseteq\mathbb R^d\times\mathbb R^d$. Continuity of $K_a$ makes $K_a^{-1}(E)$ Borel, and [F3] makes each section $E_q$ measurable. For fixed $q$, the momentum section of $K_a^{-1}(E)$ is $E_q+a\nabla U(q)$, a translate of $E_q$, so [F2] gives equal $\lambda_d$-measures. Tonelli [F5] on the product measure from [F4] therefore gives $(\lambda_d\otimes\lambda_d)(K_a^{-1}(E))=(\lambda_d\otimes\lambda_d)(E)$. [A1, F1, F2, F3, F4, F5, construct]

1.2 For each fixed $p$, continuity of $D_b$ and [F3] make the position section of $D_b^{-1}(E)$ measurable; it is $E^p-bM^{-1}p$, also a translate. The same [F2] and Tonelli calculation gives $(\lambda_d\otimes\lambda_d)(D_b^{-1}(E))=(\lambda_d\otimes\lambda_d)(E)$. The map $R$ preserves product measure because it reflects each momentum section, so [A1, F6] and [F5] apply. Thus every kick, drift, and flip preserves phase volume. [A1, F2, F3, F4, F5, F6, algebra]

2.1 Since $\Phi_\epsilon=K_{\epsilon/2}\circ D_\epsilon\circ K_{\epsilon/2}$, its finite powers and their composition with $R$ preserve volume by step 1.2. [F1, step 1.1, step 1.2, algebra]

3.1 Direct substitution gives $RK_aR=K_{-a}$ and $RD_bR=D_{-b}$. Hence $$R\Phi_\epsilon R=K_{-\epsilon/2}\circ D_{-\epsilon}\circ K_{-\epsilon/2}=\Phi_\epsilon^{-1}.$$ For $T_{\epsilon,L}=R\Phi_\epsilon^L$, this yields $$T_{\epsilon,L}^2=R\Phi_\epsilon^LR\Phi_\epsilon^L=\Phi_\epsilon^{-L}\Phi_\epsilon^L=I.$$ This proves reversibility by momentum flip and the involution claim. [F1, step 2.1, algebra]

4.1 If $U\in C^2$, differentiation gives $$DK_a=\begin{pmatrix}I&0\\-a\nabla^2U(q)&I\end{pmatrix},\qquad DD_b=\begin{pmatrix}I&bM^{-1}\\0&I\end{pmatrix};$$ by [F7] both determinants are one, and $|\det DR|=1$. Under merely $C^1$ regularity these derivative matrices need not exist, but steps 1.1–3.1 already prove measure preservation without them. [F1, F7, step 1.1, step 1.2, step 3.1, algebra] ∎
## Remarks

The statement “unit Jacobian” is classical only when the Hessian exists. For the design's base $C^1$ potential, the slice-translation proof is the volume-preservation argument.
