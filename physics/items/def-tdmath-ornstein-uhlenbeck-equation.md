---
id: def-tdmath-ornstein-uhlenbeck-equation
kind: definition
title: "Ornstein–Uhlenbeck integral equation"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: ["def-brownian-motion","def-ito-integral-for-square-integrable-predictable-processes"]
justified_by: []
dependency_roles: {"def-brownian-motion":"mathematical-premise","def-ito-integral-for-square-integrable-predictable-processes":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "G. A. Pavliotis, Stochastic Processes and Applications"
      url: https://www.ma.imperial.ac.uk/~pavl/PavliotisBook.pdf
      locator: "Complete 155-page author-hosted book retrieved and read; §3.7 explicit Ornstein–Uhlenbeck solution; §§4.1–4.2 transition density and Fokker–Planck equation."
    - title: "David Tong, Kinetic Theory, Part 3"
      url: https://www.damtp.cam.ac.uk/user/tong/kintheory/three.pdf
      locator: "Complete 26-page lecture-note part retrieved and read; §§3.1.2–3.2.3, pp.54–70, Langevin dynamics, velocity diffusion, and Fokker–Planck equation."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Definition

Let $(\Omega,\mathcal F,(\mathcal F_t)_{t\ge0},P)$ carry a standard Brownian motion $B$ adapted to the filtration, with future increments independent of the present sigma-algebra. Fix constants $\gamma>0$ and $\sigma>0$, and an $\mathcal F_0$-measurable real random variable $X_0$ with finite second moment. A **continuous adapted solution of the Ornstein–Uhlenbeck equation** on $[0,T]$ is a continuous adapted process $X$ satisfying, almost surely for every $t\in[0,T]$,
$$X_t=X_0-\gamma\int_0^tX_s\,ds+\sigma B_t,$$
where the time integral is the ordinary Lebesgue integral along the continuous path. In differential notation this is $dX_t=-\gamma X_t\,dt+\sigma\,dB_t$, with the stochastic differential interpreted through the displayed integral equation.

The definition asserts neither existence nor uniqueness. The Itô integral in the explicit representation is the square-integrable predictable-process integral of [[def-ito-integral-for-square-integrable-predictable-processes]].
