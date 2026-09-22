---
id: cex-a-normal-operator-need-not-have-any-eigenvectors
kind: counterexample
title: A normal operator need not have any eigenvectors
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-spectral-projections-and-resolution-of-the-identity, ex-pvm-of-a-multiplication-operator, thm-borel-functional-calculus-for-bounded-normal-operators, def-borel-functional-calculus-for-a-bounded-normal-operator, def-l-p-space-as-a-quotient-by-null-functions, def-spectrum-and-resolvent-of-a-bounded-operator, thm-spectral-theorem-for-bounded-normal-operators-pvm-form, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.7, printed pp.293–296"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §4.1, printed pp.113–115"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  audited: 2026-09-22
---

## Statement refuted

Assume AC. Every bounded normal operator on a nonzero complex Hilbert space has
a nonzero eigenvector.

## Facts & Assumptions

[A1] $T=M_x$ on $L^2([0,1],\lambda)$ is bounded self-adjoint with $\sigma(T)=[0,1]$, spectral projections $E(B)=M_{\mathbf 1_B}$, and the eigenvector identity is available in the form $E(\{\mu\})H=\ker(T-\mu I)$ ([[ex-pvm-of-a-multiplication-operator]], [[cor-spectral-projections-and-resolution-of-the-identity]], [[thm-spectral-theorem-for-bounded-normal-operators-pvm-form]]).

[A2] In $L^2$, a class $h$ satisfies $x h=\mu h$ if and only if $(x-\mu)h=0$ almost everywhere; a product of a bounded measurable function with $h$ vanishes almost everywhere exactly when $h=0$ almost everywhere off the zero set of the factor, and every representative of a nonzero $L^2$ class is nonzero on a set of positive measure ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-borel-functional-calculus-for-a-bounded-normal-operator]]).

[A3] AC is the declared choice hypothesis of this page from the construction item onward ([[def-axiom-of-choice]]).

## Counterexample

**Proof technique:** direct.

**Given:** Lebesgue measure on $[0,1]$, the operator $T=M_x$, and the spectral projection $E(\{\mu\})$ of a point $\mu\in\mathbb C$.

1.1 $T$ is normal, indeed bounded self-adjoint, with $\sigma(T)=[0,1]$. [A1]

1.2 Let $h\ne0$ in $L^2([0,1])$ and suppose $Th=\mu h$. Then $(x-\mu)h=0$ almost everywhere, so $h=0$ almost everywhere on the set $\{x\ne\mu\}$; since that set is $[0,1]$ minus at most one point, hence of full measure, $h=0$ almost everywhere on $[0,1]$. [A2]

2.1 A class vanishing almost everywhere is the zero class, contradicting $h\ne0$; hence no nonzero eigenvector exists at any $\mu$. [step 1.2, A2]

2.2 Consistently with the eigenvector identity $E(\{\mu\})H=\ker(T-\mu I)$, the spectral projection of each singleton is zero, since the measure $x\mapsto\lambda$ is nonatomic: $E(\{\mu\})=M_{\mathbf 1_{\{\mu\}}}=0$ in $L^2$. [step 1.2, A1]

3.1 The bounded normal operator $M_x$ on $L^2([0,1])$ therefore has spectrum $[0,1]$ and no nonzero eigenvectors, refuting the statement that every bounded normal operator has one. [step 1.1, step 2.1, step 2.2, A3] ∎
