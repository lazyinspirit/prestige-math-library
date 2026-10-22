---
id: ex-td-phase-fraction-lever-rule
kind: example
title: Phase fractions from an additive molar volume
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: A constructed one-component, two-phase separated mixture with additive volume and fixed total amount; no coexistence data or measured material values are asserted.
dependency_level: 1
deps:
  - def-td-phase-and-coexistence-domain
  - def-finite-sum
  - post-td-bulk-additivity
dependency_roles:
  def-td-phase-and-coexistence-domain: formulation-prerequisite
  def-finite-sum: mathematical-premise
  post-td-bulk-additivity: physical-assumption
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete lecture notes, §5.1.1"
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

At a stipulated common $T,p$, let one mole of a component occupy phase $\alpha$ with molar volume $v_\alpha=1.0\times10^{-3}\,\mathrm{m^3\,mol^{-1}}$ or phase $\beta$ with $v_\beta=4.0\times10^{-3}\,\mathrm{m^3\,mol^{-1}}$. For this constructed model, additionally adopt amount-independent molar volumes at this fixed $(T,p)$: $V_i=n_iv_i$ for every admitted amount of phase $i$, with $v_i$ equal to the displayed one-mole value. This is an explicit constitutive scaling assumption, separate from additivity between phases. Consider a separated mixture of total amount $N=2\,\mathrm{mol}$ and total volume $V=5.0\times10^{-3}\,\mathrm{m^3}$; use the volume convention of *Phase branches and coexistence domains* and additivity of *Additive separated systems and tagged bulk scaling*.

## Example references

[[def-td-phase-and-coexistence-domain]]

[[post-td-bulk-additivity]]

## Facts & Assumptions

**Given:** Both phases are present, their molar volumes and the mixture totals are as in the Example, and volume and amount are additive for this separated compound, and the additional constitutive assumption $V_i=n_iv_i$ holds at the fixed $(T,p)$ for each admitted positive phase amount.

[F1] [[def-td-phase-and-coexistence-domain]] and [[post-td-bulk-additivity]]: For one component, the phase amounts add to $N$, and the separated phase volumes add to $V$.

## Verification

1.1 Let $\lambda_\beta:=n_\beta/N$ and $\lambda_\alpha:=n_\alpha/N$. Positivity and amount additivity give $\lambda_\alpha+\lambda_\beta=1$, with both fractions in $(0,1)$. The adopted $V_i=n_iv_i$ relation and volume additivity give
$$
\bar v:=\frac VN=\lambda_\alpha v_\alpha+\lambda_\beta v_\beta.
$$
All terms have units $\mathrm{m^3\,mol^{-1}}$. [given, F1, algebra]

2.1 Here $\bar v=2.5\times10^{-3}\,\mathrm{m^3\,mol^{-1}}$. Solving the affine relation in step 1.1 yields
$$
\lambda_\beta=\frac{\bar v-v_\alpha}{v_\beta-v_\alpha}=\frac12,\qquad \lambda_\alpha=\frac{v_\beta-\bar v}{v_\beta-v_\alpha}=\frac12.
$$
The fractions are positive and sum to one, so $n_\alpha=n_\beta=1\,\mathrm{mol}$ satisfies the given total amount and volume. [given, step 1.1, algebra] ∎
