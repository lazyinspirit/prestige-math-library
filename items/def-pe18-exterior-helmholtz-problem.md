---
id: def-pe18-exterior-helmholtz-problem
kind: definition
title: Sound-soft exterior Helmholtz problem for a spherical obstacle
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
justified_by: []
proof_strategy: not-applicable
axiom_use: "No axiom is used; this fixes the classical model and radiation convention."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Plamen Stefanov, Scattering and Inverse Scattering in R^n, graduate lecture notes"
      url: "https://www.math.purdue.edu/~stefanov/publications/SCATTERING.pdf"
    - title: "Pierre Capel, Introduction to Scattering Theory, TALENT lecture notes"
      url: "https://indico.mitp.uni-mainz.de/event/279/sessions/1001/attachments/2951/3418/Capel1TALENTFB22ho.pdf"
---

## Definition

Fix $a>0$, $k>0$, and $f\in C^\infty(\mathbb S^2;\mathbb C)$. Write $S_a=\{x\in\mathbb R^3:|x|=a\}$. The sound-soft exterior Helmholtz problem is to find a complex-valued $u\in C^2(\{x\in\mathbb R^3:|x|>a\})$ that extends continuously to $\{x\in\mathbb R^3:|x|\ge a\}$ and satisfies $(\Delta+k^2)u=0$ for $|x|>a$, with boundary restriction $u|_{S_a}(a\omega)=f(\omega)$, and
$$\lim_{r\to\infty}\sup_{\omega\in\mathbb S^2}\left|r\bigl(\partial_r u(r\omega)-ik u(r\omega)\bigr)\right|=0.$$
The time factor is $e^{-i\omega t}$, so this is the outgoing convention. The obstacle is the closed ball $\{|x|\le a\}$; its boundary is smooth and its exterior is connected. This definition makes no claim for nonspherical obstacles or nonsmooth data.
