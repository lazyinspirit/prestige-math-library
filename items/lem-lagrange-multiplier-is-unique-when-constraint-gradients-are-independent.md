---
id: "lem-lagrange-multiplier-is-unique-when-constraint-gradients-are-independent"
kind: "lemma"
title: "The multiplier vector is unique when the constraint gradients are independent"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 5
deps:
  - "def-axiom-of-choice"
  - "def-banach-space"
  - "def-frechet-derivative-between-banach-spaces"
  - "def-transpose-of-a-bounded-operator"
  - "lem-finite-choice"
  - "thm-finite-regular-constraint-lagrange-multiplier-rule"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 13 Section 13.3 Constraints, printed pp. 302-305 (Theorem 13.6: uniqueness of the multiplier when the constraint derivative is onto)"
    - title: "Riccardo Cristoferi, Calculus of Variations: Lecture Notes, Carnegie Mellon University 2016 (complete 133-page notes)"
      url: "https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf"
      locator: "Chapter 7, printed pp. 67-71 (independence of the constraint gradients and uniqueness of the multiplier vector)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). In the setting of [[thm-finite-regular-constraint-lagrange-multiplier-rule]] — a real Banach space $X$ ([[def-banach-space]]), open $U\subseteq X$, and a $C^1$ map $G=(G_1,\dots,G_m):U\to\mathbb R^m$ with $DG(u):X\to\mathbb R^m$ surjective — if $\lambda,\lambda'\in\mathbb R^m$ satisfy $\sum_{i=1}^m\lambda_iDG_i(u)=\sum_{i=1}^m\lambda_i'DG_i(u)$ in $X^*$, then $\lambda=\lambda'$. Equivalently, the transpose $DG(u)^*:\mathbb R^m\to X^*$ ([[def-transpose-of-a-bounded-operator]], [[def-frechet-derivative-between-banach-spaces]]) is injective.

## Facts & Assumptions

**Given:** The setting of the multiplier rule: a real Banach space $X$, open $U\subseteq X$, a $C^1$ map $G$ with $DG(u)$ surjective, and vectors $\lambda,\lambda'\in\mathbb R^m$ as in the statement.

[F1] [[thm-finite-regular-constraint-lagrange-multiplier-rule]]: under these hypotheses $DG(u)$ has components $DG_i(u)\in X^*$, surjectivity is available exactly as in the multiplier rule, and multiples and sums of the component functionals are formed pointwise.

[F2] [[lem-finite-choice]]: a finite family of nonempty sets indexed by a natural number admits a choice function.

[F3] [[def-transpose-of-a-bounded-operator]], [[def-frechet-derivative-between-banach-spaces]]: for a bounded linear operator $T:X\to\mathbb R^m$ the transpose $T^*:(\mathbb R^m)^*\to X^*$ is defined by $T^*g=g\circ T$; under the identification of $(\mathbb R^m)^*$ with $\mathbb R^m$ by the standard basis, $(DG(u)^*\mu)(x)=\sum_i\mu_iDG_i(u)x$, so $DG(u)^*\mu=0$ if and only if $\sum_i\mu_iDG_i(u)$ is the zero functional.

## Proof

**Proof technique:** direct.

**Given:** The setting above and $\lambda,\lambda'\in\mathbb R^m$ with equal associated functionals.

1.1 Put $\mu:=\lambda-\lambda'\in\mathbb R^m$. Subtracting the two equal functionals gives $\sum_{i=1}^m\mu_iDG_i(u)=0$ in $X^*$ [F1]. Since $DG(u)$ is surjective, for each $i$ the preimage $DG(u)^{-1}(\{e_i\})$ is nonempty, and finite choice [F2] selects $x_1,\dots,x_m\in X$ with $DG(u)x_i=e_i$, that is $DG_j(u)x_i=\delta_{ij}$. Evaluating the vanishing functional at $x_j$ gives $0=\sum_i\mu_iDG_i(u)x_j=\mu_j$, and this holds for every $j$; hence $\mu=0$ and $\lambda=\lambda'$. [given, F1, F2, choose, algebra]

2.1 For the equivalent formulation, [F3] identifies $DG(u)^*\mu\in X^*$ with $x\mapsto\sum_i\mu_iDG_i(u)x$. Consequently $DG(u)^*\mu=0$ holds exactly when $\sum_i\mu_iDG_i(u)$ is the zero functional, which by the evaluation argument of step 1.1 forces $\mu=0$; so $DG(u)^*:\mathbb R^m\to X^*$ is injective. [step 1.1, F3]

3.1 Step 1.1 proves the uniqueness of the multiplier vector and step 2.1 the equivalent statement that the transpose of the surjective derivative is injective; this records the independence boundary case in which the surjectivity hypothesis of the multiplier rule cannot be dropped. [step 1.1, step 2.1] ∎

