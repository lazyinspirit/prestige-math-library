---
id: def-gr-observer-congruence-and-adapted-charts
kind: definition
title: "Observer congruences, their observer curves and adapted charts"
status: draft
origin: session
domain: mathematics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-observer-and-rest-space, def-gr-smooth-lorentzian-objects, def-smooth-vector-field-as-a-tangent-bundle-section, def-integral-curve-of-a-vector-field, thm-unique-maximal-integral-curve-through-each-point, prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure, def-countable-choice]
dependency_roles:
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-integral-curve-of-a-vector-field: mathematical-premise
  thm-unique-maximal-integral-curve-through-each-point: mathematical-premise
  prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 'worldlines' and 'proper time' on the parametrized curves of particles and their four-velocities, printed pp. 25-27 (PDF pp. 32-34)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 1.9: the definition of an integral curve and the unique integral curve through each point, printed pp. 21-22 (PDF pp. 22-23)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 2.2.2-2.2.3 on vector fields and integral curves, printed pp. 62-64 (PDF pp. 69-71)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]) and let $U\subseteq M$ be a nonempty
open subset, carrying the restricted smooth structure of
[[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]].

**(a) Congruences.** An **observer congruence** on $U$ is a smooth vector field
$n$ on $U$ ([[def-smooth-vector-field-as-a-tangent-bundle-section]]) such that
$n_q$ is an observer at $q$ for every $q\in U$
([[def-gr-observer-and-rest-space]]); explicitly,

$$g_q(n_q,n_q)=-1\quad\text{and}\quad g_q(n_q,N_q)<0\qquad\text{for every }q\in U .$$

Since $g_q(n_q,n_q)=-1$, the field $n$ is nowhere vanishing. A single observer
at a point is therefore not a congruence, and a congruence is not an ordered
basis or frame of $T_qM$.

**(b) Observer curves.** Because $n$ is a smooth vector field on $U$, the
theorem on maximal integral curves
([[thm-unique-maximal-integral-curve-through-each-point]],
[[def-integral-curve-of-a-vector-field]]) assigns to every $q\in U$ a unique
maximal integral curve $\gamma_q:I_q\to U$ of $n$ with $\gamma_q(0)=q$,
defined on an open interval $I_q\subseteq\mathbb R$. We call these curves the
**observers** (or **observer curves**) of the congruence. Each curve is regular:
for every $s\in I_q$, $\gamma_q'(s)=n_{\gamma_q(s)}$ and

$$g_{\gamma_q(s)}\bigl(n_{\gamma_q(s)},n_{\gamma_q(s)}\bigr)=-1,$$

so its tangent is nonzero, unit timelike and future-directed. Completeness of
the maximal intervals $I_q$, and global product or foliation structure of
$U$, are not asserted. The parameter $s$ is the flow parameter of $n$; it is
not identified with any clock reading here.

**(c) Adapted charts.** An **$n$-adapted chart** is a smooth chart
$(u^0,u^1,u^2,u^3):U'\to\mathbb R^4$ of $M$ whose domain $U'$ is a nonempty
open subset of $U$ and whose **spatial coordinates** $u^1,u^2,u^3$ are constant
along every integral curve $\gamma:J\to U'$ of the restricted field
$n|_{U'}$, where $J$ is an interval. Equivalently, for each maximal observer
curve $\gamma_q:I_q\to U$, each connected component $K$ of
$\gamma_q^{-1}(U')$ (a maximal nonempty interval contained in this open
subset of $\mathbb R$), and $i=1,2,3$, the function
$u^i\circ\gamma_q$ is constant on $K$. If $q\in U'$ and $0\in K$, this
constant is $u^i(q)$. This condition does not identify labels on different
components when a maximal curve leaves and re-enters $U'$. No global adapted
chart, and no adapted chart on all of $U$, is
asserted by this definition; one exists near every point of $U$ by the
existence corollary proved on this page.

**(d) Scope.** A congruence is a field of observer directions on an open set; it
is not a chart, not a tetrad field, and not a family of parametrized
worldlines with specified domains. The physical reading of its observer curves
as ideal-clock worldlines, and the identification of the flow parameter with a
measurable time, belong to the physical postulates of the framework and are not
asserted here.

## Remarks

**Choice convention.** The smooth structure used for the vector field $n$ is
the tangent-bundle structure of
[[def-smooth-vector-field-as-a-tangent-bundle-section]], which assumes the
axiom $\mathrm{AC}_\omega$ of [[def-countable-choice]]; this definition inherits
that assumption and uses no further choice principle. The restricted structure
on $U$ is the canonical one of the cited proposition.
