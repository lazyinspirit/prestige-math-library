---
id: ex-td-compact-continuous-phase-mixture
kind: example
title: A compact two-generator mixture attains the d+1 support bound
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: A constructed finite two-generator mixture with a continuous concave entropy functional; its values are illustrative and are not observations.
dependency_level: 2
deps:
  - def-borel-sigma-algebra
  - def-probability-measure
  - def-tdmath-measure-integral
  - pthm-td-compact-continuous-phase-mixture
dependency_roles:
  def-borel-sigma-algebra: mathematical-premise
  def-probability-measure: mathematical-premise
  def-tdmath-measure-integral: mathematical-premise
  pthm-td-compact-continuous-phase-mixture: physical-result
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

Let $K=\{0,1\}\subset\mathbb R$ be the compact generator domain, with dimensionless coordinate $x$. On the convex ambient domain $[0,1]$, define the affine extension $\widetilde s(x)=s_0+a x$ and restrict it to $s=\widetilde s|_K$, where fixed $s_0,a>0$ have units $\mathrm{J\,mol^{-1}K^{-1}}$. For $x,y\in[0,1]$ and $t\in[0,1]$, $\widetilde s((1-t)x+ty)=(1-t)\widetilde s(x)+t\widetilde s(y)$, so the extension is concave. Take the barycenter to be $\bar x=\tfrac12$ and declare every Borel probability mixture on $K$ with that barycenter feasible.

## Facts & Assumptions

**Given:** The compact domain, entropy map, normalization, and feasible fixed-barycenter mixtures in the Example.

[F1] [[pthm-td-compact-continuous-phase-mixture]]: Under these compactness, continuity, barycenter, and feasibility hypotheses, an entropy-maximizing mixture exists with at most $d+1$ atoms, here $d=1$.

[F2] [[def-borel-sigma-algebra]], [[def-probability-measure]], and [[def-tdmath-measure-integral]]: A Borel probability measure on finite $K$ assigns nonnegative weights summing to one, and the integral of a simple function is the finite weighted sum of its values. The supplier [[pthm-td-compact-continuous-phase-mixture]] defines $\delta_x(A)=1$ when $x\in A$ and $0$ otherwise for Borel $A\subseteq K$.

## Verification

1.1 Write $w_0=P(\{0\})$ and $w_1=P(\{1\})$. By [F2], $w_0+w_1=1$ and the barycenter equation is $w_1=\tfrac12$. Hence the only feasible measure is $P_*=\tfrac12\delta_0+\tfrac12\delta_1$. [given, F2, algebra]

2.1 Its entropy per mole is the finite simple-function integral
$$
\int_Ks\,dP_*=\tfrac12s(0)+\tfrac12s(1)=\tfrac12s_0+\tfrac12(s_0+a)=s_0+\frac a2.
$$
Since it is the only feasible mixture, it attains the maximum. Its two support points equal $d+1$ for $d=1$, as in [F1]. [given, F1, F2, step 1.1, algebra] ∎
