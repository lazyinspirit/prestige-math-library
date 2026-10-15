---
id: post-td-unattainability-scoped
kind: postulate
title: Finite-protocol unattainability on a declared zero-temperature boundary
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: A model-specific full family of admitted finite-duration cooling protocols for a nonempty positive-temperature domain and an explicitly represented nonempty zero-temperature boundary; the postulate is substantive only when positive-start protocols are admitted and the family is not defined to exclude the boundary by construction. No universal statement about all possible controls, dynamics, or materials is made.
deps:
  - def-td-equilibrium-state-domain
  - def-td-process-and-protocol
  - def-td-si-quantities
  - def-td-temperature-pressure-chemical-potential
  - def-natural-numbers
dependency_roles:
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-process-and-protocol: operational-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-td-temperature-pressure-chemical-potential: formulation-prerequisite
  def-natural-numbers: mathematical-premise
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Masanes and Oppenheim, A derivation (and quantification) of the third law of thermodynamics, arXiv 1412.3828v4, Introduction and Fundamental Assumptions
      url: https://arxiv.org/pdf/1412.3828v4
    - title: David Tong, Statistical Physics, complete Chapter 4 lecture-note PDF, §4.5 (entropy-form context)
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapter 2, §2.6.2 (entropy-form context)
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf
dependency_level: 6
verification:
  sources_checked:
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    by: "Completed delegated workflow source/scope reviewers and adjudicators; owner accepted existing evidence"
---

## Postulate

For a declared material constitution $c$, let $D_{c,+}\subseteq D_c$ be its designated equilibrium states with finite positive absolute temperature, and require $D_{c,+}\ne\varnothing$ for a nonvacuous application. Let $D_0$ be a separately declared nonempty set of zero-temperature boundary preparations, disjoint from $D_{c,+}$, and let
$
\overline D_c:=D_{c,+}\sqcup D_0,\qquad
\overline T_c:\overline D_c\to[0,\infty)
$
extend the thermodynamic temperature from [[def-td-temperature-pressure-chemical-potential]] by $\overline T_c|_{D_{c,+}}=T_c$ and $\overline T_c(y)=0$ for $y\in D_0$.

Let $\mathcal U_c$ be the model-declared set of cooling controls, and let $\mathcal C\subseteq\overline D_c\times\overline D_c\times\mathcal U_c\times(0,\infty)$ be the model's full declared family of admitted cooling operation records. Each record $\gamma=(x^-,x^+,u,\tau)$ has initial-endpoint map $i(\gamma)=x^-$, final-endpoint map $f(\gamma)=x^+$, control $u\in\mathcal U_c$, and finite positive duration $\tau(\gamma)=\tau$ seconds. Its positive-temperature portions obey the process conventions of [[def-td-process-and-protocol]], while the model separately declares how a boundary endpoint in $D_0$ is represented. Define two records to be compatible exactly when $f(\gamma)=i(\gamma')$. A finite protocol is a tuple $(\gamma_1,\ldots,\gamma_m)$ for $m\in\mathbb N$, $m\ge1$ ([[def-natural-numbers]]), with each successive pair compatible; its initial and final endpoints are $i(\gamma_1)$ and $f(\gamma_m)$, and its duration is $\sum_{j=1}^m\tau(\gamma_j)$. Let $\mathcal P_{\mathcal C}$ be the set of all such finite protocols and let $\mathcal P_{\mathcal C}^{+}:=\{p\in\mathcal P_{\mathcal C}:i(p)\in D_{c,+}\}$. For each $p=(\gamma_1,\ldots,\gamma_m)$, define $i(p):=i(\gamma_1)$, $f(p):=f(\gamma_m)$, and $\tau(p):=\sum_{j=1}^m\tau(\gamma_j)<\infty$. For a nonvacuous application, require $\mathcal P_{\mathcal C}^{+}\ne\varnothing$ and declare $\mathcal C$ as the full operation family rather than defining it to exclude boundary endpoints. Define $\operatorname{Reach}_{\mathcal C}:=\{(i(p),f(p)):p\in\mathcal P_{\mathcal C}\}\subseteq\overline D_c\times\overline D_c$.

The adopted operational unattainability postulate is
$
\operatorname{Reach}_{\mathcal C}\cap(D_{c,+}\times D_0)=\varnothing.
$
This is a separate physical assumption from the Nernst heat-theorem postulate; neither is deduced here from the first or second law. If $D_{c,+}$, $D_0$, or $\mathcal P_{\mathcal C}^{+}$ is empty, or if no boundary endpoint is available in the declared operation-record space because the model defines every operation to stay in $D_{c,+}$, the assertion is absent or vacuous and is not evidence for unattainability. The postulate does not remove the need to state the actual state space, controls, and admitted operations.

## Source scope

Masanes and Oppenheim, Introduction, formulate unattainability in terms of finitely many operations in finite time. The reachability notation above is this framework's explicit formulation of that operational principle. Their quantum cooling bounds require additional dynamical, bath, and work-resource assumptions, listed in their Fundamental Assumptions; those bounds are not a derivation of the postulate for the arbitrary declared operation family here. Tong §4.5 and Arovas §2.6.2 provide context for the distinct entropy form of the third law, not this operational exclusion.
