---
id: rem-weak-laplacian-comparison-at-the-cut-locus
kind: remark
title: Weak laplacian comparison at the cut locus
status: draft
origin: pipeline
deps:
  - thm-laplacian-comparison-for-distance-under-a-ricci-lower-bound
  - thm-distance-from-p-is-smooth-off-p-and-the-cut-locus
  - def-cut-point-and-cut-locus-of-a-point
  - def-laplace-beltrami-operator-as-trace-of-the-hessian
  - def-countable-choice
  - cor-polar-integration-may-discard-the-cut-locus
  - thm-cut-locus-of-a-point-has-riemannian-volume-zero
proved_here: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Xianzhe Dai and Guofang Wei, Comparison Geometry for Ricci Curvature"
      url: https://web.math.ucsb.edu/~dai/Ricci-book.pdf
      locator: "§1.2, equation (1.2.10), printed p.9; §1.3, Definitions 1.3.2–1.3.5, Lemma 1.3.6 and Theorem 1.3.8, printed pp.10–12: barriers, viscosity/distribution equivalence and global weak comparison"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§§2–4, pp.6–16: Riccati and distance comparison, with the cut locus treated by support functions"
external_dependency:
  source_url: "https://web.math.ucsb.edu/~dai/Ricci-book.pdf"
  exact_statement: "Dai–Wei §1.3, printed pp.10–12, defines upper barriers and weak Laplacian inequalities. A barrier upper bound implies the viscosity upper bound; for continuous functions and right-hand side it cites equivalence with the distributional inequality. Lemma 1.3.6 constructs the distance upper support epsilon+d(x,gamma(epsilon)) along a unit-speed minimizer, with 0<epsilon<d(p,q). Theorem 1.3.8 records weak radial Laplacian comparison under the Ricci lower bound, on the model-radius domain."
  local_proof_attempt: "This item records the cut-locus measure-zero fact but does not develop the weak Laplacian pairing; Dai §1.3 supplies the cited weak formulations and upper-barrier construction."
  necessity: "The weak form is the standard companion of the pointwise comparison, and the overlap of comparison theory with distributional methods is recorded here as orientation; no item of either page uses this remark as a supplier."
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ as inherited through
the distance, cut-locus and Laplace–Beltrami suppliers. **Recorded
orientation, not proved here.** Let $(M,g)$ be a complete, connected,
boundaryless Riemannian manifold of dimension $n\ge2$ with
$\operatorname{Ric}\ge(n-1)k\,g$, let $p\in M$, let
$r:=d_g(p,\cdot)$ be the distance from $p$ and let
$\operatorname{Cut}(p)$ be the cut locus of $p$
([[def-cut-point-and-cut-locus-of-a-point]]). The pointwise Laplace–Beltrami comparison of
[[thm-laplacian-comparison-for-distance-under-a-ricci-lower-bound]] holds at any point $q$ off $p$ and its cut locus, with the additional restriction
$r(q)<\pi/\sqrt k$ when $k>0$ imposed by the model comparison domain. Distance
is smooth at every point off $p$ and its cut locus, independently of that
model-radius restriction; its Hessian and Laplacian in the sense of
[[def-laplace-beltrami-operator-as-trace-of-the-hessian]] are defined there
([[thm-distance-from-p-is-smooth-off-p-and-the-cut-locus]]); the estimate
reads
$$\Delta_gr(q)\le(n-1)\operatorname{ct}_k\bigl(r(q)\bigr).$$

The following boundary facts are recorded for orientation, with their exact
hypotheses, and are **not** established, used or reproduced in this library:

1. **No pointwise statement at the cut locus.** At a cut point $q$ the distance
   function need not be differentiable and the Hessian need not exist, so the
   inequality above has no pointwise meaning there. Any extension must relax
   the notion of Laplacian.
2. **Barrier and support-function formulations.** The standard extensions
   compare in the barrier sense at $q\ne p$ with
   $r(q)<\pi/\sqrt k$ when $k>0$: for every $\varepsilon>0$ there is a smooth
   function $\varphi_\varepsilon$ on a neighbourhood of $q$ with
   $\varphi_\varepsilon\ge r$, $\varphi_\varepsilon(q)=r(q)$ and
   $\Delta_g\varphi_\varepsilon(q)\le(n-1)\operatorname{ct}_k(r(q))+\varepsilon$.
   For a unit-speed minimizer $\gamma:[0,r(q)]\to M$ from $p$ to $q$,
   the standard supports are $r_{q,\eta}(x)=\eta+d(x,\gamma(\eta))$ with
   $0<\eta<r(q)$ and $\eta\downarrow0$. The small-shift restriction is
   essential; at $\eta=r(q)$ the shifted distance is based at $q$ and is
   not smooth there. Dai–Wei §1.3 gives the passage from barriers to
   viscosity inequalities and cites viscosity/distribution equivalence.
   Tangent-cone analysis of the cut locus is not a prerequisite of this route.

3. **Required extra setup.** The barrier formulation needs smooth upper
   supports at nonsmooth distance points. The distributional formulation
   needs the weak Laplacian pairing
   $\int_\Omega r\Delta_g\psi\,d\operatorname{vol}_g\le
   \int_\Omega (n-1)\operatorname{ct}_k(r)\psi\,d\operatorname{vol}_g$
   for every nonnegative $\psi\in C_c^\infty(\Omega)$, on
   $\Omega\subset M\setminus\{p\}$ within the model-radius domain, and
   the elliptic equivalence theorem just cited. The cut locus having measure
   zero alone does not prove this inequality. These tools are cited above but not developed
   in this pair.

## Recorded orientation

This remark is explicitly **non-load-bearing**: it is a boundary marker, not a
proof supplier, and it must not be cited by any item of this pair or elsewhere
as an input.

- The pointwise comparison actually proved in this pair is exactly the smooth
  statement above, with $q$ off $p$ and off the cut locus.
- The rate of volume growth beyond the cut locus is handled in this pair by
  polar integration, which may discard the null cut locus
  ([[cor-polar-integration-may-discard-the-cut-locus]]), not by any extension
  of the pointwise estimate.
- Cheng's maximal-diameter rigidity and the Toponogov hinge and triangle
  comparisons need upper comparison statements at points where a minimizing
  segment meets the cut locus; their proofs obtain the required upper support
  tests locally from their own routes — the ball-packing equality argument with
  cut-time continuity in the first case, and the local Alexandrov support
  inequality with first variation in the second — and none of them cites this
  remark. No item of the pair lists
  `rem-weak-laplacian-comparison-at-the-cut-locus` among its dependencies, and
  no claim about the Laplacian of $r$ at $\operatorname{Cut}(p)$ is made
  anywhere in the pair. The measure-theoretic statement
  $\operatorname{vol}(\operatorname{Cut}(p))=0$
  ([[thm-cut-locus-of-a-point-has-riemannian-volume-zero]]) is a separate
  result and is used only there.
