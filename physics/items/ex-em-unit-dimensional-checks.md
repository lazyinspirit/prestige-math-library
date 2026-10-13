---
id: ex-em-unit-dimensional-checks
kind: example
title: "Dimensional check of every Maxwell and Lorentz term in SI units"
status: published
origin: session
domain: physics
deps: [def-divergence-and-curl-of-a-c1-vector-field, def-em-si-conventions, post-em-lorentz-coupling, post-em-vacuum-maxwell]
dependency_roles:
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-em-si-conventions: formulation-prerequisite
  post-em-lorentz-coupling: physical-assumption
  post-em-vacuum-maxwell: physical-assumption
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A dimensional consistency check of the adopted SI Maxwell equations and Lorentz coupling of the classical framework. It is exact unit arithmetic, not a measurement, not a proof of the equations and not a claim about the value of any constant; it inherits the framework's adopted equations only for the list of terms checked."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "BIPM, Le Systeme international d'unites / The International System of Units (SI), 9th edition (Bureau International des Poids et Mesures, 2019, 214 pp., bilingual French-English)"
      url: "https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf"
      locator: "§2.3.1-§2.3.4 (English pp. 127-140; French pp. 19-32): the SI base and derived units and their defining relations used in every displayed conversion, including the coulomb, volt, farad, tesla and watt; read in the stamped 214-page bilingual PDF"
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§3.5, printed pp. 64-65 (PDF pp. 72-73): SI field and potential units and the post-2019 status of mu_0. The unit arithmetic is performed locally; the official BIPM reference supplies the coherent derived-unit definitions."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "Appendix B printed pp. 561-562 (SI units and the table of unit conversions, including 1 T = 1 N/(A m)) and §7.3.3 printed pp. 326-327 (the equations whose terms are checked), read in the stamped scanned full text"
---

## Example

This example is conditional on the units of [[def-em-si-conventions]], the
definitions of divergence and curl in
[[def-divergence-and-curl-of-a-c1-vector-field]], the equations of
[[post-em-vacuum-maxwell]] and the coupling of [[post-em-lorentz-coupling]];
all equalities below are equalities of units, using
$1\ \mathrm{C}=1\ \mathrm{A\,s}$, $1\ \mathrm{V}=1\ \mathrm{J\,C^{-1}}$,
$1\ \mathrm{J}=1\ \mathrm{N\,m}$,
$1\ \mathrm{W}=1\ \mathrm{V\,A}=1\ \mathrm{J\,s^{-1}}$,
$1\ \mathrm{F}=1\ \mathrm{C\,V^{-1}}$ and
$1\ \mathrm{T}=1\ \mathrm{N\,A^{-1}\,m^{-1}}$.

(a) $\operatorname{div}E$ has unit $\mathrm{V\,m^{-2}}$ and
$\rho/\varepsilon_0$ has unit
$\mathrm{C\,m^{-3}/(F\,m^{-1})}=\mathrm{C\,V\,m^{-2}\,C^{-1}}
=\mathrm{V\,m^{-2}}$, so the two sides of
$\operatorname{div}E=\rho/\varepsilon_0$ agree.

(b) $\operatorname{curl}B$ has unit $\mathrm{T\,m^{-1}}$; $\mu_0J$ has unit
$\mathrm{N\,A^{-2}\cdot A\,m^{-2}}=\mathrm{N\,A^{-1}\,m^{-2}}
=\mathrm{T\,m^{-1}}$; $c^{-2}\partial_tE$ has unit
$\mathrm{m^{-2}\,s^{2}\cdot V\,m^{-1}\,s^{-1}}=\mathrm{V\,s\,m^{-3}}
=\mathrm{N\,A^{-1}\,m^{-2}}=\mathrm{T\,m^{-1}}$, so both source terms of
$\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$ have the unit of
$\operatorname{curl}B$.

(c) $\operatorname{curl}E$ has unit
$\mathrm{V\,m^{-2}}=\mathrm{T\,s^{-1}}$ and $\partial_tB$ has unit
$\mathrm{T\,s^{-1}}$, so $\operatorname{curl}E=-\partial_tB$ is homogeneous;
$\operatorname{div}B=0$ is a homogeneous equation.

