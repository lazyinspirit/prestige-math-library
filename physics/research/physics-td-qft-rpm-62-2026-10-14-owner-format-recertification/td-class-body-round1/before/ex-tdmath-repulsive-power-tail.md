---
id: ex-tdmath-repulsive-power-tail
kind: example
title: "A singular repulsive power tail is stable"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: [def-tdmath-stable-power-tempered-particle-model, def-real-power, thm-real-power-continuity-and-derivatives]
dependency_roles:
  def-tdmath-stable-power-tempered-particle-model: mathematical-premise
  def-real-power: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Stefan Adams, Mathematical Statistical Mechanics, MPI Lecture Note 30, §5.2"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-3006.pdf"
    - title: "D. Ruelle, Classical Statistical Mechanics of a System of Particles"
      url: "https://www.e-periodica.ch/cntmng?pid=hpa-001%3A1963%3A36%3A%3A1128&bot=1"
---

## Example

Fix $d\ge1$ and $\epsilon>0$. Define
$$\phi_{\mathrm{rep}}(x):=\begin{cases}+\infty,&x=0,\\\|x\|_2^{-d-\epsilon},&x\ne0.\end{cases}$$
This is an even, Borel-measurable stable power-tempered pair potential. It has
an unbounded repulsive core and a nonzero algebraic tail.

## Facts & Assumptions

**Given:** The Euclidean norm and model-class definitions of
[[def-tdmath-stable-power-tempered-particle-model]], $d\ge1$, and
$\epsilon>0$.

[F1] [[def-tdmath-stable-power-tempered-particle-model]]: stability means a
uniform lower bound $U_N\ge-BN$, and power tempering is the displayed two-sided
absolute tail bound.

[F2] [[def-real-power]] defines $r^s$ for $r>0$ and real $s$;
[[thm-real-power-continuity-and-derivatives]] gives continuity in the positive
base.

## Proof

1.1 The norm is continuous, so on $\mathbb R^d\setminus\{0\}$ the function
$x\mapsto\|x\|_2^{-d-\epsilon}$ is continuous by [F2]. The complement of
$\{0\}$ is Borel and $\{0\}$ is closed, so the piecewise function is Borel;
it is even because $\|-x\|_2=\|x\|_2$. For $\|x\|_2\ge1$ it satisfies the
tail bound with $C=1$ and $R=1$. [given, F1, F2]

2.1 Every pair term is nonnegative or $+\infty$. Thus every finite pair sum
satisfies $U_N\ge0$, so the stability constant is $B=0$. This proves the
claimed model-class membership. [F1, given, algebra] ∎
