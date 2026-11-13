---
id: rem-se-prior-compact-control
kind: remark
domain: mathematics
title: Prior compact-manifold control under GCC and unique continuation
status: draft
deps:
  - def-se-foundation-control-language
  - math:def-smooth-manifold
  - math:def-compact-space
  - math:def-riemannian-metric-and-riemannian-manifold
  - math:def-levi-civita-connection
  - math:thm-fundamental-theorem-of-riemannian-geometry
  - math:def-geodesic-of-an-affine-connection
  - math:def-riemannian-speed-and-length
  - prop-se-generalized-ray-contract
dependency_roles:
  def-se-foundation-control-language: mathematical-premise
  math:def-smooth-manifold: mathematical-premise
  math:def-compact-space: mathematical-premise
  math:def-riemannian-metric-and-riemannian-manifold: mathematical-premise
  math:def-levi-civita-connection: mathematical-premise
  math:thm-fundamental-theorem-of-riemannian-geometry: mathematical-premise
  math:def-geodesic-of-an-affine-connection: mathematical-premise
  math:def-riemannian-speed-and-length: mathematical-premise
  prop-se-generalized-ray-contract: mathematical-premise
formulation_deps:
  - def-se-foundation-control-language
  - math:def-smooth-manifold
  - math:def-compact-space
  - math:def-riemannian-metric-and-riemannian-manifold
  - math:def-levi-civita-connection
  - math:thm-fundamental-theorem-of-riemannian-geometry
  - math:def-geodesic-of-an-affine-connection
  - math:def-riemannian-speed-and-length
  - prop-se-generalized-ray-contract
argument_deps:
  - math:thm-fundamental-theorem-of-riemannian-geometry
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: Frozen v2 PDF, p. 2, end of §1.2; p. 22, bibliography entries [11],
        [15] and [23].
      statement: The article attributes semi-global internal controllability and
        stabilization on compact boundaryless manifolds under GCC and a unique
        continuation assumption to Dehman, Gérard and Lebeau in dimension two
        and Laurent in dimension three, and points to Capistrano–Filho and Pampu
        for the fractional equation; its bibliography identifies their works by
        the titles recorded in Source notes.
      hypotheses: Evidence only for what the frozen article reports and for its
        bibliography identifications. The individual prior results retain their
        own equations, solution spaces and hypotheses; no theorem from those
        papers is imported here.
      reading_limits: Read the frozen v2 PDF text on PDF p. 2, end of §1.2, and p. 22,
        bibliography entries [11], [15] and [23], directly with PyMuPDF, and
        compared the extracted article text. The three cited prior papers and
        their proofs were not read for this remark; this citation establishes
        attribution only.
dependency_level: 1
---

## Statement

For compact manifolds without boundary, the article reports semi-global internal controllability and stabilization for the nonlinear Schrödinger equation under a geometric control condition and a unique continuation assumption: it attributes the two-dimensional result to Dehman, Gérard and Lebeau [15], and the three-dimensional result to Laurent [23]. It also points to [11] for the fractional Schrödinger equation. These are background attributions, not a theorem asserted here for exterior domains.

## Facts & Assumptions

A smooth manifold without boundary is a topological manifold equipped with a smooth structure, as in [[math:def-smooth-manifold]]. Compactness means that every open cover has a finite subcover, as in [[math:def-compact-space]]. These describe the compact-manifold setting of the comparison; the exterior domain studied in the article is not thereby assumed compact.

In the local terminology of [[def-se-foundation-control-language]], internal control acts through a source in a specified region of the manifold, with any boundary data prescribed independently of the control. In the endpoint language of [[def-se-foundation-control-language]], exact controllability means that each allowed pair of initial and terminal states can be joined by an admissible controlled solution. Semi-global describes a result for arbitrarily prescribed bounded sets of states, with parameters and hypotheses allowed to depend on the chosen bound; it does not mean an unqualified global result with uniform constants. Stabilization concerns decay toward a specified equilibrium under a specified damped or feedback evolution. The cited language defines exponential stabilization when an exponential rate is actually asserted; this remark does not prescribe a decay rate.

For the compact comparison, supply a smooth Riemannian metric $g$ on the Hausdorff second-countable smooth manifold $M$ without boundary, in the sense of [[math:def-riemannian-metric-and-riemannian-manifold]]. Its Levi–Civita connection $\nabla$ is the metric-compatible torsion-free affine connection of [[math:def-levi-civita-connection]]; existence and uniqueness for the supplied metric follow from [[math:thm-fundamental-theorem-of-riemannian-geometry]]. A geodesic is affinely parametrized for this connection: $D_t\gamma'(t)=0$, as in [[math:def-geodesic-of-an-affine-connection]]. Unit speed means $|\gamma'(t)|_g=\sqrt{g_{\gamma(t)}(\gamma'(t),\gamma'(t))}=1$, as in [[math:def-riemannian-speed-and-length]]. Using the boundaryless complete-geodesic convention recorded in the External input of [[prop-se-generalized-ray-contract]], for a specified open control region $\omega\subseteq M$, GCC means that there is a common $T>0$ such that every complete unit-speed geodesic $\gamma:\mathbb R\to M$ satisfies $\gamma(t)\in\omega$ for some $t\in(0,T)$. This uses only that supplier’s boundaryless convention, not its reflected-ray structures for Euclidean domains. In the local terminology of [[def-se-foundation-control-language]], a unique continuation assumption is an additional implication that a solution in a specified class which vanishes on the relevant observation region must vanish throughout the relevant domain. These local explanations do not identify the detailed continuation hypotheses in the cited papers. The precise equations, solution classes, observation intervals and hypotheses belong to the individual results; neither condition is proved by this remark.

## Source notes

The article's end of §1.2 gives these attributions. Its bibliography identifies [15] as Dehman, Gérard and Lebeau, *Stabilization and control for the nonlinear Schrödinger equation on a compact surface*; [23] as Laurent, *Global controllability and stabilization for the nonlinear Schrödinger equation on some compact manifolds of dimension 3*; and [11] as Capistrano–Filho and Pampu, *The fractional Schrödinger equation on compact manifolds: global controllability results*. The original article is cited for its account of prior work, not as a proof of the attributed results. This remark does not independently assert the detailed theorem statements of those references.
