---
id: cor-finite-dimensional-unitary-representations-separate-points-of-a-compact-lie-group
kind: corollary
title: Finite-dimensional representations separate points
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-matrix-coefficients-are-uniformly-dense-in-continuous-functions-on-a-compact-lie-group, def-axiom-of-choice, def-lie-group, thm-c-c-is-dense-in-l-p-for-radon-measures]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §3, Corollary 4.22"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. For distinct elements $x\ne y$ of a compact Lie
group $G$ there is a finite-dimensional unitary representation $\pi$ with
$\pi(x)\ne\pi(y)$.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact Lie group $G$, and distinct points $x,y\in G$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the Haar theory behind [L1].

[L1] Finite linear combinations of matrix coefficients of finite-dimensional unitary representations are uniformly dense in $C(G)$ ([[cor-matrix-coefficients-are-uniformly-dense-in-continuous-functions-on-a-compact-lie-group]]).

[L2] A compact Lie group is a Hausdorff topological group, so distinct points are separated by a continuous real function: a continuous function of compact support equal to $1$ near $x$ and supported away from $y$ exists ([[def-lie-group]], [[thm-c-c-is-dense-in-l-p-for-radon-measures]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] choose $f\in C(G)$ with $f(x)\ne f(y)$ (for instance a continuous bump at $x$ vanishing at $y$), and set $\eta:=|f(x)-f(y)|>0$. [L2]

2.1 By [L1] choose a finite linear combination $s$ of matrix coefficients with $\|s-f\|_\infty<\eta/4$; then $|s(x)-s(y)|\ge|f(x)-f(y)|-2\|s-f\|_\infty>\eta/2>0$, so some matrix coefficient $\pi_{ij}$ occurring in $s$ satisfies $\pi_{ij}(x)\ne\pi_{ij}(y)$. [L1, step 1.1]

3.1 For that matrix coefficient, with $\pi$ unitary in an orthonormal basis, $\pi_{ij}(x)=\langle\pi(x)e_j,e_i\rangle\ne\langle\pi(y)e_j,e_i\rangle=\pi_{ij}(y)$, so $\pi(x)\ne\pi(y)$; hence the finite-dimensional unitary representation $\pi$ separates $x$ from $y$. [A1, step 2.1]∎
