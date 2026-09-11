---
id: thm-existence-and-uniqueness-of-parallel-sections
kind: theorem
title: "Existence and uniqueness of parallel sections"
status: draft
origin: pipeline
deps: ["def-parallel-section-along-a-curve","lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval","thm-lebesgue-number-lemma"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

Let $\gamma:I\to M$ be smooth on an interval, with smooth one-sided data at included endpoints. For every $t_0\in I$ and $v_0\in E_{\gamma(t_0)}$ there is exactly one parallel section $V$ on all of $I$ with $V(t_0)=v_0$. The same holds for a piecewise smooth curve on a compact interval, with continuity at its finitely many corners. A singleton carries its prescribed vector. No AC is required for a supplied connection and curve.

## Facts & Assumptions

**Given:** The supplied connection, curve, initial parameter and initial vector.

[F1] Parallel sections solve the local homogeneous linear system and are continuous across corners ([[def-parallel-section-along-a-curve]]).

[F2] Continuous linear matrix ODEs with specified initial matrix have unique solutions on the whole prescribed compact interval ([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]).

[F3] An open cover of a compact metric space has a positive Lebesgue number ([[thm-lebesgue-number-lemma]]).

## Proof

1.1 On a compact curve segment contained in a frame domain, the matrix $-\omega(\dot\gamma)$ is continuous, so [F2] solves $v'=-\omega(\dot\gamma)v$ for every initial vector. To pass from its matrix statement to vectors when rank $r>0$, use an initial $r$ by $r$ matrix with first column $v_0$ and all other columns zero, and take its first solution column. Any second vector solution can be inserted as that column with zero other columns, so matrix uniqueness proves vector uniqueness. Rank zero has the unique empty coefficient vector. If the coefficient matrix is smooth, $v'=Cv$ inductively makes $v$ smooth, including one-sided derivatives. [F1, F2]

2.1 For a compact nondegenerate interval $[a,b]$, pull back all frame domains to an open cover of $[a,b]$. By [F3] choose a mesh smaller than its Lebesgue number and refine to include $t_0$ and all finitely many curve corners. Every closed mesh segment lies in one frame domain. Select frames only for these finitely many segments. Starting at $t_0$, solve successively to the right and left with the preceding endpoint value as initial data. Step 1.1 gives solutions on each entire closed segment. They agree at common endpoints, giving a continuous piecewise smooth section. At an artificial subdivision point where the curve is smooth, local ODE uniqueness on a neighbourhood identifies both pieces with one local smooth solution through that value, so the section is smooth there. [F3, step 1.1]

3.1 Any two solutions with the same initial value agree successively on every mesh segment by step 1.1. A common refinement therefore proves independence of the mesh and frames. On a general nondegenerate interval, solve on every compact subinterval containing $t_0$; two such solutions agree on their intersection by compact-interval uniqueness. Their unique union is a solution everywhere, since each interior point has a neighbourhood in one such compact interval and each included endpoint has a one-sided neighbourhood. This does not require a selected exhaustion or a countable choice of frames. [step 1.1, step 2.1]

4.1 On a singleton the only section with value $v_0$ is that vector by convention; an empty interval admits no initial parameter and makes the quantified statement vacuous. Zero initial vector gives the zero solution by uniqueness. Constant curves give constant vectors in their fixed fibre frame. Thus all stated cases, including corner and endpoint initial times, are covered. [F1, step 3.1] ∎
