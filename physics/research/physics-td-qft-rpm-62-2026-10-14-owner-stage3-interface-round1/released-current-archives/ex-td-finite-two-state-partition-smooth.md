---
id: ex-td-finite-two-state-partition-smooth
kind: example
title: Smooth free energy for a finite two-state model
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: A constructed two-state canonical model at finite positive temperature; the formulas are model predictions, not measured material properties or a thermodynamic-limit result.
dependency_level: 4
deps:
  - def-td-thermodynamic-limit-contract
  - def-td-si-quantities
  - def-tdmath-countable-canonical-model
  - def-real-exponential-function-and-e
  - def-natural-logarithm
  - thm-derivative-of-exponential
  - thm-logarithm-derivative-and-integral
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - thm-real-power-continuity-and-derivatives
dependency_roles:
  def-td-thermodynamic-limit-contract: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-tdmath-countable-canonical-model: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete lecture notes, §5.4.3"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S5
    - title: "Konstantin K. Likharev, Essential Graduate Physics: Statistical Mechanics, §4.1 First-order phase transitions"
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_%28Likharev%29/04%3A_Phase_Transitions/4.01%3A_First_order_phase_transitions
---

## Example

Let $X=\{0,1\}$ have energies $E(0)=0$ J and $E(1)=\epsilon$ J with $\epsilon>0$, both weights $g_i=1$, and $\beta=(k_BT)^{-1}>0$ in $\mathrm{J^{-1}}$. This illustrates the finite-state canonical-sum clause of [[def-td-thermodynamic-limit-contract]] and [[def-tdmath-countable-canonical-model]]; it supplies no thermodynamic-limit sequence. Its partition sum and free energy are
$$
Z(\beta)=1+e^{-\beta\epsilon},\qquad F(\beta)=-\beta^{-1}\log(1+e^{-\beta\epsilon}).
$$

## Facts & Assumptions

**Given:** The two-state set, energies, weights, and fixed $\epsilon>0$ in the Example; $T>0$ and $k_B>0$ use the SI convention of [[def-td-si-quantities]].

[F1] [[def-tdmath-countable-canonical-model]]: For a finite state set with finite energies and positive weights, the partition sum is the finite sum $\sum_i g_i e^{-\beta E_i}$; its admissible parameter set requires $0<Z<\infty$.

[F2] [[thm-derivative-of-exponential]] and [[thm-logarithm-derivative-and-integral]]: $(e^u)'=e^u u'$ for differentiable $u$, and $(\log y)'=y'/y$ when $y>0$.

[F3] [[thm-chain-rule]] and [[thm-algebra-of-derivatives]]: derivatives of compositions and finite sums/products have their usual formulas.

[F4] [[thm-real-power-continuity-and-derivatives]]: $T\mapsto T^{-1}$ is smooth on the open interval $(0,\infty)$.

## Verification

1.1 The finite sum gives $Z=1+e^{-\beta\epsilon}>1$, so $F$ is finite for every $\beta>0$. Differentiating with [F2] yields
$$
F'(\beta)=\frac{\log Z(\beta)}{\beta^2}+\frac{\epsilon e^{-\beta\epsilon}}{\beta Z(\beta)},
$$
whose terms are continuous on $\beta>0$. [given, F1, F2, F3, algebra]

2.1 Each derivative of $e^{-\beta\epsilon}$ is $(-\epsilon)^m e^{-\beta\epsilon}$ by induction on $m$, so $Z$ is C1 of every finite order. Since $Z>0$, repeated application of the logarithm derivative formula and quotient/product rules makes every derivative of $\log Z$ continuous on $\beta>0$. The same induction gives smoothness of $\beta^{-1}$ there. Thus $F=-\beta^{-1}\log Z$ is C1 of every finite order on $\beta>0$. The finite model has no nonanalytic free-energy point at positive finite temperature; this says nothing about a sequence limit. [F2, F3, F4, step 1.1, algebra] ∎
