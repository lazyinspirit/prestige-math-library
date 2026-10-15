---
id: pthm-rpm-prescribed-force-local-motion
kind: physics-theorem
title: "Local massive motion in smooth orthogonal prescribed forces"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - def-rpm-spacetime-observer-and-worldline
  - def-rpm-mechanical-momentum-and-observer-energy
  - post-rpm-prescribed-force-law
  - lem-rpm-shell-tangent-force-ivp
  - lem-rpm-shell-force-ivp
dependency_roles:
  def-rpm-spacetime-observer-and-worldline: formulation-prerequisite
  def-rpm-mechanical-momentum-and-observer-energy: formulation-prerequisite
  post-rpm-prescribed-force-law: physical-assumption
  lem-rpm-shell-tangent-force-ivp: mathematical-premise
  lem-rpm-shell-force-ivp: mathematical-premise
physical_scope: "Conditional local dynamics of one massive test body with constant primitive mass on a prescribed smooth time-oriented Lorentzian background, under a separately adopted smooth external force orthogonal to its future unit velocity. It proves local motion and a chart-local compact-continuation criterion only; it makes no universal-force, global-completeness, self-force, or empirical claim."
empirical_premises: []
sources:
  references:
    - title: "Gautam Iyer, Brief Notes on Introduction to Differential Equations, complete ODE notes"
      url: "https://www.math.cmu.edu/~gautam/c/2026-632/notes/existence.html"
      locator: "Theorems 1 and 17: local existence/uniqueness and the compact-set continuation alternative; the present item separately supplies the force-model identification."
---

## Statement

Let $(M,g,N)$ be a prescribed smooth time-oriented Lorentzian four-manifold and let $m,c>0$. Let $\mathcal V\subset TM$ be an open set of future timelike vectors, and let $f$ be a smooth vector field along the bundle projection $\mathcal V\to M$, with $f(p,V)\in T_pM$. For the named massive test body, adopt the constant-mass force model of [[post-rpm-prescribed-force-law]]: $P=mU$, $g(U,U)=-c^2$, $D_\tau P=f(x,U)$, and $g(U,f(x,U))=0$. If $\tau$ is measured in seconds, then $P$ has SI units kilogram metres per second and $f$ has units newtons.

Fix an initial proper-time value $\tau_0\in\mathbb R$. For each initial datum $(p_0,U_0)\in\mathcal V$ with $g_{p_0}(U_0,U_0)=-c^2$, there is a unique local $C^2$ future-timelike worldline $x:J\to M$ on an open interval $J\ni\tau_0$, with $C^1$ tangent $U=dx/d\tau$, $x(\tau_0)=p_0$, and $U(\tau_0)=U_0$, satisfying the adopted equation. It remains on the future unit timelike shell and has a unique maximal solution on an open interval containing $\tau_0$. In any chart-state domain where the coordinate force vector field is smooth, if a finite endpoint is approached while the state remains in a compact subset of that domain, the solution extends past the endpoint. No global lifetime or spacetime completeness is asserted.

## Facts & Assumptions

**Given:** The prescribed smooth spacetime and force field, $m,c>0$, a specified initial proper-time value $\tau_0$, initial position $p_0$, future unit timelike initial velocity $U_0$, and the equalities $x(\tau_0)=p_0$, $U(\tau_0)=U_0$, and the adopted constant-mass force model.

[A1] The physical model is an optional adoption for a named massive test body with constant primitive $m>0$: on an open neighborhood of the future unit timelike shell it specifies a smooth force $f$, the equation $D_\tau P=f(x,U)$ with $P=mU$, and the compatibility condition $g(U,f(x,U))=0$ ([[post-rpm-prescribed-force-law]]). This is not a universal force principle; that postulate is a current in-run draft and is used here at its inspected statement.

[F1] The RPP background is a prescribed smooth time-oriented Lorentzian four-manifold, and massive worldlines are future timelike curves with a specified parameter; observer, congruence, adapted chart and tetrad are distinct objects ([[def-rpm-spacetime-observer-and-worldline]]).

[F2] In the adopted massive sector, the mechanical momentum is $P=mU$ for constant $m>0$ and $g(U,U)=-c^2$ ([[def-rpm-mechanical-momentum-and-observer-energy]]).

[L1] For a smooth force on an open future-timelike velocity domain with $g(U,f)=0$, the system $D_sx=U$, $D_sU=f(x,U)/m$ has a unique local solution, preserves $g(U,U)=-c^2$ and future direction, and has a unique maximal open interval ([[lem-rpm-shell-tangent-force-ivp]]). The actual supplier is a draft from in-run batch 22, so the use here is conditional on its inspected interface and proof status.

[L2] A smooth solution of that shell-force equation which remains in a compact subset of its open chart-state domain cannot have a finite maximal endpoint ([[lem-rpm-shell-force-ivp]]).

## Proof

**Proof technique:** identify the adopted force equation with the shell-tangent ODE and apply its local and continuation results.

1.1 The prescribed smooth background and future timelike worldline use the conventions of [F1]. Since $m$ is constant, [F2] gives $D_\tau P=mD_\tau U$. Substituting [A1] yields $D_\tau U=f(x,U)/m$, with the force smooth on the open velocity domain and orthogonal to $U$. These are exactly the hypotheses of [L1], so apply [L1] with $s_0=\tau_0$ and $s=\tau$, so for each stated initial datum there is a unique local solution with $x(\tau_0)=p_0$ and $U(\tau_0)=U_0$; [L1] also proves preservation of the future unit timelike shell. [given, A1, F1, F2, L1, algebra]

2.1 The unique local solutions patch by uniqueness to the maximal open-interval solution supplied by [L1]. At either finite endpoint, if the coordinate state remained in a compact subset of a chart-state domain on which the force vector field is smooth, [L2] would extend that solution, contradicting maximality. Therefore every finite maximal endpoint leaves every such compact subset. [step 1.1, L1, L2] ∎

## Remarks

This is a model deduction conditional on the separately adopted force law. Orthogonality is the compatibility condition for constant-mass shell preservation; it does not select a physical interaction. The result does not prove that the model describes a measured body.