(d) In the coupling of [[post-em-lorentz-coupling]], the adopted right-hand
side $q\,\Phi(U)$ has unit
$\mathrm{C\cdot T\cdot m\,s^{-1}}=\mathrm{C\,N\,A^{-1}\,s^{-1}}=\mathrm{N}$
(using $1\ \mathrm{T}=1\ \mathrm{N\,A^{-1}\,m^{-1}}$ and
$1\ \mathrm{C}=1\ \mathrm{A\,s}$) and the left-hand side $m\,dU/d\tau$ has unit
$\mathrm{kg\,m\,s^{-2}}=\mathrm{N}$, so the two sides of
$m\,dU/d\tau=q\,\Phi(U)$ agree; in the coordinate expression
$q(E+r'\times B)$ on the right of the postulate's displayed nonrelativistic
acceleration equation (that whole equation is not adopted as exact), $qE$ has unit
$\mathrm{C\cdot V\,m^{-1}}=\mathrm{J\,m^{-1}}=\mathrm{N}$ and
$q\,(r'\times B)$ has unit
$\mathrm{C\,m\,s^{-1}\,T}=\mathrm{C\,N\,A^{-1}\,s^{-1}}=\mathrm{N}$, so its
two terms add with the unit of a force; and $\rho E+J\times B$ has unit
$\mathrm{C\,m^{-3}\,V\,m^{-1}}=\mathrm{N\,m^{-3}}$, the unit of a force
density, while $J\cdot E$ has unit
$\mathrm{A\,m^{-2}\cdot V\,m^{-1}}=\mathrm{W\,m^{-3}}$, the unit of a power
density.

(e) The energy density $\tfrac12(\varepsilon_0E^2+B^2/\mu_0)$ has unit
$\mathrm{J\,m^{-3}}$ and the flux $E\times B/\mu_0$ has unit
$\mathrm{W\,m^{-2}}$, consistent with
$\mathrm{J\,m^{-3}\cdot m\,s^{-1}}=\mathrm{W\,m^{-2}}$.

(f) The check is exact arithmetic of the adopted units; it is not a
measurement, it does not prove the equations, and no numerical value of
$\mu_0$ is used or asserted.

## Facts & Assumptions

**Given:** the unit conventions of [[def-em-si-conventions]], the component definitions of [[def-divergence-and-curl-of-a-c1-vector-field]], and the adopted equations of [[post-em-vacuum-maxwell]] and [[post-em-lorentz-coupling]].

[F1] The SI unit table: $c$ in $\mathrm{m\,s^{-1}}$, $E$ in $\mathrm{V\,m^{-1}}$, $B$ in T with $1\ \mathrm{T}=1\ \mathrm{N\,A^{-1}\,m^{-1}}$, $\rho$ in $\mathrm{C\,m^{-3}}$, $J$ in $\mathrm{A\,m^{-2}}$, force in N, $\varepsilon_0=(\mu_0c^2)^{-1}$ in $\mathrm{F\,m^{-1}}$ with $\mu_0$ in $\mathrm{N\,A^{-2}}$, energy density in $\mathrm{J\,m^{-3}}$ and energy flux in $\mathrm{W\,m^{-2}}$. ([[def-em-si-conventions]])

[F2] The divergence is $\sum_i\partial_iF_i$ and each curl component is a difference of two first partial derivatives, so divergence and curl divide the field unit by a length. ([[def-divergence-and-curl-of-a-c1-vector-field]])

[F3] The four Maxwell equations are $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$ and $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$. ([[post-em-vacuum-maxwell]])

[F4] The adopted coupling is $m\,dU/d\tau=q\,\Phi(U)$, with the coordinate expression $q(E+r'\times B)$ displayed in the nonrelativistic acceleration equation, which is not adopted as exact, and with the force density $\rho E+J\times B$ and the power density $J\cdot E$. ([[post-em-lorentz-coupling]])

## Verification

**Proof technique:** direct unit arithmetic for each displayed term.

1.1 Reading the units of $E$, $\rho$ and $\varepsilon_0$ from [F1] and the component formula for the divergence from [F2]: $\operatorname{div}E$ has unit $\mathrm{V\,m^{-2}}$, while $\rho/\varepsilon_0$ has unit $\mathrm{C\,m^{-3}/(F\,m^{-1})}=\mathrm{C\,m^{-3}\cdot m\,F^{-1}}=\mathrm{C\,V\,m^{-2}\,C^{-1}}=\mathrm{V\,m^{-2}}$, using $1\ \mathrm{F}=1\ \mathrm{C\,V^{-1}}$; the two sides of the first equation of [F3] therefore carry the same unit. [F1, F2, F3]

1.2 Again by [F1] and [F2], $\operatorname{curl}B$ has unit $\mathrm{T\,m^{-1}}$; $\mu_0J$ has unit $\mathrm{N\,A^{-2}\cdot A\,m^{-2}}=\mathrm{N\,A^{-1}\,m^{-2}}=\mathrm{T\,m^{-1}}$; and $c^{-2}\partial_tE$ has unit $\mathrm{m^{-2}\,s^{2}\cdot V\,m^{-1}\,s^{-1}}=\mathrm{V\,s\,m^{-3}}$, which equals $\mathrm{N\,A^{-1}\,m^{-2}}=\mathrm{T\,m^{-1}}$ because $1\ \mathrm{V}=1\ \mathrm{J\,C^{-1}}$, $1\ \mathrm{J}=1\ \mathrm{N\,m}$ and $1\ \mathrm{C}=1\ \mathrm{A\,s}$; hence all three terms of the fourth equation of [F3] carry the unit $\mathrm{T\,m^{-1}}$. [F1, F2, F3]

1.3 By [F1] and [F2], $\operatorname{curl}E$ has unit $\mathrm{V\,m^{-2}}$ and $\partial_tB$ has unit $\mathrm{T\,s^{-1}}$; since $\mathrm{V\,m^{-2}}=\mathrm{J\,C^{-1}\,m^{-2}}=\mathrm{N\,m\,C^{-1}\,m^{-2}}=\mathrm{N\,A^{-1}\,s^{-1}\,m^{-1}}=\mathrm{T\,s^{-1}}$ by the conversion identities, the third equation of [F3] is homogeneous, and the second equation of [F3] is homogeneous with $\operatorname{div}B$ in $\mathrm{T\,m^{-1}}$ and a zero right-hand side of that same dimension. [F1, F2, F3]

1.4 By [F1] and [F4]: the adopted term $q\,\Phi(U)$ has unit $\mathrm{C\cdot T\cdot m\,s^{-1}}=\mathrm{C\,N\,A^{-1}\,s^{-1}}=\mathrm{N}$ and $m\,dU/d\tau$ has unit $\mathrm{kg\,m\,s^{-2}}=\mathrm{N}$; in the displayed coordinate expression, $qE$ has unit $\mathrm{C\cdot V\,m^{-1}}=\mathrm{C\cdot J\,C^{-1}\,m^{-1}}=\mathrm{N}$ and $q(r'\times B)$ has unit $\mathrm{C\cdot m\,s^{-1}\cdot N\,A^{-1}\,m^{-1}}=\mathrm{C\,N\,A^{-1}\,s^{-1}}=\mathrm{N}$; $\rho E$ has unit $\mathrm{C\,m^{-3}\cdot V\,m^{-1}}=\mathrm{C\,V\,m^{-4}}=\mathrm{N\,m^{-3}}$ and $J\times B$ has unit $\mathrm{A\,m^{-2}\cdot N\,A^{-1}\,m^{-1}}=\mathrm{N\,m^{-3}}$, so the force density $\rho E+J\times B$ has unit $\mathrm{N\,m^{-3}}$; and $J\cdot E$ has unit $\mathrm{A\,m^{-2}\cdot V\,m^{-1}}=\mathrm{W\,m^{-3}}$ because $1\ \mathrm{W}=1\ \mathrm{V\,A}$. [F1, F4]

1.5 By [F1]: $\varepsilon_0E^2$ has unit $\mathrm{F\,m^{-1}\cdot V^2\,m^{-2}}=\mathrm{F\,V^2\,m^{-3}}=\mathrm{C\,V\,m^{-3}}=\mathrm{J\,m^{-3}}$ and $B^2/\mu_0$ has unit $\mathrm{N^2\,A^{-2}\,m^{-2}\cdot A^2\,N^{-1}}=\mathrm{N\,m^{-2}}=\mathrm{J\,m^{-3}}$, so the energy density $\tfrac12(\varepsilon_0E^2+B^2/\mu_0)$ has unit $\mathrm{J\,m^{-3}}$; the flux $E\times B/\mu_0$ has unit $\mathrm{V\,m^{-1}\cdot N\,A^{-1}\,m^{-1}\cdot A^2\,N^{-1}}=\mathrm{V\,A\,m^{-2}}=\mathrm{W\,m^{-2}}$. [F1]

2.1 Every term listed in (a)-(e) of the example has been assigned the same unit as the term it is compared with, so each displayed Maxwell equation and coupling expression is dimensionally homogeneous in the adopted SI conventions; the computation used only the unit table and the component definitions, and no numerical value of $\mu_0$, no measurement and no claim that the equations hold was used. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, F1, F3, F4] ∎
