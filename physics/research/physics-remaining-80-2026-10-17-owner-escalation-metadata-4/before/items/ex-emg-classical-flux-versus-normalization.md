---
id: ex-emg-classical-flux-versus-normalization
kind: example
title: "Classical real flux versus selected circle sector"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - pthm-emg-potentials-and-topological-limits
dependency_roles:
  pthm-emg-potentials-and-topological-limits: physical-result
physical_scope: "Exact smooth two-form, fixed-normalization circle-patching, and flat-holonomy calculations on the specified punctured domains; no assertion of magnetic monopoles in nature or a quantum Aharonov–Bohm observation or charge-quantization rule."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, General Relativity, author-hosted lecture notes"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
      locator: "§2.4.3, PDF p. 84: closed forms, local potentials, and the failure of global exactness on nontrivial topology. The exact spherical calculations and physical qualifications here are supplied locally."
    - title: "David Tong, Gauge Theory, author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf"
      locator: "§1.1.2, PDF pp. 17–19 (printed pp. 6–8): north/south patch potentials and their overlap map. The classical flux and normalization calculations here do not use the adjacent quantum phase condition."
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** The exact punctured-domain and flat-connection cases of [[pthm-emg-potentials-and-topological-limits]], with chosen $\kappa_0>0$ measured in webers. The example values below are constructed model parameters, not observations.

[F1] [[pthm-emg-potentials-and-topological-limits]] states that $F_b=b\sin\theta\,d\theta\wedge d\phi$ on $M_*=\mathbb R_{x^0}\times(\mathbb R^3\setminus\{0\})$ has flux $4\pi b$, no global potential when $b\ne0$, and a fixed-$\kappa_0$ north/south connection transition exactly when $2b/\kappa_0\in\mathbb Z$. It also states that $A=\kappa_0a\,d\phi$ on $\mathbb R_{x^0}\times S^1\times\mathbb R^2$ has zero curvature and holonomy $e^{-2\pi ia}$.

## Example

Use the oriented sphere field $F_b=b\sin\theta\,d\theta\wedge d\phi$ on the punctured spacetime of [F1]. For $b=\kappa_0/2$, its flux is $2\pi\kappa_0$ and its transition map is $e^{-i\phi}$. This map is single-valued on the equatorial circle and has winding number of absolute value one. For $b=\kappa_0/(2\sqrt2)$, the real field is still smooth and closed on the punctured domain, but $2b/\kappa_0=1/\sqrt2$ is not an integer, so these north/south potentials do not define a connection with that fixed circle normalization. For $b=0$, the field and the chosen connection can both be zero.

Separately, on $\mathbb R_{x^0}\times S^1\times\mathbb R^2$, the normalized flat connection $a\,d\phi$ has holonomy $e^{-2\pi ia}$. At $a=1/2$ this is $-1$, so the connection is not gauge trivial; at $a=1$ the single-valued map $e^{-i\phi}$ removes it. The distinction is a classical statement about connection data and does not use a quantum wavefunction.

## Verification

1.1 For $b=\kappa_0/2$, the flux formula in [F1] gives $4\pi(\kappa_0/2)=2\pi\kappa_0$, and the transition coefficient is $2b/\kappa_0=1$, so $g_{NS}(\phi)=e^{-i\phi}$ returns to $1$ after a full $2\pi$ turn. Its degree is $-1$ for the stated north-to-south orientation, hence its absolute winding is one. [F1, algebra]

1.2 For $b=\kappa_0/(2\sqrt2)$, the normalized flux number is $2b/\kappa_0=1/\sqrt2$, which lies strictly between $0$ and $1$ and therefore is not an integer. The endpoint value $g_{NS}(2\pi)=e^{-2\pi i/\sqrt2}$ is not $g_{NS}(0)=1$, so this patch data do not define the selected circle connection; the real closed two-form itself remains admitted in the classical sector of [F1]. [F1, algebra]

1.3 If $b=0$, then $F_b=0$, $A_N=A_S=0$, the transition is the constant map $1$, and the global potential $A=0$ exists. Thus the nonzero-flux obstruction in [F1] does not apply at this endpoint. [F1, algebra]

2.1 For the flat case $A=\kappa_0a\,d\phi$, substituting $a=1/2$ into [F1] gives holonomy $e^{-\pi i}=-1$, which differs from the zero connection's holonomy $1$ and is invariant under single-valued gauge transformations. At $a=1$, the holonomy is $1$ and $h(\phi)=e^{-i\phi}$ is single-valued because $h(\phi+2\pi)=h(\phi)$; its local lift changes the connection by $-d\phi$, removing $d\phi$. Therefore zero curvature need not mean gauge triviality, while this integer flat connection is gauge trivial. [F1, algebra, construct] ∎
