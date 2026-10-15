---
id: ex-rpm-schwarzschild-radial-stability-values
kind: example
title: "Fixed-angular-momentum stability at 2s, 3s and 4s"
status: published
origin: session
domain: physics
library: physics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - pthm-rpm-schwarzschild-circular-stability
  - lem-gr-schwarzschild-circular-orbits-and-photon-sphere
dependency_roles:
  pthm-rpm-schwarzschild-circular-stability: physical-result
  lem-gr-schwarzschild-circular-orbits-and-photon-sphere: mathematical-premise
physical_scope: "Worked parameter values for the conditional Schwarzschild fixed-angular-momentum radial model; not full orbital stability or an observation."
sources:
  references:
    - title: "David Tong, General Relativity, author-hosted Chapter 1 HTML of the complete lecture notes, §§1.2.5 and 1.3.1–1.3.5 (printed pp. 24–46)"
      url: "https://davidtong.org/teaching/general-relativity/grhtml/S1"
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, §7, pp. 174–177"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
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

Use $s>0$ and the reduced potential $W_\ell(r)=(1-s/r)(c^2+\ell^2/r^2)$ of [[pthm-rpm-schwarzschild-circular-stability]]. At a circular orbit, $\ell^2=c^2sr_0^2/(2r_0-3s)$.

1. **Stable radial equilibrium at $r_0=4s$.** The circular value is $\ell^2=16c^2s^2/5$, and

   $$W_\ell''(4s)=\frac{2c^2s(4s-3s)}{(4s)^3(8s-3s)}=\frac{c^2}{160s^2}>0.$$

   The fixed-$\ell$ radial equilibrium is Lyapunov stable.
2. **Unstable radial equilibrium at $r_0=2s$.** Here $\ell^2=4c^2s^2$ and

   $$W_\ell''(2s)=\frac{2c^2s(2s-3s)}{(2s)^3(4s-3s)}=-\frac{c^2}{4s^2}<0.$$

   The fixed-$\ell$ equilibrium is unstable.
3. **Degenerate endpoint at $r_0=3s$.** Here $\ell^2=3c^2s^2$ and $W_\ell'(r)=c^2s(r-3s)^2/r^4$. It has a stationary inflection rather than a strict extremum, and the radial equilibrium is not Lyapunov stable by the one-sided perturbation argument in the theorem.

## Facts & Assumptions

**Given:** $s,c>0$, the Schwarzschild radial potential, and the fixed-angular-momentum stability theorem.

[F1] At a timelike circular orbit $r_0>3s/2$, $\ell^2=c^2sr_0^2/(2r_0-3s)$ and $V_\ell''(r_0)=c^2s(r_0-3s)/(r_0^3(2r_0-3s))$ for $V_\ell=W_\ell/2$ ([[lem-gr-schwarzschild-circular-orbits-and-photon-sphere]] clause (c)).

[F2] For the fixed-$\ell$ radial system, radii $r_0>3s$ are Lyapunov stable and radii $3s/2<r_0\le3s$ are not ([[pthm-rpm-schwarzschild-circular-stability]]).

## Verification

**Proof technique:** substitute each radius in the exact circular angular-momentum and potential-curvature formulas, then apply the radial stability theorem.


1.1 At $r_0=4s$, substitution gives $\ell^2=c^2s(16s^2)/(8s-3s)=16c^2s^2/5$ and [F1] gives $W_\ell''=2V_\ell''=c^2/(160s^2)>0$. Since $4s>3s$, [F2] classifies the equilibrium as Lyapunov stable in the fixed-$\ell$ radial state. [given, F1, F2, algebra]

1.2 At $r_0=2s$, substitution gives $\ell^2=4c^2s^2$ and $W_\ell''=2V_\ell''=-c^2/(4s^2)<0$. Since $3s/2<2s<3s$, [F2] classifies this equilibrium as unstable. [given, F1, F2, algebra]

2.1 At $r_0=3s$, substitution gives $\ell^2=3c^2s^2$. Direct differentiation of $W_\ell(r)=(1-s/r)(c^2+\ell^2/r^2)$ at this fixed angular momentum gives $W_\ell'(r)=c^2s(r-3s)^2/r^4$, positive away from $3s$ and zero at $3s$. The equilibrium is a stationary inflection; [F2] classifies it as not Lyapunov stable. All three results are restricted radial-model classifications. [given, F1, F2, algebra] ∎
