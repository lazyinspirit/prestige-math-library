---
id: ex-tgr-electric-circulation-obstruction
kind: example
title: Electric circulation obstructs a global charged equilibrium scalar
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - def-tgr-charged-liouville-data
  - thm-tgr-electrochemical-stationarity
  - def-countable-choice
dependency_roles:
  def-tgr-charged-liouville-data: mathematical-premise
  thm-tgr-electrochemical-stationarity: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references: []
---

## Example

Let $L>0$ and let
$O:=\mathbb R_{x^0}\times S^1_L\times\mathbb R^2_{x^2,x^3}$, where
$S^1_L:=\mathbb R/L\mathbb Z$. Let $\vartheta$ be the smooth global closed
one-form on $S^1_L$ induced by $d\widetilde\theta$ on its universal cover,
normalized by $\oint_{S^1_L}\vartheta=L$. Give $O$ the flat product metric
$$g=-(dx^0)^2+\vartheta\otimes\vartheta+(dx^2)^2+(dx^3)^2$$
and time orientation $\xi:=\partial_{x^0}$. Then $\xi$ is a future timelike
Killing field with $N=1$. For a nonzero constant $E_0$ in tesla, define the
global potential and field
$$A:=E_0x^0\vartheta,\qquad F:=dA=E_0\,dx^0\wedge\vartheta.$$
For a charged massive species with $qE_0\ne0$, take $T=T_K>0$ constant and
$\beta:=\xi/(k_BT_K)$. Although $F$ is exact and stationary, no smooth
single-valued scalar $\zeta:O\to\mathbb R$ makes
$f(x,P)=\exp(\zeta(x)+g(\beta,P))$ stationary under the charged Liouville
transport of [[def-tgr-charged-liouville-data]].

## Facts & Assumptions

**Given:** The product Lorentzian manifold, its smooth global one-form
$\vartheta$, metric, Killing field, potential $A$, field $F$, and constants
$L>0$, $E_0\ne0$, $q\ne0$, and $T_K>0$ in the Example.

[F1] [[def-tgr-charged-liouville-data]]: for any smooth scalar $\zeta$ and
smooth vector field $\beta$, $f=\exp(\zeta+g(\beta,P))$ is the charged
exponential ansatz on the future massive shell.

[F2] [[thm-tgr-electrochemical-stationarity]]: without assuming a global
potential compensator, $f$ is stationary on the entire future massive shell
if and only if $\beta$ is Killing and $d\zeta=-cq\,\iota_\beta F$.

[F3] [[def-countable-choice]]: every sequence of nonempty sets has a choice
function. This is inherited from the actual draft smooth tangent-bundle data; no
stronger choice principle is used in this example.

[A1] $O=\mathbb R\times S^1_L\times\mathbb R^2$ is connected,
$\xi=\partial_{x^0}$ is future timelike Killing, and its lapse is $N=1$.

[A2] $A=E_0x^0\vartheta$ is global, $F=dA=E_0dx^0\wedge\vartheta$,
$\iota_\xi F=E_0\vartheta$, and $qE_0\ne0$.

## Verification

**Given:** [A1], [A2], [F1], and the theorem's local stationarity criterion [F2].

1.1 The product metric is smooth, has signature $(-,+,+,+)$, and is invariant under translations of $x^0$; hence $\xi=\partial_{x^0}$ is a future timelike Killing field and $N=\sqrt{-g(\xi,\xi)}=1$. The form $\vartheta$ is globally defined, closed, and independent of $x^0$, so $A=E_0x^0\vartheta$ is a global one-form and differentiation gives $F=dA=E_0dx^0\wedge\vartheta$. Since $\mathcal L_\xi dx^0=d(\xi(x^0))=d1=0$ and $\mathcal L_\xi\vartheta=0$, the product rule gives $\mathcal L_\xi F=0$; direct contraction gives $\iota_\xi F=E_0\vartheta$. [given, A1, A2, algebra]

1.2 The product rule gives $\mathcal L_\xi A=E_0\xi(x^0)\vartheta+E_0x^0\mathcal L_\xi\vartheta=E_0\vartheta$, whose period around the circle is $E_0L\ne0$. Every exact one-form $d\Lambda$ for a global smooth real $\Lambda$ has zero integral around this closed circle, since its line integral is the endpoint difference of $\Lambda$. Thus no global $\Lambda_\xi$ satisfies $\mathcal L_\xi A=d\Lambda_\xi$. Under a gauge change $A\mapsto A+d\chi$, the coordinate formula gives $(\mathcal L_\xi d\chi)_a=\xi^b\partial_b\partial_a\chi+(\partial_a\xi^b)\partial_b\chi=\partial_a(\xi^b\partial_b\chi)$; this is exact and has zero circle period. Hence the nonzero period cannot be removed by a single-valued gauge. [given, A2, algebra]

2.1 Here $\beta=\xi/(k_BT_K)$ is Killing. If a global smooth $\zeta$ made $f$ from [F1] stationary, [F2] would give
$$d\zeta=-cq\,\iota_\beta F =-\frac{cqE_0}{k_BT_K}\vartheta.$$
Integrating around the positive circle gives $0=\oint d\zeta=-cqE_0L/(k_BT_K)$, which contradicts $qE_0\ne0$ and $T_K>0$. Hence no single-valued global $\zeta$ exists. [given, A2, F1, F2, F3, algebra] ∎
## Remarks

This example has a global potential and exact field strength, but the
contraction $\iota_\xi F$ is closed with nonzero period and is not exact. The
obstruction is global topology, not a singular gauge. If $q=0$ or $E_0=0$,
the displayed period vanishes and this example gives no obstruction.
