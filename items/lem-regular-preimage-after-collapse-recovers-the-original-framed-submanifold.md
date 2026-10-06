---
id: lem-regular-preimage-after-collapse-recovers-the-original-framed-submanifold
kind: lemma
title: "The regular preimage of the collapse recovers the original framed submanifold"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 4
deps:
  - def-pontryagin-thom-map-of-a-framed-submanifold
  - def-framed-regular-preimage-of-a-map-to-a-sphere
  - prop-a-framing-identifies-the-thom-target-with-a-sphere-smash-product
  - def-pontryagin-thom-collapse-of-an-embedded-submanifold
  - lem-changing-framed-tube-data-changes-the-pontryagin-thom-map-by-based-homotopy
  - def-framing-of-a-normal-bundle
  - def-orientation-of-a-finite-dimensional-real-vector-space
  - lem-collapse-map-is-continuous-and-smooth-away-from-the-basepoint
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "John Milnor, Topology from the Differentiable Viewpoint"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "Theorem C and its proof: $\\pi^{-1}(0)=N$ with the given framing, printed pp.46-48"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "(2.34) and the constructed inverse map, printed pp.21 and 27-28"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Pontryagin-Thom construction 6.8, electronic pp.111-112"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(N,\varphi)$ be a closed framed codimension-$k$ submanifold of a closed smooth $X$, with $k\ge1$. For the normalized smooth Pontryagin–Thom representative $f$ of [[def-pontryagin-thom-map-of-a-framed-submanifold]], its centre $y_0$ is regular, $f^{-1}(y_0)=N$, and the basis $b_0$ fixed there induces exactly $\varphi$. Thus the framed regular preimage is $(N,\varphi)$ on the nose. Arbitrary unnormalized collapses represent the same homotopy class but need not induce this literal framing.

## Facts & Assumptions

**Given:** $(N,\varphi)$, a compatible tube $\Phi$ inducing the identity on the normal quotient, and the normalized smooth representative $f$.

[F1] With $u=\varphi_s(v)$, the target coordinate of $f(\Phi(s,v))$ is $u/a(|u|^2)$ for $|u|<r$, with $a=1$ near zero and positive before the cutoff; elsewhere the value is $\infty$ ([[def-pontryagin-thom-map-of-a-framed-submanifold]]).

[F2] A compatible chart fixes $N$ and induces the identity on its normal quotient ([[def-pontryagin-thom-collapse-of-an-embedded-submanifold]]). The preimage framing is the differential on that quotient followed by the coordinate isomorphism determined by the target basis ([[def-framed-regular-preimage-of-a-map-to-a-sphere]]).

## Proof

1.1 Since $\varphi_s$ is invertible and $a$ is positive on the finite-value region, $u/a(|u|^2)=0$ precisely when $v=0$. The remaining points map to $\infty\ne y_0$. Hence $f^{-1}(y_0)=N$. [F1, given, algebra]

2.1 Near $v=0$ the target coordinate is exactly $\varphi_s(v)$. Its vertical derivative is $\varphi_s$, and its derivative on $T_sN$ is zero. Compatibility of the tube identifies the vertical quotient with $\nu(N)_s$ by the identity, so the normal derivative of $f$ in the $b_0$ coordinates is exactly $\varphi_s$. It is surjective, proving regularity and $f_*b_0=\varphi$. [F1, F2, step 1.1, algebra] ∎
