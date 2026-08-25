---
id: lem-internal-faces-cancel-when-elementary-solid-regions-are-glued
kind: lemma
title: "Internal faces cancel and volume integrals add when elementary solid regions are glued"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-gluing-of-elementary-solid-regions, thm-flux-under-surface-reparametrization, lem-integral-additivity-over-a-content-zero-almost-partition, thm-jordan-boundary-criterion, thm-continuous-functions-on-compact-jordan-sets-are-integrable, def-finitely-patched-regular-surface-and-integrals, thm-extreme-value-metric, def-riemann-integral-over-a-jordan-set, thm-heine-borel-rn, def-simple-solid-region-in-a-coordinate-direction, def-metric-interior-closure-boundary, def-null-and-content-zero-in-rn, def-elementary-solid-region, def-surface-reparametrization-and-orientation, def-oriented-unit-normal-and-flux-of-a-surface-patch]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. Strang and E. Herman, Calculus Volume 3 (OpenStax), section 6.8"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
pipeline_run: null
---

## Statement

Let a finite gluing of elementary solid regions be given, with pieces $E_1,\ldots,E_N$, presentations $\Sigma_1,\ldots,\Sigma_N$, union $E$ and outer boundary presentation $\Sigma^{\mathrm{out}}$ ([[def-finite-gluing-of-elementary-solid-regions]]). Then $E$ is compact and Jordan measurable, and the sum of the piece fluxes is the flux over the outer presentation, and the sum of the piece volume integrals is the integral over the union:

$$\sum_{i=1}^N\iint_{\Sigma_i}\langle G,n\rangle=\iint_{\Sigma^{\mathrm{out}}}\langle G,n\rangle\qquad\text{for every continuous vector field }G\text{ on }\partial E\cup\textstyle\bigcup_i\partial E_i,$$

$$\sum_{i=1}^N\int_{E_i}H=\int_EH\qquad\text{for every continuous }H:E\to\mathbb R,$$

both integrals in the second identity existing.

## Facts & Assumptions

**Given:** The finite gluing with its pieces, presentations, internal-or-outer designations and pairing involution, together with the continuous $G$ and the continuous $H:E\to\mathbb R$.

