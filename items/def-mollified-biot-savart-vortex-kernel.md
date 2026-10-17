---
id: def-mollified-biot-savart-vortex-kernel
kind: definition
title: Smooth mollified Biot-Savart kernel
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-euclidean-inner-product, def-mollifier-family-generated-by-a-unit-mass-smooth-bump]
justified_by: [lem-mollified-biot-savart-kernel-is-smooth-globally-lipschitz]
proof_strategy: direct
axiom_use: No choice principle is used in the definition.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: J. Liu and X. Xin, Convergence of Vortex Methods for Weak Solutions to the 2-D Euler Equations with Vortex Sheet Data
      url: https://sites.math.duke.edu/~jliu/pdf/Liu_Xin_CPAM_1995.pdf
    - title: Gregory R. Baker and Lan D. Pham, A Comparison of Blob Methods for Vortex Sheet Roll Up
      url: https://people.math.osu.edu/baker.27/blobs.pdf
---

## Definition

In this definition only, use the local one-based coordinate names
$z_1:=z(0)$ and $z_2:=z(1)$ for $z\in\mathbb R^2$, whose coordinate domain
is $\{0,1\}$ as in [[def-euclidean-inner-product]]. Let
$z^\perp=(-z_2,z_1)$ and
$$G(z)=\frac1{2\pi}\log|z|,\qquad K(z)=\nabla^\perp G(z)=\frac{z^\perp}{2\pi|z|^2}\quad(z\ne0).$$
The locally integrable value assigned to $K(0)$ is immaterial. Fix a radial, nonnegative smooth bump $\rho$ supported in the unit ball with $\int\rho=1$; its scaled family is the mollifier family of [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]]. Put $\rho_\varepsilon(z)=\varepsilon^{-2}\rho(z/\varepsilon)$, $G_\varepsilon=G*\rho_\varepsilon$, and
$$K_\varepsilon=K*\rho_\varepsilon.$$
The kernel is a regularized interaction; its smoothness and global Lipschitz property are proved in a separate lemma. It does not define the singular physical interaction at a collision.
