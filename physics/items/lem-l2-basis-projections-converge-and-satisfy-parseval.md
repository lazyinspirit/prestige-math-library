---
id: lem-l2-basis-projections-converge-and-satisfy-parseval
kind: lemma
title: Complete orthonormal bases give norm-convergent projections and Parseval
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps: [def-hilbert-space, def-real-and-complex-inner-product-space, lem-pythagorean-theorem-and-finite-orthogonal-sums]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, §2.1, Theorems 2.2–2.4, printed pp.49–51"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement

Let $H$ be a real Hilbert space and let $(e_k)$ be a finite or countable
orthonormal family whose finite linear span is dense in $H$. Here
orthonormal means $\langle e_j,e_k\rangle_H=1$ when $j=k$ and $0$ otherwise;
density means every $x\in H$ is arbitrarily close in norm to a finite linear
combination of the $e_k$. For $x\in H$, define
$$P_Nx=\sum_{k\le N}\langle x,e_k\rangle_H e_k,$$
using all basis vectors once $N$ reaches the size of a finite family. Then
$P_Nx\to x$ in norm and
$$\|x\|_H^2=\lim_{N\to\infty}\sum_{k\le N}|\langle x,e_k\rangle_H|^2.$$

## Facts & Assumptions

**Given:** The real Hilbert space, orthonormal family, and density hypothesis in the Statement.

[F1] Pythagoras holds for finite orthogonal sums: if $u\perp v$, then
$\|u+v\|^2=\|u\|^2+\|v\|^2$
([[lem-pythagorean-theorem-and-finite-orthogonal-sums]]).

## Proof

**Given:** The objects and hypotheses in the Statement.

1.1 Fix $x\in H$ and $N$. Orthonormality gives $\langle x-P_Nx,e_j\rangle_H=0$ for each $j\le N$, so $x-P_Nx$ is orthogonal to both $P_Nx$ and every vector in the first-$N$ span. By [F1], $$\|x\|_H^2=\|P_Nx\|_H^2+\|x-P_Nx\|_H^2, \qquad \|P_Nx\|_H^2=\sum_{k\le N}|\langle x,e_k\rangle_H|^2.$$ For any $y$ in that span, $P_Nx-y$ also lies in the span and is orthogonal to $x-P_Nx$, hence $$\|x-y\|_H^2=\|x-P_Nx\|_H^2+\|P_Nx-y\|_H^2 \ge\|x-P_Nx\|_H^2.$$ Thus $P_Nx$ is a closest vector to $x$ in the first-$N$ span. [given, F1, algebra]

2.1 Let $\varepsilon>0$. By density choose a finite linear combination $y$ of the $e_k$ with $\|x-y\|_H<\varepsilon$, and choose $N$ at least as large as every index used in $y$. Then $y$ lies in the first-$N$ span, so step 1.1 gives $\|x-P_Nx\|_H\le\|x-y\|_H<\varepsilon$. Hence $P_Nx\to x$; the first identity in step 1.1 then gives the asserted Parseval limit. For a finite family, $P_Nx=x$ once all its vectors are included. [given, step 1.1, choose, algebra] ∎