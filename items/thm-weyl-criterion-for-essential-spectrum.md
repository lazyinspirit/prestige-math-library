---
id: thm-weyl-criterion-for-essential-spectrum
kind: theorem
title: "Weyl criterion for the essential spectrum"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-discrete-and-essential-spectrum-of-a-self-adjoint-operator, thm-unbounded-borel-functional-calculus, lem-unbounded-pvm-integral-is-well-defined-and-closed, def-weak-convergence-of-nets-and-sequences, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-axiom-of-choice, thm-spectral-theorem-for-unbounded-self-adjoint-operators, def-dependent-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Lemma 6.17 with complete proof, pp.170-171"
---

## Statement

Assume the Axiom of Choice. Let $A$ be a self-adjoint operator and let
$\lambda\in\mathbb R$. Then $\lambda\in\sigma_{\mathrm{ess}}(A)$ if and only if
there is a sequence $x_n\in D(A)$ with $\|x_n\|=1$, $x_n\rightharpoonup0$ weakly
([[def-weak-convergence-of-nets-and-sequences]]) and
$\|(A-\lambda)x_n\|\to0$. The sequence may be chosen orthonormal; such a
sequence is called a singular Weyl sequence for $\lambda$.

## Facts & Assumptions

[A1] $\lambda\in\sigma_{\mathrm{ess}}(A)$ exactly when $\operatorname{rank}E((\lambda-\varepsilon,\lambda+\varepsilon))=\infty$ for every $\varepsilon>0$, and $\lambda\in\sigma_{\mathrm d}(A)$ exactly when $\lambda$ is an eigenvalue and some such rank is finite ([[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]]).

[A2] For bounded Borel $h$, $\|h(A)x\|^2=\int|h|^2dE_x$ and $h(A)$ is bounded; hence for a bounded Borel set $B$ and $x\in D(A)$ one has $\|(A-\lambda)E(B)x\|^2=\int_B|\mu-\lambda|^2dE_x$ ([[lem-unbounded-pvm-integral-is-well-defined-and-closed]], [[thm-unbounded-borel-functional-calculus]], [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).

[A3] If $P$ is a finite-rank orthogonal projection and $x_n\rightharpoonup0$, then $\|Px_n\|\to0$: expand in a finite orthonormal basis of $\operatorname{ran}P$ and use that each coefficient tends to $0$ ([[def-weak-convergence-of-nets-and-sequences]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[A4] An orthonormal sequence tends weakly to $0$: by Bessel's inequality only finitely many terms of the sequence can have $|\langle x_n,y\rangle|>\varepsilon$ for a fixed $y$ and $\varepsilon>0$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[def-weak-convergence-of-nets-and-sequences]]).

## Proof

**Proof technique:** direct.

**Given:** A self-adjoint operator $A$ and a real number $\lambda$.

1.1 If $x_n$ is a Weyl sequence and $P_\varepsilon=E((\lambda-\varepsilon,\lambda+\varepsilon))$, then $\|(1-P_\varepsilon)x_n\|\le\varepsilon^{-1}\|(A-\lambda)x_n\|$ by [A2] and the spectral estimate, while $\|P_\varepsilon x_n\|\to0$ by [A3] when $P_\varepsilon$ has finite rank; hence $\|x_n\|\to0$, contradicting $\|x_n\|=1$, so no Weyl sequence exists at a point of $\sigma_{\mathrm d}(A)$ by [A1]. [A1, A2, A3]

1.2 Conversely let $\lambda\in\sigma_{\mathrm{ess}}(A)$, so every $P_{1/m}$ has infinite rank by [A1]. Recursively choose a unit vector $x_m\in\operatorname{ran}E((\lambda-1/m,\lambda+1/m))$ orthogonal to $x_1,\dots,x_{m-1}$; this is possible because the range is infinite dimensional. Then $(x_m)$ is orthonormal, hence weakly null by [A4], and $\|(A-\lambda)x_m\|^2=\int_{(\lambda-1/m,\lambda+1/m)}|\mu-\lambda|^2dE_{x_m}\le1/m^2\to0$ by [A2]. [A1, A2, A4]

2.1 The forward direction of the statement is step 1.1 read contrapositively: a point of the essential spectrum admits the orthonormal Weyl sequence of step 1.2, while a point of the discrete spectrum admits none; the orthonormal choice is constructed in step 1.2 and used in step 1.1. [step 1.1, step 1.2] ∎
