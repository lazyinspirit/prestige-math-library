---
id: rem-two-dimensional-poisson-disc-theory-is-cited-not-repeated
kind: remark
title: Dimension split and the separate Poisson-disc theory
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-green-function-for-a-ball-in-rn, thm-harmonic-functions-are-real-analytic, thm-interior-derivative-estimates-for-harmonic-functions, thm-interior-estimate-for-poisson-equation-with-holder-data, lem-smooth-sphere-data-have-a-harmonic-replacement, thm-poisson-integral-solves-the-disc-dirichlet-problem, thm-poisson-kernel-and-bounded-dirichlet-problem-on-the-half-space, thm-poisson-kernel-for-a-ball-in-rn]
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.2, printed pp. 23–25, derivative estimates and analyticity; §2.6, printed p. 33, fundamental solution"
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: "https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf"
      locator: "§2.8, printed pp. 44–49, ball Green function and image construction"
    - title: "Armin Schikorra, Partial Differential Equations I & II (2025)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§2.4, printed pp. 28–34, and §§8.1–8.3, printed pp. 139–146, local Schauder theory"
---

## Remark

This page splits its statements by dimension, and this remark records where the
split sits so that no item silently overclaims.

**The $n\ge3$ construction.** The Kelvin/image construction
([[thm-green-function-for-a-ball-in-rn]]), the explicit ball kernel
([[thm-poisson-kernel-for-a-ball-in-rn]]) and the half-space kernel with its
bounded Dirichlet problem
([[thm-poisson-kernel-and-bounded-dirichlet-problem-on-the-half-space]]) are
stated for $n\ge3$. The reflection formula for the half-space kernel is the
reflection of the fundamental solution, whose profile is $|z|^{2-n}$ precisely
for $n\ge3$; in the plane the corresponding profile is logarithmic and the
kernel constants change. The bounded uniqueness argument requires its own
planar proof. The statements above do not claim to
cover the planar case.

**The full planar Dirichlet theory is cited; a smooth-data lemma is used.** The
continuous-data disc Dirichlet theorem
([[thm-poisson-integral-solves-the-disc-dirichlet-problem]]) and the full disc
Poisson theory are developed on their own page. The $n=2$ branches of the
interior derivative estimates and real-analyticity theorem also use
[[lem-smooth-sphere-data-have-a-harmonic-replacement]], whose planar case gives
the Poisson representation for smooth circle data after harmonic regularity is
established. This restricted smooth-data result does not reprove the full
continuous-data theorem or its boundary-convergence theorem.

**Results including $n=2$.** The interior derivative estimates
([[thm-interior-derivative-estimates-for-harmonic-functions]]) and the
real-analyticity theorem ([[thm-harmonic-functions-are-real-analytic]]) cover
$n\ge2$; their planar arguments use mean-value regularity and the smooth-data
sphere lemma above. The interior $C^{2,\alpha}$ Poisson estimate and its
gradient corollary ([[thm-interior-estimate-for-poisson-equation-with-holder-data]])
also cover $n\ge2$ and handle the planar case with the logarithmic Newtonian
potential. These arguments use separate formulas in dimension two and
dimensions at least three, without extending the image construction to the
plane.

**What this remark does not say.** This is a statement about the scope of the
items on this page, not a mathematical claim that the $n=2$ kernels fail to
exist. The disc and half-plane kernels exist; they are simply developed
elsewhere and referenced here.
