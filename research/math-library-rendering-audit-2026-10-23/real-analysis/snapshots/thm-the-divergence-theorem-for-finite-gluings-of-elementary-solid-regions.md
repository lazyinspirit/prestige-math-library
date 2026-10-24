---
id: thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions
kind: theorem
title: "The divergence theorem for finite gluings of elementary solid regions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-divergence-theorem-for-an-elementary-solid-region, lem-internal-faces-cancel-when-elementary-solid-regions-are-glued, def-finite-gluing-of-elementary-solid-regions, def-divergence-and-curl-of-a-c1-vector-field, def-finitely-patched-regular-surface-and-integrals, def-euclidean-inner-product]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), Theorem 4.2.2"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
    - title: "G. Strang and E. Herman, Calculus Volume 3 (OpenStax), Theorem 6.20"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
pipeline_run: null
---

## Statement

Let a finite gluing of elementary solid regions be given, with pieces $E_1,\ldots,E_N$, union $E$ and outer boundary presentation $\Sigma^{\mathrm{out}}$ ([[def-finite-gluing-of-elementary-solid-regions]]), and let $F$ be a $C^1$ vector field on an open set containing $E$. Then

$$\iiint_E\operatorname{div}F=\iint_{\partial E}\langle F,n\rangle,$$

the right-hand side being the flux of $F$ over $\Sigma^{\mathrm{out}}$.

The decomposition into pieces, the internal-or-outer designation of the patches and the pairing of the internal patches are hypotheses supplied with the gluing; nothing is asserted about a solid presented without them.

## Facts & Assumptions

**Given:** The finite gluing with its pieces $E_1,\ldots,E_N$, their presentations $\Sigma_i$, the internal-or-outer designations, the pairing involution, the union $E$, the outer presentation $\Sigma^{\mathrm{out}}$, and the $C^1$ field $F$ on an open $O\supseteq E$.

[F1] In a finite gluing the pieces are elementary solid regions with pairwise disjoint interiors whose union is $E$, and the outer patches together form a compatible finite patch presentation of $\partial E$ ([[def-finite-gluing-of-elementary-solid-regions]]).

[F2] The divergence of a $C^1$ field $F$ on an open subset of $\mathbb R^n$ is $\operatorname{div}F=\sum_{i<n}\partial_iF_i$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F3] For a compatible finite patch presentation the oriented flux is the sum of the flux over its patches ([[def-finitely-patched-regular-surface-and-integrals]]), and $\langle x,y\rangle=\sum_{i<m}x_iy_i$ ([[def-euclidean-inner-product]]).

[L1] For an elementary solid region $E'$ with presentation $\Sigma'$ and a $C^1$ field $F$ on an open set containing $E'$, $\iiint_{E'}\operatorname{div}F=\iint_{\Sigma'}\langle F,n\rangle$ ([[thm-the-divergence-theorem-for-an-elementary-solid-region]]).

[L2] For a finite gluing, $E$ is compact and Jordan measurable; for a continuous vector field on the union of the piece boundaries, the sum of the piece fluxes is the flux over the outer presentation; and for a continuous scalar function on $E$, the sum of the piece volume integrals is the integral over the union ([[lem-internal-faces-cancel-when-elementary-solid-regions-are-glued]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] each $E_i$ is an elementary solid region contained in $E$, so $O$ is an open set containing $E_i$ and $F$ is $C^1$ on it; hence [L1] applies to each piece and gives $\iiint_{E_i}\operatorname{div}F=\iint_{\Sigma_i}\langle F,n\rangle$ for $i=1,\ldots,N$. [given, F1, L1]

1.2 The function $\operatorname{div}F$ is continuous on $O$ by [F2], since a $C^1$ field has continuous first partial derivatives, and in particular continuous on $E$. [given, F2]

2.1 Summing the $N$ identities of step 1.1 over $i$ and applying [L2] to each side — the volume clause with $H=\operatorname{div}F$, continuous on $E$ by step 1.2, and the flux clause with $G=F$, continuous on $\partial E$ and on every $\partial E_i$ — turns the left sum into $\iiint_E\operatorname{div}F$ and the right sum into $\iint_{\Sigma^{\mathrm{out}}}\langle F,n\rangle$, which by [F1] and [F3] is the flux over the outer boundary presentation of $E$. [step 1.1, step 1.2, F1, F3, L2]

3.1 Step 2.1 is the asserted identity. The field is required to be $C^1$ on an open set containing the whole union, because step 1.1 applies the piecewise identity with that same field on each piece and step 2.1 integrates $\operatorname{div}F$ over $E$. [step 2.1] ∎

## Remarks

- **What the gluing clause buys.** A solid need not be simple in every coordinate direction: a U-shaped prism has sections in one direction that are unions of two disjoint intervals, so it admits no simple description there, and yet it is a gluing of three boxes. The companion examples page carries that computation.

- **No connectedness is used.** The pieces need not touch and the boundary need not be connected: step 2.1 rearranges finitely many real numbers and integrates over a finite union.
