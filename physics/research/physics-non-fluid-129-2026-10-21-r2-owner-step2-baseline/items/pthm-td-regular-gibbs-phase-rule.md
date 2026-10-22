---
id: pthm-td-regular-gibbs-phase-rule
kind: physics-theorem
title: Local regular dimension of a reacting Gibbs phase-coexistence manifold
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: Interior compositions of finitely many C1 intensive phase branches with energy, volume, all listed species exchanges, and internal reactions allowed in every phase with auxiliary states fixed along the stipulated pairwise transfer curves and vanishing derivative of total auxiliary entropy along each stipulated reaction curve at the coexistence point, at a solution where the combined coexistence-and-affinity Jacobian has a nonsingular minor; phase amounts and externally fixed variables are excluded, and the conclusion is not asserted where a C1 phase chart fails, composition lies on the simplex boundary, or the nonsingular-minor hypothesis fails.
dependency_level: 2
deps:
  - def-td-phase-and-coexistence-domain
  - def-td-equilibrium-state-domain
  - def-td-temperature-pressure-chemical-potential
  - pthm-td-intensive-coexistence-conditions
  - post-td-bulk-additivity
  - post-td-entropy-maximum
  - def-td-isolated-compound-feasible-set
  - thm-tdmath-local-implicit-rank
dependency_roles:
  def-td-phase-and-coexistence-domain: formulation-prerequisite
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-temperature-pressure-chemical-potential: formulation-prerequisite
  pthm-td-intensive-coexistence-conditions: physical-result
  post-td-bulk-additivity: physical-assumption
  post-td-entropy-maximum: physical-assumption
  def-td-isolated-compound-feasible-set: formulation-prerequisite
  thm-tdmath-local-implicit-rank: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
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

## Statement

Assume the entropy of each phase is $C^2$ on its physical state chart and its derivative-defined temperature at the endpoint is finite and positive. The equation-set dimension below concerns this smooth interior state only.

Let $C\ge1$ be the number of named species, $P\ge1$ the number of coexisting phase branches, and $R\ge0$ the number of independent internal reaction directions. Consider an attained global entropy-maximizing endpoint on the exact feasible set of *Isolated compound and feasible equilibrium set*. For each phase $\alpha$, use an intensive phase branch from *Phase branches and coexistence domains* and an interior composition $x^\alpha\in\Delta_{C-1}^{\circ}$. Let each branch chemical-potential map
$$
\mu^\alpha(T,p,x^\alpha)=(\mu_1^\alpha,\ldots,\mu_C^\alpha)
$$
be $C^1$ on a common open domain
$$
\mathcal U=(0,\infty)\times\mathbb R\times(\Delta_{C-1}^{\circ})^P \subseteq\mathbb R^{\,n},\qquad n=2+P(C-1).
$$
Let $\nu^1,\ldots,\nu^R\in\mathbb R^C$ be linearly independent, dimensionless stoichiometric vectors, with extents measured in moles. Assume that, for every phase pair and each of energy, volume, and every named species, the feasible set contains the pairwise transfer curve for all sufficiently small transfers of either sign, varying only the selected coordinate in those two phases with opposite increments and holding every other state coordinate of both phases, all other phases, and all auxiliaries fixed. For each phase $\alpha$ and reaction $r$, assume the feasible set contains the complete endpoint curve with species amounts $n^\alpha(t)=n^{\alpha,*}+t\nu^r$ for all sufficiently small extents $t$ of either sign, while that phase's energy and volume, all other reaction extents, and every other phase's state remain fixed at their coexistence values. Require the total entropy contribution of all retained auxiliaries along each such reaction curve to be differentiable at zero extent with derivative zero. Every auxiliary state may be fixed as a sufficient special case, but entropy-neutral varying auxiliary or work-device states are permitted. Phase equilibrium imposes $\mu_i^\alpha-\mu_i^1=0$ for $1\le i\le C$, $2\le\alpha\le P$; internal reaction equilibrium imposes $(\nu^r)^{\mathsf T}\mu^\alpha=0$ in every phase for $1\le r\le R$. On the phase-equality locus these are the same $R$ equations in each phase, so count them once using phase 1. Put $q:=C(P-1)$ and $m:=q+R$. If $m=0$ (equivalently $P=1,R=0$), no equation is imposed and the local zero set is the whole chart, of dimension $n=C+1=C-P+2-R$. If $m\ge1$ and the combined equation map has an invertible $m\times m$ derivative minor at the solution, with $m\le n$, then the local zero set of these first-order coexistence-and-affinity equations is a graph of dimension
$$
n-q-R=C-P+2-R.
$$
This is the dimension of the equation zero set in intensive coordinates only; phase amounts and their extensive conservation constraints are not counted, and the actual stable-coexistence set may be a proper subset after additional stability constraints. If the nonsingular-minor condition fails, no dimension formula is asserted.

## Statement references

[[def-td-isolated-compound-feasible-set]]

[[def-td-phase-and-coexistence-domain]]

## Facts & Assumptions

**Given:** Finite integers $C,P,R$, the open positive-temperature, interior-composition chart, C1 branch chemical-potential maps, a coexistence solution, the stipulated bilateral pairwise transfer curves with auxiliary states fixed and reaction curves with zero derivative of total auxiliary entropy at the coexistence point, independent stoichiometric directions, and the stated nonsingular-minor hypothesis. Mole fractions are dimensionless; each $\mu_i^\alpha$ has units $\mathrm{J\,mol^{-1}}$.

