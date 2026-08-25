---
id: rem-the-reach-of-the-classical-divergence-and-stokes-theorems
kind: remark
title: "What the classical divergence and Stokes theorems here do and do not cover"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions, thm-the-classical-stokes-theorem-for-a-c2-surface-patch, rem-greens-theorem-jordan-domain-limitation, def-finitely-patched-regular-surface-and-integrals, def-finite-gluing-of-elementary-solid-regions, def-the-induced-boundary-chain-of-a-c2-surface-patch]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), ch. 4"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
pipeline_run: null
---

**The decomposition is a hypothesis, not a conclusion.** [[thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions]] applies to a solid supplied with its three simple descriptions per piece, its boundary presentation, its internal-or-outer designation and its pairing of internal patches ([[def-finite-gluing-of-elementary-solid-regions]]). It does not say that a compact set with a piecewise smooth boundary admits such data, and it does not construct the interior of a given closed surface. The same convention governs [[thm-the-classical-stokes-theorem-for-a-c2-surface-patch]], whose hypothesis is that the *parameter region* be a finite elementary Green region with a supplied decomposition; the plane case is stated the same way, and [[rem-greens-theorem-jordan-domain-limitation]] records the corresponding limitation there.

**What that excludes.** Two kinds of statement are outside the reach of these theorems as proved.

- A theorem of the form "every closed surface bounds a solid to which the divergence theorem applies" would need a separation result for surfaces in space, which is not among this page's declared prerequisites. Nothing here proves that a given closed surface bounds anything.
- A theorem of the form "the flux and the volume integral do not depend on the presentation" would need a comparison of two different presentations of the same boundary. Flux over a finite patch presentation is defined as a sum over the supplied list ([[def-finitely-patched-regular-surface-and-integrals]]), and no independence-of-presentation result is asserted or used.

**The surface side is a single patch.** [[thm-the-classical-stokes-theorem-for-a-c2-surface-patch]] is a statement about one $C^2$ patch and the boundary chain its parametrization induces ([[def-the-induced-boundary-chain-of-a-c2-surface-patch]]). It says nothing about a surface presented by several patches whose induced boundary arcs are meant to cancel in pairs: that pairing is exactly the gluing data the divergence theorem receives explicitly, and no analogue of it is supplied for surfaces here.

**No differential form appears among this page's declared prerequisites.** The general statement that unifies the gradient theorem, Green's theorem, the divergence theorem and the classical Stokes theorem is an identity between the integral of a differential form over the boundary of a chain and the integral of its exterior derivative over the chain. No differential form, no exterior derivative and no manifold is available among the prerequisites this page declares, so no such unification is stated or used; every theorem above is proved from Jordan content, Fubini, change of variables, line integrals, patch flux and Green's theorem, and each is stated in the vector-field language those tools supply.

**What is genuinely established.** The divergence theorem holds for every finite gluing of elementary solid regions and every $C^1$ field on an open set containing it, and the classical Stokes theorem holds for every $C^2$ patch over a finite elementary Green region and every $C^1$ field on an open set containing the patch image. Those classes are wide enough to contain boxes, balls, right circular cylinders and finite gluings of boxes, and wide enough for the flat disc, the hemisphere and the lateral surface of a cylinder on the Stokes side; the companion page carries each of those as a worked case.
