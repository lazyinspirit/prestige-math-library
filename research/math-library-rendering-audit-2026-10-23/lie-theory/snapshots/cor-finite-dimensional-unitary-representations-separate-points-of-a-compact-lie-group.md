---
id: cor-finite-dimensional-unitary-representations-separate-points-of-a-compact-lie-group
kind: corollary
title: Finite-dimensional representations separate points
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-matrix-coefficients-are-uniformly-dense-in-continuous-functions-on-a-compact-lie-group, def-axiom-of-choice, def-lie-group, cor-a-compact-hausdorff-space-is-tychonoff, lem-ac-supplies-sequential-choices-for-probability-constructions]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §3, Corollary 4.22"
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. For distinct elements $x\ne y$ of a compact Lie
group $G$ there is a finite-dimensional unitary representation $\pi$ with
$\pi(x)\ne\pi(y)$.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact Lie group $G$, and distinct points $x,y\in G$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the Haar theory behind [L1].

[L1] Finite linear combinations of matrix coefficients of finite-dimensional unitary representations are uniformly dense in $C(G)$ ([[cor-matrix-coefficients-are-uniformly-dense-in-continuous-functions-on-a-compact-lie-group]]).

[L2] A Lie group is Hausdorff, so $G$ is compact Hausdorff. Under dependent choice, disjoint closed subsets of a compact Hausdorff space are separated by a continuous function into $[0,1]$; the assumed Axiom of Choice supplies dependent choice ([[def-lie-group]], [[cor-a-compact-hausdorff-space-is-tychonoff]], [[lem-ac-supplies-sequential-choices-for-probability-constructions]]).

## Proof

**Proof technique:** direct.

1.1 The singletons $\{x\}$ and $\{y\}$ are disjoint closed subsets of the compact Hausdorff space $G$. By [L2] choose $f\in C(G,[0,1])$ with $f(x)=0$ and $f(y)=1$, and set $\eta:=|f(x)-f(y)|=1$. [L2]

2.1 By [L1] choose a finite linear combination $s$ of matrix coefficients with $\|s-f\|_\infty<\eta/4$; then $|s(x)-s(y)|\ge|f(x)-f(y)|-2\|s-f\|_\infty>\eta/2>0$, so some matrix coefficient $\pi_{ij}$ occurring in $s$ satisfies $\pi_{ij}(x)\ne\pi_{ij}(y)$. [L1, step 1.1]

3.1 For that matrix coefficient, with $\pi$ unitary in an orthonormal basis, $\pi_{ij}(x)=\langle\pi(x)e_j,e_i\rangle\ne\langle\pi(y)e_j,e_i\rangle=\pi_{ij}(y)$, so $\pi(x)\ne\pi(y)$; hence the finite-dimensional unitary representation $\pi$ separates $x$ from $y$. [A1, step 2.1]∎
