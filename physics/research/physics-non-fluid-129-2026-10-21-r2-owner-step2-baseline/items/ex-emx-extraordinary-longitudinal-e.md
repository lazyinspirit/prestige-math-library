---
id: ex-emx-extraordinary-longitudinal-e
kind: example
title: "Electric amplitude has a longitudinal component"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
proof_strategy: direct
deps:
  - pthm-emx-uniaxial-dispersion
dependency_roles:
  pthm-emx-uniaxial-dispersion: physical-result
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A conditional bulk plane-wave example in a homogeneous lossless uniaxial dielectric with positive principal permittivities, positive scalar permeability, a real nonzero wavevector on the extraordinary sheet, and nonzero transverse and axial wavevector components. It makes no interface, finite-beam or empirical claim."
sources:
  references:
    - title: "Jin Au Kong, Electromagnetic Wave Theory, last edition 2008, PIERS free release 2021"
      url: "https://piers.org/piers/files/BOOK_ElectromagneticWaveTheory_by_JINAUKONG_FreeRelease2021.pdf"
      locator: "Chapter 3, §3.3.E, printed pp. 317–318, equations (3.3.68)–(3.3.71): the extraordinary displacement is perpendicular to k while its electric amplitude lies in the optic-axis plane and is generally not parallel to D."
---

## Example

Let $\varepsilon=\operatorname{diag}(\varepsilon_\perp,\varepsilon_\perp,\varepsilon_\parallel)$ with $\varepsilon_\perp,\varepsilon_\parallel>0$ and $\varepsilon_\perp\ne\varepsilon_\parallel$, and let $\mu>0$. Fix $\omega>0$ and real $k=(k_x,0,k_z)$ with $k_xk_z\ne0$ on the extraordinary sheet $k_x^2/\varepsilon_\parallel+k_z^2/\varepsilon_\perp=\mu\omega^2$. Choose $d_0\in\mathbb C\setminus\{0\}$ in $\mathrm{C\,m^{-1}}$ and set the displacement amplitude $d=d_0(k_z,0,-k_x)$ and electric amplitude $e=\varepsilon^{-1}d$. Then $k\cdot d=0$ but $k\cdot e=d_0k_xk_z(1/\varepsilon_\perp-1/\varepsilon_\parallel)\ne0$. Thus the extraordinary electric amplitude is not orthogonal to the wavevector even though the displacement amplitude is.

## Statement references

[[pthm-emx-uniaxial-dispersion]]

## Facts & Assumptions

**Given:** The positive uniaxial coefficients, $\omega>0$, $k_xk_z\ne0$, and the extraordinary dispersion relation stated above, all in SI units.

[L1] The extraordinary sheet and its nonzero source-free polarization modes are those of [[pthm-emx-uniaxial-dispersion]]; the displacement amplitude is $d=\varepsilon e$ in the same model.

## Verification

1.1 Since $\varepsilon_\perp,\varepsilon_\parallel>0$, the diagonal matrix $\varepsilon$ is invertible, so $e=\varepsilon^{-1}d=d_0(k_z/\varepsilon_\perp,0,-k_x/\varepsilon_\parallel)$ is defined and nonzero. Direct contraction gives $k\cdot d=d_0(k_xk_z-k_zk_x)=0$ and $k\cdot e=d_0k_xk_z(1/\varepsilon_\perp-1/\varepsilon_\parallel)\ne0$ by the nonzero-component and unequal-permittivity hypotheses. [given, L1, algebra]

2.1 The extraordinary dispersion relation gives $k_x^2/\varepsilon_\parallel+k_z^2/\varepsilon_\perp=\mu\omega^2$. Hence the $x$ and $z$ components of $k\times(k\times e)$ are $-d_0k_z(k_x^2/\varepsilon_\parallel+k_z^2/\varepsilon_\perp)=-\mu\omega^2d_0k_z$ and $d_0k_x(k_x^2/\varepsilon_\parallel+k_z^2/\varepsilon_\perp)=\mu\omega^2d_0k_x$, while the $y$ component is zero. Thus $\mu^{-1}k\times(k\times e)+\omega^2d=0$, so $e$ is an extraordinary symbol mode and the longitudinal-component claim follows. [given, L1, step 1.1, algebra] ∎
