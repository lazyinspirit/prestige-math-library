---
id: ex-td-geometric-cooling-protocol
kind: example
title: A finite-step geometric cooling protocol
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: An abstract update-map model with a Kelvin-valued scalar state coordinate and one finite-duration operation repeated finitely many times; the coordinate is not identified with an entropy-derived thermodynamic temperature, and the result is not evidence about actual cooling devices.
deps:
  - def-td-si-quantities
  - def-td-temperature-pressure-chemical-potential
  - def-natural-numbers
  - thm-induction-principle
  - def-ordered-field
dependency_roles:
  def-td-si-quantities: formulation-prerequisite
  def-td-temperature-pressure-chemical-potential: formulation-prerequisite
  def-natural-numbers: mathematical-premise
  thm-induction-principle: mathematical-premise
  def-ordered-field: mathematical-premise
proof_strategy: induction
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
relations:
  motivated_by:
    - post-td-unattainability-scoped
dependency_level: 6
---

## Example

Fix $T_*>0$ kelvins, an initial state coordinate $T_{\mathrm{in}}\in D_+:=(0,T_*]$, a dimensionless ratio $r\in(0,1)$, and an operation duration $\tau_*>0$ seconds. The model state is the scalar coordinate $T$ with state set $\overline D:=D_+\sqcup D_0$, where $D_0:=\{0\}$; $T$ is assigned units of kelvins. This abstract coordinate is not identified with the entropy-derived thermodynamic temperature $T_c=1/S_{c,U}$ of [[def-td-temperature-pressure-chemical-potential]]. Each admitted operation is the partial map $f:D_+\to D_+$, $f(T):=rT$, with duration $\tau_*$. An admitted finite protocol is a finite composable chain of these operations; write $T_N$ for its endpoint after $N$ updates. Since the operation has codomain $D_+$, this restricted model has no operation with endpoint in $D_0$; the proof below is a direct property of its update rule, not evidence for the physical unattainability postulate. It does not assert that a real refrigerator or every thermodynamic model has this update rule.

## Facts & Assumptions

**Given:** The stipulated state sets, initial temperature, operation map, and fixed finite duration in the Example.

[F1] [[def-td-si-quantities]]: Temperature is measured in kelvins and duration in seconds.

[F2] [[def-td-temperature-pressure-chemical-potential]]: The framework's thermodynamic temperature is the entropy-derived state function $T_c=1/S_{c,U}$ on a designated open chart; the scalar coordinate $T$ in this example is stipulated separately and is not identified with $T_c$.

[F3] [[def-natural-numbers]]: A finite chain has a length $N\in\mathbb N$.

[F4] [[thm-induction-principle]]: A property holding at $0$ and preserved from $N$ to $N+1$ holds for every $N\in\mathbb N$.

[F5] [[def-ordered-field]]: Products of positive reals are positive, and multiplying positive inequalities preserves order.

## Verification

1.1 Let $P(N)$ mean that the endpoint after $N$ admitted operations lies in $D_+$. For $N=0$, the endpoint is the stipulated $T_{\mathrm{in}}>0$, so $P(0)$ holds. [given, F3, base]

2.1 Assume $P(N)$ [IH]. The stipulated operation sends its current model coordinate $T_N\in D_+$ to $rT_N$; because $0<r<1$, $0<rT_N<T_N\le T_*$, so the next endpoint satisfies $P(N+1)$. This is a property of the stipulated coordinate update, not a consequence for the entropy-derived $T_c$ in [F2]. [step 1.1, given, F2, F3, F5, algebra]

3.1 By [F4], steps 1.1 and 2.1 imply $P(N)$ for every finite $N\in\mathbb N$. Every admitted finite protocol has such a length by [F3], and its duration is $N\tau_*<\infty$ by the stipulated finite $\tau_*$. Since $D_+\cap D_0=\varnothing$, none reaches zero. This conclusion is only for the stipulated protocol model. [F1, F3, F4, step 1.1, step 2.1, algebra, discharge-induction] ∎
