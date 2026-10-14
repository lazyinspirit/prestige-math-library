---
id: cex-rademacher-orthogonality-does-not-imply-independence-or-exact-t-f
kind: counterexample
title: "Rademacher errors show orthogonality alone gives neither independence nor exact t and F laws"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-student-t-and-f-laws
  - lem-positive-df-chi-square-has-density-and-regular-cdf
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
verification:
  precheck: pass
---

## Statement refuted

"An orthogonal transformation preserves independence for arbitrary independent coordinates, and orthogonality alone guarantees the exact normal-theory t and F laws."

## Facts & Assumptions

**Given:** The Rademacher variables and the t and F laws from positive-degree normal and chi-square ratios.

[A1] The Axiom of Choice is assumed by the imported t and F definitions and the positive-degree chi-square lemma used to establish positivity of their denominators; the finite Rademacher calculations themselves use no choice. [[def-axiom-of-choice]] [[def-student-t-and-f-laws]] [[lem-positive-df-chi-square-has-density-and-regular-cdf]]

[F1] A $t_k$ law uses an independent standard normal divided by a positive-degree chi-square square root, and an $F_{r,s}$ law is a ratio of positive-degree chi-square variables; both definitions assign zero on denominator-zero sets, which have probability zero for these Gaussian laws. [[def-student-t-and-f-laws]] [[lem-positive-df-chi-square-has-density-and-regular-cdf]]

## Counterexample

**Proof technique:** direct.

**Given:** Assume the Axiom of Choice for the imported $t$ and $F$ laws. Take $\Omega=\{-1,1\}^3$ with the uniform probability measure, assigning mass $1/8$ to each point, and define $R_i(\omega)=\omega_i$ for $i=1,2,3$. Each sign triple has probability $(1/2)^3$, so the coordinate maps are independent Rademacher variables.

1.1 For two coordinates, apply $U=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ to $(R_1,R_2)^T$. The events $A=\{|(UR)_1|=\sqrt2\}$ and $B=\{|(UR)_2|=\sqrt2\}$ each have probability $1/2$, while $A\cap B=\varnothing$: $A$ occurs exactly when $R_1=R_2$ and $B$ exactly when $R_1=-R_2$. If the transformed coordinates were independent, $P(A\cap B)$ would be $1/4$, contradicting its actual value $0$. [given, algebra]

1.2 For three independent Rademacher observations, the event $E=\{R_1=R_2=R_3\}$ has probability $2/8=1/4$. On $E$, $\bar R=\pm1$ and $S^2=\frac12\sum_{i=1}^3(R_i-\bar R)^2=0$, so the usual studentized mean $\bar R/(S/\sqrt3)$ is not a real-valued statistic on an event of positive probability. It therefore cannot have the $t_2$ law, which is a probability law on $\mathbb R$ with a positive chi-square denominator almost surely by [A1, F1]. [given, A1, F1, algebra]

2.1 For $n=2$, take the full fixed design with one intercept column $(1,1)^T$ and the reduced zero-dimensional design whose mean space is $\{0\}$. Under the null intercept $0$, the errors are $(R_1,R_2)^T$. On $E_+=\{R_1=R_2\}$, which has probability $1/2$, the full-model residual sum is $RSS_U=0$ while the reduced residual sum is $RSS_R=2$. Thus the nested F ratio has positive numerator and zero denominator (or is $+\infty$ under extended-value convention), so it is not an almost surely finite $F_{1,1}$ variable. [given, A1, F1, algebra] ∎
