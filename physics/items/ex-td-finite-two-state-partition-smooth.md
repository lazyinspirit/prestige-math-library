---
id: ex-td-finite-two-state-partition-smooth
kind: example
title: Smooth free energy for a finite two-state model
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: A constructed two-state canonical model at finite positive temperature; the formulas are model predictions, not measured material properties or a thermodynamic-limit result.
dependency_level: 4
deps:
  - thm-natural-logarithm-laws
  - lem-exponential-series-has-infinite-radius
  - thm-log-one-plus-x-power-series
  - thm-real-analytic-functions-closed-under-algebra-quotients-and-composition
  - thm-power-series-sums-are-real-analytic
  - def-real-analytic-function
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
  thm-natural-logarithm-laws: mathematical-premise
  lem-exponential-series-has-infinite-radius: mathematical-premise
  thm-log-one-plus-x-power-series: mathematical-premise
  thm-real-analytic-functions-closed-under-algebra-quotients-and-composition: mathematical-premise
  thm-power-series-sums-are-real-analytic: mathematical-premise
  def-real-analytic-function: mathematical-premise
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
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
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

[F4] [[thm-real-power-continuity-and-derivatives]]: for every real $a$, $x\mapsto x^a$ is continuous and differentiable on $(0,\infty)$, with derivative $ax^{a-1}$. Higher regularity of the reciprocal is deduced locally below.

[F5] [[def-real-analytic-function]]: real analyticity means a convergent local real power series. [[lem-exponential-series-has-infinite-radius]] and [[thm-power-series-sums-are-real-analytic]] make the exponential real analytic. [[thm-log-one-plus-x-power-series]] supplies $\log(1+x)=\sum_{n\ge1}(-1)^{n+1}x^n/n$ for $|x|<1$, and [[thm-real-analytic-functions-closed-under-algebra-quotients-and-composition]] supplies the indicated algebra, nonzero quotients and local compositions. [[thm-natural-logarithm-laws]] gives $\log(ab)=\log a+\log b$.

## Verification

1.1 The finite sum gives $Z=1+e^{-\beta\epsilon}>1$, so $F$ is finite for every $\beta>0$. Differentiating with [F2] yields
$$
F'(\beta)=\frac{\log Z(\beta)}{\beta^2}+\frac{\epsilon e^{-\beta\epsilon}}{\beta Z(\beta)},
$$
whose terms are continuous on $\beta>0$. [given, F1, F2, F3, algebra]

2.1 Each derivative of $e^{-\beta\epsilon}$ is $(-\epsilon)^m e^{-\beta\epsilon}$ by induction on $m$, so $Z$ is $C^\infty$. Since $Z>0$, repeated application of the logarithm derivative formula and quotient/product rules makes every derivative of $\log Z$ continuous on $\beta>0$. The same induction gives smoothness of $\beta^{-1}$ there. Thus $F=-\beta^{-1}\log Z$ is $C^\infty$ on $\beta>0$. To establish the stronger analytic conclusion, fix $\beta_0>0$ and $Z_0=Z(\beta_0)>0$. The exponential series and [F5] make $Z$ real analytic. On a sufficiently small neighborhood of $\beta_0$, $h(\beta):=(Z(\beta)-Z_0)/Z_0$ has $|h|<1$, and $\log Z(\beta)=\log Z_0+\log(1+h(\beta))$ by the logarithm law. The convergent log series and local analytic composition make this real analytic. The reciprocal $\beta^{-1}$ is analytic on $\beta>0$ by the nonzero-quotient clause, so $F$ is real analytic there by [F5]. Since $T\mapsto(k_BT)^{-1}$ is likewise an analytic nonzero quotient on $T>0$, the same holds in the temperature variable. Thus no nonanalytic free-energy point occurs at positive finite temperature; this says nothing about a sequence limit. [F2, F3, F4, F5, step 1.1, algebra] ∎
