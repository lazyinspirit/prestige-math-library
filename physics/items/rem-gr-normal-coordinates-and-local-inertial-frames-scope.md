---
id: rem-gr-normal-coordinates-and-local-inertial-frames-scope
kind: remark
title: "Scope of normal coordinates and of the local-inertial-frame reading"
status: published
origin: session
domain: physics
dependency_level: 10
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-gr-point-normal-and-exponential-coordinate-charts, thm-gr-local-geodesics-and-exponential-map, post-gr-ideal-clocks-and-free-fall, def-gr-observer-and-rest-space, def-gr-observer-congruence-and-adapted-charts, def-gr-metric-selected-connection]
dependency_roles:
  thm-gr-point-normal-and-exponential-coordinate-charts: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  post-gr-ideal-clocks-and-free-fall: physical-assumption
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
physical_scope: "Scope note on the physical reading of point-normal and exponential coordinate charts: what the construction does and does not assert about local inertial frames, freely falling observers and the equivalence principle in the classical smooth model. Excludes global frames, neighborhood flatness, curvature claims, and any empirical equivalence-principle statement."
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 3.4: normal coordinates are valid at the point p only and the connection components away from p need not vanish, printed pp. 38-40 (PDF pp. 39-41); section 6.1: the equivalence principle is a motivating principle, printed pp. 57-59 (PDF pp. 58-60)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 2 'Riemann normal coordinates', printed pp. 50-51 (PDF pp. 57-58), and Ch. 4 'the principle of equivalence', printed pp. 97-99 (PDF pp. 104-106)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.3.2 'The Equivalence Principle' with the limitations of the local statement, printed pp. 121-122 (PDF pp. 128-129)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: n/a
---

## Scope note

This remark separates the mathematics of
[[thm-gr-point-normal-and-exponential-coordinate-charts]] and
[[thm-gr-local-geodesics-and-exponential-map]] from the physical reading
usually attached to them, and is bookkeeping: it establishes no mathematical
result and no physical law.

- **What the construction gives.** For every event $p$ there is a chart with
  $g_{ab}(p)=\eta_{ab}$, $\Gamma^a{}_{bc}(p)=0$ and
  $\partial_ag_{bc}(p)=0$. In the exponential chart from an orthonormal basis,
  each geodesic through $p$ is the straight radial coordinate line while its
  initial vector remains in the chosen star-shaped exponential domain
  ([[thm-gr-point-normal-and-exponential-coordinate-charts]]). The identities
  are first order at the single point $p$.

- **What it does not give.** The construction asserts nothing about the second
  and higher derivatives of the metric, and therefore nothing about the
  curvature of the model; a chart of this kind is not an isometry and does not
  make any neighborhood of $p$ identical with a region of Minkowski space.
  The remark makes no curvature claim here; the second-order behavior is the
  subject of the curvature material of this track, which is a later page of
  the same category.

- **No global inertial frame, no congruence.** A chart with the normal-form
  identities at one event is not a global label of events by inertial
  coordinates, and the exponential charts at different points are not
  compatible frames. An "observer" in this library is a single future unit
  timelike vector at a point, and a "congruence" is a field of such vectors
  on an open set ([[def-gr-observer-and-rest-space]],
  [[def-gr-observer-congruence-and-adapted-charts]]); a freely falling
  observer is one timelike geodesic, not a global reference frame. Charts
  adapted to a congruence are a different construction from the normal
  coordinates of a geodesic through a point.

- **The physical reading is adopted, not derived.** The statement that an
  ideal freely falling test body or observer, using normal coordinates around
  an event of its own worldline, finds the local form of the metric to be that
  of Minkowski space at first order — and the associated local
  inertial-frame reading of the equivalence principle — depends on the
  adopted clock and free-fall assumptions of
  [[post-gr-ideal-clocks-and-free-fall]]. It is a statement about the model in
  the test-body idealization, not a derivation from the geometry alone and not
  an empirical claim that real experiments cannot detect a gravitational
  field locally. The limitations recorded in the postulate — finite-size and
  tidal couplings of extended bodies, self-force, and nonlocal measurements —
  are precisely what the first-order identities cannot exclude.
