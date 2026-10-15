---
id: cex-tdmath-noncompact-mixture-nonattainment
kind: counterexample
title: "Noncompact mixtures can have an unattained energy infimum"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps: ["prop-the-nonnegative-integral-agrees-with-the-simple-integral","prop-order-and-scalar-rules-for-the-nonnegative-integral","def-integral-of-a-nonnegative-simple-function","def-tdmath-mixture-generator-space-and-energy","thm-tdmath-compact-continuous-mixture-attainment"]
justified_by: []
dependency_roles: {"prop-the-nonnegative-integral-agrees-with-the-simple-integral":"mathematical-premise","prop-order-and-scalar-rules-for-the-nonnegative-integral":"mathematical-premise","def-integral-of-a-nonnegative-simple-function":"mathematical-premise","def-tdmath-mixture-generator-space-and-energy":"mathematical-premise","thm-tdmath-compact-continuous-mixture-attainment":"mathematical-premise"}
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture text"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S1
      locator: "Complete author-hosted HTML chapter read; §§1.2–1.4, finite canonical and microcanonical ensemble conventions."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics"
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
      locator: "Complete 635-page lecture notes retrieved and read; §§4.2–4.6, pp.192–217, ensembles, microcanonical phase space, quantum density matrices, and traces."
---

## Statement refuted

For every nonempty Borel generator set $K$ and continuous energy $a:K\to\mathbb R$ bounded below, the unconstrained infimum of $\int_Ka\,dP$ over Borel probability measures on $K$ is attained whenever it is finite, without a compactness or coercivity hypothesis.

## Example

Extend the objective in [[def-tdmath-mixture-generator-space-and-energy]] to the noncompact Borel generator set $K=(0,1)$ with energy $a(x)=x$, and impose no barycenter constraint. The infimum of $\int_Kx\,dP(x)$ over Borel probability measures is $0$, but no probability measure attains it. This shows that a general unconstrained attainment claim needs compactness or a substitute such as coercivity; the example makes no assertion about the barycenter-constrained theorem [[thm-tdmath-compact-continuous-mixture-attainment]].

## Facts & Assumptions

**Given:** The explicit noncompact set, continuous energy, and unconstrained Borel-probability objective.

[A1] $K=(0,1)$, $a(x)=x$, and $P$ ranges over all Borel probability measures on $K$ with objective $\int_Kx\,dP$.

[F1] [[def-tdmath-mixture-generator-space-and-energy]] defines the mean energy $\bar a(P)=\int a\,dP$; its constrained mixture energy $a_{\rm mix}$ is an infimum of those means at a prescribed barycenter. Here [A1] extends only the mean-energy objective to the stated noncompact set and omits the constraint. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]] gives monotonicity, and [[def-integral-of-a-nonnegative-simple-function]] together with [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]] gives $\int c\mathbf1_E\,dP=cP(E)$ for $c\ge0$. Since $0<x<1$ and $P(K)=1$, these rules also give $\int_Kx\,dP\le1<\infty$.

[F2] [[thm-tdmath-compact-continuous-mixture-attainment]]: compactness of the generator space is among the hypotheses of its attained-minimum result.

## Counterexample



**Given:** [A1] and the mixture objective [F1].

1.1 For each integer $n\ge2$, the set $E_n=[1/n,1)$ is Borel, and $\bigcup_{n\ge2}E_n=(0,1)$. Since $P((0,1))=1$, at least one $E_n$ has positive probability: otherwise the disjoint sets $E_2,E_3\setminus E_2,E_4\setminus E_3,\ldots$ all have probability zero, and countable additivity would give $P((0,1))=0$. On $E_n$, $x\ge1/n$, while elsewhere $x\ge0$, so $$\int_{(0,1)}x\,dP\ge \frac1nP(E_n)>0.$$ Therefore every admissible probability has strictly positive objective. [A1, F1, algebra]

2.1 The point mass $\delta_{1/n}$ at $1/n$ is a Borel probability on $(0,1)$ and has objective $1/n$. These values tend to zero, while 1.1 shows all objectives are positive. Hence the infimum is zero and is not attained. The generator set is noncompact, so this conclusion does not contradict the compact result [F2]; it shows why an attainment theorem must retain its compactness/coercivity hypotheses. [A1, F1, F2, step 1.1] ∎
