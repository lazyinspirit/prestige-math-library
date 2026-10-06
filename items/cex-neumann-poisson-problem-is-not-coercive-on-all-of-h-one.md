---
id: "cex-neumann-poisson-problem-is-not-coercive-on-all-of-h-one"
kind: "counterexample"
title: "The Neumann Poisson problem is not coercive on all of $H^1$"
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 6
deps:
  - "def-axiom-of-choice"
  - "def-bounded-coercive-and-symmetric-sesquilinear-forms"
  - "def-complex-conjugate-real-imaginary-part-and-modulus"
  - "def-connected-component-and-quasicomponent"
  - "def-hilbert-space"
  - "def-integral-over-a-measurable-set"
  - "def-sobolev-space-wkp-and-its-norm"
  - "lem-classical-derivatives-are-weak-derivatives"
  - "lem-euclidean-balls-have-positive-finite-lebesgue-measure"
  - "lem-w-one-two-is-a-hilbert-space"
  - "thm-weak-neumann-poisson-solvability-on-the-mean-zero-subspace"
  - "thm-zero-weak-gradient-implies-componentwise-constancy"
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
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§5.1, Exercise 5.1: the Neumann problem is solvable only under the compatibility condition and unique only up to constants, printed pp. 105–106"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "Section 9.5, Example 4, printed pp. 296–297: Neumann testing on H1 for the reaction-shifted equation -Delta u+u=f. This is formulation background; the unshifted kernel obstruction is computed here."
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 4.4, introductory discussion, printed p. 98: constants have zero derivative, motivating boundary or mean-zero conditions for Poincare estimates."
---

## Statement refuted

Assume the Axiom of Choice inherited through the cited suppliers, together with Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be a nonempty bounded open set and consider the form $a(u,v)=\int_\Omega\nabla u\cdot\overline{\nabla v}\,dx$ on $H^1(\Omega)$ with the inner product of [[lem-w-one-two-is-a-hilbert-space]]. The constant function $\mathbf 1$ satisfies $a(\mathbf 1,\mathbf 1)=0$ while $\|\mathbf 1\|_{H^1}=|\Omega|^{1/2}>0$, so no $\alpha>0$ can satisfy $\operatorname{Re}a(u,u)\ge\alpha\|u\|^2_{H^1}$ for all $u\in H^1(\Omega)$: the form is not coercive on $H^1(\Omega)$, and Lax--Milgram does not apply in that space. The obstruction is exactly the kernel: $a(u,u)=0$ forces $\nabla u=0$, hence $u$ is constant on each connected component ([[thm-zero-weak-gradient-implies-componentwise-constancy]]), and the associated Neumann problem $a(u,v)=F(v)$ for all $v$ can have no solution when $F(\mathbf 1)\ne0$ while constants give nontrivial solutions of the homogeneous equation. This motivates the mean-zero subspace formulation [[thm-weak-neumann-poisson-solvability-on-the-mean-zero-subspace]] and its compatibility condition.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; a nonempty bounded open set $\Omega\subseteq\mathbb R^n$; the Hilbert space $H^1(\Omega)$ with inner product $(u,v)_{H^1}=(u,v)_{L^2}+\sum_i(D_iu,D_iv)_{L^2}$; the form $a(u,v)=\int_\Omega\nabla u\cdot\overline{\nabla v}\,dx$; and the constant class $\mathbf 1$.

[F1] Coercivity of a sesquilinear form means $\operatorname{Re}a(u,u)\ge\alpha\|u\|_{H^1}^2$ for all $u$ and some $\alpha>0$; boundedness means the same form has a finite bound ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

[F2] $\mathbf 1\in H^1(\Omega)$ with weak gradient $0$: the classical partial derivatives of the constant are $0$ and are its weak derivatives, and the constant is in $L^2$ because $\Omega$ has finite measure ([[lem-classical-derivatives-are-weak-derivatives]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[def-sobolev-space-wkp-and-its-norm]]).

[F3] $\|\mathbf 1\|_{H^1}^2=\|\mathbf 1\|_{L^2}^2+\|D\mathbf 1\|_{L^2}^2=|\Omega|+0>0$, since $|\Omega|>0$ for a nonempty open set ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[def-integral-over-a-measurable-set]], [[def-hilbert-space]]).

[F4] Zero weak gradient implies componentwise constancy: $a(u,u)=0$ means $\int_\Omega|\nabla u|^2=0$, so $\nabla u=0$ a.e. and $u$ is constant on each connected component of $\Omega$ ([[thm-zero-weak-gradient-implies-componentwise-constancy]], [[def-connected-component-and-quasicomponent]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F5] The mean-zero Neumann theorem requires the compatibility $F(\mathbf 1)=0$ and produces solutions with $\int_\Omega u=0$ ([[thm-weak-neumann-poisson-solvability-on-the-mean-zero-subspace]]).



## Proof

1.1 The constant is not infinitesimal for the form: by [F2] the weak gradient of $\mathbf 1$ vanishes, so $a(\mathbf 1,\mathbf 1)=\int_\Omega|\nabla\mathbf 1|^2\,dx=0$, while $\|\mathbf 1\|_{H^1}^2=|\Omega|>0$ by [F3]. [F2, F3]

2.1 Failure of coercivity: if some $\alpha>0$ satisfied $\operatorname{Re}a(u,u)\ge\alpha\|u\|_{H^1}^2$ for all $u$, then at $u=\mathbf 1$ it would give $0=\operatorname{Re}a(\mathbf 1,\mathbf 1)\ge\alpha|\Omega|>0$, a contradiction. Hence the form is not coercive on $H^1(\Omega)$, and the Lax--Milgram existence theorem does not apply in that space. [F1, step 1.1]

3.1 The obstruction is the kernel and the compatibility: by [F4], $a(u,u)=0$ forces $\nabla u=0$ a.e., so with $u\ne0$ the constants are nontrivial solutions of the homogeneous equation; the weak equation $a(u,v)=F(v)$ on all of $H^1(\Omega)$, tested at $v=\mathbf 1$, forces $F(\mathbf 1)=0$, so no solution exists when $F(\mathbf 1)\ne0$. On a connected extension domain this obstruction is removed by the cited mean-zero formulation and compatibility condition. On a disconnected domain one must remove constants on every component and impose compatibility on each component; global mean zero alone does not remove the kernel. [F4, F5, step 2.1] ∎ 