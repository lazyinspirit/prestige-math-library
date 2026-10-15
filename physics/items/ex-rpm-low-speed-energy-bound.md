---
id: ex-rpm-low-speed-energy-bound
kind: example
title: "One-tenth-light-speed kinetic remainder"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 7
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - lem-rpm-low-speed-remainders
  - pthm-rpm-inverse-momentum-and-work
dependency_roles:
  lem-rpm-low-speed-remainders: mathematical-premise
  pthm-rpm-inverse-momentum-and-work: physical-result
physical_scope: "A conditional pointwise calculation for a massive particle in one flat inertial frame when the model state is stipulated to have speed at most one tenth of c. It reports no measurement, apparatus precision, or trajectory approximation."
empirical_premises: []
sources:
  references:
    - title: "OpenStax, University Physics Volume 3, complete textbook, Chapter 5"
      url: "https://openstax.org/books/university-physics-volume-3/pages/5-8-relativistic-momentum"
      locator: "§§5.8–5.9, relativistic momentum and energy for an inertial-frame massive particle."
    - title: "David Tong, General Relativity, complete author-hosted lecture notes"
      url: "https://davidtong.org/teaching/general-relativity/grhtml/S1"
      locator: "§§1.1.1 and 1.2.6: the massive-particle action, energy and four-momentum in relativistic mechanics."
---

## Example

Let a massive particle in a named inertial frame have constant mass $m>0$, speed $|v|\le c/10$, Lorentz factor $\gamma=(1-|v|^2/c^2)^{-1/2}$, observer energy $E=\gamma mc^2$, and kinetic energy $T=E-mc^2$ as in [[pthm-rpm-inverse-momentum-and-work]]. Treat the speed bound as a stipulated state condition. Then

$$0\le T-\frac12m|v|^2\le\frac{3m|v|^4}{8c^2(99/100)^{5/2}}.$$

## Facts & Assumptions

**Given:** A massive inertial-frame state with constant $m>0$, $c>0$, and the stipulated speed bound $|v|\le c/10$.

[L1] In the constant-mass flat inertial model, $\gamma=(1-|v|^2/c^2)^{-1/2}$, $E=\gamma mc^2$, and $T=E-mc^2$ ([[pthm-rpm-inverse-momentum-and-work]]). This supplier is a draft result in batch 23; this example uses its exact kinematic definitions conditionally.

[L2] For every $0<\delta<1$ and $|v|/c\le\delta$, the kinetic-energy remainder is nonnegative and at most $3m|v|^4/[8c^2(1-\delta^2)^{5/2}]$ ([[lem-rpm-low-speed-remainders]]).

## Verification

1.1 The hypothesis $|v|\le c/10$ is the low-speed lemma's condition with $\delta=1/10$. Substituting $\delta^2=1/100$ into [L2] gives $1-\delta^2=99/100$ and therefore the displayed lower and upper bounds. The lower bound is the same nonnegativity conclusion in [L2]; no division by $|v|$ is made, so the case $v=0$ is included. [given, L1, L2, algebra]

2.1 The bound is conditional on the stipulated state speed and the definitions in [L1]. It is a pointwise model calculation, not an observation and not an estimate comparing two trajectories. [given, L1, step 1.1] ∎
