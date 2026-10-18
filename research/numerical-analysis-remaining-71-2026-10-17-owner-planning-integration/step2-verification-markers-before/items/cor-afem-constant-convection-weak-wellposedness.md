---
id: "cor-afem-constant-convection-weak-wellposedness"
kind: "corollary"
title: "Weak well-posedness for constant divergence-free convection"
status: draft
origin: pipeline
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 0
deps:
  - "def-axiom-of-choice"
  - "def-countable-choice"
  - "def-bounded-coercive-and-symmetric-sesquilinear-forms"
  - "def-hilbert-space"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "thm-poincare-inequality-for-w-one-p-zero"
  - "lem-w-one-two-is-a-hilbert-space"
  - "thm-lax-milgram"
  - "thm-holder-inequality-for-integrals"
proof_strategy: direct
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Ricardo H. Nochetto, Adaptive Finite Element Methods, Lecture 3"
      url: "https://www.math.umd.edu/~rhn/lectures/lecture3.pdf"
      locator: "§§3.1–3.3, quasi-orthogonality and convection fine-mesh condition, PDF pp. 1–5."
    - title: "Cascón, Kreuzer, Nochetto & Siebert, Quasi-optimal convergence rate for an AFEM"
      url: "https://math.umd.edu/~rhn/papers/pdf/optimality.pdf"
      locator: "§§2.1–2.7, 3.2–3.3, Theorem 4.1, and §5."
    - title: "Bonito, Canuto, Nochetto & Veeser, Adaptive Finite Element Methods (2024)"
      url: "https://people.tamu.edu/~bonito/Publications/Preprints/2024_afem_acta.pdf"
      locator: "§§3.5–3.6 on 2D newest-vertex bisection and §8.1.1–8.1.3 on chains and cumulative closure complexity."
---
## Statement

Assume the Axiom of Choice and Countable Choice as in the cited Sobolev and Lax–Milgram suppliers. Let $\Omega\subset\mathbb R^2$ be a bounded polygon, $b\in\mathbb R^2$ constant, and $f\in L^2(\Omega;\mathbb R)$. Here $H_0^1$ is the zero-boundary closure of [[def-wkp-zero-as-a-sobolev-closure]]. There is a unique real-valued $u\in H_0^1(\Omega;\mathbb R)$ satisfying
$$\int_\Omega \nabla u\cdot\nabla v+(b\cdot\nabla u)v\,dx=\int_\Omega fv\,dx\qquad(v\in H_0^1(\Omega)).$$
No $H^2$ regularity is asserted.

## Facts & Assumptions

[A1] The Axiom of Choice and Countable Choice are assumed as required by the Poincare and Lax–Milgram suppliers ([[def-axiom-of-choice]], [[def-countable-choice]]).

**Given:** The Axiom of Choice, Countable Choice, a bounded polygon $\Omega$, constant $b$, $f\in L^2(\Omega)$, and the real Hilbert space $H_0^1(\Omega)$.

[F1] On a domain bounded in one direction, $\|v\|_{L^2}\le C_P\|\nabla v\|_{L^2}$ for every $v\in H_0^1$; the supplier states its Axiom of Choice and Countable Choice assumptions ([[thm-poincare-inequality-for-w-one-p-zero]], [[def-axiom-of-choice]], [[def-countable-choice]]).

[F2] The real bounded coercive (not necessarily symmetric) Lax–Milgram theorem assumes Countable Choice and gives a unique variational solution for every bounded linear functional ([[thm-lax-milgram]], [[def-countable-choice]]).

[F3] $W^{1,2}$ is a Hilbert space under its Sobolev inner product; its zero-boundary closure is closed, and Poincare makes the gradient norm equivalent to the inherited norm ([[lem-w-one-two-is-a-hilbert-space]], [[def-hilbert-space]], [[def-wkp-zero-as-a-sobolev-closure]], [[thm-poincare-inequality-for-w-one-p-zero]]).

## Proof

1.1 A bounded polygon lies in a finite-width slab, so [F1] applies. Define $a(w,v)=\int\nabla w\cdot\nabla v+(b\cdot\nabla w)v$. Cauchy–Schwarz and [F1] give $|a(w,v)|\le(1+|b|C_P)\|\nabla w\|_2\|\nabla v\|_2$; also $F(v)=\int fv$ is linear and $|F(v)|\le C_P\|f\|_2\|\nabla v\|_2$. The gradient norm is complete on $H_0^1$ by [F3], since Poincare makes it equivalent to the complete inherited $H^1$ norm. [A1, F1, F3, given, algebra]

1.2 For $w\in C_c^\infty(\Omega)$, $\int(b\cdot\nabla w)w=\frac12\int b\cdot\nabla(w^2)=0$ by compact support and constant $b$. Approximation in $H_0^1$ extends this identity to every $w\in H_0^1$, because $w\mapsto\int(b\cdot\nabla w)w$ is continuous in the $H^1$ norm and compactly supported smooth functions are dense by [F3]. Hence $a(w,w)=\|\nabla w\|_2^2$, so $a$ is coercive with constant $1$ in the gradient norm. [A1, F1, F3, given, algebra]

2.1 Apply [F2] to the real Hilbert space $H_0^1(\Omega)$ equipped with inner product $(w,v)_H=\int\nabla w\cdot\nabla v$, the bounded form from step 1.1, and its coercivity from step 1.2. This gives a unique $u$ satisfying $a(u,v)=F(v)$ for all $v$. These are exactly the displayed weak equations. The use of choice is inherited only from [F1] and [F2]; no elliptic regularity is used. [A1, F1, F2, F3, step 1.1, step 1.2] ∎
