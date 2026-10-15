---
id: lem-rpm-low-speed-uniform-remainders
kind: lemma
title: "Uniform low-speed relativistic remainders"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - lem-rpm-low-speed-remainders
  - thm-real-power-continuity-and-derivatives
  - thm-chain-rule
  - thm-cauchy-mean-value
dependency_roles:
  lem-rpm-low-speed-remainders: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-cauchy-mean-value: mathematical-premise
sources:
  references:
    - title: "OpenStax, University Physics Volume 3, complete textbook, Chapter 5"
      url: "https://openstax.org/books/university-physics-volume-3/pages/5-8-relativistic-momentum"
      locator: "§§5.8–5.9, Relativistic Momentum and Relativistic Energy: the mass shell and low-speed expansions for momentum and energy."
---

## Statement

Let $C>0$, $0<\varepsilon_*$, and $\rho:=C^2\varepsilon_*<1$. For $0<\varepsilon\le\varepsilon_*$, $m,c>0$, and $v\in\mathbb R^3$ with $|v|\le C\sqrt{\varepsilon}\,c$, put $z=|v|^2/c^2$, $\gamma=(1-z)^{-1/2}$, $p=m\gamma v$, and $E=\gamma mc^2$. Then $z\le\rho$ and

$$0\le\gamma-1\le\frac{C^2\varepsilon}{2(1-\rho)^{3/2}},\qquad 0\le\gamma-1-\frac z2\le\frac{3C^4\varepsilon^2}{8(1-\rho)^{5/2}},$$

$$|p-mv|\le\frac{mC^3c\,\varepsilon^{3/2}}{2(1-\rho)^{3/2}},\qquad 0\le E-mc^2-\frac12m|v|^2\le\frac{3mC^4c^2\varepsilon^2}{8(1-\rho)^{5/2}}.$$

For the formal coordinate-time Lagrangian densities

$$\mathcal L_c(v):=-mc^2\sqrt{1-|v|^2/c^2},\qquad \mathcal L_N(v):=\frac12m|v|^2,$$

one also has

$$|\mathcal L_c(v)+mc^2-\mathcal L_N(v)|\le\frac{mC^4c^2\varepsilon^2}{8(1-\rho)^{3/2}}.$$

Subtracting the constant rest-energy density $-mc^2$ changes an action on a fixed coordinate-time interval only by a path-independent constant. These are uniform algebraic estimates for the stipulated family; they assert no equation of motion or trajectory existence.

## Facts & Assumptions

**Given:** The constants and speed-family condition in the Statement, with the definitions of $z,\gamma,p,E,\mathcal L_c,\mathcal L_N$ there.

[L1] Under $|v|/c\le\sqrt\rho<1$, the pointwise bounds for $\gamma$, $p-mv$, and $E-mc^2-\frac12m|v|^2$ hold with $\delta=\sqrt\rho$ ([[lem-rpm-low-speed-remainders]]).

[L2] For $x>0$, $(x^\alpha)'=\alpha x^{\alpha-1}$, and positive-base real powers are continuous and differentiable ([[thm-real-power-continuity-and-derivatives]]); composition derivatives follow from the chain rule ([[thm-chain-rule]]).

[L3] Cauchy's mean value theorem gives $(f(b)-f(a))g'(c)=(g(b)-g(a))f'(c)$ for continuous $f,g$ on $[a,b]$ differentiable on $(a,b)$ ([[thm-cauchy-mean-value]]).

## Proof

**Proof technique:** substitute the family speed bound into the pointwise estimates and prove the square-root action remainder separately.

1.1 From $|v|\le C\sqrt{\varepsilon}\,c$ and $\varepsilon\le\varepsilon_*$, $z=|v|^2/c^2\le C^2\varepsilon\le\rho$. Apply [L1] with $\delta=\sqrt\rho$ and then use $z\le C^2\varepsilon$: the gamma remainder is at most $3C^4\varepsilon^2/[8(1-\rho)^{5/2}]$, the momentum error is at most $mC^3c\varepsilon^{3/2}/[2(1-\rho)^{3/2}]$, and the energy remainder is at most $3mC^4c^2\varepsilon^2/[8(1-\rho)^{5/2}]$. The first-order gamma bound follows from $z\le C^2\varepsilon$ in the same way. [given, L1, algebra]

1.2 Put $f(s)=\sqrt{1-s}=(1-s)^{1/2}$ on $[0,\rho]$. By [L2], $f(0)=1$, $f'(0)=-1/2$, and $|f''(s)|=\frac14(1-s)^{-3/2}$; differentiating $(1-s)^{-3/2}$ gives the positive derivative $\frac32(1-s)^{-5/2}$, so this absolute value is increasing and bounded above by $\frac14(1-\rho)^{-3/2}$. For $z>0$, set $q(s)=f(s)-1+s/2$ and $g(s)=s^2$ on $[0,z]$. Since $q(0)=g(0)=0$, [L3] supplies $\xi\in(0,z)$ with $q(z)=z^2q'(\xi)/(2\xi)$. The mean value theorem applied to $f'$ on $[0,\xi]$ gives $\eta\in(0,\xi)$ such that $q'(\xi)=f'(\xi)-f'(0)=\xi f''(\eta)$. Hence $|q(z)|=\frac12z^2|f''(\eta)|\le z^2/[8(1-\rho)^{3/2}]$. The same bound is equality at $z=0$. [given, L2, L3, algebra]

2.1 By the definitions, $\mathcal L_c(v)+mc^2-\mathcal L_N(v)=-mc^2(f(z)-1+z/2)=-mc^2q(z)$. Step 1.2 and $z^2\le C^4\varepsilon^2$ give the asserted action-density bound. On a fixed interval $[a,b]$, integrating the subtracted constant $mc^2$ contributes $mc^2(b-a)$, independent of the path, so it does not change fixed-endpoint stationary variations. [given, step 1.2, algebra] ∎

## Remarks

The parameter $\varepsilon$ is dimensionless and the constants are uniform over every member of the stated speed family. The action estimate is an algebraic estimate of densities; it is not an existence or convergence result for stationary paths.
