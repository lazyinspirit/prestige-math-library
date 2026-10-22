---
id: cex-qftx-euler-class-loses-extension-data
kind: counterexample
title: "A vanishing Euler class does not imply a zero categorical line object"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - def-qftx-categorified-line-model
  - def-split-grothendieck-rings-of-type-a-soergel-categories
  - lem-euler-class-of-a-rouquier-complex-is-homotopy-invariant-and-multiplicative
  - def-complex-homotopy-and-contractibility-in-an-additive-category
dependency_roles:
  def-qftx-categorified-line-model: mathematical-premise
  def-split-grothendieck-rings-of-type-a-soergel-categories: mathematical-premise
  lem-euler-class-of-a-rouquier-complex-is-homotopy-invariant-and-multiplicative: mathematical-premise
  def-complex-homotopy-and-contractibility-in-an-additive-category: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Eugene Gorsky, Oscar Kivinen, José Simental, Algebra and geometry of link homology: Lecture notes from the IHES 2021 Summer School, Bull. London Math. Soc. 55 (2023), §3.1"
      url: "https://arxiv.org/pdf/2108.10356"
      locator: "§3.1, the homotopy category of bounded Soergel complexes and Rouquier complexes, printed pp. 544–545"
verification:
  precheck: pending
---

## Statement refuted

A bounded complex of graded type-A Soergel bimodules whose alternating class in the split Grothendieck ring is zero must be contractible in the homotopy category.

## Statement references

[[def-qftx-categorified-line-model]]

[[def-split-grothendieck-rings-of-type-a-soergel-categories]]

[[lem-euler-class-of-a-rouquier-complex-is-homotopy-invariant-and-multiplicative]]

## Facts & Assumptions

**Given:** $n\ge2$, $R=\mathbb Q[x_1,\ldots,x_n]$, and the type-A Soergel category with unit bimodule $R$.

[F1] [[def-qftx-categorified-line-model]]: $R$ is the unit object of $\mathrm{SBim}_n$, and bounded cochain complexes are considered in $K^b(\mathrm{SBim}_n)$.

[F2] [[def-split-grothendieck-rings-of-type-a-soergel-categories]]: the split Grothendieck group identifies isomorphic objects and has $[X\oplus Y]=[X]+[Y]$; the unit bimodule $R$ is a nonzero object.

[F3] [[lem-euler-class-of-a-rouquier-complex-is-homotopy-invariant-and-multiplicative]]: the Euler class of a bounded complex is $\chi(C)=\sum_m(-1)^m[C^m]$.

[F4] [[def-complex-homotopy-and-contractibility-in-an-additive-category]]: a contracting homotopy satisfies $1_{C^m}=d^{m-1}h^m+h^{m+1}d^m$ in every cochain degree $m$.

[A1] Take $C^0=C^1=R$, $d^0=0$, with all other terms and differentials zero; use the unshifted grading on both copies of $R$. Cohomology means $H^m(C)=\ker(d^m)/\operatorname{im}(d^{m-1})$.

## Counterexample

1.1 The complex $C$ is bounded and its two nonzero terms are objects of $\mathrm{SBim}_n$. Its Euler class is $\chi(C)=[R]-[R]=0$ by [F2] and [F3]. [A1, F1, F2, F3, algebra]

1.2 Since every differential is zero, $H^0(C)=R$ and $H^1(C)=R$. Each is nonzero because $1\in\mathbb Q[x_1,\ldots,x_n]$ is nonzero. [A1, F1, algebra]

2.1 If $C$ were contractible, the equation of [F4] in degree $0$ would give $1_R=d^{-1}h^0+h^1d^0=0$, contradicting $1_R\ne0$. Thus $C$ is not contractible although its Euler class vanishes, refuting the Statement. [A1, F4, step 1.1, step 1.2] ∎
