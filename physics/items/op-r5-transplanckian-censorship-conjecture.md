---
id: op-r5-transplanckian-censorship-conjecture
kind: open-problem
title: "Trans-Planckian censorship conjecture in cosmology"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 2
deps: ["def-r5-cosmology-4d-scalar-eft-data", "def-r5-swampland-eft-claim-data"]
dependency_roles:
  "def-r5-cosmology-4d-scalar-eft-data": "formulation-prerequisite"
  "def-r5-swampland-eft-claim-data": "formulation-prerequisite"
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this open-problem in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
sources:
  references:
    - title: "Trans-Planckian Censorship and the Swampland"
      url: "https://arxiv.org/pdf/1909.11063v5"
      locator: "Complete paper, PDF pp. 1–6, especially Eq. (2.1): expansion bound and mode interpretation assumptions."
    - title: "Hitchhiker’s Guide to the Swampland: The Cosmologist’s Handbook to the string-theoretical Swampland Programme"
      url: "https://arxiv.org/pdf/2509.02632v1"
      locator: "§II.Q, PDF p. 84, TCC statement and cosmological qualifications; review dated 5 September 2025, with its pre-2025 literature cutoff stated at PDF p. 2, note 8."
    - title: "Michele Cicoli, Joseph P. Conlon, Anshuman Maharana, Susha Parameswaran, Fernando Quevedo, and Ivonne Zavala, String Cosmology: from the Early Universe to Today, arXiv:2303.04819v2"
      url: "https://arxiv.org/pdf/2303.04819v2"
      locator: "§7.7, “Swampland Conjectures,” especially item 7, “Trans-Planckian censorship conjecture,” PDF p. 148; complete §7.7 (PDF pp. 144–148) inspected."
    - title: "Nathan Benjamin Agmon, Alek Bedroya, Monica Jinwoo Kang, and Cumrun Vafa, Lectures on the string landscape and the Swampland, arXiv:2212.06187v2"
      url: "https://arxiv.org/pdf/2212.06187v2"
      locator: "TCC lecture, PDF pp. 214–220; full lecture notes."
physical_scope: "Open cosmological expansion-bound conjecture on a specified interval and fixed Planck/frame convention; the mode-freezing interpretation is conditional on the stated perturbation and horizon assumptions and is not an observational finding."
---

## Open problem

Use the supplied four-dimensional Einstein-frame cosmology and swampland-claim data. On a fixed interval $[t_i,t_f]$ with $t_i<t_f$, let $a:[t_i,t_f]\to(0,\infty)$ be a $C^1$ scale factor and define $H(t):=\dot a(t)/a(t)>0$. Fix a constant reduced Planck mass $M_P$ and set $\ell_P:=M_P^{-1}$, $a_i:=a(t_i)$, $a_f:=a(t_f)$, and $H_f:=H(t_f)$. For that mode interpretation, specify a spatially flat product chart $ds^2=-dt^2+a(t)^2\delta_{ij}dx^idx^j$ and its unit comoving observer $n=\partial_t$. Use spatial Fourier modes $e^{i\mathbf k\cdot\mathbf x}$, $\mathbf k\ne0$, with physical momentum $p(t)=|\mathbf k|/a(t)$ measured by $n$ and reduced physical wavelength $\lambda(t)=p(t)^{-1}=a(t)/|\mathbf k|$; the use of reduced wavelength fixes the $2\pi$ convention in the cutoff comparison. In the source's mode interpretation, a mode is sub-Planckian at $t_i$ when its physical wavelength in the chosen frame is less than $\ell_P$, super-Hubble at $t$ when that wavelength exceeds $H(t)^{-1}$, and frozen when its specified mode amplitude is approximately time-independent outside the Hubble scale.

The trans-Planckian censorship conjecture (TCC) proposes $(a_f/a_i)\ell_P < H_f^{-1}$, equivalently $\int_{t_i}^{t_f}H\,dt<\ln(M_P/H_f)$ in the fixed reduced-Planck convention. For a history-wide version, impose the bound at every pair of endpoints $t_i\leq s<t\leq t_f$: $(a(t)/a(s))\ell_P<H(t)^{-1}$. Then any mode with $\lambda(s)<\ell_P$ has $\lambda(t)=(a(t)/a(s))\lambda(s)<H(t)^{-1}$ at each later time in the interval. For modes initially sub-Planckian at $t_i$ only, it suffices to impose this condition for $s=t_i$ and every intermediate endpoint $t$. The single bound at $t_f$ alone does not exclude an earlier super-Hubble crossing when $a(t)H(t)$ is nonmonotone. The source's additional physical reading about remaining quantum and not freezing requires a separately specified cutoff, mode evolution and freeze-out prescription; it is not deduced from the endpoint inequality alone. The integral identity $\int_{t_i}^{t_f}H\,dt=\ln(a_f/a_i)$ follows by integrating $d(\ln a)/dt=H$, so the inequalities are algebraically equivalent. With a varying Planck scale, a different frame or a different endpoint prescription, the bound must be reformulated. The mode interpretation is not a consequence of that integral identity alone. This is a conjecture about an expanding interval, not an observed bound.

## Open problem references

[[def-r5-cosmology-4d-scalar-eft-data]]

[[def-r5-swampland-eft-claim-data]]

[Bedroya–Vafa, Eq. (2.1), pp. 1–6](https://arxiv.org/pdf/1909.11063v5)

[Cicoli et al., §7.7, “Swampland Conjectures,” p. 148](https://arxiv.org/pdf/2303.04819v2)

## Status

Status review dated 2025-09-05: the bounded record is Bedroya–Vafa, §2, PDF pp. 4–6; Agmon–Bedroya–Kang–Vafa, PDF pp. 214–220; Cicoli et al., §7.7, PDF pp. 144–148; and Lehnert, §II.Q, PDF p. 84. Lehnert states that its reviewed literature was published before 2025 (PDF p. 2, note 8). Bedroya–Vafa propose the expansion bound and discuss its mode interpretation and conditional cosmological deductions; these do not prove the conjecture or constitute observations. The cited reviews describe qualifications, including questions about constraints on a time-dependent EFT. The bounded source set leaves the universal claim conjectural. This item makes no status claim about literature after that cutoff and does not claim an exhaustive search.
