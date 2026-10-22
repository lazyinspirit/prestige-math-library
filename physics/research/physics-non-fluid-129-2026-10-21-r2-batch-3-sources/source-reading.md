# Batch 3 source reading — Metric dependence, flux sectors and constitutive geometry

Research date: 2026-10-21. Both complete full-text PDFs were retrieved and inspected. The locators below identify the relevant sections actually read; this record does not claim that every page of the 176-page lecture script was read.

## Niklas Beisert — Elektrodynamik, ETH Zurich 2024 FS

URL: https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf

Complete 176-page lecture script; local raw PDF: research/physics-non-fluid-129-2026-10-21-r2-batch-3-sources/raw/beisert-ed-24fs.pdf, SHA-256 a85f21ce710b509dcda1d8eec3375e8eca4e0955037e611ed8fed50f7a36c098. Read:

- §5.3, printed pp. 5.3–5.4 (PDF pp. 62–63), especially equation (5.10), defining the displacement field from the electric field and polarization. This supports def-emx-excitation-form.
- §6.3–§6.4, printed pp. 6.3–6.4 (PDF pp. 71–72), equations (6.14)–(6.16), the four SI Maxwell equations, the source-continuity consistency condition, and the integral magnetic-flux relations. This supports pthm-emx-exterior-maxwell; the assigned proof independently expands the differential forms and establishes the stated fixed-cycle result.
- §8.5, printed p. 8.7 (PDF p. 92), equations (8.28)–(8.29), the source-free duality rotation and the discussion of possible magnetic sources. This supports pthm-emx-duality-vacuum and the vacuum-rotation premise of ex-emx-duality-pec-failure. The source's angle alpha corresponds to alpha = -theta in the assigned Hodge-star convention.

The note's monopole discussion is not adopted as a postulate or an empirical premise. Its duality and Maxwell calculations are conventional vector-field treatments; the local items supply the exact (-+++), x^0 = ct, form, and SI sign conversions.

## Friedrich W. Hehl, Yakov Itin, and Yuri N. Obukhov — Recent developments in premetric classical electrodynamics

URL: https://arxiv.org/pdf/physics/0610221

Complete 34-page invited-lecture review; local raw PDF: research/physics-non-fluid-129-2026-10-21-r2-batch-3-sources/raw/hehl-itin-obukhov-0610221.pdf, SHA-256 f800be15a112326af043ba0d3f7fc58239fa780e30cdfef999b4a3d1489a5e2e. Read:

- §§2–4, PDF pp. 3–6, equations (1), (3)–(5), and (9)–(11): electric-current, excitation, and field-strength forms; their 1+3 decompositions; the metric-free equations dH = J, dF = 0; magnetic-flux interpretation; and the separate optional magnetic-source equation. This supports def-emx-excitation-form, pthm-emx-exterior-maxwell, and the flux context of ex-emx-topological-flux-sector.
- §6, PDF pp. 8–9, equations (25)–(26): a vacuum constitutive relation uses the metric-dependent Hodge star, in contrast with the metric-free exterior equations. This supports the distinction in pthm-emx-exterior-maxwell.
- §7, PDF pp. 10–12, equations (28), (36), and (43): a general local linear constitutive tensor and its 1+3 representation. This supports the qualification that general material closures are separate from the exterior Maxwell equations.
- §11, PDF pp. 17–18, equations (76)–(85): total, bound, and free current/excitation splitting. This independently supports the need to identify the excitation equation's source as the free current in the material branch.

The paper uses a different metric/sign convention and a source notation in which the excitation is a 2-form called H, while H also denotes the magnetic-intensity 1-form in its 1+3 split. The assigned items use G for the excitation 2-form and preserve the framework's own H for magnetic intensity. The paper's impedance normalization is not imported; the exact SI factor is calculated from def-em-si-conventions and the local Hodge-star basis. Its unqualified global J = dH de Rham representation is not used: the local definition constructs the excitation from the supplied D and H fields. Its magnetic-charge extension is outside the adopted postulate.

## Harvested result dispositions

| Result read | Item | Disposition |
|---|---|---|
| D = epsilon_0 E + P and SI macroscopic field conventions | def-emx-excitation-form | Included as a supported convention, with the exact current published framework definition controlling. |
| Differential-form field strength, excitation, and current decomposition | def-emx-excitation-form | Included after converting the source's H excitation notation to the distinct local G form. |
| Four SI vacuum Maxwell equations and free-source rewriting | pthm-emx-exterior-maxwell | Included as the physical/model context; the complete component expansion and deduction are supplied locally. |
| Metric-free exterior equations separated from the metric-dependent Hodge-star closure | pthm-emx-exterior-maxwell | Included; the local proof computes the SI normalization and Hodge signs independently. |
| Source-free vacuum electric/magnetic duality | pthm-emx-duality-vacuum | Included; the local proof establishes the full differential-form statement from linearity and star_eta^2 = -id. |
| Magnetic-flux and source-free exterior context | ex-emx-topological-flux-sector | Included as context; the finite cycle, nonzero period, and no-extension argument are proved locally with inspected mathematical suppliers. |
| Duality applied to the ideal PEC boundary | ex-emx-duality-pec-failure | The literature result is used only for the source-free rotation; the boundary model and counterexample are inline local deductions. |
| Global excitation existence inferred from charge conservation via de Rham theory | None | Out of scope and not adopted; global topology can obstruct a potential, and the local form definition does not assert one. |
| Magnetic-source or monopole extensions | None | Out of scope; no magnetic source is introduced into the framework. |

No retrieval failed. source-fetch-check --stamp recorded successful full-text fetches for all four page/source entries; the two source URLs each returned a complete PDF, and the returned SHA prefixes match the retained raw files.

## Local mathematical prerequisites

The A page also includes `def-emx-continuous-chain-integral` and `lem-emx-c1-stokes-on-standard-3-simplex`. These are local mathematical suppliers added because the flux-transport proof uses a $C^1$ field and the available smooth-only Stokes theorem does not cover that regularity. Their statements and complete proofs are derived from the current Jordan/Riemann-integral, simplex-orientation, Newton–Leibniz, Fubini, affine change-of-variables, and partial-derivative suppliers. Neither helper attributes a mathematical result to Beisert or Hehl; those sources support the physical form conventions, equations, and flux interpretation listed above.
