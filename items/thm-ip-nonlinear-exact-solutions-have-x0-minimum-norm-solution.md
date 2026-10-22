---
id: thm-ip-nonlinear-exact-solutions-have-x0-minimum-norm-solution
kind: theorem
title: Existence of an $x_0$-minimum-norm exact solution
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-weakly-closed-nonlinear-forward-map
  - def-ip-x0-minimum-norm-solution-on-weak-domain
  - lem-ip-nonlinear-exact-solution-set-is-weakly-closed
  - thm-direct-method-in-a-reflexive-banach-space
  - def-proper-coercive-and-weakly-lower-semicontinuous-functional
  - cor-weak-convergence-implies-lower-semicontinuity-of-the-norm
  - thm-hilbert-spaces-are-reflexive-by-riesz-representation
  - def-ultrafilter-extension-principle
  - def-dependent-choice
  - def-countable-choice
  - def-hahn-banach-extension-principle-relative
  - lem-dependent-choice-implies-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, Chapter 10"
      url: "https://arxiv.org/pdf/2001.00617v2"
    - title: "Benedikt Wirth, Inverse Problems, Theorem 85(b)"
      url: "https://www.uni-muenster.de/AMM/Veranstaltungen/WS21/InverseProblems/lecture2021.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume the ultrafilter lemma, dependent choice, and HB. Let $X,Y$ be real Hilbert spaces, let $D\subseteq X$ be nonempty and weakly closed in the coarsest topology making every bounded real-linear functional continuous, and let $F:D\to Y$ satisfy: for every sequence $x_n\in D$ and $x\in X,z\in Y$, if $x_n\rightharpoonup x$ and $F(x_n)\rightharpoonup z$, then $x\in D$ and $F(x)=z$; weak convergence means convergence under every bounded real-linear functional. If $S_F(y):=\{x\in D:F(x)=y\}$ is nonempty for some $y\in Y$, then for every $x_0\in X$ there exists $x^\dagger\in S_F(y)$ such that $\|x^\dagger-x_0\|_X\le\|x-x_0\|_X$ for every $x\in S_F(y)$.

## Statement references

[[def-ip-weakly-closed-nonlinear-forward-map|Weakly closed domains and sequential graph closure]]

[[def-ip-x0-minimum-norm-solution-on-weak-domain|The reference-point minimum-norm solution condition]]

[[thm-direct-method-in-a-reflexive-banach-space|The direct method]]

[Christian Clason, *Regularization of Inverse Problems*, Chapter 10](https://arxiv.org/pdf/2001.00617v2)

[Benedikt Wirth, *Inverse Problems*, Theorem 85(b)](https://www.uni-muenster.de/AMM/Veranstaltungen/WS21/InverseProblems/lecture2021.pdf)

## Facts & Assumptions

**Given:** The ultrafilter lemma, DC, and HB; real Hilbert spaces $X,Y$; a weakly closed forward map $F:D\to Y$; a nonempty exact solution set $S_F(y)$; and $x_0\in X$.

[A1] The ultrafilter lemma says every filter on a set extends to an ultrafilter ([[def-ultrafilter-extension-principle]]).

[A2] DC supplies an infinite sequence following any everywhere-extendible relation ([[def-dependent-choice]]).

[A3] HB is the real dominated-extension principle ([[def-hahn-banach-extension-principle-relative]]).

[F1] The exact solution set $S_F(y)$ is weakly sequentially closed ([[lem-ip-nonlinear-exact-solution-set-is-weakly-closed]]).

[F2] DC implies countable choice, the principle that every countable family of nonempty sets admits a choice function ([[lem-dependent-choice-implies-countable-choice]], [[def-countable-choice]]); every complete real inner-product space is reflexive under that principle ([[thm-hilbert-spaces-are-reflexive-by-riesz-representation]]).

[F3] On a nonempty weakly sequentially closed subset of a real reflexive Banach space, a proper coercive weakly sequentially lower-semicontinuous functional attains its infimum under the ultrafilter lemma, DC, and HB ([[thm-direct-method-in-a-reflexive-banach-space]]).

[F4] Under HB, weak convergence implies lower semicontinuity of the norm ([[cor-weak-convergence-implies-lower-semicontinuity-of-the-norm]]).

[F5] An extended-real functional on a nonempty admissible set is proper when it is finite somewhere; coercivity is equivalent to bounded sublevel sets; weak sequential lower semicontinuity is the liminf inequality along weakly convergent sequences ([[def-proper-coercive-and-weakly-lower-semicontinuous-functional]]).

[F6] An $x_0$-minimum-norm solution is an exact solution whose distance to $x_0$ is no greater than that of any other exact solution in $D$ ([[def-ip-x0-minimum-norm-solution-on-weak-domain]]).

## Proof

**Given:** The assumptions above.

1.1 Let $S:=S_F(y)$. It is nonempty by hypothesis and weakly sequentially closed by [F1]. Define $I:S\to(-\infty,+\infty]$ by $I(x):=\frac12\|x-x_0\|_X^2$. This is finite everywhere on $S$, so it is proper. Its sublevel set $\{x\in S:I(x)\le\Lambda\}$ is empty for $\Lambda<0$ and, for $\Lambda\ge0$, satisfies $\|x\|_X\le\|x_0\|_X+\sqrt{2\Lambda}$ by the triangle inequality. Hence $I$ is coercive on $S$. [given, F1, F5, construct]

2.1 If $x_n\in S$ and $x_n\rightharpoonup x\in S$, then $x_n-x_0\rightharpoonup x-x_0$. By [F4], $\|x-x_0\|_X\le\liminf_n\|x_n-x_0\|_X$; since norms are nonnegative and squaring is increasing and continuous there, $I(x)\le\liminf_n I(x_n)$. Thus $I$ is weakly sequentially lower semicontinuous on $S$. [A3, F4, F5, step 1.1, algebra]

3.1 By [F2], countable choice follows from the assumed DC, so the real Hilbert space $X$ is reflexive; it is Banach by completeness in the Hilbert-space definition. The nonempty set $S$ is weakly sequentially closed by step 1.1, and $I$ is proper, coercive, and weakly sequentially lower semicontinuous by steps 1.1 and 2.1. Apply [F3], whose choice assumptions are exactly [A1], [A2], and [A3], to obtain $x^\dagger\in S$ minimizing $I$ on $S$. [A1, A2, A3, F2, F3, step 1.1, step 2.1, construct]

4.1 Since $I(x)=\frac12\|x-x_0\|_X^2$ and the square function is increasing on nonnegative reals, minimizing $I$ on $S$ is equivalent to minimizing $\|x-x_0\|_X$. Thus $x^\dagger$ satisfies [F6] and is an $x_0$-minimum-norm exact solution. [F6, step 3.1, algebra] ∎

## Remarks

The theorem gives existence, not uniqueness: a nonlinear exact solution set need not have a unique point at minimum distance from $x_0$. The use of DC also supplies the countable choice assumed by the Hilbert reflexivity supplier; no full axiom of choice is used.
