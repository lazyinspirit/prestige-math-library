---
id: ex-tgr-physical-finite-bath-attraction
kind: example
title: "Half-capacity bath attracts the selected exchange state"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 9
deps:
  - pthm-tgr-negative-capacity-exchange-stability
dependency_roles:
  pthm-tgr-negative-capacity-exchange-stability: physical-result
justified_by: []
physical_scope: >-
  A single common-temperature point of the adopted finite-bath scalar exchange
  model with C_b=|C_G|/2; no causal transport or generic star-stability claim.
empirical_premises: []
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "P.-H. Chavanis, Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas, arXiv:1908.10806v1 (2019), Sec. III.E"
      url: "https://arxiv.org/pdf/1908.10806"
verification:
  precheck: pass
---

## Example

At a selected subsystem state with $T_*>0$ and $C_G<0$, choose the finite bath capacity $C_b=|C_G|/2$ and bath energy $E_b=E_0+C_bT_*$. In the adopted scalar exchange model, the common-temperature state is a strict local entropy maximum and is locally exponentially attracting; its entropy curvature is
$$S_{\rm tot}''(x_*)=-\frac1{T_*^2|C_G|}<0.$$

## Facts & Assumptions

**Given:** The finite-bath exchange theorem [[pthm-tgr-negative-capacity-exchange-stability]] and its adopted matched-temperature point.

[F1] [[pthm-tgr-negative-capacity-exchange-stability]] gives $S_{\rm tot}''(x_*)=-T_*^{-2}(1/C_G+1/C_b)$ and the strict local maximum, forward-invariant local basin, exponential attraction, and entropy production $L(S_{\rm tot}')^2\ge0$ whenever $C_G<0$ and $0<C_b<|C_G|$.

## Verification

1.1 With $C_b=|C_G|/2$, the bath capacity is positive and satisfies $C_b<|C_G|$. Setting $E_b=E_0+C_bT_*$ gives $T_b=(E_b-E_0)/C_b=T_*$, so the selected state is common-temperature as required in [F1]. [given, F1, algebra]

2.1 Since $C_G<0$, $1/C_G=-1/|C_G|$ and $1/C_b=2/|C_G|$. Hence [F1] gives $S_{\rm tot}''(x_*)=-1/(T_*^2|C_G|)<0$ and its stated local exponential attraction and nonnegative entropy production. This is the specified exchange ODE, not a stellar evolution law. [F1, step 1.1, algebra] ∎

