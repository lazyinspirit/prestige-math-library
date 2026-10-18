---
id: def-spherical-bessel-and-hankel-functions
kind: definition
title: Spherical Bessel and outgoing Hankel function conventions
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-sine-and-cosine-by-power-series, def-complex-exponential]
justified_by: [lem-spherical-bessel-and-hankel-radial-solutions]
proof_strategy: not-applicable
axiom_use: "No axiom is used. These are exact symbolic functions; no stable or certified evaluation algorithm is asserted."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Maximilian Kreuzer, Quantum Theory: Lecture Notes, Chapter 8"
      url: "https://hep.itp.tuwien.ac.at/~kreuzer/Quanten.15.07.09.pdf"
      locator: "PDF pp. 147–149, spherical Bessel equation, regular and outgoing radial solutions, and recurrences."
    - title: "Pierre Capel, Introduction to Scattering Theory, TALENT lecture notes"
      url: "https://indico.mitp.uni-mainz.de/event/279/sessions/1001/attachments/2951/3418/Capel1TALENTFB22ho.pdf"
      locator: "PDF pp. 18–19, spherical Bessel functions and recurrence relations; the local convention uses the outgoing Hankel sign fixed below."
verification:
  precheck: n/a
---

## Definition

For real $z>0$, let $D_z:=z^{-1}\frac{d}{dz}$ and define, for integers $\ell\ge0$,
$$j_\ell(z):=(-z)^\ell D_z^\ell\left(\frac{\sin z}{z}\right),\qquad h_\ell^{(1)}(z):=(-z)^\ell D_z^\ell\left(-i\frac{e^{iz}}{z}\right).$$
The definition fixes the outgoing $e^{iz}$ convention. The functions solve the radial Helmholtz equation and have the recurrence, origin, Wronskian, and infinity behavior by [[lem-spherical-bessel-and-hankel-radial-solutions]].

These symbolic definitions assert no stable or certified numerical evaluation algorithm for large $\ell$ or $z$.
