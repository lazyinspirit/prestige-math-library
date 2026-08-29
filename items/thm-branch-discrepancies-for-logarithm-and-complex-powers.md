---
id: thm-branch-discrepancies-for-logarithm-and-complex-powers
kind: theorem
title: "Different branches shift logarithms by $2\\pi i k$ and complex powers by exponential factors"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-power-from-holomorphic-logarithm-branch, thm-kernel-and-fibres-of-complex-exponential, thm-complex-exponential-addition-and-real-extension, thm-continuous-image-of-a-connected-space, cor-complex-differentiability-implies-continuity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Statement

Let $V\subseteq\mathbb C$ be a connected open set with $0\notin V$, and let $L_1,L_2:V\to\mathbb C$ be two holomorphic logarithm branches of $z$ on $V$. There is a unique integer $k\in\mathbb Z$ with

$$L_1(z)-L_2(z)=2\pi i k\qquad\text{for every }z\in V.$$

Consequently, for every $\alpha\in\mathbb C$ the branch powers of [[def-complex-power-from-holomorphic-logarithm-branch]] differ by

$$z^\alpha_{L_1}=e^{2\pi i\alpha k}\,z^\alpha_{L_2}\qquad(z\in V).$$

Additive and multiplicative branch laws are subject to exactly this discrepancy: a claimed identity $\log(zw)=\log z+\log w$ or $(z^\alpha)^\beta=z^{\alpha\beta}$ between branch values holds only after the relevant discrepancy vanishes on the points involved, and the companion page exhibits the principal-branch failures.

## Facts & Assumptions

**Given:** A connected open $V\subseteq\mathbb C$ with $0\notin V$, and holomorphic logarithm branches $L_1,L_2$ of $z$ on $V$; $\alpha\in\mathbb C$.

[F1] A holomorphic logarithm branch $L$ of $z$ on $V$ satisfies $\exp(L(z))=z$ for every $z\in V$, and its branch power is $z^\alpha_L:=\exp(\alpha L(z))$ ([[def-complex-power-from-holomorphic-logarithm-branch]]).

[F2] $\exp z=\exp w$ exactly when $z-w\in2\pi i\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

[F3] For all $u,v\in\mathbb C$, $\exp(u+v)=\exp u\,\exp v$ ([[thm-complex-exponential-addition-and-real-extension]]).

[F4] A continuous image of a connected space is connected ([[thm-continuous-image-of-a-connected-space]]).

[F5] A complex differentiable function is continuous ([[cor-complex-differentiability-implies-continuity]]).

## Proof

**Proof technique:** direct.

1.1 [F1] gives $\exp(L_1(z))=z=\exp(L_2(z))$; by [F2], $L_1(z)-L_2(z)\in2\pi i\mathbb Z$. [F1, F2, given]

2.1 $L_1-L_2$ is continuous by [F5], so [F4] makes its image connected; step 1.1 gives one integer $k$ with $L_1-L_2\equiv2\pi ik$ on $V$. [F4, F5, step 1.1]

3.1 Substituting step 2.1 into [F1]: $z^\alpha_{L_1}=\exp(\alpha L_2(z)+2\pi i\alpha k)=e^{2\pi i\alpha k}\exp(\alpha L_2(z))=e^{2\pi i\alpha k}z^\alpha_{L_2}$, using [F3] in the middle equality. [F1, F3, step 2.1, algebra] ∎
