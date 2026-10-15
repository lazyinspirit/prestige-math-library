---
id: def-em-si-conventions
kind: definition
title: "Framework-local SI units, the vacuum constants and the exact/measured status of their values"
status: published
origin: session
domain: physics
deps: [def-em-lab-geometry]
dependency_roles:
  def-em-lab-geometry: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "SI unit and constant conventions for the classical electromagnetic framework, with the exact defining values of c and e, the measured status of mu_0, and the framework's definition of eps_0 = (mu_0 c^2)^-1. The item fixes units and dimensional bookkeeping only; it asserts no measurement, no charge quantisation and no cross-framework identification of quantities."
sources:
  references:
    - title: "BIPM, The International System of Units (SI), 9th edition, official current PDF version 4.01 (214 pages; PDF metadata dated 2 June 2026), retrieved 9 October 2026"
      url: "https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf"
      locator: "§2.2, English printed pp. 123-124 (PDF pp. 125-126): exact defining constants c and e and their uncertainty-free status; §2.3.1, The ampere, English printed p. 128 (PDF p. 130): pre-2019 exact mu0, current experimental determination, exact eps0 mu0=1/c², same relative standard uncertainty, and historical 2019 adoption estimate with 2.3×10^-10 relative standard uncertainty; 26th CGPM (2018) Resolution 1, English printed p. 194 (PDF p. 196): revised SI effective 20 May 2019. These pages were read in the newly retrieved official PDF; no new current CODATA mu0 numerical estimate is claimed."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§1.1-§1.2, printed pp. 2-6: charge, sources and fields. §3.5, printed pp. 64-65 (PDF pp. 72-73): SI units and the post-2019 status of e and mu_0. The official BIPM reference controls the exact defining values and historical uncertainty qualification."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§5.3.2 printed pp. 224-225 (eq. (5.33)-(5.34): mu_0 = 4pi x 10^-7 N/A^2 in the pre-2019 edition and 1 T = 1 N/(A m); this printed value is not adopted as exact) and §4.3.2 printed pp. 180-181 (eps_0 = 8.85 x 10^-12 C^2/N m^2); read in the stamped scanned full text"
---

## Definition

Adopt the SI system of units for this framework, with the following quantity
table and conventions; every symbol is a quantity of this framework and the
laboratory structure is that of [[def-em-lab-geometry]].

(a) [Coordinates and constants] $x^0=ct$ and each spatial coordinate $x^i$
carries the metre (m); the time coordinate $t$ carries the second (s); the
conversion constant $c>0$ carries m s$^{-1}$ and has the exact SI defining
value $c=299\,792\,458\ \mathrm{m\,s^{-1}}$; the elementary charge $e$ has the
exact SI defining value $e=1.602\,176\,634\times10^{-19}\ \mathrm{C}$, and this
item does not assert that physical charge is quantised; the magnetic constant
$\mu_0>0$ carries N A$^{-2}$ and is measured, so no exact numerical value of
$\mu_0$ is asserted. The pre-2019 SI fixed the historical nominal
$\mu_{0,\mathrm{nom}}:=4\pi\times10^{-7}\ \mathrm{H\,m^{-1}}
=4\pi\times10^{-7}\ \mathrm{N\,A^{-2}}$ exactly; since the revised SI took
effect on 20 May 2019, $\mu_0$ is experimentally determined. The SI brochure
quotes the nominal $\mu_{0,\mathrm{nom}}$ as the estimate at the 2019 adoption
with relative standard uncertainty $2.3\times10^{-10}$; this is historical
estimate and uncertainty context, not an exact equality for the actual $\mu_0$
or a current measured value. The electric constant is defined within the
framework by

$$\varepsilon_0:=(\mu_0c^2)^{-1}$$

in F m$^{-1}$, consistent with the exact SI relation $\varepsilon_0\mu_0=1/c^2$,
so that $c^2\varepsilon_0\mu_0=1$ and $\varepsilon_0$ inherits the relative
standard uncertainty of $\mu_0$.

(b) [Electromagnetic quantities] Charge $q$ carries the coulomb (C); the
charge density $\rho$ of the framework's source definition carries C m$^{-3}$
and the current density $J$ carries A m$^{-2}$, so that the four-current
components $(c\rho,J)$ carry A m$^{-2}$; the electric field $E$ carries
V m$^{-1}$; the magnetic field $B$ carries the tesla (T), where
$1\ \mathrm{T}=1\ \mathrm{N\,A^{-1}\,m^{-1}}$; the scalar potential $\varphi$
carries V and the vector potential $A$ carries T m, so that the four-potential
components $(\varphi/c,A)$ carry T m; the components of the electromagnetic
two-form of the framework's tensor definition carry T; a force carries the
newton (N), $1\ \mathrm{N}=1\ \mathrm{kg\,m\,s^{-2}}$.

(c) [Mechanical quantities] A rest mass parameter $m$ carries the kilogram
(kg) and a four-momentum $P=mU$ of the relativistic particle model carries
kg m s$^{-1}$; field energy density carries J m$^{-3}$, energy flux
W m$^{-2}$, so that $1\ \mathrm{W}=1\ \mathrm{J\,s^{-1}}=1\ \mathrm{V\,A}$.

(d) [Bookkeeping only] The unit of a quantity records the adopted system of
units; it does not show that a quantity is primitive in this or any other
framework, it contains no measurement, and it does not identify a quantity
with a similarly named quantity of another framework. The exact defining
values of $c$ and $e$ fix numerical conventions of the SI; they do not by
themselves identify $c$ with the vacuum propagation constant of ideal light,
which is the physical adoption of the framework's Minkowski postulate.
