---
id: rem-matrix-theory-three-point-amplitude-2026
kind: remark
title: Matrix Theory Three Point Amplitude 2026
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: physics
library: physics
deps: []
dependency_roles: {}
aliases: []
physical_scope: "Source-reported agreement for one three-supergraviton S-matrix element at specified compactified, analytically continued kinematics and its stated finite-N/decompactification limits; this is not full BFSS or M-theory equivalence."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Aidan Herderschee and Juan Maldacena, Three Point Amplitudes in Matrix Theory, arXiv:2312.12592v4"
      url: "https://arxiv.org/pdf/2312.12592v4"
      locator: "Abstract, Introduction, §§2–4, equations (8), (12), (20), (21), (24), (48), and (61), and Conclusions, PDF pp. 1–18: the selected S-matrix element, compactified kinematics, relative-sector boundary state, index computation, and finite-N agreement."
    - title: "Tom Banks, Willy Fischler, Stephen H. Shenker, and Leonard Susskind, M Theory As A Matrix Model: A Conjecture, arXiv:hep-th/9610043v3"
      url: "https://arxiv.org/pdf/hep-th/9610043v3"
      locator: "§§1 and 5, with §9: the broader matrix/M-theory statement is a conjecture and its derivation requirements remain."
---

## Statement

Herderschee and Maldacena report a match between the compactified eleven-dimensional momentum-space three-supergraviton amplitude $\mathcal A_3$ (their Eq. (20)) and the canonical-normalized BFSS $2\to1$ matrix-model S-matrix element $\mathcal A_{MM}^{c}$. Let $R_->0$ be the radius of the longitudinal lightlike circle $x^-$ and $R_9>0$ the radius of the additional compact transverse circle $x^9$. Label particles 1 and 2 incoming and particle 3 outgoing by integer quantum numbers $N_i>0$ and $n_i\in\mathbb Z$, with
$$x^-\sim x^-+2\pi R_-,\qquad x^9\sim x^9+2\pi R_9,\qquad -p_-^i=\frac{N_i}{R_-},\qquad p_9^i=-i p_8^i=\frac{n_i}{R_9},$$
and conservation is imposed by $N_3=N_1+N_2$ and $n_3=n_1+n_2$ The all-incoming convention negates particle 3’s momentum, so the conserved sum is $p^1+p^2-p^3=0$ in these physical in/out labels. The $x^8$ direction is noncompact, but the selected on-shell three-point kinematics analytically continue its momentum to $p_8^i=i n_i/R_9$; this is not a real-momentum configuration. The source’s canonical external-state normalization is in Eq. (12), and the compactified eleven-dimensional three-point amplitude in that convention is Eq. (20). Equation (21) is the BFSS action, while Eq. (24) is the compactified $1+1$-dimensional matrix-theory action. Its relative-sector boundary state is defined in Eq. (48); the final matrix-model amplitude is Eq. (61), which the source reports agrees precisely with Eq. (20). The boundary state enters the index computation used to obtain that matrix element.

The reported match holds at finite $N_i$ and $n_i$ in the source’s asymptotic extraction: $x_r^8\to\infty$ and $\Delta\tau=\tau_r-\tau_l\to\infty$ with $x_r^8/\Delta\tau$ fixed, where $x_r^8$ is the relative transverse boundary separation and $[\tau_l,\tau_r]$ is the Euclidean-time interval. These quantities have units of length in $\hbar=c=1$ units. The boundary-state computation uses gapped external sectors with nonzero $n_i$ and $\gcd(N_i,|n_i|)=1$, and a nonzero relative flux $(n_1N_2-n_2N_1)/N_3$; it supplies no independent derivation here for degenerate sectors. The source then takes $R_9\to\infty$ and $n_i\to\infty$ with $n_i/R_9$ fixed to recover the $0+1$-dimensional matrix-model amplitude, and takes $N_i\to\infty$ with $N_i/R_-$ fixed to reach the amplitude with noncompact $x^-$. This is one protected three-point test, not proof of full BFSS or M-theory equivalence.

## Statement references

[Herderschee and Maldacena, §§2–4, equations (8), (12), (20), (21), (24), (48), and (61)](https://arxiv.org/pdf/2312.12592v4)

[Banks, Fischler, Shenker, and Susskind, §§1 and 5](https://arxiv.org/pdf/hep-th/9610043v3)

## Status

The source-status review dated 2026-10-30 confirms the reported scope above: all three longitudinal momenta are nonzero, and the selected compactified index calculation uses an analytic continuation with one imaginary transverse momentum. Agreement at finite $N_i,n_i$ after this asymptotic extraction and in the source’s stated noncompact limits tests this one protected amplitude only; it does not establish amplitudes for arbitrary backgrounds or kinematics, nonprotected sectors, brane dynamics, or the full BFSS/M-theory equivalence. This is a report of the source’s calculation, not an independently reconstructed amplitude proof, an experiment, or a general theorem.

## Remarks

This is a reported source calculation, not an independently reconstructed amplitude proof, an experiment, or a general theorem.