[A1] [[def-td-phase-and-coexistence-domain]]: Each branch is a model-supplied C1 intensive phase chart, so derivative-defined chemical potentials are independent of the phase amount and are C1 maps of $(T,p,x^\alpha)$.

[A2] Regularity hypothesis: Each phase entropy is C2 in its physical state coordinates at the endpoint, and each derivative-defined temperature is finite and positive.

[F1] [[pthm-td-intensive-coexistence-conditions]]: At an attained entropy-maximizing coexistence point, pairwise energy and volume exchange feasible in both directions with every other state coordinate fixed imply equal positive temperature and pressure, and the corresponding bilateral species transfers imply equal derivative-defined chemical potentials across phases.

[F2] [[post-td-entropy-maximum]] and [[def-td-isolated-compound-feasible-set]]: The adopted complete-compound entropy is the sum of the separated phase entropies and the explicitly supplied auxiliary entropies, and the stable endpoint is a global maximum on its exact feasible set. Along each stipulated pairwise transfer curve the auxiliary states are fixed. Along each reaction curve the total auxiliary entropy is assumed differentiable at zero extent with derivative zero; individual auxiliary states and entropy maps need not be constant or individually differentiable.

[F3] [[def-td-temperature-pressure-chemical-potential]]: On each single-phase chart, $S_{n_j}=-\mu_j/T$ at fixed energy, volume, and other species amounts; branch temperatures are positive.

[L1] [[thm-tdmath-local-implicit-rank]]: If a C1 map $F:U\to\mathbb R^m$ is defined on an open set $U\subseteq\mathbb R^n$, vanishes at $z_*$, and has an invertible $m\times m$ derivative minor there, then its local zero set is a graph of dimension $n-m$. This statement has no sign restriction on the coordinates of the open set; its current carrier is a draft with a complete conditional proof, not an independent acceptance stamp.

## Proof

1.1 For $P\ge2$, define the phase-equality components $F_{i,\alpha}:=\mu_i^\alpha-\mu_i^1$ for $1\le i\le C$, $2\le\alpha\le P$. There are exactly $q=C(P-1)$ such scalar equations. By [A1], each $\mu_i^\alpha$ is C1 on the common open domain, so their finite differences are C1. By [F1], these equations hold at the stated physical coexistence point when the corresponding species exchanges are admitted; [A2] supplies the entropy regularity and positive temperatures required by that supplier. [given, A1, A2, F1, algebra]

1.2 Fix any phase $\alpha$ and reaction direction $\nu^r$. Use the stipulated complete endpoint curve with $n^\alpha(t)=n^{\alpha,*}+t\nu^r$, holding its energy and volume, all other reaction extents, and every other phase's state fixed; $t$ is a small extent in moles. By the stated bilateral feasibility, this curve is admitted for both signs of sufficiently small $t$. The total entropy has a local maximum at $t=0$ by [F2]. Along this curve, the other phases contribute constants; the total auxiliary entropy is differentiable at zero extent with derivative zero by the stated hypothesis. Thus the total entropy is differentiable there by [A2], and its derivative equals that of phase $\alpha$. No regularity of the individual auxiliary entropy maps is required. The right difference quotients are nonpositive and the left difference quotients are nonnegative; the derivative is therefore zero. The complete additive entropy formula in [F2] and the partials in [F3] give
$$
0=\frac{dS_{\mathrm{tot}}}{dt}(0)=\sum_j S_{\alpha,n_j}\nu_j^r=-\frac{(\nu^r)^{\mathsf T}\mu^\alpha}{T}.
$$
Since $T>0$, $(\nu^r)^{\mathsf T}\mu^\alpha=0$ in every phase. The equations are C1 because they are finite linear combinations of the C1 branch maps. By [F1], phase equalities make the affinity equation identical across phases, so count only the $R$ equations in phase 1. The combined map therefore has $q+R$ equations. [given, A1, A2, F1, F2, F3, construct, algebra]

1.3 The ambient coordinate dimension is $n=2+P(C-1)$. If $q+R=0$, then $P=1$ and $R=0$, so there are no phase-equality or reaction-affinity equations. The local zero set is all of the open chart and has dimension $n=2+(C-1)=C-P+2-R$. [given, algebra]

2.1 If $q+R\ge1$, apply [L1] on the stated open chart $\mathcal U=(0,\infty)\times\mathbb R\times(\Delta_{C-1}^{\circ})^P$ to the combined C1 equation map using the stated invertible minor. The local graph theorem applies on this full chart, including all real pressures in the statement. Its local zero set has dimension
$$
n-q-R=2+P(C-1)-C(P-1)-R=C-P+2-R.
$$
This conclusion is conditional on the full-rank minor; it does not follow from equation counting alone. Additional stability constraints may reduce the physical coexistence set. [given, L1, step 1.1, step 1.2, algebra] ∎

## Remarks

The zero-reaction case is $R=0$. On composition boundaries the open-simplex chart fails; for reactions there, one-sided tangent inequalities replace the interior affinity equalities.
