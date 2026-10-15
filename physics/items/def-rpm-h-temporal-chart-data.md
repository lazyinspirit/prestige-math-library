---
id: def-rpm-h-temporal-chart-data
kind: definition
title: "Temporal chart with lapse, shift and positive slice metric"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
physical_scope: "Local lapse-shift chart and observer split for particle models; no global foliation or empirical claim is made."
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-countable-choice
  - def-gr-smooth-lorentzian-objects
dependency_roles:
  def-countable-choice: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
sources:
  references:
    - title: "Eric Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, complete lecture notes (arXiv:gr-qc/0703035)"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
      locator: "Complete 220-page notes; §§3.3.1–3.3.3, printed pp. 41–44, and §§4.2.2–4.2.3, pp. 56–58; full relevant sections inspected."
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

Assume countable choice ACω, as in [[def-countable-choice]], for the smooth cotangent-bundle carrier convention used by this page; no full Axiom of Choice is assumed.

Let $(M,g,T)$ be a smooth, time-oriented Lorentzian four-manifold of signature $(-+++)$, with the geometric meaning fixed by [[def-gr-smooth-lorentzian-objects]]. Here $T$ denotes the future-cone field called $N$ in that definition. Let $I\subset\mathbb R$ be a nonempty open interval, let $\Omega\subset\mathbb R^3$ be open, and let $U\subset M$ be open. A **temporal product chart** is a smooth diffeomorphism $\chi:U\to I\times\Omega$. Its coordinate functions $x^0,x^1,x^2,x^3$ are the four component functions of $\chi$. Spatial indices $i,j$ range over $1,2,3$, spacetime indices $a,b$ range over $0,1,2,3$, and repeated upper/lower indices are summed. We require $x^0$ and each $x^i$ to have length units in the physical interpretation.

The chart has **lapse-shift data** $(N,\beta,h)$ when $N:I\times\Omega\to(0,\infty)$, $\beta^i:I\times\Omega\to\mathbb R$, and $h_{ij}:I\times\Omega\to\mathbb R$ are smooth, $h_{ij}=h_{ji}$, and the matrix $(h_{ij})$ is positive definite at each point, with

$$g=-N^2(dx^0)^2+h_{ij}(dx^i+\beta^i dx^0)(dx^j+\beta^j dx^0).$$

Write $h^{ij}$ for the inverse matrix. The normal field is

$$n=N^{-1}(\partial_0-\beta^i\partial_i).$$

Direct contraction gives $g(n,n)=-1$; require that $n$ is future-directed in the supplied time orientation. This field of observers is distinct from the coordinate vector $\partial_0$, which may be spacelike. The coefficients $N,\beta^i,h_{ij}$ are dimensionless when all four coordinates are in metres. This definition is local to the specified product chart; it asserts no global temporal foliation.
