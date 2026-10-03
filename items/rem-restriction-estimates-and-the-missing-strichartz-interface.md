---
id: rem-restriction-estimates-and-the-missing-strichartz-interface
kind: remark
title: Restriction estimates and the missing Strichartz interface
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- thm-stein-tomas-spherical-restriction-theorem
proved_here: false
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: n/a
external_dependency:
  source_url: https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf
  exact_statement: 'Williams Definition 11.5 and Theorem 11.6: for admissible (p,q) with 2/p+d/q=d/2, p,q>=2, (p,q)!=(2,infinity), p>2, and Schwartz initial data and forcing, the Schrodinger solution satisfies ||u||_{Lp_t Lq_x} <= C(||f||_2+||h||_{Lpprime_t Lqprime_x}). Formula (11.21) is paraboloid extension; this is not the spherical theorem.'
  local_proof_attempt: Not reconstructed here. No PDE page in this run is commissioned to host the dispersive/Strichartz consumer, so the interface is recorded without fabricating a prerequisite or a forward page.
  necessity: Records the declared interface so that later dispersive-equation work has the exact source and scaling relation; the remark is explicitly non-load-bearing in this library.
sources:
  references:
  - title: Mark Williams, Notes on harmonic analysis
    url: https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf
    locator: '§11.4, printed pp.74–75: Definition 11.5, Theorem 11.6, equations (11.18)–(11.21); the local remark records p>2 and Schwartz data.'
---

## Remark

**Recorded orientation, not proved here.** The Schrödinger initial-value problem $\partial_tu+i\Delta u=h$, $u(0)=f$ on $\mathbb R^{1+d}$ uses a paraboloid extension operator, as seen in Williams's formula (11.21); it is not the spherical extension theorem proved on this page. The two arguments share dispersive bounds, Plancherel, $TT^*$ and fractional integration. Williams, Definition 11.5 and Theorem 11.6, calls $(p,q)$ admissible when $2/p+d/q=d/2$, $2\le p,q\le\infty$, excluding $(2,\infty)$; for admissible pairs with $p>2$ and Schwartz data he proves $\|u\|_{L^p_tL^q_x}\le C(\|f\|_2+\|h\|_{L^{p'}_tL^{q'}_x})$. This records that nonendpoint theorem with the same pair for solution and forcing. It does not assert endpoint Strichartz estimates or identify them with spherical restriction.

The comparison is anchored to [[thm-stein-tomas-spherical-restriction-theorem]]. No PDE page is commissioned in this run, and this sourced remark remains a non-load-bearing leaf; it supplies no proof to another item.
