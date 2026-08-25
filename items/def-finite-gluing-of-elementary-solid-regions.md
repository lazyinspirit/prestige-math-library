---
id: def-finite-gluing-of-elementary-solid-regions
kind: definition
title: "Finite gluings of elementary solid regions and their outward boundary presentation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-elementary-solid-region, def-finitely-patched-regular-surface-and-integrals, def-surface-reparametrization-and-orientation, def-metric-interior-closure-boundary, def-admissible-regular-parametrized-surface-patch]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "G. Strang and E. Herman, Calculus Volume 3 (OpenStax), section 6.8"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), section 4.2"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
pipeline_run: null
---

## Definition

A **finite gluing of elementary solid regions** consists of the following supplied data.

1. An integer $N\ge1$ and elementary solid regions $E_1,\ldots,E_N$ with pairwise disjoint interiors whose union is $E$ ([[def-elementary-solid-region]], [[def-metric-interior-closure-boundary]]). Each $E_i$ carries its own three simple descriptions, its own presentation $\Sigma_i$ and its own three sortings.
2. For each $i$, a designation of every patch of $\Sigma_i$ as **internal** or **outer**.
3. An involution without fixed points on the set of all internal patches of all the pieces, under which each internal patch is paired with an internal patch of a different piece that is an orientation-reversing regular reparametrization of it in the sense of [[def-surface-reparametrization-and-orientation]]: for paired patches $(D,\varphi)$ and $(D',\varphi')$ there is a $C^1$ diffeomorphism $h$ between open neighbourhoods of $D'$ and $D$ with $h[D']=D$, $\varphi'=\varphi\circ h$ and $\det Dh<0$.
4. A requirement that the list of all outer patches of all the pieces, taken together, be a compatible finite patch presentation in the sense of [[def-finitely-patched-regular-surface-and-integrals]] whose patch images cover $\partial E$ and are contained in $\partial E$. That list is the **outer boundary presentation** of the gluing, written $\partial E$ where an integral is taken over it.

Each patch is a regular parametrized surface patch of [[def-admissible-regular-parametrized-surface-patch]], and the flux of a continuous field over the outer boundary presentation is the sum of the flux over its patches.

## Remarks

- **The pairing is a condition on parametrizations, not on images.** Clause 3 asks for an orientation-reversing reparametrization, so the two paired patches have the same image and induced normals that are negatives of each other where both are defined. Two patches whose images merely coincide as sets do not satisfy it, and neither do two patches one of whose images is strictly larger: a reparametrization is a bijection between the parameter regions. A face of one piece that meets a smaller face of its neighbour must therefore be subdivided before it can be paired, and the companion examples page shows a case where that is unavoidable.

- **Everything is supplied.** As with an elementary solid region, nothing here is inferred from the set $E$: neither the decomposition, nor the internal-or-outer designation, nor the pairing, nor the fact that the outer patches present $\partial E$. No claim is made that an arbitrary compact solid admits such data.

- **$N=1$ is allowed and carries no internal patch.** Then the involution of clause 3 is the empty map, the outer presentation is the piece's own presentation, and a finite gluing of one piece is the elementary solid region itself. The pieces themselves are indexed by a nonempty finite set: $N\ge1$ is part of clause 1.
