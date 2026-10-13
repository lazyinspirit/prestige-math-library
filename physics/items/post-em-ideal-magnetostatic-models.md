---
id: "post-em-ideal-magnetostatic-models"
kind: "postulate"
title: "Physical adoption of the declared ideal magnetostatic loop, line and cylindrical-sheet models"
domain: physics
status: published
origin: session
dependency_level: 18
deps: ["def-em-steady-current-regime", "def-em-lab-geometry", "def-em-si-conventions", "def-countable-choice"]
dependency_roles:
  "def-em-steady-current-regime": "formulation-prerequisite"
  "def-em-lab-geometry": "formulation-prerequisite"
  "def-em-si-conventions": "formulation-prerequisite"
  "def-countable-choice": "mathematical-premise"
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge lecture notes"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Chapter 3 printed pp. 41-46 and 51: neutral steady-current reduction, infinite wire, infinite cylindrical solenoid and thin-wire model. These sections were read in the available full 236-page PDF text; no whole-book reading is claimed."
physical_scope: "Additional classical physical adoption in the named inertial laboratory for the exact ideal closed loop, infinite straight line and infinite cylindrical sheet models, with $E=0$ and $\\rho=0$. No experiment, matter dynamics or self-force."
---

## Postulate

Assume Countable Choice ($\mathrm{AC}_\omega$), with the exact meaning of [[def-countable-choice]]. In the named inertial laboratory model of [[def-em-lab-geometry]], with the positive constants and SI conventions of [[def-em-si-conventions]], adopt the following additional classical physical idealization: a loop, infinite straight line or infinite cylindrical sheet source defined by [[def-em-steady-current-regime]](c1)-(c3), with zero charge density, is modeled by a time-independent $B$ satisfying exactly the admissibility predicate (c4), together with $E=0$ and $\rho=0$. Thus $\operatorname{div}B=0$ and $\operatorname{curl}B=\mu_0J$ hold distributionally on $\mathbb R^3$, with the stated off-source regularity, symmetry and decay; the electrostatic and temporal Maxwell identities are zero. This physical adoption extends to these explicitly declared source types only. It is separate from the earlier $L^1$-source and point/compact-sheet postulates, which do not include these line and noncompact sheet sources. No existence, uniqueness, finite self-energy, force product, self-force, apparatus accuracy, matter dynamics or empirical certainty is asserted.

## Status and scope

This is an adopted physical assumption, not a theorem: it states which ideal models this framework elects to use, and it is not deduced from the vacuum equations or from any experiment. The mathematical content it refers to — the exact source functionals of [[def-em-steady-current-regime]](c1)-(c3) and the admissibility predicate (c4) — is fixed by that definition; the postulate adds the physical decision to treat those declared objects as sources of fields in the named laboratory. Existence and distributional consistency of the fields for the line and sheet models are established separately by the mathematical lemmas of this page, and the physical reading of the compact thin-loop limit remains a declared idealization rather than a measured property of any coil. The assumption carries no empirical uncertainty record because it reports no measurement; any later empirical comparison must state its own preparation, apparatus and sampling assumptions, and agreement would support the model under those conditions rather than establish it.

## Source notes

Tong, Chapter 3, printed pp. 41-46 and 51, adopts neutral steady currents, the infinite wire, the infinite cylindrical solenoid and the thin-wire model as idealizations of a long straight conductor and a tightly wound solenoid. Those bounded passages are the source context for the adopted models. The exact source functionals, the admissibility predicate and the field objects are this framework's own precise formulation, not claims reproduced verbatim from the source; no source is claimed to prove the idealization exact for any apparatus.
