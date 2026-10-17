---
id: def-tgr-entropy-only-radiation-state
kind: definition
title: "Separate entropy-only radiation state maps"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
deps: []
dependency_roles: {}
justified_by: []
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "Full lecture notes; §4.3 equations (4.10)–(4.14), equation-of-state and first-law conventions."
    - title: "Nicolas Borghini, Elements of Hydrodynamics, University of Bielefeld lecture notes (2022)"
      url: "https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics22/Hydrodynamics2022.pdf"
      locator: "Full lecture notes; §XI.2, printed pp. 170–171 (PDF pp. 178–179), equations (XI.17)–(XI.19) and the following temperature/entropy scaling discussion, zero-charge ultrarelativistic radiation equation-of-state and temperature scaling."
---

## Definition

Fix a real parameter $a_R>0$ and let the temperature coordinate range over the open interval $T\in(0,\infty)$. Define the entropy-only radiation state maps

$$\varepsilon_T(T):=a_RT^4,\qquad p_T(T):=\frac13a_RT^4,\qquad s_T(T):=\frac43a_RT^3.$$

Here $\varepsilon_T$ and $p_T$ are scalar-valued maps on $(0,\infty)$, and $s_T$ is the entropy coordinate as a scalar-valued map on the same interval. Put $h_T(T):=\varepsilon_T(T)+p_T(T)$. No particle-number coordinate, particle-number current, or chemical-potential coordinate is part of this state space.

Also define maps on the positive entropy-coordinate interval by

$$\tau(s):=\left(\frac{3s}{4a_R}\right)^{1/3},\qquad \varepsilon_s(s):=a_R\tau(s)^4,\qquad p_s(s):=\frac13\varepsilon_s(s),\qquad s\in(0,\infty).$$

The displayed formulas define functions on the stated domains. In the conventional SI physical reading, $T$ is measured in K, $a_R$ in J m$^{-3}$ K$^{-4}$, $\varepsilon_T,p_T$ in J m$^{-3}$, and $s_T$ in J m$^{-3}$ K$^{-1}$. These units do not assign an empirical value to $a_R$. In particular, this definition does not derive a quantum blackbody coefficient or assert that any physical system realizes these maps.
