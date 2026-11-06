---
id: def-st-conformal-gauge-and-residual-symmetry
kind: definition
title: Conformal Gauge and Residual Symmetry
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: physics
library: physics
deps:
  - def-st-flat-bosonic-string-model
  - post-st-bosonic-polyakov-model
dependency_roles:
  def-st-flat-bosonic-string-model: formulation-prerequisite
  post-st-bosonic-polyakov-model: physical-assumption
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "Local classical conformal gauge for the two-dimensional Lorentzian Polyakov worldsheet on a cylinder or open strip; excludes global gauge-slice, moduli, and quantum Weyl-invariance claims."
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, University of Cambridge Part III lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§§1.3.1–1.3.2, printed pp. 20–23: diffeomorphism and Weyl gauge freedom and the local conformal gauge."
    - title: "Barton Zwiebach, A First Course in String Theory, second edition, Cambridge University Press, 2009"
      url: "https://pierre.ag.gerard.web.ulb.be/textbooks/books/A_First_Course_In_String_Theory.pdf"
      locator: "§24.6, printed pp. 583–587, equations (24.91)–(24.98): local conformal gauge and the remaining metric equations."
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

On a two-dimensional Lorentzian worldsheet patch where the auxiliary metric is written $h=e^{2\phi}\eta$, with $\eta=\operatorname{diag}(-1,+1)$, classical conformal gauge is the local diffeomorphism choice that makes the metric conformally flat followed by the Weyl choice that sets $\phi=0$. Locally, the two distinct null directions of a smooth Lorentzian metric give transverse one-dimensional foliations; coordinates $u,v$ constant along the opposite null directions make the metric have only a nonzero $du\,dv$ term. Reversing one coordinate if needed writes it as $h=-e^{2\phi}du\,dv$, and $\tau=(u+v)/2,\ \sigma=(u-v)/2$ gives the displayed conformal form. Weyl rescaling removes $e^{2\phi}$ on that patch.

Use light-cone coordinates $\sigma^\pm=\tau\pm\sigma$. An orientation- and time-orientation-preserving residual conformal transformation has the form $\sigma^+\mapsto f_+(\sigma^+)$, $\sigma^-\mapsto f_-(\sigma^-)$, where $f_\pm:\mathbb R\to\mathbb R$ are smooth increasing diffeomorphism lifts with positive derivatives. Conversely, each such pair preserves the conformal class because it pulls back $-d\sigma^+d\sigma^-$ to $-f_+'f_-'d\sigma^+d\sigma^-$.

For the closed cylinder, $\sigma\sim\sigma+2\pi$ means $\sigma^+\mapsto\sigma^++2\pi$ and $\sigma^-\mapsto\sigma^--2\pi$; a map descends to the cylinder exactly when both lifts satisfy $f_\pm(u+2\pi)=f_\pm(u)+2\pi$. The lift relation is illustrated by the quotient square:

```tikzcd
\mathbb R \arrow[r,"f_\pm"] \arrow[d,"q"'] & \mathbb R \arrow[d,"q"]\\
\mathbb R/(2\pi\mathbb Z) \arrow[r,"\bar f_\pm"'] & \mathbb R/(2\pi\mathbb Z)
```

Here $q(u)=[u]$, and the period condition is exactly what makes the square commute. For the open strip $\sigma\in[0,\pi]$, preservation of the boundary $\sigma=0$ forces $f_+=f_-=f$; preservation of $\sigma=\pi$ then requires $f(u+2\pi)=f(u)+2\pi$. This definition is local and does not quotient conformal Killing stabilizers or global moduli, nor claim a global conformal-gauge slice.

## Definition references

[[def-st-flat-bosonic-string-model]]

[[post-st-bosonic-polyakov-model]]
