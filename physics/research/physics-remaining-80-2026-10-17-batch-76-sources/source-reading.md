# Batch 76 full-text source reading

Search date: 2026-10-17. The search focused on authoritative photon-gas,
Planck-spectrum, energy-density, entropy-density, and radiative-flux treatments.
Both selected full-text sources were retrieved successfully; no retrieval
failure, retry, dropped source, or invented measurement is recorded.

## 1. MIT OpenCourseWare 8.333, Lecture 20

URL: <https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/368b2180e6efa1417ab336d79b2df6db_MIT8_333F13_Lec20.pdf>

The complete 15-page PDF was retrieved to
`research/physics-remaining-80-2026-10-17-batch-76-sources/raw/mit-8-333-lecture-20.pdf`.
SHA-256: `f6f22a364cb485532913236c00397f89c810ae582337c7d7dd3da776a6e7bf6f`.
I read the complete photon-gas section, equations VI.49–VI.61 (PDF pages
12–14; printed pages 128–131), including the normal-mode and polarization
setup, periodic wavevectors, occupation Hamiltonian and product partition
function, Planck energy integral, density-of-states spectrum, and hemisphere
angular integral producing the $c/4$ flux factor. The source also distinguishes
the ignored zero-point term and gives the standard Stefan coefficient.

Disposition: included as an independent treatment of the conventional model
and continuum formulas for `thm-tgr-photon-planck-flux`; inline for the Planck
flux input of `prop-tgr-ideal-evaporation-accounting`. The local items supply
the countable finite-box trace convergence, all needed energy-moment bounds,
the actual full diagonal-state entropy sum, the singular entropy Riemann limit,
and the conditional mass ODE. The MIT continuum replacement is not imported as
a proof of those convergence claims.

## 2. University of Mississippi PHY 727, Lecture 18, “The Photon Gas”

URL: <https://www.phy.olemiss.edu/~luca/phys727/Topics/L18_photons.pdf>

The complete two-page PDF was retrieved to
`research/physics-remaining-80-2026-10-17-batch-76-sources/raw/ole-miss-photon-gas-lecture-18.pdf`.
SHA-256: `b5be19e03a74677255ebc4e372b23cdc7c5c749f59b0b2e242fe2a56bc933963`.
Both pages were read. They give the two-polarization periodic mode labels,
bosonic occupation states, the formal product partition function, the
continuum density of states, the Planck spectrum, the $zeta(4)$ energy
integral, and entropy and energy densities. The first page explicitly warns
that equilibration of a photon field depends on its material walls; the local
mathematical result consequently makes no claim that the model describes a
physical apparatus or a measured field.

Disposition: included as the independent course-note treatment for
`thm-tgr-photon-planck-flux`; inline for the Planck input of
`prop-tgr-ideal-evaporation-accounting`. The note derives entropy from a
thermodynamic-potential derivative after a continuum approximation. It does
not prove the finite-box trace or its full diagonal von Neumann entropy; those
are proved conditionally and directly in the local argument. The zero mode is
handled explicitly in the local model and counterexample.

## Searches and dispositions

- Search: `site:edu lecture notes photon gas Planck law entropy density Stefan Boltzmann pdf thermodynamics`.
  Outcome: found the full MIT 8.333 photon lecture and University of Mississippi
  photon-gas lecture; both direct PDFs were retrieved and inspected.
- Search: `photon gas lecture notes Planck spectrum entropy density 4/3 radiation flux pdf`.
  Outcome: confirmed the Mississippi notes contain the independent spectrum and
  entropy treatment; no additional source was needed.
- Search: `blackbody radiation photon gas partition function entropy flux textbook lecture notes pdf Stefan Boltzmann law`.
  Outcome: confirmed the MIT photon section includes the one-sided angular flux
  calculation. Other results were not harvested; no source is marked dropped.

All harvested source results are dispositioned in
`research/physics-remaining-80-2026-10-17-batch-76.coverage.json`. These sources
are mathematical-literature comparisons, not experimental reports. No
measurements, uncertainties, or empirical conclusions are claimed.
