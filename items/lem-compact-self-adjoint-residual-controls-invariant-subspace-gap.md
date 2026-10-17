---
id: lem-compact-self-adjoint-residual-controls-invariant-subspace-gap
kind: lemma
title: A residual and a spectral separation bound an invariant-subspace gap
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-countable-choice
  - def-hilbert-space
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - thm-spectral-theorem-for-compact-self-adjoint-operators
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Bertrand Mercier, Topics in Finite Element Solution of Elliptic Problems, Chapter 8
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr63.pdf
      locator: "§8.5, printed pp. 132–134: spectral projections and estimates of a multiple-eigenvalue eigenspace gap."
    - title: Jean-Luc Guermond, MATH 661 Finite Element Methods, Fall 2025, Chapter 47
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap47.pdf
      locator: "§47.2.3, multiple eigenvalues are compared through their invariant subspaces rather than a selected eigenvector."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $H$ be a real or
complex Hilbert space and let $B_h:H\to H$ be compact and self-adjoint. Put
$$\Sigma_h:=\{0\}\cup\{\nu\ne0:\nu\text{ is an eigenvalue of }B_h\}.$$
Let $\Lambda\subseteq\Sigma_h\setminus\{0\}$ be a finite cluster of
nonzero eigenvalues, let $F$ be the sum of their eigenspaces, and assume
$$\Delta:=\inf\{|\mu-\nu|:\nu\in\Sigma_h\setminus\Lambda\}>0$$
for a real number $\mu$. The compact spectral theorem makes $F$
finite-dimensional. Define the directed Hilbert-space gap by
$$\operatorname{gap}(E,F):=\sup_{\substack{u\in E\\\|u\|=1}} \inf_{v\in F}\|u-v\|.$$
If $E\subseteq H$ is a nonzero finite-dimensional subspace and
$$\|(B_h-\mu I)u\|\le\varepsilon\|u\|\qquad(u\in E),$$
then
$$\operatorname{gap}(E,F)\le\varepsilon/\Delta.$$
The estimate compares subspaces and makes no choice of eigenvectors in a
multiple eigenspace.

## Facts & Assumptions

**Given:** Countable Choice, the compact self-adjoint operator $B_h$, its
spectral cluster $\Lambda$ and invariant subspace $F$, the real number $\mu$,
and the residual bound on $E$.

[F1] The eigenspaces of a compact self-adjoint operator are mutually
orthogonal and its spectral projections give a norm-convergent orthogonal
expansion; the kernel is the orthogonal complement of the nonzero spectral
subspace ([[thm-spectral-theorem-for-compact-self-adjoint-operators]]).

[F2] For a closed subspace $F$ of a Hilbert space, every $u$ has an
orthogonal decomposition $u=P_Fu+(I-P_F)u$, with
$\operatorname{dist}(u,F)=\|(I-P_F)u\|$
([[thm-orthogonal-decomposition-by-a-closed-subspace]]).

## Proof

**Proof technique:** direct.

**Given:** $B_h$, $F$, $\Lambda$, $\Delta>0$, $E$, $\mu$, and
$\varepsilon\ge0$ as in the statement.

1.1 Fix $u\in E$. Decompose $u=P_Fu+(I-P_F)u$ using [F2]. The spectral projection $P_F$ commutes with $B_h$ because $F$ is a sum of whole eigenspaces. By [F1], the orthogonal spectral expansion of $(B_h-\mu I)u$ on $F^\perp$ contains only nonzero eigenvalues outside $\Lambda$ and the kernel component; all their multipliers belong to $\Sigma_h\setminus\Lambda$ and are at distance at least $\Delta$ from $\mu$. Parseval therefore gives $\|(B_h-\mu I)u\|^2\ge \Delta^2\|(I-P_F)u\|^2.$ [F1, F2, given]

2.1 If $u\ne0$, divide step 1.1 by $\Delta^2\|u\|^2$ and take square roots to obtain $\operatorname{dist}(u,F)/\|u\|\le\varepsilon/\Delta$. The same bound is vacuous for $u=0$. Taking the supremum over nonzero $u\in E$ proves the stated directed gap estimate. [F2, step 1.1, given, algebra] ∎