[F1] For a compatible finite patch presentation the oriented flux is the sum of the flux over its patches ([[def-finitely-patched-regular-surface-and-integrals]], [[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

[F2] In a finite gluing the pieces are elementary solid regions with pairwise disjoint interiors whose union is $E$; every patch of every $\Sigma_i$ is designated internal or outer; each internal patch is paired with an internal patch of a different piece that is an orientation-reversing regular reparametrization of it; and the outer patches together form a compatible finite patch presentation of $\partial E$ ([[def-finite-gluing-of-elementary-solid-regions]], [[def-elementary-solid-region]]).

[F3] A regular reparametrization is orientation-reversing when its parameter Jacobian determinant is negative ([[def-surface-reparametrization-and-orientation]]).

[F4] The simple solid region described by a simple description is compact and Jordan measurable ([[def-simple-solid-region-in-a-coordinate-direction]]).

[F5] The boundary of $A$ is $\partial A=\overline A\setminus\operatorname{int}(A)$ ([[def-metric-interior-closure-boundary]]); a set has content zero when it admits finite cube covers of arbitrarily small total volume, and content zero passes to subsets ([[def-null-and-content-zero-in-rn]]).

[F6] Integration over a bounded Jordan measurable set is integration of the zero extension over a bounding rectangle ([[def-riemann-integral-over-a-jordan-set]]).

[L1] An orientation-preserving reparametrization preserves flux and an orientation-reversing reparametrization negates it ([[thm-flux-under-surface-reparametrization]]).

[L2] Let $A$ be bounded Jordan measurable, let $N\ge1$ and let $A_1,\ldots,A_N\subseteq A$ be bounded Jordan sets with pairwise intersections of content zero and with $A\setminus\bigcup_iA_i$ of content zero; if $f$ is bounded on $A$ and integrable over $A$ and over each $A_i$, then $\int_Af=\sum_{i=1}^N\int_{A_i}f$ ([[lem-integral-additivity-over-a-content-zero-almost-partition]]).

[L3] A metric-bounded set is Jordan measurable if and only if its boundary has content zero ([[thm-jordan-boundary-criterion]]).

[L4] Every continuous real function on a compact Jordan measurable set is Riemann integrable over it ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]).

[L5] A continuous real function on a nonempty compact metric space has bounded image ([[thm-extreme-value-metric]]).

[L6] A subset of $\mathbb R^m$ is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the sum $\sum_{i=1}^N\iint_{\Sigma_i}\langle G,n\rangle$ is the sum of the flux of $G$ over every patch of every $\Sigma_i$, a finite list of real numbers. By [F2] each entry of that list is designated internal or outer. [given, F1, F2]

1.2 Each $E_i$ is compact and Jordan measurable by [F4], so $E=\bigcup_iE_i$ is closed and bounded, hence compact by [L6], and each $\partial E_i$ has content zero by [L3]. If $p\in\partial E$ then $p\in E$, so $p\in E_i$ for some $i$, and $p$ cannot lie in $E_i^\circ$, since $E_i\subseteq E$ would then put $p$ in $E^\circ$; so $p\in\partial E_i$ and $\partial E\subseteq\bigcup_i\partial E_i$. Concatenating the $N$ finite covers shows that union has content zero, so $E$ is Jordan measurable by [L3] and [F5]. [given, F4, F5, L3, L6]

2.1 Let $(D,\varphi)$ and $(D',\varphi')$ be a paired internal pair, so by [F2] and [F3] there is a $C^1$ diffeomorphism $h$ between neighbourhoods of $D'$ and $D$ with $h[D']=D$, $\varphi'=\varphi\circ h$ and $\det Dh<0$; that is an orientation-reversing regular reparametrization. So [L1] gives that the flux of $G$ over $(D',\varphi')$ is the negative of its flux over $(D,\varphi)$, and the two contributions to the sum of step 1.1 add to $0$. The pairing of [F2] is an involution without fixed points, so the internal entries of the list are exhausted by such pairs. [given, F2, F3, L1]

2.2 By [L5] the continuous $H$ is bounded on the nonempty compact $E$, and by [L4] it is integrable over $E$ and over each compact Jordan $E_i$. If $i\ne j$ and $p\in E_i\cap E_j$ then $p$ lies in at most one of the two interiors, so $E_i\cap E_j\subseteq\partial E_i\cup\partial E_j$, which has content zero by step 1.2 and [F5]; and $E\setminus\bigcup_iE_i$ is empty, hence of content zero. So [L2] applies with $A=E$ and $A_i=E_i$ and gives $\sum_i\int_{E_i}H=\int_EH$, the integrals being those of [F6]. [step 1.2, F5, F6, L2, L4, L5]

3.1 Deleting the cancelling internal pairs of step 2.1 from the finite sum of step 1.1 leaves exactly the outer entries, whose sum is $\iint_{\Sigma^{\mathrm{out}}}\langle G,n\rangle$ by [F1] and [F2]. This is a rearrangement of finitely many reals, so it needs no connectedness of $E$ or of its boundary; for $N=1$ there is no internal patch and the two lists coincide. [step 1.1, step 2.1, F1, F2]

4.1 Steps 3.1 and 2.2 are the two asserted identities, and step 1.2 is the assertion that $E$ is compact and Jordan measurable. [step 3.1, step 2.2, step 1.2] ∎

## Remarks

- **The cancellation is between parametrizations, not between images.** [L1] compares the flux of two patches related by a reparametrization; two patches with the same image but no such relation are not covered, and neither are two patches whose images overlap only partly. That is why the gluing data asks for the reparametrization explicitly, and why a face meeting a smaller neighbouring face has to be cut first.

- **The sign condition is pointwise and needs no connectedness argument.** The gluing data requires $\det Dh<0$ everywhere, so the reparametrization is orientation-reversing in the sense of [F3] at every parameter point. [[cor-regular-surface-reparametrization-has-constant-orientation-sign]] says that on a connected parameter region the sign cannot change, so the requirement costs nothing beyond one sign check per pair.
